export function InputRange() {
    return (
        <div id="container-range">
            <input
                type="range"
                name="input-caract"
                id="input-range"
                min={4}
                max={20}
                value={quantCar}
                onChange={(e) => setQuantCar(Number(e.target.value))}
            />
            <input
                type="number"
                name="input-number"
                id="quant-caracteres"
                value={quantCar}
                readOnly
            />
        </div>
    );
}
