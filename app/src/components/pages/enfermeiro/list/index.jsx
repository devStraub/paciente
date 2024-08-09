import React from "react";

// Primefaces
import { Column } from 'primereact/column';

import ListHook from "../../../../hooks/listHook";

export default function EnfermeiroList() {

    // Module Hooks
    const {
        items,
        DefaultList,
    } = ListHook({
        url: '/enfermeiro',
        name: 'Enfermeiro',
    });

    // Module States

    // Module Effects
    React.useEffect(() => {

    }, [items])

    return (
        <DefaultList

        >
            <Column
                field="id"
                header="Código" />
            <Column
                field="nome"
                header="Nome" />
            <Column
                field="cpf"
                header="CPF"
                align={"center"} />
        </DefaultList>
    )
}