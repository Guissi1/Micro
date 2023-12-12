package com.example.claims.Controllers;

import com.example.claims.Entities.EventClaim;
import com.example.claims.Services.EventClaimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/eventClaim")
public class EventController {
    @Autowired
    private EventClaimService eventService;

    @PostMapping("/claim")
    public EventClaim submitEventClaim(@RequestBody EventClaim event) {
        return eventService.saveEvent(event);
    }
    @GetMapping("/allClaims")
    public List<EventClaim> getAllEventClaims() {
        return eventService.getAllEventClaims();
    }
    @GetMapping("/{id}")
    public EventClaim getEventClaimById(@PathVariable Long id) {
        return eventService.getEventClaimById(id);
    }

    @PutMapping("/updateStatus/{id}")
    public EventClaim updateEventClaimStatus(@PathVariable Long id, @RequestBody String status) {
        return eventService.updateEventClaimStatus(id, status);
    }
}
