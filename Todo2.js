import React from 'react';
 
const Todo2 = ({todo}) => {
   return (
       <div className={todo.complete ? "strike" : ""}>
           {todo.task}
       </div>
   );
};
 
export default Todo2;