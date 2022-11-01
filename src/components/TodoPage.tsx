import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import axios from 'axios';
import TodoItem from './TodoItem';
import List from './List';

const TodoPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [selectedBtn, setSelectedBtn] = useState('Completed');
    
    useEffect(() => {
        fetchTodos()
    }, [])

    const addTodo: AddTodo = (newTodo) => {
        if (newTodo !== '') {
            setTodos([...todos, {id: Date.now(), title: newTodo, completed: false}])
        }
    }
    
    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    const isSelected = (value: string):boolean => selectedBtn === value;
    const handleRadioClick = (e: ChangeEvent<HTMLInputElement>):void => setSelectedBtn(e.target.value);

    return (
        <div className='todo-page'>
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodo}/>
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
                filter={selectedBtn}
            />
            <div>
                <label>
                    All
                    <input type="radio" name='filter' value='All' checked={isSelected('All')} onChange={handleRadioClick}/>
                </label>
                <label>
                    Active
                <input type="radio" name='filter' value='Active' checked={isSelected('Active')} onChange={handleRadioClick}/>
                </label>
                <label>
                    Completed
                <input type="radio" name='filter' value='Completed' checked={isSelected('Completed')} onChange={handleRadioClick}/>
                </label>
            </div>
        </div>
    );
};

export default TodoPage;