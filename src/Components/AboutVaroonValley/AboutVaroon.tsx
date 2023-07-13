import "./AboutVaroon.css";
import about from "../../assets/images/AboutVaroon/—Pngtree—business people have board meetings_7516388.png";
import arrow from "../../assets/images/Testimonial/right-arrow-w.png";
import { NavLink } from "react-router-dom";

const AboutVaroon = () => {
  return (
    <>
      <div className="ab_content_title" id="aboutus">
        <small>More About</small>
        <h3>Varoon Valley</h3>
      </div>
      <div className="ab_content_container pd2">
        <div className="ab_content col">
          <img src={about} alt="" />
        </div>
        <div className="ab_content_info col">
          <small>Warmly</small>
          <h1>Welcome to Varoon Valley</h1>
          <p>
            Let's embark on a journey together, where collaboration and
            innovation thrive.{" "}
          </p>
          <button className="bbtn">
            <NavLink to={"/about-us"} className={"color_w"}>
              Meet Our Team {" "}
              <small>
                <img src={arrow} alt="" />
              </small>
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutVaroon;
