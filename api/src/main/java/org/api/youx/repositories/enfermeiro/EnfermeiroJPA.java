package org.api.youx.repositories.enfermeiro;

import org.api.youx.model.enfermeiro.Enfermeiro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnfermeiroJPA extends JpaRepository<Enfermeiro, Long> {
}
