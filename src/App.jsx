import { useRef, useState } from "react";
import ToDo from "./ToDo/ToDo";

function App() {
  const [toDos, updateToDos] = useState([]);
  const inputRef = useRef(null);
  function handleAddItem(event) {
    if (event.keyCode === 13) {
      updateToDos((prev) => {
        const newToDos = [...prev];
        newToDos.push(event.target.value);
        inputRef.current.value = "";
        return newToDos;
      });
    }
  }

  function handleRemoveItem(index) {
    updateToDos((prev) => {
      return prev.filter((_, i) => i !== index);
    });
  }

  return (
    <>
      <header>
        <h1>To Do</h1>
      </header>
      <main>
        <input
          type="text"
          required
          style={{ marginBottom: "1rem" }}
          ref={inputRef}
          onKeyDown={handleAddItem}
        />
        {toDos.map((toDo, index) => (
          <ToDo
            item={toDo}
            key={index}
            index={index}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </main>
    </>
  );
}

export default App;
