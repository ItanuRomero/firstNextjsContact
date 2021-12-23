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
        </>
    )
}

export default Home;