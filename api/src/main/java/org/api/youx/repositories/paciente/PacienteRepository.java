package org.api.youx.repositories.paciente;

import lombok.Getter;
import org.api.youx.base.BaseRepository;
import org.api.youx.model.paciente.Paciente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author michel.pech
 *
 *  O repository é montado separado do JPA para que possam ser implementadas nessa classe métodos que utilizem native querys
 *  ou qualquer outra operação que não seja padrão do JPA. O JPA permite a criação de métodos de consulta customizados, porém,
 *  em alguns casos, é necessário a utilização de querys nativas, principalmente pela legibilidade e organização do código.
 */

@Getter
@Repository
public class PacienteRepository extends BaseRepository<Paciente, Long> {

    @Autowired
    private PacienteJPA entityJPA;

    public List<Paciente> queryExemplo(){
        return findWithNativeQuery(PacienteNativeQuery.sqlExemplo(), Paciente.class);
    }
}
