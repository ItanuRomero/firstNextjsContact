import Link from "next/link";

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: '1'
                }
            },
            {
                params: {
                    id: '2'
                }
            }
        ],
        fallback: 'blocking'
        // fallback = false: will only recognize the params on the paths array, others will return 404
        // fallback = true: accept all params and will try to create the page asynchronously
        // fallback = blocking: will block the page request 'till create the page and return the response
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;

    return {
        props:{
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