import React, { Component } from 'react';

class Owner extends Component {
    state = {
        id: 0,
        name: "Mark Brownlee",
        phone: "555-1212",
        address: "8088 API Way"
    }


    render() {
        return (
            <article>
                <h2>{this.state.name}</h2>
                <h3>{this.state.phone}</h3>
                <h3>{this.state.address}</h3>
            </article>
        )
    }
}

export default Owner