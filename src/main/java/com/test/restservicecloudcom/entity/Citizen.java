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
    private Long id;

    private Date birthDate;

    private Integer extraPhone;

    @NotNull(message="Это поле должно быть заполнено")
    private String firstName;

    private String middleName;

    @NotNull(message="Это поле должно быть заполнено")
    private String lastName;

    /*
    @NotNull(message="Это поле должно быть заполнено")
    @Size( min = 4, max = 4,  message="Количество символов должно быть равно 4")
    private Integer dulSerie;

    @NotNull(message="Это поле должно быть заполнено")
    @Size( min = 6, max = 6,  message="Количество символов должно быть равно 6")
    private Integer dulNumber;

    @NotNull(message="Это поле должно быть заполнено")
    private Integer phone;
    */

}
