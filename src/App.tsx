import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Slider } from "antd";

class App extends React.Component {
  state = {
    inputValueTopLeft: 0,
    inputValueTopRight: 0,
    inputValueBottomLeft: 0,
    inputValueBottomRight: 0
  };

  onChange = (value: any) => {
    this.setState({
      inputValueTopLeft: value
    });
  };
  onChangeBottom = (value: any) => {
    this.setState({
      inputValueTopRight: value
    });
  };
  onChangeLeft = (value: any) => {
    this.setState({
      inputValueBottomLeft: value
    });
  };
  onChangeRight = (value: any) => {
    this.setState({
      inputValueBottomRight: value
    });
  };

  render() {
    const {
      inputValueTopLeft,
      inputValueTopRight,
      inputValueBottomLeft,
      inputValueBottomRight
    } = this.state;

    return (
      <div>
        <div
          className="square"
          style={{
            borderTopLeftRadius: inputValueTopLeft,
            borderTopRightRadius: inputValueTopRight,
            borderBottomLeftRadius: inputValueBottomLeft,
            borderBottomRightRadius: inputValueBottomRight
          }}
        ></div>
        <Slider className="slider" defaultValue={0} onChange={this.onChange} />
        <label className="top"> TOP LEFT: </label>
        <input
          className="slider1"
          type="number"
          min={0}
          max={100}
          style={{ marginLeft: 16 }}
          value={inputValueTopLeft}
          onChange={this.onChange}
        />
        <Slider
          className="slider"
          defaultValue={0}
          onChange={this.onChangeBottom}
        />
        <label className="bottom"> TOP RIGHT: </label>
        <input
          className="slider1"
          type="number"
          min={0}
          max={100}
          style={{ marginLeft: 16 }}
          value={inputValueTopRight}
          onChange={this.onChange}
        />
        <Slider
          className="slider"
          defaultValue={0}
          onChange={this.onChangeLeft}
        />
        <label className="left"> BOTTOM LEFT: </label>
        <input
          className="slider1"
          type="number"
          min={0}
          max={100}
          style={{ marginLeft: 16 }}
          value={inputValueBottomLeft}
          onChange={this.onChange}
        />
        <Slider
          className="slider"
          defaultValue={0}
          onChange={this.onChangeRight}
        />
        <label className="right"> BOTTOM RIGHT: </label>
        <input
          className="slider1"
          type="number"
          min={0}
          max={100}
          style={{ marginLeft: 16 }}
          value={inputValueBottomRight}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default App;
