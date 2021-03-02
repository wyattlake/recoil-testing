import { todoItem } from "models/TodoItem";
import { selector } from "recoil";
import { todoListState } from "state/todoList";

export type todoListStats = {
    totalNum: number;
    totalCompleted: number;
    totalUncompleted: number;
    percentCompleted: number;
};

export const todoListStats = selector<todoListStats>({
    key: "todoListStats",
    get: ({ get }) => {
        const list: todoItem[] = get(todoListState);
        const totalNum = list.length;
        const totalCompleted = list.filter((todo) => todo.isComplete).length;
        const totalUncompleted = totalNum - totalCompleted;
        const percentCompleted =
            totalNum === 0 ? 0 : (totalCompleted / totalNum) * 100;
        return {
            totalNum,
            totalCompleted,
            totalUncompleted,
            percentCompleted,
        };
    },
});
