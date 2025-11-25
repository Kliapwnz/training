import './App.css'
import {TodolistItem} from "./TodolistItem";
import {useState} from "react";

export type TaskType = {
   id: number,
   title: string,
   isDone: boolean
}
export type FilterValuesType = "all" | "active" | "completed"



function App() {
   const [filter, setFilter] = useState<FilterValuesType>("all")
   let [tasks, setTasks] = useState<TaskType[]>([
      {id: 1, title: 'HTML&CSS', isDone: true},
      {id: 2, title: 'JS', isDone: true},
      {id: 3, title: 'ReactJS', isDone: false},
   ])


   const deleteTask = (taskId: number) => {
      const DeletedTasks = tasks.filter(t => {
         return t.id !== taskId
      })
      setTasks(DeletedTasks)
   }
   return (
      <div className="app">
         <TodolistItem
            title={"My First Todo"}
            task={tasks}
            deleteTask={deleteTask}
         />
      </div>
   )
}

export default App
