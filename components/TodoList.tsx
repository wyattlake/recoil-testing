import React from "react";
import { useRecoilValue } from "recoil";
import { TodoItem } from "components/TodoItem";
import { TodoItemCreator } from "components/TodoItemCreator";
import styles from "styles/Home.module.css";
import { filteredTodoListState } from "state/todoListFilter";
import { TodoListFilters } from "components/TodoListFilters";
import { todoListStats } from "state/todoListStats";

export const TodoList: React.FC = () => {
    const todoList = useRecoilValue(filteredTodoListState);
    const todoStats = useRecoilValue(todoListStats);
    return (
        <>
            <TodoItemCreator className={styles.todoItemCreator} />
            <TodoListFilters />
            <p>Notes: {todoStats.totalNum}</p>
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
};
