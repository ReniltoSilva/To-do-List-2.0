const mainListsContainer = document.querySelector('#mainListsContainer')
const newListBTN = document.querySelector('.addNewList')
const startBtn = document.querySelector('#start-btn')

//SPEECH RECOGNITION COMMAND
// //Speech recognition test
// if (!('webkitSpeechRecognition' in window)) {
//     console.log("Your browser does not support Speech Recognition.");
// } else {
//     console.log("Speech Recognition is supported.");
//     // Initialize Speech Recognition
// }

// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

// // Optional settings
// recognition.continuous = false; // Stop after one sentence
// recognition.lang = "en-US"; // Language
// recognition.interimResults = false; // Only return final result

// // Start recognition when the button is clicked
// startBtn.addEventListener("click", () => {
//     recognition.start();
//     console.log("Listening...");
// });

// // Handle the result
// recognition.onresult = (event) => {
//     const transcript = event.results[0][0].transcript; // Get recognized text

//         document.getElementById("output").textContent = transcript; // Display text
//         console.log("Recognized text:", transcript);
//         checkCreatedLists(transcript)
// };

// // Handle errors
// recognition.onerror = (event) => {
//     console.log("Error:", event.error);
// };


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
function checkCreatedLists(transcript){
    const savedListsLS = JSON.parse(localStorage.getItem('Main Array Lists'))

   if(savedListsLS === null || savedListsLS.length == 0){
        console.log('No list found, creating the first one')

        const newList1 = {
            listID: (Math.random()*1000*1000).toFixed(0),
            listTitle: 'Todo List',
            tasks: []
        }

        firstList.push(newList1)
        
        localStorage.setItem('Main Array Lists', JSON.stringify(firstList))
        renderLists(firstList)
        
    }else if(transcript === 'new list'){
            // const combinedLists = []
            savedListsLS.push({
                listID: (Math.random()*1000*1000).toFixed(0),
                listTitle: 'Todo List',
                tasks: []
            })
            console.log(savedListsLS)
 
            localStorage.setItem('Main Array Lists', JSON.stringify(savedListsLS))
            renderLists(savedListsLS)
        }else{
            renderLists(savedListsLS)
        }
}


