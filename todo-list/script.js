
let tasks = [];
let completedTasks = [];

const renderTaskList = () => {
  const taskList = document.querySelector('#task-list');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'flex items-center mb-4';

    const taskId = document.createElement('div');
    taskId.className = 'w-auto text-gray-600 text-md mr-3';
    taskId.innerHTML = index + 1;

    const taskText = document.createElement('div');
    taskText.className = 'w-auto px-4 py-2 text-gray-800 border rounded-lg border-gray-200 bg-white';
    taskText.innerHTML = task;

    const taskActions = document.createElement('div');
    taskActions.className = 'w-auto flex justify-end';

    const editButton = document.createElement('button');
    editButton.className = 'ml-3 rounded-lg px-3 py-1 mr-2 bg-green-500  text-white font-bold';
    editButton.innerHTML = `Edit` ;
    editButton.addEventListener('click', () => {
      const newTask = prompt('Enter the new task');
      tasks[index] = newTask;
      renderTaskList();
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'ml-3 rounded-lg px-3 py-1 mr-2 bg-red-500 text-white font-bold';
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTaskList();
    });

    const completeButton = document.createElement('button');
    completeButton.className = 'rounded-lg px-3 py-1 bg-green-700  text-white font-bold';
        completeButton.innerHTML = `Complete`;
    completeButton.addEventListener('click', () => {
      completedTasks.push(tasks[index]);
      tasks.splice(index, 1);
      renderTaskList();
      renderCompletedTaskList();
    });

    taskActions.appendChild(editButton);
    taskActions.appendChild(completeButton);
    taskActions.appendChild(deleteButton);
    

    taskItem.appendChild(taskId);
    taskItem.appendChild(taskText);
    taskItem.appendChild(taskActions);

    taskList.appendChild(taskItem);
  });
};

const renderCompletedTaskList = () => {
  const completedTaskList = document.querySelector('#completed-task-list');
  completedTaskList.innerHTML = '';

  completedTasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'flex items-center mb-4';

    const taskId = document.createElement('div');
    taskId.className = 'w-1/12 text-gray-600 text-md mr-3';
    taskId.innerHTML = index + 1;

    const taskText = document.createElement('div');
    taskText.className = 'w-8/12 px-4 py-2 text-gray-800 border rounded-lg border-gray-200 bg-green-200 mr-5';
    taskText.innerHTML = task;

    const taskActions = document.createElement('div');
    taskActions.className = 'w-2/12 flex justify-end';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'ml-3 px-3 py-2 bg-red-500 text-white font-bold rounded-xl';
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', () => {
      completedTasks.splice(index, 1);
      renderCompletedTaskList();
    });

    taskActions.appendChild(deleteButton);

    taskItem.appendChild(taskId);
    taskItem.appendChild(taskText);
    taskItem.appendChild(taskActions);

    completedTaskList.appendChild(taskItem);
  });
};

const addTask = (event) => {
  event.preventDefault();
  const taskInput = document.querySelector('input[name="task"]');
  tasks.push(taskInput.value);
  renderTaskList();
  taskInput.value = '';
};

const addTaskForm = document.querySelector('#add-task-form');
addTaskForm.addEventListener('submit', addTask);

renderTaskList();
renderCompletedTaskList();



