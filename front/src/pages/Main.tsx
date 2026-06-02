import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Project from "./Project"

const Main = () => {
    return (
        <div>
            <section id="home">
                <Home />
            </section>

             <section id="project">
                <Project />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default Main