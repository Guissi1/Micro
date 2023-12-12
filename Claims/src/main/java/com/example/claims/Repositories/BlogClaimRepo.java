package com.example.claims.Repositories;

import com.example.claims.Entities.BlogClaim;
import com.example.claims.Entities.EventClaim;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogClaimRepo extends JpaRepository<BlogClaim, Long> {
}
