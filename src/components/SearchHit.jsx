import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const SearchHit = ({
  image,
  pageTitle,
  pageLink,
  hitTitle,
  date,
  description,
  additionalInfo,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between cursor-pointer group">
        <div className="flex items-center gap-4">
          <img
            src={image}
            className="w-8 h-8 bg-google-gray rounded-full p-1"
            alt={pageTitle}
          />
          <div className="flex flex-col">
            <span className={theme === "dark" && "text-gray-100"}>
              {pageTitle}
            </span>
            <span
              className={`text-sm group-hover:underline ${
                theme === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              {pageLink}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <span className={`text-xl ${theme === "dark" ? "text-purple-400" : "text-violet-700"}`}>{hitTitle}</span>
        <span className={theme === "dark" ? "text-gray-400" : "text-gray-800"}>
          {date}
        </span>
      </div>

      <p className={theme === "dark" ? "text-gray-300" : "text-gray-800"}>
        {description}
      </p>
      {additionalInfo}
    </div>
  );
};

export default SearchHit;
