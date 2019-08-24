require 'rails_helper'

RSpec.describe PostStatus, type: :model do
  let(:post_status) { FactoryBot.create(:post_status) }

  it 'should be valid' do
    expect(post_status).to be_valid
  end

  it 'must have a name' do
    empty_name = FactoryBot.build(:post_status, name: "")
    nil_name = FactoryBot.build(:post_status, name: nil)

    expect(empty_name).to be_invalid
    expect(nil_name).to be_invalid
  end

  it 'has a unique name' do
    post_status2 = FactoryBot.build(:post_status, name: post_status.name)
    
    expect(post_status2).to be_invalid
  end

  it 'has a valid hex color' do
    nil_color = FactoryBot.build(:post_status, color: nil)
    empty_color = FactoryBot.build(:post_status, color: "")
    invalid_color = FactoryBot.build(:post_status, color: "ffffff")
    invalid_color2 = FactoryBot.build(:post_status, color: "#ffff")
    valid_color = FactoryBot.build(:post_status, color: "#fff")
    valid_color2 = FactoryBot.build(:post_status, color: "#ffffff")

    expect(nil_color).to be_invalid
    expect(empty_color).to be_invalid
    expect(invalid_color).to be_invalid
    expect(invalid_color2).to be_invalid
    expect(valid_color).to be_valid
    expect(valid_color2).to be_valid
  end
end
