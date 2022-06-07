
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
function createTask(newTask,dueDate){
    const id = '' + new Date().getTime(); //create string task id

    Tasks.push({    //add task object into Tasks array
        name:newTask,
        dueDate:dueDate,
        id:id
    });
    saveList();
}

//remove a task from array of tasks
function removeTask(idToDelete){
    Tasks = Tasks.filter(function(task){
        if (task.id === idToDelete){
            return false;
        }
        else{
            return true;
        }
    });
    saveList();
}

//clears all tasks from array
function clearTasks(){
    Tasks = [];
    saveList();
}

//save the task list to local storage
function saveList(){
    localStorage.setItem('tasks',JSON.stringify(Tasks));
}

//-----------------VIEW--------

//displays objects in the Tasks array
function display(){     
    
    document.getElementById('tasks-list').innerHTML = ''; //reset list to nothing

    //append the task in textbox
    Tasks.forEach(function(task){
        const t = document.createElement('div');
        t.innerText = task.name + ' : ' + task.dueDate;

        //add delete button next to each task
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        deleteButton.style = 'margin: 5px';
        deleteButton.id = task.id;
        deleteButton.onclick = deleteTask;
        t.appendChild(deleteButton);

        const tasksList = document.getElementById('tasks-list');
        tasksList.appendChild(t);
    })
}

//render tasks from array on top
display(); 

//---------------CONTROLLERS-----

//Adds task in textbox and due date to the end of the list
function addTask(){
    const newTask = document.getElementById('new-task-box').value; 
    const dueDate = document.getElementById('date-selector').value;

    //If textbox is empty, no task will be displayed
    if (newTask === ''){
        alert('Add a task');
    }

    //If textbox is not empty, get textbox value, get date, and add to Tasks array
    else {
        createTask(newTask,dueDate);
        display(); 
        document.getElementById('new-task-box').value = '';    //Removes text from textbox after it has been entered
    }
}
 
//Deletes a task upon click of 'delete' button
function deleteTask(event){
    const idToDelete = event.target.id; //the id of the button clicked
    removeTask(idToDelete);
    display();
}

//Clears the Tasks array, displays empty array
function clearList(){
    clearTasks();
    display();
}