{
    /* Dependências */
}
import { useState } from "react";

{
    /* Arquivos de estilo */
}
import "./styles/gerador.css";

{
    /* Imagens */
}
import copyImg from "./assets/copiar.png";

{
    /* Componente */
}
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

    function gerarSenha() {
        if (
            !configGeradorSenha[0] &&
            !configGeradorSenha[1] &&
            !configGeradorSenha[2] &&
            !configGeradorSenha[3]
        ) {
            alert("Selecione no mínimo uma opção.");
        } else {
            const listaCaracteres = [
                "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "abcdefghijklmnopqrstuvwxyz",
                "0123456789",
                "!@#$%^&*()-_=+[]{};:,.?/|~",
            ];
            const tamanhoSenha = quantCar;
            let senha = "";
            let c = 0;
            while (c < tamanhoSenha) {
                const i = Math.floor(Math.random() * 4);
                const codigo = Math.floor(
                    Math.random() * listaCaracteres[i].length
                );

                if (configGeradorSenha[i]) {
                    senha += listaCaracteres[i][codigo];
                    c++;
                }
            }
            setSenhaGerada(senha);
        }
    }

    function copiarSenha() {
        if (senhaGerada) {
            navigator.clipboard.writeText(senhaGerada);
            alert("Senha copiada.")
        } else {
            alert("A senha não foi gerada.");
        }
    }

    return (
        <main id="conteudo-site">
            <h1>Gerador de Senhas</h1>

            {/* Gerador de senhas */}
            <div id="card">
                <main id="conteudo-card">
                    <div id="container-senha">
                        <input
                            type="text"
                            name="input-senha"
                            id="senha-gerada"
                            value={senhaGerada}
                            readOnly
                        />
                        <img
                            src={copyImg}
                            alt="ícone-copiar"
                            id="img-copiar"
                            onClick={copiarSenha}
                        />
                    </div>
                    {/* Quantidade de caracteres */}
                    <div id="container-range">
                        <input
                            type="range"
                            name="input-caract"
                            id="input-range"
                            min={4}
                            max={20}
                            value={quantCar}
                            onChange={(e) =>
                                setQuantCar(Number(e.target.value))
                            }
                        />
                        <input
                            type="number"
                            name="input-number"
                            id="quant-caracteres"
                            value={quantCar}
                            readOnly
                        />
                    </div>
                    {/* Configuração do gerador */}
                    <div id="container-config">
                        <div>
                            <input
                                type="checkbox"
                                name="input-check"
                                className="check-config"
                                checked={checkLetraMaiuscula}
                                onChange={() => {
                                    if (checkLetraMaiuscula) {
                                        setCheckLetraMaiuscula(false);
                                    } else {
                                        setCheckLetraMaiuscula(true);
                                    }
                                }}
                            />
                            <span className="check-nome">
                                Letras maiúsculas
                            </span>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="input-check"
                                className="check-config"
                                checked={checkLetraMinuscula}
                                onChange={() => {
                                    if (checkLetraMinuscula) {
                                        setCheckLetraMinuscula(false);
                                    } else {
                                        setCheckLetraMinuscula(true);
                                    }
                                }}
                            />
                            <span className="check-nome">
                                Letras minúsculas
                            </span>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="input-check"
                                className="check-config"
                                onChange={() => {
                                    if (checkNumero) {
                                        setCheckNumero(false);
                                    } else {
                                        setCheckNumero(true);
                                    }
                                }}
                            />
                            <span className="check-nome">Números</span>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="input-check"
                                className="check-config"
                                onChange={() => {
                                    if (checkSimbolo) {
                                        setCheckSimbolo(false);
                                    } else {
                                        setCheckSimbolo(true);
                                    }
                                }}
                            />
                            <span className="check-nome">Símbolos</span>
                        </div>
                    </div>
                    <button id="gerar-senha" onClick={gerarSenha}>
                        Gerar Senha
                    </button>
                </main>
            </div>
        </main>
    );
}

export default App;
