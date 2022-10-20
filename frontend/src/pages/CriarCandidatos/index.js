import React,{useState,useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from '../../services/api'
import './style.css';

export default function CriarCandidatos(){
    const {id} = useParams();
    const navigate = useNavigate();
    const initCandidato={
        name:'',
        sobrenome: '',
        contato: '',
        email:''
    }
    const[candidato,setCandidato] = useState(initCandidato);

    useEffect(()=>{
       if(id){
        api.get(`/candidatos/${id}`).then(response=>{
            setCandidato(...response.data)
        })
       } 
    });

    function onSubmit(ev){
        ev.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id 
        ? `/candidatos/${id}` 
        : '/candidatos';
        
        api[method](url,candidato).then((response)=>{
            navigate('/')
        })
    }

    function onChange(ev){
        const {name,value} = ev.target;
        setCandidato({...candidato,[name]:value})
    }

    return(
        <div id="profile-container">
            <h1>Cadastrar Candidato</h1>
                <form onSubmit={onSubmit} className="form">
                    <h3>Nome</h3>
                    <input name="name" onChange={onChange} value={candidato.name}/>

                    <h3>Sobrenome</h3>
                    <input name="sobrenome" onChange={onChange} value={candidato.sobrenome}/>

                    <h3>Contato</h3>
                    <input name="contato" onChange={onChange} value={candidato.contato}/>

                    <h3>Email</h3>
                    <input type="email" name="email" onChange={onChange} value={candidato.email}/>

                    <div className="actions">
                        <Link className="button" to={('/candidatos')}>Voltar</Link>
                        <button className="button" type="submit">Salvar</button>
                    </div>
                    
                </form>
        </div>
    );
}