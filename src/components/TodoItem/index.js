import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  state = {editing: false, updatedTitle: ''}

  onClickDeleteTodo = () => {
    const {todoDetails, ondeleteTodo} = this.props
    ondeleteTodo(todoDetails.id)
  }

  onChangeActivityStatus = () => {
    const {todoDetails, onToggleCompleted} = this.props
    onToggleCompleted(todoDetails.id)
  }

  onClickEditBtn = () => {
    const {todoDetails} = this.props
    this.setState(prevState => ({
      editing: !prevState.editing,
      updatedTitle: todoDetails.title,
    }))
  }

  onClickSaveBtn = () => {
    const {todoDetails,onUpdateTitle} = this.props
    const {updatedTitle} = this.state
    this.setState(prevState => ({editing: !prevState.editing}))
    onUpdateTitle(updatedTitle,todoDetails.id)
  }

  onChangeTitleText = event => {
    this.setState({updatedTitle: event.target.value})
  }

  render() {
    const {todoDetails} = this.props
    const {completed} = todoDetails
    const {updatedTitle, editing} = this.state

    console.log(updatedTitle)
    const textEffects = completed ? 'text-effects' : ''
    return (
      <>
        {editing ? (
          <li className="list-item">
            <input
              type="text"
              className="editsble-input"
              value={updatedTitle}
              onChange={this.onChangeTitleText}
            />
            <button
              type="button"
              className="save-btn"
              onClick={this.onClickSaveBtn}
            >
              Save
            </button>
          </li>
        ) : (
          <li className="list-item">
            <div className="check-box-title-text-container">
              <input
                type="checkbox"
                checked={completed}
                onChange={this.onChangeActivityStatus}
              />
              <p className={`content ${textEffects}`}>{todoDetails.title}</p>
            </div>
            <div className="edit-btn-del-btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={this.onClickEditBtn}
              >
                Edit
              </button>
              <button
                type="button"
                className="delete-button"
                onClick={this.onClickDeleteTodo}
              >
                Delete
              </button>
            </div>
          </li>
        )}
      </>
    )
  }
}

export default TodoItem
