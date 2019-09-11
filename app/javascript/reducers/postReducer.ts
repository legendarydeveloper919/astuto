import IPost from '../interfaces/IPost';

const initialState: IPost = {
  id: 0,
  title: '',
  description: null,
  boardId: 0,
  postStatusId: null,
  userId: 0,
  createdAt: '',
};

const postReducer = (
  state = initialState,
  action,
): IPost => {
  switch (action.type) {
    case 'CONVERT':
      return {
        id: action.post.id,
        title: action.post.title,
        description: action.post.description,
        boardId: action.post.board_id,
        postStatusId: action.post.post_status_id,
        userId: action.post.user_id,
        createdAt: action.post.created_at,
      };

    default:
      return state;
  }
}

export default postReducer;