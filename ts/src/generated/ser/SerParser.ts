
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { SerListener } from "./SerListener.js";
import { SerVisitor } from "./SerVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class SerParser extends antlr.Parser {
    public static readonly RULE = 1;
    public static readonly TRACE = 2;
    public static readonly ENDPOINT = 3;
    public static readonly FACT = 4;
    public static readonly FIND = 5;
    public static readonly WITH = 6;
    public static readonly LET = 7;
    public static readonly FROM = 8;
    public static readonly ON = 9;
    public static readonly TAKE = 10;
    public static readonly DEFAULT = 11;
    public static readonly MAP = 12;
    public static readonly BUILD = 13;
    public static readonly EXTERNAL = 14;
    public static readonly WHEN = 15;
    public static readonly KEY = 16;
    public static readonly RESOLVE = 17;
    public static readonly ANNOTATION = 18;
    public static readonly DECORATOR = 19;
    public static readonly ARGUMENT = 20;
    public static readonly METHOD = 21;
    public static readonly CLASS = 22;
    public static readonly FIELD = 23;
    public static readonly CALL = 24;
    public static readonly PARAMETER = 25;
    public static readonly RETURN = 26;
    public static readonly ASSIGNMENT = 27;
    public static readonly NEW = 28;
    public static readonly LITERAL = 29;
    public static readonly NAME = 30;
    public static readonly VALUE = 31;
    public static readonly RAW = 32;
    public static readonly TYPE = 33;
    public static readonly OWNER = 34;
    public static readonly SIGNATURE = 35;
    public static readonly ATTR = 36;
    public static readonly CONCAT = 37;
    public static readonly NORMALIZE = 38;
    public static readonly REGEX = 39;
    public static readonly REPLACE = 40;
    public static readonly GROUP = 41;
    public static readonly PLAIN = 42;
    public static readonly PLACEHOLDER = 43;
    public static readonly EQ = 44;
    public static readonly COLON = 45;
    public static readonly COMMA = 46;
    public static readonly DOT = 47;
    public static readonly PIPE = 48;
    public static readonly AT = 49;
    public static readonly STAR = 50;
    public static readonly LBRACE = 51;
    public static readonly RBRACE = 52;
    public static readonly LBRACK = 53;
    public static readonly RBRACK = 54;
    public static readonly LPAREN = 55;
    public static readonly RPAREN = 56;
    public static readonly STRING = 57;
    public static readonly IDENT = 58;
    public static readonly INT = 59;
    public static readonly LINE_COMMENT = 60;
    public static readonly WS = 61;
    public static readonly RULE_ruleFile = 0;
    public static readonly RULE_traceFile = 1;
    public static readonly RULE_ruleDecl = 2;
    public static readonly RULE_traceDecl = 3;
    public static readonly RULE_endpointDecl = 4;
    public static readonly RULE_factDecl = 5;
    public static readonly RULE_ruleTargetDecl = 6;
    public static readonly RULE_findDecl = 7;
    public static readonly RULE_letDecl = 8;
    public static readonly RULE_sourceLine = 9;
    public static readonly RULE_sourceExpr = 10;
    public static readonly RULE_takeExpr = 11;
    public static readonly RULE_defaultLine = 12;
    public static readonly RULE_mapBlock = 13;
    public static readonly RULE_mapEntry = 14;
    public static readonly RULE_buildDecl = 15;
    public static readonly RULE_buildField = 16;
    public static readonly RULE_buildFieldName = 17;
    public static readonly RULE_traceEntry = 18;
    public static readonly RULE_whenDecl = 19;
    public static readonly RULE_traceTarget = 20;
    public static readonly RULE_buildExpr = 21;
    public static readonly RULE_concatList = 22;
    public static readonly RULE_concatItem = 23;
    public static readonly RULE_pipelineStep = 24;
    public static readonly RULE_methodPattern = 25;
    public static readonly RULE_qualifiedName = 26;
    public static readonly RULE_annotationRef = 27;
    public static readonly RULE_decoratorRef = 28;
    public static readonly RULE_elementRef = 29;
    public static readonly RULE_identList = 30;
    public static readonly RULE_nameItem = 31;
    public static readonly RULE_literal = 32;
    public static readonly RULE_valueToken = 33;

    public static readonly literalNames = [
        null, "'rule'", "'trace'", "'endpoint'", "'fact'", "'find'", "'with'",
        "'let'", "'from'", "'on'", "'take'", "'default'", "'map'", "'build'",
        "'external'", "'when'", "'key'", "'resolve'", "'annotation'", "'decorator'",
        "'argument'", "'method'", "'class'", "'field'", "'call'", "'parameter'",
        "'return'", "'assignment'", "'new'", "'literal'", "'name'", "'value'",
        "'raw'", "'type'", "'owner'", "'signature'", "'attr'", "'concat'",
        "'normalize'", "'regex'", "'replace'", "'group'", "'plain'", "'placeholder'",
        "'='", "':'", "','", "'.'", "'|'", "'@'", "'*'", "'{'", "'}'", "'['",
        "']'", "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, "RULE", "TRACE", "ENDPOINT", "FACT", "FIND", "WITH", "LET",
        "FROM", "ON", "TAKE", "DEFAULT", "MAP", "BUILD", "EXTERNAL", "WHEN",
        "KEY", "RESOLVE", "ANNOTATION", "DECORATOR", "ARGUMENT", "METHOD",
        "CLASS", "FIELD", "CALL", "PARAMETER", "RETURN", "ASSIGNMENT", "NEW",
        "LITERAL", "NAME", "VALUE", "RAW", "TYPE", "OWNER", "SIGNATURE",
        "ATTR", "CONCAT", "NORMALIZE", "REGEX", "REPLACE", "GROUP", "PLAIN",
        "PLACEHOLDER", "EQ", "COLON", "COMMA", "DOT", "PIPE", "AT", "STAR",
        "LBRACE", "RBRACE", "LBRACK", "RBRACK", "LPAREN", "RPAREN", "STRING",
        "IDENT", "INT", "LINE_COMMENT", "WS"
    ];
    public static readonly ruleNames = [
        "ruleFile", "traceFile", "ruleDecl", "traceDecl", "endpointDecl",
        "factDecl", "ruleTargetDecl", "findDecl", "letDecl", "sourceLine",
        "sourceExpr", "takeExpr", "defaultLine", "mapBlock", "mapEntry",
        "buildDecl", "buildField", "buildFieldName", "traceEntry", "whenDecl",
        "traceTarget", "buildExpr", "concatList", "concatItem", "pipelineStep",
        "methodPattern", "qualifiedName", "annotationRef", "decoratorRef",
        "elementRef", "identList", "nameItem", "literal", "valueToken",
    ];

    public get grammarFileName(): string { return "Ser.g4"; }
    public get literalNames(): (string | null)[] { return SerParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return SerParser.symbolicNames; }
    public get ruleNames(): string[] { return SerParser.ruleNames; }
    public get serializedATN(): number[] { return SerParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SerParser._ATN, SerParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public ruleFile(): RuleFileContext {
        let localContext = new RuleFileContext(this.context, this.state);
        this.enterRule(localContext, 0, SerParser.RULE_ruleFile);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 68;
            this.ruleDecl();
            this.state = 69;
            this.ruleTargetDecl();
            this.state = 70;
            this.findDecl();
            this.state = 74;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 15) {
                {
                {
                this.state = 71;
                this.whenDecl();
                }
                }
                this.state = 76;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 80;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 77;
                this.letDecl();
                }
                }
                this.state = 82;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 83;
            this.buildDecl();
            this.state = 84;
            this.match(SerParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public traceFile(): TraceFileContext {
        let localContext = new TraceFileContext(this.context, this.state);
        this.enterRule(localContext, 2, SerParser.RULE_traceFile);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 86;
            this.traceDecl();
            this.state = 90;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 8) {
                {
                {
                this.state = 87;
                this.traceEntry();
                }
                }
                this.state = 92;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 93;
            this.match(SerParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ruleDecl(): RuleDeclContext {
        let localContext = new RuleDeclContext(this.context, this.state);
        this.enterRule(localContext, 4, SerParser.RULE_ruleDecl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 95;
            this.match(SerParser.RULE);
            this.state = 96;
            this.match(SerParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public traceDecl(): TraceDeclContext {
        let localContext = new TraceDeclContext(this.context, this.state);
        this.enterRule(localContext, 6, SerParser.RULE_traceDecl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 98;
            this.match(SerParser.TRACE);
            this.state = 99;
            this.match(SerParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public endpointDecl(): EndpointDeclContext {
        let localContext = new EndpointDeclContext(this.context, this.state);
        this.enterRule(localContext, 8, SerParser.RULE_endpointDecl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 101;
            this.match(SerParser.ENDPOINT);
            this.state = 102;
            this.valueToken();
            this.state = 103;
            this.valueToken();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public factDecl(): FactDeclContext {
        let localContext = new FactDeclContext(this.context, this.state);
        this.enterRule(localContext, 10, SerParser.RULE_factDecl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 105;
            this.match(SerParser.FACT);
            this.state = 106;
            this.valueToken();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ruleTargetDecl(): RuleTargetDeclContext {
        let localContext = new RuleTargetDeclContext(this.context, this.state);
        this.enterRule(localContext, 12, SerParser.RULE_ruleTargetDecl);
        try {
            this.state = 110;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SerParser.ENDPOINT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 108;
                this.endpointDecl();
                }
                break;
            case SerParser.FACT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 109;
                this.factDecl();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public findDecl(): FindDeclContext {
        let localContext = new FindDeclContext(this.context, this.state);
        this.enterRule(localContext, 14, SerParser.RULE_findDecl);
        let _la: number;
        try {
            this.state = 140;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 112;
                this.match(SerParser.FIND);
                this.state = 113;
                this.match(SerParser.METHOD);
                this.state = 114;
                this.match(SerParser.WITH);
                this.state = 115;
                this.match(SerParser.ANNOTATION);
                this.state = 116;
                this.annotationRef();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 117;
                this.match(SerParser.FIND);
                this.state = 118;
                this.match(SerParser.METHOD);
                this.state = 119;
                this.methodPattern();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 120;
                this.match(SerParser.FIND);
                this.state = 121;
                this.match(SerParser.CLASS);
                this.state = 122;
                this.match(SerParser.WITH);
                this.state = 123;
                this.match(SerParser.ANNOTATION);
                this.state = 124;
                this.annotationRef();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 125;
                this.match(SerParser.FIND);
                this.state = 126;
                this.match(SerParser.CLASS);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 127;
                this.match(SerParser.FIND);
                this.state = 128;
                this.match(SerParser.FIELD);
                this.state = 129;
                this.match(SerParser.WITH);
                this.state = 130;
                this.match(SerParser.ANNOTATION);
                this.state = 131;
                this.annotationRef();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 132;
                this.match(SerParser.FIND);
                this.state = 133;
                this.match(SerParser.FIELD);
                this.state = 134;
                localContext._fieldName = this.nameItem();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 135;
                this.match(SerParser.FIND);
                this.state = 136;
                localContext._genericFindKind = this.nameItem();
                this.state = 138;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293462016) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 67108879) !== 0)) {
                    {
                    this.state = 137;
                    localContext._genericFindName = this.nameItem();
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public letDecl(): LetDeclContext {
        let localContext = new LetDeclContext(this.context, this.state);
        this.enterRule(localContext, 16, SerParser.RULE_letDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 142;
            this.match(SerParser.LET);
            this.state = 143;
            localContext._letName = this.nameItem();
            this.state = 144;
            this.match(SerParser.EQ);
            this.state = 146;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 145;
                this.sourceLine();
                }
                }
                this.state = 148;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 8);
            this.state = 151;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 150;
                this.defaultLine();
                }
            }

            this.state = 154;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 153;
                this.mapBlock();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sourceLine(): SourceLineContext {
        let localContext = new SourceLineContext(this.context, this.state);
        this.enterRule(localContext, 18, SerParser.RULE_sourceLine);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 156;
            this.match(SerParser.FROM);
            this.state = 157;
            this.sourceExpr();
            this.state = 158;
            this.match(SerParser.TAKE);
            this.state = 159;
            this.takeExpr();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public sourceExpr(): SourceExprContext {
        let localContext = new SourceExprContext(this.context, this.state);
        this.enterRule(localContext, 20, SerParser.RULE_sourceExpr);
        let _la: number;
        try {
            this.state = 197;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 161;
                this.match(SerParser.ANNOTATION);
                this.state = 162;
                this.match(SerParser.ON);
                this.state = 163;
                this.elementRef();
                this.state = 164;
                this.annotationRef();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 166;
                this.match(SerParser.DECORATOR);
                this.state = 167;
                this.match(SerParser.ON);
                this.state = 168;
                this.elementRef();
                this.state = 169;
                this.decoratorRef();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 171;
                this.match(SerParser.ARGUMENT);
                this.state = 172;
                this.match(SerParser.LBRACK);
                this.state = 173;
                this.match(SerParser.INT);
                this.state = 174;
                this.match(SerParser.RBRACK);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 175;
                this.match(SerParser.CALL);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 176;
                this.match(SerParser.DECORATOR);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 177;
                this.match(SerParser.METHOD);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 178;
                this.match(SerParser.CLASS);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 179;
                this.match(SerParser.FIELD);
                this.state = 181;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293462016) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 67108879) !== 0)) {
                    {
                    this.state = 180;
                    localContext._sourceName = this.nameItem();
                    }
                }

                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 183;
                this.match(SerParser.PARAMETER);
                this.state = 185;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293462016) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 67108879) !== 0)) {
                    {
                    this.state = 184;
                    localContext._sourceName = this.nameItem();
                    }
                }

                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 187;
                this.match(SerParser.RETURN);
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 188;
                this.match(SerParser.ASSIGNMENT);
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 189;
                this.match(SerParser.NEW);
                this.state = 190;
                this.qualifiedName();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 191;
                this.match(SerParser.LITERAL);
                this.state = 192;
                this.literal();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 193;
                localContext._genericSourceKind = this.nameItem();
                this.state = 195;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293462016) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 67108879) !== 0)) {
                    {
                    this.state = 194;
                    localContext._genericSourceName = this.nameItem();
                    }
                }

                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public takeExpr(): TakeExprContext {
        let localContext = new TakeExprContext(this.context, this.state);
        this.enterRule(localContext, 22, SerParser.RULE_takeExpr);
        try {
            this.state = 211;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 199;
                this.match(SerParser.NAME);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 200;
                this.match(SerParser.VALUE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 201;
                this.match(SerParser.RAW);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 202;
                this.match(SerParser.TYPE);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 203;
                this.match(SerParser.OWNER);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 204;
                this.match(SerParser.SIGNATURE);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 205;
                this.match(SerParser.ATTR);
                this.state = 206;
                this.match(SerParser.LPAREN);
                this.state = 207;
                this.identList();
                this.state = 208;
                this.match(SerParser.RPAREN);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 210;
                localContext._genericTake = this.nameItem();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public defaultLine(): DefaultLineContext {
        let localContext = new DefaultLineContext(this.context, this.state);
        this.enterRule(localContext, 24, SerParser.RULE_defaultLine);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 213;
            this.match(SerParser.DEFAULT);
            this.state = 214;
            this.literal();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mapBlock(): MapBlockContext {
        let localContext = new MapBlockContext(this.context, this.state);
        this.enterRule(localContext, 26, SerParser.RULE_mapBlock);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 216;
            this.match(SerParser.MAP);
            this.state = 217;
            this.match(SerParser.LBRACE);
            this.state = 221;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 58) {
                {
                {
                this.state = 218;
                this.mapEntry();
                }
                }
                this.state = 223;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 224;
            this.match(SerParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mapEntry(): MapEntryContext {
        let localContext = new MapEntryContext(this.context, this.state);
        this.enterRule(localContext, 28, SerParser.RULE_mapEntry);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 226;
            this.valueToken();
            this.state = 227;
            this.match(SerParser.COLON);
            this.state = 228;
            this.valueToken();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public buildDecl(): BuildDeclContext {
        let localContext = new BuildDeclContext(this.context, this.state);
        this.enterRule(localContext, 30, SerParser.RULE_buildDecl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 230;
            this.match(SerParser.BUILD);
            this.state = 231;
            this.match(SerParser.LBRACE);
            this.state = 235;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293462016) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 67108879) !== 0)) {
                {
                {
                this.state = 232;
                this.buildField();
                }
                }
                this.state = 237;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 238;
            this.match(SerParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public buildField(): BuildFieldContext {
        let localContext = new BuildFieldContext(this.context, this.state);
        this.enterRule(localContext, 32, SerParser.RULE_buildField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 240;
            this.buildFieldName();
            this.state = 241;
            this.match(SerParser.COLON);
            this.state = 242;
            this.buildExpr();
            this.state = 246;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 48) {
                {
                {
                this.state = 243;
                this.pipelineStep();
                }
                }
                this.state = 248;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public buildFieldName(): BuildFieldNameContext {
        let localContext = new BuildFieldNameContext(this.context, this.state);
        this.enterRule(localContext, 34, SerParser.RULE_buildFieldName);
        try {
            this.state = 254;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 249;
                this.nameItem();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 250;
                this.match(SerParser.KEY);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 251;
                this.match(SerParser.DEFAULT);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 252;
                this.match(SerParser.OWNER);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 253;
                this.match(SerParser.SIGNATURE);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public traceEntry(): TraceEntryContext {
        let localContext = new TraceEntryContext(this.context, this.state);
        this.enterRule(localContext, 36, SerParser.RULE_traceEntry);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 256;
            this.match(SerParser.FROM);
            this.state = 257;
            this.traceTarget();
            this.state = 261;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 15) {
                {
                {
                this.state = 258;
                this.whenDecl();
                }
                }
                this.state = 263;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 267;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 264;
                this.letDecl();
                }
                }
                this.state = 269;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 270;
            this.buildDecl();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whenDecl(): WhenDeclContext {
        let localContext = new WhenDeclContext(this.context, this.state);
        this.enterRule(localContext, 38, SerParser.RULE_whenDecl);
        try {
            this.state = 316;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 272;
                this.match(SerParser.WHEN);
                this.state = 273;
                this.match(SerParser.ANNOTATION);
                this.state = 274;
                this.annotationRef();
                this.state = 275;
                this.match(SerParser.ON);
                this.state = 276;
                this.elementRef();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 278;
                this.match(SerParser.WHEN);
                this.state = 279;
                this.match(SerParser.METHOD);
                this.state = 280;
                this.methodPattern();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 281;
                this.match(SerParser.WHEN);
                this.state = 282;
                this.match(SerParser.CALL);
                this.state = 283;
                this.methodPattern();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 284;
                this.match(SerParser.WHEN);
                this.state = 285;
                this.match(SerParser.FIELD);
                this.state = 286;
                this.match(SerParser.NAME);
                this.state = 287;
                this.valueToken();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 288;
                this.match(SerParser.WHEN);
                this.state = 289;
                this.match(SerParser.FIELD);
                this.state = 290;
                this.match(SerParser.TYPE);
                this.state = 291;
                this.qualifiedName();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 292;
                this.match(SerParser.WHEN);
                this.state = 293;
                this.match(SerParser.PARAMETER);
                this.state = 294;
                this.match(SerParser.NAME);
                this.state = 295;
                this.valueToken();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 296;
                this.match(SerParser.WHEN);
                this.state = 297;
                this.match(SerParser.PARAMETER);
                this.state = 298;
                this.match(SerParser.TYPE);
                this.state = 299;
                this.qualifiedName();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 300;
                this.match(SerParser.WHEN);
                this.state = 301;
                this.match(SerParser.METHOD);
                this.state = 302;
                this.match(SerParser.NAME);
                this.state = 303;
                this.valueToken();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 304;
                this.match(SerParser.WHEN);
                this.state = 305;
                this.match(SerParser.CALL);
                this.state = 306;
                this.match(SerParser.NAME);
                this.state = 307;
                this.valueToken();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 308;
                this.match(SerParser.WHEN);
                this.state = 309;
                this.match(SerParser.CALL);
                this.state = 310;
                this.match(SerParser.OWNER);
                this.state = 311;
                this.qualifiedName();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 312;
                this.match(SerParser.WHEN);
                this.state = 313;
                this.match(SerParser.ASSIGNMENT);
                this.state = 314;
                this.match(SerParser.FIELD);
                this.state = 315;
                this.valueToken();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public traceTarget(): TraceTargetContext {
        let localContext = new TraceTargetContext(this.context, this.state);
        this.enterRule(localContext, 40, SerParser.RULE_traceTarget);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 318;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 262144000) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public buildExpr(): BuildExprContext {
        let localContext = new BuildExprContext(this.context, this.state);
        this.enterRule(localContext, 42, SerParser.RULE_buildExpr);
        try {
            this.state = 327;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SerParser.STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 320;
                this.match(SerParser.STRING);
                }
                break;
            case SerParser.DEFAULT:
            case SerParser.KEY:
            case SerParser.DECORATOR:
            case SerParser.METHOD:
            case SerParser.CLASS:
            case SerParser.FIELD:
            case SerParser.CALL:
            case SerParser.PARAMETER:
            case SerParser.RETURN:
            case SerParser.ASSIGNMENT:
            case SerParser.NEW:
            case SerParser.LITERAL:
            case SerParser.NAME:
            case SerParser.VALUE:
            case SerParser.RAW:
            case SerParser.TYPE:
            case SerParser.OWNER:
            case SerParser.SIGNATURE:
            case SerParser.IDENT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 321;
                localContext._refName = this.nameItem();
                }
                break;
            case SerParser.CONCAT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 322;
                this.match(SerParser.CONCAT);
                this.state = 323;
                this.match(SerParser.LPAREN);
                this.state = 324;
                this.concatList();
                this.state = 325;
                this.match(SerParser.RPAREN);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public concatList(): ConcatListContext {
        let localContext = new ConcatListContext(this.context, this.state);
        this.enterRule(localContext, 44, SerParser.RULE_concatList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 329;
            this.concatItem();
            this.state = 334;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 46) {
                {
                {
                this.state = 330;
                this.match(SerParser.COMMA);
                this.state = 331;
                this.concatItem();
                }
                }
                this.state = 336;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public concatItem(): ConcatItemContext {
        let localContext = new ConcatItemContext(this.context, this.state);
        this.enterRule(localContext, 46, SerParser.RULE_concatItem);
        try {
            this.state = 339;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SerParser.DEFAULT:
            case SerParser.KEY:
            case SerParser.DECORATOR:
            case SerParser.METHOD:
            case SerParser.CLASS:
            case SerParser.FIELD:
            case SerParser.CALL:
            case SerParser.PARAMETER:
            case SerParser.RETURN:
            case SerParser.ASSIGNMENT:
            case SerParser.NEW:
            case SerParser.LITERAL:
            case SerParser.NAME:
            case SerParser.VALUE:
            case SerParser.RAW:
            case SerParser.TYPE:
            case SerParser.OWNER:
            case SerParser.SIGNATURE:
            case SerParser.IDENT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 337;
                this.nameItem();
                }
                break;
            case SerParser.STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 338;
                this.match(SerParser.STRING);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public pipelineStep(): PipelineStepContext {
        let localContext = new PipelineStepContext(this.context, this.state);
        this.enterRule(localContext, 48, SerParser.RULE_pipelineStep);
        let _la: number;
        try {
            this.state = 363;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 341;
                this.match(SerParser.PIPE);
                this.state = 342;
                this.match(SerParser.NORMALIZE);
                this.state = 343;
                this.match(SerParser.IDENT);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 344;
                this.match(SerParser.PIPE);
                this.state = 345;
                this.match(SerParser.REGEX);
                this.state = 346;
                this.match(SerParser.STRING);
                this.state = 347;
                this.match(SerParser.GROUP);
                this.state = 348;
                this.match(SerParser.INT);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 349;
                this.match(SerParser.PIPE);
                this.state = 350;
                this.match(SerParser.REPLACE);
                this.state = 351;
                this.match(SerParser.STRING);
                this.state = 352;
                this.match(SerParser.STRING);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 353;
                this.match(SerParser.PIPE);
                this.state = 354;
                this.match(SerParser.MAP);
                this.state = 355;
                this.match(SerParser.LBRACE);
                this.state = 359;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 58) {
                    {
                    {
                    this.state = 356;
                    this.mapEntry();
                    }
                    }
                    this.state = 361;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 362;
                this.match(SerParser.RBRACE);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodPattern(): MethodPatternContext {
        let localContext = new MethodPatternContext(this.context, this.state);
        this.enterRule(localContext, 50, SerParser.RULE_methodPattern);
        try {
            this.state = 375;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 365;
                this.qualifiedName();
                this.state = 366;
                this.match(SerParser.DOT);
                this.state = 367;
                this.match(SerParser.LBRACK);
                this.state = 368;
                this.identList();
                this.state = 369;
                this.match(SerParser.RBRACK);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 371;
                this.qualifiedName();
                this.state = 372;
                this.match(SerParser.DOT);
                this.state = 373;
                this.match(SerParser.IDENT);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 52, SerParser.RULE_qualifiedName);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 377;
            this.match(SerParser.IDENT);
            this.state = 382;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 27, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 378;
                    this.match(SerParser.DOT);
                    this.state = 379;
                    this.match(SerParser.IDENT);
                    }
                    }
                }
                this.state = 384;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 27, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationRef(): AnnotationRefContext {
        let localContext = new AnnotationRefContext(this.context, this.state);
        this.enterRule(localContext, 54, SerParser.RULE_annotationRef);
        try {
            this.state = 390;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 385;
                this.match(SerParser.AT);
                this.state = 386;
                this.match(SerParser.IDENT);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 387;
                this.match(SerParser.AT);
                this.state = 388;
                this.match(SerParser.STAR);
                this.state = 389;
                this.match(SerParser.IDENT);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public decoratorRef(): DecoratorRefContext {
        let localContext = new DecoratorRefContext(this.context, this.state);
        this.enterRule(localContext, 56, SerParser.RULE_decoratorRef);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 393;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 49) {
                {
                this.state = 392;
                this.match(SerParser.AT);
                }
            }

            this.state = 395;
            this.match(SerParser.IDENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementRef(): ElementRefContext {
        let localContext = new ElementRefContext(this.context, this.state);
        this.enterRule(localContext, 58, SerParser.RULE_elementRef);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 397;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 48234496) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identList(): IdentListContext {
        let localContext = new IdentListContext(this.context, this.state);
        this.enterRule(localContext, 60, SerParser.RULE_identList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 399;
            this.nameItem();
            this.state = 404;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 46) {
                {
                {
                this.state = 400;
                this.match(SerParser.COMMA);
                this.state = 401;
                this.nameItem();
                }
                }
                this.state = 406;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nameItem(): NameItemContext {
        let localContext = new NameItemContext(this.context, this.state);
        this.enterRule(localContext, 62, SerParser.RULE_nameItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 407;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293462016) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 67108879) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 64, SerParser.RULE_literal);
        try {
            this.state = 411;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SerParser.STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 409;
                this.match(SerParser.STRING);
                }
                break;
            case SerParser.IDENT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 410;
                this.valueToken();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public valueToken(): ValueTokenContext {
        let localContext = new ValueTokenContext(this.context, this.state);
        this.enterRule(localContext, 66, SerParser.RULE_valueToken);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 413;
            this.match(SerParser.IDENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,61,416,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,1,0,1,0,1,0,1,0,5,0,73,8,0,10,0,12,0,76,9,0,1,0,5,0,79,8,0,
        10,0,12,0,82,9,0,1,0,1,0,1,0,1,1,1,1,5,1,89,8,1,10,1,12,1,92,9,1,
        1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,
        1,6,3,6,111,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
        1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,139,
        8,7,3,7,141,8,7,1,8,1,8,1,8,1,8,4,8,147,8,8,11,8,12,8,148,1,8,3,
        8,152,8,8,1,8,3,8,155,8,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,3,10,182,8,10,1,10,1,10,3,10,186,8,10,1,10,1,10,1,
        10,1,10,1,10,1,10,1,10,1,10,3,10,196,8,10,3,10,198,8,10,1,11,1,11,
        1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,212,8,11,
        1,12,1,12,1,12,1,13,1,13,1,13,5,13,220,8,13,10,13,12,13,223,9,13,
        1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,5,15,234,8,15,10,15,
        12,15,237,9,15,1,15,1,15,1,16,1,16,1,16,1,16,5,16,245,8,16,10,16,
        12,16,248,9,16,1,17,1,17,1,17,1,17,1,17,3,17,255,8,17,1,18,1,18,
        1,18,5,18,260,8,18,10,18,12,18,263,9,18,1,18,5,18,266,8,18,10,18,
        12,18,269,9,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
        1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
        1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
        1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,317,8,19,
        1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,328,8,21,1,22,
        1,22,1,22,5,22,333,8,22,10,22,12,22,336,9,22,1,23,1,23,3,23,340,
        8,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
        1,24,1,24,1,24,1,24,5,24,358,8,24,10,24,12,24,361,9,24,1,24,3,24,
        364,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,
        376,8,25,1,26,1,26,1,26,5,26,381,8,26,10,26,12,26,384,9,26,1,27,
        1,27,1,27,1,27,1,27,3,27,391,8,27,1,28,3,28,394,8,28,1,28,1,28,1,
        29,1,29,1,30,1,30,1,30,5,30,403,8,30,10,30,12,30,406,9,30,1,31,1,
        31,1,32,1,32,3,32,412,8,32,1,33,1,33,1,33,0,0,34,0,2,4,6,8,10,12,
        14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
        58,60,62,64,66,0,3,2,0,21,21,23,27,2,0,21,23,25,25,5,0,11,11,16,
        16,19,19,21,35,58,58,451,0,68,1,0,0,0,2,86,1,0,0,0,4,95,1,0,0,0,
        6,98,1,0,0,0,8,101,1,0,0,0,10,105,1,0,0,0,12,110,1,0,0,0,14,140,
        1,0,0,0,16,142,1,0,0,0,18,156,1,0,0,0,20,197,1,0,0,0,22,211,1,0,
        0,0,24,213,1,0,0,0,26,216,1,0,0,0,28,226,1,0,0,0,30,230,1,0,0,0,
        32,240,1,0,0,0,34,254,1,0,0,0,36,256,1,0,0,0,38,316,1,0,0,0,40,318,
        1,0,0,0,42,327,1,0,0,0,44,329,1,0,0,0,46,339,1,0,0,0,48,363,1,0,
        0,0,50,375,1,0,0,0,52,377,1,0,0,0,54,390,1,0,0,0,56,393,1,0,0,0,
        58,397,1,0,0,0,60,399,1,0,0,0,62,407,1,0,0,0,64,411,1,0,0,0,66,413,
        1,0,0,0,68,69,3,4,2,0,69,70,3,12,6,0,70,74,3,14,7,0,71,73,3,38,19,
        0,72,71,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,80,
        1,0,0,0,76,74,1,0,0,0,77,79,3,16,8,0,78,77,1,0,0,0,79,82,1,0,0,0,
        80,78,1,0,0,0,80,81,1,0,0,0,81,83,1,0,0,0,82,80,1,0,0,0,83,84,3,
        30,15,0,84,85,5,0,0,1,85,1,1,0,0,0,86,90,3,6,3,0,87,89,3,36,18,0,
        88,87,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,0,91,93,1,
        0,0,0,92,90,1,0,0,0,93,94,5,0,0,1,94,3,1,0,0,0,95,96,5,1,0,0,96,
        97,5,57,0,0,97,5,1,0,0,0,98,99,5,2,0,0,99,100,5,57,0,0,100,7,1,0,
        0,0,101,102,5,3,0,0,102,103,3,66,33,0,103,104,3,66,33,0,104,9,1,
        0,0,0,105,106,5,4,0,0,106,107,3,66,33,0,107,11,1,0,0,0,108,111,3,
        8,4,0,109,111,3,10,5,0,110,108,1,0,0,0,110,109,1,0,0,0,111,13,1,
        0,0,0,112,113,5,5,0,0,113,114,5,21,0,0,114,115,5,6,0,0,115,116,5,
        18,0,0,116,141,3,54,27,0,117,118,5,5,0,0,118,119,5,21,0,0,119,141,
        3,50,25,0,120,121,5,5,0,0,121,122,5,22,0,0,122,123,5,6,0,0,123,124,
        5,18,0,0,124,141,3,54,27,0,125,126,5,5,0,0,126,141,5,22,0,0,127,
        128,5,5,0,0,128,129,5,23,0,0,129,130,5,6,0,0,130,131,5,18,0,0,131,
        141,3,54,27,0,132,133,5,5,0,0,133,134,5,23,0,0,134,141,3,62,31,0,
        135,136,5,5,0,0,136,138,3,62,31,0,137,139,3,62,31,0,138,137,1,0,
        0,0,138,139,1,0,0,0,139,141,1,0,0,0,140,112,1,0,0,0,140,117,1,0,
        0,0,140,120,1,0,0,0,140,125,1,0,0,0,140,127,1,0,0,0,140,132,1,0,
        0,0,140,135,1,0,0,0,141,15,1,0,0,0,142,143,5,7,0,0,143,144,3,62,
        31,0,144,146,5,44,0,0,145,147,3,18,9,0,146,145,1,0,0,0,147,148,1,
        0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,151,1,0,0,0,150,152,3,
        24,12,0,151,150,1,0,0,0,151,152,1,0,0,0,152,154,1,0,0,0,153,155,
        3,26,13,0,154,153,1,0,0,0,154,155,1,0,0,0,155,17,1,0,0,0,156,157,
        5,8,0,0,157,158,3,20,10,0,158,159,5,10,0,0,159,160,3,22,11,0,160,
        19,1,0,0,0,161,162,5,18,0,0,162,163,5,9,0,0,163,164,3,58,29,0,164,
        165,3,54,27,0,165,198,1,0,0,0,166,167,5,19,0,0,167,168,5,9,0,0,168,
        169,3,58,29,0,169,170,3,56,28,0,170,198,1,0,0,0,171,172,5,20,0,0,
        172,173,5,53,0,0,173,174,5,59,0,0,174,198,5,54,0,0,175,198,5,24,
        0,0,176,198,5,19,0,0,177,198,5,21,0,0,178,198,5,22,0,0,179,181,5,
        23,0,0,180,182,3,62,31,0,181,180,1,0,0,0,181,182,1,0,0,0,182,198,
        1,0,0,0,183,185,5,25,0,0,184,186,3,62,31,0,185,184,1,0,0,0,185,186,
        1,0,0,0,186,198,1,0,0,0,187,198,5,26,0,0,188,198,5,27,0,0,189,190,
        5,28,0,0,190,198,3,52,26,0,191,192,5,29,0,0,192,198,3,64,32,0,193,
        195,3,62,31,0,194,196,3,62,31,0,195,194,1,0,0,0,195,196,1,0,0,0,
        196,198,1,0,0,0,197,161,1,0,0,0,197,166,1,0,0,0,197,171,1,0,0,0,
        197,175,1,0,0,0,197,176,1,0,0,0,197,177,1,0,0,0,197,178,1,0,0,0,
        197,179,1,0,0,0,197,183,1,0,0,0,197,187,1,0,0,0,197,188,1,0,0,0,
        197,189,1,0,0,0,197,191,1,0,0,0,197,193,1,0,0,0,198,21,1,0,0,0,199,
        212,5,30,0,0,200,212,5,31,0,0,201,212,5,32,0,0,202,212,5,33,0,0,
        203,212,5,34,0,0,204,212,5,35,0,0,205,206,5,36,0,0,206,207,5,55,
        0,0,207,208,3,60,30,0,208,209,5,56,0,0,209,212,1,0,0,0,210,212,3,
        62,31,0,211,199,1,0,0,0,211,200,1,0,0,0,211,201,1,0,0,0,211,202,
        1,0,0,0,211,203,1,0,0,0,211,204,1,0,0,0,211,205,1,0,0,0,211,210,
        1,0,0,0,212,23,1,0,0,0,213,214,5,11,0,0,214,215,3,64,32,0,215,25,
        1,0,0,0,216,217,5,12,0,0,217,221,5,51,0,0,218,220,3,28,14,0,219,
        218,1,0,0,0,220,223,1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,
        224,1,0,0,0,223,221,1,0,0,0,224,225,5,52,0,0,225,27,1,0,0,0,226,
        227,3,66,33,0,227,228,5,45,0,0,228,229,3,66,33,0,229,29,1,0,0,0,
        230,231,5,13,0,0,231,235,5,51,0,0,232,234,3,32,16,0,233,232,1,0,
        0,0,234,237,1,0,0,0,235,233,1,0,0,0,235,236,1,0,0,0,236,238,1,0,
        0,0,237,235,1,0,0,0,238,239,5,52,0,0,239,31,1,0,0,0,240,241,3,34,
        17,0,241,242,5,45,0,0,242,246,3,42,21,0,243,245,3,48,24,0,244,243,
        1,0,0,0,245,248,1,0,0,0,246,244,1,0,0,0,246,247,1,0,0,0,247,33,1,
        0,0,0,248,246,1,0,0,0,249,255,3,62,31,0,250,255,5,16,0,0,251,255,
        5,11,0,0,252,255,5,34,0,0,253,255,5,35,0,0,254,249,1,0,0,0,254,250,
        1,0,0,0,254,251,1,0,0,0,254,252,1,0,0,0,254,253,1,0,0,0,255,35,1,
        0,0,0,256,257,5,8,0,0,257,261,3,40,20,0,258,260,3,38,19,0,259,258,
        1,0,0,0,260,263,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,267,
        1,0,0,0,263,261,1,0,0,0,264,266,3,16,8,0,265,264,1,0,0,0,266,269,
        1,0,0,0,267,265,1,0,0,0,267,268,1,0,0,0,268,270,1,0,0,0,269,267,
        1,0,0,0,270,271,3,30,15,0,271,37,1,0,0,0,272,273,5,15,0,0,273,274,
        5,18,0,0,274,275,3,54,27,0,275,276,5,9,0,0,276,277,3,58,29,0,277,
        317,1,0,0,0,278,279,5,15,0,0,279,280,5,21,0,0,280,317,3,50,25,0,
        281,282,5,15,0,0,282,283,5,24,0,0,283,317,3,50,25,0,284,285,5,15,
        0,0,285,286,5,23,0,0,286,287,5,30,0,0,287,317,3,66,33,0,288,289,
        5,15,0,0,289,290,5,23,0,0,290,291,5,33,0,0,291,317,3,52,26,0,292,
        293,5,15,0,0,293,294,5,25,0,0,294,295,5,30,0,0,295,317,3,66,33,0,
        296,297,5,15,0,0,297,298,5,25,0,0,298,299,5,33,0,0,299,317,3,52,
        26,0,300,301,5,15,0,0,301,302,5,21,0,0,302,303,5,30,0,0,303,317,
        3,66,33,0,304,305,5,15,0,0,305,306,5,24,0,0,306,307,5,30,0,0,307,
        317,3,66,33,0,308,309,5,15,0,0,309,310,5,24,0,0,310,311,5,34,0,0,
        311,317,3,52,26,0,312,313,5,15,0,0,313,314,5,27,0,0,314,315,5,23,
        0,0,315,317,3,66,33,0,316,272,1,0,0,0,316,278,1,0,0,0,316,281,1,
        0,0,0,316,284,1,0,0,0,316,288,1,0,0,0,316,292,1,0,0,0,316,296,1,
        0,0,0,316,300,1,0,0,0,316,304,1,0,0,0,316,308,1,0,0,0,316,312,1,
        0,0,0,317,39,1,0,0,0,318,319,7,0,0,0,319,41,1,0,0,0,320,328,5,57,
        0,0,321,328,3,62,31,0,322,323,5,37,0,0,323,324,5,55,0,0,324,325,
        3,44,22,0,325,326,5,56,0,0,326,328,1,0,0,0,327,320,1,0,0,0,327,321,
        1,0,0,0,327,322,1,0,0,0,328,43,1,0,0,0,329,334,3,46,23,0,330,331,
        5,46,0,0,331,333,3,46,23,0,332,330,1,0,0,0,333,336,1,0,0,0,334,332,
        1,0,0,0,334,335,1,0,0,0,335,45,1,0,0,0,336,334,1,0,0,0,337,340,3,
        62,31,0,338,340,5,57,0,0,339,337,1,0,0,0,339,338,1,0,0,0,340,47,
        1,0,0,0,341,342,5,48,0,0,342,343,5,38,0,0,343,364,5,58,0,0,344,345,
        5,48,0,0,345,346,5,39,0,0,346,347,5,57,0,0,347,348,5,41,0,0,348,
        364,5,59,0,0,349,350,5,48,0,0,350,351,5,40,0,0,351,352,5,57,0,0,
        352,364,5,57,0,0,353,354,5,48,0,0,354,355,5,12,0,0,355,359,5,51,
        0,0,356,358,3,28,14,0,357,356,1,0,0,0,358,361,1,0,0,0,359,357,1,
        0,0,0,359,360,1,0,0,0,360,362,1,0,0,0,361,359,1,0,0,0,362,364,5,
        52,0,0,363,341,1,0,0,0,363,344,1,0,0,0,363,349,1,0,0,0,363,353,1,
        0,0,0,364,49,1,0,0,0,365,366,3,52,26,0,366,367,5,47,0,0,367,368,
        5,53,0,0,368,369,3,60,30,0,369,370,5,54,0,0,370,376,1,0,0,0,371,
        372,3,52,26,0,372,373,5,47,0,0,373,374,5,58,0,0,374,376,1,0,0,0,
        375,365,1,0,0,0,375,371,1,0,0,0,376,51,1,0,0,0,377,382,5,58,0,0,
        378,379,5,47,0,0,379,381,5,58,0,0,380,378,1,0,0,0,381,384,1,0,0,
        0,382,380,1,0,0,0,382,383,1,0,0,0,383,53,1,0,0,0,384,382,1,0,0,0,
        385,386,5,49,0,0,386,391,5,58,0,0,387,388,5,49,0,0,388,389,5,50,
        0,0,389,391,5,58,0,0,390,385,1,0,0,0,390,387,1,0,0,0,391,55,1,0,
        0,0,392,394,5,49,0,0,393,392,1,0,0,0,393,394,1,0,0,0,394,395,1,0,
        0,0,395,396,5,58,0,0,396,57,1,0,0,0,397,398,7,1,0,0,398,59,1,0,0,
        0,399,404,3,62,31,0,400,401,5,46,0,0,401,403,3,62,31,0,402,400,1,
        0,0,0,403,406,1,0,0,0,404,402,1,0,0,0,404,405,1,0,0,0,405,61,1,0,
        0,0,406,404,1,0,0,0,407,408,7,2,0,0,408,63,1,0,0,0,409,412,5,57,
        0,0,410,412,3,66,33,0,411,409,1,0,0,0,411,410,1,0,0,0,412,65,1,0,
        0,0,413,414,5,58,0,0,414,67,1,0,0,0,32,74,80,90,110,138,140,148,
        151,154,181,185,195,197,211,221,235,246,254,261,267,316,327,334,
        339,359,363,375,382,390,393,404,411
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SerParser.__ATN) {
            SerParser.__ATN = new antlr.ATNDeserializer().deserialize(SerParser._serializedATN);
        }

        return SerParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SerParser.literalNames, SerParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SerParser.vocabulary;
    }

    private static readonly decisionsToDFA = SerParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class RuleFileContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ruleDecl(): RuleDeclContext {
        return this.getRuleContext(0, RuleDeclContext)!;
    }
    public ruleTargetDecl(): RuleTargetDeclContext {
        return this.getRuleContext(0, RuleTargetDeclContext)!;
    }
    public findDecl(): FindDeclContext {
        return this.getRuleContext(0, FindDeclContext)!;
    }
    public buildDecl(): BuildDeclContext {
        return this.getRuleContext(0, BuildDeclContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(SerParser.EOF, 0)!;
    }
    public whenDecl(): WhenDeclContext[];
    public whenDecl(i: number): WhenDeclContext | null;
    public whenDecl(i?: number): WhenDeclContext[] | WhenDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhenDeclContext);
        }

        return this.getRuleContext(i, WhenDeclContext);
    }
    public letDecl(): LetDeclContext[];
    public letDecl(i: number): LetDeclContext | null;
    public letDecl(i?: number): LetDeclContext[] | LetDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LetDeclContext);
        }

        return this.getRuleContext(i, LetDeclContext);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_ruleFile;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterRuleFile) {
             listener.enterRuleFile(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitRuleFile) {
             listener.exitRuleFile(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitRuleFile) {
            return visitor.visitRuleFile(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TraceFileContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public traceDecl(): TraceDeclContext {
        return this.getRuleContext(0, TraceDeclContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(SerParser.EOF, 0)!;
    }
    public traceEntry(): TraceEntryContext[];
    public traceEntry(i: number): TraceEntryContext | null;
    public traceEntry(i?: number): TraceEntryContext[] | TraceEntryContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TraceEntryContext);
        }

        return this.getRuleContext(i, TraceEntryContext);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_traceFile;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterTraceFile) {
             listener.enterTraceFile(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitTraceFile) {
             listener.exitTraceFile(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitTraceFile) {
            return visitor.visitTraceFile(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RuleDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RULE(): antlr.TerminalNode {
        return this.getToken(SerParser.RULE, 0)!;
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(SerParser.STRING, 0)!;
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_ruleDecl;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterRuleDecl) {
             listener.enterRuleDecl(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitRuleDecl) {
             listener.exitRuleDecl(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitRuleDecl) {
            return visitor.visitRuleDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TraceDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TRACE(): antlr.TerminalNode {
        return this.getToken(SerParser.TRACE, 0)!;
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(SerParser.STRING, 0)!;
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_traceDecl;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterTraceDecl) {
             listener.enterTraceDecl(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitTraceDecl) {
             listener.exitTraceDecl(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitTraceDecl) {
            return visitor.visitTraceDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EndpointDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ENDPOINT(): antlr.TerminalNode {
        return this.getToken(SerParser.ENDPOINT, 0)!;
    }
    public valueToken(): ValueTokenContext[];
    public valueToken(i: number): ValueTokenContext | null;
    public valueToken(i?: number): ValueTokenContext[] | ValueTokenContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueTokenContext);
        }

        return this.getRuleContext(i, ValueTokenContext);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_endpointDecl;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterEndpointDecl) {
             listener.enterEndpointDecl(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitEndpointDecl) {
             listener.exitEndpointDecl(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitEndpointDecl) {
            return visitor.visitEndpointDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FactDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FACT(): antlr.TerminalNode {
        return this.getToken(SerParser.FACT, 0)!;
    }
    public valueToken(): ValueTokenContext {
        return this.getRuleContext(0, ValueTokenContext)!;
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_factDecl;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterFactDecl) {
             listener.enterFactDecl(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitFactDecl) {
             listener.exitFactDecl(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitFactDecl) {
            return visitor.visitFactDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RuleTargetDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public endpointDecl(): EndpointDeclContext | null {
        return this.getRuleContext(0, EndpointDeclContext);
    }
    public factDecl(): FactDeclContext | null {
        return this.getRuleContext(0, FactDeclContext);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_ruleTargetDecl;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterRuleTargetDecl) {
             listener.enterRuleTargetDecl(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitRuleTargetDecl) {
             listener.exitRuleTargetDecl(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitRuleTargetDecl) {
            return visitor.visitRuleTargetDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FindDeclContext extends antlr.ParserRuleContext {
    public _fieldName?: NameItemContext;
    public _genericFindKind?: NameItemContext;
    public _genericFindName?: NameItemContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FIND(): antlr.TerminalNode {
        return this.getToken(SerParser.FIND, 0)!;
    }
    public METHOD(): antlr.TerminalNode | null {
        return this.getToken(SerParser.METHOD, 0);
    }
    public WITH(): antlr.TerminalNode | null {
        return this.getToken(SerParser.WITH, 0);
    }
    public ANNOTATION(): antlr.TerminalNode | null {
        return this.getToken(SerParser.ANNOTATION, 0);
    }
    public annotationRef(): AnnotationRefContext | null {
        return this.getRuleContext(0, AnnotationRefContext);
    }
    public methodPattern(): MethodPatternContext | null {
        return this.getRuleContext(0, MethodPatternContext);
    }
    public CLASS(): antlr.TerminalNode | null {
        return this.getToken(SerParser.CLASS, 0);
    }
    public FIELD(): antlr.TerminalNode | null {
        return this.getToken(SerParser.FIELD, 0);
    }
    public nameItem(): NameItemContext[];
    public nameItem(i: number): NameItemContext | null;
    public nameItem(i?: number): NameItemContext[] | NameItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NameItemContext);
        }

        return this.getRuleContext(i, NameItemContext);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_findDecl;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterFindDecl) {
             listener.enterFindDecl(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitFindDecl) {
             listener.exitFindDecl(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitFindDecl) {
            return visitor.visitFindDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LetDeclContext extends antlr.ParserRuleContext {
    public _letName?: NameItemContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LET(): antlr.TerminalNode {
        return this.getToken(SerParser.LET, 0)!;
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(SerParser.EQ, 0)!;
    }
    public nameItem(): NameItemContext {
        return this.getRuleContext(0, NameItemContext)!;
    }
    public sourceLine(): SourceLineContext[];
    public sourceLine(i: number): SourceLineContext | null;
    public sourceLine(i?: number): SourceLineContext[] | SourceLineContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SourceLineContext);
        }

        return this.getRuleContext(i, SourceLineContext);
    }
    public defaultLine(): DefaultLineContext | null {
        return this.getRuleContext(0, DefaultLineContext);
    }
    public mapBlock(): MapBlockContext | null {
        return this.getRuleContext(0, MapBlockContext);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_letDecl;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterLetDecl) {
             listener.enterLetDecl(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitLetDecl) {
             listener.exitLetDecl(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitLetDecl) {
            return visitor.visitLetDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SourceLineContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(SerParser.FROM, 0)!;
    }
    public sourceExpr(): SourceExprContext {
        return this.getRuleContext(0, SourceExprContext)!;
    }
    public TAKE(): antlr.TerminalNode {
        return this.getToken(SerParser.TAKE, 0)!;
    }
    public takeExpr(): TakeExprContext {
        return this.getRuleContext(0, TakeExprContext)!;
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_sourceLine;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterSourceLine) {
             listener.enterSourceLine(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitSourceLine) {
             listener.exitSourceLine(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitSourceLine) {
            return visitor.visitSourceLine(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SourceExprContext extends antlr.ParserRuleContext {
    public _sourceName?: NameItemContext;
    public _genericSourceKind?: NameItemContext;
    public _genericSourceName?: NameItemContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ANNOTATION(): antlr.TerminalNode | null {
        return this.getToken(SerParser.ANNOTATION, 0);
    }
    public ON(): antlr.TerminalNode | null {
        return this.getToken(SerParser.ON, 0);
    }
    public elementRef(): ElementRefContext | null {
        return this.getRuleContext(0, ElementRefContext);
    }
    public annotationRef(): AnnotationRefContext | null {
        return this.getRuleContext(0, AnnotationRefContext);
    }
    public DECORATOR(): antlr.TerminalNode | null {
        return this.getToken(SerParser.DECORATOR, 0);
    }
    public decoratorRef(): DecoratorRefContext | null {
        return this.getRuleContext(0, DecoratorRefContext);
    }
    public ARGUMENT(): antlr.TerminalNode | null {
        return this.getToken(SerParser.ARGUMENT, 0);
    }
    public LBRACK(): antlr.TerminalNode | null {
        return this.getToken(SerParser.LBRACK, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(SerParser.INT, 0);
    }
    public RBRACK(): antlr.TerminalNode | null {
        return this.getToken(SerParser.RBRACK, 0);
    }
    public CALL(): antlr.TerminalNode | null {
        return this.getToken(SerParser.CALL, 0);
    }
    public METHOD(): antlr.TerminalNode | null {
        return this.getToken(SerParser.METHOD, 0);
    }
    public CLASS(): antlr.TerminalNode | null {
        return this.getToken(SerParser.CLASS, 0);
    }
    public FIELD(): antlr.TerminalNode | null {
        return this.getToken(SerParser.FIELD, 0);
    }
    public nameItem(): NameItemContext[];
    public nameItem(i: number): NameItemContext | null;
    public nameItem(i?: number): NameItemContext[] | NameItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NameItemContext);
        }

        return this.getRuleContext(i, NameItemContext);
    }
    public PARAMETER(): antlr.TerminalNode | null {
        return this.getToken(SerParser.PARAMETER, 0);
    }
    public RETURN(): antlr.TerminalNode | null {
        return this.getToken(SerParser.RETURN, 0);
    }
    public ASSIGNMENT(): antlr.TerminalNode | null {
        return this.getToken(SerParser.ASSIGNMENT, 0);
    }
    public NEW(): antlr.TerminalNode | null {
        return this.getToken(SerParser.NEW, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SerParser.LITERAL, 0);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_sourceExpr;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterSourceExpr) {
             listener.enterSourceExpr(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitSourceExpr) {
             listener.exitSourceExpr(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitSourceExpr) {
            return visitor.visitSourceExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TakeExprContext extends antlr.ParserRuleContext {
    public _genericTake?: NameItemContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NAME(): antlr.TerminalNode | null {
        return this.getToken(SerParser.NAME, 0);
    }
    public VALUE(): antlr.TerminalNode | null {
        return this.getToken(SerParser.VALUE, 0);
    }
    public RAW(): antlr.TerminalNode | null {
        return this.getToken(SerParser.RAW, 0);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(SerParser.TYPE, 0);
    }
    public OWNER(): antlr.TerminalNode | null {
        return this.getToken(SerParser.OWNER, 0);
    }
    public SIGNATURE(): antlr.TerminalNode | null {
        return this.getToken(SerParser.SIGNATURE, 0);
    }
    public ATTR(): antlr.TerminalNode | null {
        return this.getToken(SerParser.ATTR, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(SerParser.LPAREN, 0);
    }
    public identList(): IdentListContext | null {
        return this.getRuleContext(0, IdentListContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(SerParser.RPAREN, 0);
    }
    public nameItem(): NameItemContext | null {
        return this.getRuleContext(0, NameItemContext);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_takeExpr;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterTakeExpr) {
             listener.enterTakeExpr(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitTakeExpr) {
             listener.exitTakeExpr(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitTakeExpr) {
            return visitor.visitTakeExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DefaultLineContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DEFAULT(): antlr.TerminalNode {
        return this.getToken(SerParser.DEFAULT, 0)!;
    }
    public literal(): LiteralContext {
        return this.getRuleContext(0, LiteralContext)!;
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_defaultLine;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterDefaultLine) {
             listener.enterDefaultLine(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitDefaultLine) {
             listener.exitDefaultLine(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitDefaultLine) {
            return visitor.visitDefaultLine(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MapBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MAP(): antlr.TerminalNode {
        return this.getToken(SerParser.MAP, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(SerParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(SerParser.RBRACE, 0)!;
    }
    public mapEntry(): MapEntryContext[];
    public mapEntry(i: number): MapEntryContext | null;
    public mapEntry(i?: number): MapEntryContext[] | MapEntryContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MapEntryContext);
        }

        return this.getRuleContext(i, MapEntryContext);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_mapBlock;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterMapBlock) {
             listener.enterMapBlock(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitMapBlock) {
             listener.exitMapBlock(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitMapBlock) {
            return visitor.visitMapBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MapEntryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public valueToken(): ValueTokenContext[];
    public valueToken(i: number): ValueTokenContext | null;
    public valueToken(i?: number): ValueTokenContext[] | ValueTokenContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueTokenContext);
        }

        return this.getRuleContext(i, ValueTokenContext);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(SerParser.COLON, 0)!;
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_mapEntry;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterMapEntry) {
             listener.enterMapEntry(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitMapEntry) {
             listener.exitMapEntry(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitMapEntry) {
            return visitor.visitMapEntry(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BuildDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BUILD(): antlr.TerminalNode {
        return this.getToken(SerParser.BUILD, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(SerParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(SerParser.RBRACE, 0)!;
    }
    public buildField(): BuildFieldContext[];
    public buildField(i: number): BuildFieldContext | null;
    public buildField(i?: number): BuildFieldContext[] | BuildFieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BuildFieldContext);
        }

        return this.getRuleContext(i, BuildFieldContext);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_buildDecl;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterBuildDecl) {
             listener.enterBuildDecl(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitBuildDecl) {
             listener.exitBuildDecl(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitBuildDecl) {
            return visitor.visitBuildDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BuildFieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public buildFieldName(): BuildFieldNameContext {
        return this.getRuleContext(0, BuildFieldNameContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(SerParser.COLON, 0)!;
    }
    public buildExpr(): BuildExprContext {
        return this.getRuleContext(0, BuildExprContext)!;
    }
    public pipelineStep(): PipelineStepContext[];
    public pipelineStep(i: number): PipelineStepContext | null;
    public pipelineStep(i?: number): PipelineStepContext[] | PipelineStepContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PipelineStepContext);
        }

        return this.getRuleContext(i, PipelineStepContext);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_buildField;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterBuildField) {
             listener.enterBuildField(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitBuildField) {
             listener.exitBuildField(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitBuildField) {
            return visitor.visitBuildField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BuildFieldNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nameItem(): NameItemContext | null {
        return this.getRuleContext(0, NameItemContext);
    }
    public KEY(): antlr.TerminalNode | null {
        return this.getToken(SerParser.KEY, 0);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(SerParser.DEFAULT, 0);
    }
    public OWNER(): antlr.TerminalNode | null {
        return this.getToken(SerParser.OWNER, 0);
    }
    public SIGNATURE(): antlr.TerminalNode | null {
        return this.getToken(SerParser.SIGNATURE, 0);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_buildFieldName;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterBuildFieldName) {
             listener.enterBuildFieldName(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitBuildFieldName) {
             listener.exitBuildFieldName(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitBuildFieldName) {
            return visitor.visitBuildFieldName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TraceEntryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(SerParser.FROM, 0)!;
    }
    public traceTarget(): TraceTargetContext {
        return this.getRuleContext(0, TraceTargetContext)!;
    }
    public buildDecl(): BuildDeclContext {
        return this.getRuleContext(0, BuildDeclContext)!;
    }
    public whenDecl(): WhenDeclContext[];
    public whenDecl(i: number): WhenDeclContext | null;
    public whenDecl(i?: number): WhenDeclContext[] | WhenDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(WhenDeclContext);
        }

        return this.getRuleContext(i, WhenDeclContext);
    }
    public letDecl(): LetDeclContext[];
    public letDecl(i: number): LetDeclContext | null;
    public letDecl(i?: number): LetDeclContext[] | LetDeclContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LetDeclContext);
        }

        return this.getRuleContext(i, LetDeclContext);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_traceEntry;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterTraceEntry) {
             listener.enterTraceEntry(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitTraceEntry) {
             listener.exitTraceEntry(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitTraceEntry) {
            return visitor.visitTraceEntry(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhenDeclContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHEN(): antlr.TerminalNode {
        return this.getToken(SerParser.WHEN, 0)!;
    }
    public ANNOTATION(): antlr.TerminalNode | null {
        return this.getToken(SerParser.ANNOTATION, 0);
    }
    public annotationRef(): AnnotationRefContext | null {
        return this.getRuleContext(0, AnnotationRefContext);
    }
    public ON(): antlr.TerminalNode | null {
        return this.getToken(SerParser.ON, 0);
    }
    public elementRef(): ElementRefContext | null {
        return this.getRuleContext(0, ElementRefContext);
    }
    public METHOD(): antlr.TerminalNode | null {
        return this.getToken(SerParser.METHOD, 0);
    }
    public methodPattern(): MethodPatternContext | null {
        return this.getRuleContext(0, MethodPatternContext);
    }
    public CALL(): antlr.TerminalNode | null {
        return this.getToken(SerParser.CALL, 0);
    }
    public FIELD(): antlr.TerminalNode | null {
        return this.getToken(SerParser.FIELD, 0);
    }
    public NAME(): antlr.TerminalNode | null {
        return this.getToken(SerParser.NAME, 0);
    }
    public valueToken(): ValueTokenContext | null {
        return this.getRuleContext(0, ValueTokenContext);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(SerParser.TYPE, 0);
    }
    public qualifiedName(): QualifiedNameContext | null {
        return this.getRuleContext(0, QualifiedNameContext);
    }
    public PARAMETER(): antlr.TerminalNode | null {
        return this.getToken(SerParser.PARAMETER, 0);
    }
    public OWNER(): antlr.TerminalNode | null {
        return this.getToken(SerParser.OWNER, 0);
    }
    public ASSIGNMENT(): antlr.TerminalNode | null {
        return this.getToken(SerParser.ASSIGNMENT, 0);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_whenDecl;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterWhenDecl) {
             listener.enterWhenDecl(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitWhenDecl) {
             listener.exitWhenDecl(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitWhenDecl) {
            return visitor.visitWhenDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TraceTargetContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FIELD(): antlr.TerminalNode | null {
        return this.getToken(SerParser.FIELD, 0);
    }
    public CALL(): antlr.TerminalNode | null {
        return this.getToken(SerParser.CALL, 0);
    }
    public PARAMETER(): antlr.TerminalNode | null {
        return this.getToken(SerParser.PARAMETER, 0);
    }
    public METHOD(): antlr.TerminalNode | null {
        return this.getToken(SerParser.METHOD, 0);
    }
    public RETURN(): antlr.TerminalNode | null {
        return this.getToken(SerParser.RETURN, 0);
    }
    public ASSIGNMENT(): antlr.TerminalNode | null {
        return this.getToken(SerParser.ASSIGNMENT, 0);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_traceTarget;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterTraceTarget) {
             listener.enterTraceTarget(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitTraceTarget) {
             listener.exitTraceTarget(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitTraceTarget) {
            return visitor.visitTraceTarget(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BuildExprContext extends antlr.ParserRuleContext {
    public _refName?: NameItemContext;
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(SerParser.STRING, 0);
    }
    public nameItem(): NameItemContext | null {
        return this.getRuleContext(0, NameItemContext);
    }
    public CONCAT(): antlr.TerminalNode | null {
        return this.getToken(SerParser.CONCAT, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(SerParser.LPAREN, 0);
    }
    public concatList(): ConcatListContext | null {
        return this.getRuleContext(0, ConcatListContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(SerParser.RPAREN, 0);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_buildExpr;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterBuildExpr) {
             listener.enterBuildExpr(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitBuildExpr) {
             listener.exitBuildExpr(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitBuildExpr) {
            return visitor.visitBuildExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConcatListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public concatItem(): ConcatItemContext[];
    public concatItem(i: number): ConcatItemContext | null;
    public concatItem(i?: number): ConcatItemContext[] | ConcatItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConcatItemContext);
        }

        return this.getRuleContext(i, ConcatItemContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SerParser.COMMA);
    	} else {
    		return this.getToken(SerParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_concatList;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterConcatList) {
             listener.enterConcatList(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitConcatList) {
             listener.exitConcatList(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitConcatList) {
            return visitor.visitConcatList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ConcatItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nameItem(): NameItemContext | null {
        return this.getRuleContext(0, NameItemContext);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(SerParser.STRING, 0);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_concatItem;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterConcatItem) {
             listener.enterConcatItem(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitConcatItem) {
             listener.exitConcatItem(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitConcatItem) {
            return visitor.visitConcatItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PipelineStepContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PIPE(): antlr.TerminalNode {
        return this.getToken(SerParser.PIPE, 0)!;
    }
    public NORMALIZE(): antlr.TerminalNode | null {
        return this.getToken(SerParser.NORMALIZE, 0);
    }
    public IDENT(): antlr.TerminalNode | null {
        return this.getToken(SerParser.IDENT, 0);
    }
    public REGEX(): antlr.TerminalNode | null {
        return this.getToken(SerParser.REGEX, 0);
    }
    public STRING(): antlr.TerminalNode[];
    public STRING(i: number): antlr.TerminalNode | null;
    public STRING(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SerParser.STRING);
    	} else {
    		return this.getToken(SerParser.STRING, i);
    	}
    }
    public GROUP(): antlr.TerminalNode | null {
        return this.getToken(SerParser.GROUP, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(SerParser.INT, 0);
    }
    public REPLACE(): antlr.TerminalNode | null {
        return this.getToken(SerParser.REPLACE, 0);
    }
    public MAP(): antlr.TerminalNode | null {
        return this.getToken(SerParser.MAP, 0);
    }
    public LBRACE(): antlr.TerminalNode | null {
        return this.getToken(SerParser.LBRACE, 0);
    }
    public RBRACE(): antlr.TerminalNode | null {
        return this.getToken(SerParser.RBRACE, 0);
    }
    public mapEntry(): MapEntryContext[];
    public mapEntry(i: number): MapEntryContext | null;
    public mapEntry(i?: number): MapEntryContext[] | MapEntryContext | null {
        if (i === undefined) {
            return this.getRuleContexts(MapEntryContext);
        }

        return this.getRuleContext(i, MapEntryContext);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_pipelineStep;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterPipelineStep) {
             listener.enterPipelineStep(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitPipelineStep) {
             listener.exitPipelineStep(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitPipelineStep) {
            return visitor.visitPipelineStep(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MethodPatternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(SerParser.DOT, 0)!;
    }
    public LBRACK(): antlr.TerminalNode | null {
        return this.getToken(SerParser.LBRACK, 0);
    }
    public identList(): IdentListContext | null {
        return this.getRuleContext(0, IdentListContext);
    }
    public RBRACK(): antlr.TerminalNode | null {
        return this.getToken(SerParser.RBRACK, 0);
    }
    public IDENT(): antlr.TerminalNode | null {
        return this.getToken(SerParser.IDENT, 0);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_methodPattern;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterMethodPattern) {
             listener.enterMethodPattern(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitMethodPattern) {
             listener.exitMethodPattern(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitMethodPattern) {
            return visitor.visitMethodPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode[];
    public IDENT(i: number): antlr.TerminalNode | null;
    public IDENT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SerParser.IDENT);
    	} else {
    		return this.getToken(SerParser.IDENT, i);
    	}
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SerParser.DOT);
    	} else {
    		return this.getToken(SerParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_qualifiedName;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterQualifiedName) {
             listener.enterQualifiedName(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitQualifiedName) {
             listener.exitQualifiedName(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitQualifiedName) {
            return visitor.visitQualifiedName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AnnotationRefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AT(): antlr.TerminalNode {
        return this.getToken(SerParser.AT, 0)!;
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(SerParser.IDENT, 0)!;
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(SerParser.STAR, 0);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_annotationRef;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterAnnotationRef) {
             listener.enterAnnotationRef(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitAnnotationRef) {
             listener.exitAnnotationRef(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitAnnotationRef) {
            return visitor.visitAnnotationRef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DecoratorRefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(SerParser.IDENT, 0)!;
    }
    public AT(): antlr.TerminalNode | null {
        return this.getToken(SerParser.AT, 0);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_decoratorRef;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterDecoratorRef) {
             listener.enterDecoratorRef(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitDecoratorRef) {
             listener.exitDecoratorRef(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitDecoratorRef) {
            return visitor.visitDecoratorRef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ElementRefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CLASS(): antlr.TerminalNode | null {
        return this.getToken(SerParser.CLASS, 0);
    }
    public METHOD(): antlr.TerminalNode | null {
        return this.getToken(SerParser.METHOD, 0);
    }
    public FIELD(): antlr.TerminalNode | null {
        return this.getToken(SerParser.FIELD, 0);
    }
    public PARAMETER(): antlr.TerminalNode | null {
        return this.getToken(SerParser.PARAMETER, 0);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_elementRef;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterElementRef) {
             listener.enterElementRef(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitElementRef) {
             listener.exitElementRef(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitElementRef) {
            return visitor.visitElementRef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nameItem(): NameItemContext[];
    public nameItem(i: number): NameItemContext | null;
    public nameItem(i?: number): NameItemContext[] | NameItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NameItemContext);
        }

        return this.getRuleContext(i, NameItemContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SerParser.COMMA);
    	} else {
    		return this.getToken(SerParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_identList;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterIdentList) {
             listener.enterIdentList(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitIdentList) {
             listener.exitIdentList(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitIdentList) {
            return visitor.visitIdentList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NameItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode | null {
        return this.getToken(SerParser.IDENT, 0);
    }
    public NAME(): antlr.TerminalNode | null {
        return this.getToken(SerParser.NAME, 0);
    }
    public VALUE(): antlr.TerminalNode | null {
        return this.getToken(SerParser.VALUE, 0);
    }
    public RAW(): antlr.TerminalNode | null {
        return this.getToken(SerParser.RAW, 0);
    }
    public TYPE(): antlr.TerminalNode | null {
        return this.getToken(SerParser.TYPE, 0);
    }
    public METHOD(): antlr.TerminalNode | null {
        return this.getToken(SerParser.METHOD, 0);
    }
    public CLASS(): antlr.TerminalNode | null {
        return this.getToken(SerParser.CLASS, 0);
    }
    public FIELD(): antlr.TerminalNode | null {
        return this.getToken(SerParser.FIELD, 0);
    }
    public CALL(): antlr.TerminalNode | null {
        return this.getToken(SerParser.CALL, 0);
    }
    public PARAMETER(): antlr.TerminalNode | null {
        return this.getToken(SerParser.PARAMETER, 0);
    }
    public RETURN(): antlr.TerminalNode | null {
        return this.getToken(SerParser.RETURN, 0);
    }
    public ASSIGNMENT(): antlr.TerminalNode | null {
        return this.getToken(SerParser.ASSIGNMENT, 0);
    }
    public NEW(): antlr.TerminalNode | null {
        return this.getToken(SerParser.NEW, 0);
    }
    public LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SerParser.LITERAL, 0);
    }
    public DECORATOR(): antlr.TerminalNode | null {
        return this.getToken(SerParser.DECORATOR, 0);
    }
    public KEY(): antlr.TerminalNode | null {
        return this.getToken(SerParser.KEY, 0);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(SerParser.DEFAULT, 0);
    }
    public OWNER(): antlr.TerminalNode | null {
        return this.getToken(SerParser.OWNER, 0);
    }
    public SIGNATURE(): antlr.TerminalNode | null {
        return this.getToken(SerParser.SIGNATURE, 0);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_nameItem;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterNameItem) {
             listener.enterNameItem(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitNameItem) {
             listener.exitNameItem(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitNameItem) {
            return visitor.visitNameItem(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(SerParser.STRING, 0);
    }
    public valueToken(): ValueTokenContext | null {
        return this.getRuleContext(0, ValueTokenContext);
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_literal;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueTokenContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(SerParser.IDENT, 0)!;
    }
    public override get ruleIndex(): number {
        return SerParser.RULE_valueToken;
    }
    public override enterRule(listener: SerListener): void {
        if(listener.enterValueToken) {
             listener.enterValueToken(this);
        }
    }
    public override exitRule(listener: SerListener): void {
        if(listener.exitValueToken) {
             listener.exitValueToken(this);
        }
    }
    public override accept<Result>(visitor: SerVisitor<Result>): Result | null {
        if (visitor.visitValueToken) {
            return visitor.visitValueToken(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
