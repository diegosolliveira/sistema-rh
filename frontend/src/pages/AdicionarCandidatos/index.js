import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Menu from "../Menu/index.js"
import api from '../../services/api'
import './style.css';

export default function AdicionarCandidatos() {

    return (
        <div className="vaga-container">
            <Menu/>
            <form className="form">
                <h1 className="tituloaba">Adicionar Candidatos</h1>
                <h4>Escolha os candidatos para a vaga.</h4>

                <div className="actions">
                    <Link className="buttoncancelar" to={('/vaga')}>Cancelar</Link>
                    <button className="buttonsalvar" type="Finalizar">Salvar</button>
                </div>
            </form>
        </div>
    );
}