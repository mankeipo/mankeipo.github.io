import Navbar from './Navbar';
import Project from './Projects/Project';
import About from './About/About';
import './Home.css';
function Home() {
    return(
        <div>
            <Navbar />
            <div class="wrapper">
                <div class="textBox">
                    <h1>Hi. My name is Man Kei Po</h1>
                    <div>
                        <h3>Fullstack Developer</h3>
                        <p></p>
                        <a href='#projects' class="start-btn">Getting Started</a>
                    </div>
                </div>
                <div class="home-sci">
                    <a href='https://www.linkedin.com/in/man-kei-po-22537421a/'><i class='bx bxl-linkedin'></i></a>
                    <a href='https://github.com/mankeipo'><i class='bx bxl-github' ></i></a>
                </div>
            </div>
            <Project />
            <About />
        </div>
    )
}

export default Home;