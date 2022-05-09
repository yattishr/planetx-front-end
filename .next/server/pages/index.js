(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js");
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react-ui */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cityofzion/neon-js */ "@cityofzion/neon-js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Sebatane Raphela\\Music\\web3\\neo-blockchain-betx\\pages\\index.tsx";

// disable eslint-disable-next-line for this file
// @ts-nocheck









const Index = () => {
  const NeoContractHash = "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5";
  const BettingManagerContractHash = "0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b";
  const brian = "NYKNWWmArjHD7uXFpuGeDH6ucYGpsf2s6Y"; // @ts-ignore

  const publishInvoke = async (rpcAddress, networkMagic, scriptHash, operation, args, account) => {
    const contract = new (_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_4___default().experimental.SmartContract)(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_4___default().u.HexString.fromHex(scriptHash), {
      networkMagic,
      rpcAddress,
      account
    });
    let result;

    try {
      result = await contract.invoke(operation, args);
    } catch (e) {
      console.log(e);
    }

    return result;
  };

  const {
    connected,
    getNetworks,
    address,
    invoke
  } = (0,_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet)(); // @ts-ignore

  const {
    0: account,
    1: setAccount
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
  const {
    0: walletNetwork,
    1: setWalletNetwork
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
  const {
    0: neoline,
    1: setNeoLine
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
  const {
    0: neolineN3,
    1: setNeoLine3
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
  const {
    0: blockHeight,
    1: setBlockHeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("78115");
  const fetchWalletNetwork = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(async () => {
    try {
      const result = await getNetworks();

      if (result.status === "success") {
        var _result$data;

        setWalletNetwork(((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.defaultNetwork) || null);
      }
    } catch (error) {
      console.error(error);
    }
  }, [getNetworks]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    initDap(); // balances

    if (connected) {
      fetchWalletNetwork();
      console.log("Account => ", neolineN3);

      if (neolineN3) {
        neolineN3.getAccount().then(account => {
          console.log("Account found conneted => ", account);
          setAccount(account);
        });
        neolineN3.getPublicKey().then(publicKeyData => {
          const {
            address,
            publicKey
          } = publicKeyData;
          console.log("Account address: " + address);
          console.log("Account public key: " + publicKey);
        });
        let scrpAddress;
        neolineN3.ScriptHashToAddress({
          scriptHash: "0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b"
        }).then(result => {
          const {
            address
          } = result;
          scrpAddress = address;
          console.log("address" + address);
        }).catch(error => {
          const {
            type,
            description,
            data
          } = error;

          switch (type) {
            case "NO_PROVIDER":
              console.log("No provider available.");
              break;

            case "MALFORMED_INPUT":
              console.log("Please check your input");
              break;

            default:
              // Not an expected error object.  Just write the error to the console.
              console.error(error);
              break;
          }
        }); // send gas token
      }
    } else {
      setWalletNetwork(null);
    }
  }, [connected, fetchWalletNetwork]);

  const placeBet = async () => {
    neolineN3.send({
      fromAddress: address,
      toAddress: brian,
      asset: "NEO",
      amount: "1",
      fee: "0.0001",
      broadcastOverride: false
    }).then(result => {
      console.log("Send transaction success!");
      console.log("Transaction ID: " + result.txid);
      console.log("RPC node URL: " + result.nodeURL);
    });
  };

  const initDap = async () => {
    const initN3Dapi = new Promise((resolve, reject) => {
      window.addEventListener("NEOLine.N3.EVENT.READY", () => {
        setNeoLine3(new NEOLineN3.Init());

        if (neolineN3) {
          resolve(neolineN3);
        } else {
          reject("N3 dAPI method failed to load.");
        }
      });
    });
    const initCommonDapi = new Promise((resolve, reject) => {
      window.addEventListener("NEOLine.NEO.EVENT.READY", () => {
        setNeoLine(new NEOLine.Init());

        if (neoline) {
          resolve(neoline);
        } else {
          reject("common dAPI method failed to load.");
        }
      });
    });
    initCommonDapi.then(() => {
      console.log("The common dAPI method is loaded.");
      return initN3Dapi;
    }).then(() => {
      console.log("The N3 dAPI method is loaded.");
    }).catch(err => {
      console.log(err);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "/main.css",
        className: "jsx-1648730631"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("nav", {
      className: "jsx-1648730631" + " " + "relative container mx-auto p-2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "jsx-1648730631" + " " + "pt-2 py-6 flex flex-row justify-between items-center ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: "img/LOGO.png",
              height: "100",
              width: "100",
              alt: "",
              className: "jsx-1648730631"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
              className: "jsx-1648730631" + " " + "lg:text-5xl md:text-5xl text-white font-bold  ",
              children: "Planet X"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "hidden space-x-6 md:flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "jsx-1648730631" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/games",
              children: "Games"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 5
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "jsx-1648730631" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/portfolio",
              children: "Portfolio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          id: "menu-btn",
          className: "jsx-1648730631" + " " + "block hamburger md:hidden focus:outline-none focus:text-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: "jsx-1648730631" + " " + "hamburger-top bg-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: "jsx-1648730631" + " " + "hamburger-middle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: "jsx-1648730631" + " " + "hamburger-bottom"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "md:hidden",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          id: "menu",
          className: "jsx-1648730631" + " " + "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      className: "jsx-1648730631"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      id: "hero",
      className: "jsx-1648730631",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "jsx-1648730631" + " " + "md:w-1/2 flex flex-col space-y-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: "img/LOGO.png",
              alt: "",
              className: "jsx-1648730631"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + " md:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
            src: "img/right_image.png",
            alt: "",
            className: "jsx-1648730631"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      id: "features",
      className: "jsx-1648730631",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "container  flex flex-col items-center justify-center px-6 mx-auto mt-2  md:space-y-0 md:flex-row middle",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_rentfuse_labs_neo_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__.WalletMultiButton, {
          style: {
            backgroundColor: "#DC2984"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      id: "testimonials",
      className: "jsx-1648730631",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "max-w-6xl px-5 mx-auto mt-32 text-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "flex flex-col mt-24 md:flex-row md:space-x-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "jsx-1648730631" + " " + "my-16 flex flex-col items-center justify-center min-w-full ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "jsx-1648730631" + " " + "text-5xl text-white font-bold subpixel-antialiased py-4 tracking-widest",
              children: "Trending"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("table", {
              className: "jsx-1648730631" + " " + "min-w-full border border-slate-800",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("thead", {
                className: "jsx-1648730631" + " " + "border-b bg-[#B227CA] ",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
                  className: "jsx-1648730631",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold  text-white px-6 py-4 text-left",
                    children: "Rank"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold  text-white px-6 py-4 text-left",
                    children: "Game"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 274,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Game Names"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Date/Time"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 286,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "24 hours"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 292,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 266,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tbody", {
                className: "jsx-1648730631" + " " + "bg-[#15174A]   ",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 303,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 302,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/cs.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 306,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 305,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 308,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 311,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: ["400+", connected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      onClick: placeBet,
                      className: "jsx-1648730631" + " " + "btn btn-success",
                      children: ["Place Bet", " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 317,
                      columnNumber: 25
                    }, undefined) : null]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 314,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 301,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 325,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 324,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/dota.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 328,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 330,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 333,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "400+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 336,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 323,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/down.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 342,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 341,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/freefire.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 345,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 344,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Free Fire - World Series"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 347,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Oct 15, 2022 4:00 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 350,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "50+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 353,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 340,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/down.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 359,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 358,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/honor.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 362,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 361,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "KOG - KPL Spring Playoffs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 364,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Nov 05, 2022 2:30 AM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 367,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "100+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 370,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 357,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 376,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 375,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/legends.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 379,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 378,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "LOL - EU Masters Spring"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 381,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 384,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "25+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 387,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 374,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 265,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1648730631",
      children: ".container.jsx-1648730631{padding:0 2rem;}.main.jsx-1648730631{min-height:100vh;padding:4rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-1648730631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;padding:2rem 0;border-top:1px solid #eaeaea;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-1648730631 a.jsx-1648730631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.title.jsx-1648730631 a.jsx-1648730631{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1648730631 a.jsx-1648730631:hover,.title.jsx-1648730631 a.jsx-1648730631:focus,.title.jsx-1648730631 a.jsx-1648730631:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-1648730631{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-1648730631,.description.jsx-1648730631{text-align:center;}.description.jsx-1648730631{margin:4rem 0;line-height:1.5;font-size:1.5rem;}.code.jsx-1648730631{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-1648730631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;}.card.jsx-1648730631{margin:1rem;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;max-width:300px;}.card.jsx-1648730631:hover,.card.jsx-1648730631:focus,.card.jsx-1648730631:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1648730631 h2.jsx-1648730631{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1648730631 p.jsx-1648730631{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-1648730631{height:1em;margin-left:0.5rem;}@media (max-width:600px){.grid.jsx-1648730631{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.wallet-buttons.jsx-1648730631{padding-top:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2ViYXRhbmUgUmFwaGVsYVxcTXVzaWNcXHdlYjNcXG5lby1ibG9ja2NoYWluLWJldHhcXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNllrQixBQUcwQixBQUlFLEFBVUosQUFTQSxBQU9DLEFBT1ksQUFJakIsQUFPUyxBQUlKLEFBTUssQUFTTixBQVFELEFBY0UsQUFLSSxBQUtULEFBTUUsQUFNRSxBQU1JLFNBM0VBLEFBMERDLEVBTUMsQUFNSyxDQXBDVCxFQTdDTSxBQXNCTCxBQXFDSyxDQXpGdkIsRUFJaUIsQUFpSEYsQ0FyRWYsQUE4Q21CLENBcENDLE9BaEJILENBa0NDLEFBd0JBLEdBL0NDLEFBcURuQixFQXJHUyxHQXFGVCxBQUtBLEVBcENrQixJQWhCbEIsRUFrQ2dCLEFBd0JoQixJQS9DQSxNQU1tQixJQWtCSSxHQXpDdkIsSUFOQSxDQXpCZSxLQXdEdUQsSUFoRDdELEFBU2dCLEFBNENKLGVBNkNuQixFQU1zQixnQkF2R1AsQUFnRVUsZUEvREksVUFnRVYsT0F6RUcsWUFVQyxBQWdFOEIsZ0JBYjlCLEVBbURkLElBL0ZVLEtBZ0dyQixhQXpEQSwwQkF2RHlCLGlDQVVKLGFBZ0VILEdBekRKLEFBNENHLGFBY2pCLHFDQTFFcUIsT0E2REgsY0E1Q2xCLEVBNkNBLElBcERBLGtFQVRBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2ViYXRhbmUgUmFwaGVsYVxcTXVzaWNcXHdlYjNcXG5lby1ibG9ja2NoYWluLWJldHhcXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gZGlzYWJsZSBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZm9yIHRoaXMgZmlsZVxyXG4vLyBAdHMtbm9jaGVja1xyXG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgd2FpdFR4LFxyXG4gIFdpdG5lc3NTY29wZSxcclxuICBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcixcclxufSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBXYWxsZXREaXNjb25uZWN0QnV0dG9uLFxyXG4gIFdhbGxldE11bHRpQnV0dG9uLFxyXG59IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcclxuaW1wb3J0IHsgbmVvbGluZU4zIH0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lXCI7XHJcbmltcG9ydCB7IHUsIHNjLCB3YWxsZXQgfSBmcm9tIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IE5lb24gZnJvbSBcIkBjaXR5b2Z6aW9uL25lb24tanNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG5lbzNEYXBpIGZyb20gXCJuZW8zLWRhcGlcIjtcclxuXHJcbmNvbnN0IEluZGV4OiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBOZW9Db250cmFjdEhhc2ggPSBcIjB4ZWY0MDczYTBmMmIzMDVhMzhlYzQwNTBlNGQzZDI4YmM0MGVhNjNmNVwiO1xyXG4gIGNvbnN0IEJldHRpbmdNYW5hZ2VyQ29udHJhY3RIYXNoID1cclxuICAgIFwiMHg3YTA2ZTQwY2QwOGMwYTg4NzdjMmQ2ZDBhNDk3NGY3ZGJlOWIyYjdiXCI7XHJcblxyXG4gIGNvbnN0IGJyaWFuID0gXCJOWUtOV1dtQXJqSEQ3dVhGcHVHZURINnVjWUdwc2YyczZZXCI7XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25zdCBwdWJsaXNoSW52b2tlID0gYXN5bmMgKFxyXG4gICAgcnBjQWRkcmVzcyxcclxuICAgIG5ldHdvcmtNYWdpYyxcclxuICAgIHNjcmlwdEhhc2gsXHJcbiAgICBvcGVyYXRpb24sXHJcbiAgICBhcmdzLFxyXG4gICAgYWNjb3VudFxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgTmVvbi5leHBlcmltZW50YWwuU21hcnRDb250cmFjdChcclxuICAgICAgTmVvbi51LkhleFN0cmluZy5mcm9tSGV4KHNjcmlwdEhhc2gpLFxyXG4gICAgICB7XHJcbiAgICAgICAgbmV0d29ya01hZ2ljLFxyXG4gICAgICAgIHJwY0FkZHJlc3MsXHJcbiAgICAgICAgYWNjb3VudCxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuaW52b2tlKG9wZXJhdGlvbiwgYXJncyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBjb25uZWN0ZWQsIGdldE5ldHdvcmtzLCBhZGRyZXNzLCBpbnZva2UgfSA9IHVzZVdhbGxldCgpO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBbd2FsbGV0TmV0d29yaywgc2V0V2FsbGV0TmV0d29ya10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtuZW9saW5lLCBzZXROZW9MaW5lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW25lb2xpbmVOMywgc2V0TmVvTGluZTNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbYmxvY2tIZWlnaHQsIHNldEJsb2NrSGVpZ2h0XSA9IHVzZVN0YXRlKFwiNzgxMTVcIik7XHJcbiAgY29uc3QgZmV0Y2hXYWxsZXROZXR3b3JrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0TmV0d29ya3MoKTtcclxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgc2V0V2FsbGV0TmV0d29yayhyZXN1bHQuZGF0YT8uZGVmYXVsdE5ldHdvcmsgfHwgbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtnZXROZXR3b3Jrc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdERhcCgpO1xyXG5cclxuICAgIC8vIGJhbGFuY2VzXHJcblxyXG4gICAgaWYgKGNvbm5lY3RlZCkge1xyXG4gICAgICBmZXRjaFdhbGxldE5ldHdvcmsoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50ID0+IFwiLCBuZW9saW5lTjMpO1xyXG5cclxuICAgICAgaWYgKG5lb2xpbmVOMykge1xyXG4gICAgICAgIG5lb2xpbmVOMy5nZXRBY2NvdW50KCkudGhlbigoYWNjb3VudCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IGZvdW5kIGNvbm5ldGVkID0+IFwiLCBhY2NvdW50KTtcclxuXHJcbiAgICAgICAgICBzZXRBY2NvdW50KGFjY291bnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBuZW9saW5lTjMuZ2V0UHVibGljS2V5KCkudGhlbigocHVibGljS2V5RGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBhZGRyZXNzLCBwdWJsaWNLZXkgfSA9IHB1YmxpY0tleURhdGE7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IGFkZHJlc3M6IFwiICsgYWRkcmVzcyk7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IHB1YmxpYyBrZXk6IFwiICsgcHVibGljS2V5KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgc2NycEFkZHJlc3M7XHJcbiAgICAgICAgbmVvbGluZU4zXHJcbiAgICAgICAgICAuU2NyaXB0SGFzaFRvQWRkcmVzcyh7XHJcbiAgICAgICAgICAgIHNjcmlwdEhhc2g6IFwiMHg3YTA2ZTQwY2QwOGMwYTg4NzdjMmQ2ZDBhNDk3NGY3ZGJlOWIyYjdiXCIsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgc2NycEFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZHJlc3NcIiArIGFkZHJlc3MpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyB0eXBlLCBkZXNjcmlwdGlvbiwgZGF0YSB9ID0gZXJyb3I7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJOT19QUk9WSURFUlwiOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBwcm92aWRlciBhdmFpbGFibGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBcIk1BTEZPUk1FRF9JTlBVVFwiOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgY2hlY2sgeW91ciBpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgYW4gZXhwZWN0ZWQgZXJyb3Igb2JqZWN0LiAgSnVzdCB3cml0ZSB0aGUgZXJyb3IgdG8gdGhlIGNvbnNvbGUuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2VuZCBnYXMgdG9rZW5cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0V2FsbGV0TmV0d29yayhudWxsKTtcclxuICAgIH1cclxuICB9LCBbY29ubmVjdGVkLCBmZXRjaFdhbGxldE5ldHdvcmtdKTtcclxuXHJcblxyXG4gIGNvbnN0IHBsYWNlQmV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbmVvbGluZU4zXHJcbiAgICAgIC5zZW5kKHtcclxuICAgICAgICBmcm9tQWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgICB0b0FkZHJlc3M6IGJyaWFuLFxyXG4gICAgICAgIGFzc2V0OiBcIk5FT1wiLFxyXG4gICAgICAgIGFtb3VudDogXCIxXCIsXHJcbiAgICAgICAgZmVlOiBcIjAuMDAwMVwiLFxyXG4gICAgICAgIGJyb2FkY2FzdE92ZXJyaWRlOiBmYWxzZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZCB0cmFuc2FjdGlvbiBzdWNjZXNzIVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRyYW5zYWN0aW9uIElEOiBcIiArIHJlc3VsdC50eGlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJQQyBub2RlIFVSTDogXCIgKyByZXN1bHQubm9kZVVSTCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXREYXAgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0TjNEYXBpID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIk5FT0xpbmUuTjMuRVZFTlQuUkVBRFlcIiwgKCkgPT4ge1xyXG4gICAgICAgIHNldE5lb0xpbmUzKG5ldyBORU9MaW5lTjMuSW5pdCgpKTtcclxuICAgICAgICBpZiAobmVvbGluZU4zKSB7XHJcbiAgICAgICAgICByZXNvbHZlKG5lb2xpbmVOMyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChcIk4zIGRBUEkgbWV0aG9kIGZhaWxlZCB0byBsb2FkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaW5pdENvbW1vbkRhcGkgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiTkVPTGluZS5ORU8uRVZFTlQuUkVBRFlcIiwgKCkgPT4ge1xyXG4gICAgICAgIHNldE5lb0xpbmUobmV3IE5FT0xpbmUuSW5pdCgpKTtcclxuICAgICAgICBpZiAobmVvbGluZSkge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZW9saW5lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KFwiY29tbW9uIGRBUEkgbWV0aG9kIGZhaWxlZCB0byBsb2FkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaW5pdENvbW1vbkRhcGlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGNvbW1vbiBkQVBJIG1ldGhvZCBpcyBsb2FkZWQuXCIpO1xyXG4gICAgICAgIHJldHVybiBpbml0TjNEYXBpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgTjMgZEFQSSBtZXRob2QgaXMgbG9hZGVkLlwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvbWFpbi5jc3NcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgY29udGFpbmVyIG14LWF1dG8gcC0yIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgcHktNiBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvTE9HTy5wbmdcIiBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQtNXhsIG1kOnRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgIFBsYW5ldCBYXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc3BhY2UteC02IG1kOmZsZXhcIj5cclxuXHRcdCAgPGRpdiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWRhcmtHcmF5aXNoQmx1ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ2FtZXNcIj5HYW1lczwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1kYXJrR3JheWlzaEJsdWUgdGV4dC13aGl0ZSBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BvcnRmb2xpb1wiPlBvcnRmb2xpbzwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGlkPVwibWVudS1idG5cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoYW1idXJnZXIgbWQ6aGlkZGVuIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLXRvcCBiZy13aGl0ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLW1pZGRsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJvdHRvbVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD1cIm1lbnVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgaGlkZGVuIHNlbGYtZW5kIHB5LTggbXQtMTAgc3BhY2UteS02IGZvbnQtYm9sZCBiZy13aGl0ZSBzbTp3LWF1dG8gc206c2VsZi1jZW50ZXIgbGVmdC02IHJpZ2h0LTYgZHJvcC1zaGFkb3ctbWRcIlxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICAgIDxzZWN0aW9uPjwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJoZXJvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbC1yZXZlcnNlIGl0ZW1zLWNlbnRlciBweC02IG14LWF1dG8gbXQtMTAgc3BhY2UteS0wIG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMiBmbGV4IGZsZXgtY29sIHNwYWNlLXktMTJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9MT0dPLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWQ6dy0xLzJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvcmlnaHRfaW1hZ2UucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD1cImZlYXR1cmVzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgbXgtYXV0byBtdC0yICBtZDpzcGFjZS15LTAgbWQ6ZmxleC1yb3cgbWlkZGxlXCI+XHJcbiAgICAgICAgICA8V2FsbGV0TXVsdGlCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0RDMjk4NFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJ0ZXN0aW1vbmlhbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBweC01IG14LWF1dG8gbXQtMzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0yNCBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4tdy1mdWxsIFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkIHN1YnBpeGVsLWFudGlhbGlhc2VkIHB5LTQgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICBUcmVuZGluZ1xyXG4gICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJib3JkZXItYiBiZy1bI0IyMjdDQV0gXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkICB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFJhbmtcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEdhbWUgTmFtZXNcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEYXRlL1RpbWVcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAyNCBob3Vyc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLVsjMTUxNzRBXSAgIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2NzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDUzpHTyAtIFBHTCBNYWpvciBBbnR3ZXJwXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgNDAwK1xyXG4gICAgICAgICAgICAgICAgICAgICAge2Nvbm5lY3RlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwbGFjZUJldH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhY2UgQmV0e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy91cC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG90YS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ1M6R08gLSBQR0wgTWFqb3IgQW50d2VycFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDQwMCtcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG93bi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZnJlZWZpcmUucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEZyZWUgRmlyZSAtIFdvcmxkIFNlcmllc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgT2N0IDE1LCAyMDIyIDQ6MDAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDUwK1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3duLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9ob25vci5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgS09HIC0gS1BMIFNwcmluZyBQbGF5b2Zmc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTm92IDA1LCAyMDIyIDI6MzAgQU1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDEwMCtcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xlZ2VuZHMucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIExPTCAtIEVVIE1hc3RlcnMgU3ByaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMjUrXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1haW4ge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyIGEge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGE6aG92ZXIsXHJcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXHJcbiAgICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlLFxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgbWFyZ2luOiA0cmVtIDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29kZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXHJcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBoMiB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53YWxsZXQtYnV0dG9ucyB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZ2FwOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Sebatane Raphela\\\\Music\\\\web3\\\\neo-blockchain-betx\\\\pages\\\\index.tsx */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/adapter.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/adapter.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventEmitter": () => (/* reexport default from dynamic */ eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "WitnessScope": () => (/* binding */ WitnessScope),
/* harmony export */   "BaseWalletAdapter": () => (/* binding */ BaseWalletAdapter)
/* harmony export */ });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "eventemitter3");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);


var WitnessScope;

(function (WitnessScope) {
  WitnessScope[WitnessScope["None"] = 0] = "None";
  WitnessScope[WitnessScope["CalledByEntry"] = 1] = "CalledByEntry";
  WitnessScope[WitnessScope["CustomContracts"] = 16] = "CustomContracts";
  WitnessScope[WitnessScope["CustomGroups"] = 32] = "CustomGroups";
  WitnessScope[WitnessScope["Global"] = 128] = "Global";
})(WitnessScope || (WitnessScope = {}));

class BaseWalletAdapter extends (eventemitter3__WEBPACK_IMPORTED_MODULE_0___default()) {}

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/errors.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/errors.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletError": () => (/* binding */ WalletError),
/* harmony export */   "WalletNotFoundError": () => (/* binding */ WalletNotFoundError),
/* harmony export */   "WalletNotInstalledError": () => (/* binding */ WalletNotInstalledError),
/* harmony export */   "WalletNotReadyError": () => (/* binding */ WalletNotReadyError),
/* harmony export */   "WalletConnectionError": () => (/* binding */ WalletConnectionError),
/* harmony export */   "WalletDisconnectedError": () => (/* binding */ WalletDisconnectedError),
/* harmony export */   "WalletDisconnectionError": () => (/* binding */ WalletDisconnectionError),
/* harmony export */   "WalletAccountError": () => (/* binding */ WalletAccountError),
/* harmony export */   "WalletNotConnectedError": () => (/* binding */ WalletNotConnectedError),
/* harmony export */   "WalletTimeoutError": () => (/* binding */ WalletTimeoutError),
/* harmony export */   "WalletWindowBlockedError": () => (/* binding */ WalletWindowBlockedError),
/* harmony export */   "WalletWindowClosedError": () => (/* binding */ WalletWindowClosedError),
/* harmony export */   "WalletMethodNotSupportedError": () => (/* binding */ WalletMethodNotSupportedError)
/* harmony export */ });
class WalletError extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(message, error) {
    super(message);
    this.error = error;
  }

}
class WalletNotFoundError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotFoundError';
  }

}
class WalletNotInstalledError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotInstalledError';
  }

}
class WalletNotReadyError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotReadyError';
  }

}
class WalletConnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletConnectionError';
  }

}
class WalletDisconnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectedError';
  }

}
class WalletDisconnectionError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletDisconnectionError';
  }

}
class WalletAccountError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletAccountError';
  }

}
class WalletNotConnectedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotConnectedError';
  }

}
class WalletTimeoutError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletTimeoutError';
  }

}
class WalletWindowBlockedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowBlockedError';
  }

}
class WalletWindowClosedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletWindowClosedError';
  }

}
class WalletMethodNotSupportedError extends WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletMethodNotSupportedError';
  }

}

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/adapter.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _adapter__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _adapter__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/errors.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _errors__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _errors__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _poll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poll */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/poll.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _poll__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _poll__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _wait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wait */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/wait.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _wait__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _wait__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);





