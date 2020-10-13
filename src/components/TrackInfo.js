import React from "react";

import "./TrackInfo.css";

export default function TrackInfo(props) {

    return (
        <article>
            <hgroup className="track-info">
                <h2>{props.song["im:name"].label}</h2>
                <h4>{props.song["im:artist"].label}</h4>
            </hgroup>
            <a href={props.song.link[0].attributes.href} alt="Buy in iTunes">
                {props.song.title.label + " on iTunes"}
            </a>
        </article>
    )
}