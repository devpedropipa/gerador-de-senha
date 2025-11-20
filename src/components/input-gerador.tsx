/* Imagem */
import copyIcon from "../assets/copiar.svg";

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
            <img src={copyIcon} alt="ícone-copiar" onClick={copiarSenha} />
        </div>
    );
}
