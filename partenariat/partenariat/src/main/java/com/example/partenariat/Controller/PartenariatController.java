package com.example.partenariat.Controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/Partenariat")
public class PartenariatController {
    @GetMapping("/hey")
    public String getAnonymous() {
        String ok="Im Partenariat";
        System.out.println(ok);
        return ok;
    }
}
