// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ik2hV":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
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
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"aenu9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _modelJs = require("./model.js");
var _configJs = require("./config.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
var _runtime = require("regenerator-runtime/runtime");
var _regeneratorRuntime = require("regenerator-runtime");
const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _recipeViewJsDefault.default).renderSpinner();
        // 0) Update results view to mark selected search result
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResultsPage());
        // 1) Updating bookmarks view
        (0, _bookmarksViewJsDefault.default).update(_modelJs.state.bookmarks);
        // 2) Loading recipe
        await _modelJs.loadRecipe(id);
        // 3) Rendering recipe
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
    } catch (err) {
        (0, _recipeViewJsDefault.default).renderError();
        console.error(err);
    }
};
const controlSearchResults = async function() {
    try {
        (0, _resultsViewJsDefault.default).renderSpinner();
        // 1) Get search query
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        // 2) Load search results
        await _modelJs.loadSearchResults(query);
        // 3) Render results
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage());
        // 4) Render initial pagination buttons
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
const controlPagination = function(goToPage) {
    // 1) Render NEW results
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultsPage(goToPage));
    // 2) Render NEW pagination buttons
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
const controlServings = function(newServings) {
    // Update the recipe servings (in state)
    _modelJs.updateServings(newServings);
    // Update the recipe view
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
};
const controlAddBookmark = function() {
    // 1) Add/remove bookmark
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    // 2) Update recipe view
    (0, _recipeViewJsDefault.default).update(_modelJs.state.recipe);
    // 3) Render bookmarks
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlBookmarks = function() {
    (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
};
const controlAddRecipe = async function(newRecipe) {
    try {
        // Show loading spinner
        (0, _addRecipeViewJsDefault.default).renderSpinner();
        // Upload the new recipe data
        await _modelJs.uploadRecipe(newRecipe);
        console.log(_modelJs.state.recipe);
        // Render recipe
        (0, _recipeViewJsDefault.default).render(_modelJs.state.recipe);
        // Success message
        (0, _addRecipeViewJsDefault.default).renderMessage();
        // Render bookmark view
        (0, _bookmarksViewJsDefault.default).render(_modelJs.state.bookmarks);
        // Change ID in URL
        window.history.pushState(null, '', `#${_modelJs.state.recipe.id}`);
        // Close form window
        setTimeout(function() {
            (0, _addRecipeViewJsDefault.default).toggleWindow();
        }, (0, _configJs.MODAL_CLOSE_SEC) * 1000);
    } catch (err) {
        console.error("\uD83D\uDCA5", err);
        (0, _addRecipeViewJsDefault.default).renderError(err.message);
    }
};
const init = function() {
    (0, _bookmarksViewJsDefault.default).addHandlerRender(controlBookmarks);
    (0, _recipeViewJsDefault.default).addHandlerRender(controlRecipes);
    (0, _recipeViewJsDefault.default).addHandlerUpdateServings(controlServings);
    (0, _recipeViewJsDefault.default).addHandlerAddBookmark(controlAddBookmark);
    (0, _searchViewJsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _paginationViewJsDefault.default).addHandlerClick(controlPagination);
    (0, _addRecipeViewJsDefault.default).addHandlerUpload(controlAddRecipe);
};
init();

},{"core-js/modules/web.immediate.js":"lEnsk","./model.js":"Y4A21","./config.js":"k5Hzs","./views/recipeView.js":"l60JC","./views/searchView.js":"9OQAM","./views/resultsView.js":"cSbZE","./views/paginationView.js":"6z7bi","./views/bookmarksView.js":"4Lqzq","./views/addRecipeView.js":"i6DNj","regenerator-runtime/runtime":"dXNgZ","regenerator-runtime":"dXNgZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEnsk":[function(require,module,exports,__globalThis) {
'use strict';
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("34df65da7b7b4bd6");
require("6909e82a7d930793");

},{"34df65da7b7b4bd6":"60B7K","6909e82a7d930793":"lllAD"}],"60B7K":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("d6c899b6453b6398");
var globalThis = require("326164fd376c891f");
var clearImmediate = require("eac656905b53ffe8").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: globalThis.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"d6c899b6453b6398":"8Qymx","326164fd376c891f":"bWSXL","eac656905b53ffe8":"kGFmA"}],"8Qymx":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("902736ac31342fca");
var getOwnPropertyDescriptor = require("9199eb0fb253c57").f;
var createNonEnumerableProperty = require("4bf849026f62578b");
var defineBuiltIn = require("fc1efc95443575e7");
var defineGlobalProperty = require("dac0a5c9b3d3958b");
var copyConstructorProperties = require("1c97706cb5181711");
var isForced = require("5e0364ff5031f119");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = globalThis;
    else if (STATIC) target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
    else target = globalThis[TARGET] && globalThis[TARGET].prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, 'sham', true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"902736ac31342fca":"bWSXL","9199eb0fb253c57":"hFl3p","4bf849026f62578b":"jMqUm","fc1efc95443575e7":"8gi9f","dac0a5c9b3d3958b":"kEXbF","1c97706cb5181711":"dsoiV","5e0364ff5031f119":"aO4LP"}],"bWSXL":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || check(typeof this == 'object' && this) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function('return this')();

},{}],"hFl3p":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("f79c1d2923eea25c");
var call = require("99723a313cbfc90b");
var propertyIsEnumerableModule = require("9f8824d0236b540d");
var createPropertyDescriptor = require("f93272c7d37b1ea3");
var toIndexedObject = require("d5a18433b16ac7ea");
var toPropertyKey = require("b8c9e980a466febe");
var hasOwn = require("e51b28cd3ac32234");
var IE8_DOM_DEFINE = require("109a405ffdcb1048");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"f79c1d2923eea25c":"lKbfW","99723a313cbfc90b":"8oyyq","9f8824d0236b540d":"lAW1G","f93272c7d37b1ea3":"3BAEf","d5a18433b16ac7ea":"6jj4Z","b8c9e980a466febe":"ehHQO","e51b28cd3ac32234":"ck6o9","109a405ffdcb1048":"4waLa"}],"lKbfW":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("cb276022a50d4a75");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});

},{"cb276022a50d4a75":"kdP6D"}],"kdP6D":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"8oyyq":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_BIND = require("bacef969156d3b51");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"bacef969156d3b51":"fj1e3"}],"fj1e3":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("309aa6cc7f3cde57");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
});

},{"309aa6cc7f3cde57":"kdP6D"}],"lAW1G":[function(require,module,exports,__globalThis) {
'use strict';
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"3BAEf":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"6jj4Z":[function(require,module,exports,__globalThis) {
'use strict';
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("fce0dfacc75976c2");
var requireObjectCoercible = require("28e19d800cf50e01");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"fce0dfacc75976c2":"heLOD","28e19d800cf50e01":"lCAx2"}],"heLOD":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("fa1c21d3c496076c");
var fails = require("77147906a3f8c35e");
var classof = require("fe9dfe2e8a9fa8aa");
var $Object = Object;
var split = uncurryThis(''.split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object('z').propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;

},{"fa1c21d3c496076c":"6qcFf","77147906a3f8c35e":"kdP6D","fe9dfe2e8a9fa8aa":"gXMMH"}],"6qcFf":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_BIND = require("b3af28a1557b0631");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"b3af28a1557b0631":"fj1e3"}],"gXMMH":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("1c94a77e49f06a36");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"1c94a77e49f06a36":"6qcFf"}],"lCAx2":[function(require,module,exports,__globalThis) {
'use strict';
var isNullOrUndefined = require("b136e9c0f8a245d9");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
};

},{"b136e9c0f8a245d9":"eUwaa"}],"eUwaa":[function(require,module,exports,__globalThis) {
'use strict';
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"ehHQO":[function(require,module,exports,__globalThis) {
'use strict';
var toPrimitive = require("37da5d33b855a777");
var isSymbol = require("77b287447318a20a");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
};

},{"37da5d33b855a777":"kK4ju","77b287447318a20a":"dfsDy"}],"kK4ju":[function(require,module,exports,__globalThis) {
'use strict';
var call = require("94ebe12d249bdd9f");
var isObject = require("fc108e644b5b54bb");
var isSymbol = require("defb65da238d98c2");
var getMethod = require("bcfb6cc473cf47d");
var ordinaryToPrimitive = require("b799082a5e24f036");
var wellKnownSymbol = require("d5e8258d9075b879");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = 'default';
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
};

},{"94ebe12d249bdd9f":"8oyyq","fc108e644b5b54bb":"l8zuT","defb65da238d98c2":"dfsDy","bcfb6cc473cf47d":"TigIN","b799082a5e24f036":"gExYu","d5e8258d9075b879":"c3VP3"}],"l8zuT":[function(require,module,exports,__globalThis) {
'use strict';
var isCallable = require("1d680e46745d1a92");
module.exports = function(it) {
    return typeof it == 'object' ? it !== null : isCallable(it);
};

},{"1d680e46745d1a92":"aNvPt"}],"aNvPt":[function(require,module,exports,__globalThis) {
'use strict';
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function(argument) {
    return typeof argument == 'function' || argument === documentAll;
} : function(argument) {
    return typeof argument == 'function';
};

},{}],"dfsDy":[function(require,module,exports,__globalThis) {
'use strict';
var getBuiltIn = require("782b4808990c72b0");
var isCallable = require("e0357f9daa942ae8");
var isPrototypeOf = require("d6f65c5a00efa316");
var USE_SYMBOL_AS_UID = require("31019cd2eac231cc");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == 'symbol';
} : function(it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"782b4808990c72b0":"k7vqa","e0357f9daa942ae8":"aNvPt","d6f65c5a00efa316":"8lYLZ","31019cd2eac231cc":"92j2C"}],"k7vqa":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("8d679acd02da1dc5");
var isCallable = require("6ab93b28152fd1c0");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
};

},{"8d679acd02da1dc5":"bWSXL","6ab93b28152fd1c0":"aNvPt"}],"8lYLZ":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("2835294f3e586ca0");
module.exports = uncurryThis({}.isPrototypeOf);

},{"2835294f3e586ca0":"6qcFf"}],"92j2C":[function(require,module,exports,__globalThis) {
'use strict';
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("b0a6e399ae500d51");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';

},{"b0a6e399ae500d51":"925TW"}],"925TW":[function(require,module,exports,__globalThis) {
'use strict';
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("5c114f6c7f90eea3");
var fails = require("dd94d90bc3b71699");
var globalThis = require("36abed8b20d77163");
var $String = globalThis.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"5c114f6c7f90eea3":"hlt4n","dd94d90bc3b71699":"kdP6D","36abed8b20d77163":"bWSXL"}],"hlt4n":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("bf8a5c6b5966eff6");
var userAgent = require("13ac70724ed5edaa");
var process = globalThis.process;
var Deno = globalThis.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"bf8a5c6b5966eff6":"bWSXL","13ac70724ed5edaa":"8ttvE"}],"8ttvE":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("df85184d7db94e67");
var navigator = globalThis.navigator;
var userAgent = navigator && navigator.userAgent;
module.exports = userAgent ? String(userAgent) : '';

},{"df85184d7db94e67":"bWSXL"}],"TigIN":[function(require,module,exports,__globalThis) {
'use strict';
var aCallable = require("497e2b3ddc55cefe");
var isNullOrUndefined = require("49e7c5dcc1e26c55");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"497e2b3ddc55cefe":"5khEh","49e7c5dcc1e26c55":"eUwaa"}],"5khEh":[function(require,module,exports,__globalThis) {
'use strict';
var isCallable = require("f03964a466ce79a2");
var tryToString = require("8d58c8b857e60ac2");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + ' is not a function');
};

},{"f03964a466ce79a2":"aNvPt","8d58c8b857e60ac2":"eqewn"}],"eqewn":[function(require,module,exports,__globalThis) {
'use strict';
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return 'Object';
    }
};

},{}],"gExYu":[function(require,module,exports,__globalThis) {
'use strict';
var call = require("b1c990933740f25f");
var isCallable = require("c2ee4fb92510dd7b");
var isObject = require("bb628742b703417b");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
};

},{"b1c990933740f25f":"8oyyq","c2ee4fb92510dd7b":"aNvPt","bb628742b703417b":"l8zuT"}],"c3VP3":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("6d54582822df2d37");
var shared = require("39e13b1c35fbef4");
var hasOwn = require("1e0705bb2ae39add");
var uid = require("5c1510369ac0a8fe");
var NATIVE_SYMBOL = require("169dbfe0ae1fc95e");
var USE_SYMBOL_AS_UID = require("ba521e498d33694b");
var Symbol = globalThis.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol('Symbol.' + name);
    return WellKnownSymbolsStore[name];
};

},{"6d54582822df2d37":"bWSXL","39e13b1c35fbef4":"lekL4","1e0705bb2ae39add":"ck6o9","5c1510369ac0a8fe":"jJGbE","169dbfe0ae1fc95e":"925TW","ba521e498d33694b":"92j2C"}],"lekL4":[function(require,module,exports,__globalThis) {
'use strict';
var store = require("f010f484a47e98ad");
module.exports = function(key, value) {
    return store[key] || (store[key] = value || {});
};

},{"f010f484a47e98ad":"78fDK"}],"78fDK":[function(require,module,exports,__globalThis) {
'use strict';
var IS_PURE = require("ede6ef5d00173113");
var globalThis = require("c66f02a3624aa631");
var defineGlobalProperty = require("741c7f4795a521a5");
var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
(store.versions || (store.versions = [])).push({
    version: '3.39.0',
    mode: IS_PURE ? 'pure' : 'global',
    copyright: "\xa9 2014-2024 Denis Pushkarev (zloirock.ru)",
    license: 'https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
});

},{"ede6ef5d00173113":"6SrYf","c66f02a3624aa631":"bWSXL","741c7f4795a521a5":"kEXbF"}],"6SrYf":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = false;

},{}],"kEXbF":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("b15645d632e894c2");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(globalThis, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        globalThis[key] = value;
    }
    return value;
};

},{"b15645d632e894c2":"bWSXL"}],"ck6o9":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("f8d5b6c4149481a0");
var toObject = require("5cd65e8bd5eae53e");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"f8d5b6c4149481a0":"6qcFf","5cd65e8bd5eae53e":"b5AJa"}],"b5AJa":[function(require,module,exports,__globalThis) {
'use strict';
var requireObjectCoercible = require("4fdb888554101c78");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"4fdb888554101c78":"lCAx2"}],"jJGbE":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("450cc20ad23ed85");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};

},{"450cc20ad23ed85":"6qcFf"}],"4waLa":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("8cfb2a62ca360190");
var fails = require("4e7a2bb7bab30400");
var createElement = require("33f2cb4bffb61fbf");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
        get: function() {
            return 7;
        }
    }).a !== 7;
});

},{"8cfb2a62ca360190":"lKbfW","4e7a2bb7bab30400":"kdP6D","33f2cb4bffb61fbf":"crxdS"}],"crxdS":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("11ee52719971fc95");
var isObject = require("74d91e7ffc4a7e00");
var document = globalThis.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"11ee52719971fc95":"bWSXL","74d91e7ffc4a7e00":"l8zuT"}],"jMqUm":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("5475b21b660699ff");
var definePropertyModule = require("f72e98ff79b22f73");
var createPropertyDescriptor = require("c0c813b5c9cb342f");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"5475b21b660699ff":"lKbfW","f72e98ff79b22f73":"itkD7","c0c813b5c9cb342f":"3BAEf"}],"itkD7":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("222a173248039e33");
var IE8_DOM_DEFINE = require("acd147df7dfd08b5");
var V8_PROTOTYPE_DEFINE_BUG = require("823dec5b299b2dd1");
var anObject = require("c41c996d42f3dbc2");
var toPropertyKey = require("adc72cb586c5ba82");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
};

},{"222a173248039e33":"lKbfW","acd147df7dfd08b5":"4waLa","823dec5b299b2dd1":"4B3vi","c41c996d42f3dbc2":"5mYG7","adc72cb586c5ba82":"ehHQO"}],"4B3vi":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("5d24a379d57a929");
var fails = require("f26d6311eec70db0");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, 'prototype', {
        value: 42,
        writable: false
    }).prototype !== 42;
});

},{"5d24a379d57a929":"lKbfW","f26d6311eec70db0":"kdP6D"}],"5mYG7":[function(require,module,exports,__globalThis) {
'use strict';
var isObject = require("7be4164f05270310");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + ' is not an object');
};

},{"7be4164f05270310":"l8zuT"}],"8gi9f":[function(require,module,exports,__globalThis) {
'use strict';
var isCallable = require("3b7898754f575037");
var definePropertyModule = require("cc4c5e5870775054");
var makeBuiltIn = require("f37c6c9c1d44d2b7");
var defineGlobalProperty = require("46b8de5eb0c448dd");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"3b7898754f575037":"aNvPt","cc4c5e5870775054":"itkD7","f37c6c9c1d44d2b7":"fTkru","46b8de5eb0c448dd":"kEXbF"}],"fTkru":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("29bc5000deabad7d");
var fails = require("d85ca0e2ef246f08");
var isCallable = require("6e09d59526cab983");
var hasOwn = require("5ca63ed841b3b650");
var DESCRIPTORS = require("c8bfc26ff38bd4d3");
var CONFIGURABLE_FUNCTION_NAME = require("8e5e1d30b90e8271").CONFIGURABLE;
var inspectSource = require("e307dc3af7953340");
var InternalStateModule = require("dbb5e0c2287cfaf0");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, 'length', {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split('String');
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === 'Symbol(') name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, 'name', {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) defineProperty(value, 'length', {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, 'constructor') && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, 'prototype', {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, 'source')) state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');

},{"29bc5000deabad7d":"6qcFf","d85ca0e2ef246f08":"kdP6D","6e09d59526cab983":"aNvPt","5ca63ed841b3b650":"ck6o9","c8bfc26ff38bd4d3":"lKbfW","8e5e1d30b90e8271":"ajiB4","e307dc3af7953340":"djIyU","dbb5e0c2287cfaf0":"llQh5"}],"ajiB4":[function(require,module,exports,__globalThis) {
'use strict';
var DESCRIPTORS = require("1e75f972ba11d940");
var hasOwn = require("f39820a29c0fb181");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"1e75f972ba11d940":"lKbfW","f39820a29c0fb181":"ck6o9"}],"djIyU":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("cdfb6b6a798b540d");
var isCallable = require("29c34cf64c68ac49");
var store = require("e295137abc9069f0");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"cdfb6b6a798b540d":"6qcFf","29c34cf64c68ac49":"aNvPt","e295137abc9069f0":"78fDK"}],"llQh5":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_WEAK_MAP = require("61fb731b20940151");
var globalThis = require("79c814b4fa19074e");
var isObject = require("b7b44848fa3311ce");
var createNonEnumerableProperty = require("e35e8ef0592c0b8c");
var hasOwn = require("5adb7387a1655244");
var shared = require("4fbf46fd3665f6e0");
var sharedKey = require("4ecfebf3e1a0e98f");
var hiddenKeys = require("6a922362af208288");
var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = globalThis.TypeError;
var WeakMap = globalThis.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"61fb731b20940151":"gbnNT","79c814b4fa19074e":"bWSXL","b7b44848fa3311ce":"l8zuT","e35e8ef0592c0b8c":"jMqUm","5adb7387a1655244":"ck6o9","4fbf46fd3665f6e0":"78fDK","4ecfebf3e1a0e98f":"jvJaR","6a922362af208288":"bnuHe"}],"gbnNT":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("6b60500d8a3ba1f7");
var isCallable = require("773347e905abc10");
var WeakMap = globalThis.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"6b60500d8a3ba1f7":"bWSXL","773347e905abc10":"aNvPt"}],"jvJaR":[function(require,module,exports,__globalThis) {
'use strict';
var shared = require("fecdf30303e4df60");
var uid = require("1ef11e22bcd0ce53");
var keys = shared('keys');
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"fecdf30303e4df60":"lekL4","1ef11e22bcd0ce53":"jJGbE"}],"bnuHe":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = {};

},{}],"dsoiV":[function(require,module,exports,__globalThis) {
'use strict';
var hasOwn = require("56595f07e5e2dcb5");
var ownKeys = require("7e2df96fb6085fd3");
var getOwnPropertyDescriptorModule = require("fe2e34e77e203ed0");
var definePropertyModule = require("67de30af183d2dd2");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"56595f07e5e2dcb5":"ck6o9","7e2df96fb6085fd3":"eRx8S","fe2e34e77e203ed0":"hFl3p","67de30af183d2dd2":"itkD7"}],"eRx8S":[function(require,module,exports,__globalThis) {
'use strict';
var getBuiltIn = require("b3d2cd1d207f886d");
var uncurryThis = require("78483e220667b246");
var getOwnPropertyNamesModule = require("1b22821451f5bfbc");
var getOwnPropertySymbolsModule = require("52499202549f86b0");
var anObject = require("6f858bbb0fb17841");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"b3d2cd1d207f886d":"k7vqa","78483e220667b246":"6qcFf","1b22821451f5bfbc":"fmz2a","52499202549f86b0":"hOPtQ","6f858bbb0fb17841":"5mYG7"}],"fmz2a":[function(require,module,exports,__globalThis) {
'use strict';
var internalObjectKeys = require("5c4e32587943088d");
var enumBugKeys = require("983bcfbff51bf618");
var hiddenKeys = enumBugKeys.concat('length', 'prototype');
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"5c4e32587943088d":"1XlMe","983bcfbff51bf618":"hGRT6"}],"1XlMe":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("789ec9bb04c21cab");
var hasOwn = require("5224eef5b657b501");
var toIndexedObject = require("2f758446b27017fb");
var indexOf = require("7ee5588bc403260c").indexOf;
var hiddenKeys = require("45f9ac8752973ff0");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"789ec9bb04c21cab":"6qcFf","5224eef5b657b501":"ck6o9","2f758446b27017fb":"6jj4Z","7ee5588bc403260c":"1WVKa","45f9ac8752973ff0":"bnuHe"}],"1WVKa":[function(require,module,exports,__globalThis) {
'use strict';
var toIndexedObject = require("551b5f8d027c9bb0");
var toAbsoluteIndex = require("73442d871cd23b4d");
var lengthOfArrayLike = require("be3d0f3c0406b497");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"551b5f8d027c9bb0":"6jj4Z","73442d871cd23b4d":"4ykme","be3d0f3c0406b497":"6dHb3"}],"4ykme":[function(require,module,exports,__globalThis) {
'use strict';
var toIntegerOrInfinity = require("40b67b525fcbabb");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"40b67b525fcbabb":"kiAnV"}],"kiAnV":[function(require,module,exports,__globalThis) {
'use strict';
var trunc = require("4b015dd90908379b");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"4b015dd90908379b":"gSvRH"}],"gSvRH":[function(require,module,exports,__globalThis) {
'use strict';
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"6dHb3":[function(require,module,exports,__globalThis) {
'use strict';
var toLength = require("b46756e7e8c1d644");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"b46756e7e8c1d644":"4OiHV"}],"4OiHV":[function(require,module,exports,__globalThis) {
'use strict';
var toIntegerOrInfinity = require("5ace4e10fcb75f94");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"5ace4e10fcb75f94":"kiAnV"}],"hGRT6":[function(require,module,exports,__globalThis) {
'use strict';
// IE8- don't enum bug keys
module.exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];

},{}],"hOPtQ":[function(require,module,exports,__globalThis) {
'use strict';
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"aO4LP":[function(require,module,exports,__globalThis) {
'use strict';
var fails = require("4ddb538997e2371c");
var isCallable = require("e45b11580130cdd7");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

},{"4ddb538997e2371c":"kdP6D","e45b11580130cdd7":"aNvPt"}],"kGFmA":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("16f285737a4bacac");
var apply = require("2b1825420282b6cc");
var bind = require("49751eb6bcaee695");
var isCallable = require("ea8b69ce9c411001");
var hasOwn = require("2f649a3598fc854f");
var fails = require("45674694bd910992");
var html = require("684089e3fbf21db9");
var arraySlice = require("632412bf2512b22");
var createElement = require("d8603fddc7017610");
var validateArgumentsLength = require("4645b0d5a0a10d87");
var IS_IOS = require("6bf6361ca0f46ce7");
var IS_NODE = require("fba8ad1ee61f74aa");
var set = globalThis.setImmediate;
var clear = globalThis.clearImmediate;
var process = globalThis.process;
var Dispatch = globalThis.Dispatch;
var Function = globalThis.Function;
var MessageChannel = globalThis.MessageChannel;
var String = globalThis.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = globalThis.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    globalThis.postMessage(String(id), $location.protocol + '//' + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (globalThis.addEventListener && isCallable(globalThis.postMessage) && !globalThis.importScripts && $location && $location.protocol !== 'file:' && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        globalThis.addEventListener('message', eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) defer = function(id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"16f285737a4bacac":"bWSXL","2b1825420282b6cc":"5c6pV","49751eb6bcaee695":"hXBZP","ea8b69ce9c411001":"aNvPt","2f649a3598fc854f":"ck6o9","45674694bd910992":"kdP6D","684089e3fbf21db9":"jqUI1","632412bf2512b22":"iAvnS","d8603fddc7017610":"crxdS","4645b0d5a0a10d87":"bvIFr","6bf6361ca0f46ce7":"cweYL","fba8ad1ee61f74aa":"2iaQH"}],"5c6pV":[function(require,module,exports,__globalThis) {
'use strict';
var NATIVE_BIND = require("b703f6b642c617c4");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"b703f6b642c617c4":"fj1e3"}],"hXBZP":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("1279fa3e056ef675");
var aCallable = require("ba33881b91ec58f0");
var NATIVE_BIND = require("7558bc2f0c97bd18");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"1279fa3e056ef675":"7p3rn","ba33881b91ec58f0":"5khEh","7558bc2f0c97bd18":"fj1e3"}],"7p3rn":[function(require,module,exports,__globalThis) {
'use strict';
var classofRaw = require("a77e2ca59d068d22");
var uncurryThis = require("30f7cb9c108a2afd");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis(fn);
};

},{"a77e2ca59d068d22":"gXMMH","30f7cb9c108a2afd":"6qcFf"}],"jqUI1":[function(require,module,exports,__globalThis) {
'use strict';
var getBuiltIn = require("b2449bb253a667a1");
module.exports = getBuiltIn('document', 'documentElement');

},{"b2449bb253a667a1":"k7vqa"}],"iAvnS":[function(require,module,exports,__globalThis) {
'use strict';
var uncurryThis = require("1ccd70cc3b1bd238");
module.exports = uncurryThis([].slice);

},{"1ccd70cc3b1bd238":"6qcFf"}],"bvIFr":[function(require,module,exports,__globalThis) {
'use strict';
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw new $TypeError('Not enough arguments');
    return passed;
};

},{}],"cweYL":[function(require,module,exports,__globalThis) {
'use strict';
var userAgent = require("7411dd0c4c864c52");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"7411dd0c4c864c52":"8ttvE"}],"2iaQH":[function(require,module,exports,__globalThis) {
'use strict';
var ENVIRONMENT = require("af60c64f43636ef5");
module.exports = ENVIRONMENT === 'NODE';

},{"af60c64f43636ef5":"bYngf"}],"bYngf":[function(require,module,exports,__globalThis) {
'use strict';
/* global Bun, Deno -- detection */ var globalThis = require("c5301d5be6204b9f");
var userAgent = require("35fd7b7d2e923e7b");
var classof = require("b09c016cf0b7e39f");
var userAgentStartsWith = function(string) {
    return userAgent.slice(0, string.length) === string;
};
module.exports = function() {
    if (userAgentStartsWith('Bun/')) return 'BUN';
    if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
    if (userAgentStartsWith('Deno/')) return 'DENO';
    if (userAgentStartsWith('Node.js/')) return 'NODE';
    if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
    if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
    if (classof(globalThis.process) === 'process') return 'NODE';
    if (globalThis.window && globalThis.document) return 'BROWSER';
    return 'REST';
}();

},{"c5301d5be6204b9f":"bWSXL","35fd7b7d2e923e7b":"8ttvE","b09c016cf0b7e39f":"gXMMH"}],"lllAD":[function(require,module,exports,__globalThis) {
'use strict';
var $ = require("e3b3d7f4edf89ae6");
var globalThis = require("ff370d24aa3c3f5a");
var setTask = require("11c5b5018c4130e1").set;
var schedulersFix = require("1e49efa26736ff81");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = globalThis.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: globalThis.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"e3b3d7f4edf89ae6":"8Qymx","ff370d24aa3c3f5a":"bWSXL","11c5b5018c4130e1":"kGFmA","1e49efa26736ff81":"4gB3g"}],"4gB3g":[function(require,module,exports,__globalThis) {
'use strict';
var globalThis = require("420dd44f7e5dd863");
var apply = require("f268cde06e875996");
var isCallable = require("df38dbb437ab2e3d");
var ENVIRONMENT = require("71f34555c5526c64");
var USER_AGENT = require("91f4d6e08747505d");
var arraySlice = require("bcc0a2e8f57071");
var validateArgumentsLength = require("88a30985abfb8b7f");
var Function = globalThis.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENVIRONMENT === 'BUN' && function() {
    var version = globalThis.Bun.version.split('.');
    return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"420dd44f7e5dd863":"bWSXL","f268cde06e875996":"5c6pV","df38dbb437ab2e3d":"aNvPt","71f34555c5526c64":"bYngf","91f4d6e08747505d":"8ttvE","bcc0a2e8f57071":"iAvnS","88a30985abfb8b7f":"bvIFr"}],"Y4A21":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe);
