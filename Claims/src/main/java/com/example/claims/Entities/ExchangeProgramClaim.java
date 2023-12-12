package com.example.claims.Entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@ToString
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ExchangeProgramClaim implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String exchangeProgramId;
    private String claimType;
    private String claimDetails;
    private Long userId ;
    private String status="Unopened";
    @OneToMany(mappedBy = "exchangeProgramClaim", cascade = CascadeType.ALL)
    private List<File> files;
}

