import React, {useState} from 'react';

import  {FiArrowLeft} from 'react-icons/fi';
import  {Link, useHistory} from 'react-router-dom';



import '../../global.css';
import './style.css';

import api from '../../services/apidoc/api';

export default function NewVehicle(){
    const [licensePlate, setLicensePlate] = useState('');
    const [type, setType] = useState();
    
    
    const history = useHistory();
    const  token = localStorage.getItem('usrToken');
    

    async function handleNewVehicle(e){
        e.preventDefault();
        const data = {licensePlate, type};

        try {
            await api.post('registerVehicle', data , {
                headers:{
                    Authorization: token,
                }
            })

            history.push('getVehicles');

        } catch (error) {
            alert('Falha ao cadastrar um veiculo');
        }
        
    }

    return(
        <div className="new-vehicle-container">
            <div className="content">
                <section>
                   <h1>Cadastrar novo veiculo</h1>
                    <Link className="back-link" to="/getVehicles" ><FiArrowLeft size={16} color="#e02041"/> Voltar</Link>
                </section>
                <form onSubmit={handleNewVehicle}>
                    <input 
                        placeholder="Placa do veiculo"
                        value= {licensePlate}
                        onChange = {e => setLicensePlate(e.target.value)} 
                    />
                   
                    <input 
                        placeholder="Tipo do veiculo"
                        value= {type}
                        onChange = {e => setType(parseInt(e.target.value) )}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );

}