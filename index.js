'use strict'

var window = require('global/window')

var OfflineContext = window.OfflineAudioContext || window.webkitOfflineAudioContext
var Context = window.AudioContext || window.webkitAudioContext

var cache = {}

module.exports = function getContext (options) {
	if (!Context) return null

	if (typeof options === 'number') {
		options = {sampleRate: options}
	}

	var sampleRate = options && options.sampleRate


	if (options && options.offline) {
		if (!OfflineContext) return null

		return new OfflineContext(options.channels || 2, options.length, sampleRate || 44100)
	}


	//cache by sampleRate, rather strong guess
	var ctx = cache[sampleRate]

	if (ctx) return ctx

	ctx = new Context(options)
	cache[ctx.sampleRate] = cache[sampleRate] = ctx

	return ctx
}
