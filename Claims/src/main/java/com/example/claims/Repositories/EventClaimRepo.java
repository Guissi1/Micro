package com.example.claims.Repositories;

import com.example.claims.Entities.EventClaim;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EventClaimRepo extends JpaRepository<EventClaim, Long> {


}
