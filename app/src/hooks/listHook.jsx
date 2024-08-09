import React from "react";

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setEdit, setNew } from "../redux/reducers/components/pages/edit";

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
import Service from '../api/services'

// Components
import HookUtils from "./hookUtils";

// Routes
import { routes } from '../routes';

export default function ListHook({ ...props }) {
    
    const hookProps = { ...props };

    // Redux
    const dispatch = useDispatch();

    // Service
    const service = Service();

    // Hooks
    const {
        navigation
    } = HookUtils({});

    // Module States
    const [items, setItems] = React.useState([])

    // Module Effects
    React.useEffect(() => {
        loadList();
    }, [])

    // API 
    async function loadList() {
        const response = await service.getAll({ url: hookProps.url });
        setItems(response);
    }

    async function removeItem(data) {
        const response = await service.deleteBy({ url: hookProps.url, id: data.id });
        loadList();
    }

    // Functions
    function goNewItem() {
        dispatch(setNew());
        redirectToEdit();
    }

    function goEditItem(rowData) {
        dispatch(setEdit(rowData));
        redirectToEdit();
    }

    function redirectToEdit() {
        const route = routes.find(r => r.path === `${hookProps.url}/edit`);
        navigation(route)
    }



    // Module Components

    const moduleHeader = (options) => {
        const className = `${options.className} justify-content-space-between`;
        const style = { fontSize: '1.25rem' };

        return (
            <div className={className}>
                <span style={style}>{hookProps.name}</span>
            </div>
        )
    }

    const listPanelTemplate = (options) => {
        const className = `${options.className} justify-content-space-between`;
        const titleClassName = `${options.titleClassName} ml-2 text-secondary`;
        const style = { fontSize: '1rem' };

        return (
            <div className={className}>
                <span className={titleClassName} style={style}>Lista de {hookProps.name}</span>

                <Button
                    type="button"
                    severity='info'
                    rounded text
                    icon="pi pi-plus"
                    tooltip="Novo"
                    tooltipOptions={{ position: 'top' }}
                    onClick={(e) => {
                        goNewItem()
                    }}
                />
            </div>
        );
    };

    const listActions = (data) => {
        return (
            <>
                <Button
                    type="button"
                    severity='info'
                    rounded text
                    icon="pi pi-pencil"
                    tooltip="Editar"
                    tooltipOptions={{ position: 'bottom' }}
                    onClick={(e) => {
                        goEditItem(data)
                    }}
                />
                <Button
                    type="button"
                    severity='danger'
                    rounded text
                    icon="pi pi-trash"
                    tooltip="Remover"
                    tooltipOptions={{ position: 'bottom' }}
                    onClick={(e) => {
                        removeItem(data)
                    }}
                />
            </>
        )
    }

    const DefaultList = ({ children, ...props }) => {
        return (
            <Panel
                headerTemplate={moduleHeader}
                style={{
                    width: '95vw',
                }}
            >
                <Container className='flex flex-column gap-4'>
                    <Row>
                        <Panel
                            headerTemplate={listPanelTemplate}
                        >
                            <DataTable
                                value={items}
                                size='small'
                                showGridlines
                                stripedRows
                                paginator
                                rows={props.rows ? props.rows : 10}
                                emptyMessage={props.emptyMessage ? props.emptyMessage : 'Nenhum registro encontrado.'}
                                sortField={props.sortField ? props.sortField : 'id'}
                                sortOrder={props.sortOrder ? props.sortOrder : 1}>
                                {children}
                                <Column
                                    style={{ width: '10rem' }}
                                    align={'center'}
                                    header="Ações"
                                    body={listActions} />
                            </DataTable>
                        </Panel>
                    </Row>
                </Container>
            </Panel>
        )
    }

    return {
        items,
        setItems,
        DefaultList,
    };
}