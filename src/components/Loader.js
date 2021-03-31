import React from 'react';
const loadImage = require('../images/spaceguy.png')

const Loader = () => (
    <div id="loader">
        <h2>Fetching Data</h2>
        <img src={loadImage} />
    </div>
);

export default Loader