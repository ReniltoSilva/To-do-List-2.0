const addNewListBTN = document.querySelector('.addNewList')
const mainListsContainer = document.querySelector('#mainListsContainer')

const newMainListArray = []

//ADD NEW LIST ON PAGE LOAD OR LOAD EXISTING LIST FROM LOCALSTORAGE
document.addEventListener('DOMContentLoaded', () => {
    
    const checkListLS = JSON.parse(localStorage.getItem('Main Array Lists'))
    
    if(checkListLS === null){

        newMainListArray.push({   
                listID: (Math.random()*1000*1000).toFixed(0),
                listTitle: 'Todo List',
                tasks: []
            }
        )

        localStorage.setItem('Main Array Lists', JSON.stringify(newMainListArray))
        loadListAndDisplayDOM(newMainListArray)
    }else{
        const newMainListArray = JSON.parse(localStorage.getItem('Main Array Lists'))

        loadListAndDisplayDOM(newMainListArray)
    }
})


//LOAD LIST AND DISPLAY ON DOM
function loadListAndDisplayDOM(arrayList){

    arrayList.forEach((list, index) => {

        //CREATE ELEMENTS
        const mainContainer = document.createElement('div')
        const titleListContainer = document.createElement('h1')
        const formGeneralContainer = document.createElement('div')
            const formInputContainer = document.createElement('form')
                const inputContainer = document.createElement('input')
        // const ulContainer = document.createElement('ul')

        //ADD CLASSES
        mainContainer.classList.add('mainContainer')
            titleListContainer.classList.add('titleListContainer')
                titleListContainer.setAttribute('contenteditable', 'true')
                titleListContainer.textContent = `${list.listTitle}`

            formGeneralContainer.classList.add('formGeneralContainer')
                formInputContainer.classList.add('formContainer')
                formInputContainer.addEventListener('submit', (e) => {
                    e.preventDefault()
                    addTask(inputContainer.value, arrayList, index, mainContainer)   

                    inputContainer.value = ''
                })
                    inputContainer.classList.add('inputContainer')
                    inputContainer.setAttribute('placeholder', 'Add a task')

            // ulContainer.classList.add('generalTaskContainer')

        //APPEND ELEMENTS       
        mainListsContainer.appendChild(mainContainer)
        mainContainer.append(titleListContainer, formGeneralContainer)
            formGeneralContainer.appendChild(formInputContainer)
                formInputContainer.appendChild(inputContainer)
    })

    console.log(arrayList)
}


//ADD TASK AND SAVE TO LOCALSTORAGE
function addTask(taskValue, arrayList, index, mainContainer){

    console.log(mainContainer)
    console.log(taskValue)

    arrayList[index].tasks.forEach((task, mainContainer) => {

        //CREATE ELEMENTS
        const ulContainer = document.createElement('ul')
        const liJS = document.createElement('li')
                const spanJS = document.createElement('span')
                const delBtnContainer = document.createElement('div');
                        const delBtn = document.createElement('delBtnJS')
    
        //ADD CLASSES AND ATTRIBUTES    
        ulContainer.classList.add('generalTaskContainer')            
        liJS.classList.add('taskContainer')
            spanJS.classList.add('textContainerJS')
            spanJS.textContent = taskValue
                delBtnContainer.classList.add('delBtnJsContainer');
                    delBtn.classList.add('delBtnJS')
                    delBtn.textContent = 'DELETE'
    
                    //SAVE TO LOCALSTORAGE
                    arrayList[index].tasks.push({
                        taskID: (Math.random()*1000*1000).toFixed(0),
                        taskTitle: taskValue,
                        done: false
                    })

        //APPEND ELEMENTS
            mainContainer.appendChild(ulContainer)
            ulContainer.appendChild(liJS)
            liJS.append(spanJS, delBtnContainer)
                delBtnContainer.appendChild(delBtn)

    })

    localStorage.setItem('Main Array Lists', JSON.stringify(arrayList))

    console.log(arrayList[index].tasks)

}

