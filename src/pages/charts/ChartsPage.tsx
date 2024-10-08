import Counter from "../../components/counter/Counter";
import PageWrapper from "../../components/page-wrapper/PageWrapper";

function ChartsPage(): React.ReactNode {
  return (
    <PageWrapper>
      <div className="flex justify-between items-center">
        <div>
          <h1>Charts</h1>
        </div>
        <Counter />
      </div>
    </PageWrapper>
  );
}

export default ChartsPage;
