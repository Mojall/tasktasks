import axios from 'axios';

// Примеры работы

const API_URL = 'https://<bitrix>.bitrix24.ru/rest';
const OAUTH_TOKEN = 'токен';

const bitrixApi = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${OAUTH_TOKEN}`,
    },
});

export const getTasks = () => bitrixApi.get('/tasks.task.list');

export const createTask = (taskData) => bitrixApi.post('/tasks.task.add', taskData);

export const updateTask = (taskId, taskData) => bitrixApi.post(`/tasks.task.update?taskId=${taskId}`, taskData);

export const deleteTask = (taskId) => bitrixApi.post(`/tasks.task.delete?taskId=${taskId}`);

export const getUsers = () => bitrixApi.get('/user.get');

export const createUser = (userData) => bitrixApi.post('/user.add', userData);

export const logSyncOperation = (message) => {
};


// ещё
// Пример получения списка задач
BX24.callMethod(
    'tasks.task.list',
    {
        filter: { 'RESPONSIBLE_ID': '<USER_ID>' },
        select: ['ID', 'TITLE', 'STATUS', 'DEADLINE', 'DESCRIPTION']
    },
    function(result) {
        if(result.error()) {
            console.error(result.error());
        } else {
            console.log(result.data()); // Список задач
            if(result.more()) {
                result.next();
            }
        }
    }
);

// Пример создания задачи в другой инстанции
BX24.callMethod(
    'tasks.task.add',
    {
        fields: {
            TITLE: 'Новая задача',
            RESPONSIBLE_ID: '<USER_ID>',
            DEADLINE: '2024-12-31',
            DESCRIPTION: 'Описание задачи'
        }
    },
    function(result) {
        if(result.error()) {
            console.error(result.error());
        } else {
            console.log('Задача создана', result.data());
        }
    }
);

// Пример удаления задачи
BX24.callMethod(
    'tasks.task.delete',
    { taskId: '<TASK_ID>' },
    function(result) {
        if(result.error()) {
            console.error(result.error());
        } else {
            console.log('Задача удалена');
        }
    }
);
