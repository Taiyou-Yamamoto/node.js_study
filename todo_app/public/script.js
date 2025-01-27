const tasksDOM = document.querySelector('.tasks');
const formDOM = document.querySelector('.task-form');
const taskInputDOM = document.querySelector('.task-input');

const showTasks = async () => {
  try {
    // 自作のAPIを叩く
    const { data: tasks } = await axios.get('/api/v1/tasks');
    console.log(tasks);

    const allTasks = tasks
      .map((task) => {
        const { completed, _id, name } = task;
        console.log(name);
        return `
<div class="single-task">
  <h5>
    <span><i class="far fa-check-circle"></i></span>${name}
  </h5>
  <div class="task-links">
    <a href="#" class="edit-link">
      <i class="fas fa-edit"></i>
    </a>
    <button type="button" class="delete-btn">
      <i class="fas fa-trash"></i>
    </button>
  </div>
</div>
`;
      })
      .join('');

    tasksDOM.innerHTML = allTasks;
  } catch (err) {
    console.log(err);
  }
};

showTasks();

// タスクを新規作成
formDOM.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = taskInputDOM.value;

  try {
    await axios.post('/api/v1/tasks', { name: name });
    showTasks();
    taskInputDOM.value = '';
  } catch (err) {
    console.log(err);
  }
});
