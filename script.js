let Tasks = [{
        name:'eat',
        dueDate:'2022-06-10',
        id:'id1'
    },{
        name:'clean',
        dueDate:'2022-06-10',
        id:'id2'
    },{
        name:'run',
        dueDate:'2022-06-11',
        id: 'id3'
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
        deleteButton.id = Tasks.id;
        deleteButton.onclick = deleteTask;
        t.appendChild(deleteButton);

        const tasksList = document.getElementById('tasks-list');
        tasksList.appendChild(t);
    })
}

display(); //render tasks from array on top

//Adds task in textbox and due date to the end of the list
function addTask(){

    //If textbox is empty, no task will be displayed
    if (newTask === ''){
        alert('Add a task');
    }
    //If textbox is not empty, get textbox value, get date, and add to Tasks array
    else {
        const textbox = document.getElementById('new-task-box'); 
        const newTask = textbox.value;

        const dateSelector = document.getElementById('date-selector');
        const dueDate = dateSelector.value;

        const id = new Date().getTime(); //time in ms, id for each task

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
function deleteTask(){
    console.log('deleted!');
}

//Button changes text upon click
function taskDone(){
    let buttonText = document.getElementById('todo-button');
    buttonText.innerText = 'Done';
}



