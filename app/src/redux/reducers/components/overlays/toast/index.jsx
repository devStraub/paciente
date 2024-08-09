import { createSlice } from '@reduxjs/toolkit'

export const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        value: null
    },
    reducers: {
        showToast: (state, action) => {
            state.value = action.payload
        },
        showSuccess: (state, action) => {
            state.value = {
                severity: 'success',
                summary: 'Êxito',
                detail: action.payload,
            }
        },
        showError: (state, action) => {
            state.value = {
                severity: 'error',
                summary: 'Erro',
                detail: action.payload
            }
        },
        showWarning: (state, action) => {
            state.value = {
                severity: 'warn',
                summary: 'Atenção',
                detail: action.payload
            }
        },        
    }
})

export const { 
    showToast, 
    showSuccess, 
    showError,
    showWarning, 
} = toastSlice.actions

export default toastSlice.reducer