import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// Home
import Home from './components/pages/home'

// Paciente
import PacienteList from './components/pages/pacientes/list'
import PacienteEdit from './components/pages/pacientes/edit'

// Enfermeiro
import EnfermeiroList from './components/pages/enfermeiro/list';
import EnfermeiroEdit from './components/pages/enfermeiro/edit';

export const routes = [   
  {
    path: '/',
    component: <Home />,
    exact: true,
    label: 'Home',
    renderMenu: true,
  },  
  {
    path: '/paciente/list',
    component: <PacienteList/>,
    exact: true,
    label: 'Paciente', 
    renderMenu: true,
  },       
  {
    path: '/paciente/edit',
    component: <PacienteEdit/>,
    exact: true,
    label: '',  
  },    
  {
    path: '/enfermeiro/list',
    component: <EnfermeiroList/>,
    exact: true,
    label: 'Enfermeiro', 
    renderMenu: true,
  },       
  {
    path: '/enfermeiro/edit',
    component: <EnfermeiroEdit/>,
    exact: true,
    label: '',  
  },      
];

export const RouteList = () => (
  <Routes>
    {routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        element={route.component}
      />
    ))}
  </Routes>
);

export default {
  RouteList,
  routes
}
