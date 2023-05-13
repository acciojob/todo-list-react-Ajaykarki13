
import { indexOf } from "cypress/types/lodash";
import React, {useState} from "react";

const Todo = () => {

    const[text,setText] = useState('');
    const[list,setList] = useState([]) ;

function handleAdd(e){
setList([...list,text])
setText('')
}

function handleSave(ind)
{

    const savetask = [...list]
    savetask[ind] = text
    setList(savetask)
    setText('')
    
}

function handleDelete(ind)
{
    const newList = [...list]
    //setList(newList.filter((t,i)=>{i!==ind}))
    newList.splice(ind,1)
setList(newList);
}


  return (
    <>
    
    <h2>To do list</h2>

    <div className="add_tasks_section">

    <input type = 'text' value={text} onChange={(e)=>setText(e.target.value)}  />
    <button  className="add_button" onClick={handleAdd} >
        Add</button>
</div>

<div className="tasks_section">

    {list.map((t,i)=>(
        <>
            {t}
            <button onClick= {()=>setText(task)}> Edit </button>
<button onClick={()=>handleDelete(i)}> Delete </button>

{text && i === list.indexOf(text) &&
(<button  className="save" onClick={()=>handleSave(i)}> Save </button>)}

</>

    
     ))}
    </div>
    </>
  )
}

export default Todo