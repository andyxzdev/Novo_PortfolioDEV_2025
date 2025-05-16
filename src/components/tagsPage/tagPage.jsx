import React from "react";
import "./tagPage.css";

const TagPage = ({ Text = "Tag", customStyle = {} }) => {
  return (
    <div className="tagPage" style={customStyle}>
      {Text}
    </div>
  );
};

export default TagPage;
