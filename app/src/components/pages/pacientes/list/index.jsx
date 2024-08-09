import React from 'react'

// Router
import { useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { setEdit, setNew } from '../../../../redux/reducers/components/pages/edit'
import { setPage } from '../../../../redux/reducers/components/pages';

// Primefaces
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

// Bootstrap
import {
    Container,
    Row,
} from 'react-bootstrap';

// Service
import Service from '../../../../api/services'

// Module
import Edit from '../edit'

// Others
import moment from 'moment';

// Components
import ListHook from '../../../../hooks/listHook';

export default function List() {

    // Module Hooks
    const {
        items,
        DefaultList,
    } = ListHook({
        url: '/paciente',
        name: 'Paciente',
    });

    // Module States

    React.useEffect(() => {

    }, [items])

    const dateFormat = (rowData) => {
        return new Date(rowData.nascimento).toLocaleDateString();
    }

    return (
        <DefaultList
        >
            <Column
                header="Código"
                field='id'
                align={'center'} />
            <Column
                header="Nome"
                field="nome"
                align={'center'} />
            <Column
                header="CPF"
                field="cpf"
                align={'center'} />
            <Column
                header="Nascimento"
                field="nascimento"
                body={dateFormat}
                align={'center'} />
            <Column
                header="Peso"
                field="peso"
                align={'center'} />
            <Column
                header="Altura"
                field="altura"
                align={'center'} />
            <Column
                header="UF"
                field="uf"
                align={'center'} />
        </DefaultList>

    )
}