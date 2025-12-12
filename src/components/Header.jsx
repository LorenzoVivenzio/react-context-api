import { NavLink } from "react-router-dom"
import { useBudget } from "../context/BUdgetContext"
export default function Header() {

    const { changeBudget, isBudget } = useBudget();


    return (
        <>
            <header>
                <div className="nav-header d-flex align-item-center p-3">
                    <div className="logo">
                        <NavLink to="/">
                            <h3 className="text-white">Logo</h3>
                        </NavLink>

                    </div>
                    <div className="nav">
                        <ul className="d-flex">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/About">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Prodotti">Prodotti</NavLink>
                            </li>
                        </ul>
                        <button onClick={changeBudget}
                            className="btn btn-primary">
                            {isBudget ? "prezzo normale" : "sotto i 30$"}
                        </button>
                    </div>

                </div>

            </header>


        </>
    )
}