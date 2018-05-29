import React, { Component } from 'react';
import Location from "./Location"

class LocationList extends Component {
    state = {
        locations: []
    }

    componentDidMount() {
        fetch("http://localhost:8088/locations")
        .then(r => r.json())

        .then(response => {
            this.setState({
                locations: response
            })
        })
    }


    render() {
        return (
            <div className="content">
                {this.state.locations.map(location => (
                    <Location 
                        locationId={location.id}
                        key={location.id}
                        name={location.name}
                        address={location.address}
                    />
                ))}
            </div>
        )
    }
}

export default LocationList