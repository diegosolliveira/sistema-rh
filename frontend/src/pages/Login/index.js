import React from 'react';
import { Link } from 'react-router-dom';
import Img from "../Imagens/SISTEMA RH.gif"
import facebook from "../Imagens/Facebook.png"
import twitter from "../Imagens/twitter.png"
import google from "../Imagens/google.png"
import './style.css'

export default function Login() {

    return (
        <div className="login-main-div">
            <img src={Img} alt=""/>

            <div className="login-div">

                <form className='form'>
                    <h1>Login</h1>

                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="senha" placeholder="Senha" />


                    <button className="buttonLogar" type="submit">Entrar</button>

                    <div className='linha' />

                    <div className='actions'>

                        <Link className="buttonCriar" to={'/createaccount'}>Criar conta</Link>

                    </div>

                    <h3>Entrar com</h3>

                    <button className='btfacebook'>
                        <img id='facebook' src={facebook} alt=""/>
                        Facebook
                    </button>

                    <button className='bttwitter'>
                        <img id='twitter' src={twitter} alt=""/>
                        Twitter
                    </button>

                    <button className='btgoogle'>
                        <img id='google' src={google} alt=""/>
                        Google
                    </button>
                </form>
            </div>
        </div>
    );
}