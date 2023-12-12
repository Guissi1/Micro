package com.example.claims.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class EventClaim implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String eventId;
    private String claimType;
    private Date incidentDate;
    private String incidentDescription;
    private Long userId ;
    private String status="Unopened";
    @OneToMany(mappedBy = "eventClaim", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<File> files;
}
