import Link from "next/link";

export async function getServerSideProps(context) {
    const id = context.query.id;
    return {
        props: {
            id
        }
    }
}

function GetId(props) {
    return (
        <>
            <h1>Id do produto: {props.id}</h1>
            <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            </div>
        </>
    )
}

export default GetId;