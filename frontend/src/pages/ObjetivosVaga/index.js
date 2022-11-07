import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Menu from "../Menu/index.js"
import api from '../../services/api'
import './style.css';
export default function Objetivos() {

    return (
        <div className="vaga-container">
            <Menu />
            <form className="form">
                <h1 className="tituloaba">Objetivos da Vaga</h1>
                <h4>Defina quais os objetivos necessários para a vaga.</h4>
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

                <div className="actions">
                    <Link className="buttoncancelar" to={('/vagas')}>Cancelar</Link>
                    <Link className="buttonsalvar" type="Finalizar" to={('/adicionarcandidatos')}>Proxima Etapa</Link>
                </div>
            </form>
        </div>
    );
}