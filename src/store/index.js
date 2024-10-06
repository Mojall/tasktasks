import { createStore } from 'vuex';

function loadTasksFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default createStore({
    state: {
        tasks: loadTasksFromLocalStorage(),
    },
    mutations: {
        ADD_TASK(state, task) {
            const defaultFields = {
                status: 'новая',
                description: '',
                deadline: null,
                assignedUser: null
            };

            state.tasks.push(task);
            saveTasksToLocalStorage(state.tasks);
        },
        EDIT_TASK(state, { id, updatedTask }) {
            const index = state.tasks.findIndex(t => t.id === id);
            if (index !== -1) {
                state.tasks[index] = { ...state.tasks[index], ...updatedTask };
                saveTasksToLocalStorage(state.tasks);
            }
        },
        DELETE_TASK(state, id) {
            state.tasks = state.tasks.filter(t => t.id !== id);
            saveTasksToLocalStorage(state.tasks);
        }
    },
    actions: {
        addTask({ commit }, task) {
            commit('ADD_TASK', task);
        },
        editTask({ commit }, { id, updatedTask }) {
            commit('EDIT_TASK', { id, updatedTask });
        },
        deleteTask({ commit }, id) {
            commit('DELETE_TASK', id);
        }
    },
    getters: {
        myTasks: state => state.tasks.filter(task => !task.fromOtherInstance),
        otherTasks: state => state.tasks.filter(task => task.fromOtherInstance)
    }
});
