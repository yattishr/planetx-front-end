(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/wallet-connection-provider.tsx":
/*!***************************************************!*\
  !*** ./components/wallet-connection-provider.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletConnectionProvider": () => (/* binding */ WalletConnectionProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-wallets */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/index.js");
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Projects\\planet-x-frontend-dapp\\components\\wallet-connection-provider.tsx";





const WalletConnectionProvider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function WalletConnectionProvider({
  children
}) {
  // @rentfuse-labs/neo-wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [(0,_rentfuse_labs_neo_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getNeoLineWallet)(), (0,_rentfuse_labs_neo_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getO3Wallet)(), (0,_rentfuse_labs_neo_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getWalletConnectWallet)({
    options: {
      chains: ['neo3:testnet'],
      // ['neo3:mainnet', 'neo3:testnet', 'neo3:private']
      methods: ['invokeFunction'],
      // ['invokeFunction',any other method name present on the RpcServer eg. getversion]
      appMetadata: {
        name: 'Example',
        description: 'Example description',
        url: 'https://neonova.space',
        icons: ['https://raw.githubusercontent.com/rentfuse-labs/neonova/main/neonova-icon.png']
      }
    },
    logger: 'debug',
    relayProvider: 'wss://relay.walletconnect.org'
  }), (0,_rentfuse_labs_neo_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getNeonWalletConnectWallet)({
    options: {
      chains: ['neo3:testnet'],
      // ['neo3:mainnet', 'neo3:testnet', 'neo3:private']
      methods: ['invokeFunction'],
      // ['invokeFunction',any other method name present on the RpcServer eg. getversion]
      appMetadata: {
        name: 'Example',
        description: 'Example description',
        url: 'https://neonova.space',
        icons: ['https://raw.githubusercontent.com/rentfuse-labs/neonova/main/neonova-icon.png']
      }
    },
    logger: 'debug',
    relayProvider: 'wss://relay.walletconnect.org'
  }), (0,_rentfuse_labs_neo_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_2__.getOneGateWallet)()], []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.WalletProvider, {
    wallets: wallets,
    autoConnect: true,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 3
  }, this);
});

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _App)
/* harmony export */ });
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react-ui */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_wallet_connection_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/wallet-connection-provider */ "./components/wallet-connection-provider.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Projects\\planet-x-frontend-dapp\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Use require instead of import, and order matters



__webpack_require__(/*! ../styles/global.css */ "./styles/global.css");

__webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react-ui/styles.css */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/styles.css");

function _App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_wallet_connection_provider__WEBPACK_IMPORTED_MODULE_2__.WalletConnectionProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_rentfuse_labs_neo_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_0__.WalletModalProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

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

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-neoline/lib/adapter.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-neoline/lib/adapter.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeoLineWalletAdapter": () => (/* binding */ NeoLineWalletAdapter)
/* harmony export */ });
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-base */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/index.js");
/* harmony import */ var _utils_neoline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/neoline */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-neoline/lib/utils/neoline.js");
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



const DEFAULT_WALLET_CONFIG = {
  options: null
}; // Reference at https://neoline.io/dapi/N3.html (Taken on 08/11/21)

