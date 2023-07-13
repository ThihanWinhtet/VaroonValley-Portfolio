import "./WhatWeDo.css";
import coca from "../../assets/images/WhatWeDo/KO_BIG.png";
import indeed from "../../assets/images/WhatWeDo/toppng.com-indeed-logo-white-indeed-logo-1491x387.png";
import arrow from "../../assets/images/Testimonial/right-arrow-w.png";
import galax from "../../assets/images/WhatWeDo/galax.png";
import { NavLink } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <>
      <div className="wwd_content_container_main">
        <div className="trusted">
          <small>TRUSTED BY</small>
          <div>
            <img src={coca} alt="" />
            <img src={indeed} alt="" />
            <img src={coca} alt="" />
            <img src={indeed} alt="" />
            <img src={coca} alt="" />
            <img src={indeed} alt="" />
          </div>
        </div>
        <div className="wwd_content_container pd2">
          <div className="content_info">
            <small>Ready to Start</small>
            <h1>
              A Closer Look at the Technologies We Use at <br /> Varoon Valley
            </h1>
            <p>
              From programming languages to frameworks, databases to cloud
              services, we leave no stone unturned in our pursuit of excellence.
            </p>
            <button className="wwd_btn bbtn">
              <NavLink to={"/solutions"} className={"color_w"}>
                See More {" "}
                <small>
                  <img src={arrow} alt="" />
                </small>{" "}
              </NavLink>
            </button>
          </div>
          <div className="wwd_content_img">
            <img src={galax} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
