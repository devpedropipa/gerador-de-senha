/* Arquivos */
import "./styles/card.css";
import "./styles/input-gerador.css";
import "./styles/input-range.css";
import "./styles/config-gerador.css";
import "./styles/botao-gerador.css";
import "./styles/card-validacao.css";

import padlockIcon from "./assets/icone-cadeado.png";

/* Componentes */
import { InputGerador } from "./components/input-gerador";
import { InputRange } from "./components/input-range";
import { BotaoGerador } from "./components/botao-gerador";
import { ConfigGerador } from "./components/config-gerador";
import { CardValidacao } from "./components/card-validacao";

/* Dependências */
import { useState } from "react";

function App() {
    /* Variáveis de configuração do gerador */
    const [quantCar, setQuantCar] = useState(8);
    const [checkLetraMaiuscula, setCheckLetraMaiuscula] = useState(false);
    const [checkLetraMinuscula, setCheckLetraMinuscula] = useState(false);
    const [checkNumero, setCheckNumero] = useState(false);
    const [checkSimbolo, setCheckSimbolo] = useState(false);
    const [senhaGerada, setSenhaGerada] = useState("");
    const configGeradorSenha = [
        checkLetraMaiuscula,
        checkLetraMinuscula,
        checkNumero,
        checkSimbolo,
    ];

    /* Variáveis de validação */
    const [fraseValidacao, setFraseValidacao] = useState("");
    const [opacityCardValidacao, setOpacityCardValidacao] = useState(true);
    const [validarSenha, setValidarSenha] = useState(false);

    return (
        <main id="conteudo">
            <img src={padlockIcon} alt="icone-cadeado" id="icone-cadeado" />
            <h1>Gerador de Senha</h1>

            {/* Gerador de senhas */}
            <div id="card">
                <InputGerador
                    senha={senhaGerada}
                    validacao={setValidarSenha}
                    esconderCardValidacao={setOpacityCardValidacao}
                    frase={setFraseValidacao}
                />
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
                <BotaoGerador
                    setNovaSenha={setSenhaGerada}
                    checkBox={configGeradorSenha}
                    tamanhoSenha={quantCar}
                    esconderCardValidacao={setOpacityCardValidacao}
                    frase={setFraseValidacao}
                    validacao={setValidarSenha}
                />
            </div>
            <CardValidacao
                mostrarValidacao={opacityCardValidacao}
                frase={fraseValidacao}
                validacao={validarSenha}
            />
        </main>
    );
}

export default App;
