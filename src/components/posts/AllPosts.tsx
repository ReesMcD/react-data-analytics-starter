import useAllPostsQuery from "../../queries/all-posts/useAllPostsQuery";
import Post from "../../types/Post";
function AllPosts(): React.ReactElement {
  const { data: posts } = useAllPostsQuery();

  return (
    <>
      <h2>All Posts</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">User ID</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post: Post) => (
            <tr key={post.id} className="border-b">
              <td className="p-2">{post.title}</td>
              <td className="p-2">{post.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AllPosts;
