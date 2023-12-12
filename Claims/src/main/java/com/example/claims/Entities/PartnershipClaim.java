package com.example.claims.Entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PartnershipClaim implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String partnershipId;
    private String partnerName;
    private String claimDetails;
    private String partnershipDescription;
    private Long userId ;
    private String status="Unopened";
    @OneToMany(mappedBy = "partnershipClaim", cascade = CascadeType.ALL)
    private List<File> files;
}
