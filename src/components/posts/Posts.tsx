import useAllPostsQuery from "../../queries/all-posts/useAllPostsQuery";
import Post from "../../types/Post";
function AllPosts(): React.ReactElement {
  const { data: posts } = useAllPostsQuery();

  return (
    <>
      <h2>Posts</h2>
      {posts?.map((post: Post) => <div key={post.id}>{post.title}</div>)}
    </>
  );
}

export default AllPosts;
