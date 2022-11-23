import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Menu from "../../components/Menu/index.js";
import api from '../../services/api';
import candidatologo from "../../pages/Imagens/user.svg";
import relogiologo from "../../pages/Imagens/relogio.svg"; 
import './style.css';

export default function Overview() {
    
    const [candidatos, setCandidatos] = useState([]);
    const [vagas, setVagas] = useState([]);

    useEffect(() => {
        api.get('candidatos').then(response => {
            setCandidatos(response.data);
        })
    }, [])

    useEffect(() => {
        api.get('vagas').then(response => {
            setVagas(response.data);
        })
    }, [])

    return (
        <div className="vaga-container">
            <Menu />
            <form className="form">
                <h1 className="tituloaba">Dashboard</h1>
                <h4>Atividades Recentes.</h4>

                <div className="atividaderecente">
                    <h2 id="atividaderecentetitulo">Atividade Recente: Vagas</h2>
                    <div className='atividaderecente2'>
                        {vagas.map(vaga => (
                            <p key={vaga.id}>
                                <h1 id='titulovaga3'>{vaga.titulo}</h1>
                                <img id='relogioimg' src={relogiologo} alt="" />
                                <h3 id='alteradoha'>Alterado há 1 dia</h3>
                                <Link className='tituloacessar' to={'/revisarcandidatos'}>Acessar</Link>
                            </p>
                        ))}
                    </div>
                    <Link className="buttonSeeAll" to={'/vagas'}>VER TODAS</Link>
                </div>

                <div className="avaliacoespendentes">
                    <h2 id="avaliacoespendentestitulo">Avaliações Pendentes</h2>
                        {candidatos.map(candidato => (
                            <div className='candidatosvagaaa'>
                                <ul>
                                    <ul className="tabelacandidatos">
                                        <img id='candidatoimg' src={candidatologo} alt="" />
                                        <h1 id="tabelanome">{candidato.name}</h1>
                                        <div className="tabelastatus" id={candidato.status}>
                                            <td>{candidato.status}</td>
                                        </div>
                                    </ul>
                                </ul>
                            </div>
                        ))}
                    <Link className="buttonSeeAll" to={'/revisarcandidatos'}>VER TODAS</Link>
                </div>

                <div className="finalizadosrecentemente">
                    <h2 id="finalizadosrecentementetitulo">Finalizados Recentemente</h2>
                    <Link className="buttonSeeAllFinalizados" to={'/revisarcandidatos'}>VER TODAS</Link>
                </div>

            </form >
        </div >
    );
}