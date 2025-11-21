/* Interface do componente */
interface PropsCheckboxGerador {
    checkNome: string;
    checkValue: boolean;
    checkSet: React.Dispatch<React.SetStateAction<boolean>>;
}

/* Opção de configuração do gerador */
export function CheckboxGerador(props: PropsCheckboxGerador) {
    return (
        <div className="container-check-config">
            <input
                type="checkbox"
                name="input-check"
                className="check-config"
                checked={props.checkValue}
                onChange={() => {
                    if (props.checkValue) {
                        props.checkSet(false);
                    } else {
                        props.checkSet(true);
                    }
                }}
            />
            <span className="check-nome">{props.checkNome}</span>
        </div>
    );
}
