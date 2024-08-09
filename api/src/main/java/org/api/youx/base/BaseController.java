package org.api.youx.base;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author michel.pech
 */

@RestController
public abstract class BaseController<E extends PersistenceInterface<ID>, ID, DTO> {

	@Autowired
	private BaseService<E, ID, DTO> service;

	@GetMapping
	public ResponseEntity<List<DTO>> findAll() {
		List<E> entities = service.findAll();
		List<DTO> dtos = entities.stream().map(entity -> service.entityToDTO(entity)).collect(Collectors.toList());
		return ResponseEntity.ok().body(dtos);
	}

	@GetMapping("/{id}")
	public ResponseEntity<DTO> findById(@PathVariable ID id) {
		E entity = service.findById(id);
		if (Objects.nonNull(entity)) {
			DTO dto = service.entityToDTO(entity);
			return ResponseEntity.ok().body(dto);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@PostMapping
	public ResponseEntity<DTO> insert(@RequestBody DTO dto) {
		E entity = service.dtoToEntity(dto);
		E savedEntity = service.insert(entity);
		DTO savedDto = service.entityToDTO(savedEntity);
		return ResponseEntity.ok().body(savedDto);
	}

	@PutMapping
	public ResponseEntity<DTO> update(@RequestBody DTO dto) {
		E entity = service.dtoToEntity(dto);
		E updatedEntity = service.update(entity);
		DTO updatedDto = service.entityToDTO(updatedEntity);
		return ResponseEntity.ok().body(updatedDto);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable ID id) {
		service.deleteById(id);
		return new ResponseEntity<>("Registro removido com sucesso!", HttpStatus.OK);
	}

}
