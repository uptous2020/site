import React from "react";
import RightArrow from "./RightArrow.js"
{/* /public/profiles/benji.jpg */}
const ContestLink = ({
  description,
  contestLink,
  influencerPhoto,
  bgColor = "black",
  influencerName,
}) => {
  return (
    <div className={`mx-4 bg-black rounded-lg`}>
      <a href={contestLink}>
        <div className="mx-4 my-2 flex flex-row items-center">
          <img
            className="h-16 w-16 md:h-20 md:w-20 rounded-full m-2"
            src={influencerPhoto}
          />
          <p className="mx-2 w-64 mr-0 md:text-left text-white">
            {
              description == undefined ? `Win a chat with ${influencerName}` : description 
            }
          </p>
          <RightArrow color={"black"} />
        </div>
      </a>
    </div>
  );
};

export default ContestLink;