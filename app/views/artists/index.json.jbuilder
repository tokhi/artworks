json.array!(@artists) do |artist|
  json.extract! artist, :id, :name, :biography
  json.url artist_url(artist, format: :json)
end
