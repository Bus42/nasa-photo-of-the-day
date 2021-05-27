import React from 'react';
import styled from 'styled-components';

const PhotoCardWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    min-width: 480px;
    width: 1080px;
    max-width: 80wv;
    padding: 12px;
    border-radius: 12px;
    overflow: hidden;
    text-align: center;
    box-shadow: 2px 2px 3px 3px #333;
    margin: 10px;
`;
const PhotoCardTitle = styled.h2`
    font-size: 1.5em;
    font-weight: 700;
`;
const PhotoCardDate = styled.h3`
    font-size: 1.2em;
    font-weight: 700;
    margin: 1em;
`;
const PhotoCardCredit = styled.h4`
    font-weight: 500;
    margin-bottom: .5em;
`;
const PhotoCardImageWrapper = styled.div`
    display: flex;
    flex-direction: row wrap;
    justify-content: center;
`;
const PhotoCardImage = styled.img`
    width: 450px;
    border-radius: 8px;
`;
const PhotoCardExplanation = styled.p`
    text-align: left;
    text-indent: 1em;
    margin-left: 1em;
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
            <PhotoCardTitle>{title}</PhotoCardTitle>
            <PhotoCardDate>{date}</PhotoCardDate>
            <PhotoCardCredit>By {copyright}</PhotoCardCredit>
            <PhotoCardImageWrapper>
                <PhotoCardImage src={url} alt="useful alt text goes here" />
                <PhotoCardExplanation>{explanation}</PhotoCardExplanation>
            </PhotoCardImageWrapper>
        </PhotoCardWrapper>
    )
}
export default PhotoCard