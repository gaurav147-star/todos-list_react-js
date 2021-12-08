import './App.css';
import TodoList from './components/TodoList'

function App() {
  return (

    <div className="container">
      
      <div className="head">
        <h1><a rel="noreferrer" href="https://github.com/gaurav147-star/todos-list_react-js" target="_blank"> Todos App</a></h1>
       
      </div>
      <div className='todo-app'>

        <TodoList />
      </div>
    </div>
  );
}

export default App;
