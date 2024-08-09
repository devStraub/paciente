package org.api.youx.repositories.paciente;

import org.springframework.stereotype.Component;

@Component
public class PacienteNativeQuery {

    private PacienteNativeQuery() {
    }

    public static String sqlExemplo() {
        return "SELECT * FROM youx.paciente";
    }
}
