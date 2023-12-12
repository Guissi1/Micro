package com.example.claims.Controllers;

import com.example.claims.Entities.EventClaim;
import com.example.claims.Entities.ExchangeProgramClaim;
import com.example.claims.Entities.PartnershipClaim;
import com.example.claims.Services.ExchangeProgramClaimService;
import com.example.claims.Services.PartnershipClaimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/PartnershipClaim")
public class PartnershipController {
    @Autowired
    private PartnershipClaimService eventService;

    @PostMapping("/add")
    public PartnershipClaim submitEventClaim(@RequestBody PartnershipClaim event) {
        return eventService.saveEvent(event);
    }
    @GetMapping("/allClaims")
    public List<PartnershipClaim> getAllEventClaims() {
        return eventService.getAllPartnershipClaim();
    }
    @GetMapping("/{id}")
    public PartnershipClaim getEventClaimById(@PathVariable Long id) {
        return eventService.getEventClaimById(id);
    }

    @PutMapping("/updateStatus/{id}")
    public PartnershipClaim updateEventClaimStatus(@PathVariable Long id, @RequestBody String status) {
        return eventService.updateEventClaimStatus(id, status);
    }
}
