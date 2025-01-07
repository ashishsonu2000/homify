package com.mysociety.services;

import com.mysociety.models.RegisteredUser;
import com.mysociety.models.Role;
import com.mysociety.repositories.UserRepository;
import com.mysociety.response.JwtAuthenticationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.mysociety.request.SignUpRequest;
import com.mysociety.request.SigninRequest;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public JwtAuthenticationResponse signup(SignUpRequest request) {
        var user = RegisteredUser.builder().firstName(request.getFirstName()).lastName(request.getLastName())
                .email(request.getEmail()).password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER).build();
        userRepository.save(user);
        var jwt = jwtService.generateToken(user);
        return JwtAuthenticationResponse.builder().token(jwt).build();
    }

    @Override
    public JwtAuthenticationResponse signin(SigninRequest request) {
        boolean isAuthenticated = true;
        try {

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            var user = userRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));
            var jwt = jwtService.generateToken(user);
            return JwtAuthenticationResponse.builder().token(jwt).isAuthenticated(isAuthenticated).build();
        } catch (AuthenticationException | IllegalArgumentException e) {
            isAuthenticated = false;
            return JwtAuthenticationResponse.builder().token("Toke Not valid").isAuthenticated(isAuthenticated).build();
        }
    }
}
