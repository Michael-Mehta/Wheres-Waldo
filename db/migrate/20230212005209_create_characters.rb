class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :xAxis
      t.integer :yAxis

      t.timestamps
    end
  end
end
