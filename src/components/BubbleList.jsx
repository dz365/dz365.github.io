const BubbleList = ({ list }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {list.map((word) => (
        <span className="bg-google-gray px-3 py-1 rounded-3xl text-sm">
          {word}
        </span>
      ))}
    </div>
  );
};

export default BubbleList;
