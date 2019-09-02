import * as React from 'react';

import PostListItem from './PostListItem';

import IPost from '../../interfaces/IPost';
import IBoard from '../../interfaces/IBoard';

interface Props {
  posts: Array<IPost>;
  boards: Array<IBoard>;
}

const PostList = ({ posts, boards }: Props) => (
  <div className="postList">
    {posts.map((post, i) => (
      <PostListItem
        title={post.title}
        boardName={boards.find(board => board.id === post.board_id).name}

        key={i}
      />
    ))}
  </div>
);

export default PostList;