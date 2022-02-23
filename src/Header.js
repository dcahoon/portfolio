import { Link } from "react-router-dom"
const dylancahoon = require("./images/dylancahoon.png")

export default function Header() {
    return (
        <div className="nav row">
            {/* <h1 
                className="
                    logo
                    col-xs-12
                    col-sm-12
                    col-md-12
                    col-lg-6
                "
            >
            
            </h1> */}
            <img className="col-6 p-4" src={dylancahoon}></img>
            {/* <Link 
                to={"/"} 
                className="
                    navlink
                    col-xs-4
                    col-sm-4
                    col-md-4
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
                    col-md-4
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
                    col-md-4
                    col-lg-2
                    align-self-center
                "
            >
                CONTACT
            </Link> */}
        </div>
    )
}