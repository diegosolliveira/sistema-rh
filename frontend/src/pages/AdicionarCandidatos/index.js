import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FormActions, useForm, FormProvider } from "../../context/FormContext.tsx";
import api from "../../services/api";
import Menu from "../../components/Menu/index.js"
import linklogo from "../Imagens/link.svg"
import emaillogo from "../Imagens/email.svg"
import './style.css';

export default function AdicionarCandidatos() {
    const { state, dispatch } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();
    const initVagas = {
        titulo: state.titulo,
        descricao: state.descricao,
        objetivo1: state.objetivo1,
        objetivo2: state.objetivo2,
        objetivo3: state.objetivo3,
        objetivo4: state.objetivo4
    }
    const [vaga, setVaga] = useState(initVagas);

    function onSubmit(ev) {
        ev.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id
            ? `/vagas/${id}`
            : '/vagas';

        api[method](url, vaga).then((response) => {
            navigate('/vagas')
        })
    }

    useEffect(() => {
        if (state.titulo === '') {
            navigate('/createvagas')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    function onChange(ev) {
        setVaga({
            titulo: state.titulo,
            descricao: state.descricao,
            objetivo1: state.objetivo1,
            objetivo2: state.objetivo2,
            objetivo3: state.objetivo3,
            objetivo4: state.objetivo4
        })
    }

    return (
        <FormProvider>
            <div className="vaga-container">
                <Menu />
                <form onSubmit={onSubmit} className="form">
                    <h1 className="tituloaba">Adicionar Candidatos</h1>

                    <h4 id="formularioDescricao">Enviar formulário para os candidatos para a vaga de .</h4>

                    <button className="criarLink">
                        <img id='linkimg' src={linklogo} alt="" />
                        Criar um link</button>
                    <button className="criarEmail">
                        <img id='emailimg' src={emaillogo} alt="" />
                        Criar email
                    </button>

                    <h4 id="adcEmails">Digite os emails separados por vírgula:</h4>
                    <div className='label-float'>
                        <input placeholder=" " />
                        <label>Emails</label>
                    </div>

                    <h4 id="adcCandidatos">Adicione os candidatos:</h4>

                    <div className='label-float'>
                        <input placeholder=" " id="inputnome" />
                        <label>Nome</label>
                    </div>

                    <div className='label-float'>
                        <input placeholder=" " id="inputemail" />
                        <label id="labelemail">Email</label>
                    </div>

                    <div className="actions">
                        <Link className="buttoncancelar" to={('/objetivos')}>Voltar</Link>
                        <button className="buttonsalvar" type="Finalizar" onClick={onChange}>Finalizar</button>
                    </div>
                </form>
            </div>
        </FormProvider>
    );
}