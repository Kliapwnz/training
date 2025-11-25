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
   let filteredTasks = tasks
   if (filter === "active") {
      filteredTasks = tasks.filter(t => !t.isDone)
   }
   if (filter === "completed") {
      filteredTasks = tasks.filter(t => t.isDone)
   }
   const changeFilter = (filter:FilterValuesType) => {
      setFilter(filter)
   }
   return (
      <div className="app">
         <TodolistItem
            title={"My First Todo"}
            task={filteredTasks}
            deleteTask={deleteTask}
            changeFilter={changeFilter}
         />
      </div>
   )
}

export default App
