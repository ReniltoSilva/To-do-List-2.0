const airQualityAPI = 'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=21.0245&longitude=105.8412&current=european_aqi,pm10,pm2_5,carbon_monoxide&hourly=pm10,pm2_5,carbon_monoxide&forecast_hours=24'
const weatherAPI = 'https://api.open-meteo.com/v1/forecast?latitude=21.0245&longitude=105.8412&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,weather_code,wind_speed_10m&minutely_15=temperature_2m,relative_humidity_2m,rain,is_day&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,rain,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&past_hours=24&forecast_hours=24'
const weatherContainer = document.querySelector('.weatherContainer')
const temperatureContainer = document.querySelector('.temperatureContainer') 
const windSpeedContainer = document.querySelector('.windSpeedContainer')
const apareTemperatureContainer = document.querySelector('.apareTemperatureContainer')
const isDayNightContainer = document.querySelector('.isDayNightContainer')


    document.addEventListener('onload', createNewList());
   
    const btnNewList = document.querySelector('.create-new-list');
    btnNewList.addEventListener('click', createNewList)

fetchApi()

function fetchApi(){

    //Weather API
    fetch(weatherAPI)
    .then(resp => resp.json())
    .then(data => {
        let temperature = data.current.temperature_2m
        let windSpeed = data.current.wind_speed_10m
        let apareTemperature = data.current.apparent_temperature;
        let isDayNight = data.current.is_day;
        console.log(data)


                //Air Quality API
                fetch(airQualityAPI)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                })

        displayWeather(temperature, windSpeed, apareTemperature, isDayNight)
    })         
}


function displayWeather(temperature, windSpeed, apareTemperature, isDayNight){

    temperatureContainer.innerText = temperature.toFixed(0)
    windSpeedContainer.innerText = windSpeed
    apareTemperatureContainer.innerText = apareTemperature.toFixed(0)
    isDayNightContainer.innerText = isDayNight
    console.log(temperature)  
}


    //-------------------WEATHER FREE API--------------------///

    //Container Weather
    //Day or Night - Image
    //Temperature
    //Aparent Temperature
    // Humidity level
    //Precipitation probability
    //Wind Speed
    //Weather code Daily

    //Container AQI
    //pm2.5
    //pm10
    //Co
    //No2
    //Time - Hour, Minutes
    //Time zone


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


    // <------------------ CREATE NEW LIST ------------------->
    function createNewList(){
        
        const elementContainer = document.querySelector('#container-new-list-on-page');


        const generalTodoContainer = document.createElement('div')
        generalTodoContainer.classList.add('JS-general-todo-container')

        const newTitle = document.createElement('h3');
        newTitle.classList.add('h3');
        newTitle.textContent = 'To-do List';
        newTitle.setAttribute('contenteditable', true)

        const newUL = document.createElement('ul');
            newUL.classList.add('ul')

        const newDivInputBtn = document.createElement('div');
        newDivInputBtn.classList.add('container-input-btn');

        const newInput = document.createElement('input');
        newInput.classList.add('taskInput');
        newInput.setAttribute('placeholder', 'Add a new task')
            newInput.addEventListener('keydown', (e) => {
                if(e.key === 'Enter'){
                    addTaskTest(newInput.value, newUL)

                    newInput.value = '';
                }
            })

        const newAddButton = document.createElement('button');
        newAddButton.classList.add('addTaskButton');
        newAddButton.textContent = '+';
        newAddButton.addEventListener('click', () => {
            addTaskTest(newInput.value, newUL)
            newInput.value = '';
        })
            

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

    // <------------------ ADD TASK ------------------->
    function addTaskTest(input, newUL) {
        
        if(input == ''){
            alert `Please, insert a task!`
            return
        }
    
        const newTask = document.createElement('li');
        newTask.classList.add('li')
        newTask.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            spanItem.classList.toggle('strike-through');
            newTask.classList.toggle('background-done-task');
        })
    
        const spanItem = document.createElement('span');
        spanItem.classList.add('span');
        spanItem.setAttribute('contenteditable', true);
        spanItem.innerText = input;
    
    
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type','checkbox');
        checkBox.classList.add('checkbox-done');
        checkBox.addEventListener('click', () => {
            spanItem.classList.toggle('strike-through');
            newTask.classList.toggle('background-done-task');
        });
    
        // newTask.innerHTML = `<button class="delete-btn" onclick="${newTask.remove()}">Delte<button/>`

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            newTask.remove();
        });
    
        // (generalTodoContainer).appendChild(newUL);
        (newUL).appendChild(newTask);
        (newTask).append(spanItem, deleteBtn, checkBox);

        saveToLocalStorage()
    }



    //<------------------ DARK/LIGHT MODE -------------------->
    const btnDarkLightMode = document.querySelector('.dark-light-mode');
    btnDarkLightMode.addEventListener('click', lightSwitch);

    function lightSwitch(){
        document.body.classList.toggle('JS-body-dark-mode');
        btnDarkLightMode.classList.toggle('dark-light-mode');

    }


    //<------------------ LOCAL STORAGE-------------------->

    // function saveToLocalStorage(array){
    //     localStorage.setItem('Todo List 1.0', JSON.stringify(array))

    //     loadFromLocalStorage()
    // }