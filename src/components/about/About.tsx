import { useCounterStore } from "../../stores/counter";
import Navbar from "../navbar/NavBar";

function About(): React.ReactNode {
  const { count, inc } = useCounterStore();

  return (
    <>
      <Navbar />
      <h1>About</h1>
      <p>About page</p>
      <p>{count}</p>
      <button onClick={inc}>One Up</button>
    </>
  );
}

export default About;
