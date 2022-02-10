
export default function Contact() {
    
    function copyToClipboard() {
        navigator.clipboard.writeText("dylancahoon651@gmail.com")
        alert("Copied to clipboard.");
      }
    
    return (
        <div className="link-container">
            <div className="p-4 mt-5">
                <a className="p-3 btn btn-light w-100" href="mailto:dylancahoon651@gmail.com">dylancahoon651@gmail.com</a>
            </div>
            <div className="p-4">
                <a className="btn btn-light p-3 w-100" href="https://www.linkedin.com/in/dylancahoon/" target="_blank">LinkedIn</a>
            </div>
            <div className="p-4">
                <a className="btn btn-light p-3 w-100" href="https://github.com/dcahoon" target="_blank">GitHub</a>
            </div>
        </div>
    )
}



