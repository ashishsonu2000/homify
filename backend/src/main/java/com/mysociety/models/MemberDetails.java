package com.mysociety.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "Member_Details", schema = "public")
@Getter
@Setter
public class MemberDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private Long mobile;

    @Column(nullable = false)
    private String flatNumber;

    @Column(nullable = false)
    private String wing;

    @Column(nullable = false)
    private String parkingNo;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusType status;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RoleType role;

    @Column(nullable = false)
    private LocalDate joiningDate;

    // Relationships
    @OneToMany(mappedBy = "addedBy", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ExpenseDetails> expenses;

    @OneToMany(mappedBy = "addedBy", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<IncomeDetails> incomes;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ComplaintLog> complaints;
}

