import welovemovies_img from "./images/welovemovies.png"
import resume from "./images/resume.png"
import html_icon from "./images/html_icon.png"
import css_icon from "./images/css_logo.png"
import javascript_icon from "./images/javascript_icon.png"
import react_icon from "./images/react_icon.png"
import node_icon from "./images/node_icon.png"
import knex_icon from "./images/knex_icon.png"
import git_icon from "./images/git_icon.png"

export default function About() {
    
    
    
    
    return (

        <div className="">

            <div className="row d-flex justify-content-center">

                <div className="row justify-content-center my-4">

                    <div className="col-lg-2 col-sm-4">
                        <a href="#">
                            <img className="img-thumbnail" src={resume}></img>
                            <a className="navlink col-5 border border-white" href="#" target="_blank">VIEW RESUME</a>
                        </a>
                    </div>
                        
                    <div className="col-lg-7 col-sm-8">

                        <img src={html_icon} className="img-thumbnail thumbnail m-2" alt="icon"></img>
                        <img src={css_icon} className="img-thumbnail thumbnail m-2" alt="icon"></img>
                        <img src={javascript_icon} className="img-thumbnail thumbnail m-2" alt="icon"></img>
                        <img src={react_icon} className="img-thumbnail thumbnail m-2" alt="icon"></img>
                        <img src={node_icon} className="img-thumbnail thumbnail m-2" alt="icon"></img>
                        <img src={knex_icon} className="img-thumbnail thumbnail m-2" alt="icon"></img>
                        <img src={git_icon}className="img-thumbnail thumbnail m-2" alt="icon"></img>

                    </div>
                    
                </div>

                <div className="row card-deck m-0 d-flex justify-content-center">

                    <div className="col-sm-12 col-lg-10">
                        <div className="card">
                            <div className="row card-body">
                                <img className="col-sm-4 card-img" src={welovemovies_img} alt="sans"/>
                                <div className="col-sm-8 col-lg-10">
                                    <h3 className="card-title">WeLoveMovies App</h3>
                                    <p classname="card-text">This app demonstrates a server that handles requests for movies, reviews, and theaters. Please note that I only programmed the server for this app.</p>
                                    <p className="card-text">Node.js, Express.js, Knex, dotenv, CORS</p>
                                    <div className="row justify-content-around">
                                        <a className="navlink col-5 border border-white" href="https://obscure-dawn-57663.herokuapp.com/" target="_blank">VISIT SITE</a>
                                        <a className="navlink col-5 border border-white" href="https://github.com/dcahoon/welovemovies" target="_blank">GITHUB RESPOSITORY</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-10">
                        <div className="card">
                            <div className="row card-body">
                                <img className="col-sm-4 card-img" src={welovemovies_img} alt="sans"/>
                                <div className="col-sm-8 col-lg-10">
                                    <h3 className="card-title">WeLoveMovies App</h3>
                                    <p classname="card-text">This app demonstrates a server that handles requests for movies, reviews, and theaters. Please note that I only programmed the server for this app.</p>
                                    <p className="card-text">Node.js, Express.js, Knex, dotenv, CORS</p>
                                    <div className="row justify-content-around">
                                        <a className="navlink col-5 border border-white" href="https://obscure-dawn-57663.herokuapp.com/" target="_blank">VISIT SITE</a>
                                        <a className="navlink col-5 border border-white" href="https://github.com/dcahoon/welovemovies" target="_blank">GITHUB RESPOSITORY</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-10">
                        <div className="card">
                            <div className="row card-body">
                                <img className="col-sm-4 card-img" src={welovemovies_img} alt="sans"/>
                                <div className="col-sm-8 col-lg-10">
                                    <h3 className="card-title">WeLoveMovies App</h3>
                                    <p classname="card-text">This app demonstrates a server that handles requests for movies, reviews, and theaters. Please note that I only programmed the server for this app.</p>
                                    <p className="card-text">Node.js, Express.js, Knex, dotenv, CORS</p>
                                    <div className="row justify-content-around">
                                        <a className="navlink col-5 border border-white" href="https://obscure-dawn-57663.herokuapp.com/" target="_blank">VISIT SITE</a>
                                        <a className="navlink col-5 border border-white" href="https://github.com/dcahoon/welovemovies" target="_blank">GITHUB RESPOSITORY</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>
        
        </div>
    )
}