import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FormProvider } from "../../context/FormContext.tsx";
import { useForm, FormActions } from "../../context/FormContext.tsx"
import Menu from "../../components/Menu/index.js"
import api from '../../services/api'
import './style.css';

export default function CriarVagas() {

    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    function handleNextStep() {
        if (state.titulo !== '' && state.descricao !== '') {
            navigate('/objetivos')
        }
        else {
            alert("Preencha todos os dados!")
        }
    }

    function handleNameChange(e) {
        dispatch({
            type: FormActions.setTitulo,
            payload: e.target.value,
        })
    }

    function handleDescricaoChange(e) {
        dispatch({
            type: FormActions.setDescricao,
            payload: e.target.value,
        })
    }

    return (
        <FormProvider>
            <div className="vaga-container">
                <Menu />
                <form className="form">
                    <h1 className="tituloaba">Criar Vaga</h1>
                    <h4>Qual vaga gostaria de criar?</h4>

                    <div className='label-float'>
                        <input name="titulo" onChange={handleNameChange} placeholder=" " value={state.titulo} />
                        <label>Titulo</label>
                    </div>

                    <div className="label-float">
                        <input className="descricao" name="descricao" onChange={handleDescricaoChange} placeholder=" " value={state.descricao} />
                        <label>Descrição da vaga</label>
                    </div>

                    <div className="actions">
                        <Link className="buttoncancelar" to={('/vagas')}>Cancelar</Link>
                        <button className="buttonsalvar" onClick={handleNextStep}>Proxima Etapa</button>
                    </div>
                </form>
            </div>
        </FormProvider>
    );
}