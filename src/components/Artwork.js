import React from "react";
import "./Artwork.css";

export default function Artwork(props) {

    return (
        <img className="artwork" src={props.src} alt="cover" />
    )
}