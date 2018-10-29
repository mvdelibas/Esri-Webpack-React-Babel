
export class Coordinate {
    constructor(mapView, handleMove) {
        this.mapView = mapView;
        this.handleMove = handleMove;
    }

    handlePointerMove() {
        this.mapView.when(() => {
            this.mapView.on("pointer-move", (evt) => {
                let point = this.mapView.toMap({ x: evt.x, y: evt.y });
                // let mp = webMercatorUtils.webMercatorToGeographic(point);

                console.log(point);

                this.handleMove(point);
            });
        });
    }
}