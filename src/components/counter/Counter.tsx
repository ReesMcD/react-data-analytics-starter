import { useCounterStore } from "../../stores/counter/useCounterStore";

function Counter(): React.ReactElement {
  const { count, inc } = useCounterStore();

  return (
    <div
      className="flex flex-col items-center space-y-2"
      data-testid="counter-component"
    >
      <h2 className="text-xl font-bold">Post Count</h2>
      <p className="text-lg">Click to iterate through posts</p>
      <p className="text-2xl">{count}</p>
      <button
        onClick={inc}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        One Up
      </button>
    </div>
  );
}

export default Counter;
