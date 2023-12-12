package com.example.claims.Entities;


import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;
import java.util.Optional;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
@FieldDefaults(level = AccessLevel.PRIVATE)
public class File implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fileName;
    @Lob
    private byte[] fileData;
    @ManyToOne
    @JoinColumn(name = "event_claim_id")
    private EventClaim eventClaim;
    @ManyToOne
    @JoinColumn(name = "exchange_program_id")
    private ExchangeProgramClaim exchangeProgramClaim;
    @ManyToOne
    @JoinColumn(name = "partnership_id")
    private PartnershipClaim partnershipClaim;
}
