import { Link } from "react-router-dom"
const dylancahoon = require("./images/dylancahoon.png")

export default function Header() {
    return (
        <header className="row">
            <img className="logo-img col-5" src={dylancahoon}></img>
            <Link to={"/"} className="nav-link col-2">
                <p>about</p>
            </Link>
            <Link to={"/"} className="nav-link col-2">
                <p>work</p>
            </Link>
            <Link to={"/"} className="nav-link col-2">
                <p>contact</p>
            </Link>
        </header>
    )
}