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
        this
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
})({"anvqh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
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
*/ var OVERLAY_ID = "__parcel__error__overlay__";
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
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
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
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
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
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _vue = require("vue");
var _vueRouter = require("vue-router");
var _homeViewVue = require("./views/HomeView.vue");
var _homeViewVueDefault = parcelHelpers.interopDefault(_homeViewVue);
var _maintainersViewVue = require("./views/MaintainersView.vue");
var _maintainersViewVueDefault = parcelHelpers.interopDefault(_maintainersViewVue);
var _addBoardViewVue = require("./views/AddBoardView.vue");
var _addBoardViewVueDefault = parcelHelpers.interopDefault(_addBoardViewVue);
var _newMaintainerViewVue = require("./views/NewMaintainerView.vue");
var _newMaintainerViewVueDefault = parcelHelpers.interopDefault(_newMaintainerViewVue);
var _editBoardViewVue = require("./views/EditBoardView.vue");
var _editBoardViewVueDefault = parcelHelpers.interopDefault(_editBoardViewVue);
var _issuesViewVue = require("./views/IssuesView.vue");
var _issuesViewVueDefault = parcelHelpers.interopDefault(_issuesViewVue);
var _mainCss = require("./assets/main.css");
var _appVue = require("./App.vue");
var _appVueDefault = parcelHelpers.interopDefault(_appVue);
const router = (0, _vueRouter.createRouter)({
    history: (0, _vueRouter.createWebHistory)(),
    routes: [
        {
            path: "/",
            component: (0, _homeViewVueDefault.default)
        },
        {
            path: "/maintainers",
            component: (0, _maintainersViewVueDefault.default)
        },
        {
            path: "/maintainers/add",
            component: (0, _newMaintainerViewVueDefault.default)
        },
        {
            path: "/add",
            component: (0, _addBoardViewVueDefault.default)
        },
        {
            path: "/edit",
            component: (0, _editBoardViewVueDefault.default)
        },
        {
            path: "/issues",
            component: (0, _issuesViewVueDefault.default)
        }
    ]
});
const app = (0, _vue.createApp)((0, _appVueDefault.default));
app.use(router);
app.mount("#app");

},{"vue":"hLUyz","vue-router":"c18b3","./views/HomeView.vue":"ketzT","./views/MaintainersView.vue":"3sE82","./views/AddBoardView.vue":"7v1Lq","./views/NewMaintainerView.vue":"apec9","./views/EditBoardView.vue":"l86fs","./views/IssuesView.vue":"6ELy8","./assets/main.css":"7SfAk","./App.vue":"fYNyc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hLUyz":[function(require,module,exports) {
/**
* vue v3.4.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseTransition", ()=>BaseTransition);
parcelHelpers.export(exports, "BaseTransitionPropsValidators", ()=>BaseTransitionPropsValidators);
parcelHelpers.export(exports, "Comment", ()=>Comment);
parcelHelpers.export(exports, "DeprecationTypes", ()=>DeprecationTypes);
parcelHelpers.export(exports, "EffectScope", ()=>EffectScope);
parcelHelpers.export(exports, "ErrorCodes", ()=>ErrorCodes);
parcelHelpers.export(exports, "ErrorTypeStrings", ()=>ErrorTypeStrings);
parcelHelpers.export(exports, "Fragment", ()=>Fragment);
parcelHelpers.export(exports, "KeepAlive", ()=>KeepAlive);
parcelHelpers.export(exports, "ReactiveEffect", ()=>ReactiveEffect);
parcelHelpers.export(exports, "Static", ()=>Static);
parcelHelpers.export(exports, "Suspense", ()=>Suspense);
parcelHelpers.export(exports, "Teleport", ()=>Teleport);
parcelHelpers.export(exports, "Text", ()=>Text);
parcelHelpers.export(exports, "TrackOpTypes", ()=>TrackOpTypes);
parcelHelpers.export(exports, "Transition", ()=>Transition);
parcelHelpers.export(exports, "TransitionGroup", ()=>TransitionGroup);
parcelHelpers.export(exports, "TriggerOpTypes", ()=>TriggerOpTypes);
parcelHelpers.export(exports, "VueElement", ()=>VueElement);
parcelHelpers.export(exports, "assertNumber", ()=>assertNumber);
parcelHelpers.export(exports, "callWithAsyncErrorHandling", ()=>callWithAsyncErrorHandling);
parcelHelpers.export(exports, "callWithErrorHandling", ()=>callWithErrorHandling);
parcelHelpers.export(exports, "camelize", ()=>camelize);
parcelHelpers.export(exports, "capitalize", ()=>capitalize);
parcelHelpers.export(exports, "cloneVNode", ()=>cloneVNode);
parcelHelpers.export(exports, "compatUtils", ()=>compatUtils);
parcelHelpers.export(exports, "compile", ()=>compileToFunction);
parcelHelpers.export(exports, "computed", ()=>computed);
parcelHelpers.export(exports, "createApp", ()=>createApp);
parcelHelpers.export(exports, "createBlock", ()=>createBlock);
parcelHelpers.export(exports, "createCommentVNode", ()=>createCommentVNode);
parcelHelpers.export(exports, "createElementBlock", ()=>createElementBlock);
parcelHelpers.export(exports, "createElementVNode", ()=>createBaseVNode);
parcelHelpers.export(exports, "createHydrationRenderer", ()=>createHydrationRenderer);
parcelHelpers.export(exports, "createPropsRestProxy", ()=>createPropsRestProxy);
parcelHelpers.export(exports, "createRenderer", ()=>createRenderer);
parcelHelpers.export(exports, "createSSRApp", ()=>createSSRApp);
parcelHelpers.export(exports, "createSlots", ()=>createSlots);
parcelHelpers.export(exports, "createStaticVNode", ()=>createStaticVNode);
parcelHelpers.export(exports, "createTextVNode", ()=>createTextVNode);
parcelHelpers.export(exports, "createVNode", ()=>createVNode);
parcelHelpers.export(exports, "customRef", ()=>customRef);
parcelHelpers.export(exports, "defineAsyncComponent", ()=>defineAsyncComponent);
parcelHelpers.export(exports, "defineComponent", ()=>defineComponent);
parcelHelpers.export(exports, "defineCustomElement", ()=>defineCustomElement);
parcelHelpers.export(exports, "defineEmits", ()=>defineEmits);
parcelHelpers.export(exports, "defineExpose", ()=>defineExpose);
parcelHelpers.export(exports, "defineModel", ()=>defineModel);
parcelHelpers.export(exports, "defineOptions", ()=>defineOptions);
parcelHelpers.export(exports, "defineProps", ()=>defineProps);
parcelHelpers.export(exports, "defineSSRCustomElement", ()=>defineSSRCustomElement);
parcelHelpers.export(exports, "defineSlots", ()=>defineSlots);
parcelHelpers.export(exports, "devtools", ()=>devtools);
parcelHelpers.export(exports, "effect", ()=>effect);
parcelHelpers.export(exports, "effectScope", ()=>effectScope);
parcelHelpers.export(exports, "getCurrentInstance", ()=>getCurrentInstance);
parcelHelpers.export(exports, "getCurrentScope", ()=>getCurrentScope);
parcelHelpers.export(exports, "getTransitionRawChildren", ()=>getTransitionRawChildren);
parcelHelpers.export(exports, "guardReactiveProps", ()=>guardReactiveProps);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "handleError", ()=>handleError);
parcelHelpers.export(exports, "hasInjectionContext", ()=>hasInjectionContext);
parcelHelpers.export(exports, "hydrate", ()=>hydrate);
parcelHelpers.export(exports, "initCustomFormatter", ()=>initCustomFormatter);
parcelHelpers.export(exports, "initDirectivesForSSR", ()=>initDirectivesForSSR);
parcelHelpers.export(exports, "inject", ()=>inject);
parcelHelpers.export(exports, "isMemoSame", ()=>isMemoSame);
parcelHelpers.export(exports, "isProxy", ()=>isProxy);
parcelHelpers.export(exports, "isReactive", ()=>isReactive);
parcelHelpers.export(exports, "isReadonly", ()=>isReadonly);
parcelHelpers.export(exports, "isRef", ()=>isRef);
parcelHelpers.export(exports, "isRuntimeOnly", ()=>isRuntimeOnly);
parcelHelpers.export(exports, "isShallow", ()=>isShallow);
parcelHelpers.export(exports, "isVNode", ()=>isVNode);
parcelHelpers.export(exports, "markRaw", ()=>markRaw);
parcelHelpers.export(exports, "mergeDefaults", ()=>mergeDefaults);
parcelHelpers.export(exports, "mergeModels", ()=>mergeModels);
parcelHelpers.export(exports, "mergeProps", ()=>mergeProps);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "normalizeClass", ()=>normalizeClass);
parcelHelpers.export(exports, "normalizeProps", ()=>normalizeProps);
parcelHelpers.export(exports, "normalizeStyle", ()=>normalizeStyle);
parcelHelpers.export(exports, "onActivated", ()=>onActivated);
parcelHelpers.export(exports, "onBeforeMount", ()=>onBeforeMount);
parcelHelpers.export(exports, "onBeforeUnmount", ()=>onBeforeUnmount);
parcelHelpers.export(exports, "onBeforeUpdate", ()=>onBeforeUpdate);
parcelHelpers.export(exports, "onDeactivated", ()=>onDeactivated);
parcelHelpers.export(exports, "onErrorCaptured", ()=>onErrorCaptured);
parcelHelpers.export(exports, "onMounted", ()=>onMounted);
parcelHelpers.export(exports, "onRenderTracked", ()=>onRenderTracked);
parcelHelpers.export(exports, "onRenderTriggered", ()=>onRenderTriggered);
parcelHelpers.export(exports, "onScopeDispose", ()=>onScopeDispose);
parcelHelpers.export(exports, "onServerPrefetch", ()=>onServerPrefetch);
parcelHelpers.export(exports, "onUnmounted", ()=>onUnmounted);
parcelHelpers.export(exports, "onUpdated", ()=>onUpdated);
parcelHelpers.export(exports, "openBlock", ()=>openBlock);
parcelHelpers.export(exports, "popScopeId", ()=>popScopeId);
parcelHelpers.export(exports, "provide", ()=>provide);
parcelHelpers.export(exports, "proxyRefs", ()=>proxyRefs);
parcelHelpers.export(exports, "pushScopeId", ()=>pushScopeId);
parcelHelpers.export(exports, "queuePostFlushCb", ()=>queuePostFlushCb);
parcelHelpers.export(exports, "reactive", ()=>reactive);
parcelHelpers.export(exports, "readonly", ()=>readonly);
parcelHelpers.export(exports, "ref", ()=>ref);
parcelHelpers.export(exports, "registerRuntimeCompiler", ()=>registerRuntimeCompiler);
parcelHelpers.export(exports, "render", ()=>render);
parcelHelpers.export(exports, "renderList", ()=>renderList);
parcelHelpers.export(exports, "renderSlot", ()=>renderSlot);
parcelHelpers.export(exports, "resolveComponent", ()=>resolveComponent);
parcelHelpers.export(exports, "resolveDirective", ()=>resolveDirective);
parcelHelpers.export(exports, "resolveDynamicComponent", ()=>resolveDynamicComponent);
parcelHelpers.export(exports, "resolveFilter", ()=>resolveFilter);
parcelHelpers.export(exports, "resolveTransitionHooks", ()=>resolveTransitionHooks);
parcelHelpers.export(exports, "setBlockTracking", ()=>setBlockTracking);
parcelHelpers.export(exports, "setDevtoolsHook", ()=>setDevtoolsHook);
parcelHelpers.export(exports, "setTransitionHooks", ()=>setTransitionHooks);
parcelHelpers.export(exports, "shallowReactive", ()=>shallowReactive);
parcelHelpers.export(exports, "shallowReadonly", ()=>shallowReadonly);
parcelHelpers.export(exports, "shallowRef", ()=>shallowRef);
parcelHelpers.export(exports, "ssrContextKey", ()=>ssrContextKey);
parcelHelpers.export(exports, "ssrUtils", ()=>ssrUtils);
parcelHelpers.export(exports, "stop", ()=>stop);
parcelHelpers.export(exports, "toDisplayString", ()=>toDisplayString);
parcelHelpers.export(exports, "toHandlerKey", ()=>toHandlerKey);
parcelHelpers.export(exports, "toHandlers", ()=>toHandlers);
parcelHelpers.export(exports, "toRaw", ()=>toRaw);
parcelHelpers.export(exports, "toRef", ()=>toRef);
parcelHelpers.export(exports, "toRefs", ()=>toRefs);
parcelHelpers.export(exports, "toValue", ()=>toValue);
parcelHelpers.export(exports, "transformVNodeArgs", ()=>transformVNodeArgs);
parcelHelpers.export(exports, "triggerRef", ()=>triggerRef);
parcelHelpers.export(exports, "unref", ()=>unref);
parcelHelpers.export(exports, "useAttrs", ()=>useAttrs);
parcelHelpers.export(exports, "useCssModule", ()=>useCssModule);
parcelHelpers.export(exports, "useCssVars", ()=>useCssVars);
parcelHelpers.export(exports, "useModel", ()=>useModel);
parcelHelpers.export(exports, "useSSRContext", ()=>useSSRContext);
parcelHelpers.export(exports, "useSlots", ()=>useSlots);
parcelHelpers.export(exports, "useTransitionState", ()=>useTransitionState);
parcelHelpers.export(exports, "vModelCheckbox", ()=>vModelCheckbox);
parcelHelpers.export(exports, "vModelDynamic", ()=>vModelDynamic);
parcelHelpers.export(exports, "vModelRadio", ()=>vModelRadio);
parcelHelpers.export(exports, "vModelSelect", ()=>vModelSelect);
parcelHelpers.export(exports, "vModelText", ()=>vModelText);
parcelHelpers.export(exports, "vShow", ()=>vShow);
parcelHelpers.export(exports, "version", ()=>version);
parcelHelpers.export(exports, "warn", ()=>warn);
parcelHelpers.export(exports, "watch", ()=>watch);
parcelHelpers.export(exports, "watchEffect", ()=>watchEffect);
parcelHelpers.export(exports, "watchPostEffect", ()=>watchPostEffect);
parcelHelpers.export(exports, "watchSyncEffect", ()=>watchSyncEffect);
parcelHelpers.export(exports, "withAsyncContext", ()=>withAsyncContext);
parcelHelpers.export(exports, "withCtx", ()=>withCtx);
parcelHelpers.export(exports, "withDefaults", ()=>withDefaults);
parcelHelpers.export(exports, "withDirectives", ()=>withDirectives);
parcelHelpers.export(exports, "withKeys", ()=>withKeys);
parcelHelpers.export(exports, "withMemo", ()=>withMemo);
parcelHelpers.export(exports, "withModifiers", ()=>withModifiers);
parcelHelpers.export(exports, "withScopeId", ()=>withScopeId);
var global = arguments[3];
function makeMap(str, expectsLowerCase) {
    const set = new Set(str.split(","));
    return expectsLowerCase ? (val)=>set.has(val.toLowerCase()) : (val)=>set.has(val);
}
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = ()=>{};
const NO = ()=>false;
const isOn = (key)=>key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
    (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key)=>key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el)=>{
    const i = arr.indexOf(el);
    if (i > -1) arr.splice(i, 1);
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key)=>hasOwnProperty$1.call(val, key);
const isArray = Array.isArray;
const isMap = (val)=>toTypeString(val) === "[object Map]";
const isSet = (val)=>toTypeString(val) === "[object Set]";
const isDate = (val)=>toTypeString(val) === "[object Date]";
const isRegExp = (val)=>toTypeString(val) === "[object RegExp]";
const isFunction = (val)=>typeof val === "function";
const isString = (val)=>typeof val === "string";
const isSymbol = (val)=>typeof val === "symbol";
const isObject = (val)=>val !== null && typeof val === "object";
const isPromise = (val)=>{
    return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value)=>objectToString.call(value);
const toRawType = (value)=>{
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val)=>toTypeString(val) === "[object Object]";
const isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn)=>{
    const cache = /* @__PURE__ */ Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction((str)=>{
    const s = str ? `on${capitalize(str)}` : ``;
    return s;
});
const hasChanged = (value, oldValue)=>!Object.is(value, oldValue);
const invokeArrayFns = (fns, arg)=>{
    for(let i = 0; i < fns.length; i++)fns[i](arg);
};
const def = (obj, key, value)=>{
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const looseToNumber = (val)=>{
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
const toNumber = (val)=>{
    const n = isString(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = ()=>{
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
const PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `NEED_HYDRATION`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
};
const slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
};
const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error";
const isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    let lines = source.split(/(\r?\n)/);
    const newlineSequences = lines.filter((_, idx)=>idx % 2 === 1);
    lines = lines.filter((_, idx)=>idx % 2 === 0);
    let count = 0;
    const res = [];
    for(let i = 0; i < lines.length; i++){
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start) {
            for(let j = i - range; j <= i + range || end > count; j++){
                if (j < 0 || j >= lines.length) continue;
                const line = j + 1;
                res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                if (j === i) {
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
                } else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + "^".repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join("\n");
}
function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for(let i = 0; i < value.length; i++){
            const item = value[i];
            const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) for(const key in normalized)res[key] = normalized[key];
        }
        return res;
    } else if (isString(value) || isObject(value)) return value;
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item)=>{
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = "";
    if (!styles || isString(styles)) return ret;
    for(const key in styles){
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) || typeof value === "number") ret += `${normalizedKey}:${value};`;
    }
    return ret;
}
function normalizeClass(value) {
    let res = "";
    if (isString(value)) res = value;
    else if (isArray(value)) for(let i = 0; i < value.length; i++){
        const normalized = normalizeClass(value[i]);
        if (normalized) res += normalized + " ";
    }
    else if (isObject(value)) {
        for(const name in value)if (value[name]) res += name + " ";
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props) return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) props.class = normalizeClass(klass);
    if (style) props.style = normalizeStyle(style);
    return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
    return !!value || value === "";
}
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for(let i = 0; equal && i < a.length; i++)equal = looseEqual(a[i], b[i]);
    return equal;
}
function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) return a === b;
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        if (!aValidType || !bValidType) return false;
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) return false;
        for(const key in a){
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex((item)=>looseEqual(item, val));
}
const toDisplayString = (val)=>{
    return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val)=>{
    if (val && val.__v_isRef) return replacer(_key, val.value);
    else if (isMap(val)) return {
        [`Map(${val.size})`]: [
            ...val.entries()
        ].reduce((entries, [key, val2], i)=>{
            entries[stringifySymbol(key, i) + " =>"] = val2;
            return entries;
        }, {})
    };
    else if (isSet(val)) return {
        [`Set(${val.size})`]: [
            ...val.values()
        ].map((v1)=>stringifySymbol(v1))
    };
    else if (isSymbol(val)) return stringifySymbol(val);
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) return String(val);
    return val;
};
const stringifySymbol = (v1, i = "")=>{
    var _a;
    return isSymbol(v1) ? `Symbol(${(_a = v1.description) != null ? _a : i})` : v1;
};
function warn$2(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
    constructor(detached = false){
        this.detached = detached;
        /**
     * @internal
     */ this._active = true;
        /**
     * @internal
     */ this.effects = [];
        /**
     * @internal
     */ this.cleanups = [];
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
    get active() {
        return this._active;
    }
    run(fn) {
        if (this._active) {
            const currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            } finally{
                activeEffectScope = currentEffectScope;
            }
        } else warn$2(`cannot run an inactive effect scope.`);
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ on() {
        activeEffectScope = this;
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ off() {
        activeEffectScope = this.parent;
    }
    stop(fromParent) {
        if (this._active) {
            let i, l;
            for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].stop();
            for(i = 0, l = this.cleanups.length; i < l; i++)this.cleanups[i]();
            if (this.scopes) for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].stop(true);
            if (!this.detached && this.parent && !fromParent) {
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.parent = void 0;
            this._active = false;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function recordEffectScope(effect, scope = activeEffectScope) {
    if (scope && scope.active) scope.effects.push(effect);
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) activeEffectScope.cleanups.push(fn);
    else warn$2(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
}
let activeEffect;
class ReactiveEffect {
    constructor(fn, trigger, scheduler, scope){
        this.fn = fn;
        this.trigger = trigger;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        /**
     * @internal
     */ this._dirtyLevel = 3;
        /**
     * @internal
     */ this._trackId = 0;
        /**
     * @internal
     */ this._runnings = 0;
        /**
     * @internal
     */ this._queryings = 0;
        /**
     * @internal
     */ this._depsLength = 0;
        recordEffectScope(this, scope);
    }
    get dirty() {
        if (this._dirtyLevel === 1) {
            this._dirtyLevel = 0;
            this._queryings++;
            pauseTracking();
            for (const dep of this.deps)if (dep.computed) {
                triggerComputed(dep.computed);
                if (this._dirtyLevel >= 2) break;
            }
            resetTracking();
            this._queryings--;
        }
        return this._dirtyLevel >= 2;
    }
    set dirty(v1) {
        this._dirtyLevel = v1 ? 3 : 0;
    }
    run() {
        this._dirtyLevel = 0;
        if (!this.active) return this.fn();
        let lastShouldTrack = shouldTrack;
        let lastEffect = activeEffect;
        try {
            shouldTrack = true;
            activeEffect = this;
            this._runnings++;
            preCleanupEffect(this);
            return this.fn();
        } finally{
            postCleanupEffect(this);
            this._runnings--;
            activeEffect = lastEffect;
            shouldTrack = lastShouldTrack;
        }
    }
    stop() {
        var _a;
        if (this.active) {
            preCleanupEffect(this);
            postCleanupEffect(this);
            (_a = this.onStop) == null || _a.call(this);
            this.active = false;
        }
    }
}
function triggerComputed(computed) {
    return computed.value;
}
function preCleanupEffect(effect2) {
    effect2._trackId++;
    effect2._depsLength = 0;
}
function postCleanupEffect(effect2) {
    if (effect2.deps && effect2.deps.length > effect2._depsLength) {
        for(let i = effect2._depsLength; i < effect2.deps.length; i++)cleanupDepEffect(effect2.deps[i], effect2);
        effect2.deps.length = effect2._depsLength;
    }
}
function cleanupDepEffect(dep, effect2) {
    const trackId = dep.get(effect2);
    if (trackId !== void 0 && effect2._trackId !== trackId) {
        dep.delete(effect2);
        if (dep.size === 0) dep.cleanup();
    }
}
function effect(fn, options) {
    if (fn.effect instanceof ReactiveEffect) fn = fn.effect.fn;
    const _effect = new ReactiveEffect(fn, NOOP, ()=>{
        if (_effect.dirty) _effect.run();
    });
    if (options) {
        extend(_effect, options);
        if (options.scope) recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) _effect.run();
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
}
function stop(runner) {
    runner.effect.stop();
}
let shouldTrack = true;
let pauseScheduleStack = 0;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
}
function pauseScheduling() {
    pauseScheduleStack++;
}
function resetScheduling() {
    pauseScheduleStack--;
    while(!pauseScheduleStack && queueEffectSchedulers.length)queueEffectSchedulers.shift()();
}
function trackEffect(effect2, dep, debuggerEventExtraInfo) {
    var _a;
    if (dep.get(effect2) !== effect2._trackId) {
        dep.set(effect2, effect2._trackId);
        const oldDep = effect2.deps[effect2._depsLength];
        if (oldDep !== dep) {
            if (oldDep) cleanupDepEffect(oldDep, effect2);
            effect2.deps[effect2._depsLength++] = dep;
        } else effect2._depsLength++;
        (_a = effect2.onTrack) == null || _a.call(effect2, extend({
            effect: effect2
        }, debuggerEventExtraInfo));
    }
}
const queueEffectSchedulers = [];
function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
    var _a;
    pauseScheduling();
    for (const effect2 of dep.keys()){
        if (!effect2.allowRecurse && effect2._runnings) continue;
        if (effect2._dirtyLevel < dirtyLevel && (!effect2._runnings || dirtyLevel !== 2)) {
            const lastDirtyLevel = effect2._dirtyLevel;
            effect2._dirtyLevel = dirtyLevel;
            if (lastDirtyLevel === 0 && (!effect2._queryings || dirtyLevel !== 2)) {
                (_a = effect2.onTrigger) == null || _a.call(effect2, extend({
                    effect: effect2
                }, debuggerEventExtraInfo));
                effect2.trigger();
                if (effect2.scheduler) queueEffectSchedulers.push(effect2.scheduler);
            }
        }
    }
    resetScheduling();
}
const createDep = (cleanup, computed)=>{
    const dep = /* @__PURE__ */ new Map();
    dep.cleanup = cleanup;
    dep.computed = computed;
    return dep;
};
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function track(target, type, key) {
    if (shouldTrack && activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
        let dep = depsMap.get(key);
        if (!dep) depsMap.set(key, dep = createDep(()=>depsMap.delete(key)));
        trackEffect(activeEffect, dep, {
            target,
            type,
            key
        });
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;
    let deps = [];
    if (type === "clear") deps = [
        ...depsMap.values()
    ];
    else if (key === "length" && isArray(target)) {
        const newLength = Number(newValue);
        depsMap.forEach((dep, key2)=>{
            if (key2 === "length" || !isSymbol(key2) && key2 >= newLength) deps.push(dep);
        });
    } else {
        if (key !== void 0) deps.push(depsMap.get(key));
        switch(type){
            case "add":
                if (!isArray(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if (isIntegerKey(key)) deps.push(depsMap.get("length"));
                break;
            case "delete":
                if (!isArray(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set":
                if (isMap(target)) deps.push(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    pauseScheduling();
    for (const dep of deps)if (dep) triggerEffects(dep, 3, {
        target,
        type,
        key,
        newValue,
        oldValue,
        oldTarget
    });
    resetScheduling();
}
function getDepFromReactive(object, key) {
    var _a;
    return (_a = targetMap.get(object)) == null ? void 0 : _a.get(key);
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key)=>key !== "arguments" && key !== "caller").map((key)=>Symbol[key]).filter(isSymbol));
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    [
        "includes",
        "indexOf",
        "lastIndexOf"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for(let i = 0, l = this.length; i < l; i++)track(arr, "get", i + "");
            const res = arr[key](...args);
            if (res === -1 || res === false) return arr[key](...args.map(toRaw));
            else return res;
        };
    });
    [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            pauseTracking();
            pauseScheduling();
            const res = toRaw(this)[key].apply(this, args);
            resetScheduling();
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function hasOwnProperty(key) {
    const obj = toRaw(this);
    track(obj, "has", key);
    return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
    constructor(_isReadonly = false, _shallow = false){
        this._isReadonly = _isReadonly;
        this._shallow = _shallow;
    }
    get(target, key, receiver) {
        const isReadonly2 = this._isReadonly, shallow = this._shallow;
        if (key === "__v_isReactive") return !isReadonly2;
        else if (key === "__v_isReadonly") return isReadonly2;
        else if (key === "__v_isShallow") return shallow;
        else if (key === "__v_raw") {
            if (receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
            // this means the reciever is a user proxy of the reactive proxy
            Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) return target;
            return;
        }
        const targetIsArray = isArray(target);
        if (!isReadonly2) {
            if (targetIsArray && hasOwn(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
            if (key === "hasOwnProperty") return hasOwnProperty;
        }
        const res = Reflect.get(target, key, receiver);
        if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly2) track(target, "get", key);
        if (shallow) return res;
        if (isRef(res)) return targetIsArray && isIntegerKey(key) ? res : res.value;
        if (isObject(res)) return isReadonly2 ? readonly(res) : reactive(res);
        return res;
    }
}
class MutableReactiveHandler extends BaseReactiveHandler {
    constructor(shallow = false){
        super(false, shallow);
    }
    set(target, key, value, receiver) {
        let oldValue = target[key];
        if (!this._shallow) {
            const isOldValueReadonly = isReadonly(oldValue);
            if (!isShallow(value) && !isReadonly(value)) {
                oldValue = toRaw(oldValue);
                value = toRaw(value);
            }
            if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
                if (isOldValueReadonly) return false;
                else {
                    oldValue.value = value;
                    return true;
                }
            }
        }
        const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add", key, value);
            else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
        }
        return result;
    }
    deleteProperty(target, key) {
        const hadKey = hasOwn(target, key);
        const oldValue = target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
        return result;
    }
    has(target, key) {
        const result = Reflect.has(target, key);
        if (!isSymbol(key) || !builtInSymbols.has(key)) track(target, "has", key);
        return result;
    }
    ownKeys(target) {
        track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
        return Reflect.ownKeys(target);
    }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
    constructor(shallow = false){
        super(true, shallow);
    }
    set(target, key) {
        warn$2(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
    deleteProperty(target, key) {
        warn$2(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value)=>value;
const getProto = (v1)=>Reflect.getPrototypeOf(v1);
function get(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if (hasChanged(key, rawKey)) track(rawTarget, "get", key);
        track(rawTarget, "get", rawKey);
    }
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) return wrap(target.get(key));
    else if (has2.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) target.get(key);
}
function has(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if (hasChanged(key, rawKey)) track(rawTarget, "has", key);
        track(rawTarget, "has", rawKey);
    }
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
    }
    return this;
}
function set(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get2.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add", key, value);
    else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get2 ? get2.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = isMap(target) ? new Map(target) : new Set(target);
    const result = target.clear();
    if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key)=>{
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
            // iterator protocol
            next () {
                const { value, done } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" ? false : type === "clear" ? void 0 : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations2 = {
        get (key) {
            return get(this, key);
        },
        get size () {
            return size(this);
        },
        has,
        add,
        set,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
        get (key) {
            return get(this, key, false, true);
        },
        get size () {
            return size(this);
        },
        has,
        add,
        set,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
        get (key) {
            return get(this, key, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
        get (key) {
            return get(this, key, true, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations2[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
        shallowInstrumentations2[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2
    ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw") return target;
        return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
        const type = toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1 /* COMMON */ ;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2 /* COLLECTION */ ;
        default:
            return 0 /* INVALID */ ;
    }
}
function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID */  : targetTypeMap(toRawType(value));
}
function reactive(target) {
    if (isReadonly(target)) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
        return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) return target;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */ ) return target;
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) return isReactive(value["__v_raw"]);
    return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
    return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    def(value, "__v_skip", true);
    return value;
}
const toReactive = (value)=>isObject(value) ? reactive(value) : value;
const toReadonly = (value)=>isObject(value) ? readonly(value) : value;
class ComputedRefImpl {
    constructor(getter, _setter, isReadonly, isSSR){
        this._setter = _setter;
        this.dep = void 0;
        this.__v_isRef = true;
        this["__v_isReadonly"] = false;
        this.effect = new ReactiveEffect(()=>getter(this._value), ()=>triggerRefValue(this, 1));
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly"] = isReadonly;
    }
    get value() {
        const self1 = toRaw(this);
        trackRefValue(self1);
        if (!self1._cacheable || self1.effect.dirty) {
            if (hasChanged(self1._value, self1._value = self1.effect.run())) triggerRefValue(self1, 2);
        }
        return self1._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
    // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
    get _dirty() {
        return this.effect.dirty;
    }
    set _dirty(v1) {
        this.effect.dirty = v1;
    }
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = isFunction(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = ()=>{
            console.warn("Write operation failed: computed value is readonly");
        };
    } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (debugOptions && !isSSR) {
        cRef.effect.onTrack = debugOptions.onTrack;
        cRef.effect.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
}
function trackRefValue(ref2) {
    if (shouldTrack && activeEffect) {
        ref2 = toRaw(ref2);
        trackEffect(activeEffect, ref2.dep || (ref2.dep = createDep(()=>ref2.dep = void 0, ref2 instanceof ComputedRefImpl ? ref2 : void 0)), {
            target: ref2,
            type: "get",
            key: "value"
        });
    }
}
function triggerRefValue(ref2, dirtyLevel = 3, newVal) {
    ref2 = toRaw(ref2);
    const dep = ref2.dep;
    if (dep) triggerEffects(dep, dirtyLevel, {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
    });
}
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function ref(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) return rawValue;
    return new RefImpl(rawValue, shallow);
}
class RefImpl {
    constructor(value, __v_isShallow){
        this.__v_isShallow = __v_isShallow;
        this.dep = void 0;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : toRaw(value);
        this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
        trackRefValue(this);
        return this._value;
    }
    set value(newVal) {
        const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
        newVal = useDirectValue ? newVal : toRaw(newVal);
        if (hasChanged(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = useDirectValue ? newVal : toReactive(newVal);
            triggerRefValue(this, 3, newVal);
        }
    }
}
function triggerRef(ref2) {
    triggerRefValue(ref2, 3, ref2.value);
}
function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
    return isFunction(source) ? source() : unref(source);
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver)=>unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver)=>{
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        } else return Reflect.set(target, key, value, receiver);
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory){
        this.dep = void 0;
        this.__v_isRef = true;
        const { get, set } = factory(()=>trackRefValue(this), ()=>triggerRefValue(this));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (!isProxy(object)) console.warn(`toRefs() expects a reactive object but received a plain one.`);
    const ret = isArray(object) ? new Array(object.length) : {};
    for(const key in object)ret[key] = propertyToRef(object, key);
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key, _defaultValue){
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this.__v_isRef = true;
    }
    get value() {
        const val = this._object[this._key];
        return val === void 0 ? this._defaultValue : val;
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
    get dep() {
        return getDepFromReactive(toRaw(this._object), this._key);
    }
}
class GetterRefImpl {
    constructor(_getter){
        this._getter = _getter;
        this.__v_isRef = true;
        this.__v_isReadonly = true;
    }
    get value() {
        return this._getter();
    }
}
function toRef(source, key, defaultValue) {
    if (isRef(source)) return source;
    else if (isFunction(source)) return new GetterRefImpl(source);
    else if (isObject(source) && arguments.length > 1) return propertyToRef(source, key, defaultValue);
    else return ref(source);
}
function propertyToRef(source, key, defaultValue) {
    const val = source[key];
    return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
}
const TrackOpTypes = {
    "GET": "get",
    "HAS": "has",
    "ITERATE": "iterate"
};
const TriggerOpTypes = {
    "SET": "set",
    "ADD": "add",
    "DELETE": "delete",
    "CLEAR": "clear"
};
const stack$1 = [];
function pushWarningContext(vnode) {
    stack$1.push(vnode);
}
function popWarningContext() {
    stack$1.pop();
}
function warn$1(msg, ...args) {
    pauseTracking();
    const instance = stack$1.length ? stack$1[stack$1.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) callWithErrorHandling(appWarnHandler, instance, 11, [
        msg + args.join(""),
        instance && instance.proxy,
        trace.map(({ vnode })=>`at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
        trace
    ]);
    else {
        const warnArgs = [
            `[Vue warn]: ${msg}`,
            ...args
        ];
        if (trace.length && // avoid spamming console during tests
        true) warnArgs.push(`
`, ...formatTrace(trace));
        console.warn(...warnArgs);
    }
    resetTracking();
}
function getComponentTrace() {
    let currentVNode = stack$1[stack$1.length - 1];
    if (!currentVNode) return [];
    const normalizedStack = [];
    while(currentVNode){
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) last.recurseCount++;
        else normalizedStack.push({
            vnode: currentVNode,
            recurseCount: 0
        });
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i)=>{
        logs.push(...i === 0 ? [] : [
            `
`
        ], ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [
        open,
        ...formatProps(vnode.props),
        close
    ] : [
        open + close
    ];
}
function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key)=>{
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) res.push(` ...`);
    return res;
}
function formatProp(key, value, raw) {
    if (isString(value)) {
        value = JSON.stringify(value);
        return raw ? value : [
            `${key}=${value}`
        ];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) return raw ? value : [
        `${key}=${value}`
    ];
    else if (isRef(value)) {
        value = formatProp(key, toRaw(value.value), true);
        return raw ? value : [
            `${key}=Ref<`,
            value,
            `>`
        ];
    } else if (isFunction(value)) return [
        `${key}=fn${value.name ? `<${value.name}>` : ``}`
    ];
    else {
        value = toRaw(value);
        return raw ? value : [
            `${key}=`,
            value
        ];
    }
}
function assertNumber(val, type) {
    if (val === void 0) return;
    else if (typeof val !== "number") warn$1(`${type} is not a valid number - got ${JSON.stringify(val)}.`);
    else if (isNaN(val)) warn$1(`${type} is NaN - the duration expression might be incorrect.`);
}
const ErrorCodes = {
    "SETUP_FUNCTION": 0,
    "0": "SETUP_FUNCTION",
    "RENDER_FUNCTION": 1,
    "1": "RENDER_FUNCTION",
    "WATCH_GETTER": 2,
    "2": "WATCH_GETTER",
    "WATCH_CALLBACK": 3,
    "3": "WATCH_CALLBACK",
    "WATCH_CLEANUP": 4,
    "4": "WATCH_CLEANUP",
    "NATIVE_EVENT_HANDLER": 5,
    "5": "NATIVE_EVENT_HANDLER",
    "COMPONENT_EVENT_HANDLER": 6,
    "6": "COMPONENT_EVENT_HANDLER",
    "VNODE_HOOK": 7,
    "7": "VNODE_HOOK",
    "DIRECTIVE_HOOK": 8,
    "8": "DIRECTIVE_HOOK",
    "TRANSITION_HOOK": 9,
    "9": "TRANSITION_HOOK",
    "APP_ERROR_HANDLER": 10,
    "10": "APP_ERROR_HANDLER",
    "APP_WARN_HANDLER": 11,
    "11": "APP_WARN_HANDLER",
    "FUNCTION_REF": 12,
    "12": "FUNCTION_REF",
    "ASYNC_COMPONENT_LOADER": 13,
    "13": "ASYNC_COMPONENT_LOADER",
    "SCHEDULER": 14,
    "14": "SCHEDULER"
};
const ErrorTypeStrings$1 = {
    ["sp"]: "serverPrefetch hook",
    ["bc"]: "beforeCreate hook",
    ["c"]: "created hook",
    ["bm"]: "beforeMount hook",
    ["m"]: "mounted hook",
    ["bu"]: "beforeUpdate hook",
    ["u"]: "updated",
    ["bum"]: "beforeUnmount hook",
    ["um"]: "unmounted hook",
    ["a"]: "activated hook",
    ["da"]: "deactivated hook",
    ["ec"]: "errorCaptured hook",
    ["rtc"]: "renderTracked hook",
    ["rtg"]: "renderTriggered hook",
    [0]: "setup function",
    [1]: "render function",
    [2]: "watcher getter",
    [3]: "watcher callback",
    [4]: "watcher cleanup function",
    [5]: "native event handler",
    [6]: "component event handler",
    [7]: "vnode hook",
    [8]: "directive hook",
    [9]: "transition hook",
    [10]: "app errorHandler",
    [11]: "app warnHandler",
    [12]: "ref function",
    [13]: "async component loader",
    [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    } catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && isPromise(res)) res.catch((err)=>{
            handleError(err, instance, type);
        });
        return res;
    }
    const values = [];
    for(let i = 0; i < fn.length; i++)values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    return values;
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        const exposedInstance = instance.proxy;
        const errorInfo = ErrorTypeStrings$1[type];
        while(cur){
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) for(let i = 0; i < errorCapturedHooks.length; i++){
                if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
            }
            cur = cur.parent;
        }
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10, [
                err,
                exposedInstance,
                errorInfo
            ]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    {
        const info = ErrorTypeStrings$1[type];
        if (contextVNode) pushWarningContext(contextVNode);
        warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
        if (contextVNode) popWarningContext();
        if (throwInDev) throw err;
        else console.error(err);
    }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
function findInsertionIndex(id) {
    let start = flushIndex + 1;
    let end = queue.length;
    while(start < end){
        const middle = start + end >>> 1;
        const middleJob = queue[middle];
        const middleJobId = getId(middleJob);
        if (middleJobId < id || middleJobId === id && middleJob.pre) start = middle + 1;
        else end = middle;
    }
    return start;
}
function queueJob(job) {
    if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
        if (job.id == null) queue.push(job);
        else queue.splice(findInsertionIndex(job.id), 0, job);
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) queue.splice(i, 1);
}
function queuePostFlushCb(cb) {
    if (!isArray(cb)) {
        if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) pendingPostFlushCbs.push(cb);
    } else pendingPostFlushCbs.push(...cb);
    queueFlush();
}
function flushPreFlushCbs(instance, seen, i = isFlushing ? flushIndex + 1 : 0) {
    seen = seen || /* @__PURE__ */ new Map();
    for(; i < queue.length; i++){
        const cb = queue[i];
        if (cb && cb.pre) {
            if (instance && cb.id !== instance.uid) continue;
            if (checkRecursiveUpdates(seen, cb)) continue;
            queue.splice(i, 1);
            i--;
            cb();
        }
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [
            ...new Set(pendingPostFlushCbs)
        ].sort((a, b)=>getId(a) - getId(b));
        pendingPostFlushCbs.length = 0;
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        seen = seen || /* @__PURE__ */ new Map();
        for(postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++){
            if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) continue;
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job)=>job.id == null ? Infinity : job.id;
const comparator = (a, b)=>{
    const diff = getId(a) - getId(b);
    if (diff === 0) {
        if (a.pre && !b.pre) return -1;
        if (b.pre && !a.pre) return 1;
    }
    return diff;
};
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    seen = seen || /* @__PURE__ */ new Map();
    queue.sort(comparator);
    const check = (job)=>checkRecursiveUpdates(seen, job);
    try {
        for(flushIndex = 0; flushIndex < queue.length; flushIndex++){
            const job = queue[flushIndex];
            if (job && job.active !== false) {
                if (check(job)) continue;
                callWithErrorHandling(job, null, 14);
            }
        }
    } finally{
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        if (queue.length || pendingPostFlushCbs.length) flushJobs(seen);
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) seen.set(fn, 1);
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            const instance = fn.ownerInstance;
            const componentName = instance && getComponentName(instance.type);
            handleError(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10);
            return true;
        } else seen.set(fn, count + 1);
    }
}
let isHmrUpdating = false;
const hmrDirtyComponents = /* @__PURE__ */ new Set();
getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
};
const map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
    if (map.has(id)) return false;
    map.set(id, {
        initialDef: normalizeClassComponent(initialDef),
        instances: /* @__PURE__ */ new Set()
    });
    return true;
}
function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) return;
    record.initialDef.render = newRender;
    [
        ...record.instances
    ].forEach((instance)=>{
        if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        isHmrUpdating = true;
        instance.effect.dirty = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record) return;
    newComp = normalizeClassComponent(newComp);
    updateComponentDef(record.initialDef, newComp);
    const instances = [
        ...record.instances
    ];
    for (const instance of instances){
        const oldComp = normalizeClassComponent(instance.type);
        if (!hmrDirtyComponents.has(oldComp)) {
            if (oldComp !== record.initialDef) updateComponentDef(oldComp, newComp);
            hmrDirtyComponents.add(oldComp);
        }
        instance.appContext.propsCache.delete(instance.type);
        instance.appContext.emitsCache.delete(instance.type);
        instance.appContext.optionsCache.delete(instance.type);
        if (instance.ceReload) {
            hmrDirtyComponents.add(oldComp);
            instance.ceReload(newComp.styles);
            hmrDirtyComponents.delete(oldComp);
        } else if (instance.parent) {
            instance.parent.effect.dirty = true;
            queueJob(instance.parent.update);
        } else if (instance.appContext.reload) instance.appContext.reload();
        else if (typeof window !== "undefined") window.location.reload();
        else console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
    queuePostFlushCb(()=>{
        for (const instance of instances)hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
    });
}
function updateComponentDef(oldComp, newComp) {
    extend(oldComp, newComp);
    for(const key in oldComp)if (key !== "__file" && !(key in newComp)) delete oldComp[key];
}
function tryWrap(fn) {
    return (id, arg)=>{
        try {
            return fn(id, arg);
        } catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
        }
    };
}
let devtools$1;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
    if (devtools$1) devtools$1.emit(event, ...args);
    else if (!devtoolsNotInstalled) buffer.push({
        event,
        args
    });
}
function setDevtoolsHook$1(hook, target) {
    var _a, _b;
    devtools$1 = hook;
    if (devtools$1) {
        devtools$1.enabled = true;
        buffer.forEach(({ event, args })=>devtools$1.emit(event, ...args));
        buffer = [];
    } else if (// handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))) {
        const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
        replay.push((newHook)=>{
            setDevtoolsHook$1(newHook, target);
        });
        setTimeout(()=>{
            if (!devtools$1) {
                target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                devtoolsNotInstalled = true;
                buffer = [];
            }
        }, 3e3);
    } else {
        devtoolsNotInstalled = true;
        buffer = [];
    }
}
function devtoolsInitApp(app, version) {
    emit$1("app:init" /* APP_INIT */ , app, version, {
        Fragment,
        Text,
        Comment,
        Static
    });
}
function devtoolsUnmountApp(app) {
    emit$1("app:unmount" /* APP_UNMOUNT */ , app);
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook("component:added" /* COMPONENT_ADDED */ );
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated" /* COMPONENT_UPDATED */ );
const _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook("component:removed" /* COMPONENT_REMOVED */ );
const devtoolsComponentRemoved = (component)=>{
    if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
    !devtools$1.cleanupBuffer(component)) _devtoolsComponentRemoved(component);
};
function createDevtoolsComponentHook(hook) {
    return (component)=>{
        emit$1(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
    };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:start" /* PERFORMANCE_START */ );
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:end" /* PERFORMANCE_END */ );
function createDevtoolsPerformanceHook(hook) {
    return (component, type, time)=>{
        emit$1(hook, component.appContext.app, component.uid, component, type, time);
    };
}
function devtoolsComponentEmit(component, event, params) {
    emit$1("component:emit" /* COMPONENT_EMIT */ , component.appContext.app, component, event, params);
}
function emit(instance, event, ...rawArgs) {
    if (instance.isUnmounted) return;
    const props = instance.vnode.props || EMPTY_OBJ;
    {
        const { emitsOptions, propsOptions: [propsOptions] } = instance;
        if (emitsOptions) {
            if (!(event in emitsOptions) && true) {
                if (!propsOptions || !(toHandlerKey(event) in propsOptions)) warn$1(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`);
            } else {
                const validator = emitsOptions[event];
                if (isFunction(validator)) {
                    const isValid = validator(...rawArgs);
                    if (!isValid) warn$1(`Invalid event arguments: event validation failed for event "${event}".`);
                }
            }
        }
    }
    let args = rawArgs;
    const isModelListener = event.startsWith("update:");
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
        const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
        if (trim) args = rawArgs.map((a)=>isString(a) ? a.trim() : a);
        if (number) args = rawArgs.map(looseToNumber);
    }
    devtoolsComponentEmit(instance, event, args);
    {
        const lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) warn$1(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`);
    }
    let handlerName;
    let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
    props[handlerName = toHandlerKey(camelize(event))];
    if (!handler && isModelListener) handler = props[handlerName = toHandlerKey(hyphenate(event))];
    if (handler) callWithAsyncErrorHandling(handler, instance, 6, args);
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) instance.emitted = {};
        else if (instance.emitted[handlerName]) return;
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6, args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) return cached;
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (!isFunction(comp)) {
        const extendEmits = (raw2)=>{
            const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                extend(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
        if (comp.extends) extendEmits(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendEmits);
    }
    if (!raw && !hasExtends) {
        if (isObject(comp)) cache.set(comp, null);
        return null;
    }
    if (isArray(raw)) raw.forEach((key)=>normalized[key] = null);
    else extend(normalized, raw);
    if (isObject(comp)) cache.set(comp, normalized);
    return normalized;
}
function isEmitListener(options, key) {
    if (!options || !isOn(key)) return false;
    key = key.slice(2).replace(/Once$/, "");
    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
let currentScopeId = null;
function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
}
function pushScopeId(id) {
    currentScopeId = id;
}
function popScopeId() {
    currentScopeId = null;
}
const withScopeId = (_id)=>withCtx;
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
    if (!ctx) return fn;
    if (fn._n) return fn;
    const renderFnWithContext = (...args)=>{
        if (renderFnWithContext._d) setBlockTracking(-1);
        const prevInstance = setCurrentRenderingInstance(ctx);
        let res;
        try {
            res = fn(...args);
        } finally{
            setCurrentRenderingInstance(prevInstance);
            if (renderFnWithContext._d) setBlockTracking(1);
        }
        devtoolsComponentUpdated(ctx);
        return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
}
let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit, render, renderCache, data, setupState, ctx, inheritAttrs } = instance;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance);
    accessedAttrs = false;
    try {
        if (vnode.shapeFlag & 4) {
            const proxyToUse = withProxy || proxy;
            const thisProxy = setupState.__isScriptSetup ? new Proxy(proxyToUse, {
                get (target, key, receiver) {
                    warn$1(`Property '${String(key)}' was accessed via 'this'. Avoid using 'this' in templates.`);
                    return Reflect.get(target, key, receiver);
                }
            }) : proxyToUse;
            result = normalizeVNode(render.call(thisProxy, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        } else {
            const render2 = Component;
            if (attrs === props) markAttrsAccessed();
            result = normalizeVNode(render2.length > 1 ? render2(props, {
                get attrs () {
                    markAttrsAccessed();
                    return attrs;
                },
                slots,
                emit
            }) : render2(props, null));
            fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
        }
    } catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1);
        result = createVNode(Comment);
    }
    let root = result;
    let setRoot = void 0;
    if (result.patchFlag > 0 && result.patchFlag & 2048) [root, setRoot] = getChildRoot(result);
    if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag } = root;
        if (keys.length) {
            if (shapeFlag & 7) {
                if (propsOptions && keys.some(isModelListener)) fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                root = cloneVNode(root, fallthroughAttrs);
            } else if (!accessedAttrs && root.type !== Comment) {
                const allAttrs = Object.keys(attrs);
                const eventAttrs = [];
                const extraAttrs = [];
                for(let i = 0, l = allAttrs.length; i < l; i++){
                    const key = allAttrs[i];
                    if (isOn(key)) {
                        if (!isModelListener(key)) eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                    } else extraAttrs.push(key);
                }
                if (extraAttrs.length) warn$1(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`);
                if (eventAttrs.length) warn$1(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
            }
        }
    }
    if (vnode.dirs) {
        if (!isElementRoot(root)) warn$1(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
        root = cloneVNode(root);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
        if (!isElementRoot(root)) warn$1(`Component inside <Transition> renders non-element root node that cannot be animated.`);
        root.transition = vnode.transition;
    }
    if (setRoot) setRoot(root);
    else result = root;
    setCurrentRenderingInstance(prev);
    return result;
}
const getChildRoot = (vnode)=>{
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) return [
        vnode,
        void 0
    ];
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot)=>{
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) dynamicChildren[dynamicIndex] = updatedRoot;
            else if (updatedRoot.patchFlag > 0) vnode.dynamicChildren = [
                ...dynamicChildren,
                updatedRoot
            ];
        }
    };
    return [
        normalizeVNode(childRoot),
        setRoot
    ];
};
function filterSingleRoot(children) {
    let singleRoot;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if (isVNode(child)) {
            if (child.type !== Comment || child.children === "v-if") {
                if (singleRoot) return;
                else singleRoot = child;
            }
        } else return;
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs)=>{
    let res;
    for(const key in attrs)if (key === "class" || key === "style" || isOn(key)) (res || (res = {}))[key] = attrs[key];
    return res;
};
const filterModelListeners = (attrs, props)=>{
    const res = {};
    for(const key in attrs)if (!isModelListener(key) || !(key.slice(9) in props)) res[key] = attrs[key];
    return res;
};
const isElementRoot = (vnode)=>{
    return vnode.shapeFlag & 7 || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if ((prevChildren || nextChildren) && isHmrUpdating) return true;
    if (nextVNode.dirs || nextVNode.transition) return true;
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024) return true;
        if (patchFlag & 16) {
            if (!prevProps) return !!nextProps;
            return hasPropsChanged(prevProps, nextProps, emits);
        } else if (patchFlag & 8) {
            const dynamicProps = nextVNode.dynamicProps;
            for(let i = 0; i < dynamicProps.length; i++){
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) return true;
            }
        }
    } else {
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) return true;
        }
        if (prevProps === nextProps) return false;
        if (!prevProps) return !!nextProps;
        if (!nextProps) return true;
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) return true;
    for(let i = 0; i < nextKeys.length; i++){
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) return true;
    }
    return false;
}
function updateHOCHostEl({ vnode, parent }, el) {
    while(parent){
        const root = parent.subTree;
        if (root.suspense && root.suspense.activeBranch === vnode) root.el = vnode.el;
        if (root === vnode) {
            (vnode = parent.vnode).el = el;
            parent = parent.parent;
        } else break;
    }
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
    if (isString(component)) return resolveAsset(COMPONENTS, component, false) || component;
    else return component || NULL_DYNAMIC_COMPONENT;
}
function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        if (type === COMPONENTS) {
            const selfName = getComponentName(Component, false);
            if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) return Component;
        }
        const res = // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) || // global registration
        resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) return Component;
        if (warnMissing && !res) {
            const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
            warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
        }
        return res;
    } else warn$1(`resolve${capitalize(type.slice(0, -1))} can only be used in render() or setup().`);
}
function resolve(registry, name) {
    return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
const isSuspense = (type)=>type.__isSuspense;
let suspenseId = 0;
const SuspenseImpl = {
    name: "Suspense",
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
        if (n1 == null) mountSuspense(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals);
        else {
            if (parentSuspense && parentSuspense.deps > 0) {
                n2.suspense = n1.suspense;
                return;
            }
            patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, rendererInternals);
        }
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary,
    normalize: normalizeSuspenseChildren
};
const Suspense = SuspenseImpl;
function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if (isFunction(eventListener)) eventListener();
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals) {
    const { p: patch, o: { createElement } } = rendererInternals;
    const hiddenContainer = createElement("div");
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals);
    patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds);
    if (suspense.deps > 0) {
        triggerEvent(vnode, "onPending");
        triggerEvent(vnode, "onFallback");
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        namespace, slotScopeIds);
        setActiveBranch(suspense, vnode.ssFallback);
    } else suspense.resolve(false, true);
}
function patchSuspense(n1, n2, container, anchor, parentComponent, namespace, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
    const suspense = n2.suspense = n1.suspense;
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
            if (suspense.deps <= 0) suspense.resolve();
            else if (isInFallback) {
                if (!isHydrating) {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    namespace, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            }
        } else {
            suspense.pendingId = suspenseId++;
            if (isHydrating) {
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            } else unmount(pendingBranch, parentComponent, suspense);
            suspense.deps = 0;
            suspense.effects.length = 0;
            suspense.hiddenContainer = createElement("div");
            if (isInFallback) {
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
                    namespace, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
                suspense.resolve(true);
            } else {
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
            }
        }
    } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, namespace, slotScopeIds, optimized);
        setActiveBranch(suspense, newBranch);
    } else {
        triggerEvent(n2, "onPending");
        suspense.pendingBranch = newBranch;
        if (newBranch.shapeFlag & 512) suspense.pendingId = newBranch.component.suspenseId;
        else suspense.pendingId = suspenseId++;
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, namespace, slotScopeIds, optimized);
        if (suspense.deps <= 0) suspense.resolve();
        else {
            const { timeout, pendingId } = suspense;
            if (timeout > 0) setTimeout(()=>{
                if (suspense.pendingId === pendingId) suspense.fallback(newFallback);
            }, timeout);
            else if (timeout === 0) suspense.fallback(newFallback);
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, namespace, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    if (!hasWarned) {
        hasWarned = true;
        console[console.info ? "info" : "log"](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const { p: patch, m: move, um: unmount, n: next, o: { parentNode, remove } } = rendererInternals;
    let parentSuspenseId;
    const isSuspensible = isVNodeSuspensible(vnode);
    if (isSuspensible) {
        if (parentSuspense == null ? void 0 : parentSuspense.pendingBranch) {
            parentSuspenseId = parentSuspense.pendingId;
            parentSuspense.deps++;
        }
    }
    const timeout = vnode.props ? toNumber(vnode.props.timeout) : void 0;
    assertNumber(timeout, `Suspense timeout`);
    const initialAnchor = anchor;
    const suspense = {
        vnode,
        parent: parentSuspense,
        parentComponent,
        namespace,
        container,
        hiddenContainer,
        deps: 0,
        pendingId: suspenseId++,
        timeout: typeof timeout === "number" ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: !isHydrating,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve (resume = false, sync = false) {
            if (!resume && !suspense.pendingBranch) throw new Error(`suspense.resolve() is called without a pending branch.`);
            if (suspense.isUnmounted) throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
            const { vnode: vnode2, activeBranch, pendingBranch, pendingId, effects, parentComponent: parentComponent2, container: container2 } = suspense;
            let delayEnter = false;
            if (suspense.isHydrating) suspense.isHydrating = false;
            else if (!resume) {
                delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
                if (delayEnter) activeBranch.transition.afterLeave = ()=>{
                    if (pendingId === suspense.pendingId) {
                        move(pendingBranch, container2, anchor === initialAnchor ? next(activeBranch) : anchor, 0);
                        queuePostFlushCb(effects);
                    }
                };
                if (activeBranch) {
                    if (parentNode(activeBranch.el) !== suspense.hiddenContainer) anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent2, suspense, true);
                }
                if (!delayEnter) move(pendingBranch, container2, anchor, 0);
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while(parent){
                if (parent.pendingBranch) {
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            if (!hasUnresolvedAncestor && !delayEnter) queuePostFlushCb(effects);
            suspense.effects = [];
            if (isSuspensible) {
                if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
                    parentSuspense.deps--;
                    if (parentSuspense.deps === 0 && !sync) parentSuspense.resolve();
                }
            }
            triggerEvent(vnode2, "onResolve");
        },
        fallback (fallbackVNode) {
            if (!suspense.pendingBranch) return;
            const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, namespace: namespace2 } = suspense;
            triggerEvent(vnode2, "onFallback");
            const anchor2 = next(activeBranch);
            const mountFallback = ()=>{
                if (!suspense.isInFallback) return;
                patch(null, fallbackVNode, container2, anchor2, parentComponent2, null, // fallback tree will not have suspense context
                namespace2, slotScopeIds, optimized);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
            if (delayEnter) activeBranch.transition.afterLeave = mountFallback;
            suspense.isInFallback = true;
            unmount(activeBranch, parentComponent2, null, // no suspense so unmount hooks fire now
            true);
            if (!delayEnter) mountFallback();
        },
        move (container2, anchor2, type) {
            suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
            suspense.container = container2;
        },
        next () {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep (instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) suspense.deps++;
            const hydratedEl = instance.vnode.el;
            instance.asyncDep.catch((err)=>{
                handleError(err, instance, 0);
            }).then((asyncSetupResult)=>{
                if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) return;
                instance.asyncResolved = true;
                const { vnode: vnode2 } = instance;
                pushWarningContext(vnode2);
                handleSetupResult(instance, asyncSetupResult, false);
                if (hydratedEl) vnode2.el = hydratedEl;
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode2, // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, namespace, optimized);
                if (placeholder) remove(placeholder);
                updateHOCHostEl(instance, vnode2.el);
                popWarningContext();
                if (isInPendingSuspense && --suspense.deps === 0) suspense.resolve();
            });
        },
        unmount (parentSuspense2, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) unmount(suspense.activeBranch, parentComponent, parentSuspense2, doRemove);
            if (suspense.pendingBranch) unmount(suspense.pendingBranch, parentComponent, parentSuspense2, doRemove);
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, // eslint-disable-next-line no-restricted-globals
    document.createElement("div"), null, namespace, slotScopeIds, optimized, rendererInternals, true);
    const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) suspense.resolve(false, true);
    return result;
}
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag, children } = vnode;
    const isSlotChildren = shapeFlag & 32;
    vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
    let block;
    if (isFunction(s)) {
        const trackBlock = isBlockTreeEnabled && s._c;
        if (trackBlock) {
            s._d = false;
            openBlock();
        }
        s = s();
        if (trackBlock) {
            s._d = true;
            block = currentBlock;
            closeBlock();
        }
    }
    if (isArray(s)) {
        const singleChild = filterSingleRoot(s);
        if (!singleChild && s.filter((child)=>child !== NULL_DYNAMIC_COMPONENT).length > 0) warn$1(`<Suspense> slots expect a single root node.`);
        s = singleChild;
    }
    s = normalizeVNode(s);
    if (block && !s.dynamicChildren) s.dynamicChildren = block.filter((c)=>c !== s);
    return s;
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if (isArray(fn)) suspense.effects.push(...fn);
        else suspense.effects.push(fn);
    } else queuePostFlushCb(fn);
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode, parentComponent } = suspense;
    let el = branch.el;
    while(!el && branch.component){
        branch = branch.component.subTree;
        el = branch.el;
    }
    vnode.el = el;
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}
function isVNodeSuspensible(vnode) {
    var _a;
    return ((_a = vnode.props) == null ? void 0 : _a.suspensible) != null && vnode.props.suspensible !== false;
}
const ssrContextKey = Symbol.for("v-scx");
const useSSRContext = ()=>{
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) warn$1(`Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`);
        return ctx;
    }
};
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, extend({}, options, {
        flush: "post"
    }));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, extend({}, options, {
        flush: "sync"
    }));
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
    if (!isFunction(cb)) warn$1(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate, deep, flush, once, onTrack, onTrigger } = EMPTY_OBJ) {
    if (cb && once) {
        const _cb = cb;
        cb = (...args)=>{
            _cb(...args);
            unwatch();
        };
    }
    if (deep !== void 0 && typeof deep === "number") warn$1(`watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.`);
    if (!cb) {
        if (immediate !== void 0) warn$1(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
        if (deep !== void 0) warn$1(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
        if (once !== void 0) warn$1(`watch() "once" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    const warnInvalidSource = (s)=>{
        warn$1(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
    };
    const instance = currentInstance;
    const reactiveGetter = (source2)=>deep === true ? source2 : // for deep: false, only traverse root-level properties
        traverse(source2, deep === false ? 1 : void 0);
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
        getter = ()=>source.value;
        forceTrigger = isShallow(source);
    } else if (isReactive(source)) {
        getter = ()=>reactiveGetter(source);
        forceTrigger = true;
    } else if (isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s)=>isReactive(s) || isShallow(s));
        getter = ()=>source.map((s)=>{
                if (isRef(s)) return s.value;
                else if (isReactive(s)) return reactiveGetter(s);
                else if (isFunction(s)) return callWithErrorHandling(s, instance, 2);
                else warnInvalidSource(s);
            });
    } else if (isFunction(source)) {
        if (cb) getter = ()=>callWithErrorHandling(source, instance, 2);
        else getter = ()=>{
            if (cleanup) cleanup();
            return callWithAsyncErrorHandling(source, instance, 3, [
                onCleanup
            ]);
        };
    } else {
        getter = NOOP;
        warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = ()=>traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn)=>{
        cleanup = effect.onStop = ()=>{
            callWithErrorHandling(fn, instance, 4);
            cleanup = effect.onStop = void 0;
        };
    };
    let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    const job = ()=>{
        if (!effect.active || !effect.dirty) return;
        if (cb) {
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v1, i)=>hasChanged(v1, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
                if (cleanup) cleanup();
                callWithAsyncErrorHandling(cb, instance, 3, [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        } else effect.run();
    };
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === "sync") scheduler = job;
    else if (flush === "post") scheduler = ()=>queuePostRenderEffect(job, instance && instance.suspense);
    else {
        job.pre = true;
        if (instance) job.id = instance.uid;
        scheduler = ()=>queueJob(job);
    }
    const effect = new ReactiveEffect(getter, NOOP, scheduler);
    const scope = getCurrentScope();
    const unwatch = ()=>{
        effect.stop();
        if (scope) remove(scope.effects, effect);
    };
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
    if (cb) {
        if (immediate) job();
        else oldValue = effect.run();
    } else if (flush === "post") queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    else effect.run();
    return unwatch;
}
function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : ()=>publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if (isFunction(value)) cb = value;
    else {
        cb = value.handler;
        options = value;
    }
    const reset = setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    reset();
    return res;
}
function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return ()=>{
        let cur = ctx;
        for(let i = 0; i < segments.length && cur; i++)cur = cur[segments[i]];
        return cur;
    };
}
function traverse(value, depth, currentDepth = 0, seen) {
    if (!isObject(value) || value["__v_skip"]) return value;
    if (depth && depth > 0) {
        if (currentDepth >= depth) return value;
        currentDepth++;
    }
    seen = seen || /* @__PURE__ */ new Set();
    if (seen.has(value)) return value;
    seen.add(value);
    if (isRef(value)) traverse(value.value, depth, currentDepth, seen);
    else if (isArray(value)) for(let i = 0; i < value.length; i++)traverse(value[i], depth, currentDepth, seen);
    else if (isSet(value) || isMap(value)) value.forEach((v1)=>{
        traverse(v1, depth, currentDepth, seen);
    });
    else if (isPlainObject(value)) for(const key in value)traverse(value[key], depth, currentDepth, seen);
    return value;
}
function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) warn$1("Do not use built-in directive ids as custom directive id: " + name);
}
function withDirectives(vnode, directives) {
    if (currentRenderingInstance === null) {
        warn$1(`withDirectives can only be used inside render functions.`);
        return vnode;
    }
    const instance = getExposeProxy(currentRenderingInstance) || currentRenderingInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for(let i = 0; i < directives.length; i++){
        let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
        if (dir) {
            if (isFunction(dir)) dir = {
                mounted: dir,
                updated: dir
            };
            if (dir.deep) traverse(value);
            bindings.push({
                dir,
                instance,
                value,
                oldValue: void 0,
                arg,
                modifiers
            });
        }
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for(let i = 0; i < bindings.length; i++){
        const binding = bindings[i];
        if (oldBindings) binding.oldValue = oldBindings[i].value;
        let hook = binding.dir[name];
        if (hook) {
            pauseTracking();
            callWithAsyncErrorHandling(hook, instance, 8, [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            resetTracking();
        }
    }
}
const leaveCbKey = Symbol("_leaveCb");
const enterCbKey$1 = Symbol("_enterCb");
function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: /* @__PURE__ */ new Map()
    };
    onMounted(()=>{
        state.isMounted = true;
    });
    onBeforeUnmount(()=>{
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [
    Function,
    Array
];
const BaseTransitionPropsValidators = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
};
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: BaseTransitionPropsValidators,
    setup (props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return ()=>{
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) return;
            let child = children[0];
            if (children.length > 1) {
                let hasFound = false;
                for (const c of children)if (c.type !== Comment) {
                    if (hasFound) {
                        warn$1("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
                        break;
                    }
                    child = c;
                    hasFound = true;
                }
            }
            const rawProps = toRaw(props);
            const { mode } = rawProps;
            if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") warn$1(`invalid <transition> mode: ${mode}`);
            if (state.isLeaving) return emptyPlaceholder(child);
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) return emptyPlaceholder(child);
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === void 0) prevTransitionKey = key;
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                setTransitionHooks(oldInnerChild, leavingHooks);
                if (mode === "out-in") {
                    state.isLeaving = true;
                    leavingHooks.afterLeave = ()=>{
                        state.isLeaving = false;
                        if (instance.update.active !== false) {
                            instance.effect.dirty = true;
                            instance.update();
                        }
                    };
                    return emptyPlaceholder(child);
                } else if (mode === "in-out" && innerChild.type !== Comment) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave)=>{
                    const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                    leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                    el[leaveCbKey] = ()=>{
                        earlyRemove();
                        el[leaveCbKey] = void 0;
                        delete enterHooks.delayedLeave;
                    };
                    enterHooks.delayedLeave = delayedLeave;
                };
            }
            return child;
        };
    }
};
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = /* @__PURE__ */ Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args)=>{
        hook && callWithAsyncErrorHandling(hook, instance, 9, args);
    };
    const callAsyncHook = (hook, args)=>{
        const done = args[1];
        callHook(hook, args);
        if (isArray(hook)) {
            if (hook.every((hook2)=>hook2.length <= 1)) done();
        } else if (hook.length <= 1) done();
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter (el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) hook = onBeforeAppear || onBeforeEnter;
                else return;
            }
            if (el[leaveCbKey]) el[leaveCbKey](true);
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) leavingVNode.el[leaveCbKey]();
            callHook(hook, [
                el
            ]);
        },
        enter (el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                } else return;
            }
            let called = false;
            const done = el[enterCbKey$1] = (cancelled)=>{
                if (called) return;
                called = true;
                if (cancelled) callHook(cancelHook, [
                    el
                ]);
                else callHook(afterHook, [
                    el
                ]);
                if (hooks.delayedLeave) hooks.delayedLeave();
                el[enterCbKey$1] = void 0;
            };
            if (hook) callAsyncHook(hook, [
                el,
                done
            ]);
            else done();
        },
        leave (el, remove) {
            const key2 = String(vnode.key);
            if (el[enterCbKey$1]) el[enterCbKey$1](true);
            if (state.isUnmounting) return remove();
            callHook(onBeforeLeave, [
                el
            ]);
            let called = false;
            const done = el[leaveCbKey] = (cancelled)=>{
                if (called) return;
                called = true;
                remove();
                if (cancelled) callHook(onLeaveCancelled, [
                    el
                ]);
                else callHook(onAfterLeave, [
                    el
                ]);
                el[leaveCbKey] = void 0;
                if (leavingVNodesCache[key2] === vnode) delete leavingVNodesCache[key2];
            };
            leavingVNodesCache[key2] = vnode;
            if (onLeave) callAsyncHook(onLeave, [
                el,
                done
            ]);
            else done();
        },
        clone (vnode2) {
            return resolveTransitionHooks(vnode2, props, state, instance);
        }
    };
    return hooks;
}
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode) ? // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    vnode.component ? vnode.component.subTree : vnode.children ? vnode.children[0] : void 0 : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 && vnode.component) setTransitionHooks(vnode.component.subTree, hooks);
    else if (vnode.shapeFlag & 128) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else vnode.transition = hooks;
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for(let i = 0; i < children.length; i++){
        let child = children[i];
        const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
        if (child.type === Fragment) {
            if (child.patchFlag & 128) keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
        } else if (keepComment || child.type !== Comment) ret.push(key != null ? cloneVNode(child, {
            key
        }) : child);
    }
    if (keyedFragmentCount > 1) for(let i = 0; i < ret.length; i++)ret[i].patchFlag = -2;
    return ret;
}
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
    return isFunction(options) ? // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (()=>extend({
            name: options.name
        }, extraOptions, {
            setup: options
        }))() : options;
}
const isAsyncWrapper = (i)=>!!i.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function defineAsyncComponent(source) {
    if (isFunction(source)) source = {
        loader: source
    };
    const { loader, loadingComponent, errorComponent, delay = 200, timeout, // undefined = never times out
    suspensible = true, onError: userOnError } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = ()=>{
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = ()=>{
        let thisRequest;
        return pendingRequest || (thisRequest = pendingRequest = loader().catch((err)=>{
            err = err instanceof Error ? err : new Error(String(err));
            if (userOnError) return new Promise((resolve, reject)=>{
                const userRetry = ()=>resolve(retry());
                const userFail = ()=>reject(err);
                userOnError(err, userRetry, userFail, retries + 1);
            });
            else throw err;
        }).then((comp)=>{
            if (thisRequest !== pendingRequest && pendingRequest) return pendingRequest;
            if (!comp) warn$1(`Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`);
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) comp = comp.default;
            if (comp && !isObject(comp) && !isFunction(comp)) throw new Error(`Invalid async component load result: ${comp}`);
            resolvedComp = comp;
            return comp;
        }));
    };
    return defineComponent({
        name: "AsyncComponentWrapper",
        __asyncLoader: load,
        get __asyncResolved () {
            return resolvedComp;
        },
        setup () {
            const instance = currentInstance;
            if (resolvedComp) return ()=>createInnerComp(resolvedComp, instance);
            const onError = (err)=>{
                pendingRequest = null;
                handleError(err, instance, 13, !errorComponent);
            };
            if (suspensible && instance.suspense || false) return load().then((comp)=>{
                return ()=>createInnerComp(comp, instance);
            }).catch((err)=>{
                onError(err);
                return ()=>errorComponent ? createVNode(errorComponent, {
                        error: err
                    }) : null;
            });
            const loaded = ref(false);
            const error = ref();
            const delayed = ref(!!delay);
            if (delay) setTimeout(()=>{
                delayed.value = false;
            }, delay);
            if (timeout != null) setTimeout(()=>{
                if (!loaded.value && !error.value) {
                    const err = new Error(`Async component timed out after ${timeout}ms.`);
                    onError(err);
                    error.value = err;
                }
            }, timeout);
            load().then(()=>{
                loaded.value = true;
                if (instance.parent && isKeepAlive(instance.parent.vnode)) {
                    instance.parent.effect.dirty = true;
                    queueJob(instance.parent.update);
                }
            }).catch((err)=>{
                onError(err);
                error.value = err;
            });
            return ()=>{
                if (loaded.value && resolvedComp) return createInnerComp(resolvedComp, instance);
                else if (error.value && errorComponent) return createVNode(errorComponent, {
                    error: error.value
                });
                else if (loadingComponent && !delayed.value) return createVNode(loadingComponent);
            };
        }
    });
}
function createInnerComp(comp, parent) {
    const { ref: ref2, props, children, ce } = parent.vnode;
    const vnode = createVNode(comp, props, children);
    vnode.ref = ref2;
    vnode.ce = ce;
    delete parent.vnode.ce;
    return vnode;
}
const isKeepAlive = (vnode)=>vnode.type.__isKeepAlive;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
        include: [
            String,
            RegExp,
            Array
        ],
        exclude: [
            String,
            RegExp,
            Array
        ],
        max: [
            String,
            Number
        ]
    },
    setup (props, { slots }) {
        const instance = getCurrentInstance();
        const sharedContext = instance.ctx;
        const cache = /* @__PURE__ */ new Map();
        const keys = /* @__PURE__ */ new Set();
        let current = null;
        instance.__v_cache = cache;
        const parentSuspense = instance.suspense;
        const { renderer: { p: patch, m: move, um: _unmount, o: { createElement } } } = sharedContext;
        const storageContainer = createElement("div");
        sharedContext.activate = (vnode, container, anchor, namespace, optimized)=>{
            const instance2 = vnode.component;
            move(vnode, container, anchor, 0, parentSuspense);
            patch(instance2.vnode, vnode, container, anchor, instance2, parentSuspense, namespace, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(()=>{
                instance2.isDeactivated = false;
                if (instance2.a) invokeArrayFns(instance2.a);
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance2.parent, vnode);
            }, parentSuspense);
            devtoolsComponentAdded(instance2);
        };
        sharedContext.deactivate = (vnode)=>{
            const instance2 = vnode.component;
            move(vnode, storageContainer, null, 1, parentSuspense);
            queuePostRenderEffect(()=>{
                if (instance2.da) invokeArrayFns(instance2.da);
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance2.parent, vnode);
                instance2.isDeactivated = true;
            }, parentSuspense);
            devtoolsComponentAdded(instance2);
        };
        function unmount(vnode) {
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key)=>{
                const name = getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) pruneCacheEntry(key);
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || !isSameVNodeType(cached, current)) unmount(cached);
            else if (current) resetShapeFlag(current);
            cache.delete(key);
            keys.delete(key);
        }
        watch(()=>[
                props.include,
                props.exclude
            ], ([include, exclude])=>{
            include && pruneCache((name)=>matches(include, name));
            exclude && pruneCache((name)=>!matches(exclude, name));
        }, // prune post-render after `current` has been updated
        {
            flush: "post",
            deep: true
        });
        let pendingCacheKey = null;
        const cacheSubtree = ()=>{
            if (pendingCacheKey != null) cache.set(pendingCacheKey, getInnerChild(instance.subTree));
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(()=>{
            cache.forEach((cached)=>{
                const { subTree, suspense } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type && cached.key === vnode.key) {
                    resetShapeFlag(vnode);
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return ()=>{
            pendingCacheKey = null;
            if (!slots.default) return null;
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                warn$1(`KeepAlive should contain exactly one component child.`);
                current = null;
                return children;
            } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
            const { include, exclude, max } = props;
            if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128) rawVNode.ssContent = vnode;
            }
            pendingCacheKey = key;
            if (cachedVNode) {
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) setTransitionHooks(vnode, vnode.transition);
                vnode.shapeFlag |= 512;
                keys.delete(key);
                keys.add(key);
            } else {
                keys.add(key);
                if (max && keys.size > parseInt(max, 10)) pruneCacheEntry(keys.values().next().value);
            }
            vnode.shapeFlag |= 256;
            current = vnode;
            return isSuspense(rawVNode.type) ? rawVNode : vnode;
        };
    }
};
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
    if (isArray(pattern)) return pattern.some((p)=>matches(p, name));
    else if (isString(pattern)) return pattern.split(",").includes(name);
    else if (isRegExp(pattern)) return pattern.test(name);
    return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = ()=>{
        let current = target;
        while(current){
            if (current.isDeactivated) return;
            current = current.parent;
        }
        return hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
        let current = target.parent;
        while(current && current.parent){
            if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = injectHook(type, hook, keepAliveRoot, true);
    onUnmounted(()=>{
        remove(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    vnode.shapeFlag &= -257;
    vnode.shapeFlag &= -513;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        const wrappedHook = hook.__weh || (hook.__weh = (...args)=>{
            if (target.isUnmounted) return;
            pauseTracking();
            const reset = setCurrentInstance(target);
            const res = callWithAsyncErrorHandling(hook, target, type, args);
            reset();
            resetTracking();
            return res;
        });
        if (prepend) hooks.unshift(wrappedHook);
        else hooks.push(wrappedHook);
        return wrappedHook;
    } else {
        const apiName = toHandlerKey(ErrorTypeStrings$1[type].replace(/ hook$/, ""));
        warn$1(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().` + ` If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
    }
}
const createHook = (lifecycle)=>(hook, target = currentInstance)=>// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
        (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args)=>hook(...args), target);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook("rtg");
const onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec", hook, target);
}
function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    if (isArray(source) || isString(source)) {
        ret = new Array(source.length);
        for(let i = 0, l = source.length; i < l; i++)ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
    } else if (typeof source === "number") {
        if (!Number.isInteger(source)) warn$1(`The v-for range expect an integer value but got ${source}.`);
        ret = new Array(source);
        for(let i = 0; i < source; i++)ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
    } else if (isObject(source)) {
        if (source[Symbol.iterator]) ret = Array.from(source, (item, i)=>renderItem(item, i, void 0, cached && cached[i]));
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for(let i = 0, l = keys.length; i < l; i++){
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
        }
    } else ret = [];
    if (cache) cache[index] = ret;
    return ret;
}
function createSlots(slots, dynamicSlots) {
    for(let i = 0; i < dynamicSlots.length; i++){
        const slot = dynamicSlots[i];
        if (isArray(slot)) for(let j = 0; j < slot.length; j++)slots[slot[j].name] = slot[j].fn;
        else if (slot) slots[slot.name] = slot.key ? (...args)=>{
            const res = slot.fn(...args);
            if (res) res.key = slot.key;
            return res;
        } : slot.fn;
    }
    return slots;
}
function renderSlot(slots, name, props = {}, fallback, noSlotted) {
    if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
        if (name !== "default") props.name = name;
        return createVNode("slot", props, fallback && fallback());
    }
    let slot = slots[name];
    if (slot && slot.length > 1) {
        warn$1(`SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`);
        slot = ()=>[];
    }
    if (slot && slot._c) slot._d = false;
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, {
        key: props.key || // slot content array of a dynamic conditional slot may have a branch
        // key attached in the `createSlots` helper, respect that
        validSlotContent && validSlotContent.key || `_${name}`
    }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
    if (!noSlotted && rendered.scopeId) rendered.slotScopeIds = [
        rendered.scopeId + "-s"
    ];
    if (slot && slot._c) slot._d = true;
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some((child)=>{
        if (!isVNode(child)) return true;
        if (child.type === Comment) return false;
        if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
        return true;
    }) ? vnodes : null;
}
function toHandlers(obj, preserveCaseIfNecessary) {
    const ret = {};
    if (!isObject(obj)) {
        warn$1(`v-on with no argument expects an object value.`);
        return ret;
    }
    for(const key in obj)ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : toHandlerKey(key)] = obj[key];
    return ret;
}
const getPublicInstance = (i)=>{
    if (!i) return null;
    if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
};
const publicPropertiesMap = // Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
/* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i)=>i,
    $el: (i)=>i.vnode.el,
    $data: (i)=>i.data,
    $props: (i)=>shallowReadonly(i.props),
    $attrs: (i)=>shallowReadonly(i.attrs),
    $slots: (i)=>shallowReadonly(i.slots),
    $refs: (i)=>shallowReadonly(i.refs),
    $parent: (i)=>getPublicInstance(i.parent),
    $root: (i)=>getPublicInstance(i.root),
    $emit: (i)=>i.emit,
    $options: (i)=>resolveMergedOptions(i),
    $forceUpdate: (i)=>i.f || (i.f = ()=>{
            i.effect.dirty = true;
            queueJob(i.update);
        }),
    $nextTick: (i)=>i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i)=>instanceWatch.bind(i)
});
const isReservedPrefix = (key)=>key === "_" || key === "$";
const hasSetupBinding = (state, key)=>state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
const PublicInstanceProxyHandlers = {
    get ({ _: instance }, key) {
        const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
        if (key === "__isVue") return true;
        let normalizedProps;
        if (key[0] !== "$") {
            const n = accessCache[key];
            if (n !== void 0) switch(n){
                case 1 /* SETUP */ :
                    return setupState[key];
                case 2 /* DATA */ :
                    return data[key];
                case 4 /* CONTEXT */ :
                    return ctx[key];
                case 3 /* PROPS */ :
                    return props[key];
            }
            else if (hasSetupBinding(setupState, key)) {
                accessCache[key] = 1 /* SETUP */ ;
                return setupState[key];
            } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
                accessCache[key] = 2 /* DATA */ ;
                return data[key];
            } else if (// only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
                accessCache[key] = 3 /* PROPS */ ;
                return props[key];
            } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
                accessCache[key] = 4 /* CONTEXT */ ;
                return ctx[key];
            } else if (shouldCacheAccess) accessCache[key] = 0 /* OTHER */ ;
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        if (publicGetter) {
            if (key === "$attrs") {
                track(instance, "get", key);
                markAttrsAccessed();
            } else if (key === "$slots") track(instance, "get", key);
            return publicGetter(instance);
        } else if (// css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
        else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
            accessCache[key] = 4 /* CONTEXT */ ;
            return ctx[key];
        } else if (// global properties
        globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) return globalProperties[key];
        else if (currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
        // to infinite warning loop
        key.indexOf("__v") !== 0)) {
            if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) warn$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
            else if (instance === currentRenderingInstance) warn$1(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
        }
    },
    set ({ _: instance }, key, value) {
        const { data, setupState, ctx } = instance;
        if (hasSetupBinding(setupState, key)) {
            setupState[key] = value;
            return true;
        } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
            warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
            return false;
        } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
            data[key] = value;
            return true;
        } else if (hasOwn(instance.props, key)) {
            warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
            return false;
        }
        if (key[0] === "$" && key.slice(1) in instance) {
            warn$1(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`);
            return false;
        } else if (key in instance.appContext.config.globalProperties) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
        });
        else ctx[key] = value;
        return true;
    },
    has ({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
        let normalizedProps;
        return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
    },
    defineProperty (target, key, descriptor) {
        if (descriptor.get != null) target._.accessCache[key] = 0;
        else if (hasOwn(descriptor, "value")) this.set(target, key, descriptor.value, null);
        return Reflect.defineProperty(target, key, descriptor);
    }
};
PublicInstanceProxyHandlers.ownKeys = (target)=>{
    warn$1(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
};
const RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ extend({}, PublicInstanceProxyHandlers, {
    get (target, key) {
        if (key === Symbol.unscopables) return;
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has (_, key) {
        const has = key[0] !== "_" && !isGloballyAllowed(key);
        if (!has && PublicInstanceProxyHandlers.has(_, key)) warn$1(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
        return has;
    }
});
function createDevRenderContext(instance) {
    const target = {};
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: ()=>instance
    });
    Object.keys(publicPropertiesMap).forEach((key)=>{
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: ()=>publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: NOOP
        });
    });
    return target;
}
function exposePropsOnRenderContext(instance) {
    const { ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) Object.keys(propsOptions).forEach((key)=>{
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>instance.props[key],
            set: NOOP
        });
    });
}
function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys(toRaw(setupState)).forEach((key)=>{
        if (!setupState.__isScriptSetup) {
            if (isReservedPrefix(key[0])) {
                warn$1(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
                return;
            }
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: ()=>setupState[key],
                set: NOOP
            });
        }
    });
}
const warnRuntimeUsage = (method)=>warn$1(`${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
function defineProps() {
    warnRuntimeUsage(`defineProps`);
    return null;
}
function defineEmits() {
    warnRuntimeUsage(`defineEmits`);
    return null;
}
function defineExpose(exposed) {
    warnRuntimeUsage(`defineExpose`);
}
function defineOptions(options) {
    warnRuntimeUsage(`defineOptions`);
}
function defineSlots() {
    warnRuntimeUsage(`defineSlots`);
    return null;
}
function defineModel() {
    warnRuntimeUsage("defineModel");
}
function withDefaults(props, defaults) {
    warnRuntimeUsage(`withDefaults`);
    return null;
}
function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    const i = getCurrentInstance();
    if (!i) warn$1(`useContext() called without active instance.`);
    return i.setupContext || (i.setupContext = createSetupContext(i));
}
function normalizePropsOrEmits(props) {
    return isArray(props) ? props.reduce((normalized, p)=>(normalized[p] = null, normalized), {}) : props;
}
function mergeDefaults(raw, defaults) {
    const props = normalizePropsOrEmits(raw);
    for(const key in defaults){
        if (key.startsWith("__skip")) continue;
        let opt = props[key];
        if (opt) {
            if (isArray(opt) || isFunction(opt)) opt = props[key] = {
                type: opt,
                default: defaults[key]
            };
            else opt.default = defaults[key];
        } else if (opt === null) opt = props[key] = {
            default: defaults[key]
        };
        else warn$1(`props default key "${key}" has no corresponding declaration.`);
        if (opt && defaults[`__skip_${key}`]) opt.skipFactory = true;
    }
    return props;
}
function mergeModels(a, b) {
    if (!a || !b) return a || b;
    if (isArray(a) && isArray(b)) return a.concat(b);
    return extend({}, normalizePropsOrEmits(a), normalizePropsOrEmits(b));
}
function createPropsRestProxy(props, excludedKeys) {
    const ret = {};
    for(const key in props)if (!excludedKeys.includes(key)) Object.defineProperty(ret, key, {
        enumerable: true,
        get: ()=>props[key]
    });
    return ret;
}
function withAsyncContext(getAwaitable) {
    const ctx = getCurrentInstance();
    if (!ctx) warn$1(`withAsyncContext called without active current instance. This is likely a bug.`);
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if (isPromise(awaitable)) awaitable = awaitable.catch((e)=>{
        setCurrentInstance(ctx);
        throw e;
    });
    return [
        awaitable,
        ()=>setCurrentInstance(ctx)
    ];
}
function createDuplicateChecker() {
    const cache = /* @__PURE__ */ Object.create(null);
    return (type, key)=>{
        if (cache[key]) warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
        else cache[key] = type;
    };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    shouldCacheAccess = false;
    if (options.beforeCreate) callHook$1(options.beforeCreate, instance, "bc");
    const { // state
    data: dataOptions, computed: computedOptions, methods, watch: watchOptions, provide: provideOptions, inject: injectOptions, // lifecycle
    created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, beforeUnmount, destroyed, unmounted, render, renderTracked, renderTriggered, errorCaptured, serverPrefetch, // public API
    expose, inheritAttrs, // assets
    components, directives, filters } = options;
    const checkDuplicateProperties = createDuplicateChecker();
    {
        const [propsOptions] = instance.propsOptions;
        if (propsOptions) for(const key in propsOptions)checkDuplicateProperties("Props" /* PROPS */ , key);
    }
    if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties);
    if (methods) for(const key in methods){
        const methodHandler = methods[key];
        if (isFunction(methodHandler)) {
            Object.defineProperty(ctx, key, {
                value: methodHandler.bind(publicThis),
                configurable: true,
                enumerable: true,
                writable: true
            });
            checkDuplicateProperties("Methods" /* METHODS */ , key);
        } else warn$1(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
    }
    if (dataOptions) {
        if (!isFunction(dataOptions)) warn$1(`The data option must be a function. Plain object usage is no longer supported.`);
        const data = dataOptions.call(publicThis, publicThis);
        if (isPromise(data)) warn$1(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
        if (!isObject(data)) warn$1(`data() should return an object.`);
        else {
            instance.data = reactive(data);
            for(const key in data){
                checkDuplicateProperties("Data" /* DATA */ , key);
                if (!isReservedPrefix(key[0])) Object.defineProperty(ctx, key, {
                    configurable: true,
                    enumerable: true,
                    get: ()=>data[key],
                    set: NOOP
                });
            }
        }
    }
    shouldCacheAccess = true;
    if (computedOptions) for(const key in computedOptions){
        const opt = computedOptions[key];
        const get = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
        if (get === NOOP) warn$1(`Computed property "${key}" has no getter.`);
        const set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : ()=>{
            warn$1(`Write operation failed: computed property "${key}" is readonly.`);
        };
        const c = computed({
            get,
            set
        });
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>c.value,
            set: (v1)=>c.value = v1
        });
        checkDuplicateProperties("Computed" /* COMPUTED */ , key);
    }
    if (watchOptions) for(const key in watchOptions)createWatcher(watchOptions[key], ctx, publicThis, key);
    if (provideOptions) {
        const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
        Reflect.ownKeys(provides).forEach((key)=>{
            provide(key, provides[key]);
        });
    }
    if (created) callHook$1(created, instance, "c");
    function registerLifecycleHook(register, hook) {
        if (isArray(hook)) hook.forEach((_hook)=>register(_hook.bind(publicThis)));
        else if (hook) register(hook.bind(publicThis));
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (isArray(expose)) {
        if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach((key)=>{
                Object.defineProperty(exposed, key, {
                    get: ()=>publicThis[key],
                    set: (val)=>publicThis[key] = val
                });
            });
        } else if (!instance.exposed) instance.exposed = {};
    }
    if (render && instance.render === NOOP) instance.render = render;
    if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
    if (components) instance.components = components;
    if (directives) instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
    if (isArray(injectOptions)) injectOptions = normalizeInject(injectOptions);
    for(const key in injectOptions){
        const opt = injectOptions[key];
        let injected;
        if (isObject(opt)) {
            if ("default" in opt) injected = inject(opt.from || key, opt.default, true);
            else injected = inject(opt.from || key);
        } else injected = inject(opt);
        if (isRef(injected)) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>injected.value,
            set: (v1)=>injected.value = v1
        });
        else ctx[key] = injected;
        checkDuplicateProperties("Inject" /* INJECT */ , key);
    }
}
function callHook$1(hook, instance, type) {
    callWithAsyncErrorHandling(isArray(hook) ? hook.map((h)=>h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes(".") ? createPathGetter(publicThis, key) : ()=>publicThis[key];
    if (isString(raw)) {
        const handler = ctx[raw];
        if (isFunction(handler)) watch(getter, handler);
        else warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    } else if (isFunction(raw)) watch(getter, raw.bind(publicThis));
    else if (isObject(raw)) {
        if (isArray(raw)) raw.forEach((r)=>createWatcher(r, ctx, publicThis, key));
        else {
            const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if (isFunction(handler)) watch(getter, handler, raw);
            else warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
    } else warn$1(`Invalid watch option: "${key}"`, raw);
}
function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) resolved = cached;
    else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
    else {
        resolved = {};
        if (globalMixins.length) globalMixins.forEach((m)=>mergeOptions(resolved, m, optionMergeStrategies, true));
        mergeOptions(resolved, base, optionMergeStrategies);
    }
    if (isObject(base)) cache.set(base, resolved);
    return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) mergeOptions(to, extendsOptions, strats, true);
    if (mixins) mixins.forEach((m)=>mergeOptions(to, m, strats, true));
    for(const key in from)if (asMixin && key === "expose") warn$1(`"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`);
    else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
    return to;
}
const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeEmitsOrPropsOptions,
    emits: mergeEmitsOrPropsOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray$1,
    created: mergeAsArray$1,
    beforeMount: mergeAsArray$1,
    mounted: mergeAsArray$1,
    beforeUpdate: mergeAsArray$1,
    updated: mergeAsArray$1,
    beforeDestroy: mergeAsArray$1,
    beforeUnmount: mergeAsArray$1,
    destroyed: mergeAsArray$1,
    unmounted: mergeAsArray$1,
    activated: mergeAsArray$1,
    deactivated: mergeAsArray$1,
    errorCaptured: mergeAsArray$1,
    serverPrefetch: mergeAsArray$1,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
};
function mergeDataFn(to, from) {
    if (!from) return to;
    if (!to) return from;
    return function mergedDataFn() {
        return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
    };
}
function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
    if (isArray(raw)) {
        const res = {};
        for(let i = 0; i < raw.length; i++)res[raw[i]] = raw[i];
        return res;
    }
    return raw;
}
function mergeAsArray$1(to, from) {
    return to ? [
        ...new Set([].concat(to, from))
    ] : from;
}
function mergeObjectOptions(to, from) {
    return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
    if (to) {
        if (isArray(to) && isArray(from)) return [
            .../* @__PURE__ */ new Set([
                ...to,
                ...from
            ])
        ];
        return extend(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
    } else return from;
}
function mergeWatchOptions(to, from) {
    if (!to) return from;
    if (!from) return to;
    const merged = extend(/* @__PURE__ */ Object.create(null), to);
    for(const key in from)merged[key] = mergeAsArray$1(to[key], from[key]);
    return merged;
}
function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: NO,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: /* @__PURE__ */ Object.create(null),
        optionsCache: /* @__PURE__ */ new WeakMap(),
        propsCache: /* @__PURE__ */ new WeakMap(),
        emitsCache: /* @__PURE__ */ new WeakMap()
    };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (!isFunction(rootComponent)) rootComponent = extend({}, rootComponent);
        if (rootProps != null && !isObject(rootProps)) {
            warn$1(`root props passed to app.mount() must be an object.`);
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = /* @__PURE__ */ new WeakSet();
        let isMounted = false;
        const app = context.app = {
            _uid: uid$1++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config () {
                return context.config;
            },
            set config (v){
                warn$1(`app.config cannot be replaced. Modify individual options instead.`);
            },
            use (plugin, ...options) {
                if (installedPlugins.has(plugin)) warn$1(`Plugin has already been applied to target app.`);
                else if (plugin && isFunction(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                } else if (isFunction(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                } else warn$1(`A plugin must either be a function or an object with an "install" function.`);
                return app;
            },
            mixin (mixin) {
                if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
                else warn$1("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
                return app;
            },
            component (name, component) {
                validateComponentName(name, context.config);
                if (!component) return context.components[name];
                if (context.components[name]) warn$1(`Component "${name}" has already been registered in target app.`);
                context.components[name] = component;
                return app;
            },
            directive (name, directive) {
                validateDirectiveName(name);
                if (!directive) return context.directives[name];
                if (context.directives[name]) warn$1(`Directive "${name}" has already been registered in target app.`);
                context.directives[name] = directive;
                return app;
            },
            mount (rootContainer, isHydrate, namespace) {
                if (!isMounted) {
                    if (rootContainer.__vue_app__) warn$1(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
                    const vnode = createVNode(rootComponent, rootProps);
                    vnode.appContext = context;
                    if (namespace === true) namespace = "svg";
                    else if (namespace === false) namespace = void 0;
                    context.reload = ()=>{
                        render(cloneVNode(vnode), rootContainer, namespace);
                    };
                    if (isHydrate && hydrate) hydrate(vnode, rootContainer);
                    else render(vnode, rootContainer, namespace);
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    app._instance = vnode.component;
                    devtoolsInitApp(app, version);
                    return getExposeProxy(vnode.component) || vnode.component.proxy;
                } else warn$1(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
            },
            unmount () {
                if (isMounted) {
                    render(null, app._container);
                    app._instance = null;
                    devtoolsUnmountApp(app);
                    delete app._container.__vue_app__;
                } else warn$1(`Cannot unmount an app that is not mounted.`);
            },
            provide (key, value) {
                if (key in context.provides) warn$1(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
                context.provides[key] = value;
                return app;
            },
            runWithContext (fn) {
                currentApp = app;
                try {
                    return fn();
                } finally{
                    currentApp = null;
                }
            }
        };
        return app;
    };
}
let currentApp = null;
function provide(key, value) {
    if (!currentInstance) warn$1(`provide() can only be used inside setup().`);
    else {
        let provides = currentInstance.provides;
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = currentInstance || currentRenderingInstance;
    if (instance || currentApp) {
        const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
        if (provides && key in provides) return provides[key];
        else if (arguments.length > 1) return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
        else warn$1(`injection "${String(key)}" not found.`);
    } else warn$1(`inject() can only be used inside setup() or functional components.`);
}
function hasInjectionContext() {
    return !!(currentInstance || currentRenderingInstance || currentApp);
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = {};
    def(attrs, InternalObjectKey, 1);
    instance.propsDefaults = /* @__PURE__ */ Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    for(const key in instance.propsOptions[0])if (!(key in props)) props[key] = void 0;
    validateProps(rawProps || {}, props, instance);
    if (isStateful) instance.props = isSSR ? props : shallowReactive(props);
    else if (!instance.type.props) instance.props = attrs;
    else instance.props = props;
    instance.attrs = attrs;
}
function isInHmrContext(instance) {
    while(instance){
        if (instance.type.__hmrId) return true;
        instance = instance.parent;
    }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (// always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
        if (patchFlag & 8) {
            const propsToUpdate = instance.vnode.dynamicProps;
            for(let i = 0; i < propsToUpdate.length; i++){
                let key = propsToUpdate[i];
                if (isEmitListener(instance.emitsOptions, key)) continue;
                const value = rawProps[key];
                if (options) {
                    if (hasOwn(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    } else {
                        const camelizedKey = camelize(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
                    }
                } else if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    } else {
        if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
        let kebabKey;
        for(const key in rawCurrentProps)if (!rawProps || // for camelCase
        !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
            if (options) {
                if (rawPrevProps && // for camelCase
                (rawPrevProps[key] !== void 0 || // for kebab-case
                rawPrevProps[kebabKey] !== void 0)) props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
            } else delete props[key];
        }
        if (attrs !== rawCurrentProps) {
            for(const key in attrs)if (!rawProps || !hasOwn(rawProps, key) && true) {
                delete attrs[key];
                hasAttrsChanged = true;
            }
        }
    }
    if (hasAttrsChanged) trigger(instance, "set", "$attrs");
    validateProps(rawProps || {}, props, instance);
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) for(let key in rawProps){
        if (isReservedProp(key)) continue;
        const value = rawProps[key];
        let camelKey;
        if (options && hasOwn(options, camelKey = camelize(key))) {
            if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
            else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        } else if (!isEmitListener(instance.emitsOptions, key)) {
            if (!(key in attrs) || value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = toRaw(props);
        const castValues = rawCastValues || EMPTY_OBJ;
        for(let i = 0; i < needCastKeys.length; i++){
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
        }
    }
    return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = hasOwn(opt, "default");
        if (hasDefault && value === void 0) {
            const defaultValue = opt.default;
            if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
                const { propsDefaults } = instance;
                if (key in propsDefaults) value = propsDefaults[key];
                else {
                    const reset = setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(null, props);
                    reset();
                }
            } else value = defaultValue;
        }
        if (opt[0 /* shouldCast */ ]) {
            if (isAbsent && !hasDefault) value = false;
            else if (opt[1 /* shouldCastTrue */ ] && (value === "" || value === hyphenate(key))) value = true;
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) return cached;
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (!isFunction(comp)) {
        const extendProps = (raw2)=>{
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw2, appContext, true);
            extend(normalized, props);
            if (keys) needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
        if (comp.extends) extendProps(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendProps);
    }
    if (!raw && !hasExtends) {
        if (isObject(comp)) cache.set(comp, EMPTY_ARR);
        return EMPTY_ARR;
    }
    if (isArray(raw)) for(let i = 0; i < raw.length; i++){
        if (!isString(raw[i])) warn$1(`props must be strings when using array syntax.`, raw[i]);
        const normalizedKey = camelize(raw[i]);
        if (validatePropName(normalizedKey)) normalized[normalizedKey] = EMPTY_OBJ;
    }
    else if (raw) {
        if (!isObject(raw)) warn$1(`invalid props options`, raw);
        for(const key in raw){
            const normalizedKey = camelize(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? {
                    type: opt
                } : extend({}, opt);
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* shouldCast */ ] = booleanIndex > -1;
                    prop[1 /* shouldCastTrue */ ] = stringIndex < 0 || booleanIndex < stringIndex;
                    if (booleanIndex > -1 || hasOwn(prop, "default")) needCastKeys.push(normalizedKey);
                }
            }
        }
    }
    const res = [
        normalized,
        needCastKeys
    ];
    if (isObject(comp)) cache.set(comp, res);
    return res;
}
function validatePropName(key) {
    if (key[0] !== "$") return true;
    else warn$1(`Invalid prop name: "${key}" is a reserved property.`);
    return false;
}
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
    return match ? match[2] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if (isArray(expectedTypes)) return expectedTypes.findIndex((t)=>isSameType(t, type));
    else if (isFunction(expectedTypes)) return isSameType(expectedTypes, type) ? 0 : -1;
    return -1;
}
function validateProps(rawProps, props, instance) {
    const resolvedValues = toRaw(props);
    const options = instance.propsOptions[0];
    for(const key in options){
        let opt = options[key];
        if (opt == null) continue;
        validateProp(key, resolvedValues[key], opt, shallowReadonly(resolvedValues), !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
    }
}
function validateProp(name, value, prop, props, isAbsent) {
    const { type, required, validator, skipCheck } = prop;
    if (required && isAbsent) {
        warn$1('Missing required prop: "' + name + '"');
        return;
    }
    if (value == null && !required) return;
    if (type != null && type !== true && !skipCheck) {
        let isValid = false;
        const types = isArray(type) ? type : [
            type
        ];
        const expectedTypes = [];
        for(let i = 0; i < types.length && !isValid; i++){
            const { valid, expectedType } = assertType(value, types[i]);
            expectedTypes.push(expectedType || "");
            isValid = valid;
        }
        if (!isValid) {
            warn$1(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    if (validator && !validator(value, props)) warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
}
const isSimpleType = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol,BigInt");
function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        if (!valid && t === "object") valid = value instanceof type;
    } else if (expectedType === "Object") valid = isObject(value);
    else if (expectedType === "Array") valid = isArray(value);
    else if (expectedType === "null") valid = value === null;
    else valid = value instanceof type;
    return {
        valid,
        expectedType
    };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
    if (expectedTypes.length === 0) return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
    let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = toRawType(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) message += ` with value ${expectedValue}`;
    message += `, got ${receivedType} `;
    if (isExplicable(receivedType)) message += `with value ${receivedValue}.`;
    return message;
}
function styleValue(value, type) {
    if (type === "String") return `"${value}"`;
    else if (type === "Number") return `${Number(value)}`;
    else return `${value}`;
}
function isExplicable(type) {
    const explicitTypes = [
        "string",
        "number",
        "boolean"
    ];
    return explicitTypes.some((elem)=>type.toLowerCase() === elem);
}
function isBoolean(...args) {
    return args.some((elem)=>elem.toLowerCase() === "boolean");
}
const isInternalKey = (key)=>key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value)=>isArray(value) ? value.map(normalizeVNode) : [
        normalizeVNode(value)
    ];
const normalizeSlot = (key, rawSlot, ctx)=>{
    if (rawSlot._n) return rawSlot;
    const normalized = withCtx((...args)=>{
        if (currentInstance) warn$1(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
        return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance)=>{
    const ctx = rawSlots._ctx;
    for(const key in rawSlots){
        if (isInternalKey(key)) continue;
        const value = rawSlots[key];
        if (isFunction(value)) slots[key] = normalizeSlot(key, value, ctx);
        else if (value != null) {
            warn$1(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
            const normalized = normalizeSlotValue(value);
            slots[key] = ()=>normalized;
        }
    }
};
const normalizeVNodeSlots = (instance, children)=>{
    if (!isKeepAlive(instance.vnode) && true) warn$1(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
    const normalized = normalizeSlotValue(children);
    instance.slots.default = ()=>normalized;
};
const initSlots = (instance, children)=>{
    if (instance.vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
            instance.slots = toRaw(children);
            def(children, "_", type);
        } else normalizeObjectSlots(children, instance.slots = {});
    } else {
        instance.slots = {};
        if (children) normalizeVNodeSlots(instance, children);
    }
    def(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized)=>{
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = EMPTY_OBJ;
    if (vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
            if (isHmrUpdating) {
                extend(slots, children);
                trigger(instance, "set", "$slots");
            } else if (optimized && type === 1) needDeletionCheck = false;
            else {
                extend(slots, children);
                if (!optimized && type === 1) delete slots._;
            }
        } else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    } else if (children) {
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = {
            default: 1
        };
    }
    if (needDeletionCheck) {
        for(const key in slots)if (!isInternalKey(key) && deletionComparisonTarget[key] == null) delete slots[key];
    }
};
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (isArray(rawRef)) {
        rawRef.forEach((r, i)=>setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
        return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) return;
    const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref } = rawRef;
    if (!owner) {
        warn$1(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
        return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    if (oldRef != null && oldRef !== ref) {
        if (isString(oldRef)) {
            refs[oldRef] = null;
            if (hasOwn(setupState, oldRef)) setupState[oldRef] = null;
        } else if (isRef(oldRef)) oldRef.value = null;
    }
    if (isFunction(ref)) callWithErrorHandling(ref, owner, 12, [
        value,
        refs
    ]);
    else {
        const _isString = isString(ref);
        const _isRef = isRef(ref);
        if (_isString || _isRef) {
            const doSet = ()=>{
                if (rawRef.f) {
                    const existing = _isString ? hasOwn(setupState, ref) ? setupState[ref] : refs[ref] : ref.value;
                    if (isUnmount) isArray(existing) && remove(existing, refValue);
                    else {
                        if (!isArray(existing)) {
                            if (_isString) {
                                refs[ref] = [
                                    refValue
                                ];
                                if (hasOwn(setupState, ref)) setupState[ref] = refs[ref];
                            } else {
                                ref.value = [
                                    refValue
                                ];
                                if (rawRef.k) refs[rawRef.k] = ref.value;
                            }
                        } else if (!existing.includes(refValue)) existing.push(refValue);
                    }
                } else if (_isString) {
                    refs[ref] = value;
                    if (hasOwn(setupState, ref)) setupState[ref] = value;
                } else if (_isRef) {
                    ref.value = value;
                    if (rawRef.k) refs[rawRef.k] = value;
                } else warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
            };
            if (value) {
                doSet.id = -1;
                queuePostRenderEffect(doSet, parentSuspense);
            } else doSet();
        } else warn$1("Invalid template ref type:", ref, `(${typeof ref})`);
    }
}
let hasMismatch = false;
const isSVGContainer = (container)=>container.namespaceURI.includes("svg") && container.tagName !== "foreignObject";
const isMathMLContainer = (container)=>container.namespaceURI.includes("MathML");
const getContainerType = (container)=>{
    if (isSVGContainer(container)) return "svg";
    if (isMathMLContainer(container)) return "mathml";
    return void 0;
};
const isComment = (node)=>node.nodeType === 8 /* COMMENT */ ;
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent, p: patch, o: { patchProp, createText, nextSibling, parentNode, remove, insert, createComment } } = rendererInternals;
    const hydrate = (vnode, container)=>{
        if (!container.hasChildNodes()) {
            warn$1(`Attempting to hydrate existing markup but container is empty. Performing full mount instead.`);
            patch(null, vnode, container);
            flushPostFlushCbs();
            container._vnode = vnode;
            return;
        }
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null, null);
        flushPostFlushCbs();
        container._vnode = vnode;
        if (hasMismatch && true) console.error(`Hydration completed but contains mismatches.`);
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false)=>{
        const isFragmentStart = isComment(node) && node.data === "[";
        const onMismatch = ()=>handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
        const { type, ref, shapeFlag, patchFlag } = vnode;
        let domType = node.nodeType;
        vnode.el = node;
        if (!("__vnode" in node)) Object.defineProperty(node, "__vnode", {
            value: vnode,
            enumerable: false
        });
        if (!("__vueParentComponent" in node)) Object.defineProperty(node, "__vueParentComponent", {
            value: parentComponent,
            enumerable: false
        });
        if (patchFlag === -2) {
            optimized = false;
            vnode.dynamicChildren = null;
        }
        let nextNode = null;
        switch(type){
            case Text:
                if (domType !== 3 /* TEXT */ ) {
                    if (vnode.children === "") {
                        insert(vnode.el = createText(""), parentNode(node), node);
                        nextNode = node;
                    } else nextNode = onMismatch();
                } else {
                    if (node.data !== vnode.children) {
                        hasMismatch = true;
                        warn$1(`Hydration text mismatch in`, node.parentNode, `
  - rendered on server: ${JSON.stringify(node.data)}
  - expected on client: ${JSON.stringify(vnode.children)}`);
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment:
                if (isTemplateNode(node)) {
                    nextNode = nextSibling(node);
                    replaceNode(vnode.el = node.content.firstChild, node, parentComponent);
                } else if (domType !== 8 /* COMMENT */  || isFragmentStart) nextNode = onMismatch();
                else nextNode = nextSibling(node);
                break;
            case Static:
                if (isFragmentStart) {
                    node = nextSibling(node);
                    domType = node.nodeType;
                }
                if (domType === 1 /* ELEMENT */  || domType === 3 /* TEXT */ ) {
                    nextNode = node;
                    const needToAdoptContent = !vnode.children.length;
                    for(let i = 0; i < vnode.staticCount; i++){
                        if (needToAdoptContent) vnode.children += nextNode.nodeType === 1 /* ELEMENT */  ? nextNode.outerHTML : nextNode.data;
                        if (i === vnode.staticCount - 1) vnode.anchor = nextNode;
                        nextNode = nextSibling(nextNode);
                    }
                    return isFragmentStart ? nextSibling(nextNode) : nextNode;
                } else onMismatch();
                break;
            case Fragment:
                if (!isFragmentStart) nextNode = onMismatch();
                else nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1) {
                    if ((domType !== 1 /* ELEMENT */  || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) nextNode = onMismatch();
                    else nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                } else if (shapeFlag & 6) {
                    vnode.slotScopeIds = slotScopeIds;
                    const container = parentNode(node);
                    if (isFragmentStart) nextNode = locateClosingAnchor(node);
                    else if (isComment(node) && node.data === "teleport start") nextNode = locateClosingAnchor(node, node.data, "teleport end");
                    else nextNode = nextSibling(node);
                    mountComponent(vnode, container, null, parentComponent, parentSuspense, getContainerType(container), optimized);
                    if (isAsyncWrapper(vnode)) {
                        let subTree;
                        if (isFragmentStart) {
                            subTree = createVNode(Fragment);
                            subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
                        } else subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
                        subTree.el = node;
                        vnode.component.subTree = subTree;
                    }
                } else if (shapeFlag & 64) {
                    if (domType !== 8 /* COMMENT */ ) nextNode = onMismatch();
                    else nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                } else if (shapeFlag & 128) nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, getContainerType(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                else warn$1("Invalid HostVNode type:", type, `(${typeof type})`);
        }
        if (ref != null) setRef(ref, null, parentSuspense, vnode);
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!vnode.dynamicChildren;
        const { type, props, patchFlag, shapeFlag, dirs, transition } = vnode;
        const forcePatch = type === "input" || type === "option";
        {
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
            let needCallTransitionHooks = false;
            if (isTemplateNode(el)) {
                needCallTransitionHooks = needTransition(parentSuspense, transition) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
                const content = el.content.firstChild;
                if (needCallTransitionHooks) transition.beforeEnter(content);
                replaceNode(content, el, parentComponent);
                vnode.el = el = content;
            }
            if (shapeFlag & 16 && // skip if element has innerHTML / textContent
            !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                let hasWarned = false;
                while(next){
                    hasMismatch = true;
                    if (!hasWarned) {
                        warn$1(`Hydration children mismatch on`, el, `
Server rendered element contains more child nodes than client vdom.`);
                        hasWarned = true;
                    }
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            } else if (shapeFlag & 8) {
                if (el.textContent !== vnode.children) {
                    hasMismatch = true;
                    warn$1(`Hydration text content mismatch on`, el, `
  - rendered on server: ${el.textContent}
  - expected on client: ${vnode.children}`);
                    el.textContent = vnode.children;
                }
            }
            if (props) for(const key in props){
                if (propHasMismatch(el, key, props[key], vnode)) hasMismatch = true;
                if (forcePatch && (key.endsWith("value") || key === "indeterminate") || isOn(key) && !isReservedProp(key) || // force hydrate v-bind with .prop modifiers
                key[0] === ".") patchProp(el, key, null, props[key], void 0, void 0, parentComponent);
            }
            let vnodeHooks;
            if (vnodeHooks = props && props.onVnodeBeforeMount) invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) queueEffectWithSuspense(()=>{
                vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                needCallTransitionHooks && transition.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
            }, parentSuspense);
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned = false;
        for(let i = 0; i < l; i++){
            const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
            if (node) node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            else if (vnode.type === Text && !vnode.children) continue;
            else {
                hasMismatch = true;
                if (!hasWarned) {
                    warn$1(`Hydration children mismatch on`, container, `
Server rendered element contains fewer child nodes than client vdom.`);
                    hasWarned = true;
                }
                patch(null, vnode, container, null, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        const { slotScopeIds: fragmentSlotScopeIds } = vnode;
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
        if (next && isComment(next) && next.data === "]") return nextSibling(vnode.anchor = next);
        else {
            hasMismatch = true;
            insert(vnode.anchor = createComment(`]`), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment)=>{
        hasMismatch = true;
        warn$1(`Hydration node mismatch:
- rendered on server:`, node, node.nodeType === 3 /* TEXT */  ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``, `
- expected on client:`, vnode.type);
        vnode.el = null;
        if (isFragment) {
            const end = locateClosingAnchor(node);
            while(true){
                const next2 = nextSibling(node);
                if (next2 && next2 !== end) remove(next2);
                else break;
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, getContainerType(container), slotScopeIds);
        return next;
    };
    const locateClosingAnchor = (node, open = "[", close = "]")=>{
        let match = 0;
        while(node){
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === open) match++;
                if (node.data === close) {
                    if (match === 0) return nextSibling(node);
                    else match--;
                }
            }
        }
        return node;
    };
    const replaceNode = (newNode, oldNode, parentComponent)=>{
        const parentNode2 = oldNode.parentNode;
        if (parentNode2) parentNode2.replaceChild(newNode, oldNode);
        let parent = parentComponent;
        while(parent){
            if (parent.vnode.el === oldNode) parent.vnode.el = parent.subTree.el = newNode;
            parent = parent.parent;
        }
    };
    const isTemplateNode = (node)=>{
        return node.nodeType === 1 /* ELEMENT */  && node.tagName.toLowerCase() === "template";
    };
    return [
        hydrate,
        hydrateNode
    ];
}
function propHasMismatch(el, key, clientValue, vnode) {
    let mismatchType;
    let mismatchKey;
    let actual;
    let expected;
    if (key === "class") {
        actual = el.getAttribute("class");
        expected = normalizeClass(clientValue);
        if (!isSetEqual(toClassSet(actual || ""), toClassSet(expected))) mismatchType = mismatchKey = `class`;
    } else if (key === "style") {
        actual = el.getAttribute("style");
        expected = isString(clientValue) ? clientValue : stringifyStyle(normalizeStyle(clientValue));
        const actualMap = toStyleMap(actual);
        const expectedMap = toStyleMap(expected);
        if (vnode.dirs) {
            for (const { dir, value } of vnode.dirs)if (dir.name === "show" && !value) expectedMap.set("display", "none");
        }
        if (!isMapEqual(actualMap, expectedMap)) mismatchType = mismatchKey = "style";
    } else if (el instanceof SVGElement && isKnownSvgAttr(key) || el instanceof HTMLElement && (isBooleanAttr(key) || isKnownHtmlAttr(key))) {
        if (isBooleanAttr(key)) {
            actual = el.hasAttribute(key);
            expected = includeBooleanAttr(clientValue);
        } else {
            if (el.hasAttribute(key)) actual = el.getAttribute(key);
            else {
                const serverValue = el[key];
                actual = isObject(serverValue) || serverValue == null ? "" : String(serverValue);
            }
            expected = isObject(clientValue) || clientValue == null ? "" : String(clientValue);
        }
        if (actual !== expected) {
            mismatchType = `attribute`;
            mismatchKey = key;
        }
    }
    if (mismatchType) {
        const format = (v1)=>v1 === false ? `(not rendered)` : `${mismatchKey}="${v1}"`;
        const preSegment = `Hydration ${mismatchType} mismatch on`;
        const postSegment = `
  - rendered on server: ${format(actual)}
  - expected on client: ${format(expected)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
        warn$1(preSegment, el, postSegment);
        return true;
    }
    return false;
}
function toClassSet(str) {
    return new Set(str.trim().split(/\s+/));
}
function isSetEqual(a, b) {
    if (a.size !== b.size) return false;
    for (const s of a){
        if (!b.has(s)) return false;
    }
    return true;
}
function toStyleMap(str) {
    const styleMap = /* @__PURE__ */ new Map();
    for (const item of str.split(";")){
        let [key, value] = item.split(":");
        key = key == null ? void 0 : key.trim();
        value = value == null ? void 0 : value.trim();
        if (key && value) styleMap.set(key, value);
    }
    return styleMap;
}
function isMapEqual(a, b) {
    if (a.size !== b.size) return false;
    for (const [key, value] of a){
        if (value !== b.get(key)) return false;
    }
    return true;
}
let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) perf.mark(`vue-${type}-${instance.uid}`);
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
}
function isSupported() {
    if (supported !== void 0) return supported;
    if (typeof window !== "undefined" && window.performance) {
        supported = true;
        perf = window.performance;
    } else supported = false;
    return supported;
}
const queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
    return baseCreateRenderer(options);
}
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
function baseCreateRenderer(options, createHydrationFns) {
    const target = getGlobalThis();
    target.__VUE__ = true;
    setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren)=>{
        if (n1 === n2) return;
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type, ref, shapeFlag } = n2;
        switch(type){
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) mountStaticNode(n2, container, anchor, namespace);
                else patchStaticNode(n1, n2, container, namespace);
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (shapeFlag & 6) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (shapeFlag & 64) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
                else if (shapeFlag & 128) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
                else warn$1("Invalid VNode type:", type, `(${typeof type})`);
        }
        if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    };
    const processText = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
        else {
            const el = n2.el = n1.el;
            if (n2.children !== n1.children) hostSetText(el, n2.children);
        }
    };
    const processCommentNode = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
        else n2.el = n1.el;
    };
    const mountStaticNode = (n2, container, anchor, namespace)=>{
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
    };
    const patchStaticNode = (n1, n2, container, namespace)=>{
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace);
        } else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling)=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor })=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        if (n2.type === "svg") namespace = "svg";
        else if (n2.type === "math") namespace = "mathml";
        if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        else patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        let el;
        let vnodeHook;
        const { props, shapeFlag, transition, dirs } = vnode;
        el = vnode.el = hostCreateElement(vnode.type, namespace, props && props.is, props);
        if (shapeFlag & 8) hostSetElementText(el, vnode.children);
        else if (shapeFlag & 16) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        if (props) {
            for(const key in props)if (key !== "value" && !isReservedProp(key)) hostPatchProp(el, key, null, props[key], namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
            if ("value" in props) hostPatchProp(el, "value", null, props.value, namespace);
            if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        Object.defineProperty(el, "__vnode", {
            value: vnode,
            enumerable: false
        });
        Object.defineProperty(el, "__vueParentComponent", {
            value: parentComponent,
            enumerable: false
        });
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        const needCallTransitionHooks = needTransition(parentSuspense, transition);
        if (needCallTransitionHooks) transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            needCallTransitionHooks && transition.enter(el);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent)=>{
        if (scopeId) hostSetScopeId(el, scopeId);
        if (slotScopeIds) for(let i = 0; i < slotScopeIds.length; i++)hostSetScopeId(el, slotScopeIds[i]);
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) subTree = filterSingleRoot(subTree.children) || subTree;
            if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0)=>{
        for(let i = start; i < children.length; i++){
            const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
            patch(null, child, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        const el = n2.el = n1.el;
        let { patchFlag, dynamicChildren, dirs } = n2;
        patchFlag |= n1.patchFlag & 16;
        const oldProps = n1.props || EMPTY_OBJ;
        const newProps = n2.props || EMPTY_OBJ;
        let vnodeHook;
        parentComponent && toggleRecurse(parentComponent, false);
        if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        if (dirs) invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
        parentComponent && toggleRecurse(parentComponent, true);
        if (isHmrUpdating) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds);
            traverseStaticChildren(n1, n2);
        } else if (!optimized) patchChildren(n1, n2, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
        if (patchFlag > 0) {
            if (patchFlag & 16) patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, namespace);
            else {
                if (patchFlag & 2) {
                    if (oldProps.class !== newProps.class) hostPatchProp(el, "class", null, newProps.class, namespace);
                }
                if (patchFlag & 4) hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
                if (patchFlag & 8) {
                    const propsToUpdate = n2.dynamicProps;
                    for(let i = 0; i < propsToUpdate.length; i++){
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        if (next !== prev || key === "value") hostPatchProp(el, key, prev, next, namespace, n1.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
            if (patchFlag & 1) {
                if (n1.children !== n2.children) hostSetElementText(el, n2.children);
            }
        } else if (!optimized && dynamicChildren == null) patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, namespace);
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds)=>{
        for(let i = 0; i < newChildren.length; i++){
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            const container = // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
            // which also requires the correct parent container
            !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
            oldVNode.shapeFlag & 70) ? hostParentNode(oldVNode.el) : // In other cases, the parent container is not actually used so we
            // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, namespace)=>{
        if (oldProps !== newProps) {
            if (oldProps !== EMPTY_OBJ) {
                for(const key in oldProps)if (!isReservedProp(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            for(const key in newProps){
                if (isReservedProp(key)) continue;
                const next = newProps[key];
                const prev = oldProps[key];
                if (next !== prev && key !== "value") hostPatchProp(el, key, prev, next, namespace, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            if ("value" in newProps) hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
        const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
        let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
        if (// #5523 dev root fragment may inherit directives
        isHmrUpdating || patchFlag & 2048) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            mountChildren(// #10007
            // such fragment like `<></>` will be compiled into
            // a fragment which doesn't have a children.
            // In this case fallback to an empty array
            n2.children || [], container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
            traverseStaticChildren(n1, n2);
        } else patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
            if (n2.shapeFlag & 512) parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
            else mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
        } else updateComponent(n1, n2, optimized);
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized)=>{
        const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
        if (instance.type.__hmrId) registerHMR(instance);
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
        if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
        startMeasure(instance, `init`);
        setupComponent(instance);
        endMeasure(instance, `init`);
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            if (!initialVNode.el) {
                const placeholder = instance.subTree = createVNode(Comment);
                processCommentNode(null, placeholder, container, anchor);
            }
        } else setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
        popWarningContext();
        endMeasure(instance, `mount`);
    };
    const updateComponent = (n1, n2, optimized)=>{
        const instance = n2.component = n1.component;
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep && !instance.asyncResolved) {
                pushWarningContext(n2);
                updateComponentPreRender(instance, n2, optimized);
                popWarningContext();
                return;
            } else {
                instance.next = n2;
                invalidateJob(instance.update);
                instance.effect.dirty = true;
                instance.update();
            }
        } else {
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized)=>{
        const componentUpdateFn = ()=>{
            if (!instance.isMounted) {
                let vnodeHook;
                const { el, props } = initialVNode;
                const { bm, m, parent } = instance;
                const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                toggleRecurse(instance, false);
                if (bm) invokeArrayFns(bm);
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
                toggleRecurse(instance, true);
                if (el && hydrateNode) {
                    const hydrateSubTree = ()=>{
                        startMeasure(instance, `render`);
                        instance.subTree = renderComponentRoot(instance);
                        endMeasure(instance, `render`);
                        startMeasure(instance, `hydrate`);
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                        endMeasure(instance, `hydrate`);
                    };
                    if (isAsyncWrapperVNode) initialVNode.type.__asyncLoader().then(// note: we are moving the render call into an async callback,
                    // which means it won't track dependencies - but it's ok because
                    // a server-rendered async wrapper is already in resolved state
                    // and it will never need to change.
                    ()=>!instance.isUnmounted && hydrateSubTree());
                    else hydrateSubTree();
                } else {
                    startMeasure(instance, `render`);
                    const subTree = instance.subTree = renderComponentRoot(instance);
                    endMeasure(instance, `render`);
                    startMeasure(instance, `patch`);
                    patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
                    endMeasure(instance, `patch`);
                    initialVNode.el = subTree.el;
                }
                if (m) queuePostRenderEffect(m, parentSuspense);
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
                }
                if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                instance.isMounted = true;
                devtoolsComponentAdded(instance);
                initialVNode = container = anchor = null;
            } else {
                let { next, bu, u, parent, vnode } = instance;
                {
                    const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
                    if (nonHydratedAsyncRoot) {
                        if (next) {
                            next.el = vnode.el;
                            updateComponentPreRender(instance, next, optimized);
                        }
                        nonHydratedAsyncRoot.asyncDep.then(()=>{
                            if (!instance.isUnmounted) componentUpdateFn();
                        });
                        return;
                    }
                }
                let originNext = next;
                let vnodeHook;
                pushWarningContext(next || instance.vnode);
                toggleRecurse(instance, false);
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                } else next = vnode;
                if (bu) invokeArrayFns(bu);
                if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
                toggleRecurse(instance, true);
                startMeasure(instance, `render`);
                const nextTree = renderComponentRoot(instance);
                endMeasure(instance, `render`);
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                startMeasure(instance, `patch`);
                patch(prevTree, nextTree, // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, namespace);
                endMeasure(instance, `patch`);
                next.el = nextTree.el;
                if (originNext === null) updateHOCHostEl(instance, nextTree.el);
                if (u) queuePostRenderEffect(u, parentSuspense);
                if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
                devtoolsComponentUpdated(instance);
                popWarningContext();
            }
        };
        const effect = instance.effect = new ReactiveEffect(componentUpdateFn, NOOP, ()=>queueJob(update), instance.scope);
        const update = instance.update = ()=>{
            if (effect.dirty) effect.run();
        };
        update.id = instance.uid;
        toggleRecurse(instance, true);
        effect.onTrack = instance.rtc ? (e)=>invokeArrayFns(instance.rtc, e) : void 0;
        effect.onTrigger = instance.rtg ? (e)=>invokeArrayFns(instance.rtg, e) : void 0;
        update.ownerInstance = instance;
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized)=>{
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        pauseTracking();
        flushPreFlushCbs(instance);
        resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false)=>{
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        if (patchFlag > 0) {
            if (patchFlag & 128) {
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                return;
            } else if (patchFlag & 256) {
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                return;
            }
        }
        if (shapeFlag & 8) {
            if (prevShapeFlag & 16) unmountChildren(c1, parentComponent, parentSuspense);
            if (c2 !== c1) hostSetElementText(container, c2);
        } else if (prevShapeFlag & 16) {
            if (shapeFlag & 16) patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else unmountChildren(c1, parentComponent, parentSuspense, true);
        } else {
            if (prevShapeFlag & 8) hostSetElementText(container, "");
            if (shapeFlag & 16) mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        c1 = c1 || EMPTY_ARR;
        c2 = c2 || EMPTY_ARR;
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for(i = 0; i < commonLength; i++){
            const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
        if (oldLength > newLength) unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        else mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized)=>{
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1;
        let e2 = l2 - 1;
        while(i <= e1 && i <= e2){
            const n1 = c1[i];
            const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else break;
            i++;
        }
        while(i <= e1 && i <= e2){
            const n1 = c1[e1];
            const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            else break;
            e1--;
            e2--;
        }
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while(i <= e2){
                    patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                    i++;
                }
            }
        } else if (i > e2) while(i <= e1){
            unmount(c1[i], parentComponent, parentSuspense, true);
            i++;
        }
        else {
            const s1 = i;
            const s2 = i;
            const keyToNewIndexMap = /* @__PURE__ */ new Map();
            for(i = s2; i <= e2; i++){
                const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                if (nextChild.key != null) {
                    if (keyToNewIndexMap.has(nextChild.key)) warn$1(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            let maxNewIndexSoFar = 0;
            const newIndexToOldIndexMap = new Array(toBePatched);
            for(i = 0; i < toBePatched; i++)newIndexToOldIndexMap[i] = 0;
            for(i = s1; i <= e1; i++){
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
                else {
                    for(j = s2; j <= e2; j++)if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                        newIndex = j;
                        break;
                    }
                }
                if (newIndex === void 0) unmount(prevChild, parentComponent, parentSuspense, true);
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
                    else moved = true;
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                    patched++;
                }
            }
            const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            for(i = toBePatched - 1; i >= 0; i--){
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) patch(null, nextChild, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
                else if (moved) {
                    if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2);
                    else j--;
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null)=>{
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for(let i = 0; i < children.length; i++)move(children[i], container, anchor, moveType);
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
        if (needTransition2) {
            if (moveType === 0) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(()=>transition.enter(el), parentSuspense);
            } else {
                const { leave, delayLeave, afterLeave } = transition;
                const remove2 = ()=>hostInsert(el, container, anchor);
                const performLeave = ()=>{
                    leave(el, ()=>{
                        remove2();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) delayLeave(el, remove2, performLeave);
                else performLeave();
            }
        } else hostInsert(el, container, anchor);
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false)=>{
        const { type, props, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
        if (ref != null) setRef(ref, null, parentSuspense, vnode, true);
        if (shapeFlag & 256) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        if (shapeFlag & 6) unmountComponent(vnode.component, parentSuspense, doRemove);
        else {
            if (shapeFlag & 128) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
            if (shapeFlag & 64) vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
            (type !== Fragment || patchFlag > 0 && patchFlag & 64)) unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            else if (type === Fragment && patchFlag & 384 || !optimized && shapeFlag & 16) unmountChildren(children, parentComponent, parentSuspense);
            if (doRemove) remove(vnode);
        }
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
    };
    const remove = (vnode)=>{
        const { type, el, anchor, transition } = vnode;
        if (type === Fragment) {
            if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) vnode.children.forEach((child)=>{
                if (child.type === Comment) hostRemove(child.el);
                else remove(child);
            });
            else removeFragment(el, anchor);
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = ()=>{
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
        };
        if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
            const { leave, delayLeave } = transition;
            const performLeave = ()=>leave(el, performRemove);
            if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
            else performLeave();
        } else performRemove();
    };
    const removeFragment = (cur, end)=>{
        let next;
        while(cur !== end){
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove)=>{
        if (instance.type.__hmrId) unregisterHMR(instance);
        const { bum, scope, update, subTree, um } = instance;
        if (bum) invokeArrayFns(bum);
        scope.stop();
        if (update) {
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        if (um) queuePostRenderEffect(um, parentSuspense);
        queuePostRenderEffect(()=>{
            instance.isUnmounted = true;
        }, parentSuspense);
        if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) parentSuspense.resolve();
        }
        devtoolsComponentRemoved(instance);
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0)=>{
        for(let i = start; i < children.length; i++)unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    };
    const getNextHostNode = (vnode)=>{
        if (vnode.shapeFlag & 6) return getNextHostNode(vnode.component.subTree);
        if (vnode.shapeFlag & 128) return vnode.suspense.next();
        return hostNextSibling(vnode.anchor || vnode.el);
    };
    let isFlushing = false;
    const render = (vnode, container, namespace)=>{
        if (vnode == null) {
            if (container._vnode) unmount(container._vnode, null, null, true);
        } else patch(container._vnode || null, vnode, container, null, null, null, namespace);
        if (!isFlushing) {
            isFlushing = true;
            flushPreFlushCbs();
            flushPostFlushCbs();
            isFlushing = false;
        }
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
    return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect, update }, allowed) {
    effect.allowRecurse = update.allowRecurse = allowed;
}
function needTransition(parentSuspense, transition) {
    return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray(ch1) && isArray(ch2)) for(let i = 0; i < ch1.length; i++){
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
            if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
                c2 = ch2[i] = cloneIfMounted(ch2[i]);
                c2.el = c1.el;
            }
            if (!shallow) traverseStaticChildren(c1, c2);
        }
        if (c2.type === Text) c2.el = c1.el;
        if (c2.type === Comment && !c2.el) c2.el = c1.el;
    }
}
function getSequence(arr) {
    const p = arr.slice();
    const result = [
        0
    ];
    let i, j, u, v1, c;
    const len = arr.length;
    for(i = 0; i < len; i++){
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v1 = result.length - 1;
            while(u < v1){
                c = u + v1 >> 1;
                if (arr[result[c]] < arrI) u = c + 1;
                else v1 = c;
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) p[i] = result[u - 1];
                result[u] = i;
            }
        }
    }
    u = result.length;
    v1 = result[u - 1];
    while(u-- > 0){
        result[u] = v1;
        v1 = p[v1];
    }
    return result;
}
function locateNonHydratedAsyncRoot(instance) {
    const subComponent = instance.subTree.component;
    if (subComponent) {
        if (subComponent.asyncDep && !subComponent.asyncResolved) return subComponent;
        else return locateNonHydratedAsyncRoot(subComponent);
    }
}
const isTeleport = (type)=>type.__isTeleport;
const isTeleportDisabled = (props)=>props && (props.disabled || props.disabled === "");
const isTargetSVG = (target)=>typeof SVGElement !== "undefined" && target instanceof SVGElement;
const isTargetMathML = (target)=>typeof MathMLElement === "function" && target instanceof MathMLElement;
const resolveTarget = (props, select)=>{
    const targetSelector = props && props.to;
    if (isString(targetSelector)) {
        if (!select) {
            warn$1(`Current renderer does not support string target for Teleports. (missing querySelector renderer option)`);
            return null;
        } else {
            const target = select(targetSelector);
            if (!target) warn$1(`Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`);
            return target;
        }
    } else {
        if (!targetSelector && !isTeleportDisabled(props)) warn$1(`Invalid Teleport target: ${targetSelector}`);
        return targetSelector;
    }
};
const TeleportImpl = {
    name: "Teleport",
    __isTeleport: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
        const { mc: mountChildren, pc: patchChildren, pbc: patchBlockChildren, o: { insert, querySelector, createText, createComment } } = internals;
        const disabled = isTeleportDisabled(n2.props);
        let { shapeFlag, children, dynamicChildren } = n2;
        if (isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
        }
        if (n1 == null) {
            const placeholder = n2.el = createComment("teleport start");
            const mainAnchor = n2.anchor = createComment("teleport end");
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = n2.target = resolveTarget(n2.props, querySelector);
            const targetAnchor = n2.targetAnchor = createText("");
            if (target) {
                insert(targetAnchor, target);
                if (namespace === "svg" || isTargetSVG(target)) namespace = "svg";
                else if (namespace === "mathml" || isTargetMathML(target)) namespace = "mathml";
            } else if (!disabled) warn$1("Invalid Teleport target on mount:", target, `(${typeof target})`);
            const mount = (container2, anchor2)=>{
                if (shapeFlag & 16) mountChildren(children, container2, anchor2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
            };
            if (disabled) mount(container, mainAnchor);
            else if (target) mount(target, targetAnchor);
        } else {
            n2.el = n1.el;
            const mainAnchor = n2.anchor = n1.anchor;
            const target = n2.target = n1.target;
            const targetAnchor = n2.targetAnchor = n1.targetAnchor;
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            if (namespace === "svg" || isTargetSVG(target)) namespace = "svg";
            else if (namespace === "mathml" || isTargetMathML(target)) namespace = "mathml";
            if (dynamicChildren) {
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, namespace, slotScopeIds);
                traverseStaticChildren(n1, n2, true);
            } else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, false);
            if (disabled) {
                if (!wasDisabled) moveTeleport(n2, container, mainAnchor, internals, 1);
                else if (n2.props && n1.props && n2.props.to !== n1.props.to) n2.props.to = n1.props.to;
            } else {
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
                    if (nextTarget) moveTeleport(n2, nextTarget, null, internals, 0);
                    else warn$1("Invalid Teleport target on update:", target, `(${typeof target})`);
                } else if (wasDisabled) moveTeleport(n2, target, targetAnchor, internals, 1);
            }
        }
        updateCssVars(n2);
    },
    remove (vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
        const { shapeFlag, children, anchor, targetAnchor, target, props } = vnode;
        if (target) hostRemove(targetAnchor);
        doRemove && hostRemove(anchor);
        if (shapeFlag & 16) {
            const shouldRemove = doRemove || !isTeleportDisabled(props);
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                unmount(child, parentComponent, parentSuspense, shouldRemove, !!child.dynamicChildren);
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
    if (moveType === 0) insert(vnode.targetAnchor, container, parentAnchor);
    const { el, anchor, shapeFlag, children, props } = vnode;
    const isReorder = moveType === 2;
    if (isReorder) insert(el, container, parentAnchor);
    if (!isReorder || isTeleportDisabled(props)) {
        if (shapeFlag & 16) for(let i = 0; i < children.length; i++)move(children[i], container, parentAnchor, 2);
    }
    if (isReorder) insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling, parentNode, querySelector } }, hydrateChildren) {
    const target = vnode.target = resolveTarget(vnode.props, querySelector);
    if (target) {
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                vnode.targetAnchor = targetNode;
            } else {
                vnode.anchor = nextSibling(node);
                let targetAnchor = targetNode;
                while(targetAnchor){
                    targetAnchor = nextSibling(targetAnchor);
                    if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
                        vnode.targetAnchor = targetAnchor;
                        target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                        break;
                    }
                }
                hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
        }
        updateCssVars(vnode);
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
const Teleport = TeleportImpl;
function updateCssVars(vnode) {
    const ctx = vnode.ctx;
    if (ctx && ctx.ut) {
        let node = vnode.children[0].el;
        while(node && node !== vnode.targetAnchor){
            if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
            node = node.nextSibling;
        }
        ctx.ut();
    }
}
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
const blockStack = [];
let currentBlock = null;
function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
let isBlockTreeEnabled = 1;
function setBlockTracking(value) {
    isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
    closeBlock();
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
    return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
        n1.shapeFlag &= -257;
        n2.shapeFlag &= -513;
        return false;
    }
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args)=>{
    return _createVNode(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key })=>key != null ? key : null;
const normalizeRef = ({ ref, ref_key, ref_for })=>{
    if (typeof ref === "number") ref = "" + ref;
    return ref != null ? isString(ref) || isRef(ref) || isFunction(ref) ? {
        i: currentRenderingInstance,
        r: ref,
        k: ref_key,
        f: !!ref_for
    } : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null,
        ctx: currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        if (shapeFlag & 128) type.normalize(vnode);
    } else if (children) vnode.shapeFlag |= isString(children) ? 8 : 16;
    if (vnode.key !== vnode.key) warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32) currentBlock.push(vnode);
    return vnode;
}
const createVNode = createVNodeWithArgsTransform;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (!type) warn$1(`Invalid vnode type when creating vnode: ${type}.`);
        type = Comment;
    }
    if (isVNode(type)) {
        const cloned = cloneVNode(type, props, true);
        if (children) normalizeChildren(cloned, children);
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
            if (cloned.shapeFlag & 6) currentBlock[currentBlock.indexOf(type)] = cloned;
            else currentBlock.push(cloned);
        }
        cloned.patchFlag |= -2;
        return cloned;
    }
    if (isClassComponent(type)) type = type.__vccOpts;
    if (props) {
        props = guardReactiveProps(props);
        let { class: klass, style } = props;
        if (klass && !isString(klass)) props.class = normalizeClass(klass);
        if (isObject(style)) {
            if (isProxy(style) && !isArray(style)) style = extend({}, style);
            props.style = normalizeStyle(style);
        }
    }
    const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
    if (shapeFlag & 4 && isProxy(type)) {
        type = toRaw(type);
        warn$1(`Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
    }
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
    if (!props) return null;
    return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
    const { props, ref, patchFlag, children } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref ? // #2078 in the case of <component :is="vnode" ref="extra"/>
        // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref ? isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [
            ref,
            normalizeRef(extraProps)
        ] : normalizeRef(extraProps) : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children: patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor,
        ctx: vnode.ctx,
        ce: vnode.ce
    };
    return cloned;
}
function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (isArray(vnode.children)) cloned.children = vnode.children.map(deepCloneVNode);
    return cloned;
}
function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
}
function createStaticVNode(content, numberOfNodes) {
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
function createCommentVNode(text = "", asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") return createVNode(Comment);
    else if (isArray(child)) return createVNode(Fragment, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
    else if (typeof child === "object") return cloneIfMounted(child);
    else return createVNode(Text, null, String(child));
}
function cloneIfMounted(child) {
    return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) children = null;
    else if (isArray(children)) type = 16;
    else if (typeof children === "object") {
        if (shapeFlag & 65) {
            const slot = children.default;
            if (slot) {
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        } else {
            type = 32;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) children._ctx = currentRenderingInstance;
            else if (slotFlag === 3 && currentRenderingInstance) {
                if (currentRenderingInstance.slots._ === 1) children._ = 1;
                else {
                    children._ = 2;
                    vnode.patchFlag |= 1024;
                }
            }
        }
    } else if (isFunction(children)) {
        children = {
            default: children,
            _ctx: currentRenderingInstance
        };
        type = 32;
    } else {
        children = String(children);
        if (shapeFlag & 64) {
            type = 16;
            children = [
                createTextVNode(children)
            ];
        } else type = 8;
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = {};
    for(let i = 0; i < args.length; i++){
        const toMerge = args[i];
        for(const key in toMerge){
            if (key === "class") {
                if (ret.class !== toMerge.class) ret.class = normalizeClass([
                    ret.class,
                    toMerge.class
                ]);
            } else if (key === "style") ret.style = normalizeStyle([
                ret.style,
                toMerge.style
            ]);
            else if (isOn(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
            } else if (key !== "") ret[key] = toMerge[key];
        }
    }
    return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7, [
        vnode,
        prevVNode
    ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        // to be immediately set
        next: null,
        subTree: null,
        // will be set synchronously right after creation
        effect: null,
        update: null,
        // will be set synchronously right after creation
        scope: new EffectScope(true),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resolved assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        // to be set immediately
        emitted: null,
        // props default value
        propsDefaults: EMPTY_OBJ,
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: EMPTY_OBJ,
        data: EMPTY_OBJ,
        props: EMPTY_OBJ,
        attrs: EMPTY_OBJ,
        slots: EMPTY_OBJ,
        refs: EMPTY_OBJ,
        setupState: EMPTY_OBJ,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    instance.ctx = createDevRenderContext(instance);
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    if (vnode.ce) vnode.ce(instance);
    return instance;
}
let currentInstance = null;
const getCurrentInstance = ()=>currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
internalSetCurrentInstance = (i)=>{
    currentInstance = i;
};
setInSSRSetupState = (v1)=>{
    isInSSRComponentSetup = v1;
};
const setCurrentInstance = (instance)=>{
    const prev = currentInstance;
    internalSetCurrentInstance(instance);
    instance.scope.on();
    return ()=>{
        instance.scope.off();
        internalSetCurrentInstance(prev);
    };
};
const unsetCurrentInstance = ()=>{
    currentInstance && currentInstance.scope.off();
    internalSetCurrentInstance(null);
};
const isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || NO;
    if (isBuiltInTag(name) || appIsNativeTag(name)) warn$1("Do not use built-in or reserved HTML elements as component id: " + name);
}
function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isSSR && setInSSRSetupState(isSSR);
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
    isSSR && setInSSRSetupState(false);
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    var _a;
    const Component = instance.type;
    if (Component.name) validateComponentName(Component.name, instance.appContext.config);
    if (Component.components) {
        const names = Object.keys(Component.components);
        for(let i = 0; i < names.length; i++)validateComponentName(names[i], instance.appContext.config);
    }
    if (Component.directives) {
        const names = Object.keys(Component.directives);
        for(let i = 0; i < names.length; i++)validateDirectiveName(names[i]);
    }
    if (Component.compilerOptions && isRuntimeOnly()) warn$1(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
    instance.accessCache = /* @__PURE__ */ Object.create(null);
    instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    exposePropsOnRenderContext(instance);
    const { setup } = Component;
    if (setup) {
        const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
        const reset = setCurrentInstance(instance);
        pauseTracking();
        const setupResult = callWithErrorHandling(setup, instance, 0, [
            shallowReadonly(instance.props),
            setupContext
        ]);
        resetTracking();
        reset();
        if (isPromise(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) return setupResult.then((resolvedResult)=>{
                handleSetupResult(instance, resolvedResult, isSSR);
            }).catch((e)=>{
                handleError(e, instance, 0);
            });
            else {
                instance.asyncDep = setupResult;
                if (!instance.suspense) {
                    const name = (_a = Component.name) != null ? _a : "Anonymous";
                    warn$1(`Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
                }
            }
        } else handleSetupResult(instance, setupResult, isSSR);
    } else finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction(setupResult)) instance.render = setupResult;
    else if (isObject(setupResult)) {
        if (isVNode(setupResult)) warn$1(`setup() should not return VNodes directly - return a render function instead.`);
        instance.devtoolsRawSetupState = setupResult;
        instance.setupState = proxyRefs(setupResult);
        exposeSetupStateOnRenderContext(instance);
    } else if (setupResult !== void 0) warn$1(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
    finishComponentSetup(instance, isSSR);
}
let compile$1;
let installWithProxy;
function registerRuntimeCompiler(_compile) {
    compile$1 = _compile;
    installWithProxy = (i)=>{
        if (i.render._rc) i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    };
}
const isRuntimeOnly = ()=>!compile$1;
function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
        if (!isSSR && compile$1 && !Component.render) {
            const template = Component.template || resolveMergedOptions(instance).template;
            if (template) {
                startMeasure(instance, `compile`);
                const { isCustomElement, compilerOptions } = instance.appContext.config;
                const { delimiters, compilerOptions: componentCompilerOptions } = Component;
                const finalCompilerOptions = extend(extend({
                    isCustomElement,
                    delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = compile$1(template, finalCompilerOptions);
                endMeasure(instance, `compile`);
            }
        }
        instance.render = Component.render || NOOP;
        if (installWithProxy) installWithProxy(instance);
    }
    {
        const reset = setCurrentInstance(instance);
        pauseTracking();
        try {
            applyOptions(instance);
        } finally{
            resetTracking();
            reset();
        }
    }
    if (!Component.render && instance.render === NOOP && !isSSR) {
        if (!compile$1 && Component.template) warn$1(`Component provided template option but runtime compilation is not supported in this build of Vue.` + ` Use "vue.esm-browser.js" instead.`);
        else warn$1(`Component is missing template or render function.`);
    }
}
function getAttrsProxy(instance) {
    return instance.attrsProxy || (instance.attrsProxy = new Proxy(instance.attrs, {
        get (target, key) {
            markAttrsAccessed();
            track(instance, "get", "$attrs");
            return target[key];
        },
        set () {
            warn$1(`setupContext.attrs is readonly.`);
            return false;
        },
        deleteProperty () {
            warn$1(`setupContext.attrs is readonly.`);
            return false;
        }
    }));
}
function getSlotsProxy(instance) {
    return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
        get (target, key) {
            track(instance, "get", "$slots");
            return target[key];
        }
    }));
}
function createSetupContext(instance) {
    const expose = (exposed)=>{
        if (instance.exposed) warn$1(`expose() should be called only once per setup().`);
        if (exposed != null) {
            let exposedType = typeof exposed;
            if (exposedType === "object") {
                if (isArray(exposed)) exposedType = "array";
                else if (isRef(exposed)) exposedType = "ref";
            }
            if (exposedType !== "object") warn$1(`expose() should be passed a plain object, received ${exposedType}.`);
        }
        instance.exposed = exposed || {};
    };
    return Object.freeze({
        get attrs () {
            return getAttrsProxy(instance);
        },
        get slots () {
            return getSlotsProxy(instance);
        },
        get emit () {
            return (event, ...args)=>instance.emit(event, ...args);
        },
        expose
    });
}
function getExposeProxy(instance) {
    if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
        get (target, key) {
            if (key in target) return target[key];
            else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
        },
        has (target, key) {
            return key in target || key in publicPropertiesMap;
        }
    }));
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str)=>str.replace(classifyRE, (c)=>c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
    return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) name = match[1];
    }
    if (!name && instance && instance.parent) {
        const inferFromRegistry = (registry)=>{
            for(const key in registry){
                if (registry[key] === Component) return key;
            }
        };
        name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions)=>{
    return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
function useModel(props, name, options = EMPTY_OBJ) {
    const i = getCurrentInstance();
    if (!i) {
        warn$1(`useModel() called without active instance.`);
        return ref();
    }
    if (!i.propsOptions[0][name]) {
        warn$1(`useModel() called with prop "${name}" which is not declared.`);
        return ref();
    }
    const camelizedName = camelize(name);
    const hyphenatedName = hyphenate(name);
    const res = customRef((track, trigger)=>{
        let localValue;
        watchSyncEffect(()=>{
            const propValue = props[name];
            if (hasChanged(localValue, propValue)) {
                localValue = propValue;
                trigger();
            }
        });
        return {
            get () {
                track();
                return options.get ? options.get(localValue) : localValue;
            },
            set (value) {
                const rawProps = i.vnode.props;
                if (!(rawProps && // check if parent has passed v-model
                (name in rawProps || camelizedName in rawProps || hyphenatedName in rawProps) && (`onUpdate:${name}` in rawProps || `onUpdate:${camelizedName}` in rawProps || `onUpdate:${hyphenatedName}` in rawProps)) && hasChanged(value, localValue)) {
                    localValue = value;
                    trigger();
                }
                i.emit(`update:${name}`, options.set ? options.set(value) : value);
            }
        };
    });
    const modifierKey = name === "modelValue" ? "modelModifiers" : `${name}Modifiers`;
    res[Symbol.iterator] = ()=>{
        let i2 = 0;
        return {
            next () {
                if (i2 < 2) return {
                    value: i2++ ? props[modifierKey] || {} : res,
                    done: false
                };
                else return {
                    done: true
                };
            }
        };
    };
    return res;
}
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
            if (isVNode(propsOrChildren)) return createVNode(type, null, [
                propsOrChildren
            ]);
            return createVNode(type, propsOrChildren);
        } else return createVNode(type, null, propsOrChildren);
    } else {
        if (l > 3) children = Array.prototype.slice.call(arguments, 2);
        else if (l === 3 && isVNode(children)) children = [
            children
        ];
        return createVNode(type, propsOrChildren, children);
    }
}
function initCustomFormatter() {
    if (typeof window === "undefined") return;
    const vueStyle = {
        style: "color:#3ba776"
    };
    const numberStyle = {
        style: "color:#1677ff"
    };
    const stringStyle = {
        style: "color:#f5222d"
    };
    const keywordStyle = {
        style: "color:#eb2f96"
    };
    const formatter = {
        header (obj) {
            if (!isObject(obj)) return null;
            if (obj.__isVue) return [
                "div",
                vueStyle,
                `VueInstance`
            ];
            else if (isRef(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    genRefFlag(obj)
                ],
                "<",
                formatValue(obj.value),
                `>`
            ];
            else if (isReactive(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    isShallow(obj) ? "ShallowReactive" : "Reactive"
                ],
                "<",
                formatValue(obj),
                `>${isReadonly(obj) ? ` (readonly)` : ``}`
            ];
            else if (isReadonly(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    isShallow(obj) ? "ShallowReadonly" : "Readonly"
                ],
                "<",
                formatValue(obj),
                ">"
            ];
            return null;
        },
        hasBody (obj) {
            return obj && obj.__isVue;
        },
        body (obj) {
            if (obj && obj.__isVue) return [
                "div",
                {},
                ...formatInstance(obj.$)
            ];
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) blocks.push(createInstanceBlock("props", toRaw(instance.props)));
        if (instance.setupState !== EMPTY_OBJ) blocks.push(createInstanceBlock("setup", instance.setupState));
        if (instance.data !== EMPTY_OBJ) blocks.push(createInstanceBlock("data", toRaw(instance.data)));
        const computed = extractKeys(instance, "computed");
        if (computed) blocks.push(createInstanceBlock("computed", computed));
        const injected = extractKeys(instance, "inject");
        if (injected) blocks.push(createInstanceBlock("injected", injected));
        blocks.push([
            "div",
            {},
            [
                "span",
                {
                    style: keywordStyle.style + ";opacity:0.66"
                },
                "$ (internal): "
            ],
            [
                "object",
                {
                    object: instance
                }
            ]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = extend({}, target);
        if (!Object.keys(target).length) return [
            "span",
            {}
        ];
        return [
            "div",
            {
                style: "line-height:1.25em;margin-bottom:0.6em"
            },
            [
                "div",
                {
                    style: "color:#476582"
                },
                type
            ],
            [
                "div",
                {
                    style: "padding-left:1.25em"
                },
                ...Object.keys(target).map((key)=>{
                    return [
                        "div",
                        {},
                        [
                            "span",
                            keywordStyle,
                            key + ": "
                        ],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v1, asRaw = true) {
        if (typeof v1 === "number") return [
            "span",
            numberStyle,
            v1
        ];
        else if (typeof v1 === "string") return [
            "span",
            stringStyle,
            JSON.stringify(v1)
        ];
        else if (typeof v1 === "boolean") return [
            "span",
            keywordStyle,
            v1
        ];
        else if (isObject(v1)) return [
            "object",
            {
                object: asRaw ? toRaw(v1) : v1
            }
        ];
        else return [
            "span",
            stringStyle,
            String(v1)
        ];
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if (isFunction(Comp)) return;
        const extracted = {};
        for(const key in instance.ctx)if (isKeyOfType(Comp, key, type)) extracted[key] = instance.ctx[key];
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) return true;
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) return true;
        if (Comp.mixins && Comp.mixins.some((m)=>isKeyOfType(m, key, type))) return true;
    }
    function genRefFlag(v1) {
        if (isShallow(v1)) return `ShallowRef`;
        if (v1.effect) return `ComputedRef`;
        return `Ref`;
    }
    if (window.devtoolsFormatters) window.devtoolsFormatters.push(formatter);
    else window.devtoolsFormatters = [
        formatter
    ];
}
function withMemo(memo, render, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) return cached;
    const ret = render();
    ret.memo = memo.slice();
    return cache[index] = ret;
}
function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) return false;
    for(let i = 0; i < prev.length; i++){
        if (hasChanged(prev[i], memo[i])) return false;
    }
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(cached);
    return true;
}
const version = "3.4.10";
const warn = warn$1;
const ErrorTypeStrings = ErrorTypeStrings$1;
const devtools = devtools$1;
const setDevtoolsHook = setDevtoolsHook$1;
const ssrUtils = null;
const resolveFilter = null;
const compatUtils = null;
const DeprecationTypes = null;
const svgNS = "http://www.w3.org/2000/svg";
const mathmlNS = "http://www.w3.org/1998/Math/MathML";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
const nodeOps = {
    insert: (child, parent, anchor)=>{
        parent.insertBefore(child, anchor || null);
    },
    remove: (child)=>{
        const parent = child.parentNode;
        if (parent) parent.removeChild(child);
    },
    createElement: (tag, namespace, is, props)=>{
        const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : doc.createElement(tag, is ? {
            is
        } : void 0);
        if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
        return el;
    },
    createText: (text)=>doc.createTextNode(text),
    createComment: (text)=>doc.createComment(text),
    setText: (node, text)=>{
        node.nodeValue = text;
    },
    setElementText: (el, text)=>{
        el.textContent = text;
    },
    parentNode: (node)=>node.parentNode,
    nextSibling: (node)=>node.nextSibling,
    querySelector: (selector)=>doc.querySelector(selector),
    setScopeId (el, id) {
        el.setAttribute(id, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent (content, parent, anchor, namespace, start, end) {
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        if (start && (start === end || start.nextSibling)) while(true){
            parent.insertBefore(start.cloneNode(true), anchor);
            if (start === end || !(start = start.nextSibling)) break;
        }
        else {
            templateContainer.innerHTML = namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content;
            const template = templateContainer.content;
            if (namespace === "svg" || namespace === "mathml") {
                const wrapper = template.firstChild;
                while(wrapper.firstChild)template.appendChild(wrapper.firstChild);
                template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
        }
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};
const TRANSITION$1 = "transition";
const ANIMATION = "animation";
const vtcKey = Symbol("_vtc");
const Transition = (props, { slots })=>h(BaseTransition, resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [
        String,
        Number,
        Object
    ],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /* @__PURE__ */ extend({}, BaseTransitionPropsValidators, DOMTransitionPropsValidators);
const callHook = (hook, args = [])=>{
    if (isArray(hook)) hook.forEach((h2)=>h2(...args));
    else if (hook) hook(...args);
};
const hasExplicitCallback = (hook)=>{
    return hook ? isArray(hook) ? hook.some((h2)=>h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for(const key in rawProps)if (!(key in DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
    if (rawProps.css === false) return baseProps;
    const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done)=>{
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done)=>{
        el._isLeaving = false;
        removeTransitionClass(el, leaveFromClass);
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear)=>{
        return (el, done)=>{
            const hook = isAppear ? onAppear : onEnter;
            const resolve = ()=>finishEnter(el, isAppear, done);
            callHook(hook, [
                el,
                resolve
            ]);
            nextFrame(()=>{
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!hasExplicitCallback(hook)) whenTransitionEnds(el, type, enterDuration, resolve);
            });
        };
    };
    return extend(baseProps, {
        onBeforeEnter (el) {
            callHook(onBeforeEnter, [
                el
            ]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear (el) {
            callHook(onBeforeAppear, [
                el
            ]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave (el, done) {
            el._isLeaving = true;
            const resolve = ()=>finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(()=>{
                if (!el._isLeaving) return;
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!hasExplicitCallback(onLeave)) whenTransitionEnds(el, type, leaveDuration, resolve);
            });
            callHook(onLeave, [
                el,
                resolve
            ]);
        },
        onEnterCancelled (el) {
            finishEnter(el, false);
            callHook(onEnterCancelled, [
                el
            ]);
        },
        onAppearCancelled (el) {
            finishEnter(el, true);
            callHook(onAppearCancelled, [
                el
            ]);
        },
        onLeaveCancelled (el) {
            finishLeave(el);
            callHook(onLeaveCancelled, [
                el
            ]);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) return null;
    else if (isObject(duration)) return [
        NumberOf(duration.enter),
        NumberOf(duration.leave)
    ];
    else {
        const n = NumberOf(duration);
        return [
            n,
            n
        ];
    }
}
function NumberOf(val) {
    const res = toNumber(val);
    assertNumber(res, "<transition> explicit duration");
    return res;
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.add(c));
    (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.remove(c));
    const _vtc = el[vtcKey];
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) el[vtcKey] = void 0;
    }
}
function nextFrame(cb) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = el._endId = ++endId;
    const resolveIfNotStale = ()=>{
        if (id === el._endId) resolve();
    };
    if (explicitTimeout) return setTimeout(resolveIfNotStale, explicitTimeout);
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) return resolve();
    const endEvent = type + "end";
    let ended = 0;
    const end = ()=>{
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e)=>{
        if (e.target === el && ++ended >= propCount) end();
    };
    setTimeout(()=>{
        if (ended < propCount) end();
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    const getStyleProperties = (key)=>(styles[key] || "").split(", ");
    const transitionDelays = getStyleProperties(`${TRANSITION$1}Delay`);
    const transitionDurations = getStyleProperties(`${TRANSITION$1}Duration`);
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
    const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    if (expectedType === TRANSITION$1) {
        if (transitionTimeout > 0) {
            type = TRANSITION$1;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION$1 : ANIMATION : null;
        propCount = type ? type === TRANSITION$1 ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION$1 && /\b(transform|all)(,|$)/.test(getStyleProperties(`${TRANSITION$1}Property`).toString());
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while(delays.length < durations.length)delays = delays.concat(delays);
    return Math.max(...durations.map((d, i)=>toMs(d) + toMs(delays[i])));
}
function toMs(s) {
    if (s === "auto") return 0;
    return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow() {
    return document.body.offsetHeight;
}
function patchClass(el, value, isSVG) {
    const transitionClasses = el[vtcKey];
    if (transitionClasses) value = (value ? [
        value,
        ...transitionClasses
    ] : [
        ...transitionClasses
    ]).join(" ");
    if (value == null) el.removeAttribute("class");
    else if (isSVG) el.setAttribute("class", value);
    else el.className = value;
}
const vShowOldKey = Symbol("_vod");
const vShow = {
    beforeMount (el, { value }, { transition }) {
        el[vShowOldKey] = el.style.display === "none" ? "" : el.style.display;
        if (transition && value) transition.beforeEnter(el);
        else setDisplay(el, value);
    },
    mounted (el, { value }, { transition }) {
        if (transition && value) transition.enter(el);
    },
    updated (el, { value, oldValue }, { transition }) {
        if (!value === !oldValue) return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            } else transition.leave(el, ()=>{
                setDisplay(el, false);
            });
        } else setDisplay(el, value);
    },
    beforeUnmount (el, { value }) {
        setDisplay(el, value);
    }
};
vShow.name = "show";
function setDisplay(el, value) {
    el.style.display = value ? el[vShowOldKey] : "none";
}
const CSS_VAR_TEXT = Symbol("CSS_VAR_TEXT");
function useCssVars(getter) {
    const instance = getCurrentInstance();
    if (!instance) {
        warn(`useCssVars is called without current active component instance.`);
        return;
    }
    const updateTeleports = instance.ut = (vars = getter(instance.proxy))=>{
        Array.from(document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)).forEach((node)=>setVarsOnNode(node, vars));
    };
    const setVars = ()=>{
        const vars = getter(instance.proxy);
        setVarsOnVNode(instance.subTree, vars);
        updateTeleports(vars);
    };
    watchPostEffect(setVars);
    onMounted(()=>{
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, {
            childList: true
        });
        onUnmounted(()=>ob.disconnect());
    });
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) suspense.effects.push(()=>{
            setVarsOnVNode(suspense.activeBranch, vars);
        });
    }
    while(vnode.component)vnode = vnode.component.subTree;
    if (vnode.shapeFlag & 1 && vnode.el) setVarsOnNode(vnode.el, vars);
    else if (vnode.type === Fragment) vnode.children.forEach((c)=>setVarsOnVNode(c, vars));
    else if (vnode.type === Static) {
        let { el, anchor } = vnode;
        while(el){
            setVarsOnNode(el, vars);
            if (el === anchor) break;
            el = el.nextSibling;
        }
    }
}
function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        let cssText = "";
        for(const key in vars){
            style.setProperty(`--${key}`, vars[key]);
            cssText += `--${key}: ${vars[key]};`;
        }
        style[CSS_VAR_TEXT] = cssText;
    }
}
function patchStyle(el, prev, next) {
    const style = el.style;
    const currentDisplay = style.display;
    const isCssString = isString(next);
    if (next && !isCssString) {
        if (prev && !isString(prev)) {
            for(const key in prev)if (next[key] == null) setStyle(style, key, "");
        }
        for(const key in next)setStyle(style, key, next[key]);
    } else {
        if (isCssString) {
            if (prev !== next) {
                const cssVarText = style[CSS_VAR_TEXT];
                if (cssVarText) next += ";" + cssVarText;
                style.cssText = next;
            }
        } else if (prev) el.removeAttribute("style");
    }
    if (vShowOldKey in el) style.display = currentDisplay;
}
const semicolonRE = /[^\\];\s*$/;
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if (isArray(val)) val.forEach((v1)=>setStyle(style, name, v1));
    else {
        if (val == null) val = "";
        if (semicolonRE.test(val)) warn(`Unexpected semicolon at the end of '${name}' style value: '${val}'`);
        if (name.startsWith("--")) style.setProperty(name, val);
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
            else style[prefixed] = val;
        }
    }
}
const prefixes = [
    "Webkit",
    "Moz",
    "ms"
];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) return cached;
    let name = camelize(rawName);
    if (name !== "filter" && name in style) return prefixCache[rawName] = name;
    name = capitalize(name);
    for(let i = 0; i < prefixes.length; i++){
        const prefixed = prefixes[i] + name;
        if (prefixed in style) return prefixCache[rawName] = prefixed;
    }
    return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith("xlink:")) {
        if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        else el.setAttributeNS(xlinkNS, key, value);
    } else {
        const isBoolean = isSpecialBooleanAttr(key);
        if (value == null || isBoolean && !includeBooleanAttr(value)) el.removeAttribute(key);
        else el.setAttribute(key, isBoolean ? "" : value);
    }
}
function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === "innerHTML" || key === "textContent") {
        if (prevChildren) unmountChildren(prevChildren, parentComponent, parentSuspense);
        el[key] = value == null ? "" : value;
        return;
    }
    const tag = el.tagName;
    if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
    !tag.includes("-")) {
        el._value = value;
        const oldValue = tag === "OPTION" ? el.getAttribute("value") : el.value;
        const newValue = value == null ? "" : value;
        if (oldValue !== newValue) el.value = newValue;
        if (value == null) el.removeAttribute(key);
        return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
        const type = typeof el[key];
        if (type === "boolean") value = includeBooleanAttr(value);
        else if (value == null && type === "string") {
            value = "";
            needRemove = true;
        } else if (type === "number") {
            value = 0;
            needRemove = true;
        }
    }
    try {
        el[key] = value;
    } catch (e) {
        if (!needRemove) warn(`Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`, e);
    }
    needRemove && el.removeAttribute(key);
}
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
const veiKey = Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    const invokers = el[veiKey] || (el[veiKey] = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) existingInvoker.value = nextValue;
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            const invoker = invokers[rawName] = createInvoker(nextValue, instance);
            addEventListener(el, name, invoker, options);
        } else if (existingInvoker) {
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = void 0;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while(m = name.match(optionsModifierRE)){
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
    return [
        event,
        options
    ];
}
let cachedNow = 0;
const p = /* @__PURE__ */ Promise.resolve();
const getNow = ()=>cachedNow || (p.then(()=>cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
    const invoker = (e)=>{
        if (!e._vts) e._vts = Date.now();
        else if (e._vts <= invoker.attached) return;
        callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [
            e
        ]);
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if (isArray(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = ()=>{
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map((fn)=>(e2)=>!e2._stopped && fn && fn(e2));
    } else return value;
}
const isNativeOn = (key)=>key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
    key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
const patchProp = (el, key, prevValue, nextValue, namespace, prevChildren, parentComponent, parentSuspense, unmountChildren)=>{
    const isSVG = namespace === "svg";
    if (key === "class") patchClass(el, nextValue, isSVG);
    else if (key === "style") patchStyle(el, prevValue, nextValue);
    else if (isOn(key)) {
        if (!isModelListener(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    else {
        if (key === "true-value") el._trueValue = nextValue;
        else if (key === "false-value") el._falseValue = nextValue;
        patchAttr(el, key, nextValue, isSVG);
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        if (key === "innerHTML" || key === "textContent") return true;
        if (key in el && isNativeOn(key) && isFunction(value)) return true;
        return false;
    }
    if (key === "spellcheck" || key === "draggable" || key === "translate") return false;
    if (key === "form") return false;
    if (key === "list" && el.tagName === "INPUT") return false;
    if (key === "type" && el.tagName === "TEXTAREA") return false;
    if (key === "width" || key === "height") {
        const tag = el.tagName;
        if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") return false;
    }
    if (isNativeOn(key) && isString(value)) return false;
    return key in el;
}
/*! #__NO_SIDE_EFFECTS__ */ // @__NO_SIDE_EFFECTS__
function defineCustomElement(options, hydrate2) {
    const Comp = defineComponent(options);
    class VueCustomElement extends VueElement {
        constructor(initialProps){
            super(Comp, initialProps, hydrate2);
        }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
}
/*! #__NO_SIDE_EFFECTS__ */ const defineSSRCustomElement = /* @__NO_SIDE_EFFECTS__ */ (options)=>{
    return /* @__PURE__ */ defineCustomElement(options, hydrate);
};
const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
class VueElement extends BaseClass {
    constructor(_def, _props = {}, hydrate2){
        super();
        this._def = _def;
        this._props = _props;
        /**
     * @internal
     */ this._instance = null;
        this._connected = false;
        this._resolved = false;
        this._numberProps = null;
        this._ob = null;
        if (this.shadowRoot && hydrate2) hydrate2(this._createVNode(), this.shadowRoot);
        else {
            if (this.shadowRoot) warn(`Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`);
            this.attachShadow({
                mode: "open"
            });
            if (!this._def.__asyncLoader) this._resolveProps(this._def);
        }
    }
    connectedCallback() {
        this._connected = true;
        if (!this._instance) {
            if (this._resolved) this._update();
            else this._resolveDef();
        }
    }
    disconnectedCallback() {
        this._connected = false;
        if (this._ob) {
            this._ob.disconnect();
            this._ob = null;
        }
        nextTick(()=>{
            if (!this._connected) {
                render(null, this.shadowRoot);
                this._instance = null;
            }
        });
    }
    /**
   * resolve inner component definition (handle possible async component)
   */ _resolveDef() {
        this._resolved = true;
        for(let i = 0; i < this.attributes.length; i++)this._setAttr(this.attributes[i].name);
        this._ob = new MutationObserver((mutations)=>{
            for (const m of mutations)this._setAttr(m.attributeName);
        });
        this._ob.observe(this, {
            attributes: true
        });
        const resolve = (def, isAsync = false)=>{
            const { props, styles } = def;
            let numberProps;
            if (props && !isArray(props)) for(const key in props){
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                    if (key in this._props) this._props[key] = toNumber(this._props[key]);
                    (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[camelize(key)] = true;
                }
            }
            this._numberProps = numberProps;
            if (isAsync) this._resolveProps(def);
            this._applyStyles(styles);
            this._update();
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) asyncDef().then((def)=>resolve(def, true));
        else resolve(this._def);
    }
    _resolveProps(def) {
        const { props } = def;
        const declaredPropKeys = isArray(props) ? props : Object.keys(props || {});
        for (const key of Object.keys(this))if (key[0] !== "_" && declaredPropKeys.includes(key)) this._setProp(key, this[key], true, false);
        for (const key of declaredPropKeys.map(camelize))Object.defineProperty(this, key, {
            get () {
                return this._getProp(key);
            },
            set (val) {
                this._setProp(key, val);
            }
        });
    }
    _setAttr(key) {
        let value = this.getAttribute(key);
        const camelKey = camelize(key);
        if (this._numberProps && this._numberProps[camelKey]) value = toNumber(value);
        this._setProp(camelKey, value, false);
    }
    /**
   * @internal
   */ _getProp(key) {
        return this._props[key];
    }
    /**
   * @internal
   */ _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
        if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) this._update();
            if (shouldReflect) {
                if (val === true) this.setAttribute(hyphenate(key), "");
                else if (typeof val === "string" || typeof val === "number") this.setAttribute(hyphenate(key), val + "");
                else if (!val) this.removeAttribute(hyphenate(key));
            }
        }
    }
    _update() {
        render(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
        const vnode = createVNode(this._def, extend({}, this._props));
        if (!this._instance) vnode.ce = (instance)=>{
            this._instance = instance;
            instance.isCE = true;
            instance.ceReload = (newStyles)=>{
                if (this._styles) {
                    this._styles.forEach((s)=>this.shadowRoot.removeChild(s));
                    this._styles.length = 0;
                }
                this._applyStyles(newStyles);
                this._instance = null;
                this._update();
            };
            const dispatch = (event, args)=>{
                this.dispatchEvent(new CustomEvent(event, {
                    detail: args
                }));
            };
            instance.emit = (event, ...args)=>{
                dispatch(event, args);
                if (hyphenate(event) !== event) dispatch(hyphenate(event), args);
            };
            let parent = this;
            while(parent = parent && (parent.parentNode || parent.host))if (parent instanceof VueElement) {
                instance.parent = parent._instance;
                instance.provides = parent._instance.provides;
                break;
            }
        };
        return vnode;
    }
    _applyStyles(styles) {
        if (styles) styles.forEach((css)=>{
            const s = document.createElement("style");
            s.textContent = css;
            this.shadowRoot.appendChild(s);
            (this._styles || (this._styles = [])).push(s);
        });
    }
}
function useCssModule(name = "$style") {
    {
        const instance = getCurrentInstance();
        if (!instance) {
            warn(`useCssModule must be called inside setup()`);
            return EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            warn(`Current instance does not have CSS modules injected.`);
            return EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            warn(`Current instance does not have CSS module named "${name}".`);
            return EMPTY_OBJ;
        }
        return mod;
    }
}
const positionMap = /* @__PURE__ */ new WeakMap();
const newPositionMap = /* @__PURE__ */ new WeakMap();
const moveCbKey = Symbol("_moveCb");
const enterCbKey = Symbol("_enterCb");
const TransitionGroupImpl = {
    name: "TransitionGroup",
    props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup (props, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevChildren;
        let children;
        onUpdated(()=>{
            if (!prevChildren.length) return;
            const moveClass = props.moveClass || `${props.name || "v"}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) return;
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            forceReflow();
            movedChildren.forEach((c)=>{
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = "";
                const cb = el[moveCbKey] = (e)=>{
                    if (e && e.target !== el) return;
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener("transitionend", cb);
                        el[moveCbKey] = null;
                        removeTransitionClass(el, moveClass);
                    }
                };
                el.addEventListener("transitionend", cb);
            });
        });
        return ()=>{
            const rawProps = toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || Fragment;
            prevChildren = children;
            children = slots.default ? getTransitionRawChildren(slots.default()) : [];
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                if (child.key != null) setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                else warn(`<TransitionGroup> children must be keyed.`);
            }
            if (prevChildren) for(let i = 0; i < prevChildren.length; i++){
                const child = prevChildren[i];
                setTransitionHooks(child, resolveTransitionHooks(child, cssTransitionProps, state, instance));
                positionMap.set(child, child.el.getBoundingClientRect());
            }
            return createVNode(tag, null, children);
        };
    }
};
const removeMode = (props)=>delete props.mode;
/* @__PURE__ */ removeMode(TransitionGroupImpl.props);
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el[moveCbKey]) el[moveCbKey]();
    if (el[enterCbKey]) el[enterCbKey]();
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = "0s";
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    const clone = el.cloneNode();
    const _vtc = el[vtcKey];
    if (_vtc) _vtc.forEach((cls)=>{
        cls.split(/\s+/).forEach((c)=>c && clone.classList.remove(c));
    });
    moveClass.split(/\s+/).forEach((c)=>c && clone.classList.add(c));
    clone.style.display = "none";
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}
const getModelAssigner = (vnode)=>{
    const fn = vnode.props["onUpdate:modelValue"] || false;
    return isArray(fn) ? (value)=>invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        target.dispatchEvent(new Event("input"));
    }
}
const assignKey = Symbol("_assign");
const vModelText = {
    created (el, { modifiers: { lazy, trim, number } }, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        const castToNumber = number || vnode.props && vnode.props.type === "number";
        addEventListener(el, lazy ? "change" : "input", (e)=>{
            if (e.target.composing) return;
            let domValue = el.value;
            if (trim) domValue = domValue.trim();
            if (castToNumber) domValue = looseToNumber(domValue);
            el[assignKey](domValue);
        });
        if (trim) addEventListener(el, "change", ()=>{
            el.value = el.value.trim();
        });
        if (!lazy) {
            addEventListener(el, "compositionstart", onCompositionStart);
            addEventListener(el, "compositionend", onCompositionEnd);
            addEventListener(el, "change", onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted (el, { value }) {
        el.value = value == null ? "" : value;
    },
    beforeUpdate (el, { value, modifiers: { lazy, trim, number } }, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        if (el.composing) return;
        const elValue = number || el.type === "number" ? looseToNumber(el.value) : el.value;
        const newValue = value == null ? "" : value;
        if (elValue === newValue) return;
        if (document.activeElement === el && el.type !== "range") {
            if (lazy) return;
            if (trim && el.value.trim() === newValue) return;
        }
        el.value = newValue;
    }
};
const vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created (el, _, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        addEventListener(el, "change", ()=>{
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el[assignKey];
            if (isArray(modelValue)) {
                const index = looseIndexOf(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) assign(modelValue.concat(elementValue));
                else if (!checked && found) {
                    const filtered = [
                        ...modelValue
                    ];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            } else if (isSet(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) cloned.add(elementValue);
                else cloned.delete(elementValue);
                assign(cloned);
            } else assign(getCheckboxValue(el, checked));
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate (el, binding, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value, oldValue }, vnode) {
    el._modelValue = value;
    if (isArray(value)) el.checked = looseIndexOf(value, vnode.props.value) > -1;
    else if (isSet(value)) el.checked = value.has(vnode.props.value);
    else if (value !== oldValue) el.checked = looseEqual(value, getCheckboxValue(el, true));
}
const vModelRadio = {
    created (el, { value }, vnode) {
        el.checked = looseEqual(value, vnode.props.value);
        el[assignKey] = getModelAssigner(vnode);
        addEventListener(el, "change", ()=>{
            el[assignKey](getValue(el));
        });
    },
    beforeUpdate (el, { value, oldValue }, vnode) {
        el[assignKey] = getModelAssigner(vnode);
        if (value !== oldValue) el.checked = looseEqual(value, vnode.props.value);
    }
};
const vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created (el, { value, modifiers: { number } }, vnode) {
        const isSetModel = isSet(value);
        addEventListener(el, "change", ()=>{
            const selectedVal = Array.prototype.filter.call(el.options, (o)=>o.selected).map((o)=>number ? looseToNumber(getValue(o)) : getValue(o));
            el[assignKey](el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
        });
        el[assignKey] = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted (el, { value }) {
        setSelected(el, value);
    },
    beforeUpdate (el, _binding, vnode) {
        el[assignKey] = getModelAssigner(vnode);
    },
    updated (el, { value }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !isArray(value) && !isSet(value)) {
        warn(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
        return;
    }
    for(let i = 0, l = el.options.length; i < l; i++){
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if (isArray(value)) option.selected = looseIndexOf(value, optionValue) > -1;
            else option.selected = value.has(optionValue);
        } else if (looseEqual(getValue(option), value)) {
            if (el.selectedIndex !== i) el.selectedIndex = i;
            return;
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) el.selectedIndex = -1;
}
function getValue(el) {
    return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
    const key = checked ? "_trueValue" : "_falseValue";
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "created");
    },
    mounted (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "mounted");
    },
    beforeUpdate (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
    },
    updated (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "updated");
    }
};
function resolveDynamicModel(tagName, type) {
    switch(tagName){
        case "SELECT":
            return vModelSelect;
        case "TEXTAREA":
            return vModelText;
        default:
            switch(type){
                case "checkbox":
                    return vModelCheckbox;
                case "radio":
                    return vModelRadio;
                default:
                    return vModelText;
            }
    }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
    const modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}
const systemModifiers = [
    "ctrl",
    "shift",
    "alt",
    "meta"
];
const modifierGuards = {
    stop: (e)=>e.stopPropagation(),
    prevent: (e)=>e.preventDefault(),
    self: (e)=>e.target !== e.currentTarget,
    ctrl: (e)=>!e.ctrlKey,
    shift: (e)=>!e.shiftKey,
    alt: (e)=>!e.altKey,
    meta: (e)=>!e.metaKey,
    left: (e)=>"button" in e && e.button !== 0,
    middle: (e)=>"button" in e && e.button !== 1,
    right: (e)=>"button" in e && e.button !== 2,
    exact: (e, modifiers)=>systemModifiers.some((m)=>e[`${m}Key`] && !modifiers.includes(m))
};
const withModifiers = (fn, modifiers)=>{
    const cache = fn._withMods || (fn._withMods = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event, ...args)=>{
        for(let i = 0; i < modifiers.length; i++){
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers)) return;
        }
        return fn(event, ...args);
    });
};
const keyNames = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
};
const withKeys = (fn, modifiers)=>{
    const cache = fn._withKeys || (fn._withKeys = {});
    const cacheKey = modifiers.join(".");
    return cache[cacheKey] || (cache[cacheKey] = (event)=>{
        if (!("key" in event)) return;
        const eventKey = hyphenate(event.key);
        if (modifiers.some((k)=>k === eventKey || keyNames[k] === eventKey)) return fn(event);
    });
};
const rendererOptions = /* @__PURE__ */ extend({
    patchProp
}, nodeOps);
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration ? renderer : createHydrationRenderer(rendererOptions);
    enabledHydration = true;
    return renderer;
}
const render = (...args)=>{
    ensureRenderer().render(...args);
};
const hydrate = (...args)=>{
    ensureHydrationRenderer().hydrate(...args);
};
const createApp = (...args)=>{
    const app = ensureRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (!container) return;
        const component = app._component;
        if (!isFunction(component) && !component.render && !component.template) component.template = container.innerHTML;
        container.innerHTML = "";
        const proxy = mount(container, false, resolveRootNamespace(container));
        if (container instanceof Element) {
            container.removeAttribute("v-cloak");
            container.setAttribute("data-v-app", "");
        }
        return proxy;
    };
    return app;
};
const createSSRApp = (...args)=>{
    const app = ensureHydrationRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (container) return mount(container, true, resolveRootNamespace(container));
    };
    return app;
};
function resolveRootNamespace(container) {
    if (container instanceof SVGElement) return "svg";
    if (typeof MathMLElement === "function" && container instanceof MathMLElement) return "mathml";
}
function injectNativeTagCheck(app) {
    Object.defineProperty(app.config, "isNativeTag", {
        value: (tag)=>isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
        writable: false
    });
}
function injectCompilerOptionsCheck(app) {
    if (isRuntimeOnly()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, "isCustomElement", {
            get () {
                return isCustomElement;
            },
            set () {
                warn(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
        Object.defineProperty(app.config, "compilerOptions", {
            get () {
                warn(msg);
                return compilerOptions;
            },
            set () {
                warn(msg);
            }
        });
    }
}
function normalizeContainer(container) {
    if (isString(container)) {
        const res = document.querySelector(container);
        if (!res) warn(`Failed to mount app: mount target selector "${container}" returned null.`);
        return res;
    }
    if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") warn(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    return container;
}
const initDirectivesForSSR = NOOP;
var runtimeDom = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    BaseTransition: BaseTransition,
    BaseTransitionPropsValidators: BaseTransitionPropsValidators,
    Comment: Comment,
    DeprecationTypes: DeprecationTypes,
    EffectScope: EffectScope,
    ErrorCodes: ErrorCodes,
    ErrorTypeStrings: ErrorTypeStrings,
    Fragment: Fragment,
    KeepAlive: KeepAlive,
    ReactiveEffect: ReactiveEffect,
    Static: Static,
    Suspense: Suspense,
    Teleport: Teleport,
    Text: Text,
    TrackOpTypes: TrackOpTypes,
    Transition: Transition,
    TransitionGroup: TransitionGroup,
    TriggerOpTypes: TriggerOpTypes,
    VueElement: VueElement,
    assertNumber: assertNumber,
    callWithAsyncErrorHandling: callWithAsyncErrorHandling,
    callWithErrorHandling: callWithErrorHandling,
    camelize: camelize,
    capitalize: capitalize,
    cloneVNode: cloneVNode,
    compatUtils: compatUtils,
    computed: computed,
    createApp: createApp,
    createBlock: createBlock,
    createCommentVNode: createCommentVNode,
    createElementBlock: createElementBlock,
    createElementVNode: createBaseVNode,
    createHydrationRenderer: createHydrationRenderer,
    createPropsRestProxy: createPropsRestProxy,
    createRenderer: createRenderer,
    createSSRApp: createSSRApp,
    createSlots: createSlots,
    createStaticVNode: createStaticVNode,
    createTextVNode: createTextVNode,
    createVNode: createVNode,
    customRef: customRef,
    defineAsyncComponent: defineAsyncComponent,
    defineComponent: defineComponent,
    defineCustomElement: defineCustomElement,
    defineEmits: defineEmits,
    defineExpose: defineExpose,
    defineModel: defineModel,
    defineOptions: defineOptions,
    defineProps: defineProps,
    defineSSRCustomElement: defineSSRCustomElement,
    defineSlots: defineSlots,
    devtools: devtools,
    effect: effect,
    effectScope: effectScope,
    getCurrentInstance: getCurrentInstance,
    getCurrentScope: getCurrentScope,
    getTransitionRawChildren: getTransitionRawChildren,
    guardReactiveProps: guardReactiveProps,
    h: h,
    handleError: handleError,
    hasInjectionContext: hasInjectionContext,
    hydrate: hydrate,
    initCustomFormatter: initCustomFormatter,
    initDirectivesForSSR: initDirectivesForSSR,
    inject: inject,
    isMemoSame: isMemoSame,
    isProxy: isProxy,
    isReactive: isReactive,
    isReadonly: isReadonly,
    isRef: isRef,
    isRuntimeOnly: isRuntimeOnly,
    isShallow: isShallow,
    isVNode: isVNode,
    markRaw: markRaw,
    mergeDefaults: mergeDefaults,
    mergeModels: mergeModels,
    mergeProps: mergeProps,
    nextTick: nextTick,
    normalizeClass: normalizeClass,
    normalizeProps: normalizeProps,
    normalizeStyle: normalizeStyle,
    onActivated: onActivated,
    onBeforeMount: onBeforeMount,
    onBeforeUnmount: onBeforeUnmount,
    onBeforeUpdate: onBeforeUpdate,
    onDeactivated: onDeactivated,
    onErrorCaptured: onErrorCaptured,
    onMounted: onMounted,
    onRenderTracked: onRenderTracked,
    onRenderTriggered: onRenderTriggered,
    onScopeDispose: onScopeDispose,
    onServerPrefetch: onServerPrefetch,
    onUnmounted: onUnmounted,
    onUpdated: onUpdated,
    openBlock: openBlock,
    popScopeId: popScopeId,
    provide: provide,
    proxyRefs: proxyRefs,
    pushScopeId: pushScopeId,
    queuePostFlushCb: queuePostFlushCb,
    reactive: reactive,
    readonly: readonly,
    ref: ref,
    registerRuntimeCompiler: registerRuntimeCompiler,
    render: render,
    renderList: renderList,
    renderSlot: renderSlot,
    resolveComponent: resolveComponent,
    resolveDirective: resolveDirective,
    resolveDynamicComponent: resolveDynamicComponent,
    resolveFilter: resolveFilter,
    resolveTransitionHooks: resolveTransitionHooks,
    setBlockTracking: setBlockTracking,
    setDevtoolsHook: setDevtoolsHook,
    setTransitionHooks: setTransitionHooks,
    shallowReactive: shallowReactive,
    shallowReadonly: shallowReadonly,
    shallowRef: shallowRef,
    ssrContextKey: ssrContextKey,
    ssrUtils: ssrUtils,
    stop: stop,
    toDisplayString: toDisplayString,
    toHandlerKey: toHandlerKey,
    toHandlers: toHandlers,
    toRaw: toRaw,
    toRef: toRef,
    toRefs: toRefs,
    toValue: toValue,
    transformVNodeArgs: transformVNodeArgs,
    triggerRef: triggerRef,
    unref: unref,
    useAttrs: useAttrs,
    useCssModule: useCssModule,
    useCssVars: useCssVars,
    useModel: useModel,
    useSSRContext: useSSRContext,
    useSlots: useSlots,
    useTransitionState: useTransitionState,
    vModelCheckbox: vModelCheckbox,
    vModelDynamic: vModelDynamic,
    vModelRadio: vModelRadio,
    vModelSelect: vModelSelect,
    vModelText: vModelText,
    vShow: vShow,
    version: version,
    warn: warn,
    watch: watch,
    watchEffect: watchEffect,
    watchPostEffect: watchPostEffect,
    watchSyncEffect: watchSyncEffect,
    withAsyncContext: withAsyncContext,
    withCtx: withCtx,
    withDefaults: withDefaults,
    withDirectives: withDirectives,
    withKeys: withKeys,
    withMemo: withMemo,
    withModifiers: withModifiers,
    withScopeId: withScopeId
});
function initDev() {
    console.info(`You are running a development build of Vue.
Make sure to use the production build (*.prod.js) when deploying for production.`);
    initCustomFormatter();
}
const FRAGMENT = Symbol(`Fragment`);
const TELEPORT = Symbol(`Teleport`);
const SUSPENSE = Symbol(`Suspense`);
const KEEP_ALIVE = Symbol(`KeepAlive`);
const BASE_TRANSITION = Symbol(`BaseTransition`);
const OPEN_BLOCK = Symbol(`openBlock`);
const CREATE_BLOCK = Symbol(`createBlock`);
const CREATE_ELEMENT_BLOCK = Symbol(`createElementBlock`);
const CREATE_VNODE = Symbol(`createVNode`);
const CREATE_ELEMENT_VNODE = Symbol(`createElementVNode`);
const CREATE_COMMENT = Symbol(`createCommentVNode`);
const CREATE_TEXT = Symbol(`createTextVNode`);
const CREATE_STATIC = Symbol(`createStaticVNode`);
const RESOLVE_COMPONENT = Symbol(`resolveComponent`);
const RESOLVE_DYNAMIC_COMPONENT = Symbol(`resolveDynamicComponent`);
const RESOLVE_DIRECTIVE = Symbol(`resolveDirective`);
const RESOLVE_FILTER = Symbol(`resolveFilter`);
const WITH_DIRECTIVES = Symbol(`withDirectives`);
const RENDER_LIST = Symbol(`renderList`);
const RENDER_SLOT = Symbol(`renderSlot`);
const CREATE_SLOTS = Symbol(`createSlots`);
const TO_DISPLAY_STRING = Symbol(`toDisplayString`);
const MERGE_PROPS = Symbol(`mergeProps`);
const NORMALIZE_CLASS = Symbol(`normalizeClass`);
const NORMALIZE_STYLE = Symbol(`normalizeStyle`);
const NORMALIZE_PROPS = Symbol(`normalizeProps`);
const GUARD_REACTIVE_PROPS = Symbol(`guardReactiveProps`);
const TO_HANDLERS = Symbol(`toHandlers`);
const CAMELIZE = Symbol(`camelize`);
const CAPITALIZE = Symbol(`capitalize`);
const TO_HANDLER_KEY = Symbol(`toHandlerKey`);
const SET_BLOCK_TRACKING = Symbol(`setBlockTracking`);
const PUSH_SCOPE_ID = Symbol(`pushScopeId`);
const POP_SCOPE_ID = Symbol(`popScopeId`);
const WITH_CTX = Symbol(`withCtx`);
const UNREF = Symbol(`unref`);
const IS_REF = Symbol(`isRef`);
const WITH_MEMO = Symbol(`withMemo`);
const IS_MEMO_SAME = Symbol(`isMemoSame`);
const helperNameMap = {
    [FRAGMENT]: `Fragment`,
    [TELEPORT]: `Teleport`,
    [SUSPENSE]: `Suspense`,
    [KEEP_ALIVE]: `KeepAlive`,
    [BASE_TRANSITION]: `BaseTransition`,
    [OPEN_BLOCK]: `openBlock`,
    [CREATE_BLOCK]: `createBlock`,
    [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
    [CREATE_VNODE]: `createVNode`,
    [CREATE_ELEMENT_VNODE]: `createElementVNode`,
    [CREATE_COMMENT]: `createCommentVNode`,
    [CREATE_TEXT]: `createTextVNode`,
    [CREATE_STATIC]: `createStaticVNode`,
    [RESOLVE_COMPONENT]: `resolveComponent`,
    [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
    [RESOLVE_DIRECTIVE]: `resolveDirective`,
    [RESOLVE_FILTER]: `resolveFilter`,
    [WITH_DIRECTIVES]: `withDirectives`,
    [RENDER_LIST]: `renderList`,
    [RENDER_SLOT]: `renderSlot`,
    [CREATE_SLOTS]: `createSlots`,
    [TO_DISPLAY_STRING]: `toDisplayString`,
    [MERGE_PROPS]: `mergeProps`,
    [NORMALIZE_CLASS]: `normalizeClass`,
    [NORMALIZE_STYLE]: `normalizeStyle`,
    [NORMALIZE_PROPS]: `normalizeProps`,
    [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
    [TO_HANDLERS]: `toHandlers`,
    [CAMELIZE]: `camelize`,
    [CAPITALIZE]: `capitalize`,
    [TO_HANDLER_KEY]: `toHandlerKey`,
    [SET_BLOCK_TRACKING]: `setBlockTracking`,
    [PUSH_SCOPE_ID]: `pushScopeId`,
    [POP_SCOPE_ID]: `popScopeId`,
    [WITH_CTX]: `withCtx`,
    [UNREF]: `unref`,
    [IS_REF]: `isRef`,
    [WITH_MEMO]: `withMemo`,
    [IS_MEMO_SAME]: `isMemoSame`
};
function registerRuntimeHelpers(helpers) {
    Object.getOwnPropertySymbols(helpers).forEach((s)=>{
        helperNameMap[s] = helpers[s];
    });
}
const locStub = {
    start: {
        line: 1,
        column: 1,
        offset: 0
    },
    end: {
        line: 1,
        column: 1,
        offset: 0
    },
    source: ""
};
function createRoot(children, source = "") {
    return {
        type: 0,
        source,
        children,
        helpers: /* @__PURE__ */ new Set(),
        components: [],
        directives: [],
        hoists: [],
        imports: [],
        cached: 0,
        temps: 0,
        codegenNode: void 0,
        loc: locStub
    };
}
function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent = false, loc = locStub) {
    if (context) {
        if (isBlock) {
            context.helper(OPEN_BLOCK);
            context.helper(getVNodeBlockHelper(context.inSSR, isComponent));
        } else context.helper(getVNodeHelper(context.inSSR, isComponent));
        if (directives) context.helper(WITH_DIRECTIVES);
    }
    return {
        type: 13,
        tag,
        props,
        children,
        patchFlag,
        dynamicProps,
        directives,
        isBlock,
        disableTracking,
        isComponent,
        loc
    };
}
function createArrayExpression(elements, loc = locStub) {
    return {
        type: 17,
        loc,
        elements
    };
}
function createObjectExpression(properties, loc = locStub) {
    return {
        type: 15,
        loc,
        properties
    };
}
function createObjectProperty(key, value) {
    return {
        type: 16,
        loc: locStub,
        key: isString(key) ? createSimpleExpression(key, true) : key,
        value
    };
}
function createSimpleExpression(content, isStatic = false, loc = locStub, constType = 0) {
    return {
        type: 4,
        loc,
        content,
        isStatic,
        constType: isStatic ? 3 : constType
    };
}
function createCompoundExpression(children, loc = locStub) {
    return {
        type: 8,
        loc,
        children
    };
}
function createCallExpression(callee, args = [], loc = locStub) {
    return {
        type: 14,
        loc,
        callee,
        arguments: args
    };
}
function createFunctionExpression(params, returns, newline = false, isSlot = false, loc = locStub) {
    return {
        type: 18,
        params,
        returns,
        newline,
        isSlot,
        loc
    };
}
function createConditionalExpression(test, consequent, alternate, newline = true) {
    return {
        type: 19,
        test,
        consequent,
        alternate,
        newline,
        loc: locStub
    };
}
function createCacheExpression(index, value, isVNode = false) {
    return {
        type: 20,
        index,
        value,
        isVNode,
        loc: locStub
    };
}
function createBlockStatement(body) {
    return {
        type: 21,
        body,
        loc: locStub
    };
}
function getVNodeHelper(ssr, isComponent) {
    return ssr || isComponent ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
}
function getVNodeBlockHelper(ssr, isComponent) {
    return ssr || isComponent ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
}
function convertToBlock(node, { helper, removeHelper, inSSR }) {
    if (!node.isBlock) {
        node.isBlock = true;
        removeHelper(getVNodeHelper(inSSR, node.isComponent));
        helper(OPEN_BLOCK);
        helper(getVNodeBlockHelper(inSSR, node.isComponent));
    }
}
const defaultDelimitersOpen = new Uint8Array([
    123,
    123
]);
const defaultDelimitersClose = new Uint8Array([
    125,
    125
]);
function isTagStartChar(c) {
    return c >= 97 && c <= 122 || c >= 65 && c <= 90;
}
function isWhitespace(c) {
    return c === 32 || c === 10 || c === 9 || c === 12 || c === 13;
}
function isEndOfTagSection(c) {
    return c === 47 || c === 62 || isWhitespace(c);
}
function toCharCodes(str) {
    const ret = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++)ret[i] = str.charCodeAt(i);
    return ret;
}
const Sequences = {
    Cdata: new Uint8Array([
        67,
        68,
        65,
        84,
        65,
        91
    ]),
    // CDATA[
    CdataEnd: new Uint8Array([
        93,
        93,
        62
    ]),
    // ]]>
    CommentEnd: new Uint8Array([
        45,
        45,
        62
    ]),
    // `-->`
    ScriptEnd: new Uint8Array([
        60,
        47,
        115,
        99,
        114,
        105,
        112,
        116
    ]),
    // `<\/script`
    StyleEnd: new Uint8Array([
        60,
        47,
        115,
        116,
        121,
        108,
        101
    ]),
    // `</style`
    TitleEnd: new Uint8Array([
        60,
        47,
        116,
        105,
        116,
        108,
        101
    ]),
    // `</title`
    TextareaEnd: new Uint8Array([
        60,
        47,
        116,
        101,
        120,
        116,
        97,
        114,
        101,
        97
    ])
};
class Tokenizer {
    constructor(stack, cbs){
        this.stack = stack;
        this.cbs = cbs;
        /** The current state the tokenizer is in. */ this.state = 1;
        /** The read buffer. */ this.buffer = "";
        /** The beginning of the section that is currently being read. */ this.sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */ this.index = 0;
        /** The start of the last entity. */ this.entityStart = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */ this.baseState = 1;
        /** For special parsing behavior inside of script and style tags. */ this.inRCDATA = false;
        /** For disabling RCDATA tags handling */ this.inXML = false;
        /** For disabling interpolation parsing in v-pre */ this.inVPre = false;
        /** Record newline positions for fast line / column calculation */ this.newlines = [];
        this.mode = 0;
        this.delimiterOpen = defaultDelimitersOpen;
        this.delimiterClose = defaultDelimitersClose;
        this.delimiterIndex = -1;
        this.currentSequence = void 0;
        this.sequenceIndex = 0;
    }
    get inSFCRoot() {
        return this.mode === 2 && this.stack.length === 0;
    }
    reset() {
        this.state = 1;
        this.mode = 0;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.baseState = 1;
        this.inRCDATA = false;
        this.currentSequence = void 0;
        this.newlines.length = 0;
        this.delimiterOpen = defaultDelimitersOpen;
        this.delimiterClose = defaultDelimitersClose;
    }
    /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */ getPos(index) {
        let line = 1;
        let column = index + 1;
        for(let i = this.newlines.length - 1; i >= 0; i--){
            const newlineIndex = this.newlines[i];
            if (index > newlineIndex) {
                line = i + 2;
                column = index - newlineIndex;
                break;
            }
        }
        return {
            column,
            line,
            offset: index
        };
    }
    peek() {
        return this.buffer.charCodeAt(this.index + 1);
    }
    stateText(c) {
        if (c === 60) {
            if (this.index > this.sectionStart) this.cbs.ontext(this.sectionStart, this.index);
            this.state = 5;
            this.sectionStart = this.index;
        } else if (!this.inVPre && c === this.delimiterOpen[0]) {
            this.state = 2;
            this.delimiterIndex = 0;
            this.stateInterpolationOpen(c);
        }
    }
    stateInterpolationOpen(c) {
        if (c === this.delimiterOpen[this.delimiterIndex]) {
            if (this.delimiterIndex === this.delimiterOpen.length - 1) {
                const start = this.index + 1 - this.delimiterOpen.length;
                if (start > this.sectionStart) this.cbs.ontext(this.sectionStart, start);
                this.state = 3;
                this.sectionStart = start;
            } else this.delimiterIndex++;
        } else if (this.inRCDATA) {
            this.state = 32;
            this.stateInRCDATA(c);
        } else {
            this.state = 1;
            this.stateText(c);
        }
    }
    stateInterpolation(c) {
        if (c === this.delimiterClose[0]) {
            this.state = 4;
            this.delimiterIndex = 0;
            this.stateInterpolationClose(c);
        }
    }
    stateInterpolationClose(c) {
        if (c === this.delimiterClose[this.delimiterIndex]) {
            if (this.delimiterIndex === this.delimiterClose.length - 1) {
                this.cbs.oninterpolation(this.sectionStart, this.index + 1);
                if (this.inRCDATA) this.state = 32;
                else this.state = 1;
                this.sectionStart = this.index + 1;
            } else this.delimiterIndex++;
        } else {
            this.state = 3;
            this.stateInterpolation(c);
        }
    }
    stateSpecialStartSequence(c) {
        const isEnd = this.sequenceIndex === this.currentSequence.length;
        const isMatch = isEnd ? // If we are at the end of the sequence, make sure the tag name has ended
        isEndOfTagSection(c) : // Otherwise, do a case-insensitive comparison
        (c | 32) === this.currentSequence[this.sequenceIndex];
        if (!isMatch) this.inRCDATA = false;
        else if (!isEnd) {
            this.sequenceIndex++;
            return;
        }
        this.sequenceIndex = 0;
        this.state = 6;
        this.stateInTagName(c);
    }
    /** Look for an end tag. For <title> and <textarea>, also decode entities. */ stateInRCDATA(c) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (c === 62 || isWhitespace(c)) {
                const endOfText = this.index - this.currentSequence.length;
                if (this.sectionStart < endOfText) {
                    const actualIndex = this.index;
                    this.index = endOfText;
                    this.cbs.ontext(this.sectionStart, endOfText);
                    this.index = actualIndex;
                }
                this.sectionStart = endOfText + 2;
                this.stateInClosingTagName(c);
                this.inRCDATA = false;
                return;
            }
            this.sequenceIndex = 0;
        }
        if ((c | 32) === this.currentSequence[this.sequenceIndex]) this.sequenceIndex += 1;
        else if (this.sequenceIndex === 0) {
            if (this.currentSequence === Sequences.TitleEnd || this.currentSequence === Sequences.TextareaEnd && !this.inSFCRoot) {
                if (c === this.delimiterOpen[0]) {
                    this.state = 2;
                    this.delimiterIndex = 0;
                    this.stateInterpolationOpen(c);
                }
            } else if (this.fastForwardTo(60)) this.sequenceIndex = 1;
        } else this.sequenceIndex = Number(c === 60);
    }
    stateCDATASequence(c) {
        if (c === Sequences.Cdata[this.sequenceIndex]) {
            if (++this.sequenceIndex === Sequences.Cdata.length) {
                this.state = 28;
                this.currentSequence = Sequences.CdataEnd;
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
            }
        } else {
            this.sequenceIndex = 0;
            this.state = 23;
            this.stateInDeclaration(c);
        }
    }
    /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */ fastForwardTo(c) {
        while(++this.index < this.buffer.length){
            const cc = this.buffer.charCodeAt(this.index);
            if (cc === 10) this.newlines.push(this.index);
            if (cc === c) return true;
        }
        this.index = this.buffer.length - 1;
        return false;
    }
    /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */ stateInCommentLike(c) {
        if (c === this.currentSequence[this.sequenceIndex]) {
            if (++this.sequenceIndex === this.currentSequence.length) {
                if (this.currentSequence === Sequences.CdataEnd) this.cbs.oncdata(this.sectionStart, this.index - 2);
                else this.cbs.oncomment(this.sectionStart, this.index - 2);
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
                this.state = 1;
            }
        } else if (this.sequenceIndex === 0) {
            if (this.fastForwardTo(this.currentSequence[0])) this.sequenceIndex = 1;
        } else if (c !== this.currentSequence[this.sequenceIndex - 1]) this.sequenceIndex = 0;
    }
    startSpecial(sequence, offset) {
        this.enterRCDATA(sequence, offset);
        this.state = 31;
    }
    enterRCDATA(sequence, offset) {
        this.inRCDATA = true;
        this.currentSequence = sequence;
        this.sequenceIndex = offset;
    }
    stateBeforeTagName(c) {
        if (c === 33) {
            this.state = 22;
            this.sectionStart = this.index + 1;
        } else if (c === 63) {
            this.state = 24;
            this.sectionStart = this.index + 1;
        } else if (isTagStartChar(c)) {
            this.sectionStart = this.index;
            if (this.mode === 0) this.state = 6;
            else if (this.inSFCRoot) this.state = 34;
            else if (!this.inXML) {
                const lower = c | 32;
                if (lower === 116) this.state = 30;
                else this.state = lower === 115 ? 29 : 6;
            } else this.state = 6;
        } else if (c === 47) this.state = 8;
        else {
            this.state = 1;
            this.stateText(c);
        }
    }
    stateInTagName(c) {
        if (isEndOfTagSection(c)) this.handleTagName(c);
    }
    stateInSFCRootTagName(c) {
        if (isEndOfTagSection(c)) {
            const tag = this.buffer.slice(this.sectionStart, this.index);
            if (tag !== "template") this.enterRCDATA(toCharCodes(`</` + tag), 0);
            this.handleTagName(c);
        }
    }
    handleTagName(c) {
        this.cbs.onopentagname(this.sectionStart, this.index);
        this.sectionStart = -1;
        this.state = 11;
        this.stateBeforeAttrName(c);
    }
    stateBeforeClosingTagName(c) {
        if (isWhitespace(c)) ;
        else if (c === 62) {
            this.cbs.onerr(14, this.index);
            this.state = 1;
            this.sectionStart = this.index + 1;
        } else {
            this.state = isTagStartChar(c) ? 9 : 27;
            this.sectionStart = this.index;
        }
    }
    stateInClosingTagName(c) {
        if (c === 62 || isWhitespace(c)) {
            this.cbs.onclosetag(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = 10;
            this.stateAfterClosingTagName(c);
        }
    }
    stateAfterClosingTagName(c) {
        if (c === 62) {
            this.state = 1;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeAttrName(c) {
        if (c === 62) {
            this.cbs.onopentagend(this.index);
            if (this.inRCDATA) this.state = 32;
            else this.state = 1;
            this.sectionStart = this.index + 1;
        } else if (c === 47) {
            this.state = 7;
            if (this.peek() !== 62) this.cbs.onerr(22, this.index);
        } else if (c === 60 && this.peek() === 47) {
            this.cbs.onopentagend(this.index);
            this.state = 5;
            this.sectionStart = this.index;
        } else if (!isWhitespace(c)) {
            if (c === 61) this.cbs.onerr(19, this.index);
            this.handleAttrStart(c);
        }
    }
    handleAttrStart(c) {
        if (c === 118 && this.peek() === 45) {
            this.state = 13;
            this.sectionStart = this.index;
        } else if (c === 46 || c === 58 || c === 64 || c === 35) {
            this.cbs.ondirname(this.index, this.index + 1);
            this.state = 14;
            this.sectionStart = this.index + 1;
        } else {
            this.state = 12;
            this.sectionStart = this.index;
        }
    }
    stateInSelfClosingTag(c) {
        if (c === 62) {
            this.cbs.onselfclosingtag(this.index);
            this.state = 1;
            this.sectionStart = this.index + 1;
            this.inRCDATA = false;
        } else if (!isWhitespace(c)) {
            this.state = 11;
            this.stateBeforeAttrName(c);
        }
    }
    stateInAttrName(c) {
        if (c === 61 || isEndOfTagSection(c)) {
            this.cbs.onattribname(this.sectionStart, this.index);
            this.handleAttrNameEnd(c);
        } else if (c === 34 || c === 39 || c === 60) this.cbs.onerr(17, this.index);
    }
    stateInDirName(c) {
        if (c === 61 || isEndOfTagSection(c)) {
            this.cbs.ondirname(this.sectionStart, this.index);
            this.handleAttrNameEnd(c);
        } else if (c === 58) {
            this.cbs.ondirname(this.sectionStart, this.index);
            this.state = 14;
            this.sectionStart = this.index + 1;
        } else if (c === 46) {
            this.cbs.ondirname(this.sectionStart, this.index);
            this.state = 16;
            this.sectionStart = this.index + 1;
        }
    }
    stateInDirArg(c) {
        if (c === 61 || isEndOfTagSection(c)) {
            this.cbs.ondirarg(this.sectionStart, this.index);
            this.handleAttrNameEnd(c);
        } else if (c === 91) this.state = 15;
        else if (c === 46) {
            this.cbs.ondirarg(this.sectionStart, this.index);
            this.state = 16;
            this.sectionStart = this.index + 1;
        }
    }
    stateInDynamicDirArg(c) {
        if (c === 93) this.state = 14;
        else if (c === 61 || isEndOfTagSection(c)) {
            this.cbs.ondirarg(this.sectionStart, this.index + 1);
            this.handleAttrNameEnd(c);
            this.cbs.onerr(27, this.index);
        }
    }
    stateInDirModifier(c) {
        if (c === 61 || isEndOfTagSection(c)) {
            this.cbs.ondirmodifier(this.sectionStart, this.index);
            this.handleAttrNameEnd(c);
        } else if (c === 46) {
            this.cbs.ondirmodifier(this.sectionStart, this.index);
            this.sectionStart = this.index + 1;
        }
    }
    handleAttrNameEnd(c) {
        this.sectionStart = this.index;
        this.state = 17;
        this.cbs.onattribnameend(this.index);
        this.stateAfterAttrName(c);
    }
    stateAfterAttrName(c) {
        if (c === 61) this.state = 18;
        else if (c === 47 || c === 62) {
            this.cbs.onattribend(0, this.sectionStart);
            this.sectionStart = -1;
            this.state = 11;
            this.stateBeforeAttrName(c);
        } else if (!isWhitespace(c)) {
            this.cbs.onattribend(0, this.sectionStart);
            this.handleAttrStart(c);
        }
    }
    stateBeforeAttrValue(c) {
        if (c === 34) {
            this.state = 19;
            this.sectionStart = this.index + 1;
        } else if (c === 39) {
            this.state = 20;
            this.sectionStart = this.index + 1;
        } else if (!isWhitespace(c)) {
            this.sectionStart = this.index;
            this.state = 21;
            this.stateInAttrValueNoQuotes(c);
        }
    }
    handleInAttrValue(c, quote) {
        if (c === quote || this.fastForwardTo(quote)) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(quote === 34 ? 3 : 2, this.index + 1);
            this.state = 11;
        }
    }
    stateInAttrValueDoubleQuotes(c) {
        this.handleInAttrValue(c, 34);
    }
    stateInAttrValueSingleQuotes(c) {
        this.handleInAttrValue(c, 39);
    }
    stateInAttrValueNoQuotes(c) {
        if (isWhitespace(c) || c === 62) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(1, this.index);
            this.state = 11;
            this.stateBeforeAttrName(c);
        } else if (c === 34 || c === 39 || c === 60 || c === 61 || c === 96) this.cbs.onerr(18, this.index);
    }
    stateBeforeDeclaration(c) {
        if (c === 91) {
            this.state = 26;
            this.sequenceIndex = 0;
        } else this.state = c === 45 ? 25 : 23;
    }
    stateInDeclaration(c) {
        if (c === 62 || this.fastForwardTo(62)) {
            this.state = 1;
            this.sectionStart = this.index + 1;
        }
    }
    stateInProcessingInstruction(c) {
        if (c === 62 || this.fastForwardTo(62)) {
            this.cbs.onprocessinginstruction(this.sectionStart, this.index);
            this.state = 1;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeComment(c) {
        if (c === 45) {
            this.state = 28;
            this.currentSequence = Sequences.CommentEnd;
            this.sequenceIndex = 2;
            this.sectionStart = this.index + 1;
        } else this.state = 23;
    }
    stateInSpecialComment(c) {
        if (c === 62 || this.fastForwardTo(62)) {
            this.cbs.oncomment(this.sectionStart, this.index);
            this.state = 1;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeSpecialS(c) {
        const lower = c | 32;
        if (lower === Sequences.ScriptEnd[3]) this.startSpecial(Sequences.ScriptEnd, 4);
        else if (lower === Sequences.StyleEnd[3]) this.startSpecial(Sequences.StyleEnd, 4);
        else {
            this.state = 6;
            this.stateInTagName(c);
        }
    }
    stateBeforeSpecialT(c) {
        const lower = c | 32;
        if (lower === Sequences.TitleEnd[3]) this.startSpecial(Sequences.TitleEnd, 4);
        else if (lower === Sequences.TextareaEnd[3]) this.startSpecial(Sequences.TextareaEnd, 4);
        else {
            this.state = 6;
            this.stateInTagName(c);
        }
    }
    startEntity() {}
    stateInEntity() {}
    /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */ parse(input) {
        this.buffer = input;
        while(this.index < this.buffer.length){
            const c = this.buffer.charCodeAt(this.index);
            if (c === 10) this.newlines.push(this.index);
            switch(this.state){
                case 1:
                    this.stateText(c);
                    break;
                case 2:
                    this.stateInterpolationOpen(c);
                    break;
                case 3:
                    this.stateInterpolation(c);
                    break;
                case 4:
                    this.stateInterpolationClose(c);
                    break;
                case 31:
                    this.stateSpecialStartSequence(c);
                    break;
                case 32:
                    this.stateInRCDATA(c);
                    break;
                case 26:
                    this.stateCDATASequence(c);
                    break;
                case 19:
                    this.stateInAttrValueDoubleQuotes(c);
                    break;
                case 12:
                    this.stateInAttrName(c);
                    break;
                case 13:
                    this.stateInDirName(c);
                    break;
                case 14:
                    this.stateInDirArg(c);
                    break;
                case 15:
                    this.stateInDynamicDirArg(c);
                    break;
                case 16:
                    this.stateInDirModifier(c);
                    break;
                case 28:
                    this.stateInCommentLike(c);
                    break;
                case 27:
                    this.stateInSpecialComment(c);
                    break;
                case 11:
                    this.stateBeforeAttrName(c);
                    break;
                case 6:
                    this.stateInTagName(c);
                    break;
                case 34:
                    this.stateInSFCRootTagName(c);
                    break;
                case 9:
                    this.stateInClosingTagName(c);
                    break;
                case 5:
                    this.stateBeforeTagName(c);
                    break;
                case 17:
                    this.stateAfterAttrName(c);
                    break;
                case 20:
                    this.stateInAttrValueSingleQuotes(c);
                    break;
                case 18:
                    this.stateBeforeAttrValue(c);
                    break;
                case 8:
                    this.stateBeforeClosingTagName(c);
                    break;
                case 10:
                    this.stateAfterClosingTagName(c);
                    break;
                case 29:
                    this.stateBeforeSpecialS(c);
                    break;
                case 30:
                    this.stateBeforeSpecialT(c);
                    break;
                case 21:
                    this.stateInAttrValueNoQuotes(c);
                    break;
                case 7:
                    this.stateInSelfClosingTag(c);
                    break;
                case 23:
                    this.stateInDeclaration(c);
                    break;
                case 22:
                    this.stateBeforeDeclaration(c);
                    break;
                case 25:
                    this.stateBeforeComment(c);
                    break;
                case 24:
                    this.stateInProcessingInstruction(c);
                    break;
                case 33:
                    this.stateInEntity();
                    break;
            }
            this.index++;
        }
        this.cleanup();
        this.finish();
    }
    /**
   * Remove data that has already been consumed from the buffer.
   */ cleanup() {
        if (this.sectionStart !== this.index) {
            if (this.state === 1 || this.state === 32 && this.sequenceIndex === 0) {
                this.cbs.ontext(this.sectionStart, this.index);
                this.sectionStart = this.index;
            } else if (this.state === 19 || this.state === 20 || this.state === 21) {
                this.cbs.onattribdata(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
        }
    }
    finish() {
        this.handleTrailingData();
        this.cbs.onend();
    }
    /** Handle any trailing data. */ handleTrailingData() {
        const endIndex = this.buffer.length;
        if (this.sectionStart >= endIndex) return;
        if (this.state === 28) {
            if (this.currentSequence === Sequences.CdataEnd) this.cbs.oncdata(this.sectionStart, endIndex);
            else this.cbs.oncomment(this.sectionStart, endIndex);
        } else if (this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9) ;
        else this.cbs.ontext(this.sectionStart, endIndex);
    }
    emitCodePoint(cp, consumed) {}
}
function defaultOnError(error) {
    throw error;
}
function defaultOnWarn(msg) {
    console.warn(`[Vue warn] ${msg.message}`);
}
function createCompilerError(code, loc, messages, additionalMessage) {
    const msg = (messages || errorMessages)[code] + (additionalMessage || ``);
    const error = new SyntaxError(String(msg));
    error.code = code;
    error.loc = loc;
    return error;
}
const errorMessages = {
    // parse errors
    [0]: "Illegal comment.",
    [1]: "CDATA section is allowed only in XML context.",
    [2]: "Duplicate attribute.",
    [3]: "End tag cannot have attributes.",
    [4]: "Illegal '/' in tags.",
    [5]: "Unexpected EOF in tag.",
    [6]: "Unexpected EOF in CDATA section.",
    [7]: "Unexpected EOF in comment.",
    [8]: "Unexpected EOF in script.",
    [9]: "Unexpected EOF in tag.",
    [10]: "Incorrectly closed comment.",
    [11]: "Incorrectly opened comment.",
    [12]: "Illegal tag name. Use '&lt;' to print '<'.",
    [13]: "Attribute value was expected.",
    [14]: "End tag name was expected.",
    [15]: "Whitespace was expected.",
    [16]: "Unexpected '<!--' in comment.",
    [17]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
    [18]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
    [19]: "Attribute name cannot start with '='.",
    [21]: "'<?' is allowed only in XML context.",
    [20]: `Unexpected null character.`,
    [22]: "Illegal '/' in tags.",
    // Vue-specific parse errors
    [23]: "Invalid end tag.",
    [24]: "Element is missing end tag.",
    [25]: "Interpolation end sign was not found.",
    [27]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
    [26]: "Legal directive name was expected.",
    // transform errors
    [28]: `v-if/v-else-if is missing expression.`,
    [29]: `v-if/else branches must use unique keys.`,
    [30]: `v-else/v-else-if has no adjacent v-if or v-else-if.`,
    [31]: `v-for is missing expression.`,
    [32]: `v-for has invalid expression.`,
    [33]: `<template v-for> key should be placed on the <template> tag.`,
    [34]: `v-bind is missing expression.`,
    [35]: `v-on is missing expression.`,
    [36]: `Unexpected custom directive on <slot> outlet.`,
    [37]: `Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.`,
    [38]: `Duplicate slot names found. `,
    [39]: `Extraneous children found when component already has explicitly named default slot. These children will be ignored.`,
    [40]: `v-slot can only be used on components or <template> tags.`,
    [41]: `v-model is missing expression.`,
    [42]: `v-model value must be a valid JavaScript member expression.`,
    [43]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
    [44]: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
    [45]: `Error parsing JavaScript expression: `,
    [46]: `<KeepAlive> expects exactly one child component.`,
    [51]: `@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.`,
    // generic errors
    [47]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
    [48]: `ES module mode is not supported in this build of compiler.`,
    [49]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
    [50]: `"scopeId" option is only supported in module mode.`,
    // just to fulfill types
    [52]: ``
};
const isStaticExp = (p)=>p.type === 4 && p.isStatic;
function isCoreComponent(tag) {
    switch(tag){
        case "Teleport":
        case "teleport":
            return TELEPORT;
        case "Suspense":
        case "suspense":
            return SUSPENSE;
        case "KeepAlive":
        case "keep-alive":
            return KEEP_ALIVE;
        case "BaseTransition":
        case "base-transition":
            return BASE_TRANSITION;
    }
}
const nonIdentifierRE = /^\d|[^\$\w]/;
const isSimpleIdentifier = (name)=>!nonIdentifierRE.test(name);
const validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
const validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
const whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
const isMemberExpressionBrowser = (path)=>{
    path = path.trim().replace(whitespaceRE, (s)=>s.trim());
    let state = 0 /* inMemberExp */ ;
    let stateStack = [];
    let currentOpenBracketCount = 0;
    let currentOpenParensCount = 0;
    let currentStringType = null;
    for(let i = 0; i < path.length; i++){
        const char = path.charAt(i);
        switch(state){
            case 0 /* inMemberExp */ :
                if (char === "[") {
                    stateStack.push(state);
                    state = 1 /* inBrackets */ ;
                    currentOpenBracketCount++;
                } else if (char === "(") {
                    stateStack.push(state);
                    state = 2 /* inParens */ ;
                    currentOpenParensCount++;
                } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) return false;
                break;
            case 1 /* inBrackets */ :
                if (char === `'` || char === `"` || char === "`") {
                    stateStack.push(state);
                    state = 3 /* inString */ ;
                    currentStringType = char;
                } else if (char === `[`) currentOpenBracketCount++;
                else if (char === `]`) {
                    if (!--currentOpenBracketCount) state = stateStack.pop();
                }
                break;
            case 2 /* inParens */ :
                if (char === `'` || char === `"` || char === "`") {
                    stateStack.push(state);
                    state = 3 /* inString */ ;
                    currentStringType = char;
                } else if (char === `(`) currentOpenParensCount++;
                else if (char === `)`) {
                    if (i === path.length - 1) return false;
                    if (!--currentOpenParensCount) state = stateStack.pop();
                }
                break;
            case 3 /* inString */ :
                if (char === currentStringType) {
                    state = stateStack.pop();
                    currentStringType = null;
                }
                break;
        }
    }
    return !currentOpenBracketCount && !currentOpenParensCount;
};
const isMemberExpression = isMemberExpressionBrowser;
function assert(condition, msg) {
    if (!condition) throw new Error(msg || `unexpected compiler condition`);
}
function findDir(node, name, allowEmpty = false) {
    for(let i = 0; i < node.props.length; i++){
        const p = node.props[i];
        if (p.type === 7 && (allowEmpty || p.exp) && (isString(name) ? p.name === name : name.test(p.name))) return p;
    }
}
function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
    for(let i = 0; i < node.props.length; i++){
        const p = node.props[i];
        if (p.type === 6) {
            if (dynamicOnly) continue;
            if (p.name === name && (p.value || allowEmpty)) return p;
        } else if (p.name === "bind" && (p.exp || allowEmpty) && isStaticArgOf(p.arg, name)) return p;
    }
}
function isStaticArgOf(arg, name) {
    return !!(arg && isStaticExp(arg) && arg.content === name);
}
function hasDynamicKeyVBind(node) {
    return node.props.some((p)=>p.type === 7 && p.name === "bind" && (!p.arg || // v-bind="obj"
        p.arg.type !== 4 || // v-bind:[_ctx.foo]
        !p.arg.isStatic));
}
function isText$1(node) {
    return node.type === 5 || node.type === 2;
}
function isVSlot(p) {
    return p.type === 7 && p.name === "slot";
}
function isTemplateNode(node) {
    return node.type === 1 && node.tagType === 3;
}
function isSlotOutlet(node) {
    return node.type === 1 && node.tagType === 2;
}
const propsHelperSet = /* @__PURE__ */ new Set([
    NORMALIZE_PROPS,
    GUARD_REACTIVE_PROPS
]);
function getUnnormalizedProps(props, callPath = []) {
    if (props && !isString(props) && props.type === 14) {
        const callee = props.callee;
        if (!isString(callee) && propsHelperSet.has(callee)) return getUnnormalizedProps(props.arguments[0], callPath.concat(props));
    }
    return [
        props,
        callPath
    ];
}
function injectProp(node, prop, context) {
    let propsWithInjection;
    let props = node.type === 13 ? node.props : node.arguments[2];
    let callPath = [];
    let parentCall;
    if (props && !isString(props) && props.type === 14) {
        const ret = getUnnormalizedProps(props);
        props = ret[0];
        callPath = ret[1];
        parentCall = callPath[callPath.length - 1];
    }
    if (props == null || isString(props)) propsWithInjection = createObjectExpression([
        prop
    ]);
    else if (props.type === 14) {
        const first = props.arguments[0];
        if (!isString(first) && first.type === 15) {
            if (!hasProp(prop, first)) first.properties.unshift(prop);
        } else if (props.callee === TO_HANDLERS) propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
            createObjectExpression([
                prop
            ]),
            props
        ]);
        else props.arguments.unshift(createObjectExpression([
            prop
        ]));
        !propsWithInjection && (propsWithInjection = props);
    } else if (props.type === 15) {
        if (!hasProp(prop, props)) props.properties.unshift(prop);
        propsWithInjection = props;
    } else {
        propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
            createObjectExpression([
                prop
            ]),
            props
        ]);
        if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) parentCall = callPath[callPath.length - 2];
    }
    if (node.type === 13) {
        if (parentCall) parentCall.arguments[0] = propsWithInjection;
        else node.props = propsWithInjection;
    } else if (parentCall) parentCall.arguments[0] = propsWithInjection;
    else node.arguments[2] = propsWithInjection;
}
function hasProp(prop, props) {
    let result = false;
    if (prop.key.type === 4) {
        const propKeyName = prop.key.content;
        result = props.properties.some((p)=>p.key.type === 4 && p.key.content === propKeyName);
    }
    return result;
}
function toValidAssetId(name, type) {
    return `_${type}_${name.replace(/[^\w]/g, (searchValue, replaceValue)=>{
        return searchValue === "-" ? "_" : name.charCodeAt(replaceValue).toString();
    })}`;
}
function getMemoedVNodeCall(node) {
    if (node.type === 14 && node.callee === WITH_MEMO) return node.arguments[1].returns;
    else return node;
}
const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
const defaultParserOptions = {
    parseMode: "base",
    ns: 0,
    delimiters: [
        `{{`,
        `}}`
    ],
    getNamespace: ()=>0,
    isVoidTag: NO,
    isPreTag: NO,
    isCustomElement: NO,
    onError: defaultOnError,
    onWarn: defaultOnWarn,
    comments: true,
    prefixIdentifiers: false
};
let currentOptions = defaultParserOptions;
let currentRoot = null;
let currentInput = "";
let currentOpenTag = null;
let currentProp = null;
let currentAttrValue = "";
let currentAttrStartIndex = -1;
let currentAttrEndIndex = -1;
let inPre = 0;
let inVPre = false;
let currentVPreBoundary = null;
const stack = [];
const tokenizer = new Tokenizer(stack, {
    onerr: emitError,
    ontext (start, end) {
        onText(getSlice(start, end), start, end);
    },
    ontextentity (char, start, end) {
        onText(char, start, end);
    },
    oninterpolation (start, end) {
        if (inVPre) return onText(getSlice(start, end), start, end);
        let innerStart = start + tokenizer.delimiterOpen.length;
        let innerEnd = end - tokenizer.delimiterClose.length;
        while(isWhitespace(currentInput.charCodeAt(innerStart)))innerStart++;
        while(isWhitespace(currentInput.charCodeAt(innerEnd - 1)))innerEnd--;
        let exp = getSlice(innerStart, innerEnd);
        if (exp.includes("&")) exp = currentOptions.decodeEntities(exp, false);
        addNode({
            type: 5,
            content: createExp(exp, false, getLoc(innerStart, innerEnd)),
            loc: getLoc(start, end)
        });
    },
    onopentagname (start, end) {
        const name = getSlice(start, end);
        currentOpenTag = {
            type: 1,
            tag: name,
            ns: currentOptions.getNamespace(name, stack[0], currentOptions.ns),
            tagType: 0,
            // will be refined on tag close
            props: [],
            children: [],
            loc: getLoc(start - 1, end),
            codegenNode: void 0
        };
    },
    onopentagend (end) {
        endOpenTag(end);
    },
    onclosetag (start, end) {
        const name = getSlice(start, end);
        if (!currentOptions.isVoidTag(name)) {
            let found = false;
            for(let i = 0; i < stack.length; i++){
                const e = stack[i];
                if (e.tag.toLowerCase() === name.toLowerCase()) {
                    found = true;
                    if (i > 0) emitError(24, stack[0].loc.start.offset);
                    for(let j = 0; j <= i; j++){
                        const el = stack.shift();
                        onCloseTag(el, end, j < i);
                    }
                    break;
                }
            }
            if (!found) emitError(23, backTrack(start, 60));
        }
    },
    onselfclosingtag (end) {
        var _a;
        const name = currentOpenTag.tag;
        currentOpenTag.isSelfClosing = true;
        endOpenTag(end);
        if (((_a = stack[0]) == null ? void 0 : _a.tag) === name) onCloseTag(stack.shift(), end);
    },
    onattribname (start, end) {
        currentProp = {
            type: 6,
            name: getSlice(start, end),
            nameLoc: getLoc(start, end),
            value: void 0,
            loc: getLoc(start)
        };
    },
    ondirname (start, end) {
        const raw = getSlice(start, end);
        const name = raw === "." || raw === ":" ? "bind" : raw === "@" ? "on" : raw === "#" ? "slot" : raw.slice(2);
        if (!inVPre && name === "") emitError(26, start);
        if (inVPre || name === "") currentProp = {
            type: 6,
            name: raw,
            nameLoc: getLoc(start, end),
            value: void 0,
            loc: getLoc(start)
        };
        else {
            currentProp = {
                type: 7,
                name,
                rawName: raw,
                exp: void 0,
                arg: void 0,
                modifiers: raw === "." ? [
                    "prop"
                ] : [],
                loc: getLoc(start)
            };
            if (name === "pre") {
                inVPre = tokenizer.inVPre = true;
                currentVPreBoundary = currentOpenTag;
                const props = currentOpenTag.props;
                for(let i = 0; i < props.length; i++)if (props[i].type === 7) props[i] = dirToAttr(props[i]);
            }
        }
    },
    ondirarg (start, end) {
        if (start === end) return;
        const arg = getSlice(start, end);
        if (inVPre) {
            currentProp.name += arg;
            setLocEnd(currentProp.nameLoc, end);
        } else {
            const isStatic = arg[0] !== `[`;
            currentProp.arg = createExp(isStatic ? arg : arg.slice(1, -1), isStatic, getLoc(start, end), isStatic ? 3 : 0);
        }
    },
    ondirmodifier (start, end) {
        const mod = getSlice(start, end);
        if (inVPre) {
            currentProp.name += "." + mod;
            setLocEnd(currentProp.nameLoc, end);
        } else if (currentProp.name === "slot") {
            const arg = currentProp.arg;
            if (arg) {
                arg.content += "." + mod;
                setLocEnd(arg.loc, end);
            }
        } else currentProp.modifiers.push(mod);
    },
    onattribdata (start, end) {
        currentAttrValue += getSlice(start, end);
        if (currentAttrStartIndex < 0) currentAttrStartIndex = start;
        currentAttrEndIndex = end;
    },
    onattribentity (char, start, end) {
        currentAttrValue += char;
        if (currentAttrStartIndex < 0) currentAttrStartIndex = start;
        currentAttrEndIndex = end;
    },
    onattribnameend (end) {
        const start = currentProp.loc.start.offset;
        const name = getSlice(start, end);
        if (currentProp.type === 7) currentProp.rawName = name;
        if (currentOpenTag.props.some((p)=>(p.type === 7 ? p.rawName : p.name) === name)) emitError(2, start);
    },
    onattribend (quote, end) {
        if (currentOpenTag && currentProp) {
            setLocEnd(currentProp.loc, end);
            if (quote !== 0) {
                if (currentAttrValue.includes("&")) currentAttrValue = currentOptions.decodeEntities(currentAttrValue, true);
                if (currentProp.type === 6) {
                    if (currentProp.name === "class") currentAttrValue = condense(currentAttrValue).trim();
                    if (quote === 1 && !currentAttrValue) emitError(13, end);
                    currentProp.value = {
                        type: 2,
                        content: currentAttrValue,
                        loc: quote === 1 ? getLoc(currentAttrStartIndex, currentAttrEndIndex) : getLoc(currentAttrStartIndex - 1, currentAttrEndIndex + 1)
                    };
                    if (tokenizer.inSFCRoot && currentOpenTag.tag === "template" && currentProp.name === "lang" && currentAttrValue && currentAttrValue !== "html") tokenizer.enterRCDATA(toCharCodes(`</template`), 0);
                } else {
                    let expParseMode = 0 /* Normal */ ;
                    currentProp.exp = createExp(currentAttrValue, false, getLoc(currentAttrStartIndex, currentAttrEndIndex), 0, expParseMode);
                    if (currentProp.name === "for") currentProp.forParseResult = parseForExpression(currentProp.exp);
                }
            }
            if (currentProp.type !== 7 || currentProp.name !== "pre") currentOpenTag.props.push(currentProp);
        }
        currentAttrValue = "";
        currentAttrStartIndex = currentAttrEndIndex = -1;
    },
    oncomment (start, end) {
        if (currentOptions.comments) addNode({
            type: 3,
            content: getSlice(start, end),
            loc: getLoc(start - 4, end + 3)
        });
    },
    onend () {
        const end = currentInput.length;
        if (tokenizer.state !== 1) switch(tokenizer.state){
            case 5:
            case 8:
                emitError(5, end);
                break;
            case 3:
            case 4:
                emitError(25, tokenizer.sectionStart);
                break;
            case 28:
                if (tokenizer.currentSequence === Sequences.CdataEnd) emitError(6, end);
                else emitError(7, end);
                break;
            case 6:
            case 7:
            case 9:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
                emitError(9, end);
                break;
        }
        for(let index = 0; index < stack.length; index++){
            onCloseTag(stack[index], end - 1);
            emitError(24, stack[index].loc.start.offset);
        }
    },
    oncdata (start, end) {
        if (stack[0].ns !== 0) onText(getSlice(start, end), start, end);
        else emitError(1, start - 9);
    },
    onprocessinginstruction (start) {
        if ((stack[0] ? stack[0].ns : currentOptions.ns) === 0) emitError(21, start - 1);
    }
});
const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
const stripParensRE = /^\(|\)$/g;
function parseForExpression(input) {
    const loc = input.loc;
    const exp = input.content;
    const inMatch = exp.match(forAliasRE);
    if (!inMatch) return;
    const [, LHS, RHS] = inMatch;
    const createAliasExpression = (content, offset, asParam = false)=>{
        const start = loc.start.offset + offset;
        const end = start + content.length;
        return createExp(content, false, getLoc(start, end), 0, asParam ? 1 /* Params */  : 0 /* Normal */ );
    };
    const result = {
        source: createAliasExpression(RHS.trim(), exp.indexOf(RHS, LHS.length)),
        value: void 0,
        key: void 0,
        index: void 0,
        finalized: false
    };
    let valueContent = LHS.trim().replace(stripParensRE, "").trim();
    const trimmedOffset = LHS.indexOf(valueContent);
    const iteratorMatch = valueContent.match(forIteratorRE);
    if (iteratorMatch) {
        valueContent = valueContent.replace(forIteratorRE, "").trim();
        const keyContent = iteratorMatch[1].trim();
        let keyOffset;
        if (keyContent) {
            keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
            result.key = createAliasExpression(keyContent, keyOffset, true);
        }
        if (iteratorMatch[2]) {
            const indexContent = iteratorMatch[2].trim();
            if (indexContent) result.index = createAliasExpression(indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length), true);
        }
    }
    if (valueContent) result.value = createAliasExpression(valueContent, trimmedOffset, true);
    return result;
}
function getSlice(start, end) {
    return currentInput.slice(start, end);
}
function endOpenTag(end) {
    if (tokenizer.inSFCRoot) currentOpenTag.innerLoc = getLoc(end + 1, end + 1);
    addNode(currentOpenTag);
    const { tag, ns } = currentOpenTag;
    if (ns === 0 && currentOptions.isPreTag(tag)) inPre++;
    if (currentOptions.isVoidTag(tag)) onCloseTag(currentOpenTag, end);
    else {
        stack.unshift(currentOpenTag);
        if (ns === 1 || ns === 2) tokenizer.inXML = true;
    }
    currentOpenTag = null;
}
function onText(content, start, end) {
    var _a;
    {
        const tag = (_a = stack[0]) == null ? void 0 : _a.tag;
        if (tag !== "script" && tag !== "style" && content.includes("&")) content = currentOptions.decodeEntities(content, false);
    }
    const parent = stack[0] || currentRoot;
    const lastNode = parent.children[parent.children.length - 1];
    if ((lastNode == null ? void 0 : lastNode.type) === 2) {
        lastNode.content += content;
        setLocEnd(lastNode.loc, end);
    } else parent.children.push({
        type: 2,
        content,
        loc: getLoc(start, end)
    });
}
function onCloseTag(el, end, isImplied = false) {
    if (isImplied) setLocEnd(el.loc, backTrack(end, 60));
    else setLocEnd(el.loc, end + 1);
    if (tokenizer.inSFCRoot) {
        if (el.children.length) el.innerLoc.end = extend({}, el.children[el.children.length - 1].loc.end);
        else el.innerLoc.end = extend({}, el.innerLoc.start);
        el.innerLoc.source = getSlice(el.innerLoc.start.offset, el.innerLoc.end.offset);
    }
    const { tag, ns } = el;
    if (!inVPre) {
        if (tag === "slot") el.tagType = 2;
        else if (isFragmentTemplate(el)) el.tagType = 3;
        else if (isComponent(el)) el.tagType = 1;
    }
    if (!tokenizer.inRCDATA) el.children = condenseWhitespace(el.children, el.tag);
    if (ns === 0 && currentOptions.isPreTag(tag)) inPre--;
    if (currentVPreBoundary === el) {
        inVPre = tokenizer.inVPre = false;
        currentVPreBoundary = null;
    }
    if (tokenizer.inXML && (stack[0] ? stack[0].ns : currentOptions.ns) === 0) tokenizer.inXML = false;
}
function backTrack(index, c) {
    let i = index;
    while(currentInput.charCodeAt(i) !== c && i >= 0)i--;
    return i;
}
const specialTemplateDir = /* @__PURE__ */ new Set([
    "if",
    "else",
    "else-if",
    "for",
    "slot"
]);
function isFragmentTemplate({ tag, props }) {
    if (tag === "template") for(let i = 0; i < props.length; i++){
        if (props[i].type === 7 && specialTemplateDir.has(props[i].name)) return true;
    }
    return false;
}
function isComponent({ tag, props }) {
    var _a;
    if (currentOptions.isCustomElement(tag)) return false;
    if (tag === "component" || isUpperCase(tag.charCodeAt(0)) || isCoreComponent(tag) || ((_a = currentOptions.isBuiltInComponent) == null ? void 0 : _a.call(currentOptions, tag)) || currentOptions.isNativeTag && !currentOptions.isNativeTag(tag)) return true;
    for(let i = 0; i < props.length; i++){
        const p = props[i];
        if (p.type === 6) {
            if (p.name === "is" && p.value) {
                if (p.value.content.startsWith("vue:")) return true;
            }
        }
    }
    return false;
}
function isUpperCase(c) {
    return c > 64 && c < 91;
}
const windowsNewlineRE = /\r\n/g;
function condenseWhitespace(nodes, tag) {
    var _a, _b;
    const shouldCondense = currentOptions.whitespace !== "preserve";
    let removedWhitespace = false;
    for(let i = 0; i < nodes.length; i++){
        const node = nodes[i];
        if (node.type === 2) {
            if (!inPre) {
                if (isAllWhitespace(node.content)) {
                    const prev = (_a = nodes[i - 1]) == null ? void 0 : _a.type;
                    const next = (_b = nodes[i + 1]) == null ? void 0 : _b.type;
                    if (!prev || !next || shouldCondense && (prev === 3 && (next === 3 || next === 1) || prev === 1 && (next === 3 || next === 1 && hasNewlineChar(node.content)))) {
                        removedWhitespace = true;
                        nodes[i] = null;
                    } else node.content = " ";
                } else if (shouldCondense) node.content = condense(node.content);
            } else node.content = node.content.replace(windowsNewlineRE, "\n");
        }
    }
    if (inPre && tag && currentOptions.isPreTag(tag)) {
        const first = nodes[0];
        if (first && first.type === 2) first.content = first.content.replace(/^\r?\n/, "");
    }
    return removedWhitespace ? nodes.filter(Boolean) : nodes;
}
function isAllWhitespace(str) {
    for(let i = 0; i < str.length; i++){
        if (!isWhitespace(str.charCodeAt(i))) return false;
    }
    return true;
}
function hasNewlineChar(str) {
    for(let i = 0; i < str.length; i++){
        const c = str.charCodeAt(i);
        if (c === 10 || c === 13) return true;
    }
    return false;
}
function condense(str) {
    let ret = "";
    let prevCharIsWhitespace = false;
    for(let i = 0; i < str.length; i++){
        if (isWhitespace(str.charCodeAt(i))) {
            if (!prevCharIsWhitespace) {
                ret += " ";
                prevCharIsWhitespace = true;
            }
        } else {
            ret += str[i];
            prevCharIsWhitespace = false;
        }
    }
    return ret;
}
function addNode(node) {
    (stack[0] || currentRoot).children.push(node);
}
function getLoc(start, end) {
    return {
        start: tokenizer.getPos(start),
        // @ts-expect-error allow late attachment
        end: end == null ? end : tokenizer.getPos(end),
        // @ts-expect-error allow late attachment
        source: end == null ? end : getSlice(start, end)
    };
}
function setLocEnd(loc, end) {
    loc.end = tokenizer.getPos(end);
    loc.source = getSlice(loc.start.offset, end);
}
function dirToAttr(dir) {
    const attr = {
        type: 6,
        name: dir.rawName,
        nameLoc: getLoc(dir.loc.start.offset, dir.loc.start.offset + dir.rawName.length),
        value: void 0,
        loc: dir.loc
    };
    if (dir.exp) {
        const loc = dir.exp.loc;
        if (loc.end.offset < dir.loc.end.offset) {
            loc.start.offset--;
            loc.start.column--;
            loc.end.offset++;
            loc.end.column++;
        }
        attr.value = {
            type: 2,
            content: dir.exp.content,
            loc
        };
    }
    return attr;
}
function createExp(content, isStatic = false, loc, constType = 0, parseMode = 0 /* Normal */ ) {
    const exp = createSimpleExpression(content, isStatic, loc, constType);
    return exp;
}
function emitError(code, index, message) {
    currentOptions.onError(createCompilerError(code, getLoc(index, index), void 0, message));
}
function reset() {
    tokenizer.reset();
    currentOpenTag = null;
    currentProp = null;
    currentAttrValue = "";
    currentAttrStartIndex = -1;
    currentAttrEndIndex = -1;
    stack.length = 0;
}
function baseParse(input, options) {
    reset();
    currentInput = input;
    currentOptions = extend({}, defaultParserOptions);
    if (options) {
        let key;
        for(key in options)if (options[key] != null) currentOptions[key] = options[key];
    }
    if (!currentOptions.decodeEntities) throw new Error(`[@vue/compiler-core] decodeEntities option is required in browser builds.`);
    tokenizer.mode = currentOptions.parseMode === "html" ? 1 : currentOptions.parseMode === "sfc" ? 2 : 0;
    tokenizer.inXML = currentOptions.ns === 1 || currentOptions.ns === 2;
    const delimiters = options == null ? void 0 : options.delimiters;
    if (delimiters) {
        tokenizer.delimiterOpen = toCharCodes(delimiters[0]);
        tokenizer.delimiterClose = toCharCodes(delimiters[1]);
    }
    const root = currentRoot = createRoot([], input);
    tokenizer.parse(currentInput);
    root.loc = getLoc(0, input.length);
    root.children = condenseWhitespace(root.children);
    currentRoot = null;
    return root;
}
function hoistStatic(root, context) {
    walk(root, context, // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    isSingleElementRoot(root, root.children[0]));
}
function isSingleElementRoot(root, child) {
    const { children } = root;
    return children.length === 1 && child.type === 1 && !isSlotOutlet(child);
}
function walk(node, context, doNotHoistNode = false) {
    const { children } = node;
    const originalCount = children.length;
    let hoistedCount = 0;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if (child.type === 1 && child.tagType === 0) {
            const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
            if (constantType > 0) {
                if (constantType >= 2) {
                    child.codegenNode.patchFlag = -1 + ` /* HOISTED */`;
                    child.codegenNode = context.hoist(child.codegenNode);
                    hoistedCount++;
                    continue;
                }
            } else {
                const codegenNode = child.codegenNode;
                if (codegenNode.type === 13) {
                    const flag = getPatchFlag(codegenNode);
                    if ((!flag || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
                        const props = getNodeProps(child);
                        if (props) codegenNode.props = context.hoist(props);
                    }
                    if (codegenNode.dynamicProps) codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
                }
            }
        }
        if (child.type === 1) {
            const isComponent = child.tagType === 1;
            if (isComponent) context.scopes.vSlot++;
            walk(child, context);
            if (isComponent) context.scopes.vSlot--;
        } else if (child.type === 11) walk(child, context, child.children.length === 1);
        else if (child.type === 9) for(let i2 = 0; i2 < child.branches.length; i2++)walk(child.branches[i2], context, child.branches[i2].children.length === 1);
    }
    if (hoistedCount && context.transformHoist) context.transformHoist(children, context, node);
    if (hoistedCount && hoistedCount === originalCount && node.type === 1 && node.tagType === 0 && node.codegenNode && node.codegenNode.type === 13 && isArray(node.codegenNode.children)) {
        const hoisted = context.hoist(createArrayExpression(node.codegenNode.children));
        if (context.hmr) hoisted.content = `[...${hoisted.content}]`;
        node.codegenNode.children = hoisted;
    }
}
function getConstantType(node, context) {
    const { constantCache } = context;
    switch(node.type){
        case 1:
            if (node.tagType !== 0) return 0;
            const cached = constantCache.get(node);
            if (cached !== void 0) return cached;
            const codegenNode = node.codegenNode;
            if (codegenNode.type !== 13) return 0;
            if (codegenNode.isBlock && node.tag !== "svg" && node.tag !== "foreignObject") return 0;
            const flag = getPatchFlag(codegenNode);
            if (!flag) {
                let returnType2 = 3;
                const generatedPropsType = getGeneratedPropsConstantType(node, context);
                if (generatedPropsType === 0) {
                    constantCache.set(node, 0);
                    return 0;
                }
                if (generatedPropsType < returnType2) returnType2 = generatedPropsType;
                for(let i = 0; i < node.children.length; i++){
                    const childType = getConstantType(node.children[i], context);
                    if (childType === 0) {
                        constantCache.set(node, 0);
                        return 0;
                    }
                    if (childType < returnType2) returnType2 = childType;
                }
                if (returnType2 > 1) for(let i = 0; i < node.props.length; i++){
                    const p = node.props[i];
                    if (p.type === 7 && p.name === "bind" && p.exp) {
                        const expType = getConstantType(p.exp, context);
                        if (expType === 0) {
                            constantCache.set(node, 0);
                            return 0;
                        }
                        if (expType < returnType2) returnType2 = expType;
                    }
                }
                if (codegenNode.isBlock) {
                    for(let i = 0; i < node.props.length; i++){
                        const p = node.props[i];
                        if (p.type === 7) {
                            constantCache.set(node, 0);
                            return 0;
                        }
                    }
                    context.removeHelper(OPEN_BLOCK);
                    context.removeHelper(getVNodeBlockHelper(context.inSSR, codegenNode.isComponent));
                    codegenNode.isBlock = false;
                    context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
                }
                constantCache.set(node, returnType2);
                return returnType2;
            } else {
                constantCache.set(node, 0);
                return 0;
            }
        case 2:
        case 3:
            return 3;
        case 9:
        case 11:
        case 10:
            return 0;
        case 5:
        case 12:
            return getConstantType(node.content, context);
        case 4:
            return node.constType;
        case 8:
            let returnType = 3;
            for(let i = 0; i < node.children.length; i++){
                const child = node.children[i];
                if (isString(child) || isSymbol(child)) continue;
                const childType = getConstantType(child, context);
                if (childType === 0) return 0;
                else if (childType < returnType) returnType = childType;
            }
            return returnType;
        default:
            return 0;
    }
}
const allowHoistedHelperSet = /* @__PURE__ */ new Set([
    NORMALIZE_CLASS,
    NORMALIZE_STYLE,
    NORMALIZE_PROPS,
    GUARD_REACTIVE_PROPS
]);
function getConstantTypeOfHelperCall(value, context) {
    if (value.type === 14 && !isString(value.callee) && allowHoistedHelperSet.has(value.callee)) {
        const arg = value.arguments[0];
        if (arg.type === 4) return getConstantType(arg, context);
        else if (arg.type === 14) return getConstantTypeOfHelperCall(arg, context);
    }
    return 0;
}
function getGeneratedPropsConstantType(node, context) {
    let returnType = 3;
    const props = getNodeProps(node);
    if (props && props.type === 15) {
        const { properties } = props;
        for(let i = 0; i < properties.length; i++){
            const { key, value } = properties[i];
            const keyType = getConstantType(key, context);
            if (keyType === 0) return keyType;
            if (keyType < returnType) returnType = keyType;
            let valueType;
            if (value.type === 4) valueType = getConstantType(value, context);
            else if (value.type === 14) valueType = getConstantTypeOfHelperCall(value, context);
            else valueType = 0;
            if (valueType === 0) return valueType;
            if (valueType < returnType) returnType = valueType;
        }
    }
    return returnType;
}
function getNodeProps(node) {
    const codegenNode = node.codegenNode;
    if (codegenNode.type === 13) return codegenNode.props;
}
function getPatchFlag(node) {
    const flag = node.patchFlag;
    return flag ? parseInt(flag, 10) : void 0;
}
function createTransformContext(root, { filename = "", prefixIdentifiers = false, hoistStatic: hoistStatic2 = false, hmr = false, cacheHandlers = false, nodeTransforms = [], directiveTransforms = {}, transformHoist = null, isBuiltInComponent = NOOP, isCustomElement = NOOP, expressionPlugins = [], scopeId = null, slotted = true, ssr = false, inSSR = false, ssrCssVars = ``, bindingMetadata = EMPTY_OBJ, inline = false, isTS = false, onError = defaultOnError, onWarn = defaultOnWarn, compatConfig }) {
    const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
    const context = {
        // options
        filename,
        selfName: nameMatch && capitalize(camelize(nameMatch[1])),
        prefixIdentifiers,
        hoistStatic: hoistStatic2,
        hmr,
        cacheHandlers,
        nodeTransforms,
        directiveTransforms,
        transformHoist,
        isBuiltInComponent,
        isCustomElement,
        expressionPlugins,
        scopeId,
        slotted,
        ssr,
        inSSR,
        ssrCssVars,
        bindingMetadata,
        inline,
        isTS,
        onError,
        onWarn,
        compatConfig,
        // state
        root,
        helpers: /* @__PURE__ */ new Map(),
        components: /* @__PURE__ */ new Set(),
        directives: /* @__PURE__ */ new Set(),
        hoists: [],
        imports: [],
        constantCache: /* @__PURE__ */ new WeakMap(),
        temps: 0,
        cached: 0,
        identifiers: /* @__PURE__ */ Object.create(null),
        scopes: {
            vFor: 0,
            vSlot: 0,
            vPre: 0,
            vOnce: 0
        },
        parent: null,
        currentNode: root,
        childIndex: 0,
        inVOnce: false,
        // methods
        helper (name) {
            const count = context.helpers.get(name) || 0;
            context.helpers.set(name, count + 1);
            return name;
        },
        removeHelper (name) {
            const count = context.helpers.get(name);
            if (count) {
                const currentCount = count - 1;
                if (!currentCount) context.helpers.delete(name);
                else context.helpers.set(name, currentCount);
            }
        },
        helperString (name) {
            return `_${helperNameMap[context.helper(name)]}`;
        },
        replaceNode (node) {
            if (!context.currentNode) throw new Error(`Node being replaced is already removed.`);
            if (!context.parent) throw new Error(`Cannot replace root node.`);
            context.parent.children[context.childIndex] = context.currentNode = node;
        },
        removeNode (node) {
            if (!context.parent) throw new Error(`Cannot remove root node.`);
            const list = context.parent.children;
            const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
            if (removalIndex < 0) throw new Error(`node being removed is not a child of current parent`);
            if (!node || node === context.currentNode) {
                context.currentNode = null;
                context.onNodeRemoved();
            } else if (context.childIndex > removalIndex) {
                context.childIndex--;
                context.onNodeRemoved();
            }
            context.parent.children.splice(removalIndex, 1);
        },
        onNodeRemoved: NOOP,
        addIdentifiers (exp) {},
        removeIdentifiers (exp) {},
        hoist (exp) {
            if (isString(exp)) exp = createSimpleExpression(exp);
            context.hoists.push(exp);
            const identifier = createSimpleExpression(`_hoisted_${context.hoists.length}`, false, exp.loc, 2);
            identifier.hoisted = exp;
            return identifier;
        },
        cache (exp, isVNode = false) {
            return createCacheExpression(context.cached++, exp, isVNode);
        }
    };
    return context;
}
function transform(root, options) {
    const context = createTransformContext(root, options);
    traverseNode(root, context);
    if (options.hoistStatic) hoistStatic(root, context);
    if (!options.ssr) createRootCodegen(root, context);
    root.helpers = /* @__PURE__ */ new Set([
        ...context.helpers.keys()
    ]);
    root.components = [
        ...context.components
    ];
    root.directives = [
        ...context.directives
    ];
    root.imports = context.imports;
    root.hoists = context.hoists;
    root.temps = context.temps;
    root.cached = context.cached;
    root.transformed = true;
}
function createRootCodegen(root, context) {
    const { helper } = context;
    const { children } = root;
    if (children.length === 1) {
        const child = children[0];
        if (isSingleElementRoot(root, child) && child.codegenNode) {
            const codegenNode = child.codegenNode;
            if (codegenNode.type === 13) convertToBlock(codegenNode, context);
            root.codegenNode = codegenNode;
        } else root.codegenNode = child;
    } else if (children.length > 1) {
        let patchFlag = 64;
        let patchFlagText = PatchFlagNames[64];
        if (children.filter((c)=>c.type !== 3).length === 1) {
            patchFlag |= 2048;
            patchFlagText += `, ${PatchFlagNames[2048]}`;
        }
        root.codegenNode = createVNodeCall(context, helper(FRAGMENT), void 0, root.children, patchFlag + ` /* ${patchFlagText} */`, void 0, void 0, true, void 0, false);
    }
}
function traverseChildren(parent, context) {
    let i = 0;
    const nodeRemoved = ()=>{
        i--;
    };
    for(; i < parent.children.length; i++){
        const child = parent.children[i];
        if (isString(child)) continue;
        context.parent = parent;
        context.childIndex = i;
        context.onNodeRemoved = nodeRemoved;
        traverseNode(child, context);
    }
}
function traverseNode(node, context) {
    context.currentNode = node;
    const { nodeTransforms } = context;
    const exitFns = [];
    for(let i2 = 0; i2 < nodeTransforms.length; i2++){
        const onExit = nodeTransforms[i2](node, context);
        if (onExit) {
            if (isArray(onExit)) exitFns.push(...onExit);
            else exitFns.push(onExit);
        }
        if (!context.currentNode) return;
        else node = context.currentNode;
    }
    switch(node.type){
        case 3:
            if (!context.ssr) context.helper(CREATE_COMMENT);
            break;
        case 5:
            if (!context.ssr) context.helper(TO_DISPLAY_STRING);
            break;
        case 9:
            for(let i2 = 0; i2 < node.branches.length; i2++)traverseNode(node.branches[i2], context);
            break;
        case 10:
        case 11:
        case 1:
        case 0:
            traverseChildren(node, context);
            break;
    }
    context.currentNode = node;
    let i = exitFns.length;
    while(i--)exitFns[i]();
}
function createStructuralDirectiveTransform(name, fn) {
    const matches = isString(name) ? (n)=>n === name : (n)=>name.test(n);
    return (node, context)=>{
        if (node.type === 1) {
            const { props } = node;
            if (node.tagType === 3 && props.some(isVSlot)) return;
            const exitFns = [];
            for(let i = 0; i < props.length; i++){
                const prop = props[i];
                if (prop.type === 7 && matches(prop.name)) {
                    props.splice(i, 1);
                    i--;
                    const onExit = fn(node, prop, context);
                    if (onExit) exitFns.push(onExit);
                }
            }
            return exitFns;
        }
    };
}
const PURE_ANNOTATION = `/*#__PURE__*/`;
const aliasHelper = (s)=>`${helperNameMap[s]}: _${helperNameMap[s]}`;
function createCodegenContext(ast, { mode = "function", prefixIdentifiers = mode === "module", sourceMap = false, filename = `template.vue.html`, scopeId = null, optimizeImports = false, runtimeGlobalName = `Vue`, runtimeModuleName = `vue`, ssrRuntimeModuleName = "vue/server-renderer", ssr = false, isTS = false, inSSR = false }) {
    const context = {
        mode,
        prefixIdentifiers,
        sourceMap,
        filename,
        scopeId,
        optimizeImports,
        runtimeGlobalName,
        runtimeModuleName,
        ssrRuntimeModuleName,
        ssr,
        isTS,
        inSSR,
        source: ast.source,
        code: ``,
        column: 1,
        line: 1,
        offset: 0,
        indentLevel: 0,
        pure: false,
        map: void 0,
        helper (key) {
            return `_${helperNameMap[key]}`;
        },
        push (code, newlineIndex = -2 /* None */ , node) {
            context.code += code;
        },
        indent () {
            newline(++context.indentLevel);
        },
        deindent (withoutNewLine = false) {
            if (withoutNewLine) --context.indentLevel;
            else newline(--context.indentLevel);
        },
        newline () {
            newline(context.indentLevel);
        }
    };
    function newline(n) {
        context.push("\n" + `  `.repeat(n), 0 /* Start */ );
    }
    return context;
}
function generate(ast, options = {}) {
    const context = createCodegenContext(ast, options);
    if (options.onContextCreated) options.onContextCreated(context);
    const { mode, push, prefixIdentifiers, indent, deindent, newline, scopeId, ssr } = context;
    const helpers = Array.from(ast.helpers);
    const hasHelpers = helpers.length > 0;
    const useWithBlock = !prefixIdentifiers && mode !== "module";
    const isSetupInlined = false;
    const preambleContext = isSetupInlined ? createCodegenContext(ast, options) : context;
    genFunctionPreamble(ast, preambleContext);
    const functionName = ssr ? `ssrRender` : `render`;
    const args = ssr ? [
        "_ctx",
        "_push",
        "_parent",
        "_attrs"
    ] : [
        "_ctx",
        "_cache"
    ];
    const signature = args.join(", ");
    push(`function ${functionName}(${signature}) {`);
    indent();
    if (useWithBlock) {
        push(`with (_ctx) {`);
        indent();
        if (hasHelpers) {
            push(`const { ${helpers.map(aliasHelper).join(", ")} } = _Vue
`, -1 /* End */ );
            newline();
        }
    }
    if (ast.components.length) {
        genAssets(ast.components, "component", context);
        if (ast.directives.length || ast.temps > 0) newline();
    }
    if (ast.directives.length) {
        genAssets(ast.directives, "directive", context);
        if (ast.temps > 0) newline();
    }
    if (ast.temps > 0) {
        push(`let `);
        for(let i = 0; i < ast.temps; i++)push(`${i > 0 ? `, ` : ``}_temp${i}`);
    }
    if (ast.components.length || ast.directives.length || ast.temps) {
        push(`
`, 0 /* Start */ );
        newline();
    }
    if (!ssr) push(`return `);
    if (ast.codegenNode) genNode(ast.codegenNode, context);
    else push(`null`);
    if (useWithBlock) {
        deindent();
        push(`}`);
    }
    deindent();
    push(`}`);
    return {
        ast,
        code: context.code,
        preamble: isSetupInlined ? preambleContext.code : ``,
        map: context.map ? context.map.toJSON() : void 0
    };
}
function genFunctionPreamble(ast, context) {
    const { ssr, prefixIdentifiers, push, newline, runtimeModuleName, runtimeGlobalName, ssrRuntimeModuleName } = context;
    const VueBinding = runtimeGlobalName;
    const helpers = Array.from(ast.helpers);
    if (helpers.length > 0) {
        push(`const _Vue = ${VueBinding}
`, -1 /* End */ );
        if (ast.hoists.length) {
            const staticHelpers = [
                CREATE_VNODE,
                CREATE_ELEMENT_VNODE,
                CREATE_COMMENT,
                CREATE_TEXT,
                CREATE_STATIC
            ].filter((helper)=>helpers.includes(helper)).map(aliasHelper).join(", ");
            push(`const { ${staticHelpers} } = _Vue
`, -1 /* End */ );
        }
    }
    genHoists(ast.hoists, context);
    newline();
    push(`return `);
}
function genAssets(assets, type, { helper, push, newline, isTS }) {
    const resolver = helper(type === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);
    for(let i = 0; i < assets.length; i++){
        let id = assets[i];
        const maybeSelfReference = id.endsWith("__self");
        if (maybeSelfReference) id = id.slice(0, -6);
        push(`const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`);
        if (i < assets.length - 1) newline();
    }
}
function genHoists(hoists, context) {
    if (!hoists.length) return;
    context.pure = true;
    const { push, newline, helper, scopeId, mode } = context;
    newline();
    for(let i = 0; i < hoists.length; i++){
        const exp = hoists[i];
        if (exp) {
            push(`const _hoisted_${i + 1} = ${``}`);
            genNode(exp, context);
            newline();
        }
    }
    context.pure = false;
}
function isText(n) {
    return isString(n) || n.type === 4 || n.type === 2 || n.type === 5 || n.type === 8;
}
function genNodeListAsArray(nodes, context) {
    const multilines = nodes.length > 3 || nodes.some((n)=>isArray(n) || !isText(n));
    context.push(`[`);
    multilines && context.indent();
    genNodeList(nodes, context, multilines);
    multilines && context.deindent();
    context.push(`]`);
}
function genNodeList(nodes, context, multilines = false, comma = true) {
    const { push, newline } = context;
    for(let i = 0; i < nodes.length; i++){
        const node = nodes[i];
        if (isString(node)) push(node, -3 /* Unknown */ );
        else if (isArray(node)) genNodeListAsArray(node, context);
        else genNode(node, context);
        if (i < nodes.length - 1) {
            if (multilines) {
                comma && push(",");
                newline();
            } else comma && push(", ");
        }
    }
}
function genNode(node, context) {
    if (isString(node)) {
        context.push(node, -3 /* Unknown */ );
        return;
    }
    if (isSymbol(node)) {
        context.push(context.helper(node));
        return;
    }
    switch(node.type){
        case 1:
        case 9:
        case 11:
            assert(node.codegenNode != null, `Codegen node is missing for element/if/for node. Apply appropriate transforms first.`);
            genNode(node.codegenNode, context);
            break;
        case 2:
            genText(node, context);
            break;
        case 4:
            genExpression(node, context);
            break;
        case 5:
            genInterpolation(node, context);
            break;
        case 12:
            genNode(node.codegenNode, context);
            break;
        case 8:
            genCompoundExpression(node, context);
            break;
        case 3:
            genComment(node, context);
            break;
        case 13:
            genVNodeCall(node, context);
            break;
        case 14:
            genCallExpression(node, context);
            break;
        case 15:
            genObjectExpression(node, context);
            break;
        case 17:
            genArrayExpression(node, context);
            break;
        case 18:
            genFunctionExpression(node, context);
            break;
        case 19:
            genConditionalExpression(node, context);
            break;
        case 20:
            genCacheExpression(node, context);
            break;
        case 21:
            genNodeList(node.body, context, true, false);
            break;
        case 22:
            break;
        case 23:
            break;
        case 24:
            break;
        case 25:
            break;
        case 26:
            break;
        case 10:
            break;
        default:
            {
                assert(false, `unhandled codegen node type: ${node.type}`);
                const exhaustiveCheck = node;
                return exhaustiveCheck;
            }
    }
}
function genText(node, context) {
    context.push(JSON.stringify(node.content), -3 /* Unknown */ , node);
}
function genExpression(node, context) {
    const { content, isStatic } = node;
    context.push(isStatic ? JSON.stringify(content) : content, -3 /* Unknown */ , node);
}
function genInterpolation(node, context) {
    const { push, helper, pure } = context;
    if (pure) push(PURE_ANNOTATION);
    push(`${helper(TO_DISPLAY_STRING)}(`);
    genNode(node.content, context);
    push(`)`);
}
function genCompoundExpression(node, context) {
    for(let i = 0; i < node.children.length; i++){
        const child = node.children[i];
        if (isString(child)) context.push(child, -3 /* Unknown */ );
        else genNode(child, context);
    }
}
function genExpressionAsPropertyKey(node, context) {
    const { push } = context;
    if (node.type === 8) {
        push(`[`);
        genCompoundExpression(node, context);
        push(`]`);
    } else if (node.isStatic) {
        const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
        push(text, -2 /* None */ , node);
    } else push(`[${node.content}]`, -3 /* Unknown */ , node);
}
function genComment(node, context) {
    const { push, helper, pure } = context;
    if (pure) push(PURE_ANNOTATION);
    push(`${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`, -3 /* Unknown */ , node);
}
function genVNodeCall(node, context) {
    const { push, helper, pure } = context;
    const { tag, props, children, patchFlag, dynamicProps, directives, isBlock, disableTracking, isComponent } = node;
    if (directives) push(helper(WITH_DIRECTIVES) + `(`);
    if (isBlock) push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
    if (pure) push(PURE_ANNOTATION);
    const callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent) : getVNodeHelper(context.inSSR, isComponent);
    push(helper(callHelper) + `(`, -2 /* None */ , node);
    genNodeList(genNullableArgs([
        tag,
        props,
        children,
        patchFlag,
        dynamicProps
    ]), context);
    push(`)`);
    if (isBlock) push(`)`);
    if (directives) {
        push(`, `);
        genNode(directives, context);
        push(`)`);
    }
}
function genNullableArgs(args) {
    let i = args.length;
    while(i--){
        if (args[i] != null) break;
    }
    return args.slice(0, i + 1).map((arg)=>arg || `null`);
}
function genCallExpression(node, context) {
    const { push, helper, pure } = context;
    const callee = isString(node.callee) ? node.callee : helper(node.callee);
    if (pure) push(PURE_ANNOTATION);
    push(callee + `(`, -2 /* None */ , node);
    genNodeList(node.arguments, context);
    push(`)`);
}
function genObjectExpression(node, context) {
    const { push, indent, deindent, newline } = context;
    const { properties } = node;
    if (!properties.length) {
        push(`{}`, -2 /* None */ , node);
        return;
    }
    const multilines = properties.length > 1 || properties.some((p)=>p.value.type !== 4);
    push(multilines ? `{` : `{ `);
    multilines && indent();
    for(let i = 0; i < properties.length; i++){
        const { key, value } = properties[i];
        genExpressionAsPropertyKey(key, context);
        push(`: `);
        genNode(value, context);
        if (i < properties.length - 1) {
            push(`,`);
            newline();
        }
    }
    multilines && deindent();
    push(multilines ? `}` : ` }`);
}
function genArrayExpression(node, context) {
    genNodeListAsArray(node.elements, context);
}
function genFunctionExpression(node, context) {
    const { push, indent, deindent } = context;
    const { params, returns, body, newline, isSlot } = node;
    if (isSlot) push(`_${helperNameMap[WITH_CTX]}(`);
    push(`(`, -2 /* None */ , node);
    if (isArray(params)) genNodeList(params, context);
    else if (params) genNode(params, context);
    push(`) => `);
    if (newline || body) {
        push(`{`);
        indent();
    }
    if (returns) {
        if (newline) push(`return `);
        if (isArray(returns)) genNodeListAsArray(returns, context);
        else genNode(returns, context);
    } else if (body) genNode(body, context);
    if (newline || body) {
        deindent();
        push(`}`);
    }
    if (isSlot) push(`)`);
}
function genConditionalExpression(node, context) {
    const { test, consequent, alternate, newline: needNewline } = node;
    const { push, indent, deindent, newline } = context;
    if (test.type === 4) {
        const needsParens = !isSimpleIdentifier(test.content);
        needsParens && push(`(`);
        genExpression(test, context);
        needsParens && push(`)`);
    } else {
        push(`(`);
        genNode(test, context);
        push(`)`);
    }
    needNewline && indent();
    context.indentLevel++;
    needNewline || push(` `);
    push(`? `);
    genNode(consequent, context);
    context.indentLevel--;
    needNewline && newline();
    needNewline || push(` `);
    push(`: `);
    const isNested = alternate.type === 19;
    if (!isNested) context.indentLevel++;
    genNode(alternate, context);
    if (!isNested) context.indentLevel--;
    needNewline && deindent(true);
}
function genCacheExpression(node, context) {
    const { push, helper, indent, deindent, newline } = context;
    push(`_cache[${node.index}] || (`);
    if (node.isVNode) {
        indent();
        push(`${helper(SET_BLOCK_TRACKING)}(-1),`);
        newline();
    }
    push(`_cache[${node.index}] = `);
    genNode(node.value, context);
    if (node.isVNode) {
        push(`,`);
        newline();
        push(`${helper(SET_BLOCK_TRACKING)}(1),`);
        newline();
        push(`_cache[${node.index}]`);
        deindent();
    }
    push(`)`);
}
const prohibitedKeywordRE = new RegExp("\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b");
const stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function validateBrowserExpression(node, context, asParams = false, asRawStatements = false) {
    const exp = node.content;
    if (!exp.trim()) return;
    try {
        new Function(asRawStatements ? ` ${exp} ` : `return ${asParams ? `(${exp}) => {}` : `(${exp})`}`);
    } catch (e) {
        let message = e.message;
        const keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
        if (keywordMatch) message = `avoid using JavaScript keyword as property name: "${keywordMatch[0]}"`;
        context.onError(createCompilerError(45, node.loc, void 0, message));
    }
}
const transformExpression = (node, context)=>{
    if (node.type === 5) node.content = processExpression(node.content, context);
    else if (node.type === 1) for(let i = 0; i < node.props.length; i++){
        const dir = node.props[i];
        if (dir.type === 7 && dir.name !== "for") {
            const exp = dir.exp;
            const arg = dir.arg;
            if (exp && exp.type === 4 && !(dir.name === "on" && arg)) dir.exp = processExpression(exp, context, // slot args must be processed as function params
            dir.name === "slot");
            if (arg && arg.type === 4 && !arg.isStatic) dir.arg = processExpression(arg, context);
        }
    }
};
function processExpression(node, context, asParams = false, asRawStatements = false, localVars = Object.create(context.identifiers)) {
    validateBrowserExpression(node, context, asParams, asRawStatements);
    return node;
}
const transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, (node, dir, context)=>{
    return processIf(node, dir, context, (ifNode, branch, isRoot)=>{
        const siblings = context.parent.children;
        let i = siblings.indexOf(ifNode);
        let key = 0;
        while(i-- >= 0){
            const sibling = siblings[i];
            if (sibling && sibling.type === 9) key += sibling.branches.length;
        }
        return ()=>{
            if (isRoot) ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
            else {
                const parentCondition = getParentCondition(ifNode.codegenNode);
                parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
            }
        };
    });
});
function processIf(node, dir, context, processCodegen) {
    if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
        const loc = dir.exp ? dir.exp.loc : node.loc;
        context.onError(createCompilerError(28, dir.loc));
        dir.exp = createSimpleExpression(`true`, false, loc);
    }
    if (dir.exp) validateBrowserExpression(dir.exp, context);
    if (dir.name === "if") {
        const branch = createIfBranch(node, dir);
        const ifNode = {
            type: 9,
            loc: node.loc,
            branches: [
                branch
            ]
        };
        context.replaceNode(ifNode);
        if (processCodegen) return processCodegen(ifNode, branch, true);
    } else {
        const siblings = context.parent.children;
        const comments = [];
        let i = siblings.indexOf(node);
        while(i-- >= -1){
            const sibling = siblings[i];
            if (sibling && sibling.type === 3) {
                context.removeNode(sibling);
                comments.unshift(sibling);
                continue;
            }
            if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
                context.removeNode(sibling);
                continue;
            }
            if (sibling && sibling.type === 9) {
                if (dir.name === "else-if" && sibling.branches[sibling.branches.length - 1].condition === void 0) context.onError(createCompilerError(30, node.loc));
                context.removeNode();
                const branch = createIfBranch(node, dir);
                if (comments.length && // #3619 ignore comments if the v-if is direct child of <transition>
                !(context.parent && context.parent.type === 1 && (context.parent.tag === "transition" || context.parent.tag === "Transition"))) branch.children = [
                    ...comments,
                    ...branch.children
                ];
                {
                    const key = branch.userKey;
                    if (key) sibling.branches.forEach(({ userKey })=>{
                        if (isSameKey(userKey, key)) context.onError(createCompilerError(29, branch.userKey.loc));
                    });
                }
                sibling.branches.push(branch);
                const onExit = processCodegen && processCodegen(sibling, branch, false);
                traverseNode(branch, context);
                if (onExit) onExit();
                context.currentNode = null;
            } else context.onError(createCompilerError(30, node.loc));
            break;
        }
    }
}
function createIfBranch(node, dir) {
    const isTemplateIf = node.tagType === 3;
    return {
        type: 10,
        loc: node.loc,
        condition: dir.name === "else" ? void 0 : dir.exp,
        children: isTemplateIf && !findDir(node, "for") ? node.children : [
            node
        ],
        userKey: findProp(node, `key`),
        isTemplateIf
    };
}
function createCodegenNodeForBranch(branch, keyIndex, context) {
    if (branch.condition) return createConditionalExpression(branch.condition, createChildrenCodegenNode(branch, keyIndex, context), // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    createCallExpression(context.helper(CREATE_COMMENT), [
        '"v-if"',
        "true"
    ]));
    else return createChildrenCodegenNode(branch, keyIndex, context);
}
function createChildrenCodegenNode(branch, keyIndex, context) {
    const { helper } = context;
    const keyProperty = createObjectProperty(`key`, createSimpleExpression(`${keyIndex}`, false, locStub, 2));
    const { children } = branch;
    const firstChild = children[0];
    const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
    if (needFragmentWrapper) {
        if (children.length === 1 && firstChild.type === 11) {
            const vnodeCall = firstChild.codegenNode;
            injectProp(vnodeCall, keyProperty, context);
            return vnodeCall;
        } else {
            let patchFlag = 64;
            let patchFlagText = PatchFlagNames[64];
            if (!branch.isTemplateIf && children.filter((c)=>c.type !== 3).length === 1) {
                patchFlag |= 2048;
                patchFlagText += `, ${PatchFlagNames[2048]}`;
            }
            return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([
                keyProperty
            ]), children, patchFlag + ` /* ${patchFlagText} */`, void 0, void 0, true, false, false, branch.loc);
        }
    } else {
        const ret = firstChild.codegenNode;
        const vnodeCall = getMemoedVNodeCall(ret);
        if (vnodeCall.type === 13) convertToBlock(vnodeCall, context);
        injectProp(vnodeCall, keyProperty, context);
        return ret;
    }
}
function isSameKey(a, b) {
    if (!a || a.type !== b.type) return false;
    if (a.type === 6) {
        if (a.value.content !== b.value.content) return false;
    } else {
        const exp = a.exp;
        const branchExp = b.exp;
        if (exp.type !== branchExp.type) return false;
        if (exp.type !== 4 || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) return false;
    }
    return true;
}
function getParentCondition(node) {
    while(true){
        if (node.type === 19) {
            if (node.alternate.type === 19) node = node.alternate;
            else return node;
        } else if (node.type === 20) node = node.value;
    }
}
const transformFor = createStructuralDirectiveTransform("for", (node, dir, context)=>{
    const { helper, removeHelper } = context;
    return processFor(node, dir, context, (forNode)=>{
        const renderExp = createCallExpression(helper(RENDER_LIST), [
            forNode.source
        ]);
        const isTemplate = isTemplateNode(node);
        const memo = findDir(node, "memo");
        const keyProp = findProp(node, `key`);
        const keyExp = keyProp && (keyProp.type === 6 ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp);
        const keyProperty = keyProp ? createObjectProperty(`key`, keyExp) : null;
        const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
        const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
        forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), void 0, renderExp, fragmentFlag + ` /* ${PatchFlagNames[fragmentFlag]} */`, void 0, void 0, true, !isStableFragment, false, node.loc);
        return ()=>{
            let childBlock;
            const { children } = forNode;
            if (isTemplate) node.children.some((c)=>{
                if (c.type === 1) {
                    const key = findProp(c, "key");
                    if (key) {
                        context.onError(createCompilerError(33, key.loc));
                        return true;
                    }
                }
            });
            const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
            const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
            if (slotOutlet) {
                childBlock = slotOutlet.codegenNode;
                if (isTemplate && keyProperty) injectProp(childBlock, keyProperty, context);
            } else if (needFragmentWrapper) childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([
                keyProperty
            ]) : void 0, node.children, 64 + ` /* ${PatchFlagNames[64]} */`, void 0, void 0, true, void 0, false);
            else {
                childBlock = children[0].codegenNode;
                if (isTemplate && keyProperty) injectProp(childBlock, keyProperty, context);
                if (childBlock.isBlock !== !isStableFragment) {
                    if (childBlock.isBlock) {
                        removeHelper(OPEN_BLOCK);
                        removeHelper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
                    } else removeHelper(getVNodeHelper(context.inSSR, childBlock.isComponent));
                }
                childBlock.isBlock = !isStableFragment;
                if (childBlock.isBlock) {
                    helper(OPEN_BLOCK);
                    helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
                } else helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
            }
            if (memo) {
                const loop = createFunctionExpression(createForLoopParams(forNode.parseResult, [
                    createSimpleExpression(`_cached`)
                ]));
                loop.body = createBlockStatement([
                    createCompoundExpression([
                        `const _memo = (`,
                        memo.exp,
                        `)`
                    ]),
                    createCompoundExpression([
                        `if (_cached`,
                        ...keyExp ? [
                            ` && _cached.key === `,
                            keyExp
                        ] : [],
                        ` && ${context.helperString(IS_MEMO_SAME)}(_cached, _memo)) return _cached`
                    ]),
                    createCompoundExpression([
                        `const _item = `,
                        childBlock
                    ]),
                    createSimpleExpression(`_item.memo = _memo`),
                    createSimpleExpression(`return _item`)
                ]);
                renderExp.arguments.push(loop, createSimpleExpression(`_cache`), createSimpleExpression(String(context.cached++)));
            } else renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true));
        };
    });
});
function processFor(node, dir, context, processCodegen) {
    if (!dir.exp) {
        context.onError(createCompilerError(31, dir.loc));
        return;
    }
    const parseResult = dir.forParseResult;
    if (!parseResult) {
        context.onError(createCompilerError(32, dir.loc));
        return;
    }
    finalizeForParseResult(parseResult, context);
    const { addIdentifiers, removeIdentifiers, scopes } = context;
    const { source, value, key, index } = parseResult;
    const forNode = {
        type: 11,
        loc: dir.loc,
        source,
        valueAlias: value,
        keyAlias: key,
        objectIndexAlias: index,
        parseResult,
        children: isTemplateNode(node) ? node.children : [
            node
        ]
    };
    context.replaceNode(forNode);
    scopes.vFor++;
    const onExit = processCodegen && processCodegen(forNode);
    return ()=>{
        scopes.vFor--;
        if (onExit) onExit();
    };
}
function finalizeForParseResult(result, context) {
    if (result.finalized) return;
    validateBrowserExpression(result.source, context);
    if (result.key) validateBrowserExpression(result.key, context, true);
    if (result.index) validateBrowserExpression(result.index, context, true);
    if (result.value) validateBrowserExpression(result.value, context, true);
    result.finalized = true;
}
function createForLoopParams({ value, key, index }, memoArgs = []) {
    return createParamsList([
        value,
        key,
        index,
        ...memoArgs
    ]);
}
function createParamsList(args) {
    let i = args.length;
    while(i--){
        if (args[i]) break;
    }
    return args.slice(0, i + 1).map((arg, i2)=>arg || createSimpleExpression(`_`.repeat(i2 + 1), false));
}
const defaultFallback = createSimpleExpression(`undefined`, false);
const trackSlotScopes = (node, context)=>{
    if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
        const vSlot = findDir(node, "slot");
        if (vSlot) {
            vSlot.exp;
            context.scopes.vSlot++;
            return ()=>{
                context.scopes.vSlot--;
            };
        }
    }
};
const buildClientSlotFn = (props, _vForExp, children, loc)=>createFunctionExpression(props, children, false, true, children.length ? children[0].loc : loc);
function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
    context.helper(WITH_CTX);
    const { children, loc } = node;
    const slotsProperties = [];
    const dynamicSlots = [];
    let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
    const onComponentSlot = findDir(node, "slot", true);
    if (onComponentSlot) {
        const { arg, exp } = onComponentSlot;
        if (arg && !isStaticExp(arg)) hasDynamicSlots = true;
        slotsProperties.push(createObjectProperty(arg || createSimpleExpression("default", true), buildSlotFn(exp, void 0, children, loc)));
    }
    let hasTemplateSlots = false;
    let hasNamedDefaultSlot = false;
    const implicitDefaultChildren = [];
    const seenSlotNames = /* @__PURE__ */ new Set();
    let conditionalBranchIndex = 0;
    for(let i = 0; i < children.length; i++){
        const slotElement = children[i];
        let slotDir;
        if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
            if (slotElement.type !== 3) implicitDefaultChildren.push(slotElement);
            continue;
        }
        if (onComponentSlot) {
            context.onError(createCompilerError(37, slotDir.loc));
            break;
        }
        hasTemplateSlots = true;
        const { children: slotChildren, loc: slotLoc } = slotElement;
        const { arg: slotName = createSimpleExpression(`default`, true), exp: slotProps, loc: dirLoc } = slotDir;
        let staticSlotName;
        if (isStaticExp(slotName)) staticSlotName = slotName ? slotName.content : `default`;
        else hasDynamicSlots = true;
        const vFor = findDir(slotElement, "for");
        const slotFunction = buildSlotFn(slotProps, vFor, slotChildren, slotLoc);
        let vIf;
        let vElse;
        if (vIf = findDir(slotElement, "if")) {
            hasDynamicSlots = true;
            dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), defaultFallback));
        } else if (vElse = findDir(slotElement, /^else(-if)?$/, true)) {
            let j = i;
            let prev;
            while(j--){
                prev = children[j];
                if (prev.type !== 3) break;
            }
            if (prev && isTemplateNode(prev) && findDir(prev, "if")) {
                children.splice(i, 1);
                i--;
                let conditional = dynamicSlots[dynamicSlots.length - 1];
                while(conditional.alternate.type === 19)conditional = conditional.alternate;
                conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++), defaultFallback) : buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
            } else context.onError(createCompilerError(30, vElse.loc));
        } else if (vFor) {
            hasDynamicSlots = true;
            const parseResult = vFor.forParseResult;
            if (parseResult) {
                finalizeForParseResult(parseResult, context);
                dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [
                    parseResult.source,
                    createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true)
                ]));
            } else context.onError(createCompilerError(32, vFor.loc));
        } else {
            if (staticSlotName) {
                if (seenSlotNames.has(staticSlotName)) {
                    context.onError(createCompilerError(38, dirLoc));
                    continue;
                }
                seenSlotNames.add(staticSlotName);
                if (staticSlotName === "default") hasNamedDefaultSlot = true;
            }
            slotsProperties.push(createObjectProperty(slotName, slotFunction));
        }
    }
    if (!onComponentSlot) {
        const buildDefaultSlotProperty = (props, children2)=>{
            const fn = buildSlotFn(props, void 0, children2, loc);
            return createObjectProperty(`default`, fn);
        };
        if (!hasTemplateSlots) slotsProperties.push(buildDefaultSlotProperty(void 0, children));
        else if (implicitDefaultChildren.length && // #3766
        // with whitespace: 'preserve', whitespaces between slots will end up in
        // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
        implicitDefaultChildren.some((node2)=>isNonWhitespaceContent(node2))) {
            if (hasNamedDefaultSlot) context.onError(createCompilerError(39, implicitDefaultChildren[0].loc));
            else slotsProperties.push(buildDefaultSlotProperty(void 0, implicitDefaultChildren));
        }
    }
    const slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
    let slots = createObjectExpression(slotsProperties.concat(createObjectProperty(`_`, // 2 = compiled but dynamic = can skip normalization, but must run diff
    // 1 = compiled and static = can skip normalization AND diff as optimized
    createSimpleExpression(slotFlag + ` /* ${slotFlagsText[slotFlag]} */`, false))), loc);
    if (dynamicSlots.length) slots = createCallExpression(context.helper(CREATE_SLOTS), [
        slots,
        createArrayExpression(dynamicSlots)
    ]);
    return {
        slots,
        hasDynamicSlots
    };
}
function buildDynamicSlot(name, fn, index) {
    const props = [
        createObjectProperty(`name`, name),
        createObjectProperty(`fn`, fn)
    ];
    if (index != null) props.push(createObjectProperty(`key`, createSimpleExpression(String(index), true)));
    return createObjectExpression(props);
}
function hasForwardedSlots(children) {
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        switch(child.type){
            case 1:
                if (child.tagType === 2 || hasForwardedSlots(child.children)) return true;
                break;
            case 9:
                if (hasForwardedSlots(child.branches)) return true;
                break;
            case 10:
            case 11:
                if (hasForwardedSlots(child.children)) return true;
                break;
        }
    }
    return false;
}
function isNonWhitespaceContent(node) {
    if (node.type !== 2 && node.type !== 12) return true;
    return node.type === 2 ? !!node.content.trim() : isNonWhitespaceContent(node.content);
}
const directiveImportMap = /* @__PURE__ */ new WeakMap();
const transformElement = (node, context)=>{
    return function postTransformElement() {
        node = context.currentNode;
        if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) return;
        const { tag, props } = node;
        const isComponent = node.tagType === 1;
        let vnodeTag = isComponent ? resolveComponentType(node, context) : `"${tag}"`;
        const isDynamicComponent = isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
        let vnodeProps;
        let vnodeChildren;
        let vnodePatchFlag;
        let patchFlag = 0;
        let vnodeDynamicProps;
        let dynamicPropNames;
        let vnodeDirectives;
        let shouldUseBlock = // dynamic component may resolve to plain elements
        isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent && // <svg> and <foreignObject> must be forced into blocks so that block
        // updates inside get proper isSVG flag at runtime. (#639, #643)
        // This is technically web-specific, but splitting the logic out of core
        // leads to too much unnecessary complexity.
        (tag === "svg" || tag === "foreignObject");
        if (props.length > 0) {
            const propsBuildResult = buildProps(node, context, void 0, isComponent, isDynamicComponent);
            vnodeProps = propsBuildResult.props;
            patchFlag = propsBuildResult.patchFlag;
            dynamicPropNames = propsBuildResult.dynamicPropNames;
            const directives = propsBuildResult.directives;
            vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map((dir)=>buildDirectiveArgs(dir, context))) : void 0;
            if (propsBuildResult.shouldUseBlock) shouldUseBlock = true;
        }
        if (node.children.length > 0) {
            if (vnodeTag === KEEP_ALIVE) {
                shouldUseBlock = true;
                patchFlag |= 1024;
                if (node.children.length > 1) context.onError(createCompilerError(46, {
                    start: node.children[0].loc.start,
                    end: node.children[node.children.length - 1].loc.end,
                    source: ""
                }));
            }
            const shouldBuildAsSlots = isComponent && // Teleport is not a real component and has dedicated runtime handling
            vnodeTag !== TELEPORT && // explained above.
            vnodeTag !== KEEP_ALIVE;
            if (shouldBuildAsSlots) {
                const { slots, hasDynamicSlots } = buildSlots(node, context);
                vnodeChildren = slots;
                if (hasDynamicSlots) patchFlag |= 1024;
            } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
                const child = node.children[0];
                const type = child.type;
                const hasDynamicTextChild = type === 5 || type === 8;
                if (hasDynamicTextChild && getConstantType(child, context) === 0) patchFlag |= 1;
                if (hasDynamicTextChild || type === 2) vnodeChildren = child;
                else vnodeChildren = node.children;
            } else vnodeChildren = node.children;
        }
        if (patchFlag !== 0) {
            if (patchFlag < 0) vnodePatchFlag = patchFlag + ` /* ${PatchFlagNames[patchFlag]} */`;
            else {
                const flagNames = Object.keys(PatchFlagNames).map(Number).filter((n)=>n > 0 && patchFlag & n).map((n)=>PatchFlagNames[n]).join(`, `);
                vnodePatchFlag = patchFlag + ` /* ${flagNames} */`;
            }
            if (dynamicPropNames && dynamicPropNames.length) vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
        }
        node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false, isComponent, node.loc);
    };
};
function resolveComponentType(node, context, ssr = false) {
    let { tag } = node;
    const isExplicitDynamic = isComponentTag(tag);
    const isProp = findProp(node, "is");
    if (isProp) {
        if (isExplicitDynamic || false) {
            const exp = isProp.type === 6 ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;
            if (exp) return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
                exp
            ]);
        } else if (isProp.type === 6 && isProp.value.content.startsWith("vue:")) tag = isProp.value.content.slice(4);
    }
    const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
    if (builtIn) {
        if (!ssr) context.helper(builtIn);
        return builtIn;
    }
    context.helper(RESOLVE_COMPONENT);
    context.components.add(tag);
    return toValidAssetId(tag, `component`);
}
function buildProps(node, context, props = node.props, isComponent, isDynamicComponent, ssr = false) {
    const { tag, loc: elementLoc, children } = node;
    let properties = [];
    const mergeArgs = [];
    const runtimeDirectives = [];
    const hasChildren = children.length > 0;
    let shouldUseBlock = false;
    let patchFlag = 0;
    let hasRef = false;
    let hasClassBinding = false;
    let hasStyleBinding = false;
    let hasHydrationEventBinding = false;
    let hasDynamicKeys = false;
    let hasVnodeHook = false;
    const dynamicPropNames = [];
    const pushMergeArg = (arg)=>{
        if (properties.length) {
            mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
            properties = [];
        }
        if (arg) mergeArgs.push(arg);
    };
    const analyzePatchFlag = ({ key, value })=>{
        if (isStaticExp(key)) {
            const name = key.content;
            const isEventHandler = isOn(name);
            if (isEventHandler && (!isComponent || isDynamicComponent) && // omit the flag for click handlers because hydration gives click
            // dedicated fast path.
            name.toLowerCase() !== "onclick" && // omit v-model handlers
            name !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
            !isReservedProp(name)) hasHydrationEventBinding = true;
            if (isEventHandler && isReservedProp(name)) hasVnodeHook = true;
            if (isEventHandler && value.type === 14) value = value.arguments[0];
            if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) return;
            if (name === "ref") hasRef = true;
            else if (name === "class") hasClassBinding = true;
            else if (name === "style") hasStyleBinding = true;
            else if (name !== "key" && !dynamicPropNames.includes(name)) dynamicPropNames.push(name);
            if (isComponent && (name === "class" || name === "style") && !dynamicPropNames.includes(name)) dynamicPropNames.push(name);
        } else hasDynamicKeys = true;
    };
    for(let i = 0; i < props.length; i++){
        const prop = props[i];
        if (prop.type === 6) {
            const { loc, name, nameLoc, value } = prop;
            let isStatic = true;
            if (name === "ref") {
                hasRef = true;
                if (context.scopes.vFor > 0) properties.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
            }
            if (name === "is" && (isComponentTag(tag) || value && value.content.startsWith("vue:") || false)) continue;
            properties.push(createObjectProperty(createSimpleExpression(name, true, nameLoc), createSimpleExpression(value ? value.content : "", isStatic, value ? value.loc : loc)));
        } else {
            const { name, arg, exp, loc, modifiers } = prop;
            const isVBind = name === "bind";
            const isVOn = name === "on";
            if (name === "slot") {
                if (!isComponent) context.onError(createCompilerError(40, loc));
                continue;
            }
            if (name === "once" || name === "memo") continue;
            if (name === "is" || isVBind && isStaticArgOf(arg, "is") && (isComponentTag(tag) || false)) continue;
            if (isVOn && ssr) continue;
            if (// #938: elements with dynamic keys should be forced into blocks
            isVBind && isStaticArgOf(arg, "key") || // inline before-update hooks need to force block so that it is invoked
            // before children
            isVOn && hasChildren && isStaticArgOf(arg, "vue:before-update")) shouldUseBlock = true;
            if (isVBind && isStaticArgOf(arg, "ref") && context.scopes.vFor > 0) properties.push(createObjectProperty(createSimpleExpression("ref_for", true), createSimpleExpression("true")));
            if (!arg && (isVBind || isVOn)) {
                hasDynamicKeys = true;
                if (exp) {
                    if (isVBind) {
                        pushMergeArg();
                        mergeArgs.push(exp);
                    } else pushMergeArg({
                        type: 14,
                        loc,
                        callee: context.helper(TO_HANDLERS),
                        arguments: isComponent ? [
                            exp
                        ] : [
                            exp,
                            `true`
                        ]
                    });
                } else context.onError(createCompilerError(isVBind ? 34 : 35, loc));
                continue;
            }
            if (isVBind && modifiers.includes("prop")) patchFlag |= 32;
            const directiveTransform = context.directiveTransforms[name];
            if (directiveTransform) {
                const { props: props2, needRuntime } = directiveTransform(prop, node, context);
                !ssr && props2.forEach(analyzePatchFlag);
                if (isVOn && arg && !isStaticExp(arg)) pushMergeArg(createObjectExpression(props2, elementLoc));
                else properties.push(...props2);
                if (needRuntime) {
                    runtimeDirectives.push(prop);
                    if (isSymbol(needRuntime)) directiveImportMap.set(prop, needRuntime);
                }
            } else if (!isBuiltInDirective(name)) {
                runtimeDirectives.push(prop);
                if (hasChildren) shouldUseBlock = true;
            }
        }
    }
    let propsExpression = void 0;
    if (mergeArgs.length) {
        pushMergeArg();
        if (mergeArgs.length > 1) propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
        else propsExpression = mergeArgs[0];
    } else if (properties.length) propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
    if (hasDynamicKeys) patchFlag |= 16;
    else {
        if (hasClassBinding && !isComponent) patchFlag |= 2;
        if (hasStyleBinding && !isComponent) patchFlag |= 4;
        if (dynamicPropNames.length) patchFlag |= 8;
        if (hasHydrationEventBinding) patchFlag |= 32;
    }
    if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) patchFlag |= 512;
    if (!context.inSSR && propsExpression) switch(propsExpression.type){
        case 15:
            let classKeyIndex = -1;
            let styleKeyIndex = -1;
            let hasDynamicKey = false;
            for(let i = 0; i < propsExpression.properties.length; i++){
                const key = propsExpression.properties[i].key;
                if (isStaticExp(key)) {
                    if (key.content === "class") classKeyIndex = i;
                    else if (key.content === "style") styleKeyIndex = i;
                } else if (!key.isHandlerKey) hasDynamicKey = true;
            }
            const classProp = propsExpression.properties[classKeyIndex];
            const styleProp = propsExpression.properties[styleKeyIndex];
            if (!hasDynamicKey) {
                if (classProp && !isStaticExp(classProp.value)) classProp.value = createCallExpression(context.helper(NORMALIZE_CLASS), [
                    classProp.value
                ]);
                if (styleProp && // the static style is compiled into an object,
                // so use `hasStyleBinding` to ensure that it is a dynamic style binding
                (hasStyleBinding || styleProp.value.type === 4 && styleProp.value.content.trim()[0] === `[` || // v-bind:style and style both exist,
                // v-bind:style with static literal object
                styleProp.value.type === 17)) styleProp.value = createCallExpression(context.helper(NORMALIZE_STYLE), [
                    styleProp.value
                ]);
            } else propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [
                propsExpression
            ]);
            break;
        case 14:
            break;
        default:
            propsExpression = createCallExpression(context.helper(NORMALIZE_PROPS), [
                createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
                    propsExpression
                ])
            ]);
            break;
    }
    return {
        props: propsExpression,
        directives: runtimeDirectives,
        patchFlag,
        dynamicPropNames,
        shouldUseBlock
    };
}
function dedupeProperties(properties) {
    const knownProps = /* @__PURE__ */ new Map();
    const deduped = [];
    for(let i = 0; i < properties.length; i++){
        const prop = properties[i];
        if (prop.key.type === 8 || !prop.key.isStatic) {
            deduped.push(prop);
            continue;
        }
        const name = prop.key.content;
        const existing = knownProps.get(name);
        if (existing) {
            if (name === "style" || name === "class" || isOn(name)) mergeAsArray(existing, prop);
        } else {
            knownProps.set(name, prop);
            deduped.push(prop);
        }
    }
    return deduped;
}
function mergeAsArray(existing, incoming) {
    if (existing.value.type === 17) existing.value.elements.push(incoming.value);
    else existing.value = createArrayExpression([
        existing.value,
        incoming.value
    ], existing.loc);
}
function buildDirectiveArgs(dir, context) {
    const dirArgs = [];
    const runtime = directiveImportMap.get(dir);
    if (runtime) dirArgs.push(context.helperString(runtime));
    else {
        context.helper(RESOLVE_DIRECTIVE);
        context.directives.add(dir.name);
        dirArgs.push(toValidAssetId(dir.name, `directive`));
    }
    const { loc } = dir;
    if (dir.exp) dirArgs.push(dir.exp);
    if (dir.arg) {
        if (!dir.exp) dirArgs.push(`void 0`);
        dirArgs.push(dir.arg);
    }
    if (Object.keys(dir.modifiers).length) {
        if (!dir.arg) {
            if (!dir.exp) dirArgs.push(`void 0`);
            dirArgs.push(`void 0`);
        }
        const trueExpression = createSimpleExpression(`true`, false, loc);
        dirArgs.push(createObjectExpression(dir.modifiers.map((modifier)=>createObjectProperty(modifier, trueExpression)), loc));
    }
    return createArrayExpression(dirArgs, dir.loc);
}
function stringifyDynamicPropNames(props) {
    let propsNamesString = `[`;
    for(let i = 0, l = props.length; i < l; i++){
        propsNamesString += JSON.stringify(props[i]);
        if (i < l - 1) propsNamesString += ", ";
    }
    return propsNamesString + `]`;
}
function isComponentTag(tag) {
    return tag === "component" || tag === "Component";
}
const transformSlotOutlet = (node, context)=>{
    if (isSlotOutlet(node)) {
        const { children, loc } = node;
        const { slotName, slotProps } = processSlotOutlet(node, context);
        const slotArgs = [
            context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
            slotName,
            "{}",
            "undefined",
            "true"
        ];
        let expectedLen = 2;
        if (slotProps) {
            slotArgs[2] = slotProps;
            expectedLen = 3;
        }
        if (children.length) {
            slotArgs[3] = createFunctionExpression([], children, false, false, loc);
            expectedLen = 4;
        }
        if (context.scopeId && !context.slotted) expectedLen = 5;
        slotArgs.splice(expectedLen);
        node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
    }
};
function processSlotOutlet(node, context) {
    let slotName = `"default"`;
    let slotProps = void 0;
    const nonNameProps = [];
    for(let i = 0; i < node.props.length; i++){
        const p = node.props[i];
        if (p.type === 6) {
            if (p.value) {
                if (p.name === "name") slotName = JSON.stringify(p.value.content);
                else {
                    p.name = camelize(p.name);
                    nonNameProps.push(p);
                }
            }
        } else {
            if (p.name === "bind" && isStaticArgOf(p.arg, "name")) {
                if (p.exp) slotName = p.exp;
            } else {
                if (p.name === "bind" && p.arg && isStaticExp(p.arg)) p.arg.content = camelize(p.arg.content);
                nonNameProps.push(p);
            }
        }
    }
    if (nonNameProps.length > 0) {
        const { props, directives } = buildProps(node, context, nonNameProps, false, false);
        slotProps = props;
        if (directives.length) context.onError(createCompilerError(36, directives[0].loc));
    }
    return {
        slotName,
        slotProps
    };
}
const fnExpRE = /^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
const transformOn$1 = (dir, node, context, augmentor)=>{
    const { loc, modifiers, arg } = dir;
    if (!dir.exp && !modifiers.length) context.onError(createCompilerError(35, loc));
    let eventName;
    if (arg.type === 4) {
        if (arg.isStatic) {
            let rawName = arg.content;
            if (rawName.startsWith("vnode")) context.onError(createCompilerError(51, arg.loc));
            if (rawName.startsWith("vue:")) rawName = `vnode-${rawName.slice(4)}`;
            const eventString = node.tagType !== 0 || rawName.startsWith("vnode") || !/[A-Z]/.test(rawName) ? // for non-element and vnode lifecycle event listeners, auto convert
            // it to camelCase. See issue #2249
            toHandlerKey(camelize(rawName)) : // preserve case for plain element listeners that have uppercase
            // letters, as these may be custom elements' custom events
            `on:${rawName}`;
            eventName = createSimpleExpression(eventString, true, arg.loc);
        } else eventName = createCompoundExpression([
            `${context.helperString(TO_HANDLER_KEY)}(`,
            arg,
            `)`
        ]);
    } else {
        eventName = arg;
        eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
        eventName.children.push(`)`);
    }
    let exp = dir.exp;
    if (exp && !exp.content.trim()) exp = void 0;
    let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
    if (exp) {
        const isMemberExp = isMemberExpression(exp.content);
        const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
        const hasMultipleStatements = exp.content.includes(`;`);
        validateBrowserExpression(exp, context, false, hasMultipleStatements);
        if (isInlineStatement || shouldCache && isMemberExp) exp = createCompoundExpression([
            `${isInlineStatement ? `$event` : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
            exp,
            hasMultipleStatements ? `}` : `)`
        ]);
    }
    let ret = {
        props: [
            createObjectProperty(eventName, exp || createSimpleExpression(`() => {}`, false, loc))
        ]
    };
    if (augmentor) ret = augmentor(ret);
    if (shouldCache) ret.props[0].value = context.cache(ret.props[0].value);
    ret.props.forEach((p)=>p.key.isHandlerKey = true);
    return ret;
};
const transformBind = (dir, _node, context)=>{
    const { modifiers, loc } = dir;
    const arg = dir.arg;
    let { exp } = dir;
    if (!exp && arg.type === 4) {
        const propName = camelize(arg.content);
        exp = dir.exp = createSimpleExpression(propName, false, arg.loc);
    }
    if (arg.type !== 4) {
        arg.children.unshift(`(`);
        arg.children.push(`) || ""`);
    } else if (!arg.isStatic) arg.content = `${arg.content} || ""`;
    if (modifiers.includes("camel")) {
        if (arg.type === 4) {
            if (arg.isStatic) arg.content = camelize(arg.content);
            else arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
        } else {
            arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
            arg.children.push(`)`);
        }
    }
    if (!context.inSSR) {
        if (modifiers.includes("prop")) injectPrefix(arg, ".");
        if (modifiers.includes("attr")) injectPrefix(arg, "^");
    }
    if (!exp || exp.type === 4 && !exp.content.trim()) {
        context.onError(createCompilerError(34, loc));
        return {
            props: [
                createObjectProperty(arg, createSimpleExpression("", true, loc))
            ]
        };
    }
    return {
        props: [
            createObjectProperty(arg, exp)
        ]
    };
};
const injectPrefix = (arg, prefix)=>{
    if (arg.type === 4) {
        if (arg.isStatic) arg.content = prefix + arg.content;
        else arg.content = `\`${prefix}\${${arg.content}}\``;
    } else {
        arg.children.unshift(`'${prefix}' + (`);
        arg.children.push(`)`);
    }
};
const transformText = (node, context)=>{
    if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) return ()=>{
        const children = node.children;
        let currentContainer = void 0;
        let hasText = false;
        for(let i = 0; i < children.length; i++){
            const child = children[i];
            if (isText$1(child)) {
                hasText = true;
                for(let j = i + 1; j < children.length; j++){
                    const next = children[j];
                    if (isText$1(next)) {
                        if (!currentContainer) currentContainer = children[i] = createCompoundExpression([
                            child
                        ], child.loc);
                        currentContainer.children.push(` + `, next);
                        children.splice(j, 1);
                        j--;
                    } else {
                        currentContainer = void 0;
                        break;
                    }
                }
            }
        }
        if (!hasText || // if this is a plain element with a single text child, leave it
        // as-is since the runtime has dedicated fast path for this by directly
        // setting textContent of the element.
        // for component root it's always normalized anyway.
        children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0 && // #3756
        // custom directives can potentially add DOM elements arbitrarily,
        // we need to avoid setting textContent of the element at runtime
        // to avoid accidentally overwriting the DOM elements added
        // by the user through custom directives.
        !node.props.find((p)=>p.type === 7 && !context.directiveTransforms[p.name]) && // in compat mode, <template> tags with no special directives
        // will be rendered as a fragment so its children must be
        // converted into vnodes.
        true)) return;
        for(let i = 0; i < children.length; i++){
            const child = children[i];
            if (isText$1(child) || child.type === 8) {
                const callArgs = [];
                if (child.type !== 2 || child.content !== " ") callArgs.push(child);
                if (!context.ssr && getConstantType(child, context) === 0) callArgs.push(1 + ` /* ${PatchFlagNames[1]} */`);
                children[i] = {
                    type: 12,
                    content: child,
                    loc: child.loc,
                    codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
                };
            }
        }
    };
};
const seen$1 = /* @__PURE__ */ new WeakSet();
const transformOnce = (node, context)=>{
    if (node.type === 1 && findDir(node, "once", true)) {
        if (seen$1.has(node) || context.inVOnce || context.inSSR) return;
        seen$1.add(node);
        context.inVOnce = true;
        context.helper(SET_BLOCK_TRACKING);
        return ()=>{
            context.inVOnce = false;
            const cur = context.currentNode;
            if (cur.codegenNode) cur.codegenNode = context.cache(cur.codegenNode, true);
        };
    }
};
const transformModel$1 = (dir, node, context)=>{
    const { exp, arg } = dir;
    if (!exp) {
        context.onError(createCompilerError(41, dir.loc));
        return createTransformProps();
    }
    const rawExp = exp.loc.source;
    const expString = exp.type === 4 ? exp.content : rawExp;
    const bindingType = context.bindingMetadata[rawExp];
    if (bindingType === "props" || bindingType === "props-aliased") {
        context.onError(createCompilerError(44, exp.loc));
        return createTransformProps();
    }
    const maybeRef = false;
    if (!expString.trim() || !isMemberExpression(expString) && !maybeRef) {
        context.onError(createCompilerError(42, exp.loc));
        return createTransformProps();
    }
    const propName = arg ? arg : createSimpleExpression("modelValue", true);
    const eventName = arg ? isStaticExp(arg) ? `onUpdate:${camelize(arg.content)}` : createCompoundExpression([
        '"onUpdate:" + ',
        arg
    ]) : `onUpdate:modelValue`;
    let assignmentExp;
    const eventArg = context.isTS ? `($event: any)` : `$event`;
    assignmentExp = createCompoundExpression([
        `${eventArg} => ((`,
        exp,
        `) = $event)`
    ]);
    const props = [
        // modelValue: foo
        createObjectProperty(propName, dir.exp),
        // "onUpdate:modelValue": $event => (foo = $event)
        createObjectProperty(eventName, assignmentExp)
    ];
    if (dir.modifiers.length && node.tagType === 1) {
        const modifiers = dir.modifiers.map((m)=>(isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`).join(`, `);
        const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([
            arg,
            ' + "Modifiers"'
        ]) : `modelModifiers`;
        props.push(createObjectProperty(modifiersKey, createSimpleExpression(`{ ${modifiers} }`, false, dir.loc, 2)));
    }
    return createTransformProps(props);
};
function createTransformProps(props = []) {
    return {
        props
    };
}
const seen = /* @__PURE__ */ new WeakSet();
const transformMemo = (node, context)=>{
    if (node.type === 1) {
        const dir = findDir(node, "memo");
        if (!dir || seen.has(node)) return;
        seen.add(node);
        return ()=>{
            const codegenNode = node.codegenNode || context.currentNode.codegenNode;
            if (codegenNode && codegenNode.type === 13) {
                if (node.tagType !== 1) convertToBlock(codegenNode, context);
                node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
                    dir.exp,
                    createFunctionExpression(void 0, codegenNode),
                    `_cache`,
                    String(context.cached++)
                ]);
            }
        };
    }
};
function getBaseTransformPreset(prefixIdentifiers) {
    return [
        [
            transformOnce,
            transformIf,
            transformMemo,
            transformFor,
            transformExpression,
            transformSlotOutlet,
            transformElement,
            trackSlotScopes,
            transformText
        ],
        {
            on: transformOn$1,
            bind: transformBind,
            model: transformModel$1
        }
    ];
}
function baseCompile(source, options = {}) {
    const onError = options.onError || defaultOnError;
    const isModuleMode = options.mode === "module";
    if (options.prefixIdentifiers === true) onError(createCompilerError(47));
    else if (isModuleMode) onError(createCompilerError(48));
    const prefixIdentifiers = false;
    if (options.cacheHandlers) onError(createCompilerError(49));
    if (options.scopeId && !isModuleMode) onError(createCompilerError(50));
    const resolvedOptions = extend({}, options, {
        prefixIdentifiers
    });
    const ast = isString(source) ? baseParse(source, resolvedOptions) : source;
    const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
    transform(ast, extend({}, resolvedOptions, {
        nodeTransforms: [
            ...nodeTransforms,
            ...options.nodeTransforms || []
        ],
        directiveTransforms: extend({}, directiveTransforms, options.directiveTransforms || {})
    }));
    return generate(ast, resolvedOptions);
}
const noopDirectiveTransform = ()=>({
        props: []
    });
const V_MODEL_RADIO = Symbol(`vModelRadio`);
const V_MODEL_CHECKBOX = Symbol(`vModelCheckbox`);
const V_MODEL_TEXT = Symbol(`vModelText`);
const V_MODEL_SELECT = Symbol(`vModelSelect`);
const V_MODEL_DYNAMIC = Symbol(`vModelDynamic`);
const V_ON_WITH_MODIFIERS = Symbol(`vOnModifiersGuard`);
const V_ON_WITH_KEYS = Symbol(`vOnKeysGuard`);
const V_SHOW = Symbol(`vShow`);
const TRANSITION = Symbol(`Transition`);
const TRANSITION_GROUP = Symbol(`TransitionGroup`);
registerRuntimeHelpers({
    [V_MODEL_RADIO]: `vModelRadio`,
    [V_MODEL_CHECKBOX]: `vModelCheckbox`,
    [V_MODEL_TEXT]: `vModelText`,
    [V_MODEL_SELECT]: `vModelSelect`,
    [V_MODEL_DYNAMIC]: `vModelDynamic`,
    [V_ON_WITH_MODIFIERS]: `withModifiers`,
    [V_ON_WITH_KEYS]: `withKeys`,
    [V_SHOW]: `vShow`,
    [TRANSITION]: `Transition`,
    [TRANSITION_GROUP]: `TransitionGroup`
});
let decoder;
function decodeHtmlBrowser(raw, asAttr = false) {
    if (!decoder) decoder = document.createElement("div");
    if (asAttr) {
        decoder.innerHTML = `<div foo="${raw.replace(/"/g, "&quot;")}">`;
        return decoder.children[0].getAttribute("foo");
    } else {
        decoder.innerHTML = raw;
        return decoder.textContent;
    }
}
const parserOptions = {
    parseMode: "html",
    isVoidTag,
    isNativeTag: (tag)=>isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
    isPreTag: (tag)=>tag === "pre",
    decodeEntities: decodeHtmlBrowser,
    isBuiltInComponent: (tag)=>{
        if (tag === "Transition" || tag === "transition") return TRANSITION;
        else if (tag === "TransitionGroup" || tag === "transition-group") return TRANSITION_GROUP;
    },
    // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
    getNamespace (tag, parent, rootNamespace) {
        let ns = parent ? parent.ns : rootNamespace;
        if (parent && ns === 2) {
            if (parent.tag === "annotation-xml") {
                if (tag === "svg") return 1;
                if (parent.props.some((a)=>a.type === 6 && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml"))) ns = 0;
            } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") ns = 0;
        } else if (parent && ns === 1) {
            if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") ns = 0;
        }
        if (ns === 0) {
            if (tag === "svg") return 1;
            if (tag === "math") return 2;
        }
        return ns;
    }
};
const transformStyle = (node)=>{
    if (node.type === 1) node.props.forEach((p, i)=>{
        if (p.type === 6 && p.name === "style" && p.value) node.props[i] = {
            type: 7,
            name: `bind`,
            arg: createSimpleExpression(`style`, true, p.loc),
            exp: parseInlineCSS(p.value.content, p.loc),
            modifiers: [],
            loc: p.loc
        };
    });
};
const parseInlineCSS = (cssText, loc)=>{
    const normalized = parseStringStyle(cssText);
    return createSimpleExpression(JSON.stringify(normalized), false, loc, 3);
};
function createDOMCompilerError(code, loc) {
    return createCompilerError(code, loc, DOMErrorMessages);
}
const DOMErrorMessages = {
    [53]: `v-html is missing expression.`,
    [54]: `v-html will override element children.`,
    [55]: `v-text is missing expression.`,
    [56]: `v-text will override element children.`,
    [57]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
    [58]: `v-model argument is not supported on plain elements.`,
    [59]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
    [60]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
    [61]: `v-show is missing expression.`,
    [62]: `<Transition> expects exactly one child element or component.`,
    [63]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`
};
const transformVHtml = (dir, node, context)=>{
    const { exp, loc } = dir;
    if (!exp) context.onError(createDOMCompilerError(53, loc));
    if (node.children.length) {
        context.onError(createDOMCompilerError(54, loc));
        node.children.length = 0;
    }
    return {
        props: [
            createObjectProperty(createSimpleExpression(`innerHTML`, true, loc), exp || createSimpleExpression("", true))
        ]
    };
};
const transformVText = (dir, node, context)=>{
    const { exp, loc } = dir;
    if (!exp) context.onError(createDOMCompilerError(55, loc));
    if (node.children.length) {
        context.onError(createDOMCompilerError(56, loc));
        node.children.length = 0;
    }
    return {
        props: [
            createObjectProperty(createSimpleExpression(`textContent`, true), exp ? getConstantType(exp, context) > 0 ? exp : createCallExpression(context.helperString(TO_DISPLAY_STRING), [
                exp
            ], loc) : createSimpleExpression("", true))
        ]
    };
};
const transformModel = (dir, node, context)=>{
    const baseResult = transformModel$1(dir, node, context);
    if (!baseResult.props.length || node.tagType === 1) return baseResult;
    if (dir.arg) context.onError(createDOMCompilerError(58, dir.arg.loc));
    function checkDuplicatedValue() {
        const value = findDir(node, "bind");
        if (value && isStaticArgOf(value.arg, "value")) context.onError(createDOMCompilerError(60, value.loc));
    }
    const { tag } = node;
    const isCustomElement = context.isCustomElement(tag);
    if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
        let directiveToUse = V_MODEL_TEXT;
        let isInvalidType = false;
        if (tag === "input" || isCustomElement) {
            const type = findProp(node, `type`);
            if (type) {
                if (type.type === 7) directiveToUse = V_MODEL_DYNAMIC;
                else if (type.value) switch(type.value.content){
                    case "radio":
                        directiveToUse = V_MODEL_RADIO;
                        break;
                    case "checkbox":
                        directiveToUse = V_MODEL_CHECKBOX;
                        break;
                    case "file":
                        isInvalidType = true;
                        context.onError(createDOMCompilerError(59, dir.loc));
                        break;
                    default:
                        checkDuplicatedValue();
                        break;
                }
            } else if (hasDynamicKeyVBind(node)) directiveToUse = V_MODEL_DYNAMIC;
            else checkDuplicatedValue();
        } else if (tag === "select") directiveToUse = V_MODEL_SELECT;
        else checkDuplicatedValue();
        if (!isInvalidType) baseResult.needRuntime = context.helper(directiveToUse);
    } else context.onError(createDOMCompilerError(57, dir.loc));
    baseResult.props = baseResult.props.filter((p)=>!(p.key.type === 4 && p.key.content === "modelValue"));
    return baseResult;
};
const isEventOptionModifier = /* @__PURE__ */ makeMap(`passive,once,capture`);
const isNonKeyModifier = /* @__PURE__ */ makeMap(// event propagation management
`stop,prevent,self,ctrl,shift,alt,meta,exact,middle`);
const maybeKeyModifier = /* @__PURE__ */ makeMap("left,right");
const isKeyboardEvent = /* @__PURE__ */ makeMap(`onkeyup,onkeydown,onkeypress`, true);
const resolveModifiers = (key, modifiers, context, loc)=>{
    const keyModifiers = [];
    const nonKeyModifiers = [];
    const eventOptionModifiers = [];
    for(let i = 0; i < modifiers.length; i++){
        const modifier = modifiers[i];
        if (isEventOptionModifier(modifier)) eventOptionModifiers.push(modifier);
        else {
            if (maybeKeyModifier(modifier)) {
                if (isStaticExp(key)) {
                    if (isKeyboardEvent(key.content)) keyModifiers.push(modifier);
                    else nonKeyModifiers.push(modifier);
                } else {
                    keyModifiers.push(modifier);
                    nonKeyModifiers.push(modifier);
                }
            } else if (isNonKeyModifier(modifier)) nonKeyModifiers.push(modifier);
            else keyModifiers.push(modifier);
        }
    }
    return {
        keyModifiers,
        nonKeyModifiers,
        eventOptionModifiers
    };
};
const transformClick = (key, event)=>{
    const isStaticClick = isStaticExp(key) && key.content.toLowerCase() === "onclick";
    return isStaticClick ? createSimpleExpression(event, true) : key.type !== 4 ? createCompoundExpression([
        `(`,
        key,
        `) === "onClick" ? "${event}" : (`,
        key,
        `)`
    ]) : key;
};
const transformOn = (dir, node, context)=>{
    return transformOn$1(dir, node, context, (baseResult)=>{
        const { modifiers } = dir;
        if (!modifiers.length) return baseResult;
        let { key, value: handlerExp } = baseResult.props[0];
        const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key, modifiers, context, dir.loc);
        if (nonKeyModifiers.includes("right")) key = transformClick(key, `onContextmenu`);
        if (nonKeyModifiers.includes("middle")) key = transformClick(key, `onMouseup`);
        if (nonKeyModifiers.length) handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [
            handlerExp,
            JSON.stringify(nonKeyModifiers)
        ]);
        if (keyModifiers.length && // if event name is dynamic, always wrap with keys guard
        (!isStaticExp(key) || isKeyboardEvent(key.content))) handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [
            handlerExp,
            JSON.stringify(keyModifiers)
        ]);
        if (eventOptionModifiers.length) {
            const modifierPostfix = eventOptionModifiers.map(capitalize).join("");
            key = isStaticExp(key) ? createSimpleExpression(`${key.content}${modifierPostfix}`, true) : createCompoundExpression([
                `(`,
                key,
                `) + "${modifierPostfix}"`
            ]);
        }
        return {
            props: [
                createObjectProperty(key, handlerExp)
            ]
        };
    });
};
const transformShow = (dir, node, context)=>{
    const { exp, loc } = dir;
    if (!exp) context.onError(createDOMCompilerError(61, loc));
    return {
        props: [],
        needRuntime: context.helper(V_SHOW)
    };
};
const transformTransition = (node, context)=>{
    if (node.type === 1 && node.tagType === 1) {
        const component = context.isBuiltInComponent(node.tag);
        if (component === TRANSITION) return ()=>{
            if (!node.children.length) return;
            if (hasMultipleChildren(node)) context.onError(createDOMCompilerError(62, {
                start: node.children[0].loc.start,
                end: node.children[node.children.length - 1].loc.end,
                source: ""
            }));
            const child = node.children[0];
            if (child.type === 1) {
                for (const p of child.props)if (p.type === 7 && p.name === "show") node.props.push({
                    type: 6,
                    name: "persisted",
                    nameLoc: node.loc,
                    value: void 0,
                    loc: node.loc
                });
            }
        };
    }
};
function hasMultipleChildren(node) {
    const children = node.children = node.children.filter((c)=>c.type !== 3 && !(c.type === 2 && !c.content.trim()));
    const child = children[0];
    return children.length !== 1 || child.type === 11 || child.type === 9 && child.branches.some(hasMultipleChildren);
}
const ignoreSideEffectTags = (node, context)=>{
    if (node.type === 1 && node.tagType === 0 && (node.tag === "script" || node.tag === "style")) {
        context.onError(createDOMCompilerError(63, node.loc));
        context.removeNode();
    }
};
const DOMNodeTransforms = [
    transformStyle,
    transformTransition
];
const DOMDirectiveTransforms = {
    cloak: noopDirectiveTransform,
    html: transformVHtml,
    text: transformVText,
    model: transformModel,
    // override compiler-core
    on: transformOn,
    // override compiler-core
    show: transformShow
};
function compile(src, options = {}) {
    return baseCompile(src, extend({}, parserOptions, options, {
        nodeTransforms: [
            // ignore <script> and <tag>
            // this is not put inside DOMNodeTransforms because that list is used
            // by compiler-ssr to generate vnode fallback branches
            ignoreSideEffectTags,
            ...DOMNodeTransforms,
            ...options.nodeTransforms || []
        ],
        directiveTransforms: extend({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
        transformHoist: null
    }));
}
initDev();
const compileCache = /* @__PURE__ */ new WeakMap();
function getCache(options) {
    let c = compileCache.get(options != null ? options : EMPTY_OBJ);
    if (!c) {
        c = /* @__PURE__ */ Object.create(null);
        compileCache.set(options != null ? options : EMPTY_OBJ, c);
    }
    return c;
}
function compileToFunction(template, options) {
    if (!isString(template)) {
        if (template.nodeType) template = template.innerHTML;
        else {
            warn(`invalid template option: `, template);
            return NOOP;
        }
    }
    const key = template;
    const cache = getCache(options);
    const cached = cache[key];
    if (cached) return cached;
    if (template[0] === "#") {
        const el = document.querySelector(template);
        if (!el) warn(`Template element not found or is empty: ${template}`);
        template = el ? el.innerHTML : ``;
    }
    const opts = extend({
        hoistStatic: true,
        onError: onError,
        onWarn: (e)=>onError(e, true)
    }, options);
    if (!opts.isCustomElement && typeof customElements !== "undefined") opts.isCustomElement = (tag)=>!!customElements.get(tag);
    const { code } = compile(template, opts);
    function onError(err, asWarning = false) {
        const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
        const codeFrame = err.loc && generateCodeFrame(template, err.loc.start.offset, err.loc.end.offset);
        warn(codeFrame ? `${message}
${codeFrame}` : message);
    }
    const render = new Function("Vue", code)(runtimeDom);
    render._rc = true;
    return cache[key] = render;
}
registerRuntimeCompiler(compileToFunction);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"c18b3":[function(require,module,exports) {
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NavigationFailureType", ()=>NavigationFailureType);
parcelHelpers.export(exports, "RouterLink", ()=>RouterLink);
parcelHelpers.export(exports, "RouterView", ()=>RouterView);
parcelHelpers.export(exports, "START_LOCATION", ()=>START_LOCATION_NORMALIZED);
parcelHelpers.export(exports, "createMemoryHistory", ()=>createMemoryHistory);
parcelHelpers.export(exports, "createRouter", ()=>createRouter);
parcelHelpers.export(exports, "createRouterMatcher", ()=>createRouterMatcher);
parcelHelpers.export(exports, "createWebHashHistory", ()=>createWebHashHistory);
parcelHelpers.export(exports, "createWebHistory", ()=>createWebHistory);
parcelHelpers.export(exports, "isNavigationFailure", ()=>isNavigationFailure);
parcelHelpers.export(exports, "loadRouteLocation", ()=>loadRouteLocation);
parcelHelpers.export(exports, "matchedRouteKey", ()=>matchedRouteKey);
parcelHelpers.export(exports, "onBeforeRouteLeave", ()=>onBeforeRouteLeave);
parcelHelpers.export(exports, "onBeforeRouteUpdate", ()=>onBeforeRouteUpdate);
parcelHelpers.export(exports, "parseQuery", ()=>parseQuery);
parcelHelpers.export(exports, "routeLocationKey", ()=>routeLocationKey);
parcelHelpers.export(exports, "routerKey", ()=>routerKey);
parcelHelpers.export(exports, "routerViewLocationKey", ()=>routerViewLocationKey);
parcelHelpers.export(exports, "stringifyQuery", ()=>stringifyQuery);
parcelHelpers.export(exports, "useLink", ()=>useLink);
parcelHelpers.export(exports, "useRoute", ()=>useRoute);
parcelHelpers.export(exports, "useRouter", ()=>useRouter);
parcelHelpers.export(exports, "viewDepthKey", ()=>viewDepthKey);
var _vue = require("vue");
var _devtoolsApi = require("@vue/devtools-api");
const isBrowser = typeof window !== "undefined";
function isESModule(obj) {
    return obj.__esModule || obj[Symbol.toStringTag] === "Module";
}
const assign = Object.assign;
function applyToParams(fn, params) {
    const newParams = {};
    for(const key in params){
        const value = params[key];
        newParams[key] = isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
}
const noop = ()=>{};
/**
 * Typesafe alternative to Array.isArray
 * https://github.com/microsoft/TypeScript/pull/48228
 */ const isArray = Array.isArray;
function warn(msg) {
    // avoid using ...args as it breaks in older Edge builds
    const args = Array.from(arguments).slice(1);
    console.warn.apply(console, [
        "[Vue Router warn]: " + msg
    ].concat(args));
}
const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path)=>path.replace(TRAILING_SLASH_RE, "");
/**
 * Transforms a URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */ function parseURL(parseQuery, location1, currentLocation = "/") {
    let path, query = {}, searchString = "", hash = "";
    // Could use URL and URLSearchParams but IE 11 doesn't support it
    // TODO: move to new URL()
    const hashPos = location1.indexOf("#");
    let searchPos = location1.indexOf("?");
    // the hash appears before the search, so it's not part of the search string
    if (hashPos < searchPos && hashPos >= 0) searchPos = -1;
    if (searchPos > -1) {
        path = location1.slice(0, searchPos);
        searchString = location1.slice(searchPos + 1, hashPos > -1 ? hashPos : location1.length);
        query = parseQuery(searchString);
    }
    if (hashPos > -1) {
        path = path || location1.slice(0, hashPos);
        // keep the # character
        hash = location1.slice(hashPos, location1.length);
    }
    // no search and no query
    path = resolveRelativePath(path != null ? path : location1, currentLocation);
    // empty path means a relative query or hash `?foo=f`, `#thing`
    return {
        fullPath: path + (searchString && "?") + searchString + hash,
        path,
        query,
        hash
    };
}
/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */ function stringifyURL(stringifyQuery, location1) {
    const query = location1.query ? stringifyQuery(location1.query) : "";
    return location1.path + (query && "?") + query + (location1.hash || "");
}
/**
 * Strips off the base from the beginning of a location.pathname in a non-case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */ function stripBase(pathname, base) {
    // no base or base is not found at the beginning
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase())) return pathname;
    return pathname.slice(base.length) || "/";
}
/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param stringifyQuery - A function that takes a query object of type LocationQueryRaw and returns a string representation of it.
 * @param a - first {@link RouteLocation}
 * @param b - second {@link RouteLocation}
 */ function isSameRouteLocation(stringifyQuery, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery(a.query) === stringifyQuery(b.query) && a.hash === b.hash;
}
/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a - first {@link RouteRecord}
 * @param b - second {@link RouteRecord}
 */ function isSameRouteRecord(a, b) {
    // since the original record has an undefined value for aliasOf
    // but all aliases point to the original record, this will always compare
    // the original record
    return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    for(const key in a){
        if (!isSameRouteLocationParamsValue(a[key], b[key])) return false;
    }
    return true;
}
function isSameRouteLocationParamsValue(a, b) {
    return isArray(a) ? isEquivalentArray(a, b) : isArray(b) ? isEquivalentArray(b, a) : a === b;
}
/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a - array of values
 * @param b - array of values or a single value
 */ function isEquivalentArray(a, b) {
    return isArray(b) ? a.length === b.length && a.every((value, i)=>value === b[i]) : a.length === 1 && a[0] === b;
}
/**
 * Resolves a relative path that starts with `.`.
 *
 * @param to - path location we are resolving
 * @param from - currentLocation.path, should start with `/`
 */ function resolveRelativePath(to, from) {
    if (to.startsWith("/")) return to;
    if (!from.startsWith("/")) {
        warn(`Cannot resolve a relative location without an absolute path. Trying to resolve "${to}" from "${from}". It should look like "/${from}".`);
        return to;
    }
    if (!to) return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    const lastToSegment = toSegments[toSegments.length - 1];
    // make . and ./ the same (../ === .., ../../ === ../..)
    // this is the same behavior as new URL()
    if (lastToSegment === ".." || lastToSegment === ".") toSegments.push("");
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for(toPosition = 0; toPosition < toSegments.length; toPosition++){
        segment = toSegments[toPosition];
        // we stay on the same position
        if (segment === ".") continue;
        // go up in the from array
        if (segment === "..") // we can't go below zero, but we still need to increment toPosition
        {
            if (position > 1) position--;
        } else break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments// ensure we use at least the last element in the toSegments
    .slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
}
var NavigationType;
(function(NavigationType) {
    NavigationType["pop"] = "pop";
    NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection) {
    NavigationDirection["back"] = "back";
    NavigationDirection["forward"] = "forward";
    NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
/**
 * Starting location for Histories
 */ const START = "";
// Generic utils
/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base - base to normalize
 */ function normalizeBase(base) {
    if (!base) {
        if (isBrowser) {
            // respect <base> tag
            const baseEl = document.querySelector("base");
            base = baseEl && baseEl.getAttribute("href") || "/";
            // strip full URL origin
            base = base.replace(/^\w+:\/\/[^\/]+/, "");
        } else base = "/";
    }
    // ensure leading slash when it was removed by the regex above avoid leading
    // slash with hash because the file could be read from the disk like file://
    // and the leading slash would cause problems
    if (base[0] !== "/" && base[0] !== "#") base = "/" + base;
    // remove the trailing slash so all other method can just do `base + fullPath`
    // to build an href
    return removeTrailingSlash(base);
}
// remove any character before the hash
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location1) {
    return base.replace(BEFORE_HASH_RE, "#") + location1;
}
function getElementPosition(el, offset) {
    const docRect = document.documentElement.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
        behavior: offset.behavior,
        left: elRect.left - docRect.left - (offset.left || 0),
        top: elRect.top - docRect.top - (offset.top || 0)
    };
}
const computeScrollPosition = ()=>({
        left: window.pageXOffset,
        top: window.pageYOffset
    });
function scrollToPosition(position) {
    let scrollToOptions;
    if ("el" in position) {
        const positionEl = position.el;
        const isIdSelector = typeof positionEl === "string" && positionEl.startsWith("#");
        /**
         * `id`s can accept pretty much any characters, including CSS combinators
         * like `>` or `~`. It's still possible to retrieve elements using
         * `document.getElementById('~')` but it needs to be escaped when using
         * `document.querySelector('#\\~')` for it to be valid. The only
         * requirements for `id`s are them to be unique on the page and to not be
         * empty (`id=""`). Because of that, when passing an id selector, it should
         * be properly escaped for it to work with `querySelector`. We could check
         * for the id selector to be simple (no CSS combinators `+ >~`) but that
         * would make things inconsistent since they are valid characters for an
         * `id` but would need to be escaped when using `querySelector`, breaking
         * their usage and ending up in no selector returned. Selectors need to be
         * escaped:
         *
         * - `#1-thing` becomes `#\31 -thing`
         * - `#with~symbols` becomes `#with\\~symbols`
         *
         * - More information about  the topic can be found at
         *   https://mathiasbynens.be/notes/html5-id-class.
         * - Practical example: https://mathiasbynens.be/demo/html5-id
         */ if (typeof position.el === "string") {
            if (!isIdSelector || !document.getElementById(position.el.slice(1))) try {
                const foundEl = document.querySelector(position.el);
                if (isIdSelector && foundEl) {
                    warn(`The selector "${position.el}" should be passed as "el: document.querySelector('${position.el}')" because it starts with "#".`);
                    // return to avoid other warnings
                    return;
                }
            } catch (err) {
                warn(`The selector "${position.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
                // return to avoid other warnings
                return;
            }
        }
        const el = typeof positionEl === "string" ? isIdSelector ? document.getElementById(positionEl.slice(1)) : document.querySelector(positionEl) : positionEl;
        if (!el) {
            warn(`Couldn't find element using selector "${position.el}" returned by scrollBehavior.`);
            return;
        }
        scrollToOptions = getElementPosition(el, position);
    } else scrollToOptions = position;
    if ("scrollBehavior" in document.documentElement.style) window.scrollTo(scrollToOptions);
    else window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
}
function getScrollKey(path, delta) {
    const position = history.state ? history.state.position - delta : -1;
    return position + path;
}
const scrollPositions = new Map();
function saveScrollPosition(key, scrollPosition) {
    scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
    const scroll = scrollPositions.get(key);
    // consume it so it's not used again
    scrollPositions.delete(key);
    return scroll;
}
// TODO: RFC about how to save scroll position
/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */ // export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }
let createBaseLocation = ()=>location.protocol + "//" + location.host;
/**
 * Creates a normalized history location from a window.location object
 * @param base - The base path
 * @param location - The window.location object
 */ function createCurrentLocation(base, location1) {
    const { pathname, search, hash } = location1;
    // allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
        let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
        let pathFromHash = hash.slice(slicePos);
        // prepend the starting slash to hash so the url starts with /#
        if (pathFromHash[0] !== "/") pathFromHash = "/" + pathFromHash;
        return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    // TODO: should it be a stack? a Dict. Check if the popstate listener
    // can trigger twice
    let pauseState = null;
    const popStateHandler = ({ state })=>{
        const to = createCurrentLocation(base, location);
        const from = currentLocation.value;
        const fromState = historyState.value;
        let delta = 0;
        if (state) {
            currentLocation.value = to;
            historyState.value = state;
            // ignore the popstate and reset the pauseState
            if (pauseState && pauseState === from) {
                pauseState = null;
                return;
            }
            delta = fromState ? state.position - fromState.position : 0;
        } else replace(to);
        // Here we could also revert the navigation by calling history.go(-delta)
        // this listener will have to be adapted to not trigger again and to wait for the url
        // to be updated before triggering the listeners. Some kind of validation function would also
        // need to be passed to the listeners so the navigation can be accepted
        // call all listeners
        listeners.forEach((listener)=>{
            listener(currentLocation.value, from, {
                delta,
                type: NavigationType.pop,
                direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
            });
        });
    };
    function pauseListeners() {
        pauseState = currentLocation.value;
    }
    function listen(callback) {
        // set up the listener and prepare teardown callbacks
        listeners.push(callback);
        const teardown = ()=>{
            const index = listeners.indexOf(callback);
            if (index > -1) listeners.splice(index, 1);
        };
        teardowns.push(teardown);
        return teardown;
    }
    function beforeUnloadListener() {
        const { history: history1 } = window;
        if (!history1.state) return;
        history1.replaceState(assign({}, history1.state, {
            scroll: computeScrollPosition()
        }), "");
    }
    function destroy() {
        for (const teardown of teardowns)teardown();
        teardowns = [];
        window.removeEventListener("popstate", popStateHandler);
        window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    // set up the listeners and prepare teardown callbacks
    window.addEventListener("popstate", popStateHandler);
    // TODO: could we use 'pagehide' or 'visibilitychange' instead?
    // https://developer.chrome.com/blog/page-lifecycle-api/
    window.addEventListener("beforeunload", beforeUnloadListener, {
        passive: true
    });
    return {
        pauseListeners,
        listen,
        destroy
    };
}
/**
 * Creates a state object
 */ function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
        back,
        current,
        forward,
        replaced,
        position: window.history.length,
        scroll: computeScroll ? computeScrollPosition() : null
    };
}
function useHistoryStateNavigation(base) {
    const { history: history1, location: location1 } = window;
    // private variables
    const currentLocation = {
        value: createCurrentLocation(base, location1)
    };
    const historyState = {
        value: history1.state
    };
    // build current history entry as this is a fresh navigation
    if (!historyState.value) changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        // the length is off by one, we need to decrease it
        position: history1.length - 1,
        replaced: true,
        // don't add a scroll as the user may have an anchor, and we want
        // scrollBehavior to be triggered without a saved position
        scroll: null
    }, true);
    function changeLocation(to, state, replace) {
        /**
         * if a base tag is provided, and we are on a normal domain, we have to
         * respect the provided `base` attribute because pushState() will use it and
         * potentially erase anything before the `#` like at
         * https://github.com/vuejs/router/issues/685 where a base of
         * `/folder/#` but a base of `/` would erase the `/folder/` section. If
         * there is no host, the `<base>` tag makes no sense and if there isn't a
         * base tag we can just use everything after the `#`.
         */ const hashIndex = base.indexOf("#");
        const url = hashIndex > -1 ? (location1.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
        try {
            // BROWSER QUIRK
            // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
            history1[replace ? "replaceState" : "pushState"](state, "", url);
            historyState.value = state;
        } catch (err) {
            warn("Error with push/replace State", err);
            // Force the navigation, this also resets the call count
            location1[replace ? "replace" : "assign"](url);
        }
    }
    function replace(to, data) {
        const state = assign({}, history1.state, buildState(historyState.value.back, // keep back and forward entries but override current position
        to, historyState.value.forward, true), data, {
            position: historyState.value.position
        });
        changeLocation(to, state, true);
        currentLocation.value = to;
    }
    function push(to, data) {
        // Add to current entry the information of where we are going
        // as well as saving the current position
        const currentState = assign({}, // use current history state to gracefully handle a wrong call to
        // history.replaceState
        // https://github.com/vuejs/router/issues/366
        historyState.value, history1.state, {
            forward: to,
            scroll: computeScrollPosition()
        });
        if (!history1.state) warn(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:\n\n` + `history.replaceState(history.state, '', url)\n\n` + `You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`);
        changeLocation(currentState.current, currentState, true);
        const state = assign({}, buildState(currentLocation.value, to, null), {
            position: currentState.position + 1
        }, data);
        changeLocation(to, state, false);
        currentLocation.value = to;
    }
    return {
        location: currentLocation,
        state: historyState,
        push,
        replace
    };
}
/**
 * Creates an HTML5 history. Most common history for single page applications.
 *
 * @param base -
 */ function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
        if (!triggerListeners) historyListeners.pauseListeners();
        history.go(delta);
    }
    const routerHistory = assign({
        // it's overridden right after
        location: "",
        base,
        go,
        createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
        enumerable: true,
        get: ()=>historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
        enumerable: true,
        get: ()=>historyNavigation.state.value
    });
    return routerHistory;
}
/**
 * Creates an in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
 * It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
 *
 * @param base - Base applied to all urls, defaults to '/'
 * @returns a history object that can be passed to the router constructor
 */ function createMemoryHistory(base = "") {
    let listeners = [];
    let queue = [
        START
    ];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location1) {
        position++;
        if (position !== queue.length) // we are in the middle, we remove everything from here in the queue
        queue.splice(position);
        queue.push(location1);
    }
    function triggerListeners(to, from, { direction, delta }) {
        const info = {
            direction,
            delta,
            type: NavigationType.pop
        };
        for (const callback of listeners)callback(to, from, info);
    }
    const routerHistory = {
        // rewritten by Object.defineProperty
        location: START,
        // TODO: should be kept in queue
        state: {},
        base,
        createHref: createHref.bind(null, base),
        replace (to) {
            // remove current entry and decrement position
            queue.splice(position--, 1);
            setLocation(to);
        },
        push (to, data) {
            setLocation(to);
        },
        listen (callback) {
            listeners.push(callback);
            return ()=>{
                const index = listeners.indexOf(callback);
                if (index > -1) listeners.splice(index, 1);
            };
        },
        destroy () {
            listeners = [];
            queue = [
                START
            ];
            position = 0;
        },
        go (delta, shouldTrigger = true) {
            const from = this.location;
            const direction = // we are considering delta === 0 going forward, but in abstract mode
            // using 0 for the delta doesn't make sense like it does in html5 where
            // it reloads the page
            delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
            position = Math.max(0, Math.min(position + delta, queue.length - 1));
            if (shouldTrigger) triggerListeners(this.location, from, {
                direction,
                delta
            });
        }
    };
    Object.defineProperty(routerHistory, "location", {
        enumerable: true,
        get: ()=>queue[position]
    });
    return routerHistory;
}
/**
 * Creates a hash history. Useful for web applications with no host (e.g. `file://`) or when configuring a server to
 * handle any URL is not possible.
 *
 * @param base - optional base to provide. Defaults to `location.pathname + location.search` If there is a `<base>` tag
 * in the `head`, its value will be ignored in favor of this parameter **but note it affects all the history.pushState()
 * calls**, meaning that if you use a `<base>` tag, it's `href` value **has to match this parameter** (ignoring anything
 * after the `#`).
 *
 * @example
 * ```js
 * // at https://example.com/folder
 * createWebHashHistory() // gives a url of `https://example.com/folder#`
 * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
 * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
 * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
 * // you should avoid doing this because it changes the original url and breaks copying urls
 * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
 *
 * // at file:///usr/etc/folder/index.html
 * // for locations with no `host`, the base is ignored
 * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
 * ```
 */ function createWebHashHistory(base) {
    // Make sure this implementation is fine in terms of encoding, specially for IE11
    // for `file://`, directly use the pathname and ignore the base
    // location.pathname contains an initial `/` even at the root: `https://example.com`
    base = location.host ? base || location.pathname + location.search : "";
    // allow the user to provide a `#` in the middle: `/base/#/app`
    if (!base.includes("#")) base += "#";
    if (!base.endsWith("#/") && !base.endsWith("#")) warn(`A hash base must end with a "#":\n"${base}" should be "${base.replace(/#.*$/, "#")}".`);
    return createWebHistory(base);
}
function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
}
function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
}
/**
 * Initial route location where the router is. Can be used in navigation guards
 * to differentiate the initial navigation.
 *
 * @example
 * ```js
 * import { START_LOCATION } from 'vue-router'
 *
 * router.beforeEach((to, from) => {
 *   if (from === START_LOCATION) {
 *     // initial navigation
 *   }
 * })
 * ```
 */ const START_LOCATION_NORMALIZED = {
    path: "/",
    name: undefined,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: undefined
};
const NavigationFailureSymbol = Symbol("navigation failure");
/**
 * Enumeration with all possible types for navigation failures. Can be passed to
 * {@link isNavigationFailure} to check for specific failures.
 */ var NavigationFailureType;
(function(NavigationFailureType) {
    /**
     * An aborted navigation is a navigation that failed because a navigation
     * guard returned `false` or called `next(false)`
     */ NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    /**
     * A cancelled navigation is a navigation that failed because a more recent
     * navigation finished started (not necessarily finished).
     */ NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    /**
     * A duplicated navigation is a navigation that failed because it was
     * initiated while already being at the exact same location.
     */ NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
// DEV only debug messages
const ErrorTypeMessages = {
    [1 /* ErrorTypes.MATCHER_NOT_FOUND */ ] ({ location: location1, currentLocation }) {
        return `No match for\n ${JSON.stringify(location1)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
    },
    [2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */ ] ({ from, to }) {
        return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4 /* ErrorTypes.NAVIGATION_ABORTED */ ] ({ from, to }) {
        return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8 /* ErrorTypes.NAVIGATION_CANCELLED */ ] ({ from, to }) {
        return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16 /* ErrorTypes.NAVIGATION_DUPLICATED */ ] ({ from, to }) {
        return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
};
function createRouterError(type, params) {
    return assign(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
    }, params);
}
function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
}
const propertiesToLog = [
    "params",
    "query",
    "hash"
];
function stringifyRoute(to) {
    if (typeof to === "string") return to;
    if ("path" in to) return to.path;
    const location1 = {};
    for (const key of propertiesToLog)if (key in to) location1[key] = to[key];
    return JSON.stringify(location1, null, 2);
}
// default pattern for a param: non-greedy everything but /
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
};
// Special Regex characters that must be escaped in static tokens
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */ function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    // the amount of scores is the same as the length of segments except for the root segment "/"
    const score = [];
    // the regexp as a string
    let pattern = options.start ? "^" : "";
    // extracted keys
    const keys = [];
    for (const segment of segments){
        // the root segment needs special treatment
        const segmentScores = segment.length ? [] : [
            90 /* PathScore.Root */ 
        ];
        // allow trailing slash
        if (options.strict && !segment.length) pattern += "/";
        for(let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++){
            const token = segment[tokenIndex];
            // resets the score if we are inside a sub-segment /:a-other-:b
            let subSegmentScore = 40 /* PathScore.Segment */  + (options.sensitive ? 0.25 /* PathScore.BonusCaseSensitive */  : 0);
            if (token.type === 0 /* TokenType.Static */ ) {
                // prepend the slash if we are starting a new segment
                if (!tokenIndex) pattern += "/";
                pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
                subSegmentScore += 40 /* PathScore.Static */ ;
            } else if (token.type === 1 /* TokenType.Param */ ) {
                const { value, repeatable, optional, regexp } = token;
                keys.push({
                    name: value,
                    repeatable,
                    optional
                });
                const re = regexp ? regexp : BASE_PARAM_PATTERN;
                // the user provided a custom regexp /:id(\\d+)
                if (re !== BASE_PARAM_PATTERN) {
                    subSegmentScore += 10 /* PathScore.BonusCustomRegExp */ ;
                    // make sure the regexp is valid before using it
                    try {
                        new RegExp(`(${re})`);
                    } catch (err) {
                        throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` + err.message);
                    }
                }
                // when we repeat we must take care of the repeating leading slash
                let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
                // prepend the slash if we are starting a new segment
                if (!tokenIndex) subPattern = // avoid an optional / if there are more segments e.g. /:p?-static
                // or /:p?-:p2
                optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
                if (optional) subPattern += "?";
                pattern += subPattern;
                subSegmentScore += 20 /* PathScore.Dynamic */ ;
                if (optional) subSegmentScore += -8 /* PathScore.BonusOptional */ ;
                if (repeatable) subSegmentScore += -20 /* PathScore.BonusRepeatable */ ;
                if (re === ".*") subSegmentScore += -50 /* PathScore.BonusWildcard */ ;
            }
            segmentScores.push(subSegmentScore);
        }
        // an empty array like /home/ -> [[{home}], []]
        // if (!segment.length) pattern += '/'
        score.push(segmentScores);
    }
    // only apply the strict bonus to the last score
    if (options.strict && options.end) {
        const i = score.length - 1;
        score[i][score[i].length - 1] += 0.7000000000000001 /* PathScore.BonusStrict */ ;
    }
    // TODO: dev only warn double trailing slash
    if (!options.strict) pattern += "/?";
    if (options.end) pattern += "$";
    else if (options.strict) pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse(path) {
        const match = path.match(re);
        const params = {};
        if (!match) return null;
        for(let i = 1; i < match.length; i++){
            const value = match[i] || "";
            const key = keys[i - 1];
            params[key.name] = value && key.repeatable ? value.split("/") : value;
        }
        return params;
    }
    function stringify(params) {
        let path = "";
        // for optional parameters to allow to be empty
        let avoidDuplicatedSlash = false;
        for (const segment of segments){
            if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
            avoidDuplicatedSlash = false;
            for (const token of segment){
                if (token.type === 0 /* TokenType.Static */ ) path += token.value;
                else if (token.type === 1 /* TokenType.Param */ ) {
                    const { value, repeatable, optional } = token;
                    const param = value in params ? params[value] : "";
                    if (isArray(param) && !repeatable) throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
                    const text = isArray(param) ? param.join("/") : param;
                    if (!text) {
                        if (optional) // if we have more than one optional param like /:a?-static we don't need to care about the optional param
                        {
                            if (segment.length < 2) {
                                // remove the last slash as we could be at the end
                                if (path.endsWith("/")) path = path.slice(0, -1);
                                else avoidDuplicatedSlash = true;
                            }
                        } else throw new Error(`Missing required param "${value}"`);
                    }
                    path += text;
                }
            }
        }
        // avoid empty path when we have multiple optional params
        return path || "/";
    }
    return {
        re,
        score,
        keys,
        parse,
        stringify
    };
}
/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 *
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */ function compareScoreArray(a, b) {
    let i = 0;
    while(i < a.length && i < b.length){
        const diff = b[i] - a[i];
        // only keep going if diff === 0
        if (diff) return diff;
        i++;
    }
    // if the last subsegment was Static, the shorter segments should be sorted first
    // otherwise sort the longest segment first
    if (a.length < b.length) return a.length === 1 && a[0] === 80 /* PathScore.Segment */  ? -1 : 1;
    else if (a.length > b.length) return b.length === 1 && b[0] === 80 /* PathScore.Segment */  ? 1 : -1;
    return 0;
}
/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 *
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */ function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while(i < aScore.length && i < bScore.length){
        const comp = compareScoreArray(aScore[i], bScore[i]);
        // do not return if both are equal
        if (comp) return comp;
        i++;
    }
    if (Math.abs(bScore.length - aScore.length) === 1) {
        if (isLastScoreNegative(aScore)) return 1;
        if (isLastScoreNegative(bScore)) return -1;
    }
    // if a and b share the same score entries but b has more, sort b first
    return bScore.length - aScore.length;
// this is the ternary version
// return aScore.length < bScore.length
//   ? 1
//   : aScore.length > bScore.length
//   ? -1
//   : 0
}
/**
 * This allows detecting splats at the end of a path: /home/:id(.*)*
 *
 * @param score - score to check
 * @returns true if the last entry is negative
 */ function isLastScoreNegative(score) {
    const last = score[score.length - 1];
    return score.length > 0 && last[last.length - 1] < 0;
}
const ROOT_TOKEN = {
    type: 0 /* TokenType.Static */ ,
    value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
// After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()
function tokenizePath(path) {
    if (!path) return [
        []
    ];
    if (path === "/") return [
        [
            ROOT_TOKEN
        ]
    ];
    if (!path.startsWith("/")) throw new Error(`Route paths should start with a "/": "${path}" should be "/${path}".`);
    // if (tokenCache.has(path)) return tokenCache.get(path)!
    function crash(message) {
        throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0 /* TokenizerState.Static */ ;
    let previousState = state;
    const tokens = [];
    // the segment will always be valid because we get into the initial state
    // with the leading /
    let segment;
    function finalizeSegment() {
        if (segment) tokens.push(segment);
        segment = [];
    }
    // index on the path
    let i = 0;
    // char at index
    let char;
    // buffer of the value read
    let buffer = "";
    // custom regexp for a param
    let customRe = "";
    function consumeBuffer() {
        if (!buffer) return;
        if (state === 0 /* TokenizerState.Static */ ) segment.push({
            type: 0 /* TokenType.Static */ ,
            value: buffer
        });
        else if (state === 1 /* TokenizerState.Param */  || state === 2 /* TokenizerState.ParamRegExp */  || state === 3 /* TokenizerState.ParamRegExpEnd */ ) {
            if (segment.length > 1 && (char === "*" || char === "+")) crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
            segment.push({
                type: 1 /* TokenType.Param */ ,
                value: buffer,
                regexp: customRe,
                repeatable: char === "*" || char === "+",
                optional: char === "*" || char === "?"
            });
        } else crash("Invalid state to consume buffer");
        buffer = "";
    }
    function addCharToBuffer() {
        buffer += char;
    }
    while(i < path.length){
        char = path[i++];
        if (char === "\\" && state !== 2 /* TokenizerState.ParamRegExp */ ) {
            previousState = state;
            state = 4 /* TokenizerState.EscapeNext */ ;
            continue;
        }
        switch(state){
            case 0 /* TokenizerState.Static */ :
                if (char === "/") {
                    if (buffer) consumeBuffer();
                    finalizeSegment();
                } else if (char === ":") {
                    consumeBuffer();
                    state = 1 /* TokenizerState.Param */ ;
                } else addCharToBuffer();
                break;
            case 4 /* TokenizerState.EscapeNext */ :
                addCharToBuffer();
                state = previousState;
                break;
            case 1 /* TokenizerState.Param */ :
                if (char === "(") state = 2 /* TokenizerState.ParamRegExp */ ;
                else if (VALID_PARAM_RE.test(char)) addCharToBuffer();
                else {
                    consumeBuffer();
                    state = 0 /* TokenizerState.Static */ ;
                    // go back one character if we were not modifying
                    if (char !== "*" && char !== "?" && char !== "+") i--;
                }
                break;
            case 2 /* TokenizerState.ParamRegExp */ :
                // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
                // it already works by escaping the closing )
                // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
                // is this really something people need since you can also write
                // /prefix_:p()_suffix
                if (char === ")") {
                    // handle the escaped )
                    if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
                    else state = 3 /* TokenizerState.ParamRegExpEnd */ ;
                } else customRe += char;
                break;
            case 3 /* TokenizerState.ParamRegExpEnd */ :
                // same as finalizing a param
                consumeBuffer();
                state = 0 /* TokenizerState.Static */ ;
                // go back one character if we were not modifying
                if (char !== "*" && char !== "?" && char !== "+") i--;
                customRe = "";
                break;
            default:
                crash("Unknown state");
                break;
        }
    }
    if (state === 2 /* TokenizerState.ParamRegExp */ ) crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    // tokenCache.set(path, tokens)
    return tokens;
}
function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    {
        const existingKeys = new Set();
        for (const key of parser.keys){
            if (existingKeys.has(key.name)) warn(`Found duplicated params with name "${key.name}" for path "${record.path}". Only the last one will be available on "$route.params".`);
            existingKeys.add(key.name);
        }
    }
    const matcher = assign(parser, {
        record,
        parent,
        // these needs to be populated by the parent
        children: [],
        alias: []
    });
    if (parent) // both are aliases or both are not aliases
    // we don't want to mix them because the order is used when
    // passing originalRecord in Matcher.addRoute
    {
        if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
    }
    return matcher;
}
/**
 * Creates a Router Matcher.
 *
 * @internal
 * @param routes - array of initial routes
 * @param globalOptions - global route options
 */ function createRouterMatcher(routes, globalOptions) {
    // normalized ordered array of matchers
    const matchers = [];
    const matcherMap = new Map();
    globalOptions = mergeOptions({
        strict: false,
        end: true,
        sensitive: false
    }, globalOptions);
    function getRecordMatcher(name) {
        return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
        // used later on to remove by name
        const isRootAdd = !originalRecord;
        const mainNormalizedRecord = normalizeRouteRecord(record);
        checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent);
        // we might be the child of an alias
        mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
        const options = mergeOptions(globalOptions, record);
        // generate an array of records to correctly handle aliases
        const normalizedRecords = [
            mainNormalizedRecord
        ];
        if ("alias" in record) {
            const aliases = typeof record.alias === "string" ? [
                record.alias
            ] : record.alias;
            for (const alias of aliases)normalizedRecords.push(assign({}, mainNormalizedRecord, {
                // this allows us to hold a copy of the `components` option
                // so that async components cache is hold on the original record
                components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
                path: alias,
                // we might be the child of an alias
                aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
            }));
        }
        let matcher;
        let originalMatcher;
        for (const normalizedRecord of normalizedRecords){
            const { path } = normalizedRecord;
            // Build up the path for nested routes if the child isn't an absolute
            // route. Only add the / delimiter if the child path isn't empty and if the
            // parent path doesn't have a trailing slash
            if (parent && path[0] !== "/") {
                const parentPath = parent.record.path;
                const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
                normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
            }
            if (normalizedRecord.path === "*") throw new Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\nSee more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
            // create the object beforehand, so it can be passed to children
            matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
            if (parent && path[0] === "/") checkMissingParamsInAbsolutePath(matcher, parent);
            // if we are an alias we must tell the original record that we exist,
            // so we can be removed
            if (originalRecord) {
                originalRecord.alias.push(matcher);
                checkSameParams(originalRecord, matcher);
            } else {
                // otherwise, the first record is the original and others are aliases
                originalMatcher = originalMatcher || matcher;
                if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
                // remove the route if named and only for the top record (avoid in nested calls)
                // this works because the original record is the first one
                if (isRootAdd && record.name && !isAliasRecord(matcher)) removeRoute(record.name);
            }
            if (mainNormalizedRecord.children) {
                const children = mainNormalizedRecord.children;
                for(let i = 0; i < children.length; i++)addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
            }
            // if there was no original record, then the first one was not an alias and all
            // other aliases (if any) need to reference this record when adding children
            originalRecord = originalRecord || matcher;
            // TODO: add normalized records for more flexibility
            // if (parent && isAliasRecord(originalRecord)) {
            //   parent.children.push(originalRecord)
            // }
            // Avoid adding a record that doesn't display anything. This allows passing through records without a component to
            // not be reached and pass through the catch all route
            if (matcher.record.components && Object.keys(matcher.record.components).length || matcher.record.name || matcher.record.redirect) insertMatcher(matcher);
        }
        return originalMatcher ? ()=>{
            // since other matchers are aliases, they should be removed by the original matcher
            removeRoute(originalMatcher);
        } : noop;
    }
    function removeRoute(matcherRef) {
        if (isRouteName(matcherRef)) {
            const matcher = matcherMap.get(matcherRef);
            if (matcher) {
                matcherMap.delete(matcherRef);
                matchers.splice(matchers.indexOf(matcher), 1);
                matcher.children.forEach(removeRoute);
                matcher.alias.forEach(removeRoute);
            }
        } else {
            const index = matchers.indexOf(matcherRef);
            if (index > -1) {
                matchers.splice(index, 1);
                if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
                matcherRef.children.forEach(removeRoute);
                matcherRef.alias.forEach(removeRoute);
            }
        }
    }
    function getRoutes() {
        return matchers;
    }
    function insertMatcher(matcher) {
        let i = 0;
        while(i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && // Adding children with empty path should still appear before the parent
        // https://github.com/vuejs/router/issues/1124
        (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))i++;
        matchers.splice(i, 0, matcher);
        // only add the original record to the name map
        if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location1, currentLocation) {
        let matcher;
        let params = {};
        let path;
        let name;
        if ("name" in location1 && location1.name) {
            matcher = matcherMap.get(location1.name);
            if (!matcher) throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND */ , {
                location: location1
            });
            {
                const invalidParams = Object.keys(location1.params || {}).filter((paramName)=>!matcher.keys.find((k)=>k.name === paramName));
                if (invalidParams.length) warn(`Discarded invalid param(s) "${invalidParams.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
            }
            name = matcher.record.name;
            params = assign(// paramsFromLocation is a new object
            paramsFromLocation(currentLocation.params, // only keep params that exist in the resolved location
            // TODO: only keep optional params coming from a parent record
            matcher.keys.filter((k)=>!k.optional).map((k)=>k.name)), // discard any existing params in the current location that do not exist here
            // #1497 this ensures better active/exact matching
            location1.params && paramsFromLocation(location1.params, matcher.keys.map((k)=>k.name)));
            // throws if cannot be stringified
            path = matcher.stringify(params);
        } else if ("path" in location1) {
            // no need to resolve the path with the matcher as it was provided
            // this also allows the user to control the encoding
            path = location1.path;
            if (!path.startsWith("/")) warn(`The Matcher cannot resolve relative paths but received "${path}". Unless you directly called \`matcher.resolve("${path}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`);
            matcher = matchers.find((m)=>m.re.test(path));
            // matcher should have a value after the loop
            if (matcher) {
                // we know the matcher works because we tested the regexp
                params = matcher.parse(path);
                name = matcher.record.name;
            }
        // location is a relative path
        } else {
            // match by name or path of current route
            matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m)=>m.re.test(currentLocation.path));
            if (!matcher) throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND */ , {
                location: location1,
                currentLocation
            });
            name = matcher.record.name;
            // since we are navigating to the same location, we don't need to pick the
            // params like when `name` is provided
            params = assign({}, currentLocation.params, location1.params);
            path = matcher.stringify(params);
        }
        const matched = [];
        let parentMatcher = matcher;
        while(parentMatcher){
            // reversed order so parents are at the beginning
            matched.unshift(parentMatcher.record);
            parentMatcher = parentMatcher.parent;
        }
        return {
            name,
            path,
            params,
            matched,
            meta: mergeMetaFields(matched)
        };
    }
    // add initial routes
    routes.forEach((route)=>addRoute(route));
    return {
        addRoute,
        resolve,
        removeRoute,
        getRoutes,
        getRecordMatcher
    };
}
function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys)if (key in params) newParams[key] = params[key];
    return newParams;
}
/**
 * Normalizes a RouteRecordRaw. Creates a copy
 *
 * @param record
 * @returns the normalized version
 */ function normalizeRouteRecord(record) {
    return {
        path: record.path,
        redirect: record.redirect,
        name: record.name,
        meta: record.meta || {},
        aliasOf: undefined,
        beforeEnter: record.beforeEnter,
        props: normalizeRecordProps(record),
        children: record.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        components: "components" in record ? record.components || null : record.component && {
            default: record.component
        }
    };
}
/**
 * Normalize the optional `props` in a record to always be an object similar to
 * components. Also accept a boolean for components.
 * @param record
 */ function normalizeRecordProps(record) {
    const propsObject = {};
    // props does not exist on redirect records, but we can set false directly
    const props = record.props || false;
    if ("component" in record) propsObject.default = props;
    else // NOTE: we could also allow a function to be applied to every component.
    // Would need user feedback for use cases
    for(const name in record.components)propsObject[name] = typeof props === "object" ? props[name] : props;
    return propsObject;
}
/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */ function isAliasRecord(record) {
    while(record){
        if (record.record.aliasOf) return true;
        record = record.parent;
    }
    return false;
}
/**
 * Merge meta fields of an array of records
 *
 * @param matched - array of matched records
 */ function mergeMetaFields(matched) {
    return matched.reduce((meta, record)=>assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
    const options = {};
    for(const key in defaults)options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    return options;
}
function isSameParam(a, b) {
    return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
}
/**
 * Check if a path and its alias have the same required params
 *
 * @param a - original record
 * @param b - alias record
 */ function checkSameParams(a, b) {
    for (const key of a.keys){
        if (!key.optional && !b.keys.find(isSameParam.bind(null, key))) return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
    }
    for (const key of b.keys){
        if (!key.optional && !a.keys.find(isSameParam.bind(null, key))) return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${key.name}"`);
    }
}
/**
 * A route with a name and a child with an empty path without a name should warn when adding the route
 *
 * @param mainNormalizedRecord - RouteRecordNormalized
 * @param parent - RouteRecordMatcher
 */ function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent) {
    if (parent && parent.record.name && !mainNormalizedRecord.name && !mainNormalizedRecord.path) warn(`The route named "${String(parent.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function checkMissingParamsInAbsolutePath(record, parent) {
    for (const key of parent.keys){
        if (!record.keys.find(isSameParam.bind(null, key))) return warn(`Absolute path "${record.record.path}" must have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
    }
}
function isRecordChildOf(record, parent) {
    return parent.children.some((child)=>child === record || isRecordChildOf(record, child));
}
/**
 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
 * < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */ // const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
const HASH_RE = /#/g; // %23
const AMPERSAND_RE = /&/g; // %26
const SLASH_RE = /\//g; // %2F
const EQUAL_RE = /=/g; // %3D
const IM_RE = /\?/g; // %3F
const PLUS_RE = /\+/g; // %2B
/**
 * NOTE: It's not clear to me if we should encode the + symbol in queries, it
 * seems to be less flexible than not doing so and I can't find out the legacy
 * systems requiring this for regular requests like text/html. In the standard,
 * the encoding of the plus character is only mentioned for
 * application/x-www-form-urlencoded
 * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
 * leave the plus character as is in queries. To be more flexible, we allow the
 * plus character on the query, but it can also be manually encoded by the user.
 *
 * Resources:
 * - https://url.spec.whatwg.org/#urlencoded-parsing
 * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
 */ const ENC_BRACKET_OPEN_RE = /%5B/g; // [
const ENC_BRACKET_CLOSE_RE = /%5D/g; // ]
const ENC_CARET_RE = /%5E/g; // ^
const ENC_BACKTICK_RE = /%60/g; // `
const ENC_CURLY_OPEN_RE = /%7B/g; // {
const ENC_PIPE_RE = /%7C/g; // |
const ENC_CURLY_CLOSE_RE = /%7D/g; // }
const ENC_SPACE_RE = /%20/g; // }
/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */ function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */ function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
 * Encode characters that need to be encoded query values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */ function encodeQueryValue(text) {
    return commonEncode(text)// Encode the space as +, encode the + to differentiate it from the space
    .replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
/**
 * Like `encodeQueryValue` but also encodes the `=` character.
 *
 * @param text - string to encode
 */ function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */ function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
}
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
 * string instead.
 *
 * @param text - string to encode
 * @returns encoded string
 */ function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
}
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */ function decode(text) {
    try {
        return decodeURIComponent("" + text);
    } catch (err) {
        warn(`Error decoding "${text}". Using original value`);
    }
    return "" + text;
}
/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams

 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */ function parseQuery(search) {
    const query = {};
    // avoid creating an object with an empty key and empty value
    // because of split('&')
    if (search === "" || search === "?") return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for(let i = 0; i < searchParams.length; ++i){
        // pre decode the + into space
        const searchParam = searchParams[i].replace(PLUS_RE, " ");
        // allow the = character
        const eqPos = searchParam.indexOf("=");
        const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
        const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
        if (key in query) {
            // an extra variable for ts types
            let currentValue = query[key];
            if (!isArray(currentValue)) currentValue = query[key] = [
                currentValue
            ];
            currentValue.push(value);
        } else query[key] = value;
    }
    return query;
}
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */ function stringifyQuery(query) {
    let search = "";
    for(let key in query){
        const value = query[key];
        key = encodeQueryKey(key);
        if (value == null) {
            // only null adds the value
            if (value !== undefined) search += (search.length ? "&" : "") + key;
            continue;
        }
        // keep null values
        const values = isArray(value) ? value.map((v)=>v && encodeQueryValue(v)) : [
            value && encodeQueryValue(value)
        ];
        values.forEach((value)=>{
            // skip undefined values in arrays as if they were not present
            // smaller code than using filter
            if (value !== undefined) {
                // only append & with non-empty search
                search += (search.length ? "&" : "") + key;
                if (value != null) search += "=" + value;
            }
        });
    }
    return search;
}
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */ function normalizeQuery(query) {
    const normalizedQuery = {};
    for(const key in query){
        const value = query[key];
        if (value !== undefined) normalizedQuery[key] = isArray(value) ? value.map((v)=>v == null ? null : "" + v) : value == null ? value : "" + value;
    }
    return normalizedQuery;
}
/**
 * RouteRecord being rendered by the closest ancestor Router View. Used for
 * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
 * Location Matched
 *
 * @internal
 */ const matchedRouteKey = Symbol("router view location matched");
/**
 * Allows overriding the router view depth to control which component in
 * `matched` is rendered. rvd stands for Router View Depth
 *
 * @internal
 */ const viewDepthKey = Symbol("router view depth");
/**
 * Allows overriding the router instance returned by `useRouter` in tests. r
 * stands for router
 *
 * @internal
 */ const routerKey = Symbol("router");
/**
 * Allows overriding the current route returned by `useRoute` in tests. rl
 * stands for route location
 *
 * @internal
 */ const routeLocationKey = Symbol("route location");
/**
 * Allows overriding the current route used by router-view. Internally this is
 * used when the `route` prop is passed.
 *
 * @internal
 */ const routerViewLocationKey = Symbol("router view location");
/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */ function useCallbacks() {
    let handlers = [];
    function add(handler) {
        handlers.push(handler);
        return ()=>{
            const i = handlers.indexOf(handler);
            if (i > -1) handlers.splice(i, 1);
        };
    }
    function reset() {
        handlers = [];
    }
    return {
        add,
        list: ()=>handlers.slice(),
        reset
    };
}
function registerGuard(record, name, guard) {
    const removeFromList = ()=>{
        record[name].delete(guard);
    };
    (0, _vue.onUnmounted)(removeFromList);
    (0, _vue.onDeactivated)(removeFromList);
    (0, _vue.onActivated)(()=>{
        record[name].add(guard);
    });
    record[name].add(guard);
}
/**
 * Add a navigation guard that triggers whenever the component for the current
 * location is about to be left. Similar to {@link beforeRouteLeave} but can be
 * used in any component. The guard is removed when the component is unmounted.
 *
 * @param leaveGuard - {@link NavigationGuard}
 */ function onBeforeRouteLeave(leaveGuard) {
    if (!(0, _vue.getCurrentInstance)()) {
        warn("getCurrentInstance() returned null. onBeforeRouteLeave() must be called at the top of a setup function");
        return;
    }
    const activeRecord = (0, _vue.inject)(matchedRouteKey, // to avoid warning
    {}).value;
    if (!activeRecord) {
        warn("No active route record was found when calling `onBeforeRouteLeave()`. Make sure you call this function inside a component child of <router-view>. Maybe you called it inside of App.vue?");
        return;
    }
    registerGuard(activeRecord, "leaveGuards", leaveGuard);
}
/**
 * Add a navigation guard that triggers whenever the current location is about
 * to be updated. Similar to {@link beforeRouteUpdate} but can be used in any
 * component. The guard is removed when the component is unmounted.
 *
 * @param updateGuard - {@link NavigationGuard}
 */ function onBeforeRouteUpdate(updateGuard) {
    if (!(0, _vue.getCurrentInstance)()) {
        warn("getCurrentInstance() returned null. onBeforeRouteUpdate() must be called at the top of a setup function");
        return;
    }
    const activeRecord = (0, _vue.inject)(matchedRouteKey, // to avoid warning
    {}).value;
    if (!activeRecord) {
        warn("No active route record was found when calling `onBeforeRouteUpdate()`. Make sure you call this function inside a component child of <router-view>. Maybe you called it inside of App.vue?");
        return;
    }
    registerGuard(activeRecord, "updateGuards", updateGuard);
}
function guardToPromiseFn(guard, to, from, record, name) {
    // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
    const enterCallbackArray = record && // name is defined if record is because of the function overload
    (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return ()=>new Promise((resolve, reject)=>{
            const next = (valid)=>{
                if (valid === false) reject(createRouterError(4 /* ErrorTypes.NAVIGATION_ABORTED */ , {
                    from,
                    to
                }));
                else if (valid instanceof Error) reject(valid);
                else if (isRouteLocation(valid)) reject(createRouterError(2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */ , {
                    from: to,
                    to: valid
                }));
                else {
                    if (enterCallbackArray && // since enterCallbackArray is truthy, both record and name also are
                    record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function") enterCallbackArray.push(valid);
                    resolve();
                }
            };
            // wrapping with Promise.resolve allows it to work with both async and sync guards
            const guardReturn = guard.call(record && record.instances[name], to, from, canOnlyBeCalledOnce(next, to, from));
            let guardCall = Promise.resolve(guardReturn);
            if (guard.length < 3) guardCall = guardCall.then(next);
            if (guard.length > 2) {
                const message = `The "next" callback was never called inside of ${guard.name ? '"' + guard.name + '"' : ""}:\n${guard.toString()}\n. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
                if (typeof guardReturn === "object" && "then" in guardReturn) guardCall = guardCall.then((resolvedValue)=>{
                    // @ts-expect-error: _called is added at canOnlyBeCalledOnce
                    if (!next._called) {
                        warn(message);
                        return Promise.reject(new Error("Invalid navigation guard"));
                    }
                    return resolvedValue;
                });
                else if (guardReturn !== undefined) // @ts-expect-error: _called is added at canOnlyBeCalledOnce
                {
                    if (!next._called) {
                        warn(message);
                        reject(new Error("Invalid navigation guard"));
                        return;
                    }
                }
            }
            guardCall.catch((err)=>reject(err));
        });
}
function canOnlyBeCalledOnce(next, to, from) {
    let called = 0;
    return function() {
        if (called++ === 1) warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
        // @ts-expect-error: we put it in the original one because it's easier to check
        next._called = true;
        if (called === 1) next.apply(null, arguments);
    };
}
function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched){
        if (!record.components && !record.children.length) warn(`Record with path "${record.path}" is either missing a "component(s)"` + ` or "children" property.`);
        for(const name in record.components){
            let rawComponent = record.components[name];
            if (!rawComponent || typeof rawComponent !== "object" && typeof rawComponent !== "function") {
                warn(`Component "${name}" in record with path "${record.path}" is not` + ` a valid component. Received "${String(rawComponent)}".`);
                // throw to ensure we stop here but warn to ensure the message isn't
                // missed by the user
                throw new Error("Invalid route component");
            } else if ("then" in rawComponent) {
                // warn if user wrote import('/component.vue') instead of () =>
                // import('./component.vue')
                warn(`Component "${name}" in record with path "${record.path}" is a ` + `Promise instead of a function that returns a Promise. Did you ` + `write "import('./MyPage.vue')" instead of ` + `"() => import('./MyPage.vue')" ? This will break in ` + `production if not fixed.`);
                const promise = rawComponent;
                rawComponent = ()=>promise;
            } else if (rawComponent.__asyncLoader && // warn only once per component
            !rawComponent.__warnedDefineAsync) {
                rawComponent.__warnedDefineAsync = true;
                warn(`Component "${name}" in record with path "${record.path}" is defined ` + `using "defineAsyncComponent()". ` + `Write "() => import('./MyPage.vue')" instead of ` + `"defineAsyncComponent(() => import('./MyPage.vue'))".`);
            }
            // skip update and leave guards if the route component is not mounted
            if (guardType !== "beforeRouteEnter" && !record.instances[name]) continue;
            if (isRouteComponent(rawComponent)) {
                // __vccOpts is added by vue-class-component and contain the regular options
                const options = rawComponent.__vccOpts || rawComponent;
                const guard = options[guardType];
                guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
            } else {
                // start requesting the chunk already
                let componentPromise = rawComponent();
                if (!("catch" in componentPromise)) {
                    warn(`Component "${name}" in record with path "${record.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`);
                    componentPromise = Promise.resolve(componentPromise);
                }
                guards.push(()=>componentPromise.then((resolved)=>{
                        if (!resolved) return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
                        const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
                        // replace the function with the resolved component
                        // cannot be null or undefined because we went into the for loop
                        record.components[name] = resolvedComponent;
                        // __vccOpts is added by vue-class-component and contain the regular options
                        const options = resolvedComponent.__vccOpts || resolvedComponent;
                        const guard = options[guardType];
                        return guard && guardToPromiseFn(guard, to, from, record, name)();
                    }));
            }
        }
    }
    return guards;
}
/**
 * Allows differentiating lazy components from functional components and vue-class-component
 * @internal
 *
 * @param component
 */ function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
}
/**
 * Ensures a route is loaded, so it can be passed as o prop to `<RouterView>`.
 *
 * @param route - resolved route to load
 */ function loadRouteLocation(route) {
    return route.matched.every((record)=>record.redirect) ? Promise.reject(new Error("Cannot load a route that redirects.")) : Promise.all(route.matched.map((record)=>record.components && Promise.all(Object.keys(record.components).reduce((promises, name)=>{
            const rawComponent = record.components[name];
            if (typeof rawComponent === "function" && !("displayName" in rawComponent)) promises.push(rawComponent().then((resolved)=>{
                if (!resolved) return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}". Ensure you passed a function that returns a promise.`));
                const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
                // replace the function with the resolved component
                // cannot be null or undefined because we went into the for loop
                record.components[name] = resolvedComponent;
                return;
            }));
            return promises;
        }, [])))).then(()=>route);
}
// TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC
function useLink(props) {
    const router = (0, _vue.inject)(routerKey);
    const currentRoute = (0, _vue.inject)(routeLocationKey);
    const route = (0, _vue.computed)(()=>router.resolve((0, _vue.unref)(props.to)));
    const activeRecordIndex = (0, _vue.computed)(()=>{
        const { matched } = route.value;
        const { length } = matched;
        const routeMatched = matched[length - 1];
        const currentMatched = currentRoute.matched;
        if (!routeMatched || !currentMatched.length) return -1;
        const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
        if (index > -1) return index;
        // possible parent record
        const parentRecordPath = getOriginalPath(matched[length - 2]);
        return(// we are dealing with nested routes
        length > 1 && // if the parent and matched route have the same path, this link is
        // referring to the empty child. Or we currently are on a different
        // child of the same parent
        getOriginalPath(routeMatched) === parentRecordPath && // avoid comparing the child with its parent
        currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index);
    });
    const isActive = (0, _vue.computed)(()=>activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = (0, _vue.computed)(()=>activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
        if (guardEvent(e)) return router[(0, _vue.unref)(props.replace) ? "replace" : "push"]((0, _vue.unref)(props.to)).catch(noop);
        return Promise.resolve();
    }
    // devtools only
    if (isBrowser) {
        const instance = (0, _vue.getCurrentInstance)();
        if (instance) {
            const linkContextDevtools = {
                route: route.value,
                isActive: isActive.value,
                isExactActive: isExactActive.value
            };
            // @ts-expect-error: this is internal
            instance.__vrl_devtools = instance.__vrl_devtools || [];
            // @ts-expect-error: this is internal
            instance.__vrl_devtools.push(linkContextDevtools);
            (0, _vue.watchEffect)(()=>{
                linkContextDevtools.route = route.value;
                linkContextDevtools.isActive = isActive.value;
                linkContextDevtools.isExactActive = isExactActive.value;
            }, {
                flush: "post"
            });
        }
    }
    /**
     * NOTE: update {@link _RouterLinkI}'s `$slots` type when updating this
     */ return {
        route,
        href: (0, _vue.computed)(()=>route.value.href),
        isActive,
        isExactActive,
        navigate
    };
}
const RouterLinkImpl = /*#__PURE__*/ (0, _vue.defineComponent)({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [
                String,
                Object
            ],
            required: true
        },
        replace: Boolean,
        activeClass: String,
        // inactiveClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink,
    setup (props, { slots }) {
        const link = (0, _vue.reactive)(useLink(props));
        const { options } = (0, _vue.inject)(routerKey);
        const elClass = (0, _vue.computed)(()=>({
                [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
                // [getLinkClass(
                //   props.inactiveClass,
                //   options.linkInactiveClass,
                //   'router-link-inactive'
                // )]: !link.isExactActive,
                [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
            }));
        return ()=>{
            const children = slots.default && slots.default(link);
            return props.custom ? children : (0, _vue.h)("a", {
                "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
                href: link.href,
                // this would override user added attrs but Vue will still add
                // the listener, so we end up triggering both
                onClick: link.navigate,
                class: elClass.value
            }, children);
        };
    }
});
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to render a link that triggers a navigation on click.
 */ const RouterLink = RouterLinkImpl;
function guardEvent(e) {
    // don't redirect with control keys
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
    // don't redirect when preventDefault called
    if (e.defaultPrevented) return;
    // don't redirect on right click
    if (e.button !== undefined && e.button !== 0) return;
    // don't redirect if `target="_blank"`
    // @ts-expect-error getAttribute does exist
    if (e.currentTarget && e.currentTarget.getAttribute) {
        // @ts-expect-error getAttribute exists
        const target = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(target)) return;
    }
    // this may be a Weex event which doesn't have this method
    if (e.preventDefault) e.preventDefault();
    return true;
}
function includesParams(outer, inner) {
    for(const key in inner){
        const innerValue = inner[key];
        const outerValue = outer[key];
        if (typeof innerValue === "string") {
            if (innerValue !== outerValue) return false;
        } else {
            if (!isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i)=>value !== outerValue[i])) return false;
        }
    }
    return true;
}
/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */ function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
}
/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */ const getLinkClass = (propClass, globalClass, defaultClass)=>propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
const RouterViewImpl = /*#__PURE__*/ (0, _vue.defineComponent)({
    name: "RouterView",
    // #674 we manually inherit them
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    // Better compat for @vue/compat users
    // https://github.com/vuejs/router/issues/1315
    compatConfig: {
        MODE: 3
    },
    setup (props, { attrs, slots }) {
        warnDeprecatedUsage();
        const injectedRoute = (0, _vue.inject)(routerViewLocationKey);
        const routeToDisplay = (0, _vue.computed)(()=>props.route || injectedRoute.value);
        const injectedDepth = (0, _vue.inject)(viewDepthKey, 0);
        // The depth changes based on empty components option, which allows passthrough routes e.g. routes with children
        // that are used to reuse the `path` property
        const depth = (0, _vue.computed)(()=>{
            let initialDepth = (0, _vue.unref)(injectedDepth);
            const { matched } = routeToDisplay.value;
            let matchedRoute;
            while((matchedRoute = matched[initialDepth]) && !matchedRoute.components)initialDepth++;
            return initialDepth;
        });
        const matchedRouteRef = (0, _vue.computed)(()=>routeToDisplay.value.matched[depth.value]);
        (0, _vue.provide)(viewDepthKey, (0, _vue.computed)(()=>depth.value + 1));
        (0, _vue.provide)(matchedRouteKey, matchedRouteRef);
        (0, _vue.provide)(routerViewLocationKey, routeToDisplay);
        const viewRef = (0, _vue.ref)();
        // watch at the same time the component instance, the route record we are
        // rendering, and the name
        (0, _vue.watch)(()=>[
                viewRef.value,
                matchedRouteRef.value,
                props.name
            ], ([instance, to, name], [oldInstance, from, oldName])=>{
            // copy reused instances
            if (to) {
                // this will update the instance for new instances as well as reused
                // instances when navigating to a new route
                to.instances[name] = instance;
                // the component instance is reused for a different route or name, so
                // we copy any saved update or leave guards. With async setup, the
                // mounting component will mount before the matchedRoute changes,
                // making instance === oldInstance, so we check if guards have been
                // added before. This works because we remove guards when
                // unmounting/deactivating components
                if (from && from !== to && instance && instance === oldInstance) {
                    if (!to.leaveGuards.size) to.leaveGuards = from.leaveGuards;
                    if (!to.updateGuards.size) to.updateGuards = from.updateGuards;
                }
            }
            // trigger beforeRouteEnter next callbacks
            if (instance && to && // if there is no instance but to and from are the same this might be
            // the first visit
            (!from || !isSameRouteRecord(to, from) || !oldInstance)) (to.enterCallbacks[name] || []).forEach((callback)=>callback(instance));
        }, {
            flush: "post"
        });
        return ()=>{
            const route = routeToDisplay.value;
            // we need the value at the time we render because when we unmount, we
            // navigated to a different location so the value is different
            const currentName = props.name;
            const matchedRoute = matchedRouteRef.value;
            const ViewComponent = matchedRoute && matchedRoute.components[currentName];
            if (!ViewComponent) return normalizeSlot(slots.default, {
                Component: ViewComponent,
                route
            });
            // props from route configuration
            const routePropsOption = matchedRoute.props[currentName];
            const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
            const onVnodeUnmounted = (vnode)=>{
                // remove the instance reference to prevent leak
                if (vnode.component.isUnmounted) matchedRoute.instances[currentName] = null;
            };
            const component = (0, _vue.h)(ViewComponent, assign({}, routeProps, attrs, {
                onVnodeUnmounted,
                ref: viewRef
            }));
            if (isBrowser && component.ref) {
                // TODO: can display if it's an alias, its props
                const info = {
                    depth: depth.value,
                    name: matchedRoute.name,
                    path: matchedRoute.path,
                    meta: matchedRoute.meta
                };
                const internalInstances = isArray(component.ref) ? component.ref.map((r)=>r.i) : [
                    component.ref.i
                ];
                internalInstances.forEach((instance)=>{
                    // @ts-expect-error
                    instance.__vrv_devtools = info;
                });
            }
            return(// pass the vnode to the slot as a prop.
            // h and <component :is="..."> both accept vnodes
            normalizeSlot(slots.default, {
                Component: component,
                route
            }) || component);
        };
    }
});
function normalizeSlot(slot, data) {
    if (!slot) return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
}
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to display the current route the user is at.
 */ const RouterView = RouterViewImpl;
// warn against deprecated usage with <transition> & <keep-alive>
// due to functional component being no longer eager in Vue 3
function warnDeprecatedUsage() {
    const instance = (0, _vue.getCurrentInstance)();
    const parentName = instance.parent && instance.parent.type.name;
    const parentSubTreeType = instance.parent && instance.parent.subTree && instance.parent.subTree.type;
    if (parentName && (parentName === "KeepAlive" || parentName.includes("Transition")) && typeof parentSubTreeType === "object" && parentSubTreeType.name === "RouterView") {
        const comp = parentName === "KeepAlive" ? "keep-alive" : "transition";
        warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.\n` + `Use slot props instead:\n\n` + `<router-view v-slot="{ Component }">\n` + `  <${comp}>\n` + `    <component :is="Component" />\n` + `  </${comp}>\n` + `</router-view>`);
    }
}
/**
 * Copies a route location and removes any problematic properties that cannot be shown in devtools (e.g. Vue instances).
 *
 * @param routeLocation - routeLocation to format
 * @param tooltip - optional tooltip
 * @returns a copy of the routeLocation
 */ function formatRouteLocation(routeLocation, tooltip) {
    const copy = assign({}, routeLocation, {
        // remove variables that can contain vue instances
        matched: routeLocation.matched.map((matched)=>omit(matched, [
                "instances",
                "children",
                "aliasOf"
            ]))
    });
    return {
        _custom: {
            type: null,
            readOnly: true,
            display: routeLocation.fullPath,
            tooltip,
            value: copy
        }
    };
}
function formatDisplay(display) {
    return {
        _custom: {
            display
        }
    };
}
// to support multiple router instances
let routerId = 0;
function addDevtools(app, router, matcher) {
    // Take over router.beforeEach and afterEach
    // make sure we are not registering the devtool twice
    if (router.__hasDevtools) return;
    router.__hasDevtools = true;
    // increment to support multiple router instances
    const id = routerId++;
    (0, _devtoolsApi.setupDevtoolsPlugin)({
        id: "org.vuejs.router" + (id ? "." + id : ""),
        label: "Vue Router",
        packageName: "vue-router",
        homepage: "https://router.vuejs.org",
        logo: "https://router.vuejs.org/logo.png",
        componentStateTypes: [
            "Routing"
        ],
        app
    }, (api)=>{
        if (typeof api.now !== "function") console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
        // display state added by the router
        api.on.inspectComponent((payload, ctx)=>{
            if (payload.instanceData) payload.instanceData.state.push({
                type: "Routing",
                key: "$route",
                editable: false,
                value: formatRouteLocation(router.currentRoute.value, "Current Route")
            });
        });
        // mark router-link as active and display tags on router views
        api.on.visitComponentTree(({ treeNode: node, componentInstance })=>{
            if (componentInstance.__vrv_devtools) {
                const info = componentInstance.__vrv_devtools;
                node.tags.push({
                    label: (info.name ? `${info.name.toString()}: ` : "") + info.path,
                    textColor: 0,
                    tooltip: "This component is rendered by &lt;router-view&gt;",
                    backgroundColor: PINK_500
                });
            }
            // if multiple useLink are used
            if (isArray(componentInstance.__vrl_devtools)) {
                componentInstance.__devtoolsApi = api;
                componentInstance.__vrl_devtools.forEach((devtoolsData)=>{
                    let backgroundColor = ORANGE_400;
                    let tooltip = "";
                    if (devtoolsData.isExactActive) {
                        backgroundColor = LIME_500;
                        tooltip = "This is exactly active";
                    } else if (devtoolsData.isActive) {
                        backgroundColor = BLUE_600;
                        tooltip = "This link is active";
                    }
                    node.tags.push({
                        label: devtoolsData.route.path,
                        textColor: 0,
                        tooltip,
                        backgroundColor
                    });
                });
            }
        });
        (0, _vue.watch)(router.currentRoute, ()=>{
            // refresh active state
            refreshRoutesView();
            api.notifyComponentUpdate();
            api.sendInspectorTree(routerInspectorId);
            api.sendInspectorState(routerInspectorId);
        });
        const navigationsLayerId = "router:navigations:" + id;
        api.addTimelineLayer({
            id: navigationsLayerId,
            label: `Router${id ? " " + id : ""} Navigations`,
            color: 0x40a8c4
        });
        // const errorsLayerId = 'router:errors'
        // api.addTimelineLayer({
        //   id: errorsLayerId,
        //   label: 'Router Errors',
        //   color: 0xea5455,
        // })
        router.onError((error, to)=>{
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    title: "Error during Navigation",
                    subtitle: to.fullPath,
                    logType: "error",
                    time: api.now(),
                    data: {
                        error
                    },
                    groupId: to.meta.__navigationId
                }
            });
        });
        // attached to `meta` and used to group events
        let navigationId = 0;
        router.beforeEach((to, from)=>{
            const data = {
                guard: formatDisplay("beforeEach"),
                from: formatRouteLocation(from, "Current Location during this navigation"),
                to: formatRouteLocation(to, "Target location")
            };
            // Used to group navigations together, hide from devtools
            Object.defineProperty(to.meta, "__navigationId", {
                value: navigationId++
            });
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    time: api.now(),
                    title: "Start of navigation",
                    subtitle: to.fullPath,
                    data,
                    groupId: to.meta.__navigationId
                }
            });
        });
        router.afterEach((to, from, failure)=>{
            const data = {
                guard: formatDisplay("afterEach")
            };
            if (failure) {
                data.failure = {
                    _custom: {
                        type: Error,
                        readOnly: true,
                        display: failure ? failure.message : "",
                        tooltip: "Navigation Failure",
                        value: failure
                    }
                };
                data.status = formatDisplay("\u274C");
            } else data.status = formatDisplay("\u2705");
            // we set here to have the right order
            data.from = formatRouteLocation(from, "Current Location during this navigation");
            data.to = formatRouteLocation(to, "Target location");
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    title: "End of navigation",
                    subtitle: to.fullPath,
                    time: api.now(),
                    data,
                    logType: failure ? "warning" : "default",
                    groupId: to.meta.__navigationId
                }
            });
        });
        /**
         * Inspector of Existing routes
         */ const routerInspectorId = "router-inspector:" + id;
        api.addInspector({
            id: routerInspectorId,
            label: "Routes" + (id ? " " + id : ""),
            icon: "book",
            treeFilterPlaceholder: "Search routes"
        });
        function refreshRoutesView() {
            // the routes view isn't active
            if (!activeRoutesPayload) return;
            const payload = activeRoutesPayload;
            // children routes will appear as nested
            let routes = matcher.getRoutes().filter((route)=>!route.parent || // these routes have a parent with no component which will not appear in the view
                // therefore we still need to include them
                !route.parent.record.components);
            // reset match state to false
            routes.forEach(resetMatchStateOnRouteRecord);
            // apply a match state if there is a payload
            if (payload.filter) routes = routes.filter((route)=>// save matches state based on the payload
                isRouteMatching(route, payload.filter.toLowerCase()));
            // mark active routes
            routes.forEach((route)=>markRouteRecordActive(route, router.currentRoute.value));
            payload.rootNodes = routes.map(formatRouteRecordForInspector);
        }
        let activeRoutesPayload;
        api.on.getInspectorTree((payload)=>{
            activeRoutesPayload = payload;
            if (payload.app === app && payload.inspectorId === routerInspectorId) refreshRoutesView();
        });
        /**
         * Display information about the currently selected route record
         */ api.on.getInspectorState((payload)=>{
            if (payload.app === app && payload.inspectorId === routerInspectorId) {
                const routes = matcher.getRoutes();
                const route = routes.find((route)=>route.record.__vd_id === payload.nodeId);
                if (route) payload.state = {
                    options: formatRouteRecordMatcherForStateInspector(route)
                };
            }
        });
        api.sendInspectorTree(routerInspectorId);
        api.sendInspectorState(routerInspectorId);
    });
}
function modifierForKey(key) {
    if (key.optional) return key.repeatable ? "*" : "?";
    else return key.repeatable ? "+" : "";
}
function formatRouteRecordMatcherForStateInspector(route) {
    const { record } = route;
    const fields = [
        {
            editable: false,
            key: "path",
            value: record.path
        }
    ];
    if (record.name != null) fields.push({
        editable: false,
        key: "name",
        value: record.name
    });
    fields.push({
        editable: false,
        key: "regexp",
        value: route.re
    });
    if (route.keys.length) fields.push({
        editable: false,
        key: "keys",
        value: {
            _custom: {
                type: null,
                readOnly: true,
                display: route.keys.map((key)=>`${key.name}${modifierForKey(key)}`).join(" "),
                tooltip: "Param keys",
                value: route.keys
            }
        }
    });
    if (record.redirect != null) fields.push({
        editable: false,
        key: "redirect",
        value: record.redirect
    });
    if (route.alias.length) fields.push({
        editable: false,
        key: "aliases",
        value: route.alias.map((alias)=>alias.record.path)
    });
    if (Object.keys(route.record.meta).length) fields.push({
        editable: false,
        key: "meta",
        value: route.record.meta
    });
    fields.push({
        key: "score",
        editable: false,
        value: {
            _custom: {
                type: null,
                readOnly: true,
                display: route.score.map((score)=>score.join(", ")).join(" | "),
                tooltip: "Score used to sort routes",
                value: route.score
            }
        }
    });
    return fields;
}
/**
 * Extracted from tailwind palette
 */ const PINK_500 = 0xec4899;
const BLUE_600 = 0x2563eb;
const LIME_500 = 0x84cc16;
const CYAN_400 = 0x22d3ee;
const ORANGE_400 = 0xfb923c;
// const GRAY_100 = 0xf4f4f5
const DARK = 0x666666;
function formatRouteRecordForInspector(route) {
    const tags = [];
    const { record } = route;
    if (record.name != null) tags.push({
        label: String(record.name),
        textColor: 0,
        backgroundColor: CYAN_400
    });
    if (record.aliasOf) tags.push({
        label: "alias",
        textColor: 0,
        backgroundColor: ORANGE_400
    });
    if (route.__vd_match) tags.push({
        label: "matches",
        textColor: 0,
        backgroundColor: PINK_500
    });
    if (route.__vd_exactActive) tags.push({
        label: "exact",
        textColor: 0,
        backgroundColor: LIME_500
    });
    if (route.__vd_active) tags.push({
        label: "active",
        textColor: 0,
        backgroundColor: BLUE_600
    });
    if (record.redirect) tags.push({
        label: typeof record.redirect === "string" ? `redirect: ${record.redirect}` : "redirects",
        textColor: 0xffffff,
        backgroundColor: DARK
    });
    // add an id to be able to select it. Using the `path` is not possible because
    // empty path children would collide with their parents
    let id = record.__vd_id;
    if (id == null) {
        id = String(routeRecordId++);
        record.__vd_id = id;
    }
    return {
        id,
        label: record.path,
        tags,
        children: route.children.map(formatRouteRecordForInspector)
    };
}
//  incremental id for route records and inspector state
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
    // no route will be active if matched is empty
    // reset the matching state
    const isExactActive = currentRoute.matched.length && isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
    route.__vd_exactActive = route.__vd_active = isExactActive;
    if (!isExactActive) route.__vd_active = currentRoute.matched.some((match)=>isSameRouteRecord(match, route.record));
    route.children.forEach((childRoute)=>markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
    route.__vd_match = false;
    route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
    const found = String(route.re).match(EXTRACT_REGEXP_RE);
    route.__vd_match = false;
    if (!found || found.length < 3) return false;
    // use a regexp without $ at the end to match nested routes better
    const nonEndingRE = new RegExp(found[1].replace(/\$$/, ""), found[2]);
    if (nonEndingRE.test(filter)) {
        // mark children as matches
        route.children.forEach((child)=>isRouteMatching(child, filter));
        // exception case: `/`
        if (route.record.path !== "/" || filter === "/") {
            route.__vd_match = route.re.test(filter);
            return true;
        }
        // hide the / route
        return false;
    }
    const path = route.record.path.toLowerCase();
    const decodedPath = decode(path);
    // also allow partial matching on the path
    if (!filter.startsWith("/") && (decodedPath.includes(filter) || path.includes(filter))) return true;
    if (decodedPath.startsWith(filter) || path.startsWith(filter)) return true;
    if (route.record.name && String(route.record.name).includes(filter)) return true;
    return route.children.some((child)=>isRouteMatching(child, filter));
}
function omit(obj, keys) {
    const ret = {};
    for(const key in obj)if (!keys.includes(key)) // @ts-expect-error
    ret[key] = obj[key];
    return ret;
}
/**
 * Creates a Router instance that can be used by a Vue app.
 *
 * @param options - {@link RouterOptions}
 */ function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    if (!routerHistory) throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = (0, _vue.shallowRef)(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    // leave the scrollRestoration if no scrollBehavior is provided
    if (isBrowser && options.scrollBehavior && "scrollRestoration" in history) history.scrollRestoration = "manual";
    const normalizeParams = applyToParams.bind(null, (paramValue)=>"" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
        let parent;
        let record;
        if (isRouteName(parentOrRoute)) {
            parent = matcher.getRecordMatcher(parentOrRoute);
            record = route;
        } else record = parentOrRoute;
        return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
        const recordMatcher = matcher.getRecordMatcher(name);
        if (recordMatcher) matcher.removeRoute(recordMatcher);
        else warn(`Cannot remove non-existent route "${String(name)}"`);
    }
    function getRoutes() {
        return matcher.getRoutes().map((routeMatcher)=>routeMatcher.record);
    }
    function hasRoute(name) {
        return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
        // const objectLocation = routerLocationAsObject(rawLocation)
        // we create a copy to modify it later
        currentLocation = assign({}, currentLocation || currentRoute.value);
        if (typeof rawLocation === "string") {
            const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
            const matchedRoute = matcher.resolve({
                path: locationNormalized.path
            }, currentLocation);
            const href = routerHistory.createHref(locationNormalized.fullPath);
            if (href.startsWith("//")) warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
            else if (!matchedRoute.matched.length) warn(`No match found for location with path "${rawLocation}"`);
            // locationNormalized is always a new object
            return assign(locationNormalized, matchedRoute, {
                params: decodeParams(matchedRoute.params),
                hash: decode(locationNormalized.hash),
                redirectedFrom: undefined,
                href
            });
        }
        let matcherLocation;
        // path could be relative in object as well
        if ("path" in rawLocation) {
            if ("params" in rawLocation && !("name" in rawLocation) && // @ts-expect-error: the type is never
            Object.keys(rawLocation.params).length) warn(`Path "${rawLocation.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`);
            matcherLocation = assign({}, rawLocation, {
                path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
            });
        } else {
            // remove any nullish param
            const targetParams = assign({}, rawLocation.params);
            for(const key in targetParams)if (targetParams[key] == null) delete targetParams[key];
            // pass encoded values to the matcher, so it can produce encoded path and fullPath
            matcherLocation = assign({}, rawLocation, {
                params: encodeParams(targetParams)
            });
            // current location params are decoded, we need to encode them in case the
            // matcher merges the params
            currentLocation.params = encodeParams(currentLocation.params);
        }
        const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
        const hash = rawLocation.hash || "";
        if (hash && !hash.startsWith("#")) warn(`A \`hash\` should always start with the character "#". Replace "${hash}" with "#${hash}".`);
        // the matcher might have merged current location params, so
        // we need to run the decoding again
        matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
        const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
            hash: encodeHash(hash),
            path: matchedRoute.path
        }));
        const href = routerHistory.createHref(fullPath);
        if (href.startsWith("//")) warn(`Location "${rawLocation}" resolved to "${href}". A resolved location cannot start with multiple slashes.`);
        else if (!matchedRoute.matched.length) warn(`No match found for location with path "${"path" in rawLocation ? rawLocation.path : rawLocation}"`);
        return assign({
            fullPath,
            // keep the hash encoded so fullPath is effectively path + encodedQuery +
            // hash
            hash,
            query: // if the user is using a custom query lib like qs, we might have
            // nested objects, so we keep the query as is, meaning it can contain
            // numbers at `$route.query`, but at the point, the user will have to
            // use their own type anyway.
            // https://github.com/vuejs/router/issues/328#issuecomment-649481567
            stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
        }, matchedRoute, {
            redirectedFrom: undefined,
            href
        });
    }
    function locationAsObject(to) {
        return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
        if (pendingLocation !== to) return createRouterError(8 /* ErrorTypes.NAVIGATION_CANCELLED */ , {
            from,
            to
        });
    }
    function push(to) {
        return pushWithRedirect(to);
    }
    function replace(to) {
        return push(assign(locationAsObject(to), {
            replace: true
        }));
    }
    function handleRedirectRecord(to) {
        const lastMatched = to.matched[to.matched.length - 1];
        if (lastMatched && lastMatched.redirect) {
            const { redirect } = lastMatched;
            let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
            if (typeof newTargetLocation === "string") {
                newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : {
                    path: newTargetLocation
                };
                // @ts-expect-error: force empty params when a string is passed to let
                // the router parse them again
                newTargetLocation.params = {};
            }
            if (!("path" in newTargetLocation) && !("name" in newTargetLocation)) {
                warn(`Invalid redirect found:\n${JSON.stringify(newTargetLocation, null, 2)}\n when navigating to "${to.fullPath}". A redirect must contain a name or path. This will break in production.`);
                throw new Error("Invalid redirect");
            }
            return assign({
                query: to.query,
                hash: to.hash,
                // avoid transferring params if the redirect has a path
                params: "path" in newTargetLocation ? {} : to.params
            }, newTargetLocation);
        }
    }
    function pushWithRedirect(to, redirectedFrom) {
        const targetLocation = pendingLocation = resolve(to);
        const from = currentRoute.value;
        const data = to.state;
        const force = to.force;
        // to could be a string where `replace` is a function
        const replace = to.replace === true;
        const shouldRedirect = handleRedirectRecord(targetLocation);
        if (shouldRedirect) return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
            state: typeof shouldRedirect === "object" ? assign({}, data, shouldRedirect.state) : data,
            force,
            replace
        }), // keep original redirectedFrom if it exists
        redirectedFrom || targetLocation);
        // if it was a redirect we already called `pushWithRedirect` above
        const toLocation = targetLocation;
        toLocation.redirectedFrom = redirectedFrom;
        let failure;
        if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
            failure = createRouterError(16 /* ErrorTypes.NAVIGATION_DUPLICATED */ , {
                to: toLocation,
                from
            });
            // trigger scroll to allow scrolling to the same anchor
            handleScroll(from, from, // this is a push, the only way for it to be triggered from a
            // history.listen is with a redirect, which makes it become a push
            true, // This cannot be the first navigation because the initial location
            // cannot be manually navigated to
            false);
        }
        return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error)=>isNavigationFailure(error) ? isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */ ) ? error : markAsReady(error) // also returns the error
             : triggerError(error, toLocation, from)).then((failure)=>{
            if (failure) {
                if (isNavigationFailure(failure, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */ )) {
                    if (// we are redirecting to the same location we were already at
                    isSameRouteLocation(stringifyQuery$1, resolve(failure.to), toLocation) && // and we have done it a couple of times
                    redirectedFrom && // @ts-expect-error: added only in dev
                    (redirectedFrom._count = redirectedFrom._count ? redirectedFrom._count + 1 : 1) > 30) {
                        warn(`Detected a possibly infinite redirection in a navigation guard when going from "${from.fullPath}" to "${toLocation.fullPath}". Aborting to avoid a Stack Overflow.\n Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`);
                        return Promise.reject(new Error("Infinite redirect in navigation guard"));
                    }
                    return pushWithRedirect(// keep options
                    assign({
                        // preserve an existing replacement but allow the redirect to override it
                        replace
                    }, locationAsObject(failure.to), {
                        state: typeof failure.to === "object" ? assign({}, data, failure.to.state) : data,
                        force
                    }), // preserve the original redirectedFrom if any
                    redirectedFrom || toLocation);
                }
            } else // if we fail we don't finalize the navigation
            failure = finalizeNavigation(toLocation, from, true, replace, data);
            triggerAfterEach(toLocation, from, failure);
            return failure;
        });
    }
    /**
     * Helper to reject and skip all navigation guards if a new navigation happened
     * @param to
     * @param from
     */ function checkCanceledNavigationAndReject(to, from) {
        const error = checkCanceledNavigation(to, from);
        return error ? Promise.reject(error) : Promise.resolve();
    }
    function runWithContext(fn) {
        const app = installedApps.values().next().value;
        // support Vue < 3.3
        return app && typeof app.runWithContext === "function" ? app.runWithContext(fn) : fn();
    }
    // TODO: refactor the whole before guards by internally using router.beforeEach
    function navigate(to, from) {
        let guards;
        const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
        // all components here have been resolved once because we are leaving
        guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
        // leavingRecords is already reversed
        for (const record of leavingRecords)record.leaveGuards.forEach((guard)=>{
            guards.push(guardToPromiseFn(guard, to, from));
        });
        const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
        guards.push(canceledNavigationCheck);
        // run the queue of per route beforeRouteLeave guards
        return runGuardQueue(guards).then(()=>{
            // check global guards beforeEach
            guards = [];
            for (const guard of beforeGuards.list())guards.push(guardToPromiseFn(guard, to, from));
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        }).then(()=>{
            // check in components beforeRouteUpdate
            guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
            for (const record of updatingRecords)record.updateGuards.forEach((guard)=>{
                guards.push(guardToPromiseFn(guard, to, from));
            });
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        }).then(()=>{
            // check the route beforeEnter
            guards = [];
            for (const record of enteringRecords)// do not trigger beforeEnter on reused views
            if (record.beforeEnter) {
                if (isArray(record.beforeEnter)) for (const beforeEnter of record.beforeEnter)guards.push(guardToPromiseFn(beforeEnter, to, from));
                else guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        }).then(()=>{
            // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
            // clear existing enterCallbacks, these are added by extractComponentsGuards
            to.matched.forEach((record)=>record.enterCallbacks = {});
            // check in-component beforeRouteEnter
            guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        }).then(()=>{
            // check global guards beforeResolve
            guards = [];
            for (const guard of beforeResolveGuards.list())guards.push(guardToPromiseFn(guard, to, from));
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        })// catch any navigation canceled
        .catch((err)=>isNavigationFailure(err, 8 /* ErrorTypes.NAVIGATION_CANCELLED */ ) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
        // navigation is confirmed, call afterGuards
        // TODO: wrap with error handlers
        afterGuards.list().forEach((guard)=>runWithContext(()=>guard(to, from, failure)));
    }
    /**
     * - Cleans up any navigation guards
     * - Changes the url if necessary
     * - Calls the scrollBehavior
     */ function finalizeNavigation(toLocation, from, isPush, replace, data) {
        // a more recent navigation took place
        const error = checkCanceledNavigation(toLocation, from);
        if (error) return error;
        // only consider as push if it's not the first navigation
        const isFirstNavigation = from === START_LOCATION_NORMALIZED;
        const state = !isBrowser ? {} : history.state;
        // change URL only if the user did a push/replace and if it's not the initial navigation because
        // it's just reflecting the url
        if (isPush) {
            // on the initial navigation, we want to reuse the scroll position from
            // history state if it exists
            if (replace || isFirstNavigation) routerHistory.replace(toLocation.fullPath, assign({
                scroll: isFirstNavigation && state && state.scroll
            }, data));
            else routerHistory.push(toLocation.fullPath, data);
        }
        // accept current navigation
        currentRoute.value = toLocation;
        handleScroll(toLocation, from, isPush, isFirstNavigation);
        markAsReady();
    }
    let removeHistoryListener;
    // attach listener to history to trigger navigations
    function setupListeners() {
        // avoid setting up listeners twice due to an invalid first navigation
        if (removeHistoryListener) return;
        removeHistoryListener = routerHistory.listen((to, _from, info)=>{
            if (!router.listening) return;
            // cannot be a redirect route because it was in history
            const toLocation = resolve(to);
            // due to dynamic routing, and to hash history with manual navigation
            // (manually changing the url or calling history.hash = '#/somewhere'),
            // there could be a redirect record in history
            const shouldRedirect = handleRedirectRecord(toLocation);
            if (shouldRedirect) {
                pushWithRedirect(assign(shouldRedirect, {
                    replace: true
                }), toLocation).catch(noop);
                return;
            }
            pendingLocation = toLocation;
            const from = currentRoute.value;
            // TODO: should be moved to web history?
            if (isBrowser) saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
            navigate(toLocation, from).catch((error)=>{
                if (isNavigationFailure(error, 12 /* ErrorTypes.NAVIGATION_CANCELLED */ )) return error;
                if (isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */ )) {
                    // Here we could call if (info.delta) routerHistory.go(-info.delta,
                    // false) but this is bug prone as we have no way to wait the
                    // navigation to be finished before calling pushWithRedirect. Using
                    // a setTimeout of 16ms seems to work but there is no guarantee for
                    // it to work on every browser. So instead we do not restore the
                    // history entry and trigger a new navigation as requested by the
                    // navigation guard.
                    // the error is already handled by router.push we just want to avoid
                    // logging the error
                    pushWithRedirect(error.to, toLocation).then((failure)=>{
                        // manual change in hash history #916 ending up in the URL not
                        // changing, but it was changed by the manual url change, so we
                        // need to manually change it ourselves
                        if (isNavigationFailure(failure, 20 /* ErrorTypes.NAVIGATION_DUPLICATED */ ) && !info.delta && info.type === NavigationType.pop) routerHistory.go(-1, false);
                    }).catch(noop);
                    // avoid the then branch
                    return Promise.reject();
                }
                // do not restore history on unknown direction
                if (info.delta) routerHistory.go(-info.delta, false);
                // unrecognized error, transfer to the global handler
                return triggerError(error, toLocation, from);
            }).then((failure)=>{
                failure = failure || finalizeNavigation(// after navigation, all matched components are resolved
                toLocation, from, false);
                // revert the navigation
                if (failure) {
                    if (info.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
                    // entry while a different route is displayed
                    !isNavigationFailure(failure, 8 /* ErrorTypes.NAVIGATION_CANCELLED */ )) routerHistory.go(-info.delta, false);
                    else if (info.type === NavigationType.pop && isNavigationFailure(failure, 20 /* ErrorTypes.NAVIGATION_DUPLICATED */ )) // manual change in hash history #916
                    // it's like a push but lacks the information of the direction
                    routerHistory.go(-1, false);
                }
                triggerAfterEach(toLocation, from, failure);
            })// avoid warnings in the console about uncaught rejections, they are logged by triggerErrors
            .catch(noop);
        });
    }
    // Initialization and Errors
    let readyHandlers = useCallbacks();
    let errorListeners = useCallbacks();
    let ready;
    /**
     * Trigger errorListeners added via onError and throws the error as well
     *
     * @param error - error to throw
     * @param to - location we were navigating to when the error happened
     * @param from - location we were navigating from when the error happened
     * @returns the error as a rejected promise
     */ function triggerError(error, to, from) {
        markAsReady(error);
        const list = errorListeners.list();
        if (list.length) list.forEach((handler)=>handler(error, to, from));
        else {
            warn("uncaught error during route navigation:");
            console.error(error);
        }
        // reject the error no matter there were error listeners or not
        return Promise.reject(error);
    }
    function isReady() {
        if (ready && currentRoute.value !== START_LOCATION_NORMALIZED) return Promise.resolve();
        return new Promise((resolve, reject)=>{
            readyHandlers.add([
                resolve,
                reject
            ]);
        });
    }
    function markAsReady(err) {
        if (!ready) {
            // still not ready if an error happened
            ready = !err;
            setupListeners();
            readyHandlers.list().forEach(([resolve, reject])=>err ? reject(err) : resolve());
            readyHandlers.reset();
        }
        return err;
    }
    // Scroll behavior
    function handleScroll(to, from, isPush, isFirstNavigation) {
        const { scrollBehavior } = options;
        if (!isBrowser || !scrollBehavior) return Promise.resolve();
        const scrollPosition = !isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0)) || (isFirstNavigation || !isPush) && history.state && history.state.scroll || null;
        return (0, _vue.nextTick)().then(()=>scrollBehavior(to, from, scrollPosition)).then((position)=>position && scrollToPosition(position)).catch((err)=>triggerError(err, to, from));
    }
    const go = (delta)=>routerHistory.go(delta);
    let started;
    const installedApps = new Set();
    const router = {
        currentRoute,
        listening: true,
        addRoute,
        removeRoute,
        hasRoute,
        getRoutes,
        resolve,
        options,
        push,
        replace,
        go,
        back: ()=>go(-1),
        forward: ()=>go(1),
        beforeEach: beforeGuards.add,
        beforeResolve: beforeResolveGuards.add,
        afterEach: afterGuards.add,
        onError: errorListeners.add,
        isReady,
        install (app) {
            const router = this;
            app.component("RouterLink", RouterLink);
            app.component("RouterView", RouterView);
            app.config.globalProperties.$router = router;
            Object.defineProperty(app.config.globalProperties, "$route", {
                enumerable: true,
                get: ()=>(0, _vue.unref)(currentRoute)
            });
            // this initial navigation is only necessary on client, on server it doesn't
            // make sense because it will create an extra unnecessary navigation and could
            // lead to problems
            if (isBrowser && // used for the initial navigation client side to avoid pushing
            // multiple times when the router is used in multiple apps
            !started && currentRoute.value === START_LOCATION_NORMALIZED) {
                // see above
                started = true;
                push(routerHistory.location).catch((err)=>{
                    warn("Unexpected error when starting the router:", err);
                });
            }
            const reactiveRoute = {};
            for(const key in START_LOCATION_NORMALIZED)Object.defineProperty(reactiveRoute, key, {
                get: ()=>currentRoute.value[key],
                enumerable: true
            });
            app.provide(routerKey, router);
            app.provide(routeLocationKey, (0, _vue.shallowReactive)(reactiveRoute));
            app.provide(routerViewLocationKey, currentRoute);
            const unmountApp = app.unmount;
            installedApps.add(app);
            app.unmount = function() {
                installedApps.delete(app);
                // the router is not attached to an app anymore
                if (installedApps.size < 1) {
                    // invalidate the current navigation
                    pendingLocation = START_LOCATION_NORMALIZED;
                    removeHistoryListener && removeHistoryListener();
                    removeHistoryListener = null;
                    currentRoute.value = START_LOCATION_NORMALIZED;
                    started = false;
                    ready = false;
                }
                unmountApp();
            };
            // TODO: this probably needs to be updated so it can be used by vue-termui
            if (isBrowser) addDevtools(app, router, matcher);
        }
    };
    // TODO: type this as NavigationGuardReturn or similar instead of any
    function runGuardQueue(guards) {
        return guards.reduce((promise, guard)=>promise.then(()=>runWithContext(guard)), Promise.resolve());
    }
    return router;
}
function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for(let i = 0; i < len; i++){
        const recordFrom = from.matched[i];
        if (recordFrom) {
            if (to.matched.find((record)=>isSameRouteRecord(record, recordFrom))) updatingRecords.push(recordFrom);
            else leavingRecords.push(recordFrom);
        }
        const recordTo = to.matched[i];
        if (recordTo) // the type doesn't matter because we are comparing per reference
        {
            if (!from.matched.find((record)=>isSameRouteRecord(record, recordTo))) enteringRecords.push(recordTo);
        }
    }
    return [
        leavingRecords,
        updatingRecords,
        enteringRecords
    ];
}
/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */ function useRouter() {
    return (0, _vue.inject)(routerKey);
}
/**
 * Returns the current route location. Equivalent to using `$route` inside
 * templates.
 */ function useRoute() {
    return (0, _vue.inject)(routeLocationKey);
}

},{"vue":"hLUyz","@vue/devtools-api":"dc7MH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dc7MH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setupDevtoolsPlugin", ()=>setupDevtoolsPlugin);
var _envJs = require("./env.js");
var _constJs = require("./const.js");
var _proxyJs = require("./proxy.js");
var _indexJs = require("./api/index.js");
parcelHelpers.exportAll(_indexJs, exports);
var _pluginJs = require("./plugin.js");
parcelHelpers.exportAll(_pluginJs, exports);
var _timeJs = require("./time.js");
parcelHelpers.exportAll(_timeJs, exports);
function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = (0, _envJs.getTarget)();
    const hook = (0, _envJs.getDevtoolsGlobalHook)();
    const enableProxy = (0, _envJs.isProxyAvailable) && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) hook.emit((0, _constJs.HOOK_SETUP), pluginDescriptor, setupFn);
    else {
        const proxy = enableProxy ? new (0, _proxyJs.ApiProxy)(descriptor, hook) : null;
        const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
        list.push({
            pluginDescriptor: descriptor,
            setupFn,
            proxy
        });
        if (proxy) setupFn(proxy.proxiedTarget);
    }
}

},{"./env.js":"djKoa","./const.js":"ePyfE","./proxy.js":"cGXUQ","./api/index.js":false,"./plugin.js":false,"./time.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"djKoa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDevtoolsGlobalHook", ()=>getDevtoolsGlobalHook);
parcelHelpers.export(exports, "getTarget", ()=>getTarget);
parcelHelpers.export(exports, "isProxyAvailable", ()=>isProxyAvailable);
var global = arguments[3];
function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
    // @ts-ignore
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
}
const isProxyAvailable = typeof Proxy === "function";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ePyfE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HOOK_SETUP", ()=>HOOK_SETUP);
parcelHelpers.export(exports, "HOOK_PLUGIN_SETTINGS_SET", ()=>HOOK_PLUGIN_SETTINGS_SET);
const HOOK_SETUP = "devtools-plugin:setup";
const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cGXUQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ApiProxy", ()=>ApiProxy);
var _constJs = require("./const.js");
var _timeJs = require("./time.js");
class ApiProxy {
    constructor(plugin, hook){
        this.target = null;
        this.targetQueue = [];
        this.onQueue = [];
        this.plugin = plugin;
        this.hook = hook;
        const defaultSettings = {};
        if (plugin.settings) for(const id in plugin.settings){
            const item = plugin.settings[id];
            defaultSettings[id] = item.defaultValue;
        }
        const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
        let currentSettings = Object.assign({}, defaultSettings);
        try {
            const raw = localStorage.getItem(localSettingsSaveId);
            const data = JSON.parse(raw);
            Object.assign(currentSettings, data);
        } catch (e) {
        // noop
        }
        this.fallbacks = {
            getSettings () {
                return currentSettings;
            },
            setSettings (value) {
                try {
                    localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
                } catch (e) {
                // noop
                }
                currentSettings = value;
            },
            now () {
                return (0, _timeJs.now)();
            }
        };
        if (hook) hook.on((0, _constJs.HOOK_PLUGIN_SETTINGS_SET), (pluginId, value)=>{
            if (pluginId === this.plugin.id) this.fallbacks.setSettings(value);
        });
        this.proxiedOn = new Proxy({}, {
            get: (_target, prop)=>{
                if (this.target) return this.target.on[prop];
                else return (...args)=>{
                    this.onQueue.push({
                        method: prop,
                        args
                    });
                };
            }
        });
        this.proxiedTarget = new Proxy({}, {
            get: (_target, prop)=>{
                if (this.target) return this.target[prop];
                else if (prop === "on") return this.proxiedOn;
                else if (Object.keys(this.fallbacks).includes(prop)) return (...args)=>{
                    this.targetQueue.push({
                        method: prop,
                        args,
                        resolve: ()=>{}
                    });
                    return this.fallbacks[prop](...args);
                };
                else return (...args)=>{
                    return new Promise((resolve)=>{
                        this.targetQueue.push({
                            method: prop,
                            args,
                            resolve
                        });
                    });
                };
            }
        });
    }
    async setRealTarget(target) {
        this.target = target;
        for (const item of this.onQueue)this.target.on[item.method](...item.args);
        for (const item of this.targetQueue)item.resolve(await this.target[item.method](...item.args));
    }
}

},{"./const.js":"ePyfE","./time.js":"cI6M3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cI6M3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPerformanceSupported", ()=>isPerformanceSupported);
parcelHelpers.export(exports, "now", ()=>now);
var global = arguments[3];
let supported;
let perf;
function isPerformanceSupported() {
    var _a;
    if (supported !== undefined) return supported;
    if (typeof window !== "undefined" && window.performance) {
        supported = true;
        perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
        supported = true;
        perf = global.perf_hooks.performance;
    } else supported = false;
    return supported;
}
function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ketzT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("39ad47138b71122d");
    if (script.__esModule) script = script.default;
    script.render = require("d0da754de8670b6e").render;
    script.__cssModules = require("d1787acb0d8bbef2").default;
    require("1abeab563e8b38c1").default(script);
    script.__scopeId = "data-v-a06405";
    script.__file = "/Users/kottedheeru/Documents/qa-update/client/src/views/HomeView.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "a06405-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("a06405-hmr", script)) __VUE_HMR_RUNTIME__.reload("a06405-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"39ad47138b71122d":"6tnc0","d0da754de8670b6e":"ggZXp","d1787acb0d8bbef2":"avbW5","1abeab563e8b38c1":"hqT9p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6tnc0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buttonVue = require("../components/Button.vue");
var _buttonVueDefault = parcelHelpers.interopDefault(_buttonVue);
var _automationsListVue = require("../components/AutomationsList.vue");
var _automationsListVueDefault = parcelHelpers.interopDefault(_automationsListVue);
var _constantsJs = require("../constants.js");
exports.default = {
    components: {
        AutomationsList: (0, _automationsListVueDefault.default),
        Button: (0, _buttonVueDefault.default)
    },
    data () {
        return {
            time: "8:00 PM",
            automations: []
        };
    },
    methods: {
        goToMaintainers () {
            this.$router.push({
                path: "/maintainers"
            });
        },
        goToAddBoard () {
            this.$router.push({
                path: "/add"
            });
        },
        goToIssues () {
            this.$router.push({
                path: "/issues"
            });
        },
        async refreshBoards (newAutomations = null) {
            if (newAutomations) this.automations = newAutomations;
            else {
                const resp = await fetch(`${(0, _constantsJs.SERVER_URL)}get-boards`);
                this.automations = await resp.json();
            }
        }
    },
    async created () {
        this.refreshBoards();
    }
};

},{"../components/Button.vue":"k5qqw","../components/AutomationsList.vue":"9FeOg","../constants.js":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5qqw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("b7cc9b7f4b97949d");
    if (script.__esModule) script = script.default;
    script.render = require("acf956872ed7e6f4").render;
    script.__cssModules = require("db2a3dfbc584e5c1").default;
    require("a7b9603ca9bfb5ee").default(script);
    script.__scopeId = "data-v-533476";
    script.__file = "/Users/kottedheeru/Documents/qa-update/client/src/components/Button.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "533476-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("533476-hmr", script)) __VUE_HMR_RUNTIME__.reload("533476-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"b7cc9b7f4b97949d":"aueim","acf956872ed7e6f4":"1P1KR","db2a3dfbc584e5c1":"dGlLC","a7b9603ca9bfb5ee":"71KqG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aueim":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const __default__ = {
    emits: [
        "goToLink"
    ],
    data () {
        return {};
    }
};
exports.default = /*#__PURE__*/ Object.assign(__default__, {
    __name: "Button",
    props: {
        text: String
    },
    setup (__props, { expose: __expose }) {
        __expose();
        const __returned__ = {};
        Object.defineProperty(__returned__, "__isScriptSetup", {
            enumerable: false,
            value: true
        });
        return __returned__;
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1P1KR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("button", {
        class: "button",
        onClick: _cache[0] || (_cache[0] = ($event)=>_ctx.$emit("goToLink"))
    }, (0, _vue.toDisplayString)($props.text), 1 /* TEXT */ );
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("533476-hmr", render);
});

},{"vue":"hLUyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dGlLC":[function() {},{}],"71KqG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9FeOg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("c65c3c16418f927b");
    if (script.__esModule) script = script.default;
    script.render = require("c64ec6a7bf1234b2").render;
    script.__cssModules = require("ab2458f6568a9a40").default;
    require("5740af4bb14ee6f3").default(script);
    script.__scopeId = "data-v-ed4fa8";
    script.__file = "/Users/kottedheeru/Documents/qa-update/client/src/components/AutomationsList.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "ed4fa8-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("ed4fa8-hmr", script)) __VUE_HMR_RUNTIME__.reload("ed4fa8-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"c65c3c16418f927b":"fcX5Y","c64ec6a7bf1234b2":"5N52H","ab2458f6568a9a40":"9dOQq","5740af4bb14ee6f3":"fd8Xg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fcX5Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _automationVue = require("./Automation.vue");
var _automationVueDefault = parcelHelpers.interopDefault(_automationVue);
const __default__ = {
    props: [
        "active",
        "automations"
    ],
    emits: [
        "refresh"
    ],
    data () {
        return {
            relevantAutomations: []
        };
    },
    methods: {
        refresh () {
            this.$emit("refresh");
        },
        sortBoards () {
            this.relevantAutomations = this.automations.filter((item)=>item.active === this.active);
        }
    },
    watch: {
        automations (newVal) {
            this.sortBoards();
        }
    },
    created () {
        this.sortBoards();
    }
};
exports.default = /*#__PURE__*/ Object.assign(__default__, {
    __name: "AutomationsList",
    props: {
        automations: Array,
        active: Boolean
    },
    setup (__props, { expose: __expose }) {
        __expose();
        const __returned__ = {
            Automation: (0, _automationVueDefault.default)
        };
        Object.defineProperty(__returned__, "__isScriptSetup", {
            enumerable: false,
            value: true
        });
        return __returned__;
    }
});

},{"./Automation.vue":"4WIqg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4WIqg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("86360afc275ba171");
    if (script.__esModule) script = script.default;
    script.render = require("fb678edd834b9dae").render;
    script.__cssModules = require("84c16dec2fc6e598").default;
    require("49cc2303057cd0ae").default(script);
    script.__scopeId = "data-v-2e03db";
    script.__file = "/Users/kottedheeru/Documents/qa-update/client/src/components/Automation.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "2e03db-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("2e03db-hmr", script)) __VUE_HMR_RUNTIME__.reload("2e03db-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"86360afc275ba171":"boYYb","fb678edd834b9dae":"MXDNo","84c16dec2fc6e598":"j6KjY","49cc2303057cd0ae":"hnyGH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"boYYb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buttonVue = require("./Button.vue");
var _buttonVueDefault = parcelHelpers.interopDefault(_buttonVue);
var _constantsJs = require("../constants.js");
const __default__ = {
    props: [
        "details",
        "active"
    ],
    emits: [
        "refresh"
    ],
    data () {
        return {
            updateText: "Trigger Update Now"
        };
    },
    methods: {
        async activateAutomation (item) {
            console.log(`Activating ${item.name}`);
            const result = await (0, _constantsJs.postData)(`${(0, _constantsJs.SERVER_URL)}activate-board`, {
                id: item.mondayId
            });
            console.log(result);
            this.$emit("refresh");
        },
        async deactivateAutomation (item) {
            console.log(`Deactivating ${item.name}`);
            const result = await (0, _constantsJs.postData)(`${(0, _constantsJs.SERVER_URL)}deactivate-board`, {
                id: item.mondayId
            });
            console.log(result);
            this.$emit("refresh");
        },
        editAutomation (info) {
            console.log("Editing an automation");
            this.$router.push({
                path: "/edit",
                query: {
                    item: JSON.stringify(info)
                }
            });
        },
        async manuallyTrigger (info) {
            const result = await (0, _constantsJs.postData)(`${(0, _constantsJs.SERVER_URL)}update-now`, {
                id: info.mondayId
            });
            console.log(result);
            this.updateText = "Update initiated!";
        }
    }
};
exports.default = /*#__PURE__*/ Object.assign(__default__, {
    __name: "Automation",
    props: {
        details: Object,
        active: Boolean
    },
    setup (__props, { expose: __expose }) {
        __expose();
        const __returned__ = {
            get SERVER_URL () {
                return 0, _constantsJs.SERVER_URL;
            },
            get postData () {
                return 0, _constantsJs.postData;
            },
            Button: (0, _buttonVueDefault.default)
        };
        Object.defineProperty(__returned__, "__isScriptSetup", {
            enumerable: false,
            value: true
        });
        return __returned__;
    }
});

},{"./Button.vue":"k5qqw","../constants.js":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3huJa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SERVER_URL", ()=>SERVER_URL);
parcelHelpers.export(exports, "postData", ()=>postData);
const SERVER_URL = "http://applications.accessapps.link:3220/";
async function postData(url, data, contentType = "application/json") {
    return fetch(url, {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        connection: "keep-alive",
        headers: {
            Accept: "application.json",
            "Content-Type": contentType
        },
        body: JSON.stringify(data)
    }).then((res)=>{
        console.log(res);
        return res.json();
    }).then((obj)=>{
        return obj;
    }).catch((err)=>{
        console.log(err);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"MXDNo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    key: 0,
    class: "automation"
};
const _hoisted_2 = {
    class: "p-container"
};
const _hoisted_3 = {
    class: "trigger-now-button-box"
};
const _hoisted_4 = {
    key: 1
};
const _hoisted_5 = {
    key: 1,
    class: "automation"
};
const _hoisted_6 = {
    class: "p-container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return $props.active ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, [
        (0, _vue.createElementVNode)("h3", null, (0, _vue.toDisplayString)($props.details.name), 1 /* TEXT */ ),
        (0, _vue.createVNode)($setup["Button"], {
            class: "edit-button",
            text: "Edit",
            onGoToLink: _cache[0] || (_cache[0] = ()=>$options.editAutomation($props.details))
        }),
        (0, _vue.createElementVNode)("div", _hoisted_2, [
            (0, _vue.createElementVNode)("p", null, "Monday ID: " + (0, _vue.toDisplayString)($props.details.mondayId), 1 /* TEXT */ ),
            (0, _vue.createElementVNode)("p", null, "Last Updated Column ID: " + (0, _vue.toDisplayString)($props.details.updateColId), 1 /* TEXT */ ),
            (0, _vue.createVNode)($setup["Button"], {
                class: "toggle-button",
                text: "Deactivate",
                onGoToLink: _cache[1] || (_cache[1] = ()=>$options.deactivateAutomation($props.details))
            }),
            (0, _vue.createElementVNode)("p", null, "Ally Semester ID: " + (0, _vue.toDisplayString)($props.details.allySemId), 1 /* TEXT */ ),
            (0, _vue.createElementVNode)("p", null, "End Date: " + (0, _vue.toDisplayString)($props.details.endDate), 1 /* TEXT */ ),
            (0, _vue.createElementVNode)("p", null, "Last Updated: " + (0, _vue.toDisplayString)(new Date($props.details.lastUpdated).toLocaleDateString()) + " " + (0, _vue.toDisplayString)(new Date($props.details.lastUpdated).toLocaleTimeString()), 1 /* TEXT */ )
        ]),
        (0, _vue.createElementVNode)("div", _hoisted_3, [
            $data.updateText === "Trigger Update Now" ? ((0, _vue.openBlock)(), (0, _vue.createBlock)($setup["Button"], {
                key: 0,
                text: $data.updateText,
                onGoToLink: _cache[2] || (_cache[2] = ()=>$options.manuallyTrigger($props.details))
            }, null, 8 /* PROPS */ , [
                "text"
            ])) : ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("p", _hoisted_4, (0, _vue.toDisplayString)($data.updateText), 1 /* TEXT */ ))
        ])
    ])) : ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_5, [
        (0, _vue.createElementVNode)("h3", null, (0, _vue.toDisplayString)($props.details.name), 1 /* TEXT */ ),
        (0, _vue.createVNode)($setup["Button"], {
            class: "edit-button",
            text: "Edit",
            onGoToLink: _cache[3] || (_cache[3] = ()=>$options.editAutomation($props.details))
        }),
        (0, _vue.createElementVNode)("div", _hoisted_6, [
            (0, _vue.createElementVNode)("p", null, "Monday ID: " + (0, _vue.toDisplayString)($props.details.mondayId), 1 /* TEXT */ ),
            (0, _vue.createElementVNode)("p", null, "Last Update: " + (0, _vue.toDisplayString)($props.details.lastUpdated), 1 /* TEXT */ ),
            (0, _vue.createVNode)($setup["Button"], {
                class: "toggle-button",
                text: "Activate",
                onGoToLink: _cache[4] || (_cache[4] = ()=>$options.activateAutomation($props.details))
            })
        ])
    ]));
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("2e03db-hmr", render);
});

},{"vue":"hLUyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j6KjY":[function() {},{}],"hnyGH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5N52H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    key: 0
};
const _hoisted_2 = /*#__PURE__*/ (0, _vue.createElementVNode)("p", {
    class: "none-found"
}, "No automations found.", -1 /* HOISTED */ );
const _hoisted_3 = [
    _hoisted_2
];
const _hoisted_4 = {
    class: "automation-list"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)((0, _vue.Fragment), null, [
        $data.relevantAutomations.length === 0 ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, [
            ..._hoisted_3
        ])) : (0, _vue.createCommentVNode)("v-if", true),
        ((0, _vue.openBlock)(true), (0, _vue.createElementBlock)((0, _vue.Fragment), null, (0, _vue.renderList)($data.relevantAutomations, (item)=>{
            return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_4, [
                (0, _vue.createVNode)($setup["Automation"], {
                    active: $props.active,
                    details: item,
                    onRefresh: $options.refresh
                }, null, 8 /* PROPS */ , [
                    "active",
                    "details",
                    "onRefresh"
                ])
            ]);
        }), 256 /* UNKEYED_FRAGMENT */ ))
    ], 64 /* STABLE_FRAGMENT */ );
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("ed4fa8-hmr", render);
});

},{"vue":"hLUyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9dOQq":[function() {},{}],"fd8Xg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ggZXp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    class: "two-buttons"
};
const _hoisted_2 = /*#__PURE__*/ (0, _vue.createElementVNode)("p", null, null, -1 /* HOISTED */ );
const _hoisted_3 = /*#__PURE__*/ (0, _vue.createElementVNode)("h1", null, "QA Update", -1 /* HOISTED */ );
const _hoisted_4 = /*#__PURE__*/ (0, _vue.createElementVNode)("div", {
    class: "center-link"
}, [
    /*#__PURE__*/ (0, _vue.createElementVNode)("a", {
        href: "https://github.com/emmalynnnn/cidi-monday-qa-automation",
        target: "_blank",
        class: "link"
    }, "About")
], -1 /* HOISTED */ );
const _hoisted_5 = {
    key: 0
};
const _hoisted_6 = /*#__PURE__*/ (0, _vue.createElementVNode)("p", null, "Loading...", -1 /* HOISTED */ );
const _hoisted_7 = [
    _hoisted_6
];
const _hoisted_8 = {
    key: 1
};
const _hoisted_9 = /*#__PURE__*/ (0, _vue.createElementVNode)("h2", null, "Inactive Automations", -1 /* HOISTED */ );
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Button = (0, _vue.resolveComponent)("Button");
    const _component_AutomationsList = (0, _vue.resolveComponent)("AutomationsList");
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)((0, _vue.Fragment), null, [
        (0, _vue.createElementVNode)("div", _hoisted_1, [
            (0, _vue.createVNode)(_component_Button, {
                text: "Manage Maintainers",
                onGoToLink: $options.goToMaintainers
            }, null, 8 /* PROPS */ , [
                "onGoToLink"
            ]),
            _hoisted_2,
            (0, _vue.createVNode)(_component_Button, {
                text: "View Errors / Issues",
                onGoToLink: $options.goToIssues
            }, null, 8 /* PROPS */ , [
                "onGoToLink"
            ])
        ]),
        (0, _vue.createVNode)(_component_Button, {
            class: "add-button",
            text: "Add New Board",
            onGoToLink: $options.goToAddBoard
        }, null, 8 /* PROPS */ , [
            "onGoToLink"
        ]),
        _hoisted_3,
        _hoisted_4,
        !$data.automations || $data.automations.length === 0 ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_5, [
            ..._hoisted_7
        ])) : ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_8, [
            (0, _vue.createElementVNode)("h2", null, "Active Automations - Updates Nightly at " + (0, _vue.toDisplayString)($data.time), 1 /* TEXT */ ),
            (0, _vue.createVNode)(_component_AutomationsList, {
                active: true,
                automations: $data.automations,
                onRefresh: $options.refreshBoards
            }, null, 8 /* PROPS */ , [
                "automations",
                "onRefresh"
            ]),
            _hoisted_9,
            (0, _vue.createVNode)(_component_AutomationsList, {
                active: false,
                automations: $data.automations,
                onRefresh: $options.refreshBoards
            }, null, 8 /* PROPS */ , [
                "automations",
                "onRefresh"
            ])
        ]))
    ], 64 /* STABLE_FRAGMENT */ );
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("a06405-hmr", render);
});

},{"vue":"hLUyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"avbW5":[function() {},{}],"hqT9p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3sE82":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("e56dc0ec8e96d5b1");
    if (script.__esModule) script = script.default;
    script.render = require("ec449688396fd56b").render;
    script.__cssModules = require("254cfa16ac248874").default;
    require("79d1cfe46b05fe56").default(script);
    script.__scopeId = "data-v-c5ce6f";
    script.__file = "/Users/kottedheeru/Documents/qa-update/client/src/views/MaintainersView.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "c5ce6f-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("c5ce6f-hmr", script)) __VUE_HMR_RUNTIME__.reload("c5ce6f-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"e56dc0ec8e96d5b1":"iBn56","ec449688396fd56b":"2Gdwv","254cfa16ac248874":"eMNWl","79d1cfe46b05fe56":"9A0Jg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBn56":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buttonVue = require("../components/Button.vue");
var _buttonVueDefault = parcelHelpers.interopDefault(_buttonVue);
var _maintainerListVue = require("../components/MaintainerList.vue");
var _maintainerListVueDefault = parcelHelpers.interopDefault(_maintainerListVue);
var _constantsJs = require("../constants.js");
exports.default = {
    components: {
        MaintainerList: (0, _maintainerListVueDefault.default),
        Button: (0, _buttonVueDefault.default)
    },
    data () {
        return {
            maintainers: [],
            primaryMaintainer: null
        };
    },
    created () {
        this.refreshMaintainers();
    },
    methods: {
        leaveMaintainers () {
            this.$router.push({
                path: "/"
            });
        },
        addNew () {
            this.$router.push({
                path: "/maintainers/add"
            });
        },
        async removeMaintainer (item) {
            console.log(`Removing ${item.name} from the server & database`);
            const result = await (0, _constantsJs.postData)(`${(0, _constantsJs.SERVER_URL)}delete-maintainer`, item);
            console.log(result);
            if (result.result === "success") await this.refreshMaintainers();
            else alert(`Deletion failed: ${result.result}`);
        },
        async refreshMaintainers (newMaintainers = null) {
            if (newMaintainers) this.maintainers = newMaintainers;
            else {
                const resp = await fetch(`${(0, _constantsJs.SERVER_URL)}get-maintainers`);
                const body = await resp.json();
                console.log(body);
                const respPrimary = await fetch(`${(0, _constantsJs.SERVER_URL)}get-primary-maintainer`);
                const bodyPrimary = await respPrimary.json();
                console.log(bodyPrimary);
                this.primaryMaintainer = bodyPrimary;
                this.maintainers = body;
            }
        }
    }
};

},{"../components/Button.vue":"k5qqw","../components/MaintainerList.vue":"clO8p","../constants.js":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"clO8p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("4049e5b5132cb8ca");
    if (script.__esModule) script = script.default;
    script.render = require("78121f6316bce15").render;
    script.__cssModules = require("4e75d0881eeb6212").default;
    require("1d3d73bbd7c06210").default(script);
    script.__scopeId = "data-v-667379";
    script.__file = "/Users/kottedheeru/Documents/qa-update/client/src/components/MaintainerList.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "667379-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("667379-hmr", script)) __VUE_HMR_RUNTIME__.reload("667379-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"4049e5b5132cb8ca":"8BLwe","78121f6316bce15":"lhCtE","4e75d0881eeb6212":"8VSaN","1d3d73bbd7c06210":"e0xob","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8BLwe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buttonVue = require("./Button.vue");
var _buttonVueDefault = parcelHelpers.interopDefault(_buttonVue);
const __default__ = {
    emits: [
        "remove"
    ],
    components: {
        Button: (0, _buttonVueDefault.default)
    },
    data () {
        return {
            theMaintainers: []
        };
    },
    created () {},
    methods: {
        formatMaintainer (item) {
            let text = `${item.name}: ${item.email}`;
            if (item.id === this.primaryMaintainer) text += " (primary maintainer)";
            return text;
        },
        editMaintainer (item) {
            if (confirm(`Are you sure you want to remove ${item.name} as a maintainer?`)) {
                console.log(`Removing ${item.name}`);
                this.$emit("remove", item);
            }
        }
    }
};
exports.default = /*#__PURE__*/ Object.assign(__default__, {
    __name: "MaintainerList",
    props: {
        maintainers: Array,
        primaryMaintainer: Number
    },
    setup (__props, { expose: __expose }) {
        __expose();
        const __returned__ = {
            Button: (0, _buttonVueDefault.default)
        };
        Object.defineProperty(__returned__, "__isScriptSetup", {
            enumerable: false,
            value: true
        });
        return __returned__;
    }
});

},{"./Button.vue":"k5qqw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lhCtE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    class: "maintainer"
};
const _hoisted_2 = {
    style: {
        "display": "flex",
        "justify-content": "space-around"
    }
};
const _hoisted_3 = {
    class: "list-text"
};
const _hoisted_4 = [
    "onClick"
];
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(true), (0, _vue.createElementBlock)((0, _vue.Fragment), null, (0, _vue.renderList)($props.maintainers, (item)=>{
        return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("ul", _hoisted_1, [
            (0, _vue.createElementVNode)("div", _hoisted_2, [
                (0, _vue.createElementVNode)("li", null, [
                    (0, _vue.createElementVNode)("span", _hoisted_3, (0, _vue.toDisplayString)($options.formatMaintainer(item)) + "\xa0\xa0\xa0", 1 /* TEXT */ ),
                    (0, _vue.createElementVNode)("span", {
                        class: "remove",
                        onClick: ()=>$options.editMaintainer(item)
                    }, "Remove?", 8 /* PROPS */ , _hoisted_4)
                ])
            ])
        ]);
    }), 256 /* UNKEYED_FRAGMENT */ );
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("667379-hmr", render);
});

},{"vue":"hLUyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8VSaN":[function() {},{}],"e0xob":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Gdwv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = /*#__PURE__*/ (0, _vue.createElementVNode)("h1", null, "Maintainers", -1 /* HOISTED */ );
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Button = (0, _vue.resolveComponent)("Button");
    const _component_MaintainerList = (0, _vue.resolveComponent)("MaintainerList");
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)((0, _vue.Fragment), null, [
        _hoisted_1,
        (0, _vue.createVNode)(_component_Button, {
            class: "maintainer-button",
            text: "Home",
            onGoToLink: $options.leaveMaintainers
        }, null, 8 /* PROPS */ , [
            "onGoToLink"
        ]),
        (0, _vue.createVNode)(_component_MaintainerList, {
            maintainers: $data.maintainers,
            primaryMaintainer: $data.primaryMaintainer,
            onRemove: $options.removeMaintainer
        }, null, 8 /* PROPS */ , [
            "maintainers",
            "primaryMaintainer",
            "onRemove"
        ]),
        (0, _vue.createVNode)(_component_Button, {
            class: "add-button",
            text: "Add New Maintainer",
            onGoToLink: $options.addNew
        }, null, 8 /* PROPS */ , [
            "onGoToLink"
        ])
    ], 64 /* STABLE_FRAGMENT */ );
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("c5ce6f-hmr", render);
});

},{"vue":"hLUyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eMNWl":[function() {},{}],"9A0Jg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7v1Lq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("9b37a424b1d27814");
    if (script.__esModule) script = script.default;
    script.render = require("ed88416d42af4c12").render;
    script.__cssModules = require("32a15d0fb662930d").default;
    require("86cb957070d5da4c").default(script);
    script.__scopeId = "data-v-7184a7";
    script.__file = "/Users/kottedheeru/Documents/qa-update/client/src/views/AddBoardView.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "7184a7-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("7184a7-hmr", script)) __VUE_HMR_RUNTIME__.reload("7184a7-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"9b37a424b1d27814":"3jSDx","ed88416d42af4c12":"a00i7","32a15d0fb662930d":"03fhz","86cb957070d5da4c":"4NpxK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3jSDx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buttonVue = require("../components/Button.vue");
var _buttonVueDefault = parcelHelpers.interopDefault(_buttonVue);
var _constantsJs = require("../constants.js");
exports.default = {
    components: {
        Button: (0, _buttonVueDefault.default)
    },
    data () {
        return {
            board: {
                name: "",
                mondayID: "",
                updateColID: "",
                allyID: "",
                endDate: ""
            },
            message: ""
        };
    },
    methods: {
        goBack () {
            this.$router.push({
                path: "/"
            });
        },
        async addUser () {
            console.log(`Adding new board to server: ${JSON.stringify(this.board)}`);
            const result = await (0, _constantsJs.postData)(`${(0, _constantsJs.SERVER_URL)}add-board`, this.board);
            console.log(result);
            if (result.result === "success") {
                this.message = "Added!";
                this.board = {
                    name: "",
                    mondayID: "",
                    updateColID: "",
                    allyID: "",
                    endDate: ""
                };
            } else this.message = `Failed: ${JSON.stringify(result.result)}`;
        }
    }
};

},{"../components/Button.vue":"k5qqw","../constants.js":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a00i7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _withScopeId = (n)=>((0, _vue.pushScopeId)("data-v-7184a7"), n = n(), (0, _vue.popScopeId)(), n);
const _hoisted_1 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("h1", null, "Add Board", -1 /* HOISTED */ ));
const _hoisted_2 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("br", null, null, -1 /* HOISTED */ ));
const _hoisted_3 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("label", null, "Board Name:", -1 /* HOISTED */ ));
const _hoisted_4 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("label", null, "Monday.com ID:", -1 /* HOISTED */ ));
const _hoisted_5 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("label", null, "Last Updated Column ID:", -1 /* HOISTED */ ));
const _hoisted_6 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("label", null, "Ally Semester ID:", -1 /* HOISTED */ ));
const _hoisted_7 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("label", null, "End Date (optional):", -1 /* HOISTED */ ));
const _hoisted_8 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("button", {
        class: "submit-button",
        type: "submit"
    }, "Add Board", -1 /* HOISTED */ ));
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Button = (0, _vue.resolveComponent)("Button");
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)((0, _vue.Fragment), null, [
        (0, _vue.createVNode)(_component_Button, {
            class: "back-button",
            text: "Home",
            onGoToLink: $options.goBack
        }, null, 8 /* PROPS */ , [
            "onGoToLink"
        ]),
        _hoisted_1,
        _hoisted_2,
        (0, _vue.createElementVNode)("div", null, [
            (0, _vue.createElementVNode)("form", {
                onSubmit: _cache[5] || (_cache[5] = (0, _vue.withModifiers)((...args)=>$options.addUser && $options.addUser(...args), [
                    "prevent"
                ]))
            }, [
                (0, _vue.createElementVNode)("div", null, [
                    _hoisted_3,
                    (0, _vue.withDirectives)((0, _vue.createElementVNode)("input", {
                        type: "text",
                        id: "name",
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event)=>$data.board.name = $event),
                        required: ""
                    }, null, 512 /* NEED_PATCH */ ), [
                        [
                            (0, _vue.vModelText),
                            $data.board.name
                        ]
                    ])
                ]),
                (0, _vue.createElementVNode)("div", null, [
                    _hoisted_4,
                    (0, _vue.withDirectives)((0, _vue.createElementVNode)("input", {
                        type: "text",
                        id: "mondayID",
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event)=>$data.board.mondayID = $event),
                        required: ""
                    }, null, 512 /* NEED_PATCH */ ), [
                        [
                            (0, _vue.vModelText),
                            $data.board.mondayID
                        ]
                    ])
                ]),
                (0, _vue.createElementVNode)("div", null, [
                    _hoisted_5,
                    (0, _vue.withDirectives)((0, _vue.createElementVNode)("input", {
                        type: "text",
                        id: "updateCol",
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event)=>$data.board.updateColID = $event),
                        required: ""
                    }, null, 512 /* NEED_PATCH */ ), [
                        [
                            (0, _vue.vModelText),
                            $data.board.updateColID
                        ]
                    ])
                ]),
                (0, _vue.createElementVNode)("div", null, [
                    _hoisted_6,
                    (0, _vue.withDirectives)((0, _vue.createElementVNode)("input", {
                        type: "text",
                        id: "allyID",
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event)=>$data.board.allyID = $event),
                        required: ""
                    }, null, 512 /* NEED_PATCH */ ), [
                        [
                            (0, _vue.vModelText),
                            $data.board.allyID
                        ]
                    ])
                ]),
                (0, _vue.createElementVNode)("div", null, [
                    _hoisted_7,
                    (0, _vue.withDirectives)((0, _vue.createElementVNode)("input", {
                        type: "text",
                        id: "allyID",
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event)=>$data.board.endDate = $event)
                    }, null, 512 /* NEED_PATCH */ ), [
                        [
                            (0, _vue.vModelText),
                            $data.board.endDate
                        ]
                    ])
                ]),
                _hoisted_8,
                (0, _vue.createElementVNode)("p", null, (0, _vue.toDisplayString)($data.message), 1 /* TEXT */ )
            ], 32 /* NEED_HYDRATION */ )
        ])
    ], 64 /* STABLE_FRAGMENT */ );
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("7184a7-hmr", render);
});

},{"vue":"hLUyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"03fhz":[function() {},{}],"4NpxK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"apec9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("cc6168e86af4e66f");
    if (script.__esModule) script = script.default;
    script.render = require("82736a8c78c13a0a").render;
    script.__cssModules = require("cffeedb4d9a29de9").default;
    require("dc28f76419d2d65b").default(script);
    script.__scopeId = "data-v-4eb7f3";
    script.__file = "/Users/kottedheeru/Documents/qa-update/client/src/views/NewMaintainerView.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "4eb7f3-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("4eb7f3-hmr", script)) __VUE_HMR_RUNTIME__.reload("4eb7f3-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"cc6168e86af4e66f":"jptBV","82736a8c78c13a0a":"ayHJN","cffeedb4d9a29de9":"3LVuY","dc28f76419d2d65b":"EzGgJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jptBV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buttonVue = require("../components/Button.vue");
var _buttonVueDefault = parcelHelpers.interopDefault(_buttonVue);
var _constantsJs = require("../constants.js");
exports.default = {
    components: {
        Button: (0, _buttonVueDefault.default)
    },
    data () {
        return {
            maintainer: {
                name: "",
                email: "",
                primary: false
            },
            message: ""
        };
    },
    methods: {
        goBack () {
            this.$router.push({
                path: "/maintainers"
            });
        },
        async addUser () {
            console.log(`Adding new maintainer on server: ${JSON.stringify(this.maintainer)}`);
            const result = await (0, _constantsJs.postData)(`${(0, _constantsJs.SERVER_URL)}add-maintainer`, this.maintainer);
            console.log(result);
            if (result.result === "success") {
                this.message = "Added!";
                this.maintainer = {
                    name: "",
                    email: "",
                    primary: false
                };
            } else this.message = `Failed: ${JSON.stringify(result.result)}`;
        }
    }
};

},{"../components/Button.vue":"k5qqw","../constants.js":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ayHJN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _withScopeId = (n)=>((0, _vue.pushScopeId)("data-v-4eb7f3"), n = n(), (0, _vue.popScopeId)(), n);
const _hoisted_1 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("h1", null, "Add Maintainer", -1 /* HOISTED */ ));
const _hoisted_2 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("br", null, null, -1 /* HOISTED */ ));
const _hoisted_3 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("label", null, "Name:", -1 /* HOISTED */ ));
const _hoisted_4 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("label", null, "Email:", -1 /* HOISTED */ ));
const _hoisted_5 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("label", {
        for: "checkbox"
    }, "Primary Maintainer? (Note: setting this maintainer as the primary will replace the current primary maintainer)", -1 /* HOISTED */ ));
const _hoisted_6 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("button", {
        class: "submit-button",
        type: "submit"
    }, "Add Maintainer", -1 /* HOISTED */ ));
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Button = (0, _vue.resolveComponent)("Button");
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)((0, _vue.Fragment), null, [
        (0, _vue.createVNode)(_component_Button, {
            class: "back-button",
            text: "Back",
            onGoToLink: $options.goBack
        }, null, 8 /* PROPS */ , [
            "onGoToLink"
        ]),
        _hoisted_1,
        _hoisted_2,
        (0, _vue.createElementVNode)("div", null, [
            (0, _vue.createElementVNode)("form", {
                onSubmit: _cache[3] || (_cache[3] = (0, _vue.withModifiers)((...args)=>$options.addUser && $options.addUser(...args), [
                    "prevent"
                ]))
            }, [
                (0, _vue.createElementVNode)("div", null, [
                    _hoisted_3,
                    (0, _vue.withDirectives)((0, _vue.createElementVNode)("input", {
                        type: "text",
                        id: "name",
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event)=>$data.maintainer.name = $event),
                        required: ""
                    }, null, 512 /* NEED_PATCH */ ), [
                        [
                            (0, _vue.vModelText),
                            $data.maintainer.name
                        ]
                    ])
                ]),
                (0, _vue.createElementVNode)("div", null, [
                    _hoisted_4,
                    (0, _vue.withDirectives)((0, _vue.createElementVNode)("input", {
                        type: "email",
                        id: "mondayID",
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event)=>$data.maintainer.email = $event),
                        required: ""
                    }, null, 512 /* NEED_PATCH */ ), [
                        [
                            (0, _vue.vModelText),
                            $data.maintainer.email
                        ]
                    ])
                ]),
                (0, _vue.createElementVNode)("div", null, [
                    _hoisted_5,
                    (0, _vue.withDirectives)((0, _vue.createElementVNode)("input", {
                        type: "checkbox",
                        id: "checkbox",
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event)=>$data.maintainer.primary = $event)
                    }, null, 512 /* NEED_PATCH */ ), [
                        [
                            (0, _vue.vModelCheckbox),
                            $data.maintainer.primary
                        ]
                    ])
                ]),
                _hoisted_6,
                (0, _vue.createElementVNode)("p", null, (0, _vue.toDisplayString)($data.message), 1 /* TEXT */ )
            ], 32 /* NEED_HYDRATION */ )
        ])
    ], 64 /* STABLE_FRAGMENT */ );
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("4eb7f3-hmr", render);
});

},{"vue":"hLUyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3LVuY":[function() {},{}],"EzGgJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l86fs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("8732199428868026");
    if (script.__esModule) script = script.default;
    script.render = require("69384e517d4bdd2a").render;
    script.__cssModules = require("a96ab9eee4ee542d").default;
    require("e8e3f216a522ff81").default(script);
    script.__scopeId = "data-v-61f0e3";
    script.__file = "/Users/kottedheeru/Documents/qa-update/client/src/views/EditBoardView.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "61f0e3-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("61f0e3-hmr", script)) __VUE_HMR_RUNTIME__.reload("61f0e3-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"8732199428868026":"eiMr7","69384e517d4bdd2a":"b04TQ","a96ab9eee4ee542d":"1g9Np","e8e3f216a522ff81":"fJtCT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eiMr7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buttonVue = require("../components/Button.vue");
var _buttonVueDefault = parcelHelpers.interopDefault(_buttonVue);
var _constantsJs = require("../constants.js");
exports.default = {
    components: {
        Button: (0, _buttonVueDefault.default)
    },
    data () {
        return {
            board: {
                name: "",
                mondayID: "",
                updateColID: "",
                allyID: "",
                endDate: ""
            },
            message: "",
            deleteMessage: ""
        };
    },
    created () {
        const item = JSON.parse(this.$route.query.item);
        console.log(item);
        this.board = {
            name: item.name,
            mondayID: item.mondayId,
            updateColID: item.updateColId,
            allyID: item.allySemId,
            endDate: item.endDate
        };
    },
    methods: {
        goBack () {
            this.$router.push({
                path: "/"
            });
        },
        async addUser () {
            console.log(`Updating board on server: ${JSON.stringify(this.board)}`);
            const result = await this.postData(`${(0, _constantsJs.SERVER_URL)}edit-board`, this.board);
            console.log(result);
            if (result.result === "success") this.message = "Updated!";
            else this.message = `Failed: ${JSON.stringify(result.result)}`;
        },
        async deleteBoard () {
            if (confirm(`Are you sure you want to delete ${this.board.name}? All data will be lost and all future updates will be cancelled.`)) {
                console.log(`Deleting board on server: ${JSON.stringify(this.board)}`);
                const result = await this.postData(`${(0, _constantsJs.SERVER_URL)}delete-board`, this.board);
                console.log(result);
                if (result.result === "success") {
                    this.deleteMessage = "Deleted!";
                    this.board = {
                        name: "",
                        mondayID: "",
                        updateColID: "",
                        allyID: "",
                        endDate: ""
                    };
                } else this.deleteMessage = `Failed: ${JSON.stringify(result.result)}`;
            }
        },
        async postData (url, data, contentType = "application/json") {
            return fetch(url, {
                method: "POST",
                cache: "no-cache",
                credentials: "same-origin",
                connection: "keep-alive",
                headers: {
                    Accept: "application.json",
                    "Content-Type": contentType
                },
                body: JSON.stringify(data)
            }).then((res)=>{
                return res.json();
            }).then((obj)=>{
                return obj;
            }).catch((err)=>{
                console.log(err);
            });
        }
    }
};

},{"../components/Button.vue":"k5qqw","../constants.js":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b04TQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _withScopeId = (n)=>((0, _vue.pushScopeId)("data-v-61f0e3"), n = n(), (0, _vue.popScopeId)(), n);
const _hoisted_1 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("h1", null, "Edit Board", -1 /* HOISTED */ ));
const _hoisted_2 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("br", null, null, -1 /* HOISTED */ ));
const _hoisted_3 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("label", null, "Board Name:", -1 /* HOISTED */ ));
const _hoisted_4 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("label", null, "Monday.com ID:", -1 /* HOISTED */ ));
const _hoisted_5 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("label", null, "Last Updated Column ID:", -1 /* HOISTED */ ));
const _hoisted_6 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("label", null, "Ally Semester ID:", -1 /* HOISTED */ ));
const _hoisted_7 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("label", null, "End Date (optional):", -1 /* HOISTED */ ));
const _hoisted_8 = /*#__PURE__*/ _withScopeId(()=>/*#__PURE__*/ (0, _vue.createElementVNode)("button", {
        class: "submit-button",
        type: "submit"
    }, "Update Board", -1 /* HOISTED */ ));
const _hoisted_9 = {
    class: "right"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Button = (0, _vue.resolveComponent)("Button");
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)((0, _vue.Fragment), null, [
        (0, _vue.createVNode)(_component_Button, {
            class: "back-button",
            text: "Home",
            onGoToLink: $options.goBack
        }, null, 8 /* PROPS */ , [
            "onGoToLink"
        ]),
        _hoisted_1,
        _hoisted_2,
        (0, _vue.createElementVNode)("div", null, [
            (0, _vue.createElementVNode)("form", {
                onSubmit: _cache[5] || (_cache[5] = (0, _vue.withModifiers)((...args)=>$options.addUser && $options.addUser(...args), [
                    "prevent"
                ]))
            }, [
                (0, _vue.createElementVNode)("div", null, [
                    _hoisted_3,
                    (0, _vue.withDirectives)((0, _vue.createElementVNode)("input", {
                        type: "text",
                        id: "name",
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event)=>$data.board.name = $event),
                        required: ""
                    }, null, 512 /* NEED_PATCH */ ), [
                        [
                            (0, _vue.vModelText),
                            $data.board.name
                        ]
                    ])
                ]),
                (0, _vue.createElementVNode)("div", null, [
                    _hoisted_4,
                    (0, _vue.withDirectives)((0, _vue.createElementVNode)("input", {
                        type: "text",
                        id: "mondayID",
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event)=>$data.board.mondayID = $event),
                        disabled: ""
                    }, null, 512 /* NEED_PATCH */ ), [
                        [
                            (0, _vue.vModelText),
                            $data.board.mondayID
                        ]
                    ])
                ]),
                (0, _vue.createElementVNode)("div", null, [
                    _hoisted_5,
                    (0, _vue.withDirectives)((0, _vue.createElementVNode)("input", {
                        type: "text",
                        id: "updateCol",
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event)=>$data.board.updateColID = $event),
                        required: ""
                    }, null, 512 /* NEED_PATCH */ ), [
                        [
                            (0, _vue.vModelText),
                            $data.board.updateColID
                        ]
                    ])
                ]),
                (0, _vue.createElementVNode)("div", null, [
                    _hoisted_6,
                    (0, _vue.withDirectives)((0, _vue.createElementVNode)("input", {
                        type: "text",
                        id: "allyID",
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event)=>$data.board.allyID = $event),
                        required: ""
                    }, null, 512 /* NEED_PATCH */ ), [
                        [
                            (0, _vue.vModelText),
                            $data.board.allyID
                        ]
                    ])
                ]),
                (0, _vue.createElementVNode)("div", null, [
                    _hoisted_7,
                    (0, _vue.withDirectives)((0, _vue.createElementVNode)("input", {
                        type: "text",
                        id: "allyID",
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event)=>$data.board.endDate = $event)
                    }, null, 512 /* NEED_PATCH */ ), [
                        [
                            (0, _vue.vModelText),
                            $data.board.endDate
                        ]
                    ])
                ]),
                _hoisted_8,
                (0, _vue.createElementVNode)("p", null, (0, _vue.toDisplayString)($data.message), 1 /* TEXT */ )
            ], 32 /* NEED_HYDRATION */ ),
            (0, _vue.createElementVNode)("div", _hoisted_9, [
                (0, _vue.createElementVNode)("button", {
                    class: "delete-button",
                    onClick: _cache[6] || (_cache[6] = (...args)=>$options.deleteBoard && $options.deleteBoard(...args))
                }, "Delete Board"),
                (0, _vue.createElementVNode)("p", null, (0, _vue.toDisplayString)($data.deleteMessage), 1 /* TEXT */ )
            ])
        ])
    ], 64 /* STABLE_FRAGMENT */ );
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("61f0e3-hmr", render);
});

},{"vue":"hLUyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1g9Np":[function() {},{}],"fJtCT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ELy8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("e5fac17a81d085e");
    if (script.__esModule) script = script.default;
    script.render = require("8bb96807ae1c26aa").render;
    script.__cssModules = require("538afe60b9faf3a9").default;
    require("3d777fd9dd2a8eca").default(script);
    script.__scopeId = "data-v-4d535d";
    script.__file = "/Users/kottedheeru/Documents/qa-update/client/src/views/IssuesView.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "4d535d-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("4d535d-hmr", script)) __VUE_HMR_RUNTIME__.reload("4d535d-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"e5fac17a81d085e":"2mcDd","8bb96807ae1c26aa":"7wori","538afe60b9faf3a9":"3RZZa","3d777fd9dd2a8eca":"i1fpK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2mcDd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _buttonVue = require("../components/Button.vue");
var _buttonVueDefault = parcelHelpers.interopDefault(_buttonVue);
var _issueVue = require("../components/Issue.vue");
var _issueVueDefault = parcelHelpers.interopDefault(_issueVue);
var _constantsJs = require("../constants.js");
exports.default = {
    components: {
        Button: (0, _buttonVueDefault.default),
        Issue: (0, _issueVueDefault.default)
    },
    data () {
        return {
            issues: []
        };
    },
    async created () {
        const resp = await fetch(`${(0, _constantsJs.SERVER_URL)}get-issues`);
        const body = await resp.json();
        console.log(body);
        this.issues = body;
    },
    methods: {
        leave () {
            this.$router.push({
                path: "/"
            });
        }
    }
};

},{"../components/Button.vue":"k5qqw","../components/Issue.vue":"a4r1H","../constants.js":"3huJa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a4r1H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("abac7e40d582027e");
    if (script.__esModule) script = script.default;
    script.render = require("82b4b6475f8fbed7").render;
    script.__cssModules = require("4b106661ac51d241").default;
    require("8d9d4adc9db5e9bc").default(script);
    script.__scopeId = "data-v-001d81";
    script.__file = "/Users/kottedheeru/Documents/qa-update/client/src/components/Issue.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "001d81-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("001d81-hmr", script)) __VUE_HMR_RUNTIME__.reload("001d81-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"abac7e40d582027e":"CVe1n","82b4b6475f8fbed7":"hYEee","4b106661ac51d241":"dH0s6","8d9d4adc9db5e9bc":"egkZR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"CVe1n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const __default__ = {
    props: [
        "details"
    ],
    data () {
        return {
            isCollapsibleOpen1: false,
            isCollapsibleOpen2: false
        };
    },
    methods: {
        getColor (type) {
            if (type === "critical error") return "issue red";
            else return "issue yellow";
        },
        formatType (type) {
            if (type === "critical error") return "Critical Error";
            else return "Non-Critical Issue(s)";
        },
        getDirection (open) {
            if (open) return "\uD83D\uDD3C";
            else return "\uD83D\uDD3D";
        },
        getWord (open) {
            if (open) return "Hide";
            else return "View";
        },
        toggleCollapsible1 () {
            this.isCollapsibleOpen1 = !this.isCollapsibleOpen1;
        },
        toggleCollapsible2 () {
            this.isCollapsibleOpen2 = !this.isCollapsibleOpen2;
        }
    }
};
exports.default = /*#__PURE__*/ Object.assign(__default__, {
    __name: "Issue",
    props: {
        details: Object
    },
    setup (__props, { expose: __expose }) {
        __expose();
        const __returned__ = {};
        Object.defineProperty(__returned__, "__isScriptSetup", {
            enumerable: false,
            value: true
        });
        return __returned__;
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hYEee":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = /*#__PURE__*/ (0, _vue.createElementVNode)("p", null, "Details:", -1 /* HOISTED */ );
const _hoisted_2 = {
    key: 0
};
const _hoisted_3 = {
    key: 1
};
const _hoisted_4 = {
    key: 2,
    class: "collapse-box"
};
const _hoisted_5 = {
    key: 0,
    class: "collapsible-content"
};
const _hoisted_6 = {
    key: 3,
    class: "collapse-box"
};
const _hoisted_7 = {
    key: 0,
    class: "collapsible-content"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return !$props.details.message.rowIssue ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        key: 0,
        class: (0, _vue.normalizeClass)($options.getColor($props.details.type))
    }, [
        (0, _vue.createElementVNode)("h3", null, (0, _vue.toDisplayString)($options.formatType($props.details.type)) + " - " + (0, _vue.toDisplayString)(new Date($props.details.dateTime).toLocaleDateString()) + " " + (0, _vue.toDisplayString)(new Date($props.details.dateTime).toLocaleTimeString()), 1 /* TEXT */ ),
        (0, _vue.createElementVNode)("p", null, "Monday Board ID: " + (0, _vue.toDisplayString)($props.details.boardId), 1 /* TEXT */ ),
        (0, _vue.createElementVNode)("p", null, "Details: " + (0, _vue.toDisplayString)($props.details.message), 1 /* TEXT */ )
    ], 2 /* CLASS */ )) : ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", {
        key: 1,
        class: (0, _vue.normalizeClass)($options.getColor($props.details.type))
    }, [
        (0, _vue.createElementVNode)("h3", null, (0, _vue.toDisplayString)($options.formatType($props.details.type)) + " - " + (0, _vue.toDisplayString)(new Date($props.details.dateTime).toLocaleDateString()) + " " + (0, _vue.toDisplayString)(new Date($props.details.dateTime).toLocaleTimeString()), 1 /* TEXT */ ),
        (0, _vue.createElementVNode)("p", null, "Monday Board ID: " + (0, _vue.toDisplayString)($props.details.boardId), 1 /* TEXT */ ),
        _hoisted_1,
        $props.details.message.failedToAdd ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("p", _hoisted_2, (0, _vue.toDisplayString)($props.details.message.failedToAdd.slice(0, -2)), 1 /* TEXT */ )) : (0, _vue.createCommentVNode)("v-if", true),
        $props.details.message.failedToUpdate ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("p", _hoisted_3, (0, _vue.toDisplayString)($props.details.message.failedToUpdate.slice(0, -2)), 1 /* TEXT */ )) : (0, _vue.createCommentVNode)("v-if", true),
        $props.details.message.failedToAddDetails.length > 0 ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_4, [
            (0, _vue.createElementVNode)("button", {
                onClick: _cache[0] || (_cache[0] = (...args)=>$options.toggleCollapsible1 && $options.toggleCollapsible1(...args)),
                class: "collapsible-button"
            }, "Failed to Add - " + (0, _vue.toDisplayString)($options.getWord($data.isCollapsibleOpen1)) + " Full Details " + (0, _vue.toDisplayString)($options.getDirection($data.isCollapsibleOpen1)), 1 /* TEXT */ ),
            $data.isCollapsibleOpen1 ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_5, [
                (0, _vue.createElementVNode)("p", null, (0, _vue.toDisplayString)($props.details.message.failedToAddDetails), 1 /* TEXT */ )
            ])) : (0, _vue.createCommentVNode)("v-if", true)
        ])) : (0, _vue.createCommentVNode)("v-if", true),
        $props.details.message.failedToUpdateDetails.length > 0 ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_6, [
            (0, _vue.createElementVNode)("button", {
                onClick: _cache[1] || (_cache[1] = (...args)=>$options.toggleCollapsible2 && $options.toggleCollapsible2(...args)),
                class: "collapsible-button"
            }, "Failed to Update - " + (0, _vue.toDisplayString)($options.getWord($data.isCollapsibleOpen2)) + " Full Details " + (0, _vue.toDisplayString)($options.getDirection($data.isCollapsibleOpen2)), 1 /* TEXT */ ),
            $data.isCollapsibleOpen2 ? ((0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_7, [
                (0, _vue.createElementVNode)("p", null, (0, _vue.toDisplayString)($props.details.message.failedToUpdateDetails), 1 /* TEXT */ )
            ])) : (0, _vue.createCommentVNode)("v-if", true)
        ])) : (0, _vue.createCommentVNode)("v-if", true)
    ], 2 /* CLASS */ ));
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("001d81-hmr", render);
});

},{"vue":"hLUyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dH0s6":[function() {},{}],"egkZR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wori":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = /*#__PURE__*/ (0, _vue.createElementVNode)("h1", null, "Issues", -1 /* HOISTED */ );
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Button = (0, _vue.resolveComponent)("Button");
    const _component_Issue = (0, _vue.resolveComponent)("Issue");
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)((0, _vue.Fragment), null, [
        _hoisted_1,
        (0, _vue.createVNode)(_component_Button, {
            class: "issue-button",
            text: "Home",
            onGoToLink: $options.leave
        }, null, 8 /* PROPS */ , [
            "onGoToLink"
        ]),
        ((0, _vue.openBlock)(true), (0, _vue.createElementBlock)((0, _vue.Fragment), null, (0, _vue.renderList)($data.issues, (issue)=>{
            return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", null, [
                (0, _vue.createVNode)(_component_Issue, {
                    details: issue
                }, null, 8 /* PROPS */ , [
                    "details"
                ])
            ]);
        }), 256 /* UNKEYED_FRAGMENT */ ))
    ], 64 /* STABLE_FRAGMENT */ );
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("4d535d-hmr", render);
});

},{"vue":"hLUyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3RZZa":[function() {},{}],"i1fpK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7SfAk":[function() {},{}],"fYNyc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("29158dae54139136");
    if (script.__esModule) script = script.default;
    script.render = require("8a4954974a3e2a08").render;
    script.__cssModules = require("f5f81ab60053088e").default;
    require("7e9898e9b122e745").default(script);
    script.__scopeId = "data-v-f5cc3d";
    script.__file = "/Users/kottedheeru/Documents/qa-update/client/src/App.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "f5cc3d-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("f5cc3d-hmr", script)) __VUE_HMR_RUNTIME__.reload("f5cc3d-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"29158dae54139136":"iiJmB","8a4954974a3e2a08":"evi43","f5f81ab60053088e":"1aWWh","7e9898e9b122e745":"h0MjM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iiJmB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vueRouter = require("vue-router");
exports.default = {
    __name: "App",
    setup (__props, { expose: __expose }) {
        __expose();
        const __returned__ = {
            get RouterView () {
                return 0, _vueRouter.RouterView;
            }
        };
        Object.defineProperty(__returned__, "__isScriptSetup", {
            enumerable: false,
            value: true
        });
        return __returned__;
    }
};

},{"vue-router":"c18b3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"evi43":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createBlock)($setup["RouterView"]);
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("f5cc3d-hmr", render);
});

},{"vue":"hLUyz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1aWWh":[function() {},{}],"h0MjM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["anvqh","gLLPy"], "gLLPy", "parcelRequire199a")

//# sourceMappingURL=index.4d6bcbeb.js.map
