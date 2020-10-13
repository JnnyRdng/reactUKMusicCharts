import React from "react";
import "./Song.css";

import Artwork from "./Artwork";
import PlayButton from "./PlayButton";
import TrackInfo from "./TrackInfo";

export default function Song(props) {

    return (
        <section className="song-item">
            <aside>
                <Artwork src={props.song["im:image"][2].label} />
                <PlayButton src={props.song.link[1].attributes.href} index={props.index} />
            </aside>
            <TrackInfo song={props.song} />
            <p className="chart-position">{props.index + 1}</p>
        </section>
    )
}