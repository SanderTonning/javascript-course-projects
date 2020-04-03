// Read existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    
    return todosJSON ? JSON.parse(todosJSON) : []
}

// Save the todo to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove a todo from the list
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo 
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if(todo) {
        todo.completed = !todo.completed
    }
}

// Render application todos based on filters
    const renderTodos = (todos, filters) => {
        let filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))

        filteredTodos = filteredTodos.filter((todo) => filters.hideCompleted ? !todo.completed : true)

        const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

        document.querySelector('#todos').innerHTML = ''
        document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
      
        filteredTodos.forEach((todo) => {
            document.querySelector('#todos').appendChild(generateTodoDOM(todo))
        }) 
    }

// Generate the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const todoText = document.createElement('span')
    const checkbox = document.createElement('input')
    const removeButton = document.createElement('button')

    //setup the todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', (e) => {
        toggleTodo(todo.id) 
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // Setup the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', (e) => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2') 
    summary.textContent = `You have ${incompleteTodos.length } todos left`
    return summary
}

