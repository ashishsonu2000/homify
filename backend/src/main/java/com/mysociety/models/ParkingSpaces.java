package com.mysociety.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "Parking_Spaces", schema = "public")
@Getter
@Setter
public class ParkingSpaces {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long parkingId;

    @ManyToOne
    @JoinColumn(name = "flatNumber", nullable = false)
    private MemberDetails flatNumber;

    @Column(nullable = false)
    private String vehicleNumber;

    @Column(nullable = false)
    private String vehicleType;

    @Column(nullable = false)
    private String parkingSlot;

    private LocalDate allottedDate;

    // Getters and Setters
}

