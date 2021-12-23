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
            {/** Atualiza toda vez que ocorre um reload (front-end) */}
            <p>Isto é um tempo dinâmico: <strong>{dynamicDateString}</strong></p>
            {/** Atualiza a cada build da aplicação ou quando é definido o revalidate */}
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
        },
        revalidate: 10
    }
}

export default Tempo;