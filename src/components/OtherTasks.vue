<template>
    <div class="container">
        <header>
            <h3>Чужие задачи</h3>
            <BackIcon @click="backToHome" />
        </header>
        <main>
            <div class="table-container">
                <button @click="addNewTask('other')">Добавить</button>
                <el-table :data="otherTasks" style="width: 100%">
                    <el-table-column label="Список битр" colspan="3" align="center">
                        <el-table-column prop="task" label="Название сайта"></el-table-column>
                        <el-table-column prop="status" label="Ссылка на CRM"></el-table-column>
                        <el-table-column label="Редактировать" width="130" align="center">
                            <template v-slot="scope">
                                <div class="button-container">
                                    <EditIcon @click="editMyTask(scope.row)" />
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column label="Удалить" width="100">
                            <template v-slot="scope">
                                <div class="button-container">
                                    <DeleteIcon @click="deleteMyTask(scope.row)" />
                                </div>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table>
            </div>
        </main>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { useRouter } from 'vue-router';
import { ElButton, ElTable, ElTableColumn } from 'element-plus';
import EditIcon from '../items/EditIcon.vue';
import DeleteIcon from '../items/DeleteIcon.vue';
import BackIcon from '../items/BackIcon.vue';

export default {
    components: {
        BackIcon,
        DeleteIcon,
        EditIcon,
        ElButton,
        ElTable,
        ElTableColumn
    },
    setup() {
        const router = useRouter();
        return { router };
    },
    computed: {
        ...mapGetters(['otherTasks','myTasks'])
    },
    methods: {
        ...mapActions(['addTask', 'editTask', 'deleteTask']),
        addNewTask() {
            const taskTitle = prompt('Введите название задачи');
            if (taskTitle) {
                const taskId = Date.now();
                this.addTask({
                    id: taskId,
                    task: taskTitle,
                    status: 'https://.......',
                    fromOtherInstance: false,
                    relatedId: taskId + 1
                });
                this.addTask({
                    id: taskId + 1,
                    task: taskTitle + " (Чужая)",
                    status: 'https://.......',
                    fromOtherInstance: true,
                    relatedId: taskId
                });
            }
        },
        editMyTask(task) {
            const updatedTitle = prompt('Введите новое название задачи', task.task);
            if (updatedTitle) {
                this.editTask({
                    id: task.id,
                    updatedTask: {
                        task: updatedTitle,
                    }
                });

                const relatedTask = this.otherTasks.find(t => t.relatedId === task.id);
                if (relatedTask) {
                    this.editTask({
                        id: relatedTask.id,
                        updatedTask: {
                            task: updatedTitle + " (Чужая)",
                            description: 'Обновленное описание (Чужая)',
                            deadline: new Date(),
                            assignedUser: 'Обновленный пользователь (Чужая)'
                        }
                    });
                }
            }
        },
        deleteMyTask(task) {
            this.deleteTask(task.id);

            const relatedTask = this.myTasks.find(t => t.relatedId === task.id);
            if (relatedTask) {
                this.deleteTask(relatedTask.id);
            }
        },
        backToHome() {
            this.router.push('/');
        }
    }
};
</script>

<style lang="sass" scoped>
header
  display: flex
  justify-content: space-between

.table-container
  display: flex
  flex-direction: column
  gap: 10px
  max-height: 80vh
  overflow-y: auto

.el-table
  max-height: 100%
  overflow-y: auto

.button-container
  display: flex
  justify-content: center
</style>
