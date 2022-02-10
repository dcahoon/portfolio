import welovemovies_img from "./images/welovemovies.png"

export default function About() {
    return (
        <div className="row card-deck m-0 d-flex justify-content-center">
            
            <div className="col-sm-12 col-lg-10">
                <div className="card">
                    <div className="row card-body">
                        <img className="col-sm-4 card-img" src={welovemovies_img} alt="sans"/>
                        <div className="col-sm-8">
                            <h3 className="card-title">WeLoveMovies App</h3>
                            <p classname="card-text">This app demonstrates a server that handles requests for movies, reviews, and theaters. Please note that I only programmed the server for this app.</p>
                            <p className="card-text">Node.js, Express.js, Knex, dotenv, CORS</p>
                            <div className="row justify-content-around">
                                <a className="btn btn-light col-5" href="https://obscure-dawn-57663.herokuapp.com/" target="_blank">Visit Site</a>
                                <a className="btn btn-light col-5" href="https://github.com/dcahoon/welovemovies" target="_blank">GitHub Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-lg-10">
                <div className="card">
                    <div className="row card-body">
                        <img className="col-sm-4 card-img" src={welovemovies_img} alt="sans"/>
                        <div className="col-sm-8">
                            <h3 className="card-title">WeLoveMovies App</h3>
                            <p classname="card-text">This app demonstrates a server that handles requests for movies, reviews, and theaters. Please note that I only programmed the server for this app.</p>
                            <p className="card-text">Node.js, Express.js, Knex, dotenv, CORS</p>
                            <div className="row justify-content-around">
                                <a className="btn btn-light col-5" href="https://obscure-dawn-57663.herokuapp.com/" target="_blank">Visit Site</a>
                                <a className="btn btn-light col-5" href="https://github.com/dcahoon/welovemovies" target="_blank">GitHub Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-lg-10">
                <div className="card">
                    <div className="row card-body">
                        <img className="col-sm-4 card-img" src={welovemovies_img} alt="sans"/>
                        <div className="col-sm-8">
                            <h3 className="card-title">WeLoveMovies App</h3>
                            <p classname="card-text">This app demonstrates a server that handles requests for movies, reviews, and theaters. Please note that I only programmed the server for this app.</p>
                            <p className="card-text">Node.js, Express.js, Knex, dotenv, CORS</p>
                            <div className="row justify-content-around">
                                <a className="btn btn-light col-5" href="https://obscure-dawn-57663.herokuapp.com/" target="_blank">Visit Site</a>
                                <a className="btn btn-light col-5" href="https://github.com/dcahoon/welovemovies" target="_blank">GitHub Repository</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}