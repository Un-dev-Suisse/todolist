<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-group mb-3">
            <label for="todo">Ajouter une tâche</label>
            <input
                type="text" id="todo"
                v-model="creatingTodo.title" class="form-control"
                required
            >
        </div>
        <button type="submit" class="btn btn-primary">Ajouter</button>
    </form>
</template>

<script setup lang="ts">
import { DefaultCreateTodo, type tCreateTodo } from '~/types/todo';

const emit = defineEmits(['add']);
const creatingTodo = ref<tCreateTodo>({...DefaultCreateTodo});

function handleSubmit() {
    emit('add', creatingTodo.value);
    creatingTodo.value = {...DefaultCreateTodo};
}

</script>