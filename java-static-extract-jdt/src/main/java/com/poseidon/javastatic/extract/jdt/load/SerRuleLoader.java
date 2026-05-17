package com.poseidon.javastatic.extract.jdt.load;

import com.poseidon.javastatic.extract.language.AntlrSerRuleParser;
import com.poseidon.javastatic.extract.language.SerRuleParser;
import com.poseidon.javastatic.extract.language.SerTraceRuleParser;
import com.poseidon.javastatic.extract.rule.StaticExtractRule;
import com.poseidon.javastatic.extract.trace.StaticTraceRuleSet;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.stream.Stream;

public class SerRuleLoader {

    public static final String APPLICATION_RULE_BASE = "static-extract/rules/";
    public static final String APPLICATION_TRACE_BASE = "static-extract/traces/";
    public static final String INDEX_FILE = "index.txt";

    private final ClassLoader classLoader;
    private final SerRuleParser parser;
    private final SerTraceRuleParser traceParser;

    public SerRuleLoader() {
        this(Thread.currentThread().getContextClassLoader(), new AntlrSerRuleParser());
    }

    public SerRuleLoader(ClassLoader classLoader, AntlrSerRuleParser parser) {
        this(classLoader, parser, parser);
    }

    public SerRuleLoader(ClassLoader classLoader, SerRuleParser parser) {
        this(
                classLoader,
                parser,
                parser instanceof SerTraceRuleParser traceRuleParser
                        ? traceRuleParser
                        : new AntlrSerRuleParser());
    }

    public SerRuleLoader(ClassLoader classLoader, SerRuleParser parser, SerTraceRuleParser traceParser) {
        this.classLoader = classLoader != null ? classLoader : SerRuleLoader.class.getClassLoader();
        this.parser = parser;
        this.traceParser = traceParser;
    }

    public List<StaticExtractRule> loadAll() {
        return loadApplicationRules();
    }

    public List<StaticExtractRule> loadApplicationRules() {
        return loadRulesFromClasspath(APPLICATION_RULE_BASE, false);
    }

    public List<StaticTraceRuleSet> loadApplicationTraceRules() {
        return loadTraceRulesFromClasspath(APPLICATION_TRACE_BASE, false);
    }

    public List<StaticExtractRule> loadRulesFromDirectory(Path directory) {
        return loadSerFiles(directory).stream().map(this::loadRuleFile).toList();
    }

    public List<StaticTraceRuleSet> loadTraceRulesFromDirectory(Path directory) {
        return loadSerFiles(directory).stream().map(this::loadTraceFile).toList();
    }

    public List<StaticExtractRule> loadRulesFromFiles(List<Path> files) {
        if (files == null || files.isEmpty()) {
            return List.of();
        }
        return files.stream().map(this::loadRuleFile).toList();
    }

    public List<StaticTraceRuleSet> loadTraceRulesFromFiles(List<Path> files) {
        if (files == null || files.isEmpty()) {
            return List.of();
        }
        return files.stream().map(this::loadTraceFile).toList();
    }

    private List<StaticExtractRule> loadRulesFromClasspath(String base, boolean required) {
        List<StaticExtractRule> rules = new ArrayList<>();
        for (String entry : readIndexes(base, required)) {
            rules.add(loadRuleResource(base, entry));
        }
        return rules;
    }

    private List<StaticTraceRuleSet> loadTraceRulesFromClasspath(String base, boolean required) {
        List<StaticTraceRuleSet> rules = new ArrayList<>();
        for (String entry : readIndexes(base, required)) {
            rules.add(loadTraceResource(base, entry));
        }
        return rules;
    }

    private StaticExtractRule loadRuleResource(String base, String relativePath) {
        String resourcePath = base + relativePath;
        try (InputStream input = classLoader.getResourceAsStream(resourcePath)) {
            if (input == null) {
                throw new IllegalStateException("SER rule resource not found: " + resourcePath);
            }
            String source = new String(input.readAllBytes(), StandardCharsets.UTF_8);
            return parser.parse(source);
        } catch (Exception e) {
            throw new IllegalStateException("Failed to load SER rule: " + resourcePath, e);
        }
    }

    private StaticTraceRuleSet loadTraceResource(String base, String relativePath) {
        String resourcePath = base + relativePath;
        try (InputStream input = classLoader.getResourceAsStream(resourcePath)) {
            if (input == null) {
                throw new IllegalStateException("SER trace resource not found: " + resourcePath);
            }
            String source = new String(input.readAllBytes(), StandardCharsets.UTF_8);
            return traceParser.parseTrace(source);
        } catch (Exception e) {
            throw new IllegalStateException("Failed to load SER trace: " + resourcePath, e);
        }
    }

    private StaticExtractRule loadRuleFile(Path file) {
        try {
            return parser.parse(Files.readString(file, StandardCharsets.UTF_8));
        } catch (Exception e) {
            throw new IllegalStateException("Failed to load SER rule file: " + file, e);
        }
    }

    private StaticTraceRuleSet loadTraceFile(Path file) {
        try {
            return traceParser.parseTrace(Files.readString(file, StandardCharsets.UTF_8));
        } catch (Exception e) {
            throw new IllegalStateException("Failed to load SER trace file: " + file, e);
        }
    }

    private List<Path> loadSerFiles(Path directory) {
        if (directory == null || !Files.exists(directory)) {
            return List.of();
        }
        if (!Files.isDirectory(directory)) {
            throw new IllegalArgumentException("SER rule path is not a directory: " + directory);
        }
        try (Stream<Path> stream = Files.walk(directory)) {
            return stream.filter(Files::isRegularFile)
                    .filter(path -> path.getFileName().toString().endsWith(".ser"))
                    .sorted()
                    .toList();
        } catch (Exception e) {
            throw new IllegalStateException("Failed to scan SER rule directory: " + directory, e);
        }
    }

    private List<String> readIndexes(String base, boolean required) {
        String index = base + INDEX_FILE;
        try {
            Enumeration<URL> resources = classLoader.getResources(index);
            List<String> entries = new ArrayList<>();
            while (resources.hasMoreElements()) {
                URL url = resources.nextElement();
                try (InputStream input = url.openStream()) {
                    entries.addAll(readIndexLines(input));
                }
            }
            if (entries.isEmpty() && required) {
                throw new IllegalStateException("SER rule index not found: " + index);
            }
            return entries;
        } catch (Exception e) {
            throw new IllegalStateException("Failed to read SER index: " + index, e);
        }
    }

    private List<String> readIndexLines(InputStream input) throws Exception {
        List<String> lines = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(input, StandardCharsets.UTF_8))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String trimmed = line.trim();
                if (!trimmed.isBlank() && !trimmed.startsWith("#")) {
                    lines.add(trimmed);
                }
            }
        }
        return lines;
    }
}
