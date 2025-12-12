import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

export default function SingoloProdotto(){
    const {id} = useParams();
    const [prodotto, setProdotto] = useState(null)

    useEffect(() => {

        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((resp) => {
            setProdotto(resp.data)
        })
    },[id]);

    return(
    <>
    <section>
        {prodotto !== null && 
        <h1>{prodotto.title}</h1>
        }
    </section>
    </>
    )
}