import React, {useContext, useEffect, useState} from 'react';
import { Context } from '../../context/authContext';
import Logo from "../../pages/Imagens/Logo.png"
import overviewlogo from "../../pages/Imagens/overview.svg"
import candidatologo from "../../pages/Imagens/user.svg"
import revisarlogo from "../../pages/Imagens/folder.svg"
import vagaslogo from "../../pages/Imagens/pessoas.svg"
import configuracaologo from "../../pages/Imagens/configuracoes1.png"
import perfillogo from "../../pages/Imagens/perfil.png"
import sairlogo from "../../pages/Imagens/sair.png"
import criarvagaslogo from "../../pages/Imagens/add.svg"
import objetivologo from "../../pages/Imagens/verificado.png"
import adicionarcandidatoslogo from "../../pages/Imagens/adduser.svg"
import './styles.css'
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Menu() {

        const { handleLogout } = useContext(Context);
        const nome = localStorage.getItem('nome');
        const email = localStorage.getItem('email');
        const id = localStorage.getItem('id');

        const [setUser] = useState('');

        useEffect(() => {
                if (id) {
                        api.get(`/users/profile/${id}`).then(response => {
                                setUser(...response.data)
                        })
                }
        }, []);

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

                                <Link className='revisar' to={('/revisarcandidatos')}>
                                        <img id='revisarimg' src={revisarlogo} alt="" />
                                        Revisar Candidatos
                                </Link>

                                <Link className='vagas' to={('/vagas')}>
                                        <img id='vagasimg' src={vagaslogo} alt="" />
                                        Vagas
                                </Link>

                                <Link className='criarvagas' to={('/createvagas')}>
                                        <img id='criarvagasimg' src={criarvagaslogo} alt="" />
                                        Criar Vagas
                                </Link>

                                <Link className='objetivo' to={('/objetivos')}>
                                        <img id='objetivoimg' src={objetivologo} alt="" />
                                        Objetivos da Vaga
                                </Link>

                                <Link className='adicionarcandidatos' to={('/adicionarcandidatos')}>
                                        <img id='adicionarcandidatosimg' src={adicionarcandidatoslogo} alt="" />
                                        Adicionar Candidatos
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

                                <h5 id='usuarionome'>{nome}</h5>
                                <h5 id='usuario'>{email}</h5>

                                <button className='sair' type='button' onClick={handleLogout}>
                                        <img id='sairimg' src={sairlogo} alt="" />
                                        Sair
                                </button>

                        </div>
                </div>
        );
}