import { Link } from "react-router-dom";
import Menu from "../../components/Menu/index.js"
import './style.css';

export default function Overview() {
    return (
        <div className="vaga-container">
            <Menu />
            <form className="form">
                <h1 className="tituloaba">Dashboard</h1>
                <h4>Atividades Recentes.</h4>

                <div className="atividaderecente">
                    <h2 id="atividaderecentetitulo">Atividade Recente: Vagas</h2>
                    <Link className="buttonSeeAll" to={'/vagas'}>VER TODAS</Link>
                </div>

                <div className="avaliacoespendentes">
                    <h2 id="avaliacoespendentestitulo">Avaliações Pendentes</h2>
                    <Link className="buttonSeeAll" to={'/revisarcandidatos'}>VER TODAS</Link>
                </div>

                <div className="finalizadosrecentemente">
                    <h2 id="finalizadosrecentementetitulo">Finalizados Recentemente</h2>
                    <Link className="buttonSeeAllFinalizados" to={'/revisarcandidatos'}>VER TODAS</Link>
                </div>
                
            </form>
        </div>
    );
}