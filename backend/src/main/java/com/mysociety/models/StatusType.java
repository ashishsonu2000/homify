package com.mysociety.models;

public enum StatusType {

    ACTIVE("ACTIVE"), DEACTIVE("DEACTIVE");

    private final String name;

    StatusType(String name) {
        this.name = name;
    }

    public String getStatusType() {

        return name.toUpperCase();
    }

}
