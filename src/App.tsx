/* Arquivos de estilo */

import "./styles/gerador.css";
import "./styles/input-gerador.css"
import "./styles/input-range.css"
import "./styles/config-gerador.css"
import "./styles/botao-gerar-senha.css"

/* Componentes */
import { InputGerador } from "./components/input-gerador";
import { InputRange } from "./components/input-range";
import { BotaoGerarSenha } from "./components/botao-gerar-senha";
import { ConfigGerador } from "./components/config-gerador";

/* Dependências */
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
                    <InputGerador senha={senhaGerada} />
                    <InputRange tamanho={quantCar} setTamanho={setQuantCar} />
                    <div id="container-config">
                        <ConfigGerador
                            checkNome="Letra Maiúscula"
                            checkValue={checkLetraMaiuscula}
                            checkSet={setCheckLetraMaiuscula}
                        />
                        <ConfigGerador
                            checkNome="Letra Minúscula"
                            checkValue={checkLetraMinuscula}
                            checkSet={setCheckLetraMinuscula}
                        />
                        <ConfigGerador
                            checkNome="Número"
                            checkValue={checkNumero}
                            checkSet={setCheckNumero}
                        />
                        <ConfigGerador
                            checkNome="Símbolo"
                            checkValue={checkSimbolo}
                            checkSet={setCheckSimbolo}
                        />
                    </div>
                    <BotaoGerarSenha
                        setNovaSenha={setSenhaGerada}
                        checkBox={configGeradorSenha}
                        tamanhoSenha={quantCar}
                    />
                </main>
            </div>
        </main>
    );
}

export default App;
