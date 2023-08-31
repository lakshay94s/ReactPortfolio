import React from "react";
import "./Techstack.css";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import { TechStackList } from "../../utils/TechStackList";

const Techstack = () => {
  return (
    <>
      <div className="container techstack">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-3 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉Including programming languages, frameworks, databases, front-end,
            and backend tools, ans APIs
          </p>
        </RubberBand>
        <div className="row">
          {TechStackList.map((tech) => (
            <Fade right>
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
