interface PropsBotaoGerarSenha {
    setNovaSenha: React.Dispatch<React.SetStateAction<string>>;
    checkBox: boolean[];
    tamanhoSenha: number;
}

function gerarSenha(props: PropsBotaoGerarSenha) {
    if (
        !props.checkBox[0] &&
        !props.checkBox[1] &&
        !props.checkBox[2] &&
        !props.checkBox[3]
    ) {
        window.alert("Selecione no mínimo uma opção.");
    } else {
        const listaCaracteres = [
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "abcdefghijklmnopqrstuvwxyz",
            "0123456789",
            "!@#$%^&*()-_=+[]{};:,.?/|~",
        ];
        let senha = "";
        let c = 0;
        while (c < props.tamanhoSenha) {
            const i = Math.floor(Math.random() * 4);
            const codigo = Math.floor(
                Math.random() * listaCaracteres[i].length
            );

            if (props.checkBox[i]) {
                senha += listaCaracteres[i].charAt(codigo);
                c++;
            }
        }
        props.setNovaSenha(senha);
    }
}

export function BotaoGerarSenha(props: PropsBotaoGerarSenha) {
    return (
        <button id="gerar-senha" onClick={() => gerarSenha(props)}>
            Gerar Senha
        </button>
    );
}
