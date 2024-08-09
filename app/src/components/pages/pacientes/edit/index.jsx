import React from 'react'

// Router
import { useNavigate } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { setPage } from '../../../../redux/reducers/components/pages';
import { showWarning } from '../../../../redux/reducers/components/overlays/toast';
import { setEdit } from '../../../../redux/reducers/components/pages/edit'

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
import Service from '../../../../api/services'

// Module
import List from '../list'

//Others

export default function PacienteEdit() {

    // Service
    const service = Service();

    // Router
    const navigate = useNavigate();

    // Redux
    const navigationMode = useSelector(state => state.ConfigController.navigationMode)
    const isEdit = useSelector(state => state.editController.isEdit)
    const register = useSelector(state => state.editController.register)
    const dispatch = useDispatch()

    // Module States        
    const [editForm, setEditForm] = React.useState({
        id: '',
        nome: '',
        cpf: '',
        nascimento: '',
        peso: '',
        altura: '',
        uf: '',
    })
    const [estadoList, setEstadoList] = React.useState([])

    React.useEffect(() => {
        if (isEdit) {
            loadObject();
        }

        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => response.json())
            .then(data => {
                let estados = data.map(estado => {
                    return {
                        value: estado.sigla,
                        label: estado.sigla
                    }
                })
                setEstadoList(estados)
            })
    }, [register])

    // API

    async function save() {
        try {
            if (isEdit) {
                const response = await service.update({ url: '/paciente', id: editForm.id, data: editForm });
            }
            else {
                const response = await service.insert({ url: '/paciente', data: editForm });
            }
            redirectToList()
        } catch (error) {
            console.error('Erro:', error);
        }
    }


    async function remove() {
        try {
            const response = await service.deleteBy({ url: '/paciente', id: editForm.id });
            redirectToList();
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    async function loadObject() {
        try {
            let result = await service.getBy({ url: '/paciente', id: register.id })
            setEditForm(result)
        } catch (error) {
            console.error('Erro:', error);
        }
    }

    // Functions
    function redirectToList() {
        if (navigationMode === 'monopage') {
            dispatch(setPage(<List />))
        }
        else {
            navigate('/paciente/list')
        }
    }

    // Module Components

    const moduleHeader = (options) => {
        const className = `${options.className} justify-content-space-between`;
        const style = { fontSize: '1.25rem' };

        return (
            <div className={className}>
                <span style={style}>Pacientes</span>
            </div>
        )
    }

    const searchPanelTemplate = (options) => {
        const className = `${options.className} justify-content-start`;
        const titleClassName = `${options.titleClassName} ml-2 text-secondary`;
        const style = { fontSize: '1rem' };

        return (
            <div className={className}>
                <span className={titleClassName} style={style}>{isEdit ? `Paciente #${editForm.id} ` : 'Paciente #Novo'}</span>
            </div>
        );
    };

    // Module Render

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
                        headerTemplate={searchPanelTemplate}
                    >
                        <Container>
                            <TabView>
                                <TabPanel header="Dados do Paciente">
                                    <Row>
                                        <Col>
                                            <div className="flex flex-column align-items-start gap-1">
                                                <label htmlFor="cpf">CPF</label>
                                                <InputText
                                                    id="cpf"
                                                    className="w-full p-inputtext-sm"
                                                    type="text"
                                                    value={editForm.cpf} 
                                                    onChange={(e) => setEditForm({
                                                        ...editForm,
                                                        cpf: e.target.value
                                                    })}
                                                />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="flex flex-column align-items-start gap-1">
                                                <label htmlFor="nome">Nome</label>
                                                <InputText
                                                    id="nome"
                                                    className="w-full p-inputtext-sm"
                                                    type="text"
                                                    value={editForm.nome}
                                                    onChange={(e) => setEditForm({
                                                        ...editForm,
                                                        nome: e.target.value
                                                    })}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="flex flex-column align-items-start gap-1">
                                                <label htmlFor="dataNascimento">Data Nascimento</label>
                                                <Calendar
                                                    id="dataNascimento"
                                                    className="w-full p-inputtext-sm"
                                                    dateFormat="dd/mm/yy"
                                                    value={editForm.nascimento ? new Date(editForm.nascimento) : null}
                                                    onChange={(e) => setEditForm({
                                                        ...editForm,
                                                        nascimento: e.value
                                                    })}
                                                />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="flex flex-column align-items-start gap-1">
                                                <label htmlFor="peso">Peso</label>
                                                <InputNumber
                                                    id="peso"
                                                    className="w-full p-inputtext-sm"
                                                    value={editForm.peso}
                                                    onValueChange={(e) => {
                                                        setEditForm({
                                                            ...editForm,
                                                            peso: e.value
                                                        })
                                                    }}
                                                    minFractionDigits={2}/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="flex flex-column align-items-start gap-1">
                                                <label htmlFor="altura">Altura</label>
                                                <InputNumber
                                                    id="altura"
                                                    className="w-full p-inputtext-sm"
                                                    value={editForm.altura}
                                                    onValueChange={(e) => {
                                                        setEditForm({
                                                            ...editForm,
                                                            altura: e.value
                                                        })
                                                    }}
                                                    minFractionDigits={2} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="flex flex-column align-items-start gap-1">
                                                <label htmlFor="uf">UF</label>
                                                <Dropdown
                                                    id="uf"
                                                    className="w-full p-inputtext-sm"
                                                    value={editForm.uf}
                                                    onChange={(e) => {
                                                        setEditForm({
                                                            ...editForm,
                                                            uf: e.value
                                                        })
                                                    }}
                                                    options={estadoList}
                                                    optionValue='value'
                                                    optionLabel='value' />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>

                                        </Col>
                                        <Col>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>

                                        </Col>
                                    </Row>
                                </TabPanel>
                            </TabView>

                            <Row style={{ margin: '1rem' }}>
                                <Col className='flex flex-wrap gap-3 justify-content-center align-items-center'>
                                    <Button
                                        type="button"
                                        severity='secondary'
                                        rounded
                                        icon="pi pi-arrow-left"
                                        tooltip="Voltar"
                                        tooltipOptions={{ position: 'bottom' }}
                                        onClick={(e) => {
                                            redirectToList()
                                        }}
                                    />
                                    <Button
                                        type="button"
                                        severity='success'
                                        rounded
                                        icon="pi pi-save"
                                        tooltip="Salvar"
                                        tooltipOptions={{ position: 'bottom' }}
                                        onClick={(e) => {
                                            save()
                                        }}
                                    />
                                    {isEdit &&
                                        <>
                                            <Button
                                                type="button"
                                                severity='help'
                                                rounded
                                                icon="pi pi-replay"
                                                tooltip="Restaurar"
                                                tooltipOptions={{ position: 'bottom' }}
                                                onClick={(e) => {
                                                    loadObject()
                                                }}
                                            />

                                            <Button
                                                type="button"
                                                severity='danger'
                                                rounded
                                                icon="pi pi-trash"
                                                tooltip="Remover"
                                                tooltipOptions={{ position: 'bottom' }}
                                                onClick={(e) => {
                                                    remove()
                                                }}
                                            />
                                        </>
                                    }
                                </Col>
                            </Row>
                        </Container>
                    </Panel>
                </Row>
            </Container>
        </Panel>
    )
}