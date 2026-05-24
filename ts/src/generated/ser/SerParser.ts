
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
    public static readonly ARGUMENT = 19;
    public static readonly METHOD = 20;
    public static readonly CLASS = 21;
    public static readonly FIELD = 22;
    public static readonly CALL = 23;
    public static readonly PARAMETER = 24;
    public static readonly RETURN = 25;
    public static readonly ASSIGNMENT = 26;
    public static readonly NEW = 27;
    public static readonly LITERAL = 28;
    public static readonly NAME = 29;
    public static readonly VALUE = 30;
    public static readonly RAW = 31;
    public static readonly TYPE = 32;
    public static readonly OWNER = 33;
    public static readonly SIGNATURE = 34;
    public static readonly ATTR = 35;
    public static readonly CONCAT = 36;
    public static readonly NORMALIZE = 37;
    public static readonly REGEX = 38;
    public static readonly REPLACE = 39;
    public static readonly GROUP = 40;
    public static readonly PLAIN = 41;
    public static readonly PLACEHOLDER = 42;
    public static readonly EQ = 43;
    public static readonly COLON = 44;
    public static readonly COMMA = 45;
    public static readonly DOT = 46;
    public static readonly PIPE = 47;
    public static readonly AT = 48;
    public static readonly STAR = 49;
    public static readonly LBRACE = 50;
    public static readonly RBRACE = 51;
    public static readonly LBRACK = 52;
    public static readonly RBRACK = 53;
    public static readonly LPAREN = 54;
    public static readonly RPAREN = 55;
    public static readonly STRING = 56;
    public static readonly IDENT = 57;
    public static readonly INT = 58;
    public static readonly LINE_COMMENT = 59;
    public static readonly WS = 60;
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
    public static readonly RULE_elementRef = 28;
    public static readonly RULE_identList = 29;
    public static readonly RULE_nameItem = 30;
    public static readonly RULE_literal = 31;
    public static readonly RULE_valueToken = 32;

    public static readonly literalNames = [
        null, "'rule'", "'trace'", "'endpoint'", "'fact'", "'find'", "'with'", 
        "'let'", "'from'", "'on'", "'take'", "'default'", "'map'", "'build'", 
        "'external'", "'when'", "'key'", "'resolve'", "'annotation'", "'argument'", 
        "'method'", "'class'", "'field'", "'call'", "'parameter'", "'return'", 
        "'assignment'", "'new'", "'literal'", "'name'", "'value'", "'raw'", 
        "'type'", "'owner'", "'signature'", "'attr'", "'concat'", "'normalize'", 
        "'regex'", "'replace'", "'group'", "'plain'", "'placeholder'", "'='", 
        "':'", "','", "'.'", "'|'", "'@'", "'*'", "'{'", "'}'", "'['", "']'", 
        "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, "RULE", "TRACE", "ENDPOINT", "FACT", "FIND", "WITH", "LET", 
        "FROM", "ON", "TAKE", "DEFAULT", "MAP", "BUILD", "EXTERNAL", "WHEN", 
        "KEY", "RESOLVE", "ANNOTATION", "ARGUMENT", "METHOD", "CLASS", "FIELD", 
        "CALL", "PARAMETER", "RETURN", "ASSIGNMENT", "NEW", "LITERAL", "NAME", 
        "VALUE", "RAW", "TYPE", "OWNER", "SIGNATURE", "ATTR", "CONCAT", 
        "NORMALIZE", "REGEX", "REPLACE", "GROUP", "PLAIN", "PLACEHOLDER", 
        "EQ", "COLON", "COMMA", "DOT", "PIPE", "AT", "STAR", "LBRACE", "RBRACE", 
        "LBRACK", "RBRACK", "LPAREN", "RPAREN", "STRING", "IDENT", "INT", 
        "LINE_COMMENT", "WS"
    ];
    public static readonly ruleNames = [
        "ruleFile", "traceFile", "ruleDecl", "traceDecl", "endpointDecl", 
        "factDecl", "ruleTargetDecl", "findDecl", "letDecl", "sourceLine", 
        "sourceExpr", "takeExpr", "defaultLine", "mapBlock", "mapEntry", 
        "buildDecl", "buildField", "buildFieldName", "traceEntry", "whenDecl", 
        "traceTarget", "buildExpr", "concatList", "concatItem", "pipelineStep", 
        "methodPattern", "qualifiedName", "annotationRef", "elementRef", 
        "identList", "nameItem", "literal", "valueToken",
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
            this.state = 66;
            this.ruleDecl();
            this.state = 67;
            this.ruleTargetDecl();
            this.state = 68;
            this.findDecl();
            this.state = 72;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 69;
                this.letDecl();
                }
                }
                this.state = 74;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 75;
            this.buildDecl();
            this.state = 76;
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
            this.state = 78;
            this.traceDecl();
            this.state = 82;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 8) {
                {
                {
                this.state = 79;
                this.traceEntry();
                }
                }
                this.state = 84;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 85;
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
            this.state = 87;
            this.match(SerParser.RULE);
            this.state = 88;
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
            this.state = 90;
            this.match(SerParser.TRACE);
            this.state = 91;
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
            this.state = 93;
            this.match(SerParser.ENDPOINT);
            this.state = 94;
            this.valueToken();
            this.state = 95;
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
            this.state = 97;
            this.match(SerParser.FACT);
            this.state = 98;
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
            this.state = 102;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SerParser.ENDPOINT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 100;
                this.endpointDecl();
                }
                break;
            case SerParser.FACT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 101;
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
            this.state = 132;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 4, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 104;
                this.match(SerParser.FIND);
                this.state = 105;
                this.match(SerParser.METHOD);
                this.state = 106;
                this.match(SerParser.WITH);
                this.state = 107;
                this.match(SerParser.ANNOTATION);
                this.state = 108;
                this.annotationRef();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 109;
                this.match(SerParser.FIND);
                this.state = 110;
                this.match(SerParser.METHOD);
                this.state = 111;
                this.methodPattern();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 112;
                this.match(SerParser.FIND);
                this.state = 113;
                this.match(SerParser.CLASS);
                this.state = 114;
                this.match(SerParser.WITH);
                this.state = 115;
                this.match(SerParser.ANNOTATION);
                this.state = 116;
                this.annotationRef();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 117;
                this.match(SerParser.FIND);
                this.state = 118;
                this.match(SerParser.CLASS);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 119;
                this.match(SerParser.FIND);
                this.state = 120;
                this.match(SerParser.FIELD);
                this.state = 121;
                this.match(SerParser.WITH);
                this.state = 122;
                this.match(SerParser.ANNOTATION);
                this.state = 123;
                this.annotationRef();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 124;
                this.match(SerParser.FIND);
                this.state = 125;
                this.match(SerParser.FIELD);
                this.state = 126;
                localContext._fieldName = this.nameItem();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 127;
                this.match(SerParser.FIND);
                this.state = 128;
                localContext._genericFindKind = this.nameItem();
                this.state = 130;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293986304) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 33554439) !== 0)) {
                    {
                    this.state = 129;
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
            this.state = 134;
            this.match(SerParser.LET);
            this.state = 135;
            localContext._letName = this.nameItem();
            this.state = 136;
            this.match(SerParser.EQ);
            this.state = 138;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 137;
                this.sourceLine();
                }
                }
                this.state = 140;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 8);
            this.state = 143;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 142;
                this.defaultLine();
                }
            }

            this.state = 146;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 145;
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
            this.state = 148;
            this.match(SerParser.FROM);
            this.state = 149;
            this.sourceExpr();
            this.state = 150;
            this.match(SerParser.TAKE);
            this.state = 151;
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
            this.state = 183;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 153;
                this.match(SerParser.ANNOTATION);
                this.state = 154;
                this.match(SerParser.ON);
                this.state = 155;
                this.elementRef();
                this.state = 156;
                this.annotationRef();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 158;
                this.match(SerParser.ARGUMENT);
                this.state = 159;
                this.match(SerParser.LBRACK);
                this.state = 160;
                this.match(SerParser.INT);
                this.state = 161;
                this.match(SerParser.RBRACK);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 162;
                this.match(SerParser.CALL);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 163;
                this.match(SerParser.METHOD);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 164;
                this.match(SerParser.CLASS);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 165;
                this.match(SerParser.FIELD);
                this.state = 167;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293986304) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 33554439) !== 0)) {
                    {
                    this.state = 166;
                    localContext._sourceName = this.nameItem();
                    }
                }

                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 169;
                this.match(SerParser.PARAMETER);
                this.state = 171;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293986304) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 33554439) !== 0)) {
                    {
                    this.state = 170;
                    localContext._sourceName = this.nameItem();
                    }
                }

                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 173;
                this.match(SerParser.RETURN);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 174;
                this.match(SerParser.ASSIGNMENT);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 175;
                this.match(SerParser.NEW);
                this.state = 176;
                this.qualifiedName();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 177;
                this.match(SerParser.LITERAL);
                this.state = 178;
                this.literal();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 179;
                localContext._genericSourceKind = this.nameItem();
                this.state = 181;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293986304) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 33554439) !== 0)) {
                    {
                    this.state = 180;
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
            this.state = 197;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 12, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 185;
                this.match(SerParser.NAME);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 186;
                this.match(SerParser.VALUE);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 187;
                this.match(SerParser.RAW);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 188;
                this.match(SerParser.TYPE);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 189;
                this.match(SerParser.OWNER);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 190;
                this.match(SerParser.SIGNATURE);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 191;
                this.match(SerParser.ATTR);
                this.state = 192;
                this.match(SerParser.LPAREN);
                this.state = 193;
                this.identList();
                this.state = 194;
                this.match(SerParser.RPAREN);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 196;
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
            this.state = 199;
            this.match(SerParser.DEFAULT);
            this.state = 200;
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
            this.state = 202;
            this.match(SerParser.MAP);
            this.state = 203;
            this.match(SerParser.LBRACE);
            this.state = 207;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 57) {
                {
                {
                this.state = 204;
                this.mapEntry();
                }
                }
                this.state = 209;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 210;
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
            this.state = 212;
            this.valueToken();
            this.state = 213;
            this.match(SerParser.COLON);
            this.state = 214;
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
            this.state = 216;
            this.match(SerParser.BUILD);
            this.state = 217;
            this.match(SerParser.LBRACE);
            this.state = 221;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293986304) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 33554439) !== 0)) {
                {
                {
                this.state = 218;
                this.buildField();
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
    public buildField(): BuildFieldContext {
        let localContext = new BuildFieldContext(this.context, this.state);
        this.enterRule(localContext, 32, SerParser.RULE_buildField);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 226;
            this.buildFieldName();
            this.state = 227;
            this.match(SerParser.COLON);
            this.state = 228;
            this.buildExpr();
            this.state = 232;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 47) {
                {
                {
                this.state = 229;
                this.pipelineStep();
                }
                }
                this.state = 234;
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
            this.state = 240;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 16, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 235;
                this.nameItem();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 236;
                this.match(SerParser.KEY);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 237;
                this.match(SerParser.DEFAULT);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 238;
                this.match(SerParser.OWNER);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 239;
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
            this.state = 242;
            this.match(SerParser.FROM);
            this.state = 243;
            this.traceTarget();
            this.state = 247;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 15) {
                {
                {
                this.state = 244;
                this.whenDecl();
                }
                }
                this.state = 249;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 253;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 250;
                this.letDecl();
                }
                }
                this.state = 255;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 256;
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
            this.state = 302;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 258;
                this.match(SerParser.WHEN);
                this.state = 259;
                this.match(SerParser.ANNOTATION);
                this.state = 260;
                this.annotationRef();
                this.state = 261;
                this.match(SerParser.ON);
                this.state = 262;
                this.elementRef();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 264;
                this.match(SerParser.WHEN);
                this.state = 265;
                this.match(SerParser.METHOD);
                this.state = 266;
                this.methodPattern();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 267;
                this.match(SerParser.WHEN);
                this.state = 268;
                this.match(SerParser.CALL);
                this.state = 269;
                this.methodPattern();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 270;
                this.match(SerParser.WHEN);
                this.state = 271;
                this.match(SerParser.FIELD);
                this.state = 272;
                this.match(SerParser.NAME);
                this.state = 273;
                this.valueToken();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 274;
                this.match(SerParser.WHEN);
                this.state = 275;
                this.match(SerParser.FIELD);
                this.state = 276;
                this.match(SerParser.TYPE);
                this.state = 277;
                this.qualifiedName();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 278;
                this.match(SerParser.WHEN);
                this.state = 279;
                this.match(SerParser.PARAMETER);
                this.state = 280;
                this.match(SerParser.NAME);
                this.state = 281;
                this.valueToken();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 282;
                this.match(SerParser.WHEN);
                this.state = 283;
                this.match(SerParser.PARAMETER);
                this.state = 284;
                this.match(SerParser.TYPE);
                this.state = 285;
                this.qualifiedName();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 286;
                this.match(SerParser.WHEN);
                this.state = 287;
                this.match(SerParser.METHOD);
                this.state = 288;
                this.match(SerParser.NAME);
                this.state = 289;
                this.valueToken();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 290;
                this.match(SerParser.WHEN);
                this.state = 291;
                this.match(SerParser.CALL);
                this.state = 292;
                this.match(SerParser.NAME);
                this.state = 293;
                this.valueToken();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 294;
                this.match(SerParser.WHEN);
                this.state = 295;
                this.match(SerParser.CALL);
                this.state = 296;
                this.match(SerParser.OWNER);
                this.state = 297;
                this.qualifiedName();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 298;
                this.match(SerParser.WHEN);
                this.state = 299;
                this.match(SerParser.ASSIGNMENT);
                this.state = 300;
                this.match(SerParser.FIELD);
                this.state = 301;
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
            this.state = 304;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 131072000) !== 0))) {
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
            this.state = 313;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SerParser.STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 306;
                this.match(SerParser.STRING);
                }
                break;
            case SerParser.DEFAULT:
            case SerParser.KEY:
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
                this.state = 307;
                localContext._refName = this.nameItem();
                }
                break;
            case SerParser.CONCAT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 308;
                this.match(SerParser.CONCAT);
                this.state = 309;
                this.match(SerParser.LPAREN);
                this.state = 310;
                this.concatList();
                this.state = 311;
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
            this.state = 315;
            this.concatItem();
            this.state = 320;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 45) {
                {
                {
                this.state = 316;
                this.match(SerParser.COMMA);
                this.state = 317;
                this.concatItem();
                }
                }
                this.state = 322;
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
            this.state = 325;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SerParser.DEFAULT:
            case SerParser.KEY:
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
                this.state = 323;
                this.nameItem();
                }
                break;
            case SerParser.STRING:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 324;
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
            this.state = 349;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 327;
                this.match(SerParser.PIPE);
                this.state = 328;
                this.match(SerParser.NORMALIZE);
                this.state = 329;
                this.match(SerParser.IDENT);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 330;
                this.match(SerParser.PIPE);
                this.state = 331;
                this.match(SerParser.REGEX);
                this.state = 332;
                this.match(SerParser.STRING);
                this.state = 333;
                this.match(SerParser.GROUP);
                this.state = 334;
                this.match(SerParser.INT);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 335;
                this.match(SerParser.PIPE);
                this.state = 336;
                this.match(SerParser.REPLACE);
                this.state = 337;
                this.match(SerParser.STRING);
                this.state = 338;
                this.match(SerParser.STRING);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 339;
                this.match(SerParser.PIPE);
                this.state = 340;
                this.match(SerParser.MAP);
                this.state = 341;
                this.match(SerParser.LBRACE);
                this.state = 345;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 57) {
                    {
                    {
                    this.state = 342;
                    this.mapEntry();
                    }
                    }
                    this.state = 347;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 348;
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
            this.state = 361;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 25, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 351;
                this.qualifiedName();
                this.state = 352;
                this.match(SerParser.DOT);
                this.state = 353;
                this.match(SerParser.LBRACK);
                this.state = 354;
                this.identList();
                this.state = 355;
                this.match(SerParser.RBRACK);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 357;
                this.qualifiedName();
                this.state = 358;
                this.match(SerParser.DOT);
                this.state = 359;
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
            this.state = 363;
            this.match(SerParser.IDENT);
            this.state = 368;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 26, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 364;
                    this.match(SerParser.DOT);
                    this.state = 365;
                    this.match(SerParser.IDENT);
                    }
                    }
                }
                this.state = 370;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 26, this.context);
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
            this.state = 376;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 27, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 371;
                this.match(SerParser.AT);
                this.state = 372;
                this.match(SerParser.IDENT);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 373;
                this.match(SerParser.AT);
                this.state = 374;
                this.match(SerParser.STAR);
                this.state = 375;
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
    public elementRef(): ElementRefContext {
        let localContext = new ElementRefContext(this.context, this.state);
        this.enterRule(localContext, 56, SerParser.RULE_elementRef);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 378;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 24117248) !== 0))) {
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
        this.enterRule(localContext, 58, SerParser.RULE_identList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 380;
            this.nameItem();
            this.state = 385;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 45) {
                {
                {
                this.state = 381;
                this.match(SerParser.COMMA);
                this.state = 382;
                this.nameItem();
                }
                }
                this.state = 387;
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
        this.enterRule(localContext, 60, SerParser.RULE_nameItem);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 388;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 4293986304) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 33554439) !== 0))) {
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
        this.enterRule(localContext, 62, SerParser.RULE_literal);
        try {
            this.state = 392;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SerParser.STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 390;
                this.match(SerParser.STRING);
                }
                break;
            case SerParser.IDENT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 391;
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
        this.enterRule(localContext, 64, SerParser.RULE_valueToken);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 394;
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
        4,1,60,397,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,1,0,
        1,0,1,0,1,0,5,0,71,8,0,10,0,12,0,74,9,0,1,0,1,0,1,0,1,1,1,1,5,1,
        81,8,1,10,1,12,1,84,9,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,
        1,4,1,4,1,5,1,5,1,5,1,6,1,6,3,6,103,8,6,1,7,1,7,1,7,1,7,1,7,1,7,
        1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
        1,7,1,7,1,7,1,7,3,7,131,8,7,3,7,133,8,7,1,8,1,8,1,8,1,8,4,8,139,
        8,8,11,8,12,8,140,1,8,3,8,144,8,8,1,8,3,8,147,8,8,1,9,1,9,1,9,1,
        9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,1,10,3,10,168,8,10,1,10,1,10,3,10,172,8,10,1,10,1,10,1,10,1,
        10,1,10,1,10,1,10,1,10,3,10,182,8,10,3,10,184,8,10,1,11,1,11,1,11,
        1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,198,8,11,1,12,
        1,12,1,12,1,13,1,13,1,13,5,13,206,8,13,10,13,12,13,209,9,13,1,13,
        1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,5,15,220,8,15,10,15,12,15,
        223,9,15,1,15,1,15,1,16,1,16,1,16,1,16,5,16,231,8,16,10,16,12,16,
        234,9,16,1,17,1,17,1,17,1,17,1,17,3,17,241,8,17,1,18,1,18,1,18,5,
        18,246,8,18,10,18,12,18,249,9,18,1,18,5,18,252,8,18,10,18,12,18,
        255,9,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
        1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
        1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
        1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,303,8,19,1,20,
        1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,314,8,21,1,22,1,22,
        1,22,5,22,319,8,22,10,22,12,22,322,9,22,1,23,1,23,3,23,326,8,23,
        1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
        1,24,1,24,1,24,5,24,344,8,24,10,24,12,24,347,9,24,1,24,3,24,350,
        8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,362,
        8,25,1,26,1,26,1,26,5,26,367,8,26,10,26,12,26,370,9,26,1,27,1,27,
        1,27,1,27,1,27,3,27,377,8,27,1,28,1,28,1,29,1,29,1,29,5,29,384,8,
        29,10,29,12,29,387,9,29,1,30,1,30,1,31,1,31,3,31,393,8,31,1,32,1,
        32,1,32,0,0,33,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
        36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,0,3,2,0,20,20,22,26,
        2,0,20,22,24,24,4,0,11,11,16,16,20,34,57,57,429,0,66,1,0,0,0,2,78,
        1,0,0,0,4,87,1,0,0,0,6,90,1,0,0,0,8,93,1,0,0,0,10,97,1,0,0,0,12,
        102,1,0,0,0,14,132,1,0,0,0,16,134,1,0,0,0,18,148,1,0,0,0,20,183,
        1,0,0,0,22,197,1,0,0,0,24,199,1,0,0,0,26,202,1,0,0,0,28,212,1,0,
        0,0,30,216,1,0,0,0,32,226,1,0,0,0,34,240,1,0,0,0,36,242,1,0,0,0,
        38,302,1,0,0,0,40,304,1,0,0,0,42,313,1,0,0,0,44,315,1,0,0,0,46,325,
        1,0,0,0,48,349,1,0,0,0,50,361,1,0,0,0,52,363,1,0,0,0,54,376,1,0,
        0,0,56,378,1,0,0,0,58,380,1,0,0,0,60,388,1,0,0,0,62,392,1,0,0,0,
        64,394,1,0,0,0,66,67,3,4,2,0,67,68,3,12,6,0,68,72,3,14,7,0,69,71,
        3,16,8,0,70,69,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,
        73,75,1,0,0,0,74,72,1,0,0,0,75,76,3,30,15,0,76,77,5,0,0,1,77,1,1,
        0,0,0,78,82,3,6,3,0,79,81,3,36,18,0,80,79,1,0,0,0,81,84,1,0,0,0,
        82,80,1,0,0,0,82,83,1,0,0,0,83,85,1,0,0,0,84,82,1,0,0,0,85,86,5,
        0,0,1,86,3,1,0,0,0,87,88,5,1,0,0,88,89,5,56,0,0,89,5,1,0,0,0,90,
        91,5,2,0,0,91,92,5,56,0,0,92,7,1,0,0,0,93,94,5,3,0,0,94,95,3,64,
        32,0,95,96,3,64,32,0,96,9,1,0,0,0,97,98,5,4,0,0,98,99,3,64,32,0,
        99,11,1,0,0,0,100,103,3,8,4,0,101,103,3,10,5,0,102,100,1,0,0,0,102,
        101,1,0,0,0,103,13,1,0,0,0,104,105,5,5,0,0,105,106,5,20,0,0,106,
        107,5,6,0,0,107,108,5,18,0,0,108,133,3,54,27,0,109,110,5,5,0,0,110,
        111,5,20,0,0,111,133,3,50,25,0,112,113,5,5,0,0,113,114,5,21,0,0,
        114,115,5,6,0,0,115,116,5,18,0,0,116,133,3,54,27,0,117,118,5,5,0,
        0,118,133,5,21,0,0,119,120,5,5,0,0,120,121,5,22,0,0,121,122,5,6,
        0,0,122,123,5,18,0,0,123,133,3,54,27,0,124,125,5,5,0,0,125,126,5,
        22,0,0,126,133,3,60,30,0,127,128,5,5,0,0,128,130,3,60,30,0,129,131,
        3,60,30,0,130,129,1,0,0,0,130,131,1,0,0,0,131,133,1,0,0,0,132,104,
        1,0,0,0,132,109,1,0,0,0,132,112,1,0,0,0,132,117,1,0,0,0,132,119,
        1,0,0,0,132,124,1,0,0,0,132,127,1,0,0,0,133,15,1,0,0,0,134,135,5,
        7,0,0,135,136,3,60,30,0,136,138,5,43,0,0,137,139,3,18,9,0,138,137,
        1,0,0,0,139,140,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,143,
        1,0,0,0,142,144,3,24,12,0,143,142,1,0,0,0,143,144,1,0,0,0,144,146,
        1,0,0,0,145,147,3,26,13,0,146,145,1,0,0,0,146,147,1,0,0,0,147,17,
        1,0,0,0,148,149,5,8,0,0,149,150,3,20,10,0,150,151,5,10,0,0,151,152,
        3,22,11,0,152,19,1,0,0,0,153,154,5,18,0,0,154,155,5,9,0,0,155,156,
        3,56,28,0,156,157,3,54,27,0,157,184,1,0,0,0,158,159,5,19,0,0,159,
        160,5,52,0,0,160,161,5,58,0,0,161,184,5,53,0,0,162,184,5,23,0,0,
        163,184,5,20,0,0,164,184,5,21,0,0,165,167,5,22,0,0,166,168,3,60,
        30,0,167,166,1,0,0,0,167,168,1,0,0,0,168,184,1,0,0,0,169,171,5,24,
        0,0,170,172,3,60,30,0,171,170,1,0,0,0,171,172,1,0,0,0,172,184,1,
        0,0,0,173,184,5,25,0,0,174,184,5,26,0,0,175,176,5,27,0,0,176,184,
        3,52,26,0,177,178,5,28,0,0,178,184,3,62,31,0,179,181,3,60,30,0,180,
        182,3,60,30,0,181,180,1,0,0,0,181,182,1,0,0,0,182,184,1,0,0,0,183,
        153,1,0,0,0,183,158,1,0,0,0,183,162,1,0,0,0,183,163,1,0,0,0,183,
        164,1,0,0,0,183,165,1,0,0,0,183,169,1,0,0,0,183,173,1,0,0,0,183,
        174,1,0,0,0,183,175,1,0,0,0,183,177,1,0,0,0,183,179,1,0,0,0,184,
        21,1,0,0,0,185,198,5,29,0,0,186,198,5,30,0,0,187,198,5,31,0,0,188,
        198,5,32,0,0,189,198,5,33,0,0,190,198,5,34,0,0,191,192,5,35,0,0,
        192,193,5,54,0,0,193,194,3,58,29,0,194,195,5,55,0,0,195,198,1,0,
        0,0,196,198,3,60,30,0,197,185,1,0,0,0,197,186,1,0,0,0,197,187,1,
        0,0,0,197,188,1,0,0,0,197,189,1,0,0,0,197,190,1,0,0,0,197,191,1,
        0,0,0,197,196,1,0,0,0,198,23,1,0,0,0,199,200,5,11,0,0,200,201,3,
        62,31,0,201,25,1,0,0,0,202,203,5,12,0,0,203,207,5,50,0,0,204,206,
        3,28,14,0,205,204,1,0,0,0,206,209,1,0,0,0,207,205,1,0,0,0,207,208,
        1,0,0,0,208,210,1,0,0,0,209,207,1,0,0,0,210,211,5,51,0,0,211,27,
        1,0,0,0,212,213,3,64,32,0,213,214,5,44,0,0,214,215,3,64,32,0,215,
        29,1,0,0,0,216,217,5,13,0,0,217,221,5,50,0,0,218,220,3,32,16,0,219,
        218,1,0,0,0,220,223,1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,
        224,1,0,0,0,223,221,1,0,0,0,224,225,5,51,0,0,225,31,1,0,0,0,226,
        227,3,34,17,0,227,228,5,44,0,0,228,232,3,42,21,0,229,231,3,48,24,
        0,230,229,1,0,0,0,231,234,1,0,0,0,232,230,1,0,0,0,232,233,1,0,0,
        0,233,33,1,0,0,0,234,232,1,0,0,0,235,241,3,60,30,0,236,241,5,16,
        0,0,237,241,5,11,0,0,238,241,5,33,0,0,239,241,5,34,0,0,240,235,1,
        0,0,0,240,236,1,0,0,0,240,237,1,0,0,0,240,238,1,0,0,0,240,239,1,
        0,0,0,241,35,1,0,0,0,242,243,5,8,0,0,243,247,3,40,20,0,244,246,3,
        38,19,0,245,244,1,0,0,0,246,249,1,0,0,0,247,245,1,0,0,0,247,248,
        1,0,0,0,248,253,1,0,0,0,249,247,1,0,0,0,250,252,3,16,8,0,251,250,
        1,0,0,0,252,255,1,0,0,0,253,251,1,0,0,0,253,254,1,0,0,0,254,256,
        1,0,0,0,255,253,1,0,0,0,256,257,3,30,15,0,257,37,1,0,0,0,258,259,
        5,15,0,0,259,260,5,18,0,0,260,261,3,54,27,0,261,262,5,9,0,0,262,
        263,3,56,28,0,263,303,1,0,0,0,264,265,5,15,0,0,265,266,5,20,0,0,
        266,303,3,50,25,0,267,268,5,15,0,0,268,269,5,23,0,0,269,303,3,50,
        25,0,270,271,5,15,0,0,271,272,5,22,0,0,272,273,5,29,0,0,273,303,
        3,64,32,0,274,275,5,15,0,0,275,276,5,22,0,0,276,277,5,32,0,0,277,
        303,3,52,26,0,278,279,5,15,0,0,279,280,5,24,0,0,280,281,5,29,0,0,
        281,303,3,64,32,0,282,283,5,15,0,0,283,284,5,24,0,0,284,285,5,32,
        0,0,285,303,3,52,26,0,286,287,5,15,0,0,287,288,5,20,0,0,288,289,
        5,29,0,0,289,303,3,64,32,0,290,291,5,15,0,0,291,292,5,23,0,0,292,
        293,5,29,0,0,293,303,3,64,32,0,294,295,5,15,0,0,295,296,5,23,0,0,
        296,297,5,33,0,0,297,303,3,52,26,0,298,299,5,15,0,0,299,300,5,26,
        0,0,300,301,5,22,0,0,301,303,3,64,32,0,302,258,1,0,0,0,302,264,1,
        0,0,0,302,267,1,0,0,0,302,270,1,0,0,0,302,274,1,0,0,0,302,278,1,
        0,0,0,302,282,1,0,0,0,302,286,1,0,0,0,302,290,1,0,0,0,302,294,1,
        0,0,0,302,298,1,0,0,0,303,39,1,0,0,0,304,305,7,0,0,0,305,41,1,0,
        0,0,306,314,5,56,0,0,307,314,3,60,30,0,308,309,5,36,0,0,309,310,
        5,54,0,0,310,311,3,44,22,0,311,312,5,55,0,0,312,314,1,0,0,0,313,
        306,1,0,0,0,313,307,1,0,0,0,313,308,1,0,0,0,314,43,1,0,0,0,315,320,
        3,46,23,0,316,317,5,45,0,0,317,319,3,46,23,0,318,316,1,0,0,0,319,
        322,1,0,0,0,320,318,1,0,0,0,320,321,1,0,0,0,321,45,1,0,0,0,322,320,
        1,0,0,0,323,326,3,60,30,0,324,326,5,56,0,0,325,323,1,0,0,0,325,324,
        1,0,0,0,326,47,1,0,0,0,327,328,5,47,0,0,328,329,5,37,0,0,329,350,
        5,57,0,0,330,331,5,47,0,0,331,332,5,38,0,0,332,333,5,56,0,0,333,
        334,5,40,0,0,334,350,5,58,0,0,335,336,5,47,0,0,336,337,5,39,0,0,
        337,338,5,56,0,0,338,350,5,56,0,0,339,340,5,47,0,0,340,341,5,12,
        0,0,341,345,5,50,0,0,342,344,3,28,14,0,343,342,1,0,0,0,344,347,1,
        0,0,0,345,343,1,0,0,0,345,346,1,0,0,0,346,348,1,0,0,0,347,345,1,
        0,0,0,348,350,5,51,0,0,349,327,1,0,0,0,349,330,1,0,0,0,349,335,1,
        0,0,0,349,339,1,0,0,0,350,49,1,0,0,0,351,352,3,52,26,0,352,353,5,
        46,0,0,353,354,5,52,0,0,354,355,3,58,29,0,355,356,5,53,0,0,356,362,
        1,0,0,0,357,358,3,52,26,0,358,359,5,46,0,0,359,360,5,57,0,0,360,
        362,1,0,0,0,361,351,1,0,0,0,361,357,1,0,0,0,362,51,1,0,0,0,363,368,
        5,57,0,0,364,365,5,46,0,0,365,367,5,57,0,0,366,364,1,0,0,0,367,370,
        1,0,0,0,368,366,1,0,0,0,368,369,1,0,0,0,369,53,1,0,0,0,370,368,1,
        0,0,0,371,372,5,48,0,0,372,377,5,57,0,0,373,374,5,48,0,0,374,375,
        5,49,0,0,375,377,5,57,0,0,376,371,1,0,0,0,376,373,1,0,0,0,377,55,
        1,0,0,0,378,379,7,1,0,0,379,57,1,0,0,0,380,385,3,60,30,0,381,382,
        5,45,0,0,382,384,3,60,30,0,383,381,1,0,0,0,384,387,1,0,0,0,385,383,
        1,0,0,0,385,386,1,0,0,0,386,59,1,0,0,0,387,385,1,0,0,0,388,389,7,
        2,0,0,389,61,1,0,0,0,390,393,5,56,0,0,391,393,3,64,32,0,392,390,
        1,0,0,0,392,391,1,0,0,0,393,63,1,0,0,0,394,395,5,57,0,0,395,65,1,
        0,0,0,30,72,82,102,130,132,140,143,146,167,171,181,183,197,207,221,
        232,240,247,253,302,313,320,325,345,349,361,368,376,385,392
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
