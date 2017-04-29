'use strict';

var test = require('tape');
var ctx = require('./');

test('audio-context', function(t) {
  t.plan(4)

  var foo = ctx()
  var bar = ctx()
  t.is(foo, bar, 'returns singleton')

  var baz = ctx({ sampleRate: 44100 })
  t.not(baz, foo, 'returns unique context')

  var qux = ctx({ offline: true, channels: 2, length: 1000, sampleRate: 44100 })
  t.true(qux, 'returns offline context')
})
