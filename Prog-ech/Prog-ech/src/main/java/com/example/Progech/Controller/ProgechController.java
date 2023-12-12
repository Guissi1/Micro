package com.example.Progech.Controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/Progech")
public class ProgechController {
    @GetMapping("/hey")
    public String getAnonymous() {
        String ok="Im prog-ech";
        System.out.println(ok);
        return ok;
    }
}
