package com.example.claims.Services;


import com.example.claims.Entities.EventClaim;
import com.example.claims.Entities.ExchangeProgramClaim;
import com.example.claims.Repositories.EventClaimRepo;
import com.example.claims.Repositories.ExchangeProgramRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExchangeProgramClaimService {
    @Autowired
    private ExchangeProgramRepo eventRepository;

    public ExchangeProgramClaim saveEvent(ExchangeProgramClaim event) {
        return eventRepository.save(event);
    }
    public List<ExchangeProgramClaim> getAllExchangeProgramClaim() {
        List<ExchangeProgramClaim> claims =eventRepository.findAll();
        for (ExchangeProgramClaim claim : claims) {
            claim.setFiles(null);    }
        return claims;
    }
    public ExchangeProgramClaim getEventClaimById(Long id) {
        ExchangeProgramClaim aa=eventRepository.findById(id).orElse(null);
        aa.setFiles(null);
        return aa;
    }


    public ExchangeProgramClaim updateEventClaimStatus(Long id, String status) {
        ExchangeProgramClaim eventClaim = eventRepository.findById(id).orElse(null);
        if (eventClaim != null) {
            System.out.println(status);
            eventClaim.setStatus(status);
            return eventRepository.save(eventClaim);

        }
        return null;
    }
}
