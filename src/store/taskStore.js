import { ref, watch } from 'vue';

const tasks = ref([]);

const loadTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks.value = JSON.parse(storedTasks);
    }
};

const syncTasksWithLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks.value));
};

watch(tasks, syncTasksWithLocalStorage, { deep: true });

const addTask = (task) => {
    tasks.value.push(task);
};

const deleteTask = (taskId) => {
    tasks.value = tasks.value.filter(task => task.id !== taskId);
};

const editTask = (taskId, updatedTitle) => {
    const task = tasks.value.find(task => task.id === taskId);
    if (task) {
        task.task = updatedTitle;
    }
};

loadTasksFromLocalStorage();

export default {
    tasks,
    addTask,
    deleteTask,
    editTask
};