class NeoLineWalletAdapter extends _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.BaseWalletAdapter {
  constructor(config = DEFAULT_WALLET_CONFIG) {
    super();
    this._address = null;
    this._connecting = false;
    this._options = config.options;
    if (!this.ready) (0,_rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get address() {
    return this._address;
  }

  get ready() {
    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    return !!this._address;
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;

        try {
          // Get the neoline client initializing the wallet
          this._client = yield (0,_utils_neoline__WEBPACK_IMPORTED_MODULE_1__.NeoLineN3Init)();
          this._clientCommon = yield (0,_utils_neoline__WEBPACK_IMPORTED_MODULE_1__.NeoLineInit)();
        } catch (error) {
          if (error instanceof _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletError) throw error;
          throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        if (!this._client || !this._clientCommon) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletAccountError();
        let account;

        try {
          // NeoLine asks the user to connect the dapp when calling the getAccount method
          account = yield this._client.getAccount();
        } catch (error) {
          throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        if (!account) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletAccountError();
        this._address = account.address; // Add a listener to cleanup of disconnection

        window.addEventListener('NEOLine.NEO.EVENT.DISCONNECTED', this._disconnected);
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const client = this._client;

      if (client) {
        try {
          // TODO: How?
          //await this._client.disconnect();
          this._address = null;
          this._client = undefined;
          this._clientCommon = undefined;
        } catch (error) {
          this.emit('error', new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        }
      }

      this.emit('disconnect');
    });
  }

  invokeRead(request) {
    return __awaiter(this, void 0, void 0, function* () {
      const client = this._client;
      if (!client) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();

      try {
        const response = yield client.invokeRead({
          scriptHash: request.scriptHash,
          operation: request.operation,
          args: request.args,
          signers: request.signers
        });
        return this._responseToReadResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  invokeReadMulti(request) {
    return __awaiter(this, void 0, void 0, function* () {
      const client = this._client;
      if (!client) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();

      try {
        const response = yield client.invokeReadMulti({
          invokeReadArgs: request.invocations,
          signers: request.signers
        });
        return this._responseToReadResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  invoke(request) {
    return __awaiter(this, void 0, void 0, function* () {
      const client = this._client;
      if (!client) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();

      try {
        const response = yield client.invoke({
          scriptHash: request.scriptHash,
          operation: request.operation,
          args: request.args,
          signers: request.signers,
          fee: request.fee,
          extraSystemFee: request.extraSystemFee,
          broadcastOverride: request.broadcastOverride
        });
        return this._responseToWriteResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  invokeMulti(request) {
    return __awaiter(this, void 0, void 0, function* () {
      const client = this._client;
      if (!client) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();

      try {
        const response = yield client.invokeMultiple({
          invokeArgs: request.invocations,
          signers: request.signers,
          fee: request.fee,
          extraSystemFee: request.extraSystemFee,
          broadcastOverride: request.broadcastOverride
        });
        return this._responseToWriteResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  getNetworks() {
    return __awaiter(this, void 0, void 0, function* () {
      const clientCommon = this._clientCommon;
      if (!clientCommon) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();

      try {
        const response = yield clientCommon.getNetworks();
        return this._responseToGetNetworksResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signMessage(request) {
    return __awaiter(this, void 0, void 0, function* () {
      const client = this._client;
      if (!client) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletNotConnectedError();

      try {
        const response = yield client.signMessage({
          message: request.message
        });
        return this._responseToSignMessageResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  _responseToReadResult(response) {
    // If the state is halt it means that everything went well
    if (response.state === 'HALT') {
      return {
        status: 'success',
        data: {
          script: response.script,
          state: response.state,
          gasConsumed: response.gas_consumed,
          exception: null,
          stack: response.stack
        }
      };
    } // Otherwise an error occurred and so return it
    // TODO: message and code where?


    return {
      status: 'error',
      message: undefined,
      code: undefined
    };
  }

  _responseToWriteResult(response) {
    return {
      status: 'success',
      data: {
        txId: response.txid
      }
    };
  }

  _responseToGetNetworksResult(response) {
    return {
      status: 'success',
      data: {
        networks: response.networks,
        defaultNetwork: response.defaultNetwork
      }
    };
  }

  _responseToSignMessageResult(response) {
    return {
      status: 'success',
      data: {
        publicKey: response.publicKey,
        data: response.data,
        salt: response.salt,
        message: response.message
      }
    };
  }

  _disconnected() {
    const client = this._client;

    if (client) {
      window.removeEventListener('NEOLine.NEO.EVENT.DISCONNECTED', this._disconnected);
      this._address = null;
      this._client = undefined;
      this.emit('error', new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__.WalletDisconnectedError());
      this.emit('disconnect');
    }
  }

}

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-neoline/lib/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-neoline/lib/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-neoline/lib/adapter.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _adapter__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _adapter__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-neoline/lib/utils/neoline.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-neoline/lib/utils/neoline.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeoLineScope": () => (/* binding */ NeoLineScope),
/* harmony export */   "NeoLineChainId": () => (/* binding */ NeoLineChainId),
/* harmony export */   "NeoLineN3Init": () => (/* binding */ NeoLineN3Init),
/* harmony export */   "NeoLineInit": () => (/* binding */ NeoLineInit)
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

var NeoLineScope;

(function (NeoLineScope) {
  NeoLineScope[NeoLineScope["None"] = 0] = "None";
  NeoLineScope[NeoLineScope["CalledByEntry"] = 1] = "CalledByEntry";
  NeoLineScope[NeoLineScope["CustomContracts"] = 16] = "CustomContracts";
  NeoLineScope[NeoLineScope["CustomGroups"] = 32] = "CustomGroups";
  NeoLineScope[NeoLineScope["Global"] = 128] = "Global";
})(NeoLineScope || (NeoLineScope = {}));

var NeoLineChainId;

(function (NeoLineChainId) {
  NeoLineChainId[NeoLineChainId["Neo2MainNet"] = 1] = "Neo2MainNet";
  NeoLineChainId[NeoLineChainId["Neo2TestNet"] = 2] = "Neo2TestNet";
  NeoLineChainId[NeoLineChainId["Neo3MainNet"] = 3] = "Neo3MainNet";
  NeoLineChainId[NeoLineChainId["Neo3TestNet"] = 4] = "Neo3TestNet";
})(NeoLineChainId || (NeoLineChainId = {}));

function NeoLineN3Init() {
  return __awaiter(this, void 0, void 0, function* () {
    // Use an async pattern as the global NEOLineN3 is not available while
    // the NEOLine.NEO.EVENT.READY event is still firing:
    return new Promise(resolve => setTimeout(() => {
      resolve(new window.NEOLineN3.Init());
    }, 10));
  });
}
function NeoLineInit() {
  return __awaiter(this, void 0, void 0, function* () {
    // Use an async pattern as the global NEOLineN3 is not available while
    // the NEOLine.NEO.EVENT.READY event is still firing:
    return new Promise(resolve => setTimeout(() => {
      resolve(new window.NEOLine.Init());
    }, 10));
  });
}

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-o3/lib/adapter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-o3/lib/adapter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O3WalletAdapter": () => (/* binding */ O3WalletAdapter)
/* harmony export */ });
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-base */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/index.js");
/* harmony import */ var neo3_dapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! neo3-dapi */ "neo3-dapi");
/* harmony import */ var neo3_dapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(neo3_dapi__WEBPACK_IMPORTED_MODULE_0__);
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



const DEFAULT_WALLET_CONFIG = {
  options: null
}; // Reference at https://neo3dapidocs.o3.network/#getting-started (Taken on 10/11/21)

class O3WalletAdapter extends _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.BaseWalletAdapter {
  constructor(config = DEFAULT_WALLET_CONFIG) {
    super();
    this._address = null;
    this._connecting = false;
    this._options = config.options;
  }

  get address() {
    return this._address;
  }

  get ready() {
    return false;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    return !!this._address;
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true; // Taken from o3 specs

        let account;

        try {
          // O3 asks the user to connect the dapp when calling the getAccount method
          account = yield neo3_dapi__WEBPACK_IMPORTED_MODULE_0___default().getAccount();
        } catch (error) {
          throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        if (!account) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletAccountError();
        this._address = account.address; // Add a listener to cleanup of disconnection

        neo3_dapi__WEBPACK_IMPORTED_MODULE_0___default().addEventListener((neo3_dapi__WEBPACK_IMPORTED_MODULE_0___default().Constants.EventName.DISCONNECTED), this._disconnected);
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        // TODO: How?
        //await neo3Dapi.disconnect();
        this._address = null;
      } catch (error) {
        this.emit('error', new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
      }

      this.emit('disconnect');
    });
  }

  invokeRead(request) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const response = yield neo3_dapi__WEBPACK_IMPORTED_MODULE_0___default().invokeRead({
          scriptHash: request.scriptHash,
          operation: request.operation,
          args: request.args,
          signers: request.signers
        });
        return this._responseToReadResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  invokeReadMulti(request) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const response = yield neo3_dapi__WEBPACK_IMPORTED_MODULE_0___default().invokeReadMulti({
          invokeReadArgs: request.invocations,
          signers: request.signers
        });
        return this._responseToReadResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  invoke(request) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const response = yield neo3_dapi__WEBPACK_IMPORTED_MODULE_0___default().invoke({
          scriptHash: request.scriptHash,
          operation: request.operation,
          args: request.args,
          signers: request.signers,
          fee: request.fee,
          extraSystemFee: request.extraSystemFee,
          broadcastOverride: request.broadcastOverride
        });
        return this._responseToWriteResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  invokeMulti(request) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const response = yield neo3_dapi__WEBPACK_IMPORTED_MODULE_0___default().invokeMulti({
          invokeArgs: request.invocations,
          signers: request.signers,
          fee: request.fee,
          extraSystemFee: request.extraSystemFee,
          broadcastOverride: request.broadcastOverride
        });
        return this._responseToWriteResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  getNetworks() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const response = yield neo3_dapi__WEBPACK_IMPORTED_MODULE_0___default().getNetworks();
        return this._responseToGetNetworksResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signMessage(request) {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const response = yield neo3_dapi__WEBPACK_IMPORTED_MODULE_0___default().signMessage({
          message: request.message
        });
        return this._responseToSignMessageResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  _responseToReadResult(response) {
    // If the state is halt it means that everything went well
    if (response.state === 'HALT') {
      return {
        status: 'success',
        data: {
          script: response.script,
          state: response.state,
          gasConsumed: response.gas_consumed,
          exception: null,
          stack: response.stack
        }
      };
    } // Otherwise an error occurred and so return it
    // TODO: message and code where?


    return {
      status: 'error',
      message: undefined,
      code: undefined
    };
  }

  _responseToWriteResult(response) {
    return {
      status: 'success',
      data: {
        txId: response.txid
      }
    };
  }

  _responseToGetNetworksResult(response) {
    return {
      status: 'success',
      data: {
        networks: response.networks,
        defaultNetwork: response.defaultNetwork
      }
    };
  }

  _responseToSignMessageResult(response) {
    return {
      status: 'success',
      data: {
        publicKey: response.publicKey,
        data: response.data,
        salt: response.salt,
        message: response.message
      }
    };
  }

  _disconnected() {
    neo3_dapi__WEBPACK_IMPORTED_MODULE_0___default().removeEventListener((neo3_dapi__WEBPACK_IMPORTED_MODULE_0___default().Constants.EventName.DISCONNECTED));
    this._address = null;
    this.emit('error', new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletDisconnectedError());
    this.emit('disconnect');
  }

}

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-o3/lib/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-o3/lib/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-o3/lib/adapter.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _adapter__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _adapter__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-onegate/lib/adapter.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-onegate/lib/adapter.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneGateWalletAdapter": () => (/* binding */ OneGateWalletAdapter)
/* harmony export */ });
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-base */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/index.js");
/* harmony import */ var _neongd_neo_dapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @neongd/neo-dapi */ "@neongd/neo-dapi");
/* harmony import */ var _neongd_neo_dapi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_neongd_neo_dapi__WEBPACK_IMPORTED_MODULE_0__);
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



const DEFAULT_WALLET_CONFIG = {
  options: null
}; // Reference at https://this._oneGateDapidocs.o3.network/#getting-started (Taken on 10/11/21)

class OneGateWalletAdapter extends _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.BaseWalletAdapter {
  constructor(config = DEFAULT_WALLET_CONFIG) {
    super();
    this._address = null;
    this._connecting = false;
    this._options = config.options;
    if (!this.ready) (0,_rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.pollUntilReady)(this, config.pollInterval || 1000, config.pollCount || 3);
  }

  get address() {
    return this._address;
  }

  get ready() {
    return  false && 0;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    return !!this._address;
  }

  connect() {
    var _a;

    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;

        try {
          this._oneGateProvider = window.OneGate;

          if (this._oneGateProvider) {
            // Get the neoline client initializing the wallet
            this._oneGateDapi = new _neongd_neo_dapi__WEBPACK_IMPORTED_MODULE_0__.NeoDapi(this._oneGateProvider);
          }
        } catch (error) {
          if (error instanceof _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletError) throw error;
          throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        if (!this._oneGateDapi) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletAccountError(); // Taken from https://github.com/neo-ngd/neo-dapi-monorepo/tree/master/packages/neo-dapi

        let account;

        try {
          // OneGate asks the user to connect the dapp when calling the getAccount method
          account = yield this._oneGateDapi.getAccount();
        } catch (error) {
          throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        if (!account) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletAccountError();
        this._address = account.address; // Add a listener to cleanup of disconnection

        (_a = this._oneGateProvider) === null || _a === void 0 ? void 0 : _a.on('disconnect', this._disconnected);
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const client = this._oneGateDapi;

      if (client) {
        try {
          // TODO: How?
          //await this._oneGateDapi.disconnect();
          this._address = null;
          this._oneGateDapi = undefined;
        } catch (error) {
          this.emit('error', new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        }
      }

      this.emit('disconnect');
    });
  }

  invokeRead(request) {
    return __awaiter(this, void 0, void 0, function* () {
      const client = this._oneGateDapi;
      if (!client) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletNotConnectedError();

      try {
        const response = yield client.invokeRead({
          scriptHash: request.scriptHash,
          operation: request.operation,
          args: request.args,
          signers: request.signers
        });
        return this._responseToReadResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  invokeReadMulti(request) {
    return __awaiter(this, void 0, void 0, function* () {
      const client = this._oneGateDapi;
      if (!client) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletNotConnectedError();

      try {
        const response = yield client.invokeReadMulti({
          invocations: request.invocations,
          signers: request.signers
        });
        return this._responseToReadResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  invoke(request) {
    return __awaiter(this, void 0, void 0, function* () {
      const client = this._oneGateDapi;
      if (!client) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletNotConnectedError();

      try {
        const response = yield client.invoke({
          scriptHash: request.scriptHash,
          operation: request.operation,
          args: request.args,
          signers: request.signers,
          extraNetworkFee: request.fee,
          extraSystemFee: request.extraSystemFee,
          broadcastOverride: request.broadcastOverride
        });
        return this._responseToWriteResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  invokeMulti(request) {
    return __awaiter(this, void 0, void 0, function* () {
      const client = this._oneGateDapi;
      if (!client) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletNotConnectedError();

      try {
        const response = yield client.invokeMulti({
          invocations: request.invocations,
          signers: request.signers,
          extraNetworkFee: request.fee,
          extraSystemFee: request.extraSystemFee,
          broadcastOverride: request.broadcastOverride
        });
        return this._responseToWriteResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  getNetworks() {
    return __awaiter(this, void 0, void 0, function* () {
      const client = this._oneGateDapi;
      if (!client) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletNotConnectedError();

      try {
        const response = yield client.getNetworks();
        return this._responseToGetNetworksResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signMessage(request) {
    return __awaiter(this, void 0, void 0, function* () {
      const client = this._oneGateDapi;
      if (!client) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletNotConnectedError(); // Not currently supported by Neo dAPI

      const error = {
        message: 'API method not supported',
        error: new Error('API method not supported'),
        name: 'MethodNotSupportedError'
      };
      this.emit('error', new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletMethodNotSupportedError());
      throw error;
    });
  }

  _responseToReadResult(response) {
    // If the state is halt it means that everything went well
    if (response.state === 'HALT') {
      return {
        status: 'success',
        data: {
          script: response.script,
          state: response.state,
          gasConsumed: response.gas_consumed,
          exception: null,
          stack: response.stack
        }
      };
    } // Otherwise an error occurred and so return it
    // TODO: message and code where?


    return {
      status: 'error',
      message: undefined,
      code: undefined
    };
  }

  _responseToWriteResult(response) {
    return {
      status: 'success',
      data: {
        txId: response.txid
      }
    };
  }

  _responseToGetNetworksResult(response) {
    return {
      status: 'success',
      data: {
        networks: response.networks,
        defaultNetwork: response.defaultNetwork
      }
    };
  }

  _disconnected() {
    const provider = this._oneGateProvider;

    if (provider) {
      provider.removeListener('disconnect', this._disconnected);
      this._address = null;
      this._oneGateDapi = undefined;
      this._oneGateProvider = undefined;
      this.emit('error', new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletDisconnectedError());
      this.emit('disconnect');
    }
  }

}

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-onegate/lib/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-onegate/lib/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-onegate/lib/adapter.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _adapter__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _adapter__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


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

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-walletconnect/lib/adapter.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-walletconnect/lib/adapter.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletConnectWalletAdapter": () => (/* binding */ WalletConnectWalletAdapter)
/* harmony export */ });
/* harmony import */ var _cityofzion_wallet_connect_sdk_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cityofzion/wallet-connect-sdk-core */ "@cityofzion/wallet-connect-sdk-core");
/* harmony import */ var _cityofzion_wallet_connect_sdk_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cityofzion_wallet_connect_sdk_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-base */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/index.js");
/* harmony import */ var _walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @walletconnect/qrcode-modal */ "@walletconnect/qrcode-modal");
/* harmony import */ var _walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_1__);
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




class WalletConnectWalletAdapter extends _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.BaseWalletAdapter {
  constructor(config, neonWallet) {
    super();
    this._walletConnectChains = ['neo3:mainnet', 'neo3:testnet', 'neo3:private'];
    this._address = null;
    this._connecting = false;
    this._options = config.options;
    this._logger = config.logger;
    this._relayProvider = config.relayProvider;
    this._neonWallet = neonWallet ? neonWallet : false;
  }

  get address() {
    return this._address;
  }

  get ready() {
    return false;
  }

  get connecting() {
    return this._connecting;
  }

  get connected() {
    return !!this._address;
  }

  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        if (this.connected || this.connecting) return;
        this._connecting = true;
        let walletConnectInstance;

        try {
          // Create walletconnect coz instance
          walletConnectInstance = new _cityofzion_wallet_connect_sdk_core__WEBPACK_IMPORTED_MODULE_0__.WcSdk(); // Initialize it

          yield walletConnectInstance.initClient(this._logger, this._relayProvider);
          let neonWalletConnectWindow; // Subscribe to wc events

          walletConnectInstance.subscribeToEvents({
            onProposal: uri => {
              if (this._neonWallet) {
                neonWalletConnectWindow = window === null || window === void 0 ? void 0 : window.open(`https://neon.coz.io/connect?uri=${uri}`, '_blank');
                neonWalletConnectWindow === null || neonWalletConnectWindow === void 0 ? void 0 : neonWalletConnectWindow.focus();
              } else {
                // show the QRCode, you can use @walletconnect/qrcode-modal to do so, but any QRCode presentation is fine
                _walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_1___default().open(uri, () => {// Eheh just show that!
                });
              }
            },
            onDeleted: () => {
              // here is where you describe a logout callback
              this._disconnected();
            }
          }); // Load any existing connection, it should be called after the initialization, to reestablish connections made previously

          yield walletConnectInstance.loadSession(); // If the session has not been loaded try to load it

          if (!walletConnectInstance.session) {
            // If we're here we need to connect
            yield walletConnectInstance.connect(this._options); // the promise will be resolved after the connection is accepted or refused, you can close the QRCode modal here

            if (this._neonWallet && neonWalletConnectWindow) {
              neonWalletConnectWindow.close();
            } else {
              _walletconnect_qrcode_modal__WEBPACK_IMPORTED_MODULE_1___default().close();
            }
          }
        } catch (error) {
          if (error instanceof _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletError) throw error;
          throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletConnectionError(error === null || error === void 0 ? void 0 : error.message, error);
        }

        if (!walletConnectInstance.session) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletAccountError();
        this._address = walletConnectInstance.accountAddress;
        this._walletConnectInstance = walletConnectInstance;
        this.emit('connect');
      } catch (error) {
        this.emit('error', error);
        throw error;
      } finally {
        this._connecting = false;
      }
    });
  }

  disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
      const walletConnectInstance = this._walletConnectInstance;

      if (walletConnectInstance && walletConnectInstance.session) {
        try {
          yield walletConnectInstance.disconnect();
        } catch (error) {
          this.emit('error', new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
        } finally {
          this._address = null;
          this._walletConnectInstance = undefined;
        }
      }

      this.emit('disconnect');
    });
  }

  invokeRead(request) {
    return __awaiter(this, void 0, void 0, function* () {
      const walletConnectInstance = this._walletConnectInstance;
      if (!walletConnectInstance || !walletConnectInstance.session) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotConnectedError();

      try {
        const response = yield walletConnectInstance.testInvoke({
          scriptHash: request.scriptHash,
          operation: request.operation,
          args: request.args,
          abortOnFail: request.abortOnFail
        }, request.signers);
        return this._responseToReadResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  invokeReadMulti(request) {
    return __awaiter(this, void 0, void 0, function* () {
      const walletConnectInstance = this._walletConnectInstance;
      if (!walletConnectInstance || !walletConnectInstance.session) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotConnectedError();

      try {
        const response = yield walletConnectInstance.testInvoke(request.invocations, request.signers);
        return this._responseToReadResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  invoke(request) {
    return __awaiter(this, void 0, void 0, function* () {
      const walletConnectInstance = this._walletConnectInstance;
      if (!walletConnectInstance || !walletConnectInstance.session) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotConnectedError();

      try {
        const response = yield walletConnectInstance.invokeFunction({
          scriptHash: request.scriptHash,
          operation: request.operation,
          args: request.args,
          abortOnFail: request.abortOnFail
        }, request.signers);
        return this._responseToWriteResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  invokeMulti(request) {
    return __awaiter(this, void 0, void 0, function* () {
      const walletConnectInstance = this._walletConnectInstance;
      if (!walletConnectInstance || !walletConnectInstance.session) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotConnectedError();

      try {
        const response = yield walletConnectInstance.invokeFunction(request.invocations, request.signers);
        return this._responseToWriteResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  getNetworks() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        const walletConnectInstance = this._walletConnectInstance;
        if (!walletConnectInstance || !walletConnectInstance.session) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotConnectedError();
        return this._responseToGetNetworksResult(walletConnectInstance.chainId ? walletConnectInstance.chainId : '');
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  signMessage(request) {
    return __awaiter(this, void 0, void 0, function* () {
      const walletConnectInstance = this._walletConnectInstance;
      if (!walletConnectInstance || !walletConnectInstance.session) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletNotConnectedError();

      try {
        const response = yield walletConnectInstance.signMessage(request.message);
        return this._responseToSignMessageResult(response);
      } catch (error) {
        this.emit('error', error);
        throw error;
      }
    });
  }

  _responseToReadResult(response) {
    var _a, _b; // If the state is halt it means that everything went well


    if (response.result.state === 'HALT') {
      return {
        status: 'success',
        data: Object.assign({}, response.result)
      };
    } // Otherwise an error occurred and so return it


    return {
      status: 'error',
      message: (_a = response.result.error) === null || _a === void 0 ? void 0 : _a.message,
      code: (_b = response.result.error) === null || _b === void 0 ? void 0 : _b.code
    };
  }

  _responseToWriteResult(response) {
    var _a, _b; // If the state is halt it means that everything went well


    if (response.result.state === 'HALT') {
      return {
        status: 'success',
        data: Object.assign({}, response.result)
      };
    } // Otherwise an error occurred and so return it


    return {
      status: 'error',
      message: (_a = response.result.error) === null || _a === void 0 ? void 0 : _a.message,
      code: (_b = response.result.error) === null || _b === void 0 ? void 0 : _b.code
    };
  }

  _responseToGetNetworksResult(response) {
    return {
      status: 'success',
      data: {
        networks: this._walletConnectChains,
        defaultNetwork: response
      }
    };
  }

  _responseToSignMessageResult(response) {
    return {
      status: 'success',
      data: {
        publicKey: response.result.publicKey,
        data: response.result.data,
        salt: response.result.salt,
        message: response.result.messageHex
      }
    };
  }

  _disconnected() {
    const walletConnectInstance = this._walletConnectInstance;

    if (walletConnectInstance) {
      this._address = null;
      this._walletConnectInstance = undefined;
      this.emit('error', new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__.WalletDisconnectedError());
      this.emit('disconnect');
    }
  }

}

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-walletconnect/lib/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-walletconnect/lib/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-walletconnect/lib/adapter.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _adapter__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _adapter__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/types.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _types__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _neoline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neoline */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/neoline.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _neoline__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _neoline__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _o3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./o3 */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/o3.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _o3__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _o3__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _walletconnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walletconnect */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/walletconnect.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _walletconnect__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _walletconnect__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _onegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onegate */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/onegate.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _onegate__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _onegate__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);






/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/neoline.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/neoline.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNeoLineWallet": () => (/* binding */ getNeoLineWallet)
/* harmony export */ });
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_neoline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-neoline */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-neoline/lib/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/types.js");


const getNeoLineWallet = config => ({
  name: _types__WEBPACK_IMPORTED_MODULE_0__.WalletName.NeoLine,
  url: 'https://neoline.io/',
  icon: 'data:image/jpeg;base64,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',
  adapter: () => new _rentfuse_labs_neo_wallet_adapter_neoline__WEBPACK_IMPORTED_MODULE_1__.NeoLineWalletAdapter(config)
});

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/o3.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/o3.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getO3Wallet": () => (/* binding */ getO3Wallet)
/* harmony export */ });
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_o3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-o3 */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-o3/lib/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/types.js");


const getO3Wallet = config => ({
  name: _types__WEBPACK_IMPORTED_MODULE_0__.WalletName.O3,
  url: 'https://o3.network/',
  icon: 'data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMGFmOTI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT7nlLvmnb8gNTkg5Ymv5pysIDM8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTg4OS40Miw0NzZhMTIwLDEyMCwwLDAsMC0xOTUuMjUtOTMuNDcsNDAsNDAsMCwwLDAsNTAuMTksNjIuMjlBMzkuNTcsMzkuNTcsMCwwLDEsNzY5LjQyLDQzNmE0MCw0MCwwLDEsMSwwLDgwLDQwLDQwLDAsMCwwLDAsODAsNDAsNDAsMCwxLDEsMCw4MGMtLjY1LDAtMS4yOSwwLTEuOTMsMHMtMS4yOCwwLTEuOTMsMGgtMzgxYy05My43NCwwLTE3MC03Ni4yNi0xNzAtMTcwczc2LjI2LTE3MCwxNzAtMTcwLDE3MCw3Ni4yNiwxNzAsMTcwYTE3MC4xMywxNzAuMTMsMCwwLDEtMjAuNSw4MSw0MCw0MCwwLDEsMCw3MC4zLDM4LjE5QTI1MCwyNTAsMCwxLDAsMzg0LjU4LDc1NmgzODFjLjY1LDAsMS4yOSwwLDEuOTMsMHMxLjI4LDAsMS45MywwYTExOS45MywxMTkuOTMsMCwwLDAsODkuMzYtMjAwQTExOS41MiwxMTkuNTIsMCwwLDAsODg5LjQyLDQ3NloiLz48L3N2Zz4=',
  adapter: () => new _rentfuse_labs_neo_wallet_adapter_o3__WEBPACK_IMPORTED_MODULE_1__.O3WalletAdapter(config)
});

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/onegate.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/onegate.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOneGateWallet": () => (/* binding */ getOneGateWallet)
/* harmony export */ });
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_onegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-onegate */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-onegate/lib/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/types.js");


const getOneGateWallet = config => ({
  name: _types__WEBPACK_IMPORTED_MODULE_0__.WalletName.OneGate,
  url: 'https://onegate.space/',
  icon: 'data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05Ljk5NzIzIDEuNzQzODVMNi4xNjk5MiAzLjMyNzYxTDYuNDMxMTMgMy45NTg4NUwxMC4yNTg0IDIuMzc1MDlMOS45OTcyMyAxLjc0Mzg1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEwLjIwMTMgMS4yNTM5OUw1LjY4NDU3IDMuMTIzMDVMNi4yMzEwOSA0LjQ0Mzc2TDEwLjc0NzkgMi41NzQ3TDEwLjIwMTMgMS4yNTM5OVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMC4yNTg3IDEuMTI0NzJMNS41NTQ2OSAzLjA3MDMxTDYuMTc4MjkgNC41NzgwNkwxMC44ODIzIDIuNjMyNDdMMTAuMjU4NyAxLjEyNDcyWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTUuOTY4ODIgNS4wNjQwM0w1LjA2MzQ4IDIuODY4NjRMMTAuNDUyNCAwLjYzNjc4TDExLjM2NDQgMi44MzIxNkw1Ljk2ODgyIDUuMDY0MDNaTTYuMDM1MTUgMy4yNzMyM0w2LjM2Njc4IDQuMDkyMzZMMTAuMzc5NSAyLjQzNDIxTDEwLjA0NzkgMS42MTE3N0w2LjAzNTE1IDMuMjczMjNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTAuMjYwNCAxLjEwNzA0TDUuNTMyMjMgMy4wNjM2TDYuMTY3NSA0LjU5ODgxTDEwLjg5NTcgMi42NDIyNkwxMC4yNjA0IDEuMTA3MDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNS45NjkzOSA1LjA4Mzk3TDUuMDUwNzggMi44NjIwNUwxMC40NjMgMC42MjAyMzlMMTEuMzgxNiAyLjg0MjE1TDUuOTY5MzkgNS4wODM5N1pNNi4wMjI0NSAzLjI2MzMyTDYuMzcwNjYgNC4xMDg5OEwxMC40MTMyIDIuNDUwODNMMTAuMDU4NCAxLjU5MTkxTDYuMDIyNDUgMy4yNjMzMloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik01LjkwOTkzIDUuMjE2NDVMNC45MTUwNCAyLjgwNTVMMTAuNTE2MyAwLjQ4NDFMMTEuNTExMSAyLjg5MTczTDUuOTA5OTMgNS4yMTY0NVpNNi4xNTIwMiAzLjMxNjIxTDYuNDIzOTUgMy45Nzk0N0wxMC4yODA4IDIuMzgxMDJMMTAuMDA4OSAxLjcxNzc2TDYuMTUyMDIgMy4zMTYyMVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik01LjcxMTE0IDUuNzAwN0w0LjQyNzczIDIuNjAzMjlMMTAuNzE4NyAwTDEyLjAwMjEgMy4wOTc0Mkw1LjcxMTE0IDUuNzAwN1pNNS4zOTk0MSAzLjAwNzg4TDYuMTEyNDEgNC43MjkwM0wxMS4wMzA1IDIuNjkyODNMMTAuMzE3NSAwLjk3MTY3M0w1LjM5OTQxIDMuMDA3ODhaTTYuMjIxODUgNC40NjM3M0w1LjY2NDcxIDMuMTE3MzFMMTAuMjA0NyAxLjIzNjk4TDEwLjc2NTIgMi41ODMzOUw2LjIyMTg1IDQuNDYzNzNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMy4yODM5NCA2LjE1NjExTDEuNzA5OTYgOS45NjY4TDIuMzM4NDYgMTAuMjI2NEwzLjkxMjQ0IDYuNDE1NzFMMy4yODM5NCA2LjE1NjExWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTMuMTI4NDUgNS42Njk4OEwxLjI1NzgxIDEwLjE4NkwyLjU3ODMzIDEwLjczM0w0LjQ0ODk3IDYuMjE2ODZMMy4xMjg0NSA1LjY2OTg4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTMuMDI4MTQgNS41Mzk2M0wxLjA5Mzc1IDEwLjIyMjlMMi41OTQ4NCAxMC44NDI5TDQuNTI5MjMgNi4xNTk2NUwzLjAyODE0IDUuNTM5NjNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi44MzIxIDExLjM1MTdMMC42MzY3MTkgMTAuNDQzTDIuODcxOSA1LjA1NDA1TDUuMDY3MjggNS45NjkzNEwyLjgzMjEgMTEuMzUxN1pNMS42MDgzOSAxMC4wMjUyTDIuNDMwODMgMTAuMzU2OEw0LjA4ODk4IDYuMzQwNzdMMy4yNjk4NSA2LjAwOTE0TDEuNjA4MzkgMTAuMDI1MloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zLjA2NDUgNS41MjI3NUwxLjEwNTQ3IDEwLjI0OTlMMi42NDAzNSAxMC44ODZMNC41OTkzOCA2LjE1ODg0TDMuMDY0NSA1LjUyMjc1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIuODM4NzIgMTEuMzcxN0wwLjYyMDExNyAxMC40NDk3TDIuODYxOTMgNS4wMzQyNEw1LjA4Mzg1IDUuOTY5NDNMMi44Mzg3MiAxMS4zNzE3Wk0xLjU5MTc5IDEwLjA0NTJMMi40Mzc0NCAxMC4zOTM0TDQuMTEyMTcgNi4zNTc0NEwzLjI2NjUyIDYuMDA1OTFMMS41OTE3OSAxMC4wNDUyWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIuODk0OTMgMTEuNTA0MkwwLjQ4NzMwNSAxMC41MDkzTDIuODA4NzEgNC45MDQ4Mkw1LjIxNjM0IDUuODk5N0wyLjg5NDkzIDExLjUwNDJaTTEuNzI0MjggOS45OTIwMUwyLjM4NzU0IDEwLjI2MzlMMy45NzkzNiA2LjQxMzczTDMuMzE2MSA2LjEzODQ4TDEuNzI0MjggOS45OTIwMVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0zLjA5NzQyIDExLjk4ODRMMCAxMC43MDVMMi42MDY2IDQuNDA0MDJMNS43MDQwMiA1LjY4NzQzTDMuMDk3NDIgMTEuOTg4NFpNMC45NzE2NzMgMTAuMzAzN0wyLjY5MjgzIDExLjAxNjdMNC43MzIzNSA2LjEwMTk2TDMuMDExMTkgNS4zODg5NkwwLjk3MTY3MyAxMC4zMDM3Wk0yLjU4MzM5IDEwLjc1MTRMMS4yMzY5OCAxMC4xOTQzTDMuMTE3MzEgNS42NTQyNkw0LjQ2NzA0IDYuMjExNEwyLjU4MzM5IDEwLjc1MTRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjAuNjY2NCA2LjE4NDE3TDIwLjAzNTIgNi40NDU1TDIxLjYxOTYgMTAuMjcyNUwyMi4yNTA4IDEwLjAxMTJMMjAuNjY2NCA2LjE4NDE3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIwLjg2OTUgNS42OTg1NEwxOS41NDg4IDYuMjQ1MDZMMjEuNDE3OSAxMC43NjE4TDIyLjczODYgMTAuMjE1M0wyMC44Njk1IDUuNjk4NTRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjAuOTI1NSA1LjU2MzM3TDE5LjQxOCA2LjE4NzVMMjEuMzY1MiAxMC44OTA5TDIyLjg3MjcgMTAuMjY2N0wyMC45MjU1IDUuNTYzMzdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjEuMTYxNiAxMS4zNzgzTDE4LjkyOTcgNS45ODkzMUwyMS4xMjUxIDUuMDc3MzNMMjMuMzU2OSAxMC40Njk2TDIxLjE2MTYgMTEuMzc4M1pNMTkuOTAxNCA2LjQwMzg1TDIxLjU1OTUgMTAuNDE5OUwyMi4zNzg2IDEwLjA4ODJMMjAuNzIwNSA2LjA3NTUzTDE5LjkwMTQgNi40MDM4NVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMC45MzM1IDUuNTQ2MDlMMTkuMzk4NCA2LjE4MTY0TDIxLjM1NTggMTAuOTA5NUwyMi44OTA5IDEwLjI3NEwyMC45MzM1IDUuNTQ2MDlaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjEuMTU0MSAxMS4zOTgyTDE4LjkwMjMgNS45NjkzOUwyMS4xMjQzIDUuMDUwNzhMMjMuMzY2MSAxMC40NjYzTDIxLjE1NDEgMTEuMzk4MlpNMTkuODk3MiA2LjM4MzkzTDIxLjU1NTQgMTAuNDIzMkwyMi40MDEgMTAuMDc1TDIwLjc0MjkgNi4wMzI0TDE5Ljg5NzIgNi4zODM5M1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMS4wOTg3IDExLjUzMDhMMTguNzc3MyA1LjkyNjI1TDIxLjE4NSA0LjkzMTM3TDIzLjUwNjQgMTAuNTM1OUwyMS4wOTg3IDExLjUzMDhaTTIwLjAxNzYgNi40MzY5NkwyMS42MTI4IDEwLjI4MDVMMjIuMjc2IDEwLjAwODZMMjAuNjg0MiA2LjE1NTA4TDIwLjAxNzYgNi40MzY5NloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMC44OTI3IDEyLjAxNDlMMTguMjg2MSA1LjcxMzk1TDIxLjM4MzYgNC40MzA1NEwyMy45ODY4IDEwLjczMTVMMjAuODkyNyAxMi4wMTQ5Wk0xOS4yNjQ0IDYuMTI1MTdMMjEuMzAwNiAxMS4wNDMyTDIzLjAyMTggMTAuMzMwMkwyMC45ODU2IDUuNDE1NDhMMTkuMjY0NCA2LjEyNTE3Wk0yMS40MTAxIDEwLjc2OEwxOS41Mjk3IDYuMjM3OTJMMjAuODkyNyA1LjY3NzQ3TDIyLjc3MzEgMTAuMjIwOEwyMS40MTAxIDEwLjc2OFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xNC4wMTU0IDEuNzQzNUwxMy43NTM5IDIuMzc0NkwxNy41ODA0IDMuOTYwMzZMMTcuODQxOSAzLjMyOTI2TDE0LjAxNTQgMS43NDM1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzLjgxNjcgMS4yNTUyOUwxMy4yNjk1IDIuNTc1NzFMMTcuNzg1MyA0LjQ0NzE0TDE4LjMzMjUgMy4xMjY3MkwxMy44MTY3IDEuMjU1MjlaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTMuNzYzMyAxLjEyMkwxMy4xMzg3IDIuNjI5M0wxNy44NDEzIDQuNTc4MThMMTguNDY2IDMuMDcwODdMMTMuNzYzMyAxLjEyMloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xOC4wNDAzIDUuMDY3MzRMMTIuNjUxNCAyLjgzMjE2TDEzLjU2IDAuNjM2NzhMMTguOTQ5IDIuODcxOTZMMTguMDQwMyA1LjA2NzM0Wk0xMy42MjMgMi40MzA4OUwxNy42MzkxIDQuMDg5MDRMMTcuOTcwNyAzLjI2OTkxTDEzLjk1OCAxLjYxMTc3TDEzLjYyMyAyLjQzMDg5WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzLjc1MzMgMS4xMDM1NUwxMy4xMTcyIDIuNjM4NDNMMTcuODQ0NCA0LjU5NzQ2TDE4LjQ4MDUgMy4wNjI1OEwxMy43NTMzIDEuMTAzNTVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTguMDQ3MyA1LjA4Mzk3TDEyLjYzMTggMi44Mzg4NEwxMy41NTM4IDAuNjIwMjM5TDE4Ljk2OTMgMi44NjIwNUwxOC4wNDczIDUuMDgzOTdaTTEzLjU5NjkgMi40Mzc1N0wxNy42NDYxIDQuMTEyMjlMMTcuOTk3NiAzLjI2NjY0TDEzLjk1NSAxLjYwODQ5TDEzLjU5NjkgMi40Mzc1N1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xOC4xMDM2IDUuMjE2NThMMTIuNDk5IDIuODk1MThMMTMuNDkzOSAwLjQ4NzU0OUwxOS4wOTg0IDIuODA4OTVMMTguMTAzNiA1LjIxNjU4Wk0xMy43MzYgMi4zODExNUwxNy41NzYzIDMuOTc5NkwxNy44NTE1IDMuMzE2MzVMMTQuMDExMyAxLjcyNDUzTDEzLjczNiAyLjM4MTE1WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE4LjMwMjkgNS43MDQwMkwxMi4wMDIgMy4wOTc0MkwxMy4yOTg2IDBMMTkuNTk5NiAyLjYwNjZMMTguMzAyOSA1LjcwNDAyWk0xMi45OTY4IDIuNjkyODNMMTcuOTA4MyA0LjczMjM1TDE4LjYyMTMgMy4wMTExOUwxMy42OTk5IDAuOTcxNjczTDEyLjk5NjggMi42OTI4M1pNMTcuODAyMSA0LjQ2NzA0TDEzLjI2NTUgMi41ODMzOUwxMy44MjI2IDEuMjM2OThMMTguMzY1OSAzLjEyMDYzTDE3LjgwMjEgNC40NjcwNFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xNy41NjI3IDIwLjA0MDNMMTMuNzM1NCAyMS42MjRMMTMuOTk2NiAyMi4yNTUzTDE3LjgyMzkgMjAuNjcxNUwxNy41NjI3IDIwLjA0MDNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTcuNzY1OCAxOS41NDg3TDEzLjI0OSAyMS40MTc3TDEzLjc5NTUgMjIuNzM4NEwxOC4zMTIzIDIwLjg2OTRMMTcuNzY1OCAxOS41NDg3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTE3LjgyMTIgMTkuNDIxOEwxMy4xMTcyIDIxLjM2NzRMMTMuNzQwOCAyMi44NzUyTDE4LjQ0NDggMjAuOTI5NkwxNy44MjEyIDE5LjQyMThaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTMuNTM5OSAyMy4zNjAxTDEyLjYyNzkgMjEuMTY0N0wxOC4wMjAyIDE4LjkzNjFMMTguOTI4OSAyMS4xMzE1TDEzLjUzOTkgMjMuMzYwMVpNMTMuNTk2MyAyMS41NTZMMTMuOTI3OSAyMi4zNzUxTDE3Ljk0MzkgMjAuNzE3TDE3LjYxMjMgMTkuODk3OUwxMy41OTYzIDIxLjU1NloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xNy44MjY4IDE5LjQwMzZMMTMuMDk4NiAyMS4zNjAyTDEzLjczMzkgMjIuODk1NEwxOC40NjIxIDIwLjkzODhMMTcuODI2OCAxOS40MDM2WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzLjUzMDEgMjMuMzc5OUwxMi42MDE2IDIxLjE1NzlMMTguMDI3IDE4LjkwMjlMMTguOTQ4OSAyMS4xMjQ4TDEzLjUzMDEgMjMuMzc5OVpNMTMuNTk2NCAyMS41NTU5TDEzLjkyODEgMjIuNDA4MkwxNy45NjczIDIwLjc1TDE3LjYyNTcgMTkuODk3N0wxMy41OTY0IDIxLjU1NTlaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTguMDg0IDE4Ljc4MzRMMTkuMDc4OSAyMS4xOTExTDEzLjQ3NDQgMjMuNTEyNUwxMi40Nzk1IDIxLjEwMTVMMTguMDg0IDE4Ljc4MzRaTTE3Ljg0MTkgMjAuNjgwNEwxNy41NyAyMC4wMTcxTDEzLjcxNjUgMjEuNjE1NkwxMy45ODg0IDIyLjI3ODhMMTcuODQxOSAyMC42ODA0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEzLjI2NTYgMjMuOTk2N0wxMS45OTIyIDIwLjg5MjdMMTguMjkzMSAxOC4yODYxTDE5LjU2NjYgMjEuMzkzNEwxMy4yNjU2IDIzLjk5NjdaTTEyLjk1NzIgMjEuMzAzOUwxMy42NzAyIDIzLjAyNTFMMTguNTk0OSAyMC45OTIyTDE3Ljg4MTkgMTkuMjcxTDEyLjk1NzIgMjEuMzAzOVpNMTMuNzc5NyAyMi43NTk3TDEzLjIzMjUgMjEuNDEzM0wxNy43NzI1IDE5LjUzM0wxOC4zMjk2IDIwLjg5MjdMMTMuNzc5NyAyMi43NTk3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIxLjYxOSAxMy43NTA0TDIwLjAzMzIgMTcuNTc2OUwyMC42NjQzIDE3LjgzODRMMjIuMjUwMSAxNC4wMTJMMjEuNjE5IDEzLjc1MDRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjEuNDE5MyAxMy4yNjU1TDE5LjU0NzkgMTcuNzgxM0wyMC44NjgzIDE4LjMyODVMMjIuNzM5NyAxMy44MTI3TDIxLjQxOTMgMTMuMjY1NVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMS4zNjIgMTMuMTMxTDE5LjQxMzEgMTcuODMzN0wyMC45MjA0IDE4LjQ1ODRMMjIuODY5MyAxMy43NTU3TDIxLjM2MiAxMy4xMzFaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjEuMTI1MSAxOC45NDZMMTguOTI5NyAxOC4wMzczTDIxLjE2MTYgMTIuNjQ4M0wyMy4zNTY5IDEzLjU1N0wyMS4xMjUxIDE4Ljk0NlpNMTkuOTAxNCAxNy42MTk0TDIwLjcyMDUgMTcuOTUxMUwyMi4zNzg2IDEzLjkzNUwyMS41NTk1IDEzLjYwMzRMMTkuOTAxNCAxNy42MTk0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIxLjM1NDUgMTMuMTEzNkwxOS4zOTU1IDE3Ljg0MDhMMjAuOTMwNCAxOC40NzY4TDIyLjg4OTQgMTMuNzQ5N0wyMS4zNTQ1IDEzLjExMzZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjEuMTMwOSAxOC45NjU5TDE4LjkwMjMgMTguMDQ0TDIxLjE0NzUgMTIuNjI4NUwyMy4zNjk0IDEzLjU1MDRMMjEuMTMwOSAxOC45NjU5Wk0xOS44OTcyIDE3LjY0MjdMMjAuNzQyOSAxNy45NzQ0TDIyLjQwMSAxMy45MzUxTDIxLjU1NTQgMTMuNTk2OUwxOS44OTcyIDE3LjY0MjdaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjEuMDk4NCAxMi40OTU4TDIzLjUwOTMgMTMuNDkwN0wyMS4xODc5IDE5LjA5MTlMMTguNzgwMyAxOC4wOTdMMjEuMDk4NCAxMi40OTU4Wk0yMi4yNjkgMTQuMDA0N0wyMS42MDU4IDEzLjczMjhMMjAuMDEzOSAxNy41NzY0TDIwLjY3NzIgMTcuODQ4M0wyMi4yNjkgMTQuMDA0N1oiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yMS4zODY1IDE5LjU4MjhMMTguMjg5MSAxOC4yOTk0TDIwLjg5OSAxMS45OTg0TDIzLjk5MzEgMTMuMjgxOEwyMS4zODY1IDE5LjU4MjhaTTE5LjI2NDEgMTcuOTA4MUwyMC45ODUyIDE4LjYyMTFMMjMuMDIxNCAxMy42OTY0TDIxLjMwMDMgMTIuOTgzNEwxOS4yNjQxIDE3LjkwODFaTTIwLjg5MjQgMTguMzQ1OEwxOS41NDU5IDE3Ljc4ODdMMjEuNDI2MyAxMy4yNDU0TDIyLjc3MjcgMTMuODA1OEwyMC44OTI0IDE4LjM0NThaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi4zNzQzNiAxMy43MjU1TDEuNzQzMTYgMTMuOTg2OEwzLjMyNzU5IDE3LjgxMzlMMy45NTg3OSAxNy41NTI2TDIuMzc0MzYgMTMuNzI1NVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yLjU3NTUgMTMuMjQyNEwxLjI1NDg4IDEzLjc4OTJMMy4xMjQ3MyAxOC4zMDU2TDQuNDQ1MzUgMTcuNzU4OUwyLjU3NTUgMTMuMjQyNFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0yLjYzMTU1IDEzLjEwNjFMMS4xMjQwMiAxMy43MzAyTDMuMDcxMjYgMTguNDMzNkw0LjU3ODc4IDE3LjgwOTVMMi42MzE1NSAxMy4xMDYxWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIuODY4NTggMTguOTE5NEwwLjYzNjcxOSAxMy41MzA1TDIuODMyMSAxMi42MjE4TDUuMDYzOTcgMTguMDEwOEwyLjg2ODU4IDE4LjkxOTRaTTEuNjA4MzkgMTMuOTI4NEwzLjI2NjU0IDE3Ljk0NDRMNC4wODg5OCAxNy42MTI4TDIuNDMwODMgMTMuNTk2OEwxLjYwODM5IDEzLjkyODRaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi42NDE1NSAxMy4wODc0TDEuMTA2NDUgMTMuNzIzTDMuMDYzODMgMTguNDUwOUw0LjU5ODkzIDE3LjgxNTNMMi42NDE1NSAxMy4wODc0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIuODYxOTMgMTguOTM5NEwwLjYyMDExNyAxMy41MjA2TDIuODM4NzIgMTIuNjAyTDUuMDgzODUgMTguMDE3NUwyLjg2MTkzIDE4LjkzOTRaTTEuNTkxNzkgMTMuOTI4NUwzLjI0OTk0IDE3Ljk2NzdMNC4wOTU1OSAxNy42MTk1TDIuNDM3NDQgMTMuNTc2OUwxLjU5MTc5IDEzLjkyODVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMi44OTQ5MyAxMi40NjkzTDUuMjE2MzQgMTguMDczOEwyLjgwODcxIDE5LjA2ODdMMC40ODczMDUgMTMuNDY0MkwyLjg5NDkzIDEyLjQ2OTNaTTMuOTc5MzYgMTcuNTc2NEwyLjM4MDkxIDEzLjcwNjJMMS43MTc2NSAxMy45NzgyTDMuMzE2MSAxNy44MzVMMy45NzkzNiAxNy41NzY0WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTIuNjAzMjkgMTkuNTY2MUwwIDEzLjI2NTFMMy4wOTc0MiAxMS45ODE3TDUuNzAwNyAxOC4yODI3TDIuNjAzMjkgMTkuNTY2MVpNMC45NzE2NzMgMTMuNjY5N0wzLjAwNzg4IDE4LjU3MTJMNC43MjkwMyAxNy44NTgyTDIuNjkyODMgMTIuOTU2N0wwLjk3MTY3MyAxMy42Njk3Wk0zLjExNzMxIDE4LjMxMjVMMS4yMzY5OCAxMy43NzkxTDIuNTgzMzkgMTMuMjIyTDQuNDYzNzMgMTcuNzYyTDMuMTE3MzEgMTguMzEyNVoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik02LjQwOTk4IDIwLjAzNzdMNi4xNDg0NCAyMC42Njg4TDkuOTc0OTEgMjIuMjU0NUwxMC4yMzY1IDIxLjYyMzRMNi40MDk5OCAyMC4wMzc3WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTYuMjEwMjkgMTkuNTQ5M0w1LjY2MzA5IDIwLjg2OTdMMTAuMTc4OSAyMi43NDExTDEwLjcyNjEgMjEuNDIwN0w2LjIxMDI5IDE5LjU0OTNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNi4xNTQ5MyAxOS40MTQ4TDUuNTMwMjcgMjAuOTIyMUwxMC4yMzI5IDIyLjg3MUwxMC44NTc2IDIxLjM2MzdMNi4xNTQ5MyAxOS40MTQ4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTEwLjQzMjkgMjMuMzU5OUw1LjA0Mzk1IDIxLjEyODFMNS45NjkxOSAxOC45MzI3TDExLjM0MTYgMjEuMTY0NUwxMC40MzI5IDIzLjM1OTlaTTYuMDE1NjIgMjAuNzIzNUwxMC4wMzE2IDIyLjM4MTZMMTAuMzYzMyAyMS41NjI1TDYuMzUwNTYgMTkuOTA0NEw2LjAxNTYyIDIwLjcyMzVaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNi4xNDc4IDE5LjM5NzRMNS41MTE3MiAyMC45MzIzTDEwLjIzODkgMjIuODkxM0wxMC44NzUgMjEuMzU2NEw2LjE0NzggMTkuMzk3NFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik0xMC40Mzk5IDIzLjM3OTlMNS4wMjQ0MSAyMS4xMzQ3TDUuOTQ2MzQgMTguOTAyOUwxMS4zNjE4IDIxLjE1NzlMMTAuNDM5OSAyMy4zNzk5Wk01Ljk5OTQgMjAuNzI2OEwxMC4wMzg2IDIyLjM4NUwxMC4zOTAyIDIxLjU1NTlMNi4zNDc2MSAxOS44OTc3TDUuOTk5NCAyMC43MjY4WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTUuODg5NDIgMTguNzgwMkwxMS40OTQgMjEuMTAxNkwxMC40OTkxIDIzLjUwOTJMNC44OTQ1MyAyMS4xODc4TDUuODg5NDIgMTguNzgwMlpNMTAuMjU3IDIxLjYxNTZMNi40MDM0NCAyMC4wMTcxTDYuMTI4MTkgMjAuNjgwNEw5Ljk4MTcyIDIyLjI3NTVMMTAuMjU3IDIxLjYxNTZaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMTAuNjk4NCAyMy45OTk5TDQuMzk3NDYgMjEuMzlMNS42ODA4NyAxOC4yOTU5TDExLjk4MTggMjAuOTAyNUwxMC42OTg0IDIzLjk5OTlaTTUuMzkyMzUgMjAuOTg4N0wxMC4yODA2IDIzLjAyNDlMMTAuOTkzNiAyMS4zMDM4TDYuMDkyMDkgMTkuMjY3Nkw1LjM5MjM1IDIwLjk4ODdaTTEwLjE5NzcgMjIuNzU5Nkw1LjYzNzc1IDIwLjg5MjZMNi4yMDE1MiAxOS41MzI5TDEwLjc0MTUgMjEuNDEzMkwxMC4xOTc3IDIyLjc1OTZaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K',
  adapter: () => new _rentfuse_labs_neo_wallet_adapter_onegate__WEBPACK_IMPORTED_MODULE_1__.OneGateWalletAdapter(config)
});

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/types.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/types.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletName": () => (/* binding */ WalletName)
/* harmony export */ });
var WalletName;

(function (WalletName) {
  WalletName["NeoLine"] = "NeoLine";
  WalletName["O3"] = "O3";
  WalletName["WalletConnect"] = "WalletConnect";
  WalletName["Neon"] = "Neon";
  WalletName["OneGate"] = "OneGate";
})(WalletName || (WalletName = {}));

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/walletconnect.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/walletconnect.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWalletConnectWallet": () => (/* binding */ getWalletConnectWallet),
/* harmony export */   "getNeonWalletConnectWallet": () => (/* binding */ getNeonWalletConnectWallet)
/* harmony export */ });
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_walletconnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-walletconnect */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-walletconnect/lib/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-wallets/lib/types.js");


const getWalletConnectWallet = config => ({
  name: _types__WEBPACK_IMPORTED_MODULE_0__.WalletName.WalletConnect,
  url: 'https://walletconnect.org',
  icon: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4NSIgdmlld0JveD0iMCAwIDMwMCAxODUiIHdpZHRoPSIzMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTYxLjQzODU0MjkgMzYuMjU2MjYxMmM0OC45MTEyMjQxLTQ3Ljg4ODE2NjMgMTI4LjIxMTk4NzEtNDcuODg4MTY2MyAxNzcuMTIzMjA5MSAwbDUuODg2NTQ1IDUuNzYzNDE3NGMyLjQ0NTU2MSAyLjM5NDQwODEgMi40NDU1NjEgNi4yNzY1MTEyIDAgOC42NzA5MjA0bC0yMC4xMzY2OTUgMTkuNzE1NTAzYy0xLjIyMjc4MSAxLjE5NzIwNTEtMy4yMDUzIDEuMTk3MjA1MS00LjQyODA4MSAwbC04LjEwMDU4NC03LjkzMTE0NzljLTM0LjEyMTY5Mi0zMy40MDc5ODE3LTg5LjQ0Mzg4Ni0zMy40MDc5ODE3LTEyMy41NjU1Nzg4IDBsLTguNjc1MDU2MiA4LjQ5MzYwNTFjLTEuMjIyNzgxNiAxLjE5NzIwNDEtMy4yMDUzMDEgMS4xOTcyMDQxLTQuNDI4MDgwNiAwbC0yMC4xMzY2OTQ5LTE5LjcxNTUwMzFjLTIuNDQ1NTYxMi0yLjM5NDQwOTItMi40NDU1NjEyLTYuMjc2NTEyMiAwLTguNjcwOTIwNHptMjE4Ljc2Nzc5NjEgNDAuNzczNzQ0OSAxNy45MjE2OTcgMTcuNTQ2ODk3YzIuNDQ1NTQ5IDIuMzk0Mzk2OSAyLjQ0NTU2MyA2LjI3NjQ3NjkuMDAwMDMxIDguNjcwODg5OWwtODAuODEwMTcxIDc5LjEyMTEzNGMtMi40NDU1NDQgMi4zOTQ0MjYtNi40MTA1ODIgMi4zOTQ0NTMtOC44NTYxNi4wMDAwNjItLjAwMDAxLS4wMDAwMS0uMDAwMDIyLS4wMDAwMjItLjAwMDAzMi0uMDAwMDMybC01Ny4zNTQxNDMtNTYuMTU0NTcyYy0uNjExMzktLjU5ODYwMi0xLjYwMjY1LS41OTg2MDItMi4yMTQwNCAwLS4wMDAwMDQuMDAwMDA0LS4wMDAwMDcuMDAwMDA4LS4wMDAwMTEuMDAwMDExbC01Ny4zNTI5MjEyIDU2LjE1NDUzMWMtMi40NDU1MzY4IDIuMzk0NDMyLTYuNDEwNTc1NSAyLjM5NDQ3Mi04Ljg1NjE2MTIuMDAwMDg3LS4wMDAwMTQzLS4wMDAwMTQtLjAwMDAyOTYtLjAwMDAyOC0uMDAwMDQ0OS0uMDAwMDQ0bC04MC44MTI0MTk0My03OS4xMjIxODVjLTIuNDQ1NTYwMjEtMi4zOTQ0MDgtMi40NDU1NjAyMS02LjI3NjUxMTUgMC04LjY3MDkxOTdsMTcuOTIxNzI5NjMtMTcuNTQ2ODY3M2MyLjQ0NTU2MDItMi4zOTQ0MDgyIDYuNDEwNTk4OS0yLjM5NDQwODIgOC44NTYxNjAyIDBsNTcuMzU0OTc3NSA1Ni4xNTUzNTdjLjYxMTM5MDguNTk4NjAyIDEuNjAyNjQ5LjU5ODYwMiAyLjIxNDAzOTggMCAuMDAwMDA5Mi0uMDAwMDA5LjAwMDAxNzQtLjAwMDAxNy4wMDAwMjY1LS4wMDAwMjRsNTcuMzUyMTAzMS01Ni4xNTUzMzNjMi40NDU1MDUtMi4zOTQ0NjMzIDYuNDEwNTQ0LTIuMzk0NTUzMSA4Ljg1NjE2MS0uMDAwMi4wMDAwMzQuMDAwMDMzNi4wMDAwNjguMDAwMDY3My4wMDAxMDEuMDAwMTAxbDU3LjM1NDkwMiA1Ni4xNTU0MzJjLjYxMTM5LjU5ODYwMSAxLjYwMjY1LjU5ODYwMSAyLjIxNDA0IDBsNTcuMzUzOTc1LTU2LjE1NDMyNDljMi40NDU1NjEtMi4zOTQ0MDkyIDYuNDEwNTk5LTIuMzk0NDA5MiA4Ljg1NjE2IDB6IiBmaWxsPSIjM2I5OWZjIi8+PC9zdmc+',
  adapter: () => new _rentfuse_labs_neo_wallet_adapter_walletconnect__WEBPACK_IMPORTED_MODULE_1__.WalletConnectWalletAdapter(config)
});
const getNeonWalletConnectWallet = config => ({
  name: _types__WEBPACK_IMPORTED_MODULE_0__.WalletName.Neon,
  url: 'https://neonwallet.com/',
  icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIxOXB4IiB2aWV3Qm94PSIwIDAgMjAgMTkiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KCiAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNTAwMDAwLCAzLjUwMDAwMCkiPgogICAgICA8cGF0aAogICAgICAgIGQ9Ik0xMS41NjUyMzY2LC0xLjQ0MTAyOTMzIEwxNC4zODg4NDEyLDEuNDg4NTk5ODIgTDExLjQ4NDM3MTQsNC41MDIyODk3MSBMMTIuOTM2NjEwNiw2LjAwOTA2MDUyIEw1Ljc3Mzg4MjYxLDEzLjQ0MTAzOTIgTC0xLjM4ODgzMjMsNi4wMDkwNzQwNyBMNS43NzM4NjgzMywtMS40MjI4NzYzIEw3LjIwODYwNzk4LDAuMDY1NzM2OTM1NyBMOC42NjA3NDg1MSwtMS40NDEwMTAwOSBMMTAuMTEzMDU5LDAuMDY1NzU2MTczMyBMMTEuNTY1MjM2NiwtMS40NDEwMjkzMyBaIgogICAgICAgIGlkPSJQYXRoIiBzdHJva2U9IiM0Q0ZFQjEiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgogICAgICA8cG9seWdvbiBpZD0iUGF0aC01IiBmaWxsPSIjNENGRUIxIgogICAgICAgIHBvaW50cz0iMy40MjEwNTI2MyA1LjY0MTI5NTcxIDYuMTU3ODk0NzQgOC40NzA1ODgyNCA4Ljg5NDczNjg0IDUuNjQxMjk1NzEgNy41MzQ2NDIzMSA0LjIzNTI5NDEyIDYuMTU3ODk0NzQgNS42NTg0MzY2NCA0Ljc4MTIxODk0IDQuMjM1Mjk0MTIiPgogICAgICA8L3BvbHlnb24+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=',
  adapter: () => new _rentfuse_labs_neo_wallet_adapter_walletconnect__WEBPACK_IMPORTED_MODULE_1__.WalletConnectWalletAdapter(config, true)
});

/***/ }),

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/styles.css":
/*!****************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/styles.css ***!
  \****************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@cityofzion/neon-js":
/*!**************************************!*\
  !*** external "@cityofzion/neon-js" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@cityofzion/neon-js");

/***/ }),

/***/ "@cityofzion/wallet-connect-sdk-core":
/*!******************************************************!*\
  !*** external "@cityofzion/wallet-connect-sdk-core" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@cityofzion/wallet-connect-sdk-core");

/***/ }),

/***/ "@neongd/neo-dapi":
/*!***********************************!*\
  !*** external "@neongd/neo-dapi" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@neongd/neo-dapi");

/***/ }),

/***/ "@walletconnect/qrcode-modal":
/*!**********************************************!*\
  !*** external "@walletconnect/qrcode-modal" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@walletconnect/qrcode-modal");

/***/ }),

/***/ "eventemitter3":
/*!********************************!*\
  !*** external "eventemitter3" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("eventemitter3");

/***/ }),

/***/ "neo3-dapi":
/*!****************************!*\
  !*** external "neo3-dapi" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("neo3-dapi");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxFQUFFOFUsbURBRDZDO0FBRW5ENVUsRUFBQUEsR0FBRyxFQUFFLHlCQUY4QztBQUduRHlOLEVBQUFBLElBQUksRUFBRSx3dENBSDZDO0FBSW5EbEssRUFBQUEsT0FBTyxFQUFFLE1BQU0sSUFBSTZQLHVHQUFKLENBQStCck8sTUFBL0IsRUFBdUMsSUFBdkM7QUFKb0MsQ0FBYixDQUFuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBR1JQOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vY29tcG9uZW50cy93YWxsZXQtY29ubmVjdGlvbi1wcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9hZGFwdGVyLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvZXJyb3JzLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9wb2xsLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvd2FpdC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5lb2xpbmUvbGliL2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5lb2xpbmUvbGliL3V0aWxzL25lb2xpbmUuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1vMy9saWIvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW8zL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW9uZWdhdGUvbGliL2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1vbmVnYXRlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1jb25uZWN0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1kaXNjb25uZWN0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1pY29uLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LWxpc3QtaXRlbS5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1tb2RhbC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtbW9kYWwtcHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtbXVsdGktYnV0dG9uLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2hvb2tzL2luZGV4LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2hvb2tzL3VzZS13YWxsZXQtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC9saWIvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9jb21wb25lbnRzL3dhbGxldC1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9ob29rcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9ob29rcy91c2Utd2FsbGV0LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QvbGliL2luZGV4LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QvbGliL3V0aWxzL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXdhbGxldGNvbm5lY3QvbGliL2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci13YWxsZXRjb25uZWN0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXdhbGxldHMvbGliL2luZGV4LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItd2FsbGV0cy9saWIvbmVvbGluZS5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXdhbGxldHMvbGliL28zLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItd2FsbGV0cy9saWIvb25lZ2F0ZS5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXdhbGxldHMvbGliL3R5cGVzLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItd2FsbGV0cy9saWIvd2FsbGV0Y29ubmVjdC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcIkBjaXR5b2Z6aW9uL3dhbGxldC1jb25uZWN0LXNkay1jb3JlXCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwiQG5lb25nZC9uZW8tZGFwaVwiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcIkB3YWxsZXRjb25uZWN0L3FyY29kZS1tb2RhbFwiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcImV2ZW50ZW1pdHRlcjNcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZW8zLWRhcGlcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuXHRnZXROZW9MaW5lV2FsbGV0LFxuXHRnZXROZW9uV2FsbGV0Q29ubmVjdFdhbGxldCxcblx0Z2V0TzNXYWxsZXQsXG5cdGdldE9uZUdhdGVXYWxsZXQsXG5cdGdldFdhbGxldENvbm5lY3RXYWxsZXQsXG59IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci13YWxsZXRzJztcbmltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldFByb3ZpZGVyIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0JztcblxuZXhwb3J0IGNvbnN0IFdhbGxldENvbm5lY3Rpb25Qcm92aWRlciA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0Q29ubmVjdGlvblByb3ZpZGVyKHtcblx0Y2hpbGRyZW4sXG59OiB7XG5cdGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59KSB7XG5cdC8vIEByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci13YWxsZXRzIGluY2x1ZGVzIGFsbCB0aGUgYWRhcHRlcnMgYnV0IHN1cHBvcnRzIHRyZWUgc2hha2luZyAtLVxuXHQvLyBPbmx5IHRoZSB3YWxsZXRzIHlvdSBjb25maWd1cmUgaGVyZSB3aWxsIGJlIGNvbXBpbGVkIGludG8geW91ciBhcHBsaWNhdGlvblxuXHRjb25zdCB3YWxsZXRzID0gdXNlTWVtbyhcblx0XHQoKSA9PiBbXG5cdFx0XHRnZXROZW9MaW5lV2FsbGV0KCksXG5cdFx0XHRnZXRPM1dhbGxldCgpLFxuXHRcdFx0Z2V0V2FsbGV0Q29ubmVjdFdhbGxldCh7XG5cdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRjaGFpbnM6IFsnbmVvMzp0ZXN0bmV0J10sIC8vIFsnbmVvMzptYWlubmV0JywgJ25lbzM6dGVzdG5ldCcsICduZW8zOnByaXZhdGUnXVxuXHRcdFx0XHRcdG1ldGhvZHM6IFsnaW52b2tlRnVuY3Rpb24nXSwgLy8gWydpbnZva2VGdW5jdGlvbicsYW55IG90aGVyIG1ldGhvZCBuYW1lIHByZXNlbnQgb24gdGhlIFJwY1NlcnZlciBlZy4gZ2V0dmVyc2lvbl1cblx0XHRcdFx0XHRhcHBNZXRhZGF0YToge1xuXHRcdFx0XHRcdFx0bmFtZTogJ0V4YW1wbGUnLFxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdFeGFtcGxlIGRlc2NyaXB0aW9uJyxcblx0XHRcdFx0XHRcdHVybDogJ2h0dHBzOi8vbmVvbm92YS5zcGFjZScsXG5cdFx0XHRcdFx0XHRpY29uczogWydodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcmVudGZ1c2UtbGFicy9uZW9ub3ZhL21haW4vbmVvbm92YS1pY29uLnBuZyddLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxvZ2dlcjogJ2RlYnVnJyxcblx0XHRcdFx0cmVsYXlQcm92aWRlcjogJ3dzczovL3JlbGF5LndhbGxldGNvbm5lY3Qub3JnJyxcblx0XHRcdH0pLFxuXHRcdFx0Z2V0TmVvbldhbGxldENvbm5lY3RXYWxsZXQoe1xuXHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0Y2hhaW5zOiBbJ25lbzM6dGVzdG5ldCddLCAvLyBbJ25lbzM6bWFpbm5ldCcsICduZW8zOnRlc3RuZXQnLCAnbmVvMzpwcml2YXRlJ11cblx0XHRcdFx0XHRtZXRob2RzOiBbJ2ludm9rZUZ1bmN0aW9uJ10sIC8vIFsnaW52b2tlRnVuY3Rpb24nLGFueSBvdGhlciBtZXRob2QgbmFtZSBwcmVzZW50IG9uIHRoZSBScGNTZXJ2ZXIgZWcuIGdldHZlcnNpb25dXG5cdFx0XHRcdFx0YXBwTWV0YWRhdGE6IHtcblx0XHRcdFx0XHRcdG5hbWU6ICdFeGFtcGxlJyxcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnRXhhbXBsZSBkZXNjcmlwdGlvbicsXG5cdFx0XHRcdFx0XHR1cmw6ICdodHRwczovL25lb25vdmEuc3BhY2UnLFxuXHRcdFx0XHRcdFx0aWNvbnM6IFsnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3JlbnRmdXNlLWxhYnMvbmVvbm92YS9tYWluL25lb25vdmEtaWNvbi5wbmcnXSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRsb2dnZXI6ICdkZWJ1ZycsXG5cdFx0XHRcdHJlbGF5UHJvdmlkZXI6ICd3c3M6Ly9yZWxheS53YWxsZXRjb25uZWN0Lm9yZycsXG5cdFx0XHR9KSxcblx0XHRcdGdldE9uZUdhdGVXYWxsZXQoKSxcblx0XHRdLFxuXHRcdFtdLFxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PFdhbGxldFByb3ZpZGVyIHdhbGxldHM9e3dhbGxldHN9IGF1dG9Db25uZWN0PXt0cnVlfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L1dhbGxldFByb3ZpZGVyPlxuXHQpO1xufSk7XG4iLCJpbXBvcnQgeyBXYWxsZXRNb2RhbFByb3ZpZGVyIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpJztcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldENvbm5lY3Rpb25Qcm92aWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvd2FsbGV0LWNvbm5lY3Rpb24tcHJvdmlkZXInO1xuXG4vLyBVc2UgcmVxdWlyZSBpbnN0ZWFkIG9mIGltcG9ydCwgYW5kIG9yZGVyIG1hdHRlcnNcbnJlcXVpcmUoJy4uL3N0eWxlcy9nbG9iYWwuY3NzJyk7XG5yZXF1aXJlKCdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvc3R5bGVzLmNzcycpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8V2FsbGV0Q29ubmVjdGlvblByb3ZpZGVyPlxuXHRcdFx0PFdhbGxldE1vZGFsUHJvdmlkZXI+XG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblx0XHRcdDwvV2FsbGV0TW9kYWxQcm92aWRlcj5cblx0XHQ8L1dhbGxldENvbm5lY3Rpb25Qcm92aWRlcj5cblx0KTtcbn1cbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRlbWl0dGVyMyc7XG5leHBvcnQgeyBFdmVudEVtaXR0ZXIgfTtcbmV4cG9ydCB2YXIgV2l0bmVzc1Njb3BlO1xuKGZ1bmN0aW9uIChXaXRuZXNzU2NvcGUpIHtcbiAgICBXaXRuZXNzU2NvcGVbV2l0bmVzc1Njb3BlW1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XG4gICAgV2l0bmVzc1Njb3BlW1dpdG5lc3NTY29wZVtcIkNhbGxlZEJ5RW50cnlcIl0gPSAxXSA9IFwiQ2FsbGVkQnlFbnRyeVwiO1xuICAgIFdpdG5lc3NTY29wZVtXaXRuZXNzU2NvcGVbXCJDdXN0b21Db250cmFjdHNcIl0gPSAxNl0gPSBcIkN1c3RvbUNvbnRyYWN0c1wiO1xuICAgIFdpdG5lc3NTY29wZVtXaXRuZXNzU2NvcGVbXCJDdXN0b21Hcm91cHNcIl0gPSAzMl0gPSBcIkN1c3RvbUdyb3Vwc1wiO1xuICAgIFdpdG5lc3NTY29wZVtXaXRuZXNzU2NvcGVbXCJHbG9iYWxcIl0gPSAxMjhdID0gXCJHbG9iYWxcIjtcbn0pKFdpdG5lc3NTY29wZSB8fCAoV2l0bmVzc1Njb3BlID0ge30pKTtcbmV4cG9ydCBjbGFzcyBCYXNlV2FsbGV0QWRhcHRlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGFwdGVyLmpzLm1hcCIsImV4cG9ydCBjbGFzcyBXYWxsZXRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXROb3RGb3VuZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90SW5zdGFsbGVkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXROb3RJbnN0YWxsZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdFJlYWR5RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXROb3RSZWFkeUVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0Q29ubmVjdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Q29ubmVjdGlvbkVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0RGlzY29ubmVjdGVkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXREaXNjb25uZWN0ZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldERpc2Nvbm5lY3Rpb25FcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldERpc2Nvbm5lY3Rpb25FcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldEFjY291bnRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldEFjY291bnRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdENvbm5lY3RlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRUaW1lb3V0RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRUaW1lb3V0RXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRXaW5kb3dCbG9ja2VkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRXaW5kb3dCbG9ja2VkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRXaW5kb3dDbG9zZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldFdpbmRvd0Nsb3NlZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0TWV0aG9kTm90U3VwcG9ydGVkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRNZXRob2ROb3RTdXBwb3J0ZWRFcnJvcic7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3JzLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vYWRhcHRlcic7XG5leHBvcnQgKiBmcm9tICcuL2Vycm9ycyc7XG5leHBvcnQgKiBmcm9tICcuL3BvbGwnO1xuZXhwb3J0ICogZnJvbSAnLi93YWl0Jztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHBvbGwoY2FsbGJhY2ssIGludGVydmFsLCBjb3VudCkge1xuICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBkb25lID0geWllbGQgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGlmICghZG9uZSlcbiAgICAgICAgICAgICAgICBwb2xsKGNhbGxiYWNrLCBpbnRlcnZhbCwgY291bnQgLSAxKTtcbiAgICAgICAgfSksIGludGVydmFsKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcG9sbFVudGlsUmVhZHkoYWRhcHRlciwgcG9sbEludGVydmFsLCBwb2xsQ291bnQpIHtcbiAgICBwb2xsKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyByZWFkeSB9ID0gYWRhcHRlcjtcbiAgICAgICAgaWYgKHJlYWR5KSB7XG4gICAgICAgICAgICBpZiAoIWFkYXB0ZXIuZW1pdCgncmVhZHknKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHthZGFwdGVyLmNvbnN0cnVjdG9yLm5hbWV9IGlzIHJlYWR5IGJ1dCBubyBsaXN0ZW5lciB3YXMgcmVnaXN0ZXJlZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWFkeTtcbiAgICB9LCBwb2xsSW50ZXJ2YWwsIHBvbGxDb3VudCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb2xsLmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgcnBjIH0gZnJvbSAnQGNpdHlvZnppb24vbmVvbi1qcyc7XG5leHBvcnQgZnVuY3Rpb24gd2FpdFR4KHJwY0FkZHJlc3MsIHR4SWQsIHJlYWRGcmVxdWVuY3kgPSAxMDAwLCB0aW1lb3V0ID0gMzAwMDApIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IHJwY0NsaWVudCA9IG5ldyBycGMuUlBDQ2xpZW50KHJwY0FkZHJlc3MpO1xuICAgICAgICAvLyBXYWl0IHVudGlsIHRoZSB0cmFuc2FjdGlvbiBjYW4gYmUgZm91bmQsIGlmIGl0J3MgZm91bmQgaXQgbWVhbnMgaXQncyBvayBiZWNhdXNlIGl0IGhhcyBiZWVuIGluc2VydGVkIGluIGEgYmxvY2tcbiAgICAgICAgLy8gT3RoZXJ3aXNlIHRyaWdnZXIgdGhlIHRpbWVvdXQgbWVhbmluZyB0aGF0IGl0J3Mgbm90IGluc2VydGVkIGluIHRoZSBibG9jayAoYXZlcmFnZSBibG9jayB0aW1lIDE1cylcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgdGhlIHRpbWVvdXQgaGFzIHBhc3NlZFxuICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA+IHRpbWVvdXQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgdHJhbnNhY3Rpb24gZnJvbSB0aGUgcnBjQ2xpZW50XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSB5aWVsZCBycGNDbGllbnQuZ2V0UmF3VHJhbnNhY3Rpb24odHhJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIFNsZWVwIGZvciB0aGUgbmV4dCBjeWNsZVxuICAgICAgICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHJlYWRGcmVxdWVuY3kpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoIXRyYW5zYWN0aW9uKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhaXQuanMubWFwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBCYXNlV2FsbGV0QWRhcHRlciwgcG9sbFVudGlsUmVhZHksIFdhbGxldEFjY291bnRFcnJvciwgV2FsbGV0Q29ubmVjdGlvbkVycm9yLCBXYWxsZXREaXNjb25uZWN0ZWRFcnJvciwgV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yLCBXYWxsZXRFcnJvciwgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IsIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UnO1xuaW1wb3J0IHsgTmVvTGluZUluaXQsIE5lb0xpbmVOM0luaXQsIH0gZnJvbSAnLi91dGlscy9uZW9saW5lJztcbmNvbnN0IERFRkFVTFRfV0FMTEVUX0NPTkZJRyA9IHsgb3B0aW9uczogbnVsbCB9O1xuLy8gUmVmZXJlbmNlIGF0IGh0dHBzOi8vbmVvbGluZS5pby9kYXBpL04zLmh0bWwgKFRha2VuIG9uIDA4LzExLzIxKVxuZXhwb3J0IGNsYXNzIE5lb0xpbmVXYWxsZXRBZGFwdGVyIGV4dGVuZHMgQmFzZVdhbGxldEFkYXB0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IERFRkFVTFRfV0FMTEVUX0NPTkZJRykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9hZGRyZXNzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gY29uZmlnLm9wdGlvbnM7XG4gICAgICAgIGlmICghdGhpcy5yZWFkeSlcbiAgICAgICAgICAgIHBvbGxVbnRpbFJlYWR5KHRoaXMsIGNvbmZpZy5wb2xsSW50ZXJ2YWwgfHwgMTAwMCwgY29uZmlnLnBvbGxDb3VudCB8fCAzKTtcbiAgICB9XG4gICAgZ2V0IGFkZHJlc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRyZXNzO1xuICAgIH1cbiAgICBnZXQgcmVhZHkoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTkVPTGluZU4zICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG4gICAgZ2V0IGNvbm5lY3RpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW5nO1xuICAgIH1cbiAgICBnZXQgY29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9hZGRyZXNzO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQgfHwgdGhpcy5jb25uZWN0aW5nKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBuZW9saW5lIGNsaWVudCBpbml0aWFsaXppbmcgdGhlIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGllbnQgPSB5aWVsZCBOZW9MaW5lTjNJbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsaWVudENvbW1vbiA9IHlpZWxkIE5lb0xpbmVJbml0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBXYWxsZXRFcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Q29ubmVjdGlvbkVycm9yKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fY2xpZW50IHx8ICF0aGlzLl9jbGllbnRDb21tb24pXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRBY2NvdW50RXJyb3IoKTtcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3VudDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBOZW9MaW5lIGFza3MgdGhlIHVzZXIgdG8gY29ubmVjdCB0aGUgZGFwcCB3aGVuIGNhbGxpbmcgdGhlIGdldEFjY291bnQgbWV0aG9kXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQgPSB5aWVsZCB0aGlzLl9jbGllbnQuZ2V0QWNjb3VudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldEFjY291bnRFcnJvcihlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRBY2NvdW50RXJyb3IoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRyZXNzID0gYWNjb3VudC5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIGNsZWFudXAgb2YgZGlzY29ubmVjdGlvblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdORU9MaW5lLk5FTy5FVkVOVC5ESVNDT05ORUNURUQnLCB0aGlzLl9kaXNjb25uZWN0ZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY29ubmVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgICAgICBpZiAoY2xpZW50KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogSG93P1xuICAgICAgICAgICAgICAgICAgICAvL2F3YWl0IHRoaXMuX2NsaWVudC5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZHJlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jbGllbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsaWVudENvbW1vbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlLCBlcnJvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZGlzY29ubmVjdCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW52b2tlUmVhZChyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgICAgICBpZiAoIWNsaWVudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjbGllbnQuaW52b2tlUmVhZCh7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdEhhc2g6IHJlcXVlc3Quc2NyaXB0SGFzaCxcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uOiByZXF1ZXN0Lm9wZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgYXJnczogcmVxdWVzdC5hcmdzLFxuICAgICAgICAgICAgICAgICAgICBzaWduZXJzOiByZXF1ZXN0LnNpZ25lcnMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVG9SZWFkUmVzdWx0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnZva2VSZWFkTXVsdGkocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5fY2xpZW50O1xuICAgICAgICAgICAgaWYgKCFjbGllbnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2xpZW50Lmludm9rZVJlYWRNdWx0aSh7XG4gICAgICAgICAgICAgICAgICAgIGludm9rZVJlYWRBcmdzOiByZXF1ZXN0Lmludm9jYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICBzaWduZXJzOiByZXF1ZXN0LnNpZ25lcnMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVG9SZWFkUmVzdWx0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnZva2UocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5fY2xpZW50O1xuICAgICAgICAgICAgaWYgKCFjbGllbnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2xpZW50Lmludm9rZSh7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdEhhc2g6IHJlcXVlc3Quc2NyaXB0SGFzaCxcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uOiByZXF1ZXN0Lm9wZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgYXJnczogcmVxdWVzdC5hcmdzLFxuICAgICAgICAgICAgICAgICAgICBzaWduZXJzOiByZXF1ZXN0LnNpZ25lcnMsXG4gICAgICAgICAgICAgICAgICAgIGZlZTogcmVxdWVzdC5mZWUsXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhU3lzdGVtRmVlOiByZXF1ZXN0LmV4dHJhU3lzdGVtRmVlLFxuICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RPdmVycmlkZTogcmVxdWVzdC5icm9hZGNhc3RPdmVycmlkZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUb1dyaXRlUmVzdWx0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnZva2VNdWx0aShyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgICAgICBpZiAoIWNsaWVudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjbGllbnQuaW52b2tlTXVsdGlwbGUoe1xuICAgICAgICAgICAgICAgICAgICBpbnZva2VBcmdzOiByZXF1ZXN0Lmludm9jYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICBzaWduZXJzOiByZXF1ZXN0LnNpZ25lcnMsXG4gICAgICAgICAgICAgICAgICAgIGZlZTogcmVxdWVzdC5mZWUsXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhU3lzdGVtRmVlOiByZXF1ZXN0LmV4dHJhU3lzdGVtRmVlLFxuICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RPdmVycmlkZTogcmVxdWVzdC5icm9hZGNhc3RPdmVycmlkZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUb1dyaXRlUmVzdWx0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXROZXR3b3JrcygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudENvbW1vbiA9IHRoaXMuX2NsaWVudENvbW1vbjtcbiAgICAgICAgICAgIGlmICghY2xpZW50Q29tbW9uKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNsaWVudENvbW1vbi5nZXROZXR3b3JrcygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvR2V0TmV0d29ya3NSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25NZXNzYWdlKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuX2NsaWVudDtcbiAgICAgICAgICAgIGlmICghY2xpZW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNsaWVudC5zaWduTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlcXVlc3QubWVzc2FnZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUb1NpZ25NZXNzYWdlUmVzdWx0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVzcG9uc2VUb1JlYWRSZXN1bHQocmVzcG9uc2UpIHtcbiAgICAgICAgLy8gSWYgdGhlIHN0YXRlIGlzIGhhbHQgaXQgbWVhbnMgdGhhdCBldmVyeXRoaW5nIHdlbnQgd2VsbFxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdGUgPT09ICdIQUxUJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdDogcmVzcG9uc2Uuc2NyaXB0LFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogcmVzcG9uc2Uuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGdhc0NvbnN1bWVkOiByZXNwb25zZS5nYXNfY29uc3VtZWQsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2s6IHJlc3BvbnNlLnN0YWNrLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSBhbiBlcnJvciBvY2N1cnJlZCBhbmQgc28gcmV0dXJuIGl0XG4gICAgICAgIC8vIFRPRE86IG1lc3NhZ2UgYW5kIGNvZGUgd2hlcmU/XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICBtZXNzYWdlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb2RlOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9yZXNwb25zZVRvV3JpdGVSZXN1bHQocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHR4SWQ6IHJlc3BvbnNlLnR4aWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfcmVzcG9uc2VUb0dldE5ldHdvcmtzUmVzdWx0KHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBuZXR3b3JrczogcmVzcG9uc2UubmV0d29ya3MsXG4gICAgICAgICAgICAgICAgZGVmYXVsdE5ldHdvcms6IHJlc3BvbnNlLmRlZmF1bHROZXR3b3JrLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX3Jlc3BvbnNlVG9TaWduTWVzc2FnZVJlc3VsdChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgcHVibGljS2V5OiByZXNwb25zZS5wdWJsaWNLZXksXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgICBzYWx0OiByZXNwb25zZS5zYWx0LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLm1lc3NhZ2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfZGlzY29ubmVjdGVkKCkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgIGlmIChjbGllbnQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdORU9MaW5lLk5FTy5FVkVOVC5ESVNDT05ORUNURUQnLCB0aGlzLl9kaXNjb25uZWN0ZWQpO1xuICAgICAgICAgICAgdGhpcy5fYWRkcmVzcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9jbGllbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IFdhbGxldERpc2Nvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdkaXNjb25uZWN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGFwdGVyLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vYWRhcHRlcic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCB2YXIgTmVvTGluZVNjb3BlO1xuKGZ1bmN0aW9uIChOZW9MaW5lU2NvcGUpIHtcbiAgICBOZW9MaW5lU2NvcGVbTmVvTGluZVNjb3BlW1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XG4gICAgTmVvTGluZVNjb3BlW05lb0xpbmVTY29wZVtcIkNhbGxlZEJ5RW50cnlcIl0gPSAxXSA9IFwiQ2FsbGVkQnlFbnRyeVwiO1xuICAgIE5lb0xpbmVTY29wZVtOZW9MaW5lU2NvcGVbXCJDdXN0b21Db250cmFjdHNcIl0gPSAxNl0gPSBcIkN1c3RvbUNvbnRyYWN0c1wiO1xuICAgIE5lb0xpbmVTY29wZVtOZW9MaW5lU2NvcGVbXCJDdXN0b21Hcm91cHNcIl0gPSAzMl0gPSBcIkN1c3RvbUdyb3Vwc1wiO1xuICAgIE5lb0xpbmVTY29wZVtOZW9MaW5lU2NvcGVbXCJHbG9iYWxcIl0gPSAxMjhdID0gXCJHbG9iYWxcIjtcbn0pKE5lb0xpbmVTY29wZSB8fCAoTmVvTGluZVNjb3BlID0ge30pKTtcbmV4cG9ydCB2YXIgTmVvTGluZUNoYWluSWQ7XG4oZnVuY3Rpb24gKE5lb0xpbmVDaGFpbklkKSB7XG4gICAgTmVvTGluZUNoYWluSWRbTmVvTGluZUNoYWluSWRbXCJOZW8yTWFpbk5ldFwiXSA9IDFdID0gXCJOZW8yTWFpbk5ldFwiO1xuICAgIE5lb0xpbmVDaGFpbklkW05lb0xpbmVDaGFpbklkW1wiTmVvMlRlc3ROZXRcIl0gPSAyXSA9IFwiTmVvMlRlc3ROZXRcIjtcbiAgICBOZW9MaW5lQ2hhaW5JZFtOZW9MaW5lQ2hhaW5JZFtcIk5lbzNNYWluTmV0XCJdID0gM10gPSBcIk5lbzNNYWluTmV0XCI7XG4gICAgTmVvTGluZUNoYWluSWRbTmVvTGluZUNoYWluSWRbXCJOZW8zVGVzdE5ldFwiXSA9IDRdID0gXCJOZW8zVGVzdE5ldFwiO1xufSkoTmVvTGluZUNoYWluSWQgfHwgKE5lb0xpbmVDaGFpbklkID0ge30pKTtcbmV4cG9ydCBmdW5jdGlvbiBOZW9MaW5lTjNJbml0KCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIFVzZSBhbiBhc3luYyBwYXR0ZXJuIGFzIHRoZSBnbG9iYWwgTkVPTGluZU4zIGlzIG5vdCBhdmFpbGFibGUgd2hpbGVcbiAgICAgICAgLy8gdGhlIE5FT0xpbmUuTkVPLkVWRU5ULlJFQURZIGV2ZW50IGlzIHN0aWxsIGZpcmluZzpcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUobmV3IHdpbmRvdy5ORU9MaW5lTjMuSW5pdCgpKTtcbiAgICAgICAgfSwgMTApKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBOZW9MaW5lSW5pdCgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBVc2UgYW4gYXN5bmMgcGF0dGVybiBhcyB0aGUgZ2xvYmFsIE5FT0xpbmVOMyBpcyBub3QgYXZhaWxhYmxlIHdoaWxlXG4gICAgICAgIC8vIHRoZSBORU9MaW5lLk5FTy5FVkVOVC5SRUFEWSBldmVudCBpcyBzdGlsbCBmaXJpbmc6XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKG5ldyB3aW5kb3cuTkVPTGluZS5Jbml0KCkpO1xuICAgICAgICB9LCAxMCkpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmVvbGluZS5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEJhc2VXYWxsZXRBZGFwdGVyLCBXYWxsZXRBY2NvdW50RXJyb3IsIFdhbGxldERpc2Nvbm5lY3RlZEVycm9yLCBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IsIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UnO1xuaW1wb3J0IG5lbzNEYXBpIGZyb20gJ25lbzMtZGFwaSc7XG5jb25zdCBERUZBVUxUX1dBTExFVF9DT05GSUcgPSB7IG9wdGlvbnM6IG51bGwgfTtcbi8vIFJlZmVyZW5jZSBhdCBodHRwczovL25lbzNkYXBpZG9jcy5vMy5uZXR3b3JrLyNnZXR0aW5nLXN0YXJ0ZWQgKFRha2VuIG9uIDEwLzExLzIxKVxuZXhwb3J0IGNsYXNzIE8zV2FsbGV0QWRhcHRlciBleHRlbmRzIEJhc2VXYWxsZXRBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSBERUZBVUxUX1dBTExFVF9DT05GSUcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fYWRkcmVzcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zO1xuICAgIH1cbiAgICBnZXQgYWRkcmVzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZHJlc3M7XG4gICAgfVxuICAgIGdldCByZWFkeSgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuICAgIH1cbiAgICBnZXQgY29ubmVjdGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpbmc7XG4gICAgfVxuICAgIGdldCBjb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2FkZHJlc3M7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCB8fCB0aGlzLmNvbm5lY3RpbmcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBUYWtlbiBmcm9tIG8zIHNwZWNzXG4gICAgICAgICAgICAgICAgbGV0IGFjY291bnQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTzMgYXNrcyB0aGUgdXNlciB0byBjb25uZWN0IHRoZSBkYXBwIHdoZW4gY2FsbGluZyB0aGUgZ2V0QWNjb3VudCBtZXRob2RcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudCA9IHlpZWxkIG5lbzNEYXBpLmdldEFjY291bnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRBY2NvdW50RXJyb3IoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0QWNjb3VudEVycm9yKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkcmVzcyA9IGFjY291bnQuYWRkcmVzcztcbiAgICAgICAgICAgICAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byBjbGVhbnVwIG9mIGRpc2Nvbm5lY3Rpb25cbiAgICAgICAgICAgICAgICBuZW8zRGFwaS5hZGRFdmVudExpc3RlbmVyKG5lbzNEYXBpLkNvbnN0YW50cy5FdmVudE5hbWUuRElTQ09OTkVDVEVELCB0aGlzLl9kaXNjb25uZWN0ZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY29ubmVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IEhvdz9cbiAgICAgICAgICAgICAgICAvL2F3YWl0IG5lbzNEYXBpLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRyZXNzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlLCBlcnJvcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdkaXNjb25uZWN0Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnZva2VSZWFkKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBuZW8zRGFwaS5pbnZva2VSZWFkKHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0SGFzaDogcmVxdWVzdC5zY3JpcHRIYXNoLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IHJlcXVlc3Qub3BlcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiByZXF1ZXN0LmFyZ3MsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25lcnM6IHJlcXVlc3Quc2lnbmVycyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUb1JlYWRSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludm9rZVJlYWRNdWx0aShyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgbmVvM0RhcGkuaW52b2tlUmVhZE11bHRpKHtcbiAgICAgICAgICAgICAgICAgICAgaW52b2tlUmVhZEFyZ3M6IHJlcXVlc3QuaW52b2NhdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25lcnM6IHJlcXVlc3Quc2lnbmVycyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUb1JlYWRSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludm9rZShyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgbmVvM0RhcGkuaW52b2tlKHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0SGFzaDogcmVxdWVzdC5zY3JpcHRIYXNoLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IHJlcXVlc3Qub3BlcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiByZXF1ZXN0LmFyZ3MsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25lcnM6IHJlcXVlc3Quc2lnbmVycyxcbiAgICAgICAgICAgICAgICAgICAgZmVlOiByZXF1ZXN0LmZlZSxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFTeXN0ZW1GZWU6IHJlcXVlc3QuZXh0cmFTeXN0ZW1GZWUsXG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdE92ZXJyaWRlOiByZXF1ZXN0LmJyb2FkY2FzdE92ZXJyaWRlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvV3JpdGVSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludm9rZU11bHRpKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBuZW8zRGFwaS5pbnZva2VNdWx0aSh7XG4gICAgICAgICAgICAgICAgICAgIGludm9rZUFyZ3M6IHJlcXVlc3QuaW52b2NhdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25lcnM6IHJlcXVlc3Quc2lnbmVycyxcbiAgICAgICAgICAgICAgICAgICAgZmVlOiByZXF1ZXN0LmZlZSxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFTeXN0ZW1GZWU6IHJlcXVlc3QuZXh0cmFTeXN0ZW1GZWUsXG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdE92ZXJyaWRlOiByZXF1ZXN0LmJyb2FkY2FzdE92ZXJyaWRlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvV3JpdGVSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldE5ldHdvcmtzKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIG5lbzNEYXBpLmdldE5ldHdvcmtzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVG9HZXROZXR3b3Jrc1Jlc3VsdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnbk1lc3NhZ2UocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIG5lbzNEYXBpLnNpZ25NZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVxdWVzdC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvU2lnbk1lc3NhZ2VSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZXNwb25zZVRvUmVhZFJlc3VsdChyZXNwb25zZSkge1xuICAgICAgICAvLyBJZiB0aGUgc3RhdGUgaXMgaGFsdCBpdCBtZWFucyB0aGF0IGV2ZXJ5dGhpbmcgd2VudCB3ZWxsXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0ZSA9PT0gJ0hBTFQnKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0OiByZXNwb25zZS5zY3JpcHQsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiByZXNwb25zZS5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2FzQ29uc3VtZWQ6IHJlc3BvbnNlLmdhc19jb25zdW1lZCxcbiAgICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzdGFjazogcmVzcG9uc2Uuc3RhY2ssXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGFuIGVycm9yIG9jY3VycmVkIGFuZCBzbyByZXR1cm4gaXRcbiAgICAgICAgLy8gVE9ETzogbWVzc2FnZSBhbmQgY29kZSB3aGVyZT9cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvZGU6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX3Jlc3BvbnNlVG9Xcml0ZVJlc3VsdChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdHhJZDogcmVzcG9uc2UudHhpZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9yZXNwb25zZVRvR2V0TmV0d29ya3NSZXN1bHQocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5ldHdvcmtzOiByZXNwb25zZS5uZXR3b3JrcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TmV0d29yazogcmVzcG9uc2UuZGVmYXVsdE5ldHdvcmssXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfcmVzcG9uc2VUb1NpZ25NZXNzYWdlUmVzdWx0KHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBwdWJsaWNLZXk6IHJlc3BvbnNlLnB1YmxpY0tleSxcbiAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxuICAgICAgICAgICAgICAgIHNhbHQ6IHJlc3BvbnNlLnNhbHQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UubWVzc2FnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9kaXNjb25uZWN0ZWQoKSB7XG4gICAgICAgIG5lbzNEYXBpLnJlbW92ZUV2ZW50TGlzdGVuZXIobmVvM0RhcGkuQ29uc3RhbnRzLkV2ZW50TmFtZS5ESVNDT05ORUNURUQpO1xuICAgICAgICB0aGlzLl9hZGRyZXNzID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBXYWxsZXREaXNjb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgdGhpcy5lbWl0KCdkaXNjb25uZWN0Jyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRhcHRlci5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2FkYXB0ZXInO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBCYXNlV2FsbGV0QWRhcHRlciwgcG9sbFVudGlsUmVhZHksIFdhbGxldEFjY291bnRFcnJvciwgV2FsbGV0Q29ubmVjdGlvbkVycm9yLCBXYWxsZXREaXNjb25uZWN0ZWRFcnJvciwgV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yLCBXYWxsZXRFcnJvciwgV2FsbGV0TWV0aG9kTm90U3VwcG9ydGVkRXJyb3IsIFdhbGxldE5vdENvbm5lY3RlZEVycm9yLCB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlJztcbmltcG9ydCB7IE5lb0RhcGkgfSBmcm9tICdAbmVvbmdkL25lby1kYXBpJztcbmNvbnN0IERFRkFVTFRfV0FMTEVUX0NPTkZJRyA9IHsgb3B0aW9uczogbnVsbCB9O1xuLy8gUmVmZXJlbmNlIGF0IGh0dHBzOi8vdGhpcy5fb25lR2F0ZURhcGlkb2NzLm8zLm5ldHdvcmsvI2dldHRpbmctc3RhcnRlZCAoVGFrZW4gb24gMTAvMTEvMjEpXG5leHBvcnQgY2xhc3MgT25lR2F0ZVdhbGxldEFkYXB0ZXIgZXh0ZW5kcyBCYXNlV2FsbGV0QWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnID0gREVGQVVMVF9XQUxMRVRfQ09ORklHKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2FkZHJlc3MgPSBudWxsO1xuICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBjb25maWcub3B0aW9ucztcbiAgICAgICAgaWYgKCF0aGlzLnJlYWR5KVxuICAgICAgICAgICAgcG9sbFVudGlsUmVhZHkodGhpcywgY29uZmlnLnBvbGxJbnRlcnZhbCB8fCAxMDAwLCBjb25maWcucG9sbENvdW50IHx8IDMpO1xuICAgIH1cbiAgICBnZXQgYWRkcmVzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZHJlc3M7XG4gICAgfVxuICAgIGdldCByZWFkeSgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5PbmVHYXRlICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG4gICAgZ2V0IGNvbm5lY3RpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW5nO1xuICAgIH1cbiAgICBnZXQgY29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9hZGRyZXNzO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCB8fCB0aGlzLmNvbm5lY3RpbmcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbmVHYXRlUHJvdmlkZXIgPSB3aW5kb3cuT25lR2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX29uZUdhdGVQcm92aWRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBuZW9saW5lIGNsaWVudCBpbml0aWFsaXppbmcgdGhlIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25lR2F0ZURhcGkgPSBuZXcgTmVvRGFwaSh0aGlzLl9vbmVHYXRlUHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBXYWxsZXRFcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Q29ubmVjdGlvbkVycm9yKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fb25lR2F0ZURhcGkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRBY2NvdW50RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAvLyBUYWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9uZW8tbmdkL25lby1kYXBpLW1vbm9yZXBvL3RyZWUvbWFzdGVyL3BhY2thZ2VzL25lby1kYXBpXG4gICAgICAgICAgICAgICAgbGV0IGFjY291bnQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25lR2F0ZSBhc2tzIHRoZSB1c2VyIHRvIGNvbm5lY3QgdGhlIGRhcHAgd2hlbiBjYWxsaW5nIHRoZSBnZXRBY2NvdW50IG1ldGhvZFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50ID0geWllbGQgdGhpcy5fb25lR2F0ZURhcGkuZ2V0QWNjb3VudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldEFjY291bnRFcnJvcihlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRBY2NvdW50RXJyb3IoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRyZXNzID0gYWNjb3VudC5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIGNsZWFudXAgb2YgZGlzY29ubmVjdGlvblxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuX29uZUdhdGVQcm92aWRlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9uKCdkaXNjb25uZWN0JywgdGhpcy5fZGlzY29ubmVjdGVkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Nvbm5lY3QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5fb25lR2F0ZURhcGk7XG4gICAgICAgICAgICBpZiAoY2xpZW50KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogSG93P1xuICAgICAgICAgICAgICAgICAgICAvL2F3YWl0IHRoaXMuX29uZUdhdGVEYXBpLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkcmVzcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uZUdhdGVEYXBpID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UsIGVycm9yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdkaXNjb25uZWN0Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnZva2VSZWFkKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuX29uZUdhdGVEYXBpO1xuICAgICAgICAgICAgaWYgKCFjbGllbnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2xpZW50Lmludm9rZVJlYWQoe1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHRIYXNoOiByZXF1ZXN0LnNjcmlwdEhhc2gsXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogcmVxdWVzdC5vcGVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IHJlcXVlc3QuYXJncyxcbiAgICAgICAgICAgICAgICAgICAgc2lnbmVyczogcmVxdWVzdC5zaWduZXJzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvUmVhZFJlc3VsdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW52b2tlUmVhZE11bHRpKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuX29uZUdhdGVEYXBpO1xuICAgICAgICAgICAgaWYgKCFjbGllbnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2xpZW50Lmludm9rZVJlYWRNdWx0aSh7XG4gICAgICAgICAgICAgICAgICAgIGludm9jYXRpb25zOiByZXF1ZXN0Lmludm9jYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICBzaWduZXJzOiByZXF1ZXN0LnNpZ25lcnMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVG9SZWFkUmVzdWx0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnZva2UocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5fb25lR2F0ZURhcGk7XG4gICAgICAgICAgICBpZiAoIWNsaWVudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjbGllbnQuaW52b2tlKHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0SGFzaDogcmVxdWVzdC5zY3JpcHRIYXNoLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IHJlcXVlc3Qub3BlcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiByZXF1ZXN0LmFyZ3MsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25lcnM6IHJlcXVlc3Quc2lnbmVycyxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFOZXR3b3JrRmVlOiByZXF1ZXN0LmZlZSxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFTeXN0ZW1GZWU6IHJlcXVlc3QuZXh0cmFTeXN0ZW1GZWUsXG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdE92ZXJyaWRlOiByZXF1ZXN0LmJyb2FkY2FzdE92ZXJyaWRlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvV3JpdGVSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludm9rZU11bHRpKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuX29uZUdhdGVEYXBpO1xuICAgICAgICAgICAgaWYgKCFjbGllbnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2xpZW50Lmludm9rZU11bHRpKHtcbiAgICAgICAgICAgICAgICAgICAgaW52b2NhdGlvbnM6IHJlcXVlc3QuaW52b2NhdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25lcnM6IHJlcXVlc3Quc2lnbmVycyxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFOZXR3b3JrRmVlOiByZXF1ZXN0LmZlZSxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFTeXN0ZW1GZWU6IHJlcXVlc3QuZXh0cmFTeXN0ZW1GZWUsXG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdE92ZXJyaWRlOiByZXF1ZXN0LmJyb2FkY2FzdE92ZXJyaWRlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvV3JpdGVSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldE5ldHdvcmtzKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5fb25lR2F0ZURhcGk7XG4gICAgICAgICAgICBpZiAoIWNsaWVudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjbGllbnQuZ2V0TmV0d29ya3MoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUb0dldE5ldHdvcmtzUmVzdWx0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaWduTWVzc2FnZShyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9vbmVHYXRlRGFwaTtcbiAgICAgICAgICAgIGlmICghY2xpZW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgLy8gTm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgYnkgTmVvIGRBUElcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0ge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBUEkgbWV0aG9kIG5vdCBzdXBwb3J0ZWQnLFxuICAgICAgICAgICAgICAgIGVycm9yOiBuZXcgRXJyb3IoJ0FQSSBtZXRob2Qgbm90IHN1cHBvcnRlZCcpLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdNZXRob2ROb3RTdXBwb3J0ZWRFcnJvcicsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBXYWxsZXRNZXRob2ROb3RTdXBwb3J0ZWRFcnJvcigpKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3Jlc3BvbnNlVG9SZWFkUmVzdWx0KHJlc3BvbnNlKSB7XG4gICAgICAgIC8vIElmIHRoZSBzdGF0ZSBpcyBoYWx0IGl0IG1lYW5zIHRoYXQgZXZlcnl0aGluZyB3ZW50IHdlbGxcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXRlID09PSAnSEFMVCcpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHQ6IHJlc3BvbnNlLnNjcmlwdCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHJlc3BvbnNlLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBnYXNDb25zdW1lZDogcmVzcG9uc2UuZ2FzX2NvbnN1bWVkLFxuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb246IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrOiByZXNwb25zZS5zdGFjayxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UgYW4gZXJyb3Igb2NjdXJyZWQgYW5kIHNvIHJldHVybiBpdFxuICAgICAgICAvLyBUT0RPOiBtZXNzYWdlIGFuZCBjb2RlIHdoZXJlP1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY29kZTogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfcmVzcG9uc2VUb1dyaXRlUmVzdWx0KHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0eElkOiByZXNwb25zZS50eGlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX3Jlc3BvbnNlVG9HZXROZXR3b3Jrc1Jlc3VsdChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbmV0d29ya3M6IHJlc3BvbnNlLm5ldHdvcmtzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHROZXR3b3JrOiByZXNwb25zZS5kZWZhdWx0TmV0d29yayxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9kaXNjb25uZWN0ZWQoKSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5fb25lR2F0ZVByb3ZpZGVyO1xuICAgICAgICBpZiAocHJvdmlkZXIpIHtcbiAgICAgICAgICAgIHByb3ZpZGVyLnJlbW92ZUxpc3RlbmVyKCdkaXNjb25uZWN0JywgdGhpcy5fZGlzY29ubmVjdGVkKTtcbiAgICAgICAgICAgIHRoaXMuX2FkZHJlc3MgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fb25lR2F0ZURhcGkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLl9vbmVHYXRlUHJvdmlkZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IFdhbGxldERpc2Nvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdkaXNjb25uZWN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGFwdGVyLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vYWRhcHRlcic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL3dhbGxldC1idXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtY29sbGFwc2UnO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtY29ubmVjdC1idXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtZGlzY29ubmVjdC1idXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtaWNvbic7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1saXN0LWl0ZW0nO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtbW9kYWwtYnV0dG9uJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LW1vZGFsLXByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LW1vZGFsJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LW11bHRpLWJ1dHRvbic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldEJ1dHRvbiA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0QnV0dG9uKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZGlzYWJsZWQsIGVuZEljb24sIHN0YXJ0SWNvbiwgc3R5bGUsIHRhYkluZGV4LCBvbkNsaWNrLCB9KSB7XG4gICAgY29uc3QganVzdGlmeUNvbnRlbnQgPSBlbmRJY29uIHx8IHN0YXJ0SWNvbiA/ICdzcGFjZS1iZXR3ZWVuJyA6ICdjZW50ZXInO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogYHdhbGxldC1hZGFwdGVyLWJ1dHRvbiAke2NsYXNzTmFtZSB8fCAnJ31gLCBkaXNhYmxlZDogZGlzYWJsZWQsIG9uQ2xpY2s6IG9uQ2xpY2ssIHN0eWxlOiBPYmplY3QuYXNzaWduKHsganVzdGlmeUNvbnRlbnQgfSwgc3R5bGUpLCB0YWJJbmRleDogdGFiSW5kZXggfHwgMCwgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICBzdGFydEljb24gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLXN0YXJ0LWljb25cIiB9LCBzdGFydEljb24pLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgZW5kSWNvbiAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tZW5kLWljb25cIiB9LCBlbmRJY29uKSkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtYnV0dG9uLmpzLm1hcCIsImltcG9ydCBSZWFjdCwgeyB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBXYWxsZXRDb2xsYXBzZSA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0Q29sbGFwc2UoeyBpZCwgY2hpbGRyZW4sIGV4cGFuZGVkID0gZmFsc2UsIH0pIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgaW5zdGFudCA9IHVzZVJlZih0cnVlKTtcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gJ2hlaWdodCAyNTBtcyBlYXNlLW91dCc7XG4gICAgY29uc3Qgb3BlbkNvbGxhcHNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gbm9kZS5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGNsb3NlQ29sbGFwc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBub2RlLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgICAgICBub2RlLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgICAgICBvcGVuQ29sbGFwc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsb3NlQ29sbGFwc2UoKTtcbiAgICAgICAgfVxuICAgIH0sIFtleHBhbmRlZF0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDb21wbGV0ZSgpIHtcbiAgICAgICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBub2RlLnN0eWxlLm92ZXJmbG93ID0gZXhwYW5kZWQgPyAnaW5pdGlhbCcgOiAnaGlkZGVuJztcbiAgICAgICAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChub2RlICYmIGV2ZW50LnRhcmdldCA9PT0gbm9kZSAmJiBldmVudC5wcm9wZXJ0eU5hbWUgPT09ICdoZWlnaHQnKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5zdGFudC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYW5kbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgaW5zdGFudC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKTtcbiAgICB9LCBbZXhwYW5kZWRdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjaGlsZHJlbjogY2hpbGRyZW4sIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1jb2xsYXBzZVwiLCBpZDogaWQsIHJlZjogcmVmLCByb2xlOiBcInJlZ2lvblwiLCBzdHlsZTogeyBoZWlnaHQ6IDAsIHRyYW5zaXRpb246IGluc3RhbnQuY3VycmVudCA/IHVuZGVmaW5lZCA6IHRyYW5zaXRpb24gfSB9KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1jb2xsYXBzZS5qcy5tYXAiLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtYnV0dG9uJztcbmltcG9ydCB7IFdhbGxldEljb24gfSBmcm9tICcuL3dhbGxldC1pY29uJztcbmV4cG9ydCBjb25zdCBXYWxsZXRDb25uZWN0QnV0dG9uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRDb25uZWN0QnV0dG9uKF9hKSB7XG4gICAgdmFyIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZGlzYWJsZWQsIGVuZEljb24sIHN0YXJ0SWNvbiwgc3R5bGUsIHRhYkluZGV4LCBvbkNsaWNrIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZWRcIiwgXCJlbmRJY29uXCIsIFwic3RhcnRJY29uXCIsIFwic3R5bGVcIiwgXCJ0YWJJbmRleFwiLCBcIm9uQ2xpY2tcIl0pO1xuICAgIGNvbnN0IHsgd2FsbGV0LCBjb25uZWN0LCBjb25uZWN0aW5nLCBjb25uZWN0ZWQgfSA9IHVzZVdhbGxldCgpO1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNsaWNrKVxuICAgICAgICAgICAgb25DbGljayhldmVudCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbiAgICAgICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkKVxuICAgICAgICAgICAgY29ubmVjdCgpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgfSwgW29uQ2xpY2ssIGNvbm5lY3RdKTtcbiAgICBjb25zdCBjb250ZW50ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZHJlbilcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgaWYgKGNvbm5lY3RpbmcpXG4gICAgICAgICAgICByZXR1cm4gJ0Nvbm5lY3RpbmcgLi4uJztcbiAgICAgICAgaWYgKGNvbm5lY3RlZClcbiAgICAgICAgICAgIHJldHVybiAnQ29ubmVjdGVkJztcbiAgICAgICAgaWYgKHdhbGxldClcbiAgICAgICAgICAgIHJldHVybiAnQ29ubmVjdCc7XG4gICAgICAgIHJldHVybiAnQ29ubmVjdCBXYWxsZXQnO1xuICAgIH0sIFtjaGlsZHJlbiwgY29ubmVjdGluZywgY29ubmVjdGVkLCB3YWxsZXRdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0QnV0dG9uLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi10cmlnZ2VyXCIsIGRpc2FibGVkOiBkaXNhYmxlZCB8fCAhd2FsbGV0IHx8IGNvbm5lY3RpbmcgfHwgY29ubmVjdGVkLCBzdGFydEljb246IHdhbGxldCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0SWNvbiwgeyB3YWxsZXQ6IHdhbGxldCB9KSA6IHVuZGVmaW5lZCwgZW5kSWNvbjogZW5kSWNvbiwgc3R5bGU6IHN0eWxlLCB0YWJJbmRleDogdGFiSW5kZXgsIG9uQ2xpY2s6IGhhbmRsZUNsaWNrIH0sIHByb3BzKSwgY29udGVudCkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtY29ubmVjdC1idXR0b24uanMubWFwIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWJ1dHRvbic7XG5pbXBvcnQgeyBXYWxsZXRJY29uIH0gZnJvbSAnLi93YWxsZXQtaWNvbic7XG5leHBvcnQgY29uc3QgV2FsbGV0RGlzY29ubmVjdEJ1dHRvbiA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0RGlzY29ubmVjdEJ1dHRvbihfYSkge1xuICAgIHZhciB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGRpc2FibGVkLCBlbmRJY29uLCBzdGFydEljb24sIHN0eWxlLCB0YWJJbmRleCwgb25DbGljayB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImRpc2FibGVkXCIsIFwiZW5kSWNvblwiLCBcInN0YXJ0SWNvblwiLCBcInN0eWxlXCIsIFwidGFiSW5kZXhcIiwgXCJvbkNsaWNrXCJdKTtcbiAgICBjb25zdCB7IHdhbGxldCwgZGlzY29ubmVjdCwgZGlzY29ubmVjdGluZyB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xpY2spXG4gICAgICAgICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICAgICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpXG4gICAgICAgICAgICBkaXNjb25uZWN0KCkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICB9LCBbb25DbGljaywgZGlzY29ubmVjdF0pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkcmVuKVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICBpZiAoZGlzY29ubmVjdGluZylcbiAgICAgICAgICAgIHJldHVybiAnRGlzY29ubmVjdGluZyAuLi4nO1xuICAgICAgICBpZiAod2FsbGV0KVxuICAgICAgICAgICAgcmV0dXJuICdEaXNjb25uZWN0JztcbiAgICAgICAgcmV0dXJuICdEaXNjb25uZWN0IFdhbGxldCc7XG4gICAgfSwgW2NoaWxkcmVuLCBkaXNjb25uZWN0aW5nLCB3YWxsZXRdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0QnV0dG9uLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi10cmlnZ2VyXCIsIGRpc2FibGVkOiBkaXNhYmxlZCB8fCAhd2FsbGV0LCBzdGFydEljb246IHdhbGxldCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0SWNvbiwgeyB3YWxsZXQ6IHdhbGxldCB9KSA6IHVuZGVmaW5lZCwgZW5kSWNvbjogZW5kSWNvbiwgc3R5bGU6IHN0eWxlLCB0YWJJbmRleDogdGFiSW5kZXgsIG9uQ2xpY2s6IGhhbmRsZUNsaWNrIH0sIHByb3BzKSwgY29udGVudCkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtZGlzY29ubmVjdC1idXR0b24uanMubWFwIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBXYWxsZXRJY29uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRJY29uKF9hKSB7XG4gICAgdmFyIHsgd2FsbGV0IH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcIndhbGxldFwiXSk7XG4gICAgcmV0dXJuIHdhbGxldCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oeyBzcmM6IHdhbGxldC5pY29uLCBhbHQ6IGAke3dhbGxldC5uYW1lfSBpY29uYCB9LCBwcm9wcykpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtaWNvbi5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtYnV0dG9uJztcbmltcG9ydCB7IFdhbGxldEljb24gfSBmcm9tICcuL3dhbGxldC1pY29uJztcbmV4cG9ydCBjb25zdCBXYWxsZXRMaXN0SXRlbSA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0TGlzdEl0ZW0oeyBoYW5kbGVDbGljaywgdGFiSW5kZXgsIHdhbGxldCwgfSkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0QnV0dG9uLCB7IG9uQ2xpY2s6IGhhbmRsZUNsaWNrLCBlbmRJY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEljb24sIHsgd2FsbGV0OiB3YWxsZXQgfSksIHRhYkluZGV4OiB0YWJJbmRleCB9LCB3YWxsZXQubmFtZSkpKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LWxpc3QtaXRlbS5qcy5tYXAiLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXYWxsZXRCdXR0b24gfSBmcm9tICcuL3dhbGxldC1idXR0b24nO1xuaW1wb3J0IHsgdXNlV2FsbGV0TW9kYWwgfSBmcm9tICcuLi9ob29rcy91c2Utd2FsbGV0LW1vZGFsJztcbmV4cG9ydCBjb25zdCBXYWxsZXRNb2RhbEJ1dHRvbiA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0TW9kYWxCdXR0b24oX2EpIHtcbiAgICB2YXIgeyBjaGlsZHJlbiA9ICdTZWxlY3QgV2FsbGV0Jywgb25DbGljayB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcIm9uQ2xpY2tcIl0pO1xuICAgIGNvbnN0IHsgdmlzaWJsZSwgc2V0VmlzaWJsZSB9ID0gdXNlV2FsbGV0TW9kYWwoKTtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DbGljaylcbiAgICAgICAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpXG4gICAgICAgICAgICBzZXRWaXNpYmxlKCF2aXNpYmxlKTtcbiAgICB9LCBbb25DbGljaywgc2V0VmlzaWJsZSwgdmlzaWJsZV0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLXRyaWdnZXJcIiwgb25DbGljazogaGFuZGxlQ2xpY2sgfSwgcHJvcHMpLCBjaGlsZHJlbikpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtbW9kYWwtYnV0dG9uLmpzLm1hcCIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL2hvb2tzL3VzZS13YWxsZXQtbW9kYWwnO1xuaW1wb3J0IHsgV2FsbGV0TW9kYWwgfSBmcm9tICcuL3dhbGxldC1tb2RhbCc7XG5leHBvcnQgY29uc3QgV2FsbGV0TW9kYWxQcm92aWRlciA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0TW9kYWxQcm92aWRlcihfYSkge1xuICAgIHZhciB7IGNoaWxkcmVuIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCJdKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldE1vZGFsQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZToge1xuICAgICAgICAgICAgdmlzaWJsZSxcbiAgICAgICAgICAgIHNldFZpc2libGUsXG4gICAgICAgIH0gfSxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIHZpc2libGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRNb2RhbCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtbW9kYWwtcHJvdmlkZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFdhbGxldEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWJ1dHRvbic7XG5pbXBvcnQgeyBXYWxsZXRDb2xsYXBzZSB9IGZyb20gJy4vd2FsbGV0LWNvbGxhcHNlJztcbmltcG9ydCB7IHVzZVdhbGxldE1vZGFsIH0gZnJvbSAnLi4vaG9va3MvdXNlLXdhbGxldC1tb2RhbCc7XG5pbXBvcnQgeyBXYWxsZXRMaXN0SXRlbSB9IGZyb20gJy4vd2FsbGV0LWxpc3QtaXRlbSc7XG5leHBvcnQgY29uc3QgV2FsbGV0TW9kYWwgPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldE1vZGFsKHsgY2xhc3NOYW1lID0gJycsIGxvZ28sIGZlYXR1cmVkV2FsbGV0cyA9IDMsIGNvbnRhaW5lciA9ICdib2R5JywgfSkge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB7IHdhbGxldHMsIHNlbGVjdCB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgeyBzZXRWaXNpYmxlIH0gPSB1c2VXYWxsZXRNb2RhbCgpO1xuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtmYWRlSW4sIHNldEZhZGVJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3BvcnRhbCwgc2V0UG9ydGFsXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtmZWF0dXJlZCwgbW9yZV0gPSB1c2VNZW1vKCgpID0+IFt3YWxsZXRzLnNsaWNlKDAsIGZlYXR1cmVkV2FsbGV0cyksIHdhbGxldHMuc2xpY2UoZmVhdHVyZWRXYWxsZXRzKV0sIFt3YWxsZXRzLCBmZWF0dXJlZFdhbGxldHNdKTtcbiAgICBjb25zdCBoaWRlTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldEZhZGVJbihmYWxzZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0VmlzaWJsZShmYWxzZSksIDE1MCk7XG4gICAgfSwgW3NldEZhZGVJbiwgc2V0VmlzaWJsZV0pO1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGhpZGVNb2RhbCgpO1xuICAgIH0sIFtoaWRlTW9kYWxdKTtcbiAgICBjb25zdCBoYW5kbGVXYWxsZXRDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCwgd2FsbGV0TmFtZSkgPT4ge1xuICAgICAgICBzZWxlY3Qod2FsbGV0TmFtZSk7XG4gICAgICAgIGhhbmRsZUNsb3NlKGV2ZW50KTtcbiAgICB9LCBbc2VsZWN0LCBoYW5kbGVDbG9zZV0pO1xuICAgIGNvbnN0IGhhbmRsZUNvbGxhcHNlQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpLCBbc2V0RXhwYW5kZWQsIGV4cGFuZGVkXSk7XG4gICAgY29uc3QgaGFuZGxlVGFiS2V5ID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBoZXJlIHdlIHF1ZXJ5IGFsbCBmb2N1c2FibGUgZWxlbWVudHNcbiAgICAgICAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBmaXJzdEVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1swXTtcbiAgICAgICAgY29uc3QgbGFzdEVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAvLyBpZiBnb2luZyBiYWNrd2FyZCBieSBwcmVzc2luZyB0YWIgYW5kIGZpcnN0RWxlbWVudCBpcyBhY3RpdmUsIHNoaWZ0IGZvY3VzIHRvIGxhc3QgZm9jdXNhYmxlIGVsZW1lbnRcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBsYXN0RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBnb2luZyBmb3J3YXJkIGJ5IHByZXNzaW5nIHRhYiBhbmQgbGFzdEVsZW1lbnQgaXMgYWN0aXZlLCBzaGlmdCBmb2N1cyB0byBmaXJzdCBmb2N1c2FibGUgZWxlbWVudFxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZmlyc3RFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtyZWZdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGhpZGVNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgICAgICAgICAgIGhhbmRsZVRhYktleShldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIEdldCBvcmlnaW5hbCBvdmVyZmxvd1xuICAgICAgICBjb25zdCB7IG92ZXJmbG93IH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgLy8gSGFjayB0byBlbmFibGUgZmFkZSBpbiBhbmltYXRpb24gYWZ0ZXIgbW91bnRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRGYWRlSW4odHJ1ZSksIDApO1xuICAgICAgICAvLyBQcmV2ZW50IHNjcm9sbGluZyBvbiBtb3VudFxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIC8vIExpc3RlbiBmb3Iga2V5ZG93biBldmVudHNcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBSZS1lbmFibGUgc2Nyb2xsaW5nIHdoZW4gY29tcG9uZW50IHVubW91bnRzXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24sIGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbaGlkZU1vZGFsLCBoYW5kbGVUYWJLZXldKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4gc2V0UG9ydGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSksIFtzZXRQb3J0YWwsIGNvbnRhaW5lcl0pO1xuICAgIHJldHVybiAocG9ydGFsICYmXG4gICAgICAgIGNyZWF0ZVBvcnRhbChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC10aXRsZVwiLCBcImFyaWEtbW9kYWxcIjogXCJ0cnVlXCIsIGNsYXNzTmFtZTogYHdhbGxldC1hZGFwdGVyLW1vZGFsICR7ZmFkZUluICYmICd3YWxsZXQtYWRhcHRlci1tb2RhbC1mYWRlLWluJ30gJHtjbGFzc05hbWV9YCwgcmVmOiByZWYsIHJvbGU6IFwiZGlhbG9nXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgd2FsbGV0LWFkYXB0ZXItbW9kYWwtd3JhcHBlciAkeyFsb2dvICYmICd3YWxsZXQtYWRhcHRlci1tb2RhbC13cmFwcGVyLW5vLWxvZ28nfWAgfSxcbiAgICAgICAgICAgICAgICAgICAgbG9nbyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1sb2dvLXdyYXBwZXJcIiB9LCB0eXBlb2YgbG9nbyA9PT0gJ3N0cmluZycgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgYWx0OiBcImxvZ29cIiwgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWxvZ29cIiwgc3JjOiBsb2dvIH0pIDogbG9nbykpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtdGl0bGVcIiwgaWQ6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtdGl0bGVcIiB9LCBcIkNvbm5lY3QgV2FsbGV0XCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogaGFuZGxlQ2xvc2UsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1idXR0b24tY2xvc2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHdpZHRoOiBcIjE0XCIsIGhlaWdodDogXCIxNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0xNCAxMi40NjEgOC4zIDYuNzcybDUuMjM0LTUuMjMzTDEyLjAwNiAwIDYuNzcyIDUuMjM0IDEuNTQgMCAwIDEuNTM5bDUuMjM0IDUuMjMzTDAgMTIuMDA2bDEuNTM5IDEuNTI4TDYuNzcyIDguM2w1LjY5IDUuN0wxNCAxMi40NjF6XCIgfSkpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWxpc3RcIiB9LCBmZWF0dXJlZC5tYXAoKHdhbGxldCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0TGlzdEl0ZW0sIHsga2V5OiB3YWxsZXQubmFtZSwgaGFuZGxlQ2xpY2s6IChldmVudCkgPT4gaGFuZGxlV2FsbGV0Q2xpY2soZXZlbnQsIHdhbGxldC5uYW1lKSwgd2FsbGV0OiB3YWxsZXQgfSkpKSksXG4gICAgICAgICAgICAgICAgICAgIG1vcmUubGVuZ3RoID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldENvbGxhcHNlLCB7IGV4cGFuZGVkOiBleHBhbmRlZCwgaWQ6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtY29sbGFwc2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1saXN0XCIgfSwgbW9yZS5tYXAoKHdhbGxldCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0TGlzdEl0ZW0sIHsga2V5OiB3YWxsZXQubmFtZSwgaGFuZGxlQ2xpY2s6IChldmVudCkgPT4gaGFuZGxlV2FsbGV0Q2xpY2soZXZlbnQsIHdhbGxldC5uYW1lKSwgdGFiSW5kZXg6IGV4cGFuZGVkID8gMCA6IC0xLCB3YWxsZXQ6IHdhbGxldCB9KSkpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEJ1dHRvbiwgeyBcImFyaWEtY29udHJvbHNcIjogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1jb2xsYXBzZVwiLCBcImFyaWEtZXhwYW5kZWRcIjogZXhwYW5kZWQsIGNsYXNzTmFtZTogYHdhbGxldC1hZGFwdGVyLW1vZGFsLWNvbGxhcHNlLWJ1dHRvbiAke2V4cGFuZGVkICYmICd3YWxsZXQtYWRhcHRlci1tb2RhbC1jb2xsYXBzZS1idXR0b24tYWN0aXZlJ31gLCBlbmRJY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgd2lkdGg6IFwiMTFcIiwgaGVpZ2h0OiBcIjZcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwibTUuOTM4IDUuNzMgNC4yOC00LjEyNmEuOTE1LjkxNSAwIDAgMCAwLTEuMzIyIDEgMSAwIDAgMC0xLjM3MSAwTDUuMjUzIDMuNzM2IDEuNjU5LjI3MmExIDEgMCAwIDAtMS4zNzEgMEEuOTMuOTMgMCAwIDAgMCAuOTMyYzAgLjI0Ni4xLjQ4LjI4OC42NjJsNC4yOCA0LjEyNWEuOTkuOTkgMCAwIDAgMS4zNy4wMXpcIiB9KSksIG9uQ2xpY2s6IGhhbmRsZUNvbGxhcHNlQ2xpY2sgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZCA/ICdMZXNzJyA6ICdNb3JlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBvcHRpb25zXCIpKSkgOiBudWxsKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLW92ZXJsYXlcIiwgb25Nb3VzZURvd246IGhhbmRsZUNsb3NlIH0pKSwgcG9ydGFsKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1tb2RhbC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWJ1dHRvbic7XG5pbXBvcnQgeyB1c2VXYWxsZXRNb2RhbCB9IGZyb20gJy4uL2hvb2tzL3VzZS13YWxsZXQtbW9kYWwnO1xuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWNvbm5lY3QtYnV0dG9uJztcbmltcG9ydCB7IFdhbGxldEljb24gfSBmcm9tICcuL3dhbGxldC1pY29uJztcbmltcG9ydCB7IFdhbGxldE1vZGFsQnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtbW9kYWwtYnV0dG9uJztcbmV4cG9ydCBjb25zdCBXYWxsZXRNdWx0aUJ1dHRvbiA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0TXVsdGlCdXR0b24oX2EpIHtcbiAgICB2YXIgeyBjaGlsZHJlbiB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiXSk7XG4gICAgY29uc3QgeyBhZGRyZXNzLCB3YWxsZXQsIGRpc2Nvbm5lY3QgfSA9IHVzZVdhbGxldCgpO1xuICAgIGNvbnN0IHsgc2V0VmlzaWJsZSB9ID0gdXNlV2FsbGV0TW9kYWwoKTtcbiAgICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IF9hZGRyZXNzID0gdXNlTWVtbygoKSA9PiBhZGRyZXNzLCBbYWRkcmVzc10pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkcmVuKVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICBpZiAoIXdhbGxldCB8fCAhX2FkZHJlc3MpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIF9hZGRyZXNzO1xuICAgIH0sIFtjaGlsZHJlbiwgd2FsbGV0LCBfYWRkcmVzc10pO1xuICAgIGNvbnN0IGNvcHlBZGRyZXNzID0gdXNlQ2FsbGJhY2soKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIHlpZWxkIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KF9hZGRyZXNzKTtcbiAgICAgICAgICAgIHNldENvcGllZCh0cnVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkKGZhbHNlKSwgNDAwKTtcbiAgICAgICAgfVxuICAgIH0pLCBbX2FkZHJlc3NdKTtcbiAgICBjb25zdCBvcGVuRHJvcGRvd24gPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRBY3RpdmUodHJ1ZSksIFtzZXRBY3RpdmVdKTtcbiAgICBjb25zdCBjbG9zZURyb3Bkb3duID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0QWN0aXZlKGZhbHNlKSwgW3NldEFjdGl2ZV0pO1xuICAgIGNvbnN0IG9wZW5Nb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgY2xvc2VEcm9wZG93bigpO1xuICAgIH0sIFtzZXRWaXNpYmxlLCBjbG9zZURyb3Bkb3duXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgaWYgY2xpY2tpbmcgZHJvcGRvd24gb3IgaXRzIGRlc2NlbmRhbnRzXG4gICAgICAgICAgICBpZiAoIW5vZGUgfHwgbm9kZS5jb250YWlucyhldmVudC50YXJnZXQpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBbcmVmLCBjbG9zZURyb3Bkb3duXSk7XG4gICAgaWYgKCF3YWxsZXQpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldE1vZGFsQnV0dG9uLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIGNoaWxkcmVuKTtcbiAgICBpZiAoIV9hZGRyZXNzKVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRDb25uZWN0QnV0dG9uLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItZHJvcGRvd25cIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IFwiYXJpYS1leHBhbmRlZFwiOiBhY3RpdmUsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tdHJpZ2dlclwiLCBzdHlsZTogT2JqZWN0LmFzc2lnbih7IHBvaW50ZXJFdmVudHM6IGFjdGl2ZSA/ICdub25lJyA6ICdhdXRvJyB9LCBwcm9wcy5zdHlsZSksIG9uQ2xpY2s6IG9wZW5Ecm9wZG93biwgc3RhcnRJY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEljb24sIHsgd2FsbGV0OiB3YWxsZXQgfSkgfSwgcHJvcHMpLCBjb250ZW50KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgXCJhcmlhLWxhYmVsXCI6IFwiZHJvcGRvd24tbGlzdFwiLCBjbGFzc05hbWU6IGB3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0ICR7YWN0aXZlICYmICd3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0LWFjdGl2ZSd9YCwgcmVmOiByZWYsIHJvbGU6IFwibWVudVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBvbkNsaWNrOiBjb3B5QWRkcmVzcywgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWRyb3Bkb3duLWxpc3QtaXRlbVwiLCByb2xlOiBcIm1lbnVpdGVtXCIgfSwgY29waWVkID8gJ0NvcGllZCcgOiAnQ29weSBhZGRyZXNzJyksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBvbkNsaWNrOiBvcGVuTW9kYWwsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0LWl0ZW1cIiwgcm9sZTogXCJtZW51aXRlbVwiIH0sIFwiQ29ubmVjdCBhIGRpZmZlcmVudCB3YWxsZXRcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBvbkNsaWNrOiBkaXNjb25uZWN0LCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItZHJvcGRvd24tbGlzdC1pdGVtXCIsIHJvbGU6IFwibWVudWl0ZW1cIiB9LCBcIkRpc2Nvbm5lY3RcIikpKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1tdWx0aS1idXR0b24uanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi91c2Utd2FsbGV0LW1vZGFsJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgV2FsbGV0TW9kYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5leHBvcnQgZnVuY3Rpb24gdXNlV2FsbGV0TW9kYWwoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoV2FsbGV0TW9kYWxDb250ZXh0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS13YWxsZXQtbW9kYWwuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9ob29rcyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtcHJvdmlkZXInO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvciwgV2FsbGV0Tm90UmVhZHlFcnJvciwgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IgfSBmcm9tICcuLi91dGlscy9lcnJvcnMnO1xuaW1wb3J0IHsgV2FsbGV0Q29udGV4dCB9IGZyb20gJy4uL2hvb2tzL3VzZS13YWxsZXQnO1xuY29uc3QgV0FMTEVUX0lOSVRJQUxfU1RBVEUgPSB7XG4gICAgd2FsbGV0OiBudWxsLFxuICAgIGFkYXB0ZXI6IG51bGwsXG4gICAgcmVhZHk6IGZhbHNlLFxuICAgIGFkZHJlc3M6IG51bGwsXG4gICAgY29ubmVjdGVkOiBmYWxzZSxcbn07XG5leHBvcnQgY29uc3QgV2FsbGV0UHJvdmlkZXIgPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldFByb3ZpZGVyKHsgY2hpbGRyZW4sIHdhbGxldHMsIGF1dG9Db25uZWN0ID0gZmFsc2UsIG9uRXJyb3I6IF9vbkVycm9yID0gKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSwgfSkge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIC8vIFRoZSBtYWluIHN0YXRlIG9mIHRoZSB3YWxsZXQgcHJvdmlkZXJcbiAgICBjb25zdCBbeyB3YWxsZXQsIGFkYXB0ZXIsIHJlYWR5LCBhZGRyZXNzLCBjb25uZWN0ZWQgfSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoV0FMTEVUX0lOSVRJQUxfU1RBVEUpO1xuICAgIGNvbnN0IFtjb25uZWN0aW5nLCBzZXRDb25uZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZGlzY29ubmVjdGluZywgc2V0RGlzY29ubmVjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgaXNDb25uZWN0aW5nID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBpc0Rpc2Nvbm5lY3RpbmcgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IGlzVW5sb2FkaW5nID0gdXNlUmVmKGZhbHNlKTtcbiAgICAvLyBNYXAgd2FsbGV0IG5hbWVzIHRvIHdhbGxldHMgZm9yIGVhc2llciB1c2FnZVxuICAgIGNvbnN0IHdhbGxldHNCeU5hbWUgPSB1c2VNZW1vKCgpID0+IHdhbGxldHMucmVkdWNlKCh3YWxsZXRzQnlOYW1lLCB3YWxsZXQpID0+IHtcbiAgICAgICAgd2FsbGV0c0J5TmFtZVt3YWxsZXQubmFtZV0gPSB3YWxsZXQ7XG4gICAgICAgIHJldHVybiB3YWxsZXRzQnlOYW1lO1xuICAgIH0sIHt9KSwgW3dhbGxldHNdKTtcbiAgICAvLyBXaGVuIHRoZSBzZWxlY3RlZCB3YWxsZXQgY2hhbmdlcywgcmUtaW5pdGlhbGl6ZSB0aGUgc3RhdGVcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB3YWxsZXQgPSAobmFtZSAmJiB3YWxsZXRzQnlOYW1lW25hbWVdKSB8fCBudWxsO1xuICAgICAgICBjb25zdCBhZGFwdGVyID0gd2FsbGV0ICYmIHdhbGxldC5hZGFwdGVyKCk7XG4gICAgICAgIGlmIChhZGFwdGVyKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJlYWR5LCBhZGRyZXNzLCBjb25uZWN0ZWQgfSA9IGFkYXB0ZXI7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7IHdhbGxldCwgYWRhcHRlciwgY29ubmVjdGVkLCBhZGRyZXNzLCByZWFkeSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFN0YXRlKFdBTExFVF9JTklUSUFMX1NUQVRFKTtcbiAgICAgICAgfVxuICAgIH0sIFtuYW1lLCB3YWxsZXRzQnlOYW1lLCBzZXRTdGF0ZV0pO1xuICAgIC8vIElmIGF1dG9Db25uZWN0IGlzIGVuYWJsZWQsIHRyeSB0byBjb25uZWN0IHdoZW4gdGhlIGFkYXB0ZXIgY2hhbmdlcyBhbmQgaXMgcmVhZHlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNDb25uZWN0aW5nLmN1cnJlbnQgfHwgY29ubmVjdGluZyB8fCBjb25uZWN0ZWQgfHwgIWF1dG9Db25uZWN0IHx8ICFhZGFwdGVyIHx8ICFyZWFkeSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgaXNDb25uZWN0aW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldENvbm5lY3RpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgYWRhcHRlci5jb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciB0aGUgc2VsZWN0ZWQgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgIHNldE5hbWUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvbid0IHRocm93IGVycm9yLCBidXQgb25FcnJvciB3aWxsIHN0aWxsIGJlIGNhbGxlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29ubmVjdGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlzQ29ubmVjdGluZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKCk7XG4gICAgfSwgW2lzQ29ubmVjdGluZywgY29ubmVjdGluZywgY29ubmVjdGVkLCBhdXRvQ29ubmVjdCwgYWRhcHRlciwgcmVhZHksIHNldENvbm5lY3RpbmcsIHNldE5hbWVdKTtcbiAgICAvLyBJZiB0aGUgd2luZG93IGlzIGNsb3Npbmcgb3IgcmVsb2FkaW5nLCBpZ25vcmUgZGlzY29ubmVjdCBhbmQgZXJyb3IgZXZlbnRzIGZyb20gdGhlIGFkYXB0ZXJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgICAgICAgIGlzVW5sb2FkaW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgbGlzdGVuZXIpO1xuICAgIH0sIFtpc1VubG9hZGluZ10pO1xuICAgIC8vIFNlbGVjdCBhIHdhbGxldCBieSBuYW1lXG4gICAgY29uc3Qgc2VsZWN0ID0gdXNlQ2FsbGJhY2soKG5ld05hbWUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IG5ld05hbWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChhZGFwdGVyKVxuICAgICAgICAgICAgeWllbGQgYWRhcHRlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIHNldE5hbWUobmV3TmFtZSk7XG4gICAgfSksIFtuYW1lLCBhZGFwdGVyLCBzZXROYW1lXSk7XG4gICAgLy8gSGFuZGxlIHRoZSBhZGFwdGVyJ3MgcmVhZHkgZXZlbnRcbiAgICBjb25zdCBvblJlYWR5ID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0U3RhdGUoKHN0YXRlKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHsgcmVhZHk6IHRydWUgfSkpKSwgW3NldFN0YXRlXSk7XG4gICAgLy8gSGFuZGxlIHRoZSBhZGFwdGVyJ3MgY29ubmVjdCBldmVudFxuICAgIGNvbnN0IG9uQ29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB7IGNvbm5lY3RlZCwgYWRkcmVzcywgcmVhZHkgfSA9IGFkYXB0ZXI7XG4gICAgICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IGNvbm5lY3RlZCxcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICByZWFkeSB9KSkpO1xuICAgIH0sIFthZGFwdGVyLCBzZXRTdGF0ZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIGRpc2Nvbm5lY3QgZXZlbnRcbiAgICBjb25zdCBvbkRpc2Nvbm5lY3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCB3YWxsZXQgdW5sZXNzIHRoZSB3aW5kb3cgaXMgdW5sb2FkaW5nXG4gICAgICAgIGlmICghaXNVbmxvYWRpbmcuY3VycmVudClcbiAgICAgICAgICAgIHNldE5hbWUobnVsbCk7XG4gICAgfSwgW2lzVW5sb2FkaW5nLCBzZXROYW1lXSk7XG4gICAgLy8gSGFuZGxlIHRoZSBhZGFwdGVyJ3MgZXJyb3IgZXZlbnQsIGFuZCBsb2NhbCBlcnJvcnNcbiAgICBjb25zdCBvbkVycm9yID0gdXNlQ2FsbGJhY2soKGVycm9yKSA9PiB7XG4gICAgICAgIC8vIENhbGwgdGhlIHByb3ZpZGVkIGVycm9yIGhhbmRsZXIgdW5sZXNzIHRoZSB3aW5kb3cgaXMgdW5sb2FkaW5nXG4gICAgICAgIGlmICghaXNVbmxvYWRpbmcuY3VycmVudClcbiAgICAgICAgICAgIF9vbkVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH0sIFtpc1VubG9hZGluZywgX29uRXJyb3JdKTtcbiAgICAvLyBDb25uZWN0IHRoZSBhZGFwdGVyIHRvIHRoZSB3YWxsZXRcbiAgICBjb25zdCBjb25uZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoaXNDb25uZWN0aW5nLmN1cnJlbnQgfHwgY29ubmVjdGluZyB8fCBkaXNjb25uZWN0aW5nIHx8IGNvbm5lY3RlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF3YWxsZXQgfHwgIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIXJlYWR5KSB7XG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgc2VsZWN0ZWQgd2FsbGV0XG4gICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4od2FsbGV0LnVybCwgJ19ibGFuaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90UmVhZHlFcnJvcigpKTtcbiAgICAgICAgfVxuICAgICAgICBpc0Nvbm5lY3RpbmcuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHNldENvbm5lY3RpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB5aWVsZCBhZGFwdGVyLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCB3YWxsZXRcbiAgICAgICAgICAgIHNldE5hbWUobnVsbCk7XG4gICAgICAgICAgICAvLyBSZXRocm93IHRoZSBlcnJvciwgYW5kIG9uRXJyb3Igd2lsbCBhbHNvIGJlIGNhbGxlZFxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBzZXRDb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlzQ29ubmVjdGluZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KSwgW2lzQ29ubmVjdGluZywgY29ubmVjdGluZywgZGlzY29ubmVjdGluZywgY29ubmVjdGVkLCB3YWxsZXQsIGFkYXB0ZXIsIG9uRXJyb3IsIHJlYWR5LCBzZXRDb25uZWN0aW5nLCBzZXROYW1lXSk7XG4gICAgLy8gRGlzY29ubmVjdCB0aGUgYWRhcHRlciBmcm9tIHRoZSB3YWxsZXRcbiAgICBjb25zdCBkaXNjb25uZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoaXNEaXNjb25uZWN0aW5nLmN1cnJlbnQgfHwgZGlzY29ubmVjdGluZylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgcmV0dXJuIHNldE5hbWUobnVsbCk7XG4gICAgICAgIGlzRGlzY29ubmVjdGluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgc2V0RGlzY29ubmVjdGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHNlbGVjdGVkIHdhbGxldFxuICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICAgICAgICAgIC8vIFJldGhyb3cgdGhlIGVycm9yLCBhbmQgb25FcnJvciB3aWxsIGFsc28gYmUgY2FsbGVkXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldERpc2Nvbm5lY3RpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaXNEaXNjb25uZWN0aW5nLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pLCBbaXNEaXNjb25uZWN0aW5nLCBkaXNjb25uZWN0aW5nLCBhZGFwdGVyLCBzZXREaXNjb25uZWN0aW5nLCBzZXROYW1lXSk7XG4gICAgY29uc3QgaW52b2tlUmVhZCA9IHVzZUNhbGxiYWNrKChyZXF1ZXN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKSk7XG4gICAgICAgIGlmICghY29ubmVjdGVkKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLmludm9rZVJlYWQocmVxdWVzdCk7XG4gICAgfSksIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICBjb25zdCBpbnZva2VSZWFkTXVsdGkgPSB1c2VDYWxsYmFjaygocmVxdWVzdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5pbnZva2VSZWFkTXVsdGkocmVxdWVzdCk7XG4gICAgfSksIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICBjb25zdCBpbnZva2UgPSB1c2VDYWxsYmFjaygocmVxdWVzdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5pbnZva2UocmVxdWVzdCk7XG4gICAgfSksIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICBjb25zdCBpbnZva2VNdWx0aSA9IHVzZUNhbGxiYWNrKChyZXF1ZXN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKSk7XG4gICAgICAgIGlmICghY29ubmVjdGVkKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLmludm9rZU11bHRpKHJlcXVlc3QpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgY29uc3QgZ2V0TmV0d29ya3MgPSB1c2VDYWxsYmFjaygoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKSk7XG4gICAgICAgIGlmICghY29ubmVjdGVkKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLmdldE5ldHdvcmtzKCk7XG4gICAgfSksIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICBjb25zdCBzaWduTWVzc2FnZSA9IHVzZUNhbGxiYWNrKChyZXF1ZXN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKSk7XG4gICAgICAgIGlmICghY29ubmVjdGVkKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLnNpZ25NZXNzYWdlKHJlcXVlc3QpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgLy8gU2V0dXAgYW5kIHRlYXJkb3duIGV2ZW50IGxpc3RlbmVycyB3aGVuIHRoZSBhZGFwdGVyIGNoYW5nZXNcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoYWRhcHRlcikge1xuICAgICAgICAgICAgYWRhcHRlci5vbigncmVhZHknLCBvblJlYWR5KTtcbiAgICAgICAgICAgIGFkYXB0ZXIub24oJ2Nvbm5lY3QnLCBvbkNvbm5lY3QpO1xuICAgICAgICAgICAgYWRhcHRlci5vbignZGlzY29ubmVjdCcsIG9uRGlzY29ubmVjdCk7XG4gICAgICAgICAgICBhZGFwdGVyLm9uKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBhZGFwdGVyLm9mZigncmVhZHknLCBvblJlYWR5KTtcbiAgICAgICAgICAgICAgICBhZGFwdGVyLm9mZignY29ubmVjdCcsIG9uQ29ubmVjdCk7XG4gICAgICAgICAgICAgICAgYWRhcHRlci5vZmYoJ2Rpc2Nvbm5lY3QnLCBvbkRpc2Nvbm5lY3QpO1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIub2ZmKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIFthZGFwdGVyLCBvblJlYWR5LCBvbkNvbm5lY3QsIG9uRGlzY29ubmVjdCwgb25FcnJvcl0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB7XG4gICAgICAgICAgICB3YWxsZXRzLFxuICAgICAgICAgICAgYXV0b0Nvbm5lY3QsXG4gICAgICAgICAgICB3YWxsZXQsXG4gICAgICAgICAgICBhZGFwdGVyLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIHJlYWR5LFxuICAgICAgICAgICAgY29ubmVjdGVkLFxuICAgICAgICAgICAgY29ubmVjdGluZyxcbiAgICAgICAgICAgIGRpc2Nvbm5lY3RpbmcsXG4gICAgICAgICAgICBzZWxlY3QsXG4gICAgICAgICAgICBjb25uZWN0LFxuICAgICAgICAgICAgZGlzY29ubmVjdCxcbiAgICAgICAgICAgIGludm9rZVJlYWQsXG4gICAgICAgICAgICBpbnZva2VSZWFkTXVsdGksXG4gICAgICAgICAgICBpbnZva2UsXG4gICAgICAgICAgICBpbnZva2VNdWx0aSxcbiAgICAgICAgICAgIGdldE5ldHdvcmtzLFxuICAgICAgICAgICAgc2lnbk1lc3NhZ2UsXG4gICAgICAgIH0gfSwgY2hpbGRyZW4pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LXByb3ZpZGVyLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vdXNlLXdhbGxldCc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VXYWxsZXQoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoV2FsbGV0Q29udGV4dCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utd2FsbGV0LmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2hvb2tzJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgV2FsbGV0RXJyb3IgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZSc7XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE5vdFNlbGVjdGVkRXJyb3InO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9ycy5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2Vycm9ycyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IFdjU2RrIH0gZnJvbSAnQGNpdHlvZnppb24vd2FsbGV0LWNvbm5lY3Qtc2RrLWNvcmUnO1xuaW1wb3J0IHsgQmFzZVdhbGxldEFkYXB0ZXIsIFdhbGxldEFjY291bnRFcnJvciwgV2FsbGV0Q29ubmVjdGlvbkVycm9yLCBXYWxsZXREaXNjb25uZWN0ZWRFcnJvciwgV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yLCBXYWxsZXRFcnJvciwgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IsIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UnO1xuaW1wb3J0IFFSQ29kZU1vZGFsIGZyb20gJ0B3YWxsZXRjb25uZWN0L3FyY29kZS1tb2RhbCc7XG5leHBvcnQgY2xhc3MgV2FsbGV0Q29ubmVjdFdhbGxldEFkYXB0ZXIgZXh0ZW5kcyBCYXNlV2FsbGV0QWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnLCBuZW9uV2FsbGV0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3dhbGxldENvbm5lY3RDaGFpbnMgPSBbJ25lbzM6bWFpbm5ldCcsICduZW8zOnRlc3RuZXQnLCAnbmVvMzpwcml2YXRlJ107XG4gICAgICAgIHRoaXMuX2FkZHJlc3MgPSBudWxsO1xuICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBjb25maWcub3B0aW9ucztcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gY29uZmlnLmxvZ2dlcjtcbiAgICAgICAgdGhpcy5fcmVsYXlQcm92aWRlciA9IGNvbmZpZy5yZWxheVByb3ZpZGVyO1xuICAgICAgICB0aGlzLl9uZW9uV2FsbGV0ID0gbmVvbldhbGxldCA/IG5lb25XYWxsZXQgOiBmYWxzZTtcbiAgICB9XG4gICAgZ2V0IGFkZHJlc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRyZXNzO1xuICAgIH1cbiAgICBnZXQgcmVhZHkoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG4gICAgZ2V0IGNvbm5lY3RpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0aW5nO1xuICAgIH1cbiAgICBnZXQgY29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLl9hZGRyZXNzO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0ZWQgfHwgdGhpcy5jb25uZWN0aW5nKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IHdhbGxldENvbm5lY3RJbnN0YW5jZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgd2FsbGV0Y29ubmVjdCBjb3ogaW5zdGFuY2VcbiAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdEluc3RhbmNlID0gbmV3IFdjU2RrKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemUgaXRcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgd2FsbGV0Q29ubmVjdEluc3RhbmNlLmluaXRDbGllbnQodGhpcy5fbG9nZ2VyLCB0aGlzLl9yZWxheVByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5lb25XYWxsZXRDb25uZWN0V2luZG93O1xuICAgICAgICAgICAgICAgICAgICAvLyBTdWJzY3JpYmUgdG8gd2MgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHdhbGxldENvbm5lY3RJbnN0YW5jZS5zdWJzY3JpYmVUb0V2ZW50cyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblByb3Bvc2FsOiAodXJpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX25lb25XYWxsZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVvbldhbGxldENvbm5lY3RXaW5kb3cgPSB3aW5kb3cgPT09IG51bGwgfHwgd2luZG93ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW5kb3cub3BlbihgaHR0cHM6Ly9uZW9uLmNvei5pby9jb25uZWN0P3VyaT0ke3VyaX1gLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lb25XYWxsZXRDb25uZWN0V2luZG93ID09PSBudWxsIHx8IG5lb25XYWxsZXRDb25uZWN0V2luZG93ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuZW9uV2FsbGV0Q29ubmVjdFdpbmRvdy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyB0aGUgUVJDb2RlLCB5b3UgY2FuIHVzZSBAd2FsbGV0Y29ubmVjdC9xcmNvZGUtbW9kYWwgdG8gZG8gc28sIGJ1dCBhbnkgUVJDb2RlIHByZXNlbnRhdGlvbiBpcyBmaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFSQ29kZU1vZGFsLm9wZW4odXJpLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFaGVoIGp1c3Qgc2hvdyB0aGF0IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVkOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVyZSBpcyB3aGVyZSB5b3UgZGVzY3JpYmUgYSBsb2dvdXQgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXNjb25uZWN0ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIGFueSBleGlzdGluZyBjb25uZWN0aW9uLCBpdCBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIHRoZSBpbml0aWFsaXphdGlvbiwgdG8gcmVlc3RhYmxpc2ggY29ubmVjdGlvbnMgbWFkZSBwcmV2aW91c2x5XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHdhbGxldENvbm5lY3RJbnN0YW5jZS5sb2FkU2Vzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgc2Vzc2lvbiBoYXMgbm90IGJlZW4gbG9hZGVkIHRyeSB0byBsb2FkIGl0XG4gICAgICAgICAgICAgICAgICAgIGlmICghd2FsbGV0Q29ubmVjdEluc3RhbmNlLnNlc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIGhlcmUgd2UgbmVlZCB0byBjb25uZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB3YWxsZXRDb25uZWN0SW5zdGFuY2UuY29ubmVjdCh0aGlzLl9vcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgYWZ0ZXIgdGhlIGNvbm5lY3Rpb24gaXMgYWNjZXB0ZWQgb3IgcmVmdXNlZCwgeW91IGNhbiBjbG9zZSB0aGUgUVJDb2RlIG1vZGFsIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uZW9uV2FsbGV0ICYmIG5lb25XYWxsZXRDb25uZWN0V2luZG93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVvbldhbGxldENvbm5lY3RXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFFSQ29kZU1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFdhbGxldEVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRDb25uZWN0aW9uRXJyb3IoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF3YWxsZXRDb25uZWN0SW5zdGFuY2Uuc2Vzc2lvbilcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldEFjY291bnRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZHJlc3MgPSB3YWxsZXRDb25uZWN0SW5zdGFuY2UuYWNjb3VudEFkZHJlc3M7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2FsbGV0Q29ubmVjdEluc3RhbmNlID0gd2FsbGV0Q29ubmVjdEluc3RhbmNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY29ubmVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXRDb25uZWN0SW5zdGFuY2UgPSB0aGlzLl93YWxsZXRDb25uZWN0SW5zdGFuY2U7XG4gICAgICAgICAgICBpZiAod2FsbGV0Q29ubmVjdEluc3RhbmNlICYmIHdhbGxldENvbm5lY3RJbnN0YW5jZS5zZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgd2FsbGV0Q29ubmVjdEluc3RhbmNlLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlLCBlcnJvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkcmVzcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhbGxldENvbm5lY3RJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludm9rZVJlYWQocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0Q29ubmVjdEluc3RhbmNlID0gdGhpcy5fd2FsbGV0Q29ubmVjdEluc3RhbmNlO1xuICAgICAgICAgICAgaWYgKCF3YWxsZXRDb25uZWN0SW5zdGFuY2UgfHwgIXdhbGxldENvbm5lY3RJbnN0YW5jZS5zZXNzaW9uKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHdhbGxldENvbm5lY3RJbnN0YW5jZS50ZXN0SW52b2tlKHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0SGFzaDogcmVxdWVzdC5zY3JpcHRIYXNoLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IHJlcXVlc3Qub3BlcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiByZXF1ZXN0LmFyZ3MsXG4gICAgICAgICAgICAgICAgICAgIGFib3J0T25GYWlsOiByZXF1ZXN0LmFib3J0T25GYWlsLFxuICAgICAgICAgICAgICAgIH0sIHJlcXVlc3Quc2lnbmVycyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVG9SZWFkUmVzdWx0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnZva2VSZWFkTXVsdGkocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0Q29ubmVjdEluc3RhbmNlID0gdGhpcy5fd2FsbGV0Q29ubmVjdEluc3RhbmNlO1xuICAgICAgICAgICAgaWYgKCF3YWxsZXRDb25uZWN0SW5zdGFuY2UgfHwgIXdhbGxldENvbm5lY3RJbnN0YW5jZS5zZXNzaW9uKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHdhbGxldENvbm5lY3RJbnN0YW5jZS50ZXN0SW52b2tlKHJlcXVlc3QuaW52b2NhdGlvbnMsIHJlcXVlc3Quc2lnbmVycyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVG9SZWFkUmVzdWx0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnZva2UocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0Q29ubmVjdEluc3RhbmNlID0gdGhpcy5fd2FsbGV0Q29ubmVjdEluc3RhbmNlO1xuICAgICAgICAgICAgaWYgKCF3YWxsZXRDb25uZWN0SW5zdGFuY2UgfHwgIXdhbGxldENvbm5lY3RJbnN0YW5jZS5zZXNzaW9uKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHdhbGxldENvbm5lY3RJbnN0YW5jZS5pbnZva2VGdW5jdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdEhhc2g6IHJlcXVlc3Quc2NyaXB0SGFzaCxcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uOiByZXF1ZXN0Lm9wZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgYXJnczogcmVxdWVzdC5hcmdzLFxuICAgICAgICAgICAgICAgICAgICBhYm9ydE9uRmFpbDogcmVxdWVzdC5hYm9ydE9uRmFpbCxcbiAgICAgICAgICAgICAgICB9LCByZXF1ZXN0LnNpZ25lcnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvV3JpdGVSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludm9rZU11bHRpKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldENvbm5lY3RJbnN0YW5jZSA9IHRoaXMuX3dhbGxldENvbm5lY3RJbnN0YW5jZTtcbiAgICAgICAgICAgIGlmICghd2FsbGV0Q29ubmVjdEluc3RhbmNlIHx8ICF3YWxsZXRDb25uZWN0SW5zdGFuY2Uuc2Vzc2lvbilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCB3YWxsZXRDb25uZWN0SW5zdGFuY2UuaW52b2tlRnVuY3Rpb24ocmVxdWVzdC5pbnZvY2F0aW9ucywgcmVxdWVzdC5zaWduZXJzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUb1dyaXRlUmVzdWx0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXROZXR3b3JrcygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FsbGV0Q29ubmVjdEluc3RhbmNlID0gdGhpcy5fd2FsbGV0Q29ubmVjdEluc3RhbmNlO1xuICAgICAgICAgICAgICAgIGlmICghd2FsbGV0Q29ubmVjdEluc3RhbmNlIHx8ICF3YWxsZXRDb25uZWN0SW5zdGFuY2Uuc2Vzc2lvbilcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVG9HZXROZXR3b3Jrc1Jlc3VsdCh3YWxsZXRDb25uZWN0SW5zdGFuY2UuY2hhaW5JZCA/IHdhbGxldENvbm5lY3RJbnN0YW5jZS5jaGFpbklkIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25NZXNzYWdlKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldENvbm5lY3RJbnN0YW5jZSA9IHRoaXMuX3dhbGxldENvbm5lY3RJbnN0YW5jZTtcbiAgICAgICAgICAgIGlmICghd2FsbGV0Q29ubmVjdEluc3RhbmNlIHx8ICF3YWxsZXRDb25uZWN0SW5zdGFuY2Uuc2Vzc2lvbilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCB3YWxsZXRDb25uZWN0SW5zdGFuY2Uuc2lnbk1lc3NhZ2UocmVxdWVzdC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUb1NpZ25NZXNzYWdlUmVzdWx0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVzcG9uc2VUb1JlYWRSZXN1bHQocmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gSWYgdGhlIHN0YXRlIGlzIGhhbHQgaXQgbWVhbnMgdGhhdCBldmVyeXRoaW5nIHdlbnQgd2VsbFxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0LnN0YXRlID09PSAnSEFMVCcpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgcmVzcG9uc2UucmVzdWx0KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGFuIGVycm9yIG9jY3VycmVkIGFuZCBzbyByZXR1cm4gaXRcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IChfYSA9IHJlc3BvbnNlLnJlc3VsdC5lcnJvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm1lc3NhZ2UsXG4gICAgICAgICAgICBjb2RlOiAoX2IgPSByZXNwb25zZS5yZXN1bHQuZXJyb3IpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jb2RlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfcmVzcG9uc2VUb1dyaXRlUmVzdWx0KHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIC8vIElmIHRoZSBzdGF0ZSBpcyBoYWx0IGl0IG1lYW5zIHRoYXQgZXZlcnl0aGluZyB3ZW50IHdlbGxcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3VsdC5zdGF0ZSA9PT0gJ0hBTFQnKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHJlc3BvbnNlLnJlc3VsdCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSBhbiBlcnJvciBvY2N1cnJlZCBhbmQgc28gcmV0dXJuIGl0XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICBtZXNzYWdlOiAoX2EgPSByZXNwb25zZS5yZXN1bHQuZXJyb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tZXNzYWdlLFxuICAgICAgICAgICAgY29kZTogKF9iID0gcmVzcG9uc2UucmVzdWx0LmVycm9yKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY29kZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX3Jlc3BvbnNlVG9HZXROZXR3b3Jrc1Jlc3VsdChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbmV0d29ya3M6IHRoaXMuX3dhbGxldENvbm5lY3RDaGFpbnMsXG4gICAgICAgICAgICAgICAgZGVmYXVsdE5ldHdvcms6IHJlc3BvbnNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX3Jlc3BvbnNlVG9TaWduTWVzc2FnZVJlc3VsdChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgcHVibGljS2V5OiByZXNwb25zZS5yZXN1bHQucHVibGljS2V5LFxuICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLnJlc3VsdC5kYXRhLFxuICAgICAgICAgICAgICAgIHNhbHQ6IHJlc3BvbnNlLnJlc3VsdC5zYWx0LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLnJlc3VsdC5tZXNzYWdlSGV4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2Rpc2Nvbm5lY3RlZCgpIHtcbiAgICAgICAgY29uc3Qgd2FsbGV0Q29ubmVjdEluc3RhbmNlID0gdGhpcy5fd2FsbGV0Q29ubmVjdEluc3RhbmNlO1xuICAgICAgICBpZiAod2FsbGV0Q29ubmVjdEluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRyZXNzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3dhbGxldENvbm5lY3RJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgV2FsbGV0RGlzY29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkYXB0ZXIuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9hZGFwdGVyJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9uZW9saW5lJztcbmV4cG9ydCAqIGZyb20gJy4vbzMnO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXRjb25uZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vb25lZ2F0ZSc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBOZW9MaW5lV2FsbGV0QWRhcHRlciB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lJztcbmltcG9ydCB7IFdhbGxldE5hbWUgfSBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCBjb25zdCBnZXROZW9MaW5lV2FsbGV0ID0gKGNvbmZpZykgPT4gKHtcbiAgICBuYW1lOiBXYWxsZXROYW1lLk5lb0xpbmUsXG4gICAgdXJsOiAnaHR0cHM6Ly9uZW9saW5lLmlvLycsXG4gICAgaWNvbjogJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQU1DQWdnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQndnSUNBZ0lCd2dJQ0FnSUJ3Z0lCd29JQ0FnSUNRa0pDQWNMRFFvSURRZ0lDUWdCQXdRRUJnVUdDZ1lHQ2hBTkNnME9FQTBORHc0T0RRNE5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EdzBORFEwTkRRME5EUTBORFEwTkRRME5EUTBORGYvQUFCRUlBSUFBZ0FNQkVRQUNFUUVERVFIL3hBQWNBQUFCQlFFQkFRQUFBQUFBQUFBQUFBQUNBQVFGQmdjQkF3ai94QUJFRUFBQ0FBUUNCUWdHQndVSkFRQUFBQUFCQWdBREJCRVNJUVVHQnpGaEV5SXlRVkZ4Y3FFSVVvR1JzZEVWSXlRbFFuT3pGSkxCd3RNelEyS0NvckxEMHVFMS84UUFIQUVBQWdJREFRRUFBQUFBQUFBQUFBQUFBQUlEQkFFRkJnY0kvOFFBUHhFQUFnRUNBZ1lGQ2dRRUJ3RUFBQUFBQUFFQ0F4RUVJUVVHRWpGQmNUSmhnWkd4RXhRaU0wSlJVcUhCOEhLeXd0RWpKQ1dDRmpRMVlwTFM4UWYvMmdBTUF3RUFBaEVERVFBL0FOTmNiNDZjK0xHbWVaQjdZeUkwQWI4WUJHbUNTWUJXbUNid0NOTUFnOXBqSWp1Q2J4a1YzQUpQYkFJMHpoTUFqVEJNWkVhWUJCN1RBSTdnbS9HQVhNQTNnRllKdjJ3Q05NRSsyTWl1NXhRYndDNTNMTzZabUlUcldnQ3NaRXNDVmdFMlFETGpJclFKbHdDYklCV0FSeEJLd0N1SUpTTWlPSUJTTTNFc0FVZ0ZjVGhXTWlPSUpXQVJ4QktRQ09JQlNBV3dCU0FXd2xUTVFDcFpscG1MbVloT3VjY3dDa0JHMEFVaklyUUpTQVd3QldNaU5BbFl5SzBBVWdFYURrVUROMFZKNDlYdjNSaHV3MEtNNTlGSHZPMEZNQXZhL2hOejd2bEdOcEVrOEhVam5hL0lqM2wyeU9YQXd4UmNiWk1BcEdSR2dTa1p1TFlBckFJNGdsWXlJNGdsWUJIRTRxWmlBd2xtV3Awek1RblhOWm5reXdDTkFEUGRuM1JranRmY2NLeGdWb1NTQ2NnQ1R3emd1WVVISjJTdVBaR3J6bnBFS1BlWVhiUmNoZ1pTNldSSTAraEVYcXhIdGJQeTNRcmsyWFlZT25EaGZtUEFzWUxOamxvQmJIalBwRmJwQUdNM0laMG96NlNJdXAxYlU5RWxlQnpIeitNTXBHdXFZQ0w2THNSVlRvV1l2NGJqdFhQeTMrVVB0STF0VENWSWNMOGhneVF4U2NRRExqTnhHZ1NrWnVLMGNWYzRCZG5NdExwbVlnT3ZjY3kwN0t0RFM1K2thV1ZPUVBMWm5MSTI1c0VwM1VFZFl4S0NSdU82SWEwbkdEYU45cTloYWVKMGpScFZvN1VHM2RQYzdSYlYrMWJpMmVrWHFyVDAwMmxhUktTVHlzdWJqV1dvUkR5WlRDY0lzQWJNUVNCbmxFT0ZuS1NkMmRGcnRvL0Q0U3RSbGg0S0cwcFhVVlplanMyeVdWOHpQcUhRaWxReHViaTl0d2kwNUhGMGNKQnhVcFozSkdYSUM1QUFEaENGNVFVVlpJSlpSSkFBSkpOZ0FMa2s3Z0FNeVlBVVczWks3ZTVjV2UxZm9xYktJRTJWTWxGc3dKaU1oSTRZZ0x3cWFlNWt0YkRWYUxTcXdsRnZkdEpxL0s0MEtReFdzQVVqSXRnU3NaRnNjSWdFc01hblMwdGNyNGoyTG4vNURKTXB6eEZPR1Y3dnFJMnZXWk1VdHlhcUFMM2JwMkVNcklvVmxVcXhjbkJKTDM3eUVLeElhalpCS3dDT0p4VXpIZkFZMmN5MHpFaUU2NW91ZXhaZnZTazc1djZFeUlNUjZ0L2ZFNmJWZGYxV2h6bCtTUmMvU2lIMWxENEtqNHlZcjRQZExzT24xK1Y2bUg1VC9RWnpRTHpFOElpMnppS1VmUWp5UFlyR0I3RnUyVGFRbFNhNUhuRlZVb3lvemJsbUcxaVNlamNYVy9HSUs2YmhaSFM2dVZxVkRIUm5XYVNzMG05eWsvREs2N1RRdHQrbXFkcVVTc2FQTkxxMHNLUXhXeDV6RzI0RmJyeHZ3eXE0ZUwycjhEczlhOFZoNVlYeVcwbk50T05tbTFiZStwV3k2ekNTc2JJOGlzTnFtc1JPa3dIRGVmZEdVcmxlcFVoRHBNWkd2ZC83T1diZXMyUTkwTmEyOHErV25QMWNlMWdmUTdOL2FPVC9BSVZ5V0RhdHVGODFsUDFzcjlTM0R1UlFxblJVRDR4aTl5eENqQ0hSUjU2UVg2dC9DWXl0NUhYWDhPWElxV0dKam1Oa0FwR1JiSEZUT0FYWkxTNjVtSVRybWk0N0dWKzlLVHZtL29USWd4SHEzOThUcGRXVi9WS1A5MzVKRno5SjRmV1VYZ3FQaktpdmc5MHV3NlhYeFhxWWZsUDlKbmRDbk1Yd2lMVDNuRlVsNkM1SHFWZ0pMRDNRV2hqVVRwVWtFTHlqaGNSRjdEck51czIzRHRoWlMyVTJXY0poWGlxOEtLZHRwMnY3aXdiUmRuSzBCbEZKaG1KTnhEbkFCZ3kydnV5SUliMmNZaHBWZHU1dU5ONkVXalhCd2x0UmxmZnZUVnZrN2xjMFBxbFByR01xblc3V3pjbXlTd2V0bTZ1QUFKUFVJbGxVVU01R2p3MmpjUmo1T2poMW54YnlVZXR2N2JOSjBQNk0waFZISzFEdk10bVVVS0EzREVXdVBZRDNSVmxpMjl5TzV3Mm9sQ0VWNWFvM0xqWkpLL2JmNkREV2JZVE9sS1hwNWduZ1ptV1Z3VExmNGVjVmMvdW5zQmhvWWxQS1dSVHgrcU5hakZ6dzh0dEwyYldsMlp0UDVHWU1sc2lDQ01pRGtRUnZCSFVSRnc0RnhheVpJYXZhc3pxdVp5VWhjVGIySnlWRjNZblBVUE05UU1KS2FncnN1WUxBVnNiVThsUWpkOGZjbDcyL3ZxTlVvZlJ5bEZMVkZSTUpZV0lrZ0lCd0RPSEo3OEk3b3B2RnUvb285Qm82a1VwUXRpS3NtMnM5aEpKZHJ2Zm5aRUxwNzBWVXdrMHRVNGNibHFGREszREdnVXIzNEc3b2tqalg3UzdqVll6L0FPZVU5bHZDVm50Y0ZOSnA5VjQydDNNd3pXVFZpZlNUbWtWQ0dYTUdkdDZzdlV5TU1tVTlvM0c0TmlDSTJNSnFhdkU4a3grajYrQXJPaGlZN01sM05lOVBpdnZlUmlybkRtdXRtV2wwaUE2MXhMaHNjVDd6cGUrYitoTWlDdjZ0L2ZFNlRWcGYxT2ovQUhma2tYRDBtaDlaUmVDbytNcUlNSnVmWWRKcnl2NG1INVQvQUVHZTBJNWk5d2kwOTV4dEplZ3VSN0ZZd00wV0RaMnYyNm0vTS9sTVIxZWd6Y2FGWDg5Ui9GOUdYcjBndWhTK0tiOEpjVnNMeE90MXg2RkhuTDlKWnRYS2VWb3pSM0t1TFlaWEx6aU9remtYdzk5eUphK3pqRU0yNms3TGtqZVlLRkxSR2p2S3pXNk8zUDN1VFc3OUtNZTBudFRyYWc4cHl6U1ZZWFdYS09FS0QxWXJYWTlwUFgyYm92eG93amxhNTVyWDAvanNTL0tiYmdubW94eVM3ZDc1c3ZleXJhZE5telJUVkxZeXdQSlRiQU1Tb3VVZTJSdW91RzMzRmplNGl0V29wTGFpZGJxL3A2cldxckM0bDNiNk11TjF3Zlp1ZmVRRzNUVnRaTTlKNkN3cUEySURkeWlZYy84QU9HSHRCUFhFbUhtMnJQZ2FiVzNBeG9WNDE0TDFsN3IvQUhLMmZiZGRxWnBHcStpcFdqS0hITUZpRTVXZTM0bWNqb2p0c1NKYWo1bUtrNU9yUExzTzR3R0hwYUl3RzNVeWFXMU44WEwzZnBTTVQxdzJwMXMvR3duUElTeHdKSllwaEhWZHhabVBhU2JjQkd4cDBZUjRYUEs5SjZ3WTNFcVVvMUhDUEJRZHJjMnMyeUIxUTI1MXRHNE15YzFUSnZ6NWM1c1RXNnlrdzNjTUJ1QkpYaEVsVERRbXNsWm1uMGJyWmpzQk5lVXFPcFQ5cU0zZDI0Mms4MC9sMUc1YlZkWEpPbE5HOHZLc3pwTC9BR21uY0RNcmh4TW5iWjB5SytzRjdJMTFHYnBUcytUUFdOWXNEUjB6b3p5OUhPU2o1U20rTnJYYTdWdzk5dmNmSmlMdWpkbnppa1dwMGlFNjlvdDJ4NWZ2T2w3NXY2TXlJSy9xMzk4VG90WEYvVXFQOTM1SkZ3OUpWZWZSK0NmOFpVUVlUYyt3NkxYZFhuUTVUL1NaL1FwekY4SWl5OTV4MUplZ3VSNkZJQjdGZzJlcjl1cHZ6UDVURVZYb00yK2hsL1BVdnhmUmw1Mi9EbTB2am1mOGNWOE54T3ExdlhvMGVjdjBrenRwL3dEazFIZ2xmcVM0ancvckViUFdqL1NhdktQNW9tQVVhOHhQQ3Z3alp2ZWVQVTE2RWVTTFBzN1Q3ZFRmbWZ5bUlhdlFadmRDcitlby9pK2pORzI3a0JLUW5jS2k1N3NyeFV3M0hrZHRyYmJZb04vSCt4TmJaWkxOUVRNT1lEUzJid2h4OERZK3lJNkhUUnM5Wm95bG8rZXp3Y1crVjBmTjJrbCtyZnduNFJ0bHZQRDY2L2h5NUd1Nm02NWFDU2trSk1XUWt4WmFpWXN5UmlmR0JaeVc1TnNWMnViM043OVc2S05TbldjbmJ4UFNOR2FUMEREQ1U0VkZCU1VVcEtVTHZhdG5kN0x2ZDUzdVdPbzIwYUpreVdFcWFoQ3FRa21YTFpiNVpLb3dCUmM5d0VSTEQxRzgwYnVldEdpYUZCcWxOTkpaUmpGcS9Vc2tsYytVSlV1MW8zUjg2eGp1TFc2UkNkZzRranF4cG8wdFJKcUFMOGs0SkhXVVBOY0RpVUpBaFp4Mm90RnZBNGw0VEVRcnIyWGQ4dHorVno2SDExMVFrNlZwcGJKTUFJR09STkF1QmlBdXJESTRXc0F3eUlJSFphTlZUcU9sTFB0UFlkSjZPbzZadzBaUWxudmhMZnYzcDlUNDhVMTFXTStwOWlsYXFoY1VnMkZyNDJ6L0FORVduaUluSHgxWXhrWXBYaGwxdjlnenNack8yVCsrMy9TTWVjUk0vd0NHY1ovdDczK3hiOW4reTAwMHpsNTdLMHdBaEZTK0ZMaXhZa2dFc1JsdUFBdnY2b0t0YmFWa2RIb2ZRTHdsVHk5WnB6WFJTM0srOTM0c3BlMkhXTlo4OVVRM1NuRERFTnhtTVJqdDJnWVZYdkJpeFFnNHE3NG5NYXlZMk9KcnFuRE9OTzZ2NzVPMSs2eVhlWG5iUVB1bW84TW45U1hGYkQrc1IxV3Mvd0RwTlRsSDgwVEE2TWN4UEN2d2padmVlUjAxNkVlU0xQczlYN2RUZm1md01RMWVnemVhR1g4OVMvRjlHYUR0OFM4bW4vTWIvYkZYRGIyZGhyZkc5R2wrSitCSzdOTmJKZFhUL3M4Mnhtb25KdWpmM2t1MkVObnZ1dVRkWU9mV0lTdEJ3bHRMY2JEUVdrYWVPdzNtOVhPY1ZzdFAybzdyOWVXVDYrWlROYnRoRTY3L0FMSXlNakEyU1lTckpmOEFEaXNRd0hhU0RidDNteERFcjJqbU5JNnBWcnk4MGtuRjdsSjJhNnI4VjF1ekl6VkQwYkpoY1BXdWdsZ2c4bEtKTFBiOExQWUJWUFhodVNPc2I0ZWVMVnJRS09qZFI2anFLZU9rdGxlekZ0dDlUZkJlKzEzeUsvdDIxVm82V2ZKU2tWVVlvNW5TMVlrTG12SmtnazRTd0xaZGdCdG5jeVlhY3BKdVhZYVhXN1IyQ3dkZW5EQ0pSYlQyNHB0MjNiTDQyYno3a1ptcTV4Y09EMmN5MHVrUW5YdEFGSUxpYkpONnM2NzFWSGZrSmxrSnVaYkRGTEo3Y0ozSHRLa0V3azZjWjd6WjRMU2VKd1BxWlpjWXZPTDdPSFpZMENuMjBWaFVIQkl1UmZvdi9VaXE4UEhyT3RqckxpM0ZQWmgzUC9zR2RzdFg2a2o5MS82a1k4aEV6L2lURi9ERHVmN2tacHZhWFZ6MXdGMWxxUlpoS0JYRU9MRWxoN0NJa2pSakVvNHJUZUx4RWRoeVVWeDJjcjl1YitaVWpMaVk1MnhPYTFhLzFNK2tOUE1LRkxLR1lLUTc0U0NNUnZiZUFUWUM5b2poU2pHVzBqYVkvUytJeE9GZUhxVzJiSzd0bTdicjhPNUZDcDlKc29BeUlHVnVIZkZobzVHRmVVY25taVcwVnJFRW1KTVFsSFJneWs3cmp0NGRSNFFrb1hWbWJERDQzeWM0MUlPMGs3b3NXdFd1ODZ0d2NwZ3dwZkNKWUlXNXRjbTdFazVXM3hGQ21vYmpjNlEwcFd4K3o1VzFsdVVkMmZIZXlEa1QyUmc2TVVaVGRXVWtNRHdJaVRma2FxRXBRa3B3ZG10eldUUmM1RzJ1c2xJY1FsVGNJTmk2a043Y0JBUHVpQjRlTGZ1T2xoclJqYU1IdEtNN0xlMVovSzNnUUdtZHYya0pxNFU1S1JmZTB0U1g0MkxsZ084QUVkc1N4d3NGMW1ueFd0K2tLMGRtR3pEcmlzKzkzdDNHYlZEbG1MTVdabU4yWmlXWmlkNUpPWko3VEZyY2NQTnluSnlrMjI4MjNtMit0bm1KZWNaSTdGcGRJaE91YUFLd0NiSUpTQVJ4SmVqcTF3Z1hzUUxad2pSc0tkU05raDNoaFN4WTRSR1JiSExSbTRsaHJwRmVZM2RHVVFWbDZESzJVaVUwZGdTa0F0anN1YVYzRWlBd200N21QSldtRCtJWDRqSS9MNFF1eVdZNGhycEljVDY1R1JnRFkyT1JqRm1pV2RXRTRPejRGZktSS2Fld0pXTWlXT0ttY1lNYkphbldJVHJYRUFwR1JHZ0NrQXRnQ3NBclFjcWV5N2lSOFBkQll5cFNqdVk3bGFYOVllMGZLRjJTZU9JK0pEdVZXSTI1aGZzdm43b1d6UlBHcENXNWcxaTNWZ0FTYmJnTG55aktGcXE4V2tNYVhWS3FtZENtbnR4RXByZSsxb2R6aXQ3UlRobzdGVk9oU20vN1hidkplbjJSNlJiZFRFRHRaNWErUmUvbEVUcndYRXZ3MWQwaFBkU3R6Y1Y5Ymt2VGJBSzVyWW1rSU91N3NTUFlxa2VjSThURHJOaERWSEhTNlRnbDF0MytTSnFsOUc1ejA2dFJ3U1NUNW1hdndpTjR0Y0Y4elp3MUtrK25YWFpDL3dBM0plQk0wdm80MG82YzZlL2NVUUgyWVdQbkNQRnk0Skd4cDZsNFZkT3BOOHJKZUQ4U2JwZGhlalYzeVdjanJhYk0rQ3NvOG9pZUpxZTgyY05WTkd4MzAyK2NwZlJvYWFlMkIwTTFUeVN2VHYxTWpNd3Z4UjJJSTRBcWVJaG80bWEzNWxmRjZvNEd0RitTVHB5NE5OdGRxYjNjcmN6QXRhZFU1dEhQTWljT2NNMVlkRjBKeWRlQnRZamVEY1JzNFRVMWRIa09rTkhWY0JYZEdzczk2ZkNTNE5mZVJLcFRGbXdxQ3pFNUFDNVBzRUplMjgzNmc1TzBWZGt0VDZpVlRFQVNzTit0bVVBZCtkL1phOFJ1ckZjUzdIUnVJazdiTnViUkxVK3lXZWVsT3AwSGU3SDNCTGVjSjVlUHVaZGhvS3JMcFRnditUZmg5U1dwOWpNdjhkYU81WkorSm1md2lONGg4Rjh5N0hWNmw3ZGZ1aS9HL3dCQ1ZwZGo5QU9sUG5Od3VGSHV3RStjSThSUGdrWDRhQndDNlZTVCtTOFBxUzlOczMwVXY5M2lQYXp6VDVZZ1BLSTNXcWU4MkVORTZMajdOK2JsL3dDRXhTNnY2T1N4V1JJQkhYeVFKOTVVbnpoSE9iNHMyRU1ObzZIUnB3LzQ1OTdSTlN0S1NWRmxLZ2RnRnY0UkhabXlqaWFFVmFMUzdBL3B1VjYza2ZsQnNzYnp1bDhYaUw2YmxldDVINVFiTER6dWw4WGlkK201WHJlUitVR3l3ODdwZkY0blBwdVY2M2tmbEJzc1BPNlh4ZUl2cHVWNjNrZmxCc3NQTzZYeEMrbTVYcmVSK1VHeXc4OG8vRUw2YmxldDVINVFiTER6eWw4Um1YcEJVU1RLV1RPRmkwdWNFREQxWmluRVBlcW4yUmN3cmFrMGNQcmZTcDFjTFRyUnMzR2RyOVVsbXZraHJzLzBXcXllVnR6NWhibmRZVldLNFIyQzR2eDlnZ3F1N3NSNk9veGhUMitMOEU5eGFJaE5zS0F3S0FCUUFLQUJRQUtBQlFBS0FCUUFLQUJRQUtBQlFBUVd2T2pCTnBKeWsyd0x5dzhVc1l2TVhYMnhKVGxzeVhjYXpTZEh5MkZuRjhGdExuSFA5MTJucHFXdjJXVi9uL1VhQ3AwbVQ0SmZ3WTl2aXlhdEVaZEZhQUJXZ0FWb0FGYUFCV2dBVm9BRmFBQldnQVZvQUZhQUJXZ0FWb0FGYUFCaHJDUHMxUitSTi8ybUdoMGx6S3VML3dBdlUvQkx3UC9aJyxcbiAgICBhZGFwdGVyOiAoKSA9PiBuZXcgTmVvTGluZVdhbGxldEFkYXB0ZXIoY29uZmlnKSxcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmVvbGluZS5qcy5tYXAiLCJpbXBvcnQgeyBPM1dhbGxldEFkYXB0ZXIgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbzMnO1xuaW1wb3J0IHsgV2FsbGV0TmFtZSB9IGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0IGNvbnN0IGdldE8zV2FsbGV0ID0gKGNvbmZpZykgPT4gKHtcbiAgICBuYW1lOiBXYWxsZXROYW1lLk8zLFxuICAgIHVybDogJ2h0dHBzOi8vbzMubmV0d29yay8nLFxuICAgIGljb246ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJwWkQwaTVadSs1YkdDWHpFaUlHUmhkR0V0Ym1GdFpUMGk1WnUrNWJHQ0lERWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkbWxsZDBKdmVEMGlNQ0F3SURFd01qUWdNVEF5TkNJK1BHUmxabk0rUEhOMGVXeGxQaTVqYkhNdE1YdG1hV3hzT2lNd01HRm1PVEk3ZlR3dmMzUjViR1UrUEM5a1pXWnpQangwYVhSc1pUN25sTHZtbmI4Z05Ua2c1WW12NXB5c0lETThMM1JwZEd4bFBqeHdZWFJvSUdOc1lYTnpQU0pqYkhNdE1TSWdaRDBpVFRnNE9TNDBNaXcwTnpaaE1USXdMREV5TUN3d0xEQXNNQzB4T1RVdU1qVXRPVE11TkRjc05EQXNOREFzTUN3d0xEQXNOVEF1TVRrc05qSXVNamxCTXprdU5UY3NNemt1TlRjc01Dd3dMREVzTnpZNUxqUXlMRFF6Tm1FME1DdzBNQ3d3TERFc01Td3dMRGd3TERRd0xEUXdMREFzTUN3d0xEQXNPREFzTkRBc05EQXNNQ3d4TERFc01DdzRNR010TGpZMUxEQXRNUzR5T1N3d0xURXVPVE1zTUhNdE1TNHlPQ3d3TFRFdU9UTXNNR2d0TXpneFl5MDVNeTQzTkN3d0xURTNNQzAzTmk0eU5pMHhOekF0TVRjd2N6YzJMakkyTFRFM01Dd3hOekF0TVRjd0xERTNNQ3czTmk0eU5pd3hOekFzTVRjd1lURTNNQzR4TXl3eE56QXVNVE1zTUN3d0xERXRNakF1TlN3NE1TdzBNQ3cwTUN3d0xERXNNQ3czTUM0ekxETTRMakU1UVRJMU1Dd3lOVEFzTUN3eExEQXNNemcwTGpVNExEYzFObWd6T0RGakxqWTFMREFzTVM0eU9Td3dMREV1T1RNc01ITXhMakk0TERBc01TNDVNeXd3WVRFeE9TNDVNeXd4TVRrdU9UTXNNQ3d3TERBc09Ea3VNell0TWpBd1FURXhPUzQxTWl3eE1Ua3VOVElzTUN3d0xEQXNPRGc1TGpReUxEUTNObG9pTHo0OEwzTjJaejQ9JyxcbiAgICBhZGFwdGVyOiAoKSA9PiBuZXcgTzNXYWxsZXRBZGFwdGVyKGNvbmZpZyksXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW8zLmpzLm1hcCIsImltcG9ydCB7IE9uZUdhdGVXYWxsZXRBZGFwdGVyIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW9uZWdhdGUnO1xuaW1wb3J0IHsgV2FsbGV0TmFtZSB9IGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0IGNvbnN0IGdldE9uZUdhdGVXYWxsZXQgPSAoY29uZmlnKSA9PiAoe1xuICAgIG5hbWU6IFdhbGxldE5hbWUuT25lR2F0ZSxcbiAgICB1cmw6ICdodHRwczovL29uZWdhdGUuc3BhY2UvJyxcbiAgICBpY29uOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxDanh6ZG1jZ2QybGtkR2c5SWpJMElpQm9aV2xuYUhROUlqSTBJaUIyYVdWM1FtOTRQU0l3SURBZ01qUWdNalFpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0NqeHdZWFJvSUdROUlrMDVMams1TnpJeklERXVOelF6T0RWTU5pNHhOams1TWlBekxqTXlOell4VERZdU5ETXhNVE1nTXk0NU5UZzROVXd4TUM0eU5UZzBJREl1TXpjMU1EbE1PUzQ1T1RjeU15QXhMamMwTXpnMVdpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BIQmhkR2dnWkQwaVRURXdMakl3TVRNZ01TNHlOVE01T1V3MUxqWTRORFUzSURNdU1USXpNRFZNTmk0eU16RXdPU0EwTGpRME16YzJUREV3TGpjME56a2dNaTQxTnpRM1RERXdMakl3TVRNZ01TNHlOVE01T1ZvaUlHWnBiR3c5SW1Kc1lXTnJJaTgrQ2p4d1lYUm9JR1E5SWsweE1DNHlOVGczSURFdU1USTBOekpNTlM0MU5UUTJPU0F6TGpBM01ETXhURFl1TVRjNE1qa2dOQzQxTnpnd05rd3hNQzQ0T0RJeklESXVOak15TkRkTU1UQXVNalU0TnlBeExqRXlORGN5V2lJZ1ptbHNiRDBpWW14aFkyc2lMejRLUEhCaGRHZ2daRDBpVFRVdU9UWTRPRElnTlM0d05qUXdNMHcxTGpBMk16UTRJREl1T0RZNE5qUk1NVEF1TkRVeU5DQXdMall6TmpjNFRERXhMak0yTkRRZ01pNDRNekl4Tmt3MUxqazJPRGd5SURVdU1EWTBNRE5hVFRZdU1ETTFNVFVnTXk0eU56TXlNMHcyTGpNMk5qYzRJRFF1TURreU16Wk1NVEF1TXpjNU5TQXlMalF6TkRJeFRERXdMakEwTnprZ01TNDJNVEUzTjB3MkxqQXpOVEUxSURNdU1qY3pNak5hSWlCbWFXeHNQU0ppYkdGamF5SXZQZ284Y0dGMGFDQmtQU0pOTVRBdU1qWXdOQ0F4TGpFd056QTBURFV1TlRNeU1qTWdNeTR3TmpNMlREWXVNVFkzTlNBMExqVTVPRGd4VERFd0xqZzVOVGNnTWk0Mk5ESXlOa3d4TUM0eU5qQTBJREV1TVRBM01EUmFJaUJtYVd4c1BTSmliR0ZqYXlJdlBnbzhjR0YwYUNCa1BTSk5OUzQ1Tmprek9TQTFMakE0TXprM1REVXVNRFV3TnpnZ01pNDROakl3TlV3eE1DNDBOak1nTUM0Mk1qQXlNemxNTVRFdU16Z3hOaUF5TGpnME1qRTFURFV1T1RZNU16a2dOUzR3T0RNNU4xcE5OaTR3TWpJME5TQXpMakkyTXpNeVREWXVNemN3TmpZZ05DNHhNRGc1T0V3eE1DNDBNVE15SURJdU5EVXdPRE5NTVRBdU1EVTROQ0F4TGpVNU1Ua3hURFl1TURJeU5EVWdNeTR5TmpNek1sb2lJR1pwYkd3OUltSnNZV05ySWk4K0NqeHdZWFJvSUdROUlrMDFMamt3T1RreklEVXVNakUyTkRWTU5DNDVNVFV3TkNBeUxqZ3dOVFZNTVRBdU5URTJNeUF3TGpRNE5ERk1NVEV1TlRFeE1TQXlMamc1TVRjelREVXVPVEE1T1RNZ05TNHlNVFkwTlZwTk5pNHhOVEl3TWlBekxqTXhOakl4VERZdU5ESXpPVFVnTXk0NU56azBOMHd4TUM0eU9EQTRJREl1TXpneE1ESk1NVEF1TURBNE9TQXhMamN4TnpjMlREWXVNVFV5TURJZ015NHpNVFl5TVZvaUlHWnBiR3c5SW1Kc1lXTnJJaTgrQ2p4d1lYUm9JR1E5SWswMUxqY3hNVEUwSURVdU56QXdOMHcwTGpReU56Y3pJREl1TmpBek1qbE1NVEF1TnpFNE55QXdUREV5TGpBd01qRWdNeTR3T1RjME1rdzFMamN4TVRFMElEVXVOekF3TjFwTk5TNHpPVGswTVNBekxqQXdOemc0VERZdU1URXlOREVnTkM0M01qa3dNMHd4TVM0d016QTFJREl1TmpreU9ETk1NVEF1TXpFM05TQXdMamszTVRZM00wdzFMak01T1RReElETXVNREEzT0RoYVRUWXVNakl4T0RVZ05DNDBOak0zTTB3MUxqWTJORGN4SURNdU1URTNNekZNTVRBdU1qQTBOeUF4TGpJek5qazRUREV3TGpjMk5USWdNaTQxT0RNek9VdzJMakl5TVRnMUlEUXVORFl6TnpOYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk15NHlPRE01TkNBMkxqRTFOakV4VERFdU56QTVPVFlnT1M0NU5qWTRUREl1TXpNNE5EWWdNVEF1TWpJMk5Fd3pMamt4TWpRMElEWXVOREUxTnpGTU15NHlPRE01TkNBMkxqRTFOakV4V2lJZ1ptbHNiRDBpWW14aFkyc2lMejRLUEhCaGRHZ2daRDBpVFRNdU1USTRORFVnTlM0Mk5qazRPRXd4TGpJMU56Z3hJREV3TGpFNE5rd3lMalUzT0RNeklERXdMamN6TTB3MExqUTBPRGszSURZdU1qRTJPRFpNTXk0eE1qZzBOU0ExTGpZMk9UZzRXaUlnWm1sc2JEMGlZbXhoWTJzaUx6NEtQSEJoZEdnZ1pEMGlUVE11TURJNE1UUWdOUzQxTXprMk0wd3hMakE1TXpjMUlERXdMakl5TWpsTU1pNDFPVFE0TkNBeE1DNDROREk1VERRdU5USTVNak1nTmk0eE5UazJOVXd6TGpBeU9ERTBJRFV1TlRNNU5qTmFJaUJtYVd4c1BTSmliR0ZqYXlJdlBnbzhjR0YwYUNCa1BTSk5NaTQ0TXpJeElERXhMak0xTVRkTU1DNDJNelkzTVRrZ01UQXVORFF6VERJdU9EY3hPU0ExTGpBMU5EQTFURFV1TURZM01qZ2dOUzQ1Tmprek5Fd3lMamd6TWpFZ01URXVNelV4TjFwTk1TNDJNRGd6T1NBeE1DNHdNalV5VERJdU5ETXdPRE1nTVRBdU16VTJPRXcwTGpBNE9EazRJRFl1TXpRd056ZE1NeTR5TmprNE5TQTJMakF3T1RFMFRERXVOakE0TXprZ01UQXVNREkxTWxvaUlHWnBiR3c5SW1Kc1lXTnJJaTgrQ2p4d1lYUm9JR1E5SWswekxqQTJORFVnTlM0MU1qSTNOVXd4TGpFd05UUTNJREV3TGpJME9UbE1NaTQyTkRBek5TQXhNQzQ0T0RaTU5DNDFPVGt6T0NBMkxqRTFPRGcwVERNdU1EWTBOU0ExTGpVeU1qYzFXaUlnWm1sc2JEMGlZbXhoWTJzaUx6NEtQSEJoZEdnZ1pEMGlUVEl1T0RNNE56SWdNVEV1TXpjeE4wd3dMall5TURFeE55QXhNQzQwTkRrM1RESXVPRFl4T1RNZ05TNHdNelF5TkV3MUxqQTRNemcxSURVdU9UWTVORE5NTWk0NE16ZzNNaUF4TVM0ek56RTNXazB4TGpVNU1UYzVJREV3TGpBME5USk1NaTQwTXpjME5DQXhNQzR6T1RNMFREUXVNVEV5TVRjZ05pNHpOVGMwTkV3ekxqSTJOalV5SURZdU1EQTFPVEZNTVM0MU9URTNPU0F4TUM0d05EVXlXaUlnWm1sc2JEMGlZbXhoWTJzaUx6NEtQSEJoZEdnZ1pEMGlUVEl1T0RrME9UTWdNVEV1TlRBME1rd3dMalE0TnpNd05TQXhNQzQxTURrelRESXVPREE0TnpFZ05DNDVNRFE0TWt3MUxqSXhOak0wSURVdU9EazVOMHd5TGpnNU5Ea3pJREV4TGpVd05ESmFUVEV1TnpJME1qZ2dPUzQ1T1RJd01Vd3lMak00TnpVMElERXdMakkyTXpsTU15NDVOemt6TmlBMkxqUXhNemN6VERNdU16RTJNU0EyTGpFek9EUTRUREV1TnpJME1qZ2dPUzQ1T1RJd01Wb2lJR1pwYkd3OUltSnNZV05ySWk4K0NqeHdZWFJvSUdROUlrMHpMakE1TnpReUlERXhMams0T0RSTU1DQXhNQzQzTURWTU1pNDJNRFkySURRdU5EQTBNREpNTlM0M01EUXdNaUExTGpZNE56UXpURE11TURrM05ESWdNVEV1T1RnNE5GcE5NQzQ1TnpFMk56TWdNVEF1TXpBek4wd3lMalk1TWpneklERXhMakF4TmpkTU5DNDNNekl6TlNBMkxqRXdNVGsyVERNdU1ERXhNVGtnTlM0ek9EZzVOa3d3TGprM01UWTNNeUF4TUM0ek1ETTNXazB5TGpVNE16TTVJREV3TGpjMU1UUk1NUzR5TXpZNU9DQXhNQzR4T1RRelRETXVNVEUzTXpFZ05TNDJOVFF5Tmt3MExqUTJOekEwSURZdU1qRXhORXd5TGpVNE16TTVJREV3TGpjMU1UUmFJaUJtYVd4c1BTSmliR0ZqYXlJdlBnbzhjR0YwYUNCa1BTSk5NakF1TmpZMk5DQTJMakU0TkRFM1RESXdMakF6TlRJZ05pNDBORFUxVERJeExqWXhPVFlnTVRBdU1qY3lOVXd5TWk0eU5UQTRJREV3TGpBeE1USk1NakF1TmpZMk5DQTJMakU0TkRFM1dpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BIQmhkR2dnWkQwaVRUSXdMamcyT1RVZ05TNDJPVGcxTkV3eE9TNDFORGc0SURZdU1qUTFNRFpNTWpFdU5ERTNPU0F4TUM0M05qRTRUREl5TGpjek9EWWdNVEF1TWpFMU0wd3lNQzQ0TmprMUlEVXVOams0TlRSYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk1qQXVPVEkxTlNBMUxqVTJNek0zVERFNUxqUXhPQ0EyTGpFNE56Vk1NakV1TXpZMU1pQXhNQzQ0T1RBNVRESXlMamczTWpjZ01UQXVNalkyTjB3eU1DNDVNalUxSURVdU5UWXpNemRhSWlCbWFXeHNQU0ppYkdGamF5SXZQZ284Y0dGMGFDQmtQU0pOTWpFdU1UWXhOaUF4TVM0ek56Z3pUREU0TGpreU9UY2dOUzQ1T0Rrek1Vd3lNUzR4TWpVeElEVXVNRGMzTXpOTU1qTXVNelUyT1NBeE1DNDBOamsyVERJeExqRTJNVFlnTVRFdU16YzRNMXBOTVRrdU9UQXhOQ0EyTGpRd016ZzFUREl4TGpVMU9UVWdNVEF1TkRFNU9Vd3lNaTR6TnpnMklERXdMakE0T0RKTU1qQXVOekl3TlNBMkxqQTNOVFV6VERFNUxqa3dNVFFnTmk0ME1ETTROVm9pSUdacGJHdzlJbUpzWVdOcklpOCtDanh3WVhSb0lHUTlJazB5TUM0NU16TTFJRFV1TlRRMk1EbE1NVGt1TXprNE5DQTJMakU0TVRZMFRESXhMak0xTlRnZ01UQXVPVEE1TlV3eU1pNDRPVEE1SURFd0xqSTNORXd5TUM0NU16TTFJRFV1TlRRMk1EbGFJaUJtYVd4c1BTSmliR0ZqYXlJdlBnbzhjR0YwYUNCa1BTSk5NakV1TVRVME1TQXhNUzR6T1RneVRERTRMamt3TWpNZ05TNDVOamt6T1V3eU1TNHhNalF6SURVdU1EVXdOemhNTWpNdU16WTJNU0F4TUM0ME5qWXpUREl4TGpFMU5ERWdNVEV1TXprNE1scE5NVGt1T0RrM01pQTJMak00TXprelRESXhMalUxTlRRZ01UQXVOREl6TWt3eU1pNDBNREVnTVRBdU1EYzFUREl3TGpjME1qa2dOaTR3TXpJMFRERTVMamc1TnpJZ05pNHpPRE01TTFvaUlHWnBiR3c5SW1Kc1lXTnJJaTgrQ2p4d1lYUm9JR1E5SWsweU1TNHdPVGczSURFeExqVXpNRGhNTVRndU56YzNNeUExTGpreU5qSTFUREl4TGpFNE5TQTBMamt6TVRNM1RESXpMalV3TmpRZ01UQXVOVE0xT1V3eU1TNHdPVGczSURFeExqVXpNRGhhVFRJd0xqQXhOellnTmk0ME16WTVOa3d5TVM0Mk1USTRJREV3TGpJNE1EVk1Nakl1TWpjMklERXdMakF3T0RaTU1qQXVOamcwTWlBMkxqRTFOVEE0VERJd0xqQXhOellnTmk0ME16WTVObG9pSUdacGJHdzlJbUpzWVdOcklpOCtDanh3WVhSb0lHUTlJazB5TUM0NE9USTNJREV5TGpBeE5EbE1NVGd1TWpnMk1TQTFMamN4TXprMVRESXhMak00TXpZZ05DNDBNekExTkV3eU15NDVPRFk0SURFd0xqY3pNVFZNTWpBdU9Ea3lOeUF4TWk0d01UUTVXazB4T1M0eU5qUTBJRFl1TVRJMU1UZE1NakV1TXpBd05pQXhNUzR3TkRNeVRESXpMakF5TVRnZ01UQXVNek13TWt3eU1DNDVPRFUySURVdU5ERTFORGhNTVRrdU1qWTBOQ0EyTGpFeU5URTNXazB5TVM0ME1UQXhJREV3TGpjMk9Fd3hPUzQxTWprM0lEWXVNak0zT1RKTU1qQXVPRGt5TnlBMUxqWTNOelEzVERJeUxqYzNNekVnTVRBdU1qSXdPRXd5TVM0ME1UQXhJREV3TGpjMk9Gb2lJR1pwYkd3OUltSnNZV05ySWk4K0NqeHdZWFJvSUdROUlrMHhOQzR3TVRVMElERXVOelF6TlV3eE15NDNOVE01SURJdU16YzBOa3d4Tnk0MU9EQTBJRE11T1RZd016Wk1NVGN1T0RReE9TQXpMak15T1RJMlRERTBMakF4TlRRZ01TNDNORE0xV2lJZ1ptbHNiRDBpWW14aFkyc2lMejRLUEhCaGRHZ2daRDBpVFRFekxqZ3hOamNnTVM0eU5UVXlPVXd4TXk0eU5qazFJREl1TlRjMU56Rk1NVGN1TnpnMU15QTBMalEwTnpFMFRERTRMak16TWpVZ015NHhNalkzTWt3eE15NDRNVFkzSURFdU1qVTFNamxhSWlCbWFXeHNQU0ppYkdGamF5SXZQZ284Y0dGMGFDQmtQU0pOTVRNdU56WXpNeUF4TGpFeU1rd3hNeTR4TXpnM0lESXVOakk1TTB3eE55NDROREV6SURRdU5UYzRNVGhNTVRndU5EWTJJRE11TURjd09EZE1NVE11TnpZek15QXhMakV5TWxvaUlHWnBiR3c5SW1Kc1lXTnJJaTgrQ2p4d1lYUm9JR1E5SWsweE9DNHdOREF6SURVdU1EWTNNelJNTVRJdU5qVXhOQ0F5TGpnek1qRTJUREV6TGpVMklEQXVOak0yTnpoTU1UZ3VPVFE1SURJdU9EY3hPVFpNTVRndU1EUXdNeUExTGpBMk56TTBXazB4TXk0Mk1qTWdNaTQwTXpBNE9Vd3hOeTQyTXpreElEUXVNRGc1TURSTU1UY3VPVGN3TnlBekxqSTJPVGt4VERFekxqazFPQ0F4TGpZeE1UYzNUREV6TGpZeU15QXlMalF6TURnNVdpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BIQmhkR2dnWkQwaVRURXpMamMxTXpNZ01TNHhNRE0xTlV3eE15NHhNVGN5SURJdU5qTTRORE5NTVRjdU9EUTBOQ0EwTGpVNU56UTJUREU0TGpRNE1EVWdNeTR3TmpJMU9Fd3hNeTQzTlRNeklERXVNVEF6TlRWYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk1UZ3VNRFEzTXlBMUxqQTRNemszVERFeUxqWXpNVGdnTWk0NE16ZzRORXd4TXk0MU5UTTRJREF1TmpJd01qTTVUREU0TGprMk9UTWdNaTQ0TmpJd05Vd3hPQzR3TkRjeklEVXVNRGd6T1RkYVRURXpMalU1TmprZ01pNDBNemMxTjB3eE55NDJORFl4SURRdU1URXlNamxNTVRjdU9UazNOaUF6TGpJMk5qWTBUREV6TGprMU5TQXhMall3T0RRNVRERXpMalU1TmprZ01pNDBNemMxTjFvaUlHWnBiR3c5SW1Kc1lXTnJJaTgrQ2p4d1lYUm9JR1E5SWsweE9DNHhNRE0ySURVdU1qRTJOVGhNTVRJdU5EazVJREl1T0RrMU1UaE1NVE11TkRrek9TQXdMalE0TnpVME9Vd3hPUzR3T1RnMElESXVPREE0T1RWTU1UZ3VNVEF6TmlBMUxqSXhOalU0V2sweE15NDNNellnTWk0ek9ERXhOVXd4Tnk0MU56WXpJRE11T1RjNU5rd3hOeTQ0TlRFMUlETXVNekUyTXpWTU1UUXVNREV4TXlBeExqY3lORFV6VERFekxqY3pOaUF5TGpNNE1URTFXaUlnWm1sc2JEMGlZbXhoWTJzaUx6NEtQSEJoZEdnZ1pEMGlUVEU0TGpNd01qa2dOUzQzTURRd01rd3hNaTR3TURJZ015NHdPVGMwTWt3eE15NHlPVGcySURCTU1Ua3VOVGs1TmlBeUxqWXdOalpNTVRndU16QXlPU0ExTGpjd05EQXlXazB4TWk0NU9UWTRJREl1TmpreU9ETk1NVGN1T1RBNE15QTBMamN6TWpNMVRERTRMall5TVRNZ015NHdNVEV4T1V3eE15NDJPVGs1SURBdU9UY3hOamN6VERFeUxqazVOamdnTWk0Mk9USTRNMXBOTVRjdU9EQXlNU0EwTGpRMk56QTBUREV6TGpJMk5UVWdNaTQxT0RNek9Vd3hNeTQ0TWpJMklERXVNak0yT1RoTU1UZ3VNelkxT1NBekxqRXlNRFl6VERFM0xqZ3dNakVnTkM0ME5qY3dORm9pSUdacGJHdzlJbUpzWVdOcklpOCtDanh3WVhSb0lHUTlJazB4Tnk0MU5qSTNJREl3TGpBME1ETk1NVE11TnpNMU5DQXlNUzQyTWpSTU1UTXVPVGsyTmlBeU1pNHlOVFV6VERFM0xqZ3lNemtnTWpBdU5qY3hOVXd4Tnk0MU5qSTNJREl3TGpBME1ETmFJaUJtYVd4c1BTSmliR0ZqYXlJdlBnbzhjR0YwYUNCa1BTSk5NVGN1TnpZMU9DQXhPUzQxTkRnM1RERXpMakkwT1NBeU1TNDBNVGMzVERFekxqYzVOVFVnTWpJdU56TTRORXd4T0M0ek1USXpJREl3TGpnMk9UUk1NVGN1TnpZMU9DQXhPUzQxTkRnM1dpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BIQmhkR2dnWkQwaVRURTNMamd5TVRJZ01Ua3VOREl4T0V3eE15NHhNVGN5SURJeExqTTJOelJNTVRNdU56UXdPQ0F5TWk0NE56VXlUREU0TGpRME5EZ2dNakF1T1RJNU5rd3hOeTQ0TWpFeUlERTVMalF5TVRoYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk1UTXVOVE01T1NBeU15NHpOakF4VERFeUxqWXlOemtnTWpFdU1UWTBOMHd4T0M0d01qQXlJREU0TGprek5qRk1NVGd1T1RJNE9TQXlNUzR4TXpFMVRERXpMalV6T1RrZ01qTXVNell3TVZwTk1UTXVOVGsyTXlBeU1TNDFOVFpNTVRNdU9USTNPU0F5TWk0ek56VXhUREUzTGprME16a2dNakF1TnpFM1RERTNMall4TWpNZ01Ua3VPRGszT1V3eE15NDFPVFl6SURJeExqVTFObG9pSUdacGJHdzlJbUpzWVdOcklpOCtDanh3WVhSb0lHUTlJazB4Tnk0NE1qWTRJREU1TGpRd016Wk1NVE11TURrNE5pQXlNUzR6TmpBeVRERXpMamN6TXprZ01qSXVPRGsxTkV3eE9DNDBOakl4SURJd0xqa3pPRGhNTVRjdU9ESTJPQ0F4T1M0ME1ETTJXaUlnWm1sc2JEMGlZbXhoWTJzaUx6NEtQSEJoZEdnZ1pEMGlUVEV6TGpVek1ERWdNak11TXpjNU9Vd3hNaTQyTURFMklESXhMakUxTnpsTU1UZ3VNREkzSURFNExqa3dNamxNTVRndU9UUTRPU0F5TVM0eE1qUTRUREV6TGpVek1ERWdNak11TXpjNU9WcE5NVE11TlRrMk5DQXlNUzQxTlRVNVRERXpMamt5T0RFZ01qSXVOREE0TWt3eE55NDVOamN6SURJd0xqYzFUREUzTGpZeU5UY2dNVGt1T0RrM04wd3hNeTQxT1RZMElESXhMalUxTlRsYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk1UZ3VNRGcwSURFNExqYzRNelJNTVRrdU1EYzRPU0F5TVM0eE9URXhUREV6TGpRM05EUWdNak11TlRFeU5Vd3hNaTQwTnprMUlESXhMakV3TVRWTU1UZ3VNRGcwSURFNExqYzRNelJhVFRFM0xqZzBNVGtnTWpBdU5qZ3dORXd4Tnk0MU55QXlNQzR3TVRjeFRERXpMamN4TmpVZ01qRXVOakUxTmt3eE15NDVPRGcwSURJeUxqSTNPRGhNTVRjdU9EUXhPU0F5TUM0Mk9EQTBXaUlnWm1sc2JEMGlZbXhoWTJzaUx6NEtQSEJoZEdnZ1pEMGlUVEV6TGpJMk5UWWdNak11T1RrMk4wd3hNUzQ1T1RJeUlESXdMamc1TWpkTU1UZ3VNamt6TVNBeE9DNHlPRFl4VERFNUxqVTJOallnTWpFdU16a3pORXd4TXk0eU5qVTJJREl6TGprNU5qZGFUVEV5TGprMU56SWdNakV1TXpBek9Vd3hNeTQyTnpBeUlESXpMakF5TlRGTU1UZ3VOVGswT1NBeU1DNDVPVEl5VERFM0xqZzRNVGtnTVRrdU1qY3hUREV5TGprMU56SWdNakV1TXpBek9WcE5NVE11TnpjNU55QXlNaTQzTlRrM1RERXpMakl6TWpVZ01qRXVOREV6TTB3eE55NDNOekkxSURFNUxqVXpNMHd4T0M0ek1qazJJREl3TGpnNU1qZE1NVE11TnpjNU55QXlNaTQzTlRrM1dpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BIQmhkR2dnWkQwaVRUSXhMall4T1NBeE15NDNOVEEwVERJd0xqQXpNeklnTVRjdU5UYzJPVXd5TUM0Mk5qUXpJREUzTGpnek9EUk1Nakl1TWpVd01TQXhOQzR3TVRKTU1qRXVOakU1SURFekxqYzFNRFJhSWlCbWFXeHNQU0ppYkdGamF5SXZQZ284Y0dGMGFDQmtQU0pOTWpFdU5ERTVNeUF4TXk0eU5qVTFUREU1TGpVME56a2dNVGN1TnpneE0wd3lNQzQ0TmpneklERTRMak15T0RWTU1qSXVOek01TnlBeE15NDRNVEkzVERJeExqUXhPVE1nTVRNdU1qWTFOVm9pSUdacGJHdzlJbUpzWVdOcklpOCtDanh3WVhSb0lHUTlJazB5TVM0ek5qSWdNVE11TVRNeFRERTVMalF4TXpFZ01UY3VPRE16TjB3eU1DNDVNakEwSURFNExqUTFPRFJNTWpJdU9EWTVNeUF4TXk0M05UVTNUREl4TGpNMk1pQXhNeTR4TXpGYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk1qRXVNVEkxTVNBeE9DNDVORFpNTVRndU9USTVOeUF4T0M0d016Y3pUREl4TGpFMk1UWWdNVEl1TmpRNE0wd3lNeTR6TlRZNUlERXpMalUxTjB3eU1TNHhNalV4SURFNExqazBObHBOTVRrdU9UQXhOQ0F4Tnk0Mk1UazBUREl3TGpjeU1EVWdNVGN1T1RVeE1Vd3lNaTR6TnpnMklERXpMamt6TlV3eU1TNDFOVGsxSURFekxqWXdNelJNTVRrdU9UQXhOQ0F4Tnk0Mk1UazBXaUlnWm1sc2JEMGlZbXhoWTJzaUx6NEtQSEJoZEdnZ1pEMGlUVEl4TGpNMU5EVWdNVE11TVRFek5rd3hPUzR6T1RVMUlERTNMamcwTURoTU1qQXVPVE13TkNBeE9DNDBOelk0VERJeUxqZzRPVFFnTVRNdU56UTVOMHd5TVM0ek5UUTFJREV6TGpFeE16WmFJaUJtYVd4c1BTSmliR0ZqYXlJdlBnbzhjR0YwYUNCa1BTSk5NakV1TVRNd09TQXhPQzQ1TmpVNVRERTRMamt3TWpNZ01UZ3VNRFEwVERJeExqRTBOelVnTVRJdU5qSTROVXd5TXk0ek5qazBJREV6TGpVMU1EUk1NakV1TVRNd09TQXhPQzQ1TmpVNVdrMHhPUzQ0T1RjeUlERTNMalkwTWpkTU1qQXVOelF5T1NBeE55NDVOelEwVERJeUxqUXdNU0F4TXk0NU16VXhUREl4TGpVMU5UUWdNVE11TlRrMk9Vd3hPUzQ0T1RjeUlERTNMalkwTWpkYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk1qRXVNRGs0TkNBeE1pNDBPVFU0VERJekxqVXdPVE1nTVRNdU5Ea3dOMHd5TVM0eE9EYzVJREU1TGpBNU1UbE1NVGd1Tnpnd015QXhPQzR3T1RkTU1qRXVNRGs0TkNBeE1pNDBPVFU0V2sweU1pNHlOamtnTVRRdU1EQTBOMHd5TVM0Mk1EVTRJREV6TGpjek1qaE1NakF1TURFek9TQXhOeTQxTnpZMFRESXdMalkzTnpJZ01UY3VPRFE0TTB3eU1pNHlOamtnTVRRdU1EQTBOMW9pSUdacGJHdzlJbUpzWVdOcklpOCtDanh3WVhSb0lHUTlJazB5TVM0ek9EWTFJREU1TGpVNE1qaE1NVGd1TWpnNU1TQXhPQzR5T1RrMFRESXdMamc1T1NBeE1TNDVPVGcwVERJekxqazVNekVnTVRNdU1qZ3hPRXd5TVM0ek9EWTFJREU1TGpVNE1qaGFUVEU1TGpJMk5ERWdNVGN1T1RBNE1Vd3lNQzQ1T0RVeUlERTRMall5TVRGTU1qTXVNREl4TkNBeE15NDJPVFkwVERJeExqTXdNRE1nTVRJdU9UZ3pORXd4T1M0eU5qUXhJREUzTGprd09ERmFUVEl3TGpnNU1qUWdNVGd1TXpRMU9Fd3hPUzQxTkRVNUlERTNMamM0T0RkTU1qRXVOREkyTXlBeE15NHlORFUwVERJeUxqYzNNamNnTVRNdU9EQTFPRXd5TUM0NE9USTBJREU0TGpNME5UaGFJaUJtYVd4c1BTSmliR0ZqYXlJdlBnbzhjR0YwYUNCa1BTSk5NaTR6TnpRek5pQXhNeTQzTWpVMVRERXVOelF6TVRZZ01UTXVPVGcyT0V3ekxqTXlOelU1SURFM0xqZ3hNemxNTXk0NU5UZzNPU0F4Tnk0MU5USTJUREl1TXpjME16WWdNVE11TnpJMU5Wb2lJR1pwYkd3OUltSnNZV05ySWk4K0NqeHdZWFJvSUdROUlrMHlMalUzTlRVZ01UTXVNalF5TkV3eExqSTFORGc0SURFekxqYzRPVEpNTXk0eE1qUTNNeUF4T0M0ek1EVTJURFF1TkRRMU16VWdNVGN1TnpVNE9Vd3lMalUzTlRVZ01UTXVNalF5TkZvaUlHWnBiR3c5SW1Kc1lXTnJJaTgrQ2p4d1lYUm9JR1E5SWsweUxqWXpNVFUxSURFekxqRXdOakZNTVM0eE1qUXdNaUF4TXk0M016QXlURE11TURjeE1qWWdNVGd1TkRNek5rdzBMalUzT0RjNElERTNMamd3T1RWTU1pNDJNekUxTlNBeE15NHhNRFl4V2lJZ1ptbHNiRDBpWW14aFkyc2lMejRLUEhCaGRHZ2daRDBpVFRJdU9EWTROVGdnTVRndU9URTVORXd3TGpZek5qY3hPU0F4TXk0MU16QTFUREl1T0RNeU1TQXhNaTQyTWpFNFREVXVNRFl6T1RjZ01UZ3VNREV3T0V3eUxqZzJPRFU0SURFNExqa3hPVFJhVFRFdU5qQTRNemtnTVRNdU9USTRORXd6TGpJMk5qVTBJREUzTGprME5EUk1OQzR3T0RnNU9DQXhOeTQyTVRJNFRESXVORE13T0RNZ01UTXVOVGsyT0V3eExqWXdPRE01SURFekxqa3lPRFJhSWlCbWFXeHNQU0ppYkdGamF5SXZQZ284Y0dGMGFDQmtQU0pOTWk0Mk5ERTFOU0F4TXk0d09EYzBUREV1TVRBMk5EVWdNVE11TnpJelRETXVNRFl6T0RNZ01UZ3VORFV3T1V3MExqVTVPRGt6SURFM0xqZ3hOVE5NTWk0Mk5ERTFOU0F4TXk0d09EYzBXaUlnWm1sc2JEMGlZbXhoWTJzaUx6NEtQSEJoZEdnZ1pEMGlUVEl1T0RZeE9UTWdNVGd1T1RNNU5Fd3dMall5TURFeE55QXhNeTQxTWpBMlRESXVPRE00TnpJZ01USXVOakF5VERVdU1EZ3pPRFVnTVRndU1ERTNOVXd5TGpnMk1Ua3pJREU0TGprek9UUmFUVEV1TlRreE56a2dNVE11T1RJNE5Vd3pMakkwT1RrMElERTNMamsyTnpkTU5DNHdPVFUxT1NBeE55NDJNVGsxVERJdU5ETTNORFFnTVRNdU5UYzJPVXd4TGpVNU1UYzVJREV6TGpreU9EVmFJaUJtYVd4c1BTSmliR0ZqYXlJdlBnbzhjR0YwYUNCa1BTSk5NaTQ0T1RRNU15QXhNaTQwTmprelREVXVNakUyTXpRZ01UZ3VNRGN6T0V3eUxqZ3dPRGN4SURFNUxqQTJPRGRNTUM0ME9EY3pNRFVnTVRNdU5EWTBNa3d5TGpnNU5Ea3pJREV5TGpRMk9UTmFUVE11T1RjNU16WWdNVGN1TlRjMk5Fd3lMak00TURreElERXpMamN3TmpKTU1TNDNNVGMyTlNBeE15NDVOemd5VERNdU16RTJNU0F4Tnk0NE16Vk1NeTQ1Tnprek5pQXhOeTQxTnpZMFdpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BIQmhkR2dnWkQwaVRUSXVOakF6TWprZ01Ua3VOVFkyTVV3d0lERXpMakkyTlRGTU15NHdPVGMwTWlBeE1TNDVPREUzVERVdU56QXdOeUF4T0M0eU9ESTNUREl1TmpBek1qa2dNVGt1TlRZMk1WcE5NQzQ1TnpFMk56TWdNVE11TmpZNU4wd3pMakF3TnpnNElERTRMalUzTVRKTU5DNDNNamt3TXlBeE55NDROVGd5VERJdU5qa3lPRE1nTVRJdU9UVTJOMHd3TGprM01UWTNNeUF4TXk0Mk5qazNXazB6TGpFeE56TXhJREU0TGpNeE1qVk1NUzR5TXpZNU9DQXhNeTQzTnpreFRESXVOVGd6TXprZ01UTXVNakl5VERRdU5EWXpOek1nTVRjdU56WXlURE11TVRFM016RWdNVGd1TXpFeU5Wb2lJR1pwYkd3OUltSnNZV05ySWk4K0NqeHdZWFJvSUdROUlrMDJMalF3T1RrNElESXdMakF6TnpkTU5pNHhORGcwTkNBeU1DNDJOamc0VERrdU9UYzBPVEVnTWpJdU1qVTBOVXd4TUM0eU16WTFJREl4TGpZeU16Uk1OaTQwTURrNU9DQXlNQzR3TXpjM1dpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BIQmhkR2dnWkQwaVRUWXVNakV3TWprZ01Ua3VOVFE1TTB3MUxqWTJNekE1SURJd0xqZzJPVGRNTVRBdU1UYzRPU0F5TWk0M05ERXhUREV3TGpjeU5qRWdNakV1TkRJd04wdzJMakl4TURJNUlERTVMalUwT1ROYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk5pNHhOVFE1TXlBeE9TNDBNVFE0VERVdU5UTXdNamNnTWpBdU9USXlNVXd4TUM0eU16STVJREl5TGpnM01Vd3hNQzQ0TlRjMklESXhMak0yTXpkTU5pNHhOVFE1TXlBeE9TNDBNVFE0V2lJZ1ptbHNiRDBpWW14aFkyc2lMejRLUEhCaGRHZ2daRDBpVFRFd0xqUXpNamtnTWpNdU16VTVPVXcxTGpBME16azFJREl4TGpFeU9ERk1OUzQ1TmpreE9TQXhPQzQ1TXpJM1RERXhMak0wTVRZZ01qRXVNVFkwTlV3eE1DNDBNekk1SURJekxqTTFPVGxhVFRZdU1ERTFOaklnTWpBdU56SXpOVXd4TUM0d016RTJJREl5TGpNNE1UWk1NVEF1TXpZek15QXlNUzQxTmpJMVREWXVNelV3TlRZZ01Ua3VPVEEwTkV3MkxqQXhOVFl5SURJd0xqY3lNelZhSWlCbWFXeHNQU0ppYkdGamF5SXZQZ284Y0dGMGFDQmtQU0pOTmk0eE5EYzRJREU1TGpNNU56Uk1OUzQxTVRFM01pQXlNQzQ1TXpJelRERXdMakl6T0RrZ01qSXVPRGt4TTB3eE1DNDROelVnTWpFdU16VTJORXcyTGpFME56Z2dNVGt1TXprM05Gb2lJR1pwYkd3OUltSnNZV05ySWk4K0NqeHdZWFJvSUdROUlrMHhNQzQwTXprNUlESXpMak0zT1RsTU5TNHdNalEwTVNBeU1TNHhNelEzVERVdU9UUTJNelFnTVRndU9UQXlPVXd4TVM0ek5qRTRJREl4TGpFMU56bE1NVEF1TkRNNU9TQXlNeTR6TnprNVdrMDFMams1T1RRZ01qQXVOekkyT0V3eE1DNHdNemcySURJeUxqTTROVXd4TUM0ek9UQXlJREl4TGpVMU5UbE1OaTR6TkRjMk1TQXhPUzQ0T1RjM1REVXVPVGs1TkNBeU1DNDNNalk0V2lJZ1ptbHNiRDBpWW14aFkyc2lMejRLUEhCaGRHZ2daRDBpVFRVdU9EZzVORElnTVRndU56Z3dNa3d4TVM0ME9UUWdNakV1TVRBeE5rd3hNQzQwT1RreElESXpMalV3T1RKTU5DNDRPVFExTXlBeU1TNHhPRGM0VERVdU9EZzVORElnTVRndU56Z3dNbHBOTVRBdU1qVTNJREl4TGpZeE5UWk1OaTQwTURNME5DQXlNQzR3TVRjeFREWXVNVEk0TVRrZ01qQXVOamd3TkV3NUxqazRNVGN5SURJeUxqSTNOVFZNTVRBdU1qVTNJREl4TGpZeE5UWmFJaUJtYVd4c1BTSmliR0ZqYXlJdlBnbzhjR0YwYUNCa1BTSk5NVEF1TmprNE5DQXlNeTQ1T1RrNVREUXVNemszTkRZZ01qRXVNemxNTlM0Mk9EQTROeUF4T0M0eU9UVTVUREV4TGprNE1UZ2dNakF1T1RBeU5Vd3hNQzQyT1RnMElESXpMams1T1RsYVRUVXVNemt5TXpVZ01qQXVPVGc0TjB3eE1DNHlPREEySURJekxqQXlORGxNTVRBdU9Ua3pOaUF5TVM0ek1ETTRURFl1TURreU1Ea2dNVGt1TWpZM05rdzFMak01TWpNMUlESXdMams0T0RkYVRURXdMakU1TnpjZ01qSXVOelU1Tmt3MUxqWXpOemMxSURJd0xqZzVNalpNTmk0eU1ERTFNaUF4T1M0MU16STVUREV3TGpjME1UVWdNakV1TkRFek1rd3hNQzR4T1RjM0lESXlMamMxT1RaYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOEwzTjJaejRLJyxcbiAgICBhZGFwdGVyOiAoKSA9PiBuZXcgT25lR2F0ZVdhbGxldEFkYXB0ZXIoY29uZmlnKSxcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b25lZ2F0ZS5qcy5tYXAiLCJleHBvcnQgdmFyIFdhbGxldE5hbWU7XG4oZnVuY3Rpb24gKFdhbGxldE5hbWUpIHtcbiAgICBXYWxsZXROYW1lW1wiTmVvTGluZVwiXSA9IFwiTmVvTGluZVwiO1xuICAgIFdhbGxldE5hbWVbXCJPM1wiXSA9IFwiTzNcIjtcbiAgICBXYWxsZXROYW1lW1wiV2FsbGV0Q29ubmVjdFwiXSA9IFwiV2FsbGV0Q29ubmVjdFwiO1xuICAgIFdhbGxldE5hbWVbXCJOZW9uXCJdID0gXCJOZW9uXCI7XG4gICAgV2FsbGV0TmFtZVtcIk9uZUdhdGVcIl0gPSBcIk9uZUdhdGVcIjtcbn0pKFdhbGxldE5hbWUgfHwgKFdhbGxldE5hbWUgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHlwZXMuanMubWFwIiwiaW1wb3J0IHsgV2FsbGV0Q29ubmVjdFdhbGxldEFkYXB0ZXIsIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXdhbGxldGNvbm5lY3QnO1xuaW1wb3J0IHsgV2FsbGV0TmFtZSB9IGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0IGNvbnN0IGdldFdhbGxldENvbm5lY3RXYWxsZXQgPSAoY29uZmlnKSA9PiAoe1xuICAgIG5hbWU6IFdhbGxldE5hbWUuV2FsbGV0Q29ubmVjdCxcbiAgICB1cmw6ICdodHRwczovL3dhbGxldGNvbm5lY3Qub3JnJyxcbiAgICBpY29uOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCb1pXbG5hSFE5SWpFNE5TSWdkbWxsZDBKdmVEMGlNQ0F3SURNd01DQXhPRFVpSUhkcFpIUm9QU0l6TURBaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BIQmhkR2dnWkQwaWJUWXhMalF6T0RVME1qa2dNell1TWpVMk1qWXhNbU0wT0M0NU1URXlNalF4TFRRM0xqZzRPREUyTmpNZ01USTRMakl4TVRrNE56RXRORGN1T0RnNE1UWTJNeUF4TnpjdU1USXpNakE1TVNBd2JEVXVPRGcyTlRRMUlEVXVOell6TkRFM05HTXlMalEwTlRVMk1TQXlMak01TkRRd09ERWdNaTQwTkRVMU5qRWdOaTR5TnpZMU1URXlJREFnT0M0Mk56QTVNakEwYkMweU1DNHhNelkyT1RVZ01Ua3VOekUxTlRBell5MHhMakl5TWpjNE1TQXhMakU1TnpJd05URXRNeTR5TURVeklERXVNVGszTWpBMU1TMDBMalF5T0RBNE1TQXdiQzA0TGpFd01EVTROQzAzTGprek1URTBOemxqTFRNMExqRXlNVFk1TWkwek15NDBNRGM1T0RFM0xUZzVMalEwTXpnNE5pMHpNeTQwTURjNU9ERTNMVEV5TXk0MU5qVTFOemc0SURCc0xUZ3VOamMxTURVMk1pQTRMalE1TXpZd05URmpMVEV1TWpJeU56Z3hOaUF4TGpFNU56SXdOREV0TXk0eU1EVXpNREVnTVM0eE9UY3lNRFF4TFRRdU5ESTRNRGd3TmlBd2JDMHlNQzR4TXpZMk9UUTVMVEU1TGpjeE5UVXdNekZqTFRJdU5EUTFOVFl4TWkweUxqTTVORFF3T1RJdE1pNDBORFUxTmpFeUxUWXVNamMyTlRFeU1pQXdMVGd1Tmpjd09USXdOSHB0TWpFNExqYzJOemM1TmpFZ05EQXVOemN6TnpRME9TQXhOeTQ1TWpFMk9UY2dNVGN1TlRRMk9EazNZekl1TkRRMU5UUTVJREl1TXprME16azJPU0F5TGpRME5UVTJNeUEyTGpJM05qUTNOamt1TURBd01ETXhJRGd1Tmpjd09EZzVPV3d0T0RBdU9ERXdNVGN4SURjNUxqRXlNVEV6TkdNdE1pNDBORFUxTkRRZ01pNHpPVFEwTWpZdE5pNDBNVEExT0RJZ01pNHpPVFEwTlRNdE9DNDROVFl4Tmk0d01EQXdOakl0TGpBd01EQXhMUzR3TURBd01TMHVNREF3TURJeUxTNHdNREF3TWpJdExqQXdNREF6TWkwdU1EQXdNRE15YkMwMU55NHpOVFF4TkRNdE5UWXVNVFUwTlRjeVl5MHVOakV4TXprdExqVTVPRFl3TWkweExqWXdNalkxTFM0MU9UZzJNREl0TWk0eU1UUXdOQ0F3TFM0d01EQXdNRFF1TURBd01EQTBMUzR3TURBd01EY3VNREF3TURBNExTNHdNREF3TVRFdU1EQXdNREV4YkMwMU55NHpOVEk1TWpFeUlEVTJMakUxTkRVek1XTXRNaTQwTkRVMU16WTRJREl1TXprME5ETXlMVFl1TkRFd05UYzFOU0F5TGpNNU5EUTNNaTA0TGpnMU5qRTJNVEl1TURBd01EZzNMUzR3TURBd01UUXpMUzR3TURBd01UUXRMakF3TURBeU9UWXRMakF3TURBeU9DMHVNREF3TURRME9TMHVNREF3TURRMGJDMDRNQzQ0TVRJME1UazBNeTAzT1M0eE1qSXhPRFZqTFRJdU5EUTFOVFl3TWpFdE1pNHpPVFEwTURndE1pNDBORFUxTmpBeU1TMDJMakkzTmpVeE1UVWdNQzA0TGpZM01Ea3hPVGRzTVRjdU9USXhOekk1TmpNdE1UY3VOVFEyT0RZM00yTXlMalEwTlRVMk1ESXRNaTR6T1RRME1EZ3lJRFl1TkRFd05UazRPUzB5TGpNNU5EUXdPRElnT0M0NE5UWXhOakF5SURCc05UY3VNelUwT1RjM05TQTFOaTR4TlRVek5UZGpMall4TVRNNU1EZ3VOVGs0TmpBeUlERXVOakF5TmpRNUxqVTVPRFl3TWlBeUxqSXhOREF6T1RnZ01DQXVNREF3TURBNU1pMHVNREF3TURBNUxqQXdNREF4TnpRdExqQXdNREF4Tnk0d01EQXdNalkxTFM0d01EQXdNalJzTlRjdU16VXlNVEF6TVMwMU5pNHhOVFV6TXpOak1pNDBORFUxTURVdE1pNHpPVFEwTmpNeklEWXVOREV3TlRRMExUSXVNemswTlRVek1TQTRMamcxTmpFMk1TMHVNREF3TWk0d01EQXdNelF1TURBd01ETXpOaTR3TURBd05qZ3VNREF3TURZM015NHdNREF4TURFdU1EQXdNVEF4YkRVM0xqTTFORGt3TWlBMU5pNHhOVFUwTXpKakxqWXhNVE01TGpVNU9EWXdNU0F4TGpZd01qWTFMalU1T0RZd01TQXlMakl4TkRBMElEQnNOVGN1TXpVek9UYzFMVFUyTGpFMU5ETXlORGxqTWk0ME5EVTFOakV0TWk0ek9UUTBNRGt5SURZdU5ERXdOVGs1TFRJdU16azBOREE1TWlBNExqZzFOakUySURCNklpQm1hV3hzUFNJak0ySTVPV1pqSWk4K1BDOXpkbWMrJyxcbiAgICBhZGFwdGVyOiAoKSA9PiBuZXcgV2FsbGV0Q29ubmVjdFdhbGxldEFkYXB0ZXIoY29uZmlnKSxcbn0pO1xuZXhwb3J0IGNvbnN0IGdldE5lb25XYWxsZXRDb25uZWN0V2FsbGV0ID0gKGNvbmZpZykgPT4gKHtcbiAgICBuYW1lOiBXYWxsZXROYW1lLk5lb24sXG4gICAgdXJsOiAnaHR0cHM6Ly9uZW9ud2FsbGV0LmNvbS8nLFxuICAgIGljb246ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NEtQSE4yWnlCM2FXUjBhRDBpTWpCd2VDSWdhR1ZwWjJoMFBTSXhPWEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNakFnTVRraUlIWmxjbk5wYjI0OUlqRXVNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JZ29nSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJajRLQ2lBZ1BHY2dhV1E5SWxONWJXSnZiSE1pSUhOMGNtOXJaVDBpYm05dVpTSWdjM1J5YjJ0bExYZHBaSFJvUFNJeElpQm1hV3hzUFNKdWIyNWxJaUJtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpUGdvZ0lDQWdQR2NnYVdROUlrZHliM1Z3TFRJaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLRE11TlRBd01EQXdMQ0F6TGpVd01EQXdNQ2tpUGdvZ0lDQWdJQ0E4Y0dGMGFBb2dJQ0FnSUNBZ0lHUTlJazB4TVM0MU5qVXlNelkyTEMweExqUTBNVEF5T1RNeklFd3hOQzR6T0RnNE5ERXlMREV1TkRnNE5UazVPRElnVERFeExqUTRORE0zTVRRc05DNDFNREl5T0RrM01TQk1NVEl1T1RNMk5qRXdOaXcyTGpBd09UQTJNRFV5SUV3MUxqYzNNemc0TWpZeExERXpMalEwTVRBek9USWdUQzB4TGpNNE9EZ3pNak1zTmk0d01Ea3dOelF3TnlCTU5TNDNOek00Tmpnek15d3RNUzQwTWpJNE56WXpJRXczTGpJd09EWXdOems0TERBdU1EWTFOek0yT1RNMU55Qk1PQzQyTmpBM05EZzFNU3d0TVM0ME5ERXdNVEF3T1NCTU1UQXVNVEV6TURVNUxEQXVNRFkxTnpVMk1UY3pNeUJNTVRFdU5UWTFNak0yTml3dE1TNDBOREV3TWprek15QmFJZ29nSUNBZ0lDQWdJR2xrUFNKUVlYUm9JaUJ6ZEhKdmEyVTlJaU0wUTBaRlFqRWlJSE4wY205clpTMTNhV1IwYUQwaU1pSStQQzl3WVhSb1Bnb2dJQ0FnSUNBOGNHOXNlV2R2YmlCcFpEMGlVR0YwYUMwMUlpQm1hV3hzUFNJak5FTkdSVUl4SWdvZ0lDQWdJQ0FnSUhCdmFXNTBjejBpTXk0ME1qRXdOVEkyTXlBMUxqWTBNVEk1TlRjeElEWXVNVFUzT0RrME56UWdPQzQwTnpBMU9EZ3lOQ0E0TGpnNU5EY3pOamcwSURVdU5qUXhNamsxTnpFZ055NDFNelEyTkRJek1TQTBMakl6TlRJNU5ERXlJRFl1TVRVM09EazBOelFnTlM0Mk5UZzBNelkyTkNBMExqYzRNVEl4T0RrMElEUXVNak0xTWprME1USWlQZ29nSUNBZ0lDQThMM0J2YkhsbmIyNCtDaUFnSUNBOEwyYytDaUFnUEM5blBnbzhMM04yWno0PScsXG4gICAgYWRhcHRlcjogKCkgPT4gbmV3IFdhbGxldENvbm5lY3RXYWxsZXRBZGFwdGVyKGNvbmZpZywgdHJ1ZSksXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldGNvbm5lY3QuanMubWFwIiwiIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNpdHlvZnppb24vbmVvbi1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2l0eW9memlvbi93YWxsZXQtY29ubmVjdC1zZGstY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVvbmdkL25lby1kYXBpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3YWxsZXRjb25uZWN0L3FyY29kZS1tb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudGVtaXR0ZXIzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5lbzMtZGFwaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsImdldE5lb0xpbmVXYWxsZXQiLCJnZXROZW9uV2FsbGV0Q29ubmVjdFdhbGxldCIsImdldE8zV2FsbGV0IiwiZ2V0T25lR2F0ZVdhbGxldCIsImdldFdhbGxldENvbm5lY3RXYWxsZXQiLCJ1c2VNZW1vIiwiV2FsbGV0UHJvdmlkZXIiLCJXYWxsZXRDb25uZWN0aW9uUHJvdmlkZXIiLCJtZW1vIiwiY2hpbGRyZW4iLCJ3YWxsZXRzIiwib3B0aW9ucyIsImNoYWlucyIsIm1ldGhvZHMiLCJhcHBNZXRhZGF0YSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInVybCIsImljb25zIiwibG9nZ2VyIiwicmVsYXlQcm92aWRlciIsIldhbGxldE1vZGFsUHJvdmlkZXIiLCJyZXF1aXJlIiwiX0FwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkV2ZW50RW1pdHRlciIsIldpdG5lc3NTY29wZSIsIkJhc2VXYWxsZXRBZGFwdGVyIiwiV2FsbGV0RXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIiwibWVzc2FnZSIsImVycm9yIiwiV2FsbGV0Tm90Rm91bmRFcnJvciIsImFyZ3VtZW50cyIsIldhbGxldE5vdEluc3RhbGxlZEVycm9yIiwiV2FsbGV0Tm90UmVhZHlFcnJvciIsIldhbGxldENvbm5lY3Rpb25FcnJvciIsIldhbGxldERpc2Nvbm5lY3RlZEVycm9yIiwiV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yIiwiV2FsbGV0QWNjb3VudEVycm9yIiwiV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IiLCJXYWxsZXRUaW1lb3V0RXJyb3IiLCJXYWxsZXRXaW5kb3dCbG9ja2VkRXJyb3IiLCJXYWxsZXRXaW5kb3dDbG9zZWRFcnJvciIsIldhbGxldE1ldGhvZE5vdFN1cHBvcnRlZEVycm9yIiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJ2YWx1ZSIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwicG9sbCIsImNhbGxiYWNrIiwiaW50ZXJ2YWwiLCJjb3VudCIsInNldFRpbWVvdXQiLCJwb2xsVW50aWxSZWFkeSIsImFkYXB0ZXIiLCJwb2xsSW50ZXJ2YWwiLCJwb2xsQ291bnQiLCJyZWFkeSIsImVtaXQiLCJjb25zb2xlIiwid2FybiIsInJwYyIsIndhaXRUeCIsInJwY0FkZHJlc3MiLCJ0eElkIiwicmVhZEZyZXF1ZW5jeSIsInRpbWVvdXQiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJycGNDbGllbnQiLCJSUENDbGllbnQiLCJ0cmFuc2FjdGlvbiIsImdldFJhd1RyYW5zYWN0aW9uIiwiTmVvTGluZUluaXQiLCJOZW9MaW5lTjNJbml0IiwiREVGQVVMVF9XQUxMRVRfQ09ORklHIiwiTmVvTGluZVdhbGxldEFkYXB0ZXIiLCJjb25maWciLCJfYWRkcmVzcyIsIl9jb25uZWN0aW5nIiwiX29wdGlvbnMiLCJhZGRyZXNzIiwid2luZG93IiwiTkVPTGluZU4zIiwiY29ubmVjdGluZyIsImNvbm5lY3RlZCIsImNvbm5lY3QiLCJfY2xpZW50IiwiX2NsaWVudENvbW1vbiIsImFjY291bnQiLCJnZXRBY2NvdW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9kaXNjb25uZWN0ZWQiLCJkaXNjb25uZWN0IiwiY2xpZW50IiwidW5kZWZpbmVkIiwiaW52b2tlUmVhZCIsInJlcXVlc3QiLCJyZXNwb25zZSIsInNjcmlwdEhhc2giLCJvcGVyYXRpb24iLCJhcmdzIiwic2lnbmVycyIsIl9yZXNwb25zZVRvUmVhZFJlc3VsdCIsImludm9rZVJlYWRNdWx0aSIsImludm9rZVJlYWRBcmdzIiwiaW52b2NhdGlvbnMiLCJpbnZva2UiLCJmZWUiLCJleHRyYVN5c3RlbUZlZSIsImJyb2FkY2FzdE92ZXJyaWRlIiwiX3Jlc3BvbnNlVG9Xcml0ZVJlc3VsdCIsImludm9rZU11bHRpIiwiaW52b2tlTXVsdGlwbGUiLCJpbnZva2VBcmdzIiwiZ2V0TmV0d29ya3MiLCJjbGllbnRDb21tb24iLCJfcmVzcG9uc2VUb0dldE5ldHdvcmtzUmVzdWx0Iiwic2lnbk1lc3NhZ2UiLCJfcmVzcG9uc2VUb1NpZ25NZXNzYWdlUmVzdWx0Iiwic3RhdGUiLCJzdGF0dXMiLCJkYXRhIiwic2NyaXB0IiwiZ2FzQ29uc3VtZWQiLCJnYXNfY29uc3VtZWQiLCJleGNlcHRpb24iLCJzdGFjayIsImNvZGUiLCJ0eGlkIiwibmV0d29ya3MiLCJkZWZhdWx0TmV0d29yayIsInB1YmxpY0tleSIsInNhbHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTmVvTGluZVNjb3BlIiwiTmVvTGluZUNoYWluSWQiLCJJbml0IiwiTkVPTGluZSIsIm5lbzNEYXBpIiwiTzNXYWxsZXRBZGFwdGVyIiwiQ29uc3RhbnRzIiwiRXZlbnROYW1lIiwiRElTQ09OTkVDVEVEIiwiTmVvRGFwaSIsIk9uZUdhdGVXYWxsZXRBZGFwdGVyIiwiT25lR2F0ZSIsIl9hIiwiX29uZUdhdGVQcm92aWRlciIsIl9vbmVHYXRlRGFwaSIsIm9uIiwiZXh0cmFOZXR3b3JrRmVlIiwicHJvdmlkZXIiLCJyZW1vdmVMaXN0ZW5lciIsIldhbGxldEJ1dHRvbiIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwiZW5kSWNvbiIsInN0YXJ0SWNvbiIsInN0eWxlIiwidGFiSW5kZXgiLCJvbkNsaWNrIiwianVzdGlmeUNvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidHlwZSIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsIldhbGxldENvbGxhcHNlIiwiaWQiLCJleHBhbmRlZCIsInJlZiIsImluc3RhbnQiLCJ0cmFuc2l0aW9uIiwib3BlbkNvbGxhcHNlIiwibm9kZSIsImN1cnJlbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbG9zZUNvbGxhcHNlIiwib2Zmc2V0SGVpZ2h0Iiwib3ZlcmZsb3ciLCJoYW5kbGVDb21wbGV0ZSIsImhhbmRsZVRyYW5zaXRpb25FbmQiLCJldmVudCIsInRhcmdldCIsInByb3BlcnR5TmFtZSIsInJvbGUiLCJfX3Jlc3QiLCJzIiwidCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiaSIsImxlbmd0aCIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidXNlV2FsbGV0IiwidXNlQ2FsbGJhY2siLCJXYWxsZXRJY29uIiwiV2FsbGV0Q29ubmVjdEJ1dHRvbiIsInByb3BzIiwid2FsbGV0IiwiaGFuZGxlQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwiY2F0Y2giLCJjb250ZW50IiwiV2FsbGV0RGlzY29ubmVjdEJ1dHRvbiIsImRpc2Nvbm5lY3RpbmciLCJzcmMiLCJpY29uIiwiYWx0IiwiV2FsbGV0TGlzdEl0ZW0iLCJ1c2VXYWxsZXRNb2RhbCIsIldhbGxldE1vZGFsQnV0dG9uIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsIldhbGxldE1vZGFsQ29udGV4dCIsIldhbGxldE1vZGFsIiwiUHJvdmlkZXIiLCJjcmVhdGVQb3J0YWwiLCJsb2dvIiwiZmVhdHVyZWRXYWxsZXRzIiwiY29udGFpbmVyIiwic2VsZWN0Iiwic2V0RXhwYW5kZWQiLCJmYWRlSW4iLCJzZXRGYWRlSW4iLCJwb3J0YWwiLCJzZXRQb3J0YWwiLCJmZWF0dXJlZCIsIm1vcmUiLCJzbGljZSIsImhpZGVNb2RhbCIsImhhbmRsZUNsb3NlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVXYWxsZXRDbGljayIsIndhbGxldE5hbWUiLCJoYW5kbGVDb2xsYXBzZUNsaWNrIiwiaGFuZGxlVGFiS2V5IiwiZm9jdXNhYmxlRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmlyc3RFbGVtZW50IiwibGFzdEVsZW1lbnQiLCJzaGlmdEtleSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImZvY3VzIiwiaGFuZGxlS2V5RG93biIsImtleSIsImdldENvbXB1dGVkU3R5bGUiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsIndpZHRoIiwiZCIsIm1hcCIsIkZyYWdtZW50IiwieG1sbnMiLCJvbk1vdXNlRG93biIsInVzZUVmZmVjdCIsIldhbGxldE11bHRpQnV0dG9uIiwiY29waWVkIiwic2V0Q29waWVkIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiY29weUFkZHJlc3MiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJvcGVuRHJvcGRvd24iLCJjbG9zZURyb3Bkb3duIiwib3Blbk1vZGFsIiwibGlzdGVuZXIiLCJjb250YWlucyIsInBvaW50ZXJFdmVudHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIldhbGxldE5vdFNlbGVjdGVkRXJyb3IiLCJXYWxsZXRDb250ZXh0IiwiV0FMTEVUX0lOSVRJQUxfU1RBVEUiLCJhdXRvQ29ubmVjdCIsIm9uRXJyb3IiLCJfb25FcnJvciIsInNldE5hbWUiLCJzZXRTdGF0ZSIsInNldENvbm5lY3RpbmciLCJzZXREaXNjb25uZWN0aW5nIiwiaXNDb25uZWN0aW5nIiwiaXNEaXNjb25uZWN0aW5nIiwiaXNVbmxvYWRpbmciLCJ3YWxsZXRzQnlOYW1lIiwicmVkdWNlIiwibmV3TmFtZSIsIm9uUmVhZHkiLCJvbkNvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiLCJvcGVuIiwib2ZmIiwiV2NTZGsiLCJRUkNvZGVNb2RhbCIsIldhbGxldENvbm5lY3RXYWxsZXRBZGFwdGVyIiwibmVvbldhbGxldCIsIl93YWxsZXRDb25uZWN0Q2hhaW5zIiwiX2xvZ2dlciIsIl9yZWxheVByb3ZpZGVyIiwiX25lb25XYWxsZXQiLCJ3YWxsZXRDb25uZWN0SW5zdGFuY2UiLCJpbml0Q2xpZW50IiwibmVvbldhbGxldENvbm5lY3RXaW5kb3ciLCJzdWJzY3JpYmVUb0V2ZW50cyIsIm9uUHJvcG9zYWwiLCJ1cmkiLCJvbkRlbGV0ZWQiLCJsb2FkU2Vzc2lvbiIsInNlc3Npb24iLCJjbG9zZSIsImFjY291bnRBZGRyZXNzIiwiX3dhbGxldENvbm5lY3RJbnN0YW5jZSIsInRlc3RJbnZva2UiLCJhYm9ydE9uRmFpbCIsImludm9rZUZ1bmN0aW9uIiwiY2hhaW5JZCIsIl9iIiwibWVzc2FnZUhleCIsIldhbGxldE5hbWUiLCJOZW9MaW5lIiwiTzMiLCJXYWxsZXRDb25uZWN0IiwiTmVvbiJdLCJzb3VyY2VSb290IjoiIn0=