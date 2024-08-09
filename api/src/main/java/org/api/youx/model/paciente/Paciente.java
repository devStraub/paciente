package org.api.youx.model.paciente;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.api.youx.base.BaseEntity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Calendar;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "paciente")
public class Paciente extends BaseEntity<Long> implements Serializable {

    private static final long serialVersionUID = 2170216726794577129L;

    @Column(name = "nome")
    private String nome;

    @Column(name = "cpf")
    private String cpf;

    @Column(name = "uf")
    private String uf;

    @Column(name = "nascimento")
    private Calendar nascimento;

    @Column(name = "peso")
    private BigDecimal peso;

    @Column(name = "altura")
    private BigDecimal altura;

}
