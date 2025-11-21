/* Arquivos */
import "./styles/card.css";
import "./styles/input-gerador.css";
import "./styles/input-range.css";
import "./styles/config-gerador.css";
import "./styles/botao-gerador.css";
import "./styles/card-validacao.css";
import "./styles/media-queries.css"

import padlockIcon from "./assets/icone-cadeado.png";

/* Componentes */
import { InputGerador } from "./components/input-gerador";
import { InputRange } from "./components/input-range";
import { BotaoGerador } from "./components/botao-gerador";
import { CheckboxGerador } from "./components/config-gerador";
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
    const CheckboxGeradorSenha = [
        checkLetraMaiuscula,
        checkLetraMinuscula,
        checkNumero,
        checkSimbolo,
    ];

    /* Variáveis de validação */
    const [fraseValidacao, setFraseValidacao] = useState("");
    const [cardValidacao, setCardValidacao] = useState(false);
    const [validarSenha, setValidarSenha] = useState(false);

    return (
        <main id="conteudo">
            <img src={padlockIcon} alt="ícone-cadeado" id="icone-cadeado" />
            <h1>Gerador de Senha</h1>

            {/* Gerador de senhas */}
            <div id="card">
                <InputGerador
                    senha={senhaGerada}
                    validacao={setValidarSenha}
                    carregarCard={setCardValidacao}
                    carregarFrase={setFraseValidacao}
                />
                <InputRange tamanho={quantCar} setTamanho={setQuantCar} />
                <div id="container-checkbox">
                    <CheckboxGerador
                        checkNome="Letra Maiúscula"
                        checkValue={checkLetraMaiuscula}
                        checkSet={setCheckLetraMaiuscula}
                    />
                    <CheckboxGerador
                        checkNome="Letra Minúscula"
                        checkValue={checkLetraMinuscula}
                        checkSet={setCheckLetraMinuscula}
                    />
                    <CheckboxGerador
                        checkNome="Número"
                        checkValue={checkNumero}
                        checkSet={setCheckNumero}
                    />
                    <CheckboxGerador
                        checkNome="Símbolo"
                        checkValue={checkSimbolo}
                        checkSet={setCheckSimbolo}
                    />
                </div>
                <BotaoGerador
                    setNovaSenha={setSenhaGerada}
                    checkBox={CheckboxGeradorSenha}
                    tamanhoSenha={quantCar}
                    carregarCard={setCardValidacao}
                    carregarFrase={setFraseValidacao}
                    validacao={setValidarSenha}
                />
            </div>
            {cardValidacao && (
                <CardValidacao
                    carregarFrase={fraseValidacao}
                    validacao={validarSenha}
                />
            )}
        </main>
    );
}

export default App;
