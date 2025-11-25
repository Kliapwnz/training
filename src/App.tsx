import './App.css'
import {TodolistItem} from "./TodolistItem";

export type TaskType = {
   id: number,
   title: string,
   isDone: boolean
}

function App() {
   const tasks1: TaskType[] = [
      {id: 1, title: 'HTML&CSS', isDone: true},
      {id: 2, title: 'JS', isDone: true},
      {id: 3, title: 'ReactJS', isDone: false},
   ]

   const tasks2: TaskType[] = [
      {id: 1, title: 'Hello world', isDone: true},
      {id: 2, title: 'I am Happy', isDone: false},
      {id: 3, title: 'Yo', isDone: false},
   ]
   return (
      <div className="app">
         <TodolistItem title={"My First Todo"} task={tasks1}/>
         <TodolistItem title={"My Second Todo"} task={tasks2}/>
      </div>
   )
}

export default App
