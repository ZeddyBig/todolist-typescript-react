import React, { FC, useState } from 'react';

interface TodoItemsProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemsProps> = ({todo}) => {
    const [checked, setChecked] = useState<boolean>(todo.completed);

    const changeChecked = (checked: boolean) => {
        setChecked(!checked);
        todo.completed = checked;
    }

    return (
        <div>
            <input type="checkbox" checked={checked} onChange={() => changeChecked(checked)}/>
            {todo.title}
        </div>
    );
};

export default TodoItem;