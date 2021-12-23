import Link from "next/link";

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link href="/counter">
                <a>Contador</a>
            </Link>
        </>
    )
}

export default Home;