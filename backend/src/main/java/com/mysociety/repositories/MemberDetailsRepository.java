package com.mysociety.repositories;


import com.mysociety.models.MemberDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberDetailsRepository extends JpaRepository<MemberDetails, Long> {
    Optional<MemberDetails> findByEmail(String email);
    Optional<MemberDetails> findByMobile(Long mobile);
}
