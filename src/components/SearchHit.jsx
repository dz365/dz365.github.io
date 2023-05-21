const SearchHit = ({
  image,
  pageTitle,
  pageLink,
  hitTitle,
  date,
  description,
  additionalInfo,
}) => {
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
            <span>{pageTitle}</span>
            <span className="text-sm text-gray-700 group-hover:underline">
              {pageLink}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <span className="text-xl text-violet-700">{hitTitle}</span>
        <span className="text-gray-700">{date}</span>
      </div>

      <p className="text-gray-800">{description}</p>
      {additionalInfo}
    </div>
  );
};

export default SearchHit;
