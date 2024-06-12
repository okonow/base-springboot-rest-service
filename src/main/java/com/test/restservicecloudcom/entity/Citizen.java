package com.test.restservicecloudcom.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Citizen {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private Date birth_date;

    private Integer extra_phone;

    @NotNull(message="Это поле должно быть заполнено")
    private String first_name;

    private String middle_name;

    @NotNull(message="Это поле должно быть заполнено")
    private String last_name;

    @NotNull(message="Это поле должно быть заполнено")
    @Size( min = 4, max = 4,  message="Количество символов должно быть равно 4")
    private Integer dul_serie;

    @NotNull(message="Это поле должно быть заполнено")
    @Size( min = 6, max = 6,  message="Количество символов должно быть равно 6")
    private Integer dul_number;

    @NotNull(message="Это поле должно быть заполнено")
    private Integer phone;
}
