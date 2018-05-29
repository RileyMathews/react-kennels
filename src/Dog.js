import React, { Component } from 'react';

class Dog extends Component {



    render() {
        return (
            <article>
                <h2>{this.props.name}</h2>
            </article>
        )
    }
}

export default Dog