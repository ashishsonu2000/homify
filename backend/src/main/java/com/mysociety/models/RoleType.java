package com.mysociety.models;

public enum RoleType {

    ADMIN("ADMIN"), CommitteeMember("CommitteeMember"), Member("Member");

    private final String name;

    RoleType(String name) {
        this.name = name;
    }

    public String getRoleType() {

        return name.toUpperCase();
    }
}
