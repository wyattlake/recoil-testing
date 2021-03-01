import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "state/todoList";
import { TodoItem } from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";
import styles from "styles/Home.module.css";

export const TodoList: React.FC = ({}) => {
    const todoList = useRecoilValue(todoListState);
    return (
        <>
            <TodoItemCreator className={styles.todoItemCreator} />
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
};
