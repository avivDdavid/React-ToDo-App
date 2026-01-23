import './App.css'
import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todos))
  }, [todos])

  const addTask = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const deleteTask = (id) => {
    setTodos(todos.filter(task => task.id !== id))
  }

  const toggleTask = (id) => {
    setTodos(todos.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const editTask = (id, newText) => {
    setTodos(todos.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(task => !task.completed))
  }

  const filteredTodos = filter === 'active'
    ? todos.filter(task => !task.completed)
    : filter === 'completed'
    ? todos.filter(task => task.completed)
    : todos

  const activeCount = todos.filter(task => !task.completed).length
  const completedCount = todos.filter(task => task.completed).length

  return (
    <div className="app-container">
      <h1>To-Do App</h1>
      <TodoForm onAdd={addTask} />
      <TodoFilter 
        filter={filter} 
        setFilter={setFilter} 
        activeCount={activeCount} 
        onClearCompleted={clearCompleted}
        hasCompleted={completedCount > 0}
      />
      <TodoList todos={filteredTodos} onDelete={deleteTask} onToggle={toggleTask} onEdit={editTask} />
    </div>
  )
}

export default App
