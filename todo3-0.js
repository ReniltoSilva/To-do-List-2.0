const mainContainer = document.querySelector('.mainContainer')
const form = document.querySelector('.formContainer')
const input = document.querySelector('.inputContainer')
const ulContainer = document.querySelector('.generalTaskContainer')

document.addEventListener('DOMContentLoaded', loadFromLS())


const arrayList = []

//Add Tasks
form.addEventListener('submit', (e) => {
    e.preventDefault()

    arrayList.push({
        task: input.value,
        id: (Math.random()*1000*1000).toFixed(0)
    })

    saveLS()

    input.value = ''

    console.log(arrayList)
}) 


//Save to LocalStorage
function saveLS(){
    localStorage.setItem('tasks', JSON.stringify(arrayList))
}


//Load from LocalStorage
function loadFromLS(){
    const savedArray = JSON.parse(localStorage.getItem('tasks'))

    savedArray.forEach((item) => {
        const liElement = document.createElement('li')
        liElement.classList.add('taskContainer')
        liElement.innerHTML = `<span class="textContainerJS">
                                ${item.task}
                                </span>
                                <div class="delBtnJsContainer">
                                    <button class="delBtnJS">Delete</button>
                                </div>`

        liElement.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            liElement.querySelector('.textContainerJS').classList.toggle('strikeThrough')
        })

        liElement.querySelector('.delBtnJS').addEventListener('click', () => {
            liElement.remove()
        })

        ulContainer.appendChild(liElement)
    })

    console.log(savedArray)
}