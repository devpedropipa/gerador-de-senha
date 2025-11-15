export function ConfigGerador() {
    return (
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
                <span className="check-nome">Letras maiúsculas</span>
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
                <span className="check-nome">Letras minúsculas</span>
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
    );
}
