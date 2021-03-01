import { atom } from "recoil";
import { todoItem } from "models/TodoItem";

export const todoListState = atom<todoItem[]>({
    key: "todoListState",
    default: [],
});
