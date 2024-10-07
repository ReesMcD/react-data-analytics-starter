import Counter from "../../components/counter/Counter";
import PageWrapper from "../../components/page-wrapper/PageWrapper";
import Posts from "../../components/posts/Posts";

function Home(): React.ReactNode {
  return (
    <PageWrapper>
      <div>
        <h1>Home</h1>
        <p>Welcome to the Home page!</p>
      </div>
      <Counter />
      <Posts />
    </PageWrapper>
  );
}

export default Home;
