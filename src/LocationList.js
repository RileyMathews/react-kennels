import React, { Component } from 'react';
import Location from "./Location"

class LocationList extends Component {
    state = {
        locations: [{
            id: 0,
            name: "Nashville North",
            phone: "555-1212",
            address: "10101 Binary Way"
        },
        {
            id: 1,
            name: "Nashville South",
            phone: "555-1212",
            address: "314 Pi Way"
        }]
    }


    render() {
        return (
            <div className="content">
                {this.state.locations.map(location => (
                    <Location 
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