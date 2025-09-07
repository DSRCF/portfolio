import Link from "next/link";

import {FaGithub, FaKaggle, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/DSRCF" },
  { icon: <FaKaggle />, path: "" },
  { icon: <FaYoutube />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;