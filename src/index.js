import { createStore, combineReducers } from "redux";

const counterReducer = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  return state;
};
const action = {
  type: "INCREMENT"
};

const todosReducer = (state = [], action) => {
  if (action.type === "ADD_TODO") {
    return [...state, "Learn Redux"];
  }
  return state;
};
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
});

const store = createStore(rootReducer);
console.log(store.getState());
store.dispatch(action);
console.log(store.getState());
