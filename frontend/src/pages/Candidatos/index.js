import React,{useState,useEffect} from 'react';
import api from '../../services/api'; 
import { Link } from 'react-router-dom';
import './style.css';

export default function Candidatos(){
    const [candidatos, setCandidatos] = useState([]);
    useEffect(()=>{
        api.get('candidatos').then(response =>{
            setCandidatos(response.data);
        })
    },[])

    async function handleDelete(id){
        try{
            await api.delete(`/candidatos/${id}`)
            setCandidatos(candidatos.filter(candidato=>candidato.id !== id))
        }catch(err){
            alert('Erro ao deletar');
        }
    }

    return(
        <div id="vaga-container">
            <h1>Candidatos</h1>
            <Link className="button" id='create-link' to={('/createcandidatos')}>Criar</Link>
            <ul className="vaga-list"> 
                {candidatos.map(candidato =>(
                    <li key={candidato.id}>
                        <h3>Nome</h3>
                        <p>{candidato.name}</p>
                        <h3>Sobrenome</h3>
                        <p>{candidato.sobrenome}</p>
                        <h3>Contato</h3>
                        <p>{candidato.contato}</p>
                        <h3>Email</h3>
                        <p>{candidato.email}</p>

                        <div className="actions">
                            <button className="button" onClick={()=>handleDelete(candidato.id)} type="submit">Deletar</button>
                            <Link className="button" to={`/update/${candidato.id}`}>Criar</Link>
                        </div>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
}