package org.api.youx.controllers.medico.rest;

import org.api.youx.base.BaseController;
import org.api.youx.model.medico.Medico;
import org.api.youx.model.medico.MedicoDTO;
import org.api.youx.services.medico.MedicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/medico")
public class MedicoRestController extends BaseController<Medico, Long, MedicoDTO> {

    @Autowired
    private MedicoService entityService;
}
