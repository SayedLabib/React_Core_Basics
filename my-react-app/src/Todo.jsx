
// export default function Todo(props){ 
//     return (
//         <li>Task: {props.task}</li>
//     );
//  }

// Conditionla rendering in React

export default function Todo({ task, isDone }){ 
 
        if(isDone === true)
        {
            return(
              <li>Task: {task} - Finished</li>
            )
            
        } else {
            return(
              <li>Task: {task} - Not Finished</li>
            )
        }   
    }

 