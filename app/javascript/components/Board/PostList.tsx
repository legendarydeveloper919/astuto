import * as React from 'react';

import InfiniteScroll from 'react-infinite-scroller';

import PostListItem from './PostListItem';
import Spinner from '../shared/Spinner';

import IPost from '../../interfaces/IPost';

interface Props {
  posts: Array<IPost>;
  areLoading: boolean;
  error: string;

  handleLoadMore(): void;
  page: number;
  hasMore: boolean;
}

const PostList = ({ posts, areLoading, error, handleLoadMore, page, hasMore }: Props) => (
  <div className="box postList">
    { error ? <span className="error">{error}</span> : null }
    <InfiniteScroll
      initialLoad={false}
      loadMore={handleLoadMore}
      threshold={50}
      hasMore={hasMore}
      loader={<Spinner key={0} />}
      useWindow={true}
    >
      {
        posts.length > 0 ?
          posts.map((post, i) => (
            <PostListItem
              title={post.title}
              description={post.description}
              postStatus={post.postStatus}

              key={i}
            />
          ))
        :
          !areLoading ? <span className="infoText text-muted">There are no posts.</span> : null
      }
    </InfiniteScroll>
  </div>
);

export default PostList;