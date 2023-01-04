import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    setLoading(true);
    try {
      let url = `${mainUrl}${clientID}`;

      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return <h2>stock photos starter</h2>;
}

export default App;

// https://api.unsplash.com/photos/?client_id=E7Pz0-OCgHG462w35f3v_6EYdFIJgylJFR_l4nicFH8
// 18 INITIAL FETCH
