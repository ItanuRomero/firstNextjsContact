import { useRouter } from "next/router";

function Produtos() {
    const router = useRouter();
    const id =  router.query.id;
    return <>Id do produto: {id}</>
}

export default Produtos;