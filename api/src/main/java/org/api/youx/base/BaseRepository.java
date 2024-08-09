package org.api.youx.base;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class BaseRepository<E, ID>  {

	@PersistenceContext
	private EntityManager entityManager;

	public List<E> findWithNativeQuery(String query, Class<E> clazz) {
		return entityManager.createNativeQuery(query, clazz).getResultList();
	}

}
