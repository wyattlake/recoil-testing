import { todoItem } from "models/TodoItem";
import { atom, selector } from "recoil";
import { todoListState } from "./todoList";

export type todoListFilter = "Show all" | "Show Completed" | "Show Uncompleted";

export const todoListFilterState = atom<todoListFilter>({
    key: "todoListFilterState",
    default: "Show all",
});

export const filteredTodoListState = selector<todoItem[]>({
    key: "filteredTodoListState",
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case "Show Completed":
                return list.filter((item) => item.isComplete);
            case "Show Uncompleted":
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
});
