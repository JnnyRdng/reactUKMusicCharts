import React from "react";
import "./PlayButton.css";

export default function PlayButton(props) {

    function pause(event) {
        const audio = document.querySelector("#audio" + props.index);
        if (audio.paused) {
            const allSongs = document.querySelectorAll("audio");
            const allPlayButtons = document.querySelectorAll(".play-button");
            for (let song of allSongs) {
                song.pause();
            };
            for (let button of allPlayButtons) {
                button.textContent = "▶️";
            };
            audio.currentTime = 0;
            audio.play();
            event.target.textContent = "■";
        } else {
            audio.pause();
            event.target.textContent = "▶️";
        }

    }

    return (
        <div>
            <div className="play-button" onClick={pause}>▶️</div>
            <audio id={"audio" + props.index}>
                <source src={props.src} type="audio/mpeg"></source>
            </audio>
        </div>
    )
}