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

    return (
        <main id="conteudo-site">
            <h1>Gerador de Senhas</h1>

            {/* Gerador de senhas */}
            <div id="card">
                <main id="conteudo-card">
                    <div id="container-senha">
                        <input type="text" name="input-senha" id="senha-gerada" readOnly />
                        <img src={copyImg} alt="ícone-copiar" id="img-copiar" />
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
                            onChange={(e) => setQuantCar(Number(e.target.value))}
                        />
                        <input
                            type="number"
                            name="input-number"
                            id="quant-caracteres"
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
                            <span className="check-nome">Letras maiúsculas</span>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="input-check"
                                className="check-config"
                            />
                            <span className="check-nome">Letras minúsculas</span>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="input-check"
                                className="check-config"
                            />
                            <span className="check-nome">Números</span>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="input-check"
                                className="check-config"
                            />
                            <span className="check-nome">Símbolos</span>
                        </div>
                    </div>
                    <button id="gerar-senha">Gerar Senha</button>
                </main>
            </div>
        </main>
    );
}

export default App;
