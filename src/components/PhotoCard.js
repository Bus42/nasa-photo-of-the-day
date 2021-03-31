import React from 'react';

const PhotoCard = (props) => {
    const {
        copyright,
        date,
        explanation,
        title,
        url } = props;
    return <div className="photocard">
        <h2>{title}</h2>
        <h3>{date}</h3>
        <h4>By {copyright}</h4>
        <div id="img_wrapper">
            <img src={url} alt="Image goes here" />
            <p>{explanation}</p>
        </div>
    </div>
}
export default PhotoCard