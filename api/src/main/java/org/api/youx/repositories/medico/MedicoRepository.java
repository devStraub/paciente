package org.api.youx.repositories.medico;

import lombok.Getter;
import org.api.youx.base.BaseRepository;
import org.api.youx.model.medico.Medico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Getter
@Repository
public class MedicoRepository extends BaseRepository<Medico, Long> {

    @Autowired
    private MedicoJPA entityJPA;
}
