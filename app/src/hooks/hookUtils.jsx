import React from 'react';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../redux/reducers/components/pages';

// Router
import { useNavigate } from 'react-router-dom';

// Routes
import { routes } from '../routes';

export default function HookUtils({ }){

    // Redux
    const dispatch = useDispatch();
    const navigationMode = useSelector(state => state.ConfigController.navigationMode);

    // Router
    const navigate = useNavigate();

    function navigation(route){
        if (navigationMode === 'monopage'){
            dispatch(setPage(route.component));
        }
        else {
            navigate(route.path);
        }
    }

    return {
        navigation,
    }
}