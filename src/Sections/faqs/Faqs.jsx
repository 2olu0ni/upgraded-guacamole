import React from "react";
import "./Faqs.css";
import faqs from "./data";
import Faq from "./Faq";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Faqs = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  })
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions i usually get. Click to toggle the answer, and
        if you still have some more, shoot a message from the contact section!
      </p>
      <div className="container faqs__container" data-aos="fade-in">
        {faqs.map((faq) => (
          <Faq key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
