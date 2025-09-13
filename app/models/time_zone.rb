class TimeZone < ApplicationRecord
  belongs_to :user

  validates :name, :city, :utc_difference, presence: true
  validates :utc_difference, numericality: { greater_than_or_equal_to: 0 }
end
