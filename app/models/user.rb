class User < ApplicationRecord
  rolify

  has_many :time_zones

  validates_presence_of :password, if: :password_required?

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  before_save :ensure_authentication_token!

  def ensure_authentication_token!
    if authentication_token.blank?
      self.authentication_token = generate_authentication_token
      save!
    end
  end

  def generate_authentication_token
    loop do
      token = Devise.friendly_token
      break token unless User.find_by(authentication_token: token)
    end
  end

  protected

  def password_required?
    new_record? || password.present?
  end

end
