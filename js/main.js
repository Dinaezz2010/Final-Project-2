let addBtn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskData');
let noTasks = document.getElementById('noTasks');
let allTasks = document.getElementById('allTasks');
let showModel = document.getElementById('showModel');
let model = document.getElementById('model');



let showModelFun = function () {
    model.classList.toggle('block');
}
showModel.addEventListener('click' , showModelFun);


let noTaskShow = function () {
    if (allTasks.childElementCount == 0) {
        noTasks.classList.remove('none');

    }
}

let addTask = function () {
    let taskData = taskInput.value;
    if (taskData.trim() == "" || taskInput.value.length < 3 || taskInput.value.length > 20) {
        alert('Please Enter Valid Data');
    } else {
        noTasks.classList.add('none');
        allTasks.innerHTML += `<div id = "noTasks" class = "task alert alert-info"> 
        ${taskData}
        <button class = " btn float-right btn-danger delete" > Delete </button>
        </div>`;
        taskInput.value = "";
        showModelFun();
        allTasks.addEventListener('click', function(e){ 
            if(e.target.classList.contains('task')){ 
                 e.target.classList.toggle('check');
            }
        })

    }

}
addBtn.addEventListener('click', addTask);

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        noTaskShow();
    }
    
})