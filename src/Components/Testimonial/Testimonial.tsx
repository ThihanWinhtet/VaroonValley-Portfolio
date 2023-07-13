import "./Testimonial.css";
import left from "../../assets/images/Testimonial/right-arrow (1).png";
import right from "../../assets/images/Testimonial/right-arrow.png";
import head from "../../assets/images/Testimonial/head.png";
import { useState } from "react";

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    {
      feedback:
        "Working with [Company Name] has been a game-changer for our business. Their expertise, dedication, and innovative solutions have helped us overcome challenges and achieve remarkable results.",
      author: "John Doe",
      posotion: "CEO of ABC Company.",
    },
    {
      feedback:
        "The team at [Company Name] truly understands our needs and consistently goes above and beyond to deliver outstanding results. Their professionalism, attention to detail, and excellent communication make them a trusted partner.",
      author: "Jane Smith",
      posotion: "Marketing Manager at XYZ Corporation.",
    },
    {
      feedback:
        "Choosing [Company Name] for our IT solutions was the best decision we made. Their skilled team seamlessly integrated the latest technologies, transforming our operations and enhancing efficiency.",
      author: "David Johnson",
      posotion: "IT Director at 123 Industries.",
    },
    {
      feedback:
        "The level of support we receive from [Company Name] is unmatched. They respond promptly to our inquiries and provide practical solutions that address our unique requirements. Their commitment to our success is unparalleled.",
      author: "Sarah Thompson",
      posotion: "Operations Manager at Acme Enterprises.",
    },
    {
      feedback:
        "We have been impressed with the exceptional quality of work delivered by [Company Name]. Their talented developers and designers have created custom solutions that have elevated our business to new heights.",
      author: "Mark Davis",
      posotion: "Founder of Innovate Startups.",
    },
  ];
  return (
    <>
      <div className="testimonials pd2">
        <div className="tm_content_title">
          <small>TESTIMONIALS</small>
          <h1>
            What our <br /> clients think <br /> about us?
          </h1>
        </div>
        <div className="tm_content">
          <div className="tm_nav">
            <div>
              <img src={head} alt="" />
              <img src={head} alt="" />
              <img src={head} alt="" />
            </div>
            <div className="navter">
              <img onClick={()=> {
                  if (index > 0){
                    setIndex(index-1);
                  }else{
                    setIndex(testimonials.length-1);
                  }
              }} src={left} alt="" />
              <img
                onClick={() => {
                  if (index < testimonials.length -1){
                    setIndex(index + 1);
                  }else{
                    setIndex(0);
                  }
                }}
                src={right}
                alt=""
              />
            </div>
          </div>
          <div className="tm_main">
            <p>{testimonials[index].feedback}</p>
          </div>
          <div className="tm_foot">
            <div>
              <h4>{testimonials[index].author}</h4>
              <small>{testimonials[index].posotion}</small>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <a href="">read more +</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
