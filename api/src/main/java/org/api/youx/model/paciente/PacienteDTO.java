package org.api.youx.model.paciente;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.api.youx.base.BaseDTO;
import org.api.youx.utils.CustomDataUtil;

import java.math.BigDecimal;
import java.util.Calendar;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PacienteDTO extends BaseDTO<Paciente, PacienteDTO> {

    private Long id;
    private String nome;
    private String cpf;
    private String uf;
    private Calendar nascimento;
    private BigDecimal peso;
    private BigDecimal altura;

    @Override
    public Paciente dtoToEntity(PacienteDTO dto) {
        return super.dtoToEntity(dto);
    }

    @Override
    public PacienteDTO entityToDTO(Paciente entity) {
        return super.entityToDTO(entity);
    }

    @Override
    public void customDtoToEntity(Paciente entity) {

    }

    @Override
    public void customEntityToDTO(Paciente entity) {

    }
}
