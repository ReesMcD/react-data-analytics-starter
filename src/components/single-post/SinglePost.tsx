import React from "react";

interface SinglePostProps {
  id: number;
}

function SinglePost({ id }: SinglePostProps): React.ReactElement {
  // Note: usePostQuery is not imported as it's not available in the current context
  // For demonstration, we'll use a placeholder for post data
  const post = { title: `Post ${id}`, body: `This is the body of post ${id}` };

  return (
    <div data-testid="single-post">
      <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}

export default SinglePost;
