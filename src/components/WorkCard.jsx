import * as React from "react";

export default function WorkCard(props) {
  return (
    <div className={`border-l-8 ${props.bordercolor} text-lg p-4 flex-grow flex flex-col gap-2 justify-center`}>
      <p className="text-2xl font-black">{props.position}</p>
      <p className="text-xl">{props.company}</p>
      <p className="text-gray-500">{props.location}</p>
      <p className="text-gray-500">{props.time}</p>
      <p className="text-gray-500">{props.description}</p>
    </div>
  );
};
