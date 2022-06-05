//https://www.youtube.com/watch?v=DqaTKBU9TZk
//47.57

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
    let textbox = document.getElementById('newTaskIn');
    let newTask = textbox.value;
    Tasks.push(newTask);
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



/* CM TO INCHES CONVERTER************
function toCM(){
    let box = document.getElementById('number-input');
    let input = box.value;
    let ans = input*2.54;
    let d = document.createElement('div');
    d.innerText = ans + ' cm';
    let answer = document.getElementById('result');
    answer.appendChild(d);
}
function toINCH(){
    let box = document.getElementById('number-input');
    let input = box.value;
    let ans = input/2.54;
    let d = document.createElement('div');
    d.innerText = ans + ' inches';
    let answer = document.getElementById('result');
    answer.appendChild(d);
} */


/* Shopping cart practice *************
function addItem(item){
    let groceryList = document.getElementById('cart');
    let f = document.createElement('div');
    f.innerText = item;
    groceryList.appendChild(f);
}

function clearCart(){
    document.getElementById('cart').innerHTML = '';
} */


/* Sum all numbers in array *****************
let sum = 0;
function arraySum(numArr){
    
    numArr.forEach(function(num){
        sum = sum+num;
    });
}

arraySum([2,3,5,6,7,8]);
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

arraySum([2,3,4]); 

/* Two buttons which increase or decrease a number***********
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
} */