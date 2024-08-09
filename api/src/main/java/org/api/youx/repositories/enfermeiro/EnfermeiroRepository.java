package org.api.youx.repositories.enfermeiro;

import lombok.Getter;
import org.api.youx.base.BaseRepository;
import org.api.youx.model.enfermeiro.Enfermeiro;
import org.api.youx.repositories.medico.MedicoJPA;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Getter
@Repository
public class EnfermeiroRepository extends BaseRepository<Enfermeiro, Long> {

    @Autowired
    private EnfermeiroJPA entityJPA;
}
