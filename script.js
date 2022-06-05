let Tasks = [{
        name:'eat',
        dueDate:'2022-06-10'
    },{
        name:'clean',
        dueDate:'2022-06-10'
    },{
        name:'run',
        dueDate:'2022-06-11'
    }];

function display(){
    
    document.getElementById('tasks-list').innerHTML = ''; //reset list to nothing

    //append the task in textbox
    Tasks.forEach(function(task){
        let t = document.createElement('div');
        t.innerText = task.name + ' ' + task.dueDate;
        let tasksList = document.getElementById('tasks-list');
        tasksList.appendChild(t);
    })
}

display(); //render tasks from array on top

function addTask(){
    const textbox = document.getElementById('newTaskIn');
    const newTask = textbox.value;
    const dateSelector = document.getElementById('date-selector');
    const dueDate = dateSelector.value;
    Tasks.push({
        name:newTask,
        dueDate:dueDate
    });
    display();
}

function clearList(){
    Tasks = [];
    display();
    
}

function taskDone(){
    let buttonText = document.getElementById('todo-button');
    buttonText.innerText = 'Done';
}



