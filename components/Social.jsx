import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Corrected import for FaTwitter

const socials = [
  { icon: <FaGithub />, path: "https://github.com/minhajulrohan" }, // Replace with your actual URL
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/minhajul-ruhan-70779b20a/" }, // Replace with your actual URL
  { icon: <FaTwitter />, path: "https://twitter.com/minhajulRohan1" }, // Replace with your actual URL
];

const Social = ({ containerStyles, iconStyle }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyle}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
