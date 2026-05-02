import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react";
import TaskItem from "./task-item";
import useTask from "../hooks/use-task";

export default function TasksList() {
  const {tasks} = useTask();
  console.log(tasks);

  const {prepareTask} = useTask();



  function handleNewTask(){
    prepareTask();
  }

  return (
    <>
      <section>
        <Button icon={PlusIcon} onClick={handleNewTask}  className="w-full"> Nova Tarefa</Button>
        
      </section>
      <section className="space-y-2 ">
        <TaskItem/>    
        <TaskItem/>    
        <TaskItem/>    
        <TaskItem/>    
            
        </section>
    </>
  );
}
