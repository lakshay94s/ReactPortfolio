import React from "react";
import "./Menus.css";
import Image from "../../../assets/image2.jpg";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

import { Link } from "react-scroll";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcReading,
  FcBusinessContact,
} from "react-icons/fc";
import { GiStack } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src={Image} alt="profile-pic" />
            </div>
          </Zoom>

          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReading />
                    Education
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <GiStack color="orange" />
                    Tech Stack
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <AiOutlineFundProjectionScreen color="yellow" />
                    Projects
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcHome />
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcAbout />
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcReading />
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <GiStack color="orange" />
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <AiOutlineFundProjectionScreen color="yellow" />
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <FcBusinessContact />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
