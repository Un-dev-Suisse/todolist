<template>
    <div class="card">
        <div class="card-body">
            <div class="d-flex align-items-center">
                <div class="form-check me-3">
                    <input
                        class="form-check-input" type="checkbox"
                        :value="todo.completed" :id="`tood-${todo.id}`"
                        @change="emit('toggle', todo.id)"
                    >
                    <label class="form-check-label" :for="`tood-${todo.id}`">
                        {{ todo.title }}
                    </label>
                </div>
                <i class="bi bi-trash3-fill text-danger"
                @click="emit('remove', todo.id)"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { tTodo } from '~/types/todo';

const emit = defineEmits(['remove', 'toggle']);
const { todo } = defineProps({
    todo: {
        type: Object as PropType<tTodo>,
        required: true
    }
})

</script>

<style scoped>

button {
    font-size: 16px;
    padding-top: 0.5px;
    padding-bottom: 0.5px;
}

</style>