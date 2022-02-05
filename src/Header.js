import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="nav">
            <h1 
                className="
                    logo
                    col-sm-12
                    col-lg-6
                "
            >
                {`{ ... } dylancahoonweb`}
            </h1>
            <Link 
                to={"/"} 
                className="
                    navlink
                    col-xs-4
                    col-sm-4
                    col-lg-2
                    align-self-center
                "
            >
                HOME
            </Link>
            <Link 
                to={"/about"} 
                className="
                    navlink
                    col-xs-4
                    col-sm-4
                    col-lg-2
                    align-self-center
                "
            >
                ABOUT
            </Link>
            <Link 
                to={"/contact"} 
                className="
                    navlink
                    col-xs-4
                    col-sm-4
                    col-lg-2
                    align-self-center
                "
            >
                CONTACT
            </Link>
        </div>
    )
}