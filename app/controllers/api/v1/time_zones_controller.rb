class Api::V1::TimeZonesController < ActionController::API

  def index
    @time_zones = TimeZone.where(user_id: params[:user_id])
    render json: @time_zones, "time_zone" => params[:time_zone]
  end

  def create
    @time_zone = TimeZone.create!(time_zone_params)
    render json: @time_zone, status: :created
  end
  
  def destroy
    @time_zone = TimeZone.find_by(id: params[:id])
    @time_zone.destroy!
    render json: :no_content, status: :no_content
  end

  private

  def time_zone_params
    params.require(:time_zone).permit!(:id, :name, :city, :utc_difference, :user_id)
  end

end
