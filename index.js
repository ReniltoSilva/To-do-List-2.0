

    document.addEventListener('onload', createNewList());
   
    const btnNewList = document.querySelector('.create-new-list');
    btnNewList.addEventListener('click', createNewList)


//<-------------------- CURRENT DATE------------------->
    const currentDate = new Date();
    const showDay = document.querySelector('.date-day');
    const showMonth = document.querySelector('.date-month');
    const showWeek = document.querySelector('.date-week');
    const showYear = document.querySelector('.date-year');

    
    arrayWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    daysofWeek = arrayWeek[currentDate.getDay()];


    showMonth.innerText = currentDate.toLocaleString('en-EN', {month: 'long'});
    showDay.innerText = currentDate.toLocaleString('default', {day: '2-digit'});
    showWeek.innerText = daysofWeek;
    showYear.innerText = currentDate.getFullYear();


    function createNewList(){
        
        const elementContainer = document.querySelector('#container-new-list-on-page');


            const generalTodoContainer = document.createElement('div')
            generalTodoContainer.classList.add('JS-general-todo-container')

            const newTitle = document.createElement('h1');
            newTitle.classList.add('h1');
            newTitle.textContent = 'To-do List';
            newTitle.setAttribute('contenteditable', true)

            const newUL = document.createElement('ul');
                newUL.classList.add('ul')

        const newDivInputBtn = document.createElement('div');
        newDivInputBtn.classList.add('container-input-btn');

            const newInput = document.createElement('input');
            newInput.classList.add('taskInput');
            newInput.setAttribute('placeholder', 'Add a new task')

            const newAddButton = document.createElement('button');
            newAddButton.classList.add('addTaskButton');
            newAddButton.textContent = '+';
            newAddButton.addEventListener('click', () => {

                    if(newInput.value == ''){
                        alert `Please, insert a task!`
                        return
                    }

        
                        const newTask = document.createElement('li');
                        newTask.classList.add('li')

                        const spanItem = document.createElement('span');
                        spanItem.classList.add('span');
                        spanItem.setAttribute('contenteditable', true);
                        spanItem.innerText = newInput.value;
                        

                        const checkBox = document.createElement('input');
                        checkBox.setAttribute('type','checkbox');
                        checkBox.classList.add('checkbox-done');
                        checkBox.addEventListener('click', () => {
                            spanItem.classList.toggle('strike-through');
                            newTask.classList.toggle('background-done-task');
                        });

                        const deleteBtn = document.createElement('button');
                        deleteBtn.textContent = 'Delete';
                        deleteBtn.classList.add('delete-btn');
                        deleteBtn.addEventListener('click', () => {
                            newTask.remove();
                        });

                        // (generalTodoContainer).appendChild(newUL);
                        (newUL).appendChild(newTask);
                        (newTask).append(spanItem, deleteBtn, checkBox);

                        newInput.value = '';

                });

        const newDelBtnContainer = document.createElement('button');
        newDelBtnContainer.className = 'delBtnContainer';
        newDelBtnContainer.textContent = 'x';
        newDelBtnContainer.addEventListener('click', () => {
            newDelBtnContainer.parentElement.remove();
        });        

        (elementContainer).appendChild(generalTodoContainer);
        (generalTodoContainer).append(newTitle, newDivInputBtn, newUL, newDelBtnContainer);
        (newDivInputBtn).append(newInput, newAddButton);
        

    }


//<------------------ DARK/LIGHT MODE -------------------->
    const btnDarkLightMode = document.querySelector('.dark-light-mode');
    btnDarkLightMode.addEventListener('click', lightSwitch);

    function lightSwitch(){
        document.body.classList.toggle('JS-body-dark-mode');
        btnDarkLightMode.classList.toggle('dark-light-mode');

    }


//<------------------ LOCAL STORAGE-------------------->





