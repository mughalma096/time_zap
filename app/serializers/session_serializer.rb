class SessionSerializer < ActiveModel::Serializer
  attributes :auth_token
  has_one :user, serializer: UserSerializer

  def auth_token
    puts "Serializing auth_token for user: #{object.user&.id}"
    object.user&.authentication_token
  end

end
