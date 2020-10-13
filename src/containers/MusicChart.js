import React, { Component } from "react";
import SongList from "../components/SongList";
import ChartHeader from "../components/ChartHeader";
import "./MusicChart.css";

export default class MusicChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
        this.fetchUrl = this.fetchUrl.bind(this);
    }

    componentDidMount() {
        this.fetchUrl();
    }

    fetchUrl(limit = 10) {
        const url = `https://itunes.apple.com/gb/rss/topsongs/limit=${limit}/json`;
        fetch(url).then(res => res.json()).then(data => this.setState({ songs: data.feed.entry }));
    }

    render() {
        return (
            <div id="chart">
                <ChartHeader length={this.state.songs.length} fetch={this.fetchUrl} />
                <SongList songs={this.state.songs} />
            </div>
        )
    }
}