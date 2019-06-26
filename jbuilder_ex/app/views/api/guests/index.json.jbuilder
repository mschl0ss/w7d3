#we probably want to loop through and render the partial for each guest

json.array! @guests do |guest|
  json.partial! "guest", guest: guest
end