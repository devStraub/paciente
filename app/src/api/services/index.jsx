import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Reducers
import { showSuccess, showError } from '../../redux/reducers/components/overlays/toast'

import ApiComponent from '../';

export default function Service() {
    
    const api = ApiComponent();
    const dispatch = useDispatch();

    React.useEffect(() => {        

    }, []);

    async function getAll(params){
        try {
            const response = await api.instance.get(`${params.url}`);
            return response.data;
        } catch (error) {
            dispatch(showError(error.message));
        }
    }

    async function getBy(params){
        try {
            const response = await api.instance.get(`${params.url}/${params.id}`);
            return response.data;
        } catch (error) {
            dispatch(showError(error.message));
        }
    }    
    
    async function insert(params){
        try {
            const response = await api.instance.post(`${params.url}`, params.data);
            dispatch(showSuccess("Registro salvo!"))
            return response.data;
        } catch (error) {
            dispatch(showError(error.message));
        }
    }       

    async function update(params){
        try {
            const response = await api.instance.put(`${params.url}`, params.data);
            dispatch(showSuccess("Registro atualizado!"))
            return response.data;
        } catch (error) {
            dispatch(showError(error.message));
        }
    }    
    
    async function deleteBy(params){
        try {
            const response = await api.instance.delete(`${params.url}/${params.id}`);
            dispatch(showSuccess("Registro removido!"))
            return response.data;
        } catch (error) {
            dispatch(showError(error.message));
        }
    }    
    
    async function genericPost(params){
        try {
            const response = await api.instance.post(`${params.url}`, params.data);
            return response.data;
        } catch (error) {
            dispatch(showError(error.message));
        }
    } 
    
    return {
        getAll,
        getBy,
        insert,
        update,
        deleteBy,
        genericPost,
    }
}