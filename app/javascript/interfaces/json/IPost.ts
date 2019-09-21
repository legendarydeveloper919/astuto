interface IPostJSON {
  id: number;
  title: string;
  description?: string;
  board_id: number;
  post_status_id?: number;
  comments_count: number;
  user_id: number;
  created_at: string;
}

export default IPostJSON;