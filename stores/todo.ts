import type { tCreateTodo, tTodo } from "~/types/todo";

export const useTodoStore = defineStore('todo', () => {
    const todos = useState<tTodo[]>('todos');

    if (!todos.value)
        todos.value = [];

    return {
        todos,
        add(todo: tCreateTodo) {
            const id = Math.max(...todos.value.map(t => t.id), 0) + 1;
            todos.value.push({ ...todo, id, completed: false });
        },
        remove(id: number) {
            const index = todos.value.findIndex(t => t.id === id);
            todos.value.splice(index, 1);
        },
        toggle(id: number) {
            const index = todos.value.findIndex(t => t.id === id);
            todos.value[index].completed = !todos.value[index].completed;
        },
    }
});
