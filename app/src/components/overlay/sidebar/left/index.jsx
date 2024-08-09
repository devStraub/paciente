import React from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { closeLeftSidebar } from '../../../../redux/reducers/components/overlays/sidebar/left'
import { setPage } from '../../../../redux/reducers/components/pages'

// Primefaces
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button';

// Components
import Projects from '../../../pages/projects'
        
export default function LeftSidebar() {

    const visible = useSelector(state => state.leftSidebarView.value)
    const dispatch = useDispatch()

    return (
        <Sidebar 
            visible={visible} 
            position="left" 
            onHide={() => dispatch(closeLeftSidebar())}>

            <h2>Menu Monopagina</h2>
            <Button 
                label="Projects" 
                style={{ width: '100%', marginBlock: '5px'}}
                onClick={() => {
                    dispatch(setPage(<Projects/>))
                    dispatch(closeLeftSidebar())
                }} />                
        </Sidebar>
    )
}