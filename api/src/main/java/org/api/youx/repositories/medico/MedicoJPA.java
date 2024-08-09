package org.api.youx.repositories.medico;

import org.api.youx.model.medico.Medico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicoJPA  extends JpaRepository<Medico, Long> {
}
