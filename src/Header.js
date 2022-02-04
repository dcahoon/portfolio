import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="nav">
            <h1 className="">{`{ ... } dylancahoonweb`}</h1>
            <Link to={"/"} className="navlink">Home</Link>
            <Link to={"/about"} className="navlink">About</Link>
            <Link to={"/contact"} className="navlink">Contact</Link>
        </div>
    )
}