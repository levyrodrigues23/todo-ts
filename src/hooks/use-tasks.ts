import { useTaskStore } from "../store/use-task-store";

export default function useTasks() {
  const tasks = useTaskStore((state) => state.tasks);

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}