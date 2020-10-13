import React from "react";

export default function FeedSelector(props) {

    function handleSelect(event) {
        props.fetch(event.target.value);
    }

    return (
        <div>
            <label htmlFor="select-limit">See the top: </label>
            <select id="select-limit" onChange={handleSelect} defaultValue="10">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
        </div >
    )
}