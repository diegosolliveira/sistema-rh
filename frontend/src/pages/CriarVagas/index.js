import React,{useState,useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from '../../services/api'
import './style.css';

export default function CriarVaga(){
    const {id} = useParams();
    const navigate = useNavigate();
    const initVagas={
        titulo:'',
        descricao: ''
    }
    const[vaga, setVaga] = useState(initVagas);

    useEffect(()=>{
       if(id){
        api.get(`/vagas/${id}`).then(response=>{
            setVaga(...response.data)
        })
       } 
    });

    function onSubmit(ev){
        ev.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id 
        ? `/vagas/${id}` 
        : '/vagas';
        
        api[method](url,vaga).then((response)=>{
            navigate('/')
        })
    }

    function onChange(ev){
        const {name,value} = ev.target;
        setVaga({...vaga,[name]:value})
    }

    return(
        <div id="profile-container">
            <h1>Criar Vaga</h1>
                <form onSubmit={onSubmit} className="form">
                    <h3>Titulo</h3>
                    <input name="titulo" onChange={onChange} value={vaga.titulo}/>

                    <h3>Descrição</h3>
                    <input name="descricao" onChange={onChange} value={vaga.descricao}/>

                    <div className="actions">
                        <Link className="button" to={('/vaga')}>Voltar</Link>
                        <button className="button" type="submit">Salvar</button>
                    </div>
                </form>
        </div>
    );
}