import React from 'react';

// Router
import { useNavigate } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux'

// Primefaces
import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { TabView, TabPanel } from 'primereact/tabview';
import { InputNumber } from 'primereact/inputnumber';

// Bootstrap
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

// Service
import Service from '../api/services';

// Components
import HookUtils from './hookUtils';

// routes
import { routes } from '../routes';

export default function EditHook({ ...props }) {

    const hookProps = { ...props };

    // Service
    const service = Service();

    // Redux
    const navigationMode = useSelector(state => state.ConfigController.navigationMode)
    const isEdit = useSelector(state => state.editController.isEdit)
    const register = useSelector(state => state.editController.register)
    const dispatch = useDispatch()

    // Hooks
    const {
        navigation,
    } = HookUtils({});

    // API

    async function save() {
        if (isEdit) {
            const response = await service.update({ url: hookProps.url, id: editForm.id, data: editForm });
        }
        else {
            const response = await service.insert({ url: hookProps.url, data: editForm });
        }
        redirectToList();
    }


    async function remove() {
        const response = await service.deleteBy({ url: hookProps.url, id: editForm.id });
        redirectToList();
    }

    async function loadObject() {
        let result = await service.getBy({ url: hookProps.url, id: register.id })
        console.log('result:', result)
        setEditForm(result)
    }

    // Functions
    function redirectToList() {
        const route = routes.find(route => route.path === `${hookProps.url}/list`);
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

    const searchPanelTemplate = (options) => {
        const className = `${options.className} justify-content-start`;
        const titleClassName = `${options.titleClassName} ml-2 text-secondary`;
        const style = { fontSize: '1rem' };

        return (
            <div className={className}>
                <span className={titleClassName} style={style}>{isEdit ? `${hookProps.name} #${editForm.id} ` : `${hookProps.name} #Novo`}</span>
            </div>
        );
    };

    return {
        save,
        remove,
        loadObject,
        moduleHeader,
        searchPanelTemplate,
    }
}