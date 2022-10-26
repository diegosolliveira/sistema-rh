import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Img from "../Imagens/LogoNova.gif"
import Logo from "../Imagens/Logo.png"
import api from '../../services/api'
import './style.css';

export default function Profile() {
    const { id } = useParams();
    const navigate = useNavigate();
    const initUser = {
        name: '',
        email: '',
        senha: ''
    }
    const [user, setUser] = useState(initUser);

    useEffect(() => {
        if (id) {
            api.get(`/users/${id}`).then(response => {
                setUser(...response.data)
            })
        }
    });

    function onSubmit(ev) {
        ev.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id
            ? `/users/${id}`
            : '/users';

        api[method](url, user).then((response) => {
            navigate('/')
        })
    }

    function onChange(ev) {
        const { name, value } = ev.target;
        setUser({ ...user, [name]: value })
    }

    return (
        <div className="profile-container-main">
            <img className='logo' src={Img} alt="" />

            <div className="profile-container">

                <form onSubmit={onSubmit} className="form">

                    <img className='logo2' src={Logo} alt="" />
                    <h1 className='nomelogo'>Sistema RH</h1>
                    <h1>Cadastrar</h1>
                    <h4>Por favor, insira seus dados.</h4>

                    <div className='label-float'>
                        <input name="name" onChange={onChange} placeholder=" " value={user.name} />
                        <label>Nome</label>
                    </div>

                    <div className='label-float'>
                        <input type="email" name="email" onChange={onChange} placeholder=" " value={user.email} />
                        <label>Email</label>
                    </div>

                    <div className='label-float'>
                        <input type="password" name="senha" onChange={onChange} placeholder=" " value={user.senha} />
                        <label>Senha</label>
                    </div>

                    <div className="actions">
                        <Link className="buttonvoltar" to={('/')}>Voltar</Link>
                    </div>

                    <button className="buttoncriar" type="submit">Criar Conta</button>

                </form>
            </div>
        </div>
    );
}