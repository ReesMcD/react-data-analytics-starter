import PageWrapper from "../../components/page-wrapper/PageWrapper";
import Post from "../../models/Post";
import useCounterStore from "../../stores/counter/useCounterStore";
import usePostStore from "../../stores/post/usePostStore";
function Home(): React.ReactNode {
  const { count, inc } = useCounterStore();
  const { posts, fetchPosts } = usePostStore();
  fetchPosts();

  return (
    <PageWrapper>
      <div>
        <h1>Home</h1>
        <p>Welcome to the Home page!</p>
      </div>
      <div>
        <h2>Counter</h2>
        <p>{count}</p>
        <button onClick={inc}>One Up</button>
      </div>
      <div>
        <h2>Posts</h2>
        {posts.map((post: Post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </PageWrapper>
  );
}

export default Home;
