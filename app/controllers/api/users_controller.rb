class Api::UsersController < ApplicationController
  before_action :set_group
  before_action :set_user, only:[:show, :udpate, :destroy]

  #get all users of a specific group
  #get 'api/groups/:group_id/users'
  # axios.get('/api/groups/1/users')
  def index 
    render json: @group.users
  end 

  #get
  def show 
    render json: @user
  end

 
  def update
    if(current_user.update(user_params))
        render json: current_user
    else
        render json: {errors: current_user.errors.full_messages}, status: 422
    end
  end

 
  
  private 
def set_group 
  @group = Group.find(params[:group_id])
end

def set_user
  @user = @group.users.find(params[:id])
end 


  def user_params
    params.require(:user).permit(:name, :nickname, :phone, :email, :password, :image, :group_id)
  end
end
