import { Node } from "ts-morph";
import { resolveTrace } from "./trace-engine.mjs";

export function traceValue(node, options = {}) {
  if (!node) {
    return "";
  }
  if (Node.isStringLiteral(node) || Node.isNoSubstitutionTemplateLiteral(node)) {
    return node.getLiteralText();
  }
  if (Node.isIdentifier(node)) {
    return traceIdentifier(node, options);
  }
  if (Node.isTemplateExpression(node)) {
    return traceTemplate(node, options);
  }
  if (Node.isBinaryExpression(node) && node.getOperatorToken().getText() === "+") {
    return traceValue(node.getLeft(), options) + traceValue(node.getRight(), options);
  }
  if (Node.isPropertyAccessExpression(node)) {
    return tracePropertyAccess(node, options);
  }
  if (Node.isCallExpression(node)) {
    const traced = resolveTrace(node, options);
    return traced !== "" ? traced : `{${node.getText()}}`;
  }
  return node.getText() ? `{${node.getText()}}` : "";
}

export function referenceValue(node) {
  if (!node) {
    return "";
  }
  if (Node.isIdentifier(node) || Node.isPropertyAccessExpression(node)) {
    return node.getText();
  }
  if (Node.isCallExpression(node)) {
    return node.getExpression().getText();
  }
  if (Node.isArrowFunction(node)) {
    const body = node.getBody();
    if (Node.isCallExpression(body)) {
      return body.getExpression().getText();
    }
  }
  return `{${node.getText()}}`;
}

function traceIdentifier(node, options) {
  const declaration = node.getDefinitions()[0]?.getDeclarationNode();
  if (declaration && Node.isVariableDeclaration(declaration)) {
    return traceValue(declaration.getInitializer(), options);
  }
  return `{${node.getText()}}`;
}

function traceTemplate(node, options) {
  let out = node.getHead().getLiteralText();
  for (const span of node.getTemplateSpans()) {
    out += traceValue(span.getExpression(), options);
    out += span.getLiteral().getLiteralText();
  }
  return out;
}

function tracePropertyAccess(node, options) {
  const expression = node.getExpression();
  const name = node.getName();
  if (!Node.isIdentifier(expression)) {
    return `{${node.getText()}}`;
  }
  const declaration = expression.getDefinitions()[0]?.getDeclarationNode();
  if (!declaration || !Node.isVariableDeclaration(declaration)) {
    return `{${node.getText()}}`;
  }
  const initializer = declaration.getInitializer();
  if (!initializer || !Node.isObjectLiteralExpression(initializer)) {
    return `{${node.getText()}}`;
  }
  for (const property of initializer.getProperties()) {
    if (Node.isPropertyAssignment(property) && property.getName() === name) {
      return traceValue(property.getInitializer(), options);
    }
  }
  return `{${node.getText()}}`;
}
