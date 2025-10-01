class Api::V1::UsersController < ActionController::API
  before_action :find_user, only: [:show, :update, :destroy]

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(users_params)
    if @user.save
      render json: @user, status: :created
    else
      warden.custom_failure!
      raise ActiveRecord::RecordInvalid.new @user
    end
  end

  def show
    render json: @user
  end

  def update
    params[:user] = params[:user].except :password if users_params[:password].blank?
    @user.update(users_params)
    render json: @user
  end

  def destroy
    @user.destroy!
    render json: :nothing, status: :no_content
  end

  private

  def users_params
    params.require(:user).permit(:id, :name, :email, :password)
  end

  def find_user
    @user = User.find_by(id: params[:id])
  end

end
