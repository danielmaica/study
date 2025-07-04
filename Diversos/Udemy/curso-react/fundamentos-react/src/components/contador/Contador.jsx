import './Contador.css'
import React, { Component } from "react";

import Display from "./Display";
import Buttons from "./Buttons";
import StepForm from "./StepForm";

class Contador extends Component {
  state = {
    number: this.props.iniNum || 0,
    step: this.props.iniStep || 1,
  };

  inc = () => {
    this.setState({
      number: this.state.number + this.state.step,
    });
  };

  dec = () => {
    this.setState({
      number: this.state.number - this.state.step,
    });
  };

  setStep = (newStep) => {
    this.setState({
      step: newStep,
    });
  };

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <Display number={this.state.number} />
        <StepForm step={this.state.step} setStep={this.setStep} />
        <Buttons setDec={this.dec} setInc={this.inc} />
      </div>
    );
  }
}

export default Contador;
