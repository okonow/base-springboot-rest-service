package com.test.restservicecloudcom.controller;

import com.test.restservicecloudcom.dto.CitizenDTO;
import com.test.restservicecloudcom.entity.Citizen;
import com.test.restservicecloudcom.service.CitizenService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/citizen")
@AllArgsConstructor
public class CitizenController {

    private final CitizenService citizenService;

    @PostMapping
    public ResponseEntity<Citizen> createCitizen(@RequestBody CitizenDTO dto) {

        return new ResponseEntity<>(citizenService.create(dto), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Citizen>> getAllCitizens() {
        return new ResponseEntity<>(citizenService.findAll(), HttpStatus.OK);
    }

    @GetMapping({"/id"})
    public ResponseEntity<Citizen> getCitizen(Long id) {
        return new ResponseEntity<>(citizenService.findById(id), HttpStatus.OK);
    }


    @PutMapping({"/id"})
    public ResponseEntity<Citizen> updateCitizen(Long id, @RequestBody CitizenDTO dto) {
        return new ResponseEntity<>(citizenService.update(id, dto), HttpStatus.OK);
    }

    @DeleteMapping({"/id"})
    public HttpStatus delete(@PathVariable Long id) {
        citizenService.delete(id);
        return HttpStatus.NO_CONTENT;
    }

}
