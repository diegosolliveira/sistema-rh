import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
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

export default function Routess(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/home" element={<Overview/>}/>
                <Route exact path="/vagas" element={<Vagas/>}/>
                <Route exact path="/objetivos" element={<Objetivos/>}/>
                <Route exact path="/adicionarcandidatos" element={<AdicionarCandidatos/>}/>
                <Route exact path="/revisarcandidatos" element={<RevisarCandidatos/>}/>
                <Route exact path="/candidatos" element={<Candidatos/>}/>
                <Route exact path="/createaccount" element={<CriarConta/>}/>
                <Route exact path="/createvagas" element={<CriarVagas/>}/>
                <Route path="/createcandidatos" element={<CriarCandidatos/>}/>
                <Route path="/candidatos/:id" element={<Candidatos/>}/>
                <Route exact path="/revisarcandidatos/:id" element={<RevisarCandidatos/>}/>
                
            </Routes>
        </BrowserRouter>
    );
}