import React from 'react'

// Components
import Modal from './dialog/modal'
import DialogConfirm from './dialog/confirm'
import Toasts from './toast'
import RightSidebar from './sidebar/right'

export default function Overlay(){

    return(
        <>  
            <RightSidebar/>
            <Modal/>
            <DialogConfirm/>
            <Toasts/>
        </>
    )
}