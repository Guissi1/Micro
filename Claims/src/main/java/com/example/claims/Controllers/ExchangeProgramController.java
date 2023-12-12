package com.example.claims.Controllers;


import com.example.claims.Entities.EventClaim;
import com.example.claims.Entities.ExchangeProgramClaim;
import com.example.claims.Services.EventClaimService;
import com.example.claims.Services.ExchangeProgramClaimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/exchangeProgram")
public class ExchangeProgramController {
    @Autowired
    private ExchangeProgramClaimService eventService;

    @PostMapping("/add")
    public ExchangeProgramClaim submitEventClaim(@RequestBody ExchangeProgramClaim event) {
        return eventService.saveEvent(event);
    }
    @GetMapping("/allClaims")
    public List<ExchangeProgramClaim> getAllEventClaims() {
        return eventService.getAllExchangeProgramClaim();
    }
    @GetMapping("/{id}")
    public ExchangeProgramClaim getEventClaimById(@PathVariable Long id) {
        return eventService.getEventClaimById(id);
    }

    @PutMapping("/updateStatus/{id}")
    public ExchangeProgramClaim updateEventClaimStatus(@PathVariable Long id, @RequestBody String status) {
        return eventService.updateEventClaimStatus(id, status);
    }
}
