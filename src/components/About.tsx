import React from "react";
import '../assets/styles/About.scss';

function About() {
  return (
    <div className="container" id="about">
      <div className="about-container">
        <h1>About Me</h1>
        <div className="about-content">
          <p>

            I am a Senior Data Scientist and AI Engineer dedicated to translating cutting-edge AI 
            research into tangible business value. With over 6 years of experience at high-growth 
            tech firms, I specialize in building production-grade machine learning systems—from 
            Autonomous Agents to Large Language Models (LLMs)—that drive operational efficiency 
            and cost reduction.
          </p>
          <p>
            Currently completing my M.Sc. in Computer Science (Machine Learning) at Georgia Tech, 
            I excel at bridging the gap between theoretical models and real-world application. 
            Whether it is optimizing inference speeds to cut cloud costs or deploying Generative AI 
            to automate complex workflows, my focus is always on delivering scalable solutions 
            that solve critical business problems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

