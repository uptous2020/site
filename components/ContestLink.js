import React from "react";

const ContestLink = ({ description, photo }) => {
  return (
    <div className={`mx-4  text-white  rounded-lg`}>
      <div className="mx-4 flex flex-row items-center">
        <img className="h-16 w-16 md:h-20 md:w-20 m-4" src={photo} />
        <p className="mx-2 w-64 mr-0 md:text-left">{description}</p>
      </div>
    </div>
  );
};

export default ContestLink;
