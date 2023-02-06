import { observer } from "mobx-react-lite"
const ToDoItem = observer(({ todo }) => {
  const renameToDo = () => {
    todo.text = prompt("Change your todo", todo.text) || todo.text
  }
  return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => (todo.completed = !todo.completed)}
        />
        {todo.completed ? (
          <span style={{ textDecoration: "line-through" }}>{todo.text}</span>
        ) : (
          <span onDoubleClick={renameToDo}>{todo.text}</span>
        )}
      </li>
    </div>
  )
})
export default ToDoItem
