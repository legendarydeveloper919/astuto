class PostsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update]

  def index
    posts = Post
      .select(:id, :title, :description, :post_status_id)
      .where(filter_params)
      .search_by_name_or_description(params[:search])
      .page(params[:page])
    
    render json: posts
  end

  def create
    post = Post.new(post_params)

    if post.save
      render json: post, status: :no_content
    else
      render json: {
        error: I18n.t('errors.post.create', message: post.errors.full_messages)
      }, status: :unprocessable_entity
    end
  end

  def show
    @post = Post.find(params[:id])
    @post_statuses = PostStatus
      .find_roadmap
      .select(:id, :name, :color)

    respond_to do |format|
      format.html

      format.json { render json: @post }
    end
  end

  def update
    post = Post.find(params[:id])
    
    if current_user.role == :user && current_user.id != post.user_id
      render json: I18n.t('errors.unauthorized'), status: :unauthorized
    end

    post.post_status_id = params[:post][:post_status_id]

    if post.save
      render json: post, status: :no_content
    else
      render json: {
        error: I18n.t('errors.post.update', message: post.errors.full_messages)
      }, status: :unprocessable_entity
    end
  end

  private
  
    def filter_params
      defaults = { board_id: Board.first.id }

      params
        .permit(:board_id, :post_status_id)
        .with_defaults(defaults)
    end
    
    def post_params
      params
        .require(:post)
        .permit(:title, :description, :board_id)
        .merge(user_id: current_user.id)
    end
end
