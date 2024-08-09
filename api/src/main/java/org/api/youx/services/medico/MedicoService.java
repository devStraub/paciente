package org.api.youx.services.medico;

import org.api.youx.base.BaseService;
import org.api.youx.model.medico.Medico;
import org.api.youx.model.medico.MedicoDTO;
import org.api.youx.model.paciente.Paciente;
import org.api.youx.repositories.medico.MedicoRepository;
import org.api.youx.utils.CustomDataUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicoService extends BaseService<Medico, Long, MedicoDTO> {

    @Autowired
    private MedicoRepository entityRepository;

    @Override
    public MedicoDTO entityToDTO(Medico entity) {
        return new MedicoDTO().entityToDTO(entity);
    }

    @Override
    public Medico dtoToEntity(MedicoDTO medicoDTO) {
        return new MedicoDTO().dtoToEntity(medicoDTO);
    }

    @Override
    public Medico insert(Medico entity){
        CustomDataUtil.validarCpfValido(entity.getCpf());
        return super.insert(entity);
    }

    @Override
    public Medico update(Medico entity){
        CustomDataUtil.validarCpfValido(entity.getCpf());
        return super.update(entity);
    }

}
