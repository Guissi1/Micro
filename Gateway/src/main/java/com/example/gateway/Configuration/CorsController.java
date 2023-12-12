package com.example.gateway.Configuration;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CorsController {
    @RequestMapping(value = "/**", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> handlePreflight() {
        return ResponseEntity.ok()
                .header(HttpHeaders.ALLOW, "GET, POST, PUT, DELETE")
                .header(HttpHeaders.ACCESS_CONTROL_ALLOW_METHODS, "GET, POST, PUT, DELETE")
                .header(HttpHeaders.ACCESS_CONTROL_ALLOW_HEADERS, "authorization, content-type")
                .header(HttpHeaders.ACCESS_CONTROL_MAX_AGE, "3600")
                .build();
    }
}
