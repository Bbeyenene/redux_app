import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logged } from "../redux/action";
const MyCalc = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(logged())}>login</button>

      {isLogged ? (
        <>
          <h1>counter: {counter}</h1>
          <button onClick={() => dispatch(increment(5))}>+</button>
          <button onClick={() => dispatch(decrement(5))}>-</button>
        </>
      ) : (
        <h1>not logged in</h1>
      )}
    </div>
  );
};

export default MyCalc;
