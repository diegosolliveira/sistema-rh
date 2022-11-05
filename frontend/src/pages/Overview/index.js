import Menu from "../Menu/index.js"
import './style.css';

export default function Overview() {
    return (
        <div className="vaga-container">
            <Menu />
            <form className="form">
                <h1 className="tituloaba">Dashboard</h1>
                <h4>Atividades Recentes.</h4>
                
            </form>
        </div>
    );
}