import React from "react";
import "./About.css";
import aboutImage from "../../images/IMG-20210720-WA0042.jpg";

import resume from "../../images/Tolulope_Onj_Resume.pdf";
import { HiDownload } from "react-icons/hi";
import Card from "../../Components/Card";
import data from "./data";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={aboutImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Building projects my clients love have always been my passion. Being
            in the web development industry to provide industry standard design
            and making my clients happy worldwide, I'm always motivated to do
            more!
          </p>
          <p>
            Hi, my name is Tolulope Oni from Lagos, Nigeria. I'm a full-stack
            web developer. My top priority is to get your business online the
            right way, giving you industry-standard design and all the
            functionality you need to operate smoothly online. Get in touch
            today with the details of your project let's get started! Check out
            my resume below!
          </p>
          <a href={resume} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
