package org.api.youx.model.enfermeiro;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.api.youx.base.BaseEntity;
import org.api.youx.converter.CryptoConverter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "enfermeiro")
public class Enfermeiro extends BaseEntity<Long> implements Serializable {

    private static final long serialVersionUID = 2606424476858711875L;

    @Column(name = "nome")
    private String nome;

    @Column(name = "cpf")
    @Convert(converter = CryptoConverter.class)
    private String cpf;

    @Column(name = "senha")
    @Convert(converter = CryptoConverter.class)
    private String senha;

}
