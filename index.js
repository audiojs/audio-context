'use strict'

var window = require('global/window')

var Context = window.AudioContext || window.webkitAudioContext
var Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext
var context_cache = null

module.exports = function get_context (options) {
  var has_options = options !== undefined
  var offline = has_options && options.offline

  // Offline context is always unique (?)
  if (offline) {
    return new Offline(options.channels, options.length, options.sampleRate)
  }

  // If has options return unique context
  if (has_options) {
    return new Context(options)
  }

  // Return singleton from a context cache
  if (context_cache === null) {
    context_cache = new Context()
  }
  return context_cache
}
