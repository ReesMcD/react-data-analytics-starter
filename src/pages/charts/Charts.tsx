import PageWrapper from "../../components/page-wrapper/PageWrapper";
import useCounterStore from "../../stores/counter/useCounterStore";

function Charts(): React.ReactNode {
  const { count, inc } = useCounterStore();

  return (
    <PageWrapper>
      <div>
        <h1>Charts</h1>
        <p>Charts page</p>
      </div>
      <div>
        <h2>Counter</h2>
        <p className="">{count}</p>
        <button onClick={inc} className="">
          One Up
        </button>
      </div>
    </PageWrapper>
  );
}

export default Charts;
