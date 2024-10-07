import Post from "../../models/Post";
import usePostsQuery from "./usePostsQuery";
function Posts(): React.ReactNode {
  const { data: posts } = usePostsQuery();

  return (
    <>
      <h2>Posts</h2>
      {posts?.map((post: Post) => <div key={post.id}>{post.title}</div>)}
    </>
  );
}

export default Posts;
