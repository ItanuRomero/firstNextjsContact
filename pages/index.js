import Link from "next/link";

function Home() {
    return (
        <>
            <h1>Home</h1>
            <div><Link href="/counter">
                <a>Contador</a>
            </Link>
            </div>
            <div>
            <Link href="/time">
                <a>Tempo</a>
            </Link>
            </div>
            <div>
            <Link href="/api/time">
                <a>Tempo porém em API</a>
            </Link>
            </div>
            <div>
            <Link href="/api/github">
                <a>Meu usuário no github</a>
            </Link>
            </div>
        </>
    )
}

export default Home;