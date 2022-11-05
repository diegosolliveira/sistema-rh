import React from 'react';
import Logo from "../Imagens/Logo.png"
import overviewlogo from "../Imagens/overview.svg"
import candidatologo from "../Imagens/user.svg"
import revisarlogo from "../Imagens/folder.svg"
import vagaslogo from "../Imagens/pessoas.svg"
import configuracaologo from "../Imagens/configuracoes1.png"
import perfillogo from "../Imagens/perfil.png"
import sairlogo from "../Imagens/sair.png"
import criarvagaslogo from "../Imagens/add.svg"
import objetivologo from "../Imagens/verificado.png"
import adicionarcandidatoslogo from "../Imagens/adduser.svg"
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

                <Link className='sair' to={('/')}>
                        <img id='sairimg' src={sairlogo} alt="" />
                        Sair
                </Link>

            </div>
        </div>
    );
}