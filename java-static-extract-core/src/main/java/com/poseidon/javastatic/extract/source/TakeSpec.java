package com.poseidon.javastatic.extract.source;

import java.util.List;

public record TakeSpec(
        TakeKind kind,
        List<String> attributes) {}
