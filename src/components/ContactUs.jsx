import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("xnqkobod");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message || !phone_number) {
      toast.error("Email not sent ,Please fill in all fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div id="contact" className="py-8 w-[100%]">
      <ToastContainer />

      <p className="text-center text-[#076C05] text-4xl font-bold  ">
        Contact Us
      </p>
      <div className="w-[80%]  mx-auto">
        <div className="w-[100%] flex md:flex-row flex-col items-center justify-between">
          <div className="md:w-[48%] ">
            <img
              src="/contact.svg"
              className="w-[100%] h-[548px] object-contain"
            />
          </div>
          <div className="md:w-[48%] flex flex-col gap-4">
            <form action="https://formspree.io/f/xnqkobod" method="POST">
              <div className="w-[100%] flex flex-col justify-center items-center">
                <p className="text-[#076C05] text-2xl  my-3 font-bold ">
                  Get in Touch
                </p>
                <div className="w-[100%] flex flex-col  gap-6">
                  <div className="w-[100%] flex justify-between items-center">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-[48%] h-[40px] border-0 bg-[#DFDFDF] text-[#626262]  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-[#626262] py-2 px-4"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-[48%] h-[40px] border-0 bg-[#DFDFDF] text-[#626262]  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-[#626262] py-2 px-4"
                    />
                  </div>
                  <div className="w-[100%] flex justify-between items-center">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phone_number"
                      value={phone_number}
                      onChange={(e) => setPhone_number(e.target.value)}
                      className="w-[48%] h-[40px] border-0 bg-[#DFDFDF] text-[#626262]  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-[#626262] py-2 px-4"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-[48%] h-[40px] border-0 bg-[#DFDFDF] text-[#626262]  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-[#626262] py-2 px-4"
                    />
                  </div>

                  <textarea
                    type="text"
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-[100%] h-[90px] border-0 bg-[#DFDFDF] text-[#626262]  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-[#626262] py-2 px-4"
                  />
                </div>
                <div className="w-[100%] mt-8">
                  <button
                    type="submit"
                    className="bg-[#1FBF1C] px-6 py-2 text-white hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
