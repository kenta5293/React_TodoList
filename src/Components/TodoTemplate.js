import React from 'react';
import './TodoTemplate.scss';

const TodoListTemplate = ({ palette, form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="palette-wrapper">
        {palette}
      </div>
      <div className="title">
        To-do List
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        {children}
      </section>
    </main>
  );
};

export default TodoListTemplate;