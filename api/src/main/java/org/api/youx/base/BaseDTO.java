package org.api.youx.base;

import java.lang.reflect.ParameterizedType;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author michel.pech
 */

@Component
public abstract class BaseDTO<T, DTO> {

	private ModelMapper modelMapper;

	public BaseDTO() {
		modelMapper = new ModelMapper();
	}

	private Class<DTO> getDTOClass() {
		ParameterizedType parameterizedType = (ParameterizedType) getClass().getGenericSuperclass();
		return (Class<DTO>) parameterizedType.getActualTypeArguments()[1];
	}

	private Class<T> getEntityClass() {
		ParameterizedType parameterizedType = (ParameterizedType) getClass().getGenericSuperclass();
		return (Class<T>) parameterizedType.getActualTypeArguments()[0];
	}	
	
	public T dtoToEntity(DTO dto) {
		T entity = modelMapper.map(dto, this.getEntityClass());
		customDtoToEntity(entity);
		return entity;
	}

	public  DTO entityToDTO(T entity) {
		DTO dto = modelMapper.map(entity, this.getDTOClass());
		customEntityToDTO(entity);
		return dto;
	}

	public abstract void customDtoToEntity(T entity) ;
	public abstract void customEntityToDTO(T entity) ;
	
}
