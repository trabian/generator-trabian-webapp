Chaplin = require 'chaplin'

Site = require 'app/views/site'

module.exports = class BaseController extends Chaplin.Controller

  # Controllers that extend BaseController should have a `tab` property to
  # set the current header tab (based on the nav item class). For example:
  #
  # tab: 'todos'

  beforeAction: ->
    @compose 'site', Site
