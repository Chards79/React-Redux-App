import React from 'react';

const Comic = props => {
    return (
        <div className="whole-thing">
            <h1>My XKCD App</h1>
            <h2>{props.comic.title}</h2>
            <div className="comic">
                <img src={props.comic.img} />
                <p>Month: {props.comic.month}</p>
                <p>Year: {props.comic.year}</p>
            </div>
        </div>
    )
}

export default Comic;