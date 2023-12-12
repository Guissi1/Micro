package com.example.claims.Services;

import com.example.claims.Entities.File;
import com.example.claims.Repositories.FileRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FileService {
    @Autowired
    private FileRepo fileRepository;

    public List<File> getFilesByEventClaimId(Long eventClaimId) {
        return fileRepository.findByEventClaimId(eventClaimId);
    }
    public List<File> getFilesByExchangeProgramClaimId(Long eventClaimId) {
        return fileRepository.findByExchangeProgramClaimId(eventClaimId);
    }
    public List<File> getFilesByPartnershipClaimId(Long eventClaimId) {
        return fileRepository.findByPartnershipClaimId(eventClaimId);
    }
}
