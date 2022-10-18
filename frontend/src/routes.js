import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CriarConta from './pages/CriarConta';
import CriarVaga from './pages/CriarVagas';
import Login from './pages/Login';
import Profile from './pages/CriarCandidatos';

export default function Routess(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/createuser" element={<CriarConta/>}/>
                <Route exact path="/vagas" element={<CriarVaga/>}/>
                <Route path="/create" element={<Profile/>}/>
                <Route path="/update/:id" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}