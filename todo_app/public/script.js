const tasksDOM = document.querySelector('.tasks');
const formDOM = document.querySelector('.task-form');
const taskInputDOM = document.querySelector('.task-input');
const formAlertDOM = document.querySelector('.form-alert');

const showTasks = async () => {
  try {
    // 自作のAPIを叩く
    const { data: tasks } = await axios.get('/api/v1/tasks');
    console.log(tasks);

    // タスクが一つもない時
    if (tasks.length === 0) {
      tasksDOM.innerHTML = `<h5 class="empty-list">何もないよ...</h5>`;
      return;
    }
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
    <button type="button" class="delete-btn" data-id="${_id}">
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
    formAlertDOM.style.display = 'block';
    formAlertDOM.textContent = 'タスクを追加しました';
    formAlertDOM.classList.add = 'text-success';
  } catch (err) {
    console.log(err);
    formAlertDOM.style.display = 'block';
    formAlertDOM.innerHTML = '無効です。もう一度やり直してください';
  }

  setTimeout(() => {
    formAlertDOM.style.display = 'none';
  }, 3000);
});

// タスクを削除

tasksDOM.addEventListener('click', async (event) => {
  const element = event.target;
  console.log(element);
  if (element.parentElement.classList.contains('delete-btn')) {
    const id = element.parentElement.dataset.id;
    console.log(id);
    try {
      await axios.delete(`/api/v1/tasks/${id}`);
      showTasks();
    } catch (err) {
      console.log(err);
    }
  }
});
