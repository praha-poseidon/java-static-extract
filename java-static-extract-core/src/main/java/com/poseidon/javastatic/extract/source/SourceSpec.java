package com.poseidon.javastatic.extract.source;

public record SourceSpec(
        JavaElementKind element,
        JavaElementKind on,
        String name,
        String literalValue,
        AnnotationSelector annotation,
        MethodSelector method,
        Integer argumentIndex,
        TakeSpec take) {}
