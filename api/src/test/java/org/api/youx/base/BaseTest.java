package org.api.youx.base;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.api.youx.model.paciente.Paciente;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

@SpringBootTest
@AutoConfigureMockMvc
class BaseTest {

    @Autowired
    private MockMvc mvc;

    @Test
    void findAll() throws Exception {
        // ARRANGE

        // ACT
        var response = mvc.perform(get("/paciente")).andReturn().getResponse();

        // ASSERT
        Assertions.assertEquals(200, response.getStatus());
    }

    @Test
    void findById() throws Exception {
        // ARRANGE
        String id = "999";

        // ACT
        var response = mvc.perform(get("/paciente/{id}", id)).andReturn().getResponse();

        // ASSERT
        Assertions.assertEquals(404, response.getStatus());
    }

    @Test
    void insert() throws Exception {
        // ARRANGE

        ObjectMapper objectMapper = new ObjectMapper();

        Paciente paciente = new Paciente();
        paciente.setCpf("12345678901");
        paciente.setNome("Paciente Teste");
        paciente.setUf("SP");
        String jsonPaciente = objectMapper.writeValueAsString(paciente);

        // ACT
        var response = mvc.perform(post("/paciente")
                .content(jsonPaciente)
                .contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();

        // ASSERT
        Assertions.assertEquals(200, response.getStatus());
    }

    @Test
    void update() throws  Exception {
        // ARRANGE

        ObjectMapper objectMapper = new ObjectMapper();

        Paciente paciente = new Paciente();
        paciente.setCpf("12345678901");
        paciente.setNome("Paciente Teste");
        paciente.setUf("SP");
        String jsonPaciente = objectMapper.writeValueAsString(paciente);

        // ACT
        var response = mvc.perform(put("/paciente")
                .content(jsonPaciente)
                .contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();

        // ASSERT
        Assertions.assertEquals(200, response.getStatus());
    }

    @Test
    void deleteById() throws Exception {
        // ARRANGE
        String id = "999";

        // ACT
        var response = mvc.perform(delete("/paciente/{id}", id)).andReturn().getResponse();

        // ASSERT
        Assertions.assertEquals(200, response.getStatus());
    }
}