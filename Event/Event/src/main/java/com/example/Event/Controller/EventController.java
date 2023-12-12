package com.example.Event.Controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@AllArgsConstructor
@RestController
@RequestMapping("/Event")
public class EventController {
    @GetMapping("/hey")
    public String getAnonymous() {
        String ok="Im Event";
        System.out.println(ok);
        return ok;
    }
}
