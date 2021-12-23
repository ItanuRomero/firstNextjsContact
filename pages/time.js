import Link from "next/link";

function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <>
            <Link href="/">
                <a>Home</a>
            </Link>
            <h1>Tempo</h1>
            <p>Isto é um tempo dinâmico: <strong>{dynamicDateString}</strong></p>
            <p>Isto é um tempo estático: <strong>{props.staticDateString}</strong></p>
        </>
    )
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

export default Tempo;