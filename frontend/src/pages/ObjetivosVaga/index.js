import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Slider } from "../../"
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

    return (
        <div className="vaga-container">
            <Menu />
            <form className="form">
                <h1 className="tituloaba">Objetivos da Vaga</h1>
                <h4>Defina quais os objetivos necessários para a vaga.</h4>

                {vagas.map(vaga => (
                    <div className="slider" >
                        <h4 id="colaborativo">Colaborativo</h4>
                        <input name='objetivo1' className="slider1" id="campo" type="range" min="0" max="4" value={vaga.objetivo1} />
                        <h4 id="independente">Independente</h4>

                        <h4 id="reservado">Reservado</h4>
                        <input name='objetivo2' className="slider1" id="campo" type="range" min="0" max="4" value={vaga.objetivo2} />
                        <h4 id="sociavel">Sociável</h4>

                        <h4 id="intenso">Intenso</h4>
                        <input name='objetivo3' className="slider1" id="campo" type="range" min="0" max="4" value={vaga.objetivo3} />
                        <h4 id="paciente">Paciente</h4>

                        <h4 id="impulsivo">Impulsivo</h4>
                        <input name='objetivo4' className="slider1" id="campo" type="range" min="0" max="4" value={vaga.objetivo4} />
                        <h4 id="vigilante">Vigilante</h4>

                    </div>
                ))}

                <div className="actions">
                    <Link className="buttoncancelar" to={('/vagas')}>Cancelar</Link>
                    <Link className="buttonsalvar" to={('/adicionarcandidatos')}>Proxima Etapa</Link>
                </div>
            </form >
        </div >
    );
}