# audio-context [![Build Status](https://travis-ci.org/audiojs/audio-context.svg?branch=master)](https://travis-ci.org/audiojs/audio-context) [![stable](https://img.shields.io/badge/stability-stable-orange.svg)](http://github.com/badges/stability-badges) [![Greenkeeper badge](https://badges.greenkeeper.io/audiojs/audio-context.svg)](https://greenkeeper.io/)

[![testling badge](https://ci.testling.com/audiojs/audio-context.png)](https://ci.testling.com/audiojs/audio-context)

  A WebAudio Context singleton, because you only ever must have one on your page.


## Usage

```js
var ctx = require('audio-context');
```

## OfflineAudioContext

  You can also require an [`OfflineAudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext)
  in case you would like to process (faster) without any rendering.


```js
var offlineContext = require('audio-context/offline');
```

## Installation

  Install with [component(1)](http://component.io):

```bash
$ component install juliangruber/audio-context
```

  Install with [npm](https://npmjs.org):

```bash
$ npm install audio-context
```

## License

  MIT
