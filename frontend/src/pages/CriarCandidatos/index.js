import React,{useState,useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from '../../services/api'
import Menu from "../Menu/index.js"
import './style.css';

export default function CriarCandidatos(){
    const {id} = useParams();
    const navigate = useNavigate();
    const initCandidato={
        name:'',
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
            navigate('/candidatos')
        })
    }

    function onChange(ev){
        const {name,value} = ev.target;
        setCandidato({...candidato,[name]:value})
    }

    return(
        <div className="vaga-container">
            <Menu/>
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
                
                <div className="actions">
                    <Link className="buttoncancelar" to={('/candidatos')}>Cancelar</Link>
                    <button className="buttonsalvar" type="Finalizar">Salvar</button>
                </div>
            </form>
        </div>
    );
}