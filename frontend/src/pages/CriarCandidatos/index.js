import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from '../../services/api'
import Menu from "../../components/Menu/index.js"
import './style.css';

export default function CriarCandidatos() {
    const { id } = useParams();
    const navigate = useNavigate();
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

    function onChange(ev) {
        const { name, value } = ev.target;
        setCandidato({ ...candidato, [name]: value })
    }

    return (
        <div className="vaga-container">
            <Menu />
            <form onSubmit={onSubmit} className="form">
                <h1 className="tituloaba">Cadastrar Candidato</h1>
                <h4>Digite os dados para cadastro.</h4>

                <div className='label-float'>
                    <input name="name" onChange={onChange} placeholder=" " value={candidato.name} />
                    <label>Nome</label>
                </div>

                <div className="label-float">
                    <input className="email" name="email" onChange={onChange} placeholder=" " value={candidato.email} />
                    <label>Email</label>
                </div>

                <div className="label-float">
                    <input className="contato" name="contato" onChange={onChange} placeholder=" " value={candidato.contato} />
                    <label>Contato</label>
                </div>

                <h4 id="perfilcompcand">Perfil Comportamental:</h4>
                <div className="slider">
                    <h4 id="colaborativo">Colaborativo</h4>
                    <input name='objetivoc1' className="slider1" id="campo" type="range" min="0" max="4" onChange={onChange} value={candidato.objetivoc1} />
                    <h4 id="independente">Independente</h4>

                    <h4 id="reservado">Reservado</h4>
                    <input name='objetivoc2' className="slider1" id="campo" type="range" min="0" max="4" onChange={onChange} value={candidato.objetivoc2} />
                    <h4 id="sociavel">Sociável</h4>

                    <h4 id="intenso">Intenso</h4>
                    <input name='objetivoc3' className="slider1" id="campo" type="range" min="0" max="4" onChange={onChange} value={candidato.objetivoc3} />
                    <h4 id="paciente">Paciente</h4>

                    <h4 id="impulsivo">Impulsivo</h4>
                    <input name='objetivoc4' className="slider1" id="campo" type="range" min="0" max="4" onChange={onChange} value={candidato.objetivoc4} />
                    <h4 id="vigilante">Vigilante</h4>
                </div>

                <div className="actions">
                    <Link className="buttoncancelar" to={('/candidatos')}>Cancelar</Link>
                    <button className="buttonsalvar" type="Finalizar">Salvar</button>
                </div>
            </form>
        </div>
    );
}