import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BubbleList = ({ list }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex gap-2 flex-wrap">
      {list.map((word) => (
        <span
          className={`px-3 py-1 rounded-3xl text-sm ${
            theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-google-gray"
          }`}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default BubbleList;