/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/poll.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/poll.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "poll": () => (/* binding */ poll),
/* harmony export */   "pollUntilReady": () => (/* binding */ pollUntilReady)
/* harmony export */ });
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
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
};

function poll(callback, interval, count) {
  if (count > 0) {
    setTimeout(() => __awaiter(this, void 0, void 0, function* () {
      const done = yield callback();
      if (!done) poll(callback, interval, count - 1);
    }), interval);
  }
}
function pollUntilReady(adapter, pollInterval, pollCount) {
  poll(() => {
    const {
      ready
    } = adapter;

    if (ready) {
      if (!adapter.emit('ready')) {
        console.warn(`${adapter.constructor.name} is ready but no listener was registered`);
      }
    }

    return ready;
  }, pollInterval, pollCount);
}

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/wait.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/wait.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitTx": () => (/* binding */ waitTx)
/* harmony export */ });
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cityofzion/neon-js */ "@cityofzion/neon-js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
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
};


function waitTx(rpcAddress, txId, readFrequency = 1000, timeout = 30000) {
  return __awaiter(this, void 0, void 0, function* () {
    const start = Date.now();
    const rpcClient = new _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_0__.rpc.RPCClient(rpcAddress); // Wait until the transaction can be found, if it's found it means it's ok because it has been inserted in a block
    // Otherwise trigger the timeout meaning that it's not inserted in the block (average block time 15s)

    let transaction = null;

    do {
      // Throw an error if the timeout has passed
      if (Date.now() - start > timeout) throw new Error();

      try {
        // Get the transaction from the rpcClient
        transaction = yield rpcClient.getRawTransaction(txId);
      } catch (e) {
        // Sleep for the next cycle
        yield new Promise(resolve => setTimeout(resolve, readFrequency));
      }
    } while (!transaction);
  });
}

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wallet_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet-button */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-button.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _wallet_button__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _wallet_button__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _wallet_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-collapse */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-collapse.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _wallet_collapse__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _wallet_collapse__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _wallet_connect_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet-connect-button */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-connect-button.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _wallet_connect_button__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _wallet_connect_button__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _wallet_disconnect_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet-disconnect-button */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-disconnect-button.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _wallet_disconnect_button__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _wallet_disconnect_button__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _wallet_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet-icon */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-icon.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _wallet_icon__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _wallet_icon__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _wallet_list_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet-list-item */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-list-item.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _wallet_list_item__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _wallet_list_item__WEBPACK_IMPORTED_MODULE_5__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _wallet_modal_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet-modal-button */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-modal-button.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _wallet_modal_button__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _wallet_modal_button__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _wallet_modal_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wallet-modal-provider */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-modal-provider.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _wallet_modal_provider__WEBPACK_IMPORTED_MODULE_7__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _wallet_modal_provider__WEBPACK_IMPORTED_MODULE_7__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _wallet_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wallet-modal */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-modal.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _wallet_modal__WEBPACK_IMPORTED_MODULE_8__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _wallet_modal__WEBPACK_IMPORTED_MODULE_8__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _wallet_multi_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wallet-multi-button */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-multi-button.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _wallet_multi_button__WEBPACK_IMPORTED_MODULE_9__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _wallet_multi_button__WEBPACK_IMPORTED_MODULE_9__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);











