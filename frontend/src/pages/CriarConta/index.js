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
        senha:''
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
        <div className="profile-container-main">
            <div className="profile-container">
                <form onSubmit={onSubmit} className="form">

                    <h1>Cadastrar</h1>

                    <h3>Nome</h3>
                    <input name="name" onChange={onChange} value={user.name}/>

                    <h3>Email</h3>
                    <input type="email" name="email" onChange={onChange} value={user.email}/>

                    <h3>Senha</h3>
                    <input type="password" name="senha" onChange={onChange} value={user.senha}/>

                    <div className="actions">
                        <Link className="buttonvoltar" to={('/')}>Voltar</Link>
                        
                    </div>
                    
                    <button className="buttoncriar" type="submit">Criar</button>

                </form>
            </div>    
                
        </div>
    );
}