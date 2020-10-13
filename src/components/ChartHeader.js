import React from "react";
import FeedSelector from "./FeedSelector";
import "./ChartHeader.css";

export default function ChartHeader(props) {

    return (
        <header id="chart-header">
            <h1>UK Top {props.length} Songs</h1>
            <FeedSelector fetch={props.fetch} />
        </header>
    )
}