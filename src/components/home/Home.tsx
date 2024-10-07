import { useCounterStore } from "../../stores/counter";
import PageWrapper from "../page-wrapper/PageWrapper";

function Home(): React.ReactNode {
  const { count, inc } = useCounterStore();

  return (
    <PageWrapper>
      <h1 className="">Home</h1>
      <p className="">Welcome to the Home page!</p>
      <p className="">{count}</p>
      <button onClick={inc} className="">
        One Up
      </button>
    </PageWrapper>
  );
}

export default Home;
