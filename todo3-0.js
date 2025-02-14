const mainContainer = document.querySelector('.mainContainer')
const form = document.querySelector('.formContainer')
const input = document.querySelector('.inputContainer')
const ulContainer = document.querySelector('.generalTaskContainer')

document.addEventListener('DOMContentLoaded', loadFromLS)


const arrayList = []

//ADD TASKS
form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(input.value == ''){
        alert('Please, insert a task!')
    }else{
        const savedArray = JSON.parse(localStorage.getItem('Todo List'))

        if(savedArray == null || savedArray == []){

            arrayList.push({
                tasks: input.value,
                taskID: (Math.random()*1000*1000).toFixed(0)
                })

            console.log('List created in Local Storage')

            saveLS(arrayList)
        }else{
            const savedArray = JSON.parse(localStorage.getItem('Todo List'))
            const secondArray = [...savedArray]
            secondArray.push({
                tasks: input.value,
                taskID: (Math.random()*1000*1000).toFixed(0)
            })

            console.log('List updated in Local Storage')
            saveLS(secondArray)
        }
        
        input.value = ''
    }
})


//DELETE TASKS
function removeTask(taskID){
    
    const savedArray = JSON.parse(localStorage.getItem('Todo List'))

    const newArray = savedArray.filter((item) => item.taskID != taskID)

    saveLS(newArray)

}


//SAVE TO LOCAL STORAGE
function saveLS(array){
    localStorage.setItem('Todo List', JSON.stringify(array))

    loadFromLS()
}

//LOAD FROM LOCAL STORAGE
function loadFromLS(){
    ulContainer.innerHTML = '' // Clear the container before loading tasks

    const arrayLocalStorage = JSON.parse(localStorage.getItem('Todo List'))

    if(arrayLocalStorage == null){
        console.log('Array is empty')

    }else{
        const savedArray = JSON.parse(localStorage.getItem('Todo List'))
        console.log(savedArray)

        savedArray.forEach((item) => {

        const liJS = document.createElement('li')
            liJS.classList.add('taskContainer')
            liJS.innerHTML = `<span class="textContainerJS">
                                    ${item.tasks}
                                    </span>
                                    <div class="delBtnJsContainer">
                                        <button class="delBtnJS" onclick="console.log(removeTask(${item.taskID}))">Delete</button>
                                    </div>`

            ulContainer.append(liJS) 
        })
    }  
}
