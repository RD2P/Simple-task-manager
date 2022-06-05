
let Tasks = ['eat', 'clean', 'run'];

function display(){
    
    document.getElementById('tasks-list').innerHTML = ''; //reset list to nothing

    //append the task in textbox
    Tasks.forEach(function(task){
        let t = document.createElement('div');
        t.innerText = task;
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
    //document.getElementById('tasks-list').innerHTML = '';
}

function taskDone(){
    let buttonText = document.getElementById('todo-button');
    buttonText.innerText = 'Done';
}


/* Shopping cart practice
function addItem(item){
    let groceryList = document.getElementById('cart');
    let f = document.createElement('div');
    f.innerText = item;
    groceryList.appendChild(f);
}

function clearCart(){
    document.getElementById('cart').innerHTML = '';
} */


/*
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

/*
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