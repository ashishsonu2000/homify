package com.mysociety.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "Income_Details", schema = "public")
@Getter
@Setter
public class IncomeDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long incomeId;

    @Column(nullable = false)
    private Double amount;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SourceType sourceType;

    @Column(nullable = false)
    private LocalDate incomeDate;

    private String description;

    @ManyToOne
    @JoinColumn(name = "addedBy", nullable = false)
    private MemberDetails addedBy;

    // Getters and Setters
}

