type AddTodo = (newTodo: string) => void;

interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}