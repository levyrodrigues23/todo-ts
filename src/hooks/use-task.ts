import { useTaskStore } from "../store/use-task-store";

export default function useTask() {
  const prepareTask = useTaskStore((state) => state.prepareTask);
  const tasks = useTaskStore((state) => state.tasks);

  return {
    tasks,
    prepareTask,
  };
}