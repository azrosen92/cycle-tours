import * as React from "react";

import { GoogleApiWrapper, Map, Polyline } from "google-maps-react";

class ResultPreviewMap extends React.Component<any, any> {
  public render() {
    const triangleCoords = this.polyLineToCoords();

    return (
      <Map google={this.props.google} zoom={14}>
        <Polyline
          paths={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
        />
      </Map>
    );
  }

  private polyLineToCoords(): Array<{ lat: number; lng: number }> {
    return polyline
      .decode(this.props.previewpolyline)
      .map((latValue: number, lngValue: number) => {
        return { lat: latValue, lng: lngValue };
      });
  }
}

const YOUR_GOOGLE_API_KEY_GOES_HERE = "";
export default GoogleApiWrapper({
  apiKey: YOUR_GOOGLE_API_KEY_GOES_HERE
})(ResultPreviewMap);