//RENDER LISTS IN THE DOM
function renderLists(arrayOfLists){
    mainListsContainer.innerHTML = ''

    arrayOfLists.forEach((list, index) => {

        //CREATE LIST ELEMENTS
        const mainContainer = document.createElement('div')
        //Icon to toggle Menu Pop-up
        const iconPopup = document.createElement('i')
        //Menu pop-up Container
        const listMenuContainer = document.createElement('div')
        //Icon Pop-up Container
        const iconPopupContainer = document.createElement('span')

        document.addEventListener("click", (e) => {
            document.querySelectorAll(".listMenuContainer").forEach((menu) => {
                if (!menu.contains(e.target) && !e.target.closest(".iconPopupContainer")) {
                    menu.style.display = "none";
                }
            });
        });

        iconPopupContainer.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevents immediate closing
        
            // Close all other menus before opening a new one
            document.querySelectorAll(".listMenuContainer").forEach((menu) => {
                if (menu !== listMenuContainer) {
                    menu.style.display = "none";
                }
            });
        
            // Toggle the menu
            listMenuContainer.style.display =
                listMenuContainer.style.display === "block" ? "none" : "block";
        });
        

                //Delete Btn for Lists(inside listMenuContainer)
                const deleteListBtn = document.createElement('li')
                deleteListBtn.classList.add('buttonsInsideMenuPopup')
                deleteListBtn.textContent = 'Delete List';//Name of icon from Google Icons
                deleteListBtn.addEventListener('click', () => {
                    
                    const newValue = arrayOfLists.filter((i) => {
                    return i.listID !== list.listID
                    })

                    localStorage.setItem('Main Array Lists', JSON.stringify(newValue))
                    renderLists(newValue)
                })

                //Duplicate list btn for lists(inside listMenuContainer)
                const duplicateListBtn = document.createElement('li')
                    duplicateListBtn.classList.add('buttonsInsideMenuPopup')
                    duplicateListBtn.textContent = 'Duplicate List';
                    duplicateListBtn.addEventListener('click', () => {
                        const emptyArray = []
                        const savedLists = JSON.parse(localStorage.getItem('Main Array Lists'))

                        const firstList = {
                            listID: (Math.random()*1000*1000).toFixed(0),
                            listTitle: `${list.listTitle} Copy`,
                            tasks: list.tasks
                        }

                        emptyArray.push(firstList, ...savedLists)

                        localStorage.setItem('Main Array Lists', JSON.stringify(emptyArray))

                        console.log(emptyArray)
                        renderLists(emptyArray)
                    })

                //Share list btn for lists(inside listMenuContainer)
                const shareListBtn = document.createElement('li')
                shareListBtn.classList.add('buttonsInsideMenuPopup')
                shareListBtn.textContent = 'Share List';
                shareListBtn.addEventListener('click', () => {
                        console.log('List Shared')
                    })     


                
        const titleListContainer = document.createElement('h1')
                titleListContainer.addEventListener('input', (e) => {
                    e.preventDefault()
                    arrayOfLists[index].listTitle = titleListContainer.textContent

                    localStorage.setItem('Main Array Lists', JSON.stringify(arrayOfLists))
                })
        const formGeneralContainer = document.createElement('div')
            const formInputContainer = document.createElement('form')
                const inputContainer = document.createElement('input')
        const ulContainer = document.createElement('ul')

        //ADD CLASSES TO LIST ELEMENTS
        mainContainer.classList.add('mainContainer')
            iconPopupContainer.classList.add('iconPopupContainer')
                iconPopup.classList.add('material-symbols-outlined')
                iconPopup.textContent = 'more_vert'
            listMenuContainer.classList.add('listMenuContainer')
            listMenuContainer.style.display = 'none'


            titleListContainer.classList.add('titleListContainer')
                titleListContainer.setAttribute('contenteditable', 'true')
                titleListContainer.textContent = `${list.listTitle}`

            formGeneralContainer.classList.add('formGeneralContainer')
                formInputContainer.classList.add('formContainer')
                inputContainer.classList.add('inputContainer')
                inputContainer.setAttribute('placeholder', 'Add a task')

            ulContainer.classList.add('generalTaskContainer')

                //SAVE TASK TO EACH LIST IN LS AND CALL renderLists(arrayOfLists)
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

                //FOR EACH TASK IN EACH LIST, RENDER IT TO THE DOM
                arrayOfLists[index].tasks.forEach((task) => {

                    //Create task elements
                    const liJS = document.createElement('li')
                        const spanJS = document.createElement('span')
                        const delBtnContainer = document.createElement('div');
                        const delBtn = document.createElement('button')
                        
                    //Add classes to task elements
                    liJS.classList.add('taskContainer')
                        spanJS.textContent = task.taskTitle
                        spanJS.classList.add('textContainerJS')
                        spanJS.setAttribute('contentEditable', 'true')
                        spanJS.addEventListener('input', (e) => {
                            e.preventDefault()
                            const indexTask = arrayOfLists[index].tasks
                            const taskID = task.taskID

                            const taskIndex = indexTask.findIndex((t) => {
                                return t.taskID == taskID
                            })

                            arrayOfLists[index].tasks[taskIndex].taskTitle = spanJS.textContent


                            localStorage.setItem('Main Array Lists', JSON.stringify(arrayOfLists))
                            console.log(arrayOfLists)
                        })
                        spanJS.addEventListener('contextmenu', (e) => {
                            e.preventDefault()
                            
                            task.taskDone = !task.taskDone
                            renderLists(arrayOfLists)
                        })  

                    //Toggle task done true/false
                    if(task.taskDone){
                            spanJS.classList.add('strikeThrough')
                            localStorage.setItem('Main Array Lists', JSON.stringify(arrayOfLists))
                        }

                        delBtnContainer.classList.add('delBtnJsContainer')
                            delBtn.classList.add('delBtnJS')
                            delBtn.textContent = 'DELETE'
                            delBtn.addEventListener('click',() => {

                                    // Get the tasks of the current list
                                    const listTasks = arrayOfLists[index].tasks;
                                
                                    // Filter out the task that needs to be deleted
                                    const updatedTasks = listTasks.filter(t => t.taskID !== task.taskID);
                                
                                    // Update the tasks array of the current list
                                    arrayOfLists[index].tasks = updatedTasks;
                                
                                    // Save the updated array back to localStorage
                                    localStorage.setItem('Main Array Lists', JSON.stringify(arrayOfLists));
                                
                                    // Re-render the lists to reflect the changes
                                    renderLists(arrayOfLists);
                            })
                            
                    //Append task elements
                    ulContainer.appendChild(liJS)
                        liJS.append(spanJS, delBtnContainer)
                            delBtnContainer.appendChild(delBtn)
                })

        //APPEND LIST ELEMENTS TO THE DOM       
        mainListsContainer.appendChild(mainContainer)
        mainContainer.append(iconPopupContainer, listMenuContainer, titleListContainer, formGeneralContainer, ulContainer)
            listMenuContainer.append(deleteListBtn, duplicateListBtn, shareListBtn)
        iconPopupContainer.appendChild(iconPopup)
            formGeneralContainer.appendChild(formInputContainer)
                formInputContainer.appendChild(inputContainer)
    })
}






// //TESTING SELECTING VALUES IN NESTED ARRAYS WITH MULTIPLE INDEXES
// const arrayExample = [
//     ['apple','orange','banana'],
//     ['juice','car','computer',[
//         'casa1','casa2','casa3'
//     ]]
// ]

// console.log(arrayExample[1][3][1])


// const results = [
//     [ { 
//         transcript: "Hello world", 
//         confidence: 0.98 
//     },
//     { 
//         transcript2: "Hello House", 
//         confidence2: 100
//     } ],
//     [ { 
//         transcript: "Hi there", 
//         confidence: 0.85 
//     } ]
//   ];
  
//   console.log(results[1][0].confidence)
