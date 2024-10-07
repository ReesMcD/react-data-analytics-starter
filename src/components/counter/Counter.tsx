import useCounterStore from "../../stores/counter/useCounterStore";

function Counter(): React.ReactElement {
  const { count, inc } = useCounterStore();

  return (
    <>
      <h2>Counter</h2>
      <p className="">{count}</p>
      <button onClick={inc} className="">
        One Up
      </button>
    </>
  );
}

export default Counter;
