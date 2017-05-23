# audio-context [![Build Status](https://travis-ci.org/audiojs/audio-context.svg?branch=master)](https://travis-ci.org/audiojs/audio-context) [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges) [![Greenkeeper badge](https://badges.greenkeeper.io/audiojs/audio-context.svg)](https://greenkeeper.io/) [![npm](https://img.shields.io/npm/v/audio-context.svg)](https://www.npmjs.com/package/audio-context) [![license](https://img.shields.io/npm/l/audio-context.svg)](https://www.npmjs.com/package/audio-context)

Creates a WebAudio context singleton with the given options. Returns `null` if not supported.


## Example

```js
var audioCtx = require('audio-context')()
```

You can also create an [`OfflineAudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext) in case you would like to process (faster) without any rendering.


```js
var offlineContext = require('audio-context')({offline: true})
```


## Usage

[![npm install audio-context](https://nodei.co/npm/audio-context.png?mini=true)](https://npmjs.org/package/audio-context/)

#### `ctx = createContext(options|sampleRate)`

Returns a singleton audio context for the given `sampleRate`.

The options:

- `sampleRate` - if specified, will set the context sampleRate.
- `latencyHint` - if specified, will control latency. One of `'balanced'`, `'playback'`, `'interaction'` (default) or number.
- `offline` - if specified, will create [OfflineAudioContext](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext).
- `length` - if specified, will set number of frames for offline context.
- `channels` - if specified, will set number of channels for offline context.
- `{...contextAttributes}` any other options for the context.

Handles vendor prefixing for audio contexts. Returns `null` if we are not in a browser, or if the context is not available, or if there was an error creating the context.


## Running tests

```sh
# Run tests in tape-run's default browser
npm test

# Run in a specified browser.
# See https://github.com/juliangruber/tape-run#runopts for options
npm test -- --browser firefox
```


## License

MIT
