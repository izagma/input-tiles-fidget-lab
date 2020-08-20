import React, {Component} from 'react';

class ButtonInput extends Component {
  // Add a constructor with a state
  constructor(props){
    super(props);
    this.state = {
       button: "true"
    }
  }

  // The event will be passed in automatically.
  handleChange = (event) => {
        if (this.state.button === "true") {
            this.setState({button: "false"})
        } else {
             this.setState({button: "true"})
        }
}

  // Add a render function which returns JSX
  render() {
      return(
          <li className="ButtonInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Button</div>
                <p className="card-text">
                  <div className="input btn-block">
                    <input type="button" value="Click me!" className="btn" onClick={this.handleChange}/>
                  </div>
                  <div className="output">
                    <label for="buttonOutput">State: </label>
                    <span name="buttonOutput">{this.state.button}</span>
                  </div>
                </p>
              </div>
            </div>
          </li>
      )
  }
  
}

export default ButtonInput;
