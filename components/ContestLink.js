import React from "react";

const ContestLink = ({ link, description, influencerPhoto }) => {
  return (
    <div className="contest-link">
      <span style="height: 100px; border-radius: 50px; background-color: white" />
      <h3 className="contest-link description">
        Win a Tesla from the Cheeky Boyos
      </h3>
    </div>
  );
};

export default ContestLink;
