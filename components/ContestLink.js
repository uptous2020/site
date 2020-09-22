import React from "react";
import RightArrow from "./RightArrow.js"
{/* /public/profiles/benji.jpg */}
const ContestLink = ({
  link,
  description,
    influencerPhoto,
    bgColor = "black",
    
}) => { 
  return (
    <div className={`mx-4 bg-${bgColor} rounded-lg`}>
    <div className="mx-4 my-2 flex flex-row items-center">
      <img className="h-16 w-16 md:h-20 md:w-20 rounded-full m-2" src="profiles/benji.jpg" />
      <p className="mx-2 w-64 mr-0 md:text-left text-white">
        Win a Tesla from the Cheeky Boyos
      </p>
              <RightArrow color={bgColor == "black" ? "#E69538" : "#000000"}/>
      </div>
    </div>
  );
};

export default ContestLink;