package com.mysociety.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Flat_Details", schema = "public")
@Getter
@Setter
public class FlatDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long flatId;

    @Column(nullable = false, unique = true)
    private String flatNumber;

    @Column(nullable = false)
    private String buildingName;

    @Column(nullable = false)
    private Integer floorNumber;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private FlatOccupancyStatus flatOccupancyStatus;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private FlatType flatType;

    private String flatSize;

    // Getters and Setters
}

