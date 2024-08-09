package org.api.youx.controllers.paciente.rest;

import org.api.youx.base.BaseController;
import org.api.youx.model.paciente.Paciente;
import org.api.youx.model.paciente.PacienteDTO;
import org.api.youx.services.paciente.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/paciente")
public class PacienteRestController extends BaseController<Paciente, Long, PacienteDTO> {

    @Autowired
    private PacienteService entityService;

    @GetMapping("/exemploQuery")
    public ResponseEntity<List<PacienteDTO>> findExemploQuery() {
        List<PacienteDTO> pacienteDTOList = entityService.findExemploQuery();
        return ResponseEntity.ok().body(pacienteDTOList);
    }

}
