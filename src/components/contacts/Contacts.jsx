import React, { useEffect } from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = ({theme}) => {
  let toastTheme = 'light';
  if(theme === 'light-theme'){
    toastTheme = 'light'
  } else {
    toastTheme = 'dark'
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    try {
      // emailjs.send("service_ucikji3", "template_13y3cjv", {
      //   name: form.current.name.value,
      //   email: form.current.email.value,
      //   message: form.current.message.value,
      // });
      toast.success("Message Sent");
      e.target.reset();
    } catch (err) {}
  };

  useEffect(() => emailjs.init("s8nj_z-FPx28nyFti"), []);

  return (
    <section id="contacts">
      <ToastContainer
       position="top-right"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       theme={toastTheme}
      />
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>joydeep93roy@gmail.com</h5>
            <a href="mailto:joydeep93roy@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
