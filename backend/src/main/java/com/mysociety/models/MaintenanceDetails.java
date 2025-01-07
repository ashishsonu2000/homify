package com.mysociety.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "Maintenance_Details", schema = "public")
@Getter
@Setter
public class MaintenanceDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long maintenanceId;

    @Column(nullable = false)
    private String flatNumber;

    @Column(nullable = false)
    private Double amount;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MaintenancePeriodType maintenancePeriod;

    private LocalDate paymentDueDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentStatusType paymentStatus;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentMethodType paymentMethod;

    private LocalDate paymentDate;


}

