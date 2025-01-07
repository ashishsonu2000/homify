package com.mysociety.models;



import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "Expense_Details", schema = "public")
@Getter
@Setter
public class ExpenseDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long expenseId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ExpenseType expenseType;

    @Column(nullable = false)
    private Double amount;

    @Column(nullable = false)
    private LocalDate expenseDate;

    @Column(nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "addedBy", nullable = false)
    private MemberDetails addedBy;

    private String receiptVoucherNo;

    // Getters and Setters
}

