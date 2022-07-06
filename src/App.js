import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

const initialState = {
  entities: []
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'todo/add': {
      return{
        ...state,
        entities: state.entities.concat({...action.payload})
      }
    }
    default:
      return state;
  }
};

const makeRandomId= (length) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
 }
 return result;
}

const TodoItem = (props) => {
  const {key, todo} = props;
  return(
    <li id={key}>{todo.title}</li>
  );

}

function App() {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  {console.log(state)}
  const Submit = e => {
    console.log("Comienza la función submit")
    e.preventDefault();
    if(!value.trim()){
      return 
    }
    const id = makeRandomId();
    const todo = {title: value, completed: false, id}
    dispatch({type: 'todo/add', payload: todo});
    setValue('');

  }
  return (
    <div>
      <form onSubmit={Submit}>
        <input value={value} onChange={ e => setValue(e.target.value) } />
        <button type="submit">Enviar</button>
      </form>
        <button>MOSTRAR TODOS</button>
        <button>MOSTRAR COMPLETOS</button>
        <button>MOSTRAR INCOMPLETOS</button>
        <ul>
          {state.entities.map((todo, index) => <TodoItem key={index} todo={todo}/>)}
        </ul>
    </div>
  );
}

export default App;
