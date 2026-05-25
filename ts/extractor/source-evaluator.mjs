import { Node, SyntaxKind } from "ts-morph";
import { callName, callOwner } from "./find-executor.mjs";
import { referenceValue, traceValue } from "./value-tracer.mjs";

export function evaluateLets(rule, anchor, options = {}) {
  const values = {};
  for (const [name, sources] of Object.entries(rule.lets)) {
    for (const source of sources) {
      const value = evaluateSource(source, anchor, options);
      if (value !== "") {
        values[name] = value;
        break;
      }
    }
    if (!Object.hasOwn(values, name)) {
      values[name] = "";
    }
  }
  return values;
}

export function buildFields(rule, values) {
  const fields = {};
  for (const [name, value] of Object.entries(rule.build)) {
    fields[name] = typeof value === "object"
      ? Object.hasOwn(values, value.ref) ? values[value.ref] : ""
      : value;
  }
  return fields;
}

export function evaluateSource(source, anchor, options = {}) {
  if ((source.element === "children" || source.element === "jsx") && anchor.kind === "jsx") {
    return takeJsxValue(anchor.node, source.take, options);
  }
  if (source.element === "prop" && anchor.kind === "jsx") {
    return takePropValue(jsxAttribute(anchor.node, source.name), source.take, options);
  }
  if (source.element === "argument" && anchor.kind === "call") {
    return takeArgumentValue(anchor.node.getArguments()[source.index], source.take, options);
  }
  if (source.element === "call" && anchor.kind === "call") {
    return takeCallValue(anchor.node, source.take);
  }
  if (source.element === "argument" && anchor.kind === "assignment") {
    return takeAssignmentValue(anchor.node, source.take, options);
  }
  if (source.element === "return" && anchor.kind === "function") {
    return takeReturnValue(anchor.node, source.take, options);
  }
  if (source.element === "return" && anchor.kind === "return") {
    return takeReturnStatementValue(anchor.node, source.take, options);
  }
  if (source.element === "method" && anchor.kind === "method") {
    return takeMethodValue(anchor.node, source.take);
  }
  if (source.element === "field" && anchor.kind === "field") {
    return takeFieldValue(anchor.node, source.take, options);
  }
  if (source.element === "parameter" && anchor.kind === "parameter") {
    return takeParameterValue(anchor.node, source.take);
  }
  if (source.element === "assignment" && anchor.kind === "assignment") {
    return takeAssignmentValue(anchor.node, source.take, options);
  }
  if (source.element === "variable" && anchor.kind === "variable") {
    return takeVariableValue(anchor.node, source.take, options);
  }
  if (source.element === "import" && anchor.kind === "import") {
    return takeImportValue(anchor.node, source.take);
  }
  if (source.element === "class" && anchor.kind === "class") {
    return takeClassValue(anchor.node, source.take);
  }
  return "";
}

function takeJsxValue(node, take, options) {
  if (take === "name") {
    return jsxTagName(node);
  }
  if (take === "raw") {
    return node.getText();
  }
  if (take === "text" || take === "value") {
    if (!Node.isJsxElement(node)) {
      return "";
    }
    return node.getJsxChildren()
      .map((child) => {
        if (Node.isJsxText(child)) {
          return child.getText();
        }
        if (Node.isJsxExpression(child) && child.getExpression()) {
          return traceValue(child.getExpression(), options);
        }
        return "";
      })
      .join("")
      .replace(/\s+/g, " ")
      .trim();
  }
  return "";
}

function takePropValue(attribute, take, options) {
  if (!attribute) {
    return "";
  }
  if (take === "name") {
    return jsxAttributeName(attribute);
  }
  if (take === "raw") {
    return attribute.getText();
  }
  const initializer = attribute.getInitializer();
  if (!initializer) {
    return "";
  }
  if (Node.isStringLiteral(initializer)) {
    return initializer.getLiteralText();
  }
  if (Node.isJsxExpression(initializer)) {
    const expression = initializer.getExpression();
    return take === "reference" ? referenceValue(expression) : traceValue(expression, options);
  }
  return initializer.getText();
}

