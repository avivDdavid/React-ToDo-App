import TodoItem from './TodoItem'

function TodoList({ todos, onDelete, onToggle, onEdit }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default TodoList
