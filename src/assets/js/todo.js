const btnAdd = document.querySelector('.btnAdd');
const allTasks = document.querySelector('.allTasks');
const data = JSON.parse(localStorage.getItem('tasks')) || [];

btnAdd.addEventListener('click', addTask);
allTasks.addEventListener('click', deleteTask);
updateTasks(data);

function addTask(e){
  let taskInput = document.querySelector('.textInput').value;
  console.log(taskInput);
  data.push({task: taskInput});
  updateTasks(data);
  localStorage.setItem('tasks', JSON.stringify(data));
}

function updateTasks(items){
  let str = '';
  for (let i=0;i<items.length;i++){
    str += '<li class="list-group-item">'+
              items[i].task +
              '<a href="#" data-index='+ i +'> delete </a>'+
          '</li>';
  }
  allTasks.innerHTML = str;
}

function deleteTask(e){
  e.preventDefault();
  if (e.target.nodeName !== 'A'){return};
  let index = e.target.dataset.index;
  data.splice(index, 1);
  updateTasks(data);
  localStorage.setItem('tasks',JSON.stringify(data));
}
