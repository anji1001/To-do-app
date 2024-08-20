import { useState } from "react";

export default function ToDo({ item,handleRemoveItem,index }) {
  const [isComplete, setComplete] = useState(false);
  function handleOnComplete() {
        setComplete((prev)=>!prev);
  }

  return (
    <div >
      <input type="checkbox" checked={isComplete} onChange={handleOnComplete}></input>
      <span
        style={{ "textDecoration": isComplete ? "line-through" : "none",paddingLeft:'1rem',paddingRight:'1rem' }}
      >{item}{index}</span>
      
      <button onClick={()=>handleRemoveItem(index)}>X</button>
    </div>
  );
}
