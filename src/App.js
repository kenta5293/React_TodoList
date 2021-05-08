import React, { Component } from 'react';
import './App.css';
import TodoTemplate from './Components/TodoTemplate';
import Form from './Components/Form';
import TodoItemList from './Components/TodoItemList';
import Palette from './Components/Palette';

const colors = ['#f6e25d', '#343a40', '#f03e3e', '#12b886', '#229ae6'];

class App extends Component {
  id = 1;

  state = {
    input: '',
    todos: [],
    color: '#343a40',
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '', // 인풋을 비우고
      // concat을 이용하여 배열에 추가
      // concat 함수는 배열을 합칠 수 있다.
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    })
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 일 경우 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id를 가지고 몇번째 아이템인지 찾음.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    })
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;

    return (
      <div className="App">
        <TodoTemplate form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        } palette={<Palette colors={colors} selected={color} onSelect={handleSelectColor} />}>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        </TodoTemplate>
      </div>
    )
  };
}

export default App;
