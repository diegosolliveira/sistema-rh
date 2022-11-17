import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Menu from "../../components/Menu/index.js"
import api from '../../services/api'
import linklogo from "../Imagens/link.svg"
import emaillogo from "../Imagens/email.svg"
import './style.css';

export default function AdicionarCandidatos() {

    return (
        <div className="vaga-container">
            <Menu/>
            <form className="form">
                <h1 className="tituloaba">Adicionar Candidatos</h1>
                

                <h4 id="formularioDescricao">Enviar formulário para os candidatos para a vaga de .</h4>

                <button className="criarLink">
                    <img id='linkimg' src={linklogo} alt="" />
                    Criar um link</button>
                <button className="criarEmail">
                    <img id='emailimg' src={emaillogo} alt="" />
                    Criar email
                </button>

                <h4 id="adcEmails">Digite os emails separados por vírgula:</h4>
                <div className='label-float'>
                        <input placeholder=" " />
                        <label>Emails</label>
                </div>

                <h4 id="adcCandidatos">Adicione os candidatos:</h4>

                <div className='label-float'>
                        <input placeholder=" " id="inputnome"/>
                        <label>Nome</label>
                </div>

                <div className='label-float'>
                        <input placeholder=" " id="inputemail" />
                        <label id="labelemail">Email</label>
                </div>

                

                <div className="actions">
                    <Link className="buttoncancelar" to={('/vagas')}>Cancelar</Link>
                    <button className="buttonsalvar" type="Finalizar">Finalizar</button>
                </div>
            </form>
        </div>
    );
}