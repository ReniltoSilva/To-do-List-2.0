const addNewListBTN = document.querySelector('.addNewList')
const mainListsContainer = document.querySelector('#mainListsContainer')
const mainContainer = document.querySelector('.mainContainer')
const form = document.querySelector('.formContainer')
const input = document.querySelector('.inputContainer')
const ulContainer = document.querySelector('.generalTaskContainer')

// document.addEventListener('DOMContentLoaded', loadFromLS)

const mainArrayLists = []

const arrayList = []

//CREATE NEW LIST INSIDE "mainListsContainer"
addNewListBTN.addEventListener('click', addNewList)

function addNewList(){

    //CREATE ELEMENTS
    const mainContainer = document.createElement('div')
        const titleListContainer = document.createElement('h1')
        const formGeneralContainer = document.createElement('div')
            const formInputContainer = document.createElement('form')
                const inputContainer = document.createElement('input')
        const ulContainer = document.createElement('ul')
            // const liJS = document.createElement('li')
            //     const spanJS = document.createElement('span')
            //     const delBtnContainer = document.createElement('div');
            //         const delBtn = document.createElement('delBtnJS')
    
    //ADD CLASSES
    mainContainer.classList.add('mainContainer')
        titleListContainer.classList.add('titleListContainer')
            titleListContainer.setAttribute('contenteditable', 'true')
            titleListContainer.textContent = 'Todo List'

        formGeneralContainer.classList.add('formGeneralContainer')
            formInputContainer.classList.add('formContainer')
            formInputContainer.addEventListener('submit', (e) => {
                e.preventDefault()

                if(inputContainer.value == ''){
                    alert('Please, add a task!')
                }else{

                    addTask(inputContainer.value)
                }

                inputContainer.value = ''
            })
                inputContainer.classList.add('inputContainer')
                inputContainer.setAttribute('placeholder', 'Add a task')

        ulContainer.classList.add('generalTaskContainer')
            // liJS.classList.add('taskContainer')
            // spanJS.classList.add('textContainerJS')
            //     delBtnContainer.classList.add('delBtnJsContainer');


        
    //APPEND ELEMENTS       
    mainListsContainer.appendChild(mainContainer)
        mainContainer.append(titleListContainer, formGeneralContainer, ulContainer)
            formGeneralContainer.appendChild(formInputContainer)
                formInputContainer.appendChild(inputContainer)
            // ulContainer.appendChild(liJS)
                // liJS.append(spanJS, delBtnContainer)
                //     delBtnContainer.appendChild(delBtn)

    console.log('New list added to "mainArrayLists" and saved to Local Storage.')

}


//CREATE AND ADD TASKS TO LOCAL STORAGE
function addTask(task){

console.log(task)

}














// //CREATE AND ADD TASKS TO LOCAL STORAGE
// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     if(input.value == ''){
//         alert('Please, insert a task!')
//     }else{
//         const savedArray = JSON.parse(localStorage.getItem('Todo List 3.0'))
//         if(savedArray == null || savedArray == []){

//             arrayList.push({
//                 tasks: input.value,
//                 taskID: (Math.random()*1000*1000).toFixed(0),
//                 done: false
//                 })

//             console.log('List created in Local Storage')

//             saveLS(arrayList)
//         }else{
//             const savedArray = JSON.parse(localStorage.getItem('Todo List 3.0'))
//             const secondArray = [...savedArray]
//             secondArray.push({
//                 tasks: input.value,
//                 taskID: (Math.random()*1000*1000).toFixed(0),
//                 done: false
//             })

//             console.log('List updated in Local Storage')
//             saveLS(secondArray)
//         }
        
//         input.value = ''
//     }
// })


// //MARK TASKS AS DONE
// function taskDone(taskID, taskDone, spanJS, index){
//     const savedArray = JSON.parse(localStorage.getItem('Todo List 3.0'))

//     savedArray[index].done = !savedArray[index].done //STOPPED HERE, WE MADE THE BOOLEAN TO TOGGLE XD

//     saveLS(savedArray)

//     console.log(taskID)
//     console.log(taskDone)
//     console.log(spanJS)

// }


// //DELETE TASKS
// function removeTask(taskID){
    
//     const savedArray = JSON.parse(localStorage.getItem('Todo List 3.0'))

//     const newArray = savedArray.filter((item) => item.taskID != taskID)

//     saveLS(newArray)
// }


// //SAVE TO LOCAL STORAGE
// function saveLS(array){
//     localStorage.setItem('Todo List 3.0', JSON.stringify(array))

//     loadFromLS()
// }

// //SAVE EDITED CONTENT
// function saveEditedContent(editedTask){
//    console.log(editedTask)

// }

// //LOAD FROM LOCAL STORAGE
// function loadFromLS() {
//     ulContainer.innerHTML = ''; // Clear the container before loading tasks

//     const arrayLocalStorage = JSON.parse(localStorage.getItem('Todo List 3.0')) || [];

//     arrayLocalStorage.forEach((item, index) => {
//         const liJS = document.createElement('li');
//         liJS.classList.add('taskContainer');

//         const spanJS = document.createElement('span');
//         spanJS.classList.add('textContainerJS');
//         spanJS.contentEditable = "true";
//         spanJS.textContent = item.tasks;
//         spanJS.addEventListener('contextmenu', e => { //(e) this is a parameter that represents the event, 
//             e.preventDefault()                        // if you only have one parameter you can omit the parenthesis.
//             taskDone(item.taskID, item.done, spanJS, index)
//         })
        
//         console.log(index)
//         console.log(arrayLocalStorage[index])
//         console.log(arrayLocalStorage[index].tasks)
//         // Listen for edits and save instantly
//         spanJS.addEventListener("input", () => {
//             arrayLocalStorage[index].tasks = spanJS.textContent;
//             localStorage.setItem("Todo List 3.0", JSON.stringify(arrayLocalStorage));
//         });

//         const delBtn = document.createElement('button');
//         delBtn.classList.add('delBtnJS');
//         delBtn.textContent = "Delete";
//         delBtn.addEventListener("click", () => removeTask(item.taskID));

//         const delBtnContainer = document.createElement('div');
//         delBtnContainer.classList.add('delBtnJsContainer');
//         delBtnContainer.appendChild(delBtn);

//         liJS.appendChild(spanJS);
//         liJS.appendChild(delBtnContainer);
//         ulContainer.append(liJS);
//     });
// }


