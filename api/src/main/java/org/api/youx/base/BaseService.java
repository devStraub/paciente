package org.api.youx.base;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author michel.pech
 */

@Service
public abstract class BaseService<E extends PersistenceInterface<ID>, ID, DTO> {

	@Autowired
	private JpaRepository<E, ID> baseJPA;

    @Transactional
	public List<E> findAll() {
		return baseJPA.findAll();
	}

	@Transactional
	public E findById(ID id) {
		return baseJPA.findById(id).orElse(null);
	}

	@Transactional
	public E insert(E entity) {
        return baseJPA.saveAndFlush(entity);
	}

	@Transactional
	public E update(E entity) {
		return baseJPA.saveAndFlush(entity);
	}

	@Transactional
	public void deleteById(ID id) {
		baseJPA.deleteById(id);
	}

	public abstract DTO entityToDTO(E entity) ;

	public abstract E dtoToEntity(DTO dto) ;

}
