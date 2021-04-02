import React from 'react';
import styled from 'styled-components';

const PhotoCardWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: clamp(400px 60vw 800px);
    padding: 12px;
    border-radius: 12px;
    overflow: hidden;
    text-align: center;
    box-shadow: 2px 2px 3px 3px #333;
    margin: 10px;
`;

const PhotoCard = (props) => {
    const {
        copyright,
        date,
        explanation,
        title,
        url } = props;
    return (
        <PhotoCardWrapper>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <h4>By {copyright}</h4>
        <div>
            <img src={url} alt="useful alt text goes here" />
            <p>{explanation}</p>
        </div>
        </PhotoCardWrapper>
    )
}
export default PhotoCard