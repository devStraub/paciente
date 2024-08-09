package org.api.youx.services.enfermeiro;

import org.api.youx.base.BaseService;
import org.api.youx.model.enfermeiro.Enfermeiro;
import org.api.youx.model.enfermeiro.EnfermeiroDTO;
import org.api.youx.repositories.enfermeiro.EnfermeiroRepository;
import org.api.youx.utils.CustomDataUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnfermeiroService extends BaseService<Enfermeiro, Long, EnfermeiroDTO> {

    @Autowired
    private EnfermeiroRepository entityRepository;

    @Override
    public EnfermeiroDTO entityToDTO(Enfermeiro entity) {
        return new EnfermeiroDTO().entityToDTO(entity);
    }

    @Override
    public Enfermeiro dtoToEntity(EnfermeiroDTO enfermeiroDTO) {
        return new EnfermeiroDTO().dtoToEntity(enfermeiroDTO);
    }

    @Override
    public Enfermeiro insert(Enfermeiro entity){
        CustomDataUtil.validarCpfValido(entity.getCpf());

//        entity.setSenha(EncryptionUtil.encrypt(entity.getSenha()));
//        entity.setCpf(EncryptionUtil.encrypt(entity.getCpf()));

        return super.insert(entity);
    }

    @Override
    public Enfermeiro update(Enfermeiro entity){
        CustomDataUtil.validarCpfValido(entity.getCpf());
//        entity.setSenha(EncryptionUtil.encrypt(entity.getSenha()));
//        entity.setCpf(EncryptionUtil.encrypt(entity.getCpf()));
        return super.update(entity);
    }

//    @Override
//    public Enfermeiro findById(Long id){
//        Enfermeiro entity = super.findById(id);
//        EncryptionUtil.decrypt(entity.getCpf());
//        return entity;
//    }

}
