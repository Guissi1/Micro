package com.example.claims.Controllers;

import com.example.claims.Entities.BlogClaim;
import com.example.claims.Entities.EventClaim;
import com.example.claims.Services.BlogClaimService;
import com.example.claims.Services.EventClaimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/BlogClaim")
public class BlogController {
    @Autowired
    private BlogClaimService eventService;

    @PostMapping("/claim")
    public BlogClaim submitEventClaim(@RequestBody BlogClaim event) {
        return eventService.saveEvent(event);
    }
    @GetMapping("/allClaims")
    public List<BlogClaim> getAllBlogClaim() {
        return eventService.getAllBlogClaim();
    }
    @GetMapping("/{id}")
    public BlogClaim getEventClaimById(@PathVariable Long id) {
        return eventService.getEventClaimById(id);
    }

    @PutMapping("/updateStatus/{id}")
    public BlogClaim updateEventClaimStatus(@PathVariable Long id, @RequestBody String status) {
        return eventService.updateEventClaimStatus(id, status);
    }
}
