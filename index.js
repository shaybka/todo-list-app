let Tform = document.getElementById("taskForm");
let TaskView = document.querySelector(".task-view");
let taskInput = document.querySelector("#taskholder");

const addTasklocal = (value) => {
    if (value.length <= 0) {
        return;
    } else {
        let tasks = [];
        if (localStorage.getItem('tasks')) {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push({ text: value, completed: false });
        console.log(tasks)
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
};

const getTask = () => {
    if (!localStorage.getItem('tasks')) {
        return;
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(task => {
            TaskView.innerHTML += `
            <div class="task">
                <div class="tskbody">
                    <input type="checkbox" ${task.completed ? 'checked' : ''} />
                    <span class="${task.completed ? 'done' : ''}">${task.text}</span>
                </div>
                <i class="fa-solid fa-trash"></i>
            </div>
            `;
        });
    }
};


document.addEventListener('DOMContentLoaded', getTask);

const addTaskToDom = (task) => {
    if (taskInput.value === '') {
        alert('Please type a task');
        return;
    } else {
        TaskView.innerHTML += `
        <div class="task">
           <div class="tskbody">
               <input type="checkbox" />
               <span>${task}</span>
           </div>
           <i class="fa-solid fa-trash"></i>
        </div>
        `;
    }
    taskInput.value = '';
};

Tform.addEventListener("submit", function(event) {
    event.preventDefault();
    addTasklocal(taskInput.value);
    addTaskToDom(taskInput.value);
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-trash')) {
        deleteFromLocalStorage(event.target.parentElement);
        event.target.parentElement.remove();
    }
});

document.addEventListener('change', (event) => {
    if (event.target.type === 'checkbox') {
        const taskText = event.target.nextElementSibling.textContent;
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(task => {
            if (task.text === taskText) {
                task.completed = event.target.checked;
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));

        if (event.target.checked) {
            event.target.parentElement.querySelector('span').classList.add('done');
        } else {
            event.target.parentElement.querySelector('span').classList.remove('done');
        }
    }
});

const deleteFromLocalStorage = (deletedTask) => {
    let oldTasks;
    if (localStorage.getItem('tasks') === null) {
        oldTasks = [];
        return;
    } else {
        oldTasks = JSON.parse(localStorage.getItem('tasks'));
        oldTasks.forEach((task, index) => {
            if (task.text === deletedTask.querySelector('span').textContent) {
                oldTasks.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(oldTasks));
            }
        });
    }
};
