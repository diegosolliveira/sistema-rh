import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CriarConta from './pages/CriarConta';
import CriarVagas from './pages/CriarVagas';
import Vagas from './pages/Vagas';
import Candidatos from './pages/Candidatos';
import Login from './pages/Login';
import CriarCandidatos from './pages/CriarCandidatos';
import Overview from './pages/Overview';
import AdicionarCandidatos from './pages/AdicionarCandidatos';
import Objetivos from './pages/ObjetivosVaga';

export default function Routess(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/home" element={<Overview/>}/>
                <Route exact path="/vagas" element={<Vagas/>}/>
                <Route exact path="/objetivos" element={<Objetivos/>}/>
                <Route exact path="/adicionarcandidatos" element={<AdicionarCandidatos/>}/>
                <Route exact path="/candidatos" element={<Candidatos/>}/>
                <Route exact path="/createaccount" element={<CriarConta/>}/>
                <Route exact path="/createvagas" element={<CriarVagas/>}/>
                <Route path="/createcandidatos" element={<CriarCandidatos/>}/>
            </Routes>
        </BrowserRouter>
    );
}