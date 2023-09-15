import React, { useState } from "react";

const Boxes = (props) => {
  const { colorArray } = props;

  return (
    <>
      <div className="container">
        {colorArray.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: `200px`,
              height: `200px`,
              backgroundColor: color,
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Boxes;
