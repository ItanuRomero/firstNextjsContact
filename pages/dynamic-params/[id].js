import { useRouter } from "next/router";
import Link from "next/link";

function GetId() {
    const router = useRouter();
    const id =  router.query.id;
    return (
        <>
            <h1>Id do produto: {id}</h1>
            <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            </div>
        </>
    )
}

export default GetId;