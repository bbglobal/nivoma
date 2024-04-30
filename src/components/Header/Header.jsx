import "./header.css"
import Logo from "./logo.jpg"
import { NavLink } from "react-bootstrap";
import { useState } from "react";


const Header = () => {

    const [isHeader, setIsHeader] = useState(false);

    return (
        <>
            <header
                id="main-menu"
                className="d-flex align-items-center justify-content-between">
                <nav>
                    <ul className="d-flex align-items-center">

                        <div>
                            <NavLink to={`/`} >
                                <img src={Logo} id="logo" alt="logo" width={150} />
                            </NavLink>
                        </div>
                        <li className="active">
                            <NavLink to={`/`}>Über uns</NavLink>
                        </li>
                        <li>
                            <NavLink href={'#'}>Referenzen</NavLink>
                        </li>
                        <li>
                            <NavLink href={`#`}>Verpachtung</NavLink>
                        </li>
                        <li>
                            <NavLink href={`#`}>PV-Investment</NavLink>
                        </li>
                        <li>
                            <NavLink to={`#`}>Karriere</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/#`}>Wissen</NavLink>
                        </li>
                    </ul>
                </nav>
                <button className="d-block" >
                    Cart
                </button>
            </header>

            <header id="mob-menu">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <NavLink to={`/`}>
                            <img src={Logo} id="logo" alt="logo" width={150} />
                        </NavLink>
                    </div>
                    <button className="hamburger" onClick={() => setIsHeader(!isHeader)}>|||</button>
                </div>
            </header>
            <nav id="mob-main" className={`${isHeader ? 'left-0' : 'left-full'}`}>
                <ul className="d-flex flex-column align-items-left">
                    <li>
                        <NavLink to={`/albums`}>Albums</NavLink>
                    </li>
                    <li>
                        <NavLink to={`about`}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/projects`}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/shop-all`}>Shop All</NavLink>
                    </li>
                </ul>
                <button className="d-block" onClick={() => {
                    setIsHeader(!isHeader);
                }}>
                    Cart
                </button>
            </nav>
        </>
    )
}

export default Header