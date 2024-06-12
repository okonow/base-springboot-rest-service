package com.test.restservicecloudcom.service;


import com.test.restservicecloudcom.dto.CitizenDTO;
import com.test.restservicecloudcom.entity.Citizen;
import com.test.restservicecloudcom.repository.CitizenRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CitizenService {

    private final CitizenRepository citizenRepository;

    public Citizen create(CitizenDTO dto) {
        Citizen citizen = Citizen.builder()
                .first_name(dto.getFirst_name())
                .last_name(dto.getLast_name())
                .build();
        return citizenRepository.save(citizen);
    }

    public List<Citizen> findAll() {
        List<Citizen> citizens = citizenRepository.findAll();
        if (citizens.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Граждане не найдены");
        }
        return citizens;
    }

    public Citizen findById(Long id) {
        Citizen citizen = citizenRepository.findById(id).orElse(null);
        if (citizen == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Гражданин не найден");
        }
        return citizen;
    }

    public Citizen update(Long id, CitizenDTO dto) {
        Citizen citizen = citizenRepository.findById(id).orElse(null);
        citizen = Citizen.builder()
                .first_name(dto.getFirst_name())
                .last_name(dto.getLast_name())
                .build();


        return citizenRepository.save(citizen);
    }



    public void delete(Long id) {
        citizenRepository.deleteById(id);
    }
}
