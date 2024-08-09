import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { coordenadasEstados } from './coordenadasEstados';

// Service
import Service from '../../api/services';

// Corrigir o problema do ícone padrão do Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function Map() {

    const service = Service();

    const [position, setPosition] = React.useState(null);
    const [pacientes, setPacientes] = React.useState([]);

    React.useEffect(() => {
        loadPacientes();
    }, []);

    async function loadPacientes() {
        const response = await service.getAll({ url: '/paciente' });
        setPacientes(response);
    }

    return (
        <MapContainer center={position || [-15.83, -47.86]} zoom={4} style={{ height: '50vh', width: '70vw' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {coordenadasEstados.map((coordenada, index) => (
                <Marker key={index} position={coordenada.coordenadas}>
                    <Popup>
                        {coordenada.estado} | Pacientes: {pacientes.filter(paciente => paciente.uf === coordenada.estado).length}                       
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}