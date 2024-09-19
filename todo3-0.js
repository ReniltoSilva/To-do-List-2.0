const mainContainer = document.querySelector('.mainContainer')
const form = document.querySelector('.formContainer')
const input = document.querySelector('.inputContainer')



let arrayTasks = []

//Todo List with normal array
form.addEventListener('submit', (e) =>{

    e.preventDefault()

    let inputValue = input.value;


    if(inputValue === ''){
            console.log('Please, insert a task')
    }else{

        let  newTask = {
                name: inputValue,
                delete: `<button>Delete</button>`
            }

            arrayTasks.push(newTask) 

            arrayTasks.forEach(function(element){
                
                let taskContainer = document.createElement('div')
                    taskContainer.classList.add('taskContainer')
                    taskContainer.innerText = element.name;
                
            })

            mainContainer.appendChild(taskContainer)

            console.log(arrayTasks)
    }

    input.value = ''

})
















//Todo List with Function Constructor
// function Task(text, btnDelete){
//         this.text = text
//         this.btnDelete = btnDelete
// }

// Task.prototype.removeTask = function(){

//     console.log(this.name)
// }



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


    