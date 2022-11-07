import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Menu from "../Menu/index.js"
import './style.css';

export default function Vagas() {
    const [vagas, setVagas] = useState([]);
    useEffect(() => {
        api.get('vagas').then(response => {
            setVagas(response.data);
        })
    }, [])

    async function handleDelete(id) {
        try {
            await api.delete(`/vagas/${id}`)
            setVagas(vagas.filter(vaga => vagas.id !== id))
        } catch (err) {
            alert('Erro ao deletar');
        }
    }

    return (
        <div className="vaga-container">
            <Menu/>
            <form className="form">
                <h1 className="tituloaba">Vagas</h1>
                <h4>Vagas criadas.</h4>

                <table className="candidato-list">
                    <thead>
                        <tr>
                            <th id='tituloscontainer'>Titulo</th>
                            <th id='tituloscontainer'>Descrição</th>
                            <th id='tituloscontainer'>Visualizar</th>
                            <th id='tituloscontainer'>Deletar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {vagas.map(vaga => (
                            <tr key={vaga.id}>

                                <td>{vaga.titulo}</td>
                                <td>{vaga.descricao}</td>
                                
                                
                                <td><button className="buttoneditar" >Visualizar</button></td>
                                <td><button className="buttoneditar" onClick={() => handleDelete(vaga.id)} type="submit">Deletar</button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </form>
        </div>
    );
}