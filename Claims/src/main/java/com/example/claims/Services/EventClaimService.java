package com.example.claims.Services;


import com.example.claims.Entities.EventClaim;
import com.example.claims.Repositories.EventClaimRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventClaimService {
    @Autowired
    private EventClaimRepo eventRepository;

    public EventClaim saveEvent(EventClaim event) {
        return eventRepository.save(event);
    }
    public List<EventClaim> getAllEventClaims() {
        List<EventClaim> claims =eventRepository.findAll();
        for (EventClaim claim : claims) {
            claim.setFiles(null);    }
        return claims;
    }
    public EventClaim getEventClaimById(Long id) {
        EventClaim aa=eventRepository.findById(id).orElse(null);
        aa.setFiles(null);
        return aa;
    }


    public EventClaim updateEventClaimStatus(Long id, String status) {
        EventClaim eventClaim = eventRepository.findById(id).orElse(null);
        if (eventClaim != null) {
            System.out.println(status);
            eventClaim.setStatus(status);
            return eventRepository.save(eventClaim);

        }
        return null;
    }
}
