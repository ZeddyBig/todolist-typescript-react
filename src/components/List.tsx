import React, { FC } from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    filter: string;
}

export default function List<T>(props: ListProps<T>) {
    const drawList = (filter: string) => {
        if (filter === 'All') {
            return props.items.map(props.renderItem)
        } else if (filter === 'Active') {
            return props.items.map(props.renderItem)
        } else {
            return props.items.map(props.renderItem)
        }
        
    }

    return (
        <div>
            {
                drawList(props.filter)
            }
        </div>
    )
};