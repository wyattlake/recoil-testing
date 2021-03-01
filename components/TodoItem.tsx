import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "state/todoList";
import { todoItem } from "models/TodoItem";

type TodoItemProps = {
    item: todoItem;
};

export const TodoItem: React.FC<TodoItemProps> = (props) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === props.item);

    const editItemText = ({ target: { value } }) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...props.item,
            text: value,
        });

        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...props.item,
            isComplete: !props.item.isComplete,
        });

        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    };

    return (
        <div>
            <input
                type="text"
                value={props.item.text}
                onChange={editItemText}
            />
            <input
                type="checkbox"
                checked={props.item.isComplete}
                onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>X</button>
        </div>
    );
};

function replaceItemAtIndex(
    arr: todoItem[],
    index: number,
    newValue: todoItem
) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: todoItem[], index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
