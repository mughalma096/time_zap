class Api::V1::SessionsController < ActionController::API

  def create
    @resource = find_email_password_resource

    return invalid_login_attempt unless @resource

    @resource.ensure_authentication_token!

    sign_in @resource
    render json: Session.new(user: @resource), status: :created
  end

  def destroy
    @user = User.find_by(authentication_token: params[:auth_token])
    if @user.present?
      # expire auth token
      @user.authentication_token = nil
      @user.save
    end

    render json: Session.new(user: @user), status: :ok
  end

  def invalid_login_attempt
    warden.custom_failure!
    raise StandardError.new "Invalid email or password"
  end

  private

  def find_email_password_resource
    resource = User.find_by(email: session_params[:email])
    valid_resource = resource&.valid_password?(session_params[:password])
    resource if valid_resource
  end

  # Never trust parameters from the scary internet, only allow the white list
  def session_params
    params.require(:session).permit!(:email, :password)
  end
end
