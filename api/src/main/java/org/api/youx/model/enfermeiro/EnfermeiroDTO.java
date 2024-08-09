package org.api.youx.model.enfermeiro;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.api.youx.base.BaseDTO;
import org.api.youx.model.paciente.Paciente;
import org.api.youx.model.paciente.PacienteDTO;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EnfermeiroDTO extends BaseDTO<Enfermeiro, EnfermeiroDTO> {

    private Long id;
    private String nome;
    private String cpf;
    private String senha;

    @Override
    public Enfermeiro dtoToEntity(EnfermeiroDTO dto) {
        return super.dtoToEntity(dto);
    }

    @Override
    public EnfermeiroDTO entityToDTO(Enfermeiro entity) {
        return super.entityToDTO(entity);
    }

    @Override
    public void customDtoToEntity(Enfermeiro entity) {
        //
    }

    @Override
    public void customEntityToDTO(Enfermeiro entity) {
        //
    }
}
