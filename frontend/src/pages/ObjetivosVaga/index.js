import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Menu from "../Menu/index.js"
import api from '../../services/api'
import './style.css';
export default function Objetivos() {

    return (
        <div className="vaga-container">
            <Menu/>
            <form className="form">
                <h1 className="tituloaba">Objetivos da Vaga</h1>
                <h4>Defina quais os objetivos necessários para a vaga.</h4>

                <div className="actions">
                    <Link className="buttoncancelar" to={('/vaga')}>Cancelar</Link>
                    <Link className="buttonsalvar" type="Finalizar" to={('/adicionarcandidatos')}>Proxima Etapa</Link>
                </div>
            </form>
        </div>
    );
}