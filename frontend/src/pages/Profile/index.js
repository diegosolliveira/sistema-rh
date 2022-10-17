import React,{useState,useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from '../../services/api'
import './style.css';

export default function Profile(){
    const {id} = useParams();
    const navigate = useNavigate();
    const initUser={
        name:'',
        email: '',
        idade: 0,
        empresa:''
    }
    const[user,setUser] = useState(initUser);

    useEffect(()=>{
       if(id){
        api.get(`/users/${id}`).then(response=>{
            setUser(...response.data)
        })
       } 
    });

    function onSubmit(ev){
        ev.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id 
        ? `/users/${id}` 
        : '/users';
        
        api[method](url,user).then((response)=>{
            navigate('/')
        })
    }

    function onChange(ev){
        const {name,value} = ev.target;
        setUser({...user,[name]:value})
    }

    return(
        <div id="profile-container">
            <h1>Cadastro</h1>
                <form onSubmit={onSubmit} className="form">
                    <strong>Nome:</strong>
                    <input name="name" onChange={onChange} value={user.name}/>

                    <strong>Email:</strong>
                    <input type="email" name="email" onChange={onChange} value={user.email}/>

                    <strong>Idade:</strong>
                    <input name="idade" onChange={onChange} value={user.idade}/>

                    <strong>Empresa:</strong>
                    <input name="empresa" onChange={onChange} value={user.empresa}/>

                    <div className="actions">
                        <Link className="button" to={('/')}>Voltar</Link>
                        <button className="button" type="submit">Salvar</button>
                    </div>
                    
                </form>
        </div>
    );
}