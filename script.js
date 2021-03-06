
//-------------------MODEL-----

let Tasks;
const savedList = JSON.parse(localStorage.getItem('tasks')); 

//check if there is a saved list in local storage
if (Array.isArray(savedList)){
    Tasks = savedList;
}
else {
    Tasks = [];
}

//create a task in array of tasks
let createTask = (newTask,dueDate) => {
    const id = '' + new Date().getTime(); //create string task id

    Tasks.push({    //add task object into Tasks array
        name:newTask,
        dueDate:dueDate,
        id:id
    });
    saveList();
}

//remove a task from array of tasks
let removeTask = idToDelete => {
    Tasks = Tasks.filter(task => {
        if (task.id === idToDelete) {
           return false; 
        } 
        else{
            return true;
        }
    });
    saveList();
}

//clears all tasks from array
let clearTasks = () => {
    Tasks = [];
    saveList();
}

//save the task list to local storage
let saveList = () => localStorage.setItem('tasks',JSON.stringify(Tasks))

//-----------------VIEW--------

//displays objects in the Tasks array
let display = () => {     
    
    document.getElementById('tasks-list').innerHTML = ''; //reset list to nothing

    //append the task in textbox
    Tasks.forEach(task => {
        const t = document.createElement('div');
        t.innerText = task.name + ' : ' + task.dueDate;

        //add delete button next to each task
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        deleteButton.classList.add('delete-button');
        deleteButton.id = task.id;
        deleteButton.onclick = deleteTask;
        t.style = 'font-family: tahoma';
        t.appendChild(deleteButton);

        const tasksList = document.getElementById('tasks-list');
        tasksList.appendChild(t);
    })
}

//render tasks from array on top
display(); 

//---------------CONTROLLERS-----

//Adds task in textbox and due date to the end of the list
let addTask = () => {
    const newTask = document.getElementById('new-task-box').value; 
    const dueDate = document.getElementById('date-selector').value;

    //Alert if no task typed in or no due date selected
    if (newTask === ''){
        alert('Type in a task');
    }
    else if (dueDate === ''){
        alert('Add a due date');
    }
    else {
        createTask(newTask,dueDate);
        display(); 
        //Remove inputs after it has been entered
        document.getElementById('new-task-box').value = '';    
        document.getElementById('date-selector').value = '';
    }
}
 
//Deletes a task upon click of 'delete' button
function deleteTask (event){
    const idToDelete = event.target.id; //the id of the button clicked
    removeTask(idToDelete);
    display();
}

//Clears the Tasks array, displays empty array
let clearList = () => {
    clearTasks();
    display();
}