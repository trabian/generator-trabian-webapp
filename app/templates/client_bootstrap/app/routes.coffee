module.exports = (match) ->

  match '', 'welcome#index'

  match 'projects', 'projects#index'
  match 'projects/:id', 'projects#show'
