import Link from "next/link";
import { useState } from "react";

function Counter() {
    return (
        <>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <h1>Contador</h1>
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

export default Counter;