import "./Home.css";
import arrow from "../../assets/images/Testimonial/right-arrow-w.png";
import home from "../../assets/images/Home/Multi-device targeting-pana.png";

const Home = () => {
  return (
    <>
      <div className="content_container pd2" id="home">
        <div className="content_info">
          <small>Let's</small>
          <h1>
            Solve Your IT Problems with <br /> Varoon Valley
            <small className="colorRed" style={{ fontSize: "3rem" }}>
              .
            </small>
          </h1>
          <p>
            Whether you're a small startup or a large enterprise, we can assist
            you in optimizing your IT infrastructure, enhancing security
            measures, and ensuring seamless operations.
          </p>
          <button className="bbtn">
            <a href="#contact" className="color_w">
              Contact us and get Started {" "}
              <small>
                <img src={arrow} alt="" />
              </small>{" "}
            </a>
          </button>
        </div>
        <div className="content_img">
          <img src={home} className="content_img_IMG" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
