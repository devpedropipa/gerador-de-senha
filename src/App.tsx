/* Arquivos de estilo */

import "./styles/gerador.css";

/* Componentes */
import { InputGerador } from "./components/input-gerador";
import { InputRange } from "./components/input-range";
import { GerarSenha } from "./components/gerar-senha";
import { ConfigGerador } from "./components/config-gerador";

import { useState } from "react";

function App() {
    const [quantCar, setQuantCar] = useState(8);
    const [checkLetraMaiuscula, setCheckLetraMaiuscula] = useState(true);
    const [checkLetraMinuscula, setCheckLetraMinuscula] = useState(true);
    const [checkNumero, setCheckNumero] = useState(false);
    const [checkSimbolo, setCheckSimbolo] = useState(false);
    const [senhaGerada, setSenhaGerada] = useState("");
    const configGeradorSenha = [
        checkLetraMaiuscula,
        checkLetraMinuscula,
        checkNumero,
        checkSimbolo,
    ];

    return (
        <main id="conteudo-site">
            <h1>Gerador de Senhas</h1>

            {/* Gerador de senhas */}
            <div id="card">
                <main id="conteudo-card">
                    <InputGerador />
                    <InputRange />
                    <ConfigGerador />
                    <GerarSenha />
                </main>
            </div>
        </main>
    );
}

export default App;
