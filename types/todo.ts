export type tCreateTodo = {
    title: string;
}

export type tTodo = tCreateTodo & {
    id: number;
    completed: boolean;
}

export const DefaultCreateTodo: tCreateTodo = {
    title: '',
}

export const DefaultTodo: tTodo = {
    ...DefaultCreateTodo,
    id: 0,
    completed: false,
}


