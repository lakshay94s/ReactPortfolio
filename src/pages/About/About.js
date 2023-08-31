import React from "react";
import "./About.css";
import Image from "../../assets/image.jpg";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={Image} alt="profile-pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                Hello! I'm a 3rd-year B.Tech Computer Science student with a
                passion for crafting digital experiences. My toolkit includes
                C++, Java, and a keen understanding of Data Structures and
                Algorithms – the building blocks of innovation. I don't just
                speak the backend language – I'm fluent in frontend development
                too. Bringing creativity to life through clean, user-centric
                designs is what keeps me excited. My journey has also equipped
                me with a solid grasp of computer fundamentals, from the
                intricacies of Operating Systems to the art of Database
                Management. Currently on the lookout for an internship
                opportunity, I'm eager to contribute and learn in a
                collaborative environment. Dive into my portfolio to see my tech
                journey unfold, and let's connect to explore how I can be a
                valuable addition to your team!
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
