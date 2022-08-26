import React from "react";

export default class App extends React.Component {
  state = {
    num: 0
  };

  Start = () => {
    const interval = setInterval(() => {
      this.setState({
        num: this.state.num + 1
      });
    }, 1000);

    this.Stop = () => {
      clearInterval(interval);
    };
  };

  ReStart = () => {
    this.setState({
      num: 0
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.num}</h1>
        <button
          onClick={() => {
            this.Start();
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            this.ReStart();
          }}
        >
          Restart
        </button>
        <button
          onClick={() => {
            this.Stop();
          }}
        >
          Stop
        </button>
      </>
    );
  }
}
