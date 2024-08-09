package org.api.youx.services.paciente;

import org.api.youx.base.BaseService;
import org.api.youx.model.paciente.Paciente;
import org.api.youx.model.paciente.PacienteDTO;
import org.api.youx.repositories.paciente.PacienteRepository;
import org.api.youx.utils.CustomDataUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * @author michel.pech
 */

@Service
public class PacienteService extends BaseService<Paciente, Long, PacienteDTO> {

    @Autowired
    private PacienteRepository entityRepository;

    @Override
    public PacienteDTO entityToDTO(Paciente entity) {
        return new PacienteDTO().entityToDTO(entity);
    }

    @Override
    public Paciente dtoToEntity(PacienteDTO pacienteDTO) {
        return new PacienteDTO().dtoToEntity(pacienteDTO);
    }

    public List<PacienteDTO> findExemploQuery() {
        List<Paciente> pacienteList = entityRepository.queryExemplo();

        List<PacienteDTO> pacienteDTOList = new ArrayList<>();
        pacienteList.forEach(paciente -> pacienteDTOList.add(this.entityToDTO(paciente)));

        return pacienteDTOList;
    }

    @Override
    public Paciente insert(Paciente entity) {
        CustomDataUtil.validarCpfValido(entity.getCpf());

        return super.insert(entity);
    }

    @Override
    public Paciente update(Paciente entity) {
        CustomDataUtil.validarCpfValido(entity.getCpf());
        return super.update(entity);
    }

}
