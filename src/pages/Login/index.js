import React,{useState} from 'react';
import './style.css';

import api from '../../services/apidoc/api';

import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import {FaIdCard, FaKey} from 'react-icons/fa'



export default function Login(){
    const [cpf_cnpj,setCpf_cnpj] = useState('');
    const [password, setPassword] = useState('');
    

    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('/user/login',{cpf_cnpj, password});
            localStorage.setItem('usrToken',response.data.user.token);

            history.push('/getVehicles');
        
        } catch (error) {
            alert('Falha no login');
        }
    }

    async function handleRecover(e){
        e.preventDefault();

        try {
            const response = await api.post('/user/forgotPassword',{cpf_cnpj});
        } catch (error) {
            alert('Falha na Recuperação de senha');
        }
    }
    //colocar imagem depois
    return(
        <body >
            <div className="login-container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h1>Login</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
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
                                        <span className="input-group-text"><i><FaKey></FaKey></i></span>
                                        <input 
                                            className="form-control"
                                            type="password" placeholder="Digite sua senha"
                                            value = {password}
                                            onChange = {e => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                               
                                <div className="form-group ">
                                    <button className="btn float-right login_btn" type="submit">Entrar</button>
                                </div>

                                <div class="card-footer">
				                    <div class="d-flex justify-content-center links" >
					                    Não possui uma conta?<Link to="/user/register">Inscrever-se</Link>
				                    </div>
				                    <div class="d-flex justify-content-center">
					                    <Link to="#"  onClick = {handleRecover}>Esqueceu sua senha?</Link>
				                    </div>
                                    <div><Link to="/" className="back-link"><FiLogIn></FiLogIn>Home</Link></div>
                                    
			                    </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </body>
        
    );
}