var _regeneratorRuntime = require("regenerator-runtime");
var _configJs = require("./config.js");
// import { getJSON, sendJSON } from './helpers.js';
var _helpersJs = require("./helpers.js");
const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: (0, _configJs.RES_PER_PAGE)
    },
    bookmarks: []
};
const createRecipeObject = function(data) {
    const { recipe } = data.data;
    return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const loadRecipe = async function(id) {
    try {
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}${id}?key=${(0, _configJs.KEY)}`);
        state.recipe = createRecipeObject(data);
        if (state.bookmarks.some((bookmark)=>bookmark.id === id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
        console.log(state.recipe);
    } catch (err) {
        // Temp error handling
        console.error(`${err} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`);
        throw err;
    }
};
const loadSearchResults = async function(query) {
    try {
        state.search.query = query;
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}?search=${query}&key=${(0, _configJs.KEY)}`);
        console.log(data);
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...rec.key && {
                    key: rec.key
                }
            };
        });
        state.search.page = 1;
    } catch (err) {
        console.error(`${err} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`);
        throw err;
    }
};
const getSearchResultsPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage; // 0
    const end = page * state.search.resultsPerPage; // 9
    return state.search.results.slice(start, end);
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / state.recipe.servings;
    // newQt = oldQt * newServings / oldServings // 2 * 8 / 4 = 4
    });
    state.recipe.servings = newServings;
};
const persistBookmarks = function() {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
const addBookmark = function(recipe) {
    // Add bookmark
    state.bookmarks.push(recipe);
    // Mark current recipe as bookmarked
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    persistBookmarks();
};
const deleteBookmark = function(id) {
    // Delete bookmark
    const index = state.bookmarks.findIndex((el)=>el.id === id);
    state.bookmarks.splice(index, 1);
    // Mark current recipe as NOT bookmarked
    if (id === state.recipe.id) state.recipe.bookmarked = false;
    persistBookmarks();
};
const init = function() {
    const storage = localStorage.getItem('bookmarks');
    if (storage) state.bookmarks = JSON.parse(storage);
};
init();
const clearBookmarks = function() {
    localStorage.clear('bookmarks');
};
const uploadRecipe = async function(newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith('ingredient') && entry[1] !== '').map((ing)=>{
            const ingArr = ing[1].split(',').map((el)=>el.trim());
            // const ingArr = ing[1].replaceAll(' ', '').split(',');
            if (ingArr.length !== 3) throw new Error('Wrong ingredient fromat! Please use the correct format :)');
            const [quantity, unit, description] = ingArr;
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients
        };
        const data = await (0, _helpersJs.AJAX)(`${(0, _configJs.API_URL)}?key=${(0, _configJs.KEY)}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
    } catch (err) {
        throw err;
    }
};

},{"regenerator-runtime":"dXNgZ","./config.js":"k5Hzs","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXNgZ":[function(require,module,exports,__globalThis) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per GeneratorResume behavior specified since ES2015:
                // ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
                // Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next method, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable != null) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        throw new TypeError(typeof iterable + " is not iterable");
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"k5Hzs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
parcelHelpers.export(exports, "KEY", ()=>KEY);
parcelHelpers.export(exports, "MODAL_CLOSE_SEC", ()=>MODAL_CLOSE_SEC);
const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/';
const TIMEOUT_SEC = 10;
const RES_PER_PAGE = 10;
const KEY = '7728eed3-070d-4946-a734-c5cccd33f586';
const MODAL_CLOSE_SEC = 2.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hGI1E":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
var _regeneratorRuntime = require("regenerator-runtime");
var _configJs = require("./config.js");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _configJs.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"regenerator-runtime":"dXNgZ","./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l60JC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
// import icons from '../img/icons.svg'; // Parcel 1
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fractional = require("fractional");
class RecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.recipe');
    _errorMessage = 'We could not find that recipe. Please try another one!';
    _message = '';
    addHandlerRender(handler) {
        [
            'hashchange',
            'load'
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    addHandlerUpdateServings(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--update-servings');
            if (!btn) return;
            const { updateTo } = btn.dataset;
            if (+updateTo > 0) handler(+updateTo);
        });
    }
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--bookmark');
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        return `
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings - 1}">
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings + 1}">
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
          <svg>
            <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? '-fill' : ''}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;
    }
    _generateMarkupIngredient(ing) {
        return `
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${0, _iconsSvgDefault.default}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${ing.quantity ? new (0, _fractional.Fraction)(ing.quantity).toString() : ''}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
      </div>
    </li>
  `;
    }
}
exports.default = new RecipeView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","fractional":"7Aqg6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cUXS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') curEl.textContent = newEl.textContent;
            // Updates changed ATTRIBUES
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value));
        });
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
    renderSpinner() {
        const markup = `
      <div class="spinner">
        <svg>
          <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
        </svg>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(message = this._message) {
        const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loVOp":[function(require,module,exports,__globalThis) {
module.exports = require("9bcc84ee5d265e38").getBundleURL('hWUTQ') + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"9bcc84ee5d265e38":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"7Aqg6":[function(require,module,exports,__globalThis) {
/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ /* Fractions */ /* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 */ /*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */ Fraction = function(numerator, denominator) {
    /* double argument invocation */ if (typeof numerator !== 'undefined' && denominator) {
        if (typeof numerator === 'number' && typeof denominator === 'number') {
            this.numerator = numerator;
            this.denominator = denominator;
        } else if (typeof numerator === 'string' && typeof denominator === 'string') {
            // what are they?
            // hmm....
            // assume they are ints?
            this.numerator = parseInt(numerator);
            this.denominator = parseInt(denominator);
        }
    /* single-argument invocation */ } else if (typeof denominator === 'undefined') {
        num = numerator; // swap variable names for legibility
        if (typeof num === 'number') {
            this.numerator = num;
            this.denominator = 1;
        } else if (typeof num === 'string') {
            var a, b; // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
            // or a = '2/3' and b = undefined if we are just passed a single-part number
            var arr = num.split(' ');
            if (arr[0]) a = arr[0];
            if (arr[1]) b = arr[1];
            /* compound fraction e.g. 'A B/C' */ //  if a is an integer ...
            if (a % 1 === 0 && b && b.match('/')) return new Fraction(a).add(new Fraction(b));
            else if (a && !b) {
                /* simple fraction e.g. 'A/B' */ if (typeof a === 'string' && a.match('/')) {
                    // it's not a whole number... it's actually a fraction without a whole part written
                    var f = a.split('/');
                    this.numerator = f[0];
                    this.denominator = f[1];
                /* string floating point */ } else if (typeof a === 'string' && a.match('\.')) return new Fraction(parseFloat(a));
                else {
                    this.numerator = parseInt(a);
                    this.denominator = 1;
                }
            } else return undefined; // could not parse
        }
    }
    this.normalize();
};
Fraction.prototype.clone = function() {
    return new Fraction(this.numerator, this.denominator);
};
/* pretty-printer, converts fractions into whole numbers and fractions */ Fraction.prototype.toString = function() {
    if (this.denominator === 'NaN') return 'NaN';
    var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
    var numerator = this.numerator % this.denominator;
    var denominator = this.denominator;
    var result = [];
    if (wholepart != 0) result.push(wholepart);
    if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + '/' + denominator);
    return result.length > 0 ? result.join(' ') : 0;
};
/* destructively rescale the fraction by some integral factor */ Fraction.prototype.rescale = function(factor) {
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
};
Fraction.prototype.add = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone();
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator += b.numerator;
    return a.normalize();
};
Fraction.prototype.subtract = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone(); // we scale our argument destructively, so clone
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator -= b.numerator;
    return a.normalize();
};
Fraction.prototype.multiply = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.numerator;
        a.denominator *= b.denominator;
    } else if (typeof b === 'number') a.numerator *= b;
    else return a.multiply(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.divide = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.denominator;
        a.denominator *= b.numerator;
    } else if (typeof b === 'number') a.denominator *= b;
    else return a.divide(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.equals = function(b) {
    if (!(b instanceof Fraction)) b = new Fraction(b);
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return a.numerator === b.numerator && a.denominator === b.denominator;
};
/* Utility functions */ /* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */ Fraction.prototype.normalize = function() {
    var isFloat = function(n) {
        return typeof n === 'number' && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
    };
    var roundToPlaces = function(n, places) {
        if (!places) return Math.round(n);
        else {
            var scalar = Math.pow(10, places);
            return Math.round(n * scalar) / scalar;
        }
    };
    return function() {
        // XXX hackish.  Is there a better way to address this issue?
        //
        /* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */ if (isFloat(this.denominator)) {
            var rounded = roundToPlaces(this.denominator, 9);
            var scaleup = Math.pow(10, rounded.toString().split('.')[1].length);
            this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.numerator *= scaleup;
        }
        if (isFloat(this.numerator)) {
            var rounded = roundToPlaces(this.numerator, 9);
            var scaleup = Math.pow(10, rounded.toString().split('.')[1].length);
            this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.denominator *= scaleup;
        }
        var gcf = Fraction.gcf(this.numerator, this.denominator);
        this.numerator /= gcf;
        this.denominator /= gcf;
        if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    };
}();
/* Takes two numbers and returns their greatest common factor.
 */ Fraction.gcf = function(a, b) {
    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function(factor) {
        var i = fb.indexOf(factor);
        if (i >= 0) {
            common_factors.push(factor);
            fb.splice(i, 1); // remove from fb
        }
    });
    if (common_factors.length === 0) return 1;
    var gcf = function() {
        var r = common_factors[0];
        var i;
        for(i = 1; i < common_factors.length; i++)r = r * common_factors[i];
        return r;
    }();
    return gcf;
};
// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors = function(n) {
    var num1 = Math.abs(n);
    var factors = [];
    var _factor = 2; // first potential prime factor
    while(_factor * _factor <= num1)if (num1 % _factor === 0) {
        factors.push(_factor); // so keep it
        num1 = num1 / _factor; // and divide our search point by it
    } else _factor++; // and increment
    if (num1 != 1) factors.push(num1); //    so it too should be recorded
    return factors; // Return the prime factors
};
module.exports.Fraction = Fraction;

},{}],"9OQAM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    _parentEl = document.querySelector('.search');
    getQuery() {
        const query = this._parentEl.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        this._parentEl.querySelector('.search__field').value = '';
    }
    addHandlerSearch(handler) {
        this._parentEl.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ResultsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipes found for your query! Please try again ;)';
    _message = '';
    _generateMarkup() {
        return this._data.map((result)=>(0, _previewViewJsDefault.default).render(result, false)).join('');
    }
}
exports.default = new ResultsView();

},{"./View.js":"5cUXS","./previewView.js":"1FDQ6","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FDQ6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PreviewView extends (0, _viewJsDefault.default) {
    _parentElement = '';
    _generateMarkup() {
        const id = window.location.hash.slice(1);
        return `
      <li class="preview">
        <a class="preview__link ${this._data.id === id ? 'preview__link--active' : ''}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key ? '' : 'hidden'}">
              <svg>
              <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
    }
}
exports.default = new PreviewView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.pagination');
    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        // Page 1, and there are other pages
        if (curPage === 1 && numPages > 1) return `
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
        // Last page
        if (curPage === numPages && numPages > 1) return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
        // Other page
        if (curPage < numPages) return `
        <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
        <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
        // Page 1, and there are NO other pages
        return '';
    }
}
exports.default = new PaginationView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lqzq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class BookmarksView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
    _message = '';
    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }
    _generateMarkup() {
        return this._data.map((bookmark)=>(0, _previewViewJsDefault.default).render(bookmark, false)).join('');
    }
}
exports.default = new BookmarksView();

},{"./View.js":"5cUXS","./previewView.js":"1FDQ6","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6DNj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg"); // Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class AddRecipeView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector('.upload');
    _message = 'Recipe was successfully uploaded :)';
    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    }
    _addHandlerHideWindow() {
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
        this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    }
    addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            handler(data);
        });
    }
    _generateMarkup() {}
}
exports.default = new AddRecipeView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ik2hV","aenu9"], "aenu9", "parcelRequire94c2")

//# sourceMappingURL=index.e37f48ea.js.map