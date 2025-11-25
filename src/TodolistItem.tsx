import {TaskType} from "./App";
import {Button} from "./Button";

type Props = {
   title: string
   task: TaskType[]
}


export const TodolistItem = ({title, task}: Props) => {
   return (
      <div>
         <h3>{title}</h3>
         <div>
            <input/>
            <Button title={"+"}/>
         </div>

            {task.length === 0 ? "тасок нет" :(
               <ul>
                  {task.map(t => {
                     return (
                        <li>
                           <input type="checkbox" checked={t.isDone}/>
                           <span>{t.title}</span>
                           <Button title={"X"} onClick={()=> {alert("Удаляй")}}/>
                        </li>
                     )
                  })}
               </ul>
            )
            }
         <div>
           <Button title={"All"}/>
           <Button title={"Active"}/>
           <Button title={"Complete"}/>

         </div>
      </div>
   );
};

