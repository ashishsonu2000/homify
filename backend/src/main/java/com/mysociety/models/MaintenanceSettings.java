package com.mysociety.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Maintenance_Settings", schema = "public")
@Getter
@Setter
public class MaintenanceSettings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long settingId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MaintenanceType maintenanceType;

    @Column(nullable = false)
    private Double amountPerFlat;

    private Double lateFeeCharges;

    private Integer gracePeriodDays;

    // Getters and Setters
}

