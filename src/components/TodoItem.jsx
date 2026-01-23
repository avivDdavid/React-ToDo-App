import { useState } from 'react'

function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText)
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            className="input-field edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <button
            className="btn-save"
            onClick={handleSave}
          >
            ✓
          </button>
          <button
            className="btn-cancel"
            onClick={handleCancel}
          >
            ✕
          </button>
        </>
      ) : (
        <>
          <span
            className="todo-text"
            onClick={() => onToggle(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#94a3b8' : '#334155'
            }}
          >
            {todo.text}
          </span>
          <button
            className="btn-edit"
            onClick={() => setIsEditing(true)}
          >
            ✎
          </button>
          <button
            className="btn-delete"
            onClick={() => onDelete(todo.id)}
          >
            ✕
          </button>
        </>
      )}
    </div>
  )
}

export default TodoItem
