import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

const styleTop = {
  color: ' color: #e6ff99;}', //h1 style
  fontSize: "100px",
}
class App extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (

      <div className="container justify-content-center">
        <div className="row justify-content-center">
          <h1 style={styleTop}><i>Todo List</i></h1>
        </div>
        <TodoList />
      </div>
    )
  }
}

export default App;