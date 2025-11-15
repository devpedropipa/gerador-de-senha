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

export function GerarSenha() {
    return (
        <button id="gerar-senha" onClick={gerarSenha}>
            Gerar Senha
        </button>
    );
}
