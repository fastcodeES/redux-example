import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

export const reducer = (state = 0, action) => {
  console.log({state, action});
  switch (action.type) {
    case "incrementar":
      return state + action.payload;
    case "decrementar":
      return state - action.payload;
    case "set":
      return action.payload;
    default:
      return state;
  }
}

function App(props) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [valor, setValor] = useState(0);
  return (
    <div>
      <p>Contador: {state}</p>
      <button onClick={() => dispatch( {type: "incrementar", payload: 1})}>incrementar</button>
      <button onClick={() => dispatch({type: "decrementar", payload: 1})}>decrementar</button>
      <button onClick={() => dispatch({type: "set", payload: valor})}>set</button>
      <input value={valor} onChange={e => setValor(Number(e.target.value))}/>
    </div>
  );
}

export default App;
