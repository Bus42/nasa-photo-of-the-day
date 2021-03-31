import React from 'react';
const loadImage = require('../images/spaceguy.png')

const Loader = () => (
    <div id="loader">
        <h2>Fetching Data</h2>
        <img className="App-logo" src={loadImage} />
    </div>
);

export default Loader