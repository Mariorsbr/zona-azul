import React,{useState} from 'react';
import './style.css';

import api from '../../services/apidoc/api';

import  {FiArrowLeft, FiLogIn} from 'react-icons/fi';
import  {FaUser,FaKey,FaEnvelope, FaPhone, FaIdCard} from 'react-icons/fa';
import  {Link, useHistory} from 'react-router-dom';

export default function Edit(){
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [newPassword,setNewPassword] = useState('');
    

    const history = useHistory();
    const  token = localStorage.getItem('usrToken');

    async function handleEdit(e){
        e.preventDefault();
        

       try {
            await api.post('/user/edit', {password ,name, email, phone, newPassword}, {
                headers:{
                    Authorization: token,
                }
            })
            history.push('/getVehicles');

       } catch (error) {
           alert("Falha na atualização ");
       }   
    }


    return(
        <body>
            <div className="edit-container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card-edit">
                        <div className="card-header">
                            <h1>Edit</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleEdit}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i ><FaKey></FaKey></i></span>
                                        <input 
                                            type="password" className="form-control"
                                            placeholder="Digite sua senha"
                                            value = {password}
                                            onChange = {e => setPassword(e.target.value)}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i ><FaUser></FaUser></i></span>
                                            <input 
                                                type="text" className="form-control"
                                                placeholder="Digite seu nome"
                                                value = {name}
                                                onChange = {e => setName(e.target.value)}
                                            />
                                        </div>
                                        
                                </div>
                                
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i ><FaPhone></FaPhone></i></span>
                                        <input 
                                            type="tel" className="form-control"
                                            placeholder="(ddd)  telefone "
                                            value = {phone}
                                            onChange = {e => setPhone(e.target.value)}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i><FaEnvelope></FaEnvelope></i></span>
                                        <input 
                                            className="form-control"
                                            type="email" placeholder="Digite seu email"
                                            value = {email}
                                            onChange = {e => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i ><FaKey></FaKey></i></span>
                                        <input 
                                            type="password" className="form-control"
                                            placeholder="Digite sua nova senha"
                                            value = {newPassword}
                                            onChange = {e => setNewPassword(e.target.value)}
                                        />
                                    </div>
                                    
                                </div>
                                
                                <div className="form-group ">
                                    <button className="btn float-right edit_btn" type="submit" >Editar</button>
                                </div>
                                <div><Link className="back-link" to="/getVehicles" ><FiLogIn></FiLogIn>Voltar</Link></div>
                                
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </body>
       
    );
}