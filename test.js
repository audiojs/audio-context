var test = require('tape');

test('exports audio-context', function(t) {
  var ctx = require('./');

  t.ok(ctx);
  t.end();
});

test('exports audio-context/offline', function(t){
  var ctx = require('./offline');

  t.ok(ctx);
  t.end();
});