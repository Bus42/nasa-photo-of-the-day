import React, { useState } from "react";
import "./App.css";
import PhotoCard from "./components/PhotoCard";
import dummyData from './components/dummyData';



function App() {
  const [photos, setPhotos] = useState(dummyData)
  return (
    <div className="App">
      <h1>NASA Astronomy Photo of the Day</h1>
      <p>map over returned data returning PhotoCard components</p>
      {photos.map((photo, index) => {
        console.log(photo)
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
