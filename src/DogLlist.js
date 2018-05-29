import React, { Component } from 'react';
import Dog from "./Dog"

class DogList extends Component {
    state = {
        dogs: []
    }

    componentDidMount() {
        fetch("http://localhost:8088/dogs")
        .then(r => r.json())

        .then(response => {
            this.setState({
                dogs: response
            })
        })
    }


    render() {
        return (
            <div className="">
                {
                    this.state.dogs.filter(dog => {
                        return dog.locationId === this.props.locationId
                    })
                    .map(dog => (
                        <Dog name={dog.name} key={dog.id} />
                    ))
                }
            </div>
        )
    }
}

export default DogList