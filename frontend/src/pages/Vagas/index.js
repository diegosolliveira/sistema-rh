import Menu from "../Menu/index.js"
import './style.css';

export default function Vagas() {

    return (
        <div className="vaga-container">
            <Menu/>
            <form className="form">
                <h1 className="tituloaba">Vagas</h1>
                <h4>Vagas criadas.</h4>
            </form>
        </div>
    );
}