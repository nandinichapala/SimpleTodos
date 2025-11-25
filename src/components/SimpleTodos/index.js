import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    completed: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    completed: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    completed: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    completed: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    completed: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    completed: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    completed: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    completed: false,
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList, titleInput: ''}

  ondeleteTodo = id => {
    const {todosList} = this.state
    const filteredList = todosList.filter(eachList => eachList.id !== id)
    this.setState({todosList: filteredList})
  }

  onClickAddNewTodo = async () => {
    const {titleInput} = this.state
    let taskTitle = titleInput

    const count = parseInt(titleInput.charAt(titleInput.length - 1))

    let countInput = 1
    if (Number.isInteger(count) && count > countInput) {
      countInput = count
      taskTitle = titleInput.slice(0, -1)
    }

    for (let i = 0; i < countInput; i++) {
      const newTodo = {
        id: uuidv4(),
        title: taskTitle,
        completed: false,
      }
      this.setState(prevState => ({
        todosList: [...prevState.todosList, newTodo],
        titleInput: '',
      }))
    }
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onToggleCompleted = id => {
    const {todosList} = this.state
    const updatedList = todosList.map(eachTodo =>
      eachTodo.id === id
        ? {...eachTodo, completed: !eachTodo.completed}
        : eachTodo,
    )
    this.setState({todosList: updatedList})
  }

  onUpdateTitle = (updatedTitle,id) => {
    const {todosList}=this.state
    const updatedList=todosList.map((each)=>{
      if (each.id===id){
        return {...each,title:updatedTitle}
      }
      return each
    }
  )
  this.setState({todosList:updatedList})
  
  }

  render() {
    const {todosList, titleInput} = this.state

    return (
      <div className="container">
        <div className="box-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="title input-add-btn-container">
            <input
              type="text"
              className="title-input"
              value={titleInput}
              onChange={this.onChangeTitleInput}
              placeholder="Add Tasks"
            />
            <button
              type="button"
              className="add-btn"
              onClick={this.onClickAddNewTodo}
            >
              Add
            </button>
          </div>
          <ul className="list-container">
            {todosList.map(eachObj => (
              <TodoItem
                todoDetails={eachObj}
                key={eachObj.id}
                ondeleteTodo={this.ondeleteTodo}
                onToggleCompleted={this.onToggleCompleted}
                onUpdateTitle={this.onUpdateTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
