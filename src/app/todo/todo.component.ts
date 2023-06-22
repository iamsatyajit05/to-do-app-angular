import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  todoInput: string;
  selectAllCheckbox: boolean;
  todos: Todo[];

  constructor() {
    this.todoInput = '';
    this.selectAllCheckbox = false;
    this.todos = [];
  }

  ngOnInit() {
    this.loadTodosFromSession();
  }

  addTodo() {
    const inputValue = this.todoInput.trim();

    if (inputValue !== '') {
      const newTodo: Todo = {
        text: inputValue,
        completed: false
      };

      this.todos.push(newTodo);
      this.todoInput = '';

      this.saveTodosToSession();
    }
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.saveTodosToSession();
      alert("Task deleted!!");
    }
  }

  toggleTodoCompletion(todo: Todo) {
    todo.completed = !todo.completed ? false : true;
    this.saveTodosToSession();
  }

  saveTodosToSession() {
    sessionStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadTodosFromSession() {
    const savedTodos = sessionStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }
}
