import React, {  } from 'react';
import Film from "./Film"



class App extends React.Component {

  state = 
  {
   
    name: "Jacob", 
    languages: ["PHP", "C^"],
    data: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/cassetts/all')
      .then(response => response.json())
      .then(data => {
        console.log({data})
        this.setState({ data })
      }
      );
  }

  render() {
    return (
      <div>
        Hello {this.state.name}
        <p>languages: {this.state.languages[0]}</p>
        <p>And finally: </p>
        {this.state.data.map(film => <Film info = {film}/> )}
      </div>
    );
  }
}

export default App;

