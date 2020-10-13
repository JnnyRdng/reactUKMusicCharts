import React from "react";
import Song from "./Song";
import "./SongList.css"

export default function SongList(props) {

    const songNodes = props.songs.map((song, i) => {
        return (
            <Song song={song} key={i} index={i} />
        )
    });

    return (
        <div id="song-list">
            { songNodes}
        </div>
    )
}