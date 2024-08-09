package org.api.youx.controllers.enfermeiro.rest;

import org.api.youx.base.BaseController;
import org.api.youx.model.enfermeiro.Enfermeiro;
import org.api.youx.model.enfermeiro.EnfermeiroDTO;
import org.api.youx.services.enfermeiro.EnfermeiroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/enfermeiro")
public class EnfermeiroRestController extends BaseController<Enfermeiro, Long, EnfermeiroDTO> {

    @Autowired
    private EnfermeiroService entityService;
}
