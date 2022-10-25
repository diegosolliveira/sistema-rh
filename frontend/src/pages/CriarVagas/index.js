import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from '../../services/api'
import './style.css';

export default function CriarVagas() {
    const { id } = useParams();
    const navigate = useNavigate();
    const initVagas = {
        titulo: '',
        descricao: ''
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
            navigate('/')
        })
    }

    function onChange(ev) {
        const { name, value } = ev.target;
        setVaga({ ...vaga, [name]: value })
    }

    return (
        <div className="profile-container">
            <form onSubmit={onSubmit} className="form">
                <h1>Criar Vaga</h1>
                
                <input name="titulo" onChange={onChange} placeholder=" " value={vaga.titulo} />
                <label>Titulo</label>

                <input className="descricao" name="descricao" onChange={onChange} placeholder=" " value={vaga.descricao} />
                <label>Descrição da vaga</label>
                
                <div className="actions">
                    <Link className="buttoncancelar" to={('/vaga')}>Cancelar</Link>
                    <button className="buttonsalvar" type="Finalizar">Salvar</button>
                </div>
            </form>
        </div>
    );
}