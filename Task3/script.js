let pendingTasks = [];
let completedTasks = [];

function addTask() {
    const taskTitle = document.getElementById('taskTitle').value;

    if (taskTitle === '') {
        alert('Please fill in both the title and description');
        return;
    }

    const task = {
        id: Date.now(),
        title: taskTitle
    };

    pendingTasks.push(task);
    renderTasks();
    document.getElementById('taskTitle').value = '';
}

function completeTask(id) {
    const taskIndex = pendingTasks.findIndex(task => task.id === id);
    const [completedTask] = pendingTasks.splice(taskIndex, 1);
    completedTasks.push(completedTask);
    renderTasks();
}

function deleteTask(id, type) {
    if (type === 'pending') {
        pendingTasks = pendingTasks.filter(task => task.id !== id);
    } else {
        completedTasks = completedTasks.filter(task => task.id !== id);
    }
    renderTasks();
}
function editTask(id){
    var taskIndex = pendingTasks.findIndex((obj)=> obj.id == id);
    let newTask = prompt("Please Enter new task")

    var item = {
        id:id,
        title:newTask
    }
    pendingTasks[taskIndex] = item;
    renderTasks();
}
function renderTasks() {
    const pendingList = document.getElementById('pendingList');
    const completedList = document.getElementById('completedList');

    pendingList.innerHTML = '';
    completedList.innerHTML = '';

    pendingTasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${task.title}</strong>
            </div>
            <div>
                <button class="edit" onclick="editTask(${task.id})">✏️</button>
                <button class="complete" onclick="completeTask(${task.id})">✔️</button>
                <button class="delete" onclick="deleteTask(${task.id}, 'pending')">❌</button>
            </div>
        `;
        pendingList.appendChild(li);
    });

    completedTasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${task.title}</strong>
            </div>
            <div>
                <button class="delete" onclick="deleteTask(${task.id}, 'completed')">❌</button>
            </div>
        `;
        completedList.appendChild(li);
    });
}

renderTasks();
