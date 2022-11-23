import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormActions, useForm, FormProvider } from "../../context/FormContext.tsx";
import Menu from "../../components/Menu/index.js"
import './style.css';
export default function Objetivos() {

    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if (state.titulo === '') {
            navigate('/createvagas')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    function handleNextStep() {
        if (state.objetivo1 !== '' && state.objetivo2 !== '' && state.objetivo3 !== '' && state.objetivo4 !== '') {
            navigate('/adicionarcandidatos')
        }
        else {
            alert("Defina todos os objetivos da vaga!")
        }
    }

    function handleObjetivo1Change(e) {
        dispatch({
            type: FormActions.setObjetivo1,
            payload: e.target.value
        })
    }

    function handleObjetivo2Change(e) {
        dispatch({
            type: FormActions.setObjetivo2,
            payload: e.target.value
        })
    }

    function handleObjetivo3Change(e) {
        dispatch({
            type: FormActions.setObjetivo3,
            payload: e.target.value
        })
    }

    function handleObjetivo4Change(e) {
        dispatch({
            type: FormActions.setObjetivo4,
            payload: e.target.value
        })
    }

    return (
        <FormProvider>
            <div className="vaga-container">
                <Menu />
                <form className="form">
                    <h1 className="tituloaba">Objetivos para vaga de {state.titulo}</h1>
                    <h4>Defina quais os aspectos necessários para a vaga.</h4>

                    <div className="slider" >
                        <h4 id="colaborativo">Colaborativo</h4>
                        <input name='objetivo1' className="slider1" id="campo" type="range" min="0" max="4" onChange={handleObjetivo1Change} value={state.objetivo1} />
                        <h4 id="independente">Independente</h4>

                        <h4 id="reservado">Reservado</h4>
                        <input name='objetivo2' className="slider1" id="campo" type="range" min="0" max="4" onChange={handleObjetivo2Change} value={state.objetivo2} />
                        <h4 id="sociavel">Sociável</h4>

                        <h4 id="intenso">Intenso</h4>
                        <input name='objetivo3' className="slider1" id="campo" type="range" min="0" max="4" onChange={handleObjetivo3Change} value={state.objetivo3} />
                        <h4 id="paciente">Paciente</h4>

                        <h4 id="impulsivo">Impulsivo</h4>
                        <input name='objetivo4' className="slider1" id="campo" type="range" min="0" max="4" onChange={handleObjetivo4Change} value={state.objetivo4} />
                        <h4 id="vigilante">Vigilante</h4>

                    </div>

                    <div className="actions">
                        <Link className="buttoncancelar" to={('/createvagas')}>Voltar</Link>
                        <button className="buttonsalvar" onClick={handleNextStep}>Proxima Etapa</button>
                    </div>
                </form >
            </div >
        </FormProvider>
    );
}