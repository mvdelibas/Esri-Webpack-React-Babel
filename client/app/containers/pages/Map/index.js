import React, { Component } from 'react';

import EsriMap from '../../components/Map';

import './index.scss';

const Coordinates = props => <span id="coorSpan">X: { props.lat } Y: { props.long }</span>

class MapPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: 15,
            long: 45
        };
    }

    handleMove(center) {
        this.setState({ lat: center.latitude.toFixed(3), long: center.longitude.toFixed(3)});
    }

    render() {

        const { lat, long } = this.state;

        return (
            <div>
                <Coordinates lat={lat} long={long} />
                <EsriMap mapid="myEsriMap" center={[15, 45]} zoom={4} handleMove={center => this.handleMove(center) } />
            </div>
        );
    }
}

export default MapPage;