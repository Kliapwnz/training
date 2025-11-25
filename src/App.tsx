import './App.css'
import {TodolistItem} from "./TodolistItem";

export type TaskType = {
   id: number,
   title: string,
   isDone: boolean
}

function App() {
   let tasks: TaskType[] = [
      {id: 1, title: 'HTML&CSS', isDone: true},
      {id: 2, title: 'JS', isDone: true},
      {id: 3, title: 'ReactJS', isDone: false},
   ]


   const deleteTask = (taskId:number) => {
      alert(taskId)

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
