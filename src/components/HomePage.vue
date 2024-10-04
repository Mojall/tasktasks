<template>
    <div class="container">
        <header>
            <button @click="myTasks">
                Мои
            </button>
            <button @click="otherTasks">
                Чужие
            </button>
        </header>
        <main>
            <div class="info-container">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est excepturi id saepe ullam vero! Alias at beatae dolorum eos est facilis impedit possimus quae! Aliquid id magnam sequi velit vero.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate debitis facere harum iure magni nihil, officiis perspiciatis placeat. Explicabo harum itaque laborum laudantium magni necessitatibus omnis qui quisquam, totam voluptate!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci, at consequuntur cum deleniti doloremque eius explicabo facere hic illum in magni quia quos reiciendis, reprehenderit sint tempora vel!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deleniti distinctio ipsa modi quaerat tempore velit vitae? Ab deserunt dolores fugit, neque quas repellat. A aperiam ex odit quidem quisquam?
            </div>
        </main>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();

        const myTasks = () => {
            router.push('/mytasks');
        };

        const otherTasks = () => {
            router.push('/othertasks');
        }

        return {
            myTasks,
            otherTasks
        }
    }
})
</script>

<style lang="sass" scoped>
header
  display: flex
  justify-content: space-between



</style>
