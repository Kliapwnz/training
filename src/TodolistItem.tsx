import {FilterValuesType, TaskType} from "./App";
import {Button} from "./Button";

type Props = {
   title: string
   task: TaskType[]
   deleteTask: (taskId: number) => void
   changeFilter: (filter: FilterValuesType) => void
}


export const TodolistItem = ({title, task, deleteTask, changeFilter}: Props) => {
   return (
      <div>
         <h3>{title}</h3>
         <div>
            <input/>
            <Button title={"+"}/>
         </div>

         {task.length === 0 ? "тасок нет" : (
            <ul>
               {task.map(t => {
                  return (
                     <li>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button title={"X"} onClick={() => {
                           deleteTask(t.id)
                        }}/>
                     </li>
                  )
               })}
            </ul>
         )
         }
         <div>
            <Button title={"All"} onClick={() => changeFilter("all")}/>
            <Button title={"Active"} onClick={() => changeFilter("active")}/>
            <Button title={"Complete"} onClick={() => changeFilter("completed")}/>

         </div>
      </div>
   );
};

