import * as React from "react";
import "./App.css";
import ResultPreviewMap from "./components/ResultPreviewMap";

// interface IRideResult {
//   rideName: string;
//   rideLength: number;
//   rideDescription: string;
//   id: number;
// }

// interface IAppState {
//   rideResults: IRideResult[][];
// }

class App extends React.Component<any, any> {
  public state = {
    rideResults: [
      {
        rideName: "Super Cool Ride through the mountains",
        rideLength: 200,
        rideDescription:
          "The best ride through the mountains you'll ever see, you can tell of your friends that you went on this totally awesome ride",
        id: 0,
        map: {
          previewPolyline:
            "ki{eFvqfiVsBmA`Feh@qg@iX`B}JeCcCqGjIq~@kf@cM{KeHeX`@_GdGkSeBiXtB}YuEkPwFyDeAzAe@pC~DfGc@bIOsGmCcEiD~@oBuEkFhBcBmDiEfAVuDiAuD}NnDaNiIlCyDD_CtJKv@wGhD]YyEzBo@g@uKxGmHpCGtEtI~AuLrHkAcAaIvEgH_EaDR_FpBuBg@sNxHqEtHgLoTpIiCzKNr[sB|Es\\`JyObYeMbGsMnPsAfDxAnD}DBu@bCx@{BbEEyAoD`AmChNoQzMoGhOwX|[yIzBeFKg[zAkIdU_LiHxK}HzEh@vM_BtBg@xGzDbCcF~GhArHaIfByAhLsDiJuC?_HbHd@nL_Cz@ZnEkDDy@hHwJLiCbIrNrIvN_EfAjDWlEnEiAfBxDlFkBfBtEfDaAzBvDKdFx@|@XgJmDsHhAgD`GfElEzOwBnYdBxXgGlSc@bGdHpW|HdJztBnhAgFxc@HnCvBdA"
        }
      }
    ]
  };

  public render() {
    const { rideResults } = this.state;

    return (
      <div>
        <div>Search Routes</div>
        <form>
          <input type="text" placeholder="Search for a country" />
        </form>

        <div>Search Results</div>
        <div className="searchResultsContainer">
          {rideResults.map(rideResult => {
            const {
              rideName,
              rideLength,
              rideDescription,
              id,
              map
            } = rideResult;
            const { previewPolyline } = map;

            return (
              <div className="searchResultRow" key={id}>
                <div className="rowTitle">
                  {rideName}{" "}
                  <span className="rowSubtitle">{`${rideLength} km`}</span>
                </div>
                <div className="rowDescription">{rideDescription}</div>
                <ResultPreviewMap polyline={previewPolyline} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
