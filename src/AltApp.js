import './App.css';
import Nav from "./Nav"
import javascript_icon from "./images/javascript_icon.png"
import react_icon from "./images/react_icon.png"
import html_icon from "./images/html_icon.png"
import css_logo from "./images/css_logo.png"
import postgres_icon from "./images/postgres_icon.png"
import knex_icon from "./images/knex_icon.png"
import node_icon from "./images/node_icon.png"
import git_icon from "./images/git_icon.png"
import github_icon from "./images/github_icon.jpg"
import postman_icon from "./images/postman_icon.png"
import react_router_icon from "./images/react_router_icon.jpg"
import heroku_icon from "./images/heroku_icon.png"
import bootstrap_icon from "./images/bootstrap_icon.png"
import resume from "./images/resume.png"
import email from "./images/email.png"
import linkedin from "./images/linkedin.png"
import github from "./images/github.png"


export default function AltApp() {
    
    return (
        <>

            <section className="hero-section" id="home">
                <Nav />
                <div className="montserrat left-margin white name-header size-8 slide-in-1">
                    Dylan Cahoon
                </div>
                <div className="size-3 left-margin white slide-in-2">
                    Full Stack Web Developer
                </div>
            
            </section>
            
            <section id="about">
                <Nav black={true} />
                <div className="row p-5">
                    <p className="col-12 lobster size-5">
                        Welcome
                    </p>
                    <div className="col-6">
                        <p className="size-1-5 p-4">
                            Hi, my name is Dylan. I am currently located in Lansing, MI and persuing a career as a front-end, back-end, or full stack web developer. 
                        </p>
                        <p className="size-1-5 p-4">
                            I have an associates degree as a computer programmer/analyst. I have recently completed the Thinkful software engineering bootcamp to strengthen my skills and prepare myself for a career in web development.
                        </p>
                    </div>
                    <div className="col-6">
                        <p className="size-1-5 p-4">
                            In my free time I enjoy woodworking, gardening, crafts, and video games. I love learning new skills and working with my hands.
                        </p>
                    </div>
                </div>
            </section>

            <section id="resume">
                <Nav />
                <div className="row d-flex justify-content-center">
                    <div className="card mt-5 text-center text-white col-4">
                        <img className="card-img resume" src={resume} alt="Card image" />
                        <a className="card-img-overlay" href="./images/resume.pdf" download="DylanCahoonResume.pdf">
                            <p className="card-text">Click here to download PDF</p>
                        </a>
                    </div>
                </div>
            </section>

            <section id="skills">
                <Nav black={true} />
                <div className="row p-5">
                    <p className="display-2 p-4 col-12">Skills</p>
                </div>
                <div className="col-12 p-5">
                    <img src={javascript_icon} className="icon-img"></img>
                    <img src={react_icon} className="icon-img"></img>
                    <img src={html_icon} className="icon-img"></img>
                    <img src={css_logo} className="icon-img"></img>
                    <img src={postgres_icon} className="icon-img"></img>
                    <img src={knex_icon} className="icon-img"></img>
                    <img src={node_icon} className="icon-img"></img>
                    <img src={git_icon} className="icon-img"></img>
                    <img src={github_icon} className="icon-img"></img>
                    <img src={react_router_icon} className="icon-img"></img>
                    <img src={postman_icon} className="icon-img"></img>
                    <img src={heroku_icon} className="icon-img"></img>
                    <img src={bootstrap_icon} className="icon-img"></img>
                </div>
            </section>

            <section id="contact">
                <Nav />
                <div className="row p-5 link-container d-flex justify-content-around">
                    <a className="col-3 h-100" id="large-link" href="https://www.github.com/dcahoon" target="_blank">
                        GitHub
                    </a>
                    <a className="col-3 h-100" id="large-link" href="mailto:dylancahoon651@yahoo.com">
                        Email
                    </a>
                    <a className="col-3 h-100" id="large-link" href="http://www.linkedin.com/in/dylancahoon" target="_blank">
                        LinkedIn
                    </a>
                </div>
            </section>

        </>
    )

}