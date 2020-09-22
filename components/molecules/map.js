import * as React from "react";
import { Component } from "react";
import MapGL, { Source, Layer } from "react-map-gl";
import { json as requestJson } from "d3-request";
import { heatmapLayer } from "./map-style";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibmRuZWlnaGJvciIsImEiOiJja2ZkbW9nNWEwMjdrMnRzaDFscW1xODZpIn0.sxWbKo2bfrpeC7C6GA_reQ"; 

function filterFeaturesByDay(featureCollection, time) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const features = featureCollection.features.filter((feature) => {
    const featureDate = new Date(feature.properties.time);
    return (
      featureDate.getFullYear() === year &&
      featureDate.getMonth() === month &&
      featureDate.getDate() === day
    );
  });
  return { type: "FeatureCollection", features };
}

export default class Map extends Component {
  constructor(props) {
    super(props);
    const current = new Date().getTime();

    this.state = {
      viewport: {
        cHeight: props.cHeight,
        latitude: 42,
        longitude: -100,
        zoom: 2.75,
        bearing: 0,
        pitch: 0,
      },
      allDay: true,
      startTime: current,
      endTime: current,
      selectedTime: current,
      earthquakes: null,
    };

    this._handleChangeDay = this._handleChangeDay.bind(this);
    this._handleChangeAllDay = this._handleChangeAllDay.bind(this);
  }

  componentDidMount() {
    requestJson(
      "https://static-content.vercel.app/geodata/citystatetransformed.json",
      (error, response) => {
        if (!error) {
          // Note: In a real application you would do a validation of JSON data before doing anything with it,
          // but for demonstration purposes we ingore this part here and just trying to select needed data...
          const features = response.features;
          const endTime = features[0].properties.time;
          const startTime = features[features.length - 1].properties.time;

          this.setState({
            data: response,
            earthquakes: response,
            endTime,
            startTime,
            selectedTime: endTime,
          });
        }
      }
    );
  }

  _onViewportChange = (viewport) => this.setState({ viewport });

  _handleChangeDay = (time) => {
    this.setState({ selectedTime: time });
    if (this.state.earthquakes) {
      this.setState({
        data: filterFeaturesByDay(this.state.earthquakes, time),
      });
    }
  };

  _handleChangeAllDay = (allDay) => {
    this.setState({ allDay });
    if (this.state.earthquakes) {
      this.setState({
        data: allDay
          ? this.state.earthquakes
          : filterFeaturesByDay(
              this.state.earthquakes,
              this.state.selectedTime
            ),
      });
    }
  };

  render() {
    const {
      viewport,
      data,
      allDay,
      selectedTime,
      startTime,
      endTime,
    } = this.state;
    console.log(viewport)
    return (
      <div>
        <MapGL
          {...viewport}
          width="100%"
          height={viewport.cHeight}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          {data && (
            <Source type="geojson" data={data}>
              <Layer {...heatmapLayer} />
            </Source>
          )}
        </MapGL>
      </div>
    );
  }
}
