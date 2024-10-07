import { useCounterStore } from "../../stores/counter";
import PageWrapper from "../page-wrapper/PageWrapper";

function About(): React.ReactNode {
  const { count, inc } = useCounterStore();

  return (
    <PageWrapper>
      <h1>About</h1>
      <p>About page</p>
      <p>{count}</p>
      <button onClick={inc}>One Up</button>
    </PageWrapper>
  );
}

export default About;
