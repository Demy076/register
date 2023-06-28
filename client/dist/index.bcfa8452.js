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
})({"dvrLD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "339fa845bcfa8452";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
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
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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

},{}],"7ZSs6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "router", ()=>router);
var _router = require("@vaadin/router");
var _rootPage = require("./app/customer/components/rootPage");
var _rootPageDefault = parcelHelpers.interopDefault(_rootPage);
var _navbar = require("./app/navbar/navbar");
var _navbarDefault = parcelHelpers.interopDefault(_navbar);
const components = {
    "navbar-component": (0, _navbarDefault.default),
    "root-page-customer": (0, _rootPageDefault.default)
};
for (const [name, component] of Object.entries(components)){
    console.log(name);
    if (customElements.get(name)) continue;
    customElements.define(name, component);
}
const router = new (0, _router.Router)(document.querySelector("#outlet"));
router.setRoutes([
    {
        path: "/customer",
        component: "root-page-customer",
        children: [
            {
                path: "/tables/:page",
                component: "div",
                action: async (context, commands)=>{
                    sessionStorage.setItem("page", context.params.page || "1");
                },
                children: [
                    {
                        path: "",
                        component: "navbar-component"
                    },
                    {
                        path: "",
                        component: "root-page-customer"
                    }
                ]
            }
        ]
    }
]);

},{"@vaadin/router":"kVZrF","./app/customer/components/rootPage":"9g6aF","./app/navbar/navbar":"gRyEm","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"kVZrF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Resolver", ()=>Resolver);
parcelHelpers.export(exports, "Router", ()=>Router);
function toArray(objectOrArray) {
    objectOrArray = objectOrArray || [];
    return Array.isArray(objectOrArray) ? objectOrArray : [
        objectOrArray
    ];
}
function log(msg) {
    return `[Vaadin.Router] ${msg}`;
}
function logValue(value) {
    if (typeof value !== "object") return String(value);
    const stringType = Object.prototype.toString.call(value).match(/ (.*)\]$/)[1];
    if (stringType === "Object" || stringType === "Array") return `${stringType} ${JSON.stringify(value)}`;
    else return stringType;
}
const MODULE = "module";
const NOMODULE = "nomodule";
const bundleKeys = [
    MODULE,
    NOMODULE
];
function ensureBundle(src) {
    if (!src.match(/.+\.[m]?js$/)) throw new Error(log(`Unsupported type for bundle "${src}": .js or .mjs expected.`));
}
function ensureRoute(route) {
    if (!route || !isString(route.path)) throw new Error(log(`Expected route config to be an object with a "path" string property, or an array of such objects`));
    const bundle = route.bundle;
    const stringKeys = [
        "component",
        "redirect",
        "bundle"
    ];
    if (!isFunction(route.action) && !Array.isArray(route.children) && !isFunction(route.children) && !isObject(bundle) && !stringKeys.some((key)=>isString(route[key]))) throw new Error(log(`Expected route config "${route.path}" to include either "${stringKeys.join('", "')}" ` + `or "action" function but none found.`));
    if (bundle) {
        if (isString(bundle)) ensureBundle(bundle);
        else if (!bundleKeys.some((key)=>key in bundle)) throw new Error(log('Expected route bundle to include either "' + NOMODULE + '" or "' + MODULE + '" keys, or both'));
        else bundleKeys.forEach((key)=>key in bundle && ensureBundle(bundle[key]));
    }
    if (route.redirect) [
        "bundle",
        "component"
    ].forEach((overriddenProp)=>{
        if (overriddenProp in route) console.warn(log(`Route config "${route.path}" has both "redirect" and "${overriddenProp}" properties, ` + `and "redirect" will always override the latter. Did you mean to only use "${overriddenProp}"?`));
    });
}
function ensureRoutes(routes) {
    toArray(routes).forEach((route)=>ensureRoute(route));
}
function loadScript(src, key) {
    let script = document.head.querySelector('script[src="' + src + '"][async]');
    if (!script) {
        script = document.createElement("script");
        script.setAttribute("src", src);
        if (key === MODULE) script.setAttribute("type", MODULE);
        else if (key === NOMODULE) script.setAttribute(NOMODULE, "");
        script.async = true;
    }
    return new Promise((resolve, reject)=>{
        script.onreadystatechange = script.onload = (e)=>{
            script.__dynamicImportLoaded = true;
            resolve(e);
        };
        script.onerror = (e)=>{
            if (script.parentNode) script.parentNode.removeChild(script);
            reject(e);
        };
        if (script.parentNode === null) document.head.appendChild(script);
        else if (script.__dynamicImportLoaded) resolve();
    });
}
function loadBundle(bundle) {
    if (isString(bundle)) return loadScript(bundle);
    else return Promise.race(bundleKeys.filter((key)=>key in bundle).map((key)=>loadScript(bundle[key], key)));
}
function fireRouterEvent(type, detail) {
    return !window.dispatchEvent(new CustomEvent(`vaadin-router-${type}`, {
        cancelable: type === "go",
        detail
    }));
}
function isObject(o) {
    // guard against null passing the typeof check
    return typeof o === "object" && !!o;
}
function isFunction(f) {
    return typeof f === "function";
}
function isString(s) {
    return typeof s === "string";
}
function getNotFoundError(context) {
    const error = new Error(log(`Page not found (${context.pathname})`));
    error.context = context;
    error.code = 404;
    return error;
}
const notFoundResult = new class NotFoundResult {
}();
/* istanbul ignore next: coverage is calculated in Chrome, this code is for IE */ function getAnchorOrigin(anchor) {
    // IE11: on HTTP and HTTPS the default port is not included into
    // window.location.origin, so won't include it here either.
    const port = anchor.port;
    const protocol = anchor.protocol;
    const defaultHttp = protocol === "http:" && port === "80";
    const defaultHttps = protocol === "https:" && port === "443";
    const host = defaultHttp || defaultHttps ? anchor.hostname // does not include the port number (e.g. www.example.org)
     : anchor.host; // does include the port number (e.g. www.example.org:80)
    return `${protocol}//${host}`;
}
// The list of checks is not complete:
//  - SVG support is missing
//  - the 'rel' attribute is not considered
function vaadinRouterGlobalClickHandler(event) {
    // ignore the click if the default action is prevented
    if (event.defaultPrevented) return;
    // ignore the click if not with the primary mouse button
    if (event.button !== 0) return;
    // ignore the click if a modifier key is pressed
    if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) return;
    // find the <a> element that the click is at (or within)
    let anchor = event.target;
    const path = event.composedPath ? event.composedPath() : event.path || [];
    // FIXME(web-padawan): `Symbol.iterator` used by webcomponentsjs is broken for arrays
    // example to check: `for...of` loop here throws the "Not yet implemented" error
    for(let i = 0; i < path.length; i++){
        const target = path[i];
        if (target.nodeName && target.nodeName.toLowerCase() === "a") {
            anchor = target;
            break;
        }
    }
    while(anchor && anchor.nodeName.toLowerCase() !== "a")anchor = anchor.parentNode;
    // ignore the click if not at an <a> element
    if (!anchor || anchor.nodeName.toLowerCase() !== "a") return;
    // ignore the click if the <a> element has a non-default target
    if (anchor.target && anchor.target.toLowerCase() !== "_self") return;
    // ignore the click if the <a> element has the 'download' attribute
    if (anchor.hasAttribute("download")) return;
    // ignore the click if the <a> element has the 'router-ignore' attribute
    if (anchor.hasAttribute("router-ignore")) return;
    // ignore the click if the target URL is a fragment on the current page
    if (anchor.pathname === window.location.pathname && anchor.hash !== "") return;
    // ignore the click if the target is external to the app
    // In IE11 HTMLAnchorElement does not have the `origin` property
    const origin = anchor.origin || getAnchorOrigin(anchor);
    if (origin !== window.location.origin) return;
    // if none of the above, convert the click into a navigation event
    const { pathname, search, hash } = anchor;
    if (fireRouterEvent("go", {
        pathname,
        search,
        hash
    })) {
        event.preventDefault();
        // for a click event, the scroll is reset to the top position.
        if (event && event.type === "click") window.scrollTo(0, 0);
    }
}
/**
 * A navigation trigger for Vaadin Router that translated clicks on `<a>` links
 * into Vaadin Router navigation events.
 *
 * Only regular clicks on in-app links are translated (primary mouse button, no
 * modifier keys, the target href is within the app's URL space).
 *
 * @memberOf Router.NavigationTrigger
 * @type {NavigationTrigger}
 */ const CLICK = {
    activate () {
        window.document.addEventListener("click", vaadinRouterGlobalClickHandler);
    },
    inactivate () {
        window.document.removeEventListener("click", vaadinRouterGlobalClickHandler);
    }
};
// PopStateEvent constructor shim
const isIE = /Trident/.test(navigator.userAgent);
/* istanbul ignore next: coverage is calculated in Chrome, this code is for IE */ if (isIE && !isFunction(window.PopStateEvent)) {
    window.PopStateEvent = function(inType, params) {
        params = params || {};
        var e = document.createEvent("Event");
        e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
        e.state = params.state || null;
        return e;
    };
    window.PopStateEvent.prototype = window.Event.prototype;
}
function vaadinRouterGlobalPopstateHandler(event) {
    if (event.state === "vaadin-router-ignore") return;
    const { pathname, search, hash } = window.location;
    fireRouterEvent("go", {
        pathname,
        search,
        hash
    });
}
/**
 * A navigation trigger for Vaadin Router that translates popstate events into
 * Vaadin Router navigation events.
 *
 * @memberOf Router.NavigationTrigger
 * @type {NavigationTrigger}
 */ const POPSTATE = {
    activate () {
        window.addEventListener("popstate", vaadinRouterGlobalPopstateHandler);
    },
    inactivate () {
        window.removeEventListener("popstate", vaadinRouterGlobalPopstateHandler);
    }
};
/**
 * Expose `pathToRegexp`.
 */ var pathToRegexp_1 = pathToRegexp$1;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;
/**
 * Default configs.
 */ var DEFAULT_DELIMITER = "/";
var DEFAULT_DELIMITERS = "./";
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */ var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    "(\\\\.)",
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
    // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
    "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"
].join("|"), "g");
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */ function parse(str, options) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = "";
    var defaultDelimiter = options && options.delimiter || DEFAULT_DELIMITER;
    var delimiters = options && options.delimiters || DEFAULT_DELIMITERS;
    var pathEscaped = false;
    var res;
    while((res = PATH_REGEXP.exec(str)) !== null){
        var m = res[0];
        var escaped = res[1];
        var offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;
        // Ignore already escaped sequences.
        if (escaped) {
            path += escaped[1];
            pathEscaped = true;
            continue;
        }
        var prev = "";
        var next = str[index];
        var name = res[2];
        var capture = res[3];
        var group = res[4];
        var modifier = res[5];
        if (!pathEscaped && path.length) {
            var k = path.length - 1;
            if (delimiters.indexOf(path[k]) > -1) {
                prev = path[k];
                path = path.slice(0, k);
            }
        }
        // Push the current path onto the tokens.
        if (path) {
            tokens.push(path);
            path = "";
            pathEscaped = false;
        }
        var partial = prev !== "" && next !== undefined && next !== prev;
        var repeat = modifier === "+" || modifier === "*";
        var optional = modifier === "?" || modifier === "*";
        var delimiter = prev || defaultDelimiter;
        var pattern = capture || group;
        tokens.push({
            name: name || key++,
            prefix: prev,
            delimiter: delimiter,
            optional: optional,
            repeat: repeat,
            partial: partial,
            pattern: pattern ? escapeGroup(pattern) : "[^" + escapeString(delimiter) + "]+?"
        });
    }
    // Push any remaining characters.
    if (path || index < str.length) tokens.push(path + str.substr(index));
    return tokens;
}
/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */ function compile(str, options) {
    return tokensToFunction(parse(str, options));
}
/**
 * Expose a method for transforming tokens into the path function.
 */ function tokensToFunction(tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length);
    // Compile all the patterns before compilation.
    for(var i = 0; i < tokens.length; i++)if (typeof tokens[i] === "object") matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$");
    return function(data, options) {
        var path = "";
        var encode = options && options.encode || encodeURIComponent;
        for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var segment;
            if (Array.isArray(value)) {
                if (!token.repeat) throw new TypeError('Expected "' + token.name + '" to not repeat, but got array');
                if (value.length === 0) {
                    if (token.optional) continue;
                    throw new TypeError('Expected "' + token.name + '" to not be empty');
                }
                for(var j = 0; j < value.length; j++){
                    segment = encode(value[j], token);
                    if (!matches[i].test(segment)) throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"');
                    path += (j === 0 ? token.prefix : token.delimiter) + segment;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
                segment = encode(String(value), token);
                if (!matches[i].test(segment)) throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
                path += token.prefix + segment;
                continue;
            }
            if (token.optional) {
                // Prepend partial segment prefixes.
                if (token.partial) path += token.prefix;
                continue;
            }
            throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? "an array" : "a string"));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */ function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */ function escapeGroup(group) {
    return group.replace(/([=!:$/()])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */ function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */ function regexpToRegexp(path, keys) {
    if (!keys) return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) for(var i = 0; i < groups.length; i++)keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
    });
    return path;
}
/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */ function arrayToRegexp(path, keys, options) {
    var parts = [];
    for(var i = 0; i < path.length; i++)parts.push(pathToRegexp$1(path[i], keys, options).source);
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */ function stringToRegexp(path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */ function tokensToRegExp(tokens, keys, options) {
    options = options || {};
    var strict = options.strict;
    var start = options.start !== false;
    var end = options.end !== false;
    var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
    var delimiters = options.delimiters || DEFAULT_DELIMITERS;
    var endsWith = [].concat(options.endsWith || []).map(escapeString).concat("$").join("|");
    var route = start ? "^" : "";
    var isEndDelimited = tokens.length === 0;
    // Iterate over the tokens and create our regexp string.
    for(var i = 0; i < tokens.length; i++){
        var token = tokens[i];
        if (typeof token === "string") {
            route += escapeString(token);
            isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
        } else {
            var capture = token.repeat ? "(?:" + token.pattern + ")(?:" + escapeString(token.delimiter) + "(?:" + token.pattern + "))*" : token.pattern;
            if (keys) keys.push(token);
            if (token.optional) {
                if (token.partial) route += escapeString(token.prefix) + "(" + capture + ")?";
                else route += "(?:" + escapeString(token.prefix) + "(" + capture + "))?";
            } else route += escapeString(token.prefix) + "(" + capture + ")";
        }
    }
    if (end) {
        if (!strict) route += "(?:" + delimiter + ")?";
        route += endsWith === "$" ? "$" : "(?=" + endsWith + ")";
    } else {
        if (!strict) route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        if (!isEndDelimited) route += "(?=" + delimiter + "|" + endsWith + ")";
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */ function pathToRegexp$1(path, keys, options) {
    if (path instanceof RegExp) return regexpToRegexp(path, keys);
    if (Array.isArray(path)) return arrayToRegexp(/** @type {!Array} */ path, keys, options);
    return stringToRegexp(/** @type {string} */ path, keys, options);
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ const { hasOwnProperty } = Object.prototype;
const cache$1 = new Map();
// see https://github.com/pillarjs/path-to-regexp/issues/148
cache$1.set("|false", {
    keys: [],
    pattern: /(?:)/
});
function decodeParam(val) {
    try {
        return decodeURIComponent(val);
    } catch (err) {
        return val;
    }
}
function matchPath(routepath, path, exact, parentKeys, parentParams) {
    exact = !!exact;
    const cacheKey = `${routepath}|${exact}`;
    let regexp = cache$1.get(cacheKey);
    if (!regexp) {
        const keys = [];
        regexp = {
            keys,
            pattern: pathToRegexp_1(routepath, keys, {
                end: exact,
                strict: routepath === ""
            })
        };
        cache$1.set(cacheKey, regexp);
    }
    const m = regexp.pattern.exec(path);
    if (!m) return null;
    const params = Object.assign({}, parentParams);
    for(let i = 1; i < m.length; i++){
        const key = regexp.keys[i - 1];
        const prop = key.name;
        const value = m[i];
        if (value !== undefined || !hasOwnProperty.call(params, prop)) {
            if (key.repeat) params[prop] = value ? value.split(key.delimiter).map(decodeParam) : [];
            else params[prop] = value ? decodeParam(value) : value;
        }
    }
    return {
        path: m[0],
        keys: (parentKeys || []).concat(regexp.keys),
        params
    };
}
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ /**
 * Traverses the routes tree and matches its nodes to the given pathname from
 * the root down to the leaves. Each match consumes a part of the pathname and
 * the matching process continues for as long as there is a matching child
 * route for the remaining part of the pathname.
 *
 * The returned value is a lazily evaluated iterator.
 *
 * The leading "/" in a route path matters only for the root of the routes
 * tree (or if all parent routes are ""). In all other cases a leading "/" in
 * a child route path has no significance.
 *
 * The trailing "/" in a _route path_ matters only for the leaves of the
 * routes tree. A leaf route with a trailing "/" matches only a pathname that
 * also has a trailing "/".
 *
 * The trailing "/" in a route path does not affect matching of child routes
 * in any way.
 *
 * The trailing "/" in a _pathname_ generally does not matter (except for
 * the case of leaf nodes described above).
 *
 * The "" and "/" routes have special treatment:
 *  1. as a single route
 *     the "" and "/" routes match only the "" and "/" pathnames respectively
 *  2. as a parent in the routes tree
 *     the "" route matches any pathname without consuming any part of it
 *     the "/" route matches any absolute pathname consuming its leading "/"
 *  3. as a leaf in the routes tree
 *     the "" and "/" routes match only if the entire pathname is consumed by
 *         the parent routes chain. In this case "" and "/" are equivalent.
 *  4. several directly nested "" or "/" routes
 *     - directly nested "" or "/" routes are 'squashed' (i.e. nesting two
 *       "/" routes does not require a double "/" in the pathname to match)
 *     - if there are only "" in the parent routes chain, no part of the
 *       pathname is consumed, and the leading "/" in the child routes' paths
 *       remains significant
 *
 * Side effect:
 *   - the routes tree { path: '' } matches only the '' pathname
 *   - the routes tree { path: '', children: [ { path: '' } ] } matches any
 *     pathname (for the tree root)
 *
 * Prefix matching can be enabled also by `children: true`.
 */ function matchRoute(route, pathname, ignoreLeadingSlash, parentKeys, parentParams) {
    let match;
    let childMatches;
    let childIndex = 0;
    let routepath = route.path || "";
    if (routepath.charAt(0) === "/") {
        if (ignoreLeadingSlash) routepath = routepath.substr(1);
        ignoreLeadingSlash = true;
    }
    return {
        next (routeToSkip) {
            if (route === routeToSkip) return {
                done: true
            };
            const children = route.__children = route.__children || route.children;
            if (!match) {
                match = matchPath(routepath, pathname, !children, parentKeys, parentParams);
                if (match) return {
                    done: false,
                    value: {
                        route,
                        keys: match.keys,
                        params: match.params,
                        path: match.path
                    }
                };
            }
            if (match && children) while(childIndex < children.length){
                if (!childMatches) {
                    const childRoute = children[childIndex];
                    childRoute.parent = route;
                    let matchedLength = match.path.length;
                    if (matchedLength > 0 && pathname.charAt(matchedLength) === "/") matchedLength += 1;
                    childMatches = matchRoute(childRoute, pathname.substr(matchedLength), ignoreLeadingSlash, match.keys, match.params);
                }
                const childMatch = childMatches.next(routeToSkip);
                if (!childMatch.done) return {
                    done: false,
                    value: childMatch.value
                };
                childMatches = null;
                childIndex++;
            }
            return {
                done: true
            };
        }
    };
}
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ function resolveRoute(context) {
    if (isFunction(context.route.action)) return context.route.action(context);
    return undefined;
}
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ function isChildRoute(parentRoute, childRoute) {
    let route = childRoute;
    while(route){
        route = route.parent;
        if (route === parentRoute) return true;
    }
    return false;
}
function generateErrorMessage(currentContext) {
    let errorMessage = `Path '${currentContext.pathname}' is not properly resolved due to an error.`;
    const routePath = (currentContext.route || {}).path;
    if (routePath) errorMessage += ` Resolution had failed on route: '${routePath}'`;
    return errorMessage;
}
function updateChainForRoute(context, match) {
    const { route, path } = match;
    if (route && !route.__synthetic) {
        const item = {
            path,
            route
        };
        if (!context.chain) context.chain = [];
        else // Discard old items
        if (route.parent) {
            let i = context.chain.length;
            while(i-- && context.chain[i].route && context.chain[i].route !== route.parent)context.chain.pop();
        }
        context.chain.push(item);
    }
}
/**
 */ class Resolver {
    constructor(routes, options = {}){
        if (Object(routes) !== routes) throw new TypeError("Invalid routes");
        this.baseUrl = options.baseUrl || "";
        this.errorHandler = options.errorHandler;
        this.resolveRoute = options.resolveRoute || resolveRoute;
        this.context = Object.assign({
            resolver: this
        }, options.context);
        this.root = Array.isArray(routes) ? {
            path: "",
            __children: routes,
            parent: null,
            __synthetic: true
        } : routes;
        this.root.parent = null;
    }
    /**
   * Returns the current list of routes (as a shallow copy). Adding / removing
   * routes to / from the returned array does not affect the routing config,
   * but modifying the route objects does.
   *
   * @return {!Array<!Router.Route>}
   */ getRoutes() {
        return [
            ...this.root.__children
        ];
    }
    /**
   * Sets the routing config (replacing the existing one).
   *
   * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
   *    (the array is shallow copied)
   */ setRoutes(routes) {
        ensureRoutes(routes);
        const newRoutes = [
            ...toArray(routes)
        ];
        this.root.__children = newRoutes;
    }
    /**
   * Appends one or several routes to the routing config and returns the
   * effective routing config after the operation.
   *
   * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
   *    (the array is shallow copied)
   * @return {!Array<!Router.Route>}
   * @protected
   */ addRoutes(routes) {
        ensureRoutes(routes);
        this.root.__children.push(...toArray(routes));
        return this.getRoutes();
    }
    /**
   * Removes all existing routes from the routing config.
   */ removeRoutes() {
        this.setRoutes([]);
    }
    /**
   * Asynchronously resolves the given pathname, i.e. finds all routes matching
   * the pathname and tries resolving them one after another in the order they
   * are listed in the routes config until the first non-null result.
   *
   * Returns a promise that is fulfilled with the return value of an object that consists of the first
   * route handler result that returns something other than `null` or `undefined` and context used to get this result.
   *
   * If no route handlers return a non-null result, or if no route matches the
   * given pathname the returned promise is rejected with a 'page not found'
   * `Error`.
   *
   * @param {!string|!{pathname: !string}} pathnameOrContext the pathname to
   *    resolve or a context object with a `pathname` property and other
   *    properties to pass to the route resolver functions.
   * @return {!Promise<any>}
   */ resolve(pathnameOrContext) {
        const context = Object.assign({}, this.context, isString(pathnameOrContext) ? {
            pathname: pathnameOrContext
        } : pathnameOrContext);
        const match = matchRoute(this.root, this.__normalizePathname(context.pathname), this.baseUrl);
        const resolve = this.resolveRoute;
        let matches = null;
        let nextMatches = null;
        let currentContext = context;
        function next(resume, parent = matches.value.route, prevResult) {
            const routeToSkip = prevResult === null && matches.value.route;
            matches = nextMatches || match.next(routeToSkip);
            nextMatches = null;
            if (!resume) {
                if (matches.done || !isChildRoute(parent, matches.value.route)) {
                    nextMatches = matches;
                    return Promise.resolve(notFoundResult);
                }
            }
            if (matches.done) return Promise.reject(getNotFoundError(context));
            currentContext = Object.assign(currentContext ? {
                chain: currentContext.chain ? currentContext.chain.slice(0) : []
            } : {}, context, matches.value);
            updateChainForRoute(currentContext, matches.value);
            return Promise.resolve(resolve(currentContext)).then((resolution)=>{
                if (resolution !== null && resolution !== undefined && resolution !== notFoundResult) {
                    currentContext.result = resolution.result || resolution;
                    return currentContext;
                }
                return next(resume, parent, resolution);
            });
        }
        context.next = next;
        return Promise.resolve().then(()=>next(true, this.root)).catch((error)=>{
            const errorMessage = generateErrorMessage(currentContext);
            if (!error) error = new Error(errorMessage);
            else console.warn(errorMessage);
            error.context = error.context || currentContext;
            // DOMException has its own code which is read-only
            if (!(error instanceof DOMException)) error.code = error.code || 500;
            if (this.errorHandler) {
                currentContext.result = this.errorHandler(error);
                return currentContext;
            }
            throw error;
        });
    }
    /**
   * URL constructor polyfill hook. Creates and returns an URL instance.
   */ static __createUrl(url, base) {
        return new URL(url, base);
    }
    /**
   * If the baseUrl property is set, transforms the baseUrl and returns the full
   * actual `base` string for using in the `new URL(path, base);` and for
   * prepernding the paths with. The returned base ends with a trailing slash.
   *
   * Otherwise, returns empty string.
   */ get __effectiveBaseUrl() {
        return this.baseUrl ? this.constructor.__createUrl(this.baseUrl, document.baseURI || document.URL).href.replace(/[^\/]*$/, "") : "";
    }
    /**
   * If the baseUrl is set, matches the pathname with the router’s baseUrl,
   * and returns the local pathname with the baseUrl stripped out.
   *
   * If the pathname does not match the baseUrl, returns undefined.
   *
   * If the `baseUrl` is not set, returns the unmodified pathname argument.
   */ __normalizePathname(pathname) {
        if (!this.baseUrl) // No base URL, no need to transform the pathname.
        return pathname;
        const base = this.__effectiveBaseUrl;
        const normalizedUrl = this.constructor.__createUrl(pathname, base).href;
        if (normalizedUrl.slice(0, base.length) === base) return normalizedUrl.slice(base.length);
    }
}
Resolver.pathToRegexp = pathToRegexp_1;
/**
 * Universal Router (https://www.kriasoft.com/universal-router/)
 *
 * Copyright (c) 2015-present Kriasoft.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */ const { pathToRegexp } = Resolver;
const cache = new Map();
function cacheRoutes(routesByName, route, routes) {
    const name = route.name || route.component;
    if (name) {
        if (routesByName.has(name)) routesByName.get(name).push(route);
        else routesByName.set(name, [
            route
        ]);
    }
    if (Array.isArray(routes)) for(let i = 0; i < routes.length; i++){
        const childRoute = routes[i];
        childRoute.parent = route;
        cacheRoutes(routesByName, childRoute, childRoute.__children || childRoute.children);
    }
}
function getRouteByName(routesByName, routeName) {
    const routes = routesByName.get(routeName);
    if (routes && routes.length > 1) throw new Error(`Duplicate route with name "${routeName}".` + ` Try seting unique 'name' route properties.`);
    return routes && routes[0];
}
function getRoutePath(route) {
    let path = route.path;
    path = Array.isArray(path) ? path[0] : path;
    return path !== undefined ? path : "";
}
function generateUrls(router, options = {}) {
    if (!(router instanceof Resolver)) throw new TypeError("An instance of Resolver is expected");
    const routesByName = new Map();
    return (routeName, params)=>{
        let route = getRouteByName(routesByName, routeName);
        if (!route) {
            routesByName.clear(); // clear cache
            cacheRoutes(routesByName, router.root, router.root.__children);
            route = getRouteByName(routesByName, routeName);
            if (!route) throw new Error(`Route "${routeName}" not found`);
        }
        let regexp = cache.get(route.fullPath);
        if (!regexp) {
            let fullPath = getRoutePath(route);
            let rt = route.parent;
            while(rt){
                const path = getRoutePath(rt);
                if (path) fullPath = path.replace(/\/$/, "") + "/" + fullPath.replace(/^\//, "");
                rt = rt.parent;
            }
            const tokens = pathToRegexp.parse(fullPath);
            const toPath = pathToRegexp.tokensToFunction(tokens);
            const keys = Object.create(null);
            for(let i = 0; i < tokens.length; i++)if (!isString(tokens[i])) keys[tokens[i].name] = true;
            regexp = {
                toPath,
                keys
            };
            cache.set(fullPath, regexp);
            route.fullPath = fullPath;
        }
        let url = regexp.toPath(params, options) || "/";
        if (options.stringifyQueryParams && params) {
            const queryParams = {};
            const keys = Object.keys(params);
            for(let i = 0; i < keys.length; i++){
                const key = keys[i];
                if (!regexp.keys[key]) queryParams[key] = params[key];
            }
            const query = options.stringifyQueryParams(queryParams);
            if (query) url += query.charAt(0) === "?" ? query : `?${query}`;
        }
        return url;
    };
}
/**
 * @typedef NavigationTrigger
 * @type {object}
 * @property {function()} activate
 * @property {function()} inactivate
 */ /** @type {Array<NavigationTrigger>} */ let triggers = [];
function setNavigationTriggers(newTriggers) {
    triggers.forEach((trigger)=>trigger.inactivate());
    newTriggers.forEach((trigger)=>trigger.activate());
    triggers = newTriggers;
}
const willAnimate = (elem)=>{
    const name = getComputedStyle(elem).getPropertyValue("animation-name");
    return name && name !== "none";
};
const waitForAnimation = (elem, cb)=>{
    const listener = ()=>{
        elem.removeEventListener("animationend", listener);
        cb();
    };
    elem.addEventListener("animationend", listener);
};
function animate(elem, className) {
    elem.classList.add(className);
    return new Promise((resolve)=>{
        if (willAnimate(elem)) {
            const rect = elem.getBoundingClientRect();
            const size = `height: ${rect.bottom - rect.top}px; width: ${rect.right - rect.left}px`;
            elem.setAttribute("style", `position: absolute; ${size}`);
            waitForAnimation(elem, ()=>{
                elem.classList.remove(className);
                elem.removeAttribute("style");
                resolve();
            });
        } else {
            elem.classList.remove(className);
            resolve();
        }
    });
}
const MAX_REDIRECT_COUNT = 256;
function isResultNotEmpty(result) {
    return result !== null && result !== undefined;
}
function copyContextWithoutNext(context) {
    const copy = Object.assign({}, context);
    delete copy.next;
    return copy;
}
function createLocation({ pathname = "", search = "", hash = "", chain = [], params = {}, redirectFrom, resolver }, route) {
    const routes = chain.map((item)=>item.route);
    return {
        baseUrl: resolver && resolver.baseUrl || "",
        pathname,
        search,
        hash,
        routes,
        route: route || routes.length && routes[routes.length - 1] || null,
        params,
        redirectFrom,
        getUrl: (userParams = {})=>getPathnameForRouter(Router.pathToRegexp.compile(getMatchedPath(routes))(Object.assign({}, params, userParams)), resolver)
    };
}
function createRedirect(context, pathname) {
    const params = Object.assign({}, context.params);
    return {
        redirect: {
            pathname,
            from: context.pathname,
            params
        }
    };
}
function renderElement(context, element) {
    element.location = createLocation(context);
    const index = context.chain.map((item)=>item.route).indexOf(context.route);
    context.chain[index].element = element;
    return element;
}
function runCallbackIfPossible(callback, args, thisArg) {
    if (isFunction(callback)) return callback.apply(thisArg, args);
}
function amend(amendmentFunction, args, element) {
    return (amendmentResult)=>{
        if (amendmentResult && (amendmentResult.cancel || amendmentResult.redirect)) return amendmentResult;
        if (element) return runCallbackIfPossible(element[amendmentFunction], args, element);
    };
}
function processNewChildren(newChildren, route) {
    if (!Array.isArray(newChildren) && !isObject(newChildren)) throw new Error(log(`Incorrect "children" value for the route ${route.path}: expected array or object, but got ${newChildren}`));
    route.__children = [];
    const childRoutes = toArray(newChildren);
    for(let i = 0; i < childRoutes.length; i++){
        ensureRoute(childRoutes[i]);
        route.__children.push(childRoutes[i]);
    }
}
function removeDomNodes(nodes) {
    if (nodes && nodes.length) {
        const parent = nodes[0].parentNode;
        for(let i = 0; i < nodes.length; i++)parent.removeChild(nodes[i]);
    }
}
function getPathnameForRouter(pathname, router) {
    const base = router.__effectiveBaseUrl;
    return base ? router.constructor.__createUrl(pathname.replace(/^\//, ""), base).pathname : pathname;
}
function getMatchedPath(chain) {
    return chain.map((item)=>item.path).reduce((a, b)=>{
        if (b.length) return a.replace(/\/$/, "") + "/" + b.replace(/^\//, "");
        return a;
    }, "");
}
/**
 * A simple client-side router for single-page applications. It uses
 * express-style middleware and has a first-class support for Web Components and
 * lazy-loading. Works great in Polymer and non-Polymer apps.
 *
 * Use `new Router(outlet, options)` to create a new Router instance.
 *
 * * The `outlet` parameter is a reference to the DOM node to render
 *   the content into.
 *
 * * The `options` parameter is an optional object with options. The following
 *   keys are supported:
 *   * `baseUrl` — the initial value for [
 *     the `baseUrl` property
 *   ](#/classes/Router#property-baseUrl)
 *
 * The Router instance is automatically subscribed to navigation events
 * on `window`.
 *
 * See [Live Examples](#/classes/Router/demos/demo/index.html) for the detailed usage demo and code snippets.
 *
 * See also detailed API docs for the following methods, for the advanced usage:
 *
 * * [setOutlet](#/classes/Router#method-setOutlet) – should be used to configure the outlet.
 * * [setTriggers](#/classes/Router#method-setTriggers) – should be used to configure the navigation events.
 * * [setRoutes](#/classes/Router#method-setRoutes) – should be used to configure the routes.
 *
 * Only `setRoutes` has to be called manually, others are automatically invoked when creating a new instance.
 *
 * @extends Resolver
 * @demo demo/index.html
 * @summary JavaScript class that renders different DOM content depending on
 *    a given path. It can re-render when triggered or automatically on
 *    'popstate' and / or 'click' events.
 */ class Router extends Resolver {
    /**
   * Creates a new Router instance with a given outlet, and
   * automatically subscribes it to navigation events on the `window`.
   * Using a constructor argument or a setter for outlet is equivalent:
   *
   * ```
   * const router = new Router();
   * router.setOutlet(outlet);
   * ```
   * @param {?Node=} outlet
   * @param {?RouterOptions=} options
   */ constructor(outlet, options){
        const baseElement = document.head.querySelector("base");
        const baseHref = baseElement && baseElement.getAttribute("href");
        super([], Object.assign({
            // Default options
            baseUrl: baseHref && Resolver.__createUrl(baseHref, document.URL).pathname.replace(/[^\/]*$/, "")
        }, options));
        this.resolveRoute = (context)=>this.__resolveRoute(context);
        const triggers = Router.NavigationTrigger;
        Router.setTriggers.apply(Router, Object.keys(triggers).map((key)=>triggers[key]));
        /**
     * The base URL for all routes in the router instance. By default,
     * if the base element exists in the `<head>`, vaadin-router
     * takes the `<base href>` attribute value, resolves against current `document.URL`
     * and gets the `pathname` from the result.
     *
     * @public
     * @type {string}
     */ this.baseUrl;
        /**
     * A promise that is settled after the current render cycle completes. If
     * there is no render cycle in progress the promise is immediately settled
     * with the last render cycle result.
     *
     * @public
     * @type {!Promise<!RouterLocation>}
     */ this.ready;
        this.ready = Promise.resolve(outlet);
        /**
     * Contains read-only information about the current router location:
     * pathname, active routes, parameters. See the
     * [Location type declaration](#/classes/RouterLocation)
     * for more details.
     *
     * @public
     * @type {!RouterLocation}
     */ this.location;
        this.location = createLocation({
            resolver: this
        });
        this.__lastStartedRenderId = 0;
        this.__navigationEventHandler = this.__onNavigationEvent.bind(this);
        this.setOutlet(outlet);
        this.subscribe();
        // Using WeakMap instead of WeakSet because WeakSet is not supported by IE11
        this.__createdByRouter = new WeakMap();
        this.__addedByRouter = new WeakMap();
    }
    __resolveRoute(context) {
        const route = context.route;
        let callbacks = Promise.resolve();
        if (isFunction(route.children)) callbacks = callbacks.then(()=>route.children(copyContextWithoutNext(context))).then((children)=>{
            // The route.children() callback might have re-written the
            // route.children property instead of returning a value
            if (!isResultNotEmpty(children) && !isFunction(route.children)) children = route.children;
            processNewChildren(children, route);
        });
        const commands = {
            redirect: (path)=>createRedirect(context, path),
            component: (component)=>{
                const element = document.createElement(component);
                this.__createdByRouter.set(element, true);
                return element;
            }
        };
        return callbacks.then(()=>{
            if (this.__isLatestRender(context)) return runCallbackIfPossible(route.action, [
                context,
                commands
            ], route);
        }).then((result)=>{
            if (isResultNotEmpty(result)) {
                // Actions like `() => import('my-view.js')` are not expected to
                // end the resolution, despite the result is not empty. Checking
                // the result with a whitelist of values that end the resolution.
                if (result instanceof HTMLElement || result.redirect || result === notFoundResult) return result;
            }
            if (isString(route.redirect)) return commands.redirect(route.redirect);
            if (route.bundle) return loadBundle(route.bundle).then(()=>{}, ()=>{
                throw new Error(log(`Bundle not found: ${route.bundle}. Check if the file name is correct`));
            });
        }).then((result)=>{
            if (isResultNotEmpty(result)) return result;
            if (isString(route.component)) return commands.component(route.component);
        });
    }
    /**
   * Sets the router outlet (the DOM node where the content for the current
   * route is inserted). Any content pre-existing in the router outlet is
   * removed at the end of each render pass.
   *
   * NOTE: this method is automatically invoked first time when creating a new Router instance.
   *
   * @param {?Node} outlet the DOM node where the content for the current route
   *     is inserted.
   */ setOutlet(outlet) {
        if (outlet) this.__ensureOutlet(outlet);
        this.__outlet = outlet;
    }
    /**
   * Returns the current router outlet. The initial value is `undefined`.
   *
   * @return {?Node} the current router outlet (or `undefined`)
   */ getOutlet() {
        return this.__outlet;
    }
    /**
   * Sets the routing config (replacing the existing one) and triggers a
   * navigation event so that the router outlet is refreshed according to the
   * current `window.location` and the new routing config.
   *
   * Each route object may have the following properties, listed here in the processing order:
   * * `path` – the route path (relative to the parent route if any) in the
   * [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
   *
   * * `children` – an array of nested routes or a function that provides this
   * array at the render time. The function can be synchronous or asynchronous:
   * in the latter case the render is delayed until the returned promise is
   * resolved. The `children` function is executed every time when this route is
   * being rendered. This allows for dynamic route structures (e.g. backend-defined),
   * but it might have a performance impact as well. In order to avoid calling
   * the function on subsequent renders, you can override the `children` property
   * of the route object and save the calculated array there
   * (via `context.route.children = [ route1, route2, ...];`).
   * Parent routes are fully resolved before resolving the children. Children
   * 'path' values are relative to the parent ones.
   *
   * * `action` – the action that is executed before the route is resolved.
   * The value for this property should be a function, accepting `context`
   * and `commands` parameters described below. If present, this function is
   * always invoked first, disregarding of the other properties' presence.
   * The action can return a result directly or within a `Promise`, which
   * resolves to the result. If the action result is an `HTMLElement` instance,
   * a `commands.component(name)` result, a `commands.redirect(path)` result,
   * or a `context.next()` result, the current route resolution is finished,
   * and other route config properties are ignored.
   * See also **Route Actions** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `redirect` – other route's path to redirect to. Passes all route parameters to the redirect target.
   * The target route should also be defined.
   * See also **Redirects** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `bundle` – string containing the path to `.js` or `.mjs` bundle to load before resolving the route,
   * or the object with "module" and "nomodule" keys referring to different bundles.
   * Each bundle is only loaded once. If "module" and "nomodule" are set, only one bundle is loaded,
   * depending on whether the browser supports ES modules or not.
   * The property is ignored when either an `action` returns the result or `redirect` property is present.
   * Any error, e.g. 404 while loading bundle will cause route resolution to throw.
   * See also **Code Splitting** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `component` – the tag name of the Web Component to resolve the route to.
   * The property is ignored when either an `action` returns the result or `redirect` property is present.
   * If route contains the `component` property (or an action that return a component)
   * and its child route also contains the `component` property, child route's component
   * will be rendered as a light dom child of a parent component.
   *
   * * `name` – the string name of the route to use in the
   * [`router.urlForName(name, params)`](#/classes/Router#method-urlForName)
   * navigation helper method.
   *
   * For any route function (`action`, `children`) defined, the corresponding `route` object is available inside the callback
   * through the `this` reference. If you need to access it, make sure you define the callback as a non-arrow function
   * because arrow functions do not have their own `this` reference.
   *
   * `context` object that is passed to `action` function holds the following properties:
   * * `context.pathname` – string with the pathname being resolved
   *
   * * `context.search` – search query string
   *
   * * `context.hash` – hash string
   *
   * * `context.params` – object with route parameters
   *
   * * `context.route` – object that holds the route that is currently being rendered.
   *
   * * `context.next()` – function for asynchronously getting the next route
   * contents from the resolution chain (if any)
   *
   * `commands` object that is passed to `action` function has
   * the following methods:
   *
   * * `commands.redirect(path)` – function that creates a redirect data
   * for the path specified.
   *
   * * `commands.component(component)` – function that creates a new HTMLElement
   * with current context. Note: the component created by this function is reused if visiting the same path twice in row.
   *
   *
   * @param {!Array<!Route>|!Route} routes a single route or an array of those
   * @param {?boolean} skipRender configure the router but skip rendering the
   *     route corresponding to the current `window.location` values
   *
   * @return {!Promise<!Node>}
   */ setRoutes(routes, skipRender = false) {
        this.__previousContext = undefined;
        this.__urlForName = undefined;
        super.setRoutes(routes);
        if (!skipRender) this.__onNavigationEvent();
        return this.ready;
    }
    /**
   * Asynchronously resolves the given pathname and renders the resolved route
   * component into the router outlet. If no router outlet is set at the time of
   * calling this method, or at the time when the route resolution is completed,
   * a `TypeError` is thrown.
   *
   * Returns a promise that is fulfilled with the router outlet DOM Node after
   * the route component is created and inserted into the router outlet, or
   * rejected if no route matches the given path.
   *
   * If another render pass is started before the previous one is completed, the
   * result of the previous render pass is ignored.
   *
   * @param {!string|!{pathname: !string, search: ?string, hash: ?string}} pathnameOrContext
   *    the pathname to render or a context object with a `pathname` property,
   *    optional `search` and `hash` properties, and other properties
   *    to pass to the resolver.
   * @param {boolean=} shouldUpdateHistory
   *    update browser history with the rendered location
   * @return {!Promise<!Node>}
   */ render(pathnameOrContext, shouldUpdateHistory) {
        const renderId = ++this.__lastStartedRenderId;
        const context = Object.assign({
            search: "",
            hash: ""
        }, isString(pathnameOrContext) ? {
            pathname: pathnameOrContext
        } : pathnameOrContext, {
            __renderId: renderId
        });
        // Find the first route that resolves to a non-empty result
        this.ready = this.resolve(context)// Process the result of this.resolve() and handle all special commands:
        // (redirect / prevent / component). If the result is a 'component',
        // then go deeper and build the entire chain of nested components matching
        // the pathname. Also call all 'on before' callbacks along the way.
        .then((context)=>this.__fullyResolveChain(context)).then((context)=>{
            if (this.__isLatestRender(context)) {
                const previousContext = this.__previousContext;
                // Check if the render was prevented and make an early return in that case
                if (context === previousContext) {
                    // Replace the history with the previous context
                    // to make sure the URL stays the same.
                    this.__updateBrowserHistory(previousContext, true);
                    return this.location;
                }
                this.location = createLocation(context);
                if (shouldUpdateHistory) // Replace only if first render redirects, so that we don’t leave
                // the redirecting record in the history
                this.__updateBrowserHistory(context, renderId === 1);
                fireRouterEvent("location-changed", {
                    router: this,
                    location: this.location
                });
                // Skip detaching/re-attaching there are no render changes
                if (context.__skipAttach) {
                    this.__copyUnchangedElements(context, previousContext);
                    this.__previousContext = context;
                    return this.location;
                }
                this.__addAppearingContent(context, previousContext);
                const animationDone = this.__animateIfNeeded(context);
                this.__runOnAfterEnterCallbacks(context);
                this.__runOnAfterLeaveCallbacks(context, previousContext);
                return animationDone.then(()=>{
                    if (this.__isLatestRender(context)) {
                        // If there is another render pass started after this one,
                        // the 'disappearing content' would be removed when the other
                        // render pass calls `this.__addAppearingContent()`
                        this.__removeDisappearingContent();
                        this.__previousContext = context;
                        return this.location;
                    }
                });
            }
        }).catch((error)=>{
            if (renderId === this.__lastStartedRenderId) {
                if (shouldUpdateHistory) this.__updateBrowserHistory(context);
                removeDomNodes(this.__outlet && this.__outlet.children);
                this.location = createLocation(Object.assign(context, {
                    resolver: this
                }));
                fireRouterEvent("error", Object.assign({
                    router: this,
                    error
                }, context));
                throw error;
            }
        });
        return this.ready;
    }
    // `topOfTheChainContextBeforeRedirects` is a context coming from Resolver.resolve().
    // It would contain a 'redirect' route or the first 'component' route that
    // matched the pathname. There might be more child 'component' routes to be
    // resolved and added into the chain. This method would find and add them.
    // `contextBeforeRedirects` is the context containing such a child component
    // route. It's only necessary when this method is called recursively (otherwise
    // it's the same as the 'top of the chain' context).
    //
    // Apart from building the chain of child components, this method would also
    // handle 'redirect' routes, call 'onBefore' callbacks and handle 'prevent'
    // and 'redirect' callback results.
    __fullyResolveChain(topOfTheChainContextBeforeRedirects, contextBeforeRedirects = topOfTheChainContextBeforeRedirects) {
        return this.__findComponentContextAfterAllRedirects(contextBeforeRedirects)// `contextAfterRedirects` is always a context with an `HTMLElement` result
        // In other cases the promise gets rejected and .then() is not called
        .then((contextAfterRedirects)=>{
            const redirectsHappened = contextAfterRedirects !== contextBeforeRedirects;
            const topOfTheChainContextAfterRedirects = redirectsHappened ? contextAfterRedirects : topOfTheChainContextBeforeRedirects;
            const matchedPath = getPathnameForRouter(getMatchedPath(contextAfterRedirects.chain), contextAfterRedirects.resolver);
            const isFound = matchedPath === contextAfterRedirects.pathname;
            // Recursive method to try matching more child and sibling routes
            const findNextContextIfAny = (context, parent = context.route, prevResult)=>{
                return context.next(undefined, parent, prevResult).then((nextContext)=>{
                    if (nextContext === null || nextContext === notFoundResult) {
                        // Next context is not found in children, ...
                        if (isFound) // ...but original context is already fully matching - use it
                        return context;
                        else if (parent.parent !== null) // ...and there is no full match yet - step up to check siblings
                        return findNextContextIfAny(context, parent.parent, nextContext);
                        else return nextContext;
                    }
                    return nextContext;
                });
            };
            return findNextContextIfAny(contextAfterRedirects).then((nextContext)=>{
                if (nextContext === null || nextContext === notFoundResult) throw getNotFoundError(topOfTheChainContextAfterRedirects);
                return nextContext && nextContext !== notFoundResult && nextContext !== contextAfterRedirects ? this.__fullyResolveChain(topOfTheChainContextAfterRedirects, nextContext) : this.__amendWithOnBeforeCallbacks(contextAfterRedirects);
            });
        });
    }
    __findComponentContextAfterAllRedirects(context) {
        const result = context.result;
        if (result instanceof HTMLElement) {
            renderElement(context, result);
            return Promise.resolve(context);
        } else if (result.redirect) return this.__redirect(result.redirect, context.__redirectCount, context.__renderId).then((context)=>this.__findComponentContextAfterAllRedirects(context));
        else if (result instanceof Error) return Promise.reject(result);
        else return Promise.reject(new Error(log(`Invalid route resolution result for path "${context.pathname}". ` + `Expected redirect object or HTML element, but got: "${logValue(result)}". ` + `Double check the action return value for the route.`)));
    }
    __amendWithOnBeforeCallbacks(contextWithFullChain) {
        return this.__runOnBeforeCallbacks(contextWithFullChain).then((amendedContext)=>{
            if (amendedContext === this.__previousContext || amendedContext === contextWithFullChain) return amendedContext;
            return this.__fullyResolveChain(amendedContext);
        });
    }
    __runOnBeforeCallbacks(newContext) {
        const previousContext = this.__previousContext || {};
        const previousChain = previousContext.chain || [];
        const newChain = newContext.chain;
        let callbacks = Promise.resolve();
        const prevent = ()=>({
                cancel: true
            });
        const redirect = (pathname)=>createRedirect(newContext, pathname);
        newContext.__divergedChainIndex = 0;
        newContext.__skipAttach = false;
        if (previousChain.length) {
            for(let i = 0; i < Math.min(previousChain.length, newChain.length); i = ++newContext.__divergedChainIndex){
                if (previousChain[i].route !== newChain[i].route || previousChain[i].path !== newChain[i].path && previousChain[i].element !== newChain[i].element || !this.__isReusableElement(previousChain[i].element, newChain[i].element)) break;
            }
            // Skip re-attaching and notifications if element and chain do not change
            newContext.__skipAttach = // Same route chain
            newChain.length === previousChain.length && newContext.__divergedChainIndex == newChain.length && // Same element
            this.__isReusableElement(newContext.result, previousContext.result);
            if (newContext.__skipAttach) {
                // execute onBeforeLeave for changed segment element when skipping attach
                for(let i = newChain.length - 1; i >= 0; i--)callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, {
                    prevent
                }, previousChain[i]);
                // execute onBeforeEnter for changed segment element when skipping attach
                for(let i = 0; i < newChain.length; i++){
                    callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, {
                        prevent,
                        redirect
                    }, newChain[i]);
                    previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
                }
            } else // execute onBeforeLeave when NOT skipping attach
            for(let i = previousChain.length - 1; i >= newContext.__divergedChainIndex; i--)callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, {
                prevent
            }, previousChain[i]);
        }
        // execute onBeforeEnter when NOT skipping attach
        if (!newContext.__skipAttach) for(let i = 0; i < newChain.length; i++){
            if (i < newContext.__divergedChainIndex) {
                if (i < previousChain.length && previousChain[i].element) previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
            } else {
                callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, {
                    prevent,
                    redirect
                }, newChain[i]);
                if (newChain[i].element) newChain[i].element.location = createLocation(newContext, newChain[i].route);
            }
        }
        return callbacks.then((amendmentResult)=>{
            if (amendmentResult) {
                if (amendmentResult.cancel) {
                    this.__previousContext.__renderId = newContext.__renderId;
                    return this.__previousContext;
                }
                if (amendmentResult.redirect) return this.__redirect(amendmentResult.redirect, newContext.__redirectCount, newContext.__renderId);
            }
            return newContext;
        });
    }
    __runOnBeforeLeaveCallbacks(callbacks, newContext, commands, chainElement) {
        const location = createLocation(newContext);
        return callbacks.then((result)=>{
            if (this.__isLatestRender(newContext)) {
                const afterLeaveFunction = amend("onBeforeLeave", [
                    location,
                    commands,
                    this
                ], chainElement.element);
                return afterLeaveFunction(result);
            }
        }).then((result)=>{
            if (!(result || {}).redirect) return result;
        });
    }
    __runOnBeforeEnterCallbacks(callbacks, newContext, commands, chainElement) {
        const location = createLocation(newContext, chainElement.route);
        return callbacks.then((result)=>{
            if (this.__isLatestRender(newContext)) {
                const beforeEnterFunction = amend("onBeforeEnter", [
                    location,
                    commands,
                    this
                ], chainElement.element);
                return beforeEnterFunction(result);
            }
        });
    }
    __isReusableElement(element, otherElement) {
        if (element && otherElement) return this.__createdByRouter.get(element) && this.__createdByRouter.get(otherElement) ? element.localName === otherElement.localName : element === otherElement;
        return false;
    }
    __isLatestRender(context) {
        return context.__renderId === this.__lastStartedRenderId;
    }
    __redirect(redirectData, counter, renderId) {
        if (counter > MAX_REDIRECT_COUNT) throw new Error(log(`Too many redirects when rendering ${redirectData.from}`));
        return this.resolve({
            pathname: this.urlForPath(redirectData.pathname, redirectData.params),
            redirectFrom: redirectData.from,
            __redirectCount: (counter || 0) + 1,
            __renderId: renderId
        });
    }
    __ensureOutlet(outlet = this.__outlet) {
        if (!(outlet instanceof Node)) throw new TypeError(log(`Expected router outlet to be a valid DOM Node (but got ${outlet})`));
    }
    __updateBrowserHistory({ pathname, search = "", hash = "" }, replace) {
        if (window.location.pathname !== pathname || window.location.search !== search || window.location.hash !== hash) {
            const changeState = replace ? "replaceState" : "pushState";
            window.history[changeState](null, document.title, pathname + search + hash);
            window.dispatchEvent(new PopStateEvent("popstate", {
                state: "vaadin-router-ignore"
            }));
        }
    }
    __copyUnchangedElements(context, previousContext) {
        // Find the deepest common parent between the last and the new component
        // chains. Update references for the unchanged elements in the new chain
        let deepestCommonParent = this.__outlet;
        for(let i = 0; i < context.__divergedChainIndex; i++){
            const unchangedElement = previousContext && previousContext.chain[i].element;
            if (unchangedElement) {
                if (unchangedElement.parentNode === deepestCommonParent) {
                    context.chain[i].element = unchangedElement;
                    deepestCommonParent = unchangedElement;
                } else break;
            }
        }
        return deepestCommonParent;
    }
    __addAppearingContent(context, previousContext) {
        this.__ensureOutlet();
        // If the previous 'entering' animation has not completed yet,
        // stop it and remove that content from the DOM before adding new one.
        this.__removeAppearingContent();
        // Copy reusable elements from the previousContext to current
        const deepestCommonParent = this.__copyUnchangedElements(context, previousContext);
        // Keep two lists of DOM elements:
        //  - those that should be removed once the transition animation is over
        //  - and those that should remain
        this.__appearingContent = [];
        this.__disappearingContent = Array.from(deepestCommonParent.children).filter(// Only remove layout content that was added by router
        (e)=>this.__addedByRouter.get(e) && // Do not remove the result element to avoid flickering
            e !== context.result);
        // Add new elements (starting after the deepest common parent) to the DOM.
        // That way only the components that are actually different between the two
        // locations are added to the DOM (and those that are common remain in the
        // DOM without first removing and then adding them again).
        let parentElement = deepestCommonParent;
        for(let i = context.__divergedChainIndex; i < context.chain.length; i++){
            const elementToAdd = context.chain[i].element;
            if (elementToAdd) {
                parentElement.appendChild(elementToAdd);
                this.__addedByRouter.set(elementToAdd, true);
                if (parentElement === deepestCommonParent) this.__appearingContent.push(elementToAdd);
                parentElement = elementToAdd;
            }
        }
    }
    __removeDisappearingContent() {
        if (this.__disappearingContent) removeDomNodes(this.__disappearingContent);
        this.__disappearingContent = null;
        this.__appearingContent = null;
    }
    __removeAppearingContent() {
        if (this.__disappearingContent && this.__appearingContent) {
            removeDomNodes(this.__appearingContent);
            this.__disappearingContent = null;
            this.__appearingContent = null;
        }
    }
    __runOnAfterLeaveCallbacks(currentContext, targetContext) {
        if (!targetContext) return;
        // REVERSE iteration: from Z to A
        for(let i = targetContext.chain.length - 1; i >= currentContext.__divergedChainIndex; i--){
            if (!this.__isLatestRender(currentContext)) break;
            const currentComponent = targetContext.chain[i].element;
            if (!currentComponent) continue;
            try {
                const location = createLocation(currentContext);
                runCallbackIfPossible(currentComponent.onAfterLeave, [
                    location,
                    {},
                    targetContext.resolver
                ], currentComponent);
            } finally{
                if (this.__disappearingContent.indexOf(currentComponent) > -1) removeDomNodes(currentComponent.children);
            }
        }
    }
    __runOnAfterEnterCallbacks(currentContext) {
        // forward iteration: from A to Z
        for(let i = currentContext.__divergedChainIndex; i < currentContext.chain.length; i++){
            if (!this.__isLatestRender(currentContext)) break;
            const currentComponent = currentContext.chain[i].element || {};
            const location = createLocation(currentContext, currentContext.chain[i].route);
            runCallbackIfPossible(currentComponent.onAfterEnter, [
                location,
                {},
                currentContext.resolver
            ], currentComponent);
        }
    }
    __animateIfNeeded(context) {
        const from = (this.__disappearingContent || [])[0];
        const to = (this.__appearingContent || [])[0];
        const promises = [];
        const chain = context.chain;
        let config;
        for(let i = chain.length; i > 0; i--)if (chain[i - 1].route.animate) {
            config = chain[i - 1].route.animate;
            break;
        }
        if (from && to && config) {
            const leave = isObject(config) && config.leave || "leaving";
            const enter = isObject(config) && config.enter || "entering";
            promises.push(animate(from, leave));
            promises.push(animate(to, enter));
        }
        return Promise.all(promises).then(()=>context);
    }
    /**
   * Subscribes this instance to navigation events on the `window`.
   *
   * NOTE: beware of resource leaks. For as long as a router instance is
   * subscribed to navigation events, it won't be garbage collected.
   */ subscribe() {
        window.addEventListener("vaadin-router-go", this.__navigationEventHandler);
    }
    /**
   * Removes the subscription to navigation events created in the `subscribe()`
   * method.
   */ unsubscribe() {
        window.removeEventListener("vaadin-router-go", this.__navigationEventHandler);
    }
    __onNavigationEvent(event) {
        const { pathname, search, hash } = event ? event.detail : window.location;
        if (isString(this.__normalizePathname(pathname))) {
            if (event && event.preventDefault) event.preventDefault();
            this.render({
                pathname,
                search,
                hash
            }, true);
        }
    }
    /**
   * Configures what triggers Router navigation events:
   *  - `POPSTATE`: popstate events on the current `window`
   *  - `CLICK`: click events on `<a>` links leading to the current page
   *
   * This method is invoked with the pre-configured values when creating a new Router instance.
   * By default, both `POPSTATE` and `CLICK` are enabled. This setup is expected to cover most of the use cases.
   *
   * See the `router-config.js` for the default navigation triggers config. Based on it, you can
   * create the own one and only import the triggers you need, instead of pulling in all the code,
   * e.g. if you want to handle `click` differently.
   *
   * See also **Navigation Triggers** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * @param {...NavigationTrigger} triggers
   */ static setTriggers(...triggers) {
        setNavigationTriggers(triggers);
    }
    /**
   * Generates a URL for the route with the given name, optionally performing
   * substitution of parameters.
   *
   * The route is searched in all the Router instances subscribed to
   * navigation events.
   *
   * **Note:** For child route names, only array children are considered.
   * It is not possible to generate URLs using a name for routes set with
   * a children function.
   *
   * @function urlForName
   * @param {!string} name the route name or the route’s `component` name.
   * @param {Params=} params Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   *
   * @return {string}
   */ urlForName(name, params) {
        if (!this.__urlForName) this.__urlForName = generateUrls(this);
        return getPathnameForRouter(this.__urlForName(name, params), this);
    }
    /**
   * Generates a URL for the given route path, optionally performing
   * substitution of parameters.
   *
   * @param {!string} path string route path declared in [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
   * @param {Params=} params Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   *
   * @return {string}
   */ urlForPath(path, params) {
        return getPathnameForRouter(Router.pathToRegexp.compile(path)(params), this);
    }
    /**
   * Triggers navigation to a new path. Returns a boolean without waiting until
   * the navigation is complete. Returns `true` if at least one `Router`
   * has handled the navigation (was subscribed and had `baseUrl` matching
   * the `path` argument), otherwise returns `false`.
   *
   * @param {!string|!{pathname: !string, search: (string|undefined), hash: (string|undefined)}} path
   *   a new in-app path string, or an URL-like object with `pathname`
   *   string property, and optional `search` and `hash` string properties.
   * @return {boolean}
   */ static go(path) {
        const { pathname, search, hash } = isString(path) ? this.__createUrl(path, "http://a") // some base to omit origin
         : path;
        return fireRouterEvent("go", {
            pathname,
            search,
            hash
        });
    }
}
const DEV_MODE_CODE_REGEXP = /\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;
const FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;
function isMinified() {
    function test() {
        /** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/ return true;
    }
    return uncommentAndRun(test);
}
function isDevelopmentMode() {
    try {
        if (isForcedDevelopmentMode()) return true;
        if (!isLocalhost()) return false;
        if (FlowClients) return !isFlowProductionMode();
        return !isMinified();
    } catch (e) {
        // Some error in this code, assume production so no further actions will be taken
        return false;
    }
}
function isForcedDevelopmentMode() {
    return localStorage.getItem("vaadin.developmentmode.force");
}
function isLocalhost() {
    return [
        "localhost",
        "127.0.0.1"
    ].indexOf(window.location.hostname) >= 0;
}
function isFlowProductionMode() {
    if (FlowClients) {
        const productionModeApps = Object.keys(FlowClients).map((key)=>FlowClients[key]).filter((client)=>client.productionMode);
        if (productionModeApps.length > 0) return true;
    }
    return false;
}
function uncommentAndRun(callback, args) {
    if (typeof callback !== "function") return;
    const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());
    if (match) try {
        // requires CSP: script-src 'unsafe-eval'
        callback = new Function(match[1]);
    } catch (e) {
        // eat the exception
        console.log("vaadin-development-mode-detector: uncommentAndRun() failed", e);
    }
    return callback(args);
}
// A guard against polymer-modulizer removing the window.Vaadin
// initialization above.
window["Vaadin"] = window["Vaadin"] || {};
/**
 * Inspects the source code of the given `callback` function for
 * specially-marked _commented_ code. If such commented code is found in the
 * callback source, uncomments and runs that code instead of the callback
 * itself. Otherwise runs the callback as is.
 *
 * The optional arguments are passed into the callback / uncommented code,
 * the result is returned.
 *
 * See the `isMinified()` function source code in this file for an example.
 *
 */ const runIfDevelopmentMode = function(callback, args) {
    if (window.Vaadin.developmentMode) return uncommentAndRun(callback, args);
};
if (window.Vaadin.developmentMode === undefined) window.Vaadin.developmentMode = isDevelopmentMode();
/* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */ function maybeGatherAndSendStats() {
/** vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/ }
const usageStatistics = function() {
    if (typeof runIfDevelopmentMode === "function") return runIfDevelopmentMode(maybeGatherAndSendStats);
};
window.Vaadin = window.Vaadin || {};
window.Vaadin.registrations = window.Vaadin.registrations || [];
window.Vaadin.registrations.push({
    is: "@vaadin/router",
    version: "1.7.4"
});
usageStatistics();
Router.NavigationTrigger = {
    POPSTATE,
    CLICK
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"5kx2K":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"9g6aF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RootPageCustomer);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _lit = require("lit");
var _decorators = require("lit/decorators");
var _task = require("@lit-labs/task");
var _axiosInstance = require("../../httpClient/axiosInstance");
var _axiosInstanceDefault = parcelHelpers.interopDefault(_axiosInstance);
var _table = require("./subComps/table");
var _tableDefault = parcelHelpers.interopDefault(_table);
if (!customElements.get("table-component-customer")) customElements.define("table-component-customer", (0, _tableDefault.default));
let RootPageCustomer = class RootPageCustomer extends (0, _lit.LitElement) {
    createRenderRoot() {
        return this;
    }
    render() {
        return (0, _lit.html)`
      <div class="container">
        <div class="row justify-content-center">
          ${this._FetchTables.render({
            pending: ()=>(0, _lit.html)`Loading...`,
            error: (err)=>(0, _lit.html)`Error: ${err}`,
            complete: (data)=>(0, _lit.html)`
              ${data.tablesWithBarcode.map((table)=>{
                    return (0, _lit.html)`<div class="col-12 col-md-6 col-lg-4 mb-4">
                  <table-component-customer
                    tableNumber=${table.table_number}
                    ?tableactive=${table.active}
                    barcode=${table.barcode}
                  ></table-component-customer>
                </div>`;
                })}
            `
        })}
        </div>
      </div>
    `;
    }
    constructor(...args){
        super(...args);
        this.title = "Customer";
        this.PageID = sessionStorage.getItem("page") || "1";
        this._FetchTables = new (0, _task.Task)(this, async ([page])=>{
            const res = await (0, _axiosInstanceDefault.default).get(`/tables/${page}`);
            return res.data;
        }, ()=>[
                this.PageID
            ]);
    }
};
(0, _tsDecorate._)([
    (0, _decorators.property)({
        type: String
    })
], RootPageCustomer.prototype, "title", void 0);
(0, _tsDecorate._)([
    (0, _decorators.state)()
], RootPageCustomer.prototype, "PageID", void 0);
RootPageCustomer = (0, _tsDecorate._)([
    (0, _decorators.customElement)("root-page-customer")
], RootPageCustomer);

},{"@swc/helpers/_/_ts_decorate":"iH05j","lit":"4antt","lit/decorators":"bCPKi","@lit-labs/task":"7tGqI","../../httpClient/axiosInstance":"aIY2w","./subComps/table":"9QBK6","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"iH05j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", ()=>(0, _tslib.__decorate));
parcelHelpers.export(exports, "_ts_decorate", ()=>(0, _tslib.__decorate));
var _tslib = require("tslib");

},{"tslib":"ktyYm","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"ktyYm":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
parcelHelpers.export(exports, "__addDisposableResource", ()=>__addDisposableResource);
parcelHelpers.export(exports, "__disposeResources", ()=>__disposeResources);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
exports.default = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"4antt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
var _litElementJs = require("lit-element/lit-element.js");
parcelHelpers.exportAll(_litElementJs, exports);
var _isServerJs = require("lit-html/is-server.js");
parcelHelpers.exportAll(_isServerJs, exports);

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","lit-element/lit-element.js":"9YxkX","lit-html/is-server.js":"e2OXP","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"hypet":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>(0, _cssTagJs.CSSResult));
parcelHelpers.export(exports, "adoptStyles", ()=>(0, _cssTagJs.adoptStyles));
parcelHelpers.export(exports, "css", ()=>(0, _cssTagJs.css));
parcelHelpers.export(exports, "getCompatibleStyle", ()=>(0, _cssTagJs.getCompatibleStyle));
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>(0, _cssTagJs.supportsAdoptingStyleSheets));
parcelHelpers.export(exports, "unsafeCSS", ()=>(0, _cssTagJs.unsafeCSS));
parcelHelpers.export(exports, "ReactiveElement", ()=>u);
parcelHelpers.export(exports, "defaultConverter", ()=>n);
parcelHelpers.export(exports, "notEqual", ()=>a);
var _cssTagJs = require("./css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var s;
const e = window, r = e.trustedTypes, h = r ? r.emptyScript : "", o = e.reactiveElementPolyfillSupport, n = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t) {
                    s = null;
                }
        }
        return s;
    }
}, a = (t, i)=>i !== t && (i == i || t == t), l = {
    attribute: !0,
    type: String,
    converter: n,
    reflect: !1,
    hasChanged: a
}, d = "finalized";
class u extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
    }
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || l;
    }
    static finalize() {
        if (this.hasOwnProperty(d)) return !1;
        this[d] = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), void 0 !== t.h && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s of i)this.createProperty(s, t[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i of e)s.unshift((0, _cssTagJs.getCompatibleStyle)(i));
        } else void 0 !== i && s.push((0, _cssTagJs.getCompatibleStyle)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    u() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, _cssTagJs.adoptStyles)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : n).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : n;
            this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || a)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t) {
            throw i = !1, this._$Ek(), t;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
u[d] = !0, u.elementProperties = new Map, u.elementStyles = [], u.shadowRootOptions = {
    mode: "open"
}, null == o || o({
    ReactiveElement: u
}), (null !== (s = e.reactiveElementVersions) && void 0 !== s ? s : e.reactiveElementVersions = []).push("1.6.2");

},{"./css-tag.js":"gkZsf","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"gkZsf":[function(require,module,exports) {
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>o);
parcelHelpers.export(exports, "adoptStyles", ()=>S);
parcelHelpers.export(exports, "css", ()=>i);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>c);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>e);
parcelHelpers.export(exports, "unsafeCSS", ()=>r);
const t = window, e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = Symbol(), n = new WeakMap;
class o {
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if (e && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const r = (t)=>new o("string" == typeof t ? t : t + "", void 0, s), i = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new o(n, t, s);
}, S = (s, n)=>{
    e ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, c = e ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return r(e);
    })(t) : t;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"1cmQt":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>Z);
parcelHelpers.export(exports, "html", ()=>x);
parcelHelpers.export(exports, "noChange", ()=>T);
parcelHelpers.export(exports, "nothing", ()=>A);
parcelHelpers.export(exports, "render", ()=>B);
parcelHelpers.export(exports, "svg", ()=>b);
var t;
const i = window, s = i.trustedTypes, e = s ? s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, o = "$lit$", n = `lit$${(Math.random() + "").slice(9)}$`, l = "?" + n, h = `<${l}>`, r = document, d = ()=>r.createComment(""), u = (t)=>null === t || "object" != typeof t && "function" != typeof t, c = Array.isArray, v = (t)=>c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), a = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y = /^(?:script|style|textarea|title)$/i, w = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), x = w(1), b = w(2), T = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), E = new WeakMap, C = r.createTreeWalker(r, 129, null, !1), P = (t, i)=>{
    const s = t.length - 1, l = [];
    let r, d = 2 === i ? "<svg>" : "", u = f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let e, c, v = -1, a = 0;
        for(; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);)a = u.lastIndex, u === f ? "!--" === c[1] ? u = _ : void 0 !== c[1] ? u = m : void 0 !== c[2] ? (y.test(c[2]) && (r = RegExp("</" + c[2], "g")), u = p) : void 0 !== c[3] && (u = p) : u === p ? ">" === c[0] ? (u = null != r ? r : f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, e = c[1], u = void 0 === c[3] ? p : '"' === c[3] ? $ : g) : u === $ || u === g ? u = p : u === _ || u === m ? u = f : (u = p, r = void 0);
        const w = u === p && t[i + 1].startsWith("/>") ? " " : "";
        d += u === f ? s + h : v >= 0 ? (l.push(e), s.slice(0, v) + o + s.slice(v) + n + w) : s + n + (-2 === v ? (l.push(void 0), i) : w);
    }
    const c = d + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        void 0 !== e ? e.createHTML(c) : c,
        l
    ];
};
class V {
    constructor({ strings: t, _$litType$: i }, e){
        let h;
        this.parts = [];
        let r = 0, u = 0;
        const c = t.length - 1, v = this.parts, [a, f] = P(t, i);
        if (this.el = V.createElement(a, e), C.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (h = C.nextNode()) && v.length < c;){
            if (1 === h.nodeType) {
                if (h.hasAttributes()) {
                    const t = [];
                    for (const i of h.getAttributeNames())if (i.endsWith(o) || i.startsWith(n)) {
                        const s = f[u++];
                        if (t.push(i), void 0 !== s) {
                            const t = h.getAttribute(s.toLowerCase() + o).split(n), i = /([.?@])?(.*)/.exec(s);
                            v.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? k : "?" === i[1] ? I : "@" === i[1] ? L : R
                            });
                        } else v.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i of t)h.removeAttribute(i);
                }
                if (y.test(h.tagName)) {
                    const t = h.textContent.split(n), i = t.length - 1;
                    if (i > 0) {
                        h.textContent = s ? s.emptyScript : "";
                        for(let s = 0; s < i; s++)h.append(t[s], d()), C.nextNode(), v.push({
                            type: 2,
                            index: ++r
                        });
                        h.append(t[i], d());
                    }
                }
            } else if (8 === h.nodeType) {
                if (h.data === l) v.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = h.data.indexOf(n, t + 1));)v.push({
                        type: 7,
                        index: r
                    }), t += n.length - 1;
                }
            }
            r++;
        }
    }
    static createElement(t, i) {
        const s = r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function N(t, i, s = t, e) {
    var o, n, l, h;
    if (i === T) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const d = u(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== d && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === d ? r = void 0 : (r = new d(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = N(t, r._$AS(t, i.values), r, e)), i;
}
class S {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var i;
        const { el: { content: s }, parts: e } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : r).importNode(s, !0);
        C.currentNode = o;
        let n = C.nextNode(), l = 0, h = 0, d = e[0];
        for(; void 0 !== d;){
            if (l === d.index) {
                let i;
                2 === d.type ? i = new M(n, n.nextSibling, this, t) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i = new z(n, this, t)), this._$AV.push(i), d = e[++h];
            }
            l !== (null == d ? void 0 : d.index) && (n = C.nextNode(), l++);
        }
        return C.currentNode = r, o;
    }
    v(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class M {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = N(this, t, i), u(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : v(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== A && u(this._$AH) ? this._$AA.nextSibling.data = t : this.$(r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        var i;
        const { values: s, _$litType$: e } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = V.createElement(e.h, this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);
        else {
            const t = new S(o, this), i = t.u(this.options);
            t.v(s), this.$(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = E.get(t.strings);
        return void 0 === i && E.set(t.strings, i = new V(t)), i;
    }
    T(t) {
        c(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new M(this.k(d()), this.k(d()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class R {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = A;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = N(this, t, i, 0), n = !u(t) || t !== this._$AH && t !== T, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = N(this, e[s + l], i, l), h === T && (h = this._$AH[l]), n || (n = !u(h) || h !== this._$AH[l]), h === A ? t = A : t !== A && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class k extends R {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === A ? void 0 : t;
    }
}
const H = s ? s.emptyScript : "";
class I extends R {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== A ? this.element.setAttribute(this.name, H) : this.element.removeAttribute(this.name);
    }
}
class L extends R {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = N(this, t, i, 0)) && void 0 !== s ? s : A) === T) return;
        const e = this._$AH, o = t === A && e !== A || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== A && (e === A || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        N(this, t);
    }
}
const Z = {
    O: o,
    P: n,
    A: l,
    C: 1,
    M: P,
    L: S,
    D: v,
    R: N,
    I: M,
    V: R,
    H: I,
    N: L,
    U: k,
    F: z
}, j = i.litHtmlPolyfillSupport;
null == j || j(V, M), (null !== (t = i.litHtmlVersions) && void 0 !== t ? t : i.litHtmlVersions = []).push("2.7.4");
const B = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new M(i.insertBefore(d(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"9YxkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LitElement", ()=>s);
parcelHelpers.export(exports, "UpdatingElement", ()=>r);
parcelHelpers.export(exports, "_$LE", ()=>h);
var _reactiveElement = require("@lit/reactive-element");
parcelHelpers.exportAll(_reactiveElement, exports);
var _litHtml = require("lit-html");
parcelHelpers.exportAll(_litHtml, exports);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var l, o;
const r = (0, _reactiveElement.ReactiveElement);
class s extends (0, _reactiveElement.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, _litHtml.render)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, _litHtml.noChange;
    }
}
s.finalized = !0, s._$litElement$ = !0, null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, {
    LitElement: s
});
const n = globalThis.litElementPolyfillSupport;
null == n || n({
    LitElement: s
});
const h = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.3.2");

},{"@lit/reactive-element":"hypet","lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"e2OXP":[function(require,module,exports) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isServer", ()=>o);
const o = !1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"bCPKi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _customElementJs = require("@lit/reactive-element/decorators/custom-element.js");
parcelHelpers.exportAll(_customElementJs, exports);
var _propertyJs = require("@lit/reactive-element/decorators/property.js");
parcelHelpers.exportAll(_propertyJs, exports);
var _stateJs = require("@lit/reactive-element/decorators/state.js");
parcelHelpers.exportAll(_stateJs, exports);
var _eventOptionsJs = require("@lit/reactive-element/decorators/event-options.js");
parcelHelpers.exportAll(_eventOptionsJs, exports);
var _queryJs = require("@lit/reactive-element/decorators/query.js");
parcelHelpers.exportAll(_queryJs, exports);
var _queryAllJs = require("@lit/reactive-element/decorators/query-all.js");
parcelHelpers.exportAll(_queryAllJs, exports);
var _queryAsyncJs = require("@lit/reactive-element/decorators/query-async.js");
parcelHelpers.exportAll(_queryAsyncJs, exports);
var _queryAssignedElementsJs = require("@lit/reactive-element/decorators/query-assigned-elements.js");
parcelHelpers.exportAll(_queryAssignedElementsJs, exports);
var _queryAssignedNodesJs = require("@lit/reactive-element/decorators/query-assigned-nodes.js");
parcelHelpers.exportAll(_queryAssignedNodesJs, exports);

},{"@lit/reactive-element/decorators/custom-element.js":"cMf50","@lit/reactive-element/decorators/property.js":"ipYYa","@lit/reactive-element/decorators/state.js":"goyf7","@lit/reactive-element/decorators/event-options.js":"8b5ex","@lit/reactive-element/decorators/query.js":"kzuRy","@lit/reactive-element/decorators/query-all.js":"krNkJ","@lit/reactive-element/decorators/query-async.js":"a6gRJ","@lit/reactive-element/decorators/query-assigned-elements.js":"kKpwU","@lit/reactive-element/decorators/query-assigned-nodes.js":"2F824","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"cMf50":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customElement", ()=>e);
const e = (e)=>(n)=>"function" == typeof n ? ((e, n)=>(customElements.define(e, n), n))(e, n) : ((e, n)=>{
            const { kind: t, elements: s } = n;
            return {
                kind: t,
                elements: s,
                finisher (n) {
                    customElements.define(e, n);
                }
            };
        })(e, n);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"ipYYa":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "property", ()=>n);
const i = (i, e)=>"method" === e.kind && e.descriptor && !("value" in e.descriptor) ? {
        ...e,
        finisher (n) {
            n.createProperty(e.key, i);
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: e.key,
        initializer () {
            "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
        },
        finisher (n) {
            n.createProperty(e.key, i);
        }
    }, e = (i, e, n)=>{
    e.constructor.createProperty(n, i);
};
function n(n) {
    return (t, o)=>void 0 !== o ? e(n, t, o) : i(n, t);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"goyf7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>t);
var _propertyJs = require("./property.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function t(t) {
    return (0, _propertyJs.property)({
        ...t,
        state: !0
    });
}

},{"./property.js":"ipYYa","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"8b5ex":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eventOptions", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        finisher: (r, t)=>{
            Object.assign(r.prototype[t], e);
        }
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"d0R9Y":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decorateProperty", ()=>o);
parcelHelpers.export(exports, "legacyPrototypeMethod", ()=>e);
parcelHelpers.export(exports, "standardPrototypeMethod", ()=>t);
const e = (e, t, o)=>{
    Object.defineProperty(t, o, e);
}, t = (e, t)=>({
        kind: "method",
        placement: "prototype",
        key: t.key,
        descriptor: e
    }), o = ({ finisher: e, descriptor: t })=>(o, n)=>{
        var r;
        if (void 0 === n) {
            const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key, i = null != t ? {
                kind: "method",
                placement: "prototype",
                key: n,
                descriptor: t(o.key)
            } : {
                ...o,
                key: n
            };
            return null != e && (i.finisher = function(t) {
                e(t, n);
            }), i;
        }
        {
            const r = o.constructor;
            void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r, n);
        }
    };

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"kzuRy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "query", ()=>i);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function i(i, n) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (o)=>{
            const t = {
                get () {
                    var o, n;
                    return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
                },
                enumerable: !0,
                configurable: !0
            };
            if (n) {
                const n = "symbol" == typeof o ? Symbol() : "__" + o;
                t.get = function() {
                    var o, t;
                    return void 0 === this[n] && (this[n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[n];
                };
            }
            return t;
        }
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"krNkJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAll", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (r)=>({
                get () {
                    var r, o;
                    return null !== (o = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e)) && void 0 !== o ? o : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"a6gRJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAsync", ()=>e);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function e(e) {
    return (0, _baseJs.decorateProperty)({
        descriptor: (r)=>({
                async get () {
                    var r;
                    return await this.updateComplete, null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e);
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"kKpwU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedElements", ()=>l);
var _baseJs = require("./base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var n;
const e = null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? (o, n)=>o.assignedElements(n) : (o, n)=>o.assignedNodes(n).filter((o)=>o.nodeType === Node.ELEMENT_NODE);
function l(n) {
    const { slot: l, selector: t } = null != n ? n : {};
    return (0, _baseJs.decorateProperty)({
        descriptor: (o)=>({
                get () {
                    var o;
                    const r = "slot" + (l ? `[name=${l}]` : ":not([name])"), i = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(r), s = null != i ? e(i, n) : [];
                    return t ? s.filter((o)=>o.matches(t)) : s;
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"2F824":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryAssignedNodes", ()=>o);
var _baseJs = require("./base.js");
var _queryAssignedElementsJs = require("./query-assigned-elements.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function o(o, n, r) {
    let l, s = o;
    return "object" == typeof o ? (s = o.slot, l = o) : l = {
        flatten: n
    }, r ? (0, _queryAssignedElementsJs.queryAssignedElements)({
        slot: s,
        flatten: n,
        selector: r
    }) : (0, _baseJs.decorateProperty)({
        descriptor: (e)=>({
                get () {
                    var e, t;
                    const o = "slot" + (s ? `[name=${s}]` : ":not([name])"), n = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(o);
                    return null !== (t = null == n ? void 0 : n.assignedNodes(l)) && void 0 !== t ? t : [];
                },
                enumerable: !0,
                configurable: !0
            })
    });
}

},{"./base.js":"d0R9Y","./query-assigned-elements.js":"kKpwU","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"7tGqI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Task", ()=>(0, _taskJs.Task));
parcelHelpers.export(exports, "TaskStatus", ()=>(0, _taskJs.TaskStatus));
parcelHelpers.export(exports, "initialState", ()=>(0, _taskJs.initialState));
var _taskJs = require("./task.js");

},{"./task.js":"90jf8","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"90jf8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Task", ()=>h);
parcelHelpers.export(exports, "TaskStatus", ()=>i);
parcelHelpers.export(exports, "initialState", ()=>s);
var _reactiveElement = require("@lit/reactive-element");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const i = {
    INITIAL: 0,
    PENDING: 1,
    COMPLETE: 2,
    ERROR: 3
}, s = Symbol();
class h {
    constructor(t, i, s){
        this.i = 0, this.status = 0, this.autoRun = !0, this.t = t, this.t.addController(this);
        const h = "object" == typeof i ? i : {
            task: i,
            args: s
        };
        this.o = h.task, this.h = h.args, this.l = h.onComplete, this.u = h.onError, void 0 !== h.autoRun && (this.autoRun = h.autoRun);
    }
    get taskComplete() {
        return this.v || (1 === this.status ? this.v = new Promise((t, i)=>{
            this.m = t, this._ = i;
        }) : 3 === this.status ? this.v = Promise.reject(this.k) : this.v = Promise.resolve(this.p)), this.v;
    }
    hostUpdated() {
        this.performTask();
    }
    async performTask() {
        var t;
        const i = null === (t = this.h) || void 0 === t ? void 0 : t.call(this);
        this.shouldRun(i) && await this.run(i);
    }
    shouldRun(t) {
        return this.autoRun && this.T(t);
    }
    async run(t) {
        var i, h, r, e, o;
        let l, n;
        null != t || (t = null === (i = this.h) || void 0 === i ? void 0 : i.call(this)), 1 !== this.status && (this.v = void 0, this.m = void 0, this._ = void 0), this.status = 1, queueMicrotask(()=>this.t.requestUpdate());
        const a = ++this.i;
        try {
            l = await this.o(t);
        } catch (t) {
            n = t;
        }
        if (this.i === a) {
            if (l === s) this.status = 0;
            else {
                if (void 0 === n) {
                    try {
                        null === (h = this.l) || void 0 === h || h.call(this, l);
                    } catch  {}
                    this.status = 2, null === (r = this.m) || void 0 === r || r.call(this, l);
                } else {
                    try {
                        null === (e = this.u) || void 0 === e || e.call(this, n);
                    } catch  {}
                    this.status = 3, null === (o = this._) || void 0 === o || o.call(this, n);
                }
                this.p = l, this.k = n;
            }
            this.t.requestUpdate();
        }
    }
    get value() {
        return this.p;
    }
    get error() {
        return this.k;
    }
    render(t) {
        var i, s, h, r;
        switch(this.status){
            case 0:
                return null === (i = t.initial) || void 0 === i ? void 0 : i.call(t);
            case 1:
                return null === (s = t.pending) || void 0 === s ? void 0 : s.call(t);
            case 2:
                return null === (h = t.complete) || void 0 === h ? void 0 : h.call(t, this.value);
            case 3:
                return null === (r = t.error) || void 0 === r ? void 0 : r.call(t, this.error);
            default:
                this.status;
        }
    }
    T(i) {
        const s = this.g;
        return this.g = i, Array.isArray(i) && Array.isArray(s) ? i.length === s.length && i.some((i, h)=>(0, _reactiveElement.notEqual)(i, s[h])) : i !== s;
    }
}

},{"@lit/reactive-element":"hypet","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"aIY2w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
const axiosInstance = (0, _axiosDefault.default).create({
    baseURL: "http://localhost:5500",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    }
});
exports.default = axiosInstance;

},{"axios":"jo6P5","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"jo6P5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _axiosJsDefault.default));
parcelHelpers.export(exports, "Axios", ()=>Axios);
parcelHelpers.export(exports, "AxiosError", ()=>AxiosError);
parcelHelpers.export(exports, "CanceledError", ()=>CanceledError);
parcelHelpers.export(exports, "isCancel", ()=>isCancel);
parcelHelpers.export(exports, "CancelToken", ()=>CancelToken);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "Cancel", ()=>Cancel);
parcelHelpers.export(exports, "isAxiosError", ()=>isAxiosError);
parcelHelpers.export(exports, "spread", ()=>spread);
parcelHelpers.export(exports, "toFormData", ()=>toFormData);
parcelHelpers.export(exports, "AxiosHeaders", ()=>AxiosHeaders);
parcelHelpers.export(exports, "HttpStatusCode", ()=>HttpStatusCode);
parcelHelpers.export(exports, "formToJSON", ()=>formToJSON);
parcelHelpers.export(exports, "mergeConfig", ()=>mergeConfig);
var _axiosJs = require("./lib/axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios, AxiosError, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders, HttpStatusCode, formToJSON, mergeConfig } = (0, _axiosJsDefault.default);

},{"./lib/axios.js":"63MyY","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"63MyY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var _axiosJs = require("./core/Axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
var _mergeConfigJs = require("./core/mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _indexJs = require("./defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("./helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
var _canceledErrorJs = require("./cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _cancelTokenJs = require("./cancel/CancelToken.js");
var _cancelTokenJsDefault = parcelHelpers.interopDefault(_cancelTokenJs);
var _isCancelJs = require("./cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _dataJs = require("./env/data.js");
var _toFormDataJs = require("./helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _axiosErrorJs = require("./core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _spreadJs = require("./helpers/spread.js");
var _spreadJsDefault = parcelHelpers.interopDefault(_spreadJs);
var _isAxiosErrorJs = require("./helpers/isAxiosError.js");
var _isAxiosErrorJsDefault = parcelHelpers.interopDefault(_isAxiosErrorJs);
var _axiosHeadersJs = require("./core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _httpStatusCodeJs = require("./helpers/HttpStatusCode.js");
var _httpStatusCodeJsDefault = parcelHelpers.interopDefault(_httpStatusCodeJs);
"use strict";
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new (0, _axiosJsDefault.default)(defaultConfig);
    const instance = (0, _bindJsDefault.default)((0, _axiosJsDefault.default).prototype.request, context);
    // Copy axios.prototype to instance
    (0, _utilsJsDefault.default).extend(instance, (0, _axiosJsDefault.default).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, _utilsJsDefault.default).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance((0, _mergeConfigJsDefault.default)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance((0, _indexJsDefault.default));
// Expose Axios class to allow class inheritance
axios.Axios = (0, _axiosJsDefault.default);
// Expose Cancel & CancelToken
axios.CanceledError = (0, _canceledErrorJsDefault.default);
axios.CancelToken = (0, _cancelTokenJsDefault.default);
axios.isCancel = (0, _isCancelJsDefault.default);
axios.VERSION = (0, _dataJs.VERSION);
axios.toFormData = (0, _toFormDataJsDefault.default);
// Expose AxiosError class
axios.AxiosError = (0, _axiosErrorJsDefault.default);
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = (0, _spreadJsDefault.default);
// Expose isAxiosError
axios.isAxiosError = (0, _isAxiosErrorJsDefault.default);
// Expose mergeConfig
axios.mergeConfig = (0, _mergeConfigJsDefault.default);
axios.AxiosHeaders = (0, _axiosHeadersJsDefault.default);
axios.formToJSON = (thing)=>(0, _formDataToJSONJsDefault.default)((0, _utilsJsDefault.default).isHTMLForm(thing) ? new FormData(thing) : thing);
axios.HttpStatusCode = (0, _httpStatusCodeJsDefault.default);
axios.default = axios;
// this module should only have a default export
exports.default = axios;

},{"./utils.js":"5By4s","./helpers/bind.js":"haRQb","./core/Axios.js":"cpqD8","./core/mergeConfig.js":"b85oP","./defaults/index.js":"hXfHM","./helpers/formDataToJSON.js":"01RfH","./cancel/CanceledError.js":"9PwCG","./cancel/CancelToken.js":"45wzn","./cancel/isCancel.js":"a0VmF","./env/data.js":"h29L9","./helpers/toFormData.js":"ajoez","./core/AxiosError.js":"3u8Tl","./helpers/spread.js":"dyQ8N","./helpers/isAxiosError.js":"eyiLq","./core/AxiosHeaders.js":"cgSSx","./helpers/HttpStatusCode.js":"fdR61","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"5By4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var global = arguments[3];
"use strict";
// utils is a library of generic helper functions non-specific to axios
const { toString } = Object.prototype;
const { getPrototypeOf } = Object;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === "object";
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== "object") return false;
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest("URLSearchParams");
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys = false } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const { caseless } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) result[targetKey] = merge(result[targetKey], val);
        else if (isPlainObject(val)) result[targetKey] = merge({}, val);
        else if (isArray(val)) result[targetKey] = val.slice();
        else result[targetKey] = val;
    };
    for(let i = 0, l = arguments.length; i < l; i++)arguments[i] && forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) a[key] = (0, _bindJsDefault.default)(val, thisArg);
        else a[key] = val;
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        if (reducer(descriptor, name, obj) !== false) reducedDescriptors[name] = descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            "arguments",
            "caller",
            "callee"
        ].indexOf(name) !== -1) return false;
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error("Can not rewrite read-only method '" + name + "'");
        };
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT)=>{
    let str = "";
    const { length } = alphabet;
    while(size--)str += alphabet[Math.random() * length | 0];
    return str;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) return;
            if (!("toJSON" in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing)=>thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
exports.default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
};

},{"./helpers/bind.js":"haRQb","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"haRQb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>bind);
"use strict";
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"cpqD8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _buildURLJs = require("../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _interceptorManagerJs = require("./InterceptorManager.js");
var _interceptorManagerJsDefault = parcelHelpers.interopDefault(_interceptorManagerJs);
var _dispatchRequestJs = require("./dispatchRequest.js");
var _dispatchRequestJsDefault = parcelHelpers.interopDefault(_dispatchRequestJs);
var _mergeConfigJs = require("./mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _buildFullPathJs = require("./buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _validatorJs = require("../helpers/validator.js");
var _validatorJsDefault = parcelHelpers.interopDefault(_validatorJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const validators = (0, _validatorJsDefault.default).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new (0, _interceptorManagerJsDefault.default)(),
            response: new (0, _interceptorManagerJsDefault.default)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const { transitional, paramsSerializer, headers } = config;
        if (transitional !== undefined) (0, _validatorJsDefault.default).assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
        if (paramsSerializer != null) {
            if ((0, _utilsJsDefault.default).isFunction(paramsSerializer)) config.paramsSerializer = {
                serialize: paramsSerializer
            };
            else (0, _validatorJsDefault.default).assertOptions(paramsSerializer, {
                encode: validators.function,
                serialize: validators.function
            }, true);
        }
        // Set config.method
        config.method = (config.method || this.defaults.method || "get").toLowerCase();
        let contextHeaders;
        // Flatten headers
        contextHeaders = headers && (0, _utilsJsDefault.default).merge(headers.common, headers[config.method]);
        contextHeaders && (0, _utilsJsDefault.default).forEach([
            "delete",
            "get",
            "head",
            "post",
            "put",
            "patch",
            "common"
        ], (method)=>{
            delete headers[method];
        });
        config.headers = (0, _axiosHeadersJsDefault.default).concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, _dispatchRequestJsDefault.default).bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, _dispatchRequestJsDefault.default).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        return (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
                method,
                headers: isForm ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
exports.default = Axios;

},{"./../utils.js":"5By4s","../helpers/buildURL.js":"3bwC2","./InterceptorManager.js":"1VRIM","./dispatchRequest.js":"6sjJ6","./mergeConfig.js":"b85oP","./buildFullPath.js":"1I5TW","../helpers/validator.js":"9vgkY","./AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"3bwC2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildURL);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosURLSearchParamsJs = require("../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    const _encode = options && options.encode || encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, options);
    else serializedParams = (0, _utilsJsDefault.default).isURLSearchParams(params) ? params.toString() : new (0, _axiosURLSearchParamsJsDefault.default)(params, options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
}

},{"../utils.js":"5By4s","../helpers/AxiosURLSearchParams.js":"hz84m","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"hz84m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
"use strict";
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode(str) {
    const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\x00"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, _toFormDataJsDefault.default)(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
};
exports.default = AxiosURLSearchParams;

},{"./toFormData.js":"ajoez","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"ajoez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
var _formDataJs = require("../platform/node/classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var Buffer = require("adfd9b103875c2dd").Buffer;
"use strict";
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return (0, _utilsJsDefault.default).isPlainObject(thing) || (0, _utilsJsDefault.default).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return (0, _utilsJsDefault.default).endsWith(key, "[]") ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return (0, _utilsJsDefault.default).isArray(arr) && !arr.some(isVisitable);
}
const predicates = (0, _utilsJsDefault.default).toFlatObject((0, _utilsJsDefault.default), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("target must be an object");
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, _formDataJsDefault.default) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, _utilsJsDefault.default).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, _utilsJsDefault.default).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && (0, _utilsJsDefault.default).isSpecCompliantForm(formData);
    if (!(0, _utilsJsDefault.default).isFunction(visitor)) throw new TypeError("visitor must be a function");
    function convertValue(value) {
        if (value === null) return "";
        if ((0, _utilsJsDefault.default).isDate(value)) return value.toISOString();
        if (!useBlob && (0, _utilsJsDefault.default).isBlob(value)) throw new (0, _axiosErrorJsDefault.default)("Blob is not supported. Use a Buffer instead.");
        if ((0, _utilsJsDefault.default).isArrayBuffer(value) || (0, _utilsJsDefault.default).isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([
            value
        ]) : Buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
            if ((0, _utilsJsDefault.default).endsWith(key, "{}")) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, _utilsJsDefault.default).isArray(value) && isFlatArray(value) || ((0, _utilsJsDefault.default).isFileList(value) || (0, _utilsJsDefault.default).endsWith(key, "[]")) && (arr = (0, _utilsJsDefault.default).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) return true;
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if ((0, _utilsJsDefault.default).isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
        stack.push(value);
        (0, _utilsJsDefault.default).forEach(value, function each(el, key) {
            const result = !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && visitor.call(formData, el, (0, _utilsJsDefault.default).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ]);
        });
        stack.pop();
    }
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("data must be an object");
    build(obj);
    return formData;
}
exports.default = toFormData;

},{"adfd9b103875c2dd":"cAXmJ","../utils.js":"5By4s","../core/AxiosError.js":"3u8Tl","../platform/node/classes/FormData.js":"aFlee","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"cAXmJ":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("936d7d40ee51556e");
const ieee754 = require("a9454e8447bbf491");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"936d7d40ee51556e":"lbaIb","a9454e8447bbf491":"chFDQ"}],"lbaIb":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"chFDQ":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"3u8Tl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack;
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
(0, _utilsJsDefault.default).inherits(AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: (0, _utilsJsDefault.default).toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
const prototype = AxiosError.prototype;
const descriptors = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach((code)=>{
    descriptors[code] = {
        value: code
    };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", {
    value: true
});
// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create(prototype);
    (0, _utilsJsDefault.default).toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
exports.default = AxiosError;

},{"../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"aFlee":[function(require,module,exports) {
// eslint-disable-next-line strict
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"1VRIM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, _utilsJsDefault.default).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
exports.default = InterceptorManager;

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"6sjJ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>dispatchRequest);
var _transformDataJs = require("./transformData.js");
var _transformDataJsDefault = parcelHelpers.interopDefault(_transformDataJs);
var _isCancelJs = require("../cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _adaptersJs = require("../adapters/adapters.js");
var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
"use strict";
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, _canceledErrorJsDefault.default)(null, config);
}
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = (0, _axiosHeadersJsDefault.default).from(config.headers);
    // Transform request data
    config.data = (0, _transformDataJsDefault.default).call(config, config.transformRequest);
    if ([
        "post",
        "put",
        "patch"
    ].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
    const adapter = (0, _adaptersJsDefault.default).getAdapter(config.adapter || (0, _indexJsDefault.default).adapter);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, response);
        response.headers = (0, _axiosHeadersJsDefault.default).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, _isCancelJsDefault.default)(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, reason.response);
                reason.response.headers = (0, _axiosHeadersJsDefault.default).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}

},{"./transformData.js":"eRqJY","../cancel/isCancel.js":"a0VmF","../defaults/index.js":"hXfHM","../cancel/CanceledError.js":"9PwCG","../core/AxiosHeaders.js":"cgSSx","../adapters/adapters.js":"d7JxI","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"eRqJY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transformData);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
function transformData(fns, response) {
    const config = this || (0, _indexJsDefault.default);
    const context = response || config;
    const headers = (0, _axiosHeadersJsDefault.default).from(context.headers);
    let data = context.data;
    (0, _utilsJsDefault.default).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}

},{"./../utils.js":"5By4s","../defaults/index.js":"hXfHM","../core/AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"hXfHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _transitionalJs = require("./transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _toFormDataJs = require("../helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _toURLEncodedFormJs = require("../helpers/toURLEncodedForm.js");
var _toURLEncodedFormJsDefault = parcelHelpers.interopDefault(_toURLEncodedFormJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("../helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
"use strict";
const DEFAULT_CONTENT_TYPE = {
    "Content-Type": undefined
};
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if ((0, _utilsJsDefault.default).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, _utilsJsDefault.default).trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: (0, _transitionalJsDefault.default),
    adapter: [
        "xhr",
        "http"
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = (0, _utilsJsDefault.default).isObject(data);
            if (isObjectPayload && (0, _utilsJsDefault.default).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, _utilsJsDefault.default).isFormData(data);
            if (isFormData) {
                if (!hasJSONContentType) return data;
                return hasJSONContentType ? JSON.stringify((0, _formDataToJSONJsDefault.default)(data)) : data;
            }
            if ((0, _utilsJsDefault.default).isArrayBuffer(data) || (0, _utilsJsDefault.default).isBuffer(data) || (0, _utilsJsDefault.default).isStream(data) || (0, _utilsJsDefault.default).isFile(data) || (0, _utilsJsDefault.default).isBlob(data)) return data;
            if ((0, _utilsJsDefault.default).isArrayBufferView(data)) return data.buffer;
            if ((0, _utilsJsDefault.default).isURLSearchParams(data)) {
                headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return (0, _toURLEncodedFormJsDefault.default)(data, this.formSerializer).toString();
                if ((isFileList = (0, _utilsJsDefault.default).isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, _toFormDataJsDefault.default)(isFileList ? {
                        "files[]": data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType("application/json", false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === "json";
            if (data && (0, _utilsJsDefault.default).isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === "SyntaxError") throw (0, _axiosErrorJsDefault.default).from(e, (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, _indexJsDefault.default).classes.FormData,
        Blob: (0, _indexJsDefault.default).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*"
        }
    }
};
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    defaults.headers[method] = (0, _utilsJsDefault.default).merge(DEFAULT_CONTENT_TYPE);
});
exports.default = defaults;

},{"../utils.js":"5By4s","../core/AxiosError.js":"3u8Tl","./transitional.js":"lM32f","../helpers/toFormData.js":"ajoez","../helpers/toURLEncodedForm.js":"9hjry","../platform/index.js":"7tDev","../helpers/formDataToJSON.js":"01RfH","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"lM32f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"9hjry":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toURLEncodedForm);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
function toURLEncodedForm(data, options) {
    return (0, _toFormDataJsDefault.default)(data, new (0, _indexJsDefault.default).classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if ((0, _indexJsDefault.default).isNode && (0, _utilsJsDefault.default).isBuffer(value)) {
                this.append(key, value.toString("base64"));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}

},{"../utils.js":"5By4s","./toFormData.js":"ajoez","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"7tDev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _indexJsDefault.default));
var _indexJs = require("./node/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);

},{"./node/index.js":"cVeqE","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"cVeqE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _urlsearchParamsJs = require("./classes/URLSearchParams.js");
var _urlsearchParamsJsDefault = parcelHelpers.interopDefault(_urlsearchParamsJs);
var _formDataJs = require("./classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var _blobJs = require("./classes/Blob.js");
var _blobJsDefault = parcelHelpers.interopDefault(_blobJs);
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const isStandardBrowserEnv = (()=>{
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
})();
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const isStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
exports.default = {
    isBrowser: true,
    classes: {
        URLSearchParams: (0, _urlsearchParamsJsDefault.default),
        FormData: (0, _formDataJsDefault.default),
        Blob: (0, _blobJsDefault.default)
    },
    isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv,
    protocols: [
        "http",
        "https",
        "file",
        "blob",
        "url",
        "data"
    ]
};

},{"./classes/URLSearchParams.js":"5cIHE","./classes/FormData.js":"7i1jd","./classes/Blob.js":"8chF6","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"5cIHE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosURLSearchParamsJs = require("../../../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
exports.default = typeof URLSearchParams !== "undefined" ? URLSearchParams : (0, _axiosURLSearchParamsJsDefault.default);

},{"../../../helpers/AxiosURLSearchParams.js":"hz84m","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"7i1jd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = typeof FormData !== "undefined" ? FormData : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"8chF6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = typeof Blob !== "undefined" ? Blob : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"01RfH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, _utilsJsDefault.default).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === "[]" ? "" : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, _utilsJsDefault.default).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, _utilsJsDefault.default).hasOwnProp(target, name)) target[name] = [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, _utilsJsDefault.default).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, _utilsJsDefault.default).isArray(target[name])) target[name] = arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, _utilsJsDefault.default).isFormData(formData) && (0, _utilsJsDefault.default).isFunction(formData.entries)) {
        const obj = {};
        (0, _utilsJsDefault.default).forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
exports.default = formDataToJSON;

},{"../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"cgSSx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _parseHeadersJs = require("../helpers/parseHeaders.js");
var _parseHeadersJsDefault = parcelHelpers.interopDefault(_parseHeadersJs);
"use strict";
const $internals = Symbol("internals");
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, _utilsJsDefault.default).isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
const isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if ((0, _utilsJsDefault.default).isFunction(filter)) return filter.call(this, value, header);
    if (isHeaderNameFilter) value = header;
    if (!(0, _utilsJsDefault.default).isString(value)) return;
    if ((0, _utilsJsDefault.default).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, _utilsJsDefault.default).isRegExp(filter)) return filter.test(value);
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = (0, _utilsJsDefault.default).toCamelCase(" " + header);
    [
        "get",
        "set",
        "has"
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) throw new Error("header name must be a non-empty string");
            const key = (0, _utilsJsDefault.default).findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) self[key || _header] = normalizeValue(_value);
        }
        const setHeaders = (headers, _rewrite)=>(0, _utilsJsDefault.default).forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if ((0, _utilsJsDefault.default).isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
        else if ((0, _utilsJsDefault.default).isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders((0, _parseHeadersJsDefault.default)(header), valueOrRewrite);
        else header != null && setHeader(valueOrRewrite, header, rewrite);
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return parseTokens(value);
                if ((0, _utilsJsDefault.default).isFunction(parser)) return parser.call(this, value, key);
                if ((0, _utilsJsDefault.default).isRegExp(parser)) return parser.exec(value);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = (0, _utilsJsDefault.default).findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, _utilsJsDefault.default).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            const key = (0, _utilsJsDefault.default).findKey(headers, header);
            if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && (0, _utilsJsDefault.default).isArray(value) ? value.join(", ") : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, _utilsJsDefault.default).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders.prototype);
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders);
exports.default = AxiosHeaders;

},{"../utils.js":"5By4s","../helpers/parseHeaders.js":"kqDd5","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"kqDd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = (0, _utilsJsDefault.default).toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ exports.default = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
        if (key === "set-cookie") {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    });
    return parsed;
};

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"a0VmF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isCancel);
"use strict";
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"9PwCG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    (0, _axiosErrorJsDefault.default).call(this, message == null ? "canceled" : message, (0, _axiosErrorJsDefault.default).ERR_CANCELED, config, request);
    this.name = "CanceledError";
}
(0, _utilsJsDefault.default).inherits(CanceledError, (0, _axiosErrorJsDefault.default), {
    __CANCEL__: true
});
exports.default = CanceledError;

},{"../core/AxiosError.js":"3u8Tl","../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"d7JxI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _httpJs = require("./http.js");
var _httpJsDefault = parcelHelpers.interopDefault(_httpJs);
var _xhrJs = require("./xhr.js");
var _xhrJsDefault = parcelHelpers.interopDefault(_xhrJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
const knownAdapters = {
    http: (0, _httpJsDefault.default),
    xhr: (0, _xhrJsDefault.default)
};
(0, _utilsJsDefault.default).forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, "name", {
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, "adapterName", {
            value
        });
    }
});
exports.default = {
    getAdapter: (adapters)=>{
        adapters = (0, _utilsJsDefault.default).isArray(adapters) ? adapters : [
            adapters
        ];
        const { length } = adapters;
        let nameOrAdapter;
        let adapter;
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            if (adapter = (0, _utilsJsDefault.default).isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) break;
        }
        if (!adapter) {
            if (adapter === false) throw new (0, _axiosErrorJsDefault.default)(`Adapter ${nameOrAdapter} is not supported by the environment`, "ERR_NOT_SUPPORT");
            throw new Error((0, _utilsJsDefault.default).hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
        }
        if (!(0, _utilsJsDefault.default).isFunction(adapter)) throw new TypeError("adapter is not a function");
        return adapter;
    },
    adapters: knownAdapters
};

},{"../utils.js":"5By4s","./http.js":"aFlee","./xhr.js":"ldm57","../core/AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"ldm57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _settleJs = require("./../core/settle.js");
var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
var _cookiesJs = require("./../helpers/cookies.js");
var _cookiesJsDefault = parcelHelpers.interopDefault(_cookiesJs);
var _buildURLJs = require("./../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _buildFullPathJs = require("../core/buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _isURLSameOriginJs = require("./../helpers/isURLSameOrigin.js");
var _isURLSameOriginJsDefault = parcelHelpers.interopDefault(_isURLSameOriginJs);
var _transitionalJs = require("../defaults/transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _parseProtocolJs = require("../helpers/parseProtocol.js");
var _parseProtocolJsDefault = parcelHelpers.interopDefault(_parseProtocolJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _speedometerJs = require("../helpers/speedometer.js");
var _speedometerJsDefault = parcelHelpers.interopDefault(_speedometerJs);
"use strict";
function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = (0, _speedometerJsDefault.default)(50, 250);
    return (e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e
        };
        data[isDownloadStream ? "download" : "upload"] = true;
        listener(data);
    };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
exports.default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        let requestData = config.data;
        const requestHeaders = (0, _axiosHeadersJsDefault.default).from(config.headers).normalize();
        const responseType = config.responseType;
        let onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        if ((0, _utilsJsDefault.default).isFormData(requestData)) {
            if ((0, _indexJsDefault.default).isStandardBrowserEnv || (0, _indexJsDefault.default).isStandardBrowserWebWorkerEnv) requestHeaders.setContentType(false); // Let the browser set it
            else requestHeaders.setContentType("multipart/form-data;", false); // mobile/desktop app frameworks
        }
        let request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
        }
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, _axiosHeadersJsDefault.default).from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            (0, _settleJsDefault.default)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, _axiosErrorJsDefault.default)("Request aborted", (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new (0, _axiosErrorJsDefault.default)("Network Error", (0, _axiosErrorJsDefault.default).ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = config.transitional || (0, _transitionalJsDefault.default);
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(new (0, _axiosErrorJsDefault.default)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, _axiosErrorJsDefault.default).ETIMEDOUT : (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if ((0, _indexJsDefault.default).isStandardBrowserEnv) {
            // Add xsrf header
            const xsrfValue = (config.withCredentials || (0, _isURLSameOriginJsDefault.default)(fullPath)) && config.xsrfCookieName && (0, _cookiesJsDefault.default).read(config.xsrfCookieName);
            if (xsrfValue) requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ("setRequestHeader" in request) (0, _utilsJsDefault.default).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, _utilsJsDefault.default).isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, _canceledErrorJsDefault.default)(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        const protocol = (0, _parseProtocolJsDefault.default)(fullPath);
        if (protocol && (0, _indexJsDefault.default).protocols.indexOf(protocol) === -1) {
            reject(new (0, _axiosErrorJsDefault.default)("Unsupported protocol " + protocol + ":", (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};

},{"./../utils.js":"5By4s","./../core/settle.js":"dD9aC","./../helpers/cookies.js":"4WJjt","./../helpers/buildURL.js":"3bwC2","../core/buildFullPath.js":"1I5TW","./../helpers/isURLSameOrigin.js":"lxXtv","../defaults/transitional.js":"lM32f","../core/AxiosError.js":"3u8Tl","../cancel/CanceledError.js":"9PwCG","../helpers/parseProtocol.js":"7NfWU","../platform/index.js":"7tDev","../core/AxiosHeaders.js":"cgSSx","../helpers/speedometer.js":"gQeo1","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"dD9aC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>settle);
var _axiosErrorJs = require("./AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, _axiosErrorJsDefault.default)("Request failed with status code " + response.status, [
        (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST,
        (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}

},{"./AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"4WJjt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).isStandardBrowserEnv ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            const cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if ((0, _utilsJsDefault.default).isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if ((0, _utilsJsDefault.default).isString(path)) cookie.push("path=" + path);
            if ((0, _utilsJsDefault.default).isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

},{"./../utils.js":"5By4s","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"1I5TW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildFullPath);
var _isAbsoluteURLJs = require("../helpers/isAbsoluteURL.js");
var _isAbsoluteURLJsDefault = parcelHelpers.interopDefault(_isAbsoluteURLJs);
var _combineURLsJs = require("../helpers/combineURLs.js");
var _combineURLsJsDefault = parcelHelpers.interopDefault(_combineURLsJs);
"use strict";
function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !(0, _isAbsoluteURLJsDefault.default)(requestedURL)) return (0, _combineURLsJsDefault.default)(baseURL, requestedURL);
    return requestedURL;
}

},{"../helpers/isAbsoluteURL.js":"jD6NM","../helpers/combineURLs.js":"brOWK","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"jD6NM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAbsoluteURL);
"use strict";
function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"brOWK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>combineURLs);
"use strict";
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"lxXtv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).isStandardBrowserEnv ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        let href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        const parsed = (0, _utilsJsDefault.default).isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"./../utils.js":"5By4s","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"7NfWU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>parseProtocol);
"use strict";
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"gQeo1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
exports.default = speedometer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"b85oP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeConfig);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const headersToObject = (thing)=>thing instanceof (0, _axiosHeadersJsDefault.default) ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
        if ((0, _utilsJsDefault.default).isPlainObject(target) && (0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge.call({
            caseless
        }, target, source);
        else if ((0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge({}, source);
        else if ((0, _utilsJsDefault.default).isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(a, b, caseless);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a, caseless);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) return getMergedValue(a, b);
        else if (prop in config1) return getMergedValue(undefined, a);
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b)=>mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    (0, _utilsJsDefault.default).forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        (0, _utilsJsDefault.default).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}

},{"../utils.js":"5By4s","./AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"9vgkY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataJs = require("../env/data.js");
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
const validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((type, i)=>{
    validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + (0, _dataJs.VERSION) + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, _axiosErrorJsDefault.default)(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), (0, _axiosErrorJsDefault.default).ERR_DEPRECATED);
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new (0, _axiosErrorJsDefault.default)("options must be an object", (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, _axiosErrorJsDefault.default)("option " + opt + " must be " + result, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, _axiosErrorJsDefault.default)("Unknown option " + opt, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION);
    }
}
exports.default = {
    assertOptions,
    validators
};

},{"../env/data.js":"h29L9","../core/AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"h29L9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
const VERSION = "1.4.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"45wzn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canceledErrorJs = require("./CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
"use strict";
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== "function") throw new TypeError("executor must be a function.");
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, _canceledErrorJsDefault.default)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
exports.default = CancelToken;

},{"./CanceledError.js":"9PwCG","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"dyQ8N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>spread);
"use strict";
function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"eyiLq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAxiosError);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
function isAxiosError(payload) {
    return (0, _utilsJsDefault.default).isObject(payload) && payload.isAxiosError === true;
}

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"fdR61":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
exports.default = HttpStatusCode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"9QBK6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>TableComponentCustomer);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _lit = require("lit");
var _decorators = require("lit/decorators");
var _validator = require("validator");
var _validatorDefault = parcelHelpers.interopDefault(_validator);
var _sweetalert2 = require("sweetalert2");
var _sweetalert2Default = parcelHelpers.interopDefault(_sweetalert2);
var _toast = require("../../../misc/toast");
var _axiosInstance = require("../../../httpClient/axiosInstance");
var _axiosInstanceDefault = parcelHelpers.interopDefault(_axiosInstance);
var _router = require("@vaadin/router");
let TableComponentCustomer = class TableComponentCustomer extends (0, _lit.LitElement) {
    createRenderRoot() {
        return this;
    }
    connectedCallback() {
        super.connectedCallback();
    }
    async _TakeTable() {
        const { value: formValues } = await (0, _sweetalert2Default.default).fire({
            title: `Table ${this.tableNumber}`,
            html: `
            <input id="swal-input1" class="swal2-input" placeholder="Name">
            <input id="swal-input2" class="swal2-input" placeholder="Email">
            `,
            focusConfirm: false,
            preConfirm: ()=>{
                const name = document.getElementById("swal-input1").value;
                const email = document.getElementById("swal-input2").value;
                if (!name || !email) {
                    (0, _sweetalert2Default.default).showValidationMessage(`Please enter name and email`);
                    return;
                }
                if (!(0, _validatorDefault.default).isEmail(email)) {
                    (0, _sweetalert2Default.default).showValidationMessage(`Please enter valid email`);
                    return;
                }
                return {
                    name,
                    email
                };
            }
        });
        if (formValues) try {
            const takeTableRequest = await (0, _axiosInstanceDefault.default).post(`/tables/${this.tableNumber}/take`, {
                name: formValues.name,
                email: formValues.email
            });
            sessionStorage.setItem("customer", JSON.stringify(takeTableRequest.data.customer));
            (0, _router.Router).go(`/customer/${this.tableNumber}/overview`);
            return;
        } catch (e) {
            (0, _toast.toastTimer)("error", "Error", 2000, "Something went wrong creating table");
            return;
        }
        (0, _toast.toastTimer)("error", "Error", 2000, "Please try again later");
    }
    render() {
        return (0, _lit.html)`
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center">
            <img
              src="${this.barcode}"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                <div class="d-flex align-items-center justify-content-between">
                  <span class="card-title">Table ${this.tableNumber}</span>
                  <span
                    class="badge ${this.tableActive ? "bg-success" : "bg-danger"}"
                  >
                    ${this.tableActive ? "Available" : "Unavailable"}
                  </span>
                </div>
              </h5>
              <p class="card-text">
                This is table number ${this.tableNumber} u can either scan or
                click button to start ordering
              </p>
              <button class="btn btn-primary" @click=${this._TakeTable}>
                Take table
              </button>
              <p class="card-text">
                <!-- Now create an actual small class with formatted date -->
                <small class="text-muted"
                  >${this.lastUpdated.toDateString()} |
                  ${this.lastUpdated.toLocaleTimeString()}</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
    }
    constructor(...args){
        super(...args);
        this.tableNumber = 0;
        this.tableActive = true;
        this.barcode = "";
        this.lastUpdated = new Date();
        this._barcodeImage = "";
    }
};
(0, _tsDecorate._)([
    (0, _decorators.property)({
        type: Number
    })
], TableComponentCustomer.prototype, "tableNumber", void 0);
(0, _tsDecorate._)([
    (0, _decorators.property)({
        type: Boolean
    })
], TableComponentCustomer.prototype, "tableActive", void 0);
(0, _tsDecorate._)([
    (0, _decorators.property)({
        type: String
    })
], TableComponentCustomer.prototype, "barcode", void 0);
(0, _tsDecorate._)([
    (0, _decorators.property)({
        type: Date
    })
], TableComponentCustomer.prototype, "lastUpdated", void 0);
(0, _tsDecorate._)([
    (0, _decorators.state)()
], TableComponentCustomer.prototype, "_barcodeImage", void 0);
TableComponentCustomer = (0, _tsDecorate._)([
    (0, _decorators.customElement)("table-component-customer")
], TableComponentCustomer);

},{"@swc/helpers/_/_ts_decorate":"iH05j","lit":"4antt","lit/decorators":"bCPKi","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K","sweetalert2":"1HyFr","validator":"bliRI","../../../misc/toast":"aqr4V","../../../httpClient/axiosInstance":"aIY2w","@vaadin/router":"kVZrF"}],"1HyFr":[function(require,module,exports) {
/*!
* sweetalert2 v11.7.12
* Released under the MIT License.
*/ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    const RESTORE_FOCUS_TIMEOUT = 100;
    /** @type {GlobalState} */ const globalState = {};
    const focusPreviousActiveElement = ()=>{
        if (globalState.previousActiveElement instanceof HTMLElement) {
            globalState.previousActiveElement.focus();
            globalState.previousActiveElement = null;
        } else if (document.body) document.body.focus();
    };
    /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */ const restoreActiveElement = (returnFocus)=>{
        return new Promise((resolve)=>{
            if (!returnFocus) return resolve();
            const x = window.scrollX;
            const y = window.scrollY;
            globalState.restoreFocusTimeout = setTimeout(()=>{
                focusPreviousActiveElement();
                resolve();
            }, RESTORE_FOCUS_TIMEOUT); // issues/900
            window.scrollTo(x, y);
        });
    };
    /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */ var privateProps = {
        promise: new WeakMap(),
        innerParams: new WeakMap(),
        domCache: new WeakMap()
    };
    const swalPrefix = "swal2-";
    /**
   * @typedef
   * { | 'container'
   *   | 'shown'
   *   | 'height-auto'
   *   | 'iosfix'
   *   | 'popup'
   *   | 'modal'
   *   | 'no-backdrop'
   *   | 'no-transition'
   *   | 'toast'
   *   | 'toast-shown'
   *   | 'show'
   *   | 'hide'
   *   | 'close'
   *   | 'title'
   *   | 'html-container'
   *   | 'actions'
   *   | 'confirm'
   *   | 'deny'
   *   | 'cancel'
   *   | 'default-outline'
   *   | 'footer'
   *   | 'icon'
   *   | 'icon-content'
   *   | 'image'
   *   | 'input'
   *   | 'file'
   *   | 'range'
   *   | 'select'
   *   | 'radio'
   *   | 'checkbox'
   *   | 'label'
   *   | 'textarea'
   *   | 'inputerror'
   *   | 'input-label'
   *   | 'validation-message'
   *   | 'progress-steps'
   *   | 'active-progress-step'
   *   | 'progress-step'
   *   | 'progress-step-line'
   *   | 'loader'
   *   | 'loading'
   *   | 'styled'
   *   | 'top'
   *   | 'top-start'
   *   | 'top-end'
   *   | 'top-left'
   *   | 'top-right'
   *   | 'center'
   *   | 'center-start'
   *   | 'center-end'
   *   | 'center-left'
   *   | 'center-right'
   *   | 'bottom'
   *   | 'bottom-start'
   *   | 'bottom-end'
   *   | 'bottom-left'
   *   | 'bottom-right'
   *   | 'grow-row'
   *   | 'grow-column'
   *   | 'grow-fullscreen'
   *   | 'rtl'
   *   | 'timer-progress-bar'
   *   | 'timer-progress-bar-container'
   *   | 'scrollbar-measure'
   *   | 'icon-success'
   *   | 'icon-warning'
   *   | 'icon-info'
   *   | 'icon-question'
   *   | 'icon-error'
   * } SwalClass
   * @typedef {Record<SwalClass, string>} SwalClasses
   */ /**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */ /** @type {SwalClass[]} */ const classNames = [
        "container",
        "shown",
        "height-auto",
        "iosfix",
        "popup",
        "modal",
        "no-backdrop",
        "no-transition",
        "toast",
        "toast-shown",
        "show",
        "hide",
        "close",
        "title",
        "html-container",
        "actions",
        "confirm",
        "deny",
        "cancel",
        "default-outline",
        "footer",
        "icon",
        "icon-content",
        "image",
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "label",
        "textarea",
        "inputerror",
        "input-label",
        "validation-message",
        "progress-steps",
        "active-progress-step",
        "progress-step",
        "progress-step-line",
        "loader",
        "loading",
        "styled",
        "top",
        "top-start",
        "top-end",
        "top-left",
        "top-right",
        "center",
        "center-start",
        "center-end",
        "center-left",
        "center-right",
        "bottom",
        "bottom-start",
        "bottom-end",
        "bottom-left",
        "bottom-right",
        "grow-row",
        "grow-column",
        "grow-fullscreen",
        "rtl",
        "timer-progress-bar",
        "timer-progress-bar-container",
        "scrollbar-measure",
        "icon-success",
        "icon-warning",
        "icon-info",
        "icon-question",
        "icon-error"
    ];
    const swalClasses = classNames.reduce((acc, className)=>{
        acc[className] = swalPrefix + className;
        return acc;
    }, /** @type {SwalClasses} */ {});
    /** @type {SwalIcon[]} */ const icons = [
        "success",
        "warning",
        "info",
        "question",
        "error"
    ];
    const iconTypes = icons.reduce((acc, icon)=>{
        acc[icon] = swalPrefix + icon;
        return acc;
    }, /** @type {SwalIcons} */ {});
    const consolePrefix = "SweetAlert2:";
    /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */ const capitalizeFirstLetter = (str)=>str.charAt(0).toUpperCase() + str.slice(1);
    /**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */ const warn = (message)=>{
        console.warn(`${consolePrefix} ${typeof message === "object" ? message.join(" ") : message}`);
    };
    /**
   * Standardize console errors
   *
   * @param {string} message
   */ const error = (message)=>{
        console.error(`${consolePrefix} ${message}`);
    };
    /**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */ const previousWarnOnceMessages = [];
    /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */ const warnOnce = (message)=>{
        if (!previousWarnOnceMessages.includes(message)) {
            previousWarnOnceMessages.push(message);
            warn(message);
        }
    };
    /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string} useInstead
   */ const warnAboutDeprecation = (deprecatedParam, useInstead)=>{
        warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`);
    };
    /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */ const callIfFunction = (arg)=>typeof arg === "function" ? arg() : arg;
    /**
   * @param {any} arg
   * @returns {boolean}
   */ const hasToPromiseFn = (arg)=>arg && typeof arg.toPromise === "function";
    /**
   * @param {any} arg
   * @returns {Promise<any>}
   */ const asPromise = (arg)=>hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
    /**
   * @param {any} arg
   * @returns {boolean}
   */ const isPromise = (arg)=>arg && Promise.resolve(arg) === arg;
    /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */ const getContainer = ()=>document.body.querySelector(`.${swalClasses.container}`);
    /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */ const elementBySelector = (selectorString)=>{
        const container = getContainer();
        return container ? container.querySelector(selectorString) : null;
    };
    /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */ const elementByClass = (className)=>{
        return elementBySelector(`.${className}`);
    };
    /**
   * @returns {HTMLElement | null}
   */ const getPopup = ()=>elementByClass(swalClasses.popup);
    /**
   * @returns {HTMLElement | null}
   */ const getIcon = ()=>elementByClass(swalClasses.icon);
    /**
   * @returns {HTMLElement | null}
   */ const getIconContent = ()=>elementByClass(swalClasses["icon-content"]);
    /**
   * @returns {HTMLElement | null}
   */ const getTitle = ()=>elementByClass(swalClasses.title);
    /**
   * @returns {HTMLElement | null}
   */ const getHtmlContainer = ()=>elementByClass(swalClasses["html-container"]);
    /**
   * @returns {HTMLElement | null}
   */ const getImage = ()=>elementByClass(swalClasses.image);
    /**
   * @returns {HTMLElement | null}
   */ const getProgressSteps = ()=>elementByClass(swalClasses["progress-steps"]);
    /**
   * @returns {HTMLElement | null}
   */ const getValidationMessage = ()=>elementByClass(swalClasses["validation-message"]);
    /**
   * @returns {HTMLButtonElement | null}
   */ const getConfirmButton = ()=>/** @type {HTMLButtonElement} */ elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`);
    /**
   * @returns {HTMLButtonElement | null}
   */ const getCancelButton = ()=>/** @type {HTMLButtonElement} */ elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`);
    /**
   * @returns {HTMLButtonElement | null}
   */ const getDenyButton = ()=>/** @type {HTMLButtonElement} */ elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`);
    /**
   * @returns {HTMLElement | null}
   */ const getInputLabel = ()=>elementByClass(swalClasses["input-label"]);
    /**
   * @returns {HTMLElement | null}
   */ const getLoader = ()=>elementBySelector(`.${swalClasses.loader}`);
    /**
   * @returns {HTMLElement | null}
   */ const getActions = ()=>elementByClass(swalClasses.actions);
    /**
   * @returns {HTMLElement | null}
   */ const getFooter = ()=>elementByClass(swalClasses.footer);
    /**
   * @returns {HTMLElement | null}
   */ const getTimerProgressBar = ()=>elementByClass(swalClasses["timer-progress-bar"]);
    /**
   * @returns {HTMLElement | null}
   */ const getCloseButton = ()=>elementByClass(swalClasses.close);
    // https://github.com/jkup/focusable/blob/master/index.js
    const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
    /**
   * @returns {HTMLElement[]}
   */ const getFocusableElements = ()=>{
        /** @type {NodeListOf<HTMLElement>} */ const focusableElementsWithTabindex = getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
        const focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)// sort according to tabindex
        .sort((a, b)=>{
            const tabindexA = parseInt(a.getAttribute("tabindex"));
            const tabindexB = parseInt(b.getAttribute("tabindex"));
            if (tabindexA > tabindexB) return 1;
            else if (tabindexA < tabindexB) return -1;
            return 0;
        });
        /** @type {NodeListOf<HTMLElement>} */ const otherFocusableElements = getPopup().querySelectorAll(focusable);
        const otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter((el)=>el.getAttribute("tabindex") !== "-1");
        return [
            ...new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))
        ].filter((el)=>isVisible$1(el));
    };
    /**
   * @returns {boolean}
   */ const isModal = ()=>{
        return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses["toast-shown"]) && !hasClass(document.body, swalClasses["no-backdrop"]);
    };
    /**
   * @returns {boolean}
   */ const isToast = ()=>{
        return getPopup() && hasClass(getPopup(), swalClasses.toast);
    };
    /**
   * @returns {boolean}
   */ const isLoading = ()=>{
        return getPopup().hasAttribute("data-loading");
    };
    /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */ const setInnerHtml = (elem, html)=>{
        elem.textContent = "";
        if (html) {
            const parser = new DOMParser();
            const parsed = parser.parseFromString(html, `text/html`);
            Array.from(parsed.querySelector("head").childNodes).forEach((child)=>{
                elem.appendChild(child);
            });
            Array.from(parsed.querySelector("body").childNodes).forEach((child)=>{
                if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
                else elem.appendChild(child);
            });
        }
    };
    /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */ const hasClass = (elem, className)=>{
        if (!className) return false;
        const classList = className.split(/\s+/);
        for(let i = 0; i < classList.length; i++){
            if (!elem.classList.contains(classList[i])) return false;
        }
        return true;
    };
    /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */ const removeCustomClasses = (elem, params)=>{
        Array.from(elem.classList).forEach((className)=>{
            if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) elem.classList.remove(className);
        });
    };
    /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */ const applyCustomClass = (elem, params, className)=>{
        removeCustomClasses(elem, params);
        if (params.customClass && params.customClass[className]) {
            if (typeof params.customClass[className] !== "string" && !params.customClass[className].forEach) {
                warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`);
                return;
            }
            addClass(elem, params.customClass[className]);
        }
    };
    /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass} inputClass
   * @returns {HTMLInputElement | null}
   */ const getInput$1 = (popup, inputClass)=>{
        if (!inputClass) return null;
        switch(inputClass){
            case "select":
            case "textarea":
            case "file":
                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
            case "checkbox":
                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
            case "radio":
                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
            case "range":
                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
            default:
                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
        }
    };
    /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */ const focusInput = (input)=>{
        input.focus();
        // place cursor at end of text in text input
        if (input.type !== "file") {
            // http://stackoverflow.com/a/2345915
            const val = input.value;
            input.value = "";
            input.value = val;
        }
    };
    /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   * @param {boolean} condition
   */ const toggleClass = (target, classList, condition)=>{
        if (!target || !classList) return;
        if (typeof classList === "string") classList = classList.split(/\s+/).filter(Boolean);
        classList.forEach((className)=>{
            if (Array.isArray(target)) target.forEach((elem)=>{
                condition ? elem.classList.add(className) : elem.classList.remove(className);
            });
            else condition ? target.classList.add(className) : target.classList.remove(className);
        });
    };
    /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */ const addClass = (target, classList)=>{
        toggleClass(target, classList, true);
    };
    /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[]} classList
   */ const removeClass = (target, classList)=>{
        toggleClass(target, classList, false);
    };
    /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */ const getDirectChildByClass = (elem, className)=>{
        const children = Array.from(elem.children);
        for(let i = 0; i < children.length; i++){
            const child = children[i];
            if (child instanceof HTMLElement && hasClass(child, className)) return child;
        }
    };
    /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */ const applyNumericalStyle = (elem, property, value)=>{
        if (value === `${parseInt(value)}`) value = parseInt(value);
        if (value || parseInt(value) === 0) elem.style[property] = typeof value === "number" ? `${value}px` : value;
        else elem.style.removeProperty(property);
    };
    /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */ const show = function(elem) {
        let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "flex";
        elem && (elem.style.display = display);
    };
    /**
   * @param {HTMLElement | null} elem
   */ const hide = (elem)=>{
        elem && (elem.style.display = "none");
    };
    /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */ const setStyle = (parent, selector, property, value)=>{
        /** @type {HTMLElement} */ const el = parent.querySelector(selector);
        if (el) el.style[property] = value;
    };
    /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */ const toggle = function(elem, condition) {
        let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "flex";
        condition ? show(elem, display) : hide(elem);
    };
    /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */ const isVisible$1 = (elem)=>!!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
    /**
   * @returns {boolean}
   */ const allButtonsAreHidden = ()=>!isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
    /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */ const isScrollable = (elem)=>!!(elem.scrollHeight > elem.clientHeight);
    /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */ const hasCssAnimation = (elem)=>{
        const style = window.getComputedStyle(elem);
        const animDuration = parseFloat(style.getPropertyValue("animation-duration") || "0");
        const transDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
        return animDuration > 0 || transDuration > 0;
    };
    /**
   * @param {number} timer
   * @param {boolean} reset
   */ const animateTimerProgressBar = function(timer) {
        let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        const timerProgressBar = getTimerProgressBar();
        if (isVisible$1(timerProgressBar)) {
            if (reset) {
                timerProgressBar.style.transition = "none";
                timerProgressBar.style.width = "100%";
            }
            setTimeout(()=>{
                timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
                timerProgressBar.style.width = "0%";
            }, 10);
        }
    };
    const stopTimerProgressBar = ()=>{
        const timerProgressBar = getTimerProgressBar();
        const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        timerProgressBar.style.removeProperty("transition");
        timerProgressBar.style.width = "100%";
        const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
        timerProgressBar.style.width = `${timerProgressBarPercent}%`;
    };
    /**
   * Detect Node env
   *
   * @returns {boolean}
   */ const isNodeEnv = ()=>typeof window === "undefined" || typeof document === "undefined";
    const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses["html-container"]}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses["progress-steps"]}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses["html-container"]}" id="${swalClasses["html-container"]}"></div>
   <input class="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label for="${swalClasses.checkbox}" class="${swalClasses.checkbox}">
     <input type="checkbox" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses["validation-message"]}" id="${swalClasses["validation-message"]}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses["timer-progress-bar-container"]}">
     <div class="${swalClasses["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, "");
    /**
   * @returns {boolean}
   */ const resetOldContainer = ()=>{
        const oldContainer = getContainer();
        if (!oldContainer) return false;
        oldContainer.remove();
        removeClass([
            document.documentElement,
            document.body
        ], [
            swalClasses["no-backdrop"],
            swalClasses["toast-shown"],
            swalClasses["has-column"]
        ]);
        return true;
    };
    const resetValidationMessage$1 = ()=>{
        globalState.currentInstance.resetValidationMessage();
    };
    const addInputChangeListeners = ()=>{
        const popup = getPopup();
        const input = getDirectChildByClass(popup, swalClasses.input);
        const file = getDirectChildByClass(popup, swalClasses.file);
        /** @type {HTMLInputElement} */ const range = popup.querySelector(`.${swalClasses.range} input`);
        /** @type {HTMLOutputElement} */ const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
        const select = getDirectChildByClass(popup, swalClasses.select);
        /** @type {HTMLInputElement} */ const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
        const textarea = getDirectChildByClass(popup, swalClasses.textarea);
        input.oninput = resetValidationMessage$1;
        file.onchange = resetValidationMessage$1;
        select.onchange = resetValidationMessage$1;
        checkbox.onchange = resetValidationMessage$1;
        textarea.oninput = resetValidationMessage$1;
        range.oninput = ()=>{
            resetValidationMessage$1();
            rangeOutput.value = range.value;
        };
        range.onchange = ()=>{
            resetValidationMessage$1();
            rangeOutput.value = range.value;
        };
    };
    /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */ const getTarget = (target)=>typeof target === "string" ? document.querySelector(target) : target;
    /**
   * @param {SweetAlertOptions} params
   */ const setupAccessibility = (params)=>{
        const popup = getPopup();
        popup.setAttribute("role", params.toast ? "alert" : "dialog");
        popup.setAttribute("aria-live", params.toast ? "polite" : "assertive");
        if (!params.toast) popup.setAttribute("aria-modal", "true");
    };
    /**
   * @param {HTMLElement} targetElement
   */ const setupRTL = (targetElement)=>{
        if (window.getComputedStyle(targetElement).direction === "rtl") addClass(getContainer(), swalClasses.rtl);
    };
    /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */ const init = (params)=>{
        // Clean up the old popup container if it exists
        const oldContainerExisted = resetOldContainer();
        /* istanbul ignore if */ if (isNodeEnv()) {
            error("SweetAlert2 requires document to initialize");
            return;
        }
        const container = document.createElement("div");
        container.className = swalClasses.container;
        if (oldContainerExisted) addClass(container, swalClasses["no-transition"]);
        setInnerHtml(container, sweetHTML);
        const targetElement = getTarget(params.target);
        targetElement.appendChild(container);
        setupAccessibility(params);
        setupRTL(targetElement);
        addInputChangeListeners();
    };
    /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */ const parseHtmlToContainer = (param, target)=>{
        // DOM element
        if (param instanceof HTMLElement) target.appendChild(param);
        else if (typeof param === "object") handleObject(param, target);
        else if (param) setInnerHtml(target, param);
    };
    /**
   * @param {object} param
   * @param {HTMLElement} target
   */ const handleObject = (param, target)=>{
        // JQuery element(s)
        if (param.jquery) handleJqueryElem(target, param);
        else setInnerHtml(target, param.toString());
    };
    /**
   * @param {HTMLElement} target
   * @param {HTMLElement} elem
   */ const handleJqueryElem = (target, elem)=>{
        target.textContent = "";
        if (0 in elem) for(let i = 0; (i in elem); i++)target.appendChild(elem[i].cloneNode(true));
        else target.appendChild(elem.cloneNode(true));
    };
    /**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */ const animationEndEvent = (()=>{
        // Prevent run in Node env
        /* istanbul ignore if */ if (isNodeEnv()) return false;
        const testEl = document.createElement("div");
        const transEndEventNames = {
            WebkitAnimation: "webkitAnimationEnd",
            // Chrome, Safari and Opera
            animation: "animationend" // Standard syntax
        };
        for(const i in transEndEventNames){
            if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== "undefined") return transEndEventNames[i];
        }
        return false;
    })();
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderActions = (instance, params)=>{
        const actions = getActions();
        const loader = getLoader();
        // Actions (buttons) wrapper
        if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) hide(actions);
        else show(actions);
        // Custom class
        applyCustomClass(actions, params, "actions");
        // Render all the buttons
        renderButtons(actions, loader, params);
        // Loader
        setInnerHtml(loader, params.loaderHtml);
        applyCustomClass(loader, params, "loader");
    };
    /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */ function renderButtons(actions, loader, params) {
        const confirmButton = getConfirmButton();
        const denyButton = getDenyButton();
        const cancelButton = getCancelButton();
        // Render buttons
        renderButton(confirmButton, "confirm", params);
        renderButton(denyButton, "deny", params);
        renderButton(cancelButton, "cancel", params);
        handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
        if (params.reverseButtons) {
            if (params.toast) {
                actions.insertBefore(cancelButton, confirmButton);
                actions.insertBefore(denyButton, confirmButton);
            } else {
                actions.insertBefore(cancelButton, loader);
                actions.insertBefore(denyButton, loader);
                actions.insertBefore(confirmButton, loader);
            }
        }
    }
    /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */ function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
        if (!params.buttonsStyling) {
            removeClass([
                confirmButton,
                denyButton,
                cancelButton
            ], swalClasses.styled);
            return;
        }
        addClass([
            confirmButton,
            denyButton,
            cancelButton
        ], swalClasses.styled);
        // Buttons background colors
        if (params.confirmButtonColor) {
            confirmButton.style.backgroundColor = params.confirmButtonColor;
            addClass(confirmButton, swalClasses["default-outline"]);
        }
        if (params.denyButtonColor) {
            denyButton.style.backgroundColor = params.denyButtonColor;
            addClass(denyButton, swalClasses["default-outline"]);
        }
        if (params.cancelButtonColor) {
            cancelButton.style.backgroundColor = params.cancelButtonColor;
            addClass(cancelButton, swalClasses["default-outline"]);
        }
    }
    /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */ function renderButton(button, buttonType, params) {
        toggle(button, params[`show${capitalizeFirstLetter(buttonType)}Button`], "inline-block");
        setInnerHtml(button, params[`${buttonType}ButtonText`]); // Set caption text
        button.setAttribute("aria-label", params[`${buttonType}ButtonAriaLabel`]); // ARIA label
        // Add buttons custom classes
        button.className = swalClasses[buttonType];
        applyCustomClass(button, params, `${buttonType}Button`);
        addClass(button, params[`${buttonType}ButtonClass`]);
    }
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderCloseButton = (instance, params)=>{
        const closeButton = getCloseButton();
        if (!closeButton) return;
        setInnerHtml(closeButton, params.closeButtonHtml || "");
        // Custom class
        applyCustomClass(closeButton, params, "closeButton");
        toggle(closeButton, params.showCloseButton);
        closeButton.setAttribute("aria-label", params.closeButtonAriaLabel || "");
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderContainer = (instance, params)=>{
        const container = getContainer();
        if (!container) return;
        handleBackdropParam(container, params.backdrop);
        handlePositionParam(container, params.position);
        handleGrowParam(container, params.grow);
        // Custom class
        applyCustomClass(container, params, "container");
    };
    /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */ function handleBackdropParam(container, backdrop) {
        if (typeof backdrop === "string") container.style.background = backdrop;
        else if (!backdrop) addClass([
            document.documentElement,
            document.body
        ], swalClasses["no-backdrop"]);
    }
    /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */ function handlePositionParam(container, position) {
        if (position in swalClasses) addClass(container, swalClasses[position]);
        else {
            warn('The "position" parameter is not valid, defaulting to "center"');
            addClass(container, swalClasses.center);
        }
    }
    /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */ function handleGrowParam(container, grow) {
        if (grow && typeof grow === "string") {
            const growClass = `grow-${grow}`;
            if (growClass in swalClasses) addClass(container, swalClasses[growClass]);
        }
    }
    /// <reference path="../../../../sweetalert2.d.ts"/>
    /** @type {InputClass[]} */ const inputClasses = [
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "textarea"
    ];
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderInput = (instance, params)=>{
        const popup = getPopup();
        const innerParams = privateProps.innerParams.get(instance);
        const rerender = !innerParams || params.input !== innerParams.input;
        inputClasses.forEach((inputClass)=>{
            const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
            // set attributes
            setAttributes(inputClass, params.inputAttributes);
            // set class
            inputContainer.className = swalClasses[inputClass];
            if (rerender) hide(inputContainer);
        });
        if (params.input) {
            if (rerender) showInput(params);
            // set custom class
            setCustomClass(params);
        }
    };
    /**
   * @param {SweetAlertOptions} params
   */ const showInput = (params)=>{
        if (!renderInputType[params.input]) {
            error(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`);
            return;
        }
        const inputContainer = getInputContainer(params.input);
        const input = renderInputType[params.input](inputContainer, params);
        show(inputContainer);
        // input autofocus
        if (params.inputAutoFocus) setTimeout(()=>{
            focusInput(input);
        });
    };
    /**
   * @param {HTMLInputElement} input
   */ const removeAttributes = (input)=>{
        for(let i = 0; i < input.attributes.length; i++){
            const attrName = input.attributes[i].name;
            if (![
                "type",
                "value",
                "style"
            ].includes(attrName)) input.removeAttribute(attrName);
        }
    };
    /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */ const setAttributes = (inputClass, inputAttributes)=>{
        const input = getInput$1(getPopup(), inputClass);
        if (!input) return;
        removeAttributes(input);
        for(const attr in inputAttributes)input.setAttribute(attr, inputAttributes[attr]);
    };
    /**
   * @param {SweetAlertOptions} params
   */ const setCustomClass = (params)=>{
        const inputContainer = getInputContainer(params.input);
        if (typeof params.customClass === "object") addClass(inputContainer, params.customClass.input);
    };
    /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */ const setInputPlaceholder = (input, params)=>{
        if (!input.placeholder || params.inputPlaceholder) input.placeholder = params.inputPlaceholder;
    };
    /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */ const setInputLabel = (input, prependTo, params)=>{
        if (params.inputLabel) {
            input.id = swalClasses.input;
            const label = document.createElement("label");
            const labelClass = swalClasses["input-label"];
            label.setAttribute("for", input.id);
            label.className = labelClass;
            if (typeof params.customClass === "object") addClass(label, params.customClass.inputLabel);
            label.innerText = params.inputLabel;
            prependTo.insertAdjacentElement("beforebegin", label);
        }
    };
    /**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */ const getInputContainer = (inputType)=>{
        return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
    };
    /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */ const checkAndSetInputValue = (input, inputValue)=>{
        if ([
            "string",
            "number"
        ].includes(typeof inputValue)) input.value = `${inputValue}`;
        else if (!isPromise(inputValue)) warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
    };
    /** @type {Record<string, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */ const renderInputType = {};
    /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */ renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params)=>{
        checkAndSetInputValue(input, params.inputValue);
        setInputLabel(input, input, params);
        setInputPlaceholder(input, params);
        input.type = params.input;
        return input;
    };
    /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */ renderInputType.file = (input, params)=>{
        setInputLabel(input, input, params);
        setInputPlaceholder(input, params);
        return input;
    };
    /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */ renderInputType.range = (range, params)=>{
        const rangeInput = range.querySelector("input");
        const rangeOutput = range.querySelector("output");
        checkAndSetInputValue(rangeInput, params.inputValue);
        rangeInput.type = params.input;
        checkAndSetInputValue(rangeOutput, params.inputValue);
        setInputLabel(rangeInput, range, params);
        return range;
    };
    /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */ renderInputType.select = (select, params)=>{
        select.textContent = "";
        if (params.inputPlaceholder) {
            const placeholder = document.createElement("option");
            setInnerHtml(placeholder, params.inputPlaceholder);
            placeholder.value = "";
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
        }
        setInputLabel(select, select, params);
        return select;
    };
    /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */ renderInputType.radio = (radio)=>{
        radio.textContent = "";
        return radio;
    };
    /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */ renderInputType.checkbox = (checkboxContainer, params)=>{
        const checkbox = getInput$1(getPopup(), "checkbox");
        checkbox.value = "1";
        checkbox.id = swalClasses.checkbox;
        checkbox.checked = Boolean(params.inputValue);
        const label = checkboxContainer.querySelector("span");
        setInnerHtml(label, params.inputPlaceholder);
        return checkbox;
    };
    /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */ renderInputType.textarea = (textarea, params)=>{
        checkAndSetInputValue(textarea, params.inputValue);
        setInputPlaceholder(textarea, params);
        setInputLabel(textarea, textarea, params);
        /**
     * @param {HTMLElement} el
     * @returns {number}
     */ const getMargin = (el)=>parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
        // https://github.com/sweetalert2/sweetalert2/issues/2291
        setTimeout(()=>{
            // https://github.com/sweetalert2/sweetalert2/issues/1699
            if ("MutationObserver" in window) {
                const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
                const textareaResizeHandler = ()=>{
                    const textareaWidth = textarea.offsetWidth + getMargin(textarea);
                    if (textareaWidth > initialPopupWidth) getPopup().style.width = `${textareaWidth}px`;
                    else getPopup().style.width = null;
                };
                new MutationObserver(textareaResizeHandler).observe(textarea, {
                    attributes: true,
                    attributeFilter: [
                        "style"
                    ]
                });
            }
        });
        return textarea;
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderContent = (instance, params)=>{
        const htmlContainer = getHtmlContainer();
        if (!htmlContainer) return;
        applyCustomClass(htmlContainer, params, "htmlContainer");
        // Content as HTML
        if (params.html) {
            parseHtmlToContainer(params.html, htmlContainer);
            show(htmlContainer, "block");
        } else if (params.text) {
            htmlContainer.textContent = params.text;
            show(htmlContainer, "block");
        } else hide(htmlContainer);
        renderInput(instance, params);
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderFooter = (instance, params)=>{
        const footer = getFooter();
        if (!footer) return;
        toggle(footer, params.footer);
        if (params.footer) parseHtmlToContainer(params.footer, footer);
        // Custom class
        applyCustomClass(footer, params, "footer");
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderIcon = (instance, params)=>{
        const innerParams = privateProps.innerParams.get(instance);
        const icon = getIcon();
        // if the given icon already rendered, apply the styling without re-rendering the icon
        if (innerParams && params.icon === innerParams.icon) {
            // Custom or default content
            setContent(icon, params);
            applyStyles(icon, params);
            return;
        }
        if (!params.icon && !params.iconHtml) {
            hide(icon);
            return;
        }
        if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
            error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
            hide(icon);
            return;
        }
        show(icon);
        // Custom or default content
        setContent(icon, params);
        applyStyles(icon, params);
        // Animate icon
        addClass(icon, params.showClass.icon);
    };
    /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */ const applyStyles = (icon, params)=>{
        for(const iconType in iconTypes)if (params.icon !== iconType) removeClass(icon, iconTypes[iconType]);
        addClass(icon, iconTypes[params.icon]);
        // Icon color
        setColor(icon, params);
        // Success icon background color
        adjustSuccessIconBackgroundColor();
        // Custom class
        applyCustomClass(icon, params, "icon");
    };
    // Adjust success icon background color to match the popup background color
    const adjustSuccessIconBackgroundColor = ()=>{
        const popup = getPopup();
        const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue("background-color");
        /** @type {NodeListOf<HTMLElement>} */ const successIconParts = popup.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
        for(let i = 0; i < successIconParts.length; i++)successIconParts[i].style.backgroundColor = popupBackgroundColor;
    };
    const successIconHtml = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;
    const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;
    /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */ const setContent = (icon, params)=>{
        let oldContent = icon.innerHTML;
        let newContent;
        if (params.iconHtml) newContent = iconContent(params.iconHtml);
        else if (params.icon === "success") {
            newContent = successIconHtml;
            oldContent = oldContent.replace(/ style=".*?"/g, ""); // undo adjustSuccessIconBackgroundColor()
        } else if (params.icon === "error") newContent = errorIconHtml;
        else {
            const defaultIconHtml = {
                question: "?",
                warning: "!",
                info: "i"
            };
            newContent = iconContent(defaultIconHtml[params.icon]);
        }
        if (oldContent.trim() !== newContent.trim()) setInnerHtml(icon, newContent);
    };
    /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */ const setColor = (icon, params)=>{
        if (!params.iconColor) return;
        icon.style.color = params.iconColor;
        icon.style.borderColor = params.iconColor;
        for (const sel of [
            ".swal2-success-line-tip",
            ".swal2-success-line-long",
            ".swal2-x-mark-line-left",
            ".swal2-x-mark-line-right"
        ])setStyle(icon, sel, "backgroundColor", params.iconColor);
        setStyle(icon, ".swal2-success-ring", "borderColor", params.iconColor);
    };
    /**
   * @param {string} content
   * @returns {string}
   */ const iconContent = (content)=>`<div class="${swalClasses["icon-content"]}">${content}</div>`;
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderImage = (instance, params)=>{
        const image = getImage();
        if (!image) return;
        if (!params.imageUrl) {
            hide(image);
            return;
        }
        show(image, "");
        // Src, alt
        image.setAttribute("src", params.imageUrl);
        image.setAttribute("alt", params.imageAlt || "");
        // Width, height
        applyNumericalStyle(image, "width", params.imageWidth);
        applyNumericalStyle(image, "height", params.imageHeight);
        // Class
        image.className = swalClasses.image;
        applyCustomClass(image, params, "image");
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderPopup = (instance, params)=>{
        const container = getContainer();
        const popup = getPopup();
        if (!container || !popup) return;
        // Width
        // https://github.com/sweetalert2/sweetalert2/issues/2170
        if (params.toast) {
            applyNumericalStyle(container, "width", params.width);
            popup.style.width = "100%";
            const loader = getLoader();
            loader && popup.insertBefore(loader, getIcon());
        } else applyNumericalStyle(popup, "width", params.width);
        // Padding
        applyNumericalStyle(popup, "padding", params.padding);
        // Color
        if (params.color) popup.style.color = params.color;
        // Background
        if (params.background) popup.style.background = params.background;
        hide(getValidationMessage());
        // Classes
        addClasses$1(popup, params);
    };
    /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */ const addClasses$1 = (popup, params)=>{
        const showClass = params.showClass || {};
        // Default Class + showClass when updating Swal.update({})
        popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? showClass.popup : ""}`;
        if (params.toast) {
            addClass([
                document.documentElement,
                document.body
            ], swalClasses["toast-shown"]);
            addClass(popup, swalClasses.toast);
        } else addClass(popup, swalClasses.modal);
        // Custom class
        applyCustomClass(popup, params, "popup");
        if (typeof params.customClass === "string") addClass(popup, params.customClass);
        // Icon class (#1842)
        if (params.icon) addClass(popup, swalClasses[`icon-${params.icon}`]);
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderProgressSteps = (instance, params)=>{
        const progressStepsContainer = getProgressSteps();
        if (!progressStepsContainer) return;
        const { progressSteps, currentProgressStep } = params;
        if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
            hide(progressStepsContainer);
            return;
        }
        show(progressStepsContainer);
        progressStepsContainer.textContent = "";
        if (currentProgressStep >= progressSteps.length) warn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");
        progressSteps.forEach((step, index)=>{
            const stepEl = createStepElement(step);
            progressStepsContainer.appendChild(stepEl);
            if (index === currentProgressStep) addClass(stepEl, swalClasses["active-progress-step"]);
            if (index !== progressSteps.length - 1) {
                const lineEl = createLineElement(params);
                progressStepsContainer.appendChild(lineEl);
            }
        });
    };
    /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */ const createStepElement = (step)=>{
        const stepEl = document.createElement("li");
        addClass(stepEl, swalClasses["progress-step"]);
        setInnerHtml(stepEl, step);
        return stepEl;
    };
    /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */ const createLineElement = (params)=>{
        const lineEl = document.createElement("li");
        addClass(lineEl, swalClasses["progress-step-line"]);
        if (params.progressStepsDistance) applyNumericalStyle(lineEl, "width", params.progressStepsDistance);
        return lineEl;
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderTitle = (instance, params)=>{
        const title = getTitle();
        if (!title) return;
        toggle(title, params.title || params.titleText, "block");
        if (params.title) parseHtmlToContainer(params.title, title);
        if (params.titleText) title.innerText = params.titleText;
        // Custom class
        applyCustomClass(title, params, "title");
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const render = (instance, params)=>{
        renderPopup(instance, params);
        renderContainer(instance, params);
        renderProgressSteps(instance, params);
        renderIcon(instance, params);
        renderImage(instance, params);
        renderTitle(instance, params);
        renderCloseButton(instance, params);
        renderContent(instance, params);
        renderActions(instance, params);
        renderFooter(instance, params);
        const popup = getPopup();
        if (typeof params.didRender === "function" && popup) params.didRender(popup);
    };
    /*
   * Global function to determine if SweetAlert2 popup is shown
   */ const isVisible = ()=>{
        return isVisible$1(getPopup());
    };
    /*
   * Global function to click 'Confirm' button
   */ const clickConfirm = ()=>getConfirmButton() && getConfirmButton().click();
    /*
   * Global function to click 'Deny' button
   */ const clickDeny = ()=>getDenyButton() && getDenyButton().click();
    /*
   * Global function to click 'Cancel' button
   */ const clickCancel = ()=>getCancelButton() && getCancelButton().click();
    /** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */ /** @type {Record<DismissReason, DismissReason>} */ const DismissReason = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer"
    });
    /**
   * @param {GlobalState} globalState
   */ const removeKeydownHandler = (globalState)=>{
        if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
            globalState.keydownTarget.removeEventListener("keydown", globalState.keydownHandler, {
                capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = false;
        }
    };
    /**
   * @param {SweetAlert} instance
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */ const addKeydownHandler = (instance, globalState, innerParams, dismissWith)=>{
        removeKeydownHandler(globalState);
        if (!innerParams.toast) {
            globalState.keydownHandler = (e)=>keydownHandler(instance, e, dismissWith);
            globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
            globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
            globalState.keydownTarget.addEventListener("keydown", globalState.keydownHandler, {
                capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = true;
        }
    };
    /**
   * @param {number} index
   * @param {number} increment
   */ const setFocus = (index, increment)=>{
        const focusableElements = getFocusableElements();
        // search for visible elements and select the next possible match
        if (focusableElements.length) {
            index = index + increment;
            // rollover to first item
            if (index === focusableElements.length) index = 0;
            else if (index === -1) index = focusableElements.length - 1;
            focusableElements[index].focus();
            return;
        }
        // no visible focusable elements, focus the popup
        getPopup().focus();
    };
    const arrowKeysNextButton = [
        "ArrowRight",
        "ArrowDown"
    ];
    const arrowKeysPreviousButton = [
        "ArrowLeft",
        "ArrowUp"
    ];
    /**
   * @param {SweetAlert} instance
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */ const keydownHandler = (instance, event, dismissWith)=>{
        const innerParams = privateProps.innerParams.get(instance);
        if (!innerParams) return; // This instance has already been destroyed
        // Ignore keydown during IME composition
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
        // https://github.com/sweetalert2/sweetalert2/issues/720
        // https://github.com/sweetalert2/sweetalert2/issues/2406
        if (event.isComposing || event.keyCode === 229) return;
        if (innerParams.stopKeydownPropagation) event.stopPropagation();
        // ENTER
        if (event.key === "Enter") handleEnter(instance, event, innerParams);
        else if (event.key === "Tab") handleTab(event);
        else if ([
            ...arrowKeysNextButton,
            ...arrowKeysPreviousButton
        ].includes(event.key)) handleArrows(event.key);
        else if (event.key === "Escape") handleEsc(event, innerParams, dismissWith);
    };
    /**
   * @param {SweetAlert} instance
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */ const handleEnter = (instance, event, innerParams)=>{
        // https://github.com/sweetalert2/sweetalert2/issues/2386
        if (!callIfFunction(innerParams.allowEnterKey)) return;
        if (event.target && instance.getInput() && event.target instanceof HTMLElement && event.target.outerHTML === instance.getInput().outerHTML) {
            if ([
                "textarea",
                "file"
            ].includes(innerParams.input)) return; // do not submit
            clickConfirm();
            event.preventDefault();
        }
    };
    /**
   * @param {KeyboardEvent} event
   */ const handleTab = (event)=>{
        const targetElement = event.target;
        const focusableElements = getFocusableElements();
        let btnIndex = -1;
        for(let i = 0; i < focusableElements.length; i++)if (targetElement === focusableElements[i]) {
            btnIndex = i;
            break;
        }
        // Cycle to the next button
        if (!event.shiftKey) setFocus(btnIndex, 1);
        else setFocus(btnIndex, -1);
        event.stopPropagation();
        event.preventDefault();
    };
    /**
   * @param {string} key
   */ const handleArrows = (key)=>{
        const confirmButton = getConfirmButton();
        const denyButton = getDenyButton();
        const cancelButton = getCancelButton();
        /** @type HTMLElement[] */ const buttons = [
            confirmButton,
            denyButton,
            cancelButton
        ];
        if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) return;
        const sibling = arrowKeysNextButton.includes(key) ? "nextElementSibling" : "previousElementSibling";
        let buttonToFocus = document.activeElement;
        for(let i = 0; i < getActions().children.length; i++){
            buttonToFocus = buttonToFocus[sibling];
            if (!buttonToFocus) return;
            if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) break;
        }
        if (buttonToFocus instanceof HTMLButtonElement) buttonToFocus.focus();
    };
    /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */ const handleEsc = (event, innerParams, dismissWith)=>{
        if (callIfFunction(innerParams.allowEscapeKey)) {
            event.preventDefault();
            dismissWith(DismissReason.esc);
        }
    };
    /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */ var privateMethods = {
        swalPromiseResolve: new WeakMap(),
        swalPromiseReject: new WeakMap()
    };
    // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
    // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
    // elements not within the active modal dialog will not be surfaced if a user opens a screen
    // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.
    const setAriaHidden = ()=>{
        const bodyChildren = Array.from(document.body.children);
        bodyChildren.forEach((el)=>{
            if (el === getContainer() || el.contains(getContainer())) return;
            if (el.hasAttribute("aria-hidden")) el.setAttribute("data-previous-aria-hidden", el.getAttribute("aria-hidden") || "");
            el.setAttribute("aria-hidden", "true");
        });
    };
    const unsetAriaHidden = ()=>{
        const bodyChildren = Array.from(document.body.children);
        bodyChildren.forEach((el)=>{
            if (el.hasAttribute("data-previous-aria-hidden")) {
                el.setAttribute("aria-hidden", el.getAttribute("data-previous-aria-hidden") || "");
                el.removeAttribute("data-previous-aria-hidden");
            } else el.removeAttribute("aria-hidden");
        });
    };
    /* istanbul ignore file */ // Fix iOS scrolling http://stackoverflow.com/q/39626302
    const iOSfix = ()=>{
        const iOS = // @ts-ignore
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
        if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
            const offset = document.body.scrollTop;
            document.body.style.top = `${offset * -1}px`;
            addClass(document.body, swalClasses.iosfix);
            lockBodyScroll();
            addBottomPaddingForTallPopups();
        }
    };
    /**
   * https://github.com/sweetalert2/sweetalert2/issues/1948
   */ const addBottomPaddingForTallPopups = ()=>{
        const ua = navigator.userAgent;
        const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
        const webkit = !!ua.match(/WebKit/i);
        const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
        if (iOSSafari) {
            const bottomPanelHeight = 44;
            if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) getContainer().style.paddingBottom = `${bottomPanelHeight}px`;
        }
    };
    /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */ const lockBodyScroll = ()=>{
        const container = getContainer();
        let preventTouchMove;
        /**
     * @param {TouchEvent} event
     */ container.ontouchstart = (event)=>{
            preventTouchMove = shouldPreventTouchMove(event);
        };
        /**
     * @param {TouchEvent} event
     */ container.ontouchmove = (event)=>{
            if (preventTouchMove) {
                event.preventDefault();
                event.stopPropagation();
            }
        };
    };
    /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */ const shouldPreventTouchMove = (event)=>{
        const target = event.target;
        const container = getContainer();
        if (isStylus(event) || isZoom(event)) return false;
        if (target === container) return true;
        if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== "INPUT" && // #1603
        target.tagName !== "TEXTAREA" && // #2266
        !(isScrollable(getHtmlContainer()) && // #1944
        getHtmlContainer().contains(target))) return true;
        return false;
    };
    /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */ const isStylus = (event)=>{
        return event.touches && event.touches.length && event.touches[0].touchType === "stylus";
    };
    /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */ const isZoom = (event)=>{
        return event.touches && event.touches.length > 1;
    };
    const undoIOSfix = ()=>{
        if (hasClass(document.body, swalClasses.iosfix)) {
            const offset = parseInt(document.body.style.top, 10);
            removeClass(document.body, swalClasses.iosfix);
            document.body.style.top = "";
            document.body.scrollTop = offset * -1;
        }
    };
    /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */ const measureScrollbar = ()=>{
        const scrollDiv = document.createElement("div");
        scrollDiv.className = swalClasses["scrollbar-measure"];
        document.body.appendChild(scrollDiv);
        const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    /**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */ let previousBodyPadding = null;
    const fixScrollbar = ()=>{
        // for queues, do not do this more than once
        if (previousBodyPadding !== null) return;
        // if the body has overflow
        if (document.body.scrollHeight > window.innerHeight) {
            // add padding so the content doesn't shift after removal of scrollbar
            previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));
            document.body.style.paddingRight = `${previousBodyPadding + measureScrollbar()}px`;
        }
    };
    const undoScrollbar = ()=>{
        if (previousBodyPadding !== null) {
            document.body.style.paddingRight = `${previousBodyPadding}px`;
            previousBodyPadding = null;
        }
    };
    /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */ function removePopupAndResetState(instance, container, returnFocus, didClose) {
        if (isToast()) triggerDidCloseAndDispose(instance, didClose);
        else {
            restoreActiveElement(returnFocus).then(()=>triggerDidCloseAndDispose(instance, didClose));
            removeKeydownHandler(globalState);
        }
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        // workaround for #2088
        // for some reason removing the container in Safari will scroll the document to bottom
        if (isSafari) {
            container.setAttribute("style", "display:none !important");
            container.removeAttribute("class");
            container.innerHTML = "";
        } else container.remove();
        if (isModal()) {
            undoScrollbar();
            undoIOSfix();
            unsetAriaHidden();
        }
        removeBodyClasses();
    }
    /**
   * Remove SweetAlert2 classes from body
   */ function removeBodyClasses() {
        removeClass([
            document.documentElement,
            document.body
        ], [
            swalClasses.shown,
            swalClasses["height-auto"],
            swalClasses["no-backdrop"],
            swalClasses["toast-shown"]
        ]);
    }
    /**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */ function close(resolveValue) {
        resolveValue = prepareResolveValue(resolveValue);
        const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
        const didClose = triggerClosePopup(this);
        if (this.isAwaitingPromise) // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
        {
            if (!resolveValue.isDismissed) {
                handleAwaitingPromise(this);
                swalPromiseResolve(resolveValue);
            }
        } else if (didClose) // Resolve Swal promise
        swalPromiseResolve(resolveValue);
    }
    const triggerClosePopup = (instance)=>{
        const popup = getPopup();
        if (!popup) return false;
        const innerParams = privateProps.innerParams.get(instance);
        if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) return false;
        removeClass(popup, innerParams.showClass.popup);
        addClass(popup, innerParams.hideClass.popup);
        const backdrop = getContainer();
        removeClass(backdrop, innerParams.showClass.backdrop);
        addClass(backdrop, innerParams.hideClass.backdrop);
        handlePopupAnimation(instance, popup, innerParams);
        return true;
    };
    /**
   * @param {any} error
   */ function rejectPromise(error) {
        const rejectPromise = privateMethods.swalPromiseReject.get(this);
        handleAwaitingPromise(this);
        if (rejectPromise) // Reject Swal promise
        rejectPromise(error);
    }
    /**
   * @param {SweetAlert} instance
   */ const handleAwaitingPromise = (instance)=>{
        if (instance.isAwaitingPromise) {
            delete instance.isAwaitingPromise;
            // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
            if (!privateProps.innerParams.get(instance)) instance._destroy();
        }
    };
    /**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */ const prepareResolveValue = (resolveValue)=>{
        // When user calls Swal.close()
        if (typeof resolveValue === "undefined") return {
            isConfirmed: false,
            isDenied: false,
            isDismissed: true
        };
        return Object.assign({
            isConfirmed: false,
            isDenied: false,
            isDismissed: false
        }, resolveValue);
    };
    /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */ const handlePopupAnimation = (instance, popup, innerParams)=>{
        const container = getContainer();
        // If animation is supported, animate
        const animationIsSupported = animationEndEvent && hasCssAnimation(popup);
        if (typeof innerParams.willClose === "function") innerParams.willClose(popup);
        if (animationIsSupported) animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
        else // Otherwise, remove immediately
        removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    };
    /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */ const animatePopup = (instance, popup, container, returnFocus, didClose)=>{
        globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
        popup.addEventListener(animationEndEvent, function(e) {
            if (e.target === popup) {
                globalState.swalCloseEventFinishedCallback();
                delete globalState.swalCloseEventFinishedCallback;
            }
        });
    };
    /**
   * @param {SweetAlert} instance
   * @param {Function} didClose
   */ const triggerDidCloseAndDispose = (instance, didClose)=>{
        setTimeout(()=>{
            if (typeof didClose === "function") didClose.bind(instance.params)();
            // instance might have been destroyed already
            if (instance._destroy) instance._destroy();
        });
    };
    /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement} [buttonToReplace]
   */ const showLoading = (buttonToReplace)=>{
        let popup = getPopup();
        if (!popup) new Swal(); // eslint-disable-line no-new
        popup = getPopup();
        const loader = getLoader();
        if (isToast()) hide(getIcon());
        else replaceButton(popup, buttonToReplace);
        show(loader);
        popup.setAttribute("data-loading", "true");
        popup.setAttribute("aria-busy", "true");
        popup.focus();
    };
    /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement} [buttonToReplace]
   */ const replaceButton = (popup, buttonToReplace)=>{
        const actions = getActions();
        const loader = getLoader();
        if (!buttonToReplace && isVisible$1(getConfirmButton())) buttonToReplace = getConfirmButton();
        show(actions);
        if (buttonToReplace) {
            hide(buttonToReplace);
            loader.setAttribute("data-button-to-replace", buttonToReplace.className);
        }
        loader.parentNode.insertBefore(loader, buttonToReplace);
        addClass([
            popup,
            actions
        ], swalClasses.loading);
    };
    /**
   * @typedef { string | number | boolean } InputValue
   */ /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const handleInputOptionsAndValue = (instance, params)=>{
        if (params.input === "select" || params.input === "radio") handleInputOptions(instance, params);
        else if ([
            "text",
            "email",
            "number",
            "tel",
            "textarea"
        ].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
            showLoading(getConfirmButton());
            handleInputValue(instance, params);
        }
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {string | number | File | FileList | null}
   */ const getInputValue = (instance, innerParams)=>{
        const input = instance.getInput();
        if (!input) return null;
        switch(innerParams.input){
            case "checkbox":
                return getCheckboxValue(input);
            case "radio":
                return getRadioValue(input);
            case "file":
                return getFileValue(input);
            default:
                return innerParams.inputAutoTrim ? input.value.trim() : input.value;
        }
    };
    /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */ const getCheckboxValue = (input)=>input.checked ? 1 : 0;
    /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */ const getRadioValue = (input)=>input.checked ? input.value : null;
    /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */ const getFileValue = (input)=>input.files.length ? input.getAttribute("multiple") !== null ? input.files : input.files[0] : null;
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const handleInputOptions = (instance, params)=>{
        const popup = getPopup();
        /**
     * @param {Record<string, any>} inputOptions
     */ const processInputOptions = (inputOptions)=>{
            populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);
        };
        if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
            showLoading(getConfirmButton());
            asPromise(params.inputOptions).then((inputOptions)=>{
                instance.hideLoading();
                processInputOptions(inputOptions);
            });
        } else if (typeof params.inputOptions === "object") processInputOptions(params.inputOptions);
        else error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const handleInputValue = (instance, params)=>{
        const input = instance.getInput();
        hide(input);
        asPromise(params.inputValue).then((inputValue)=>{
            input.value = params.input === "number" ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
            show(input);
            input.focus();
            instance.hideLoading();
        }).catch((err)=>{
            error(`Error in inputValue promise: ${err}`);
            input.value = "";
            show(input);
            input.focus();
            instance.hideLoading();
        });
    };
    const populateInputOptions = {
        /**
     * @param {HTMLElement} popup
     * @param {Record<string, any>} inputOptions
     * @param {SweetAlertOptions} params
     */ select: (popup, inputOptions, params)=>{
            const select = getDirectChildByClass(popup, swalClasses.select);
            /**
       * @param {HTMLElement} parent
       * @param {string} optionLabel
       * @param {string} optionValue
       */ const renderOption = (parent, optionLabel, optionValue)=>{
                const option = document.createElement("option");
                option.value = optionValue;
                setInnerHtml(option, optionLabel);
                option.selected = isSelected(optionValue, params.inputValue);
                parent.appendChild(option);
            };
            inputOptions.forEach((inputOption)=>{
                const optionValue = inputOption[0];
                const optionLabel = inputOption[1];
                // <optgroup> spec:
                // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
                // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
                // check whether this is a <optgroup>
                if (Array.isArray(optionLabel)) {
                    // if it is an array, then it is an <optgroup>
                    const optgroup = document.createElement("optgroup");
                    optgroup.label = optionValue;
                    optgroup.disabled = false; // not configurable for now
                    select.appendChild(optgroup);
                    optionLabel.forEach((o)=>renderOption(optgroup, o[1], o[0]));
                } else // case of <option>
                renderOption(select, optionLabel, optionValue);
            });
            select.focus();
        },
        /**
     * @param {HTMLElement} popup
     * @param {Record<string, any>} inputOptions
     * @param {SweetAlertOptions} params
     */ radio: (popup, inputOptions, params)=>{
            const radio = getDirectChildByClass(popup, swalClasses.radio);
            inputOptions.forEach((inputOption)=>{
                const radioValue = inputOption[0];
                const radioLabel = inputOption[1];
                const radioInput = document.createElement("input");
                const radioLabelElement = document.createElement("label");
                radioInput.type = "radio";
                radioInput.name = swalClasses.radio;
                radioInput.value = radioValue;
                if (isSelected(radioValue, params.inputValue)) radioInput.checked = true;
                const label = document.createElement("span");
                setInnerHtml(label, radioLabel);
                label.className = swalClasses.label;
                radioLabelElement.appendChild(radioInput);
                radioLabelElement.appendChild(label);
                radio.appendChild(radioLabelElement);
            });
            const radios = radio.querySelectorAll("input");
            if (radios.length) radios[0].focus();
        }
    };
    /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @returns {Array<Array<string>>}
   */ const formatInputOptions = (inputOptions)=>{
        const result = [];
        if (typeof Map !== "undefined" && inputOptions instanceof Map) inputOptions.forEach((value, key)=>{
            let valueFormatted = value;
            if (typeof valueFormatted === "object") // case of <optgroup>
            valueFormatted = formatInputOptions(valueFormatted);
            result.push([
                key,
                valueFormatted
            ]);
        });
        else Object.keys(inputOptions).forEach((key)=>{
            let valueFormatted = inputOptions[key];
            if (typeof valueFormatted === "object") // case of <optgroup>
            valueFormatted = formatInputOptions(valueFormatted);
            result.push([
                key,
                valueFormatted
            ]);
        });
        return result;
    };
    /**
   * @param {string} optionValue
   * @param {InputValue | Promise<InputValue> | { toPromise: () => InputValue }} inputValue
   * @returns {boolean}
   */ const isSelected = (optionValue, inputValue)=>{
        return inputValue && inputValue.toString() === optionValue.toString();
    };
    /**
   * @param {SweetAlert} instance
   */ const handleConfirmButtonClick = (instance)=>{
        const innerParams = privateProps.innerParams.get(instance);
        instance.disableButtons();
        if (innerParams.input) handleConfirmOrDenyWithInput(instance, "confirm");
        else confirm(instance, true);
    };
    /**
   * @param {SweetAlert} instance
   */ const handleDenyButtonClick = (instance)=>{
        const innerParams = privateProps.innerParams.get(instance);
        instance.disableButtons();
        if (innerParams.returnInputValueOnDeny) handleConfirmOrDenyWithInput(instance, "deny");
        else deny(instance, false);
    };
    /**
   * @param {SweetAlert} instance
   * @param {Function} dismissWith
   */ const handleCancelButtonClick = (instance, dismissWith)=>{
        instance.disableButtons();
        dismissWith(DismissReason.cancel);
    };
    /**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */ const handleConfirmOrDenyWithInput = (instance, type)=>{
        const innerParams = privateProps.innerParams.get(instance);
        if (!innerParams.input) {
            error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
            return;
        }
        const inputValue = getInputValue(instance, innerParams);
        if (innerParams.inputValidator) handleInputValidator(instance, inputValue, type);
        else if (!instance.getInput().checkValidity()) {
            instance.enableButtons();
            instance.showValidationMessage(innerParams.validationMessage);
        } else if (type === "deny") deny(instance, inputValue);
        else confirm(instance, inputValue);
    };
    /**
   * @param {SweetAlert} instance
   * @param {string | number | File | FileList | null} inputValue
   * @param {'confirm' | 'deny'} type
   */ const handleInputValidator = (instance, inputValue, type)=>{
        const innerParams = privateProps.innerParams.get(instance);
        instance.disableInput();
        const validationPromise = Promise.resolve().then(()=>asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
        validationPromise.then((validationMessage)=>{
            instance.enableButtons();
            instance.enableInput();
            if (validationMessage) instance.showValidationMessage(validationMessage);
            else if (type === "deny") deny(instance, inputValue);
            else confirm(instance, inputValue);
        });
    };
    /**
   * @param {SweetAlert} instance
   * @param {any} value
   */ const deny = (instance, value)=>{
        const innerParams = privateProps.innerParams.get(instance || undefined);
        if (innerParams.showLoaderOnDeny) showLoading(getDenyButton());
        if (innerParams.preDeny) {
            instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
            const preDenyPromise = Promise.resolve().then(()=>asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
            preDenyPromise.then((preDenyValue)=>{
                if (preDenyValue === false) {
                    instance.hideLoading();
                    handleAwaitingPromise(instance);
                } else instance.close({
                    isDenied: true,
                    value: typeof preDenyValue === "undefined" ? value : preDenyValue
                });
            }).catch((error)=>rejectWith(instance || undefined, error));
        } else instance.close({
            isDenied: true,
            value
        });
    };
    /**
   * @param {SweetAlert} instance
   * @param {any} value
   */ const succeedWith = (instance, value)=>{
        instance.close({
            isConfirmed: true,
            value
        });
    };
    /**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */ const rejectWith = (instance, error)=>{
        instance.rejectPromise(error);
    };
    /**
   *
   * @param {SweetAlert} instance
   * @param {any} value
   */ const confirm = (instance, value)=>{
        const innerParams = privateProps.innerParams.get(instance || undefined);
        if (innerParams.showLoaderOnConfirm) showLoading();
        if (innerParams.preConfirm) {
            instance.resetValidationMessage();
            instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
            const preConfirmPromise = Promise.resolve().then(()=>asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
            preConfirmPromise.then((preConfirmValue)=>{
                if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
                    instance.hideLoading();
                    handleAwaitingPromise(instance);
                } else succeedWith(instance, typeof preConfirmValue === "undefined" ? value : preConfirmValue);
            }).catch((error)=>rejectWith(instance || undefined, error));
        } else succeedWith(instance, value);
    };
    /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */ function hideLoading() {
        // do nothing if popup is closed
        const innerParams = privateProps.innerParams.get(this);
        if (!innerParams) return;
        const domCache = privateProps.domCache.get(this);
        hide(domCache.loader);
        if (isToast()) {
            if (innerParams.icon) show(getIcon());
        } else showRelatedButton(domCache);
        removeClass([
            domCache.popup,
            domCache.actions
        ], swalClasses.loading);
        domCache.popup.removeAttribute("aria-busy");
        domCache.popup.removeAttribute("data-loading");
        domCache.confirmButton.disabled = false;
        domCache.denyButton.disabled = false;
        domCache.cancelButton.disabled = false;
    }
    const showRelatedButton = (domCache)=>{
        const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute("data-button-to-replace"));
        if (buttonToReplace.length) show(buttonToReplace[0], "inline-block");
        else if (allButtonsAreHidden()) hide(domCache.actions);
    };
    /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */ function getInput() {
        const innerParams = privateProps.innerParams.get(this);
        const domCache = privateProps.domCache.get(this);
        if (!domCache) return null;
        return getInput$1(domCache.popup, innerParams.input);
    }
    /**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */ function setButtonsDisabled(instance, buttons, disabled) {
        const domCache = privateProps.domCache.get(instance);
        buttons.forEach((button)=>{
            domCache[button].disabled = disabled;
        });
    }
    /**
   * @param {HTMLInputElement} input
   * @param {boolean} disabled
   */ function setInputDisabled(input, disabled) {
        if (!input) return;
        if (input.type === "radio") {
            const radiosContainer = input.parentNode.parentNode;
            const radios = radiosContainer.querySelectorAll("input");
            for(let i = 0; i < radios.length; i++)radios[i].disabled = disabled;
        } else input.disabled = disabled;
    }
    /**
   * Enable all the buttons
   */ function enableButtons() {
        setButtonsDisabled(this, [
            "confirmButton",
            "denyButton",
            "cancelButton"
        ], false);
    }
    /**
   * Disable all the buttons
   */ function disableButtons() {
        setButtonsDisabled(this, [
            "confirmButton",
            "denyButton",
            "cancelButton"
        ], true);
    }
    /**
   * Enable the input field
   */ function enableInput() {
        setInputDisabled(this.getInput(), false);
    }
    /**
   * Disable the input field
   */ function disableInput() {
        setInputDisabled(this.getInput(), true);
    }
    /**
   * Show block with validation message
   *
   * @param {string} error
   */ function showValidationMessage(error) {
        const domCache = privateProps.domCache.get(this);
        const params = privateProps.innerParams.get(this);
        setInnerHtml(domCache.validationMessage, error);
        domCache.validationMessage.className = swalClasses["validation-message"];
        if (params.customClass && params.customClass.validationMessage) addClass(domCache.validationMessage, params.customClass.validationMessage);
        show(domCache.validationMessage);
        const input = this.getInput();
        if (input) {
            input.setAttribute("aria-invalid", true);
            input.setAttribute("aria-describedby", swalClasses["validation-message"]);
            focusInput(input);
            addClass(input, swalClasses.inputerror);
        }
    }
    /**
   * Hide block with validation message
   */ function resetValidationMessage() {
        const domCache = privateProps.domCache.get(this);
        if (domCache.validationMessage) hide(domCache.validationMessage);
        const input = this.getInput();
        if (input) {
            input.removeAttribute("aria-invalid");
            input.removeAttribute("aria-describedby");
            removeClass(input, swalClasses.inputerror);
        }
    }
    const defaultParams = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: undefined,
        iconColor: undefined,
        iconHtml: undefined,
        template: undefined,
        toast: false,
        showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show"
        },
        hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide"
        },
        customClass: {},
        target: "body",
        color: undefined,
        backdrop: true,
        heightAuto: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        keydownListenerCapture: false,
        showConfirmButton: true,
        showDenyButton: false,
        showCancelButton: false,
        preConfirm: undefined,
        preDeny: undefined,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: undefined,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: undefined,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: undefined,
        buttonsStyling: true,
        reverseButtons: false,
        focusConfirm: true,
        focusDeny: false,
        focusCancel: false,
        returnFocus: true,
        showCloseButton: false,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: false,
        showLoaderOnDeny: false,
        imageUrl: undefined,
        imageWidth: undefined,
        imageHeight: undefined,
        imageAlt: "",
        timer: undefined,
        timerProgressBar: false,
        width: undefined,
        padding: undefined,
        background: undefined,
        input: undefined,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {},
        inputAutoFocus: true,
        inputAutoTrim: true,
        inputAttributes: {},
        inputValidator: undefined,
        returnInputValueOnDeny: false,
        validationMessage: undefined,
        grow: false,
        position: "center",
        progressSteps: [],
        currentProgressStep: undefined,
        progressStepsDistance: undefined,
        willOpen: undefined,
        didOpen: undefined,
        didRender: undefined,
        willClose: undefined,
        didClose: undefined,
        didDestroy: undefined,
        scrollbarPadding: true
    };
    const updatableParams = [
        "allowEscapeKey",
        "allowOutsideClick",
        "background",
        "buttonsStyling",
        "cancelButtonAriaLabel",
        "cancelButtonColor",
        "cancelButtonText",
        "closeButtonAriaLabel",
        "closeButtonHtml",
        "color",
        "confirmButtonAriaLabel",
        "confirmButtonColor",
        "confirmButtonText",
        "currentProgressStep",
        "customClass",
        "denyButtonAriaLabel",
        "denyButtonColor",
        "denyButtonText",
        "didClose",
        "didDestroy",
        "footer",
        "hideClass",
        "html",
        "icon",
        "iconColor",
        "iconHtml",
        "imageAlt",
        "imageHeight",
        "imageUrl",
        "imageWidth",
        "preConfirm",
        "preDeny",
        "progressSteps",
        "returnFocus",
        "reverseButtons",
        "showCancelButton",
        "showCloseButton",
        "showConfirmButton",
        "showDenyButton",
        "text",
        "title",
        "titleText",
        "willClose"
    ];
    /** @type {Record<string, string>} */ const deprecatedParams = {};
    const toastIncompatibleParams = [
        "allowOutsideClick",
        "allowEnterKey",
        "backdrop",
        "focusConfirm",
        "focusDeny",
        "focusCancel",
        "returnFocus",
        "heightAuto",
        "keydownListenerCapture"
    ];
    /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */ const isValidParameter = (paramName)=>{
        return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
    };
    /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */ const isUpdatableParameter = (paramName)=>{
        return updatableParams.indexOf(paramName) !== -1;
    };
    /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */ const isDeprecatedParameter = (paramName)=>{
        return deprecatedParams[paramName];
    };
    /**
   * @param {string} param
   */ const checkIfParamIsValid = (param)=>{
        if (!isValidParameter(param)) warn(`Unknown parameter "${param}"`);
    };
    /**
   * @param {string} param
   */ const checkIfToastParamIsValid = (param)=>{
        if (toastIncompatibleParams.includes(param)) warn(`The parameter "${param}" is incompatible with toasts`);
    };
    /**
   * @param {string} param
   */ const checkIfParamIsDeprecated = (param)=>{
        const isDeprecated = isDeprecatedParameter(param);
        if (isDeprecated) warnAboutDeprecation(param, isDeprecated);
    };
    /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */ const showWarningsForParams = (params)=>{
        if (params.backdrop === false && params.allowOutsideClick) warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        for(const param in params){
            checkIfParamIsValid(param);
            if (params.toast) checkIfToastParamIsValid(param);
            checkIfParamIsDeprecated(param);
        }
    };
    /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */ function update(params) {
        const popup = getPopup();
        const innerParams = privateProps.innerParams.get(this);
        if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
            warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
            return;
        }
        const validUpdatableParams = filterValidParams(params);
        const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
        render(this, updatedParams);
        privateProps.innerParams.set(this, updatedParams);
        Object.defineProperties(this, {
            params: {
                value: Object.assign({}, this.params, params),
                writable: false,
                enumerable: true
            }
        });
    }
    /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */ const filterValidParams = (params)=>{
        const validUpdatableParams = {};
        Object.keys(params).forEach((param)=>{
            if (isUpdatableParameter(param)) validUpdatableParams[param] = params[param];
            else warn(`Invalid parameter to update: ${param}`);
        });
        return validUpdatableParams;
    };
    /**
   * Dispose the current SweetAlert2 instance
   */ function _destroy() {
        const domCache = privateProps.domCache.get(this);
        const innerParams = privateProps.innerParams.get(this);
        if (!innerParams) {
            disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
            return; // This instance has already been destroyed
        }
        // Check if there is another Swal closing
        if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
        }
        if (typeof innerParams.didDestroy === "function") innerParams.didDestroy();
        disposeSwal(this);
    }
    /**
   * @param {SweetAlert} instance
   */ const disposeSwal = (instance)=>{
        disposeWeakMaps(instance);
        // Unset this.params so GC will dispose it (#1569)
        delete instance.params;
        // Unset globalState props so GC will dispose globalState (#1569)
        delete globalState.keydownHandler;
        delete globalState.keydownTarget;
        // Unset currentInstance
        delete globalState.currentInstance;
    };
    /**
   * @param {SweetAlert} instance
   */ const disposeWeakMaps = (instance)=>{
        // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
        if (instance.isAwaitingPromise) {
            unsetWeakMaps(privateProps, instance);
            instance.isAwaitingPromise = true;
        } else {
            unsetWeakMaps(privateMethods, instance);
            unsetWeakMaps(privateProps, instance);
            delete instance.isAwaitingPromise;
            // Unset instance methods
            delete instance.disableButtons;
            delete instance.enableButtons;
            delete instance.getInput;
            delete instance.disableInput;
            delete instance.enableInput;
            delete instance.hideLoading;
            delete instance.disableLoading;
            delete instance.showValidationMessage;
            delete instance.resetValidationMessage;
            delete instance.close;
            delete instance.closePopup;
            delete instance.closeModal;
            delete instance.closeToast;
            delete instance.rejectPromise;
            delete instance.update;
            delete instance._destroy;
        }
    };
    /**
   * @param {object} obj
   * @param {SweetAlert} instance
   */ const unsetWeakMaps = (obj, instance)=>{
        for(const i in obj)obj[i].delete(instance);
    };
    var instanceMethods = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        _destroy: _destroy,
        close: close,
        closeModal: close,
        closePopup: close,
        closeToast: close,
        disableButtons: disableButtons,
        disableInput: disableInput,
        disableLoading: hideLoading,
        enableButtons: enableButtons,
        enableInput: enableInput,
        getInput: getInput,
        handleAwaitingPromise: handleAwaitingPromise,
        hideLoading: hideLoading,
        rejectPromise: rejectPromise,
        resetValidationMessage: resetValidationMessage,
        showValidationMessage: showValidationMessage,
        update: update
    });
    const handlePopupClick = (instance, domCache, dismissWith)=>{
        const innerParams = privateProps.innerParams.get(instance);
        if (innerParams.toast) handleToastClick(instance, domCache, dismissWith);
        else {
            // Ignore click events that had mousedown on the popup but mouseup on the container
            // This can happen when the user drags a slider
            handleModalMousedown(domCache);
            // Ignore click events that had mousedown on the container but mouseup on the popup
            handleContainerMousedown(domCache);
            handleModalClick(instance, domCache, dismissWith);
        }
    };
    const handleToastClick = (instance, domCache, dismissWith)=>{
        // Closing toast by internal click
        domCache.popup.onclick = ()=>{
            const innerParams = privateProps.innerParams.get(instance);
            if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) return;
            dismissWith(DismissReason.close);
        };
    };
    /**
   * @param {*} innerParams
   * @returns {boolean}
   */ const isAnyButtonShown = (innerParams)=>{
        return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
    };
    let ignoreOutsideClick = false;
    const handleModalMousedown = (domCache)=>{
        domCache.popup.onmousedown = ()=>{
            domCache.container.onmouseup = function(e) {
                domCache.container.onmouseup = undefined;
                // We only check if the mouseup target is the container because usually it doesn't
                // have any other direct children aside of the popup
                if (e.target === domCache.container) ignoreOutsideClick = true;
            };
        };
    };
    const handleContainerMousedown = (domCache)=>{
        domCache.container.onmousedown = ()=>{
            domCache.popup.onmouseup = function(e) {
                domCache.popup.onmouseup = undefined;
                // We also need to check if the mouseup target is a child of the popup
                if (e.target === domCache.popup || domCache.popup.contains(e.target)) ignoreOutsideClick = true;
            };
        };
    };
    const handleModalClick = (instance, domCache, dismissWith)=>{
        domCache.container.onclick = (e)=>{
            const innerParams = privateProps.innerParams.get(instance);
            if (ignoreOutsideClick) {
                ignoreOutsideClick = false;
                return;
            }
            if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) dismissWith(DismissReason.backdrop);
        };
    };
    const isJqueryElement = (elem)=>typeof elem === "object" && elem.jquery;
    const isElement = (elem)=>elem instanceof Element || isJqueryElement(elem);
    const argsToParams = (args)=>{
        const params = {};
        if (typeof args[0] === "object" && !isElement(args[0])) Object.assign(params, args[0]);
        else [
            "title",
            "html",
            "icon"
        ].forEach((name, index)=>{
            const arg = args[index];
            if (typeof arg === "string" || isElement(arg)) params[name] = arg;
            else if (arg !== undefined) error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
        });
        return params;
    };
    /**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */ function fire() {
        const Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return new Swal(...args);
    }
    /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */ function mixin(mixinParams) {
        class MixinSwal extends this {
            _main(params, priorityMixinParams) {
                return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
            }
        }
        // @ts-ignore
        return MixinSwal;
    }
    /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */ const getTimerLeft = ()=>{
        return globalState.timeout && globalState.timeout.getTimerLeft();
    };
    /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */ const stopTimer = ()=>{
        if (globalState.timeout) {
            stopTimerProgressBar();
            return globalState.timeout.stop();
        }
    };
    /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */ const resumeTimer = ()=>{
        if (globalState.timeout) {
            const remaining = globalState.timeout.start();
            animateTimerProgressBar(remaining);
            return remaining;
        }
    };
    /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */ const toggleTimer = ()=>{
        const timer = globalState.timeout;
        return timer && (timer.running ? stopTimer() : resumeTimer());
    };
    /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} n
   * @returns {number | undefined}
   */ const increaseTimer = (n)=>{
        if (globalState.timeout) {
            const remaining = globalState.timeout.increase(n);
            animateTimerProgressBar(remaining, true);
            return remaining;
        }
    };
    /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */ const isTimerRunning = ()=>{
        return !!(globalState.timeout && globalState.timeout.isRunning());
    };
    let bodyClickListenerAdded = false;
    const clickHandlers = {};
    /**
   * @param {string} attr
   */ function bindClickHandler() {
        let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "data-swal-template";
        clickHandlers[attr] = this;
        if (!bodyClickListenerAdded) {
            document.body.addEventListener("click", bodyClickListener);
            bodyClickListenerAdded = true;
        }
    }
    const bodyClickListener = (event)=>{
        for(let el = event.target; el && el !== document; el = el.parentNode)for(const attr in clickHandlers){
            const template = el.getAttribute(attr);
            if (template) {
                clickHandlers[attr].fire({
                    template
                });
                return;
            }
        }
    };
    var staticMethods = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        argsToParams: argsToParams,
        bindClickHandler: bindClickHandler,
        clickCancel: clickCancel,
        clickConfirm: clickConfirm,
        clickDeny: clickDeny,
        enableLoading: showLoading,
        fire: fire,
        getActions: getActions,
        getCancelButton: getCancelButton,
        getCloseButton: getCloseButton,
        getConfirmButton: getConfirmButton,
        getContainer: getContainer,
        getDenyButton: getDenyButton,
        getFocusableElements: getFocusableElements,
        getFooter: getFooter,
        getHtmlContainer: getHtmlContainer,
        getIcon: getIcon,
        getIconContent: getIconContent,
        getImage: getImage,
        getInputLabel: getInputLabel,
        getLoader: getLoader,
        getPopup: getPopup,
        getProgressSteps: getProgressSteps,
        getTimerLeft: getTimerLeft,
        getTimerProgressBar: getTimerProgressBar,
        getTitle: getTitle,
        getValidationMessage: getValidationMessage,
        increaseTimer: increaseTimer,
        isDeprecatedParameter: isDeprecatedParameter,
        isLoading: isLoading,
        isTimerRunning: isTimerRunning,
        isUpdatableParameter: isUpdatableParameter,
        isValidParameter: isValidParameter,
        isVisible: isVisible,
        mixin: mixin,
        resumeTimer: resumeTimer,
        showLoading: showLoading,
        stopTimer: stopTimer,
        toggleTimer: toggleTimer
    });
    class Timer {
        /**
     * @param {Function} callback
     * @param {number} delay
     */ constructor(callback, delay){
            this.callback = callback;
            this.remaining = delay;
            this.running = false;
            this.start();
        }
        /**
     * @returns {number}
     */ start() {
            if (!this.running) {
                this.running = true;
                this.started = new Date();
                this.id = setTimeout(this.callback, this.remaining);
            }
            return this.remaining;
        }
        /**
     * @returns {number}
     */ stop() {
            if (this.started && this.running) {
                this.running = false;
                clearTimeout(this.id);
                this.remaining -= new Date().getTime() - this.started.getTime();
            }
            return this.remaining;
        }
        /**
     * @param {number} n
     * @returns {number}
     */ increase(n) {
            const running = this.running;
            if (running) this.stop();
            this.remaining += n;
            if (running) this.start();
            return this.remaining;
        }
        /**
     * @returns {number}
     */ getTimerLeft() {
            if (this.running) {
                this.stop();
                this.start();
            }
            return this.remaining;
        }
        /**
     * @returns {boolean}
     */ isRunning() {
            return this.running;
        }
    }
    const swalStringParams = [
        "swal-title",
        "swal-html",
        "swal-footer"
    ];
    /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */ const getTemplateParams = (params)=>{
        /** @type {HTMLTemplateElement} */ const template = typeof params.template === "string" ? document.querySelector(params.template) : params.template;
        if (!template) return {};
        /** @type {DocumentFragment} */ const templateContent = template.content;
        showWarningsForElements(templateContent);
        const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */ const getSwalParams = (templateContent)=>{
        const result = {};
        /** @type {HTMLElement[]} */ const swalParams = Array.from(templateContent.querySelectorAll("swal-param"));
        swalParams.forEach((param)=>{
            showWarningsForAttributes(param, [
                "name",
                "value"
            ]);
            const paramName = param.getAttribute("name");
            const value = param.getAttribute("value");
            if (typeof defaultParams[paramName] === "boolean") result[paramName] = value !== "false";
            else if (typeof defaultParams[paramName] === "object") result[paramName] = JSON.parse(value);
            else result[paramName] = value;
        });
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */ const getSwalFunctionParams = (templateContent)=>{
        const result = {};
        /** @type {HTMLElement[]} */ const swalFunctions = Array.from(templateContent.querySelectorAll("swal-function-param"));
        swalFunctions.forEach((param)=>{
            const paramName = param.getAttribute("name");
            const value = param.getAttribute("value");
            result[paramName] = new Function(`return ${value}`)();
        });
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */ const getSwalButtons = (templateContent)=>{
        const result = {};
        /** @type {HTMLElement[]} */ const swalButtons = Array.from(templateContent.querySelectorAll("swal-button"));
        swalButtons.forEach((button)=>{
            showWarningsForAttributes(button, [
                "type",
                "color",
                "aria-label"
            ]);
            const type = button.getAttribute("type");
            result[`${type}ButtonText`] = button.innerHTML;
            result[`show${capitalizeFirstLetter(type)}Button`] = true;
            if (button.hasAttribute("color")) result[`${type}ButtonColor`] = button.getAttribute("color");
            if (button.hasAttribute("aria-label")) result[`${type}ButtonAriaLabel`] = button.getAttribute("aria-label");
        });
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */ const getSwalImage = (templateContent)=>{
        const result = {};
        /** @type {HTMLElement} */ const image = templateContent.querySelector("swal-image");
        if (image) {
            showWarningsForAttributes(image, [
                "src",
                "width",
                "height",
                "alt"
            ]);
            if (image.hasAttribute("src")) result.imageUrl = image.getAttribute("src");
            if (image.hasAttribute("width")) result.imageWidth = image.getAttribute("width");
            if (image.hasAttribute("height")) result.imageHeight = image.getAttribute("height");
            if (image.hasAttribute("alt")) result.imageAlt = image.getAttribute("alt");
        }
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */ const getSwalIcon = (templateContent)=>{
        const result = {};
        /** @type {HTMLElement} */ const icon = templateContent.querySelector("swal-icon");
        if (icon) {
            showWarningsForAttributes(icon, [
                "type",
                "color"
            ]);
            if (icon.hasAttribute("type")) /** @type {SweetAlertIcon} */ // @ts-ignore
            result.icon = icon.getAttribute("type");
            if (icon.hasAttribute("color")) result.iconColor = icon.getAttribute("color");
            result.iconHtml = icon.innerHTML;
        }
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */ const getSwalInput = (templateContent)=>{
        const result = {};
        /** @type {HTMLElement} */ const input = templateContent.querySelector("swal-input");
        if (input) {
            showWarningsForAttributes(input, [
                "type",
                "label",
                "placeholder",
                "value"
            ]);
            /** @type {SweetAlertInput} */ // @ts-ignore
            result.input = input.getAttribute("type") || "text";
            if (input.hasAttribute("label")) result.inputLabel = input.getAttribute("label");
            if (input.hasAttribute("placeholder")) result.inputPlaceholder = input.getAttribute("placeholder");
            if (input.hasAttribute("value")) result.inputValue = input.getAttribute("value");
        }
        /** @type {HTMLElement[]} */ const inputOptions = Array.from(templateContent.querySelectorAll("swal-input-option"));
        if (inputOptions.length) {
            result.inputOptions = {};
            inputOptions.forEach((option)=>{
                showWarningsForAttributes(option, [
                    "value"
                ]);
                const optionValue = option.getAttribute("value");
                const optionName = option.innerHTML;
                result.inputOptions[optionValue] = optionName;
            });
        }
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {SweetAlertOptions}
   */ const getSwalStringParams = (templateContent, paramNames)=>{
        const result = {};
        for(const i in paramNames){
            const paramName = paramNames[i];
            /** @type {HTMLElement} */ const tag = templateContent.querySelector(paramName);
            if (tag) {
                showWarningsForAttributes(tag, []);
                result[paramName.replace(/^swal-/, "")] = tag.innerHTML.trim();
            }
        }
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   */ const showWarningsForElements = (templateContent)=>{
        const allowedElements = swalStringParams.concat([
            "swal-param",
            "swal-function-param",
            "swal-button",
            "swal-image",
            "swal-icon",
            "swal-input",
            "swal-input-option"
        ]);
        Array.from(templateContent.children).forEach((el)=>{
            const tagName = el.tagName.toLowerCase();
            if (!allowedElements.includes(tagName)) warn(`Unrecognized element <${tagName}>`);
        });
    };
    /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */ const showWarningsForAttributes = (el, allowedAttributes)=>{
        Array.from(el.attributes).forEach((attribute)=>{
            if (allowedAttributes.indexOf(attribute.name) === -1) warn([
                `Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`,
                `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(", ")}` : "To set the value, use HTML within the element."}`
            ]);
        });
    };
    const SHOW_CLASS_TIMEOUT = 10;
    /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */ const openPopup = (params)=>{
        const container = getContainer();
        const popup = getPopup();
        if (typeof params.willOpen === "function") params.willOpen(popup);
        const bodyStyles = window.getComputedStyle(document.body);
        const initialBodyOverflow = bodyStyles.overflowY;
        addClasses(container, popup, params);
        // scrolling is 'hidden' until animation is done, after that 'auto'
        setTimeout(()=>{
            setScrollingVisibility(container, popup);
        }, SHOW_CLASS_TIMEOUT);
        if (isModal()) {
            fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
            setAriaHidden();
        }
        if (!isToast() && !globalState.previousActiveElement) globalState.previousActiveElement = document.activeElement;
        if (typeof params.didOpen === "function") setTimeout(()=>params.didOpen(popup));
        removeClass(container, swalClasses["no-transition"]);
    };
    /**
   * @param {AnimationEvent} event
   */ const swalOpenAnimationFinished = (event)=>{
        const popup = getPopup();
        if (event.target !== popup) return;
        const container = getContainer();
        popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
        container.style.overflowY = "auto";
    };
    /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */ const setScrollingVisibility = (container, popup)=>{
        if (animationEndEvent && hasCssAnimation(popup)) {
            container.style.overflowY = "hidden";
            popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
        } else container.style.overflowY = "auto";
    };
    /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */ const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow)=>{
        iOSfix();
        if (scrollbarPadding && initialBodyOverflow !== "hidden") fixScrollbar();
        // sweetalert2/issues/1247
        setTimeout(()=>{
            container.scrollTop = 0;
        });
    };
    /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */ const addClasses = (container, popup, params)=>{
        addClass(container, params.showClass.backdrop);
        // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
        popup.style.setProperty("opacity", "0", "important");
        show(popup, "grid");
        setTimeout(()=>{
            // Animate popup right after showing it
            addClass(popup, params.showClass.popup);
            // and remove the opacity workaround
            popup.style.removeProperty("opacity");
        }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
        addClass([
            document.documentElement,
            document.body
        ], swalClasses.shown);
        if (params.heightAuto && params.backdrop && !params.toast) addClass([
            document.documentElement,
            document.body
        ], swalClasses["height-auto"]);
    };
    var defaultInputValidators = {
        /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */ email: (string, validationMessage)=>{
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid email address");
        },
        /**
     * @param {string} string
     * @param {string} validationMessage
     * @returns {Promise<void | string>}
     */ url: (string, validationMessage)=>{
            // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid URL");
        }
    };
    /**
   * @param {SweetAlertOptions} params
   */ function setDefaultInputValidators(params) {
        // Use default `inputValidator` for supported input types if not provided
        if (!params.inputValidator) Object.keys(defaultInputValidators).forEach((key)=>{
            if (params.input === key) params.inputValidator = defaultInputValidators[key];
        });
    }
    /**
   * @param {SweetAlertOptions} params
   */ function validateCustomTargetElement(params) {
        // Determine if the custom target element is valid
        if (!params.target || typeof params.target === "string" && !document.querySelector(params.target) || typeof params.target !== "string" && !params.target.appendChild) {
            warn('Target parameter is not valid, defaulting to "body"');
            params.target = "body";
        }
    }
    /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */ function setParameters(params) {
        setDefaultInputValidators(params);
        // showLoaderOnConfirm && preConfirm
        if (params.showLoaderOnConfirm && !params.preConfirm) warn("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
        validateCustomTargetElement(params);
        // Replace newlines with <br> in title
        if (typeof params.title === "string") params.title = params.title.split("\n").join("<br />");
        init(params);
    }
    /** @type {SweetAlert} */ let currentInstance;
    class SweetAlert {
        /**
     * @param {...any} args
     * @this {SweetAlert}
     */ constructor(){
            // Prevent run in Node env
            if (typeof window === "undefined") return;
            currentInstance = this;
            // @ts-ignore
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            const outerParams = Object.freeze(this.constructor.argsToParams(args));
            /** @type {Readonly<SweetAlertOptions>} */ this.params = outerParams;
            /** @type {boolean} */ this.isAwaitingPromise = false;
            const promise = currentInstance._main(currentInstance.params);
            privateProps.promise.set(this, promise);
        }
        _main(userParams) {
            let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            showWarningsForParams(Object.assign({}, mixinParams, userParams));
            if (globalState.currentInstance) {
                globalState.currentInstance._destroy();
                if (isModal()) unsetAriaHidden();
            }
            globalState.currentInstance = currentInstance;
            const innerParams = prepareParams(userParams, mixinParams);
            setParameters(innerParams);
            Object.freeze(innerParams);
            // clear the previous timer
            if (globalState.timeout) {
                globalState.timeout.stop();
                delete globalState.timeout;
            }
            // clear the restore focus timeout
            clearTimeout(globalState.restoreFocusTimeout);
            const domCache = populateDomCache(currentInstance);
            render(currentInstance, innerParams);
            privateProps.innerParams.set(currentInstance, innerParams);
            return swalPromise(currentInstance, domCache, innerParams);
        }
        // `catch` cannot be the name of a module export, so we define our thenable methods here instead
        then(onFulfilled) {
            const promise = privateProps.promise.get(this);
            return promise.then(onFulfilled);
        }
        finally(onFinally) {
            const promise = privateProps.promise.get(this);
            return promise.finally(onFinally);
        }
    }
    /**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */ const swalPromise = (instance, domCache, innerParams)=>{
        return new Promise((resolve, reject)=>{
            // functions to handle all closings/dismissals
            /**
       * @param {DismissReason} dismiss
       */ const dismissWith = (dismiss)=>{
                instance.close({
                    isDismissed: true,
                    dismiss
                });
            };
            privateMethods.swalPromiseResolve.set(instance, resolve);
            privateMethods.swalPromiseReject.set(instance, reject);
            domCache.confirmButton.onclick = ()=>{
                handleConfirmButtonClick(instance);
            };
            domCache.denyButton.onclick = ()=>{
                handleDenyButtonClick(instance);
            };
            domCache.cancelButton.onclick = ()=>{
                handleCancelButtonClick(instance, dismissWith);
            };
            domCache.closeButton.onclick = ()=>{
                dismissWith(DismissReason.close);
            };
            handlePopupClick(instance, domCache, dismissWith);
            addKeydownHandler(instance, globalState, innerParams, dismissWith);
            handleInputOptionsAndValue(instance, innerParams);
            openPopup(innerParams);
            setupTimer(globalState, innerParams, dismissWith);
            initFocus(domCache, innerParams);
            // Scroll container to top on open (#1247, #1946)
            setTimeout(()=>{
                domCache.container.scrollTop = 0;
            });
        });
    };
    /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */ const prepareParams = (userParams, mixinParams)=>{
        const templateParams = getTemplateParams(userParams);
        const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
        params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
        params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
        return params;
    };
    /**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */ const populateDomCache = (instance)=>{
        const domCache = {
            popup: getPopup(),
            container: getContainer(),
            actions: getActions(),
            confirmButton: getConfirmButton(),
            denyButton: getDenyButton(),
            cancelButton: getCancelButton(),
            loader: getLoader(),
            closeButton: getCloseButton(),
            validationMessage: getValidationMessage(),
            progressSteps: getProgressSteps()
        };
        privateProps.domCache.set(instance, domCache);
        return domCache;
    };
    /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */ const setupTimer = (globalState, innerParams, dismissWith)=>{
        const timerProgressBar = getTimerProgressBar();
        hide(timerProgressBar);
        if (innerParams.timer) {
            globalState.timeout = new Timer(()=>{
                dismissWith("timer");
                delete globalState.timeout;
            }, innerParams.timer);
            if (innerParams.timerProgressBar) {
                show(timerProgressBar);
                applyCustomClass(timerProgressBar, innerParams, "timerProgressBar");
                setTimeout(()=>{
                    if (globalState.timeout && globalState.timeout.running) // timer can be already stopped or unset at this point
                    animateTimerProgressBar(innerParams.timer);
                });
            }
        }
    };
    /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */ const initFocus = (domCache, innerParams)=>{
        if (innerParams.toast) return;
        if (!callIfFunction(innerParams.allowEnterKey)) {
            blurActiveElement();
            return;
        }
        if (!focusButton(domCache, innerParams)) setFocus(-1, 1);
    };
    /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */ const focusButton = (domCache, innerParams)=>{
        if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
            domCache.denyButton.focus();
            return true;
        }
        if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
            domCache.cancelButton.focus();
            return true;
        }
        if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
            domCache.confirmButton.focus();
            return true;
        }
        return false;
    };
    const blurActiveElement = ()=>{
        if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === "function") document.activeElement.blur();
    };
    // Dear russian users visiting russian sites. Let's have fun.
    if (typeof window !== "undefined" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
        const now = new Date();
        const initiationDate = localStorage.getItem("swal-initiation");
        if (!initiationDate) localStorage.setItem("swal-initiation", `${now}`);
        else if ((now.getTime() - Date.parse(initiationDate)) / 86400000 > 3) setTimeout(()=>{
            document.body.style.pointerEvents = "none";
            const ukrainianAnthem = document.createElement("audio");
            ukrainianAnthem.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3";
            ukrainianAnthem.loop = true;
            document.body.appendChild(ukrainianAnthem);
            setTimeout(()=>{
                ukrainianAnthem.play().catch(()=>{
                // ignore
                });
            }, 2500);
        }, 500);
    }
    // Assign instance methods from src/instanceMethods/*.js to prototype
    SweetAlert.prototype.disableButtons = disableButtons;
    SweetAlert.prototype.enableButtons = enableButtons;
    SweetAlert.prototype.getInput = getInput;
    SweetAlert.prototype.disableInput = disableInput;
    SweetAlert.prototype.enableInput = enableInput;
    SweetAlert.prototype.hideLoading = hideLoading;
    SweetAlert.prototype.disableLoading = hideLoading;
    SweetAlert.prototype.showValidationMessage = showValidationMessage;
    SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
    SweetAlert.prototype.close = close;
    SweetAlert.prototype.closePopup = close;
    SweetAlert.prototype.closeModal = close;
    SweetAlert.prototype.closeToast = close;
    SweetAlert.prototype.rejectPromise = rejectPromise;
    SweetAlert.prototype.update = update;
    SweetAlert.prototype._destroy = _destroy;
    // Assign static methods from src/staticMethods/*.js to constructor
    Object.assign(SweetAlert, staticMethods);
    // Proxy to instance methods to constructor, for now, for backwards compatibility
    Object.keys(instanceMethods).forEach((key)=>{
        /**
     * @param {...any} args
     * @returns {any | undefined}
     */ SweetAlert[key] = function() {
            if (currentInstance && currentInstance[key]) return currentInstance[key](...arguments);
            return null;
        };
    });
    SweetAlert.DismissReason = DismissReason;
    SweetAlert.version = "11.7.12";
    const Swal = SweetAlert;
    // @ts-ignore
    Swal.default = Swal;
    return Swal;
});
if (typeof this !== "undefined" && this.Sweetalert2) this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
"undefined" != typeof document && function(e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else try {
        n.innerHTML = t;
    } catch (e) {
        n.innerText = t;
    }
}(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');

},{}],"bliRI":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _toDate = _interopRequireDefault(require("b10fe806c1d95257"));
var _toFloat = _interopRequireDefault(require("904819e5ea643bef"));
var _toInt = _interopRequireDefault(require("22c9d1505c2d1fc3"));
var _toBoolean = _interopRequireDefault(require("e0a5af27c12b2c5e"));
var _equals = _interopRequireDefault(require("df6a0b6bd84e19b4"));
var _contains = _interopRequireDefault(require("e2f527afb12190b0"));
var _matches = _interopRequireDefault(require("d7cf83c49d7fa32f"));
var _isEmail = _interopRequireDefault(require("73acc2ba6f501a7f"));
var _isURL = _interopRequireDefault(require("7cc96999cdc491f6"));
var _isMACAddress = _interopRequireDefault(require("91309703df115c6"));
var _isIP = _interopRequireDefault(require("8d2f5af297d16217"));
var _isIPRange = _interopRequireDefault(require("6e4eace52f632262"));
var _isFQDN = _interopRequireDefault(require("1219b49fc6cacab9"));
var _isDate = _interopRequireDefault(require("befc3dab9b151a88"));
var _isTime = _interopRequireDefault(require("ec526ea97a56e412"));
var _isBoolean = _interopRequireDefault(require("a3a022398582f68"));
var _isLocale = _interopRequireDefault(require("8e765fdc6039f514"));
var _isAlpha = _interopRequireWildcard(require("752765732ee21c04"));
var _isAlphanumeric = _interopRequireWildcard(require("939913da4be78270"));
var _isNumeric = _interopRequireDefault(require("b32016933f0604cd"));
var _isPassportNumber = _interopRequireDefault(require("f24514c574ef5174"));
var _isPort = _interopRequireDefault(require("a3b9b492f47016b1"));
var _isLowercase = _interopRequireDefault(require("8ca5f357d13579ae"));
var _isUppercase = _interopRequireDefault(require("57290c395d90e9e1"));
var _isIMEI = _interopRequireDefault(require("2b3e24162ae2fcc4"));
var _isAscii = _interopRequireDefault(require("6af1ce2eb4cb2855"));
var _isFullWidth = _interopRequireDefault(require("a47be535f6075d89"));
var _isHalfWidth = _interopRequireDefault(require("eef79b677b4d3a47"));
var _isVariableWidth = _interopRequireDefault(require("34b89671f36a7e6c"));
var _isMultibyte = _interopRequireDefault(require("8c10c7728b073c57"));
var _isSemVer = _interopRequireDefault(require("f81e871eee57051f"));
var _isSurrogatePair = _interopRequireDefault(require("1b903d3ad0f8db90"));
var _isInt = _interopRequireDefault(require("20afde36edb727c0"));
var _isFloat = _interopRequireWildcard(require("26779d512565dc66"));
var _isDecimal = _interopRequireDefault(require("df62e7a0ab08fe5c"));
var _isHexadecimal = _interopRequireDefault(require("e09b4815b82a6fa5"));
var _isOctal = _interopRequireDefault(require("db9c20ed62cf8b83"));
var _isDivisibleBy = _interopRequireDefault(require("ea2557066cb998fd"));
var _isHexColor = _interopRequireDefault(require("f2e98624db0f1d3a"));
var _isRgbColor = _interopRequireDefault(require("1ac5e66aef101809"));
var _isHSL = _interopRequireDefault(require("d63b18a1ffb2f873"));
var _isISRC = _interopRequireDefault(require("b761b41c2a22a4c"));
var _isIBAN = _interopRequireWildcard(require("1474925e6c78b080"));
var _isBIC = _interopRequireDefault(require("5f702bfdeaac1ce7"));
var _isMD = _interopRequireDefault(require("94155f1dd48161aa"));
var _isHash = _interopRequireDefault(require("136460343d65b33b"));
var _isJWT = _interopRequireDefault(require("c84165da89e1d7dc"));
var _isJSON = _interopRequireDefault(require("4b2533eb7fa4f841"));
var _isEmpty = _interopRequireDefault(require("61b139f71e9bf24a"));
var _isLength = _interopRequireDefault(require("f14362267ed484f3"));
var _isByteLength = _interopRequireDefault(require("d2e7ce5d1a66c2af"));
var _isUUID = _interopRequireDefault(require("e04856beee56d70"));
var _isMongoId = _interopRequireDefault(require("8582f245235fd570"));
var _isAfter = _interopRequireDefault(require("38440f282a879a28"));
var _isBefore = _interopRequireDefault(require("b530a3c08a2c51b8"));
var _isIn = _interopRequireDefault(require("72a50fd794aa3073"));
var _isLuhnNumber = _interopRequireDefault(require("47ff8310016d83ea"));
var _isCreditCard = _interopRequireDefault(require("ba1ceeca74a3e817"));
var _isIdentityCard = _interopRequireDefault(require("858463bab92c710f"));
var _isEAN = _interopRequireDefault(require("f68159fe837e362b"));
var _isISIN = _interopRequireDefault(require("7dbda028ea6b742d"));
var _isISBN = _interopRequireDefault(require("7c94026d50601268"));
var _isISSN = _interopRequireDefault(require("71e63739b51dba75"));
var _isTaxID = _interopRequireDefault(require("ab77331adcaaf0d6"));
var _isMobilePhone = _interopRequireWildcard(require("2313c49333962ef0"));
var _isEthereumAddress = _interopRequireDefault(require("1ea0c275d18ce3e5"));
var _isCurrency = _interopRequireDefault(require("de6a83eab060bec5"));
var _isBtcAddress = _interopRequireDefault(require("ab08ca66d9afd375"));
var _isISO = _interopRequireDefault(require("57ddbfb43a466c6c"));
var _isISO2 = _interopRequireDefault(require("b9e0ef98f72ec644"));
var _isRFC = _interopRequireDefault(require("704555bc8cf425e5"));
var _isISO31661Alpha = _interopRequireDefault(require("a4ed258f67afd89a"));
var _isISO31661Alpha2 = _interopRequireDefault(require("2ca72dbaf0f6b784"));
var _isISO3 = _interopRequireDefault(require("c4b0f529774f4dee"));
var _isBase = _interopRequireDefault(require("3e794622f61caa75"));
var _isBase2 = _interopRequireDefault(require("43c060b0c5b6666c"));
var _isBase3 = _interopRequireDefault(require("7e6b000c25e65107"));
var _isDataURI = _interopRequireDefault(require("e9ea15b8d1ad7666"));
var _isMagnetURI = _interopRequireDefault(require("63f9ca5884eaf1a9"));
var _isMimeType = _interopRequireDefault(require("ead2e0dae8858eb6"));
var _isLatLong = _interopRequireDefault(require("943c68afc1f5e3fb"));
var _isPostalCode = _interopRequireWildcard(require("337fc01d18b5d9a1"));
var _ltrim = _interopRequireDefault(require("8e8b3ff8c8b3be15"));
var _rtrim = _interopRequireDefault(require("2262c3ab640e83e1"));
var _trim = _interopRequireDefault(require("4ed20b257cccd153"));
var _escape = _interopRequireDefault(require("ac5bde86531aa937"));
var _unescape = _interopRequireDefault(require("2cfb4a825383e754"));
var _stripLow = _interopRequireDefault(require("2e66e0b0ad386340"));
var _whitelist = _interopRequireDefault(require("8984f13126c4be3d"));
var _blacklist = _interopRequireDefault(require("a5ed790bd0c52ebc"));
var _isWhitelisted = _interopRequireDefault(require("27fe339771c0d202"));
var _normalizeEmail = _interopRequireDefault(require("f0de5432f43d6408"));
var _isSlug = _interopRequireDefault(require("cc7c18b6c6bfc763"));
var _isLicensePlate = _interopRequireDefault(require("cf2ac5417f4a7f77"));
var _isStrongPassword = _interopRequireDefault(require("1f8b1a814d1f08cd"));
var _isVAT = _interopRequireDefault(require("b2c0124f6355fe4f"));
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var version = "13.9.0";
var validator = {
    version: version,
    toDate: _toDate.default,
    toFloat: _toFloat.default,
    toInt: _toInt.default,
    toBoolean: _toBoolean.default,
    equals: _equals.default,
    contains: _contains.default,
    matches: _matches.default,
    isEmail: _isEmail.default,
    isURL: _isURL.default,
    isMACAddress: _isMACAddress.default,
    isIP: _isIP.default,
    isIPRange: _isIPRange.default,
    isFQDN: _isFQDN.default,
    isBoolean: _isBoolean.default,
    isIBAN: _isIBAN.default,
    isBIC: _isBIC.default,
    isAlpha: _isAlpha.default,
    isAlphaLocales: _isAlpha.locales,
    isAlphanumeric: _isAlphanumeric.default,
    isAlphanumericLocales: _isAlphanumeric.locales,
    isNumeric: _isNumeric.default,
    isPassportNumber: _isPassportNumber.default,
    isPort: _isPort.default,
    isLowercase: _isLowercase.default,
    isUppercase: _isUppercase.default,
    isAscii: _isAscii.default,
    isFullWidth: _isFullWidth.default,
    isHalfWidth: _isHalfWidth.default,
    isVariableWidth: _isVariableWidth.default,
    isMultibyte: _isMultibyte.default,
    isSemVer: _isSemVer.default,
    isSurrogatePair: _isSurrogatePair.default,
    isInt: _isInt.default,
    isIMEI: _isIMEI.default,
    isFloat: _isFloat.default,
    isFloatLocales: _isFloat.locales,
    isDecimal: _isDecimal.default,
    isHexadecimal: _isHexadecimal.default,
    isOctal: _isOctal.default,
    isDivisibleBy: _isDivisibleBy.default,
    isHexColor: _isHexColor.default,
    isRgbColor: _isRgbColor.default,
    isHSL: _isHSL.default,
    isISRC: _isISRC.default,
    isMD5: _isMD.default,
    isHash: _isHash.default,
    isJWT: _isJWT.default,
    isJSON: _isJSON.default,
    isEmpty: _isEmpty.default,
    isLength: _isLength.default,
    isLocale: _isLocale.default,
    isByteLength: _isByteLength.default,
    isUUID: _isUUID.default,
    isMongoId: _isMongoId.default,
    isAfter: _isAfter.default,
    isBefore: _isBefore.default,
    isIn: _isIn.default,
    isLuhnNumber: _isLuhnNumber.default,
    isCreditCard: _isCreditCard.default,
    isIdentityCard: _isIdentityCard.default,
    isEAN: _isEAN.default,
    isISIN: _isISIN.default,
    isISBN: _isISBN.default,
    isISSN: _isISSN.default,
    isMobilePhone: _isMobilePhone.default,
    isMobilePhoneLocales: _isMobilePhone.locales,
    isPostalCode: _isPostalCode.default,
    isPostalCodeLocales: _isPostalCode.locales,
    isEthereumAddress: _isEthereumAddress.default,
    isCurrency: _isCurrency.default,
    isBtcAddress: _isBtcAddress.default,
    isISO6391: _isISO.default,
    isISO8601: _isISO2.default,
    isRFC3339: _isRFC.default,
    isISO31661Alpha2: _isISO31661Alpha.default,
    isISO31661Alpha3: _isISO31661Alpha2.default,
    isISO4217: _isISO3.default,
    isBase32: _isBase.default,
    isBase58: _isBase2.default,
    isBase64: _isBase3.default,
    isDataURI: _isDataURI.default,
    isMagnetURI: _isMagnetURI.default,
    isMimeType: _isMimeType.default,
    isLatLong: _isLatLong.default,
    ltrim: _ltrim.default,
    rtrim: _rtrim.default,
    trim: _trim.default,
    escape: _escape.default,
    unescape: _unescape.default,
    stripLow: _stripLow.default,
    whitelist: _whitelist.default,
    blacklist: _blacklist.default,
    isWhitelisted: _isWhitelisted.default,
    normalizeEmail: _normalizeEmail.default,
    toString: toString,
    isSlug: _isSlug.default,
    isStrongPassword: _isStrongPassword.default,
    isTaxID: _isTaxID.default,
    isDate: _isDate.default,
    isTime: _isTime.default,
    isLicensePlate: _isLicensePlate.default,
    isVAT: _isVAT.default,
    ibanLocales: _isIBAN.locales
};
var _default = validator;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

},{"b10fe806c1d95257":"8TB4U","904819e5ea643bef":"9YAY3","22c9d1505c2d1fc3":"8rfaa","e0a5af27c12b2c5e":"6N60y","df6a0b6bd84e19b4":"iHg2k","e2f527afb12190b0":"2nitJ","d7cf83c49d7fa32f":"5OBn3","73acc2ba6f501a7f":"25fbl","7cc96999cdc491f6":"c1NyA","91309703df115c6":"26Ud6","8d2f5af297d16217":"aH7jH","6e4eace52f632262":"jsDgg","1219b49fc6cacab9":"2rD1M","befc3dab9b151a88":"243yZ","ec526ea97a56e412":"dh5pG","a3a022398582f68":"iM2v3","8e765fdc6039f514":"izksE","752765732ee21c04":"89f7h","939913da4be78270":"bzLj5","b32016933f0604cd":"dYHig","f24514c574ef5174":"eZLKj","a3b9b492f47016b1":"luZnK","8ca5f357d13579ae":"cAZl8","57290c395d90e9e1":"6vzFM","2b3e24162ae2fcc4":"au9P4","6af1ce2eb4cb2855":"bTliX","a47be535f6075d89":"i0ySm","eef79b677b4d3a47":"k5krg","34b89671f36a7e6c":"844cT","8c10c7728b073c57":"88z7u","f81e871eee57051f":"iU8qF","1b903d3ad0f8db90":"1WO2m","20afde36edb727c0":"6nSfG","26779d512565dc66":"kx6BG","df62e7a0ab08fe5c":"aRL5c","e09b4815b82a6fa5":"h00RN","db9c20ed62cf8b83":"9a3YX","ea2557066cb998fd":"7xKVo","f2e98624db0f1d3a":"hm22e","1ac5e66aef101809":"ebnFs","d63b18a1ffb2f873":"5avTM","b761b41c2a22a4c":"4yqQH","1474925e6c78b080":"loKzp","5f702bfdeaac1ce7":"dGnco","94155f1dd48161aa":"bld3U","136460343d65b33b":"jEjuS","c84165da89e1d7dc":"1ovuU","4b2533eb7fa4f841":"2hHhN","61b139f71e9bf24a":"dOok5","f14362267ed484f3":"f0je8","d2e7ce5d1a66c2af":"agQQk","e04856beee56d70":"tOwUk","8582f245235fd570":"dcUed","38440f282a879a28":"9u60f","b530a3c08a2c51b8":"aHPfk","72a50fd794aa3073":"aFGXX","47ff8310016d83ea":"ekefF","ba1ceeca74a3e817":"70XyJ","858463bab92c710f":"hlY4v","f68159fe837e362b":"fPkd3","7dbda028ea6b742d":"6OrLA","7c94026d50601268":"jg1zD","71e63739b51dba75":"9xB1S","ab77331adcaaf0d6":"l0cqb","2313c49333962ef0":"i6GBo","1ea0c275d18ce3e5":"aFDzQ","de6a83eab060bec5":"bhNj9","ab08ca66d9afd375":"33rsI","57ddbfb43a466c6c":"hb3R1","b9e0ef98f72ec644":"fmSWm","704555bc8cf425e5":"dant0","a4ed258f67afd89a":"d023L","2ca72dbaf0f6b784":"8L4qb","c4b0f529774f4dee":"5m7Vp","3e794622f61caa75":"efPgQ","43c060b0c5b6666c":"440T3","7e6b000c25e65107":"gPCLH","e9ea15b8d1ad7666":"hywF2","63f9ca5884eaf1a9":"7vLF5","ead2e0dae8858eb6":"9WoRd","943c68afc1f5e3fb":"kx63f","337fc01d18b5d9a1":"bGotF","8e8b3ff8c8b3be15":"fJ9nZ","2262c3ab640e83e1":"fMYnt","4ed20b257cccd153":"iVDTF","ac5bde86531aa937":"6CwX1","2cfb4a825383e754":"drLU6","2e66e0b0ad386340":"acEjg","8984f13126c4be3d":"alKRu","a5ed790bd0c52ebc":"hlY2T","27fe339771c0d202":"dxEdr","f0de5432f43d6408":"haeN5","cc7c18b6c6bfc763":"cwFi9","cf2ac5417f4a7f77":"bfivK","1f8b1a814d1f08cd":"doaet","b2c0124f6355fe4f":"huZFv"}],"8TB4U":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toDate;
var _assertString = _interopRequireDefault(require("9003e7317103d051"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function toDate(date) {
    (0, _assertString.default)(date);
    date = Date.parse(date);
    return !isNaN(date) ? new Date(date) : null;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9003e7317103d051":"dGQqH"}],"dGQqH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = assertString;
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function assertString(input) {
    var isString = typeof input === "string" || input instanceof String;
    if (!isString) {
        var invalidType = _typeof(input);
        if (input === null) invalidType = "null";
        else if (invalidType === "object") invalidType = input.constructor.name;
        throw new TypeError("Expected a string but received a ".concat(invalidType));
    }
}
module.exports = exports.default;
module.exports.default = exports.default;

},{}],"9YAY3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toFloat;
var _isFloat = _interopRequireDefault(require("9b0d8b1a332f4ae0"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function toFloat(str) {
    if (!(0, _isFloat.default)(str)) return NaN;
    return parseFloat(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9b0d8b1a332f4ae0":"kx6BG"}],"kx6BG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isFloat;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("e15bcf079e8ac12a"));
var _alpha = require("24fcd40e646e749a");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isFloat(str, options) {
    (0, _assertString.default)(str);
    options = options || {};
    var float = new RegExp("^(?:[-+])?(?:[0-9]+)?(?:\\".concat(options.locale ? _alpha.decimal[options.locale] : ".", "[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$"));
    if (str === "" || str === "." || str === "," || str === "-" || str === "+") return false;
    var value = parseFloat(str.replace(",", "."));
    return float.test(str) && (!options.hasOwnProperty("min") || value >= options.min) && (!options.hasOwnProperty("max") || value <= options.max) && (!options.hasOwnProperty("lt") || value < options.lt) && (!options.hasOwnProperty("gt") || value > options.gt);
}
var locales = Object.keys(_alpha.decimal);
exports.locales = locales;

},{"e15bcf079e8ac12a":"dGQqH","24fcd40e646e749a":"3PeyB"}],"3PeyB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commaDecimal = exports.dotDecimal = exports.bengaliLocales = exports.farsiLocales = exports.arabicLocales = exports.englishLocales = exports.decimal = exports.alphanumeric = exports.alpha = void 0;
var alpha = {
    "en-US": /^[A-Z]+$/i,
    "az-AZ": /^[A-VXYZÇƏĞİıÖŞÜ]+$/i,
    "bg-BG": /^[А-Я]+$/i,
    "cs-CZ": /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    "da-DK": /^[A-ZÆØÅ]+$/i,
    "de-DE": /^[A-ZÄÖÜß]+$/i,
    "el-GR": /^[Α-ώ]+$/i,
    "es-ES": /^[A-ZÁÉÍÑÓÚÜ]+$/i,
    "fa-IR": /^[ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/i,
    "fi-FI": /^[A-ZÅÄÖ]+$/i,
    "fr-FR": /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    "it-IT": /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
    "ja-JP": /^[ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
    "nb-NO": /^[A-ZÆØÅ]+$/i,
    "nl-NL": /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
    "nn-NO": /^[A-ZÆØÅ]+$/i,
    "hu-HU": /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    "pl-PL": /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    "pt-PT": /^[A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
    "ru-RU": /^[А-ЯЁ]+$/i,
    "sl-SI": /^[A-ZČĆĐŠŽ]+$/i,
    "sk-SK": /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    "sr-RS@latin": /^[A-ZČĆŽŠĐ]+$/i,
    "sr-RS": /^[А-ЯЂЈЉЊЋЏ]+$/i,
    "sv-SE": /^[A-ZÅÄÖ]+$/i,
    "th-TH": /^[ก-๐\s]+$/i,
    "tr-TR": /^[A-ZÇĞİıÖŞÜ]+$/i,
    "uk-UA": /^[А-ЩЬЮЯЄIЇҐі]+$/i,
    "vi-VN": /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
    "ko-KR": /^[ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
    "ku-IQ": /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
    he: /^[א-ת]+$/,
    fa: /^['آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی']+$/i,
    bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
    "hi-IN": /^[\u0900-\u0961]+[\u0972-\u097F]*$/i,
    "si-LK": /^[\u0D80-\u0DFF]+$/
};
exports.alpha = alpha;
var alphanumeric = {
    "en-US": /^[0-9A-Z]+$/i,
    "az-AZ": /^[0-9A-VXYZÇƏĞİıÖŞÜ]+$/i,
    "bg-BG": /^[0-9А-Я]+$/i,
    "cs-CZ": /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
    "da-DK": /^[0-9A-ZÆØÅ]+$/i,
    "de-DE": /^[0-9A-ZÄÖÜß]+$/i,
    "el-GR": /^[0-9Α-ω]+$/i,
    "es-ES": /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
    "fi-FI": /^[0-9A-ZÅÄÖ]+$/i,
    "fr-FR": /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
    "it-IT": /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
    "ja-JP": /^[0-9０-９ぁ-んァ-ヶｦ-ﾟ一-龠ー・。、]+$/i,
    "hu-HU": /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
    "nb-NO": /^[0-9A-ZÆØÅ]+$/i,
    "nl-NL": /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
    "nn-NO": /^[0-9A-ZÆØÅ]+$/i,
    "pl-PL": /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
    "pt-PT": /^[0-9A-ZÃÁÀÂÄÇÉÊËÍÏÕÓÔÖÚÜ]+$/i,
    "ru-RU": /^[0-9А-ЯЁ]+$/i,
    "sl-SI": /^[0-9A-ZČĆĐŠŽ]+$/i,
    "sk-SK": /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
    "sr-RS@latin": /^[0-9A-ZČĆŽŠĐ]+$/i,
    "sr-RS": /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
    "sv-SE": /^[0-9A-ZÅÄÖ]+$/i,
    "th-TH": /^[ก-๙\s]+$/i,
    "tr-TR": /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
    "uk-UA": /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
    "ko-KR": /^[0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/,
    "ku-IQ": /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
    "vi-VN": /^[0-9A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴĐÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸ]+$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/,
    he: /^[0-9א-ת]+$/,
    fa: /^['0-9آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةی۱۲۳۴۵۶۷۸۹۰']+$/i,
    bn: /^['ঀঁংঃঅআইঈউঊঋঌএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ়ঽািীুূৃৄেৈোৌ্ৎৗড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻']+$/,
    "hi-IN": /^[\u0900-\u0963]+[\u0966-\u097F]*$/i,
    "si-LK": /^[0-9\u0D80-\u0DFF]+$/
};
exports.alphanumeric = alphanumeric;
var decimal = {
    "en-US": ".",
    ar: "٫"
};
exports.decimal = decimal;
var englishLocales = [
    "AU",
    "GB",
    "HK",
    "IN",
    "NZ",
    "ZA",
    "ZM"
];
exports.englishLocales = englishLocales;
for(var locale, i = 0; i < englishLocales.length; i++){
    locale = "en-".concat(englishLocales[i]);
    alpha[locale] = alpha["en-US"];
    alphanumeric[locale] = alphanumeric["en-US"];
    decimal[locale] = decimal["en-US"];
} // Source: http://www.localeplanet.com/java/
var arabicLocales = [
    "AE",
    "BH",
    "DZ",
    "EG",
    "IQ",
    "JO",
    "KW",
    "LB",
    "LY",
    "MA",
    "QM",
    "QA",
    "SA",
    "SD",
    "SY",
    "TN",
    "YE"
];
exports.arabicLocales = arabicLocales;
for(var _locale, _i = 0; _i < arabicLocales.length; _i++){
    _locale = "ar-".concat(arabicLocales[_i]);
    alpha[_locale] = alpha.ar;
    alphanumeric[_locale] = alphanumeric.ar;
    decimal[_locale] = decimal.ar;
}
var farsiLocales = [
    "IR",
    "AF"
];
exports.farsiLocales = farsiLocales;
for(var _locale2, _i2 = 0; _i2 < farsiLocales.length; _i2++){
    _locale2 = "fa-".concat(farsiLocales[_i2]);
    alphanumeric[_locale2] = alphanumeric.fa;
    decimal[_locale2] = decimal.ar;
}
var bengaliLocales = [
    "BD",
    "IN"
];
exports.bengaliLocales = bengaliLocales;
for(var _locale3, _i3 = 0; _i3 < bengaliLocales.length; _i3++){
    _locale3 = "bn-".concat(bengaliLocales[_i3]);
    alpha[_locale3] = alpha.bn;
    alphanumeric[_locale3] = alphanumeric.bn;
    decimal[_locale3] = decimal["en-US"];
} // Source: https://en.wikipedia.org/wiki/Decimal_mark
var dotDecimal = [
    "ar-EG",
    "ar-LB",
    "ar-LY"
];
exports.dotDecimal = dotDecimal;
var commaDecimal = [
    "bg-BG",
    "cs-CZ",
    "da-DK",
    "de-DE",
    "el-GR",
    "en-ZM",
    "es-ES",
    "fr-CA",
    "fr-FR",
    "id-ID",
    "it-IT",
    "ku-IQ",
    "hi-IN",
    "hu-HU",
    "nb-NO",
    "nn-NO",
    "nl-NL",
    "pl-PL",
    "pt-PT",
    "ru-RU",
    "si-LK",
    "sl-SI",
    "sr-RS@latin",
    "sr-RS",
    "sv-SE",
    "tr-TR",
    "uk-UA",
    "vi-VN"
];
exports.commaDecimal = commaDecimal;
for(var _i4 = 0; _i4 < dotDecimal.length; _i4++)decimal[dotDecimal[_i4]] = decimal["en-US"];
for(var _i5 = 0; _i5 < commaDecimal.length; _i5++)decimal[commaDecimal[_i5]] = ",";
alpha["fr-CA"] = alpha["fr-FR"];
alphanumeric["fr-CA"] = alphanumeric["fr-FR"];
alpha["pt-BR"] = alpha["pt-PT"];
alphanumeric["pt-BR"] = alphanumeric["pt-PT"];
decimal["pt-BR"] = decimal["pt-PT"]; // see #862
alpha["pl-Pl"] = alpha["pl-PL"];
alphanumeric["pl-Pl"] = alphanumeric["pl-PL"];
decimal["pl-Pl"] = decimal["pl-PL"]; // see #1455
alpha["fa-AF"] = alpha.fa;

},{}],"8rfaa":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toInt;
var _assertString = _interopRequireDefault(require("844cad00cd361a98"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function toInt(str, radix) {
    (0, _assertString.default)(str);
    return parseInt(str, radix || 10);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"844cad00cd361a98":"dGQqH"}],"6N60y":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toBoolean;
var _assertString = _interopRequireDefault(require("a1a6c79778bf962b"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function toBoolean(str, strict) {
    (0, _assertString.default)(str);
    if (strict) return str === "1" || /^true$/i.test(str);
    return str !== "0" && !/^false$/i.test(str) && str !== "";
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"a1a6c79778bf962b":"dGQqH"}],"iHg2k":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = equals;
var _assertString = _interopRequireDefault(require("d1a5c332af02b5b8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function equals(str, comparison) {
    (0, _assertString.default)(str);
    return str === comparison;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"d1a5c332af02b5b8":"dGQqH"}],"2nitJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = contains;
var _assertString = _interopRequireDefault(require("3e51aa762dc8c667"));
var _toString = _interopRequireDefault(require("3cd4f952bd2883fe"));
var _merge = _interopRequireDefault(require("cc59373485c7be91"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var defaulContainsOptions = {
    ignoreCase: false,
    minOccurrences: 1
};
function contains(str, elem, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, defaulContainsOptions);
    if (options.ignoreCase) return str.toLowerCase().split((0, _toString.default)(elem).toLowerCase()).length > options.minOccurrences;
    return str.split((0, _toString.default)(elem)).length > options.minOccurrences;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"3e51aa762dc8c667":"dGQqH","3cd4f952bd2883fe":"1BTjZ","cc59373485c7be91":"c806a"}],"1BTjZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toString;
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function toString(input) {
    if (_typeof(input) === "object" && input !== null) {
        if (typeof input.toString === "function") input = input.toString();
        else input = "[object Object]";
    } else if (input === null || typeof input === "undefined" || isNaN(input) && !input.length) input = "";
    return String(input);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{}],"c806a":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = merge;
function merge() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var defaults = arguments.length > 1 ? arguments[1] : undefined;
    for(var key in defaults)if (typeof obj[key] === "undefined") obj[key] = defaults[key];
    return obj;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{}],"5OBn3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = matches;
var _assertString = _interopRequireDefault(require("d910f8373decde92"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function matches(str, pattern, modifiers) {
    (0, _assertString.default)(str);
    if (Object.prototype.toString.call(pattern) !== "[object RegExp]") pattern = new RegExp(pattern, modifiers);
    return !!str.match(pattern);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"d910f8373decde92":"dGQqH"}],"25fbl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isEmail;
var _assertString = _interopRequireDefault(require("70466717dea49b4a"));
var _merge = _interopRequireDefault(require("8c581d289b6709d2"));
var _isByteLength = _interopRequireDefault(require("652948654aa86386"));
var _isFQDN = _interopRequireDefault(require("6e220cda7afcfeb4"));
var _isIP = _interopRequireDefault(require("270d6e12f02c594c"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var default_email_options = {
    allow_display_name: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true,
    blacklisted_chars: "",
    ignore_max_length: false,
    host_blacklist: [],
    host_whitelist: []
};
/* eslint-disable max-len */ /* eslint-disable no-control-regex */ var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var gmailUserPart = /^[a-z\d]+$/;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
var defaultMaxEmailLength = 254;
/* eslint-enable max-len */ /* eslint-enable no-control-regex */ /**
 * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2
 * @param {String} display_name
 */ function validateDisplayName(display_name) {
    var display_name_without_quotes = display_name.replace(/^"(.+)"$/, "$1"); // display name with only spaces is not valid
    if (!display_name_without_quotes.trim()) return false;
     // check whether display name contains illegal character
    var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
    if (contains_illegal) {
        // if contains illegal characters,
        // must to be enclosed in double-quotes, otherwise it's not a valid display name
        if (display_name_without_quotes === display_name) return false;
         // the quotes in display name must start with character symbol \
        var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
        if (!all_start_with_back_slash) return false;
    }
    return true;
}
function isEmail(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_email_options);
    if (options.require_display_name || options.allow_display_name) {
        var display_email = str.match(splitNameAddress);
        if (display_email) {
            var display_name = display_email[1]; // Remove display name and angle brackets to get email address
            // Can be done in the regex but will introduce a ReDOS (See  #1597 for more info)
            str = str.replace(display_name, "").replace(/(^<|>$)/g, ""); // sometimes need to trim the last space to get the display name
            // because there may be a space between display name and email address
            // eg. myname <address@gmail.com>
            // the display name is `myname` instead of `myname `, so need to trim the last space
            if (display_name.endsWith(" ")) display_name = display_name.slice(0, -1);
            if (!validateDisplayName(display_name)) return false;
        } else if (options.require_display_name) return false;
    }
    if (!options.ignore_max_length && str.length > defaultMaxEmailLength) return false;
    var parts = str.split("@");
    var domain = parts.pop();
    var lower_domain = domain.toLowerCase();
    if (options.host_blacklist.includes(lower_domain)) return false;
    if (options.host_whitelist.length > 0 && !options.host_whitelist.includes(lower_domain)) return false;
    var user = parts.join("@");
    if (options.domain_specific_validation && (lower_domain === "gmail.com" || lower_domain === "googlemail.com")) {
        /*
      Previously we removed dots for gmail addresses before validating.
      This was removed because it allows `multiple..dots@gmail.com`
      to be reported as valid, but it is not.
      Gmail only normalizes single dots, removing them from here is pointless,
      should be done in normalizeEmail
    */ user = user.toLowerCase(); // Removing sub-address from username before gmail validation
        var username = user.split("+")[0]; // Dots are not included in gmail length restriction
        if (!(0, _isByteLength.default)(username.replace(/\./g, ""), {
            min: 6,
            max: 30
        })) return false;
        var _user_parts = username.split(".");
        for(var i = 0; i < _user_parts.length; i++){
            if (!gmailUserPart.test(_user_parts[i])) return false;
        }
    }
    if (options.ignore_max_length === false && (!(0, _isByteLength.default)(user, {
        max: 64
    }) || !(0, _isByteLength.default)(domain, {
        max: 254
    }))) return false;
    if (!(0, _isFQDN.default)(domain, {
        require_tld: options.require_tld,
        ignore_max_length: options.ignore_max_length
    })) {
        if (!options.allow_ip_domain) return false;
        if (!(0, _isIP.default)(domain)) {
            if (!domain.startsWith("[") || !domain.endsWith("]")) return false;
            var noBracketdomain = domain.slice(1, -1);
            if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) return false;
        }
    }
    if (user[0] === '"') {
        user = user.slice(1, user.length - 1);
        return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
    }
    var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
    var user_parts = user.split(".");
    for(var _i = 0; _i < user_parts.length; _i++){
        if (!pattern.test(user_parts[_i])) return false;
    }
    if (options.blacklisted_chars) {
        if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), "g")) !== -1) return false;
    }
    return true;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"70466717dea49b4a":"dGQqH","8c581d289b6709d2":"c806a","652948654aa86386":"agQQk","6e220cda7afcfeb4":"2rD1M","270d6e12f02c594c":"aH7jH"}],"agQQk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isByteLength;
var _assertString = _interopRequireDefault(require("8709d4cd1991bf25"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
/* eslint-disable prefer-rest-params */ function isByteLength(str, options) {
    (0, _assertString.default)(str);
    var min;
    var max;
    if (_typeof(options) === "object") {
        min = options.min || 0;
        max = options.max;
    } else {
        // backwards compatibility: isByteLength(str, min [, max])
        min = arguments[1];
        max = arguments[2];
    }
    var len = encodeURI(str).split(/%..|./).length - 1;
    return len >= min && (typeof max === "undefined" || len <= max);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"8709d4cd1991bf25":"dGQqH"}],"2rD1M":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isFQDN;
var _assertString = _interopRequireDefault(require("9ef49c576c3eb32d"));
var _merge = _interopRequireDefault(require("f628cd123e86515c"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var default_fqdn_options = {
    require_tld: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_numeric_tld: false,
    allow_wildcard: false,
    ignore_max_length: false
};
function isFQDN(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_fqdn_options);
    /* Remove the optional trailing dot before checking validity */ if (options.allow_trailing_dot && str[str.length - 1] === ".") str = str.substring(0, str.length - 1);
    /* Remove the optional wildcard before checking validity */ if (options.allow_wildcard === true && str.indexOf("*.") === 0) str = str.substring(2);
    var parts = str.split(".");
    var tld = parts[parts.length - 1];
    if (options.require_tld) {
        // disallow fqdns without tld
        if (parts.length < 2) return false;
        if (!options.allow_numeric_tld && !/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) return false;
         // disallow spaces
        if (/\s/.test(tld)) return false;
    } // reject numeric TLDs
    if (!options.allow_numeric_tld && /^\d+$/.test(tld)) return false;
    return parts.every(function(part) {
        if (part.length > 63 && !options.ignore_max_length) return false;
        if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) return false;
         // disallow full-width chars
        if (/[\uff01-\uff5e]/.test(part)) return false;
         // disallow parts starting or ending with hyphen
        if (/^-|-$/.test(part)) return false;
        if (!options.allow_underscores && /_/.test(part)) return false;
        return true;
    });
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9ef49c576c3eb32d":"dGQqH","f628cd123e86515c":"c806a"}],"aH7jH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIP;
var _assertString = _interopRequireDefault(require("35aed34e3042a858"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
11.3.  Examples

   The following addresses

             fe80::1234 (on the 1st link of the node)
             ff02::5678 (on the 5th link of the node)
             ff08::9abc (on the 10th organization of the node)

   would be represented as follows:

             fe80::1234%1
             ff02::5678%5
             ff08::9abc%10

   (Here we assume a natural translation from a zone index to the
   <zone_id> part, where the Nth zone of any scope is translated into
   "N".)

   If we use interface names as <zone_id>, those addresses could also be
   represented as follows:

            fe80::1234%ne0
            ff02::5678%pvc1.3
            ff08::9abc%interface10

   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
   to the 5th link, and "interface10" belongs to the 10th organization.
 * * */ var IPv4SegmentFormat = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
var IPv6SegmentFormat = "(?:[0-9a-fA-F]{1,4})";
var IPv6AddressRegExp = new RegExp("^(" + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
function isIP(str) {
    var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    (0, _assertString.default)(str);
    version = String(version);
    if (!version) return isIP(str, 4) || isIP(str, 6);
    if (version === "4") return IPv4AddressRegExp.test(str);
    if (version === "6") return IPv6AddressRegExp.test(str);
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"35aed34e3042a858":"dGQqH"}],"c1NyA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isURL;
var _assertString = _interopRequireDefault(require("8a7ec28029711837"));
var _isFQDN = _interopRequireDefault(require("5dcdad4f58bfb9c9"));
var _isIP = _interopRequireDefault(require("138e1db08b22dcdd"));
var _merge = _interopRequireDefault(require("342189f79ec30088"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
/*
options for isURL method

require_protocol - if set as true isURL will return false if protocol is not present in the URL
require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
protocols - valid protocols can be modified with this option
require_host - if set as false isURL will not check if host is present in the URL
require_port - if set as true isURL will check if port is present in the URL
allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
validate_length - if set as false isURL will skip string length validation (IE maximum is 2083)

*/ var default_url_options = {
    protocols: [
        "http",
        "https",
        "ftp"
    ],
    require_tld: true,
    require_protocol: false,
    require_host: true,
    require_port: false,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false,
    allow_fragments: true,
    allow_query_components: true,
    validate_length: true
};
var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
}
function checkHost(host, matches) {
    for(var i = 0; i < matches.length; i++){
        var match = matches[i];
        if (host === match || isRegExp(match) && match.test(host)) return true;
    }
    return false;
}
function isURL(url, options) {
    (0, _assertString.default)(url);
    if (!url || /[\s<>]/.test(url)) return false;
    if (url.indexOf("mailto:") === 0) return false;
    options = (0, _merge.default)(options, default_url_options);
    if (options.validate_length && url.length >= 2083) return false;
    if (!options.allow_fragments && url.includes("#")) return false;
    if (!options.allow_query_components && (url.includes("?") || url.includes("&"))) return false;
    var protocol, auth, host, hostname, port, port_str, split, ipv6;
    split = url.split("#");
    url = split.shift();
    split = url.split("?");
    url = split.shift();
    split = url.split("://");
    if (split.length > 1) {
        protocol = split.shift().toLowerCase();
        if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) return false;
    } else if (options.require_protocol) return false;
    else if (url.slice(0, 2) === "//") {
        if (!options.allow_protocol_relative_urls) return false;
        split[0] = url.slice(2);
    }
    url = split.join("://");
    if (url === "") return false;
    split = url.split("/");
    url = split.shift();
    if (url === "" && !options.require_host) return true;
    split = url.split("@");
    if (split.length > 1) {
        if (options.disallow_auth) return false;
        if (split[0] === "") return false;
        auth = split.shift();
        if (auth.indexOf(":") >= 0 && auth.split(":").length > 2) return false;
        var _auth$split = auth.split(":"), _auth$split2 = _slicedToArray(_auth$split, 2), user = _auth$split2[0], password = _auth$split2[1];
        if (user === "" && password === "") return false;
    }
    hostname = split.join("@");
    port_str = null;
    ipv6 = null;
    var ipv6_match = hostname.match(wrapped_ipv6);
    if (ipv6_match) {
        host = "";
        ipv6 = ipv6_match[1];
        port_str = ipv6_match[2] || null;
    } else {
        split = hostname.split(":");
        host = split.shift();
        if (split.length) port_str = split.join(":");
    }
    if (port_str !== null && port_str.length > 0) {
        port = parseInt(port_str, 10);
        if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) return false;
    } else if (options.require_port) return false;
    if (options.host_whitelist) return checkHost(host, options.host_whitelist);
    if (host === "" && !options.require_host) return true;
    if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) return false;
    host = host || ipv6;
    if (options.host_blacklist && checkHost(host, options.host_blacklist)) return false;
    return true;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"8a7ec28029711837":"dGQqH","5dcdad4f58bfb9c9":"2rD1M","138e1db08b22dcdd":"aH7jH","342189f79ec30088":"c806a"}],"26Ud6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMACAddress;
var _assertString = _interopRequireDefault(require("79312c853868713f"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var macAddress48 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/;
var macAddress48NoSeparators = /^([0-9a-fA-F]){12}$/;
var macAddress48WithDots = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/;
var macAddress64 = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/;
var macAddress64NoSeparators = /^([0-9a-fA-F]){16}$/;
var macAddress64WithDots = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;
function isMACAddress(str, options) {
    (0, _assertString.default)(str);
    if (options !== null && options !== void 0 && options.eui) options.eui = String(options.eui);
    /**
   * @deprecated `no_colons` TODO: remove it in the next major
  */ if (options !== null && options !== void 0 && options.no_colons || options !== null && options !== void 0 && options.no_separators) {
        if (options.eui === "48") return macAddress48NoSeparators.test(str);
        if (options.eui === "64") return macAddress64NoSeparators.test(str);
        return macAddress48NoSeparators.test(str) || macAddress64NoSeparators.test(str);
    }
    if ((options === null || options === void 0 ? void 0 : options.eui) === "48") return macAddress48.test(str) || macAddress48WithDots.test(str);
    if ((options === null || options === void 0 ? void 0 : options.eui) === "64") return macAddress64.test(str) || macAddress64WithDots.test(str);
    return isMACAddress(str, {
        eui: "48"
    }) || isMACAddress(str, {
        eui: "64"
    });
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"79312c853868713f":"dGQqH"}],"jsDgg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIPRange;
var _assertString = _interopRequireDefault(require("49e430a37cae71ba"));
var _isIP = _interopRequireDefault(require("92f9021554c592ab"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var subnetMaybe = /^\d{1,3}$/;
var v4Subnet = 32;
var v6Subnet = 128;
function isIPRange(str) {
    var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    (0, _assertString.default)(str);
    var parts = str.split("/"); // parts[0] -> ip, parts[1] -> subnet
    if (parts.length !== 2) return false;
    if (!subnetMaybe.test(parts[1])) return false;
     // Disallow preceding 0 i.e. 01, 02, ...
    if (parts[1].length > 1 && parts[1].startsWith("0")) return false;
    var isValidIP = (0, _isIP.default)(parts[0], version);
    if (!isValidIP) return false;
     // Define valid subnet according to IP's version
    var expectedSubnet = null;
    switch(String(version)){
        case "4":
            expectedSubnet = v4Subnet;
            break;
        case "6":
            expectedSubnet = v6Subnet;
            break;
        default:
            expectedSubnet = (0, _isIP.default)(parts[0], "6") ? v6Subnet : v4Subnet;
    }
    return parts[1] <= expectedSubnet && parts[1] >= 0;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"49e430a37cae71ba":"dGQqH","92f9021554c592ab":"aH7jH"}],"243yZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDate;
var _merge = _interopRequireDefault(require("21ec486863c5ab2"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e2) {
                    throw _e2;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e3) {
            didErr = true;
            err = _e3;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
var default_date_options = {
    format: "YYYY/MM/DD",
    delimiters: [
        "/",
        "-"
    ],
    strictMode: false
};
function isValidFormat(format) {
    return /(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(format);
}
function zip(date, format) {
    var zippedArr = [], len = Math.min(date.length, format.length);
    for(var i = 0; i < len; i++)zippedArr.push([
        date[i],
        format[i]
    ]);
    return zippedArr;
}
function isDate(input, options) {
    if (typeof options === "string") // Allow backward compatbility for old format isDate(input [, format])
    options = (0, _merge.default)({
        format: options
    }, default_date_options);
    else options = (0, _merge.default)(options, default_date_options);
    if (typeof input === "string" && isValidFormat(options.format)) {
        var formatDelimiter = options.delimiters.find(function(delimiter) {
            return options.format.indexOf(delimiter) !== -1;
        });
        var dateDelimiter = options.strictMode ? formatDelimiter : options.delimiters.find(function(delimiter) {
            return input.indexOf(delimiter) !== -1;
        });
        var dateAndFormat = zip(input.split(dateDelimiter), options.format.toLowerCase().split(formatDelimiter));
        var dateObj = {};
        var _iterator = _createForOfIteratorHelper(dateAndFormat), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var _step$value = _slicedToArray(_step.value, 2), dateWord = _step$value[0], formatWord = _step$value[1];
                if (dateWord.length !== formatWord.length) return false;
                dateObj[formatWord.charAt(0)] = dateWord;
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
        return new Date("".concat(dateObj.m, "/").concat(dateObj.d, "/").concat(dateObj.y)).getDate() === +dateObj.d;
    }
    if (!options.strictMode) return Object.prototype.toString.call(input) === "[object Date]" && isFinite(input);
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"21ec486863c5ab2":"c806a"}],"dh5pG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isTime;
var _merge = _interopRequireDefault(require("26fc1ee165383c3f"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var default_time_options = {
    hourFormat: "hour24",
    mode: "default"
};
var formats = {
    hour24: {
        default: /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/,
        withSeconds: /^([01]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
    },
    hour12: {
        default: /^(0?[1-9]|1[0-2]):([0-5][0-9]) (A|P)M$/,
        withSeconds: /^(0?[1-9]|1[0-2]):([0-5][0-9]):([0-5][0-9]) (A|P)M$/
    }
};
function isTime(input, options) {
    options = (0, _merge.default)(options, default_time_options);
    if (typeof input !== "string") return false;
    return formats[options.hourFormat][options.mode].test(input);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"26fc1ee165383c3f":"c806a"}],"iM2v3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBoolean;
var _assertString = _interopRequireDefault(require("e4a745c2125b138a"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var defaultOptions = {
    loose: false
};
var strictBooleans = [
    "true",
    "false",
    "1",
    "0"
];
var looseBooleans = [].concat(strictBooleans, [
    "yes",
    "no"
]);
function isBoolean(str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
    (0, _assertString.default)(str);
    if (options.loose) return looseBooleans.includes(str.toLowerCase());
    return strictBooleans.includes(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e4a745c2125b138a":"dGQqH"}],"izksE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLocale;
var _assertString = _interopRequireDefault(require("cbb9231b4b7081aa"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var localeReg = /^[A-Za-z]{2,4}([_-]([A-Za-z]{4}|[\d]{3}))?([_-]([A-Za-z]{2}|[\d]{3}))?$/;
function isLocale(str) {
    (0, _assertString.default)(str);
    if (str === "en_US_POSIX" || str === "ca_ES_VALENCIA") return true;
    return localeReg.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"cbb9231b4b7081aa":"dGQqH"}],"89f7h":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isAlpha;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("3de6ada39536fbf2"));
var _alpha = require("d4074828d7de2cf");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isAlpha(_str) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-US";
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _assertString.default)(_str);
    var str = _str;
    var ignore = options.ignore;
    if (ignore) {
        if (ignore instanceof RegExp) str = str.replace(ignore, "");
        else if (typeof ignore === "string") str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), ""); // escape regex for ignore
        else throw new Error("ignore should be instance of a String or RegExp");
    }
    if (locale in _alpha.alpha) return _alpha.alpha[locale].test(str);
    throw new Error("Invalid locale '".concat(locale, "'"));
}
var locales = Object.keys(_alpha.alpha);
exports.locales = locales;

},{"3de6ada39536fbf2":"dGQqH","d4074828d7de2cf":"3PeyB"}],"bzLj5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isAlphanumeric;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("520f6a53265a5a16"));
var _alpha = require("ed60b4f95488eea0");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isAlphanumeric(_str) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-US";
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _assertString.default)(_str);
    var str = _str;
    var ignore = options.ignore;
    if (ignore) {
        if (ignore instanceof RegExp) str = str.replace(ignore, "");
        else if (typeof ignore === "string") str = str.replace(new RegExp("[".concat(ignore.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&"), "]"), "g"), ""); // escape regex for ignore
        else throw new Error("ignore should be instance of a String or RegExp");
    }
    if (locale in _alpha.alphanumeric) return _alpha.alphanumeric[locale].test(str);
    throw new Error("Invalid locale '".concat(locale, "'"));
}
var locales = Object.keys(_alpha.alphanumeric);
exports.locales = locales;

},{"520f6a53265a5a16":"dGQqH","ed60b4f95488eea0":"3PeyB"}],"dYHig":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isNumeric;
var _assertString = _interopRequireDefault(require("e19f95f48f597618"));
var _alpha = require("730cce541a5e2944");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var numericNoSymbols = /^[0-9]+$/;
function isNumeric(str, options) {
    (0, _assertString.default)(str);
    if (options && options.no_symbols) return numericNoSymbols.test(str);
    return new RegExp("^[+-]?([0-9]*[".concat((options || {}).locale ? _alpha.decimal[options.locale] : ".", "])?[0-9]+$")).test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e19f95f48f597618":"dGQqH","730cce541a5e2944":"3PeyB"}],"eZLKj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isPassportNumber;
var _assertString = _interopRequireDefault(require("714539f615d17435"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Reference:
 * https://en.wikipedia.org/ -- Wikipedia
 * https://docs.microsoft.com/en-us/microsoft-365/compliance/eu-passport-number -- EU Passport Number
 * https://countrycode.org/ -- Country Codes
 */ var passportRegexByCountryCode = {
    AM: /^[A-Z]{2}\d{7}$/,
    // ARMENIA
    AR: /^[A-Z]{3}\d{6}$/,
    // ARGENTINA
    AT: /^[A-Z]\d{7}$/,
    // AUSTRIA
    AU: /^[A-Z]\d{7}$/,
    // AUSTRALIA
    AZ: /^[A-Z]{2,3}\d{7,8}$/,
    // AZERBAIJAN
    BE: /^[A-Z]{2}\d{6}$/,
    // BELGIUM
    BG: /^\d{9}$/,
    // BULGARIA
    BR: /^[A-Z]{2}\d{6}$/,
    // BRAZIL
    BY: /^[A-Z]{2}\d{7}$/,
    // BELARUS
    CA: /^[A-Z]{2}\d{6}$/,
    // CANADA
    CH: /^[A-Z]\d{7}$/,
    // SWITZERLAND
    CN: /^G\d{8}$|^E(?![IO])[A-Z0-9]\d{7}$/,
    // CHINA [G=Ordinary, E=Electronic] followed by 8-digits, or E followed by any UPPERCASE letter (except I and O) followed by 7 digits
    CY: /^[A-Z](\d{6}|\d{8})$/,
    // CYPRUS
    CZ: /^\d{8}$/,
    // CZECH REPUBLIC
    DE: /^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,
    // GERMANY
    DK: /^\d{9}$/,
    // DENMARK
    DZ: /^\d{9}$/,
    // ALGERIA
    EE: /^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,
    // ESTONIA (K followed by 7-digits), e-passports have 2 UPPERCASE followed by 7 digits
    ES: /^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,
    // SPAIN
    FI: /^[A-Z]{2}\d{7}$/,
    // FINLAND
    FR: /^\d{2}[A-Z]{2}\d{5}$/,
    // FRANCE
    GB: /^\d{9}$/,
    // UNITED KINGDOM
    GR: /^[A-Z]{2}\d{7}$/,
    // GREECE
    HR: /^\d{9}$/,
    // CROATIA
    HU: /^[A-Z]{2}(\d{6}|\d{7})$/,
    // HUNGARY
    IE: /^[A-Z0-9]{2}\d{7}$/,
    // IRELAND
    IN: /^[A-Z]{1}-?\d{7}$/,
    // INDIA
    ID: /^[A-C]\d{7}$/,
    // INDONESIA
    IR: /^[A-Z]\d{8}$/,
    // IRAN
    IS: /^(A)\d{7}$/,
    // ICELAND
    IT: /^[A-Z0-9]{2}\d{7}$/,
    // ITALY
    JM: /^[Aa]\d{7}$/,
    // JAMAICA
    JP: /^[A-Z]{2}\d{7}$/,
    // JAPAN
    KR: /^[MS]\d{8}$/,
    // SOUTH KOREA, REPUBLIC OF KOREA, [S=PS Passports, M=PM Passports]
    KZ: /^[a-zA-Z]\d{7}$/,
    // KAZAKHSTAN
    LI: /^[a-zA-Z]\d{5}$/,
    // LIECHTENSTEIN
    LT: /^[A-Z0-9]{8}$/,
    // LITHUANIA
    LU: /^[A-Z0-9]{8}$/,
    // LUXEMBURG
    LV: /^[A-Z0-9]{2}\d{7}$/,
    // LATVIA
    LY: /^[A-Z0-9]{8}$/,
    // LIBYA
    MT: /^\d{7}$/,
    // MALTA
    MZ: /^([A-Z]{2}\d{7})|(\d{2}[A-Z]{2}\d{5})$/,
    // MOZAMBIQUE
    MY: /^[AHK]\d{8}$/,
    // MALAYSIA
    MX: /^\d{10,11}$/,
    // MEXICO
    NL: /^[A-Z]{2}[A-Z0-9]{6}\d$/,
    // NETHERLANDS
    NZ: /^([Ll]([Aa]|[Dd]|[Ff]|[Hh])|[Ee]([Aa]|[Pp])|[Nn])\d{6}$/,
    // NEW ZEALAND
    PH: /^([A-Z](\d{6}|\d{7}[A-Z]))|([A-Z]{2}(\d{6}|\d{7}))$/,
    // PHILIPPINES
    PK: /^[A-Z]{2}\d{7}$/,
    // PAKISTAN
    PL: /^[A-Z]{2}\d{7}$/,
    // POLAND
    PT: /^[A-Z]\d{6}$/,
    // PORTUGAL
    RO: /^\d{8,9}$/,
    // ROMANIA
    RU: /^\d{9}$/,
    // RUSSIAN FEDERATION
    SE: /^\d{8}$/,
    // SWEDEN
    SL: /^(P)[A-Z]\d{7}$/,
    // SLOVENIA
    SK: /^[0-9A-Z]\d{7}$/,
    // SLOVAKIA
    TH: /^[A-Z]{1,2}\d{6,7}$/,
    // THAILAND
    TR: /^[A-Z]\d{8}$/,
    // TURKEY
    UA: /^[A-Z]{2}\d{6}$/,
    // UKRAINE
    US: /^\d{9}$/ // UNITED STATES
};
/**
 * Check if str is a valid passport number
 * relative to provided ISO Country Code.
 *
 * @param {string} str
 * @param {string} countryCode
 * @return {boolean}
 */ function isPassportNumber(str, countryCode) {
    (0, _assertString.default)(str);
    /** Remove All Whitespaces, Convert to UPPERCASE */ var normalizedStr = str.replace(/\s/g, "").toUpperCase();
    return countryCode.toUpperCase() in passportRegexByCountryCode && passportRegexByCountryCode[countryCode].test(normalizedStr);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"714539f615d17435":"dGQqH"}],"luZnK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isPort;
var _isInt = _interopRequireDefault(require("ceb270b40401a418"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isPort(str) {
    return (0, _isInt.default)(str, {
        min: 0,
        max: 65535
    });
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"ceb270b40401a418":"6nSfG"}],"6nSfG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isInt;
var _assertString = _interopRequireDefault(require("8ebbd5ce24100927"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;
function isInt(str, options) {
    (0, _assertString.default)(str);
    options = options || {}; // Get the regex to use for testing, based on whether
    // leading zeroes are allowed or not.
    var regex = options.hasOwnProperty("allow_leading_zeroes") && !options.allow_leading_zeroes ? int : intLeadingZeroes; // Check min/max/lt/gt
    var minCheckPassed = !options.hasOwnProperty("min") || str >= options.min;
    var maxCheckPassed = !options.hasOwnProperty("max") || str <= options.max;
    var ltCheckPassed = !options.hasOwnProperty("lt") || str < options.lt;
    var gtCheckPassed = !options.hasOwnProperty("gt") || str > options.gt;
    return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"8ebbd5ce24100927":"dGQqH"}],"cAZl8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLowercase;
var _assertString = _interopRequireDefault(require("1ee2c8d2c7e88eed"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isLowercase(str) {
    (0, _assertString.default)(str);
    return str === str.toLowerCase();
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"1ee2c8d2c7e88eed":"dGQqH"}],"6vzFM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isUppercase;
var _assertString = _interopRequireDefault(require("f417d115d27f6ed3"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isUppercase(str) {
    (0, _assertString.default)(str);
    return str === str.toUpperCase();
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f417d115d27f6ed3":"dGQqH"}],"au9P4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIMEI;
var _assertString = _interopRequireDefault(require("8bbb7aca98af1f13"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var imeiRegexWithoutHypens = /^[0-9]{15}$/;
var imeiRegexWithHypens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
function isIMEI(str, options) {
    (0, _assertString.default)(str);
    options = options || {}; // default regex for checking imei is the one without hyphens
    var imeiRegex = imeiRegexWithoutHypens;
    if (options.allow_hyphens) imeiRegex = imeiRegexWithHypens;
    if (!imeiRegex.test(str)) return false;
    str = str.replace(/-/g, "");
    var sum = 0, mul = 2, l = 14;
    for(var i = 0; i < l; i++){
        var digit = str.substring(l - i - 1, l - i);
        var tp = parseInt(digit, 10) * mul;
        if (tp >= 10) sum += tp % 10 + 1;
        else sum += tp;
        if (mul === 1) mul += 1;
        else mul -= 1;
    }
    var chk = (10 - sum % 10) % 10;
    if (chk !== parseInt(str.substring(14, 15), 10)) return false;
    return true;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"8bbb7aca98af1f13":"dGQqH"}],"bTliX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isAscii;
var _assertString = _interopRequireDefault(require("f8e3ff0e3e37b31b"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* eslint-disable no-control-regex */ var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */ function isAscii(str) {
    (0, _assertString.default)(str);
    return ascii.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f8e3ff0e3e37b31b":"dGQqH"}],"i0ySm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isFullWidth;
exports.fullWidth = void 0;
var _assertString = _interopRequireDefault(require("4b21a4c150410eb7"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
exports.fullWidth = fullWidth;
function isFullWidth(str) {
    (0, _assertString.default)(str);
    return fullWidth.test(str);
}

},{"4b21a4c150410eb7":"dGQqH"}],"k5krg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHalfWidth;
exports.halfWidth = void 0;
var _assertString = _interopRequireDefault(require("37381c2b4f6926f4"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;
exports.halfWidth = halfWidth;
function isHalfWidth(str) {
    (0, _assertString.default)(str);
    return halfWidth.test(str);
}

},{"37381c2b4f6926f4":"dGQqH"}],"844cT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isVariableWidth;
var _assertString = _interopRequireDefault(require("e68b882a4d50d00f"));
var _isFullWidth = require("486edb07b731fb47");
var _isHalfWidth = require("5e30555678e0f073");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isVariableWidth(str) {
    (0, _assertString.default)(str);
    return _isFullWidth.fullWidth.test(str) && _isHalfWidth.halfWidth.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e68b882a4d50d00f":"dGQqH","486edb07b731fb47":"i0ySm","5e30555678e0f073":"k5krg"}],"88z7u":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMultibyte;
var _assertString = _interopRequireDefault(require("33484d2fae22c942"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* eslint-disable no-control-regex */ var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */ function isMultibyte(str) {
    (0, _assertString.default)(str);
    return multibyte.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"33484d2fae22c942":"dGQqH"}],"iU8qF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isSemVer;
var _assertString = _interopRequireDefault(require("33759b3f8439f352"));
var _multilineRegex = _interopRequireDefault(require("98d1c477d4f11dd9"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Regular Expression to match
 * semantic versioning (SemVer)
 * built from multi-line, multi-parts regexp
 * Reference: https://semver.org/
 */ var semanticVersioningRegex = (0, _multilineRegex.default)([
    "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)",
    "(?:-((?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-z-][0-9a-z-]*))*))",
    "?(?:\\+([0-9a-z-]+(?:\\.[0-9a-z-]+)*))?$"
], "i");
function isSemVer(str) {
    (0, _assertString.default)(str);
    return semanticVersioningRegex.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"33759b3f8439f352":"dGQqH","98d1c477d4f11dd9":"2MHwB"}],"2MHwB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = multilineRegexp;
/**
 * Build RegExp object from an array
 * of multiple/multi-line regexp parts
 *
 * @param {string[]} parts
 * @param {string} flags
 * @return {object} - RegExp object
 */ function multilineRegexp(parts, flags) {
    var regexpAsStringLiteral = parts.join("");
    return new RegExp(regexpAsStringLiteral, flags);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{}],"1WO2m":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isSurrogatePair;
var _assertString = _interopRequireDefault(require("b613f192d52b05f1"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
function isSurrogatePair(str) {
    (0, _assertString.default)(str);
    return surrogatePair.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b613f192d52b05f1":"dGQqH"}],"aRL5c":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDecimal;
var _merge = _interopRequireDefault(require("ba000004315aa430"));
var _assertString = _interopRequireDefault(require("836c7d5280428cba"));
var _includes = _interopRequireDefault(require("438924f034eb775a"));
var _alpha = require("798092a5626c7220");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function decimalRegExp(options) {
    var regExp = new RegExp("^[-+]?([0-9]+)?(\\".concat(_alpha.decimal[options.locale], "[0-9]{").concat(options.decimal_digits, "})").concat(options.force_decimal ? "" : "?", "$"));
    return regExp;
}
var default_decimal_options = {
    force_decimal: false,
    decimal_digits: "1,",
    locale: "en-US"
};
var blacklist = [
    "",
    "-",
    "+"
];
function isDecimal(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_decimal_options);
    if (options.locale in _alpha.decimal) return !(0, _includes.default)(blacklist, str.replace(/ /g, "")) && decimalRegExp(options).test(str);
    throw new Error("Invalid locale '".concat(options.locale, "'"));
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"ba000004315aa430":"c806a","836c7d5280428cba":"dGQqH","438924f034eb775a":"iIfym","798092a5626c7220":"3PeyB"}],"iIfym":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var includes = function includes(arr, val) {
    return arr.some(function(arrVal) {
        return val === arrVal;
    });
};
var _default = includes;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

},{}],"h00RN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHexadecimal;
var _assertString = _interopRequireDefault(require("85ad369b649033ec"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var hexadecimal = /^(0x|0h)?[0-9A-F]+$/i;
function isHexadecimal(str) {
    (0, _assertString.default)(str);
    return hexadecimal.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"85ad369b649033ec":"dGQqH"}],"9a3YX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isOctal;
var _assertString = _interopRequireDefault(require("f6469bb3e63d39a"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var octal = /^(0o)?[0-7]+$/i;
function isOctal(str) {
    (0, _assertString.default)(str);
    return octal.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f6469bb3e63d39a":"dGQqH"}],"7xKVo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDivisibleBy;
var _assertString = _interopRequireDefault(require("9a6c24154d57117f"));
var _toFloat = _interopRequireDefault(require("d19aeb34bda3b837"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isDivisibleBy(str, num) {
    (0, _assertString.default)(str);
    return (0, _toFloat.default)(str) % parseInt(num, 10) === 0;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9a6c24154d57117f":"dGQqH","d19aeb34bda3b837":"9YAY3"}],"hm22e":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHexColor;
var _assertString = _interopRequireDefault(require("f649663ed99a258c"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
function isHexColor(str) {
    (0, _assertString.default)(str);
    return hexcolor.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f649663ed99a258c":"dGQqH"}],"ebnFs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isRgbColor;
var _assertString = _interopRequireDefault(require("15ec9a5279ab3c75"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
var rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
var rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/;
var rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d|1(\.0)?|0(\.0)?)\)$/;
function isRgbColor(str) {
    var includePercentValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    (0, _assertString.default)(str);
    if (!includePercentValues) return rgbColor.test(str) || rgbaColor.test(str);
    return rgbColor.test(str) || rgbaColor.test(str) || rgbColorPercent.test(str) || rgbaColorPercent.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"15ec9a5279ab3c75":"dGQqH"}],"5avTM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHSL;
var _assertString = _interopRequireDefault(require("59f30491d05ba1cf"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var hslComma = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(,(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}(,((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?))?\)$/i;
var hslSpace = /^hsla?\(((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?))(deg|grad|rad|turn)?(\s(\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%){2}\s?(\/\s((\+|\-)?([0-9]+(\.[0-9]+)?(e(\+|\-)?[0-9]+)?|\.[0-9]+(e(\+|\-)?[0-9]+)?)%?)\s?)?\)$/i;
function isHSL(str) {
    (0, _assertString.default)(str); // Strip duplicate spaces before calling the validation regex (See  #1598 for more info)
    var strippedStr = str.replace(/\s+/g, " ").replace(/\s?(hsla?\(|\)|,)\s?/ig, "$1");
    if (strippedStr.indexOf(",") !== -1) return hslComma.test(strippedStr);
    return hslSpace.test(strippedStr);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"59f30491d05ba1cf":"dGQqH"}],"4yqQH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISRC;
var _assertString = _interopRequireDefault(require("b9b27d76af9c95dc"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;
function isISRC(str) {
    (0, _assertString.default)(str);
    return isrc.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b9b27d76af9c95dc":"dGQqH"}],"loKzp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIBAN;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("dc8c49b753cc6388"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * List of country codes with
 * corresponding IBAN regular expression
 * Reference: https://en.wikipedia.org/wiki/International_Bank_Account_Number
 */ var ibanRegexThroughCountryCode = {
    AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
    AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
    AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
    AT: /^(AT[0-9]{2})\d{16}$/,
    AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    BA: /^(BA[0-9]{2})\d{16}$/,
    BE: /^(BE[0-9]{2})\d{12}$/,
    BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
    BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
    BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
    BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
    CR: /^(CR[0-9]{2})\d{18}$/,
    CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
    CZ: /^(CZ[0-9]{2})\d{20}$/,
    DE: /^(DE[0-9]{2})\d{18}$/,
    DK: /^(DK[0-9]{2})\d{14}$/,
    DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
    EE: /^(EE[0-9]{2})\d{16}$/,
    EG: /^(EG[0-9]{2})\d{25}$/,
    ES: /^(ES[0-9]{2})\d{20}$/,
    FI: /^(FI[0-9]{2})\d{14}$/,
    FO: /^(FO[0-9]{2})\d{14}$/,
    FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
    GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
    GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
    GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
    GL: /^(GL[0-9]{2})\d{14}$/,
    GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
    GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
    HR: /^(HR[0-9]{2})\d{17}$/,
    HU: /^(HU[0-9]{2})\d{24}$/,
    IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
    IL: /^(IL[0-9]{2})\d{19}$/,
    IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
    IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
    IS: /^(IS[0-9]{2})\d{22}$/,
    IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
    JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
    KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
    KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
    LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
    LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
    LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
    LT: /^(LT[0-9]{2})\d{16}$/,
    LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
    LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
    MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
    MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
    ME: /^(ME[0-9]{2})\d{18}$/,
    MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
    MR: /^(MR[0-9]{2})\d{23}$/,
    MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
    MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
    MZ: /^(MZ[0-9]{2})\d{21}$/,
    NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
    NO: /^(NO[0-9]{2})\d{11}$/,
    PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
    PL: /^(PL[0-9]{2})\d{24}$/,
    PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
    PT: /^(PT[0-9]{2})\d{21}$/,
    QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
    RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
    RS: /^(RS[0-9]{2})\d{18}$/,
    SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
    SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
    SE: /^(SE[0-9]{2})\d{20}$/,
    SI: /^(SI[0-9]{2})\d{15}$/,
    SK: /^(SK[0-9]{2})\d{20}$/,
    SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
    SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
    TL: /^(TL[0-9]{2})\d{19}$/,
    TN: /^(TN[0-9]{2})\d{20}$/,
    TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
    UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
    VA: /^(VA[0-9]{2})\d{18}$/,
    VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
    XK: /^(XK[0-9]{2})\d{16}$/
};
/**
 * Check whether string has correct universal IBAN format
 * The IBAN consists of up to 34 alphanumeric characters, as follows:
 * Country Code using ISO 3166-1 alpha-2, two letters
 * check digits, two digits and
 * Basic Bank Account Number (BBAN), up to 30 alphanumeric characters.
 * NOTE: Permitted IBAN characters are: digits [0-9] and the 26 latin alphabetic [A-Z]
 *
 * @param {string} str - string under validation
 * @return {boolean}
 */ function hasValidIbanFormat(str) {
    // Strip white spaces and hyphens
    var strippedStr = str.replace(/[\s\-]+/gi, "").toUpperCase();
    var isoCountryCode = strippedStr.slice(0, 2).toUpperCase();
    return isoCountryCode in ibanRegexThroughCountryCode && ibanRegexThroughCountryCode[isoCountryCode].test(strippedStr);
}
/**
   * Check whether string has valid IBAN Checksum
   * by performing basic mod-97 operation and
   * the remainder should equal 1
   * -- Start by rearranging the IBAN by moving the four initial characters to the end of the string
   * -- Replace each letter in the string with two digits, A -> 10, B = 11, Z = 35
   * -- Interpret the string as a decimal integer and
   * -- compute the remainder on division by 97 (mod 97)
   * Reference: https://en.wikipedia.org/wiki/International_Bank_Account_Number
   *
   * @param {string} str
   * @return {boolean}
   */ function hasValidIbanChecksum(str) {
    var strippedStr = str.replace(/[^A-Z0-9]+/gi, "").toUpperCase(); // Keep only digits and A-Z latin alphabetic
    var rearranged = strippedStr.slice(4) + strippedStr.slice(0, 4);
    var alphaCapsReplacedWithDigits = rearranged.replace(/[A-Z]/g, function(char) {
        return char.charCodeAt(0) - 55;
    });
    var remainder = alphaCapsReplacedWithDigits.match(/\d{1,7}/g).reduce(function(acc, value) {
        return Number(acc + value) % 97;
    }, "");
    return remainder === 1;
}
function isIBAN(str) {
    (0, _assertString.default)(str);
    return hasValidIbanFormat(str) && hasValidIbanChecksum(str);
}
var locales = Object.keys(ibanRegexThroughCountryCode);
exports.locales = locales;

},{"dc8c49b753cc6388":"dGQqH"}],"dGnco":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBIC;
var _assertString = _interopRequireDefault(require("d2180d3c377d0b4a"));
var _isISO31661Alpha = require("6c0405a7c16e731c");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// https://en.wikipedia.org/wiki/ISO_9362
var isBICReg = /^[A-Za-z]{6}[A-Za-z0-9]{2}([A-Za-z0-9]{3})?$/;
function isBIC(str) {
    (0, _assertString.default)(str); // toUpperCase() should be removed when a new major version goes out that changes
    // the regex to [A-Z] (per the spec).
    var countryCode = str.slice(4, 6).toUpperCase();
    if (!_isISO31661Alpha.CountryCodes.has(countryCode) && countryCode !== "XK") return false;
    return isBICReg.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"d2180d3c377d0b4a":"dGQqH","6c0405a7c16e731c":"d023L"}],"d023L":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISO31661Alpha2;
exports.CountryCodes = void 0;
var _assertString = _interopRequireDefault(require("e41d8cb7b90fd66a"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
var validISO31661Alpha2CountriesCodes = new Set([
    "AD",
    "AE",
    "AF",
    "AG",
    "AI",
    "AL",
    "AM",
    "AO",
    "AQ",
    "AR",
    "AS",
    "AT",
    "AU",
    "AW",
    "AX",
    "AZ",
    "BA",
    "BB",
    "BD",
    "BE",
    "BF",
    "BG",
    "BH",
    "BI",
    "BJ",
    "BL",
    "BM",
    "BN",
    "BO",
    "BQ",
    "BR",
    "BS",
    "BT",
    "BV",
    "BW",
    "BY",
    "BZ",
    "CA",
    "CC",
    "CD",
    "CF",
    "CG",
    "CH",
    "CI",
    "CK",
    "CL",
    "CM",
    "CN",
    "CO",
    "CR",
    "CU",
    "CV",
    "CW",
    "CX",
    "CY",
    "CZ",
    "DE",
    "DJ",
    "DK",
    "DM",
    "DO",
    "DZ",
    "EC",
    "EE",
    "EG",
    "EH",
    "ER",
    "ES",
    "ET",
    "FI",
    "FJ",
    "FK",
    "FM",
    "FO",
    "FR",
    "GA",
    "GB",
    "GD",
    "GE",
    "GF",
    "GG",
    "GH",
    "GI",
    "GL",
    "GM",
    "GN",
    "GP",
    "GQ",
    "GR",
    "GS",
    "GT",
    "GU",
    "GW",
    "GY",
    "HK",
    "HM",
    "HN",
    "HR",
    "HT",
    "HU",
    "ID",
    "IE",
    "IL",
    "IM",
    "IN",
    "IO",
    "IQ",
    "IR",
    "IS",
    "IT",
    "JE",
    "JM",
    "JO",
    "JP",
    "KE",
    "KG",
    "KH",
    "KI",
    "KM",
    "KN",
    "KP",
    "KR",
    "KW",
    "KY",
    "KZ",
    "LA",
    "LB",
    "LC",
    "LI",
    "LK",
    "LR",
    "LS",
    "LT",
    "LU",
    "LV",
    "LY",
    "MA",
    "MC",
    "MD",
    "ME",
    "MF",
    "MG",
    "MH",
    "MK",
    "ML",
    "MM",
    "MN",
    "MO",
    "MP",
    "MQ",
    "MR",
    "MS",
    "MT",
    "MU",
    "MV",
    "MW",
    "MX",
    "MY",
    "MZ",
    "NA",
    "NC",
    "NE",
    "NF",
    "NG",
    "NI",
    "NL",
    "NO",
    "NP",
    "NR",
    "NU",
    "NZ",
    "OM",
    "PA",
    "PE",
    "PF",
    "PG",
    "PH",
    "PK",
    "PL",
    "PM",
    "PN",
    "PR",
    "PS",
    "PT",
    "PW",
    "PY",
    "QA",
    "RE",
    "RO",
    "RS",
    "RU",
    "RW",
    "SA",
    "SB",
    "SC",
    "SD",
    "SE",
    "SG",
    "SH",
    "SI",
    "SJ",
    "SK",
    "SL",
    "SM",
    "SN",
    "SO",
    "SR",
    "SS",
    "ST",
    "SV",
    "SX",
    "SY",
    "SZ",
    "TC",
    "TD",
    "TF",
    "TG",
    "TH",
    "TJ",
    "TK",
    "TL",
    "TM",
    "TN",
    "TO",
    "TR",
    "TT",
    "TV",
    "TW",
    "TZ",
    "UA",
    "UG",
    "UM",
    "US",
    "UY",
    "UZ",
    "VA",
    "VC",
    "VE",
    "VG",
    "VI",
    "VN",
    "VU",
    "WF",
    "WS",
    "YE",
    "YT",
    "ZA",
    "ZM",
    "ZW"
]);
function isISO31661Alpha2(str) {
    (0, _assertString.default)(str);
    return validISO31661Alpha2CountriesCodes.has(str.toUpperCase());
}
var CountryCodes = validISO31661Alpha2CountriesCodes;
exports.CountryCodes = CountryCodes;

},{"e41d8cb7b90fd66a":"dGQqH"}],"bld3U":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMD5;
var _assertString = _interopRequireDefault(require("c755e3f2ef1c985a"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var md5 = /^[a-f0-9]{32}$/;
function isMD5(str) {
    (0, _assertString.default)(str);
    return md5.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"c755e3f2ef1c985a":"dGQqH"}],"jEjuS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isHash;
var _assertString = _interopRequireDefault(require("318b64cc266b5945"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var lengths = {
    md5: 32,
    md4: 32,
    sha1: 40,
    sha256: 64,
    sha384: 96,
    sha512: 128,
    ripemd128: 32,
    ripemd160: 40,
    tiger128: 32,
    tiger160: 40,
    tiger192: 48,
    crc32: 8,
    crc32b: 8
};
function isHash(str, algorithm) {
    (0, _assertString.default)(str);
    var hash = new RegExp("^[a-fA-F0-9]{".concat(lengths[algorithm], "}$"));
    return hash.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"318b64cc266b5945":"dGQqH"}],"1ovuU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isJWT;
var _assertString = _interopRequireDefault(require("d0b86a9a84ca2198"));
var _isBase = _interopRequireDefault(require("2746967ea24563e0"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isJWT(str) {
    (0, _assertString.default)(str);
    var dotSplit = str.split(".");
    var len = dotSplit.length;
    if (len > 3 || len < 2) return false;
    return dotSplit.reduce(function(acc, currElem) {
        return acc && (0, _isBase.default)(currElem, {
            urlSafe: true
        });
    }, true);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"d0b86a9a84ca2198":"dGQqH","2746967ea24563e0":"gPCLH"}],"gPCLH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBase64;
var _assertString = _interopRequireDefault(require("8e44c374ff4c971d"));
var _merge = _interopRequireDefault(require("cfc93884c3e723dd"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var notBase64 = /[^A-Z0-9+\/=]/i;
var urlSafeBase64 = /^[A-Z0-9_\-]*$/i;
var defaultBase64Options = {
    urlSafe: false
};
function isBase64(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, defaultBase64Options);
    var len = str.length;
    if (options.urlSafe) return urlSafeBase64.test(str);
    if (len % 4 !== 0 || notBase64.test(str)) return false;
    var firstPaddingChar = str.indexOf("=");
    return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === "=";
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"8e44c374ff4c971d":"dGQqH","cfc93884c3e723dd":"c806a"}],"2hHhN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isJSON;
var _assertString = _interopRequireDefault(require("9c0272646c6c578b"));
var _merge = _interopRequireDefault(require("ef7c216ff7a82269"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
var default_json_options = {
    allow_primitives: false
};
function isJSON(str, options) {
    (0, _assertString.default)(str);
    try {
        options = (0, _merge.default)(options, default_json_options);
        var primitives = [];
        if (options.allow_primitives) primitives = [
            null,
            false,
            true
        ];
        var obj = JSON.parse(str);
        return primitives.includes(obj) || !!obj && _typeof(obj) === "object";
    } catch (e) {
    /* ignore */ }
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9c0272646c6c578b":"dGQqH","ef7c216ff7a82269":"c806a"}],"dOok5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isEmpty;
var _assertString = _interopRequireDefault(require("f94a6139bb13a8ea"));
var _merge = _interopRequireDefault(require("184be28420881903"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var default_is_empty_options = {
    ignore_whitespace: false
};
function isEmpty(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_is_empty_options);
    return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f94a6139bb13a8ea":"dGQqH","184be28420881903":"c806a"}],"f0je8":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLength;
var _assertString = _interopRequireDefault(require("6b47bc2ed334a900"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
/* eslint-disable prefer-rest-params */ function isLength(str, options) {
    (0, _assertString.default)(str);
    var min;
    var max;
    if (_typeof(options) === "object") {
        min = options.min || 0;
        max = options.max;
    } else {
        // backwards compatibility: isLength(str, min [, max])
        min = arguments[1] || 0;
        max = arguments[2];
    }
    var presentationSequences = str.match(/(\uFE0F|\uFE0E)/g) || [];
    var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
    var len = str.length - presentationSequences.length - surrogatePairs.length;
    return len >= min && (typeof max === "undefined" || len <= max);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"6b47bc2ed334a900":"dGQqH"}],"tOwUk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isUUID;
var _assertString = _interopRequireDefault(require("973e2ef767c2afa9"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var uuid = {
    1: /^[0-9A-F]{8}-[0-9A-F]{4}-1[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    2: /^[0-9A-F]{8}-[0-9A-F]{4}-2[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
function isUUID(str, version) {
    (0, _assertString.default)(str);
    var pattern = uuid[![
        undefined,
        null
    ].includes(version) ? version : "all"];
    return !!pattern && pattern.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"973e2ef767c2afa9":"dGQqH"}],"dcUed":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMongoId;
var _assertString = _interopRequireDefault(require("d869e7f0c5cb701e"));
var _isHexadecimal = _interopRequireDefault(require("16f83f29c7928fec"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isMongoId(str) {
    (0, _assertString.default)(str);
    return (0, _isHexadecimal.default)(str) && str.length === 24;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"d869e7f0c5cb701e":"dGQqH","16f83f29c7928fec":"h00RN"}],"9u60f":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isAfter;
var _toDate = _interopRequireDefault(require("e164ca231e30adf6"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isAfter(date, options) {
    // For backwards compatibility:
    // isAfter(str [, date]), i.e. `options` could be used as argument for the legacy `date`
    var comparisonDate = (options === null || options === void 0 ? void 0 : options.comparisonDate) || options || Date().toString();
    var comparison = (0, _toDate.default)(comparisonDate);
    var original = (0, _toDate.default)(date);
    return !!(original && comparison && original > comparison);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e164ca231e30adf6":"8TB4U"}],"aHPfk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBefore;
var _assertString = _interopRequireDefault(require("ee7468ef905317d2"));
var _toDate = _interopRequireDefault(require("a53ce262ac376887"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isBefore(str) {
    var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());
    (0, _assertString.default)(str);
    var comparison = (0, _toDate.default)(date);
    var original = (0, _toDate.default)(str);
    return !!(original && comparison && original < comparison);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"ee7468ef905317d2":"dGQqH","a53ce262ac376887":"8TB4U"}],"aFGXX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIn;
var _assertString = _interopRequireDefault(require("1e5f07e2cd279106"));
var _toString = _interopRequireDefault(require("26a576c3ed31db1f"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function isIn(str, options) {
    (0, _assertString.default)(str);
    var i;
    if (Object.prototype.toString.call(options) === "[object Array]") {
        var array = [];
        for(i in options)// https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
        // istanbul ignore else
        if (({}).hasOwnProperty.call(options, i)) array[i] = (0, _toString.default)(options[i]);
        return array.indexOf(str) >= 0;
    } else if (_typeof(options) === "object") return options.hasOwnProperty(str);
    else if (options && typeof options.indexOf === "function") return options.indexOf(str) >= 0;
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"1e5f07e2cd279106":"dGQqH","26a576c3ed31db1f":"1BTjZ"}],"ekefF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLuhnNumber;
var _assertString = _interopRequireDefault(require("939e6ef1ca2e993c"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isLuhnNumber(str) {
    (0, _assertString.default)(str);
    var sanitized = str.replace(/[- ]+/g, "");
    var sum = 0;
    var digit;
    var tmpNum;
    var shouldDouble;
    for(var i = sanitized.length - 1; i >= 0; i--){
        digit = sanitized.substring(i, i + 1);
        tmpNum = parseInt(digit, 10);
        if (shouldDouble) {
            tmpNum *= 2;
            if (tmpNum >= 10) sum += tmpNum % 10 + 1;
            else sum += tmpNum;
        } else sum += tmpNum;
        shouldDouble = !shouldDouble;
    }
    return !!(sum % 10 === 0 ? sanitized : false);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"939e6ef1ca2e993c":"dGQqH"}],"70XyJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isCreditCard;
var _assertString = _interopRequireDefault(require("104f85f43b1730c2"));
var _isLuhnNumber = _interopRequireDefault(require("6743c1d01cccf7b5"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var cards = {
    amex: /^3[47][0-9]{13}$/,
    dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    mastercard: /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
    // /^[25][1-7][0-9]{14}$/;
    unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
    visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/
};
/* eslint-disable max-len */ var allCards = /^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14}|^(81[0-9]{14,17}))$/;
/* eslint-enable max-len */ function isCreditCard(card) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _assertString.default)(card);
    var provider = options.provider;
    var sanitized = card.replace(/[- ]+/g, "");
    if (provider && provider.toLowerCase() in cards) {
        // specific provider in the list
        if (!cards[provider.toLowerCase()].test(sanitized)) return false;
    } else if (provider && !(provider.toLowerCase() in cards)) /* specific provider not in the list */ throw new Error("".concat(provider, " is not a valid credit card provider."));
    else if (!allCards.test(sanitized)) // no specific provider
    return false;
    return (0, _isLuhnNumber.default)(card);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"104f85f43b1730c2":"dGQqH","6743c1d01cccf7b5":"ekefF"}],"hlY4v":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isIdentityCard;
var _assertString = _interopRequireDefault(require("82ebad56c1e929ba"));
var _isInt = _interopRequireDefault(require("a1cec04ff91509b3"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var validators = {
    PL: function PL(str) {
        (0, _assertString.default)(str);
        var weightOfDigits = {
            1: 1,
            2: 3,
            3: 7,
            4: 9,
            5: 1,
            6: 3,
            7: 7,
            8: 9,
            9: 1,
            10: 3,
            11: 0
        };
        if (str != null && str.length === 11 && (0, _isInt.default)(str, {
            allow_leading_zeroes: true
        })) {
            var digits = str.split("").slice(0, -1);
            var sum = digits.reduce(function(acc, digit, index) {
                return acc + Number(digit) * weightOfDigits[index + 1];
            }, 0);
            var modulo = sum % 10;
            var lastDigit = Number(str.charAt(str.length - 1));
            if (modulo === 0 && lastDigit === 0 || lastDigit === 10 - modulo) return true;
        }
        return false;
    },
    ES: function ES(str) {
        (0, _assertString.default)(str);
        var DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
        var charsValue = {
            X: 0,
            Y: 1,
            Z: 2
        };
        var controlDigits = [
            "T",
            "R",
            "W",
            "A",
            "G",
            "M",
            "Y",
            "F",
            "P",
            "D",
            "X",
            "B",
            "N",
            "J",
            "Z",
            "S",
            "Q",
            "V",
            "H",
            "L",
            "C",
            "K",
            "E"
        ]; // sanitize user input
        var sanitized = str.trim().toUpperCase(); // validate the data structure
        if (!DNI.test(sanitized)) return false;
         // validate the control digit
        var number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, function(char) {
            return charsValue[char];
        });
        return sanitized.endsWith(controlDigits[number % 23]);
    },
    FI: function FI(str) {
        // https://dvv.fi/en/personal-identity-code#:~:text=control%20character%20for%20a-,personal,-identity%20code%20calculated
        (0, _assertString.default)(str);
        if (str.length !== 11) return false;
        if (!str.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/)) return false;
        var checkDigits = "0123456789ABCDEFHJKLMNPRSTUVWXY";
        var idAsNumber = parseInt(str.slice(0, 6), 10) * 1000 + parseInt(str.slice(7, 10), 10);
        var remainder = idAsNumber % 31;
        var checkDigit = checkDigits[remainder];
        return checkDigit === str.slice(10, 11);
    },
    IN: function IN(str) {
        var DNI = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/; // multiplication table
        var d = [
            [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            [
                1,
                2,
                3,
                4,
                0,
                6,
                7,
                8,
                9,
                5
            ],
            [
                2,
                3,
                4,
                0,
                1,
                7,
                8,
                9,
                5,
                6
            ],
            [
                3,
                4,
                0,
                1,
                2,
                8,
                9,
                5,
                6,
                7
            ],
            [
                4,
                0,
                1,
                2,
                3,
                9,
                5,
                6,
                7,
                8
            ],
            [
                5,
                9,
                8,
                7,
                6,
                0,
                4,
                3,
                2,
                1
            ],
            [
                6,
                5,
                9,
                8,
                7,
                1,
                0,
                4,
                3,
                2
            ],
            [
                7,
                6,
                5,
                9,
                8,
                2,
                1,
                0,
                4,
                3
            ],
            [
                8,
                7,
                6,
                5,
                9,
                3,
                2,
                1,
                0,
                4
            ],
            [
                9,
                8,
                7,
                6,
                5,
                4,
                3,
                2,
                1,
                0
            ]
        ]; // permutation table
        var p = [
            [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            [
                1,
                5,
                7,
                6,
                2,
                8,
                3,
                0,
                9,
                4
            ],
            [
                5,
                8,
                0,
                3,
                7,
                9,
                6,
                1,
                4,
                2
            ],
            [
                8,
                9,
                1,
                6,
                0,
                4,
                3,
                5,
                2,
                7
            ],
            [
                9,
                4,
                5,
                3,
                1,
                2,
                6,
                8,
                7,
                0
            ],
            [
                4,
                2,
                8,
                6,
                5,
                7,
                3,
                9,
                0,
                1
            ],
            [
                2,
                7,
                9,
                3,
                8,
                0,
                6,
                4,
                1,
                5
            ],
            [
                7,
                0,
                4,
                6,
                9,
                1,
                3,
                2,
                5,
                8
            ]
        ]; // sanitize user input
        var sanitized = str.trim(); // validate the data structure
        if (!DNI.test(sanitized)) return false;
        var c = 0;
        var invertedArray = sanitized.replace(/\s/g, "").split("").map(Number).reverse();
        invertedArray.forEach(function(val, i) {
            c = d[c][p[i % 8][val]];
        });
        return c === 0;
    },
    IR: function IR(str) {
        if (!str.match(/^\d{10}$/)) return false;
        str = "0000".concat(str).slice(str.length - 6);
        if (parseInt(str.slice(3, 9), 10) === 0) return false;
        var lastNumber = parseInt(str.slice(9, 10), 10);
        var sum = 0;
        for(var i = 0; i < 9; i++)sum += parseInt(str.slice(i, i + 1), 10) * (10 - i);
        sum %= 11;
        return sum < 2 && lastNumber === sum || sum >= 2 && lastNumber === 11 - sum;
    },
    IT: function IT(str) {
        if (str.length !== 9) return false;
        if (str === "CA00000AA") return false; // https://it.wikipedia.org/wiki/Carta_d%27identit%C3%A0_elettronica_italiana
        return str.search(/C[A-Z][0-9]{5}[A-Z]{2}/i) > -1;
    },
    NO: function NO(str) {
        var sanitized = str.trim();
        if (isNaN(Number(sanitized))) return false;
        if (sanitized.length !== 11) return false;
        if (sanitized === "00000000000") return false; // https://no.wikipedia.org/wiki/F%C3%B8dselsnummer
        var f = sanitized.split("").map(Number);
        var k1 = (11 - (3 * f[0] + 7 * f[1] + 6 * f[2] + 1 * f[3] + 8 * f[4] + 9 * f[5] + 4 * f[6] + 5 * f[7] + 2 * f[8]) % 11) % 11;
        var k2 = (11 - (5 * f[0] + 4 * f[1] + 3 * f[2] + 2 * f[3] + 7 * f[4] + 6 * f[5] + 5 * f[6] + 4 * f[7] + 3 * f[8] + 2 * k1) % 11) % 11;
        if (k1 !== f[9] || k2 !== f[10]) return false;
        return true;
    },
    TH: function TH(str) {
        if (!str.match(/^[1-8]\d{12}$/)) return false; // validate check digit
        var sum = 0;
        for(var i = 0; i < 12; i++)sum += parseInt(str[i], 10) * (13 - i);
        return str[12] === ((11 - sum % 11) % 10).toString();
    },
    LK: function LK(str) {
        var old_nic = /^[1-9]\d{8}[vx]$/i;
        var new_nic = /^[1-9]\d{11}$/i;
        if (str.length === 10 && old_nic.test(str)) return true;
        else if (str.length === 12 && new_nic.test(str)) return true;
        return false;
    },
    "he-IL": function heIL(str) {
        var DNI = /^\d{9}$/; // sanitize user input
        var sanitized = str.trim(); // validate the data structure
        if (!DNI.test(sanitized)) return false;
        var id = sanitized;
        var sum = 0, incNum;
        for(var i = 0; i < id.length; i++){
            incNum = Number(id[i]) * (i % 2 + 1); // Multiply number by 1 or 2
            sum += incNum > 9 ? incNum - 9 : incNum; // Sum the digits up and add to total
        }
        return sum % 10 === 0;
    },
    "ar-LY": function arLY(str) {
        // Libya National Identity Number NIN is 12 digits, the first digit is either 1 or 2
        var NIN = /^(1|2)\d{11}$/; // sanitize user input
        var sanitized = str.trim(); // validate the data structure
        if (!NIN.test(sanitized)) return false;
        return true;
    },
    "ar-TN": function arTN(str) {
        var DNI = /^\d{8}$/; // sanitize user input
        var sanitized = str.trim(); // validate the data structure
        if (!DNI.test(sanitized)) return false;
        return true;
    },
    "zh-CN": function zhCN(str) {
        var provincesAndCities = [
            "11",
            "12",
            "13",
            "14",
            "15",
            "21",
            "22",
            "23",
            "31",
            "32",
            "33",
            "34",
            "35",
            "36",
            "37",
            "41",
            "42",
            "43",
            "44",
            "45",
            "46",
            "50",
            "51",
            "52",
            "53",
            "54",
            "61",
            "62",
            "63",
            "64",
            "65",
            "71",
            "81",
            "82",
            "91" // 国外
        ];
        var powers = [
            "7",
            "9",
            "10",
            "5",
            "8",
            "4",
            "2",
            "1",
            "6",
            "3",
            "7",
            "9",
            "10",
            "5",
            "8",
            "4",
            "2"
        ];
        var parityBit = [
            "1",
            "0",
            "X",
            "9",
            "8",
            "7",
            "6",
            "5",
            "4",
            "3",
            "2"
        ];
        var checkAddressCode = function checkAddressCode(addressCode) {
            return provincesAndCities.includes(addressCode);
        };
        var checkBirthDayCode = function checkBirthDayCode(birDayCode) {
            var yyyy = parseInt(birDayCode.substring(0, 4), 10);
            var mm = parseInt(birDayCode.substring(4, 6), 10);
            var dd = parseInt(birDayCode.substring(6), 10);
            var xdata = new Date(yyyy, mm - 1, dd);
            if (xdata > new Date()) return false; // eslint-disable-next-line max-len
            else if (xdata.getFullYear() === yyyy && xdata.getMonth() === mm - 1 && xdata.getDate() === dd) return true;
            return false;
        };
        var getParityBit = function getParityBit(idCardNo) {
            var id17 = idCardNo.substring(0, 17);
            var power = 0;
            for(var i = 0; i < 17; i++)power += parseInt(id17.charAt(i), 10) * parseInt(powers[i], 10);
            var mod = power % 11;
            return parityBit[mod];
        };
        var checkParityBit = function checkParityBit(idCardNo) {
            return getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();
        };
        var check15IdCardNo = function check15IdCardNo(idCardNo) {
            var check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
            if (!check) return false;
            var addressCode = idCardNo.substring(0, 2);
            check = checkAddressCode(addressCode);
            if (!check) return false;
            var birDayCode = "19".concat(idCardNo.substring(6, 12));
            check = checkBirthDayCode(birDayCode);
            if (!check) return false;
            return true;
        };
        var check18IdCardNo = function check18IdCardNo(idCardNo) {
            var check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
            if (!check) return false;
            var addressCode = idCardNo.substring(0, 2);
            check = checkAddressCode(addressCode);
            if (!check) return false;
            var birDayCode = idCardNo.substring(6, 14);
            check = checkBirthDayCode(birDayCode);
            if (!check) return false;
            return checkParityBit(idCardNo);
        };
        var checkIdCardNo = function checkIdCardNo(idCardNo) {
            var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
            if (!check) return false;
            if (idCardNo.length === 15) return check15IdCardNo(idCardNo);
            return check18IdCardNo(idCardNo);
        };
        return checkIdCardNo(str);
    },
    "zh-HK": function zhHK(str) {
        // sanitize user input
        str = str.trim(); // HKID number starts with 1 or 2 letters, followed by 6 digits,
        // then a checksum contained in square / round brackets or nothing
        var regexHKID = /^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/;
        var regexIsDigit = /^[0-9]$/; // convert the user input to all uppercase and apply regex
        str = str.toUpperCase();
        if (!regexHKID.test(str)) return false;
        str = str.replace(/\[|\]|\(|\)/g, "");
        if (str.length === 8) str = "3".concat(str);
        var checkSumVal = 0;
        for(var i = 0; i <= 7; i++){
            var convertedChar = void 0;
            if (!regexIsDigit.test(str[i])) convertedChar = (str[i].charCodeAt(0) - 55) % 11;
            else convertedChar = str[i];
            checkSumVal += convertedChar * (9 - i);
        }
        checkSumVal %= 11;
        var checkSumConverted;
        if (checkSumVal === 0) checkSumConverted = "0";
        else if (checkSumVal === 1) checkSumConverted = "A";
        else checkSumConverted = String(11 - checkSumVal);
        if (checkSumConverted === str[str.length - 1]) return true;
        return false;
    },
    "zh-TW": function zhTW(str) {
        var ALPHABET_CODES = {
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            G: 16,
            H: 17,
            I: 34,
            J: 18,
            K: 19,
            L: 20,
            M: 21,
            N: 22,
            O: 35,
            P: 23,
            Q: 24,
            R: 25,
            S: 26,
            T: 27,
            U: 28,
            V: 29,
            W: 32,
            X: 30,
            Y: 31,
            Z: 33
        };
        var sanitized = str.trim().toUpperCase();
        if (!/^[A-Z][0-9]{9}$/.test(sanitized)) return false;
        return Array.from(sanitized).reduce(function(sum, number, index) {
            if (index === 0) {
                var code = ALPHABET_CODES[number];
                return code % 10 * 9 + Math.floor(code / 10);
            }
            if (index === 9) return (10 - sum % 10 - Number(number)) % 10 === 0;
            return sum + Number(number) * (9 - index);
        }, 0);
    }
};
function isIdentityCard(str, locale) {
    (0, _assertString.default)(str);
    if (locale in validators) return validators[locale](str);
    else if (locale === "any") {
        for(var key in validators)// https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
        // istanbul ignore else
        if (validators.hasOwnProperty(key)) {
            var validator = validators[key];
            if (validator(str)) return true;
        }
        return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"82ebad56c1e929ba":"dGQqH","a1cec04ff91509b3":"6nSfG"}],"fPkd3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isEAN;
var _assertString = _interopRequireDefault(require("5e5bfe9eefacdfc1"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * The most commonly used EAN standard is
 * the thirteen-digit EAN-13, while the
 * less commonly used 8-digit EAN-8 barcode was
 * introduced for use on small packages.
 * Also EAN/UCC-14 is used for Grouping of individual
 * trade items above unit level(Intermediate, Carton or Pallet).
 * For more info about EAN-14 checkout: https://www.gtin.info/itf-14-barcodes/
 * EAN consists of:
 * GS1 prefix, manufacturer code, product code and check digit
 * Reference: https://en.wikipedia.org/wiki/International_Article_Number
 * Reference: https://www.gtin.info/
 */ /**
 * Define EAN Lenghts; 8 for EAN-8; 13 for EAN-13; 14 for EAN-14
 * and Regular Expression for valid EANs (EAN-8, EAN-13, EAN-14),
 * with exact numberic matching of 8 or 13 or 14 digits [0-9]
 */ var LENGTH_EAN_8 = 8;
var LENGTH_EAN_14 = 14;
var validEanRegex = /^(\d{8}|\d{13}|\d{14})$/;
/**
 * Get position weight given:
 * EAN length and digit index/position
 *
 * @param {number} length
 * @param {number} index
 * @return {number}
 */ function getPositionWeightThroughLengthAndIndex(length, index) {
    if (length === LENGTH_EAN_8 || length === LENGTH_EAN_14) return index % 2 === 0 ? 3 : 1;
    return index % 2 === 0 ? 1 : 3;
}
/**
 * Calculate EAN Check Digit
 * Reference: https://en.wikipedia.org/wiki/International_Article_Number#Calculation_of_checksum_digit
 *
 * @param {string} ean
 * @return {number}
 */ function calculateCheckDigit(ean) {
    var checksum = ean.slice(0, -1).split("").map(function(char, index) {
        return Number(char) * getPositionWeightThroughLengthAndIndex(ean.length, index);
    }).reduce(function(acc, partialSum) {
        return acc + partialSum;
    }, 0);
    var remainder = 10 - checksum % 10;
    return remainder < 10 ? remainder : 0;
}
/**
 * Check if string is valid EAN:
 * Matches EAN-8/EAN-13/EAN-14 regex
 * Has valid check digit.
 *
 * @param {string} str
 * @return {boolean}
 */ function isEAN(str) {
    (0, _assertString.default)(str);
    var actualCheckDigit = Number(str.slice(-1));
    return validEanRegex.test(str) && actualCheckDigit === calculateCheckDigit(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"5e5bfe9eefacdfc1":"dGQqH"}],"6OrLA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISIN;
var _assertString = _interopRequireDefault(require("f7031d3698358d1"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/; // this link details how the check digit is calculated:
// https://www.isin.org/isin-format/. it is a little bit
// odd in that it works with digits, not numbers. in order
// to make only one pass through the ISIN characters, the
// each alpha character is handled as 2 characters within
// the loop.
function isISIN(str) {
    (0, _assertString.default)(str);
    if (!isin.test(str)) return false;
    var double = true;
    var sum = 0; // convert values
    for(var i = str.length - 2; i >= 0; i--)if (str[i] >= "A" && str[i] <= "Z") {
        var value = str[i].charCodeAt(0) - 55;
        var lo = value % 10;
        var hi = Math.trunc(value / 10); // letters have two digits, so handle the low order
        // and high order digits separately.
        for(var _i = 0, _arr = [
            lo,
            hi
        ]; _i < _arr.length; _i++){
            var digit = _arr[_i];
            if (double) {
                if (digit >= 5) sum += 1 + (digit - 5) * 2;
                else sum += digit * 2;
            } else sum += digit;
            double = !double;
        }
    } else {
        var _digit = str[i].charCodeAt(0) - "0".charCodeAt(0);
        if (double) {
            if (_digit >= 5) sum += 1 + (_digit - 5) * 2;
            else sum += _digit * 2;
        } else sum += _digit;
        double = !double;
    }
    var check = Math.trunc((sum + 9) / 10) * 10 - sum;
    return +str[str.length - 1] === check;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"f7031d3698358d1":"dGQqH"}],"jg1zD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISBN;
var _assertString = _interopRequireDefault(require("1bb174860ea3a502"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var possibleIsbn10 = /^(?:[0-9]{9}X|[0-9]{10})$/;
var possibleIsbn13 = /^(?:[0-9]{13})$/;
var factor = [
    1,
    3
];
function isISBN(isbn, options) {
    (0, _assertString.default)(isbn); // For backwards compatibility:
    // isISBN(str [, version]), i.e. `options` could be used as argument for the legacy `version`
    var version = String((options === null || options === void 0 ? void 0 : options.version) || options);
    if (!(options !== null && options !== void 0 && options.version || options)) return isISBN(isbn, {
        version: 10
    }) || isISBN(isbn, {
        version: 13
    });
    var sanitizedIsbn = isbn.replace(/[\s-]+/g, "");
    var checksum = 0;
    if (version === "10") {
        if (!possibleIsbn10.test(sanitizedIsbn)) return false;
        for(var i = 0; i < version - 1; i++)checksum += (i + 1) * sanitizedIsbn.charAt(i);
        if (sanitizedIsbn.charAt(9) === "X") checksum += 100;
        else checksum += 10 * sanitizedIsbn.charAt(9);
        if (checksum % 11 === 0) return true;
    } else if (version === "13") {
        if (!possibleIsbn13.test(sanitizedIsbn)) return false;
        for(var _i = 0; _i < 12; _i++)checksum += factor[_i % 2] * sanitizedIsbn.charAt(_i);
        if (sanitizedIsbn.charAt(12) - (10 - checksum % 10) % 10 === 0) return true;
    }
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"1bb174860ea3a502":"dGQqH"}],"9xB1S":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISSN;
var _assertString = _interopRequireDefault(require("fef463073848d898"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var issn = "^\\d{4}-?\\d{3}[\\dX]$";
function isISSN(str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _assertString.default)(str);
    var testIssn = issn;
    testIssn = options.require_hyphen ? testIssn.replace("?", "") : testIssn;
    testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, "i");
    if (!testIssn.test(str)) return false;
    var digits = str.replace("-", "").toUpperCase();
    var checksum = 0;
    for(var i = 0; i < digits.length; i++){
        var digit = digits[i];
        checksum += (digit === "X" ? 10 : +digit) * (8 - i);
    }
    return checksum % 11 === 0;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"fef463073848d898":"dGQqH"}],"l0cqb":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isTaxID;
var _assertString = _interopRequireDefault(require("79f64cb44c2530a"));
var algorithms = _interopRequireWildcard(require("c14e0a9edffe0e65"));
var _isDate = _interopRequireDefault(require("5ed6659e234b0708"));
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/**
 * TIN Validation
 * Validates Tax Identification Numbers (TINs) from the US, EU member states and the United Kingdom.
 *
 * EU-UK:
 * National TIN validity is calculated using public algorithms as made available by DG TAXUD.
 *
 * See `https://ec.europa.eu/taxation_customs/tin/specs/FS-TIN%20Algorithms-Public.docx` for more information.
 *
 * US:
 * An Employer Identification Number (EIN), also known as a Federal Tax Identification Number,
 *  is used to identify a business entity.
 *
 * NOTES:
 *  - Prefix 47 is being reserved for future use
 *  - Prefixes 26, 27, 45, 46 and 47 were previously assigned by the Philadelphia campus.
 *
 * See `http://www.irs.gov/Businesses/Small-Businesses-&-Self-Employed/How-EINs-are-Assigned-and-Valid-EIN-Prefixes`
 * for more information.
 */ // Locale functions
/*
 * bg-BG validation function
 * (Edinen graždanski nomer (EGN/ЕГН), persons only)
 * Checks if birth date (first six digits) is valid and calculates check (last) digit
 */ function bgBgCheck(tin) {
    // Extract full year, normalize month and check birth date validity
    var century_year = tin.slice(0, 2);
    var month = parseInt(tin.slice(2, 4), 10);
    if (month > 40) {
        month -= 40;
        century_year = "20".concat(century_year);
    } else if (month > 20) {
        month -= 20;
        century_year = "18".concat(century_year);
    } else century_year = "19".concat(century_year);
    if (month < 10) month = "0".concat(month);
    var date = "".concat(century_year, "/").concat(month, "/").concat(tin.slice(4, 6));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
     // split digits into an array for further processing
    var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
    }); // Calculate checksum by multiplying digits with fixed values
    var multip_lookup = [
        2,
        4,
        8,
        5,
        10,
        9,
        7,
        3,
        6
    ];
    var checksum = 0;
    for(var i = 0; i < multip_lookup.length; i++)checksum += digits[i] * multip_lookup[i];
    checksum = checksum % 11 === 10 ? 0 : checksum % 11;
    return checksum === digits[9];
}
/**
 * Check if an input is a valid Canadian SIN (Social Insurance Number)
 *
 * The Social Insurance Number (SIN) is a 9 digit number that
 * you need to work in Canada or to have access to government programs and benefits.
 *
 * https://en.wikipedia.org/wiki/Social_Insurance_Number
 * https://www.canada.ca/en/employment-social-development/services/sin.html
 * https://www.codercrunch.com/challenge/819302488/sin-validator
 *
 * @param {string} input
 * @return {boolean}
 */ function isCanadianSIN(input) {
    var digitsArray = input.split("");
    var even = digitsArray.filter(function(_, idx) {
        return idx % 2;
    }).map(function(i) {
        return Number(i) * 2;
    }).join("").split("");
    var total = digitsArray.filter(function(_, idx) {
        return !(idx % 2);
    }).concat(even).map(function(i) {
        return Number(i);
    }).reduce(function(acc, cur) {
        return acc + cur;
    });
    return total % 10 === 0;
}
/*
 * cs-CZ validation function
 * (Rodné číslo (RČ), persons only)
 * Checks if birth date (first six digits) is valid and divisibility by 11
 * Material not in DG TAXUD document sourced from:
 * -`https://lorenc.info/3MA381/overeni-spravnosti-rodneho-cisla.htm`
 * -`https://www.mvcr.cz/clanek/rady-a-sluzby-dokumenty-rodne-cislo.aspx`
 */ function csCzCheck(tin) {
    tin = tin.replace(/\W/, ""); // Extract full year from TIN length
    var full_year = parseInt(tin.slice(0, 2), 10);
    if (tin.length === 10) {
        if (full_year < 54) full_year = "20".concat(full_year);
        else full_year = "19".concat(full_year);
    } else {
        if (tin.slice(6) === "000") return false;
         // Three-zero serial not assigned before 1954
        if (full_year < 54) full_year = "19".concat(full_year);
        else return false; // No 18XX years seen in any of the resources
    } // Add missing zero if needed
    if (full_year.length === 3) full_year = [
        full_year.slice(0, 2),
        "0",
        full_year.slice(2)
    ].join("");
     // Extract month from TIN and normalize
    var month = parseInt(tin.slice(2, 4), 10);
    if (month > 50) month -= 50;
    if (month > 20) {
        // Month-plus-twenty was only introduced in 2004
        if (parseInt(full_year, 10) < 2004) return false;
        month -= 20;
    }
    if (month < 10) month = "0".concat(month);
     // Check date validity
    var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
     // Verify divisibility by 11
    if (tin.length === 10) {
        if (parseInt(tin, 10) % 11 !== 0) {
            // Some numbers up to and including 1985 are still valid if
            // check (last) digit equals 0 and modulo of first 9 digits equals 10
            var checkdigit = parseInt(tin.slice(0, 9), 10) % 11;
            if (parseInt(full_year, 10) < 1986 && checkdigit === 10) {
                if (parseInt(tin.slice(9), 10) !== 0) return false;
            } else return false;
        }
    }
    return true;
}
/*
 * de-AT validation function
 * (Abgabenkontonummer, persons/entities)
 * Verify TIN validity by calling luhnCheck()
 */ function deAtCheck(tin) {
    return algorithms.luhnCheck(tin);
}
/*
 * de-DE validation function
 * (Steueridentifikationsnummer (Steuer-IdNr.), persons only)
 * Tests for single duplicate/triplicate value, then calculates ISO 7064 check (last) digit
 * Partial implementation of spec (same result with both algorithms always)
 */ function deDeCheck(tin) {
    // Split digits into an array for further processing
    var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
    }); // Fill array with strings of number positions
    var occurences = [];
    for(var i = 0; i < digits.length - 1; i++){
        occurences.push("");
        for(var j = 0; j < digits.length - 1; j++)if (digits[i] === digits[j]) occurences[i] += j;
    } // Remove digits with one occurence and test for only one duplicate/triplicate
    occurences = occurences.filter(function(a) {
        return a.length > 1;
    });
    if (occurences.length !== 2 && occurences.length !== 3) return false;
     // In case of triplicate value only two digits are allowed next to each other
    if (occurences[0].length === 3) {
        var trip_locations = occurences[0].split("").map(function(a) {
            return parseInt(a, 10);
        });
        var recurrent = 0; // Amount of neighbour occurences
        for(var _i = 0; _i < trip_locations.length - 1; _i++)if (trip_locations[_i] + 1 === trip_locations[_i + 1]) recurrent += 1;
        if (recurrent === 2) return false;
    }
    return algorithms.iso7064Check(tin);
}
/*
 * dk-DK validation function
 * (CPR-nummer (personnummer), persons only)
 * Checks if birth date (first six digits) is valid and assigned to century (seventh) digit,
 * and calculates check (last) digit
 */ function dkDkCheck(tin) {
    tin = tin.replace(/\W/, ""); // Extract year, check if valid for given century digit and add century
    var year = parseInt(tin.slice(4, 6), 10);
    var century_digit = tin.slice(6, 7);
    switch(century_digit){
        case "0":
        case "1":
        case "2":
        case "3":
            year = "19".concat(year);
            break;
        case "4":
        case "9":
            if (year < 37) year = "20".concat(year);
            else year = "19".concat(year);
            break;
        default:
            if (year < 37) year = "20".concat(year);
            else if (year > 58) year = "18".concat(year);
            else return false;
            break;
    } // Add missing zero if needed
    if (year.length === 3) year = [
        year.slice(0, 2),
        "0",
        year.slice(2)
    ].join("");
     // Check date validity
    var date = "".concat(year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
     // Split digits into an array for further processing
    var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
    });
    var checksum = 0;
    var weight = 4; // Multiply by weight and add to checksum
    for(var i = 0; i < 9; i++){
        checksum += digits[i] * weight;
        weight -= 1;
        if (weight === 1) weight = 7;
    }
    checksum %= 11;
    if (checksum === 1) return false;
    return checksum === 0 ? digits[9] === 0 : digits[9] === 11 - checksum;
}
/*
 * el-CY validation function
 * (Arithmos Forologikou Mitroou (AFM/ΑΦΜ), persons only)
 * Verify TIN validity by calculating ASCII value of check (last) character
 */ function elCyCheck(tin) {
    // split digits into an array for further processing
    var digits = tin.slice(0, 8).split("").map(function(a) {
        return parseInt(a, 10);
    });
    var checksum = 0; // add digits in even places
    for(var i = 1; i < digits.length; i += 2)checksum += digits[i];
     // add digits in odd places
    for(var _i2 = 0; _i2 < digits.length; _i2 += 2)if (digits[_i2] < 2) checksum += 1 - digits[_i2];
    else {
        checksum += 2 * (digits[_i2] - 2) + 5;
        if (digits[_i2] > 4) checksum += 2;
    }
    return String.fromCharCode(checksum % 26 + 65) === tin.charAt(8);
}
/*
 * el-GR validation function
 * (Arithmos Forologikou Mitroou (AFM/ΑΦΜ), persons/entities)
 * Verify TIN validity by calculating check (last) digit
 * Algorithm not in DG TAXUD document- sourced from:
 * - `http://epixeirisi.gr/%CE%9A%CE%A1%CE%99%CE%A3%CE%99%CE%9C%CE%91-%CE%98%CE%95%CE%9C%CE%91%CE%A4%CE%91-%CE%A6%CE%9F%CE%A1%CE%9F%CE%9B%CE%9F%CE%93%CE%99%CE%91%CE%A3-%CE%9A%CE%91%CE%99-%CE%9B%CE%9F%CE%93%CE%99%CE%A3%CE%A4%CE%99%CE%9A%CE%97%CE%A3/23791/%CE%91%CF%81%CE%B9%CE%B8%CE%BC%CF%8C%CF%82-%CE%A6%CE%BF%CF%81%CE%BF%CE%BB%CE%BF%CE%B3%CE%B9%CE%BA%CE%BF%CF%8D-%CE%9C%CE%B7%CF%84%CF%81%CF%8E%CE%BF%CF%85`
 */ function elGrCheck(tin) {
    // split digits into an array for further processing
    var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
    });
    var checksum = 0;
    for(var i = 0; i < 8; i++)checksum += digits[i] * Math.pow(2, 8 - i);
    return checksum % 11 % 10 === digits[8];
}
/*
 * en-GB validation function (should go here if needed)
 * (National Insurance Number (NINO) or Unique Taxpayer Reference (UTR),
 * persons/entities respectively)
 */ /*
 * en-IE validation function
 * (Personal Public Service Number (PPS No), persons only)
 * Verify TIN validity by calculating check (second to last) character
 */ function enIeCheck(tin) {
    var checksum = algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a) {
        return parseInt(a, 10);
    }), 8);
    if (tin.length === 9 && tin[8] !== "W") checksum += (tin[8].charCodeAt(0) - 64) * 9;
    checksum %= 23;
    if (checksum === 0) return tin[7].toUpperCase() === "W";
    return tin[7].toUpperCase() === String.fromCharCode(64 + checksum);
} // Valid US IRS campus prefixes
var enUsCampusPrefix = {
    andover: [
        "10",
        "12"
    ],
    atlanta: [
        "60",
        "67"
    ],
    austin: [
        "50",
        "53"
    ],
    brookhaven: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "11",
        "13",
        "14",
        "16",
        "21",
        "22",
        "23",
        "25",
        "34",
        "51",
        "52",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "65"
    ],
    cincinnati: [
        "30",
        "32",
        "35",
        "36",
        "37",
        "38",
        "61"
    ],
    fresno: [
        "15",
        "24"
    ],
    internet: [
        "20",
        "26",
        "27",
        "45",
        "46",
        "47"
    ],
    kansas: [
        "40",
        "44"
    ],
    memphis: [
        "94",
        "95"
    ],
    ogden: [
        "80",
        "90"
    ],
    philadelphia: [
        "33",
        "39",
        "41",
        "42",
        "43",
        "46",
        "48",
        "62",
        "63",
        "64",
        "66",
        "68",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
        "91",
        "92",
        "93",
        "98",
        "99"
    ],
    sba: [
        "31"
    ]
}; // Return an array of all US IRS campus prefixes
function enUsGetPrefixes() {
    var prefixes = [];
    for(var location in enUsCampusPrefix)// https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
    // istanbul ignore else
    if (enUsCampusPrefix.hasOwnProperty(location)) prefixes.push.apply(prefixes, _toConsumableArray(enUsCampusPrefix[location]));
    return prefixes;
}
/*
 * en-US validation function
 * Verify that the TIN starts with a valid IRS campus prefix
 */ function enUsCheck(tin) {
    return enUsGetPrefixes().indexOf(tin.slice(0, 2)) !== -1;
}
/*
 * es-ES validation function
 * (Documento Nacional de Identidad (DNI)
 * or Número de Identificación de Extranjero (NIE), persons only)
 * Verify TIN validity by calculating check (last) character
 */ function esEsCheck(tin) {
    // Split characters into an array for further processing
    var chars = tin.toUpperCase().split(""); // Replace initial letter if needed
    if (isNaN(parseInt(chars[0], 10)) && chars.length > 1) {
        var lead_replace = 0;
        switch(chars[0]){
            case "Y":
                lead_replace = 1;
                break;
            case "Z":
                lead_replace = 2;
                break;
            default:
        }
        chars.splice(0, 1, lead_replace); // Fill with zeros if smaller than proper
    } else while(chars.length < 9)chars.unshift(0);
     // Calculate checksum and check according to lookup
    var lookup = [
        "T",
        "R",
        "W",
        "A",
        "G",
        "M",
        "Y",
        "F",
        "P",
        "D",
        "X",
        "B",
        "N",
        "J",
        "Z",
        "S",
        "Q",
        "V",
        "H",
        "L",
        "C",
        "K",
        "E"
    ];
    chars = chars.join("");
    var checksum = parseInt(chars.slice(0, 8), 10) % 23;
    return chars[8] === lookup[checksum];
}
/*
 * et-EE validation function
 * (Isikukood (IK), persons only)
 * Checks if birth date (century digit and six following) is valid and calculates check (last) digit
 * Material not in DG TAXUD document sourced from:
 * - `https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/Estonia-TIN.pdf`
 */ function etEeCheck(tin) {
    // Extract year and add century
    var full_year = tin.slice(1, 3);
    var century_digit = tin.slice(0, 1);
    switch(century_digit){
        case "1":
        case "2":
            full_year = "18".concat(full_year);
            break;
        case "3":
        case "4":
            full_year = "19".concat(full_year);
            break;
        default:
            full_year = "20".concat(full_year);
            break;
    } // Check date validity
    var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
     // Split digits into an array for further processing
    var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
    });
    var checksum = 0;
    var weight = 1; // Multiply by weight and add to checksum
    for(var i = 0; i < 10; i++){
        checksum += digits[i] * weight;
        weight += 1;
        if (weight === 10) weight = 1;
    } // Do again if modulo 11 of checksum is 10
    if (checksum % 11 === 10) {
        checksum = 0;
        weight = 3;
        for(var _i3 = 0; _i3 < 10; _i3++){
            checksum += digits[_i3] * weight;
            weight += 1;
            if (weight === 10) weight = 1;
        }
        if (checksum % 11 === 10) return digits[10] === 0;
    }
    return checksum % 11 === digits[10];
}
/*
 * fi-FI validation function
 * (Henkilötunnus (HETU), persons only)
 * Checks if birth date (first six digits plus century symbol) is valid
 * and calculates check (last) digit
 */ function fiFiCheck(tin) {
    // Extract year and add century
    var full_year = tin.slice(4, 6);
    var century_symbol = tin.slice(6, 7);
    switch(century_symbol){
        case "+":
            full_year = "18".concat(full_year);
            break;
        case "-":
            full_year = "19".concat(full_year);
            break;
        default:
            full_year = "20".concat(full_year);
            break;
    } // Check date validity
    var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(tin.slice(0, 2));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
     // Calculate check character
    var checksum = parseInt(tin.slice(0, 6) + tin.slice(7, 10), 10) % 31;
    if (checksum < 10) return checksum === parseInt(tin.slice(10), 10);
    checksum -= 10;
    var letters_lookup = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y"
    ];
    return letters_lookup[checksum] === tin.slice(10);
}
/*
 * fr/nl-BE validation function
 * (Numéro national (N.N.), persons only)
 * Checks if birth date (first six digits) is valid and calculates check (last two) digits
 */ function frBeCheck(tin) {
    // Zero month/day value is acceptable
    if (tin.slice(2, 4) !== "00" || tin.slice(4, 6) !== "00") {
        // Extract date from first six digits of TIN
        var date = "".concat(tin.slice(0, 2), "/").concat(tin.slice(2, 4), "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YY/MM/DD")) return false;
    }
    var checksum = 97 - parseInt(tin.slice(0, 9), 10) % 97;
    var checkdigits = parseInt(tin.slice(9, 11), 10);
    if (checksum !== checkdigits) {
        checksum = 97 - parseInt("2".concat(tin.slice(0, 9)), 10) % 97;
        if (checksum !== checkdigits) return false;
    }
    return true;
}
/*
 * fr-FR validation function
 * (Numéro fiscal de référence (numéro SPI), persons only)
 * Verify TIN validity by calculating check (last three) digits
 */ function frFrCheck(tin) {
    tin = tin.replace(/\s/g, "");
    var checksum = parseInt(tin.slice(0, 10), 10) % 511;
    var checkdigits = parseInt(tin.slice(10, 13), 10);
    return checksum === checkdigits;
}
/*
 * fr/lb-LU validation function
 * (numéro d’identification personnelle, persons only)
 * Verify birth date validity and run Luhn and Verhoeff checks
 */ function frLuCheck(tin) {
    // Extract date and check validity
    var date = "".concat(tin.slice(0, 4), "/").concat(tin.slice(4, 6), "/").concat(tin.slice(6, 8));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
     // Run Luhn check
    if (!algorithms.luhnCheck(tin.slice(0, 12))) return false;
     // Remove Luhn check digit and run Verhoeff check
    return algorithms.verhoeffCheck("".concat(tin.slice(0, 11)).concat(tin[12]));
}
/*
 * hr-HR validation function
 * (Osobni identifikacijski broj (OIB), persons/entities)
 * Verify TIN validity by calling iso7064Check(digits)
 */ function hrHrCheck(tin) {
    return algorithms.iso7064Check(tin);
}
/*
 * hu-HU validation function
 * (Adóazonosító jel, persons only)
 * Verify TIN validity by calculating check (last) digit
 */ function huHuCheck(tin) {
    // split digits into an array for further processing
    var digits = tin.split("").map(function(a) {
        return parseInt(a, 10);
    });
    var checksum = 8;
    for(var i = 1; i < 9; i++)checksum += digits[i] * (i + 1);
    return checksum % 11 === digits[9];
}
/*
 * lt-LT validation function (should go here if needed)
 * (Asmens kodas, persons/entities respectively)
 * Current validation check is alias of etEeCheck- same format applies
 */ /*
 * it-IT first/last name validity check
 * Accepts it-IT TIN-encoded names as a three-element character array and checks their validity
 * Due to lack of clarity between resources ("Are only Italian consonants used?
 * What happens if a person has X in their name?" etc.) only two test conditions
 * have been implemented:
 * Vowels may only be followed by other vowels or an X character
 * and X characters after vowels may only be followed by other X characters.
 */ function itItNameCheck(name) {
    // true at the first occurence of a vowel
    var vowelflag = false; // true at the first occurence of an X AFTER vowel
    // (to properly handle last names with X as consonant)
    var xflag = false;
    for(var i = 0; i < 3; i++){
        if (!vowelflag && /[AEIOU]/.test(name[i])) vowelflag = true;
        else if (!xflag && vowelflag && name[i] === "X") xflag = true;
        else if (i > 0) {
            if (vowelflag && !xflag) {
                if (!/[AEIOU]/.test(name[i])) return false;
            }
            if (xflag) {
                if (!/X/.test(name[i])) return false;
            }
        }
    }
    return true;
}
/*
 * it-IT validation function
 * (Codice fiscale (TIN-IT), persons only)
 * Verify name, birth date and codice catastale validity
 * and calculate check character.
 * Material not in DG-TAXUD document sourced from:
 * `https://en.wikipedia.org/wiki/Italian_fiscal_code`
 */ function itItCheck(tin) {
    // Capitalize and split characters into an array for further processing
    var chars = tin.toUpperCase().split(""); // Check first and last name validity calling itItNameCheck()
    if (!itItNameCheck(chars.slice(0, 3))) return false;
    if (!itItNameCheck(chars.slice(3, 6))) return false;
     // Convert letters in number spaces back to numbers if any
    var number_locations = [
        6,
        7,
        9,
        10,
        12,
        13,
        14
    ];
    var number_replace = {
        L: "0",
        M: "1",
        N: "2",
        P: "3",
        Q: "4",
        R: "5",
        S: "6",
        T: "7",
        U: "8",
        V: "9"
    };
    for(var _i4 = 0, _number_locations = number_locations; _i4 < _number_locations.length; _i4++){
        var i = _number_locations[_i4];
        if (chars[i] in number_replace) chars.splice(i, 1, number_replace[chars[i]]);
    } // Extract month and day, and check date validity
    var month_replace = {
        A: "01",
        B: "02",
        C: "03",
        D: "04",
        E: "05",
        H: "06",
        L: "07",
        M: "08",
        P: "09",
        R: "10",
        S: "11",
        T: "12"
    };
    var month = month_replace[chars[8]];
    var day = parseInt(chars[9] + chars[10], 10);
    if (day > 40) day -= 40;
    if (day < 10) day = "0".concat(day);
    var date = "".concat(chars[6]).concat(chars[7], "/").concat(month, "/").concat(day);
    if (!(0, _isDate.default)(date, "YY/MM/DD")) return false;
     // Calculate check character by adding up even and odd characters as numbers
    var checksum = 0;
    for(var _i5 = 1; _i5 < chars.length - 1; _i5 += 2){
        var char_to_int = parseInt(chars[_i5], 10);
        if (isNaN(char_to_int)) char_to_int = chars[_i5].charCodeAt(0) - 65;
        checksum += char_to_int;
    }
    var odd_convert = {
        // Maps of characters at odd places
        A: 1,
        B: 0,
        C: 5,
        D: 7,
        E: 9,
        F: 13,
        G: 15,
        H: 17,
        I: 19,
        J: 21,
        K: 2,
        L: 4,
        M: 18,
        N: 20,
        O: 11,
        P: 3,
        Q: 6,
        R: 8,
        S: 12,
        T: 14,
        U: 16,
        V: 10,
        W: 22,
        X: 25,
        Y: 24,
        Z: 23,
        0: 1,
        1: 0
    };
    for(var _i6 = 0; _i6 < chars.length - 1; _i6 += 2){
        var _char_to_int = 0;
        if (chars[_i6] in odd_convert) _char_to_int = odd_convert[chars[_i6]];
        else {
            var multiplier = parseInt(chars[_i6], 10);
            _char_to_int = 2 * multiplier + 1;
            if (multiplier > 4) _char_to_int += 2;
        }
        checksum += _char_to_int;
    }
    if (String.fromCharCode(65 + checksum % 26) !== chars[15]) return false;
    return true;
}
/*
 * lv-LV validation function
 * (Personas kods (PK), persons only)
 * Check validity of birth date and calculate check (last) digit
 * Support only for old format numbers (not starting with '32', issued before 2017/07/01)
 * Material not in DG TAXUD document sourced from:
 * `https://boot.ritakafija.lv/forums/index.php?/topic/88314-personas-koda-algoritms-%C4%8Deksumma/`
 */ function lvLvCheck(tin) {
    tin = tin.replace(/\W/, ""); // Extract date from TIN
    var day = tin.slice(0, 2);
    if (day !== "32") {
        // No date/checksum check if new format
        var month = tin.slice(2, 4);
        if (month !== "00") {
            // No date check if unknown month
            var full_year = tin.slice(4, 6);
            switch(tin[6]){
                case "0":
                    full_year = "18".concat(full_year);
                    break;
                case "1":
                    full_year = "19".concat(full_year);
                    break;
                default:
                    full_year = "20".concat(full_year);
                    break;
            } // Check date validity
            var date = "".concat(full_year, "/").concat(tin.slice(2, 4), "/").concat(day);
            if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
        } // Calculate check digit
        var checksum = 1101;
        var multip_lookup = [
            1,
            6,
            3,
            7,
            9,
            10,
            5,
            8,
            4,
            2
        ];
        for(var i = 0; i < tin.length - 1; i++)checksum -= parseInt(tin[i], 10) * multip_lookup[i];
        return parseInt(tin[10], 10) === checksum % 11;
    }
    return true;
}
/*
 * mt-MT validation function
 * (Identity Card Number or Unique Taxpayer Reference, persons/entities)
 * Verify Identity Card Number structure (no other tests found)
 */ function mtMtCheck(tin) {
    if (tin.length !== 9) {
        // No tests for UTR
        var chars = tin.toUpperCase().split(""); // Fill with zeros if smaller than proper
        while(chars.length < 8)chars.unshift(0);
         // Validate format according to last character
        switch(tin[7]){
            case "A":
            case "P":
                if (parseInt(chars[6], 10) === 0) return false;
                break;
            default:
                var first_part = parseInt(chars.join("").slice(0, 5), 10);
                if (first_part > 32000) return false;
                var second_part = parseInt(chars.join("").slice(5, 7), 10);
                if (first_part === second_part) return false;
        }
    }
    return true;
}
/*
 * nl-NL validation function
 * (Burgerservicenummer (BSN) or Rechtspersonen Samenwerkingsverbanden Informatie Nummer (RSIN),
 * persons/entities respectively)
 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
 */ function nlNlCheck(tin) {
    return algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
        return parseInt(a, 10);
    }), 9) % 11 === parseInt(tin[8], 10);
}
/*
 * pl-PL validation function
 * (Powszechny Elektroniczny System Ewidencji Ludności (PESEL)
 * or Numer identyfikacji podatkowej (NIP), persons/entities)
 * Verify TIN validity by validating birth date (PESEL) and calculating check (last) digit
 */ function plPlCheck(tin) {
    // NIP
    if (tin.length === 10) {
        // Calculate last digit by multiplying with lookup
        var lookup = [
            6,
            5,
            7,
            2,
            3,
            4,
            5,
            6,
            7
        ];
        var _checksum = 0;
        for(var i = 0; i < lookup.length; i++)_checksum += parseInt(tin[i], 10) * lookup[i];
        _checksum %= 11;
        if (_checksum === 10) return false;
        return _checksum === parseInt(tin[9], 10);
    } // PESEL
    // Extract full year using month
    var full_year = tin.slice(0, 2);
    var month = parseInt(tin.slice(2, 4), 10);
    if (month > 80) {
        full_year = "18".concat(full_year);
        month -= 80;
    } else if (month > 60) {
        full_year = "22".concat(full_year);
        month -= 60;
    } else if (month > 40) {
        full_year = "21".concat(full_year);
        month -= 40;
    } else if (month > 20) {
        full_year = "20".concat(full_year);
        month -= 20;
    } else full_year = "19".concat(full_year);
     // Add leading zero to month if needed
    if (month < 10) month = "0".concat(month);
     // Check date validity
    var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
    if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
     // Calculate last digit by mulitplying with odd one-digit numbers except 5
    var checksum = 0;
    var multiplier = 1;
    for(var _i7 = 0; _i7 < tin.length - 1; _i7++){
        checksum += parseInt(tin[_i7], 10) * multiplier % 10;
        multiplier += 2;
        if (multiplier > 10) multiplier = 1;
        else if (multiplier === 5) multiplier += 2;
    }
    checksum = 10 - checksum % 10;
    return checksum === parseInt(tin[10], 10);
}
/*
* pt-BR validation function
* (Cadastro de Pessoas Físicas (CPF, persons)
* Cadastro Nacional de Pessoas Jurídicas (CNPJ, entities)
* Both inputs will be validated
*/ function ptBrCheck(tin) {
    if (tin.length === 11) {
        var _sum;
        var remainder;
        _sum = 0;
        if (tin === "11111111111" || tin === "22222222222" || tin === "33333333333" || tin === "44444444444" || tin === "55555555555" || tin === "66666666666" || tin === "77777777777" || tin === "88888888888" || tin === "99999999999" || tin === "00000000000") return false;
        for(var i = 1; i <= 9; i++)_sum += parseInt(tin.substring(i - 1, i), 10) * (11 - i);
        remainder = _sum * 10 % 11;
        if (remainder === 10) remainder = 0;
        if (remainder !== parseInt(tin.substring(9, 10), 10)) return false;
        _sum = 0;
        for(var _i8 = 1; _i8 <= 10; _i8++)_sum += parseInt(tin.substring(_i8 - 1, _i8), 10) * (12 - _i8);
        remainder = _sum * 10 % 11;
        if (remainder === 10) remainder = 0;
        if (remainder !== parseInt(tin.substring(10, 11), 10)) return false;
        return true;
    }
    if (tin === "00000000000000" || tin === "11111111111111" || tin === "22222222222222" || tin === "33333333333333" || tin === "44444444444444" || tin === "55555555555555" || tin === "66666666666666" || tin === "77777777777777" || tin === "88888888888888" || tin === "99999999999999") return false;
    var length = tin.length - 2;
    var identifiers = tin.substring(0, length);
    var verificators = tin.substring(length);
    var sum = 0;
    var pos = length - 7;
    for(var _i9 = length; _i9 >= 1; _i9--){
        sum += identifiers.charAt(length - _i9) * pos;
        pos -= 1;
        if (pos < 2) pos = 9;
    }
    var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(verificators.charAt(0), 10)) return false;
    length += 1;
    identifiers = tin.substring(0, length);
    sum = 0;
    pos = length - 7;
    for(var _i10 = length; _i10 >= 1; _i10--){
        sum += identifiers.charAt(length - _i10) * pos;
        pos -= 1;
        if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    if (result !== parseInt(verificators.charAt(1), 10)) return false;
    return true;
}
/*
 * pt-PT validation function
 * (Número de identificação fiscal (NIF), persons/entities)
 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
 */ function ptPtCheck(tin) {
    var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
        return parseInt(a, 10);
    }), 9) % 11;
    if (checksum > 9) return parseInt(tin[8], 10) === 0;
    return checksum === parseInt(tin[8], 10);
}
/*
 * ro-RO validation function
 * (Cod Numeric Personal (CNP) or Cod de înregistrare fiscală (CIF),
 * persons only)
 * Verify CNP validity by calculating check (last) digit (test not found for CIF)
 * Material not in DG TAXUD document sourced from:
 * `https://en.wikipedia.org/wiki/National_identification_number#Romania`
 */ function roRoCheck(tin) {
    if (tin.slice(0, 4) !== "9000") {
        // No test found for this format
        // Extract full year using century digit if possible
        var full_year = tin.slice(1, 3);
        switch(tin[0]){
            case "1":
            case "2":
                full_year = "19".concat(full_year);
                break;
            case "3":
            case "4":
                full_year = "18".concat(full_year);
                break;
            case "5":
            case "6":
                full_year = "20".concat(full_year);
                break;
            default:
        } // Check date validity
        var date = "".concat(full_year, "/").concat(tin.slice(3, 5), "/").concat(tin.slice(5, 7));
        if (date.length === 8) {
            if (!(0, _isDate.default)(date, "YY/MM/DD")) return false;
        } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
         // Calculate check digit
        var digits = tin.split("").map(function(a) {
            return parseInt(a, 10);
        });
        var multipliers = [
            2,
            7,
            9,
            1,
            4,
            6,
            3,
            5,
            8,
            2,
            7,
            9
        ];
        var checksum = 0;
        for(var i = 0; i < multipliers.length; i++)checksum += digits[i] * multipliers[i];
        if (checksum % 11 === 10) return digits[12] === 1;
        return digits[12] === checksum % 11;
    }
    return true;
}
/*
 * sk-SK validation function
 * (Rodné číslo (RČ) or bezvýznamové identifikačné číslo (BIČ), persons only)
 * Checks validity of pre-1954 birth numbers (rodné číslo) only
 * Due to the introduction of the pseudo-random BIČ it is not possible to test
 * post-1954 birth numbers without knowing whether they are BIČ or RČ beforehand
 */ function skSkCheck(tin) {
    if (tin.length === 9) {
        tin = tin.replace(/\W/, "");
        if (tin.slice(6) === "000") return false;
         // Three-zero serial not assigned before 1954
        // Extract full year from TIN length
        var full_year = parseInt(tin.slice(0, 2), 10);
        if (full_year > 53) return false;
        if (full_year < 10) full_year = "190".concat(full_year);
        else full_year = "19".concat(full_year);
         // Extract month from TIN and normalize
        var month = parseInt(tin.slice(2, 4), 10);
        if (month > 50) month -= 50;
        if (month < 10) month = "0".concat(month);
         // Check date validity
        var date = "".concat(full_year, "/").concat(month, "/").concat(tin.slice(4, 6));
        if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
    }
    return true;
}
/*
 * sl-SI validation function
 * (Davčna številka, persons/entities)
 * Verify TIN validity by calculating check (last) digit (variant of MOD 11)
 */ function slSiCheck(tin) {
    var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 7).map(function(a) {
        return parseInt(a, 10);
    }), 8) % 11;
    if (checksum === 10) return parseInt(tin[7], 10) === 0;
    return checksum === parseInt(tin[7], 10);
}
/*
 * sv-SE validation function
 * (Personnummer or samordningsnummer, persons only)
 * Checks validity of birth date and calls luhnCheck() to validate check (last) digit
 */ function svSeCheck(tin) {
    // Make copy of TIN and normalize to two-digit year form
    var tin_copy = tin.slice(0);
    if (tin.length > 11) tin_copy = tin_copy.slice(2);
     // Extract date of birth
    var full_year = "";
    var month = tin_copy.slice(2, 4);
    var day = parseInt(tin_copy.slice(4, 6), 10);
    if (tin.length > 11) full_year = tin.slice(0, 4);
    else {
        full_year = tin.slice(0, 2);
        if (tin.length === 11 && day < 60) {
            // Extract full year from centenarian symbol
            // Should work just fine until year 10000 or so
            var current_year = new Date().getFullYear().toString();
            var current_century = parseInt(current_year.slice(0, 2), 10);
            current_year = parseInt(current_year, 10);
            if (tin[6] === "-") {
                if (parseInt("".concat(current_century).concat(full_year), 10) > current_year) full_year = "".concat(current_century - 1).concat(full_year);
                else full_year = "".concat(current_century).concat(full_year);
            } else {
                full_year = "".concat(current_century - 1).concat(full_year);
                if (current_year - parseInt(full_year, 10) < 100) return false;
            }
        }
    } // Normalize day and check date validity
    if (day > 60) day -= 60;
    if (day < 10) day = "0".concat(day);
    var date = "".concat(full_year, "/").concat(month, "/").concat(day);
    if (date.length === 8) {
        if (!(0, _isDate.default)(date, "YY/MM/DD")) return false;
    } else if (!(0, _isDate.default)(date, "YYYY/MM/DD")) return false;
    return algorithms.luhnCheck(tin.replace(/\W/, ""));
} // Locale lookup objects
/*
 * Tax id regex formats for various locales
 *
 * Where not explicitly specified in DG-TAXUD document both
 * uppercase and lowercase letters are acceptable.
 */ var taxIdFormat = {
    "bg-BG": /^\d{10}$/,
    "cs-CZ": /^\d{6}\/{0,1}\d{3,4}$/,
    "de-AT": /^\d{9}$/,
    "de-DE": /^[1-9]\d{10}$/,
    "dk-DK": /^\d{6}-{0,1}\d{4}$/,
    "el-CY": /^[09]\d{7}[A-Z]$/,
    "el-GR": /^([0-4]|[7-9])\d{8}$/,
    "en-CA": /^\d{9}$/,
    "en-GB": /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
    "en-IE": /^\d{7}[A-W][A-IW]{0,1}$/i,
    "en-US": /^\d{2}[- ]{0,1}\d{7}$/,
    "es-ES": /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
    "et-EE": /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
    "fi-FI": /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
    "fr-BE": /^\d{11}$/,
    "fr-FR": /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
    // Conforms both to official spec and provided example
    "fr-LU": /^\d{13}$/,
    "hr-HR": /^\d{11}$/,
    "hu-HU": /^8\d{9}$/,
    "it-IT": /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
    "lv-LV": /^\d{6}-{0,1}\d{5}$/,
    // Conforms both to DG TAXUD spec and original research
    "mt-MT": /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
    "nl-NL": /^\d{9}$/,
    "pl-PL": /^\d{10,11}$/,
    "pt-BR": /(?:^\d{11}$)|(?:^\d{14}$)/,
    "pt-PT": /^\d{9}$/,
    "ro-RO": /^\d{13}$/,
    "sk-SK": /^\d{6}\/{0,1}\d{3,4}$/,
    "sl-SI": /^[1-9]\d{7}$/,
    "sv-SE": /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/
}; // taxIdFormat locale aliases
taxIdFormat["lb-LU"] = taxIdFormat["fr-LU"];
taxIdFormat["lt-LT"] = taxIdFormat["et-EE"];
taxIdFormat["nl-BE"] = taxIdFormat["fr-BE"];
taxIdFormat["fr-CA"] = taxIdFormat["en-CA"]; // Algorithmic tax id check functions for various locales
var taxIdCheck = {
    "bg-BG": bgBgCheck,
    "cs-CZ": csCzCheck,
    "de-AT": deAtCheck,
    "de-DE": deDeCheck,
    "dk-DK": dkDkCheck,
    "el-CY": elCyCheck,
    "el-GR": elGrCheck,
    "en-CA": isCanadianSIN,
    "en-IE": enIeCheck,
    "en-US": enUsCheck,
    "es-ES": esEsCheck,
    "et-EE": etEeCheck,
    "fi-FI": fiFiCheck,
    "fr-BE": frBeCheck,
    "fr-FR": frFrCheck,
    "fr-LU": frLuCheck,
    "hr-HR": hrHrCheck,
    "hu-HU": huHuCheck,
    "it-IT": itItCheck,
    "lv-LV": lvLvCheck,
    "mt-MT": mtMtCheck,
    "nl-NL": nlNlCheck,
    "pl-PL": plPlCheck,
    "pt-BR": ptBrCheck,
    "pt-PT": ptPtCheck,
    "ro-RO": roRoCheck,
    "sk-SK": skSkCheck,
    "sl-SI": slSiCheck,
    "sv-SE": svSeCheck
}; // taxIdCheck locale aliases
taxIdCheck["lb-LU"] = taxIdCheck["fr-LU"];
taxIdCheck["lt-LT"] = taxIdCheck["et-EE"];
taxIdCheck["nl-BE"] = taxIdCheck["fr-BE"];
taxIdCheck["fr-CA"] = taxIdCheck["en-CA"]; // Regexes for locales where characters should be omitted before checking format
var allsymbols = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g;
var sanitizeRegexes = {
    "de-AT": allsymbols,
    "de-DE": /[\/\\]/g,
    "fr-BE": allsymbols
}; // sanitizeRegexes locale aliases
sanitizeRegexes["nl-BE"] = sanitizeRegexes["fr-BE"];
/*
 * Validator function
 * Return true if the passed string is a valid tax identification number
 * for the specified locale.
 * Throw an error exception if the locale is not supported.
 */ function isTaxID(str) {
    var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "en-US";
    (0, _assertString.default)(str); // Copy TIN to avoid replacement if sanitized
    var strcopy = str.slice(0);
    if (locale in taxIdFormat) {
        if (locale in sanitizeRegexes) strcopy = strcopy.replace(sanitizeRegexes[locale], "");
        if (!taxIdFormat[locale].test(strcopy)) return false;
        if (locale in taxIdCheck) return taxIdCheck[locale](strcopy);
         // Fallthrough; not all locales have algorithmic checks
        return true;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"79f64cb44c2530a":"dGQqH","c14e0a9edffe0e65":"1HfIt","5ed6659e234b0708":"243yZ"}],"1HfIt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iso7064Check = iso7064Check;
exports.luhnCheck = luhnCheck;
exports.reverseMultiplyAndSum = reverseMultiplyAndSum;
exports.verhoeffCheck = verhoeffCheck;
/**
 * Algorithmic validation functions
 * May be used as is or implemented in the workflow of other validators.
 */ /*
 * ISO 7064 validation function
 * Called with a string of numbers (incl. check digit)
 * to validate according to ISO 7064 (MOD 11, 10).
 */ function iso7064Check(str) {
    var checkvalue = 10;
    for(var i = 0; i < str.length - 1; i++)checkvalue = (parseInt(str[i], 10) + checkvalue) % 10 === 0 ? 9 : (parseInt(str[i], 10) + checkvalue) % 10 * 2 % 11;
    checkvalue = checkvalue === 1 ? 0 : 11 - checkvalue;
    return checkvalue === parseInt(str[10], 10);
}
/*
 * Luhn (mod 10) validation function
 * Called with a string of numbers (incl. check digit)
 * to validate according to the Luhn algorithm.
 */ function luhnCheck(str) {
    var checksum = 0;
    var second = false;
    for(var i = str.length - 1; i >= 0; i--){
        if (second) {
            var product = parseInt(str[i], 10) * 2;
            if (product > 9) // sum digits of product and add to checksum
            checksum += product.toString().split("").map(function(a) {
                return parseInt(a, 10);
            }).reduce(function(a, b) {
                return a + b;
            }, 0);
            else checksum += product;
        } else checksum += parseInt(str[i], 10);
        second = !second;
    }
    return checksum % 10 === 0;
}
/*
 * Reverse TIN multiplication and summation helper function
 * Called with an array of single-digit integers and a base multiplier
 * to calculate the sum of the digits multiplied in reverse.
 * Normally used in variations of MOD 11 algorithmic checks.
 */ function reverseMultiplyAndSum(digits, base) {
    var total = 0;
    for(var i = 0; i < digits.length; i++)total += digits[i] * (base - i);
    return total;
}
/*
 * Verhoeff validation helper function
 * Called with a string of numbers
 * to validate according to the Verhoeff algorithm.
 */ function verhoeffCheck(str) {
    var d_table = [
        [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        [
            1,
            2,
            3,
            4,
            0,
            6,
            7,
            8,
            9,
            5
        ],
        [
            2,
            3,
            4,
            0,
            1,
            7,
            8,
            9,
            5,
            6
        ],
        [
            3,
            4,
            0,
            1,
            2,
            8,
            9,
            5,
            6,
            7
        ],
        [
            4,
            0,
            1,
            2,
            3,
            9,
            5,
            6,
            7,
            8
        ],
        [
            5,
            9,
            8,
            7,
            6,
            0,
            4,
            3,
            2,
            1
        ],
        [
            6,
            5,
            9,
            8,
            7,
            1,
            0,
            4,
            3,
            2
        ],
        [
            7,
            6,
            5,
            9,
            8,
            2,
            1,
            0,
            4,
            3
        ],
        [
            8,
            7,
            6,
            5,
            9,
            3,
            2,
            1,
            0,
            4
        ],
        [
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1,
            0
        ]
    ];
    var p_table = [
        [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        [
            1,
            5,
            7,
            6,
            2,
            8,
            3,
            0,
            9,
            4
        ],
        [
            5,
            8,
            0,
            3,
            7,
            9,
            6,
            1,
            4,
            2
        ],
        [
            8,
            9,
            1,
            6,
            0,
            4,
            3,
            5,
            2,
            7
        ],
        [
            9,
            4,
            5,
            3,
            1,
            2,
            6,
            8,
            7,
            0
        ],
        [
            4,
            2,
            8,
            6,
            5,
            7,
            3,
            9,
            0,
            1
        ],
        [
            2,
            7,
            9,
            3,
            8,
            0,
            6,
            4,
            1,
            5
        ],
        [
            7,
            0,
            4,
            6,
            9,
            1,
            3,
            2,
            5,
            8
        ]
    ]; // Copy (to prevent replacement) and reverse
    var str_copy = str.split("").reverse().join("");
    var checksum = 0;
    for(var i = 0; i < str_copy.length; i++)checksum = d_table[checksum][p_table[i % 8][parseInt(str_copy[i], 10)]];
    return checksum === 0;
}

},{}],"i6GBo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMobilePhone;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("597548b071f799d0"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* eslint-disable max-len */ var phones = {
    "am-AM": /^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,
    "ar-AE": /^((\+?971)|0)?5[024568]\d{7}$/,
    "ar-BH": /^(\+?973)?(3|6)\d{7}$/,
    "ar-DZ": /^(\+?213|0)(5|6|7)\d{8}$/,
    "ar-LB": /^(\+?961)?((3|81)\d{6}|7\d{7})$/,
    "ar-EG": /^((\+?20)|0)?1[0125]\d{8}$/,
    "ar-IQ": /^(\+?964|0)?7[0-9]\d{8}$/,
    "ar-JO": /^(\+?962|0)?7[789]\d{7}$/,
    "ar-KW": /^(\+?965)([569]\d{7}|41\d{6})$/,
    "ar-LY": /^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,
    "ar-MA": /^(?:(?:\+|00)212|0)[5-7]\d{8}$/,
    "ar-OM": /^((\+|00)968)?(9[1-9])\d{6}$/,
    "ar-PS": /^(\+?970|0)5[6|9](\d{7})$/,
    "ar-SA": /^(!?(\+?966)|0)?5\d{8}$/,
    "ar-SY": /^(!?(\+?963)|0)?9\d{8}$/,
    "ar-TN": /^(\+?216)?[2459]\d{7}$/,
    "az-AZ": /^(\+994|0)(10|5[015]|7[07]|99)\d{7}$/,
    "bs-BA": /^((((\+|00)3876)|06))((([0-3]|[5-6])\d{6})|(4\d{7}))$/,
    "be-BY": /^(\+?375)?(24|25|29|33|44)\d{7}$/,
    "bg-BG": /^(\+?359|0)?8[789]\d{7}$/,
    "bn-BD": /^(\+?880|0)1[13456789][0-9]{8}$/,
    "ca-AD": /^(\+376)?[346]\d{5}$/,
    "cs-CZ": /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    "da-DK": /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
    "de-DE": /^((\+49|0)1)(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7,9}$/,
    "de-AT": /^(\+43|0)\d{1,4}\d{3,12}$/,
    "de-CH": /^(\+41|0)([1-9])\d{1,9}$/,
    "de-LU": /^(\+352)?((6\d1)\d{6})$/,
    "dv-MV": /^(\+?960)?(7[2-9]|9[1-9])\d{5}$/,
    "el-GR": /^(\+?30|0)?6(8[5-9]|9(?![26])[0-9])\d{7}$/,
    "el-CY": /^(\+?357?)?(9(9|6)\d{6})$/,
    "en-AI": /^(\+?1|0)264(?:2(35|92)|4(?:6[1-2]|76|97)|5(?:3[6-9]|8[1-4])|7(?:2(4|9)|72))\d{4}$/,
    "en-AU": /^(\+?61|0)4\d{8}$/,
    "en-AG": /^(?:\+1|1)268(?:464|7(?:1[3-9]|[28]\d|3[0246]|64|7[0-689]))\d{4}$/,
    "en-BM": /^(\+?1)?441(((3|7)\d{6}$)|(5[0-3][0-9]\d{4}$)|(59\d{5}$))/,
    "en-BS": /^(\+?1[-\s]?|0)?\(?242\)?[-\s]?\d{3}[-\s]?\d{4}$/,
    "en-GB": /^(\+?44|0)7\d{9}$/,
    "en-GG": /^(\+?44|0)1481\d{6}$/,
    "en-GH": /^(\+233|0)(20|50|24|54|27|57|26|56|23|28|55|59)\d{7}$/,
    "en-GY": /^(\+592|0)6\d{6}$/,
    "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
    "en-MO": /^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,
    "en-IE": /^(\+?353|0)8[356789]\d{7}$/,
    "en-IN": /^(\+?91|0)?[6789]\d{9}$/,
    "en-JM": /^(\+?876)?\d{7}$/,
    "en-KE": /^(\+?254|0)(7|1)\d{8}$/,
    "en-SS": /^(\+?211|0)(9[1257])\d{7}$/,
    "en-KI": /^((\+686|686)?)?( )?((6|7)(2|3|8)[0-9]{6})$/,
    "en-KN": /^(?:\+1|1)869(?:46\d|48[89]|55[6-8]|66\d|76[02-7])\d{4}$/,
    "en-LS": /^(\+?266)(22|28|57|58|59|27|52)\d{6}$/,
    "en-MT": /^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,
    "en-MU": /^(\+?230|0)?\d{8}$/,
    "en-NA": /^(\+?264|0)(6|8)\d{7}$/,
    "en-NG": /^(\+?234|0)?[789]\d{9}$/,
    "en-NZ": /^(\+?64|0)[28]\d{7,9}$/,
    "en-PG": /^(\+?675|0)?(7\d|8[18])\d{6}$/,
    "en-PK": /^((00|\+)?92|0)3[0-6]\d{8}$/,
    "en-PH": /^(09|\+639)\d{9}$/,
    "en-RW": /^(\+?250|0)?[7]\d{8}$/,
    "en-SG": /^(\+65)?[3689]\d{7}$/,
    "en-SL": /^(\+?232|0)\d{8}$/,
    "en-TZ": /^(\+?255|0)?[67]\d{8}$/,
    "en-UG": /^(\+?256|0)?[7]\d{8}$/,
    "en-US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
    "en-ZA": /^(\+?27|0)\d{9}$/,
    "en-ZM": /^(\+?26)?09[567]\d{7}$/,
    "en-ZW": /^(\+263)[0-9]{9}$/,
    "en-BW": /^(\+?267)?(7[1-8]{1})\d{6}$/,
    "es-AR": /^\+?549(11|[2368]\d)\d{8}$/,
    "es-BO": /^(\+?591)?(6|7)\d{7}$/,
    "es-CO": /^(\+?57)?3(0(0|1|2|4|5)|1\d|2[0-4]|5(0|1))\d{7}$/,
    "es-CL": /^(\+?56|0)[2-9]\d{1}\d{7}$/,
    "es-CR": /^(\+506)?[2-8]\d{7}$/,
    "es-CU": /^(\+53|0053)?5\d{7}/,
    "es-DO": /^(\+?1)?8[024]9\d{7}$/,
    "es-HN": /^(\+?504)?[9|8|3|2]\d{7}$/,
    "es-EC": /^(\+?593|0)([2-7]|9[2-9])\d{7}$/,
    "es-ES": /^(\+?34)?[6|7]\d{8}$/,
    "es-PE": /^(\+?51)?9\d{8}$/,
    "es-MX": /^(\+?52)?(1|01)?\d{10,11}$/,
    "es-NI": /^(\+?505)\d{7,8}$/,
    "es-PA": /^(\+?507)\d{7,8}$/,
    "es-PY": /^(\+?595|0)9[9876]\d{7}$/,
    "es-SV": /^(\+?503)?[67]\d{7}$/,
    "es-UY": /^(\+598|0)9[1-9][\d]{6}$/,
    "es-VE": /^(\+?58)?(2|4)\d{9}$/,
    "et-EE": /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
    "fa-IR": /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
    "fi-FI": /^(\+?358|0)\s?(4[0-6]|50)\s?(\d\s?){4,8}$/,
    "fj-FJ": /^(\+?679)?\s?\d{3}\s?\d{4}$/,
    "fo-FO": /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    "fr-BF": /^(\+226|0)[67]\d{7}$/,
    "fr-BJ": /^(\+229)\d{8}$/,
    "fr-CD": /^(\+?243|0)?(8|9)\d{8}$/,
    "fr-CM": /^(\+?237)6[0-9]{8}$/,
    "fr-FR": /^(\+?33|0)[67]\d{8}$/,
    "fr-GF": /^(\+?594|0|00594)[67]\d{8}$/,
    "fr-GP": /^(\+?590|0|00590)[67]\d{8}$/,
    "fr-MQ": /^(\+?596|0|00596)[67]\d{8}$/,
    "fr-PF": /^(\+?689)?8[789]\d{6}$/,
    "fr-RE": /^(\+?262|0|00262)[67]\d{8}$/,
    "he-IL": /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
    "hu-HU": /^(\+?36|06)(20|30|31|50|70)\d{7}$/,
    "id-ID": /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
    "ir-IR": /^(\+98|0)?9\d{9}$/,
    "it-IT": /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
    "it-SM": /^((\+378)|(0549)|(\+390549)|(\+3780549))?6\d{5,9}$/,
    "ja-JP": /^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,
    "ka-GE": /^(\+?995)?(79\d{7}|5\d{8})$/,
    "kk-KZ": /^(\+?7|8)?7\d{9}$/,
    "kl-GL": /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    "ko-KR": /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
    "ky-KG": /^(\+?7\s?\+?7|0)\s?\d{2}\s?\d{3}\s?\d{4}$/,
    "lt-LT": /^(\+370|8)\d{8}$/,
    "lv-LV": /^(\+?371)2\d{7}$/,
    "mg-MG": /^((\+?261|0)(2|3)\d)?\d{7}$/,
    "mn-MN": /^(\+|00|011)?976(77|81|88|91|94|95|96|99)\d{6}$/,
    "my-MM": /^(\+?959|09|9)(2[5-7]|3[1-2]|4[0-5]|6[6-9]|7[5-9]|9[6-9])[0-9]{7}$/,
    "ms-MY": /^(\+?60|0)1(([0145](-|\s)?\d{7,8})|([236-9](-|\s)?\d{7}))$/,
    "mz-MZ": /^(\+?258)?8[234567]\d{7}$/,
    "nb-NO": /^(\+?47)?[49]\d{7}$/,
    "ne-NP": /^(\+?977)?9[78]\d{8}$/,
    "nl-BE": /^(\+?32|0)4\d{8}$/,
    "nl-NL": /^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,
    "nl-AW": /^(\+)?297(56|59|64|73|74|99)\d{5}$/,
    "nn-NO": /^(\+?47)?[49]\d{7}$/,
    "pl-PL": /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
    "pt-BR": /^((\+?55\ ?[1-9]{2}\ ?)|(\+?55\ ?\([1-9]{2}\)\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[1-9]{1}\d{3}\-?\d{4}))$/,
    "pt-PT": /^(\+?351)?9[1236]\d{7}$/,
    "pt-AO": /^(\+244)\d{9}$/,
    "ro-MD": /^(\+?373|0)((6(0|1|2|6|7|8|9))|(7(6|7|8|9)))\d{6}$/,
    "ro-RO": /^(\+?40|0)\s?7\d{2}(\/|\s|\.|-)?\d{3}(\s|\.|-)?\d{3}$/,
    "ru-RU": /^(\+?7|8)?9\d{9}$/,
    "si-LK": /^(?:0|94|\+94)?(7(0|1|2|4|5|6|7|8)( |-)?)\d{7}$/,
    "sl-SI": /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
    "sk-SK": /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    "sq-AL": /^(\+355|0)6[789]\d{6}$/,
    "sr-RS": /^(\+3816|06)[- \d]{5,9}$/,
    "sv-SE": /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
    "tg-TJ": /^(\+?992)?[5][5]\d{7}$/,
    "th-TH": /^(\+66|66|0)\d{9}$/,
    "tr-TR": /^(\+?90|0)?5\d{9}$/,
    "tk-TM": /^(\+993|993|8)\d{8}$/,
    "uk-UA": /^(\+?38|8)?0\d{9}$/,
    "uz-UZ": /^(\+?998)?(6[125-79]|7[1-69]|88|9\d)\d{7}$/,
    "vi-VN": /^((\+?84)|0)((3([2-9]))|(5([25689]))|(7([0|6-9]))|(8([1-9]))|(9([0-9])))([0-9]{7})$/,
    "zh-CN": /^((\+|00)86)?(1[3-9]|9[28])\d{9}$/,
    "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
    "dz-BT": /^(\+?975|0)?(17|16|77|02)\d{6}$/,
    "ar-YE": /^(((\+|00)9677|0?7)[0137]\d{7}|((\+|00)967|0)[1-7]\d{6})$/,
    "ar-EH": /^(\+?212|0)[\s\-]?(5288|5289)[\s\-]?\d{5}$/,
    "fa-AF": /^(\+93|0)?(2{1}[0-8]{1}|[3-5]{1}[0-4]{1})(\d{7})$/
};
/* eslint-enable max-len */ // aliases
phones["en-CA"] = phones["en-US"];
phones["fr-CA"] = phones["en-CA"];
phones["fr-BE"] = phones["nl-BE"];
phones["zh-HK"] = phones["en-HK"];
phones["zh-MO"] = phones["en-MO"];
phones["ga-IE"] = phones["en-IE"];
phones["fr-CH"] = phones["de-CH"];
phones["it-CH"] = phones["fr-CH"];
function isMobilePhone(str, locale, options) {
    (0, _assertString.default)(str);
    if (options && options.strictMode && !str.startsWith("+")) return false;
    if (Array.isArray(locale)) return locale.some(function(key) {
        // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
        // istanbul ignore else
        if (phones.hasOwnProperty(key)) {
            var phone = phones[key];
            if (phone.test(str)) return true;
        }
        return false;
    });
    else if (locale in phones) return phones[locale].test(str); // alias falsey locale as 'any'
    else if (!locale || locale === "any") {
        for(var key in phones)// istanbul ignore else
        if (phones.hasOwnProperty(key)) {
            var phone = phones[key];
            if (phone.test(str)) return true;
        }
        return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
}
var locales = Object.keys(phones);
exports.locales = locales;

},{"597548b071f799d0":"dGQqH"}],"aFDzQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isEthereumAddress;
var _assertString = _interopRequireDefault(require("de3278395f450524"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var eth = /^(0x)[0-9a-f]{40}$/i;
function isEthereumAddress(str) {
    (0, _assertString.default)(str);
    return eth.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"de3278395f450524":"dGQqH"}],"bhNj9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isCurrency;
var _merge = _interopRequireDefault(require("467cb2454d92d9c5"));
var _assertString = _interopRequireDefault(require("77391667839297f8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function currencyRegex(options) {
    var decimal_digits = "\\d{".concat(options.digits_after_decimal[0], "}");
    options.digits_after_decimal.forEach(function(digit, index) {
        if (index !== 0) decimal_digits = "".concat(decimal_digits, "|\\d{").concat(digit, "}");
    });
    var symbol = "(".concat(options.symbol.replace(/\W/, function(m) {
        return "\\".concat(m);
    }), ")").concat(options.require_symbol ? "" : "?"), negative = "-?", whole_dollar_amount_without_sep = "[1-9]\\d*", whole_dollar_amount_with_sep = "[1-9]\\d{0,2}(\\".concat(options.thousands_separator, "\\d{3})*"), valid_whole_dollar_amounts = [
        "0",
        whole_dollar_amount_without_sep,
        whole_dollar_amount_with_sep
    ], whole_dollar_amount = "(".concat(valid_whole_dollar_amounts.join("|"), ")?"), decimal_amount = "(\\".concat(options.decimal_separator, "(").concat(decimal_digits, "))").concat(options.require_decimal ? "" : "?");
    var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : ""); // default is negative sign before symbol, but there are two other options (besides parens)
    if (options.allow_negatives && !options.parens_for_negatives) {
        if (options.negative_sign_after_digits) pattern += negative;
        else if (options.negative_sign_before_digits) pattern = negative + pattern;
    } // South African Rand, for example, uses R 123 (space) and R-123 (no space)
    if (options.allow_negative_sign_placeholder) pattern = "( (?!\\-))?".concat(pattern);
    else if (options.allow_space_after_symbol) pattern = " ?".concat(pattern);
    else if (options.allow_space_after_digits) pattern += "( (?!$))?";
    if (options.symbol_after_digits) pattern += symbol;
    else pattern = symbol + pattern;
    if (options.allow_negatives) {
        if (options.parens_for_negatives) pattern = "(\\(".concat(pattern, "\\)|").concat(pattern, ")");
        else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) pattern = negative + pattern;
    } // ensure there's a dollar and/or decimal amount, and that
    // it doesn't start with a space or a negative sign followed by a space
    return new RegExp("^(?!-? )(?=.*\\d)".concat(pattern, "$"));
}
var default_currency_options = {
    symbol: "$",
    require_symbol: false,
    allow_space_after_symbol: false,
    symbol_after_digits: false,
    allow_negatives: true,
    parens_for_negatives: false,
    negative_sign_before_digits: false,
    negative_sign_after_digits: false,
    allow_negative_sign_placeholder: false,
    thousands_separator: ",",
    decimal_separator: ".",
    allow_decimal: true,
    require_decimal: false,
    digits_after_decimal: [
        2
    ],
    allow_space_after_digits: false
};
function isCurrency(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_currency_options);
    return currencyRegex(options).test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"467cb2454d92d9c5":"c806a","77391667839297f8":"dGQqH"}],"33rsI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBtcAddress;
var _assertString = _interopRequireDefault(require("9e0eb8d87a25b3b2"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var bech32 = /^(bc1)[a-z0-9]{25,39}$/;
var base58 = /^(1|3)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
function isBtcAddress(str) {
    (0, _assertString.default)(str);
    return bech32.test(str) || base58.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9e0eb8d87a25b3b2":"dGQqH"}],"hb3R1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISO6391;
var _assertString = _interopRequireDefault(require("a302ab81c2caac4d"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isISO6391Set = new Set([
    "aa",
    "ab",
    "ae",
    "af",
    "ak",
    "am",
    "an",
    "ar",
    "as",
    "av",
    "ay",
    "az",
    "az",
    "ba",
    "be",
    "bg",
    "bh",
    "bi",
    "bm",
    "bn",
    "bo",
    "br",
    "bs",
    "ca",
    "ce",
    "ch",
    "co",
    "cr",
    "cs",
    "cu",
    "cv",
    "cy",
    "da",
    "de",
    "dv",
    "dz",
    "ee",
    "el",
    "en",
    "eo",
    "es",
    "et",
    "eu",
    "fa",
    "ff",
    "fi",
    "fj",
    "fo",
    "fr",
    "fy",
    "ga",
    "gd",
    "gl",
    "gn",
    "gu",
    "gv",
    "ha",
    "he",
    "hi",
    "ho",
    "hr",
    "ht",
    "hu",
    "hy",
    "hz",
    "ia",
    "id",
    "ie",
    "ig",
    "ii",
    "ik",
    "io",
    "is",
    "it",
    "iu",
    "ja",
    "jv",
    "ka",
    "kg",
    "ki",
    "kj",
    "kk",
    "kl",
    "km",
    "kn",
    "ko",
    "kr",
    "ks",
    "ku",
    "kv",
    "kw",
    "ky",
    "la",
    "lb",
    "lg",
    "li",
    "ln",
    "lo",
    "lt",
    "lu",
    "lv",
    "mg",
    "mh",
    "mi",
    "mk",
    "ml",
    "mn",
    "mr",
    "ms",
    "mt",
    "my",
    "na",
    "nb",
    "nd",
    "ne",
    "ng",
    "nl",
    "nn",
    "no",
    "nr",
    "nv",
    "ny",
    "oc",
    "oj",
    "om",
    "or",
    "os",
    "pa",
    "pi",
    "pl",
    "ps",
    "pt",
    "qu",
    "rm",
    "rn",
    "ro",
    "ru",
    "rw",
    "sa",
    "sc",
    "sd",
    "se",
    "sg",
    "si",
    "sk",
    "sl",
    "sm",
    "sn",
    "so",
    "sq",
    "sr",
    "ss",
    "st",
    "su",
    "sv",
    "sw",
    "ta",
    "te",
    "tg",
    "th",
    "ti",
    "tk",
    "tl",
    "tn",
    "to",
    "tr",
    "ts",
    "tt",
    "tw",
    "ty",
    "ug",
    "uk",
    "ur",
    "uz",
    "ve",
    "vi",
    "vo",
    "wa",
    "wo",
    "xh",
    "yi",
    "yo",
    "za",
    "zh",
    "zu"
]);
function isISO6391(str) {
    (0, _assertString.default)(str);
    return isISO6391Set.has(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"a302ab81c2caac4d":"dGQqH"}],"fmSWm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISO8601;
var _assertString = _interopRequireDefault(require("c2dd34a89f8d77d3"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* eslint-disable max-len */ // from http://goo.gl/0ejHHW
var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/; // same as above, except with a strict 'T' separator between date and time
var iso8601StrictSeparator = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */ var isValidDate = function isValidDate(str) {
    // str must have passed the ISO8601 check
    // this check is meant to catch invalid dates
    // like 2009-02-31
    // first check for ordinal dates
    var ordinalMatch = str.match(/^(\d{4})-?(\d{3})([ T]{1}\.*|$)/);
    if (ordinalMatch) {
        var oYear = Number(ordinalMatch[1]);
        var oDay = Number(ordinalMatch[2]); // if is leap year
        if (oYear % 4 === 0 && oYear % 100 !== 0 || oYear % 400 === 0) return oDay <= 366;
        return oDay <= 365;
    }
    var match = str.match(/(\d{4})-?(\d{0,2})-?(\d*)/).map(Number);
    var year = match[1];
    var month = match[2];
    var day = match[3];
    var monthString = month ? "0".concat(month).slice(-2) : month;
    var dayString = day ? "0".concat(day).slice(-2) : day; // create a date object and compare
    var d = new Date("".concat(year, "-").concat(monthString || "01", "-").concat(dayString || "01"));
    if (month && day) return d.getUTCFullYear() === year && d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
    return true;
};
function isISO8601(str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _assertString.default)(str);
    var check = options.strictSeparator ? iso8601StrictSeparator.test(str) : iso8601.test(str);
    if (check && options.strict) return isValidDate(str);
    return check;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"c2dd34a89f8d77d3":"dGQqH"}],"dant0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isRFC3339;
var _assertString = _interopRequireDefault(require("86cfcd153590f9be"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */ var dateFullYear = /[0-9]{4}/;
var dateMonth = /(0[1-9]|1[0-2])/;
var dateMDay = /([12]\d|0[1-9]|3[01])/;
var timeHour = /([01][0-9]|2[0-3])/;
var timeMinute = /[0-5][0-9]/;
var timeSecond = /([0-5][0-9]|60)/;
var timeSecFrac = /(\.[0-9]+)?/;
var timeNumOffset = new RegExp("[-+]".concat(timeHour.source, ":").concat(timeMinute.source));
var timeOffset = new RegExp("([zZ]|".concat(timeNumOffset.source, ")"));
var partialTime = new RegExp("".concat(timeHour.source, ":").concat(timeMinute.source, ":").concat(timeSecond.source).concat(timeSecFrac.source));
var fullDate = new RegExp("".concat(dateFullYear.source, "-").concat(dateMonth.source, "-").concat(dateMDay.source));
var fullTime = new RegExp("".concat(partialTime.source).concat(timeOffset.source));
var rfc3339 = new RegExp("^".concat(fullDate.source, "[ tT]").concat(fullTime.source, "$"));
function isRFC3339(str) {
    (0, _assertString.default)(str);
    return rfc3339.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"86cfcd153590f9be":"dGQqH"}],"8L4qb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISO31661Alpha3;
var _assertString = _interopRequireDefault(require("b66458f65eaeb7a8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
var validISO31661Alpha3CountriesCodes = new Set([
    "AFG",
    "ALA",
    "ALB",
    "DZA",
    "ASM",
    "AND",
    "AGO",
    "AIA",
    "ATA",
    "ATG",
    "ARG",
    "ARM",
    "ABW",
    "AUS",
    "AUT",
    "AZE",
    "BHS",
    "BHR",
    "BGD",
    "BRB",
    "BLR",
    "BEL",
    "BLZ",
    "BEN",
    "BMU",
    "BTN",
    "BOL",
    "BES",
    "BIH",
    "BWA",
    "BVT",
    "BRA",
    "IOT",
    "BRN",
    "BGR",
    "BFA",
    "BDI",
    "KHM",
    "CMR",
    "CAN",
    "CPV",
    "CYM",
    "CAF",
    "TCD",
    "CHL",
    "CHN",
    "CXR",
    "CCK",
    "COL",
    "COM",
    "COG",
    "COD",
    "COK",
    "CRI",
    "CIV",
    "HRV",
    "CUB",
    "CUW",
    "CYP",
    "CZE",
    "DNK",
    "DJI",
    "DMA",
    "DOM",
    "ECU",
    "EGY",
    "SLV",
    "GNQ",
    "ERI",
    "EST",
    "ETH",
    "FLK",
    "FRO",
    "FJI",
    "FIN",
    "FRA",
    "GUF",
    "PYF",
    "ATF",
    "GAB",
    "GMB",
    "GEO",
    "DEU",
    "GHA",
    "GIB",
    "GRC",
    "GRL",
    "GRD",
    "GLP",
    "GUM",
    "GTM",
    "GGY",
    "GIN",
    "GNB",
    "GUY",
    "HTI",
    "HMD",
    "VAT",
    "HND",
    "HKG",
    "HUN",
    "ISL",
    "IND",
    "IDN",
    "IRN",
    "IRQ",
    "IRL",
    "IMN",
    "ISR",
    "ITA",
    "JAM",
    "JPN",
    "JEY",
    "JOR",
    "KAZ",
    "KEN",
    "KIR",
    "PRK",
    "KOR",
    "KWT",
    "KGZ",
    "LAO",
    "LVA",
    "LBN",
    "LSO",
    "LBR",
    "LBY",
    "LIE",
    "LTU",
    "LUX",
    "MAC",
    "MKD",
    "MDG",
    "MWI",
    "MYS",
    "MDV",
    "MLI",
    "MLT",
    "MHL",
    "MTQ",
    "MRT",
    "MUS",
    "MYT",
    "MEX",
    "FSM",
    "MDA",
    "MCO",
    "MNG",
    "MNE",
    "MSR",
    "MAR",
    "MOZ",
    "MMR",
    "NAM",
    "NRU",
    "NPL",
    "NLD",
    "NCL",
    "NZL",
    "NIC",
    "NER",
    "NGA",
    "NIU",
    "NFK",
    "MNP",
    "NOR",
    "OMN",
    "PAK",
    "PLW",
    "PSE",
    "PAN",
    "PNG",
    "PRY",
    "PER",
    "PHL",
    "PCN",
    "POL",
    "PRT",
    "PRI",
    "QAT",
    "REU",
    "ROU",
    "RUS",
    "RWA",
    "BLM",
    "SHN",
    "KNA",
    "LCA",
    "MAF",
    "SPM",
    "VCT",
    "WSM",
    "SMR",
    "STP",
    "SAU",
    "SEN",
    "SRB",
    "SYC",
    "SLE",
    "SGP",
    "SXM",
    "SVK",
    "SVN",
    "SLB",
    "SOM",
    "ZAF",
    "SGS",
    "SSD",
    "ESP",
    "LKA",
    "SDN",
    "SUR",
    "SJM",
    "SWZ",
    "SWE",
    "CHE",
    "SYR",
    "TWN",
    "TJK",
    "TZA",
    "THA",
    "TLS",
    "TGO",
    "TKL",
    "TON",
    "TTO",
    "TUN",
    "TUR",
    "TKM",
    "TCA",
    "TUV",
    "UGA",
    "UKR",
    "ARE",
    "GBR",
    "USA",
    "UMI",
    "URY",
    "UZB",
    "VUT",
    "VEN",
    "VNM",
    "VGB",
    "VIR",
    "WLF",
    "ESH",
    "YEM",
    "ZMB",
    "ZWE"
]);
function isISO31661Alpha3(str) {
    (0, _assertString.default)(str);
    return validISO31661Alpha3CountriesCodes.has(str.toUpperCase());
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b66458f65eaeb7a8":"dGQqH"}],"5m7Vp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isISO4217;
exports.CurrencyCodes = void 0;
var _assertString = _interopRequireDefault(require("d9fda19acb9c39e8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// from https://en.wikipedia.org/wiki/ISO_4217
var validISO4217CurrencyCodes = new Set([
    "AED",
    "AFN",
    "ALL",
    "AMD",
    "ANG",
    "AOA",
    "ARS",
    "AUD",
    "AWG",
    "AZN",
    "BAM",
    "BBD",
    "BDT",
    "BGN",
    "BHD",
    "BIF",
    "BMD",
    "BND",
    "BOB",
    "BOV",
    "BRL",
    "BSD",
    "BTN",
    "BWP",
    "BYN",
    "BZD",
    "CAD",
    "CDF",
    "CHE",
    "CHF",
    "CHW",
    "CLF",
    "CLP",
    "CNY",
    "COP",
    "COU",
    "CRC",
    "CUC",
    "CUP",
    "CVE",
    "CZK",
    "DJF",
    "DKK",
    "DOP",
    "DZD",
    "EGP",
    "ERN",
    "ETB",
    "EUR",
    "FJD",
    "FKP",
    "GBP",
    "GEL",
    "GHS",
    "GIP",
    "GMD",
    "GNF",
    "GTQ",
    "GYD",
    "HKD",
    "HNL",
    "HRK",
    "HTG",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "IQD",
    "IRR",
    "ISK",
    "JMD",
    "JOD",
    "JPY",
    "KES",
    "KGS",
    "KHR",
    "KMF",
    "KPW",
    "KRW",
    "KWD",
    "KYD",
    "KZT",
    "LAK",
    "LBP",
    "LKR",
    "LRD",
    "LSL",
    "LYD",
    "MAD",
    "MDL",
    "MGA",
    "MKD",
    "MMK",
    "MNT",
    "MOP",
    "MRU",
    "MUR",
    "MVR",
    "MWK",
    "MXN",
    "MXV",
    "MYR",
    "MZN",
    "NAD",
    "NGN",
    "NIO",
    "NOK",
    "NPR",
    "NZD",
    "OMR",
    "PAB",
    "PEN",
    "PGK",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "QAR",
    "RON",
    "RSD",
    "RUB",
    "RWF",
    "SAR",
    "SBD",
    "SCR",
    "SDG",
    "SEK",
    "SGD",
    "SHP",
    "SLL",
    "SOS",
    "SRD",
    "SSP",
    "STN",
    "SVC",
    "SYP",
    "SZL",
    "THB",
    "TJS",
    "TMT",
    "TND",
    "TOP",
    "TRY",
    "TTD",
    "TWD",
    "TZS",
    "UAH",
    "UGX",
    "USD",
    "USN",
    "UYI",
    "UYU",
    "UYW",
    "UZS",
    "VES",
    "VND",
    "VUV",
    "WST",
    "XAF",
    "XAG",
    "XAU",
    "XBA",
    "XBB",
    "XBC",
    "XBD",
    "XCD",
    "XDR",
    "XOF",
    "XPD",
    "XPF",
    "XPT",
    "XSU",
    "XTS",
    "XUA",
    "XXX",
    "YER",
    "ZAR",
    "ZMW",
    "ZWL"
]);
function isISO4217(str) {
    (0, _assertString.default)(str);
    return validISO4217CurrencyCodes.has(str.toUpperCase());
}
var CurrencyCodes = validISO4217CurrencyCodes;
exports.CurrencyCodes = CurrencyCodes;

},{"d9fda19acb9c39e8":"dGQqH"}],"efPgQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBase32;
var _assertString = _interopRequireDefault(require("e04b5f9108e14f5"));
var _merge = _interopRequireDefault(require("fb36489dbb8d1a3"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var base32 = /^[A-Z2-7]+=*$/;
var crockfordBase32 = /^[A-HJKMNP-TV-Z0-9]+$/;
var defaultBase32Options = {
    crockford: false
};
function isBase32(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, defaultBase32Options);
    if (options.crockford) return crockfordBase32.test(str);
    var len = str.length;
    if (len % 8 === 0 && base32.test(str)) return true;
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e04b5f9108e14f5":"dGQqH","fb36489dbb8d1a3":"c806a"}],"440T3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isBase58;
var _assertString = _interopRequireDefault(require("891939a40323820e"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// Accepted chars - 123456789ABCDEFGH JKLMN PQRSTUVWXYZabcdefghijk mnopqrstuvwxyz
var base58Reg = /^[A-HJ-NP-Za-km-z1-9]*$/;
function isBase58(str) {
    (0, _assertString.default)(str);
    if (base58Reg.test(str)) return true;
    return false;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"891939a40323820e":"dGQqH"}],"hywF2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDataURI;
var _assertString = _interopRequireDefault(require("5760d2b424323bd7"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var validMediaType = /^[a-z]+\/[a-z0-9\-\+\._]+$/i;
var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
function isDataURI(str) {
    (0, _assertString.default)(str);
    var data = str.split(",");
    if (data.length < 2) return false;
    var attributes = data.shift().trim().split(";");
    var schemeAndMediaType = attributes.shift();
    if (schemeAndMediaType.slice(0, 5) !== "data:") return false;
    var mediaType = schemeAndMediaType.slice(5);
    if (mediaType !== "" && !validMediaType.test(mediaType)) return false;
    for(var i = 0; i < attributes.length; i++){
        if (!(i === attributes.length - 1 && attributes[i].toLowerCase() === "base64") && !validAttribute.test(attributes[i])) return false;
    }
    for(var _i = 0; _i < data.length; _i++){
        if (!validData.test(data[_i])) return false;
    }
    return true;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"5760d2b424323bd7":"dGQqH"}],"7vLF5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMagnetURI;
var _assertString = _interopRequireDefault(require("cabcc420a1ff2c36"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var magnetURIComponent = /(?:^magnet:\?|[^?&]&)xt(?:\.1)?=urn:(?:(?:aich|bitprint|btih|ed2k|ed2khash|kzhash|md5|sha1|tree:tiger):[a-z0-9]{32}(?:[a-z0-9]{8})?|btmh:1220[a-z0-9]{64})(?:$|&)/i;
function isMagnetURI(url) {
    (0, _assertString.default)(url);
    if (url.indexOf("magnet:?") !== 0) return false;
    return magnetURIComponent.test(url);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"cabcc420a1ff2c36":"dGQqH"}],"9WoRd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isMimeType;
var _assertString = _interopRequireDefault(require("b1a5323c59cce3b7"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/*
  Checks if the provided string matches to a correct Media type format (MIME type)

  This function only checks is the string format follows the
  etablished rules by the according RFC specifications.
  This function supports 'charset' in textual media types
  (https://tools.ietf.org/html/rfc6657).

  This function does not check against all the media types listed
  by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)
  because of lightness purposes : it would require to include
  all these MIME types in this librairy, which would weigh it
  significantly. This kind of effort maybe is not worth for the use that
  this function has in this entire librairy.

  More informations in the RFC specifications :
  - https://tools.ietf.org/html/rfc2045
  - https://tools.ietf.org/html/rfc2046
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.1
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.5
*/ // Match simple MIME types
// NB :
//   Subtype length must not exceed 100 characters.
//   This rule does not comply to the RFC specs (what is the max length ?).
var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+_]{1,100}$/i; // eslint-disable-line max-len
// Handle "charset" in "text/*"
var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len
// Handle "boundary" in "multipart/*"
var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len
function isMimeType(str) {
    (0, _assertString.default)(str);
    return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b1a5323c59cce3b7":"dGQqH"}],"kx63f":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLatLong;
var _assertString = _interopRequireDefault(require("42ca4ce670edd2c0"));
var _merge = _interopRequireDefault(require("f246bd175997c1b5"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;
var latDMS = /^(([1-8]?\d)\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|90\D+0\D+0)\D+[NSns]?$/i;
var longDMS = /^\s*([1-7]?\d{1,2}\D+([1-5]?\d|60)\D+([1-5]?\d|60)(\.\d+)?|180\D+0\D+0)\D+[EWew]?$/i;
var defaultLatLongOptions = {
    checkDMS: false
};
function isLatLong(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, defaultLatLongOptions);
    if (!str.includes(",")) return false;
    var pair = str.split(",");
    if (pair[0].startsWith("(") && !pair[1].endsWith(")") || pair[1].endsWith(")") && !pair[0].startsWith("(")) return false;
    if (options.checkDMS) return latDMS.test(pair[0]) && longDMS.test(pair[1]);
    return lat.test(pair[0]) && long.test(pair[1]);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"42ca4ce670edd2c0":"dGQqH","f246bd175997c1b5":"c806a"}],"bGotF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isPostalCode;
exports.locales = void 0;
var _assertString = _interopRequireDefault(require("af33e209d16f8276"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// common patterns
var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;
var patterns = {
    AD: /^AD\d{3}$/,
    AT: fourDigit,
    AU: fourDigit,
    AZ: /^AZ\d{4}$/,
    BA: /^([7-8]\d{4}$)/,
    BE: fourDigit,
    BG: fourDigit,
    BR: /^\d{5}-\d{3}$/,
    BY: /^2[1-4]\d{4}$/,
    CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
    CH: fourDigit,
    CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
    CZ: /^\d{3}\s?\d{2}$/,
    DE: fiveDigit,
    DK: fourDigit,
    DO: fiveDigit,
    DZ: fiveDigit,
    EE: fiveDigit,
    ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
    FI: fiveDigit,
    FR: /^\d{2}\s?\d{3}$/,
    GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
    GR: /^\d{3}\s?\d{2}$/,
    HR: /^([1-5]\d{4}$)/,
    HT: /^HT\d{4}$/,
    HU: fourDigit,
    ID: fiveDigit,
    IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
    IL: /^(\d{5}|\d{7})$/,
    IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
    IR: /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
    IS: threeDigit,
    IT: fiveDigit,
    JP: /^\d{3}\-\d{4}$/,
    KE: fiveDigit,
    KR: /^(\d{5}|\d{6})$/,
    LI: /^(948[5-9]|949[0-7])$/,
    LT: /^LT\-\d{5}$/,
    LU: fourDigit,
    LV: /^LV\-\d{4}$/,
    LK: fiveDigit,
    MG: threeDigit,
    MX: fiveDigit,
    MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
    MY: fiveDigit,
    NL: /^\d{4}\s?[a-z]{2}$/i,
    NO: fourDigit,
    NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
    NZ: fourDigit,
    PL: /^\d{2}\-\d{3}$/,
    PR: /^00[679]\d{2}([ -]\d{4})?$/,
    PT: /^\d{4}\-\d{3}?$/,
    RO: sixDigit,
    RU: sixDigit,
    SA: fiveDigit,
    SE: /^[1-9]\d{2}\s?\d{2}$/,
    SG: sixDigit,
    SI: fourDigit,
    SK: /^\d{3}\s?\d{2}$/,
    TH: fiveDigit,
    TN: fourDigit,
    TW: /^\d{3}(\d{2})?$/,
    UA: fiveDigit,
    US: /^\d{5}(-\d{4})?$/,
    ZA: fourDigit,
    ZM: fiveDigit
};
var locales = Object.keys(patterns);
exports.locales = locales;
function isPostalCode(str, locale) {
    (0, _assertString.default)(str);
    if (locale in patterns) return patterns[locale].test(str);
    else if (locale === "any") {
        for(var key in patterns)// https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
        // istanbul ignore else
        if (patterns.hasOwnProperty(key)) {
            var pattern = patterns[key];
            if (pattern.test(str)) return true;
        }
        return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
}

},{"af33e209d16f8276":"dGQqH"}],"fJ9nZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ltrim;
var _assertString = _interopRequireDefault(require("2f24039d4dd740d3"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function ltrim(str, chars) {
    (0, _assertString.default)(str); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
    var pattern = chars ? new RegExp("^[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+"), "g") : /^\s+/g;
    return str.replace(pattern, "");
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"2f24039d4dd740d3":"dGQqH"}],"fMYnt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = rtrim;
var _assertString = _interopRequireDefault(require("3f937b9787a0d737"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function rtrim(str, chars) {
    (0, _assertString.default)(str);
    if (chars) {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
        var pattern = new RegExp("[".concat(chars.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "]+$"), "g");
        return str.replace(pattern, "");
    } // Use a faster and more safe than regex trim method https://blog.stevenlevithan.com/archives/faster-trim-javascript
    var strIndex = str.length - 1;
    while(/\s/.test(str.charAt(strIndex)))strIndex -= 1;
    return str.slice(0, strIndex + 1);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"3f937b9787a0d737":"dGQqH"}],"iVDTF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = trim;
var _rtrim = _interopRequireDefault(require("b763567f82768552"));
var _ltrim = _interopRequireDefault(require("f1918674a32c3c86"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function trim(str, chars) {
    return (0, _rtrim.default)((0, _ltrim.default)(str, chars), chars);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b763567f82768552":"fMYnt","f1918674a32c3c86":"fJ9nZ"}],"6CwX1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = escape;
var _assertString = _interopRequireDefault(require("4f2ad27482ad15a0"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function escape(str) {
    (0, _assertString.default)(str);
    return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\\/g, "&#x5C;").replace(/`/g, "&#96;");
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"4f2ad27482ad15a0":"dGQqH"}],"drLU6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = unescape;
var _assertString = _interopRequireDefault(require("9bb1978633a49334"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function unescape(str) {
    (0, _assertString.default)(str);
    return str.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#x2F;/g, "/").replace(/&#x5C;/g, "\\").replace(/&#96;/g, "`").replace(/&amp;/g, "&"); // &amp; replacement has to be the last one to prevent
// bugs with intermediate strings containing escape sequences
// See: https://github.com/validatorjs/validator.js/issues/1827
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"9bb1978633a49334":"dGQqH"}],"acEjg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = stripLow;
var _assertString = _interopRequireDefault(require("e657450d3bf6e2e5"));
var _blacklist = _interopRequireDefault(require("adf963296d8f7393"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function stripLow(str, keep_new_lines) {
    (0, _assertString.default)(str);
    var chars = keep_new_lines ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
    return (0, _blacklist.default)(str, chars);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"e657450d3bf6e2e5":"dGQqH","adf963296d8f7393":"hlY2T"}],"hlY2T":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = blacklist;
var _assertString = _interopRequireDefault(require("da17f86bfd8f9f06"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function blacklist(str, chars) {
    (0, _assertString.default)(str);
    return str.replace(new RegExp("[".concat(chars, "]+"), "g"), "");
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"da17f86bfd8f9f06":"dGQqH"}],"alKRu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = whitelist;
var _assertString = _interopRequireDefault(require("fd66d8d8bf0ad43"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function whitelist(str, chars) {
    (0, _assertString.default)(str);
    return str.replace(new RegExp("[^".concat(chars, "]+"), "g"), "");
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"fd66d8d8bf0ad43":"dGQqH"}],"dxEdr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isWhitelisted;
var _assertString = _interopRequireDefault(require("5e47d1f865a8d574"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isWhitelisted(str, chars) {
    (0, _assertString.default)(str);
    for(var i = str.length - 1; i >= 0; i--){
        if (chars.indexOf(str[i]) === -1) return false;
    }
    return true;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"5e47d1f865a8d574":"dGQqH"}],"haeN5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = normalizeEmail;
var _merge = _interopRequireDefault(require("3d767513579b6391"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var default_normalize_email_options = {
    // The following options apply to all email addresses
    // Lowercases the local part of the email address.
    // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
    // The domain is always lowercased, as per RFC 1035
    all_lowercase: true,
    // The following conversions are specific to GMail
    // Lowercases the local part of the GMail address (known to be case-insensitive)
    gmail_lowercase: true,
    // Removes dots from the local part of the email address, as that's ignored by GMail
    gmail_remove_dots: true,
    // Removes the subaddress (e.g. "+foo") from the email address
    gmail_remove_subaddress: true,
    // Conversts the googlemail.com domain to gmail.com
    gmail_convert_googlemaildotcom: true,
    // The following conversions are specific to Outlook.com / Windows Live / Hotmail
    // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
    outlookdotcom_lowercase: true,
    // Removes the subaddress (e.g. "+foo") from the email address
    outlookdotcom_remove_subaddress: true,
    // The following conversions are specific to Yahoo
    // Lowercases the local part of the Yahoo address (known to be case-insensitive)
    yahoo_lowercase: true,
    // Removes the subaddress (e.g. "-foo") from the email address
    yahoo_remove_subaddress: true,
    // The following conversions are specific to Yandex
    // Lowercases the local part of the Yandex address (known to be case-insensitive)
    yandex_lowercase: true,
    // The following conversions are specific to iCloud
    // Lowercases the local part of the iCloud address (known to be case-insensitive)
    icloud_lowercase: true,
    // Removes the subaddress (e.g. "+foo") from the email address
    icloud_remove_subaddress: true
}; // List of domains used by iCloud
var icloud_domains = [
    "icloud.com",
    "me.com"
]; // List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/
var outlookdotcom_domains = [
    "hotmail.at",
    "hotmail.be",
    "hotmail.ca",
    "hotmail.cl",
    "hotmail.co.il",
    "hotmail.co.nz",
    "hotmail.co.th",
    "hotmail.co.uk",
    "hotmail.com",
    "hotmail.com.ar",
    "hotmail.com.au",
    "hotmail.com.br",
    "hotmail.com.gr",
    "hotmail.com.mx",
    "hotmail.com.pe",
    "hotmail.com.tr",
    "hotmail.com.vn",
    "hotmail.cz",
    "hotmail.de",
    "hotmail.dk",
    "hotmail.es",
    "hotmail.fr",
    "hotmail.hu",
    "hotmail.id",
    "hotmail.ie",
    "hotmail.in",
    "hotmail.it",
    "hotmail.jp",
    "hotmail.kr",
    "hotmail.lv",
    "hotmail.my",
    "hotmail.ph",
    "hotmail.pt",
    "hotmail.sa",
    "hotmail.sg",
    "hotmail.sk",
    "live.be",
    "live.co.uk",
    "live.com",
    "live.com.ar",
    "live.com.mx",
    "live.de",
    "live.es",
    "live.eu",
    "live.fr",
    "live.it",
    "live.nl",
    "msn.com",
    "outlook.at",
    "outlook.be",
    "outlook.cl",
    "outlook.co.il",
    "outlook.co.nz",
    "outlook.co.th",
    "outlook.com",
    "outlook.com.ar",
    "outlook.com.au",
    "outlook.com.br",
    "outlook.com.gr",
    "outlook.com.pe",
    "outlook.com.tr",
    "outlook.com.vn",
    "outlook.cz",
    "outlook.de",
    "outlook.dk",
    "outlook.es",
    "outlook.fr",
    "outlook.hu",
    "outlook.id",
    "outlook.ie",
    "outlook.in",
    "outlook.it",
    "outlook.jp",
    "outlook.kr",
    "outlook.lv",
    "outlook.my",
    "outlook.ph",
    "outlook.pt",
    "outlook.sa",
    "outlook.sg",
    "outlook.sk",
    "passport.com"
]; // List of domains used by Yahoo Mail
// This list is likely incomplete
var yahoo_domains = [
    "rocketmail.com",
    "yahoo.ca",
    "yahoo.co.uk",
    "yahoo.com",
    "yahoo.de",
    "yahoo.fr",
    "yahoo.in",
    "yahoo.it",
    "ymail.com"
]; // List of domains used by yandex.ru
var yandex_domains = [
    "yandex.ru",
    "yandex.ua",
    "yandex.kz",
    "yandex.com",
    "yandex.by",
    "ya.ru"
]; // replace single dots, but not multiple consecutive dots
function dotsReplacer(match) {
    if (match.length > 1) return match;
    return "";
}
function normalizeEmail(email, options) {
    options = (0, _merge.default)(options, default_normalize_email_options);
    var raw_parts = email.split("@");
    var domain = raw_parts.pop();
    var user = raw_parts.join("@");
    var parts = [
        user,
        domain
    ]; // The domain is always lowercased, as it's case-insensitive per RFC 1035
    parts[1] = parts[1].toLowerCase();
    if (parts[1] === "gmail.com" || parts[1] === "googlemail.com") {
        // Address is GMail
        if (options.gmail_remove_subaddress) parts[0] = parts[0].split("+")[0];
        if (options.gmail_remove_dots) // this does not replace consecutive dots like example..email@gmail.com
        parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
        if (!parts[0].length) return false;
        if (options.all_lowercase || options.gmail_lowercase) parts[0] = parts[0].toLowerCase();
        parts[1] = options.gmail_convert_googlemaildotcom ? "gmail.com" : parts[1];
    } else if (icloud_domains.indexOf(parts[1]) >= 0) {
        // Address is iCloud
        if (options.icloud_remove_subaddress) parts[0] = parts[0].split("+")[0];
        if (!parts[0].length) return false;
        if (options.all_lowercase || options.icloud_lowercase) parts[0] = parts[0].toLowerCase();
    } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
        // Address is Outlook.com
        if (options.outlookdotcom_remove_subaddress) parts[0] = parts[0].split("+")[0];
        if (!parts[0].length) return false;
        if (options.all_lowercase || options.outlookdotcom_lowercase) parts[0] = parts[0].toLowerCase();
    } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
        // Address is Yahoo
        if (options.yahoo_remove_subaddress) {
            var components = parts[0].split("-");
            parts[0] = components.length > 1 ? components.slice(0, -1).join("-") : components[0];
        }
        if (!parts[0].length) return false;
        if (options.all_lowercase || options.yahoo_lowercase) parts[0] = parts[0].toLowerCase();
    } else if (yandex_domains.indexOf(parts[1]) >= 0) {
        if (options.all_lowercase || options.yandex_lowercase) parts[0] = parts[0].toLowerCase();
        parts[1] = "yandex.ru"; // all yandex domains are equal, 1st preferred
    } else if (options.all_lowercase) // Any other address
    parts[0] = parts[0].toLowerCase();
    return parts.join("@");
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"3d767513579b6391":"c806a"}],"cwFi9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isSlug;
var _assertString = _interopRequireDefault(require("ab92b84ab8fd18a8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var charsetRegex = /^[^\s-_](?!.*?[-_]{2,})[a-z0-9-\\][^\s]*[^-_\s]$/;
function isSlug(str) {
    (0, _assertString.default)(str);
    return charsetRegex.test(str);
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"ab92b84ab8fd18a8":"dGQqH"}],"bfivK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isLicensePlate;
var _assertString = _interopRequireDefault(require("b2df968a48112117"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var validators = {
    "cs-CZ": function csCZ(str) {
        return /^(([ABCDEFHIJKLMNPRSTUVXYZ]|[0-9])-?){5,8}$/.test(str);
    },
    "de-DE": function deDE(str) {
        return /^((A|AA|AB|AC|AE|AH|AK|AM|AN|AÖ|AP|AS|AT|AU|AW|AZ|B|BA|BB|BC|BE|BF|BH|BI|BK|BL|BM|BN|BO|BÖ|BS|BT|BZ|C|CA|CB|CE|CO|CR|CW|D|DA|DD|DE|DH|DI|DL|DM|DN|DO|DU|DW|DZ|E|EA|EB|ED|EE|EF|EG|EH|EI|EL|EM|EN|ER|ES|EU|EW|F|FB|FD|FF|FG|FI|FL|FN|FO|FR|FS|FT|FÜ|FW|FZ|G|GA|GC|GD|GE|GF|GG|GI|GK|GL|GM|GN|GÖ|GP|GR|GS|GT|GÜ|GV|GW|GZ|H|HA|HB|HC|HD|HE|HF|HG|HH|HI|HK|HL|HM|HN|HO|HP|HR|HS|HU|HV|HX|HY|HZ|IK|IL|IN|IZ|J|JE|JL|K|KA|KB|KC|KE|KF|KG|KH|KI|KK|KL|KM|KN|KO|KR|KS|KT|KU|KW|KY|L|LA|LB|LC|LD|LF|LG|LH|LI|LL|LM|LN|LÖ|LP|LR|LU|M|MA|MB|MC|MD|ME|MG|MH|MI|MK|ML|MM|MN|MO|MQ|MR|MS|MÜ|MW|MY|MZ|N|NB|ND|NE|NF|NH|NI|NK|NM|NÖ|NP|NR|NT|NU|NW|NY|NZ|OA|OB|OC|OD|OE|OF|OG|OH|OK|OL|OP|OS|OZ|P|PA|PB|PE|PF|PI|PL|PM|PN|PR|PS|PW|PZ|R|RA|RC|RD|RE|RG|RH|RI|RL|RM|RN|RO|RP|RS|RT|RU|RV|RW|RZ|S|SB|SC|SE|SG|SI|SK|SL|SM|SN|SO|SP|SR|ST|SU|SW|SY|SZ|TE|TF|TG|TO|TP|TR|TS|TT|TÜ|ÜB|UE|UH|UL|UM|UN|V|VB|VG|VK|VR|VS|W|WA|WB|WE|WF|WI|WK|WL|WM|WN|WO|WR|WS|WT|WÜ|WW|WZ|Z|ZE|ZI|ZP|ZR|ZW|ZZ)[- ]?[A-Z]{1,2}[- ]?\d{1,4}|(ABG|ABI|AIB|AIC|ALF|ALZ|ANA|ANG|ANK|APD|ARN|ART|ASL|ASZ|AUR|AZE|BAD|BAR|BBG|BCH|BED|BER|BGD|BGL|BID|BIN|BIR|BIT|BIW|BKS|BLB|BLK|BNA|BOG|BOH|BOR|BOT|BRA|BRB|BRG|BRK|BRL|BRV|BSB|BSK|BTF|BÜD|BUL|BÜR|BÜS|BÜZ|CAS|CHA|CLP|CLZ|COC|COE|CUX|DAH|DAN|DAU|DBR|DEG|DEL|DGF|DIL|DIN|DIZ|DKB|DLG|DON|DUD|DÜW|EBE|EBN|EBS|ECK|EIC|EIL|EIN|EIS|EMD|EMS|ERB|ERH|ERK|ERZ|ESB|ESW|FDB|FDS|FEU|FFB|FKB|FLÖ|FOR|FRG|FRI|FRW|FTL|FÜS|GAN|GAP|GDB|GEL|GEO|GER|GHA|GHC|GLA|GMN|GNT|GOA|GOH|GRA|GRH|GRI|GRM|GRZ|GTH|GUB|GUN|GVM|HAB|HAL|HAM|HAS|HBN|HBS|HCH|HDH|HDL|HEB|HEF|HEI|HER|HET|HGN|HGW|HHM|HIG|HIP|HMÜ|HOG|HOH|HOL|HOM|HOR|HÖS|HOT|HRO|HSK|HST|HVL|HWI|IGB|ILL|JÜL|KEH|KEL|KEM|KIB|KLE|KLZ|KÖN|KÖT|KÖZ|KRU|KÜN|KUS|KYF|LAN|LAU|LBS|LBZ|LDK|LDS|LEO|LER|LEV|LIB|LIF|LIP|LÖB|LOS|LRO|LSZ|LÜN|LUP|LWL|MAB|MAI|MAK|MAL|MED|MEG|MEI|MEK|MEL|MER|MET|MGH|MGN|MHL|MIL|MKK|MOD|MOL|MON|MOS|MSE|MSH|MSP|MST|MTK|MTL|MÜB|MÜR|MYK|MZG|NAB|NAI|NAU|NDH|NEA|NEB|NEC|NEN|NES|NEW|NMB|NMS|NOH|NOL|NOM|NOR|NVP|NWM|OAL|OBB|OBG|OCH|OHA|ÖHR|OHV|OHZ|OPR|OSL|OVI|OVL|OVP|PAF|PAN|PAR|PCH|PEG|PIR|PLÖ|PRÜ|QFT|QLB|RDG|REG|REH|REI|RID|RIE|ROD|ROF|ROK|ROL|ROS|ROT|ROW|RSL|RÜD|RÜG|SAB|SAD|SAN|SAW|SBG|SBK|SCZ|SDH|SDL|SDT|SEB|SEE|SEF|SEL|SFB|SFT|SGH|SHA|SHG|SHK|SHL|SIG|SIM|SLE|SLF|SLK|SLN|SLS|SLÜ|SLZ|SMÜ|SOB|SOG|SOK|SÖM|SON|SPB|SPN|SRB|SRO|STA|STB|STD|STE|STL|SUL|SÜW|SWA|SZB|TBB|TDO|TET|TIR|TÖL|TUT|UEM|UER|UFF|USI|VAI|VEC|VER|VIB|VIE|VIT|VOH|WAF|WAK|WAN|WAR|WAT|WBS|WDA|WEL|WEN|WER|WES|WHV|WIL|WIS|WIT|WIZ|WLG|WMS|WND|WOB|WOH|WOL|WOR|WOS|WRN|WSF|WST|WSW|WTL|WTM|WUG|WÜM|WUN|WUR|WZL|ZEL|ZIG)[- ]?(([A-Z][- ]?\d{1,4})|([A-Z]{2}[- ]?\d{1,3})))[- ]?(E|H)?$/.test(str);
    },
    "de-LI": function deLI(str) {
        return /^FL[- ]?\d{1,5}[UZ]?$/.test(str);
    },
    "en-IN": function enIN(str) {
        return /^[A-Z]{2}[ -]?[0-9]{1,2}(?:[ -]?[A-Z])(?:[ -]?[A-Z]*)?[ -]?[0-9]{4}$/.test(str);
    },
    "es-AR": function esAR(str) {
        return /^(([A-Z]{2} ?[0-9]{3} ?[A-Z]{2})|([A-Z]{3} ?[0-9]{3}))$/.test(str);
    },
    "fi-FI": function fiFI(str) {
        return /^(?=.{4,7})(([A-Z]{1,3}|[0-9]{1,3})[\s-]?([A-Z]{1,3}|[0-9]{1,5}))$/.test(str);
    },
    "hu-HU": function huHU(str) {
        return /^((((?!AAA)(([A-NPRSTVZWXY]{1})([A-PR-Z]{1})([A-HJ-NPR-Z]))|(A[ABC]I)|A[ABC]O|A[A-W]Q|BPI|BPO|UCO|UDO|XAO)-(?!000)\d{3})|(M\d{6})|((CK|DT|CD|HC|H[ABEFIKLMNPRSTVX]|MA|OT|R[A-Z]) \d{2}-\d{2})|(CD \d{3}-\d{3})|(C-(C|X) \d{4})|(X-(A|B|C) \d{4})|(([EPVZ]-\d{5}))|(S A[A-Z]{2} \d{2})|(SP \d{2}-\d{2}))$/.test(str);
    },
    "pt-BR": function ptBR(str) {
        return /^[A-Z]{3}[ -]?[0-9][A-Z][0-9]{2}|[A-Z]{3}[ -]?[0-9]{4}$/.test(str);
    },
    "pt-PT": function ptPT(str) {
        return /^([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})[ -·]?([A-Z]{2}|[0-9]{2})$/.test(str);
    },
    "sq-AL": function sqAL(str) {
        return /^[A-Z]{2}[- ]?((\d{3}[- ]?(([A-Z]{2})|T))|(R[- ]?\d{3}))$/.test(str);
    },
    "sv-SE": function svSE(str) {
        return /^[A-HJ-PR-UW-Z]{3} ?[\d]{2}[A-HJ-PR-UW-Z1-9]$|(^[A-ZÅÄÖ ]{2,7}$)/.test(str.trim());
    }
};
function isLicensePlate(str, locale) {
    (0, _assertString.default)(str);
    if (locale in validators) return validators[locale](str);
    else if (locale === "any") {
        for(var key in validators){
            /* eslint guard-for-in: 0 */ var validator = validators[key];
            if (validator(str)) return true;
        }
        return false;
    }
    throw new Error("Invalid locale '".concat(locale, "'"));
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"b2df968a48112117":"dGQqH"}],"doaet":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isStrongPassword;
var _merge = _interopRequireDefault(require("29e06d90a75827ea"));
var _assertString = _interopRequireDefault(require("d596cf5949cba1e2"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var upperCaseRegex = /^[A-Z]$/;
var lowerCaseRegex = /^[a-z]$/;
var numberRegex = /^[0-9]$/;
var symbolRegex = /^[-#!$@£%^&*()_+|~=`{}\[\]:";'<>?,.\/ ]$/;
var defaultOptions = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: false,
    pointsPerUnique: 1,
    pointsPerRepeat: 0.5,
    pointsForContainingLower: 10,
    pointsForContainingUpper: 10,
    pointsForContainingNumber: 10,
    pointsForContainingSymbol: 10
};
/* Counts number of occurrences of each char in a string
 * could be moved to util/ ?
*/ function countChars(str) {
    var result = {};
    Array.from(str).forEach(function(char) {
        var curVal = result[char];
        if (curVal) result[char] += 1;
        else result[char] = 1;
    });
    return result;
}
/* Return information about a password */ function analyzePassword(password) {
    var charMap = countChars(password);
    var analysis = {
        length: password.length,
        uniqueChars: Object.keys(charMap).length,
        uppercaseCount: 0,
        lowercaseCount: 0,
        numberCount: 0,
        symbolCount: 0
    };
    Object.keys(charMap).forEach(function(char) {
        /* istanbul ignore else */ if (upperCaseRegex.test(char)) analysis.uppercaseCount += charMap[char];
        else if (lowerCaseRegex.test(char)) analysis.lowercaseCount += charMap[char];
        else if (numberRegex.test(char)) analysis.numberCount += charMap[char];
        else if (symbolRegex.test(char)) analysis.symbolCount += charMap[char];
    });
    return analysis;
}
function scorePassword(analysis, scoringOptions) {
    var points = 0;
    points += analysis.uniqueChars * scoringOptions.pointsPerUnique;
    points += (analysis.length - analysis.uniqueChars) * scoringOptions.pointsPerRepeat;
    if (analysis.lowercaseCount > 0) points += scoringOptions.pointsForContainingLower;
    if (analysis.uppercaseCount > 0) points += scoringOptions.pointsForContainingUpper;
    if (analysis.numberCount > 0) points += scoringOptions.pointsForContainingNumber;
    if (analysis.symbolCount > 0) points += scoringOptions.pointsForContainingSymbol;
    return points;
}
function isStrongPassword(str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    (0, _assertString.default)(str);
    var analysis = analyzePassword(str);
    options = (0, _merge.default)(options || {}, defaultOptions);
    if (options.returnScore) return scorePassword(analysis, options);
    return analysis.length >= options.minLength && analysis.lowercaseCount >= options.minLowercase && analysis.uppercaseCount >= options.minUppercase && analysis.numberCount >= options.minNumbers && analysis.symbolCount >= options.minSymbols;
}
module.exports = exports.default;
module.exports.default = exports.default;

},{"29e06d90a75827ea":"c806a","d596cf5949cba1e2":"dGQqH"}],"huZFv":[function(require,module,exports) {
"use strict";
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isVAT;
exports.vatMatchers = void 0;
var _assertString = _interopRequireDefault(require("bef829e803e114f9"));
var algorithms = _interopRequireWildcard(require("83803936e2b74d1f"));
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var PT = function PT(str) {
    var match = str.match(/^(PT)?(\d{9})$/);
    if (!match) return false;
    var tin = match[2];
    var checksum = 11 - algorithms.reverseMultiplyAndSum(tin.split("").slice(0, 8).map(function(a) {
        return parseInt(a, 10);
    }), 9) % 11;
    if (checksum > 9) return parseInt(tin[8], 10) === 0;
    return checksum === parseInt(tin[8], 10);
};
var vatMatchers = {
    /**
   * European Union VAT identification numbers
   */ AT: function AT(str) {
        return /^(AT)?U\d{8}$/.test(str);
    },
    BE: function BE(str) {
        return /^(BE)?\d{10}$/.test(str);
    },
    BG: function BG(str) {
        return /^(BG)?\d{9,10}$/.test(str);
    },
    HR: function HR(str) {
        return /^(HR)?\d{11}$/.test(str);
    },
    CY: function CY(str) {
        return /^(CY)?\w{9}$/.test(str);
    },
    CZ: function CZ(str) {
        return /^(CZ)?\d{8,10}$/.test(str);
    },
    DK: function DK(str) {
        return /^(DK)?\d{8}$/.test(str);
    },
    EE: function EE(str) {
        return /^(EE)?\d{9}$/.test(str);
    },
    FI: function FI(str) {
        return /^(FI)?\d{8}$/.test(str);
    },
    FR: function FR(str) {
        return /^(FR)?\w{2}\d{9}$/.test(str);
    },
    DE: function DE(str) {
        return /^(DE)?\d{9}$/.test(str);
    },
    EL: function EL(str) {
        return /^(EL)?\d{9}$/.test(str);
    },
    HU: function HU(str) {
        return /^(HU)?\d{8}$/.test(str);
    },
    IE: function IE(str) {
        return /^(IE)?\d{7}\w{1}(W)?$/.test(str);
    },
    IT: function IT(str) {
        return /^(IT)?\d{11}$/.test(str);
    },
    LV: function LV(str) {
        return /^(LV)?\d{11}$/.test(str);
    },
    LT: function LT(str) {
        return /^(LT)?\d{9,12}$/.test(str);
    },
    LU: function LU(str) {
        return /^(LU)?\d{8}$/.test(str);
    },
    MT: function MT(str) {
        return /^(MT)?\d{8}$/.test(str);
    },
    NL: function NL(str) {
        return /^(NL)?\d{9}B\d{2}$/.test(str);
    },
    PL: function PL(str) {
        return /^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(str);
    },
    PT: PT,
    RO: function RO(str) {
        return /^(RO)?\d{2,10}$/.test(str);
    },
    SK: function SK(str) {
        return /^(SK)?\d{10}$/.test(str);
    },
    SI: function SI(str) {
        return /^(SI)?\d{8}$/.test(str);
    },
    ES: function ES(str) {
        return /^(ES)?\w\d{7}[A-Z]$/.test(str);
    },
    SE: function SE(str) {
        return /^(SE)?\d{12}$/.test(str);
    },
    /**
   * VAT numbers of non-EU countries
   */ AL: function AL(str) {
        return /^(AL)?\w{9}[A-Z]$/.test(str);
    },
    MK: function MK(str) {
        return /^(MK)?\d{13}$/.test(str);
    },
    AU: function AU(str) {
        return /^(AU)?\d{11}$/.test(str);
    },
    BY: function BY(str) {
        return /^(УНП )?\d{9}$/.test(str);
    },
    CA: function CA(str) {
        return /^(CA)?\d{9}$/.test(str);
    },
    IS: function IS(str) {
        return /^(IS)?\d{5,6}$/.test(str);
    },
    IN: function IN(str) {
        return /^(IN)?\d{15}$/.test(str);
    },
    ID: function ID(str) {
        return /^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(str);
    },
    IL: function IL(str) {
        return /^(IL)?\d{9}$/.test(str);
    },
    KZ: function KZ(str) {
        return /^(KZ)?\d{9}$/.test(str);
    },
    NZ: function NZ(str) {
        return /^(NZ)?\d{9}$/.test(str);
    },
    NG: function NG(str) {
        return /^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(str);
    },
    NO: function NO(str) {
        return /^(NO)?\d{9}MVA$/.test(str);
    },
    PH: function PH(str) {
        return /^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(str);
    },
    RU: function RU(str) {
        return /^(RU)?(\d{10}|\d{12})$/.test(str);
    },
    SM: function SM(str) {
        return /^(SM)?\d{5}$/.test(str);
    },
    SA: function SA(str) {
        return /^(SA)?\d{15}$/.test(str);
    },
    RS: function RS(str) {
        return /^(RS)?\d{9}$/.test(str);
    },
    CH: function CH(str) {
        return /^(CH)?(\d{6}|\d{9}|(\d{3}.\d{3})|(\d{3}.\d{3}.\d{3}))(TVA|MWST|IVA)$/.test(str);
    },
    TR: function TR(str) {
        return /^(TR)?\d{10}$/.test(str);
    },
    UA: function UA(str) {
        return /^(UA)?\d{12}$/.test(str);
    },
    GB: function GB(str) {
        return /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(str);
    },
    UZ: function UZ(str) {
        return /^(UZ)?\d{9}$/.test(str);
    },
    /**
   * VAT numbers of Latin American countries
   */ AR: function AR(str) {
        return /^(AR)?\d{11}$/.test(str);
    },
    BO: function BO(str) {
        return /^(BO)?\d{7}$/.test(str);
    },
    BR: function BR(str) {
        return /^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(str);
    },
    CL: function CL(str) {
        return /^(CL)?\d{8}-\d{1}$/.test(str);
    },
    CO: function CO(str) {
        return /^(CO)?\d{10}$/.test(str);
    },
    CR: function CR(str) {
        return /^(CR)?\d{9,12}$/.test(str);
    },
    EC: function EC(str) {
        return /^(EC)?\d{13}$/.test(str);
    },
    SV: function SV(str) {
        return /^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(str);
    },
    GT: function GT(str) {
        return /^(GT)?\d{7}-\d{1}$/.test(str);
    },
    HN: function HN(str) {
        return /^(HN)?$/.test(str);
    },
    MX: function MX(str) {
        return /^(MX)?\w{3,4}\d{6}\w{3}$/.test(str);
    },
    NI: function NI(str) {
        return /^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(str);
    },
    PA: function PA(str) {
        return /^(PA)?$/.test(str);
    },
    PY: function PY(str) {
        return /^(PY)?\d{6,8}-\d{1}$/.test(str);
    },
    PE: function PE(str) {
        return /^(PE)?\d{11}$/.test(str);
    },
    DO: function DO(str) {
        return /^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(str);
    },
    UY: function UY(str) {
        return /^(UY)?\d{12}$/.test(str);
    },
    VE: function VE(str) {
        return /^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(str);
    }
};
exports.vatMatchers = vatMatchers;
function isVAT(str, countryCode) {
    (0, _assertString.default)(str);
    (0, _assertString.default)(countryCode);
    if (countryCode in vatMatchers) return vatMatchers[countryCode](str);
    throw new Error("Invalid country code: '".concat(countryCode, "'"));
}

},{"bef829e803e114f9":"dGQqH","83803936e2b74d1f":"1HfIt"}],"aqr4V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toastTimer", ()=>toastTimer);
var _sweetalert2 = require("sweetalert2");
var _sweetalert2Default = parcelHelpers.interopDefault(_sweetalert2);
const toastTimer = (icon, title, timer = 2000, text)=>(0, _sweetalert2Default.default).mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer,
        timerProgressBar: true,
        didOpen: (toast)=>{
            toast.addEventListener("mouseenter", (0, _sweetalert2Default.default).stopTimer);
            toast.addEventListener("mouseleave", (0, _sweetalert2Default.default).resumeTimer);
            // @ts-ignore
            toast.addEventListener("click", (0, _sweetalert2Default.default).close);
        }
    }).fire({
        icon,
        title,
        text
    });

},{"sweetalert2":"1HyFr","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}],"gRyEm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>NavbarComponent);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _lit = require("lit");
var _decorators = require("lit/decorators");
let NavbarComponent = class NavbarComponent extends (0, _lit.LitElement) {
    createRenderRoot() {
        return this;
    }
    render() {
        return (0, _lit.html)`
        <header style="margin-bottom: 30px;">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand">Navbar</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarDark"
                aria-controls="navbarDark"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
        </header>
      </div>
    `;
    }
};
NavbarComponent = (0, _tsDecorate._)([
    (0, _decorators.customElement)("navbar-component")
], NavbarComponent);

},{"@swc/helpers/_/_ts_decorate":"iH05j","lit":"4antt","lit/decorators":"bCPKi","@parcel/transformer-js/src/esmodule-helpers.js":"5kx2K"}]},["dvrLD","7ZSs6"], "7ZSs6", "parcelRequire94c2")

//# sourceMappingURL=index.bcfa8452.js.map
