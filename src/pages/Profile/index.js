import React, {useEffect, useState}  from 'react';
import {Link, useHistory} from 'react-router-dom'

import {FiPower,FiTrash2} from 'react-icons/fi'

import api from '../../services/apidoc/api';


import './style.css';


export default function Profile(){
    const [vehicles,setVehicles] = useState([]);

    const token =localStorage.getItem('usrToken') ;
   
    const history = useHistory();

    useEffect(() => {
        api.get('getVehicles',{
            headers:{
                Authorization: token,
            }
        }).then(response =>{
            setVehicles(response.data.vehicles);
        });
    }, [vehicles]);


    async function handleDeleteVehicle(licensePlate) {
        
        try {
        await api.post('deleteVehicle', {licensePlate: licensePlate},{
                headers: {
                    Authorization: token,
                }
            });

        } catch (error) {
            alert('Falha ao deletar o veiculo');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <span  >Bem vindo ao zonal azul  </span>
                <Link className="button"  to="registerVehicle" > Cadastrar novo veiculo</Link>
                <Link className="button"  to="user/edit"> Edit</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Veículos Cadastrados</h1>
            <ul>
               {vehicles.map(vehicle => (
                    <li key={vehicle.licensePlate}>
                        <strong>PLACA:</strong>
                        <p>{vehicle.licensePlate}</p>

                        <strong>TIPO:</strong>
                        <p>{vehicle.type}</p>

                        
                        <button onClick={() => handleDeleteVehicle(vehicle.licensePlate)}
                             type="button"><FiTrash2 size={22} color="#a8a8b3" /></button>
                </li>

               ))}
            </ul>
        </div>
    );
}