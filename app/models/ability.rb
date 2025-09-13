# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new
    can :manage, User, id: user.id
    can :manage, TimeZone, user_id: user.id

    return unless user.is_admin?
    can :manage, User
    can :manage, TimeZone
  end
end
