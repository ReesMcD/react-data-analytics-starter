import Counter from "../../components/counter/Counter";
import PageWrapper from "../../components/page-wrapper/PageWrapper";
import Radar from "../../components/radar/Radar";

function ChartsPage(): React.ReactNode {
  return (
    <PageWrapper>
      <div
        className="flex justify-between items-center"
        data-testid="charts-page"
      >
        <div>
          <h1>Charts</h1>
        </div>
        <Counter />
      </div>
      <Radar />
    </PageWrapper>
  );
}

export default ChartsPage;
