import "./header.css"
import Logo from "../assets/img/logo.png"
import { NavLink } from "react-router-dom";
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
                        <li className="current">
                            <NavLink to={`/uberuns`}>Über uns</NavLink>
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
                        {/* <li>
                            <NavLink to={`/impressum`}>Impressum</NavLink>
                        </li> */}
                        <li>
                            <NavLink to={`/wissen`}>Wissen</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to={`/datenschutzerklärung`}>Datenschutzerklärung</NavLink>
                        </li> */}
                    </ul>
                </nav>
                <div className="d-flex align-items-center">
                    <button className="d-block btn-nivoma mx-4">
                        Kontakt
                    </button>
                    <select name="lang" className="form-select lang-selector">
                        <option value="DE" selected>DE</option>
                        <option value="EN">EN</option>
                    </select>
                </div>
            </header>

            <header id="mob-menu">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <NavLink to={`/`}>
                            <img src={Logo} id="logo" alt="logo" width={150} />
                        </NavLink>
                    </div>
                    <button className="mob-nav-hamburger" onClick={() => setIsHeader(!isHeader)}>|||</button>
                </div>
            </header>
            <nav id="mob-main" className={`${isHeader ? 'left-0' : 'left-full'}`}>
                <ul className="d-flex flex-column align-items-left">
                    <li>
                        <NavLink to={`/uberuns`}>Über uns</NavLink>
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
                        <NavLink to={`/impressum`}>impressum</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/#`}>Wissen</NavLink>
                    </li>
                    <li>
                        <button className="d-block btn-nivoma" onClick={() => {
                            setIsHeader(!isHeader);
                        }}>
                            Kontakt
                        </button>
                    </li>
                </ul>
            </nav >
        </>
    )
}

export default Header