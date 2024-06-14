package com.test.restservicecloudcom.repository;

import com.test.restservicecloudcom.entity.Citizen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CitizenRepository extends JpaRepository<Citizen, Long> {
    @Query("SELECT MAX(c.id) FROM Citizen c")
    Long findMaxId();

}
