import React from "react";
import { FaLinkedin, FaPhoneVolume } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Header = ({ data }) => {
  return (
    <header>
      <div className="header-content">
        <img src={data.image} alt="Logo" className="logo" />
        <div className="text-content">
          <h1>{data.name}</h1>
          <h2>{data.title}</h2>
          <p>
            <FaPhoneVolume /> {data.phone} | <SiGmail /> {data.email} |
            <a href={data.linkedin}>
              <FaLinkedin />
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
