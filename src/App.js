import TaskOne from "./TaskOne/TaskOne";
import TaskTwo from "./TaskTwo/TaskTwo";
import ProductList from "./TaskThree/ProductList";

import { useState } from "react";
function App() {
  const [age, setAge] = useState();
  const [state, setState] = useState();
  const [one, setOne] = useState();
  return (
    <div>
      <TaskOne state={state} setState={setState} one={one} setOne={setOne} />
      <TaskTwo age={age} setAge={setAge} />
      <ProductList />
    </div>
  );
}

export default App;
