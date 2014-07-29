'use strict';

var window = require('global/window');

var Context = window.OfflineAudioContext || window.webkitOfflineAudioContext;
if (Context) module.exports = Context;