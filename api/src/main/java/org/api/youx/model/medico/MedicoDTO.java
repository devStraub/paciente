package org.api.youx.model.medico;

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
public class MedicoDTO extends BaseDTO<Medico, MedicoDTO> {

    private Long id;
    private String nome;
    private String cpf;
    private String senha;

    @Override
    public Medico dtoToEntity(MedicoDTO dto) {
        return super.dtoToEntity(dto);
    }

    @Override
    public MedicoDTO entityToDTO(Medico entity) {
        return super.entityToDTO(entity);
    }

    @Override
    public void customDtoToEntity(Medico entity) {
        //
    }

    @Override
    public void customEntityToDTO(Medico entity) {
        //
    }
}
