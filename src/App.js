import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaNav from "./Components/NasaNav";
import NasaHeader from "./Components/NasaHeader";
import NasaPhoto from "./Components/NasaPhoto";
import NasaPhotoData from "./Components/NasaPhotoData";
import NasaCarousel from "./Components/NasaCarousel";

function App() {
  //create state
  const [data, setData] = useState("");
  const [date, setDate] = useState("2021-08-12");
  //get the data from the api
  useEffect(() => {
    const API_KEY = "sLgye0aQOmUTPTBi7PaqGPh2USJB2u5Qk4LF2g0S";
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
      )
      .then(res => {
        // console.log("RESDATA:", res.data);
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  // console.log("DATA IN STATE!!!", data);
  return (
    <div className="App">
      <NasaNav />
      <NasaHeader />
      <NasaCarousel imageUrl={data.url} />
      <NasaPhoto imageUrl={data.url} imgCopyright={data.copyright} />
      <NasaPhotoData data={data} />
    </div>
  );
}

export default App;
