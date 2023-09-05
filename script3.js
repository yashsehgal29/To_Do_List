//variables
const addTaskbtn=document.getElementById('addtask');
const taskcontainer=document.getElementById('taskcontainer');
const taskin=document.getElementById('inputtask');

addTaskbtn.addEventListener('click',function(){
    let task=document.createElement('div');
    task.classList.add('tasks');
    let li=document.createElement('li');
    li.innerText=`${taskin.value}`;
    task.appendChild(li);
    let checkbut=document.createElement('button');
    checkbut.innerHTML='<i class="fa-solid fa-check"></i>';
    checkbut.classList.add('checktask');
    task.appendChild(checkbut);

    let delbut=document.createElement('button');
    delbut.innerHTML='<i class="fa-solid fa-trash"></i>';
    delbut.classList.add('deltask');
    task.appendChild(delbut);
     if(taskin.value === ''){
        alert("Please Enter a Task.");
     }
     else{
        taskcontainer.appendChild(task); 
     }
    taskin.value='';

    checkbut.addEventListener('click',function(){
        checkbut.parentElement.style.textDecoration='line-through';
    })

    delbut.addEventListener('click',function(e){
        let target=e.target;
        target.parentElement.parentElement.remove();
        //one level up list the one level up task
    })
})