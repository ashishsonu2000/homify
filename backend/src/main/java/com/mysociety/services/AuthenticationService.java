package com.mysociety.services;

import com.mysociety.response.JwtAuthenticationResponse;
import request.SignUpRequest;
import request.SigninRequest;

public interface AuthenticationService {
    JwtAuthenticationResponse signup(SignUpRequest request);

    JwtAuthenticationResponse signin(SigninRequest request);
}
