import AllPosts from "../../components/all-posts/AllPosts";
import Counter from "../../components/counter/Counter";
import PageWrapper from "../../components/page-wrapper/PageWrapper";
import SinglePost from "../../components/single-post/SinglePost";

function HomePage(): React.ReactNode {
  return (
    <PageWrapper>
      <div
        className="flex justify-between items-center"
        data-testid="home-page-header"
      >
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <Counter />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 pr-0 md:pr-4">
          <AllPosts />
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-4">
          <SinglePost id={1} />
        </div>
      </div>
    </PageWrapper>
  );
}

export default HomePage;
