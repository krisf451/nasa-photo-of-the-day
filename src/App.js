import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaPhoto from "./Components/NasaPhoto";
import NasaPhotoData from "./Components/NasaPhotoData";

function App() {
  //create state
  const [photoData, setPhotoData] = useState(null);
  //get the data from the api
  useEffect(() => {
    const API_KEY = "sLgye0aQOmUTPTBi7PaqGPh2USJB2u5Qk4LF2g0S";
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        // console.log(res);
        // console.log(res.data);
        setPhotoData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
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
      <NasaPhoto photoData={photoData} />
      <NasaPhotoData photoData={photoData} />
    </div>
  );
}

export default App;
