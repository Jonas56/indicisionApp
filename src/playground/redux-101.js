import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () => ({
  type: "RESET",
});

const setCount = ({ count = 0 } = {}) => ({
  type: "SET",
  count,
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "SET": {
      return {
        count: action.count,
      };
    }
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementCount({ incrementBy: 16 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: 10 }));

store.dispatch(decrementCount({ decrementBy: 6 }));
