package com.poseidon.javastatic.extract.assistant;

import java.util.Map;

public record ExtractedRecord(
        String rule,
        String factType,
        String endpointType,
        String endpointDirection,
        Map<String, String> fields,
        String projectFilePath,
        String absoluteFilePath,
        int startLine,
        int endLine,
        String enclosingMethod) {}