/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-button.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-button.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletButton": () => (/* binding */ WalletButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const WalletButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function WalletButton({
  children,
  className,
  disabled,
  endIcon,
  startIcon,
  style,
  tabIndex,
  onClick
}) {
  const justifyContent = endIcon || startIcon ? 'space-between' : 'center';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `wallet-adapter-button ${className || ''}`,
    disabled: disabled,
    onClick: onClick,
    style: Object.assign({
      justifyContent
    }, style),
    tabIndex: tabIndex || 0,
    type: "button"
  }, startIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "wallet-adapter-button-start-icon"
  }, startIcon), children, endIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "wallet-adapter-button-end-icon"
  }, endIcon));
});

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-collapse.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-collapse.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletCollapse": () => (/* binding */ WalletCollapse)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const WalletCollapse = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function WalletCollapse({
  id,
  children,
  expanded = false
}) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const instant = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  const transition = 'height 250ms ease-out';

  const openCollapse = () => {
    const node = ref.current;
    if (!node) return;
    requestAnimationFrame(() => {
      node.style.height = node.scrollHeight + 'px';
    });
  };

  const closeCollapse = () => {
    const node = ref.current;
    if (!node) return;
    requestAnimationFrame(() => {
      node.style.height = node.offsetHeight + 'px';
      node.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        node.style.height = '0';
      });
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (expanded) {
      openCollapse();
    } else {
      closeCollapse();
    }
  }, [expanded]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const node = ref.current;
    if (!node) return;

    function handleComplete() {
      if (!node) return;
      node.style.overflow = expanded ? 'initial' : 'hidden';

      if (expanded) {
        node.style.height = 'auto';
      }
    }

    function handleTransitionEnd(event) {
      if (node && event.target === node && event.propertyName === 'height') {
        handleComplete();
      }
    }

    if (instant.current) {
      handleComplete();
      instant.current = false;
    }

    node.addEventListener('transitionend', handleTransitionEnd);
    return () => node.removeEventListener('transitionend', handleTransitionEnd);
  }, [expanded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    children: children,
    className: "wallet-adapter-collapse",
    id: id,
    ref: ref,
    role: "region",
    style: {
      height: 0,
      transition: instant.current ? undefined : transition
    }
  });
});

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-connect-button.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-connect-button.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletConnectButton": () => (/* binding */ WalletConnectButton)
/* harmony export */ });
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wallet_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-button */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-button.js");
/* harmony import */ var _wallet_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet-icon */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-icon.js");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const WalletConnectButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function WalletConnectButton(_a) {
  var {
    children,
    className,
    disabled,
    endIcon,
    startIcon,
    style,
    tabIndex,
    onClick
  } = _a,
      props = __rest(_a, ["children", "className", "disabled", "endIcon", "startIcon", "style", "tabIndex", "onClick"]);

  const {
    wallet,
    connect,
    connecting,
    connected
  } = (0,_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet)();
  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    if (onClick) onClick(event); // eslint-disable-next-line @typescript-eslint/no-empty-function

    if (!event.defaultPrevented) connect().catch(() => {});
  }, [onClick, connect]);
  const content = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (children) return children;
    if (connecting) return 'Connecting ...';
    if (connected) return 'Connected';
    if (wallet) return 'Connect';
    return 'Connect Wallet';
  }, [children, connecting, connected, wallet]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_button__WEBPACK_IMPORTED_MODULE_1__.WalletButton, Object.assign({
    className: "wallet-adapter-button-trigger",
    disabled: disabled || !wallet || connecting || connected,
    startIcon: wallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_icon__WEBPACK_IMPORTED_MODULE_2__.WalletIcon, {
      wallet: wallet
    }) : undefined,
    endIcon: endIcon,
    style: style,
    tabIndex: tabIndex,
    onClick: handleClick
  }, props), content);
});

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-disconnect-button.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-disconnect-button.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletDisconnectButton": () => (/* binding */ WalletDisconnectButton)
/* harmony export */ });
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wallet_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-button */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-button.js");
/* harmony import */ var _wallet_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet-icon */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-icon.js");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const WalletDisconnectButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function WalletDisconnectButton(_a) {
  var {
    children,
    className,
    disabled,
    endIcon,
    startIcon,
    style,
    tabIndex,
    onClick
  } = _a,
      props = __rest(_a, ["children", "className", "disabled", "endIcon", "startIcon", "style", "tabIndex", "onClick"]);

  const {
    wallet,
    disconnect,
    disconnecting
  } = (0,_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet)();
  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    if (onClick) onClick(event); // eslint-disable-next-line @typescript-eslint/no-empty-function

    if (!event.defaultPrevented) disconnect().catch(() => {});
  }, [onClick, disconnect]);
  const content = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (children) return children;
    if (disconnecting) return 'Disconnecting ...';
    if (wallet) return 'Disconnect';
    return 'Disconnect Wallet';
  }, [children, disconnecting, wallet]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_button__WEBPACK_IMPORTED_MODULE_1__.WalletButton, Object.assign({
    className: "wallet-adapter-button-trigger",
    disabled: disabled || !wallet,
    startIcon: wallet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_icon__WEBPACK_IMPORTED_MODULE_2__.WalletIcon, {
      wallet: wallet
    }) : undefined,
    endIcon: endIcon,
    style: style,
    tabIndex: tabIndex,
    onClick: handleClick
  }, props), content);
});

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-icon.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-icon.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletIcon": () => (/* binding */ WalletIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


const WalletIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function WalletIcon(_a) {
  var {
    wallet
  } = _a,
      props = __rest(_a, ["wallet"]);

  return wallet && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", Object.assign({
    src: wallet.icon,
    alt: `${wallet.name} icon`
  }, props));
});

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-list-item.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-list-item.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletListItem": () => (/* binding */ WalletListItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wallet_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-button */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-button.js");
/* harmony import */ var _wallet_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet-icon */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-icon.js");



const WalletListItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function WalletListItem({
  handleClick,
  tabIndex,
  wallet
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_button__WEBPACK_IMPORTED_MODULE_1__.WalletButton, {
    onClick: handleClick,
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_icon__WEBPACK_IMPORTED_MODULE_2__.WalletIcon, {
      wallet: wallet
    }),
    tabIndex: tabIndex
  }, wallet.name));
});

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-modal-button.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-modal-button.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletModalButton": () => (/* binding */ WalletModalButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wallet_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-button */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-button.js");
/* harmony import */ var _hooks_use_wallet_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-wallet-modal */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/hooks/use-wallet-modal.js");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const WalletModalButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function WalletModalButton(_a) {
  var {
    children = 'Select Wallet',
    onClick
  } = _a,
      props = __rest(_a, ["children", "onClick"]);

  const {
    visible,
    setVisible
  } = (0,_hooks_use_wallet_modal__WEBPACK_IMPORTED_MODULE_2__.useWalletModal)();
  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) setVisible(!visible);
  }, [onClick, setVisible, visible]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_button__WEBPACK_IMPORTED_MODULE_1__.WalletButton, Object.assign({
    className: "wallet-adapter-button-trigger",
    onClick: handleClick
  }, props), children);
});

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-modal-provider.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-modal-provider.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletModalProvider": () => (/* binding */ WalletModalProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_wallet_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-wallet-modal */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/hooks/use-wallet-modal.js");
/* harmony import */ var _wallet_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet-modal */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-modal.js");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const WalletModalProvider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function WalletModalProvider(_a) {
  var {
    children
  } = _a,
      props = __rest(_a, ["children"]);

  const {
    0: visible,
    1: setVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_hooks_use_wallet_modal__WEBPACK_IMPORTED_MODULE_1__.WalletModalContext.Provider, {
    value: {
      visible,
      setVisible
    }
  }, children, visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_modal__WEBPACK_IMPORTED_MODULE_2__.WalletModal, Object.assign({}, props)));
});

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-modal.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-modal.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletModal": () => (/* binding */ WalletModal)
/* harmony export */ });
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wallet_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet-button */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-button.js");
/* harmony import */ var _wallet_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet-collapse */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-collapse.js");
/* harmony import */ var _hooks_use_wallet_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-wallet-modal */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/hooks/use-wallet-modal.js");
/* harmony import */ var _wallet_list_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet-list-item */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-list-item.js");







const WalletModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function WalletModal({
  className = '',
  logo,
  featuredWallets = 3,
  container = 'body'
}) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    wallets,
    select
  } = (0,_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet)();
  const {
    setVisible
  } = (0,_hooks_use_wallet_modal__WEBPACK_IMPORTED_MODULE_4__.useWalletModal)();
  const {
    0: expanded,
    1: setExpanded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: fadeIn,
    1: setFadeIn
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: portal,
    1: setPortal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: featured,
    1: more
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [wallets.slice(0, featuredWallets), wallets.slice(featuredWallets)], [wallets, featuredWallets]);
  const hideModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setFadeIn(false);
    setTimeout(() => setVisible(false), 150);
  }, [setFadeIn, setVisible]);
  const handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    event.preventDefault();
    hideModal();
  }, [hideModal]);
  const handleWalletClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event, walletName) => {
    select(walletName);
    handleClose(event);
  }, [select, handleClose]);
  const handleCollapseClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setExpanded(!expanded), [setExpanded, expanded]);
  const handleTabKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    const node = ref.current;
    if (!node) return; // here we query all focusable elements

    const focusableElements = node.querySelectorAll('button');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      // if going backward by pressing tab and firstElement is active, shift focus to last focusable element
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      // if going forward by pressing tab and lastElement is active, shift focus to first focusable element
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }, [ref]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        hideModal();
      } else if (event.key === 'Tab') {
        handleTabKey(event);
      }
    }; // Get original overflow


    const {
      overflow
    } = window.getComputedStyle(document.body); // Hack to enable fade in animation after mount

    setTimeout(() => setFadeIn(true), 0); // Prevent scrolling on mount

    document.body.style.overflow = 'hidden'; // Listen for keydown events

    window.addEventListener('keydown', handleKeyDown, false);
    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [hideModal, handleTabKey]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => setPortal(document.querySelector(container)), [setPortal, container]);
  return portal && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-labelledby": "wallet-adapter-modal-title",
    "aria-modal": "true",
    className: `wallet-adapter-modal ${fadeIn && 'wallet-adapter-modal-fade-in'} ${className}`,
    ref: ref,
    role: "dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wallet-adapter-modal-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `wallet-adapter-modal-wrapper ${!logo && 'wallet-adapter-modal-wrapper-no-logo'}`
  }, logo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wallet-adapter-modal-logo-wrapper"
  }, typeof logo === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "logo",
    className: "wallet-adapter-modal-logo",
    src: logo
  }) : logo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "wallet-adapter-modal-title",
    id: "wallet-adapter-modal-title"
  }, "Connect Wallet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClose,
    className: "wallet-adapter-modal-button-close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    width: "14",
    height: "14"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "wallet-adapter-modal-list"
  }, featured.map(wallet => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_list_item__WEBPACK_IMPORTED_MODULE_5__.WalletListItem, {
    key: wallet.name,
    handleClick: event => handleWalletClick(event, wallet.name),
    wallet: wallet
  }))), more.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_collapse__WEBPACK_IMPORTED_MODULE_3__.WalletCollapse, {
    expanded: expanded,
    id: "wallet-adapter-modal-collapse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "wallet-adapter-modal-list"
  }, more.map(wallet => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_list_item__WEBPACK_IMPORTED_MODULE_5__.WalletListItem, {
    key: wallet.name,
    handleClick: event => handleWalletClick(event, wallet.name),
    tabIndex: expanded ? 0 : -1,
    wallet: wallet
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_button__WEBPACK_IMPORTED_MODULE_2__.WalletButton, {
    "aria-controls": "wallet-adapter-modal-collapse",
    "aria-expanded": expanded,
    className: `wallet-adapter-modal-collapse-button ${expanded && 'wallet-adapter-modal-collapse-button-active'}`,
    endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      width: "11",
      height: "6",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "m5.938 5.73 4.28-4.126a.915.915 0 0 0 0-1.322 1 1 0 0 0-1.371 0L5.253 3.736 1.659.272a1 1 0 0 0-1.371 0A.93.93 0 0 0 0 .932c0 .246.1.48.288.662l4.28 4.125a.99.99 0 0 0 1.37.01z"
    })),
    onClick: handleCollapseClick
  }, expanded ? 'Less' : 'More', " options")) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wallet-adapter-modal-overlay",
    onMouseDown: handleClose
  })), portal);
});

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-multi-button.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-multi-button.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletMultiButton": () => (/* binding */ WalletMultiButton)
/* harmony export */ });
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wallet_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-button */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-button.js");
/* harmony import */ var _hooks_use_wallet_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-wallet-modal */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/hooks/use-wallet-modal.js");
/* harmony import */ var _wallet_connect_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet-connect-button */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-connect-button.js");
/* harmony import */ var _wallet_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wallet-icon */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-icon.js");
/* harmony import */ var _wallet_modal_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet-modal-button */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/wallet-modal-button.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
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
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








const WalletMultiButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function WalletMultiButton(_a) {
  var {
    children
  } = _a,
      props = __rest(_a, ["children"]);

  const {
    address,
    wallet,
    disconnect
  } = (0,_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet)();
  const {
    setVisible
  } = (0,_hooks_use_wallet_modal__WEBPACK_IMPORTED_MODULE_2__.useWalletModal)();
  const {
    0: copied,
    1: setCopied
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: active,
    1: setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const _address = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => address, [address]);

  const content = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (children) return children;
    if (!wallet || !_address) return null;
    return _address;
  }, [children, wallet, _address]);
  const copyAddress = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
    if (_address) {
      yield navigator.clipboard.writeText(_address);
      setCopied(true);
      setTimeout(() => setCopied(false), 400);
    }
  }), [_address]);
  const openDropdown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setActive(true), [setActive]);
  const closeDropdown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setActive(false), [setActive]);
  const openModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setVisible(true);
    closeDropdown();
  }, [setVisible, closeDropdown]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const listener = event => {
      const node = ref.current; // Do nothing if clicking dropdown or its descendants

      if (!node || node.contains(event.target)) return;
      closeDropdown();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, closeDropdown]);
  if (!wallet) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_modal_button__WEBPACK_IMPORTED_MODULE_5__.WalletModalButton, Object.assign({}, props), children);
  if (!_address) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_connect_button__WEBPACK_IMPORTED_MODULE_3__.WalletConnectButton, Object.assign({}, props), children);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wallet-adapter-dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_button__WEBPACK_IMPORTED_MODULE_1__.WalletButton, Object.assign({
    "aria-expanded": active,
    className: "wallet-adapter-button-trigger",
    style: Object.assign({
      pointerEvents: active ? 'none' : 'auto'
    }, props.style),
    onClick: openDropdown,
    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_wallet_icon__WEBPACK_IMPORTED_MODULE_4__.WalletIcon, {
      wallet: wallet
    })
  }, props), content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    "aria-label": "dropdown-list",
    className: `wallet-adapter-dropdown-list ${active && 'wallet-adapter-dropdown-list-active'}`,
    ref: ref,
    role: "menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    onClick: copyAddress,
    className: "wallet-adapter-dropdown-list-item",
    role: "menuitem"
  }, copied ? 'Copied' : 'Copy address'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    onClick: openModal,
    className: "wallet-adapter-dropdown-list-item",
    role: "menuitem"
  }, "Connect a different wallet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    onClick: disconnect,
    className: "wallet-adapter-dropdown-list-item",
    role: "menuitem"
  }, "Disconnect")));
});

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/hooks/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/hooks/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_wallet_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-wallet-modal */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/hooks/use-wallet-modal.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _use_wallet_modal__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _use_wallet_modal__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/hooks/use-wallet-modal.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/hooks/use-wallet-modal.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletModalContext": () => (/* binding */ WalletModalContext),
/* harmony export */   "useWalletModal": () => (/* binding */ useWalletModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const WalletModalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function useWalletModal() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(WalletModalContext);
}

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/hooks/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _hooks__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _hooks__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _components__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _components__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/components/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/components/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wallet_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet-provider */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/components/wallet-provider.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _wallet_provider__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _wallet_provider__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/components/wallet-provider.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/components/wallet-provider.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletProvider": () => (/* binding */ WalletProvider)
/* harmony export */ });
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-base */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/errors */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/utils/errors.js");
/* harmony import */ var _hooks_use_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-wallet */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/hooks/use-wallet.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
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
};





