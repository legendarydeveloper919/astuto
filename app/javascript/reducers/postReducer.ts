import {
  PostRequestActionTypes,
  POST_REQUEST_SUCCESS,
} from '../actions/requestPost';

import {
  ChangePostBoardSuccessAction,
  CHANGE_POST_BOARD_SUCCESS,
} from '../actions/changePostBoard';

import {
  ChangePostStatusSuccessAction,
  CHANGE_POST_STATUS_SUCCESS,
} from '../actions/changePostStatus';

import IPost from '../interfaces/IPost';

const initialState: IPost = {
  id: 0,
  title: '',
  description: null,
  boardId: 0,
  postStatusId: null,
  commentsCount: 0,
  userId: 0,
  createdAt: '',
};

const postReducer = (
  state = initialState,
  action:
    PostRequestActionTypes |
    ChangePostBoardSuccessAction |
    ChangePostStatusSuccessAction,
): IPost => {
  switch (action.type) {
    case POST_REQUEST_SUCCESS:
      return {
        id: action.post.id,
        title: action.post.title,
        description: action.post.description,
        boardId: action.post.board_id,
        postStatusId: action.post.post_status_id,
        commentsCount: action.post.comments_count,
        userId: action.post.user_id,
        createdAt: action.post.created_at,
      };

    case CHANGE_POST_BOARD_SUCCESS:
      return {
        ...state,
        boardId: action.newBoardId,
      };

    case CHANGE_POST_STATUS_SUCCESS:
      return {
        ...state,
        postStatusId: action.newPostStatusId,
      };

    default:
      return state;
  }
}

export default postReducer;