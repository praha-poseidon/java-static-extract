package com.poseidon.javastatic.extract.rule;

import com.poseidon.javastatic.extract.build.BuildSpec;
import com.poseidon.javastatic.extract.source.LetSpec;

import java.util.List;

public record StaticExtractRule(
        String name,
        String description,
        Boolean enabled,
        Integer priority,
        EndpointSpec endpoint,
        FindSpec find,
        List<LetSpec> lets,
        BuildSpec build) {}
