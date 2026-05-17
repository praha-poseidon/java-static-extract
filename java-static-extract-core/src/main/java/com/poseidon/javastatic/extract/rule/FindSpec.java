package com.poseidon.javastatic.extract.rule;

import com.poseidon.javastatic.extract.source.AnnotationSelector;
import com.poseidon.javastatic.extract.source.JavaElementKind;
import com.poseidon.javastatic.extract.source.MethodSelector;

public record FindSpec(
        JavaElementKind target,
        String name,
        AnnotationSelector annotation,
        MethodSelector method) {}
