const mainListsContainer = document.querySelector('#mainListsContainer')
const newListBTN = document.querySelector('.addNewList')
newListBTN.addEventListener('click', () => {
    
    const listsFromLS = JSON.parse(localStorage.getItem('Main Array Lists'))
    
        listsFromLS.push({
            listID: (Math.random()*1000*1000).toFixed(0),
            listTitle: 'Todo List',
            tasks: []
        })
    
    localStorage.setItem('Main Array Lists', JSON.stringify(listsFromLS))

    renderLists(listsFromLS)
})  

document.addEventListener('DOMContentLoaded', checkCreatedLists)

firstList = []


//CHECK IF THERE ARE LISTS IN LS, IF NOT, CREATE THE FIRST ONE.
function checkCreatedLists(){

    const savedListsLS = JSON.parse(localStorage.getItem('Main Array Lists'))

        if(savedListsLS === null){

            firstList.push({
                listID: (Math.random()*1000*1000).toFixed(0),
                listTitle: 'Todo List',
                tasks: []
            })

            localStorage.setItem('Main Array Lists', JSON.stringify(firstList))

            renderLists(firstList)

        }else{
            renderLists(savedListsLS)
        }
}


//RENDER FIRST LIST IN THE DOM
function renderLists(arrayOfLists){

    mainListsContainer.innerHTML = ''

    arrayOfLists.forEach((list, index) => {

        //CREATE ELEMENTS
        const mainContainer = document.createElement('div')
        const titleListContainer = document.createElement('h1')
        const formGeneralContainer = document.createElement('div')
            const formInputContainer = document.createElement('form')
                const inputContainer = document.createElement('input')
        const ulContainer = document.createElement('ul')
            // const liJS = document.createElement('li')
            //         const spanJS = document.createElement('span')
            //         const delBtnContainer = document.createElement('div');
            //             const delBtn = document.createElement('delBtnJS')


        //ADD CLASSES
        mainContainer.classList.add('mainContainer')
            titleListContainer.classList.add('titleListContainer')
                titleListContainer.setAttribute('contenteditable', 'true')
                titleListContainer.textContent = `${list.listTitle}`
            formGeneralContainer.classList.add('formGeneralContainer')
                formInputContainer.classList.add('formContainer')

                //ADD AND SAVE TASKS FROM EACH LIST TO LS
                formInputContainer.addEventListener('submit', (e) => {
                    e.preventDefault()

                    if(inputContainer.value === ''){
                        alert('Please, add a task')
                    }else{
                      arrayOfLists[index].tasks.push({
                        taskID: (Math.random()*1000*1000).toFixed(0),
                        taskTitle: inputContainer.value,
                        taskDone: false  
                    })
                    }

                    localStorage.setItem('Main Array Lists', JSON.stringify(arrayOfLists))

                    renderLists(arrayOfLists)

                    inputContainer.value = ''
                })
                    inputContainer.classList.add('inputContainer')
                    inputContainer.setAttribute('placeholder', 'Add a task')

                ulContainer.classList.add('generalTaskContainer')
                    // liJS.classList.add('taskContainer')
                    //             spanJS.classList.add('textContainerJS')
                    //             spanJS.textContent = arrayOfLists[index].tasks.taskTitle  
                    //             delBtnContainer.classList.add('delBtnJsContainer');

                console.log(arrayOfLists[index].tasks)
                arrayOfLists[index].tasks.forEach((task) => {

                    //Create task elements
                    const liJS = document.createElement('li')
                    const spanJS = document.createElement('span')
                    const delBtnContainer = document.createElement('div');
                        const delBtn = document.createElement('delBtnJS')

                    //Add classes to task elements
                    liJS.classList.add('taskContainer')
                    spanJS.classList.add('textContainerJS')
                    spanJS.textContent = task.taskTitle  
                    delBtnContainer.classList.add('delBtnJsContainer');

                    //Append task elements
                    ulContainer.appendChild(liJS)
                    liJS.append(spanJS, delBtnContainer)
                    delBtnContainer.appendChild(delBtn)

                })




        //APPEND ELEMENTS       
        mainListsContainer.appendChild(mainContainer)
        mainContainer.append(titleListContainer, formGeneralContainer, ulContainer)
            formGeneralContainer.appendChild(formInputContainer)
                formInputContainer.appendChild(inputContainer)
                // ulContainer.appendChild(liJS)
                //     liJS.append(spanJS, delBtnContainer)
                //     delBtnContainer.appendChild(delBtn)
    })
}


// //RENDER LIST TASKS FROM LS
// function renderTasks(){

// }