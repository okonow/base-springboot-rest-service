package com.test.restservicecloudcom.repository;

import com.test.restservicecloudcom.entity.Citizen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CitizenRepository extends JpaRepository<Citizen, Long> {

}
