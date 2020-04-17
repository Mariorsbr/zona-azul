import React from 'react';
import {Link} from 'react-router-dom';

import './style.css'

export default function Home(){
    return(

        <body>

            <header id="header" class="fixed-top d-flex align-items-center  header-transparent ">
                <div class="container d-flex align-items-center">

                <div class="logo mr-auto">
                    <h1 class="text-light"><a>Zona Azul</a></h1>
                    
                   
                </div>

                <nav class="nav-menu d-none d-lg-block">
                    <ul>
                    <li class="active"><Link to="user/login">Login</Link></li>
                    
                    </ul>
                </nav>

                </div>
            </header>

            
            <section id="hero" class="d-flex justify-cntent-center align-items-center">
                <div id="heroCarousel" class="container carousel carousel-fade" data-ride="carousel">

                
                    <div class="carousel-item active">
                        <div class="carousel-container">
                        <h2 class="animated fadeInDown">Bem Vindo ao <span>Zona Azul</span></h2>
                        <p class="animated fadeInUp">PLATAFORMA DE TRANSPORTE PÚBLICO</p>
                       
                        </div>
                    </div>

                </div>
            </section>

            <div class="hero-waves">
                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="wave">
                <defs></defs>
                <path id="wave1" d="" />
                </svg>
                <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="wave">
                <defs></defs>
                <path id="wave2" d="" />
                </svg>
            </div>

            <main id="main"/>
    
        </body>
              
    );
}

