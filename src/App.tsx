import { useState } from "react";

import copyImg from "./assets/copiar.png"

function App() {
    const [quantCar, setQuantCar] = useState(8);

    return (
        <main id="conteudo">
            <h1>Gerador de Senhas</h1>

            {/* Gerador de senhas */}
            <div id="card">
                <div>
                    <input type="text" name="input-senha" id="senha-gerada" />
                    <img src={copyImg} alt="ícone-copiar" id="img-copiar" />
                </div>

                {/* Quantidade de caracteres */}
                <div id="container-range">
                    <input
                        type="range"
                        name="input-caract"
                        id="quant-caracteres"
                        min={4}
                        max={20}
                        value={quantCar}
                        onChange={(e) => setQuantCar(Number(e.target.value))}
                    />
                    <input
                        type="number"
                        name="input-number"
                        id="val-quant-caracteres"
                        value={String(quantCar)}
                    />
                </div>

                {/* Configuração do gerador */}
                <div id="container-config">
                    <div>
                        <input
                            type="checkbox"
                            name="input-check"
                            className="check-config"
                        />
                        <span>Letras maiúsculas</span>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="input-check"
                            className="check-config"
                        />
                        <span>Letras minúsculas</span>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="input-check"
                            className="check-config"
                        />
                        <span>Números</span>
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            name="input-check"
                            className="check-config"
                        />
                        <span>Símbolos</span>
                    </div>
                </div>
                <button id="gerar-senha">Gerar Senha</button>
            </div>
        </main>
    );
}

export default App;
