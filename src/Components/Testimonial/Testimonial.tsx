import "./Testimonial.css";
import left from "../../assets/images/Testimonial/right-arrow (1).png";
import right from "../../assets/images/Testimonial/right-arrow.png";
import head from "../../assets/images/Testimonial/head.png";

const Testimonial = () => {
  return (
    <>
      <div className="testimonials pd2">
        <div className="tm_content_title">
          <small>TESTIMONIALS</small>
          <h1>What our <br /> clients think <br /> about us?</h1>
        </div>
        <div className="tm_content">
          <div className="tm_nav">
            <div>
              <img src={head} alt="" />
              <img src={head} alt="" />
              <img src={head} alt="" />
            </div>
            <div className="navter">
              <img src={left} alt="" />
              <img src={right} alt="" />
            </div>
          </div>
          <div className="tm_main">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nesciunt perferendis illo laudantium doloremque, recusandae quia ut consequuntur nobis deleniti ipsum. Delectus praesentium reiciendis facilis officia natus totam ratione tenetur ut, veritatis iste nemo quisquam, minima ex soluta cupiditate distinctio!</p>
          </div>
          <div className="tm_foot">
            <div>
                <h4>Caroline May</h4>
                <small>CEO at indeed</small>
            </div>
            <div style={{marginTop : '1rem'}}>
                <a href="">read more +</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
