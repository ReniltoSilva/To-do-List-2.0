// script.js

// Todo Constructor Function
class Todo {
    constructor(id, text, priority = 'medium') {
        this.id = id;
        this.text = text;
        this.completed = false; // Default value: not completed
        this.priority = priority; // Priority can be 'low', 'medium', 'high'
    }

    // Method to toggle the completed status
    toggleCompleted() {
        this.completed = !this.completed;
    }

    // Method to update the text
    updateText(newText) {
        this.text = newText;
    }

    // Method to update the priority
    updatePriority(newPriority) {
        this.priority = newPriority;
    }
}



// Todo List Manager
class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1; // ID counter for new todos
    }

    // Add a new todo
    addTodo(text, priority) {
        const newTodo = new Todo(this.nextId++, text, priority);
        this.todos.push(newTodo);
        return newTodo;
    }

    // Remove a todo by ID
    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    // Mark a todo as completed by ID
    toggleTodoCompleted(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.toggleCompleted();
        }
    }

    // Find a todo by ID
    findTodoById(id) {
        return this.todos.find(todo => todo.id === id);
    }

    // Get all todos
    getTodos() {
        return this.todos;
    }
}



// Initialize TodoList and attach event listeners
const myTodoList = new TodoList();
const todoListElement = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const prioritySelect = document.getElementById('priority-select');
const addTodoButton = document.getElementById('add-todo');


// Function to render the todos on the UI
function renderTodos() {
    todoListElement.innerHTML = ''; // Clear the list before re-rendering

    myTodoList.getTodos().forEach(todo => {
        const todoItem = document.createElement('li');
        todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        todoItem.innerHTML = `
            <span>${todo.text} - <small>${todo.priority}</small></span>
            <div class="todo-actions">
                <button class="btn btn-complete" onclick="toggleComplete(${todo.id})">✓</button>
                <button class="btn btn-remove" onclick="removeTask(${todo.id})">✗</button>
            </div>
        `;

        todoListElement.appendChild(todoItem);
    });
}


// Add new todo when 'Add Task' button is clicked
addTodoButton.addEventListener('click', () => {
    const text = todoInput.value.trim();
    const priority = prioritySelect.value;


    if (text) {
        myTodoList.addTodo(text, priority);
        renderTodos();
        todoInput.value = ''; // Clear the input field
    }
});



// Remove a todo by ID
function removeTask(id) {
    myTodoList.removeTodo(id);
    renderTodos();
}



// Toggle the completed status of a todo by ID
function toggleComplete(id) {
    myTodoList.toggleTodoCompleted(id);
    renderTodos();
}



// Initial render
renderTodos();