const WALLET_INITIAL_STATE = {
  wallet: null,
  adapter: null,
  ready: false,
  address: null,
  connected: false
};
const WalletProvider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function WalletProvider({
  children,
  wallets,
  autoConnect = false,
  onError: _onError = error => console.error(error)
}) {
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // The main state of the wallet provider

  const {
    0: {
      wallet,
      adapter,
      ready,
      address,
      connected
    },
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(WALLET_INITIAL_STATE);
  const {
    0: connecting,
    1: setConnecting
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: disconnecting,
    1: setDisconnecting
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isConnecting = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const isDisconnecting = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const isUnloading = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false); // Map wallet names to wallets for easier usage

  const walletsByName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => wallets.reduce((walletsByName, wallet) => {
    walletsByName[wallet.name] = wallet;
    return walletsByName;
  }, {}), [wallets]); // When the selected wallet changes, re-initialize the state

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const wallet = name && walletsByName[name] || null;
    const adapter = wallet && wallet.adapter();

    if (adapter) {
      const {
        ready,
        address,
        connected
      } = adapter;
      setState({
        wallet,
        adapter,
        connected,
        address,
        ready
      });
    } else {
      setState(WALLET_INITIAL_STATE);
    }
  }, [name, walletsByName, setState]); // If autoConnect is enabled, try to connect when the adapter changes and is ready

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isConnecting.current || connecting || connected || !autoConnect || !adapter || !ready) return;

    (function () {
      return __awaiter(this, void 0, void 0, function* () {
        isConnecting.current = true;
        setConnecting(true);

        try {
          yield adapter.connect();
        } catch (error) {
          // Clear the selected wallet
          setName(null); // Don't throw error, but onError will still be called
        } finally {
          setConnecting(false);
          isConnecting.current = false;
        }
      });
    })();
  }, [isConnecting, connecting, connected, autoConnect, adapter, ready, setConnecting, setName]); // If the window is closing or reloading, ignore disconnect and error events from the adapter

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function listener() {
      isUnloading.current = true;
    }

    window.addEventListener('beforeunload', listener);
    return () => window.removeEventListener('beforeunload', listener);
  }, [isUnloading]); // Select a wallet by name

  const select = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newName => __awaiter(this, void 0, void 0, function* () {
    if (name === newName) return;
    if (adapter) yield adapter.disconnect();
    setName(newName);
  }), [name, adapter, setName]); // Handle the adapter's ready event

  const onReady = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setState(state => Object.assign(Object.assign({}, state), {
    ready: true
  })), [setState]); // Handle the adapter's connect event

  const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!adapter) return;
    const {
      connected,
      address,
      ready
    } = adapter;
    setState(state => Object.assign(Object.assign({}, state), {
      connected,
      address,
      ready
    }));
  }, [adapter, setState]); // Handle the adapter's disconnect event

  const onDisconnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    // Clear the selected wallet unless the window is unloading
    if (!isUnloading.current) setName(null);
  }, [isUnloading, setName]); // Handle the adapter's error event, and local errors

  const onError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(error => {
    // Call the provided error handler unless the window is unloading
    if (!isUnloading.current) _onError(error);
    return error;
  }, [isUnloading, _onError]); // Connect the adapter to the wallet

  const connect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
    if (isConnecting.current || connecting || disconnecting || connected) return;
    if (!wallet || !adapter) throw onError(new _utils_errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotSelectedError());

    if (!ready) {
      // Clear the selected wallet
      setName(null);

      if (false) {}

      throw onError(new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotReadyError());
    }

    isConnecting.current = true;
    setConnecting(true);

    try {
      yield adapter.connect();
    } catch (error) {
      // Clear the selected wallet
      setName(null); // Rethrow the error, and onError will also be called

      throw error;
    } finally {
      setConnecting(false);
      isConnecting.current = false;
    }
  }), [isConnecting, connecting, disconnecting, connected, wallet, adapter, onError, ready, setConnecting, setName]); // Disconnect the adapter from the wallet

  const disconnect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
    if (isDisconnecting.current || disconnecting) return;
    if (!adapter) return setName(null);
    isDisconnecting.current = true;
    setDisconnecting(true);

    try {
      yield adapter.disconnect();
    } catch (error) {
      // Clear the selected wallet
      setName(null); // Rethrow the error, and onError will also be called

      throw error;
    } finally {
      setDisconnecting(false);
      isDisconnecting.current = false;
    }
  }), [isDisconnecting, disconnecting, adapter, setDisconnecting, setName]);
  const invokeRead = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(request => __awaiter(this, void 0, void 0, function* () {
    if (!adapter) throw onError(new _utils_errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotSelectedError());
    if (!connected) throw onError(new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotConnectedError());
    return yield adapter.invokeRead(request);
  }), [adapter, onError, connected]);
  const invokeReadMulti = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(request => __awaiter(this, void 0, void 0, function* () {
    if (!adapter) throw onError(new _utils_errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotSelectedError());
    if (!connected) throw onError(new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotConnectedError());
    return yield adapter.invokeReadMulti(request);
  }), [adapter, onError, connected]);
  const invoke = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(request => __awaiter(this, void 0, void 0, function* () {
    if (!adapter) throw onError(new _utils_errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotSelectedError());
    if (!connected) throw onError(new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotConnectedError());
    return yield adapter.invoke(request);
  }), [adapter, onError, connected]);
  const invokeMulti = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(request => __awaiter(this, void 0, void 0, function* () {
    if (!adapter) throw onError(new _utils_errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotSelectedError());
    if (!connected) throw onError(new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotConnectedError());
    return yield adapter.invokeMulti(request);
  }), [adapter, onError, connected]);
  const getNetworks = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => __awaiter(this, void 0, void 0, function* () {
    if (!adapter) throw onError(new _utils_errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotSelectedError());
    if (!connected) throw onError(new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotConnectedError());
    return yield adapter.getNetworks();
  }), [adapter, onError, connected]);
  const signMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(request => __awaiter(this, void 0, void 0, function* () {
    if (!adapter) throw onError(new _utils_errors__WEBPACK_IMPORTED_MODULE_1__.WalletNotSelectedError());
    if (!connected) throw onError(new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotConnectedError());
    return yield adapter.signMessage(request);
  }), [adapter, onError, connected]); // Setup and teardown event listeners when the adapter changes

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (adapter) {
      adapter.on('ready', onReady);
      adapter.on('connect', onConnect);
      adapter.on('disconnect', onDisconnect);
      adapter.on('error', onError);
      return () => {
        adapter.off('ready', onReady);
        adapter.off('connect', onConnect);
        adapter.off('disconnect', onDisconnect);
        adapter.off('error', onError);
      };
    }
  }, [adapter, onReady, onConnect, onDisconnect, onError]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_hooks_use_wallet__WEBPACK_IMPORTED_MODULE_3__.WalletContext.Provider, {
    value: {
      wallets,
      autoConnect,
      wallet,
      adapter,
      address,
      ready,
      connected,
      connecting,
      disconnecting,
      select,
      connect,
      disconnect,
      invokeRead,
      invokeReadMulti,
      invoke,
      invokeMulti,
      getNetworks,
      signMessage
    }
  }, children);
});

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/hooks/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/hooks/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_wallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-wallet */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/hooks/use-wallet.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _use_wallet__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _use_wallet__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/hooks/use-wallet.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/hooks/use-wallet.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletContext": () => (/* binding */ WalletContext),
/* harmony export */   "useWallet": () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const WalletContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function useWallet() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(WalletContext);
}

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/components/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _components__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _components__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/hooks/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _hooks__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _hooks__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/utils/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _utils__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _utils__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);




/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/utils/errors.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/utils/errors.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletNotSelectedError": () => (/* binding */ WalletNotSelectedError)
/* harmony export */ });
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-base */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/index.js");

class WalletNotSelectedError extends _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletError {
  constructor() {
    super(...arguments);
    this.name = 'WalletNotSelectedError';
  }

}

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/utils/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/utils/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/utils/errors.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _errors__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _errors__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "@cityofzion/neon-js":
/*!**************************************!*\
  !*** external "@cityofzion/neon-js" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@cityofzion/neon-js");

/***/ }),

