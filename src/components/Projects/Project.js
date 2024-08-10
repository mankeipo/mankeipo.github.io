import React from 'react';
import Card from './Card';
import './Project.css';
import logo from '../../img/banner.jpg'
class Project extends React.Component {
    render() {
      return(
        <div class="projects">
            <h1 id="title">Projects</h1>
            <div class="cards">
                <Card name="AlumLink" words="&emsp;&emsp;A full stack web application using React/Redux and Express for managing product stocks and recording all transactions for companies." type="Fullstack Application" link="https://github.com/mankeipo/AlumLink" img={logo}></Card>
                <Card name="Remote Stocking Management" words="&emsp;&emsp;A full stack open source alumni directory solution designed for CUNY Law School graduates in a team of 4 and built with React, Node.js, Express.js, and PostgreSQL." type="Fullstack Application" link="https://github.com/mankeipo/Online-Inventory-Management" img={logo}></Card>
                <Card name="Greenage" words="&emsp;&emsp;A frontend web application using React designed to introduce global warming and climate change to the audience
." type="Frontend Application" link="https://github.com/mankeip3531/React/tree/master/reactjs" img={logo}></Card>
                
            </div>
            
        </div>
      )
    }
}
export default Project;