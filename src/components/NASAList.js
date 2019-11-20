import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NASAData() {
  const [Data, setData] = useState([]);

  const API = () => {
    // step 3 -> axios calls API
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setData(response.data);
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  useEffect(API, []);

  return null;
}
