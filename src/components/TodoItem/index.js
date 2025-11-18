import './index.css'

const TodoItem = props => {
  const {todoDetails, ondeleteTodo} = props
  const {title, id} = todoDetails
  const onClickDeleteTodo = () => {
    ondeleteTodo(id)
  }
  return (
    <li className="list-item">
      <p className="content">{title}</p>
      <button className="delete-button" onClick={onClickDeleteTodo}>
        {' '}
        Delete
      </button>
    </li>
  )
}

export default TodoItem
