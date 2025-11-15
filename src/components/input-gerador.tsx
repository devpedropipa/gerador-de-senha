import copyImg from "../assets/copiar.png";

export function InputGerador() {
    function copiarSenha() {
        if (senhaGerada) {
            navigator.clipboard.writeText(senhaGerada);
            alert("Senha copiada.");
        } else {
            alert("A senha não foi gerada.");
        }
    }

    return (
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
    );
}
