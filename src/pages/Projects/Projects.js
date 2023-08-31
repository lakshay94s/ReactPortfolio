import React from "react";
import "./Projects.css";
import Image1 from "../../assets/images.png";
import Image2 from "../../assets/portfolio_icon.png";
import Image3 from "../../assets/music logo dreams time.jpg";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className=" project">
        <h2 className="col-12 mt-4 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-4 text-center">
          Here are my top 3 projects with their live link and source code. Each
          project is a testament to my dedication and problem-solving skills.
          Click on the project titles to dive into the live implementations and
          experience firsthand the magic of technology in action.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src={Image1} alt="Project 1" />
                </div>
                <div className="card-image-overly m-auto mt-4">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Derivative Calculator</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://lakshay94s.github.io/Derivative-Calculator/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src={Image2} alt="Project 2" />
                </div>
                <div className="card-image-overly m-auto mt-4">
                  <span className="card-detail-badge">React application</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Personal Portfolio Website
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/lakshay94s/ReactPortfolio"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src={Image3} alt="Project 3" />
                </div>
                <div className="card-image-overly m-auto mt-4">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Speco-Music Player</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://lakshay94s.github.io/Speco-MusicPlayer/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
