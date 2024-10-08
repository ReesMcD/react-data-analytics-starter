import Post from "../../models/Post";
import usePostsQuery from "../../queries/posts/usePostsQuery";

function Posts(): React.ReactElement {
  const { data: posts } = usePostsQuery();

  return (
    <>
      <h2>Posts</h2>
      {posts?.map((post: Post) => <div key={post.id}>{post.title}</div>)}
    </>
  );
}

export default Posts;
