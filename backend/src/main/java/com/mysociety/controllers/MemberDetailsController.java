package com.mysociety.controllers;

import com.mysociety.models.MemberDetails;
import com.mysociety.services.MemberDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/members")
public class MemberDetailsController {

    @Autowired
    private MemberDetailsService memberDetailsService;

    // Create or Update Member
    @PostMapping
    public ResponseEntity<MemberDetails> saveMember(@RequestBody MemberDetails memberDetails) {
        MemberDetails savedMember = memberDetailsService.saveMember(memberDetails);
        return new ResponseEntity<>(savedMember, HttpStatus.CREATED);
    }

    // Get All Members
    @GetMapping
    public ResponseEntity<List<MemberDetails>> getAllMembers() {
        List<MemberDetails> members = memberDetailsService.getAllMembers();
        return new ResponseEntity<>(members, HttpStatus.OK);
    }

    // Get Member By ID
    @GetMapping("/{id}")
    public ResponseEntity<MemberDetails> getMemberById(@PathVariable("id") Long memberId) {
        Optional<MemberDetails> member = memberDetailsService.getMemberById(memberId);
        if (member.isPresent()) {
            return new ResponseEntity<>(member.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Get Member By Email
    @GetMapping("/email/{email}")
    public ResponseEntity<MemberDetails> getMemberByEmail(@PathVariable("email") String email) {
        Optional<MemberDetails> member = memberDetailsService.getMemberByEmail(email);
        if (member.isPresent()) {
            return new ResponseEntity<>(member.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Get Member By Mobile
    @GetMapping("/mobile/{mobile}")
    public ResponseEntity<MemberDetails> getMemberByMobile(@PathVariable("mobile") Long mobile) {
        Optional<MemberDetails> member = memberDetailsService.getMemberByMobile(mobile);
        if (member.isPresent()) {
            return new ResponseEntity<>(member.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Delete Member
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMember(@PathVariable("id") Long memberId) {
        Optional<MemberDetails> member = memberDetailsService.getMemberById(memberId);
        if (member.isPresent()) {
            memberDetailsService.deleteMember(memberId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

