import React, { useState, useEffect } from "react";

export default function NasaPhotoData(props) {
  // console.log(props.data);

  //get data from app
  //date/copyright/explanation/hdurl
  return (
    <div className="container">
      <h1>TEST PHOTO DATA</h1>
      <p>{props.data.date}</p>
      <p>A{props.data.copyright}</p>
      <p>{props.data.explanation}</p>
      <img className="dataImg" src={props.data.hdurl}></img>
    </div>
  );
}
