import React, {useState} from 'react';

import  {FiArrowLeft, FiLogIn} from 'react-icons/fi';
import  {FaUser,FaKey,FaEnvelope, FaPhone, FaIdCard} from 'react-icons/fa';
import  {Link, useHistory} from 'react-router-dom';

import api from '../../services/apidoc/api';



import '../../global.css';
import './style.css';

export default function Register(){
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [cpf_cnpj,setCpf_cnpj] = useState('');
    const [phone,setPhone] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            password,
            email,
            cpf_cnpj,
            phone,
        };

       try {
        const response = await api.post('user/register',data);
       
        history.push('/user/login');
       } catch (error) {
           alert('Error no cadastro, tente novamente');
       }
    }

    return(
        <body>
            <div className="register-container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card-register">
                        <div className="card-header">
                            <h1>Cadastro </h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
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
                                        <span className="input-group-text"><i ><FaIdCard></FaIdCard></i></span>
                                        <input 
                                            type="text" className="form-control"
                                            placeholder="Digite seu CPF ou CNPJ"
                                            value = {cpf_cnpj}
                                            onChange = {e => setCpf_cnpj(e.target.value)}
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
                                            placeholder="Digite sua senha"
                                            value = {password}
                                            onChange = {e => setPassword(e.target.value)}
                                        />
                                    </div>
                                    
                                </div>
                                
                                <div className="form-group ">
                                    
                                    <button className="btn float-right register_btn" type="submit" >Cadastrar</button>
                                </div>
                                <div><Link className="back-link" to="/user/login" ><FiLogIn></FiLogIn>Voltar</Link></div>
                                
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </body>
       
    );
}