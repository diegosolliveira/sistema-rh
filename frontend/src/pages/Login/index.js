import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export default function Login() {

    return (

        <div className="login-main-div">
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

                </form>

            </div>
        </div>
    );
}