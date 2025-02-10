const mainContainer = document.querySelector('.mainContainer')
const form = document.querySelector('.formContainer')
const input = document.querySelector('.inputContainer')
const ulContainer = document.querySelector('.generalTaskContainer')


const arrayList = []


form.addEventListener('submit', (e) => {
    e.preventDefault()

    arrayList.push({
        task: input.value,
        id: (Math.random()*1000*1000).toFixed(0)
    })

    input.value = ''

    console.log(arrayList)
})