import { todoItem } from "models/TodoItem";
import React, { HTMLProps, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "state/todoList";
import styles from "styles/Home.module.css";

export const TodoItemCreator: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue("");
    };

    const onChange = ({ target: { value } }) => {
        setInputValue(value);
    };

    return (
        <div {...props}>
            <input
                type="text"
                value={inputValue}
                className={styles.topCard}
                onChange={onChange}
            />
            <button onClick={addItem} className={styles.addButton}>
                Add Todo
            </button>
        </div>
    );
};

let id = 0;
function getId() {
    return id++;
}
