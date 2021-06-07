// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"qbFuT":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "1a0fd62aca955fc8aa6b113c02e02dbb";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5Xqt2":[function(require,module,exports) {
var _cursor = require('./cursor');
var _grid = require('./grid');
var _utils = require('./utils');
// custom cursor
const cursor = new _cursor.Cursor(document.querySelector('.cursor'));
// Preload  images
_utils.preloadImages('.grid__item-img').then(() => {
  // Remove loader (loading class)
  document.body.classList.remove('loading');
  // Initialize grid
  const grid = new _grid.Grid(document.querySelector('.grid'));
  // change cursor text status when hovering a grid item
  grid.on('mouseEnterItem', itemTitle => cursor.DOM.text.innerHTML = itemTitle);
  grid.on('mouseLeaveItem', _ => cursor.DOM.text.innerHTML = '');
});
// mouse effects on all links and others
[...document.querySelectorAll('a, button, .grid__item')].forEach(link => {
  link.addEventListener('mouseenter', () => cursor.enter());
  link.addEventListener('mouseleave', () => cursor.leave());
});

},{"./cursor":"6m6MU","./grid":"7L5gm","./utils":"3Oysh"}],"6m6MU":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Cursor", function () {
  return Cursor;
});
var _gsap = require('gsap');
var _utils = require('./utils');
// Track the mouse position
let mouse = {
  x: 0,
  y: 0
};
window.addEventListener('mousemove', ev => mouse = _utils.getMousePos(ev));
class Cursor {
  constructor(el) {
    this.DOM = {
      el: el
    };
    this.DOM.svg = this.DOM.el.querySelector('.cursor__svg');
    this.DOM.circle = this.DOM.svg.querySelector('.cursor__svg-circle');
    this.DOM.circle.style.transformOrigin = '50% 50%';
    this.DOM.text = this.DOM.el.querySelector('.cursor__text');
    this.DOM.el.style.opacity = 0;
    this.bounds = this.DOM.svg.getBoundingClientRect();
    this.renderedStyles = {
      tx: {
        previous: 0,
        current: 0,
        amt: 0.2
      },
      ty: {
        previous: 0,
        current: 0,
        amt: 0.2
      },
      txText: {
        previous: 0,
        current: 0,
        amt: 0.1
      },
      tyText: {
        previous: 0,
        current: 0,
        amt: 0.1
      },
      scale: {
        previous: 1,
        current: 1,
        amt: 0.15
      }
    };
    this.onMouseMoveEv = () => {
      this.renderedStyles.tx.previous = this.renderedStyles.tx.current = this.renderedStyles.txText.previous = this.renderedStyles.txText.current = mouse.x - this.bounds.width / 2;
      this.renderedStyles.ty.previous = this.renderedStyles.ty.current = this.renderedStyles.tyText.previous = this.renderedStyles.tyText.current = mouse.y - this.bounds.height / 2;
      _gsap.gsap.to(this.DOM.el, {
        duration: 0.9,
        ease: 'Power3.easeOut',
        opacity: 1
      });
      requestAnimationFrame(() => this.render());
      window.removeEventListener('mousemove', this.onMouseMoveEv);
    };
    window.addEventListener('mousemove', this.onMouseMoveEv);
  }
  enter() {
    this.renderedStyles['scale'].current = 1.5;
  }
  leave() {
    this.renderedStyles['scale'].current = 1;
  }
  render() {
    this.renderedStyles['tx'].current = this.renderedStyles['txText'].current = mouse.x - this.bounds.width / 2;
    this.renderedStyles['ty'].current = this.renderedStyles['tyText'].current = mouse.y - this.bounds.height / 2;
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = _utils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
    }
    // this.DOM.el.style.transform = `translateX(${(this.renderedStyles['tx'].previous)}px) translateY(${this.renderedStyles['ty'].previous}px)`;
    this.DOM.svg.style.transform = `translateX(${this.renderedStyles['tx'].previous}px) translateY(${this.renderedStyles['ty'].previous}px)`;
    this.DOM.text.style.transform = `translateX(${this.renderedStyles['txText'].previous}px) translateY(${this.renderedStyles['tyText'].previous}px)`;
    this.DOM.circle.style.transform = `scale(${this.renderedStyles['scale'].previous})`;
    requestAnimationFrame(() => this.render());
  }
}

},{"gsap":"1iecp","./utils":"3Oysh","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"7L5gm":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Grid", function () {
  return Grid;
});
var _gsap = require('gsap');
var _events = require('events');
var _gridItem = require('./gridItem');
require('./utils');
require('splitting/dist/splitting.css');
require('splitting/dist/splitting-cells.css');
var _splitting = require('splitting');
var _splittingDefault = _parcelHelpers.interopDefault(_splitting);
// initialize Splitting
const splitting = _splittingDefault.default();
// title behind the grid
const title = document.querySelector('.content__title');
// Splitting will run on the inner spans
// get the chars
const titleChars = [...title.querySelectorAll('.char')];
class Grid extends _events.EventEmitter {
  constructor(el) {
    super();
    this.DOM = {
      el: el
    };
    this.gridItems = [];
    this.DOM.items = [...this.DOM.el.querySelectorAll('.grid__item')];
    this.DOM.items.forEach(item => {
      this.gridItems.push(new _gridItem.GridItem(item));
    });
    this.showItems();
    this.initEvents();
  }
  /*Initial animation to scale up and fade in the items*/
  showItems() {
    _gsap.gsap.timeline().addLabel('start', 0).set(this.DOM.items, {
      scale: 1.5,
      opacity: 0
    }, 0).to(this.DOM.items, {
      duration: 1.2,
      ease: 'expo',
      scale: 1,
      stagger: {
        amount: 0.4,
        grid: 'auto',
        from: 'center'
      }
    }, 'start').to(this.DOM.items, {
      duration: 1.2,
      ease: 'power1',
      opacity: 1,
      stagger: {
        amount: 0.4,
        grid: 'auto',
        from: 'center'
      }
    }, 'start');
  }
  initEvents() {
    for (const item of this.gridItems) {
      item.DOM.image.addEventListener('mouseenter', () => {
        item.onMouseEnter();
        this.emit('mouseEnterItem', item.title);
      });
      item.DOM.image.addEventListener('mouseleave', () => {
        item.onMouseLeave();
        this.emit('mouseLeaveItem');
      });
    }
  }
}

},{"gsap":"1iecp","events":"1LHgi","./gridItem":"1xm3K","./utils":"3Oysh","splitting/dist/splitting.css":"4xYJF","splitting/dist/splitting-cells.css":"2Xb8f","splitting":"2GM2X","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1LHgi":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

},{}],"1xm3K":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "GridItem", function () {
  return GridItem;
});
var _gsap = require('gsap');
var _utils = require('./utils');
var _magneticFx = require('./magneticFx');
// Calculate the viewport size
let winsize = _utils.calcWinsize();
window.addEventListener('resize', () => winsize = _utils.calcWinsize());
// Track the mouse position
let mousepos = {
  x: winsize.width / 2,
  y: winsize.height / 2
};
window.addEventListener('mousemove', ev => mousepos = _utils.getMousePos(ev));
class GridItem {
  constructor(el) {
    this.DOM = {
      el: el
    };
    // the inner image
    this.DOM.image = this.DOM.el.querySelector('.grid__item-img');
    // the title that will appear next to the mouse cursor when hovering
    this.title = this.DOM.el.dataset.title;
    // amounts to move in each axis when moving the cursor
    this.translationVals = {
      x: 0,
      y: 0
    };
    this.rotationVals = {
      x: 0,
      y: 0
    };
    // get random start and end translation/rotation boundaries
    // translation:
    this.xstart = _utils.getRandomNumber(70, 100);
    this.ystart = _utils.getRandomNumber(40, 65);
    // rotation:
    this.rxstart = 5;
    this.rystart = 10;
    // magnetic effect on the image:
    // when hovering on the image, the image will follow the mouse movement
    this.magneticFx = new _magneticFx.MagneticFx(this.DOM.image);
    // initial style/position
    this.layout();
    // start the rAF render function (translate and rotate the item as we move the mouse)
    this.loopTransformAnimation();
  }
  /*initial position on the grid*/
  /*set the rotation and the translationZ*/
  layout() {
    const rect = this.DOM.el.getBoundingClientRect();
    // check if the element is position on the left/top side of the viewport
    this.isLeft = rect.left + rect.width / 2 < winsize.width / 2;
    this.isTop = rect.top + rect.height / 2 < winsize.height / 2;
    this.rY = this.isLeft ? _utils.map(rect.left + rect.width / 2, 0, winsize.width / 2, this.rystart, 0) : _utils.map(rect.left + rect.width / 2, winsize.width / 2, winsize.width, 0, -this.rystart);
    this.rX = this.isTop ? _utils.map(rect.top + rect.height / 2, 0, winsize.height / 2, -this.rxstart, 0) : _utils.map(rect.top + rect.height / 2, winsize.height / 2, winsize.height, 0, this.rxstart);
    this.tZ = this.isLeft ? _utils.map(rect.left + rect.width / 2, 0, winsize.width / 2, -200, -600) : _utils.map(rect.left + rect.width / 2, winsize.width / 2, winsize.width, -600, -200);
    _gsap.gsap.set(this.DOM.el, {
      rotationX: this.rX,
      rotationY: this.rY,
      z: this.tZ
    });
  }
  onMouseEnter() {
    this.hoverTimeout = setTimeout(() => {
      // this.stopTransformAnimation();
      if (this.timelineHoverOut) this.timelineHoverOut.kill();
      this.timelineHoverIn = _gsap.gsap.timeline().addLabel('start', 0).to(this.DOM.image, {
        duration: 0.8,
        ease: 'expo',
        scale: 1.1
      }, 'start');
    }, 10);
  }
  onMouseLeave() {
    // this.loopTransformAnimation();
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
    if (this.timelineHoverIn) this.timelineHoverIn.kill();
    this.timelineHoverOut = _gsap.gsap.timeline().to(this.DOM.image, {
      duration: 1,
      ease: 'power4',
      x: 0,
      y: 0,
      scale: 1
    });
  }
  loopTransformAnimation() {
    if (!this.requestId) {
      this.requestId = requestAnimationFrame(() => this.move());
    }
  }
  /*stop the render loop animation (rAF)*/
  stopTransformAnimation() {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
      this.requestId = undefined;
    }
  }
  /*translate/rotate the grid items as we move the mouse*/
  move() {
    this.requestId = undefined;
    // Calculate the amount to move.
    // Using linear interpolation to smooth things out.
    // Translation values will be in the range of [-start, start] for a cursor movement from 0 to the window's width/height
    this.translationVals.x = _utils.lerp(this.translationVals.x, _utils.map(mousepos.x, 0, winsize.width, -this.xstart, this.xstart), 0.04);
    this.translationVals.y = _utils.lerp(this.translationVals.y, _utils.map(mousepos.y, 0, winsize.height, -this.ystart, this.ystart), 0.04);
    // same for the rotations
    this.rotationVals.x = this.isTop ? _utils.lerp(this.rotationVals.x, _utils.map(mousepos.y, 0, winsize.height / 2, this.rxstart, 0), 0.04) : _utils.lerp(this.rotationVals.x, _utils.map(mousepos.y, winsize.height / 2, winsize.height, 0, -this.rxstart), 0.04);
    this.rotationVals.y = this.isLeft ? _utils.lerp(this.rotationVals.y, _utils.map(mousepos.x, 0, winsize.width / 2, -this.rystart, 0), 0.04) : _utils.lerp(this.rotationVals.y, _utils.map(mousepos.x, winsize.width / 2, winsize.width, 0, this.rystart), 0.04);
    _gsap.gsap.set(this.DOM.el, {
      x: -this.translationVals.x,
      y: -this.translationVals.y,
      rotationX: -this.rX - this.rotationVals.x,
      rotationY: -this.rY - this.rotationVals.y
    });
    this.loopTransformAnimation();
  }
}

},{"gsap":"1iecp","./utils":"3Oysh","./magneticFx":"36BIi","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"36BIi":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "MagneticFx", function () {
  return MagneticFx;
});
var _gsap = require('gsap');
var _gsapDefault = _parcelHelpers.interopDefault(_gsap);
var _utils = require('./utils');
// Calculate the viewport size
let winsize = _utils.calcWinsize();
window.addEventListener('resize', () => winsize = _utils.calcWinsize());
// Track the mouse position
let mousepos = {
  x: 0,
  y: 0
};
window.addEventListener('mousemove', ev => mousepos = _utils.getMousePos(ev));
class MagneticFx {
  constructor(el) {
    // DOM elements
    this.DOM = {
      el: el
    };
    // amounts the element will translated
    this.renderedStyles = {
      tx: {
        previous: 0,
        current: 0,
        amt: 0.04
      },
      ty: {
        previous: 0,
        current: 0,
        amt: 0.04
      }
    };
    // calculate size/position
    this.calculateSizePosition();
    // init events
    this.initEvents();
  }
  calculateSizePosition() {
    // current scroll
    this.scrollVal = {
      x: window.scrollX,
      y: window.scrollY
    };
    // size/position
    this.rect = this.DOM.el.getBoundingClientRect();
  }
  initEvents() {
    window.addEventListener('resize', () => this.calculateSizePosition());
    this.DOM.el.addEventListener('mouseenter', () => {
      this.hoverTimeout = setTimeout(() => {
        // set to last translated values after hovering out
        const {x, y} = _utils.getTranslateValues(this.DOM.el);
        this.renderedStyles['tx'].previous = x;
        this.renderedStyles['ty'].previous = y;
        // start the render loop animation (rAF)
        this.loopRender();
      }, 10);
    });
    this.DOM.el.addEventListener('mouseleave', () => {
      if (this.hoverTimeout) {
        clearTimeout(this.hoverTimeout);
      }
      // stop the render loop animation (rAF)
      this.stopRendering();
    });
  }
  /*start the render loop animation (rAF)*/
  loopRender() {
    if (!this.requestId) {
      this.requestId = requestAnimationFrame(() => this.render());
    }
  }
  /*stop the render loop animation (rAF)*/
  stopRendering() {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
      this.requestId = undefined;
    }
  }
  render() {
    this.requestId = undefined;
    const scrollDiff = {
      x: this.scrollVal.x - window.scrollX,
      y: this.scrollVal.y - window.scrollY
    };
    // new values for the translations
    this.renderedStyles['tx'].current = (mousepos.x - (scrollDiff.x + this.rect.left + this.rect.width / 2)) * .3;
    this.renderedStyles['ty'].current = (mousepos.y - (scrollDiff.y + this.rect.top + this.rect.height / 2)) * .3;
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = _utils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
    }
    _gsapDefault.default.set(this.DOM.el, {
      x: this.renderedStyles['tx'].previous,
      y: this.renderedStyles['ty'].previous
    });
    this.loopRender();
  }
}

},{"gsap":"1iecp","./utils":"3Oysh","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"4xYJF":[function() {},{}],"2Xb8f":[function() {},{}],"2GM2X":[function(require,module,exports) {
var define;
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.Splitting = factory();
})(this, function () {
  "use strict";
  var root = document;
  var createText = root.createTextNode.bind(root);
  /**
  * # setProperty
  * Apply a CSS var
  * @param el{HTMLElement}
  * @param varName {string}
  * @param value {string|number}
  */
  function setProperty(el, varName, value) {
    el.style.setProperty(varName, value);
  }
  /**
  *
  * @param {Node} el
  * @param {Node} child
  */
  function appendChild(el, child) {
    return el.appendChild(child);
  }
  function createElement(parent, key, text, whitespace) {
    var el = root.createElement('span');
    key && (el.className = key);
    if (text) {
      !whitespace && el.setAttribute("data-" + key, text);
      el.textContent = text;
    }
    return parent && appendChild(parent, el) || el;
  }
  function getData(el, key) {
    return el.getAttribute("data-" + key);
  }
  /**
  *
  * @param e {import('../types').Target}
  * @param parent {HTMLElement}
  * @returns {HTMLElement[]}
  */
  function $(e, parent) {
    return !e || e.length == 0 ? // null or empty string returns empty array
    [] : e.nodeName ? // a single element is wrapped in an array
    [e] : // selector and NodeList are converted to Element[]
    [].slice.call(e[0].nodeName ? e : (parent || root).querySelectorAll(e));
  }
  /**
  * Creates and fills an array with the value provided
  * @template {T}
  * @param {number} len
  * @param {() => T} valueProvider
  * @return {T}
  */
  function Array2D(len) {
    var a = [];
    for (; len--; ) {
      a[len] = [];
    }
    return a;
  }
  function each(items, fn) {
    items && items.some(fn);
  }
  function selectFrom(obj) {
    return function (key) {
      return obj[key];
    };
  }
  /**
  * # Splitting.index
  * Index split elements and add them to a Splitting instance.
  *
  * @param element {HTMLElement}
  * @param key {string}
  * @param items {HTMLElement[] | HTMLElement[][]}
  */
  function index(element, key, items) {
    var prefix = '--' + key;
    var cssVar = prefix + "-index";
    each(items, function (items, i) {
      if (Array.isArray(items)) {
        each(items, function (item) {
          setProperty(item, cssVar, i);
        });
      } else {
        setProperty(items, cssVar, i);
      }
    });
    setProperty(element, prefix + "-total", items.length);
  }
  /**
  * @type {Record<string, import('./types').ISplittingPlugin>}
  */
  var plugins = {};
  /**
  * @param by {string}
  * @param parent {string}
  * @param deps {string[]}
  * @return {string[]}
  */
  function resolvePlugins(by, parent, deps) {
    // skip if already visited this dependency
    var index = deps.indexOf(by);
    if (index == -1) {
      // if new to dependency array, add to the beginning
      deps.unshift(by);
      // recursively call this function for all dependencies
      each(plugins[by].depends, function (p) {
        resolvePlugins(p, by, deps);
      });
    } else {
      // if this dependency was added already move to the left of
      // the parent dependency so it gets loaded in order
      var indexOfParent = deps.indexOf(parent);
      deps.splice(index, 1);
      deps.splice(indexOfParent, 0, by);
    }
    return deps;
  }
  /**
  * Internal utility for creating plugins... essentially to reduce
  * the size of the library
  * @param {string} by
  * @param {string} key
  * @param {string[]} depends
  * @param {Function} split
  * @returns {import('./types').ISplittingPlugin}
  */
  function createPlugin(by, depends, key, split) {
    return {
      by: by,
      depends: depends,
      key: key,
      split: split
    };
  }
  /**
  *
  * @param by {string}
  * @returns {import('./types').ISplittingPlugin[]}
  */
  function resolve(by) {
    return resolvePlugins(by, 0, []).map(selectFrom(plugins));
  }
  /**
  * Adds a new plugin to splitting
  * @param opts {import('./types').ISplittingPlugin}
  */
  function add(opts) {
    plugins[opts.by] = opts;
  }
  /**
  * # Splitting.split
  * Split an element's textContent into individual elements
  * @param el {Node} Element to split
  * @param key {string}
  * @param splitOn {string}
  * @param includeSpace {boolean}
  * @returns {HTMLElement[]}
  */
  function splitText(el, key, splitOn, includePrevious, preserveWhitespace) {
    // Combine any strange text nodes or empty whitespace.
    el.normalize();
    // Use fragment to prevent unnecessary DOM thrashing.
    var elements = [];
    var F = document.createDocumentFragment();
    if (includePrevious) {
      elements.push(el.previousSibling);
    }
    var allElements = [];
    $(el.childNodes).some(function (next) {
      if (next.tagName && !next.hasChildNodes()) {
        // keep elements without child nodes (no text and no children)
        allElements.push(next);
        return;
      }
      // Recursively run through child nodes
      if (next.childNodes && next.childNodes.length) {
        allElements.push(next);
        elements.push.apply(elements, splitText(next, key, splitOn, includePrevious, preserveWhitespace));
        return;
      }
      // Get the text to split, trimming out the whitespace
      /** @type {string}*/
      var wholeText = next.wholeText || '';
      var contents = wholeText.trim();
      // If there's no text left after trimming whitespace, continue the loop
      if (contents.length) {
        // insert leading space if there was one
        if (wholeText[0] === ' ') {
          allElements.push(createText(' '));
        }
        // Concatenate the split text children back into the full array
        each(contents.split(splitOn), function (splitText, i) {
          if (i && preserveWhitespace) {
            allElements.push(createElement(F, "whitespace", " ", preserveWhitespace));
          }
          var splitEl = createElement(F, key, splitText);
          elements.push(splitEl);
          allElements.push(splitEl);
        });
        // insert trailing space if there was one
        if (wholeText[wholeText.length - 1] === ' ') {
          allElements.push(createText(' '));
        }
      }
    });
    each(allElements, function (el) {
      appendChild(F, el);
    });
    // Clear out the existing element
    el.innerHTML = "";
    appendChild(el, F);
    return elements;
  }
  /** an empty value*/
  var _ = 0;
  function copy(dest, src) {
    for (var k in src) {
      dest[k] = src[k];
    }
    return dest;
  }
  var WORDS = 'words';
  var wordPlugin = createPlugin(/*by:*/
  WORDS, /*depends:*/
  _, /*key:*/
  'word', /*split:*/
  function (el) {
    return splitText(el, 'word', /\s+/, 0, 1);
  });
  var CHARS = "chars";
  var charPlugin = createPlugin(/*by:*/
  CHARS, /*depends:*/
  [WORDS], /*key:*/
  "char", /*split:*/
  function (el, options, ctx) {
    var results = [];
    each(ctx[WORDS], function (word, i) {
      results.push.apply(results, splitText(word, "char", "", options.whitespace && i));
    });
    return results;
  });
  /**
  * # Splitting
  *
  * @param opts {import('./types').ISplittingOptions}
  */
  function Splitting(opts) {
    opts = opts || ({});
    var key = opts.key;
    return $(opts.target || '[data-splitting]').map(function (el) {
      var ctx = el['🍌'];
      if (!opts.force && ctx) {
        return ctx;
      }
      ctx = el['🍌'] = {
        el: el
      };
      var items = resolve(opts.by || getData(el, 'splitting') || CHARS);
      var opts2 = copy({}, opts);
      each(items, function (plugin) {
        if (plugin.split) {
          var pluginBy = plugin.by;
          var key2 = (key ? '-' + key : '') + plugin.key;
          var results = plugin.split(el, opts2, ctx);
          key2 && index(el, key2, results);
          ctx[pluginBy] = results;
          el.classList.add(pluginBy);
        }
      });
      el.classList.add('splitting');
      return ctx;
    });
  }
  /**
  * # Splitting.html
  *
  * @param opts {import('./types').ISplittingOptions}
  */
  function html(opts) {
    opts = opts || ({});
    var parent = opts.target = createElement();
    parent.innerHTML = opts.content;
    Splitting(opts);
    return parent.outerHTML;
  }
  Splitting.html = html;
  Splitting.add = add;
  function detectGrid(el, options, side) {
    var items = $(options.matching || el.children, el);
    var c = {};
    each(items, function (w) {
      var val = Math.round(w[side]);
      (c[val] || (c[val] = [])).push(w);
    });
    return Object.keys(c).map(Number).sort(byNumber).map(selectFrom(c));
  }
  function byNumber(a, b) {
    return a - b;
  }
  var linePlugin = createPlugin(/*by:*/
  'lines', /*depends:*/
  [WORDS], /*key:*/
  'line', /*split:*/
  function (el, options, ctx) {
    return detectGrid(el, {
      matching: ctx[WORDS]
    }, 'offsetTop');
  });
  var itemPlugin = createPlugin(/*by:*/
  'items', /*depends:*/
  _, /*key:*/
  'item', /*split:*/
  function (el, options) {
    return $(options.matching || el.children, el);
  });
  var rowPlugin = createPlugin(/*by:*/
  'rows', /*depends:*/
  _, /*key:*/
  'row', /*split:*/
  function (el, options) {
    return detectGrid(el, options, "offsetTop");
  });
  var columnPlugin = createPlugin(/*by:*/
  'cols', /*depends:*/
  _, /*key:*/
  "col", /*split:*/
  function (el, options) {
    return detectGrid(el, options, "offsetLeft");
  });
  var gridPlugin = createPlugin(/*by:*/
  'grid', /*depends:*/
  ['rows', 'cols']);
  var LAYOUT = "layout";
  var layoutPlugin = createPlugin(/*by:*/
  LAYOUT, /*depends:*/
  _, /*key:*/
  _, /*split:*/
  function (el, opts) {
    // detect and set options
    var rows = opts.rows = +(opts.rows || getData(el, 'rows') || 1);
    var columns = opts.columns = +(opts.columns || getData(el, 'columns') || 1);
    // Seek out the first <img> if the value is true
    opts.image = opts.image || getData(el, 'image') || el.currentSrc || el.src;
    if (opts.image) {
      var img = $("img", el)[0];
      opts.image = img && (img.currentSrc || img.src);
    }
    // add optional image to background
    if (opts.image) {
      setProperty(el, "background-image", "url(" + opts.image + ")");
    }
    var totalCells = rows * columns;
    var elements = [];
    var container = createElement(_, "cell-grid");
    while (totalCells--) {
      // Create a span
      var cell = createElement(container, "cell");
      createElement(cell, "cell-inner");
      elements.push(cell);
    }
    // Append elements back into the parent
    appendChild(el, container);
    return elements;
  });
  var cellRowPlugin = createPlugin(/*by:*/
  "cellRows", /*depends:*/
  [LAYOUT], /*key:*/
  "row", /*split:*/
  function (el, opts, ctx) {
    var rowCount = opts.rows;
    var result = Array2D(rowCount);
    each(ctx[LAYOUT], function (cell, i, src) {
      result[Math.floor(i / (src.length / rowCount))].push(cell);
    });
    return result;
  });
  var cellColumnPlugin = createPlugin(/*by:*/
  "cellColumns", /*depends:*/
  [LAYOUT], /*key:*/
  "col", /*split:*/
  function (el, opts, ctx) {
    var columnCount = opts.columns;
    var result = Array2D(columnCount);
    each(ctx[LAYOUT], function (cell, i) {
      result[i % columnCount].push(cell);
    });
    return result;
  });
  var cellPlugin = createPlugin(/*by:*/
  "cells", /*depends:*/
  ['cellRows', 'cellColumns'], /*key:*/
  "cell", /*split:*/
  function (el, opt, ctx) {
    // re-index the layout as the cells
    return ctx[LAYOUT];
  });
  // install plugins
  // word/char plugins
  add(wordPlugin);
  add(charPlugin);
  add(linePlugin);
  // grid plugins
  add(itemPlugin);
  add(rowPlugin);
  add(columnPlugin);
  add(gridPlugin);
  // cell-layout plugins
  add(layoutPlugin);
  add(cellRowPlugin);
  add(cellColumnPlugin);
  add(cellPlugin);
  return Splitting;
});

},{}]},["qbFuT","5Xqt2"], "5Xqt2", "parcelRequirea14e")

//# sourceMappingURL=index.02e02dbb.js.map
