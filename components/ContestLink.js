import React from "react";
import RightArrow from "./RightArrow.js"
{/* /public/profiles/benji.jpg */}
const ContestLink = ({
  description,
  contestName,
  influencerPhoto,
  bgColor = "black",
  influencerName,
}) => {
  return (
    <div className={`mx-4 bg-${bgColor} hover:bg-gray-400 text-white hover:text-black rounded-lg`}>
      <a href={contestName}>
        <div className="mx-4 flex flex-row items-center">
          <img
            className="h-16 w-16 md:h-20 md:w-20 rounded-full m-4"
            src={influencerPhoto}
          />
          <p className="mx-2 w-64 mr-0 md:text-left">
            {
              description == undefined ? `Win a chat with ${influencerName}^` : description 
            }
          </p>
          <RightArrow color={bgColor === "black" ? "#E69538" : "#000000"} />
        </div>
      </a>
    </div>
  );
};

export default ContestLink;