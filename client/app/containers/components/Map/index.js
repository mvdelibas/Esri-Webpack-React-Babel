import React from 'react';

import { createMap } from '../../../Utils/MapUtils';
import { createMapView } from '../../../Utils/MapVievUtils';
import { Coordinate } from '../../../Utils/ShowCoordinate';

import './index.scss';

class EsriMap extends React.Component {

  componentDidMount() {
    const { mapid, handleMove, center, zoom } = this.props;
    const map = createMap;
    const mapView = createMapView(mapid, map, center, zoom);

    new Coordinate(mapView, handleMove).handlePointerMove();
    
  }

  render() {

    return (
      <div id={this.props.mapid} />
    );

  }
}

export default EsriMap;

