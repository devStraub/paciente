import React from 'react'

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { closeRightSidebar } from '../../../../redux/reducers/components/overlays/sidebar/right'
import { setPage } from '../../../../redux/reducers/components/pages'

// Primefaces
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button';

// Routes
import { routes } from '../../../../routes'

// Components
import HookUtils from '../../../../hooks/hookUtils'

export default function RightSidebar() {

    const visible = useSelector(state => state.rightSidebarView.value)
    const language = useSelector(state => state.ConfigController.language)
    const dispatch = useDispatch()

    const {
        navigation
    } = HookUtils({ })

    function handleNavigate(route){
        navigation(route)
    }

    return (
        <Sidebar
            visible={visible}
            position="right"
            onHide={() => dispatch(closeRightSidebar())}>

            <h2>Menu</h2>

            {routes.filter(route => route.renderMenu).map((route, index) => (
                <Button
                    key={index}
                    label={
                        <>
                            {route.label}
                        </>
                    }
                    style={{ width: '100%', marginBlock: '5px' }}
                    onClick={() => {
                        handleNavigate(route)
                        dispatch(closeRightSidebar())
                    }} />
            ))}
        </Sidebar>
    )
}