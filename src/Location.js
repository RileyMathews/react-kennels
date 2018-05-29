import React, { Component } from 'react';
import Doglist from "./DogLlist"
import "./styles/Location.css"

class Location extends Component {
    render() {
        return (
            <article className="box">
                <h2>{this.props.name}</h2>
                <h3>{this.props.address}</h3>
                <Doglist
                    locationId={this.props.locationId}
                />
            </article>
        )
    }
}

export default Location