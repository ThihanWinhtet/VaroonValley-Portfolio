import "./NavBar.css";
import menu from "../../assets/icons/menu.png";
import close from "../../assets/icons/close.png";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

const NavBar = () => {
  let [sideBar, setSideBar] = useState(true);

  let handleClick = () => {
    setSideBar(!sideBar);
    console.log(sideBar);
  }

  return (
    <>
      {sideBar ? (
        <nav className="navbar pd2">
          <ul>
            <li className="navLogo">
              <a href="/">Varoon Valley</a>
            </li>
          </ul>
          <ul>
            <li className="navItem">
              {" "}
              <HashLink to={"home"}> Home </HashLink>
            </li>
            <li className="navItem">
              {" "}
              <HashLink to={"home#services"}> Services </HashLink>{" "}
            </li>
            <li className="navItem">
              {" "}
              <HashLink to={"home#aboutus"}> About Us </HashLink>{" "}
            </li>
            <li className="navItem">
              {" "}
              <HashLink to={"home#contact"}> Contact Us </HashLink>
            </li>
          </ul>
          <li className="navToggle">
            {" "}
            <img onClick={()=> handleClick()} src={menu} alt="" />{" "}
          </li>
        </nav>
      ) : (
        <nav className="side_bar">
          <ul className="top">
            <li className="navLogo">
              <a href="/" onClick={()=> handleClick()}>Varoon Valley</a>
            </li>
            <li className="closeToggle">
              {" "}
              <img onClick={()=> handleClick()} src={close} alt="" />{" "}
            </li>
          </ul>
          <ul onClick={()=> handleClick()}>
            <li className="navSide">
              {" "}
              <HashLink to={"home"}> Home </HashLink>
            </li>
            <li className="navSide">
              {" "}
              <HashLink to={"home#services"}> Services </HashLink>{" "}
            </li>
            <li className="navSide">
              {" "}
              <HashLink to={"home#aboutus"}> About Us </HashLink>{" "}
            </li>
            <li>
              {" "}
              <HashLink to={"home#contact"}> 
              <button className="navSideBtn">Contact Us</button> </HashLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default NavBar;
