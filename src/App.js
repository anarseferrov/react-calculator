import React from "react";
import "./App.css";
import KeyPadComponent from "./components/KeyPadComponent";
import ResultComponent from "./components/ResultComponent";

class App extends React.Component {
  state = {
    result: "",
  };
  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + "",
      });
    } catch {
      this.setState({
        result: "ERROR",
      });
    }
  };
  reset = () => {
    this.setState({
      result: "",
    });
  };
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };
  render() {
    return (
      <div className="container">
      <nav>React Simple Calculator</nav>
        <div className="calc-body">
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
