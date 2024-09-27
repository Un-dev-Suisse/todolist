<template>
    <div class="container mt-5">
        <h3>Salut, {{ username() }}</h3>
        <todo-create
            v-on:add="store.add"
        />
        <div class="mt-3">
            <ul class="list-group">
                <li
                    v-for="todo in store.todos"
                    class="list-group item mb-3"
                >
                    <todo
                        :key="todo.id"
                        :todo="todo"
                        v-on:remove="store.remove"
                        v-on:toggle="store.toggle"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

const store = useTodoStore();

</script>