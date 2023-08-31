import React, { useState } from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Image from "../../assets/contact2.jpg";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";

import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const [user_name, setname] = useState("");
  const [user_email, setEmail] = useState("");
  const [message, setMsg] = useState("");

  //handle submit button
  const sendEmail = async (e) => {
    e.preventDefault();

    if (!user_name || !user_email || !message) {
      toast.error("Please provide all fields!", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    try {
      const response = await sendEmailWithForm();

      if (response.success) {
        toast.success("Thanks for contacting!", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setname("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const sendEmailWithForm = () => {
    return new Promise((resolve, reject) => {
      emailjs
        .sendForm("serviceId", "templateId", form.current, "publicKey")
        .then(
          (response) => {
            resolve({ success: true, message: response.text });
          },
          (error) => {
            reject({ success: false, message: error.text });
          }
        );
    });
  };

  return (
    <>
      <div className="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img src={Image} alt="Contact" className="image" />
                  </LightSpeed>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With:
                        <a href="https://www.linkedin.com/in/lakshay-sabharwal-52075b279/">
                          <BsLinkedin color="blue" size={30} className="ms-4" />
                        </a>
                        <a href="https://github.com/lakshay94s">
                          <BsGithub color="black" size={30} className="ms-3" />
                        </a>
                        <a
                          className="Whatsapp"
                          href="https://api.whatsapp.com/send?phone=9541156304"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <BsWhatsapp
                            color="green"
                            size={30}
                            className="ms-3"
                          />
                        </a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>

                    <form ref={form} onSubmit={sendEmail}>
                      <div className="row px-3">
                        <input
                          type="text"
                          name="user_name"
                          placeholder="Enter your Name"
                          className="mb-3"
                          value={user_name}
                          onChange={(e) => setname(e.target.value)}
                        />
                      </div>

                      <div className="row px-3">
                        <input
                          type="email"
                          name="user_email"
                          placeholder="Enter your Email Address"
                          className="mb-3"
                          value={user_email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="row px-3">
                        <textarea
                          type="text"
                          name="message"
                          placeholder="Write your Message"
                          className="mb-3"
                          value={message}
                          onChange={(e) => setMsg(e.target.value)}
                        />
                      </div>

                      <div className="row px-3">
                        <input type="submit" value="Send" className="button" />
                      </div>
                    </form>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
