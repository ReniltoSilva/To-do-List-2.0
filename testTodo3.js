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

        //ADD CLASSES
        mainContainer.classList.add('mainContainer')
            titleListContainer.classList.add('titleListContainer')
                titleListContainer.setAttribute('contenteditable', 'true')
                titleListContainer.textContent = `${list.listTitle}`

            formGeneralContainer.classList.add('formGeneralContainer')
                formInputContainer.classList.add('formContainer')
                formInputContainer.addEventListener('submit', (e) => {
                    e.preventDefault()

                    console.log(arrayOfLists[index].tasks)

                    arrayOfLists[index].tasks.push({
                        taskID: (Math.random()*1000*1000).toFixed(0),
                        taskTitle: inputContainer.value,
                        taskDone: false
                    })

                    

                    inputContainer.value = ''
                })
                    inputContainer.classList.add('inputContainer')
                    inputContainer.setAttribute('placeholder', 'Add a task')

                ulContainer.classList.add('generalTaskContainer')


        //APPEND ELEMENTS       
        mainListsContainer.appendChild(mainContainer)
        mainContainer.append(titleListContainer, formGeneralContainer, ulContainer)
            formGeneralContainer.appendChild(formInputContainer)
                formInputContainer.appendChild(inputContainer)
    })
}