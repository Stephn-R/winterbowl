// Polyfills

import 'ie-shim'; // Internet Explorer 9 support

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// Typescript emit helpers polyfill
import 'ts-helpers';

// DEVELOPMENT
Error.stackTraceLimit = Infinity;
require('zone.js/dist/long-stack-trace-zone');
