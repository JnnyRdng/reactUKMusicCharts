import React, { Component } from "react";
import SongList from "../components/SongList";
import "./MusicChart.css";

export default class MusicChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
        fetch(url).then(res => res.json()).then(data => this.setState({ songs: data.feed.entry }));
    }

    render() {
        return (
            <div id="chart">
                <SongList songs={this.state.songs} />
            </div>
        )
    }
}