import React from 'react';
import Grid from './Grid';
import './About.css';
class About extends React.Component {
    render() {
      return(
          <div class="about">
            <h1>My Expertise</h1>
            <div class="grids">
              <Grid title="Software Engineer" desc="Proficient in C++, Java, JavaScript, Python."/>
              <Grid title="Frontend Development" desc="Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React."/>
              <Grid title="Backend Development" desc="Experienced in developing RESTful API using C# and NodeJS"/>
            </div>
            
          </div>
      )
    }
}
export default About;