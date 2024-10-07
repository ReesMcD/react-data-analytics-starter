import Counter from "../../components/counter/Counter";
import PageWrapper from "../../components/page-wrapper/PageWrapper";

function Charts(): React.ReactNode {
  return (
    <PageWrapper>
      <div>
        <h1>Charts</h1>
        <p>Charts page</p>
      </div>
      <Counter />
    </PageWrapper>
  );
}

export default Charts;
