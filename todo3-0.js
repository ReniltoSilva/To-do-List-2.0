const mainContainer = document.querySelector('.mainContainer')
const form = document.querySelector('.formContainer')
const input = document.querySelector('.inputContainer')
const deleteBtn = document.createElement('button')
let completed;
const todaysDate = new Date().getDay()
let priority;

form.addEventListener('submit', (e) => {

    e.preventDefault()

    const task = new Task(`id`,`${input.value}`,`${deleteBtn}`,`${completed}`,`${priority}`,`${todaysDate}`)

    console.log(task)

    input.value = ''
})


// Todo List with Function Constructor
function Task(id, text, deleteBtn, completed = false, priority = 'low', date = new Date()){
        this.id = id
        this.text = text
        this.deleteBtn = deleteBtn
        this.completed = completed
        this.date = date
        this.priority = priority
}

Task.prototype.removeTask = function(){

}

Task.prototype.addTask = function(){

}

Task.prototype.markComplete = function(){

}

const newTask = new Task(`,${input.value}`)








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


    