import React from "react";
import "./Song.css";

import Artwork from "./Artwork";
import PlayButton from "./PlayButton";

export default function Song(props) {

    return (
        <section className="song-item">
            <aside>
                <Artwork src={props.song["im:image"][2].label} />
                <PlayButton src={props.song.link[1].attributes.href} index={props.index} />
            </aside>
            <article>
                <h2>{props.song["im:name"].label}</h2>
                <h4>{props.song["im:artist"].label}</h4>
                <a href={props.song.link[0].attributes.href} alt="Buy in iTunes">
                    {props.song.title.label + " on iTunes"}
                </a>
            </article>
            <p className="chart-position">{props.index + 1}</p>
        </section>
    )
}