import "./Navbar.scss";
import Button from "../Button/Button";
import communiti from "../../assets/logos/communiti.svg";
import miniCommuniti from "../../assets/logos/miniCommuniti.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <nav className="navbar">
        <Link src="/" className="navbar__link">
          <img
            className="navbar__img"
            src={windowWidth <= 767 ? miniCommuniti : communiti}
            alt="communiti"
          />
        </Link>
        <ul className="navbar__links">
          <Link className="navbar__link-container navbar__link-container--desktop">
            <li className="navbar__link">Home</li>
          </Link>
          <Link className="navbar__link-container navbar__link-container--desktop">
            <li className="navbar__link">About</li>
          </Link>
          <Link className="navbar__link-container" to="/">
            <li>
              <Button buttonText="Log In" className="button" />
            </li>
          </Link>
          <Link className="navbar__link-container" to="/">
            <li>
              <Button buttonText="Sign Up" className="button button--yellow" />
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}