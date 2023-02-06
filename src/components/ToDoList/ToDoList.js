import ToDoItem from "../ToDoItem/ToDoItem"
import { observer } from "mobx-react"
const ToDoList = observer(({ store }) => {
  const addNewTodo = () => {
    let text = prompt()
    if (text) {
      store.add(text)
    }
  }
  return (
    <div>
      <h1>ToDoList</h1>
      <button onClick={addNewTodo}>Add</button>
      <p>
        {store.completedTasks}/{store.todos.length}
      </p>
      {store.todos.map((todo) => {
        return <ToDoItem key={todo.id} todo={todo} />
      })}
    </div>
  )
})
export default ToDoList
