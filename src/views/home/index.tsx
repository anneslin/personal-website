import React from 'react';
import "./index.css";
import Descriptive from "./../../components/descriptive";

const Home = () => 
  <Descriptive>
      <div>
        Hi, I'm Anne and I like working with React to build beautiful sites. Graduated from the University of California, Berkeley 2017:
        major in Applied Mathematics, major concentration and minor in Computer Science.
        <br />
        <a href="http://anneslin.com/assets/files/resume.pdf" download>résumé</a>
        <br />
        <div className="icons">
          <a href="https://github.com/anneslin" target="_blank"><i className="fa fa-github linked" /></a>
          <a href="https://www.linkedin.com/in/anneslin/" target="_blank"><i className="fa fa-linkedin linked" /></a>
          <a href="http://www.instagram.com/lumohn/" target="_blank"><i className="fa fa-instagram linked" /></a>
          <a href="mailto:anne.lin@berkeley.edu" target="_top"><i className="fa fa-envelope-o linked" /></a>
        </div>
      </div>
  </Descriptive>


export default Home;
