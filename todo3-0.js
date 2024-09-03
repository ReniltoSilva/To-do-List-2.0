const mainContainer = document.querySelector('.mainContainer')
const form = document.querySelector('.formContainer')
const input = document.querySelector('.inputContainer')
const ulContainer = document.querySelector('.generalTaskContainer')





const deleteBtn = document.createElement('button')
let completed;
let taskID = 0
let priority = 'Low'


form.addEventListener('submit', (e) => {
    e.preventDefault()


    const taskContainer = document.createElement('li')
    taskContainer.classList.add('taskContainer')


    const task = new Task(`${taskID}`,`${input.value}`, true, false,`${priority}`)
    

    taskContainer.innerHTML = `<p class="textContainerJS">${input.value}</p>
                                <span>${priority}</span>
                                <input type="checkbox"/>
                                <button>Delete</button>`

    console.log(task)
    ulContainer.appendChild(taskContainer)

    taskID++
    input.value = ''
})





// Todo List with Function Constructor
class Task {
    constructor(id, text, deleteBtn = true, completed = false, priority = 'low') {
        this.id = id;
        this.text = text;
        this.deleteBtn = deleteBtn;
        this.completed = completed;
        this.priority = priority;   
    }

        removeTask() {  

        }

        markComplete() {

        }

        markPriority() {

        }
}

const task = new Task('1', 'Comprar carne', true, false, 'low')


// form.addEventListener('submit', (e) => {

//     e.preventDefault()

//     let textInput = input.value;
//     const btnDelete = `<button>Delete</button>`

//     let obj1 = new Task(textInput, btnDelete)

//     arrayTasks.push(obj1)

//     let taskContainer = document.createElement('div')
//         taskContainer.classList.add('taskContainer')

//    
















        

                                               
                                                
       
                    
                    





    