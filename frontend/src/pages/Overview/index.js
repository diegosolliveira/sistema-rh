import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Menu from "../Menu/index.js"
import './style.css';

export default function Overview() {
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
                <h1 id='candidato'>Candidatos</h1>
                <h4>Candidatos cadastrados.</h4>
                <ul className="candidato-list">
                    {candidatos.map(candidato => (
                        <li key={candidato.id}>
                            <h3>Nome</h3>
                            <p>{candidato.name}</p>
                            <h3>Contato</h3>
                            <p>{candidato.contato}</p>
                            <h3>Email</h3>
                            <p>{candidato.email}</p>

                            <div className="actions">
                                <button className="buttoneditar" onClick={() => handleDelete(candidato.id)} type="submit">Deletar</button>
                                <Link className="buttoneditar" to={`/update/${candidato.id}`}>Editar</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    );
}