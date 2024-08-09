package org.api.youx.repositories.paciente;

import org.api.youx.model.paciente.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PacienteJPA extends JpaRepository<Paciente, Long> {

    Paciente findByCpf(String cpf);
}
