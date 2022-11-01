import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

interface TodoFormProps {
    addTodo: AddTodo;
}

export const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type='text' value={newTodo} className='todo-input' placeholder='Add a task' onChange={handleChange}/>
        </form>
    );
};

export default TodoForm;