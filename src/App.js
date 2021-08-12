import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaPhoto from "./Components/NasaPhoto";
import NasaPhotoData from "./Components/NasaPhotoData";

function App() {
  //create state
  const [data, setData] = useState("");
  //get the data from the api
  useEffect(() => {
    const API_KEY = "sLgye0aQOmUTPTBi7PaqGPh2USJB2u5Qk4LF2g0S";
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
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
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <NasaPhoto imageUrl={data.url} imgCopyright={data.copyright} />
      <NasaPhotoData data={data} />
    </div>
  );
}

export default App;
