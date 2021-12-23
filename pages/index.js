import { useState } from "react";

function Home() {
    return (
        <>
        <h1>Home</h1>
        <Contador />
        </>
    )
}

function Contador() {
    const [contador, setContador] = useState(0);
    function addContador() {
        setContador(contador + 1);
    }
    return (
        <>
            <h1>{contador}</h1>
            <button onClick={addContador}>Contador++</button>
        </>
    )
}

export default Home;