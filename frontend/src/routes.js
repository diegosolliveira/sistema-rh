import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CriarConta from './pages/CriarConta';
import CriarVagas from './pages/CriarVagas';
import Vagas from './pages/RevisarCandidatos';
import Candidatos from './pages/Candidatos';
import Login from './pages/Login';
import CriarCandidatos from './pages/CriarCandidatos';

export default function Routess(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/vaga" element={<Vagas/>}/>
                <Route exact path="/candidatos" element={<Candidatos/>}/>
                <Route exact path="/createaccount" element={<CriarConta/>}/>
                <Route exact path="/createvagas" element={<CriarVagas/>}/>
                <Route path="/createcandidatos" element={<CriarCandidatos/>}/>
            </Routes>
        </BrowserRouter>
    );
}