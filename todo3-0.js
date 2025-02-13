const mainContainer = document.querySelector('.mainContainer')
const form = document.querySelector('.formContainer')
const input = document.querySelector('.inputContainer')
const ulContainer = document.querySelector('.generalTaskContainer')

document.addEventListener('DOMContentLoaded', loadFromLS)


const arrayList = []

//Add Tasks
form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(input.value == ''){
        alert('Please, insert a task!')
    }else{
        const savedArray = JSON.parse(localStorage.getItem('tasks'))

        if(savedArray == null || savedArray == []){

            arrayList.push({
                tasks: input.value,
                taskID: (Math.random()*1000*1000).toFixed(0)
                })

            console.log('List created in Local Storage')

            saveLS(arrayList)
        }else{
            const savedArray = JSON.parse(localStorage.getItem('tasks'))
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


//Save to local Storage
function saveLS(array){
    localStorage.setItem('tasks', JSON.stringify(array))

    loadFromLS()
}

//Load from Local Storage
function loadFromLS(){
    ulContainer.innerHTML = '' // Clear the container before loading tasks

    const arrayLocalStorage = JSON.parse(localStorage.getItem('tasks'))

    if(arrayLocalStorage == null){
        console.log('Array is empty')

    }else{
        const savedArray = JSON.parse(localStorage.getItem('tasks'))
        console.log(savedArray)

        savedArray.forEach((item) => {

        const liJS = document.createElement('li')
            liJS.classList.add('taskContainer')
            liJS.innerHTML = `<span class="textContainerJS">
                                    ${item.tasks}
                                    </span>
                                    <div class="delBtnJsContainer">
                                        <button class="delBtnJS">Delete</button>
                                    </div>`

            ulContainer.append(liJS)  //   STOPPED HERE, IT IS GENERATING THE DOUBLE OF THE TASKS
        })
    }  
}


// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     if(!input.value){
//         alert('Please, insert a task!')
//     }else{

//         const savedArray = JSON.parse(localStorage.getItem('tasks'))
    
//         if(savedArray == [] || savedArray == null){
//             console.log('Array is empty')
//         }else{

//             arrayList.push({
//                 task: input.value,
//                 id: (Math.random()*1000*1000).toFixed(0)
//             })
//         }
//     }
//     // const secondArray = [...arrayList]

//     // secondArray.push({
//     //     task: input.value,
//     //     id: (Math.random()*1000*1000).toFixed(0)
//     // })

//     // saveLS()

//     // input.value = ''

//     // console.log(arrayList)

// }) 


// //Save to LocalStorage
// function saveLS(){
//     localStorage.setItem('tasks', JSON.stringify(arrayList))
// }


// //Load from LocalStorage
// function loadFromLS(){
//     const savedArray = JSON.parse(localStorage.getItem('tasks'))

//     savedArray.forEach((item) => {
//         const liElement = document.createElement('li')
//         liElement.classList.add('taskContainer')
//         liElement.innerHTML = `<span class="textContainerJS">
//                                 ${item.task}
//                                 </span>
//                                 <div class="delBtnJsContainer">
//                                     <button class="delBtnJS">Delete</button>
//                                 </div>`

//         liElement.addEventListener('contextmenu', (e) => {
//             e.preventDefault()
//             liElement.querySelector('.textContainerJS').classList.toggle('strikeThrough')
//         })

//         liElement.querySelector('.delBtnJS').addEventListener('click', () => {
//             liElement.remove()
//         })

//         ulContainer.appendChild(liElement)
//     })

//     console.log(savedArray)
// }