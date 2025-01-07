package com.mysociety.services;


import com.mysociety.models.MemberDetails;
import com.mysociety.repositories.MemberDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberDetailsService {

    @Autowired
    private MemberDetailsRepository memberDetailsRepository;

    // Create or Update Member
    public MemberDetails saveMember(MemberDetails memberDetails) {
        return memberDetailsRepository.save(memberDetails);
    }

    // Fetch All Members
    public List<MemberDetails> getAllMembers() {
        return memberDetailsRepository.findAll();
    }

    // Fetch Member By ID
    public Optional<MemberDetails> getMemberById(Long memberId) {
        return memberDetailsRepository.findById(memberId);
    }

    // Fetch Member By Email
    public Optional<MemberDetails> getMemberByEmail(String email) {
        return memberDetailsRepository.findByEmail(email);
    }

    // Fetch Member By Mobile
    public Optional<MemberDetails> getMemberByMobile(Long mobile) {
        return memberDetailsRepository.findByMobile(mobile);
    }

    // Delete Member
    public void deleteMember(Long memberId) {
        memberDetailsRepository.deleteById(memberId);
    }
}

