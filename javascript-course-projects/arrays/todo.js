const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitceh',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: true
}, {
    text: 'Exercise',
    completed: true
}] 

const deleteTodo = (todos, todoText) => {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
 }

deleteTodo(todos, 'Buy food')


const getThingsToDo = (todos) => {
    return todos.filter(function (todo, index) {
        return !todo.completed
    })
}

const sortTodos = (todos) => {
    todos.sort(function(a,b) {
        if (a.completed < b.completed ) {
            return -1
        } else if (b.completed < a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

