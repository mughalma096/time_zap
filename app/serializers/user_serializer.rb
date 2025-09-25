class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  attribute :admin

  def admin
    object.has_role? :admin
  end
end
