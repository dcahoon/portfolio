import './App.css';
import Header from "./Header"

export default function AltApp() {
    
    return (
        <>
            <Header />
            <section className="hero-section d-flex">
                <h1>Web Development</h1>
            </section>
            <section>
                <div className="w-50">
                    <p className="display-2 p-4 pb-1">Welcome to my site!</p>
                    <p className="display-6 py-1 px-4">
                        Hi, my name is Dylan. I am currently located in Lansing, MI and am persuing a career as a full stack web developer. I have an associates degree as a computer programmer/analyst. I have recently completed the Thinkful software engineering bootcamp to strengthen my skills and prepare myself for a career in web.
                    </p>
                    <p className="display-6 py-1 px-4">
                        In my free time I enjoy woodworking, gardening, crafts, and video games. I love learning new skills and working with my hands.
                    </p>
                </div>
            </section>
        </>
    )

}