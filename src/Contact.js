const email = require("./images/email.png")
const linkedin = require("./images/linkedin.png")
const github = require("./images/github.png")

export default function Contact() {
    
    function copyToClipboard() {
        navigator.clipboard.writeText("dylancahoon651@gmail.com")
        alert("Copied to clipboard.");
      }
    
    return (
        <div className="row">
            <a className="col-4 p-5" href="mailto:dylancahoon651@yahoo.com" >
                <img className="img-fluid" src={email}></img>
            </a>
            <a className="col-4 p-5" href="https://www.linkedin.com/in/dylancahoon/" target="_blank">
                <img className="img-fluid" src={linkedin}></img>
            </a>
            <a className="col-4 p-5" href="https://github.com/dcahoon" target="_blank">
                <img className="img-fluid" src={github}></img>
            </a>
        </div>
    )
}



