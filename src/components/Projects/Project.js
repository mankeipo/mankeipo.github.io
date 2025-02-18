import React from 'react';
import Card from './Card';
import './Project.css';
import logo from '../../img/banner.jpg'
import jeopardy from '../../img/jeopardy.png'
import alumlink from '../../img/Alumlink.png'
import stray_finder from '../../img/stray-finder.png'
class Project extends React.Component {
    render() {
      return(
        <div class="projects">
            <h1 id="title">Projects</h1>
            <div class="cards">
                <Card name="Jeopardy" words="&emsp;&emsp;A full-stack web application for a real-time multiplayer Jeopardy game using React, JavaScript, and Express.js, implementing socket connections for live gameplay, a RESTful API for data management" type="Fullstack Application" link="https://github.com/csci-499-fa24/Team2/" img={jeopardy}></Card>
                <Card name="AlumLink" words="&emsp;&emsp;A full-stack open source alumni directory solution designed for CUNY Law School graduates in a team of 4 and built with React, Node.js, Express.js, and PostgreSQL." type="Fullstack Application" link="https://github.com/CUNYTechPrep/AlumLink" img={alumlink}></Card>
                <Card name="Stray-Finder" words="&emsp;&emsp;A full-stack web application for locating and tracking stray animals using React, JavaScript, and Express.js, integrating Google Maps API for stray coordinates, a RESTful API, AWS S3 for image storage, and Nodemailer for subscriber notifications" type="Fullstack Application" link="https://github.com/csci-499-fa24/Stray-Finder" img={stray_finder}></Card>
            </div>
            
        </div>
      )
    }
}
export default Project;