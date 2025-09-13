class CreateTimeZones < ActiveRecord::Migration[7.1]
  def change
    create_table :time_zones do |t|
      t.string :name
      t.string :city
      t.float :utc_difference
      t.references :user, index: true

      t.timestamps
    end
  end
end
