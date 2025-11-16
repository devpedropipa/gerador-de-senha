import copyImg from "../assets/copiar.png";

interface PropsGerador {
    senha: string;
}

export function InputGerador(props: PropsGerador) {
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
                readOnly
            />
            <img
                src={copyImg}
                alt="ícone-copiar"
                id="img-copiar"
                onClick={copiarSenha}
            />
        </div>
    );
}
