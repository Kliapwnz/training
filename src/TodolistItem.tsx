import {TaskType} from "./App";

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
            <button>+</button>
         </div>
         <ul>
            {task.map(t => {
               return (
                  <li>
                     <input type="checkbox" checked={t.isDone}/>
                     <span>{t.title}</span>
                  </li>
               )
            })}
         </ul>
         <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
         </div>
      </div>
   );
};

