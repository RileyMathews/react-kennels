import React, { Component } from 'react';

class Location extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.name}</h2>
                <h3>{this.props.address}</h3>
            </article>
        )
    }
}

export default Location