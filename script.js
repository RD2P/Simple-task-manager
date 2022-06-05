
let count = 0;

function addCount(){
    count = count + 1;
    let counter = document.getElementById('counter');
    counter.innerText = count;
}

function subtractCount(){
    count -= 1;
    let counter = document.getElementById('counter');
    counter.innerText = count;
}


let Tasks = ['eat', 'clean', 'run'];
Tasks.push('jump');


Tasks.forEach(function(task){
    let t = document.createElement('div');
    t.innerText = task;
    document.body.appendChild(t);
})


function addTask(){
    let textbox = document.getElementById('newTaskIn');
    let newTask = textbox.value;
    Tasks.push(newTask);
    let t = document.createElement('div');
    t.innerText = newTask;
    document.body.appendChild(t);
}

function taskDone(){
    let buttonText = document.getElementById('todo-button');
    buttonText.innerText = 'Done';
}


/*
let sum = 0;
function arraySum(numArr){
    
    numArr.forEach(function(num){
        sum = sum+num;
    });
}

arraySum([2,3,5]);
console.log(sum);
*/

/*
let trees = ['bigTree', 'greenTree'];
trees.push('wildTree');
trees.forEach(function(tree){
    console.log(tree);
})*/

/*
let sum = 0;
function arraySum(arr){
    arr.forEach(function(num){
        sum += num;
    })
    console.log(sum);
}

arraySum([2,3,4]); */
