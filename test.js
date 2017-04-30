'use strict';

var test = require('tape');
var createContext = require('./')
var isBrowser = require('is-browser')

isBrowser && test('exports audio-context', function(t) {
  var ctx = createContext()

  t.ok(ctx)
  t.end()
});

isBrowser && test('creates singletone by default', function (t) {
	var ctx1 = createContext()
	var ctx2 = createContext()
	var ctx3 = createContext(44100)
	var ctx4 = createContext({sampleRate: 44100})

	t.ok(ctx1)
	t.equal(ctx1, ctx2)
	t.equal(ctx3, ctx4)
	t.equal(ctx2, ctx3)
	t.end()
});

isBrowser && test('creates singletone for number', function (t) {
	var ctx1 = createContext(10000)
	var ctx2 = createContext()
	var ctx3 = createContext()

	t.ok(ctx2)
	t.equal(ctx2, ctx3)
	t.notEqual(ctx1, ctx2)
	t.end()
});

isBrowser && test('creates singletone for object', function (t) {
	var ctx1 = createContext({sampleRate: 10000})
	var ctx2 = createContext({sampleRate: 10100})
	var ctx3 = createContext()
	var ctx4 = createContext(10000)

	t.notEqual(ctx2, ctx3)
	t.notEqual(ctx1, ctx2)
	t.equal(ctx1, ctx4)
	t.end()
});

isBrowser && test('exports audio-context/offline', function(t){
  var ctx = createContext({offline: true, length: 100})
  var ctx2 = createContext()

  t.notEqual(ctx, ctx2)
  t.ok(ctx);

  t.throws(function () {
  	createContext({offline: true})
  })

  t.end();
});

