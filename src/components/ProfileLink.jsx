import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ProfileLink = ({ iconLight, iconDark, name, link }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className={`flex flex-col items-center gap-2 hover:underline ${
        theme === "dark" && "decoration-blue-400"
      }`}
    >
      <img
        src={theme === "dark" ? iconDark : iconLight}
        alt={name}
        className="w-6 h-6"
      />
      <span
        className={`text-sm ${
          theme === "dark" ? "text-blue-400" : "text-blue-800"
        }`}
      >
        {name}
      </span>
    </a>
  );
};

export default ProfileLink;
