interface PropsInputRange {
    tamanho: number;
    setTamanho: React.Dispatch<React.SetStateAction<number>>;
}

export function InputRange(props: PropsInputRange) {
    return (
        <div id="container-range">
            <input
                type="range"
                name="input-caract"
                id="input-range"
                min={4}
                max={20}
                value={props.tamanho}
                onChange={(e) => props.setTamanho(Number(e.target.value))}
            />
            <input
                type="number"
                name="input-number"
                id="quant-caracteres"
                value={props.tamanho}
                readOnly
            />
        </div>
    );
}
