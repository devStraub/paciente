package org.api.youx.base;

import jakarta.persistence.*;

/**
 * @author michel.pech
 */

@MappedSuperclass
public abstract class BaseEntity<ID> implements PersistenceInterface<ID> {

    private ID id;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public ID getId() {
        return id;
    }

    public void setId(ID id) {
        this.id = id;
    }
}
