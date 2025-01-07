package com.mysociety.services;

import com.mysociety.response.JwtAuthenticationResponse;
import com.mysociety.request.SignUpRequest;
import com.mysociety.request.SigninRequest;

public interface AuthenticationService {
    JwtAuthenticationResponse signup(SignUpRequest request);

    JwtAuthenticationResponse signin(SigninRequest request);
}
