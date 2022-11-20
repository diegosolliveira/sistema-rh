import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/authContext';
import Img from "../Imagens/LogoNova.gif"
import Logo from "../Imagens/Logo.png"
import facebook from "../Imagens/Facebook.png"
import twitter from "../Imagens/twitter.png"
import google from "../Imagens/google.png"
import api from '../../services/api';
import './style.css'

export default function Login() {

    const { handleLogin } = useContext(Context);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState("");
    const [resp, setResp] = useState('');

    async function login(e) {
        e.preventDefault();
        const dados = { email, senha };
        await api.post('/users/auth', dados).then(response => {
            setResp(response.data)
        })

        if (resp[0] !== undefined) {
            localStorage.setItem("id", resp[0].id);
            localStorage.setItem("nome", resp[0].name);
            localStorage.setItem("email", resp[0].email);
            handleLogin();
        }
        else {
            setError('Usuário não encontrado!')
            setEmail('');
            setSenha('');

            return;
        }
    }

    return (
        <div className="login-main-div">
            <img className='logo' src={Img} alt="" />

            <div className="login-div">

                <form className='form'>

                    <img className='logo2' src={Logo} alt="" />
                    <h1 className='nomelogo'>Sistema RH</h1>
                    <h1>Login</h1>
                    <h4 id='login'>Bem-vindo! Por favor, insira seus dados.</h4>

                    <div className='label-float'>
                        <input type="email" name="email" placeholder=" " value={email} onChange={(e) => [setEmail(e.target.value), setError("")]} />
                        <label>Email</label>
                    </div>

                    <div className='label-float'>
                        <input type="password" name="senha" placeholder=" " value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]} />
                        <label>Senha</label>
                    </div>

                    <div id='login'>{error}</div>

                    <div className='acessos'>

                        <input type='checkbox' className="checkbox" placeholder="" />
                        <h1 className='lembrar'>Lembrar-me</h1>

                        <Link className='link'>Esqueceu a senha?</Link>
                    </div>

                    <button className="buttonLogar" type='button' onClick={login}>Entrar</button>

                    <div className='linha' />
                    <div className='actions'>

                        <Link className="buttonCriar" to={'/createaccount'}>Criar conta</Link>

                    </div>

                    <h3>Entrar com</h3>

                    <button className='btfacebook'>
                        <img id='facebook' src={facebook} alt="" />
                        Facebook
                    </button>

                    <button className='bttwitter'>
                        <img id='twitter' src={twitter} alt="" />
                        Twitter
                    </button>

                    <button className='btgoogle'>
                        <img id='google' src={google} alt="" />
                        Google
                    </button>
                </form>
            </div>
        </div>
    );
}