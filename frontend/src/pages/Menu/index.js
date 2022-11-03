import React from 'react';
import Logo from "../Imagens/Logo.png"
import overviewlogo from "../Imagens/grafico-de-pizza.png"
import candidatologo from "../Imagens/do-utilizador.png"
import revisarlogo from "../Imagens/vaga.png"
import vagaslogo from "../Imagens/pessoas.svg"
import configuracaologo from "../Imagens/configuracao.png"
import perfillogo from "../Imagens/perfil.png"
import sairlogo from "../Imagens/sair.png"
import './styles.css'
import { Link } from 'react-router-dom';

export default function Menu() {

    return (
        <div className="login-menu">
            <div className='form'>

                <img className='logomenu' src={Logo} alt="" />
                <h1 className='nomelogomenu'>Sistema RH</h1>
                <h5 className='menu'>Menu</h5>

                <Link className='overview' to={('/home')}>
                        <img id='overviewimg' src={overviewlogo} alt="" />
                        Overview
                </Link>

                <Link className='candidato' to={('/createcandidatos')}>
                        <img id='candidatoimg' src={candidatologo} alt="" />
                        Cadastrar Candidato
                </Link>

                <Link className='revisar' to={('/candidatos')}>
                        <img id='revisarimg' src={revisarlogo} alt="" />
                        Revisar Candidatos
                </Link>

                <Link className='vagas' to={('/createvagas')}>
                        <img id='vagasimg' src={vagaslogo} alt="" />
                        Vagas
                </Link>

                <button className='configuracao'>
                        <img id='configuracaoimg' src={configuracaologo} alt="" />
                        Configurações
                </button>

                <hr></hr>

                <h5 className='perfilusuario'>Perfil</h5>

                <button className='perfil'>
                        <img id='perfilimg' src={perfillogo} alt="" />
                </button>

                <Link className='sair' to={('/')}>
                        <img id='sairimg' src={sairlogo} alt="" />
                        Sair
                </Link>

            </div>
        </div>
    );
}