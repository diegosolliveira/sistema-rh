import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Menu from "../../components/Menu/index.js"
import api from '../../services/api'
import './style.css';

export default function CriarVagas() {
    const { id } = useParams();
    const navigate = useNavigate();
    const initVagas = {
        titulo: '',
        descricao: '',
        objetivo1: '0',
        objetivo2: '0',
        objetivo3: '0',
        objetivo4: '0'
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
                <h1 className="tituloaba">Criar Vaga</h1>
                <h4>Qual vaga gostaria de criar?</h4>

                <div className='label-float'>
                    <input name="titulo" onChange={onChange} placeholder=" " value={vaga.titulo} />
                    <label>Titulo</label>
                </div>

                <div className="label-float">
                    <input className="descricao" name="descricao" onChange={onChange} placeholder=" " value={vaga.descricao} />
                    <label>Descrição da vaga</label>
                </div>

                <div className="actions">
                    <Link className="buttoncancelar" to={('/vagas')}>Cancelar</Link>
                    <button className="buttonsalvar" type="Finalizar">Proxima Etapa</button>
                </div>
            </form>
        </div>
    );
}