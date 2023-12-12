package com.example.claims.Repositories;

import com.example.claims.Entities.EventClaim;
import com.example.claims.Entities.File;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FileRepo extends JpaRepository<File, Long> {
    List<File> findByEventClaimId(Long eventClaim_Id);
    List<File> findByPartnershipClaimId(Long eventClaim_Id);
    List<File> findByExchangeProgramClaimId(Long eventClaim_Id);
}
