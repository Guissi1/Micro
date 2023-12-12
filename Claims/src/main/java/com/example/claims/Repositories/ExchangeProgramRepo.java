package com.example.claims.Repositories;

import com.example.claims.Entities.ExchangeProgramClaim;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExchangeProgramRepo extends JpaRepository<ExchangeProgramClaim, Long> {
}
