/* Interface do componente */
interface PropsBotaoGerador {
    setNovaSenha: React.Dispatch<React.SetStateAction<string>>;
    checkBox: boolean[];
    tamanhoSenha: number;
    carregarCard: React.Dispatch<React.SetStateAction<boolean>>;
    carregarFrase: React.Dispatch<React.SetStateAction<string>>;
    validacao: React.Dispatch<React.SetStateAction<boolean>>;
}

/* Gera uma senha */
function gerarSenha(props: PropsBotaoGerador) {
    if (
        !props.checkBox[0] &&
        !props.checkBox[1] &&
        !props.checkBox[2] &&
        !props.checkBox[3]
    ) {
        props.carregarFrase("Selecione no mínimo uma opção.");
        props.carregarCard(true);
        props.validacao(false);
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
            const indexLista = Math.floor(Math.random() * 4);
            const codigo = Math.floor(
                Math.random() * listaCaracteres[indexLista].length
            );

            if (props.checkBox[indexLista]) {
                senha += listaCaracteres[indexLista].charAt(codigo);
                c++;
            }
        }
        props.setNovaSenha(senha);
        props.carregarCard(false);
        props.validacao(true);
    }
}

/* Botão */
export function BotaoGerador(props: PropsBotaoGerador) {
    return (
        <button id="gerar-senha" onClick={() => gerarSenha(props)}>
            Gerar Senha
        </button>
    );
}
