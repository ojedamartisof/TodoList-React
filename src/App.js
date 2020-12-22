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

const getList = async (tareas) => {
  try {
    const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/ojedamartisof');
    const data = await response.json();
    setforToDo(data);

  }
  catch (error) {
    console.log(error);
  }

}

const actualizarLista = (tareas) => {
  fetch('https://assets.breatheco.de/apis/fake/todos/user/ojedamartisof', {
    method: 'PUT',
    body: JSON.stringify(tareas),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then((response) => {
      response.json()
    })
    .then((data) => {
    })
    .catch((error) => {
      console.log(error)
    })
}

return (

  <div className='row d-flex justify-content-center m-5'>
    <div className=' col-md-6 contenedor bg-info pb-5'>
      <h1>To Do</h1>
      <input type='text' className='form-control pt-4 pb-4' placeholder='What needs to be done?' onBlur={handleOnChange}></input>
      <ul className="list-group">
        {
          forToDo.map((actividad, i) => {
            return <li className="list-group-item task" key={i}>
              <div>{actividad.label}</div>
              <i id={i} className="fa fa-times" aria-hidden="true" onClick={handleDeleteTask}></i>
              </li>
          })
        }


      </ul>
    </div>
  </div>
);

export default App;

export default App;