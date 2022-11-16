import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link, useNavigate, useParams} from 'react-router-dom';
import Menu from "../../components/Menu/index.js"
import './style.css';

export default function Candidatos() {
    
    const { id } = useParams();
    const navigate = useNavigate();

    const initCandidato = {
        name: '',
        contato: '',
        email: '',
        status: 'Feito',
        objetivoc1: '',
        objetivoc2: '',
        objetivoc3: '',
        objetivoc4: ''
    }

    const [candidato, setCandidato] = useState(initCandidato);
    const [candidatos, setCandidatos] = useState([]);
    const [vagas, setVagas] = useState([]);

    useEffect(() => {
        if (id) {
            api.get(`/candidatos/${id}`).then(response => {
                setCandidato(...response.data)
            })
        }
    });
    
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

    function onSubmit(ev) {
        ev.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id
            ? `/revisarcandidatos/${id}`
            : '/revisarcandidatos';

        api[method](url, candidato).then((response) => {
            navigate('/candidatos')
        })
    }

    function onClick(ev) {
        const { name, value } = ev.target;
        setCandidato({ ...candidato, [name]: value })
    }

    return (
        <div className="vaga-container">
            <Menu />
            <form onSubmit={onSubmit} className="form">
                <h1 className='tituloaba'>Revisar Candidatos</h1>
                <h4 id='titulovaga'>Analisar vaga e candidatos.</h4>
                <h1 id='titulocandidatos'>Vaga: </h1>
                <body>
                    {vagas.map(vaga => (
                        <p key={vaga.id}>
                            <h1 id='titulovaga2'>{vaga.titulo}</h1>
                            <div className="slidervaga">
                                <input className="slider2" id="campo2" type="range" min="0" max="4" value={vaga.objetivo1} />
                                <input className="slider2" id="campo2" type="range" min="0" max="4" value={vaga.objetivo2} />
                                <input className="slider2" id="campo2" type="range" min="0" max="4" value={vaga.objetivo3} />
                                <input className="slider2" id="campo2" type="range" min="0" max="4" value={vaga.objetivo4} />

                            </div>
                        </p>
                    ))}
                </body>

                <div className='VisualizarCandidatos'>
                    <div className="slider">
                        <h4 id="colaborativo">Colaborativo</h4>
                        <input className="slider1" id="campo" type="range" min="0" max="4" value={candidato.objetivoc1} />
                        <h4 id="independente">Independente</h4>

                        <h4 id="reservado">Reservado</h4>
                        <input className="slider1" id="campo" type="range" min="0" max="4" value={candidato.objetivoc2} />
                        <h4 id="sociavel">Sociável</h4>

                        <h4 id="intenso">Intenso</h4>
                        <input className="slider1" id="campo" type="range" min="0" max="4" value={candidato.objetivoc3} />
                        <h4 id="paciente">Paciente</h4>

                        <h4 id="impulsivo">Impulsivo</h4>
                        <input className="slider1" id="campo" type="range" min="0" max="4" value={candidato.objetivoc4} />
                        <h4 id="vigilante">Vigilante</h4>
                    </div>
                </div>

                <h1 id='titulocandidatos'>Candidatos</h1>

                <table className="candidato-list">
                    <thead>
                        <tr>
                            <th id='tituloscontainer' />
                            <th id='tituloscontainer'>Nome</th>
                            <th id='tituloscontainer'>Contato</th>
                            <th id='tituloscontainer'>Email</th>
                            <th id='tituloscontainer'>Status do Questionário</th>
                            <th id='tituloscontainer'>Afinidade</th>
                            <th id='tituloscontainer'>Nota</th>
                            <th id='tituloscontainer'>Entrevistar</th>
                            <th id='tituloscontainer'>Visualizar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {candidatos.map(candidato => (
                            <tr key={candidato.id}>
                                <td><Link type='checkbox' className="checkboxcandidato" to={`/revisarcandidatos/${candidato.id}`} /></td>
                                <td>{candidato.name}</td>
                                <td>{candidato.contato}</td>
                                <td>{candidato.email}</td>
                                <div id='status'>
                                    <td>{candidato.status}</td>
                                </div>
                                <td>5</td>
                                <td>10</td>

                                <td><Link name='status' className="buttoneditar" to={`/revisarcandidatos/${candidato.id}`} onClick={onClick} value={candidato.status}>Sim</Link></td>
                                <td><Link className="buttoneditar" to={`/candidatos/${candidato.id}`}>Visualizar</Link></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    );
}