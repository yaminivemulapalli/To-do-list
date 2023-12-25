document.addEventListener('DOMContentLoaded', function () {
    const newTaskForm = document.getElementById('new-task');
    const taskInput = document.getElementById('task-add');
    const taskList = document.querySelector('.tasks');
    newTaskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });
    function addTask(taskText) {
        if (taskText.trim() !== '') {
            const taskDiv = document.createElement('div');
            taskDiv.classList.add('task');

            const taskInput = document.createElement('input');
            taskInput.type = 'text';
            taskInput.classList.add('text');
            taskInput.value = taskText;
            taskInput.readOnly = true;

            const actionsDiv = document.createElement('div');
            actionsDiv.classList.add('actions');

            const editButton = document.createElement('button');
            editButton.classList.add('edit');
            editButton.textContent = 'edit';
            editButton.addEventListener('click', function () {
                editTask(taskInput);
            });

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete');
            deleteButton.textContent = 'delete';
            deleteButton.addEventListener('click', function () {
                deleteTask(taskDiv);
            });

            actionsDiv.appendChild(editButton);
            actionsDiv.appendChild(deleteButton);

            taskDiv.appendChild(taskInput);
            taskDiv.appendChild(actionsDiv);

            taskList.appendChild(taskDiv);
        }
    }

  
    function editTask(taskInput) {
        taskInput.readOnly = !taskInput.readOnly;
        taskInput.focus();
    }
    function deleteTask(taskDiv) {
        taskDiv.remove();
    }
});
