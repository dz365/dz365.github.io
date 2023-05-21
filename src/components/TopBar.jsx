import googleLight from "../assets/images/google-light.png";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as XMarkIcon } from "../assets/icons/xmark.svg";

const TopBar = () => {
  return (
    <div className="sticky top-0 z-10 left-0 bg-white border-b px-5 py-3 w-full flex items-center">
      <div className="w-full flex lg:flex-row flex-col items-center gap-2 lg:gap-8">
        <img alt="Google" src={googleLight} className="w-24" />
        <div className="w-full max-w-lg border shadow-md rounded-3xl px-4 py-2.5 flex justify-between gap-3">
          <span className="text-gray-700 pr-2">daniel zhang website</span>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 opacity-50">
              <XMarkIcon />
            </div>
            <div className="w-1 h-6 border-l"></div>
            <div className="w-6 h-6">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
