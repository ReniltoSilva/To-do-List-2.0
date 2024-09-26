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

const obj = new Task('1', 'Comprar carne', true, false, 'Low')









// form.addEventListener('submit', (e) => {

//     e.preventDefault()

//     let textInput = input.value;
//     const btnDelete = `<button>Delete</button>`

//     let obj1 = new Task(textInput, btnDelete)

//     arrayTasks.push(obj1)

//     let taskContainer = document.createElement('div')
//         taskContainer.classList.add('taskContainer')
//     let btnDelContainer = document.createElement('div')
//     btnDelContainer.classList.add('delBtnJsContainer')
//         taskContainer.innerText = arrayTasks[0].text
//         btnDelContainer.innerHTML = arrayTasks[0].btnDelete
//     console.log(arrayTasks)


//     taskContainer.appendChild(btnDelContainer)
//     mainContainer.appendChild(taskContainer)

//     input.value = '';

// })











    // form.addEventListener('submit', (e) => {
    //     e.preventDefault()

    //     let text = input.value



    //         if(text == ''){
    //             alert('Please, insert a task!')
    //         }else{

    //                 const taskContainer = document.createElement('div')
    //                 taskContainer.classList.add('taskContainer') 
    //                 taskContainer.innerText = text;  

    //                 taskContainer.innerHTML = `<div class="textContainerJS">${text}</div>
    //                                             <div class="checkMarkContainer">+</div>
    //                                             <div class="delBtnJsContainer">
    //                                             <button class="delBtnJS">Delete</button>
    //                                             </div>`
                                                
                                            
    //                 arrayTasks.push(text)
    //                 console.log(arrayTasks)
                       
                    
                    
    //             mainContainer.appendChild(taskContainer)
    //         }

    

    //     input.value = ''
    // })


    