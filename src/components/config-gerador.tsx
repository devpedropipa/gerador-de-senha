interface PropsConfigGerador {
    checkNome: string;
    checkValue: boolean;
    checkSet: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ConfigGerador(props: PropsConfigGerador) {
    return (
        <div>
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
