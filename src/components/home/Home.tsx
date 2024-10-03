import { useCounterStore } from "../../stores/counter";
import PageWrapper from "../page-wrapper/PageWrapper";

function Home(): React.ReactNode {
  const { count, inc } = useCounterStore();

  return (
    <PageWrapper>
      <h1 className="text-4xl font-bold mb-4">Home</h1>
      <p className="text-lg mb-2">Welcome to the Home page!</p>
      <p className="text-2xl mb-6">{count}</p>
      <button
        onClick={inc}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        One Up
      </button>
    </PageWrapper>
  );
}

export default Home;
