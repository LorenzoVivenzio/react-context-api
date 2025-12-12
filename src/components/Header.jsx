import { NavLink } from "react-router-dom"
export default function Header() {
    return (
        <>
            <header>
                <div className="nav-header d-flex align-item-center p-3">
                    <div className="logo">
                        <NavLink to ="/">
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
                    </div>
                </div>

            </header>
        </>
    )
}