function takeArgumentValue(argument, take, options) {
  if (!argument) {
    return "";
  }
  if (take === "raw" || take === "name") {
    return argument.getText();
  }
  if (take === "value") {
    return traceValue(argument, options);
  }
  return "";
}

function takeCallValue(node, take) {
  if (take === "name") {
    return callName(node);
  }
  if (take === "owner") {
    return callOwner(node);
  }
  if (take === "raw") {
    return node.getText();
  }
  if (take === "method") {
    const name = callName(node);
    return ["get", "post", "put", "patch", "delete"].includes(name.toLowerCase()) ? name.toUpperCase() : name;
  }
  return "";
}

function takeMethodValue(node, take) {
  if (take === "name") {
    return typeof node.getName === "function" ? node.getName() ?? "" : "";
  }
  if (take === "raw") {
    return node.getText();
  }
  return "";
}

function takeFieldValue(node, take, options) {
  if (take === "name") {
    return node.getName();
  }
  if (take === "type") {
    return node.getTypeNode()?.getText() ?? "";
  }
  if (take === "raw") {
    return node.getText();
  }
  if (take === "value") {
    return traceValue(node.getInitializer?.(), options);
  }
  return "";
}

function takeParameterValue(node, take) {
  if (take === "name") {
    return node.getName();
  }
  if (take === "type") {
    return node.getTypeNode()?.getText() ?? "";
  }
  if (take === "raw") {
    return node.getText();
  }
  return "";
}

function takeAssignmentValue(node, take, options) {
  if (take === "name") {
    const left = node.getLeft();
    return Node.isPropertyAccessExpression(left) ? left.getName() : left.getText();
  }
  if (take === "raw") {
    return node.getText();
  }
  if (take === "value") {
    return traceValue(node.getRight(), options);
  }
  return "";
}

function takeReturnValue(node, take, options) {
  const expression = firstReturnExpression(node);
  if (!expression) {
    return "";
  }
  if (take === "raw") {
    return expression.getText();
  }
  if (take === "value") {
    return traceValue(expression, options);
  }
  return "";
}

function takeReturnStatementValue(node, take, options) {
  const expression = node.getExpression();
  if (!expression) {
    return "";
  }
  if (take === "raw") {
    return expression.getText();
  }
  if (take === "value") {
    return traceValue(expression, options);
  }
  return "";
}

function takeVariableValue(node, take, options) {
  if (take === "name") {
    return node.getName();
  }
  if (take === "raw") {
    return node.getText();
  }
  if (take === "value") {
    return traceValue(node.getInitializer(), options);
  }
  return "";
}

function takeImportValue(node, take) {
  if (take === "module" || take === "value") {
    return node.getModuleSpecifierValue();
  }
  if (take === "default") {
    return node.getDefaultImport()?.getText() ?? "";
  }
  if (take === "namespace") {
    return node.getNamespaceImport()?.getText() ?? "";
  }
  if (take === "named") {
    return node.getNamedImports().map((namedImport) => namedImport.getName()).join(",");
  }
  if (take === "raw") {
    return node.getText();
  }
  return "";
}

function takeClassValue(node, take) {
  if (take === "name" || take === "value") {
    return node.getName() ?? "";
  }
  if (take === "extends") {
    return node.getExtends()?.getExpression().getText() ?? "";
  }
  if (take === "raw") {
    return node.getText();
  }
  return "";
}

export function jsxAttribute(node, name) {
  const attributes = Node.isJsxElement(node) ? node.getOpeningElement().getAttributes() : node.getAttributes();
  return attributes.find((attribute) => Node.isJsxAttribute(attribute) && jsxAttributeName(attribute) === name);
}

function jsxAttributeName(attribute) {
  return attribute.getNameNode().getText();
}

export function jsxTagName(node) {
  return Node.isJsxElement(node)
    ? node.getOpeningElement().getTagNameNode().getText()
    : node.getTagNameNode().getText();
}

function firstReturnExpression(node) {
  if (Node.isArrowFunction(node) && !Node.isBlock(node.getBody())) {
    return node.getBody();
  }
  return node.getDescendantsOfKind(SyntaxKind.ReturnStatement)[0]?.getExpression();
}
