import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link, useNavigate, useParams } from "react-router-dom";
import Menu from "../../components/Menu/index.js"
import './style.css';

export default function Candidatos() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [vagas, setVagas] = useState([]);

    const initCandidato = {
        name: '',
        contato: '',
        email: '',
        status: 'Pendente',
        objetivoc1: '',
        objetivoc2: '',
        objetivoc3: '',
        objetivoc4: ''
    }

    const [candidato, setCandidato] = useState(initCandidato);
    const [candidatos, setCandidatos] = useState([]);

    useEffect(() => {
        api.get('vagas').then(response => {
            setCandidatos(response.data);
        })
    }, [])

    useEffect(() => {
        if (id) {
            api.get(`/candidatos/${id}`).then(response => {
                setCandidato(...response.data)
            })
        }
    });

    function onSubmit(ev) {
        ev.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id
            ? `/candidatos/${id}`
            : '/candidatos';

        api[method](url, candidato).then((response) => {
            navigate('/candidatos')
        })
    }

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
            <form onSubmit={onSubmit} className="form">
                <h1 className='tituloaba'>Visualizar Candidatos</h1>
                <h4 id='titulovaga'>Analisar vaga e candidato.</h4>

                <body>
                    {vagas.map(vaga => (
                        <p key={vaga.id}>
                            <h1 id='titulocandidatos'>{vaga.titulo}</h1>
                        </p>
                    ))}
                </body>

                <div id='listandoCandidato' key={candidato.id}>

                    <h4 id='tituloscontainerr'>Nome: {candidato.name}</h4>
                    <h4 id='tituloscontainerr'>Contato: {candidato.contato}</h4>
                    <h4 id='tituloscontainerr'>Email: {candidato.email}</h4>

                    <h6 id='titulovaga'>Perfil Comportamental:</h6>

                    <div className='VisualizarCandidatos'>
                        <div className="slider">
                            <h4 id="colaborativo">Colaborativo</h4>
                            <input name='objetivo1' className="slider1" id="campo" type="range" min="0" max="4" value={candidato.objetivoc1} />
                            <h4 id="independente">Independente</h4>

                            <h4 id="reservado">Reservado</h4>
                            <input name='objetivo2' className="slider1" id="campo" type="range" min="0" max="4" value={candidato.objetivoc2} />
                            <h4 id="sociavel">Sociável</h4>

                            <h4 id="intenso">Intenso</h4>
                            <input name='objetivo3' className="slider1" id="campo" type="range" min="0" max="4" value={candidato.objetivoc3} />
                            <h4 id="paciente">Paciente</h4>

                            <h4 id="impulsivo">Impulsivo</h4>
                            <input name='objetivo4' className="slider1" id="campo" type="range" min="0" max="4" value={candidato.objetivoc4} />
                            <h4 id="vigilante">Vigilante</h4>
                        </div>
                    </div>

                    <button className="buttondeletarcandidato" onClick={() => handleDelete(candidato.id)} type="submit">Excluir Candidato</button>
                </div>
            </form>
        </div>
    );
}