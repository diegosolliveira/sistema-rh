import React, { useContext } from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import { Context } from './context/authContext';
import CriarConta from './pages/CriarConta';
import CriarVagas from './pages/CriarVagas';
import Vagas from './pages/Vagas';
import RevisarCandidatos from './pages/RevisarCandidatos';
import Login from './pages/Login';
import CriarCandidatos from './pages/CriarCandidatos';
import Overview from './pages/Overview';
import AdicionarCandidatos from './pages/AdicionarCandidatos';
import Objetivos from './pages/ObjetivosVaga';
import Candidatos from './pages/Candidatos';
import useAuth from './context/hooks/useAuth';

const Private = ({Item}) =>{
  const {authenticated} = useAuth();

  return authenticated > false ? <Item/> : <Login/>;
}

export default function Routess(){

    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/createaccount" element={<CriarConta/>}/>
                <Route exact path="/home" element={<Private Item={Overview}/>}/>
                <Route exact path="/vagas" element={<Private Item={Vagas}/>}/>
                <Route exact path="/objetivos" element={<Private Item={Objetivos}/>}/>
                <Route exact path="/adicionarcandidatos" element={<Private Item={AdicionarCandidatos}/>}/>
                <Route exact path="/revisarcandidatos" element={<Private Item={RevisarCandidatos}/>}/>
                <Route exact path="/candidatos" element={<Private Item={Candidatos}/>}/>
                <Route exact path="/createvagas" element={<Private Item={CriarVagas}/>}/>
                <Route path="/createcandidatos" element={<Private Item={CriarCandidatos}/>}/>
                <Route path="/candidatos/:id" element={<Private Item={Candidatos}/>}/>
                <Route exact path="/revisarcandidatos/:id" element={<Private Item={RevisarCandidatos}/>}/>
                <Route exact path="/objetivos/:id" element={<Private Item={Objetivos}/>}/>
                <Route exact path="/vagas/:id" element={<Private Item={Vagas}/>}/>
                <Route exact path="/update/:id" element={<Private Item={RevisarCandidatos}/>}/>
            </Routes>
        </BrowserRouter>
    );
}