package com.example.claims.Repositories;

import com.example.claims.Entities.PartnershipClaim;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PartnershipClaimRepo extends JpaRepository<PartnershipClaim, Long> {
}
