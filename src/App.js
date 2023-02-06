import "./App.css"
import ToDoList from "./components/ToDoList/ToDoList"
import { store } from "./mobx/ToDoStore"
function App() {
  return (
    <div className="App">
      <ToDoList store={store} />
    </div>
  )
}
export default App