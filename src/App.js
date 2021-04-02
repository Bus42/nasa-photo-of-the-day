import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import "./App.css";
import PhotoCard from "./components/PhotoCard";
import Loader from './components/Loader';
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

  const Header = styled.h1`
    font-size: 2em;
    font-weight: 700;
    padding: 1em;
  `;

  return (
    <div className="App">
      <Header>NASA Astronomy Photo of The Day</Header>
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
