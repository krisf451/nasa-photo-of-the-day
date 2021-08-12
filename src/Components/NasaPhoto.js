import React, { useState, useEffect } from "react";

export default function NasaPhoto(props) {
  //   console.log("PROPS IN NASAPHOTO", props);
  const { imageUrl, imgCopyright } = props;
  //   console.log(props.copyright);

  return (
    <div className="container">
      <h1>TEST PHOTO CONTENT</h1>
      <h2 className="copyrightHead">{imgCopyright}Hi</h2>
      <div>
        <img src={imageUrl}></img>
      </div>
    </div>
  );
}
