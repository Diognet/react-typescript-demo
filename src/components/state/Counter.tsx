import { useReducer } from 'react';

type ContainerState = {
  count: number;
};
type ContainerAction = {
  type: string;
  payload: number;
};

const initialState = { count: 0 };

function reducer(state: ContainerState, action: ContainerAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'c':
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
        Decrement 10
      </button>
    </>
  );
};
