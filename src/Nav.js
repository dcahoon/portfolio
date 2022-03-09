export default function Nav({ black }) {
    return (
        <nav className="navbar navbar-expand-lg justify-content-end">           
            <ul className="navbar-nav">
                <li className="nav-item">
                    { 
                        black ?
                            <a className="nav-link" id="black" href="#home">home</a> :
                            <a className="nav-link" href="#home">home</a> 
                    }
                </li>
                <li className="nav-item">
                    { 
                        black ?
                            <a className="nav-link" id="black" href="#about">about</a> :
                            <a className="nav-link" href="#about">about</a> 
                    }
                </li>
                <li className="nav-item">
                    { 
                        black ?
                            <a className="nav-link" id="black" href="#resume">resume</a> :
                            <a className="nav-link" href="#resume">resume</a> 
                    }
                </li>
                <li className="nav-item">
                    { 
                        black ?
                            <a className="nav-link" id="black" href="#skills">skills</a> :
                            <a className="nav-link" href="#skills">skills</a> 
                    }
                </li>
                <li className="nav-item">
                    { 
                        black ?
                            <a className="nav-link" id="black" href="#contact">contact</a> :
                            <a className="nav-link" href="#contact">contact</a> 
                    }
                </li>
            </ul>
        </nav>
    )
}