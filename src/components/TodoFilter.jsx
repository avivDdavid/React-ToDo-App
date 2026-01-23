function TodoFilter({ filter, setFilter, activeCount, onClearCompleted, hasCompleted }) {
  return (
    <div className="filter-section">
      <span className="filter-counter">{activeCount} task{activeCount !== 1 ? 's' : ''} left</span>
      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>
      {hasCompleted && (
        <button
          className="btn-clear"
          onClick={onClearCompleted}
        >
          Clear Done
        </button>
      )}
    </div>
  )
}

export default TodoFilter
