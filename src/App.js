import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import PhotoCard from "./components/PhotoCard";
// import dummyData from './components/dummyData';
import { reqURL } from './constants';

function App() {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    axios.get(reqURL).then(res => setPhotos(res.data))
  }, [])
  return (
    <div className="App">
      <h1>NASA Astronomy Photo of the Day</h1>
      <p>map over returned data returning PhotoCard components</p>
      {photos.map((photo, index) => {
        return <PhotoCard
          copyright={photo.copyright}
          date={photo.date}
          explanation={photo.explanation}
          title={photo.title}
          url={photo.url}
          key={index} />
      })}
      <footer>
        Lambda logo, links, thanks, and credits
      </footer>
    </div>
  );
}

export default App;
