import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Menu from "../Menu/index.js"
import './style.css';

export default function Candidatos() {
    const [candidatos, setCandidatos] = useState([]);
    useEffect(() => {
        api.get('candidatos').then(response => {
            setCandidatos(response.data);
        })
    }, [])

    async function handleDelete(id) {
        try {
            await api.delete(`/candidatos/${id}`)
            setCandidatos(candidatos.filter(candidato => candidato.id !== id))
        } catch (err) {
            alert('Erro ao deletar');
        }
    }

    return (
        <div className="vaga-container">
            <Menu />
            <form className="form">
                <h1 className='tituloaba'>Revisar Candidatos</h1>
                <h4 id='titulovaga'>Analisar vaga e candidatos.</h4>

                <h1 id='titulocandidatos'>Vaga</h1>
                <div className='VisualizarCandidatos'>
                    <div className="slider">
                        <h4 id="colaborativo">Colaborativo</h4>
                        <input className="slider1" id="campo" type="range" />
                        <h4 id="independente">Independente</h4>

                        <h4 id="reservado">Reservado</h4>
                        <input className="slider1" id="campo" type="range" />
                        <h4 id="sociavel">Sociável</h4>

                        <h4 id="intenso">Intenso</h4>
                        <input className="slider1" id="campo" type="range" />
                        <h4 id="paciente">Paciente</h4>

                        <h4 id="impulsivo">Impulsivo</h4>
                        <input className="slider1" id="campo" type="range" />
                        <h4 id="vigilante">Vigilante</h4>
                    </div>
                </div>


                <h1 id='titulocandidatos'>Candidatos</h1>

                <table className="candidato-list">
                    <thead>
                        <tr>
                            <th id='tituloscontainer'>Nome</th>
                            <th id='tituloscontainer'>Contato</th>
                            <th id='tituloscontainer'>Email</th>
                            <th id='tituloscontainer'>Status do Questionário</th>
                            <th id='tituloscontainer'>Afinidade</th>
                            <th id='tituloscontainer'>Nota</th>
                            <th id='tituloscontainer'>Entrevistar</th>
                            <th id='tituloscontainer'>Visualizar</th>
                            <th id='tituloscontainer'>Deletar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {candidatos.map(candidato => (
                            <tr key={candidato.id}>

                                <td>{candidato.name}</td>
                                <td>{candidato.contato}</td>
                                <td>{candidato.email}</td>
                                <div id='status'>
                                    <td>Pendente</td>
                                </div>
                                <td>5</td>
                                <td>10</td>

                                <td><button className="buttoneditar">Sim</button></td>
                                <td><button className="buttoneditar" >Visualizar</button></td>
                                <td><button className="buttoneditar" onClick={() => handleDelete(candidato.id)} type="submit">Deletar</button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    );
}