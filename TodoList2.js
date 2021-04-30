import React from 'react';
import Todo2 from './Todo2';
 
 
const TodoList2 = ({todoList,handleToggle,handleFilter}) => {
   return (
       <div>
           {todoList.map(todo => {
               return (
                   <Todo2 todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
               )
           })}
           <button style={{maegin:'20px'}} onClick={handleFilter}>Clear Complete </button>
       </div>
   );
};
 
export default TodoList2;