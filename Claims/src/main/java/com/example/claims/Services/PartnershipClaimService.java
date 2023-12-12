package com.example.claims.Services;

import com.example.claims.Entities.EventClaim;
import com.example.claims.Entities.ExchangeProgramClaim;
import com.example.claims.Entities.PartnershipClaim;
import com.example.claims.Repositories.ExchangeProgramRepo;
import com.example.claims.Repositories.PartnershipClaimRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartnershipClaimService {
    @Autowired
    private PartnershipClaimRepo eventRepository;

    public PartnershipClaim saveEvent(PartnershipClaim event) {
        return eventRepository.save(event);
    }
    public List<PartnershipClaim> getAllPartnershipClaim() {
        List<PartnershipClaim> claims =eventRepository.findAll();
        for (PartnershipClaim claim : claims) {
            claim.setFiles(null);    }
        return claims;
    }
    public PartnershipClaim getEventClaimById(Long id) {
        PartnershipClaim aa=eventRepository.findById(id).orElse(null);
        aa.setFiles(null);
        return aa;
    }


    public PartnershipClaim updateEventClaimStatus(Long id, String status) {
        PartnershipClaim eventClaim = eventRepository.findById(id).orElse(null);
        if (eventClaim != null) {
            System.out.println(status);
            eventClaim.setStatus(status);
            return eventRepository.save(eventClaim);

        }
        return null;
    }
}
