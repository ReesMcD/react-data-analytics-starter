import React from "react";
import { usePostQuery } from "../../queries/usePostQuery/usePostQuery";

interface SinglePostProps {
  id: number;
}

function SinglePost({ id }: SinglePostProps): React.ReactElement {
  const { data: post } = usePostQuery(id);

  return (
    <div data-testid="single-post">
      <h2 className="text-2xl font-bold mb-4">{post?.title}</h2>
      <p className="text-gray-700">{post?.body}</p>
    </div>
  );
}

export default SinglePost;
