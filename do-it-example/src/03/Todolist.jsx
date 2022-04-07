import React, { Component } from 'react';

class Todolist extends Component {
  render() {
    const todolist = [
      { taskName: '빨래', finished: false },
      { taskName: '공부', finished: false },
    ];
    return (
      <div>
        {todolist.map(todo => (
          <div key={todo.taskName}>{todo.taskName}</div>
        ))}
      </div>
    );
  }
}

export default Todolist;
