import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = createStore((state = 1, action) => {
  switch (action.type) {
    case "incrementar":
      return state + action.payload;
    case "decrementar":
      return state - action.payload;
    default:
      return state;
  }
});

console.log(store);
store.dispatch({ type: "incrementar", payload: 2 });
store.dispatch({ type: "decrementar", payload: 2 });
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
