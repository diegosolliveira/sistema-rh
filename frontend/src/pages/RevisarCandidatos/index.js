import React,{useState,useEffect} from 'react';
import api from '../../services/api'; 
import { Link } from 'react-router-dom';
import './style.css';

export default function Vagas(){
    const [vagas, setVagas] = useState([]);
    useEffect(()=>{
        api.get('vagas').then(response =>{
            setVagas(response.data);
        })
    },[])

    async function handleDelete(id){
        try{
            await api.delete(`/vagas/${id}`)
            setVagas(vagas.filter(vaga=>vaga.id !== id))
        }catch(err){
            alert('Erro ao deletar');
        }
    }

    return(
        <div id="vaga-container">
            <h1>Revisar Candidatos</h1>
            <Link className="button" id='create-link' to={('/createvagas')}>Criar</Link>
            <ul className="vaga-list"> 
                {vagas.map(vaga =>(
                    <li key={vaga.id}>
                        <h3>Titulo</h3>
                        <p>{vaga.titulo}</p>
                        <h3>Descrição</h3>
                        <p>{vaga.descricao}</p>

                        <div className="actions">
                            <button className="button" onClick={()=>handleDelete(vaga.id)} type="submit">Deletar</button>
                            <Link className="button" to={`/update/${vaga.id}`}>Criar</Link>
                        </div>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
}