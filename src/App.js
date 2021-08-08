import "./App.css";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      age: "",
      Email: "",
      sanjai: "",
      kumar: "",
      my: "",
      area: "",
      village: "",
    };
  }
  changeHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  onCreateName = () => {
    console.log(this.state.value);
  };
  render() {
    return (
      <div>
        <html lang='en'>
          <head>
            <title>Document</title>
          </head>
          <body>
            <div>
              <div>
                <h1 class='one'>Survey form</h1>
                <p class='two'>Let us know how we can improve FreeCodeCamp</p>
              </div>
              <div class='three'>
                <form action=''>
                  <p>
                    <label htmlFor=''>
                      Name :
                      <input
                        type='text'
                        name='Name'
                        value={this.state.Name}
                        onChange={this.changeHandler}
                      />
                    </label>
                  </p>
                  <p class='four'>
                    <label htmlFor=''>
                      age :
                      <input
                        type='text'
                        name='age'
                        value={this.state.age}
                        onChange={this.changeHandler}
                      />
                    </label>
                  </p>
                  <p>
                    <label htmlFor=''>
                      Email :
                      <input
                        type='text'
                        name='Email'
                        value={this.state.Email}
                        onChange={this.changeHandler}
                      />
                    </label>
                  </p>
                </form>
              </div>
              <div>
                <form action=''>
                  <p class='five'>
                    <label htmlFor=''>
                      Which option best describes your current role :
                      <input
                        type='text'
                        name='sanjai'
                        value={this.state.sanjai}
                        onChange={this.changeHandler}
                      />
                    </label>
                    <br />
                  </p>{" "}
                  <p class='six'>
                    <label htmlFor=''>
                      how likely is that you could recomended FreeCodeCamp to a
                      friend
                      <input
                        type='checkbox'
                        name='kumar'
                        value={this.state.kumar}
                        onChange={this.changeHandler}
                      />
                      definitly
                    </label>
                    <br />
                    <p class='seven'>
                      <label htmlFor=''>
                        <input
                          type='checkbox'
                          name='my'
                          value={this.state.my}
                          onChange={this.changeHandler}
                        />
                        Maybe
                      </label>

                      <br />
                      <label htmlFor=''>
                        <input
                          type='checkbox'
                          name='area'
                          value={this.state.area}
                          onChange={this.changeHandler}
                        />
                        Not sure
                      </label>
                    </p>
                  </p>
                  <p class='eight'>
                    <label htmlFor=''>
                      what do you like most inn Fcc :
                      <input type='text' name='village' id='' />
                    </label>
                  </p>
                  <p class='nin'>
                    <label htmlFor=''>
                      things that should be improved in the future :
                      <input type='checkbox' />
                      frount-end projects
                    </label>
                    <p class='ten'>
                      <label htmlFor=''>
                        <input type='checkbox' />
                        back-end projects
                      </label>
                      <br />
                      <label htmlFor=''>
                        <input type='checkbox' />
                        data visualization
                      </label>
                    </p>
                  </p>
                </form>
                <button onClick={this.onCreateName}>submit</button>
              </div>
            </div>
          </body>
        </html>
      </div>
    );
  }
}

export default App;

// function App() {

//   return (

// export default App;
