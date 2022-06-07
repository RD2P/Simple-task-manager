let Tasks = [{
        name:'eat',
        dueDate:'2022-06-10',
        id:'1'
    },{
        name:'clean',
        dueDate:'2022-06-10',
        id:'2'
    },{
        name:'run',
        dueDate:'2022-06-11',
        id: '3'
    }];

//displays objects in the Tasks array
function display(){     
    
    document.getElementById('tasks-list').innerHTML = ''; //reset list to nothing

    //append the task in textbox
    Tasks.forEach(function(task){
        const t = document.createElement('div');
        t.innerText = task.name + ' ' + task.dueDate;

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

display(); //render tasks from array on top

//Adds task in textbox and due date to the end of the list
function addTask(){
    const textbox = document.getElementById('new-task-box'); 
    const newTask = textbox.value;

    //If textbox is empty, no task will be displayed
    if (newTask === ''){
        alert('Add a task');
    }

    //If textbox is not empty, get textbox value, get date, and add to Tasks array
    else {

        const dateSelector = document.getElementById('date-selector');
        const dueDate = dateSelector.value;

        const id = '' + new Date().getTime(); //time in ms, id for each task, turned into a string to prevent type error in deleteTask()

        Tasks.push({
            name:newTask,
            dueDate:dueDate,
            id:id
         });
         display(); 
         textbox.value = '';    //Removes text from textbox after it has been entered
    }

}
 
//Clears the Tasks array, displays empty array
function clearList(){
    Tasks = [];
    display();
    
}

//Deletes a task upon click of 'delete' button
function deleteTask(event){
    const idToDelete = event.target.id; //the id of the button clicked

    Tasks = Tasks.filter(function(task){
        if (task.id === idToDelete){
            return false;
        }
        else{
            return true;
        }
    });
    display();
}



