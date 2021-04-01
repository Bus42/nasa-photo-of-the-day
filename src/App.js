import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import PhotoCard from "./components/PhotoCard";
import Loader from './components/Loader'
import dummyData from './components/dummyData';
import { reqURL } from './constants';
const live = false;

function App() {
  const [photos, setPhotos] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if(live){
      axios.get(reqURL)
      .then(res => {
        console.log(res.data)
        setPhotos(res.data)
        setLoaded(true)
      })
      .catch(err => console.error(err))
    } else {
        setPhotos(dummyData)
        //show off my spinning spaceguy
        setTimeout(()=>setLoaded(true), 2000)
      }
  }, [])
  return (
    <div className="App">
      <h1>NASA Astronomy Photo of the Day</h1>
      <p>map over returned data returning PhotoCard components</p>
      {loaded ?
        photos.map((photo, index) => {
          return <PhotoCard
            copyright={photo.copyright}
            date={photo.date}
            explanation={photo.explanation}
            title={photo.title}
            url={photo.url}
            key={index} />
        }) :
        <Loader />
      }
      <footer>
        Lambda logo, links, thanks, and credits
      </footer>
    </div>
  );
}

export default App;
