import React from "react";

import Artwork from "./Artwork";
import PlayButton from "./PlayButton";

export default function Song(props) {

    return (
        <section>
            <Artwork src={props.song["im:image"][2].label} />
            <PlayButton src={props.song.link[1].attributes.href} />
        </section>
    )
}