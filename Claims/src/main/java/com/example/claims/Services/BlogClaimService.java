package com.example.claims.Services;

import com.example.claims.Entities.BlogClaim;
import com.example.claims.Entities.EventClaim;
import com.example.claims.Repositories.BlogClaimRepo;
import com.example.claims.Repositories.EventClaimRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogClaimService {
    @Autowired
    private BlogClaimRepo blogClaimRepo;

    public BlogClaim saveEvent(BlogClaim b) {
        return blogClaimRepo.save(b);
    }
    public List<BlogClaim> getAllBlogClaim() {
        List<BlogClaim> claims =blogClaimRepo.findAll();

        return claims;
    }
    public BlogClaim getEventClaimById(Long id) {
        BlogClaim aa=blogClaimRepo.findById(id).orElse(null);

        return aa;
    }


    public BlogClaim updateEventClaimStatus(Long id, String status) {
        BlogClaim eventClaim = blogClaimRepo.findById(id).orElse(null);
        if (eventClaim != null) {
            System.out.println(status);
            eventClaim.setStatus(status);
            return blogClaimRepo.save(eventClaim);

        }
        return null;
    }
}
