import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Menu from "../../components/Menu/index.js"
import api from '../../services/api'
import './style.css';
export default function Objetivos() {

    const [vagas, setVagas] = useState([]);
    useEffect(() => {
        api.get('vagas').then(response => {
            setVagas(response.data);
        })
    }, [])

    const { id } = useParams();
    const navigate = useNavigate();
    const initVagas = {
        titulo: '',
        descricao: '',
        objetivo1: '',
        objetivo2: '',
        objetivo3: '',
        objetivo4: ''
    }
    const [vaga, setVaga] = useState(initVagas);

    useEffect(() => {
        if (id) {
            api.get(`/vagas/${id}`).then(response => {
                setVaga(...response.data)
            })
        }
    });
    
    function onSubmit(ev) {
        ev.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id
            ? `/vagas/${id}`
            : '/vagas';
            
        api[method](url, vaga).then((response) => {
            navigate('/objetivos')
        })
    }

    function onChange(ev) {
        const { name, value } = ev.target;
        setVaga({ ...vaga, [name]: value })
    }

    return (
        <div className="vaga-container">
            <Menu />
            <form onSubmit={onSubmit} className="form">
                <h1 className="tituloaba">Objetivos da Vaga</h1>
                <h4>Defina quais os objetivos necessários para a vaga.</h4>

                <div className="slider" >
                    <h4 id="colaborativo">Colaborativo</h4>
                    <input name='objetivo1' className="slider1" id="campo" type="range" min="0" max="4" onChange={onChange} value={vagas.objetivo1} />
                    <h4 id="independente">Independente</h4>

                    <h4 id="reservado">Reservado</h4>
                    <input name='objetivo2' className="slider1" id="campo" type="range" min="0" max="4" onChange={onChange} value={vagas.objetivo2} />
                    <h4 id="sociavel">Sociável</h4>

                    <h4 id="intenso">Intenso</h4>
                    <input name='objetivo3' className="slider1" id="campo" type="range" min="0" max="4" onChange={onChange} value={vagas.objetivo3} />
                    <h4 id="paciente">Paciente</h4>

                    <h4 id="impulsivo">Impulsivo</h4>
                    <input name='objetivo4' className="slider1" id="campo" type="range" min="0" max="4" onChange={onChange} value={vagas.objetivo4} />
                    <h4 id="vigilante">Vigilante</h4>

                </div>

                <div className="actions">
                    <Link className="buttoncancelar" to={('/vagas')}>Cancelar</Link>
                    <button className="buttonsalvar">Proxima Etapa</button>
                </div>
            </form >
        </div >
    );
}