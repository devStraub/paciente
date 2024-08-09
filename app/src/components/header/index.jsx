import React from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { setPage } from '../../redux/reducers/components/pages';
import { showRightSidebar } from '../../redux/reducers/components/overlays/sidebar/right';

// Primefaces
import { Button } from 'primereact/button';

// Icons
import { DiCode } from "react-icons/di";

// Components
import ProjectList from '../pages/pacientes/list';
import HookUtils from '../../hooks/hookUtils';

// Routes
import { routes } from '../../routes';

export default function Header() {

    // Redux
    const dispatch = useDispatch()

    // Hooks
    const {
        navigation
    } = HookUtils({ })

    const handleNavigate = (route) => { navigation(route) }

    return (
        <>
            <div className='header-left'>

            </div>
            <div className='header-center'>
                <Button rounded text onClick={() => handleNavigate(routes.find(route => route.path === '/'))}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <DiCode style={{ fontSize: '30px' }} />
                        <strong>Cadastro de Pacientes</strong>
                    </div>
                </Button>
            </div>
            <div className='header-right' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button icon="pi pi-bars" onClick={() => dispatch(showRightSidebar())} />
            </div>
        </>
    )
}