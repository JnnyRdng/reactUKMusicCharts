import React, { Fragment } from "react";
import Song from "./Song";

export default function SongList(props) {

    const songNodes = props.songs.map(song => {
        return (
            <Song song={song} />
        )
    });

    return (
        <Fragment>
            { songNodes}
        </Fragment>
    )
}