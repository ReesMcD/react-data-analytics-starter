import { useCounterStore } from "../../stores/counter";
import Navbar from "../navbar/NavBar";

function Home(): React.ReactNode {
  const { count, inc } = useCounterStore();

  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <p>Home page</p>
      <p>{count}</p>
      <button onClick={inc}>One Up</button>
    </>
  );
}

export default Home;
