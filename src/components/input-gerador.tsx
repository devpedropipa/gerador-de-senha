/* Interface do componente */
interface PropsGerador {
    senha: string;
}

/* Input onde a senha é mostrada */
export function InputGerador(props: PropsGerador) {
    /* Copia a senha */
    function copiarSenha() {
        if (props.senha) {
            navigator.clipboard.writeText(props.senha);
            window.alert("Senha copiada.");
        } else {
            window.alert("A senha não foi gerada.");
        }
    }

    return (
        <div id="container-senha">
            <input
                type="text"
                name="input-senha"
                id="senha-gerada"
                value={props.senha}
                placeholder="Sua senha aparecerá aqui"
                readOnly
            />
            <label id="icone-copiar" onClick={copiarSenha}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            </label>
        </div>
    );
}
