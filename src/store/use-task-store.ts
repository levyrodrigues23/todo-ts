import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Task, TASKS_KEY, TaskState } from "../models/task";

interface TaskStore {
  tasks: Task[];
  prepareTask: () => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, changes: Partial<Task>) => void;
  concludeTask: (id: string) => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],

      prepareTask: () =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: Math.random().toString(36).substring(2, 9),
              title: "",
              state: TaskState.Creating,
            },
          ],
        })),

      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id),
        })),

      updateTask: (id, changes) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, ...changes } : t
          ),
        })),

      concludeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, concluded: !t.concluded } : t
          ),
        })),
    }),
    {
      name: TASKS_KEY, // chave no localStorage
    }
  )
);
