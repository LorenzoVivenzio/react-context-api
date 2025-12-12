import prodotti from "../components/ListaProdotti"
import { Link, useNavigate } from "react-router-dom"
import { useBudget } from "../context/BUdgetContext";

export default function Prodotti() {

    const navigate = useNavigate();
    const {isBudget} = useBudget();

    const filtedBudget = isBudget ? prodotti.filter((prodotto) => prodotto.price <= 30)
    : prodotti;
    

    return (
        <>
            <main>
                <div className="container">
                    <div className="row row-cols-4 gap-3">
                        {
                            filtedBudget.map((prodotto) =>
                                <div key={prodotto.id} onClick={() => { navigate(`/prodotti/${prodotto.id}`) }}
                                    className="product">
                                    <div className="image">
                                        <img
                                            src={prodotto.image} alt="" />
                                    </div>
                                    <h5 className="text-center text-white mt-3 text-dark">{prodotto.title} </h5>
                                    <p className="text-white p-3">Price : {prodotto.price}$</p>
                                    <Link to={`/prodotti/${prodotto.id}`}>
                                    Dettagli prodotto
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </main>

        </>
    )
}