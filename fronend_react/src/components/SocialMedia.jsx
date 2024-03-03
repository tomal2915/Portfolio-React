import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaMousePointer } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/tomal2915">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/__tomal___/">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/tomal2915/">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
