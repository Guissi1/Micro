package com.example.claims.Controllers;


import com.example.claims.Entities.EventClaim;
import com.example.claims.Entities.ExchangeProgramClaim;
import com.example.claims.Entities.File;
import com.example.claims.Entities.PartnershipClaim;
import com.example.claims.Repositories.EventClaimRepo;
import com.example.claims.Repositories.ExchangeProgramRepo;
import com.example.claims.Repositories.FileRepo;
import com.example.claims.Repositories.PartnershipClaimRepo;
import com.example.claims.Services.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/files")
public class FileController {
    @Autowired
    private FileRepo fileRepository;
    @Autowired
    private FileService fileService;
    @Autowired
    private EventClaimRepo eventClaimRepo;
    @Autowired
    private ExchangeProgramRepo exchangeProgramClaim;
    @Autowired
    private PartnershipClaimRepo partnershipClaimRepo;

    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> uploadFiles(
            @RequestParam("file") MultipartFile[] files,
            @RequestParam("id") Long id
    ) {
        for (MultipartFile file : files) {
            File fileEntity = new File();
            fileEntity.setFileName(file.getOriginalFilename());
            try {
                fileEntity.setFileData(file.getBytes());
            } catch (IOException e) {
                throw new RuntimeException(e);
            }

            // Find the associated EventClaim by eventId and set it in the fileEntity
            Optional<EventClaim> eventClaima = eventClaimRepo.findById(id);
            EventClaim eventClaim = eventClaima.orElseGet(() -> new EventClaim());
            if (eventClaim == null) {
                return new ResponseEntity<>(Collections.singletonMap("message","EventClaim not found for id: "), HttpStatus.NOT_FOUND);
            }

            fileEntity.setEventClaim(eventClaim);
            fileRepository.save(fileEntity);
        }

        return new ResponseEntity<>(Collections.singletonMap("message", "Files uploaded successfully"), HttpStatus.OK);

    }
    @PostMapping("/uploadEx")
    public ResponseEntity<Map<String, String>> uploadFilesEx(
            @RequestParam("file") MultipartFile[] files,
            @RequestParam("id") Long id
    ) {
        for (MultipartFile file : files) {
            File fileEntity = new File();
            fileEntity.setFileName(file.getOriginalFilename());
            try {
                fileEntity.setFileData(file.getBytes());
            } catch (IOException e) {
                throw new RuntimeException(e);
            }

            // Find the associated EventClaim by eventId and set it in the fileEntity
            Optional<ExchangeProgramClaim> eventClaima = exchangeProgramClaim.findById(id);
            ExchangeProgramClaim eventClaim = eventClaima.orElseGet(() -> new ExchangeProgramClaim());
            if (eventClaim == null) {
                return new ResponseEntity<>(Collections.singletonMap("message","EventClaim not found for id: "), HttpStatus.NOT_FOUND);
            }

            fileEntity.setExchangeProgramClaim(eventClaim);
            fileRepository.save(fileEntity);
        }

        return new ResponseEntity<>(Collections.singletonMap("message", "Files uploaded successfully"), HttpStatus.OK);

    }
    @PostMapping("/uploadPart")
    public ResponseEntity<Map<String, String>> uploadFilesPart(
            @RequestParam("file") MultipartFile[] files,
            @RequestParam("id") Long id
    ) {
        for (MultipartFile file : files) {
            File fileEntity = new File();
            fileEntity.setFileName(file.getOriginalFilename());
            try {
                fileEntity.setFileData(file.getBytes());
            } catch (IOException e) {
                throw new RuntimeException(e);
            }

            // Find the associated EventClaim by eventId and set it in the fileEntity
            Optional<PartnershipClaim> eventClaima = partnershipClaimRepo.findById(id);
            PartnershipClaim eventClaim = eventClaima.orElseGet(() -> new PartnershipClaim());
            if (eventClaim == null) {
                return new ResponseEntity<>(Collections.singletonMap("message","EventClaim not found for id: "), HttpStatus.NOT_FOUND);
            }

            fileEntity.setPartnershipClaim(eventClaim);
            fileRepository.save(fileEntity);
        }

        return new ResponseEntity<>(Collections.singletonMap("message", "Files uploaded successfully"), HttpStatus.OK);

    }
    @GetMapping("/event-claim/{eventClaimId}")
    public List<File> getFilesByEventClaimId(@PathVariable Long eventClaimId) {
        return fileService.getFilesByEventClaimId(eventClaimId);
    }
    @GetMapping("/partnership-claim/{eventClaimId}")
    public List<File> getFilesByPartnershipClaimId(@PathVariable Long eventClaimId) {
        return fileService.getFilesByPartnershipClaimId(eventClaimId);
    }
    @GetMapping("/exchangeProgram-claim/{eventClaimId}")
    public List<File> getFilesByExchangeProgramClaimId(@PathVariable Long eventClaimId) {
        return fileService.getFilesByExchangeProgramClaimId(eventClaimId);
    }
    @GetMapping("/download/{fileId}")
    public ResponseEntity<Resource> downloadFile(@PathVariable Long fileId) {
        Optional<File> fileOptional = fileRepository.findById(fileId);

        if (fileOptional.isPresent()) {
            File file = fileOptional.get();
            ByteArrayResource resource = new ByteArrayResource(file.getFileData());

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + file.getFileName())
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .contentLength(file.getFileData().length)
                    .body(resource);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
