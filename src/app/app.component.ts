import { Component } from '@angular/core';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'to-do-app';

  currentTime: string;
  todoInput: string;
  selectAllCheckbox: boolean;
  todos: Todo[];

  constructor() {
    this.currentTime = '';
    this.todoInput = '';
    this.selectAllCheckbox = false;
    this.todos = [];
  }

  ngOnInit() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
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
    }
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
      alert("Task deleted!!");
    }
  }

  toggleTodoCompletion(todo: Todo) {
    todo.completed = !todo.completed ? false : true;
  }

  updateTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours().toString();
    let minutes = currentDate.getMinutes().toString();
    let seconds = currentDate.getSeconds().toString();

    hours = (hours.length < 2 ? '0' : '') + hours;
    minutes = (minutes.length < 2 ? '0' : '') + minutes;
    seconds = (seconds.length < 2 ? '0' : '') + seconds;

    this.currentTime = `${hours}:${minutes}:${seconds}`;
  }
}