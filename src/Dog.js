import React, { Component } from 'react';

class Dog extends Component {
    state = {
        id: 0,
        ownerId: 0,
        locationId: 0,
        name: "Scout",
    }


    render() {
        return (
            <article>
                <h2>{this.state.name}</h2>
            </article>
        )
    }
}

export default Dog