/***/ "eventemitter3":
/*!********************************!*\
  !*** external "eventemitter3" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("eventemitter3");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UvbGliL2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UvbGliL3BvbGwuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlL2xpYi93YWl0LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtYnV0dG9uLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LWNvbGxhcHNlLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LWNvbm5lY3QtYnV0dG9uLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LWRpc2Nvbm5lY3QtYnV0dG9uLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LWljb24uanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtbGlzdC1pdGVtLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LW1vZGFsLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1tb2RhbC1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1tb2RhbC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1tdWx0aS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvaG9va3MvdXNlLXdhbGxldC1tb2RhbC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9jb21wb25lbnRzL3dhbGxldC1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9ob29rcy91c2Utd2FsbGV0LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QvbGliL2luZGV4LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QvbGliL3V0aWxzL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcIkBjaXR5b2Z6aW9uL25lb24tanNcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJldmVudGVtaXR0ZXIzXCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2lnbm9yZWR8QzpcXFVzZXJzXFxTZWJhdGFuZSBSYXBoZWxhXFxNdXNpY1xcd2ViM1xcbmVvLWJsb2NrY2hhaW4tYmV0eFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XG52YXIgX3JvdXRlcjEgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBwcmVmZXRjaGVkID0ge1xufTtcbmZ1bmN0aW9uIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICAgIGNvbnN0IHsgdGFyZ2V0ICB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xufVxuZnVuY3Rpb24gbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpIHtcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XG4gICAgICAgIHNjcm9sbCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgICAgc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBzY3JvbGxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgaHJlZjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzID0gT2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xuICAgICAgICAgICAgYXM6IHRydWUsXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICAgICAgICBsb2NhbGU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XG4gICAgICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdyZXBsYWNlJyB8fCBrZXkgPT09ICdzY3JvbGwnIHx8IGtleSA9PT0gJ3NoYWxsb3cnIHx8IGtleSA9PT0gJ3Bhc3NIcmVmJyB8fCBrZXkgPT09ICdwcmVmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgaHJlZiAsIGFzICB9ID0gX3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e1xuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcbiAgICAgICAgfTtcbiAgICB9LCBbXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgcHJvcHMuaHJlZixcbiAgICAgICAgcHJvcHMuYXNcbiAgICBdKTtcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgbGV0IGNoaWxkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcclxuLy8gZGlzYWJsZSBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZm9yIHRoaXMgZmlsZVxyXG4vLyBAdHMtbm9jaGVja1xyXG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgd2FpdFR4LFxyXG4gIFdpdG5lc3NTY29wZSxcclxuICBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcixcclxufSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBXYWxsZXREaXNjb25uZWN0QnV0dG9uLFxyXG4gIFdhbGxldE11bHRpQnV0dG9uLFxyXG59IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcclxuaW1wb3J0IHsgbmVvbGluZU4zIH0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lXCI7XHJcbmltcG9ydCB7IHUsIHNjLCB3YWxsZXQgfSBmcm9tIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IE5lb24gZnJvbSBcIkBjaXR5b2Z6aW9uL25lb24tanNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG5lbzNEYXBpIGZyb20gXCJuZW8zLWRhcGlcIjtcclxuXHJcbmNvbnN0IEluZGV4OiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBOZW9Db250cmFjdEhhc2ggPSBcIjB4ZWY0MDczYTBmMmIzMDVhMzhlYzQwNTBlNGQzZDI4YmM0MGVhNjNmNVwiO1xyXG4gIGNvbnN0IEJldHRpbmdNYW5hZ2VyQ29udHJhY3RIYXNoID1cclxuICAgIFwiMHg3YTA2ZTQwY2QwOGMwYTg4NzdjMmQ2ZDBhNDk3NGY3ZGJlOWIyYjdiXCI7XHJcblxyXG4gIGNvbnN0IGJyaWFuID0gXCJOWUtOV1dtQXJqSEQ3dVhGcHVHZURINnVjWUdwc2YyczZZXCI7XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25zdCBwdWJsaXNoSW52b2tlID0gYXN5bmMgKFxyXG4gICAgcnBjQWRkcmVzcyxcclxuICAgIG5ldHdvcmtNYWdpYyxcclxuICAgIHNjcmlwdEhhc2gsXHJcbiAgICBvcGVyYXRpb24sXHJcbiAgICBhcmdzLFxyXG4gICAgYWNjb3VudFxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgTmVvbi5leHBlcmltZW50YWwuU21hcnRDb250cmFjdChcclxuICAgICAgTmVvbi51LkhleFN0cmluZy5mcm9tSGV4KHNjcmlwdEhhc2gpLFxyXG4gICAgICB7XHJcbiAgICAgICAgbmV0d29ya01hZ2ljLFxyXG4gICAgICAgIHJwY0FkZHJlc3MsXHJcbiAgICAgICAgYWNjb3VudCxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuaW52b2tlKG9wZXJhdGlvbiwgYXJncyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBjb25uZWN0ZWQsIGdldE5ldHdvcmtzLCBhZGRyZXNzLCBpbnZva2UgfSA9IHVzZVdhbGxldCgpO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBbd2FsbGV0TmV0d29yaywgc2V0V2FsbGV0TmV0d29ya10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtuZW9saW5lLCBzZXROZW9MaW5lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW25lb2xpbmVOMywgc2V0TmVvTGluZTNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbYmxvY2tIZWlnaHQsIHNldEJsb2NrSGVpZ2h0XSA9IHVzZVN0YXRlKFwiNzgxMTVcIik7XHJcbiAgY29uc3QgZmV0Y2hXYWxsZXROZXR3b3JrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0TmV0d29ya3MoKTtcclxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgc2V0V2FsbGV0TmV0d29yayhyZXN1bHQuZGF0YT8uZGVmYXVsdE5ldHdvcmsgfHwgbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtnZXROZXR3b3Jrc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdERhcCgpO1xyXG5cclxuICAgIC8vIGJhbGFuY2VzXHJcblxyXG4gICAgaWYgKGNvbm5lY3RlZCkge1xyXG4gICAgICBmZXRjaFdhbGxldE5ldHdvcmsoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50ID0+IFwiLCBuZW9saW5lTjMpO1xyXG5cclxuICAgICAgaWYgKG5lb2xpbmVOMykge1xyXG4gICAgICAgIG5lb2xpbmVOMy5nZXRBY2NvdW50KCkudGhlbigoYWNjb3VudCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IGZvdW5kIGNvbm5ldGVkID0+IFwiLCBhY2NvdW50KTtcclxuXHJcbiAgICAgICAgICBzZXRBY2NvdW50KGFjY291bnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBuZW9saW5lTjMuZ2V0UHVibGljS2V5KCkudGhlbigocHVibGljS2V5RGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBhZGRyZXNzLCBwdWJsaWNLZXkgfSA9IHB1YmxpY0tleURhdGE7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IGFkZHJlc3M6IFwiICsgYWRkcmVzcyk7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IHB1YmxpYyBrZXk6IFwiICsgcHVibGljS2V5KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgc2NycEFkZHJlc3M7XHJcbiAgICAgICAgbmVvbGluZU4zXHJcbiAgICAgICAgICAuU2NyaXB0SGFzaFRvQWRkcmVzcyh7XHJcbiAgICAgICAgICAgIHNjcmlwdEhhc2g6IFwiMHg3YTA2ZTQwY2QwOGMwYTg4NzdjMmQ2ZDBhNDk3NGY3ZGJlOWIyYjdiXCIsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgc2NycEFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZHJlc3NcIiArIGFkZHJlc3MpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyB0eXBlLCBkZXNjcmlwdGlvbiwgZGF0YSB9ID0gZXJyb3I7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJOT19QUk9WSURFUlwiOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBwcm92aWRlciBhdmFpbGFibGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBcIk1BTEZPUk1FRF9JTlBVVFwiOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgY2hlY2sgeW91ciBpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgYW4gZXhwZWN0ZWQgZXJyb3Igb2JqZWN0LiAgSnVzdCB3cml0ZSB0aGUgZXJyb3IgdG8gdGhlIGNvbnNvbGUuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2VuZCBnYXMgdG9rZW5cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0V2FsbGV0TmV0d29yayhudWxsKTtcclxuICAgIH1cclxuICB9LCBbY29ubmVjdGVkLCBmZXRjaFdhbGxldE5ldHdvcmtdKTtcclxuXHJcblxyXG4gIGNvbnN0IHBsYWNlQmV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbmVvbGluZU4zXHJcbiAgICAgIC5zZW5kKHtcclxuICAgICAgICBmcm9tQWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgICB0b0FkZHJlc3M6IGJyaWFuLFxyXG4gICAgICAgIGFzc2V0OiBcIk5FT1wiLFxyXG4gICAgICAgIGFtb3VudDogXCIxXCIsXHJcbiAgICAgICAgZmVlOiBcIjAuMDAwMVwiLFxyXG4gICAgICAgIGJyb2FkY2FzdE92ZXJyaWRlOiBmYWxzZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2VuZCB0cmFuc2FjdGlvbiBzdWNjZXNzIVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRyYW5zYWN0aW9uIElEOiBcIiArIHJlc3VsdC50eGlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlJQQyBub2RlIFVSTDogXCIgKyByZXN1bHQubm9kZVVSTCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXREYXAgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0TjNEYXBpID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIk5FT0xpbmUuTjMuRVZFTlQuUkVBRFlcIiwgKCkgPT4ge1xyXG4gICAgICAgIHNldE5lb0xpbmUzKG5ldyBORU9MaW5lTjMuSW5pdCgpKTtcclxuICAgICAgICBpZiAobmVvbGluZU4zKSB7XHJcbiAgICAgICAgICByZXNvbHZlKG5lb2xpbmVOMyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChcIk4zIGRBUEkgbWV0aG9kIGZhaWxlZCB0byBsb2FkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaW5pdENvbW1vbkRhcGkgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiTkVPTGluZS5ORU8uRVZFTlQuUkVBRFlcIiwgKCkgPT4ge1xyXG4gICAgICAgIHNldE5lb0xpbmUobmV3IE5FT0xpbmUuSW5pdCgpKTtcclxuICAgICAgICBpZiAobmVvbGluZSkge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZW9saW5lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KFwiY29tbW9uIGRBUEkgbWV0aG9kIGZhaWxlZCB0byBsb2FkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaW5pdENvbW1vbkRhcGlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGNvbW1vbiBkQVBJIG1ldGhvZCBpcyBsb2FkZWQuXCIpO1xyXG4gICAgICAgIHJldHVybiBpbml0TjNEYXBpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgTjMgZEFQSSBtZXRob2QgaXMgbG9hZGVkLlwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvbWFpbi5jc3NcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgY29udGFpbmVyIG14LWF1dG8gcC0yIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgcHktNiBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvTE9HTy5wbmdcIiBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQtNXhsIG1kOnRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICAgIFBsYW5ldCBYXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc3BhY2UteC02IG1kOmZsZXhcIj5cclxuXHRcdCAgPGRpdiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWRhcmtHcmF5aXNoQmx1ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ2FtZXNcIj5HYW1lczwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1kYXJrR3JheWlzaEJsdWUgdGV4dC13aGl0ZSBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BvcnRmb2xpb1wiPlBvcnRmb2xpbzwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGlkPVwibWVudS1idG5cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoYW1idXJnZXIgbWQ6aGlkZGVuIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLXRvcCBiZy13aGl0ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLW1pZGRsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJvdHRvbVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD1cIm1lbnVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgaGlkZGVuIHNlbGYtZW5kIHB5LTggbXQtMTAgc3BhY2UteS02IGZvbnQtYm9sZCBiZy13aGl0ZSBzbTp3LWF1dG8gc206c2VsZi1jZW50ZXIgbGVmdC02IHJpZ2h0LTYgZHJvcC1zaGFkb3ctbWRcIlxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICAgIDxzZWN0aW9uPjwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJoZXJvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbC1yZXZlcnNlIGl0ZW1zLWNlbnRlciBweC02IG14LWF1dG8gbXQtMTAgc3BhY2UteS0wIG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMiBmbGV4IGZsZXgtY29sIHNwYWNlLXktMTJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9MT0dPLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWQ6dy0xLzJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvcmlnaHRfaW1hZ2UucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD1cImZlYXR1cmVzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgbXgtYXV0byBtdC0yICBtZDpzcGFjZS15LTAgbWQ6ZmxleC1yb3cgbWlkZGxlXCI+XHJcbiAgICAgICAgICA8V2FsbGV0TXVsdGlCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0RDMjk4NFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJ0ZXN0aW1vbmlhbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBweC01IG14LWF1dG8gbXQtMzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0yNCBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4tdy1mdWxsIFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkIHN1YnBpeGVsLWFudGlhbGlhc2VkIHB5LTQgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICBUcmVuZGluZ1xyXG4gICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJib3JkZXItYiBiZy1bI0IyMjdDQV0gXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkICB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFJhbmtcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEdhbWUgTmFtZXNcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEYXRlL1RpbWVcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAyNCBob3Vyc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLVsjMTUxNzRBXSAgIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2NzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDUzpHTyAtIFBHTCBNYWpvciBBbnR3ZXJwXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgNDAwK1xyXG4gICAgICAgICAgICAgICAgICAgICAge2Nvbm5lY3RlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwbGFjZUJldH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhY2UgQmV0e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy91cC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG90YS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ1M6R08gLSBQR0wgTWFqb3IgQW50d2VycFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDQwMCtcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG93bi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZnJlZWZpcmUucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEZyZWUgRmlyZSAtIFdvcmxkIFNlcmllc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgT2N0IDE1LCAyMDIyIDQ6MDAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDUwK1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3duLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9ob25vci5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgS09HIC0gS1BMIFNwcmluZyBQbGF5b2Zmc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTm92IDA1LCAyMDIyIDI6MzAgQU1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDEwMCtcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xlZ2VuZHMucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIExPTCAtIEVVIE1hc3RlcnMgU3ByaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMjUrXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1haW4ge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyIGEge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGE6aG92ZXIsXHJcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXHJcbiAgICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlLFxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgbWFyZ2luOiA0cmVtIDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29kZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXHJcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBoMiB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53YWxsZXQtYnV0dG9ucyB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZ2FwOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuZXhwb3J0IHsgRXZlbnRFbWl0dGVyIH07XG5leHBvcnQgdmFyIFdpdG5lc3NTY29wZTtcbihmdW5jdGlvbiAoV2l0bmVzc1Njb3BlKSB7XG4gICAgV2l0bmVzc1Njb3BlW1dpdG5lc3NTY29wZVtcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAgIFdpdG5lc3NTY29wZVtXaXRuZXNzU2NvcGVbXCJDYWxsZWRCeUVudHJ5XCJdID0gMV0gPSBcIkNhbGxlZEJ5RW50cnlcIjtcbiAgICBXaXRuZXNzU2NvcGVbV2l0bmVzc1Njb3BlW1wiQ3VzdG9tQ29udHJhY3RzXCJdID0gMTZdID0gXCJDdXN0b21Db250cmFjdHNcIjtcbiAgICBXaXRuZXNzU2NvcGVbV2l0bmVzc1Njb3BlW1wiQ3VzdG9tR3JvdXBzXCJdID0gMzJdID0gXCJDdXN0b21Hcm91cHNcIjtcbiAgICBXaXRuZXNzU2NvcGVbV2l0bmVzc1Njb3BlW1wiR2xvYmFsXCJdID0gMTI4XSA9IFwiR2xvYmFsXCI7XG59KShXaXRuZXNzU2NvcGUgfHwgKFdpdG5lc3NTY29wZSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgQmFzZVdhbGxldEFkYXB0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRhcHRlci5qcy5tYXAiLCJleHBvcnQgY2xhc3MgV2FsbGV0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBlcnJvcikge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RGb3VuZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90Rm91bmRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdEluc3RhbGxlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90SW5zdGFsbGVkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RSZWFkeUVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90UmVhZHlFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldENvbm5lY3Rpb25FcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldENvbm5lY3Rpb25FcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldERpc2Nvbm5lY3RlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0RGlzY29ubmVjdGVkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXREaXNjb25uZWN0aW9uRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRBY2NvdW50RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRBY2NvdW50RXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE5vdENvbm5lY3RlZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0VGltZW91dEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0VGltZW91dEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0V2luZG93QmxvY2tlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0V2luZG93QmxvY2tlZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0V2luZG93Q2xvc2VkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRXaW5kb3dDbG9zZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE1ldGhvZE5vdFN1cHBvcnRlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0TWV0aG9kTm90U3VwcG9ydGVkRXJyb3InO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9ycy5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2FkYXB0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9lcnJvcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2xsJztcbmV4cG9ydCAqIGZyb20gJy4vd2FpdCc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBwb2xsKGNhbGxiYWNrLCBpbnRlcnZhbCwgY291bnQpIHtcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgZG9uZSA9IHlpZWxkIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBpZiAoIWRvbmUpXG4gICAgICAgICAgICAgICAgcG9sbChjYWxsYmFjaywgaW50ZXJ2YWwsIGNvdW50IC0gMSk7XG4gICAgICAgIH0pLCBpbnRlcnZhbCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBvbGxVbnRpbFJlYWR5KGFkYXB0ZXIsIHBvbGxJbnRlcnZhbCwgcG9sbENvdW50KSB7XG4gICAgcG9sbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcmVhZHkgfSA9IGFkYXB0ZXI7XG4gICAgICAgIGlmIChyZWFkeSkge1xuICAgICAgICAgICAgaWYgKCFhZGFwdGVyLmVtaXQoJ3JlYWR5JykpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7YWRhcHRlci5jb25zdHJ1Y3Rvci5uYW1lfSBpcyByZWFkeSBidXQgbm8gbGlzdGVuZXIgd2FzIHJlZ2lzdGVyZWRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVhZHk7XG4gICAgfSwgcG9sbEludGVydmFsLCBwb2xsQ291bnQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9sbC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHJwYyB9IGZyb20gJ0BjaXR5b2Z6aW9uL25lb24tanMnO1xuZXhwb3J0IGZ1bmN0aW9uIHdhaXRUeChycGNBZGRyZXNzLCB0eElkLCByZWFkRnJlcXVlbmN5ID0gMTAwMCwgdGltZW91dCA9IDMwMDAwKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBycGNDbGllbnQgPSBuZXcgcnBjLlJQQ0NsaWVudChycGNBZGRyZXNzKTtcbiAgICAgICAgLy8gV2FpdCB1bnRpbCB0aGUgdHJhbnNhY3Rpb24gY2FuIGJlIGZvdW5kLCBpZiBpdCdzIGZvdW5kIGl0IG1lYW5zIGl0J3Mgb2sgYmVjYXVzZSBpdCBoYXMgYmVlbiBpbnNlcnRlZCBpbiBhIGJsb2NrXG4gICAgICAgIC8vIE90aGVyd2lzZSB0cmlnZ2VyIHRoZSB0aW1lb3V0IG1lYW5pbmcgdGhhdCBpdCdzIG5vdCBpbnNlcnRlZCBpbiB0aGUgYmxvY2sgKGF2ZXJhZ2UgYmxvY2sgdGltZSAxNXMpXG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSB0aW1lb3V0IGhhcyBwYXNzZWRcbiAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPiB0aW1lb3V0KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHRyYW5zYWN0aW9uIGZyb20gdGhlIHJwY0NsaWVudFxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0geWllbGQgcnBjQ2xpZW50LmdldFJhd1RyYW5zYWN0aW9uKHR4SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBTbGVlcCBmb3IgdGhlIG5leHQgY3ljbGVcbiAgICAgICAgICAgICAgICB5aWVsZCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCByZWFkRnJlcXVlbmN5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKCF0cmFuc2FjdGlvbik7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWl0LmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LWJ1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1jb2xsYXBzZSc7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1jb25uZWN0LWJ1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1kaXNjb25uZWN0LWJ1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1pY29uJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LWxpc3QtaXRlbSc7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1tb2RhbC1idXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtbW9kYWwtcHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtbW9kYWwnO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtbXVsdGktYnV0dG9uJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgV2FsbGV0QnV0dG9uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRCdXR0b24oeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBkaXNhYmxlZCwgZW5kSWNvbiwgc3RhcnRJY29uLCBzdHlsZSwgdGFiSW5kZXgsIG9uQ2xpY2ssIH0pIHtcbiAgICBjb25zdCBqdXN0aWZ5Q29udGVudCA9IGVuZEljb24gfHwgc3RhcnRJY29uID8gJ3NwYWNlLWJldHdlZW4nIDogJ2NlbnRlcic7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBgd2FsbGV0LWFkYXB0ZXItYnV0dG9uICR7Y2xhc3NOYW1lIHx8ICcnfWAsIGRpc2FibGVkOiBkaXNhYmxlZCwgb25DbGljazogb25DbGljaywgc3R5bGU6IE9iamVjdC5hc3NpZ24oeyBqdXN0aWZ5Q29udGVudCB9LCBzdHlsZSksIHRhYkluZGV4OiB0YWJJbmRleCB8fCAwLCB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgIHN0YXJ0SWNvbiAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tc3RhcnQtaWNvblwiIH0sIHN0YXJ0SWNvbiksXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBlbmRJY29uICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi1lbmQtaWNvblwiIH0sIGVuZEljb24pKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1idXR0b24uanMubWFwIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldENvbGxhcHNlID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRDb2xsYXBzZSh7IGlkLCBjaGlsZHJlbiwgZXhwYW5kZWQgPSBmYWxzZSwgfSkge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBpbnN0YW50ID0gdXNlUmVmKHRydWUpO1xuICAgIGNvbnN0IHRyYW5zaXRpb24gPSAnaGVpZ2h0IDI1MG1zIGVhc2Utb3V0JztcbiAgICBjb25zdCBvcGVuQ29sbGFwc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBub2RlLnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgY2xvc2VDb2xsYXBzZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IG5vZGUub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIG5vZGUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIG9wZW5Db2xsYXBzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xvc2VDb2xsYXBzZSgpO1xuICAgICAgICB9XG4gICAgfSwgW2V4cGFuZGVkXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNvbXBsZXRlKCkge1xuICAgICAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUub3ZlcmZsb3cgPSBleHBhbmRlZCA/ICdpbml0aWFsJyA6ICdoaWRkZW4nO1xuICAgICAgICAgICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVHJhbnNpdGlvbkVuZChldmVudCkge1xuICAgICAgICAgICAgaWYgKG5vZGUgJiYgZXZlbnQudGFyZ2V0ID09PSBub2RlICYmIGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gJ2hlaWdodCcpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW50LmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhbmRsZUNvbXBsZXRlKCk7XG4gICAgICAgICAgICBpbnN0YW50LmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgcmV0dXJuICgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpO1xuICAgIH0sIFtleHBhbmRlZF0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNoaWxkcmVuOiBjaGlsZHJlbiwgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWNvbGxhcHNlXCIsIGlkOiBpZCwgcmVmOiByZWYsIHJvbGU6IFwicmVnaW9uXCIsIHN0eWxlOiB7IGhlaWdodDogMCwgdHJhbnNpdGlvbjogaW5zdGFudC5jdXJyZW50ID8gdW5kZWZpbmVkIDogdHJhbnNpdGlvbiB9IH0pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LWNvbGxhcHNlLmpzLm1hcCIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXYWxsZXRCdXR0b24gfSBmcm9tICcuL3dhbGxldC1idXR0b24nO1xuaW1wb3J0IHsgV2FsbGV0SWNvbiB9IGZyb20gJy4vd2FsbGV0LWljb24nO1xuZXhwb3J0IGNvbnN0IFdhbGxldENvbm5lY3RCdXR0b24gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldENvbm5lY3RCdXR0b24oX2EpIHtcbiAgICB2YXIgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBkaXNhYmxlZCwgZW5kSWNvbiwgc3RhcnRJY29uLCBzdHlsZSwgdGFiSW5kZXgsIG9uQ2xpY2sgfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlZFwiLCBcImVuZEljb25cIiwgXCJzdGFydEljb25cIiwgXCJzdHlsZVwiLCBcInRhYkluZGV4XCIsIFwib25DbGlja1wiXSk7XG4gICAgY29uc3QgeyB3YWxsZXQsIGNvbm5lY3QsIGNvbm5lY3RpbmcsIGNvbm5lY3RlZCB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xpY2spXG4gICAgICAgICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICAgICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpXG4gICAgICAgICAgICBjb25uZWN0KCkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICB9LCBbb25DbGljaywgY29ubmVjdF0pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkcmVuKVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICBpZiAoY29ubmVjdGluZylcbiAgICAgICAgICAgIHJldHVybiAnQ29ubmVjdGluZyAuLi4nO1xuICAgICAgICBpZiAoY29ubmVjdGVkKVxuICAgICAgICAgICAgcmV0dXJuICdDb25uZWN0ZWQnO1xuICAgICAgICBpZiAod2FsbGV0KVxuICAgICAgICAgICAgcmV0dXJuICdDb25uZWN0JztcbiAgICAgICAgcmV0dXJuICdDb25uZWN0IFdhbGxldCc7XG4gICAgfSwgW2NoaWxkcmVuLCBjb25uZWN0aW5nLCBjb25uZWN0ZWQsIHdhbGxldF0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLXRyaWdnZXJcIiwgZGlzYWJsZWQ6IGRpc2FibGVkIHx8ICF3YWxsZXQgfHwgY29ubmVjdGluZyB8fCBjb25uZWN0ZWQsIHN0YXJ0SWNvbjogd2FsbGV0ID8gUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRJY29uLCB7IHdhbGxldDogd2FsbGV0IH0pIDogdW5kZWZpbmVkLCBlbmRJY29uOiBlbmRJY29uLCBzdHlsZTogc3R5bGUsIHRhYkluZGV4OiB0YWJJbmRleCwgb25DbGljazogaGFuZGxlQ2xpY2sgfSwgcHJvcHMpLCBjb250ZW50KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1jb25uZWN0LWJ1dHRvbi5qcy5tYXAiLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtYnV0dG9uJztcbmltcG9ydCB7IFdhbGxldEljb24gfSBmcm9tICcuL3dhbGxldC1pY29uJztcbmV4cG9ydCBjb25zdCBXYWxsZXREaXNjb25uZWN0QnV0dG9uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXREaXNjb25uZWN0QnV0dG9uKF9hKSB7XG4gICAgdmFyIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZGlzYWJsZWQsIGVuZEljb24sIHN0YXJ0SWNvbiwgc3R5bGUsIHRhYkluZGV4LCBvbkNsaWNrIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZWRcIiwgXCJlbmRJY29uXCIsIFwic3RhcnRJY29uXCIsIFwic3R5bGVcIiwgXCJ0YWJJbmRleFwiLCBcIm9uQ2xpY2tcIl0pO1xuICAgIGNvbnN0IHsgd2FsbGV0LCBkaXNjb25uZWN0LCBkaXNjb25uZWN0aW5nIH0gPSB1c2VXYWxsZXQoKTtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DbGljaylcbiAgICAgICAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG4gICAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZClcbiAgICAgICAgICAgIGRpc2Nvbm5lY3QoKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIH0sIFtvbkNsaWNrLCBkaXNjb25uZWN0XSk7XG4gICAgY29uc3QgY29udGVudCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGRyZW4pXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIGlmIChkaXNjb25uZWN0aW5nKVxuICAgICAgICAgICAgcmV0dXJuICdEaXNjb25uZWN0aW5nIC4uLic7XG4gICAgICAgIGlmICh3YWxsZXQpXG4gICAgICAgICAgICByZXR1cm4gJ0Rpc2Nvbm5lY3QnO1xuICAgICAgICByZXR1cm4gJ0Rpc2Nvbm5lY3QgV2FsbGV0JztcbiAgICB9LCBbY2hpbGRyZW4sIGRpc2Nvbm5lY3RpbmcsIHdhbGxldF0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLXRyaWdnZXJcIiwgZGlzYWJsZWQ6IGRpc2FibGVkIHx8ICF3YWxsZXQsIHN0YXJ0SWNvbjogd2FsbGV0ID8gUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRJY29uLCB7IHdhbGxldDogd2FsbGV0IH0pIDogdW5kZWZpbmVkLCBlbmRJY29uOiBlbmRJY29uLCBzdHlsZTogc3R5bGUsIHRhYkluZGV4OiB0YWJJbmRleCwgb25DbGljazogaGFuZGxlQ2xpY2sgfSwgcHJvcHMpLCBjb250ZW50KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1kaXNjb25uZWN0LWJ1dHRvbi5qcy5tYXAiLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldEljb24gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldEljb24oX2EpIHtcbiAgICB2YXIgeyB3YWxsZXQgfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wid2FsbGV0XCJdKTtcbiAgICByZXR1cm4gd2FsbGV0ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7IHNyYzogd2FsbGV0Lmljb24sIGFsdDogYCR7d2FsbGV0Lm5hbWV9IGljb25gIH0sIHByb3BzKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1pY29uLmpzLm1hcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXYWxsZXRCdXR0b24gfSBmcm9tICcuL3dhbGxldC1idXR0b24nO1xuaW1wb3J0IHsgV2FsbGV0SWNvbiB9IGZyb20gJy4vd2FsbGV0LWljb24nO1xuZXhwb3J0IGNvbnN0IFdhbGxldExpc3RJdGVtID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRMaXN0SXRlbSh7IGhhbmRsZUNsaWNrLCB0YWJJbmRleCwgd2FsbGV0LCB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRCdXR0b24sIHsgb25DbGljazogaGFuZGxlQ2xpY2ssIGVuZEljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0SWNvbiwgeyB3YWxsZXQ6IHdhbGxldCB9KSwgdGFiSW5kZXg6IHRhYkluZGV4IH0sIHdhbGxldC5uYW1lKSkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtbGlzdC1pdGVtLmpzLm1hcCIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWJ1dHRvbic7XG5pbXBvcnQgeyB1c2VXYWxsZXRNb2RhbCB9IGZyb20gJy4uL2hvb2tzL3VzZS13YWxsZXQtbW9kYWwnO1xuZXhwb3J0IGNvbnN0IFdhbGxldE1vZGFsQnV0dG9uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRNb2RhbEJ1dHRvbihfYSkge1xuICAgIHZhciB7IGNoaWxkcmVuID0gJ1NlbGVjdCBXYWxsZXQnLCBvbkNsaWNrIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwib25DbGlja1wiXSk7XG4gICAgY29uc3QgeyB2aXNpYmxlLCBzZXRWaXNpYmxlIH0gPSB1c2VXYWxsZXRNb2RhbCgpO1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNsaWNrKVxuICAgICAgICAgICAgb25DbGljayhldmVudCk7XG4gICAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZClcbiAgICAgICAgICAgIHNldFZpc2libGUoIXZpc2libGUpO1xuICAgIH0sIFtvbkNsaWNrLCBzZXRWaXNpYmxlLCB2aXNpYmxlXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tdHJpZ2dlclwiLCBvbkNsaWNrOiBoYW5kbGVDbGljayB9LCBwcm9wcyksIGNoaWxkcmVuKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1tb2RhbC1idXR0b24uanMubWFwIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0TW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vaG9va3MvdXNlLXdhbGxldC1tb2RhbCc7XG5pbXBvcnQgeyBXYWxsZXRNb2RhbCB9IGZyb20gJy4vd2FsbGV0LW1vZGFsJztcbmV4cG9ydCBjb25zdCBXYWxsZXRNb2RhbFByb3ZpZGVyID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRNb2RhbFByb3ZpZGVyKF9hKSB7XG4gICAgdmFyIHsgY2hpbGRyZW4gfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIl0pO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0TW9kYWxDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB7XG4gICAgICAgICAgICB2aXNpYmxlLFxuICAgICAgICAgICAgc2V0VmlzaWJsZSxcbiAgICAgICAgfSB9LFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgdmlzaWJsZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldE1vZGFsLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1tb2RhbC1wcm92aWRlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgV2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtYnV0dG9uJztcbmltcG9ydCB7IFdhbGxldENvbGxhcHNlIH0gZnJvbSAnLi93YWxsZXQtY29sbGFwc2UnO1xuaW1wb3J0IHsgdXNlV2FsbGV0TW9kYWwgfSBmcm9tICcuLi9ob29rcy91c2Utd2FsbGV0LW1vZGFsJztcbmltcG9ydCB7IFdhbGxldExpc3RJdGVtIH0gZnJvbSAnLi93YWxsZXQtbGlzdC1pdGVtJztcbmV4cG9ydCBjb25zdCBXYWxsZXRNb2RhbCA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0TW9kYWwoeyBjbGFzc05hbWUgPSAnJywgbG9nbywgZmVhdHVyZWRXYWxsZXRzID0gMywgY29udGFpbmVyID0gJ2JvZHknLCB9KSB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHsgd2FsbGV0cywgc2VsZWN0IH0gPSB1c2VXYWxsZXQoKTtcbiAgICBjb25zdCB7IHNldFZpc2libGUgfSA9IHVzZVdhbGxldE1vZGFsKCk7XG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2ZhZGVJbiwgc2V0RmFkZUluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcG9ydGFsLCBzZXRQb3J0YWxdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2ZlYXR1cmVkLCBtb3JlXSA9IHVzZU1lbW8oKCkgPT4gW3dhbGxldHMuc2xpY2UoMCwgZmVhdHVyZWRXYWxsZXRzKSwgd2FsbGV0cy5zbGljZShmZWF0dXJlZFdhbGxldHMpXSwgW3dhbGxldHMsIGZlYXR1cmVkV2FsbGV0c10pO1xuICAgIGNvbnN0IGhpZGVNb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0RmFkZUluKGZhbHNlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKSwgMTUwKTtcbiAgICB9LCBbc2V0RmFkZUluLCBzZXRWaXNpYmxlXSk7XG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaGlkZU1vZGFsKCk7XG4gICAgfSwgW2hpZGVNb2RhbF0pO1xuICAgIGNvbnN0IGhhbmRsZVdhbGxldENsaWNrID0gdXNlQ2FsbGJhY2soKGV2ZW50LCB3YWxsZXROYW1lKSA9PiB7XG4gICAgICAgIHNlbGVjdCh3YWxsZXROYW1lKTtcbiAgICAgICAgaGFuZGxlQ2xvc2UoZXZlbnQpO1xuICAgIH0sIFtzZWxlY3QsIGhhbmRsZUNsb3NlXSk7XG4gICAgY29uc3QgaGFuZGxlQ29sbGFwc2VDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCksIFtzZXRFeHBhbmRlZCwgZXhwYW5kZWRdKTtcbiAgICBjb25zdCBoYW5kbGVUYWJLZXkgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGhlcmUgd2UgcXVlcnkgYWxsIGZvY3VzYWJsZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGZpcnN0RWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzWzBdO1xuICAgICAgICBjb25zdCBsYXN0RWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzW2ZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIC8vIGlmIGdvaW5nIGJhY2t3YXJkIGJ5IHByZXNzaW5nIHRhYiBhbmQgZmlyc3RFbGVtZW50IGlzIGFjdGl2ZSwgc2hpZnQgZm9jdXMgdG8gbGFzdCBmb2N1c2FibGUgZWxlbWVudFxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGZpcnN0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGxhc3RFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIGdvaW5nIGZvcndhcmQgYnkgcHJlc3NpbmcgdGFiIGFuZCBsYXN0RWxlbWVudCBpcyBhY3RpdmUsIHNoaWZ0IGZvY3VzIHRvIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBmaXJzdEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3JlZl0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgaGlkZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVGFiS2V5KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gR2V0IG9yaWdpbmFsIG92ZXJmbG93XG4gICAgICAgIGNvbnN0IHsgb3ZlcmZsb3cgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAvLyBIYWNrIHRvIGVuYWJsZSBmYWRlIGluIGFuaW1hdGlvbiBhZnRlciBtb3VudFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEZhZGVJbih0cnVlKSwgMCk7XG4gICAgICAgIC8vIFByZXZlbnQgc2Nyb2xsaW5nIG9uIG1vdW50XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgLy8gTGlzdGVuIGZvciBrZXlkb3duIGV2ZW50c1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24sIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIC8vIFJlLWVuYWJsZSBzY3JvbGxpbmcgd2hlbiBjb21wb25lbnQgdW5tb3VudHNcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBvdmVyZmxvdztcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93biwgZmFsc2UpO1xuICAgICAgICB9O1xuICAgIH0sIFtoaWRlTW9kYWwsIGhhbmRsZVRhYktleV0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiBzZXRQb3J0YWwoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSwgW3NldFBvcnRhbCwgY29udGFpbmVyXSk7XG4gICAgcmV0dXJuIChwb3J0YWwgJiZcbiAgICAgICAgY3JlYXRlUG9ydGFsKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBcImFyaWEtbGFiZWxsZWRieVwiOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLXRpdGxlXCIsIFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIiwgY2xhc3NOYW1lOiBgd2FsbGV0LWFkYXB0ZXItbW9kYWwgJHtmYWRlSW4gJiYgJ3dhbGxldC1hZGFwdGVyLW1vZGFsLWZhZGUtaW4nfSAke2NsYXNzTmFtZX1gLCByZWY6IHJlZiwgcm9sZTogXCJkaWFsb2dcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGB3YWxsZXQtYWRhcHRlci1tb2RhbC13cmFwcGVyICR7IWxvZ28gJiYgJ3dhbGxldC1hZGFwdGVyLW1vZGFsLXdyYXBwZXItbm8tbG9nbyd9YCB9LFxuICAgICAgICAgICAgICAgICAgICBsb2dvICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWxvZ28td3JhcHBlclwiIH0sIHR5cGVvZiBsb2dvID09PSAnc3RyaW5nJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBhbHQ6IFwibG9nb1wiLCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtbG9nb1wiLCBzcmM6IGxvZ28gfSkgOiBsb2dvKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC10aXRsZVwiLCBpZDogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC10aXRsZVwiIH0sIFwiQ29ubmVjdCBXYWxsZXRcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBoYW5kbGVDbG9zZSwgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWJ1dHRvbi1jbG9zZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgd2lkdGg6IFwiMTRcIiwgaGVpZ2h0OiBcIjE0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTE0IDEyLjQ2MSA4LjMgNi43NzJsNS4yMzQtNS4yMzNMMTIuMDA2IDAgNi43NzIgNS4yMzQgMS41NCAwIDAgMS41MzlsNS4yMzQgNS4yMzNMMCAxMi4wMDZsMS41MzkgMS41MjhMNi43NzIgOC4zbDUuNjkgNS43TDE0IDEyLjQ2MXpcIiB9KSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtbGlzdFwiIH0sIGZlYXR1cmVkLm1hcCgod2FsbGV0KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRMaXN0SXRlbSwgeyBrZXk6IHdhbGxldC5uYW1lLCBoYW5kbGVDbGljazogKGV2ZW50KSA9PiBoYW5kbGVXYWxsZXRDbGljayhldmVudCwgd2FsbGV0Lm5hbWUpLCB3YWxsZXQ6IHdhbGxldCB9KSkpKSxcbiAgICAgICAgICAgICAgICAgICAgbW9yZS5sZW5ndGggPyAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0Q29sbGFwc2UsIHsgZXhwYW5kZWQ6IGV4cGFuZGVkLCBpZDogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1jb2xsYXBzZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWxpc3RcIiB9LCBtb3JlLm1hcCgod2FsbGV0KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRMaXN0SXRlbSwgeyBrZXk6IHdhbGxldC5uYW1lLCBoYW5kbGVDbGljazogKGV2ZW50KSA9PiBoYW5kbGVXYWxsZXRDbGljayhldmVudCwgd2FsbGV0Lm5hbWUpLCB0YWJJbmRleDogZXhwYW5kZWQgPyAwIDogLTEsIHdhbGxldDogd2FsbGV0IH0pKSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0QnV0dG9uLCB7IFwiYXJpYS1jb250cm9sc1wiOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWNvbGxhcHNlXCIsIFwiYXJpYS1leHBhbmRlZFwiOiBleHBhbmRlZCwgY2xhc3NOYW1lOiBgd2FsbGV0LWFkYXB0ZXItbW9kYWwtY29sbGFwc2UtYnV0dG9uICR7ZXhwYW5kZWQgJiYgJ3dhbGxldC1hZGFwdGVyLW1vZGFsLWNvbGxhcHNlLWJ1dHRvbi1hY3RpdmUnfWAsIGVuZEljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB3aWR0aDogXCIxMVwiLCBoZWlnaHQ6IFwiNlwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJtNS45MzggNS43MyA0LjI4LTQuMTI2YS45MTUuOTE1IDAgMCAwIDAtMS4zMjIgMSAxIDAgMCAwLTEuMzcxIDBMNS4yNTMgMy43MzYgMS42NTkuMjcyYTEgMSAwIDAgMC0xLjM3MSAwQS45My45MyAwIDAgMCAwIC45MzJjMCAuMjQ2LjEuNDguMjg4LjY2Mmw0LjI4IDQuMTI1YS45OS45OSAwIDAgMCAxLjM3LjAxelwiIH0pKSwgb25DbGljazogaGFuZGxlQ29sbGFwc2VDbGljayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkID8gJ0xlc3MnIDogJ01vcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG9wdGlvbnNcIikpKSA6IG51bGwpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtb3ZlcmxheVwiLCBvbk1vdXNlRG93bjogaGFuZGxlQ2xvc2UgfSkpLCBwb3J0YWwpKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LW1vZGFsLmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtYnV0dG9uJztcbmltcG9ydCB7IHVzZVdhbGxldE1vZGFsIH0gZnJvbSAnLi4vaG9va3MvdXNlLXdhbGxldC1tb2RhbCc7XG5pbXBvcnQgeyBXYWxsZXRDb25uZWN0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtY29ubmVjdC1idXR0b24nO1xuaW1wb3J0IHsgV2FsbGV0SWNvbiB9IGZyb20gJy4vd2FsbGV0LWljb24nO1xuaW1wb3J0IHsgV2FsbGV0TW9kYWxCdXR0b24gfSBmcm9tICcuL3dhbGxldC1tb2RhbC1idXR0b24nO1xuZXhwb3J0IGNvbnN0IFdhbGxldE11bHRpQnV0dG9uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRNdWx0aUJ1dHRvbihfYSkge1xuICAgIHZhciB7IGNoaWxkcmVuIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCJdKTtcbiAgICBjb25zdCB7IGFkZHJlc3MsIHdhbGxldCwgZGlzY29ubmVjdCB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgeyBzZXRWaXNpYmxlIH0gPSB1c2VXYWxsZXRNb2RhbCgpO1xuICAgIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgX2FkZHJlc3MgPSB1c2VNZW1vKCgpID0+IGFkZHJlc3MsIFthZGRyZXNzXSk7XG4gICAgY29uc3QgY29udGVudCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGRyZW4pXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIGlmICghd2FsbGV0IHx8ICFfYWRkcmVzcylcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gX2FkZHJlc3M7XG4gICAgfSwgW2NoaWxkcmVuLCB3YWxsZXQsIF9hZGRyZXNzXSk7XG4gICAgY29uc3QgY29weUFkZHJlc3MgPSB1c2VDYWxsYmFjaygoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChfYWRkcmVzcykge1xuICAgICAgICAgICAgeWllbGQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoX2FkZHJlc3MpO1xuICAgICAgICAgICAgc2V0Q29waWVkKHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb3BpZWQoZmFsc2UpLCA0MDApO1xuICAgICAgICB9XG4gICAgfSksIFtfYWRkcmVzc10pO1xuICAgIGNvbnN0IG9wZW5Ecm9wZG93biA9IHVzZUNhbGxiYWNrKCgpID0+IHNldEFjdGl2ZSh0cnVlKSwgW3NldEFjdGl2ZV0pO1xuICAgIGNvbnN0IGNsb3NlRHJvcGRvd24gPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRBY3RpdmUoZmFsc2UpLCBbc2V0QWN0aXZlXSk7XG4gICAgY29uc3Qgb3Blbk1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgfSwgW3NldFZpc2libGUsIGNsb3NlRHJvcGRvd25dKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHJlZi5jdXJyZW50O1xuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiBjbGlja2luZyBkcm9wZG93biBvciBpdHMgZGVzY2VuZGFudHNcbiAgICAgICAgICAgIGlmICghbm9kZSB8fCBub2RlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2xvc2VEcm9wZG93bigpO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgIH0sIFtyZWYsIGNsb3NlRHJvcGRvd25dKTtcbiAgICBpZiAoIXdhbGxldClcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0TW9kYWxCdXR0b24sIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgY2hpbGRyZW4pO1xuICAgIGlmICghX2FkZHJlc3MpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldENvbm5lY3RCdXR0b24sIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgY2hpbGRyZW4pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1kcm9wZG93blwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0QnV0dG9uLCBPYmplY3QuYXNzaWduKHsgXCJhcmlhLWV4cGFuZGVkXCI6IGFjdGl2ZSwgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi10cmlnZ2VyXCIsIHN0eWxlOiBPYmplY3QuYXNzaWduKHsgcG9pbnRlckV2ZW50czogYWN0aXZlID8gJ25vbmUnIDogJ2F1dG8nIH0sIHByb3BzLnN0eWxlKSwgb25DbGljazogb3BlbkRyb3Bkb3duLCBzdGFydEljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0SWNvbiwgeyB3YWxsZXQ6IHdhbGxldCB9KSB9LCBwcm9wcyksIGNvbnRlbnQpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBcImFyaWEtbGFiZWxcIjogXCJkcm9wZG93bi1saXN0XCIsIGNsYXNzTmFtZTogYHdhbGxldC1hZGFwdGVyLWRyb3Bkb3duLWxpc3QgJHthY3RpdmUgJiYgJ3dhbGxldC1hZGFwdGVyLWRyb3Bkb3duLWxpc3QtYWN0aXZlJ31gLCByZWY6IHJlZiwgcm9sZTogXCJtZW51XCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IG9uQ2xpY2s6IGNvcHlBZGRyZXNzLCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItZHJvcGRvd24tbGlzdC1pdGVtXCIsIHJvbGU6IFwibWVudWl0ZW1cIiB9LCBjb3BpZWQgPyAnQ29waWVkJyA6ICdDb3B5IGFkZHJlc3MnKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IG9uQ2xpY2s6IG9wZW5Nb2RhbCwgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWRyb3Bkb3duLWxpc3QtaXRlbVwiLCByb2xlOiBcIm1lbnVpdGVtXCIgfSwgXCJDb25uZWN0IGEgZGlmZmVyZW50IHdhbGxldFwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IG9uQ2xpY2s6IGRpc2Nvbm5lY3QsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0LWl0ZW1cIiwgcm9sZTogXCJtZW51aXRlbVwiIH0sIFwiRGlzY29ubmVjdFwiKSkpKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LW11bHRpLWJ1dHRvbi5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldE1vZGFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVdhbGxldE1vZGFsKCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFdhbGxldE1vZGFsQ29udGV4dCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utd2FsbGV0LW1vZGFsLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vaG9va3MnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IsIFdhbGxldE5vdFJlYWR5RXJyb3IsIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXYWxsZXROb3RTZWxlY3RlZEVycm9yIH0gZnJvbSAnLi4vdXRpbHMvZXJyb3JzJztcbmltcG9ydCB7IFdhbGxldENvbnRleHQgfSBmcm9tICcuLi9ob29rcy91c2Utd2FsbGV0JztcbmNvbnN0IFdBTExFVF9JTklUSUFMX1NUQVRFID0ge1xuICAgIHdhbGxldDogbnVsbCxcbiAgICBhZGFwdGVyOiBudWxsLFxuICAgIHJlYWR5OiBmYWxzZSxcbiAgICBhZGRyZXNzOiBudWxsLFxuICAgIGNvbm5lY3RlZDogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IFdhbGxldFByb3ZpZGVyID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRQcm92aWRlcih7IGNoaWxkcmVuLCB3YWxsZXRzLCBhdXRvQ29ubmVjdCA9IGZhbHNlLCBvbkVycm9yOiBfb25FcnJvciA9IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksIH0pIHtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAvLyBUaGUgbWFpbiBzdGF0ZSBvZiB0aGUgd2FsbGV0IHByb3ZpZGVyXG4gICAgY29uc3QgW3sgd2FsbGV0LCBhZGFwdGVyLCByZWFkeSwgYWRkcmVzcywgY29ubmVjdGVkIH0sIHNldFN0YXRlXSA9IHVzZVN0YXRlKFdBTExFVF9JTklUSUFMX1NUQVRFKTtcbiAgICBjb25zdCBbY29ubmVjdGluZywgc2V0Q29ubmVjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Rpc2Nvbm5lY3RpbmcsIHNldERpc2Nvbm5lY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGlzQ29ubmVjdGluZyA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgaXNEaXNjb25uZWN0aW5nID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBpc1VubG9hZGluZyA9IHVzZVJlZihmYWxzZSk7XG4gICAgLy8gTWFwIHdhbGxldCBuYW1lcyB0byB3YWxsZXRzIGZvciBlYXNpZXIgdXNhZ2VcbiAgICBjb25zdCB3YWxsZXRzQnlOYW1lID0gdXNlTWVtbygoKSA9PiB3YWxsZXRzLnJlZHVjZSgod2FsbGV0c0J5TmFtZSwgd2FsbGV0KSA9PiB7XG4gICAgICAgIHdhbGxldHNCeU5hbWVbd2FsbGV0Lm5hbWVdID0gd2FsbGV0O1xuICAgICAgICByZXR1cm4gd2FsbGV0c0J5TmFtZTtcbiAgICB9LCB7fSksIFt3YWxsZXRzXSk7XG4gICAgLy8gV2hlbiB0aGUgc2VsZWN0ZWQgd2FsbGV0IGNoYW5nZXMsIHJlLWluaXRpYWxpemUgdGhlIHN0YXRlXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgd2FsbGV0ID0gKG5hbWUgJiYgd2FsbGV0c0J5TmFtZVtuYW1lXSkgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgYWRhcHRlciA9IHdhbGxldCAmJiB3YWxsZXQuYWRhcHRlcigpO1xuICAgICAgICBpZiAoYWRhcHRlcikge1xuICAgICAgICAgICAgY29uc3QgeyByZWFkeSwgYWRkcmVzcywgY29ubmVjdGVkIH0gPSBhZGFwdGVyO1xuICAgICAgICAgICAgc2V0U3RhdGUoeyB3YWxsZXQsIGFkYXB0ZXIsIGNvbm5lY3RlZCwgYWRkcmVzcywgcmVhZHkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRTdGF0ZShXQUxMRVRfSU5JVElBTF9TVEFURSk7XG4gICAgICAgIH1cbiAgICB9LCBbbmFtZSwgd2FsbGV0c0J5TmFtZSwgc2V0U3RhdGVdKTtcbiAgICAvLyBJZiBhdXRvQ29ubmVjdCBpcyBlbmFibGVkLCB0cnkgdG8gY29ubmVjdCB3aGVuIHRoZSBhZGFwdGVyIGNoYW5nZXMgYW5kIGlzIHJlYWR5XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzQ29ubmVjdGluZy5jdXJyZW50IHx8IGNvbm5lY3RpbmcgfHwgY29ubmVjdGVkIHx8ICFhdXRvQ29ubmVjdCB8fCAhYWRhcHRlciB8fCAhcmVhZHkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGlzQ29ubmVjdGluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRDb25uZWN0aW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHNlbGVjdGVkIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCB0aHJvdyBlcnJvciwgYnV0IG9uRXJyb3Igd2lsbCBzdGlsbCBiZSBjYWxsZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbm5lY3RpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBpc0Nvbm5lY3RpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuICAgIH0sIFtpc0Nvbm5lY3RpbmcsIGNvbm5lY3RpbmcsIGNvbm5lY3RlZCwgYXV0b0Nvbm5lY3QsIGFkYXB0ZXIsIHJlYWR5LCBzZXRDb25uZWN0aW5nLCBzZXROYW1lXSk7XG4gICAgLy8gSWYgdGhlIHdpbmRvdyBpcyBjbG9zaW5nIG9yIHJlbG9hZGluZywgaWdub3JlIGRpc2Nvbm5lY3QgYW5kIGVycm9yIGV2ZW50cyBmcm9tIHRoZSBhZGFwdGVyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgICAgICBpc1VubG9hZGluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGxpc3RlbmVyKTtcbiAgICB9LCBbaXNVbmxvYWRpbmddKTtcbiAgICAvLyBTZWxlY3QgYSB3YWxsZXQgYnkgbmFtZVxuICAgIGNvbnN0IHNlbGVjdCA9IHVzZUNhbGxiYWNrKChuZXdOYW1lKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBuZXdOYW1lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoYWRhcHRlcilcbiAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICBzZXROYW1lKG5ld05hbWUpO1xuICAgIH0pLCBbbmFtZSwgYWRhcHRlciwgc2V0TmFtZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIHJlYWR5IGV2ZW50XG4gICAgY29uc3Qgb25SZWFkeSA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFN0YXRlKChzdGF0ZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IHJlYWR5OiB0cnVlIH0pKSksIFtzZXRTdGF0ZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIGNvbm5lY3QgZXZlbnRcbiAgICBjb25zdCBvbkNvbm5lY3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgeyBjb25uZWN0ZWQsIGFkZHJlc3MsIHJlYWR5IH0gPSBhZGFwdGVyO1xuICAgICAgICBzZXRTdGF0ZSgoc3RhdGUpID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyBjb25uZWN0ZWQsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgcmVhZHkgfSkpKTtcbiAgICB9LCBbYWRhcHRlciwgc2V0U3RhdGVdKTtcbiAgICAvLyBIYW5kbGUgdGhlIGFkYXB0ZXIncyBkaXNjb25uZWN0IGV2ZW50XG4gICAgY29uc3Qgb25EaXNjb25uZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAvLyBDbGVhciB0aGUgc2VsZWN0ZWQgd2FsbGV0IHVubGVzcyB0aGUgd2luZG93IGlzIHVubG9hZGluZ1xuICAgICAgICBpZiAoIWlzVW5sb2FkaW5nLmN1cnJlbnQpXG4gICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgIH0sIFtpc1VubG9hZGluZywgc2V0TmFtZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIGVycm9yIGV2ZW50LCBhbmQgbG9jYWwgZXJyb3JzXG4gICAgY29uc3Qgb25FcnJvciA9IHVzZUNhbGxiYWNrKChlcnJvcikgPT4ge1xuICAgICAgICAvLyBDYWxsIHRoZSBwcm92aWRlZCBlcnJvciBoYW5kbGVyIHVubGVzcyB0aGUgd2luZG93IGlzIHVubG9hZGluZ1xuICAgICAgICBpZiAoIWlzVW5sb2FkaW5nLmN1cnJlbnQpXG4gICAgICAgICAgICBfb25FcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9LCBbaXNVbmxvYWRpbmcsIF9vbkVycm9yXSk7XG4gICAgLy8gQ29ubmVjdCB0aGUgYWRhcHRlciB0byB0aGUgd2FsbGV0XG4gICAgY29uc3QgY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKGlzQ29ubmVjdGluZy5jdXJyZW50IHx8IGNvbm5lY3RpbmcgfHwgZGlzY29ubmVjdGluZyB8fCBjb25uZWN0ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghd2FsbGV0IHx8ICFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFyZWFkeSkge1xuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHNlbGVjdGVkIHdhbGxldFxuICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHdhbGxldC51cmwsICdfYmxhbmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFJlYWR5RXJyb3IoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaXNDb25uZWN0aW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBzZXRDb25uZWN0aW5nKHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgeWllbGQgYWRhcHRlci5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgc2VsZWN0ZWQgd2FsbGV0XG4gICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgICAgICAgICAgLy8gUmV0aHJvdyB0aGUgZXJyb3IsIGFuZCBvbkVycm9yIHdpbGwgYWxzbyBiZSBjYWxsZWRcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0Q29ubmVjdGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpc0Nvbm5lY3RpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSksIFtpc0Nvbm5lY3RpbmcsIGNvbm5lY3RpbmcsIGRpc2Nvbm5lY3RpbmcsIGNvbm5lY3RlZCwgd2FsbGV0LCBhZGFwdGVyLCBvbkVycm9yLCByZWFkeSwgc2V0Q29ubmVjdGluZywgc2V0TmFtZV0pO1xuICAgIC8vIERpc2Nvbm5lY3QgdGhlIGFkYXB0ZXIgZnJvbSB0aGUgd2FsbGV0XG4gICAgY29uc3QgZGlzY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKGlzRGlzY29ubmVjdGluZy5jdXJyZW50IHx8IGRpc2Nvbm5lY3RpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHJldHVybiBzZXROYW1lKG51bGwpO1xuICAgICAgICBpc0Rpc2Nvbm5lY3RpbmcuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHNldERpc2Nvbm5lY3RpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB5aWVsZCBhZGFwdGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCB3YWxsZXRcbiAgICAgICAgICAgIHNldE5hbWUobnVsbCk7XG4gICAgICAgICAgICAvLyBSZXRocm93IHRoZSBlcnJvciwgYW5kIG9uRXJyb3Igd2lsbCBhbHNvIGJlIGNhbGxlZFxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBzZXREaXNjb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlzRGlzY29ubmVjdGluZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KSwgW2lzRGlzY29ubmVjdGluZywgZGlzY29ubmVjdGluZywgYWRhcHRlciwgc2V0RGlzY29ubmVjdGluZywgc2V0TmFtZV0pO1xuICAgIGNvbnN0IGludm9rZVJlYWQgPSB1c2VDYWxsYmFjaygocmVxdWVzdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5pbnZva2VSZWFkKHJlcXVlc3QpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgY29uc3QgaW52b2tlUmVhZE11bHRpID0gdXNlQ2FsbGJhY2soKHJlcXVlc3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuaW52b2tlUmVhZE11bHRpKHJlcXVlc3QpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgY29uc3QgaW52b2tlID0gdXNlQ2FsbGJhY2soKHJlcXVlc3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuaW52b2tlKHJlcXVlc3QpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgY29uc3QgaW52b2tlTXVsdGkgPSB1c2VDYWxsYmFjaygocmVxdWVzdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5pbnZva2VNdWx0aShyZXF1ZXN0KTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIGNvbnN0IGdldE5ldHdvcmtzID0gdXNlQ2FsbGJhY2soKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5nZXROZXR3b3JrcygpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgY29uc3Qgc2lnbk1lc3NhZ2UgPSB1c2VDYWxsYmFjaygocmVxdWVzdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5zaWduTWVzc2FnZShyZXF1ZXN0KTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIC8vIFNldHVwIGFuZCB0ZWFyZG93biBldmVudCBsaXN0ZW5lcnMgd2hlbiB0aGUgYWRhcHRlciBjaGFuZ2VzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGFkYXB0ZXIpIHtcbiAgICAgICAgICAgIGFkYXB0ZXIub24oJ3JlYWR5Jywgb25SZWFkeSk7XG4gICAgICAgICAgICBhZGFwdGVyLm9uKCdjb25uZWN0Jywgb25Db25uZWN0KTtcbiAgICAgICAgICAgIGFkYXB0ZXIub24oJ2Rpc2Nvbm5lY3QnLCBvbkRpc2Nvbm5lY3QpO1xuICAgICAgICAgICAgYWRhcHRlci5vbignZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRhcHRlci5vZmYoJ3JlYWR5Jywgb25SZWFkeSk7XG4gICAgICAgICAgICAgICAgYWRhcHRlci5vZmYoJ2Nvbm5lY3QnLCBvbkNvbm5lY3QpO1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIub2ZmKCdkaXNjb25uZWN0Jywgb25EaXNjb25uZWN0KTtcbiAgICAgICAgICAgICAgICBhZGFwdGVyLm9mZignZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCBbYWRhcHRlciwgb25SZWFkeSwgb25Db25uZWN0LCBvbkRpc2Nvbm5lY3QsIG9uRXJyb3JdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0Q29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZToge1xuICAgICAgICAgICAgd2FsbGV0cyxcbiAgICAgICAgICAgIGF1dG9Db25uZWN0LFxuICAgICAgICAgICAgd2FsbGV0LFxuICAgICAgICAgICAgYWRhcHRlcixcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICByZWFkeSxcbiAgICAgICAgICAgIGNvbm5lY3RlZCxcbiAgICAgICAgICAgIGNvbm5lY3RpbmcsXG4gICAgICAgICAgICBkaXNjb25uZWN0aW5nLFxuICAgICAgICAgICAgc2VsZWN0LFxuICAgICAgICAgICAgY29ubmVjdCxcbiAgICAgICAgICAgIGRpc2Nvbm5lY3QsXG4gICAgICAgICAgICBpbnZva2VSZWFkLFxuICAgICAgICAgICAgaW52b2tlUmVhZE11bHRpLFxuICAgICAgICAgICAgaW52b2tlLFxuICAgICAgICAgICAgaW52b2tlTXVsdGksXG4gICAgICAgICAgICBnZXROZXR3b3JrcyxcbiAgICAgICAgICAgIHNpZ25NZXNzYWdlLFxuICAgICAgICB9IH0sIGNoaWxkcmVuKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1wcm92aWRlci5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VXYWxsZXQoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoV2FsbGV0Q29udGV4dCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utd2FsbGV0LmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2hvb2tzJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgV2FsbGV0RXJyb3IgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZSc7XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE5vdFNlbGVjdGVkRXJyb3InO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9ycy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2l0eW9memlvbi9uZW9uLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50ZW1pdHRlcjNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJfdXNlSW50ZXJzZWN0aW9uIiwib2JqIiwiX19lc01vZHVsZSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY2F0Y2giLCJlcnIiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsImNvbnNvbGUiLCJ3YXJuIiwicCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsIm1hcCIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJwdXNoIiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhuYW1lIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsImxlbmd0aCIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJ1cmxQcm90b01hdGNoIiwibWF0Y2giLCJ1cmxBc1N0cmluZ05vUHJvdG8iLCJ1cmxQYXJ0cyIsInNwbGl0Iiwibm9ybWFsaXplZFVybCIsIm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInNvbWUiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIl9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04iLCJoaXN0b3J5Iiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsIm4iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJKU09OIiwic3RyaW5naWZ5IiwieCIsInBhZ2VYT2Zmc2V0IiwieSIsInBhZ2VZT2Zmc2V0IiwiZ2V0SXRlbSIsInBhcnNlIiwicGFyc2VSZWxhdGl2ZVVybCIsImlzU3NyIiwiX2JwcyIsImNoYW5nZSIsIl9zaGFsbG93IiwiY29tcG9uZW50cyIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsImlzUmVhZHkiLCJnc3NwIiwiZ2lwIiwiYXBwR2lwIiwiZ3NwIiwibG9jYXRpb24iLCJzZWFyY2giLCJfX05FWFRfSEFTX1JFV1JJVEVTIiwiaG9zdG5hbWUiLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUmVzdG9yYXRpb24iLCJyZWxvYWQiLCJiYWNrIiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsInByZXZMb2NhbGUiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsImFzTm9CYXNlUGF0aCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsIl9pbkZsaWdodFJvdXRlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwibG9jYWxlQ2hhbmdlIiwib25seUFIYXNoQ2hhbmdlIiwiZW1pdCIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyZXdyaXRlc1Jlc3VsdCIsIm1hdGNoZWRQYWdlIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyZWYxIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiX3Njcm9sbCIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJlcnIyIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInBhdGhuYW1lMiIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwMSIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwidXNlV2FsbGV0IiwiV2FsbGV0TXVsdGlCdXR0b24iLCJIZWFkIiwiTmVvbiIsIkluZGV4IiwiTmVvQ29udHJhY3RIYXNoIiwiQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2giLCJicmlhbiIsInB1Ymxpc2hJbnZva2UiLCJycGNBZGRyZXNzIiwibmV0d29ya01hZ2ljIiwic2NyaXB0SGFzaCIsIm9wZXJhdGlvbiIsImFjY291bnQiLCJjb250cmFjdCIsImV4cGVyaW1lbnRhbCIsIlNtYXJ0Q29udHJhY3QiLCJ1IiwiSGV4U3RyaW5nIiwiZnJvbUhleCIsImludm9rZSIsImxvZyIsImNvbm5lY3RlZCIsImdldE5ldHdvcmtzIiwiYWRkcmVzcyIsInNldEFjY291bnQiLCJ3YWxsZXROZXR3b3JrIiwic2V0V2FsbGV0TmV0d29yayIsInNldFN0YXRlIiwibmVvbGluZSIsInNldE5lb0xpbmUiLCJuZW9saW5lTjMiLCJzZXROZW9MaW5lMyIsImJsb2NrSGVpZ2h0Iiwic2V0QmxvY2tIZWlnaHQiLCJmZXRjaFdhbGxldE5ldHdvcmsiLCJkZWZhdWx0TmV0d29yayIsImluaXREYXAiLCJnZXRBY2NvdW50IiwiZ2V0UHVibGljS2V5IiwicHVibGljS2V5RGF0YSIsInB1YmxpY0tleSIsInNjcnBBZGRyZXNzIiwiU2NyaXB0SGFzaFRvQWRkcmVzcyIsImRlc2NyaXB0aW9uIiwicGxhY2VCZXQiLCJzZW5kIiwiZnJvbUFkZHJlc3MiLCJ0b0FkZHJlc3MiLCJhc3NldCIsImFtb3VudCIsImZlZSIsImJyb2FkY2FzdE92ZXJyaWRlIiwidHhpZCIsIm5vZGVVUkwiLCJpbml0TjNEYXBpIiwiTkVPTGluZU4zIiwiSW5pdCIsImluaXRDb21tb25EYXBpIiwiTkVPTGluZSIsImJhY2tncm91bmRDb2xvciIsIkV2ZW50RW1pdHRlciIsIldpdG5lc3NTY29wZSIsIkJhc2VXYWxsZXRBZGFwdGVyIiwiV2FsbGV0RXJyb3IiLCJXYWxsZXROb3RGb3VuZEVycm9yIiwiYXJndW1lbnRzIiwiV2FsbGV0Tm90SW5zdGFsbGVkRXJyb3IiLCJXYWxsZXROb3RSZWFkeUVycm9yIiwiV2FsbGV0Q29ubmVjdGlvbkVycm9yIiwiV2FsbGV0RGlzY29ubmVjdGVkRXJyb3IiLCJXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IiLCJXYWxsZXRBY2NvdW50RXJyb3IiLCJXYWxsZXROb3RDb25uZWN0ZWRFcnJvciIsIldhbGxldFRpbWVvdXRFcnJvciIsIldhbGxldFdpbmRvd0Jsb2NrZWRFcnJvciIsIldhbGxldFdpbmRvd0Nsb3NlZEVycm9yIiwiV2FsbGV0TWV0aG9kTm90U3VwcG9ydGVkRXJyb3IiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJhZG9wdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJyZWplY3RlZCIsImRvbmUiLCJhcHBseSIsInBvbGwiLCJpbnRlcnZhbCIsImNvdW50IiwicG9sbFVudGlsUmVhZHkiLCJhZGFwdGVyIiwicG9sbEludGVydmFsIiwicG9sbENvdW50IiwicnBjIiwid2FpdFR4IiwidHhJZCIsInJlYWRGcmVxdWVuY3kiLCJ0aW1lb3V0IiwicnBjQ2xpZW50IiwiUlBDQ2xpZW50IiwidHJhbnNhY3Rpb24iLCJnZXRSYXdUcmFuc2FjdGlvbiIsIlJlYWN0IiwiV2FsbGV0QnV0dG9uIiwibWVtbyIsImNsYXNzTmFtZSIsImVuZEljb24iLCJzdGFydEljb24iLCJzdHlsZSIsInRhYkluZGV4IiwianVzdGlmeUNvbnRlbnQiLCJ1c2VMYXlvdXRFZmZlY3QiLCJXYWxsZXRDb2xsYXBzZSIsImV4cGFuZGVkIiwiaW5zdGFudCIsInRyYW5zaXRpb24iLCJvcGVuQ29sbGFwc2UiLCJub2RlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xvc2VDb2xsYXBzZSIsIm9mZnNldEhlaWdodCIsIm92ZXJmbG93IiwiaGFuZGxlQ29tcGxldGUiLCJoYW5kbGVUcmFuc2l0aW9uRW5kIiwicHJvcGVydHlOYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJvbGUiLCJfX3Jlc3QiLCJzIiwidCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImdldE93blByb3BlcnR5U3ltYm9scyIsImkiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIldhbGxldEljb24iLCJXYWxsZXRDb25uZWN0QnV0dG9uIiwiX2EiLCJ3YWxsZXQiLCJjb25uZWN0IiwiY29ubmVjdGluZyIsImhhbmRsZUNsaWNrIiwiV2FsbGV0RGlzY29ubmVjdEJ1dHRvbiIsImRpc2Nvbm5lY3RpbmciLCJpY29uIiwiYWx0IiwiV2FsbGV0TGlzdEl0ZW0iLCJ1c2VXYWxsZXRNb2RhbCIsIldhbGxldE1vZGFsQnV0dG9uIiwiV2FsbGV0TW9kYWxDb250ZXh0IiwiV2FsbGV0TW9kYWwiLCJXYWxsZXRNb2RhbFByb3ZpZGVyIiwiUHJvdmlkZXIiLCJjcmVhdGVQb3J0YWwiLCJsb2dvIiwiZmVhdHVyZWRXYWxsZXRzIiwiY29udGFpbmVyIiwid2FsbGV0cyIsInNlbGVjdCIsInNldEV4cGFuZGVkIiwiZmFkZUluIiwic2V0RmFkZUluIiwicG9ydGFsIiwic2V0UG9ydGFsIiwiZmVhdHVyZWQiLCJtb3JlIiwiaGlkZU1vZGFsIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVXYWxsZXRDbGljayIsIndhbGxldE5hbWUiLCJoYW5kbGVDb2xsYXBzZUNsaWNrIiwiaGFuZGxlVGFiS2V5IiwiZm9jdXNhYmxlRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmlyc3RFbGVtZW50IiwibGFzdEVsZW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiZm9jdXMiLCJoYW5kbGVLZXlEb3duIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIndpZHRoIiwiZCIsIkZyYWdtZW50IiwieG1sbnMiLCJvbk1vdXNlRG93biIsImNvcGllZCIsInNldENvcGllZCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIl9hZGRyZXNzIiwiY29weUFkZHJlc3MiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJvcGVuRHJvcGRvd24iLCJjbG9zZURyb3Bkb3duIiwib3Blbk1vZGFsIiwibGlzdGVuZXIiLCJjb250YWlucyIsInBvaW50ZXJFdmVudHMiLCJjcmVhdGVDb250ZXh0IiwiV2FsbGV0Tm90U2VsZWN0ZWRFcnJvciIsIldhbGxldENvbnRleHQiLCJXQUxMRVRfSU5JVElBTF9TVEFURSIsIldhbGxldFByb3ZpZGVyIiwiYXV0b0Nvbm5lY3QiLCJvbkVycm9yIiwiX29uRXJyb3IiLCJzZXROYW1lIiwic2V0Q29ubmVjdGluZyIsInNldERpc2Nvbm5lY3RpbmciLCJpc0Nvbm5lY3RpbmciLCJpc0Rpc2Nvbm5lY3RpbmciLCJpc1VubG9hZGluZyIsIndhbGxldHNCeU5hbWUiLCJyZWR1Y2UiLCJuZXdOYW1lIiwib25SZWFkeSIsIm9uQ29ubmVjdCIsIm9uRGlzY29ubmVjdCIsIm9wZW4iLCJpbnZva2VSZWFkIiwicmVxdWVzdCIsImludm9rZVJlYWRNdWx0aSIsImludm9rZU11bHRpIiwic2lnbk1lc3NhZ2UiLCJvZmYiXSwic291cmNlUm9vdCI6IiJ9