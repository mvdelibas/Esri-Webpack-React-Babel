import MapView from 'esri/views/MapView';

export const createMapView = (container, map, center, zoom) => {

    return new MapView({
        container: container,
        map: map,
        center: center,
        zoom: zoom,
        ui: {
            components: [] 
          }
    });

}