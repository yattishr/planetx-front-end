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
var _jsxFileName = "C:\\Users\\Sebatane Raphela\\Music\\web3\\neo-blockchain-betx\\components\\wallet-connection-provider.tsx";





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
var _jsxFileName = "C:\\Users\\Sebatane Raphela\\Music\\web3\\neo-blockchain-betx\\pages\\_app.tsx";

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
  icon: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAMCAggICAgICAgICAgICAgICAgICAgICAgICAgIBwgICAgIBwgICAgIBwgIBwoICAgICQkJCAcLDQoIDQgICQgBAwQEBgUGCgYGChANCg0OEA0NDw4ODQ4NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDf/AABEIAIAAgAMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAQFBgcBAwj/xABEEAACAAQCBQgGBwUJAQAAAAABAgADBBESIQUGBzFhEyIyQVFxcqEIUoGRsdEVIyQlQnOzFJLBwtMzQ2KCorLD0uE1/8QAHAEAAgIDAQEAAAAAAAAAAAAAAAIDBAEFBgcI/8QAPxEAAgECAgYFCgQEBwEAAAAAAAECAxEEIQUGEjFBcTJhgZGxExQiM0JRUqHB8HKywtEjJCWCFjQ1YpLS8Qf/2gAMAwEAAhEDEQA/ANNcb46c+LGmeZB7YyI0Ab8YBGmCSYBWmCbwCNMAg9pjIjuCbxkV3AJPbAI0zhMAjTBMZEaYBB7TAI7gm/GAXMA3gFYJv2wCNME+2Miu5xQbwC53LO6ZmITrWgCsZEsCVgE2QDLjIrQJlwCbIBWARxBKwCuIJSMiOIBSM3EsAUgFcThWMiOIJWARxBKQCOIBSAWwBSAWwlTMQCpZlpmLmYhOuccwCkBG0AUjIrQJSAWwBWMiNAlYyK0AUgEaDkUDN0VJ49Xv3Rhuw0KM59FHvO0FMAva/hNz7vlGNpEk8HUjna/Ij3l2yOXAwxRcbZMApGRGgSkZuLYArAI4glYyI4glYBHE4qZiAwlmWp0zMQnXNZnkywCNADPdn3RkjtfccKxgVoSSCcgCTwzguYUHJ2SuPZGrznpEKPeYXbRchgZS6WRI0+hEXqxHtbPy3Qrk2XYYOnDhfmPAsYLNjloBbHjPpFbpAGM3IZ0oz6SIup1bU9EleBzHz+MMpGuqYCL6LsRVToWYv4bjtXPy3+UPtI1tTCVIcL8hgyQxScQDLjNxGgSkZuK0cVc4BdnMtLpmYgOvccy07KtDS5+kaWVOQPLZnLI25sEp3UEdYxKCRuO6Ia0nGDaN9q9haeJ0jRpVo7UG3dPc7RbV+1bi2ekXqrT002laRKSTysubjWWoRDyZTCcIsAbMQSBnlEOFnKSd2dFrto/D4StRlh4KG0pXUVZejs2yWV8zPqHQilQxubi9twi05HF0cJBxUpZ3JGXIC5AADhCF5QUVZIJZRJAAJJNgALkk7gAMyYAUW3ZK7e5cWe1foqbKIE2VMlFswJiMhI4YgLwqae5ktbDVaLSqwlFvdtJq/K40KQxWsAUjItgSsZFscIgEsManS0tcr4j2Ln/5DJMpzxFOGV7vqI2vWZMUtyaqAL3bp2EMrIoVlUqxcnBJL37yEKxIajZBKwCOJxUzHfAY2cy0zEiE65ouexZfvSk75v6EyIMR6t/fE6bVdf1Whzl+SRc/SiH1lD4Kj4yYr4PdLsOn1+V6mH5T/QZzQLzE8Ii2ziKUfQjyPYrGB7Fu2TaQlSa5HnFVUoyozblmG1iSejcXW/GIK6bhZHS6uVqVDHRnWaSs0m9yk/DK67TQtt+mqdqUSsaPNLq0sKQxWx5zG24Fbrxvwyq4eL2r8Ds9a8Vh5YXyW0nNtONmm1be+pWy6zCSsbI8isNqmsROkwHDefdGUrlepUhDpMZGvd/7OWbes2Q90Na28q+WnP1ce1gfQ7N/aOT/AIVyWDatuF81lP1sr9S3DuRQqnRUD4xi9yxCjCHRR56QX6t/CYyt5HXX8OXIqWGJjmNkApGRbHFTOAXZLS65mITrmi47GV+9KTvm/oTIgxHq398TpdWV/VKP935JFz9J4fWUXgqPjKivg90uw6XXxXqYflP9JndCnMXwiLT3nFUl6C5HqVgJLD3QWhjUTpUkELyjhcRF7DrNus23DthZS2U2WcJhXiq8KKdtp2v7iwbRdnK0BlFJhmJNxDnABgy2vuyIIb2cYhpVdu5uNN6EWjXBwltRlffvTVvk7lc0PqlPrGMqnW7WzcmySwetm6uAAJPUIllUUM5Gjw2jcRj5Ojh1nxbyUetv7bNJ0P6M0hVHK1DvMtmUUKA3DEWuPYD3RVli29yO5w2olCEV5ao3LjZJK/bf6DDWbYTOlKXp5gngZmWVwTLf4ecVc/unsBhoYlPKWRTx+qNajFzw8ttL2bWl2ZtP5GYMlsiCCMiDkQRvBHURFw4FxayZIavaszquZyUhcTb2JyVF3YnPUPM9QMJKagrsuYLAVsbU8lQjd8fcl72/vqNUofRylFLVFRMJYWIkgIBwDOHJ78I7opvFu/oo9Bo6kUpQtiKsm2s9hJJdrvfnZELp70VUwk0tU4cblqFDK3DGgUr34G7okjjX7S7jVYz/AOeU9lvCVntcFNJp9V42t3MwzWTVifSTmkVCGXMGdt6svUyMMmU9o3G4NiCI2MJqavE8kx+j6+ArOhiY7Ml3Ne9PivveRirnDmutmWl0iA61xLhscT7zpe+b+hMiCv6t/fE6TVpf1Oj/AHfkkXD0mh9ZReCo+MqIMJufYdJryv4mH5T/AEGe0I5i9wi095xtJeguR7FYwM0WDZ2v26m/M/lMR1egzcaFX89R/F9GXr0guhS+Kb8JcVsLxOt1x6FHnL9JZtXKeVozR3KuLYZXLziOkzkXw99yJa+zjEM26k7LkjeYKFLRGjvKzW6O3P3uTW79KMe0ntTrag8pyzSVYXWXKOEKD1YrXY9pPX2bovxowjla55rX0/jsS/KbbgnmoxyS7d75sveyradNmzRTVLYywPJTbAMSouUe2RuouG33Fje4itWopLaidbq/p6rWqrC4l3b6MuN1wfZufeQG3TVtZM9J6CwqA2IDdyiYc/8AOGHtBPXEmHm2rPgabW3AxoV414L1l7r/AHK2fbddqZpGq+ipWjKHHMFiE5We34mcjojtsSJaj5mKk5OrPLsO4wGHpaIwG3UyaW1N8XL3fpSMT1w2p1s/GwnPISxwJJYphHVdxZmPaSbcBGxp0YR4XPK9J6wY3EqUo1HCPBQdrc2s2yB1Q251tG4Myc1TJvz5c5sTW6ykw3cMBuBJXhElTDQmslZmn0brZjsBNeUqOpT9qM3d242k80/l1G5bVdXJOlNG8vKszpL/AGmncDMrhxMnbZ0yK+sF7I11GbpTs+TPWNYsDR0zozy9HOSj5Sm+NrXa7Vw99vcfJiLujdnzikWp0iE69ot2x5fvOl75v6MyIK/q398TotXF/UqP935JFw9JVefR+Cf8ZUQYTc+w6LXdXnQ5T/SZ/QpzF8Iiy95x1JeguR6FIB7Fg2er9upvzP5TEVXoM2+hl/PUvxfRl52/Dm0vjmf8cV8NxOq1vXo0ecv0kztp/wDk1HglfqS4jw/rEbPWj/SavKP5omAUa8xPCvwjZveePU16EeSLPs7T7dTfmfymIavQZvdCr+eo/i+jNG27kBKQncKi57srxUw3HkdtrbbYoN/H+xNbZZLNQTMOYDS2bwhx8DY+yI6HTRs9Zoylo+ezwcW+V0fN2kl+rfwn4RtlvPD66/hy5Gu6m65aCSkkJMWQkxZaiYsyRifGBZyW5NsV2ub3N79W6KNSnWcnbxPSNGaT0DDCU4VFBSUUpKULvatnd7Lvd53uWOo20aJkyWEqahCqQkmXLZb5ZKowBRc9wERLD1G80buetGiaFBqlNNJZRjFq/Usklc+UJUu1o3R86xjuLW6RCdg4kjqxpo0tRJqAL8k4JHWUPNcDiUJAhZx2otFvA4l4TEQrr2Xd8tz+Vz6H111Qk6VppbJMAIGORNAuBiAurDI4WsAwyIIHZaNVTqOlLPtPYdJ6Oo6Zw0ZQlnvhLfv3p9T48U11WM+p9ilaqhcUg2Fr42z/ANEWniInHx1YxkYpXhl1v9gzsZrO2T++3/SMecRM/wCGcZ/t73+xb9n+y000zl57K0wAhFS+FLixYkgEsRluAAvv6oKtbaVkdHofQLwlTy9ZpzXRS3K+934spe2HWNZ89UQ3SnDDENxmMRjt2gYVXvBixQg4q74nMayY2OJrqnDONO6v75O1+6yXeXnbQPumo8Mn9SXFbD+sR1Ws/wDpNTlH80TA6McxPCvwjZveeR016EeSLPs9X7dTfmfwMQ1egzeaGX89S/F9GaDt8S8mn/Mb/bFXDb2dhrfG9Gl+J+BK7NNbJdXT/s82xmonJujf3ku2ENnvuuTdYOfWIStBwltLcbDQWkaeOw3m9XOcVstP2o7r9eWT6+ZTNbthE67/ALIyMjA2SYSrJf8ADisQwHaSDbt3mxDEr2jmNI6pVry80knF7lJ2a6r8V1uzIzVD0bJhcPWuglgg8lKJLPb8LPYBVPXhuSOsb4eeLVrQKOjdR6jqKeOktlezFtt9TfBe+13yK/t21Vo6WfJSkVUYo5nS1YkLmvJkgk4SwLZdgBtncyYacpJuXYaXW7R2CwdenDCJRbT24pt23bL42bz7kZmq5xcOD2cy0ukQnXtAFILibJN6s671VHfkJlkJuZbDFLJ7cJ3HtKkEwk6cZ7zZ4LSeJwPqZZcYvOL7OHZY0Cn20VhUHBIuRfov/Uiq8PHrOtjrLi3FPZh3P/sGdstX6kj91/6kY8hEz/iTF/DDuf7kZpvaXVz1wF1lqRZhKBXEOLElh7CIkjRjEo4rTeLxEdhyUVx2cr9ub+ZUjLiY52xOa1a/1M+kNPMKFLKGYKQ74SCMRvbeATYC9ojhSjGW0jaY/S+IxOFeHqW2bK7tm7br8O5FCp9JsoAyIGVuHfFho5GFeUcnmiW0VrEEmJMQlHRgyk7rjt4dR4QkoXVmbDD43yc41IO0k7osWtWu86twcpgwpfCJYIW5tcm7Ek5W3xFCmobjc6Q0pWx+z5W1luUd2fHeyDkT2Rg6MUZTdWUkMDwIiTfkaqEpQkpwdmtzWTRc5G2uslIcQlTcINi6kN7cBAPuiB4eLfuOlhrRjaMHtKM7Le1Z/K3gQGmdv2kJq4U5KRfe0tSX42LlgO8AEdsSxwsF1mnxWt+kK0dmGzDris+93t3GbVDlmLMWZmN2ZiWZid5JOZJ7TFrccPNynJyk22823m2+tnmJecZI7FpdIhOuaAKwCbIJSARxJejq1wgXsQLZwjRsKdSNkh3hhSxY4RGRbHLRm4lhrpFeY3dGUQVl6DK2UiU0dgSkAtjsuaV3EiAwm47mPJWmD+IX4jI/L4QuyWY4hrpIcT65GRgDY2ORjFmiWdWE4Oz4FfKRKaewJWMiWOKmcYMbJanWITrXEApGRGgCkAtgCsArQcqey7iR8PdBYypSjuY7laX9Ye0fKF2SeOI+JDuVWI25hfsvn7oWzRPGpCW5g1i3VgASbbgLnyjKFqq8WkMaXVKqmdCmntxEpre+1odzit7RTho7FVOhSm/7XbvJen2R6RbdTEDtZ5a+Re/lETrwXEvw1d0hPdStzcV9bkvTbAK5rYmkIOu7sSPYqkecI8TDrNhDVHHS6Tgl1t3+SJql9G5z06tRwSST5mavwiN4tcF8zZw1Kk+nXXZC/wA3JeBM0vo40o6c6e/cUQH2YWPnCPFy4JGxp6l4VdOpN8rJeD8SbpdhejV3yWcjrabM+Cso8oieJqe82cNVNGx302+cpfRoaae2B0M1TySvTv1MjMwvxR2II4AqeIho4ma35lfF6o4GtF+STpy4NNtdqb3crczAtadU5tHPMicOcM1YdF0JydeBtYjeDcRs4TU1dHkOkNHVcBXdGss96fCS4NfeRKpTFmwqCzE5AC5PsEJe2836g5O0VdktT6iVTEASsN+tmUAd+d/Za8RurFcS7HRuIk7bNubRLU+yWeelOp0He7H3BLecJ5ePuZdhoKrLpTgv+Tfh9SWp9jMv8daO5ZJ+JmfwiN4h8F8y7HV6l7dfui/G/wBCVpdj9AOlPnNwuFHuwE+cI8RPgkX4aBwC6VST+S8PqS9Ns30Uv93iPazzT5YgPKI3Wqe82ENE6Lj7N+bl/wCExS6v6OSxWRIBHXyQJ95UnzhHOb4s2EMNo6HRpw/4597RNStKSVFlKgdgFv4RHZmyjiaEVaLS7A/puV63kflBssbzul8XiL6blet5H5QbLDzul8Xid+m5XreR+UGyw87pfF4nPpuV63kflBssPO6XxeIvpuV63kflBssPO6XxC+m5XreR+UGyw88o/EL6blet5H5QbLDzyl8RmXpBUSTKWTOFi0ucEDD1ZinEPeqn2Rcwrak0cPrfSp1cLTrRs3Gdr9Ulmvkhrs/0WqyeVtz5hbndYVWK4R2C4vx9ggqu7sR6OoxhT2+L8E9xaIhNsKAwKABQAKABQAKABQAKABQAKABQAKABQAQWvOjBNpJyk2wLyw8UsYvMXX2xJTlsyXcazSdHy2FnF8FtLnHP912npqWv2WV/n/UaCp0mT4JfwY9viyatEZdFaABWgAVoAFaABWgAVoAFaABWgAVoAFaABWgAVoAFaABhrCPs1R+RN/2mGh0lzKuL/wAvU/BLwP/Z',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxFQUFFOFUsbURBRDZDO0FBRW5ENVUsRUFBQUEsR0FBRyxFQUFFLHlCQUY4QztBQUduRHlOLEVBQUFBLElBQUksRUFBRSx3dENBSDZDO0FBSW5EbEssRUFBQUEsT0FBTyxFQUFFLE1BQU0sSUFBSTZQLHVHQUFKLENBQStCck8sTUFBL0IsRUFBdUMsSUFBdkM7QUFKb0MsQ0FBYixDQUFuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBR1JQOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vY29tcG9uZW50cy93YWxsZXQtY29ubmVjdGlvbi1wcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9hZGFwdGVyLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvZXJyb3JzLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9wb2xsLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvd2FpdC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5lb2xpbmUvbGliL2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5lb2xpbmUvbGliL3V0aWxzL25lb2xpbmUuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1vMy9saWIvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW8zL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW9uZWdhdGUvbGliL2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1vbmVnYXRlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1jb25uZWN0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1kaXNjb25uZWN0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1pY29uLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LWxpc3QtaXRlbS5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1tb2RhbC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtbW9kYWwtcHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtbXVsdGktYnV0dG9uLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2hvb2tzL2luZGV4LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2hvb2tzL3VzZS13YWxsZXQtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC9saWIvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9jb21wb25lbnRzL3dhbGxldC1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9ob29rcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9ob29rcy91c2Utd2FsbGV0LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QvbGliL2luZGV4LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QvbGliL3V0aWxzL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXdhbGxldGNvbm5lY3QvbGliL2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci13YWxsZXRjb25uZWN0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXdhbGxldHMvbGliL2luZGV4LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItd2FsbGV0cy9saWIvbmVvbGluZS5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXdhbGxldHMvbGliL28zLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItd2FsbGV0cy9saWIvb25lZ2F0ZS5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXdhbGxldHMvbGliL3R5cGVzLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItd2FsbGV0cy9saWIvd2FsbGV0Y29ubmVjdC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcIkBjaXR5b2Z6aW9uL3dhbGxldC1jb25uZWN0LXNkay1jb3JlXCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwiQG5lb25nZC9uZW8tZGFwaVwiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcIkB3YWxsZXRjb25uZWN0L3FyY29kZS1tb2RhbFwiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcImV2ZW50ZW1pdHRlcjNcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZW8zLWRhcGlcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcblx0Z2V0TmVvTGluZVdhbGxldCxcclxuXHRnZXROZW9uV2FsbGV0Q29ubmVjdFdhbGxldCxcclxuXHRnZXRPM1dhbGxldCxcclxuXHRnZXRPbmVHYXRlV2FsbGV0LFxyXG5cdGdldFdhbGxldENvbm5lY3RXYWxsZXQsXHJcbn0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXdhbGxldHMnO1xyXG5pbXBvcnQgeyBSZWFjdE5vZGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFdhbGxldFByb3ZpZGVyIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBXYWxsZXRDb25uZWN0aW9uUHJvdmlkZXIgPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldENvbm5lY3Rpb25Qcm92aWRlcih7XHJcblx0Y2hpbGRyZW4sXHJcbn06IHtcclxuXHRjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59KSB7XHJcblx0Ly8gQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXdhbGxldHMgaW5jbHVkZXMgYWxsIHRoZSBhZGFwdGVycyBidXQgc3VwcG9ydHMgdHJlZSBzaGFraW5nIC0tXHJcblx0Ly8gT25seSB0aGUgd2FsbGV0cyB5b3UgY29uZmlndXJlIGhlcmUgd2lsbCBiZSBjb21waWxlZCBpbnRvIHlvdXIgYXBwbGljYXRpb25cclxuXHRjb25zdCB3YWxsZXRzID0gdXNlTWVtbyhcclxuXHRcdCgpID0+IFtcclxuXHRcdFx0Z2V0TmVvTGluZVdhbGxldCgpLFxyXG5cdFx0XHRnZXRPM1dhbGxldCgpLFxyXG5cdFx0XHRnZXRXYWxsZXRDb25uZWN0V2FsbGV0KHtcclxuXHRcdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0XHRjaGFpbnM6IFsnbmVvMzp0ZXN0bmV0J10sIC8vIFsnbmVvMzptYWlubmV0JywgJ25lbzM6dGVzdG5ldCcsICduZW8zOnByaXZhdGUnXVxyXG5cdFx0XHRcdFx0bWV0aG9kczogWydpbnZva2VGdW5jdGlvbiddLCAvLyBbJ2ludm9rZUZ1bmN0aW9uJyxhbnkgb3RoZXIgbWV0aG9kIG5hbWUgcHJlc2VudCBvbiB0aGUgUnBjU2VydmVyIGVnLiBnZXR2ZXJzaW9uXVxyXG5cdFx0XHRcdFx0YXBwTWV0YWRhdGE6IHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ0V4YW1wbGUnLFxyXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ0V4YW1wbGUgZGVzY3JpcHRpb24nLFxyXG5cdFx0XHRcdFx0XHR1cmw6ICdodHRwczovL25lb25vdmEuc3BhY2UnLFxyXG5cdFx0XHRcdFx0XHRpY29uczogWydodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcmVudGZ1c2UtbGFicy9uZW9ub3ZhL21haW4vbmVvbm92YS1pY29uLnBuZyddLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGxvZ2dlcjogJ2RlYnVnJyxcclxuXHRcdFx0XHRyZWxheVByb3ZpZGVyOiAnd3NzOi8vcmVsYXkud2FsbGV0Y29ubmVjdC5vcmcnLFxyXG5cdFx0XHR9KSxcclxuXHRcdFx0Z2V0TmVvbldhbGxldENvbm5lY3RXYWxsZXQoe1xyXG5cdFx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRcdGNoYWluczogWyduZW8zOnRlc3RuZXQnXSwgLy8gWyduZW8zOm1haW5uZXQnLCAnbmVvMzp0ZXN0bmV0JywgJ25lbzM6cHJpdmF0ZSddXHJcblx0XHRcdFx0XHRtZXRob2RzOiBbJ2ludm9rZUZ1bmN0aW9uJ10sIC8vIFsnaW52b2tlRnVuY3Rpb24nLGFueSBvdGhlciBtZXRob2QgbmFtZSBwcmVzZW50IG9uIHRoZSBScGNTZXJ2ZXIgZWcuIGdldHZlcnNpb25dXHJcblx0XHRcdFx0XHRhcHBNZXRhZGF0YToge1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAnRXhhbXBsZScsXHJcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiAnRXhhbXBsZSBkZXNjcmlwdGlvbicsXHJcblx0XHRcdFx0XHRcdHVybDogJ2h0dHBzOi8vbmVvbm92YS5zcGFjZScsXHJcblx0XHRcdFx0XHRcdGljb25zOiBbJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9yZW50ZnVzZS1sYWJzL25lb25vdmEvbWFpbi9uZW9ub3ZhLWljb24ucG5nJ10sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bG9nZ2VyOiAnZGVidWcnLFxyXG5cdFx0XHRcdHJlbGF5UHJvdmlkZXI6ICd3c3M6Ly9yZWxheS53YWxsZXRjb25uZWN0Lm9yZycsXHJcblx0XHRcdH0pLFxyXG5cdFx0XHRnZXRPbmVHYXRlV2FsbGV0KCksXHJcblx0XHRdLFxyXG5cdFx0W10sXHJcblx0KTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxXYWxsZXRQcm92aWRlciB3YWxsZXRzPXt3YWxsZXRzfSBhdXRvQ29ubmVjdD17dHJ1ZX0+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvV2FsbGV0UHJvdmlkZXI+XHJcblx0KTtcclxufSk7XHJcbiIsImltcG9ydCB7IFdhbGxldE1vZGFsUHJvdmlkZXIgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWknO1xyXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdGlvblByb3ZpZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy93YWxsZXQtY29ubmVjdGlvbi1wcm92aWRlcic7XHJcblxyXG4vLyBVc2UgcmVxdWlyZSBpbnN0ZWFkIG9mIGltcG9ydCwgYW5kIG9yZGVyIG1hdHRlcnNcclxucmVxdWlyZSgnLi4vc3R5bGVzL2dsb2JhbC5jc3MnKTtcclxucmVxdWlyZSgnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL3N0eWxlcy5jc3MnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9BcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8V2FsbGV0Q29ubmVjdGlvblByb3ZpZGVyPlxyXG5cdFx0XHQ8V2FsbGV0TW9kYWxQcm92aWRlcj5cclxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcblx0XHRcdDwvV2FsbGV0TW9kYWxQcm92aWRlcj5cclxuXHRcdDwvV2FsbGV0Q29ubmVjdGlvblByb3ZpZGVyPlxyXG5cdCk7XHJcbn1cclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbmV4cG9ydCB7IEV2ZW50RW1pdHRlciB9O1xuZXhwb3J0IHZhciBXaXRuZXNzU2NvcGU7XG4oZnVuY3Rpb24gKFdpdG5lc3NTY29wZSkge1xuICAgIFdpdG5lc3NTY29wZVtXaXRuZXNzU2NvcGVbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcbiAgICBXaXRuZXNzU2NvcGVbV2l0bmVzc1Njb3BlW1wiQ2FsbGVkQnlFbnRyeVwiXSA9IDFdID0gXCJDYWxsZWRCeUVudHJ5XCI7XG4gICAgV2l0bmVzc1Njb3BlW1dpdG5lc3NTY29wZVtcIkN1c3RvbUNvbnRyYWN0c1wiXSA9IDE2XSA9IFwiQ3VzdG9tQ29udHJhY3RzXCI7XG4gICAgV2l0bmVzc1Njb3BlW1dpdG5lc3NTY29wZVtcIkN1c3RvbUdyb3Vwc1wiXSA9IDMyXSA9IFwiQ3VzdG9tR3JvdXBzXCI7XG4gICAgV2l0bmVzc1Njb3BlW1dpdG5lc3NTY29wZVtcIkdsb2JhbFwiXSA9IDEyOF0gPSBcIkdsb2JhbFwiO1xufSkoV2l0bmVzc1Njb3BlIHx8IChXaXRuZXNzU2NvcGUgPSB7fSkpO1xuZXhwb3J0IGNsYXNzIEJhc2VXYWxsZXRBZGFwdGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkYXB0ZXIuanMubWFwIiwiZXhwb3J0IGNsYXNzIFdhbGxldEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90Rm91bmRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE5vdEZvdW5kRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RJbnN0YWxsZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE5vdEluc3RhbGxlZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90UmVhZHlFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE5vdFJlYWR5RXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRDb25uZWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRDb25uZWN0aW9uRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXREaXNjb25uZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldERpc2Nvbm5lY3RlZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0QWNjb3VudEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0QWNjb3VudEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXROb3RDb25uZWN0ZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldFRpbWVvdXRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldFRpbWVvdXRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldFdpbmRvd0Jsb2NrZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldFdpbmRvd0Jsb2NrZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldFdpbmRvd0Nsb3NlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0V2luZG93Q2xvc2VkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRNZXRob2ROb3RTdXBwb3J0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE1ldGhvZE5vdFN1cHBvcnRlZEVycm9yJztcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcnJvcnMuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9hZGFwdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXJyb3JzJztcbmV4cG9ydCAqIGZyb20gJy4vcG9sbCc7XG5leHBvcnQgKiBmcm9tICcuL3dhaXQnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5leHBvcnQgZnVuY3Rpb24gcG9sbChjYWxsYmFjaywgaW50ZXJ2YWwsIGNvdW50KSB7XG4gICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvbmUgPSB5aWVsZCBjYWxsYmFjaygpO1xuICAgICAgICAgICAgaWYgKCFkb25lKVxuICAgICAgICAgICAgICAgIHBvbGwoY2FsbGJhY2ssIGludGVydmFsLCBjb3VudCAtIDEpO1xuICAgICAgICB9KSwgaW50ZXJ2YWwpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwb2xsVW50aWxSZWFkeShhZGFwdGVyLCBwb2xsSW50ZXJ2YWwsIHBvbGxDb3VudCkge1xuICAgIHBvbGwoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHJlYWR5IH0gPSBhZGFwdGVyO1xuICAgICAgICBpZiAocmVhZHkpIHtcbiAgICAgICAgICAgIGlmICghYWRhcHRlci5lbWl0KCdyZWFkeScpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2FkYXB0ZXIuY29uc3RydWN0b3IubmFtZX0gaXMgcmVhZHkgYnV0IG5vIGxpc3RlbmVyIHdhcyByZWdpc3RlcmVkYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlYWR5O1xuICAgIH0sIHBvbGxJbnRlcnZhbCwgcG9sbENvdW50KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbGwuanMubWFwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBycGMgfSBmcm9tICdAY2l0eW9memlvbi9uZW9uLWpzJztcbmV4cG9ydCBmdW5jdGlvbiB3YWl0VHgocnBjQWRkcmVzcywgdHhJZCwgcmVhZEZyZXF1ZW5jeSA9IDEwMDAsIHRpbWVvdXQgPSAzMDAwMCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgcnBjQ2xpZW50ID0gbmV3IHJwYy5SUENDbGllbnQocnBjQWRkcmVzcyk7XG4gICAgICAgIC8vIFdhaXQgdW50aWwgdGhlIHRyYW5zYWN0aW9uIGNhbiBiZSBmb3VuZCwgaWYgaXQncyBmb3VuZCBpdCBtZWFucyBpdCdzIG9rIGJlY2F1c2UgaXQgaGFzIGJlZW4gaW5zZXJ0ZWQgaW4gYSBibG9ja1xuICAgICAgICAvLyBPdGhlcndpc2UgdHJpZ2dlciB0aGUgdGltZW91dCBtZWFuaW5nIHRoYXQgaXQncyBub3QgaW5zZXJ0ZWQgaW4gdGhlIGJsb2NrIChhdmVyYWdlIGJsb2NrIHRpbWUgMTVzKVxuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiB0aGUgdGltZW91dCBoYXMgcGFzc2VkXG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID4gdGltZW91dClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSB0cmFuc2FjdGlvbiBmcm9tIHRoZSBycGNDbGllbnRcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IHlpZWxkIHJwY0NsaWVudC5nZXRSYXdUcmFuc2FjdGlvbih0eElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gU2xlZXAgZm9yIHRoZSBuZXh0IGN5Y2xlXG4gICAgICAgICAgICAgICAgeWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgcmVhZEZyZXF1ZW5jeSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICghdHJhbnNhY3Rpb24pO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FpdC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEJhc2VXYWxsZXRBZGFwdGVyLCBwb2xsVW50aWxSZWFkeSwgV2FsbGV0QWNjb3VudEVycm9yLCBXYWxsZXRDb25uZWN0aW9uRXJyb3IsIFdhbGxldERpc2Nvbm5lY3RlZEVycm9yLCBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IsIFdhbGxldEVycm9yLCBXYWxsZXROb3RDb25uZWN0ZWRFcnJvciwgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZSc7XG5pbXBvcnQgeyBOZW9MaW5lSW5pdCwgTmVvTGluZU4zSW5pdCwgfSBmcm9tICcuL3V0aWxzL25lb2xpbmUnO1xuY29uc3QgREVGQVVMVF9XQUxMRVRfQ09ORklHID0geyBvcHRpb25zOiBudWxsIH07XG4vLyBSZWZlcmVuY2UgYXQgaHR0cHM6Ly9uZW9saW5lLmlvL2RhcGkvTjMuaHRtbCAoVGFrZW4gb24gMDgvMTEvMjEpXG5leHBvcnQgY2xhc3MgTmVvTGluZVdhbGxldEFkYXB0ZXIgZXh0ZW5kcyBCYXNlV2FsbGV0QWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnID0gREVGQVVMVF9XQUxMRVRfQ09ORklHKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2FkZHJlc3MgPSBudWxsO1xuICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBjb25maWcub3B0aW9ucztcbiAgICAgICAgaWYgKCF0aGlzLnJlYWR5KVxuICAgICAgICAgICAgcG9sbFVudGlsUmVhZHkodGhpcywgY29uZmlnLnBvbGxJbnRlcnZhbCB8fCAxMDAwLCBjb25maWcucG9sbENvdW50IHx8IDMpO1xuICAgIH1cbiAgICBnZXQgYWRkcmVzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZHJlc3M7XG4gICAgfVxuICAgIGdldCByZWFkeSgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5ORU9MaW5lTjMgIT09ICd1bmRlZmluZWQnO1xuICAgIH1cbiAgICBnZXQgY29ubmVjdGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpbmc7XG4gICAgfVxuICAgIGdldCBjb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2FkZHJlc3M7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCB8fCB0aGlzLmNvbm5lY3RpbmcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIG5lb2xpbmUgY2xpZW50IGluaXRpYWxpemluZyB0aGUgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsaWVudCA9IHlpZWxkIE5lb0xpbmVOM0luaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xpZW50Q29tbW9uID0geWllbGQgTmVvTGluZUluaXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFdhbGxldEVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRDb25uZWN0aW9uRXJyb3IoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jbGllbnQgfHwgIXRoaXMuX2NsaWVudENvbW1vbilcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldEFjY291bnRFcnJvcigpO1xuICAgICAgICAgICAgICAgIGxldCBhY2NvdW50O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5lb0xpbmUgYXNrcyB0aGUgdXNlciB0byBjb25uZWN0IHRoZSBkYXBwIHdoZW4gY2FsbGluZyB0aGUgZ2V0QWNjb3VudCBtZXRob2RcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudCA9IHlpZWxkIHRoaXMuX2NsaWVudC5nZXRBY2NvdW50KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0QWNjb3VudEVycm9yKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldEFjY291bnRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZHJlc3MgPSBhY2NvdW50LmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gY2xlYW51cCBvZiBkaXNjb25uZWN0aW9uXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ05FT0xpbmUuTkVPLkVWRU5ULkRJU0NPTk5FQ1RFRCcsIHRoaXMuX2Rpc2Nvbm5lY3RlZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjb25uZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuX2NsaWVudDtcbiAgICAgICAgICAgIGlmIChjbGllbnQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBIb3c/XG4gICAgICAgICAgICAgICAgICAgIC8vYXdhaXQgdGhpcy5fY2xpZW50LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkcmVzcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NsaWVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2xpZW50Q29tbW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UsIGVycm9yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdkaXNjb25uZWN0Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnZva2VSZWFkKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuX2NsaWVudDtcbiAgICAgICAgICAgIGlmICghY2xpZW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNsaWVudC5pbnZva2VSZWFkKHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0SGFzaDogcmVxdWVzdC5zY3JpcHRIYXNoLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IHJlcXVlc3Qub3BlcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiByZXF1ZXN0LmFyZ3MsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25lcnM6IHJlcXVlc3Quc2lnbmVycyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUb1JlYWRSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludm9rZVJlYWRNdWx0aShyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgICAgICBpZiAoIWNsaWVudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjbGllbnQuaW52b2tlUmVhZE11bHRpKHtcbiAgICAgICAgICAgICAgICAgICAgaW52b2tlUmVhZEFyZ3M6IHJlcXVlc3QuaW52b2NhdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25lcnM6IHJlcXVlc3Quc2lnbmVycyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUb1JlYWRSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludm9rZShyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9jbGllbnQ7XG4gICAgICAgICAgICBpZiAoIWNsaWVudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjbGllbnQuaW52b2tlKHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0SGFzaDogcmVxdWVzdC5zY3JpcHRIYXNoLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IHJlcXVlc3Qub3BlcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiByZXF1ZXN0LmFyZ3MsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25lcnM6IHJlcXVlc3Quc2lnbmVycyxcbiAgICAgICAgICAgICAgICAgICAgZmVlOiByZXF1ZXN0LmZlZSxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFTeXN0ZW1GZWU6IHJlcXVlc3QuZXh0cmFTeXN0ZW1GZWUsXG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdE92ZXJyaWRlOiByZXF1ZXN0LmJyb2FkY2FzdE92ZXJyaWRlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvV3JpdGVSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludm9rZU11bHRpKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuX2NsaWVudDtcbiAgICAgICAgICAgIGlmICghY2xpZW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNsaWVudC5pbnZva2VNdWx0aXBsZSh7XG4gICAgICAgICAgICAgICAgICAgIGludm9rZUFyZ3M6IHJlcXVlc3QuaW52b2NhdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25lcnM6IHJlcXVlc3Quc2lnbmVycyxcbiAgICAgICAgICAgICAgICAgICAgZmVlOiByZXF1ZXN0LmZlZSxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFTeXN0ZW1GZWU6IHJlcXVlc3QuZXh0cmFTeXN0ZW1GZWUsXG4gICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdE92ZXJyaWRlOiByZXF1ZXN0LmJyb2FkY2FzdE92ZXJyaWRlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvV3JpdGVSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldE5ldHdvcmtzKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50Q29tbW9uID0gdGhpcy5fY2xpZW50Q29tbW9uO1xuICAgICAgICAgICAgaWYgKCFjbGllbnRDb21tb24pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2xpZW50Q29tbW9uLmdldE5ldHdvcmtzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVG9HZXROZXR3b3Jrc1Jlc3VsdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnbk1lc3NhZ2UocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5fY2xpZW50O1xuICAgICAgICAgICAgaWYgKCFjbGllbnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2xpZW50LnNpZ25NZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVxdWVzdC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvU2lnbk1lc3NhZ2VSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZXNwb25zZVRvUmVhZFJlc3VsdChyZXNwb25zZSkge1xuICAgICAgICAvLyBJZiB0aGUgc3RhdGUgaXMgaGFsdCBpdCBtZWFucyB0aGF0IGV2ZXJ5dGhpbmcgd2VudCB3ZWxsXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0ZSA9PT0gJ0hBTFQnKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0OiByZXNwb25zZS5zY3JpcHQsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiByZXNwb25zZS5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2FzQ29uc3VtZWQ6IHJlc3BvbnNlLmdhc19jb25zdW1lZCxcbiAgICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzdGFjazogcmVzcG9uc2Uuc3RhY2ssXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGFuIGVycm9yIG9jY3VycmVkIGFuZCBzbyByZXR1cm4gaXRcbiAgICAgICAgLy8gVE9ETzogbWVzc2FnZSBhbmQgY29kZSB3aGVyZT9cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNvZGU6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX3Jlc3BvbnNlVG9Xcml0ZVJlc3VsdChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdHhJZDogcmVzcG9uc2UudHhpZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9yZXNwb25zZVRvR2V0TmV0d29ya3NSZXN1bHQocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5ldHdvcmtzOiByZXNwb25zZS5uZXR3b3JrcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TmV0d29yazogcmVzcG9uc2UuZGVmYXVsdE5ldHdvcmssXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfcmVzcG9uc2VUb1NpZ25NZXNzYWdlUmVzdWx0KHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBwdWJsaWNLZXk6IHJlc3BvbnNlLnB1YmxpY0tleSxcbiAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxuICAgICAgICAgICAgICAgIHNhbHQ6IHJlc3BvbnNlLnNhbHQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UubWVzc2FnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9kaXNjb25uZWN0ZWQoKSB7XG4gICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuX2NsaWVudDtcbiAgICAgICAgaWYgKGNsaWVudCkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ05FT0xpbmUuTkVPLkVWRU5ULkRJU0NPTk5FQ1RFRCcsIHRoaXMuX2Rpc2Nvbm5lY3RlZCk7XG4gICAgICAgICAgICB0aGlzLl9hZGRyZXNzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2NsaWVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgV2FsbGV0RGlzY29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkYXB0ZXIuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9hZGFwdGVyJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IHZhciBOZW9MaW5lU2NvcGU7XG4oZnVuY3Rpb24gKE5lb0xpbmVTY29wZSkge1xuICAgIE5lb0xpbmVTY29wZVtOZW9MaW5lU2NvcGVbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcbiAgICBOZW9MaW5lU2NvcGVbTmVvTGluZVNjb3BlW1wiQ2FsbGVkQnlFbnRyeVwiXSA9IDFdID0gXCJDYWxsZWRCeUVudHJ5XCI7XG4gICAgTmVvTGluZVNjb3BlW05lb0xpbmVTY29wZVtcIkN1c3RvbUNvbnRyYWN0c1wiXSA9IDE2XSA9IFwiQ3VzdG9tQ29udHJhY3RzXCI7XG4gICAgTmVvTGluZVNjb3BlW05lb0xpbmVTY29wZVtcIkN1c3RvbUdyb3Vwc1wiXSA9IDMyXSA9IFwiQ3VzdG9tR3JvdXBzXCI7XG4gICAgTmVvTGluZVNjb3BlW05lb0xpbmVTY29wZVtcIkdsb2JhbFwiXSA9IDEyOF0gPSBcIkdsb2JhbFwiO1xufSkoTmVvTGluZVNjb3BlIHx8IChOZW9MaW5lU2NvcGUgPSB7fSkpO1xuZXhwb3J0IHZhciBOZW9MaW5lQ2hhaW5JZDtcbihmdW5jdGlvbiAoTmVvTGluZUNoYWluSWQpIHtcbiAgICBOZW9MaW5lQ2hhaW5JZFtOZW9MaW5lQ2hhaW5JZFtcIk5lbzJNYWluTmV0XCJdID0gMV0gPSBcIk5lbzJNYWluTmV0XCI7XG4gICAgTmVvTGluZUNoYWluSWRbTmVvTGluZUNoYWluSWRbXCJOZW8yVGVzdE5ldFwiXSA9IDJdID0gXCJOZW8yVGVzdE5ldFwiO1xuICAgIE5lb0xpbmVDaGFpbklkW05lb0xpbmVDaGFpbklkW1wiTmVvM01haW5OZXRcIl0gPSAzXSA9IFwiTmVvM01haW5OZXRcIjtcbiAgICBOZW9MaW5lQ2hhaW5JZFtOZW9MaW5lQ2hhaW5JZFtcIk5lbzNUZXN0TmV0XCJdID0gNF0gPSBcIk5lbzNUZXN0TmV0XCI7XG59KShOZW9MaW5lQ2hhaW5JZCB8fCAoTmVvTGluZUNoYWluSWQgPSB7fSkpO1xuZXhwb3J0IGZ1bmN0aW9uIE5lb0xpbmVOM0luaXQoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gVXNlIGFuIGFzeW5jIHBhdHRlcm4gYXMgdGhlIGdsb2JhbCBORU9MaW5lTjMgaXMgbm90IGF2YWlsYWJsZSB3aGlsZVxuICAgICAgICAvLyB0aGUgTkVPTGluZS5ORU8uRVZFTlQuUkVBRFkgZXZlbnQgaXMgc3RpbGwgZmlyaW5nOlxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgd2luZG93Lk5FT0xpbmVOMy5Jbml0KCkpO1xuICAgICAgICB9LCAxMCkpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIE5lb0xpbmVJbml0KCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIFVzZSBhbiBhc3luYyBwYXR0ZXJuIGFzIHRoZSBnbG9iYWwgTkVPTGluZU4zIGlzIG5vdCBhdmFpbGFibGUgd2hpbGVcbiAgICAgICAgLy8gdGhlIE5FT0xpbmUuTkVPLkVWRU5ULlJFQURZIGV2ZW50IGlzIHN0aWxsIGZpcmluZzpcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUobmV3IHdpbmRvdy5ORU9MaW5lLkluaXQoKSk7XG4gICAgICAgIH0sIDEwKSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1uZW9saW5lLmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgQmFzZVdhbGxldEFkYXB0ZXIsIFdhbGxldEFjY291bnRFcnJvciwgV2FsbGV0RGlzY29ubmVjdGVkRXJyb3IsIFdhbGxldERpc2Nvbm5lY3Rpb25FcnJvciwgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZSc7XG5pbXBvcnQgbmVvM0RhcGkgZnJvbSAnbmVvMy1kYXBpJztcbmNvbnN0IERFRkFVTFRfV0FMTEVUX0NPTkZJRyA9IHsgb3B0aW9uczogbnVsbCB9O1xuLy8gUmVmZXJlbmNlIGF0IGh0dHBzOi8vbmVvM2RhcGlkb2NzLm8zLm5ldHdvcmsvI2dldHRpbmctc3RhcnRlZCAoVGFrZW4gb24gMTAvMTEvMjEpXG5leHBvcnQgY2xhc3MgTzNXYWxsZXRBZGFwdGVyIGV4dGVuZHMgQmFzZVdhbGxldEFkYXB0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IERFRkFVTFRfV0FMTEVUX0NPTkZJRykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9hZGRyZXNzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gY29uZmlnLm9wdGlvbnM7XG4gICAgfVxuICAgIGdldCBhZGRyZXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkcmVzcztcbiAgICB9XG4gICAgZ2V0IHJlYWR5KCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxuICAgIGdldCBjb25uZWN0aW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29ubmVjdGluZztcbiAgICB9XG4gICAgZ2V0IGNvbm5lY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fYWRkcmVzcztcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkIHx8IHRoaXMuY29ubmVjdGluZylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIFRha2VuIGZyb20gbzMgc3BlY3NcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3VudDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPMyBhc2tzIHRoZSB1c2VyIHRvIGNvbm5lY3QgdGhlIGRhcHAgd2hlbiBjYWxsaW5nIHRoZSBnZXRBY2NvdW50IG1ldGhvZFxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50ID0geWllbGQgbmVvM0RhcGkuZ2V0QWNjb3VudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldEFjY291bnRFcnJvcihlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWFjY291bnQpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRBY2NvdW50RXJyb3IoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRyZXNzID0gYWNjb3VudC5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBhIGxpc3RlbmVyIHRvIGNsZWFudXAgb2YgZGlzY29ubmVjdGlvblxuICAgICAgICAgICAgICAgIG5lbzNEYXBpLmFkZEV2ZW50TGlzdGVuZXIobmVvM0RhcGkuQ29uc3RhbnRzLkV2ZW50TmFtZS5ESVNDT05ORUNURUQsIHRoaXMuX2Rpc2Nvbm5lY3RlZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjb25uZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSG93P1xuICAgICAgICAgICAgICAgIC8vYXdhaXQgbmVvM0RhcGkuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZHJlc3MgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UsIGVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludm9rZVJlYWQocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIG5lbzNEYXBpLmludm9rZVJlYWQoe1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHRIYXNoOiByZXF1ZXN0LnNjcmlwdEhhc2gsXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogcmVxdWVzdC5vcGVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IHJlcXVlc3QuYXJncyxcbiAgICAgICAgICAgICAgICAgICAgc2lnbmVyczogcmVxdWVzdC5zaWduZXJzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvUmVhZFJlc3VsdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW52b2tlUmVhZE11bHRpKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBuZW8zRGFwaS5pbnZva2VSZWFkTXVsdGkoe1xuICAgICAgICAgICAgICAgICAgICBpbnZva2VSZWFkQXJnczogcmVxdWVzdC5pbnZvY2F0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgc2lnbmVyczogcmVxdWVzdC5zaWduZXJzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvUmVhZFJlc3VsdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW52b2tlKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBuZW8zRGFwaS5pbnZva2Uoe1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHRIYXNoOiByZXF1ZXN0LnNjcmlwdEhhc2gsXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogcmVxdWVzdC5vcGVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IHJlcXVlc3QuYXJncyxcbiAgICAgICAgICAgICAgICAgICAgc2lnbmVyczogcmVxdWVzdC5zaWduZXJzLFxuICAgICAgICAgICAgICAgICAgICBmZWU6IHJlcXVlc3QuZmVlLFxuICAgICAgICAgICAgICAgICAgICBleHRyYVN5c3RlbUZlZTogcmVxdWVzdC5leHRyYVN5c3RlbUZlZSxcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0T3ZlcnJpZGU6IHJlcXVlc3QuYnJvYWRjYXN0T3ZlcnJpZGUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVG9Xcml0ZVJlc3VsdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW52b2tlTXVsdGkocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIG5lbzNEYXBpLmludm9rZU11bHRpKHtcbiAgICAgICAgICAgICAgICAgICAgaW52b2tlQXJnczogcmVxdWVzdC5pbnZvY2F0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgc2lnbmVyczogcmVxdWVzdC5zaWduZXJzLFxuICAgICAgICAgICAgICAgICAgICBmZWU6IHJlcXVlc3QuZmVlLFxuICAgICAgICAgICAgICAgICAgICBleHRyYVN5c3RlbUZlZTogcmVxdWVzdC5leHRyYVN5c3RlbUZlZSxcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0T3ZlcnJpZGU6IHJlcXVlc3QuYnJvYWRjYXN0T3ZlcnJpZGUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVG9Xcml0ZVJlc3VsdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0TmV0d29ya3MoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgbmVvM0RhcGkuZ2V0TmV0d29ya3MoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUb0dldE5ldHdvcmtzUmVzdWx0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaWduTWVzc2FnZShyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgbmVvM0RhcGkuc2lnbk1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXF1ZXN0Lm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVG9TaWduTWVzc2FnZVJlc3VsdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3Jlc3BvbnNlVG9SZWFkUmVzdWx0KHJlc3BvbnNlKSB7XG4gICAgICAgIC8vIElmIHRoZSBzdGF0ZSBpcyBoYWx0IGl0IG1lYW5zIHRoYXQgZXZlcnl0aGluZyB3ZW50IHdlbGxcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXRlID09PSAnSEFMVCcpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHQ6IHJlc3BvbnNlLnNjcmlwdCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHJlc3BvbnNlLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBnYXNDb25zdW1lZDogcmVzcG9uc2UuZ2FzX2NvbnN1bWVkLFxuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb246IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrOiByZXNwb25zZS5zdGFjayxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UgYW4gZXJyb3Igb2NjdXJyZWQgYW5kIHNvIHJldHVybiBpdFxuICAgICAgICAvLyBUT0RPOiBtZXNzYWdlIGFuZCBjb2RlIHdoZXJlP1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY29kZTogdW5kZWZpbmVkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfcmVzcG9uc2VUb1dyaXRlUmVzdWx0KHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB0eElkOiByZXNwb25zZS50eGlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX3Jlc3BvbnNlVG9HZXROZXR3b3Jrc1Jlc3VsdChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbmV0d29ya3M6IHJlc3BvbnNlLm5ldHdvcmtzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHROZXR3b3JrOiByZXNwb25zZS5kZWZhdWx0TmV0d29yayxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9yZXNwb25zZVRvU2lnbk1lc3NhZ2VSZXN1bHQocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHB1YmxpY0tleTogcmVzcG9uc2UucHVibGljS2V5LFxuICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgICAgICAgc2FsdDogcmVzcG9uc2Uuc2FsdCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5tZXNzYWdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2Rpc2Nvbm5lY3RlZCgpIHtcbiAgICAgICAgbmVvM0RhcGkucmVtb3ZlRXZlbnRMaXN0ZW5lcihuZW8zRGFwaS5Db25zdGFudHMuRXZlbnROYW1lLkRJU0NPTk5FQ1RFRCk7XG4gICAgICAgIHRoaXMuX2FkZHJlc3MgPSBudWxsO1xuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IFdhbGxldERpc2Nvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGFwdGVyLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vYWRhcHRlcic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IEJhc2VXYWxsZXRBZGFwdGVyLCBwb2xsVW50aWxSZWFkeSwgV2FsbGV0QWNjb3VudEVycm9yLCBXYWxsZXRDb25uZWN0aW9uRXJyb3IsIFdhbGxldERpc2Nvbm5lY3RlZEVycm9yLCBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IsIFdhbGxldEVycm9yLCBXYWxsZXRNZXRob2ROb3RTdXBwb3J0ZWRFcnJvciwgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IsIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UnO1xuaW1wb3J0IHsgTmVvRGFwaSB9IGZyb20gJ0BuZW9uZ2QvbmVvLWRhcGknO1xuY29uc3QgREVGQVVMVF9XQUxMRVRfQ09ORklHID0geyBvcHRpb25zOiBudWxsIH07XG4vLyBSZWZlcmVuY2UgYXQgaHR0cHM6Ly90aGlzLl9vbmVHYXRlRGFwaWRvY3MubzMubmV0d29yay8jZ2V0dGluZy1zdGFydGVkIChUYWtlbiBvbiAxMC8xMS8yMSlcbmV4cG9ydCBjbGFzcyBPbmVHYXRlV2FsbGV0QWRhcHRlciBleHRlbmRzIEJhc2VXYWxsZXRBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSBERUZBVUxUX1dBTExFVF9DT05GSUcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fYWRkcmVzcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zO1xuICAgICAgICBpZiAoIXRoaXMucmVhZHkpXG4gICAgICAgICAgICBwb2xsVW50aWxSZWFkeSh0aGlzLCBjb25maWcucG9sbEludGVydmFsIHx8IDEwMDAsIGNvbmZpZy5wb2xsQ291bnQgfHwgMyk7XG4gICAgfVxuICAgIGdldCBhZGRyZXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkcmVzcztcbiAgICB9XG4gICAgZ2V0IHJlYWR5KCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk9uZUdhdGUgIT09ICd1bmRlZmluZWQnO1xuICAgIH1cbiAgICBnZXQgY29ubmVjdGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpbmc7XG4gICAgfVxuICAgIGdldCBjb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2FkZHJlc3M7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGVkIHx8IHRoaXMuY29ubmVjdGluZylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uZUdhdGVQcm92aWRlciA9IHdpbmRvdy5PbmVHYXRlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fb25lR2F0ZVByb3ZpZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIG5lb2xpbmUgY2xpZW50IGluaXRpYWxpemluZyB0aGUgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9vbmVHYXRlRGFwaSA9IG5ldyBOZW9EYXBpKHRoaXMuX29uZUdhdGVQcm92aWRlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFdhbGxldEVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXRDb25uZWN0aW9uRXJyb3IoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9vbmVHYXRlRGFwaSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldEFjY291bnRFcnJvcigpO1xuICAgICAgICAgICAgICAgIC8vIFRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL25lby1uZ2QvbmVvLWRhcGktbW9ub3JlcG8vdHJlZS9tYXN0ZXIvcGFja2FnZXMvbmVvLWRhcGlcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3VudDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbmVHYXRlIGFza3MgdGhlIHVzZXIgdG8gY29ubmVjdCB0aGUgZGFwcCB3aGVuIGNhbGxpbmcgdGhlIGdldEFjY291bnQgbWV0aG9kXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQgPSB5aWVsZCB0aGlzLl9vbmVHYXRlRGFwaS5nZXRBY2NvdW50KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0QWNjb3VudEVycm9yKGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5tZXNzYWdlLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldEFjY291bnRFcnJvcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZHJlc3MgPSBhY2NvdW50LmFkZHJlc3M7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gY2xlYW51cCBvZiBkaXNjb25uZWN0aW9uXG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5fb25lR2F0ZVByb3ZpZGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub24oJ2Rpc2Nvbm5lY3QnLCB0aGlzLl9kaXNjb25uZWN0ZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY29ubmVjdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9vbmVHYXRlRGFwaTtcbiAgICAgICAgICAgIGlmIChjbGllbnQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBIb3c/XG4gICAgICAgICAgICAgICAgICAgIC8vYXdhaXQgdGhpcy5fb25lR2F0ZURhcGkuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRyZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb25lR2F0ZURhcGkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IFdhbGxldERpc2Nvbm5lY3Rpb25FcnJvcihlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubWVzc2FnZSwgZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludm9rZVJlYWQocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5fb25lR2F0ZURhcGk7XG4gICAgICAgICAgICBpZiAoIWNsaWVudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjbGllbnQuaW52b2tlUmVhZCh7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdEhhc2g6IHJlcXVlc3Quc2NyaXB0SGFzaCxcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uOiByZXF1ZXN0Lm9wZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgYXJnczogcmVxdWVzdC5hcmdzLFxuICAgICAgICAgICAgICAgICAgICBzaWduZXJzOiByZXF1ZXN0LnNpZ25lcnMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVG9SZWFkUmVzdWx0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnZva2VSZWFkTXVsdGkocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5fb25lR2F0ZURhcGk7XG4gICAgICAgICAgICBpZiAoIWNsaWVudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjbGllbnQuaW52b2tlUmVhZE11bHRpKHtcbiAgICAgICAgICAgICAgICAgICAgaW52b2NhdGlvbnM6IHJlcXVlc3QuaW52b2NhdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHNpZ25lcnM6IHJlcXVlc3Quc2lnbmVycyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUb1JlYWRSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludm9rZShyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9vbmVHYXRlRGFwaTtcbiAgICAgICAgICAgIGlmICghY2xpZW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNsaWVudC5pbnZva2Uoe1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHRIYXNoOiByZXF1ZXN0LnNjcmlwdEhhc2gsXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogcmVxdWVzdC5vcGVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IHJlcXVlc3QuYXJncyxcbiAgICAgICAgICAgICAgICAgICAgc2lnbmVyczogcmVxdWVzdC5zaWduZXJzLFxuICAgICAgICAgICAgICAgICAgICBleHRyYU5ldHdvcmtGZWU6IHJlcXVlc3QuZmVlLFxuICAgICAgICAgICAgICAgICAgICBleHRyYVN5c3RlbUZlZTogcmVxdWVzdC5leHRyYVN5c3RlbUZlZSxcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0T3ZlcnJpZGU6IHJlcXVlc3QuYnJvYWRjYXN0T3ZlcnJpZGUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVG9Xcml0ZVJlc3VsdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW52b2tlTXVsdGkocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5fb25lR2F0ZURhcGk7XG4gICAgICAgICAgICBpZiAoIWNsaWVudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjbGllbnQuaW52b2tlTXVsdGkoe1xuICAgICAgICAgICAgICAgICAgICBpbnZvY2F0aW9uczogcmVxdWVzdC5pbnZvY2F0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgc2lnbmVyczogcmVxdWVzdC5zaWduZXJzLFxuICAgICAgICAgICAgICAgICAgICBleHRyYU5ldHdvcmtGZWU6IHJlcXVlc3QuZmVlLFxuICAgICAgICAgICAgICAgICAgICBleHRyYVN5c3RlbUZlZTogcmVxdWVzdC5leHRyYVN5c3RlbUZlZSxcbiAgICAgICAgICAgICAgICAgICAgYnJvYWRjYXN0T3ZlcnJpZGU6IHJlcXVlc3QuYnJvYWRjYXN0T3ZlcnJpZGUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVG9Xcml0ZVJlc3VsdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0TmV0d29ya3MoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSB0aGlzLl9vbmVHYXRlRGFwaTtcbiAgICAgICAgICAgIGlmICghY2xpZW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNsaWVudC5nZXROZXR3b3JrcygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvR2V0TmV0d29ya3NSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25NZXNzYWdlKHJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuX29uZUdhdGVEYXBpO1xuICAgICAgICAgICAgaWYgKCFjbGllbnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICAvLyBOb3QgY3VycmVudGx5IHN1cHBvcnRlZCBieSBOZW8gZEFQSVxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0FQSSBtZXRob2Qgbm90IHN1cHBvcnRlZCcsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG5ldyBFcnJvcignQVBJIG1ldGhvZCBub3Qgc3VwcG9ydGVkJyksXG4gICAgICAgICAgICAgICAgbmFtZTogJ01ldGhvZE5vdFN1cHBvcnRlZEVycm9yJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IFdhbGxldE1ldGhvZE5vdFN1cHBvcnRlZEVycm9yKCkpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfcmVzcG9uc2VUb1JlYWRSZXN1bHQocmVzcG9uc2UpIHtcbiAgICAgICAgLy8gSWYgdGhlIHN0YXRlIGlzIGhhbHQgaXQgbWVhbnMgdGhhdCBldmVyeXRoaW5nIHdlbnQgd2VsbFxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdGUgPT09ICdIQUxUJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdDogcmVzcG9uc2Uuc2NyaXB0LFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogcmVzcG9uc2Uuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGdhc0NvbnN1bWVkOiByZXNwb25zZS5nYXNfY29uc3VtZWQsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgc3RhY2s6IHJlc3BvbnNlLnN0YWNrLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSBhbiBlcnJvciBvY2N1cnJlZCBhbmQgc28gcmV0dXJuIGl0XG4gICAgICAgIC8vIFRPRE86IG1lc3NhZ2UgYW5kIGNvZGUgd2hlcmU/XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICBtZXNzYWdlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjb2RlOiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9yZXNwb25zZVRvV3JpdGVSZXN1bHQocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHR4SWQ6IHJlc3BvbnNlLnR4aWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfcmVzcG9uc2VUb0dldE5ldHdvcmtzUmVzdWx0KHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBuZXR3b3JrczogcmVzcG9uc2UubmV0d29ya3MsXG4gICAgICAgICAgICAgICAgZGVmYXVsdE5ldHdvcms6IHJlc3BvbnNlLmRlZmF1bHROZXR3b3JrLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgX2Rpc2Nvbm5lY3RlZCgpIHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLl9vbmVHYXRlUHJvdmlkZXI7XG4gICAgICAgIGlmIChwcm92aWRlcikge1xuICAgICAgICAgICAgcHJvdmlkZXIucmVtb3ZlTGlzdGVuZXIoJ2Rpc2Nvbm5lY3QnLCB0aGlzLl9kaXNjb25uZWN0ZWQpO1xuICAgICAgICAgICAgdGhpcy5fYWRkcmVzcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9vbmVHYXRlRGFwaSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuX29uZUdhdGVQcm92aWRlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgV2FsbGV0RGlzY29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Rpc2Nvbm5lY3QnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkYXB0ZXIuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9hZGFwdGVyJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LWJ1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1jb2xsYXBzZSc7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1jb25uZWN0LWJ1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1kaXNjb25uZWN0LWJ1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1pY29uJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LWxpc3QtaXRlbSc7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1tb2RhbC1idXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtbW9kYWwtcHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtbW9kYWwnO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtbXVsdGktYnV0dG9uJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgV2FsbGV0QnV0dG9uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRCdXR0b24oeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBkaXNhYmxlZCwgZW5kSWNvbiwgc3RhcnRJY29uLCBzdHlsZSwgdGFiSW5kZXgsIG9uQ2xpY2ssIH0pIHtcbiAgICBjb25zdCBqdXN0aWZ5Q29udGVudCA9IGVuZEljb24gfHwgc3RhcnRJY29uID8gJ3NwYWNlLWJldHdlZW4nIDogJ2NlbnRlcic7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBgd2FsbGV0LWFkYXB0ZXItYnV0dG9uICR7Y2xhc3NOYW1lIHx8ICcnfWAsIGRpc2FibGVkOiBkaXNhYmxlZCwgb25DbGljazogb25DbGljaywgc3R5bGU6IE9iamVjdC5hc3NpZ24oeyBqdXN0aWZ5Q29udGVudCB9LCBzdHlsZSksIHRhYkluZGV4OiB0YWJJbmRleCB8fCAwLCB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgIHN0YXJ0SWNvbiAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tc3RhcnQtaWNvblwiIH0sIHN0YXJ0SWNvbiksXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBlbmRJY29uICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi1lbmQtaWNvblwiIH0sIGVuZEljb24pKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1idXR0b24uanMubWFwIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldENvbGxhcHNlID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRDb2xsYXBzZSh7IGlkLCBjaGlsZHJlbiwgZXhwYW5kZWQgPSBmYWxzZSwgfSkge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBpbnN0YW50ID0gdXNlUmVmKHRydWUpO1xuICAgIGNvbnN0IHRyYW5zaXRpb24gPSAnaGVpZ2h0IDI1MG1zIGVhc2Utb3V0JztcbiAgICBjb25zdCBvcGVuQ29sbGFwc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBub2RlLnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgY2xvc2VDb2xsYXBzZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IG5vZGUub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIG5vZGUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIG9wZW5Db2xsYXBzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xvc2VDb2xsYXBzZSgpO1xuICAgICAgICB9XG4gICAgfSwgW2V4cGFuZGVkXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNvbXBsZXRlKCkge1xuICAgICAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUub3ZlcmZsb3cgPSBleHBhbmRlZCA/ICdpbml0aWFsJyA6ICdoaWRkZW4nO1xuICAgICAgICAgICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVHJhbnNpdGlvbkVuZChldmVudCkge1xuICAgICAgICAgICAgaWYgKG5vZGUgJiYgZXZlbnQudGFyZ2V0ID09PSBub2RlICYmIGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gJ2hlaWdodCcpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW50LmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhbmRsZUNvbXBsZXRlKCk7XG4gICAgICAgICAgICBpbnN0YW50LmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgcmV0dXJuICgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpO1xuICAgIH0sIFtleHBhbmRlZF0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNoaWxkcmVuOiBjaGlsZHJlbiwgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWNvbGxhcHNlXCIsIGlkOiBpZCwgcmVmOiByZWYsIHJvbGU6IFwicmVnaW9uXCIsIHN0eWxlOiB7IGhlaWdodDogMCwgdHJhbnNpdGlvbjogaW5zdGFudC5jdXJyZW50ID8gdW5kZWZpbmVkIDogdHJhbnNpdGlvbiB9IH0pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LWNvbGxhcHNlLmpzLm1hcCIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXYWxsZXRCdXR0b24gfSBmcm9tICcuL3dhbGxldC1idXR0b24nO1xuaW1wb3J0IHsgV2FsbGV0SWNvbiB9IGZyb20gJy4vd2FsbGV0LWljb24nO1xuZXhwb3J0IGNvbnN0IFdhbGxldENvbm5lY3RCdXR0b24gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldENvbm5lY3RCdXR0b24oX2EpIHtcbiAgICB2YXIgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBkaXNhYmxlZCwgZW5kSWNvbiwgc3RhcnRJY29uLCBzdHlsZSwgdGFiSW5kZXgsIG9uQ2xpY2sgfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlZFwiLCBcImVuZEljb25cIiwgXCJzdGFydEljb25cIiwgXCJzdHlsZVwiLCBcInRhYkluZGV4XCIsIFwib25DbGlja1wiXSk7XG4gICAgY29uc3QgeyB3YWxsZXQsIGNvbm5lY3QsIGNvbm5lY3RpbmcsIGNvbm5lY3RlZCB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xpY2spXG4gICAgICAgICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICAgICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpXG4gICAgICAgICAgICBjb25uZWN0KCkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICB9LCBbb25DbGljaywgY29ubmVjdF0pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkcmVuKVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICBpZiAoY29ubmVjdGluZylcbiAgICAgICAgICAgIHJldHVybiAnQ29ubmVjdGluZyAuLi4nO1xuICAgICAgICBpZiAoY29ubmVjdGVkKVxuICAgICAgICAgICAgcmV0dXJuICdDb25uZWN0ZWQnO1xuICAgICAgICBpZiAod2FsbGV0KVxuICAgICAgICAgICAgcmV0dXJuICdDb25uZWN0JztcbiAgICAgICAgcmV0dXJuICdDb25uZWN0IFdhbGxldCc7XG4gICAgfSwgW2NoaWxkcmVuLCBjb25uZWN0aW5nLCBjb25uZWN0ZWQsIHdhbGxldF0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLXRyaWdnZXJcIiwgZGlzYWJsZWQ6IGRpc2FibGVkIHx8ICF3YWxsZXQgfHwgY29ubmVjdGluZyB8fCBjb25uZWN0ZWQsIHN0YXJ0SWNvbjogd2FsbGV0ID8gUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRJY29uLCB7IHdhbGxldDogd2FsbGV0IH0pIDogdW5kZWZpbmVkLCBlbmRJY29uOiBlbmRJY29uLCBzdHlsZTogc3R5bGUsIHRhYkluZGV4OiB0YWJJbmRleCwgb25DbGljazogaGFuZGxlQ2xpY2sgfSwgcHJvcHMpLCBjb250ZW50KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1jb25uZWN0LWJ1dHRvbi5qcy5tYXAiLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtYnV0dG9uJztcbmltcG9ydCB7IFdhbGxldEljb24gfSBmcm9tICcuL3dhbGxldC1pY29uJztcbmV4cG9ydCBjb25zdCBXYWxsZXREaXNjb25uZWN0QnV0dG9uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXREaXNjb25uZWN0QnV0dG9uKF9hKSB7XG4gICAgdmFyIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZGlzYWJsZWQsIGVuZEljb24sIHN0YXJ0SWNvbiwgc3R5bGUsIHRhYkluZGV4LCBvbkNsaWNrIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZWRcIiwgXCJlbmRJY29uXCIsIFwic3RhcnRJY29uXCIsIFwic3R5bGVcIiwgXCJ0YWJJbmRleFwiLCBcIm9uQ2xpY2tcIl0pO1xuICAgIGNvbnN0IHsgd2FsbGV0LCBkaXNjb25uZWN0LCBkaXNjb25uZWN0aW5nIH0gPSB1c2VXYWxsZXQoKTtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DbGljaylcbiAgICAgICAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG4gICAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZClcbiAgICAgICAgICAgIGRpc2Nvbm5lY3QoKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIH0sIFtvbkNsaWNrLCBkaXNjb25uZWN0XSk7XG4gICAgY29uc3QgY29udGVudCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGRyZW4pXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIGlmIChkaXNjb25uZWN0aW5nKVxuICAgICAgICAgICAgcmV0dXJuICdEaXNjb25uZWN0aW5nIC4uLic7XG4gICAgICAgIGlmICh3YWxsZXQpXG4gICAgICAgICAgICByZXR1cm4gJ0Rpc2Nvbm5lY3QnO1xuICAgICAgICByZXR1cm4gJ0Rpc2Nvbm5lY3QgV2FsbGV0JztcbiAgICB9LCBbY2hpbGRyZW4sIGRpc2Nvbm5lY3RpbmcsIHdhbGxldF0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLXRyaWdnZXJcIiwgZGlzYWJsZWQ6IGRpc2FibGVkIHx8ICF3YWxsZXQsIHN0YXJ0SWNvbjogd2FsbGV0ID8gUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRJY29uLCB7IHdhbGxldDogd2FsbGV0IH0pIDogdW5kZWZpbmVkLCBlbmRJY29uOiBlbmRJY29uLCBzdHlsZTogc3R5bGUsIHRhYkluZGV4OiB0YWJJbmRleCwgb25DbGljazogaGFuZGxlQ2xpY2sgfSwgcHJvcHMpLCBjb250ZW50KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1kaXNjb25uZWN0LWJ1dHRvbi5qcy5tYXAiLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldEljb24gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldEljb24oX2EpIHtcbiAgICB2YXIgeyB3YWxsZXQgfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wid2FsbGV0XCJdKTtcbiAgICByZXR1cm4gd2FsbGV0ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7IHNyYzogd2FsbGV0Lmljb24sIGFsdDogYCR7d2FsbGV0Lm5hbWV9IGljb25gIH0sIHByb3BzKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1pY29uLmpzLm1hcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXYWxsZXRCdXR0b24gfSBmcm9tICcuL3dhbGxldC1idXR0b24nO1xuaW1wb3J0IHsgV2FsbGV0SWNvbiB9IGZyb20gJy4vd2FsbGV0LWljb24nO1xuZXhwb3J0IGNvbnN0IFdhbGxldExpc3RJdGVtID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRMaXN0SXRlbSh7IGhhbmRsZUNsaWNrLCB0YWJJbmRleCwgd2FsbGV0LCB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRCdXR0b24sIHsgb25DbGljazogaGFuZGxlQ2xpY2ssIGVuZEljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0SWNvbiwgeyB3YWxsZXQ6IHdhbGxldCB9KSwgdGFiSW5kZXg6IHRhYkluZGV4IH0sIHdhbGxldC5uYW1lKSkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtbGlzdC1pdGVtLmpzLm1hcCIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWJ1dHRvbic7XG5pbXBvcnQgeyB1c2VXYWxsZXRNb2RhbCB9IGZyb20gJy4uL2hvb2tzL3VzZS13YWxsZXQtbW9kYWwnO1xuZXhwb3J0IGNvbnN0IFdhbGxldE1vZGFsQnV0dG9uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRNb2RhbEJ1dHRvbihfYSkge1xuICAgIHZhciB7IGNoaWxkcmVuID0gJ1NlbGVjdCBXYWxsZXQnLCBvbkNsaWNrIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwib25DbGlja1wiXSk7XG4gICAgY29uc3QgeyB2aXNpYmxlLCBzZXRWaXNpYmxlIH0gPSB1c2VXYWxsZXRNb2RhbCgpO1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNsaWNrKVxuICAgICAgICAgICAgb25DbGljayhldmVudCk7XG4gICAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZClcbiAgICAgICAgICAgIHNldFZpc2libGUoIXZpc2libGUpO1xuICAgIH0sIFtvbkNsaWNrLCBzZXRWaXNpYmxlLCB2aXNpYmxlXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tdHJpZ2dlclwiLCBvbkNsaWNrOiBoYW5kbGVDbGljayB9LCBwcm9wcyksIGNoaWxkcmVuKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1tb2RhbC1idXR0b24uanMubWFwIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0TW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vaG9va3MvdXNlLXdhbGxldC1tb2RhbCc7XG5pbXBvcnQgeyBXYWxsZXRNb2RhbCB9IGZyb20gJy4vd2FsbGV0LW1vZGFsJztcbmV4cG9ydCBjb25zdCBXYWxsZXRNb2RhbFByb3ZpZGVyID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRNb2RhbFByb3ZpZGVyKF9hKSB7XG4gICAgdmFyIHsgY2hpbGRyZW4gfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIl0pO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0TW9kYWxDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB7XG4gICAgICAgICAgICB2aXNpYmxlLFxuICAgICAgICAgICAgc2V0VmlzaWJsZSxcbiAgICAgICAgfSB9LFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgdmlzaWJsZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldE1vZGFsLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1tb2RhbC1wcm92aWRlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgV2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtYnV0dG9uJztcbmltcG9ydCB7IFdhbGxldENvbGxhcHNlIH0gZnJvbSAnLi93YWxsZXQtY29sbGFwc2UnO1xuaW1wb3J0IHsgdXNlV2FsbGV0TW9kYWwgfSBmcm9tICcuLi9ob29rcy91c2Utd2FsbGV0LW1vZGFsJztcbmltcG9ydCB7IFdhbGxldExpc3RJdGVtIH0gZnJvbSAnLi93YWxsZXQtbGlzdC1pdGVtJztcbmV4cG9ydCBjb25zdCBXYWxsZXRNb2RhbCA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0TW9kYWwoeyBjbGFzc05hbWUgPSAnJywgbG9nbywgZmVhdHVyZWRXYWxsZXRzID0gMywgY29udGFpbmVyID0gJ2JvZHknLCB9KSB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHsgd2FsbGV0cywgc2VsZWN0IH0gPSB1c2VXYWxsZXQoKTtcbiAgICBjb25zdCB7IHNldFZpc2libGUgfSA9IHVzZVdhbGxldE1vZGFsKCk7XG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2ZhZGVJbiwgc2V0RmFkZUluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcG9ydGFsLCBzZXRQb3J0YWxdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2ZlYXR1cmVkLCBtb3JlXSA9IHVzZU1lbW8oKCkgPT4gW3dhbGxldHMuc2xpY2UoMCwgZmVhdHVyZWRXYWxsZXRzKSwgd2FsbGV0cy5zbGljZShmZWF0dXJlZFdhbGxldHMpXSwgW3dhbGxldHMsIGZlYXR1cmVkV2FsbGV0c10pO1xuICAgIGNvbnN0IGhpZGVNb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0RmFkZUluKGZhbHNlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKSwgMTUwKTtcbiAgICB9LCBbc2V0RmFkZUluLCBzZXRWaXNpYmxlXSk7XG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaGlkZU1vZGFsKCk7XG4gICAgfSwgW2hpZGVNb2RhbF0pO1xuICAgIGNvbnN0IGhhbmRsZVdhbGxldENsaWNrID0gdXNlQ2FsbGJhY2soKGV2ZW50LCB3YWxsZXROYW1lKSA9PiB7XG4gICAgICAgIHNlbGVjdCh3YWxsZXROYW1lKTtcbiAgICAgICAgaGFuZGxlQ2xvc2UoZXZlbnQpO1xuICAgIH0sIFtzZWxlY3QsIGhhbmRsZUNsb3NlXSk7XG4gICAgY29uc3QgaGFuZGxlQ29sbGFwc2VDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCksIFtzZXRFeHBhbmRlZCwgZXhwYW5kZWRdKTtcbiAgICBjb25zdCBoYW5kbGVUYWJLZXkgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGhlcmUgd2UgcXVlcnkgYWxsIGZvY3VzYWJsZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGZpcnN0RWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzWzBdO1xuICAgICAgICBjb25zdCBsYXN0RWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzW2ZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIC8vIGlmIGdvaW5nIGJhY2t3YXJkIGJ5IHByZXNzaW5nIHRhYiBhbmQgZmlyc3RFbGVtZW50IGlzIGFjdGl2ZSwgc2hpZnQgZm9jdXMgdG8gbGFzdCBmb2N1c2FibGUgZWxlbWVudFxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGZpcnN0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGxhc3RFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIGdvaW5nIGZvcndhcmQgYnkgcHJlc3NpbmcgdGFiIGFuZCBsYXN0RWxlbWVudCBpcyBhY3RpdmUsIHNoaWZ0IGZvY3VzIHRvIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBmaXJzdEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3JlZl0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgaGlkZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVGFiS2V5KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gR2V0IG9yaWdpbmFsIG92ZXJmbG93XG4gICAgICAgIGNvbnN0IHsgb3ZlcmZsb3cgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAvLyBIYWNrIHRvIGVuYWJsZSBmYWRlIGluIGFuaW1hdGlvbiBhZnRlciBtb3VudFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEZhZGVJbih0cnVlKSwgMCk7XG4gICAgICAgIC8vIFByZXZlbnQgc2Nyb2xsaW5nIG9uIG1vdW50XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgLy8gTGlzdGVuIGZvciBrZXlkb3duIGV2ZW50c1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24sIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIC8vIFJlLWVuYWJsZSBzY3JvbGxpbmcgd2hlbiBjb21wb25lbnQgdW5tb3VudHNcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBvdmVyZmxvdztcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93biwgZmFsc2UpO1xuICAgICAgICB9O1xuICAgIH0sIFtoaWRlTW9kYWwsIGhhbmRsZVRhYktleV0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiBzZXRQb3J0YWwoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSwgW3NldFBvcnRhbCwgY29udGFpbmVyXSk7XG4gICAgcmV0dXJuIChwb3J0YWwgJiZcbiAgICAgICAgY3JlYXRlUG9ydGFsKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBcImFyaWEtbGFiZWxsZWRieVwiOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLXRpdGxlXCIsIFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIiwgY2xhc3NOYW1lOiBgd2FsbGV0LWFkYXB0ZXItbW9kYWwgJHtmYWRlSW4gJiYgJ3dhbGxldC1hZGFwdGVyLW1vZGFsLWZhZGUtaW4nfSAke2NsYXNzTmFtZX1gLCByZWY6IHJlZiwgcm9sZTogXCJkaWFsb2dcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGB3YWxsZXQtYWRhcHRlci1tb2RhbC13cmFwcGVyICR7IWxvZ28gJiYgJ3dhbGxldC1hZGFwdGVyLW1vZGFsLXdyYXBwZXItbm8tbG9nbyd9YCB9LFxuICAgICAgICAgICAgICAgICAgICBsb2dvICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWxvZ28td3JhcHBlclwiIH0sIHR5cGVvZiBsb2dvID09PSAnc3RyaW5nJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBhbHQ6IFwibG9nb1wiLCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtbG9nb1wiLCBzcmM6IGxvZ28gfSkgOiBsb2dvKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC10aXRsZVwiLCBpZDogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC10aXRsZVwiIH0sIFwiQ29ubmVjdCBXYWxsZXRcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBoYW5kbGVDbG9zZSwgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWJ1dHRvbi1jbG9zZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgd2lkdGg6IFwiMTRcIiwgaGVpZ2h0OiBcIjE0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTE0IDEyLjQ2MSA4LjMgNi43NzJsNS4yMzQtNS4yMzNMMTIuMDA2IDAgNi43NzIgNS4yMzQgMS41NCAwIDAgMS41MzlsNS4yMzQgNS4yMzNMMCAxMi4wMDZsMS41MzkgMS41MjhMNi43NzIgOC4zbDUuNjkgNS43TDE0IDEyLjQ2MXpcIiB9KSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtbGlzdFwiIH0sIGZlYXR1cmVkLm1hcCgod2FsbGV0KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRMaXN0SXRlbSwgeyBrZXk6IHdhbGxldC5uYW1lLCBoYW5kbGVDbGljazogKGV2ZW50KSA9PiBoYW5kbGVXYWxsZXRDbGljayhldmVudCwgd2FsbGV0Lm5hbWUpLCB3YWxsZXQ6IHdhbGxldCB9KSkpKSxcbiAgICAgICAgICAgICAgICAgICAgbW9yZS5sZW5ndGggPyAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0Q29sbGFwc2UsIHsgZXhwYW5kZWQ6IGV4cGFuZGVkLCBpZDogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1jb2xsYXBzZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWxpc3RcIiB9LCBtb3JlLm1hcCgod2FsbGV0KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRMaXN0SXRlbSwgeyBrZXk6IHdhbGxldC5uYW1lLCBoYW5kbGVDbGljazogKGV2ZW50KSA9PiBoYW5kbGVXYWxsZXRDbGljayhldmVudCwgd2FsbGV0Lm5hbWUpLCB0YWJJbmRleDogZXhwYW5kZWQgPyAwIDogLTEsIHdhbGxldDogd2FsbGV0IH0pKSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0QnV0dG9uLCB7IFwiYXJpYS1jb250cm9sc1wiOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWNvbGxhcHNlXCIsIFwiYXJpYS1leHBhbmRlZFwiOiBleHBhbmRlZCwgY2xhc3NOYW1lOiBgd2FsbGV0LWFkYXB0ZXItbW9kYWwtY29sbGFwc2UtYnV0dG9uICR7ZXhwYW5kZWQgJiYgJ3dhbGxldC1hZGFwdGVyLW1vZGFsLWNvbGxhcHNlLWJ1dHRvbi1hY3RpdmUnfWAsIGVuZEljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB3aWR0aDogXCIxMVwiLCBoZWlnaHQ6IFwiNlwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJtNS45MzggNS43MyA0LjI4LTQuMTI2YS45MTUuOTE1IDAgMCAwIDAtMS4zMjIgMSAxIDAgMCAwLTEuMzcxIDBMNS4yNTMgMy43MzYgMS42NTkuMjcyYTEgMSAwIDAgMC0xLjM3MSAwQS45My45MyAwIDAgMCAwIC45MzJjMCAuMjQ2LjEuNDguMjg4LjY2Mmw0LjI4IDQuMTI1YS45OS45OSAwIDAgMCAxLjM3LjAxelwiIH0pKSwgb25DbGljazogaGFuZGxlQ29sbGFwc2VDbGljayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkID8gJ0xlc3MnIDogJ01vcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG9wdGlvbnNcIikpKSA6IG51bGwpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtb3ZlcmxheVwiLCBvbk1vdXNlRG93bjogaGFuZGxlQ2xvc2UgfSkpLCBwb3J0YWwpKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LW1vZGFsLmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtYnV0dG9uJztcbmltcG9ydCB7IHVzZVdhbGxldE1vZGFsIH0gZnJvbSAnLi4vaG9va3MvdXNlLXdhbGxldC1tb2RhbCc7XG5pbXBvcnQgeyBXYWxsZXRDb25uZWN0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtY29ubmVjdC1idXR0b24nO1xuaW1wb3J0IHsgV2FsbGV0SWNvbiB9IGZyb20gJy4vd2FsbGV0LWljb24nO1xuaW1wb3J0IHsgV2FsbGV0TW9kYWxCdXR0b24gfSBmcm9tICcuL3dhbGxldC1tb2RhbC1idXR0b24nO1xuZXhwb3J0IGNvbnN0IFdhbGxldE11bHRpQnV0dG9uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRNdWx0aUJ1dHRvbihfYSkge1xuICAgIHZhciB7IGNoaWxkcmVuIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCJdKTtcbiAgICBjb25zdCB7IGFkZHJlc3MsIHdhbGxldCwgZGlzY29ubmVjdCB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgeyBzZXRWaXNpYmxlIH0gPSB1c2VXYWxsZXRNb2RhbCgpO1xuICAgIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgX2FkZHJlc3MgPSB1c2VNZW1vKCgpID0+IGFkZHJlc3MsIFthZGRyZXNzXSk7XG4gICAgY29uc3QgY29udGVudCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGRyZW4pXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIGlmICghd2FsbGV0IHx8ICFfYWRkcmVzcylcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gX2FkZHJlc3M7XG4gICAgfSwgW2NoaWxkcmVuLCB3YWxsZXQsIF9hZGRyZXNzXSk7XG4gICAgY29uc3QgY29weUFkZHJlc3MgPSB1c2VDYWxsYmFjaygoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChfYWRkcmVzcykge1xuICAgICAgICAgICAgeWllbGQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoX2FkZHJlc3MpO1xuICAgICAgICAgICAgc2V0Q29waWVkKHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb3BpZWQoZmFsc2UpLCA0MDApO1xuICAgICAgICB9XG4gICAgfSksIFtfYWRkcmVzc10pO1xuICAgIGNvbnN0IG9wZW5Ecm9wZG93biA9IHVzZUNhbGxiYWNrKCgpID0+IHNldEFjdGl2ZSh0cnVlKSwgW3NldEFjdGl2ZV0pO1xuICAgIGNvbnN0IGNsb3NlRHJvcGRvd24gPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRBY3RpdmUoZmFsc2UpLCBbc2V0QWN0aXZlXSk7XG4gICAgY29uc3Qgb3Blbk1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgfSwgW3NldFZpc2libGUsIGNsb3NlRHJvcGRvd25dKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHJlZi5jdXJyZW50O1xuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiBjbGlja2luZyBkcm9wZG93biBvciBpdHMgZGVzY2VuZGFudHNcbiAgICAgICAgICAgIGlmICghbm9kZSB8fCBub2RlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2xvc2VEcm9wZG93bigpO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgIH0sIFtyZWYsIGNsb3NlRHJvcGRvd25dKTtcbiAgICBpZiAoIXdhbGxldClcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0TW9kYWxCdXR0b24sIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgY2hpbGRyZW4pO1xuICAgIGlmICghX2FkZHJlc3MpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldENvbm5lY3RCdXR0b24sIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgY2hpbGRyZW4pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1kcm9wZG93blwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0QnV0dG9uLCBPYmplY3QuYXNzaWduKHsgXCJhcmlhLWV4cGFuZGVkXCI6IGFjdGl2ZSwgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi10cmlnZ2VyXCIsIHN0eWxlOiBPYmplY3QuYXNzaWduKHsgcG9pbnRlckV2ZW50czogYWN0aXZlID8gJ25vbmUnIDogJ2F1dG8nIH0sIHByb3BzLnN0eWxlKSwgb25DbGljazogb3BlbkRyb3Bkb3duLCBzdGFydEljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0SWNvbiwgeyB3YWxsZXQ6IHdhbGxldCB9KSB9LCBwcm9wcyksIGNvbnRlbnQpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBcImFyaWEtbGFiZWxcIjogXCJkcm9wZG93bi1saXN0XCIsIGNsYXNzTmFtZTogYHdhbGxldC1hZGFwdGVyLWRyb3Bkb3duLWxpc3QgJHthY3RpdmUgJiYgJ3dhbGxldC1hZGFwdGVyLWRyb3Bkb3duLWxpc3QtYWN0aXZlJ31gLCByZWY6IHJlZiwgcm9sZTogXCJtZW51XCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IG9uQ2xpY2s6IGNvcHlBZGRyZXNzLCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItZHJvcGRvd24tbGlzdC1pdGVtXCIsIHJvbGU6IFwibWVudWl0ZW1cIiB9LCBjb3BpZWQgPyAnQ29waWVkJyA6ICdDb3B5IGFkZHJlc3MnKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IG9uQ2xpY2s6IG9wZW5Nb2RhbCwgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWRyb3Bkb3duLWxpc3QtaXRlbVwiLCByb2xlOiBcIm1lbnVpdGVtXCIgfSwgXCJDb25uZWN0IGEgZGlmZmVyZW50IHdhbGxldFwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IG9uQ2xpY2s6IGRpc2Nvbm5lY3QsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0LWl0ZW1cIiwgcm9sZTogXCJtZW51aXRlbVwiIH0sIFwiRGlzY29ubmVjdFwiKSkpKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LW11bHRpLWJ1dHRvbi5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL3VzZS13YWxsZXQtbW9kYWwnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBXYWxsZXRNb2RhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VXYWxsZXRNb2RhbCgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChXYWxsZXRNb2RhbENvbnRleHQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXdhbGxldC1tb2RhbC5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2hvb2tzJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL3dhbGxldC1wcm92aWRlcic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IFdhbGxldE5vdENvbm5lY3RlZEVycm9yLCBXYWxsZXROb3RSZWFkeUVycm9yLCB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvciB9IGZyb20gJy4uL3V0aWxzL2Vycm9ycyc7XG5pbXBvcnQgeyBXYWxsZXRDb250ZXh0IH0gZnJvbSAnLi4vaG9va3MvdXNlLXdhbGxldCc7XG5jb25zdCBXQUxMRVRfSU5JVElBTF9TVEFURSA9IHtcbiAgICB3YWxsZXQ6IG51bGwsXG4gICAgYWRhcHRlcjogbnVsbCxcbiAgICByZWFkeTogZmFsc2UsXG4gICAgYWRkcmVzczogbnVsbCxcbiAgICBjb25uZWN0ZWQ6IGZhbHNlLFxufTtcbmV4cG9ydCBjb25zdCBXYWxsZXRQcm92aWRlciA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0UHJvdmlkZXIoeyBjaGlsZHJlbiwgd2FsbGV0cywgYXV0b0Nvbm5lY3QgPSBmYWxzZSwgb25FcnJvcjogX29uRXJyb3IgPSAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLCB9KSB7XG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgLy8gVGhlIG1haW4gc3RhdGUgb2YgdGhlIHdhbGxldCBwcm92aWRlclxuICAgIGNvbnN0IFt7IHdhbGxldCwgYWRhcHRlciwgcmVhZHksIGFkZHJlc3MsIGNvbm5lY3RlZCB9LCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShXQUxMRVRfSU5JVElBTF9TVEFURSk7XG4gICAgY29uc3QgW2Nvbm5lY3RpbmcsIHNldENvbm5lY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkaXNjb25uZWN0aW5nLCBzZXREaXNjb25uZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBpc0Nvbm5lY3RpbmcgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IGlzRGlzY29ubmVjdGluZyA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgaXNVbmxvYWRpbmcgPSB1c2VSZWYoZmFsc2UpO1xuICAgIC8vIE1hcCB3YWxsZXQgbmFtZXMgdG8gd2FsbGV0cyBmb3IgZWFzaWVyIHVzYWdlXG4gICAgY29uc3Qgd2FsbGV0c0J5TmFtZSA9IHVzZU1lbW8oKCkgPT4gd2FsbGV0cy5yZWR1Y2UoKHdhbGxldHNCeU5hbWUsIHdhbGxldCkgPT4ge1xuICAgICAgICB3YWxsZXRzQnlOYW1lW3dhbGxldC5uYW1lXSA9IHdhbGxldDtcbiAgICAgICAgcmV0dXJuIHdhbGxldHNCeU5hbWU7XG4gICAgfSwge30pLCBbd2FsbGV0c10pO1xuICAgIC8vIFdoZW4gdGhlIHNlbGVjdGVkIHdhbGxldCBjaGFuZ2VzLCByZS1pbml0aWFsaXplIHRoZSBzdGF0ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdhbGxldCA9IChuYW1lICYmIHdhbGxldHNCeU5hbWVbbmFtZV0pIHx8IG51bGw7XG4gICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB3YWxsZXQgJiYgd2FsbGV0LmFkYXB0ZXIoKTtcbiAgICAgICAgaWYgKGFkYXB0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVhZHksIGFkZHJlc3MsIGNvbm5lY3RlZCB9ID0gYWRhcHRlcjtcbiAgICAgICAgICAgIHNldFN0YXRlKHsgd2FsbGV0LCBhZGFwdGVyLCBjb25uZWN0ZWQsIGFkZHJlc3MsIHJlYWR5IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0U3RhdGUoV0FMTEVUX0lOSVRJQUxfU1RBVEUpO1xuICAgICAgICB9XG4gICAgfSwgW25hbWUsIHdhbGxldHNCeU5hbWUsIHNldFN0YXRlXSk7XG4gICAgLy8gSWYgYXV0b0Nvbm5lY3QgaXMgZW5hYmxlZCwgdHJ5IHRvIGNvbm5lY3Qgd2hlbiB0aGUgYWRhcHRlciBjaGFuZ2VzIGFuZCBpcyByZWFkeVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc0Nvbm5lY3RpbmcuY3VycmVudCB8fCBjb25uZWN0aW5nIHx8IGNvbm5lY3RlZCB8fCAhYXV0b0Nvbm5lY3QgfHwgIWFkYXB0ZXIgfHwgIXJlYWR5KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBpc0Nvbm5lY3RpbmcuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0Q29ubmVjdGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBhZGFwdGVyLmNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgdGhyb3cgZXJyb3IsIGJ1dCBvbkVycm9yIHdpbGwgc3RpbGwgYmUgY2FsbGVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaXNDb25uZWN0aW5nLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkoKTtcbiAgICB9LCBbaXNDb25uZWN0aW5nLCBjb25uZWN0aW5nLCBjb25uZWN0ZWQsIGF1dG9Db25uZWN0LCBhZGFwdGVyLCByZWFkeSwgc2V0Q29ubmVjdGluZywgc2V0TmFtZV0pO1xuICAgIC8vIElmIHRoZSB3aW5kb3cgaXMgY2xvc2luZyBvciByZWxvYWRpbmcsIGlnbm9yZSBkaXNjb25uZWN0IGFuZCBlcnJvciBldmVudHMgZnJvbSB0aGUgYWRhcHRlclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgICAgICAgaXNVbmxvYWRpbmcuY3VycmVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBsaXN0ZW5lcik7XG4gICAgfSwgW2lzVW5sb2FkaW5nXSk7XG4gICAgLy8gU2VsZWN0IGEgd2FsbGV0IGJ5IG5hbWVcbiAgICBjb25zdCBzZWxlY3QgPSB1c2VDYWxsYmFjaygobmV3TmFtZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAobmFtZSA9PT0gbmV3TmFtZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGFkYXB0ZXIpXG4gICAgICAgICAgICB5aWVsZCBhZGFwdGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgc2V0TmFtZShuZXdOYW1lKTtcbiAgICB9KSwgW25hbWUsIGFkYXB0ZXIsIHNldE5hbWVdKTtcbiAgICAvLyBIYW5kbGUgdGhlIGFkYXB0ZXIncyByZWFkeSBldmVudFxuICAgIGNvbnN0IG9uUmVhZHkgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRTdGF0ZSgoc3RhdGUpID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyByZWFkeTogdHJ1ZSB9KSkpLCBbc2V0U3RhdGVdKTtcbiAgICAvLyBIYW5kbGUgdGhlIGFkYXB0ZXIncyBjb25uZWN0IGV2ZW50XG4gICAgY29uc3Qgb25Db25uZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHsgY29ubmVjdGVkLCBhZGRyZXNzLCByZWFkeSB9ID0gYWRhcHRlcjtcbiAgICAgICAgc2V0U3RhdGUoKHN0YXRlKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHsgY29ubmVjdGVkLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIHJlYWR5IH0pKSk7XG4gICAgfSwgW2FkYXB0ZXIsIHNldFN0YXRlXSk7XG4gICAgLy8gSGFuZGxlIHRoZSBhZGFwdGVyJ3MgZGlzY29ubmVjdCBldmVudFxuICAgIGNvbnN0IG9uRGlzY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIHNlbGVjdGVkIHdhbGxldCB1bmxlc3MgdGhlIHdpbmRvdyBpcyB1bmxvYWRpbmdcbiAgICAgICAgaWYgKCFpc1VubG9hZGluZy5jdXJyZW50KVxuICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICB9LCBbaXNVbmxvYWRpbmcsIHNldE5hbWVdKTtcbiAgICAvLyBIYW5kbGUgdGhlIGFkYXB0ZXIncyBlcnJvciBldmVudCwgYW5kIGxvY2FsIGVycm9yc1xuICAgIGNvbnN0IG9uRXJyb3IgPSB1c2VDYWxsYmFjaygoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgcHJvdmlkZWQgZXJyb3IgaGFuZGxlciB1bmxlc3MgdGhlIHdpbmRvdyBpcyB1bmxvYWRpbmdcbiAgICAgICAgaWYgKCFpc1VubG9hZGluZy5jdXJyZW50KVxuICAgICAgICAgICAgX29uRXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfSwgW2lzVW5sb2FkaW5nLCBfb25FcnJvcl0pO1xuICAgIC8vIENvbm5lY3QgdGhlIGFkYXB0ZXIgdG8gdGhlIHdhbGxldFxuICAgIGNvbnN0IGNvbm5lY3QgPSB1c2VDYWxsYmFjaygoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChpc0Nvbm5lY3RpbmcuY3VycmVudCB8fCBjb25uZWN0aW5nIHx8IGRpc2Nvbm5lY3RpbmcgfHwgY29ubmVjdGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIXdhbGxldCB8fCAhYWRhcHRlcilcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKSk7XG4gICAgICAgIGlmICghcmVhZHkpIHtcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCB3YWxsZXRcbiAgICAgICAgICAgIHNldE5hbWUobnVsbCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih3YWxsZXQudXJsLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RSZWFkeUVycm9yKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlzQ29ubmVjdGluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgc2V0Q29ubmVjdGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHNlbGVjdGVkIHdhbGxldFxuICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICAgICAgICAgIC8vIFJldGhyb3cgdGhlIGVycm9yLCBhbmQgb25FcnJvciB3aWxsIGFsc28gYmUgY2FsbGVkXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldENvbm5lY3RpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaXNDb25uZWN0aW5nLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pLCBbaXNDb25uZWN0aW5nLCBjb25uZWN0aW5nLCBkaXNjb25uZWN0aW5nLCBjb25uZWN0ZWQsIHdhbGxldCwgYWRhcHRlciwgb25FcnJvciwgcmVhZHksIHNldENvbm5lY3RpbmcsIHNldE5hbWVdKTtcbiAgICAvLyBEaXNjb25uZWN0IHRoZSBhZGFwdGVyIGZyb20gdGhlIHdhbGxldFxuICAgIGNvbnN0IGRpc2Nvbm5lY3QgPSB1c2VDYWxsYmFjaygoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChpc0Rpc2Nvbm5lY3RpbmcuY3VycmVudCB8fCBkaXNjb25uZWN0aW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICByZXR1cm4gc2V0TmFtZShudWxsKTtcbiAgICAgICAgaXNEaXNjb25uZWN0aW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBzZXREaXNjb25uZWN0aW5nKHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgeWllbGQgYWRhcHRlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgc2VsZWN0ZWQgd2FsbGV0XG4gICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgICAgICAgICAgLy8gUmV0aHJvdyB0aGUgZXJyb3IsIGFuZCBvbkVycm9yIHdpbGwgYWxzbyBiZSBjYWxsZWRcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0RGlzY29ubmVjdGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpc0Rpc2Nvbm5lY3RpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSksIFtpc0Rpc2Nvbm5lY3RpbmcsIGRpc2Nvbm5lY3RpbmcsIGFkYXB0ZXIsIHNldERpc2Nvbm5lY3RpbmcsIHNldE5hbWVdKTtcbiAgICBjb25zdCBpbnZva2VSZWFkID0gdXNlQ2FsbGJhY2soKHJlcXVlc3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuaW52b2tlUmVhZChyZXF1ZXN0KTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIGNvbnN0IGludm9rZVJlYWRNdWx0aSA9IHVzZUNhbGxiYWNrKChyZXF1ZXN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKSk7XG4gICAgICAgIGlmICghY29ubmVjdGVkKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLmludm9rZVJlYWRNdWx0aShyZXF1ZXN0KTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIGNvbnN0IGludm9rZSA9IHVzZUNhbGxiYWNrKChyZXF1ZXN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKSk7XG4gICAgICAgIGlmICghY29ubmVjdGVkKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLmludm9rZShyZXF1ZXN0KTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIGNvbnN0IGludm9rZU11bHRpID0gdXNlQ2FsbGJhY2soKHJlcXVlc3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuaW52b2tlTXVsdGkocmVxdWVzdCk7XG4gICAgfSksIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICBjb25zdCBnZXROZXR3b3JrcyA9IHVzZUNhbGxiYWNrKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuZ2V0TmV0d29ya3MoKTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIGNvbnN0IHNpZ25NZXNzYWdlID0gdXNlQ2FsbGJhY2soKHJlcXVlc3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuc2lnbk1lc3NhZ2UocmVxdWVzdCk7XG4gICAgfSksIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICAvLyBTZXR1cCBhbmQgdGVhcmRvd24gZXZlbnQgbGlzdGVuZXJzIHdoZW4gdGhlIGFkYXB0ZXIgY2hhbmdlc1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChhZGFwdGVyKSB7XG4gICAgICAgICAgICBhZGFwdGVyLm9uKCdyZWFkeScsIG9uUmVhZHkpO1xuICAgICAgICAgICAgYWRhcHRlci5vbignY29ubmVjdCcsIG9uQ29ubmVjdCk7XG4gICAgICAgICAgICBhZGFwdGVyLm9uKCdkaXNjb25uZWN0Jywgb25EaXNjb25uZWN0KTtcbiAgICAgICAgICAgIGFkYXB0ZXIub24oJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIub2ZmKCdyZWFkeScsIG9uUmVhZHkpO1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIub2ZmKCdjb25uZWN0Jywgb25Db25uZWN0KTtcbiAgICAgICAgICAgICAgICBhZGFwdGVyLm9mZignZGlzY29ubmVjdCcsIG9uRGlzY29ubmVjdCk7XG4gICAgICAgICAgICAgICAgYWRhcHRlci5vZmYoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW2FkYXB0ZXIsIG9uUmVhZHksIG9uQ29ubmVjdCwgb25EaXNjb25uZWN0LCBvbkVycm9yXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHtcbiAgICAgICAgICAgIHdhbGxldHMsXG4gICAgICAgICAgICBhdXRvQ29ubmVjdCxcbiAgICAgICAgICAgIHdhbGxldCxcbiAgICAgICAgICAgIGFkYXB0ZXIsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgcmVhZHksXG4gICAgICAgICAgICBjb25uZWN0ZWQsXG4gICAgICAgICAgICBjb25uZWN0aW5nLFxuICAgICAgICAgICAgZGlzY29ubmVjdGluZyxcbiAgICAgICAgICAgIHNlbGVjdCxcbiAgICAgICAgICAgIGNvbm5lY3QsXG4gICAgICAgICAgICBkaXNjb25uZWN0LFxuICAgICAgICAgICAgaW52b2tlUmVhZCxcbiAgICAgICAgICAgIGludm9rZVJlYWRNdWx0aSxcbiAgICAgICAgICAgIGludm9rZSxcbiAgICAgICAgICAgIGludm9rZU11bHRpLFxuICAgICAgICAgICAgZ2V0TmV0d29ya3MsXG4gICAgICAgICAgICBzaWduTWVzc2FnZSxcbiAgICAgICAgfSB9LCBjaGlsZHJlbikpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtcHJvdmlkZXIuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi91c2Utd2FsbGV0Jztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgV2FsbGV0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVdhbGxldCgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChXYWxsZXRDb250ZXh0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS13YWxsZXQuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vaG9va3MnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBXYWxsZXRFcnJvciB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlJztcbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RTZWxlY3RlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcic7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3JzLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vZXJyb3JzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgV2NTZGsgfSBmcm9tICdAY2l0eW9memlvbi93YWxsZXQtY29ubmVjdC1zZGstY29yZSc7XG5pbXBvcnQgeyBCYXNlV2FsbGV0QWRhcHRlciwgV2FsbGV0QWNjb3VudEVycm9yLCBXYWxsZXRDb25uZWN0aW9uRXJyb3IsIFdhbGxldERpc2Nvbm5lY3RlZEVycm9yLCBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IsIFdhbGxldEVycm9yLCBXYWxsZXROb3RDb25uZWN0ZWRFcnJvciwgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZSc7XG5pbXBvcnQgUVJDb2RlTW9kYWwgZnJvbSAnQHdhbGxldGNvbm5lY3QvcXJjb2RlLW1vZGFsJztcbmV4cG9ydCBjbGFzcyBXYWxsZXRDb25uZWN0V2FsbGV0QWRhcHRlciBleHRlbmRzIEJhc2VXYWxsZXRBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIG5lb25XYWxsZXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fd2FsbGV0Q29ubmVjdENoYWlucyA9IFsnbmVvMzptYWlubmV0JywgJ25lbzM6dGVzdG5ldCcsICduZW8zOnByaXZhdGUnXTtcbiAgICAgICAgdGhpcy5fYWRkcmVzcyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zO1xuICAgICAgICB0aGlzLl9sb2dnZXIgPSBjb25maWcubG9nZ2VyO1xuICAgICAgICB0aGlzLl9yZWxheVByb3ZpZGVyID0gY29uZmlnLnJlbGF5UHJvdmlkZXI7XG4gICAgICAgIHRoaXMuX25lb25XYWxsZXQgPSBuZW9uV2FsbGV0ID8gbmVvbldhbGxldCA6IGZhbHNlO1xuICAgIH1cbiAgICBnZXQgYWRkcmVzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZHJlc3M7XG4gICAgfVxuICAgIGdldCByZWFkeSgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuICAgIH1cbiAgICBnZXQgY29ubmVjdGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3Rpbmc7XG4gICAgfVxuICAgIGdldCBjb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2FkZHJlc3M7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCB8fCB0aGlzLmNvbm5lY3RpbmcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgd2FsbGV0Q29ubmVjdEluc3RhbmNlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB3YWxsZXRjb25uZWN0IGNveiBpbnN0YW5jZVxuICAgICAgICAgICAgICAgICAgICB3YWxsZXRDb25uZWN0SW5zdGFuY2UgPSBuZXcgV2NTZGsoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBpdFxuICAgICAgICAgICAgICAgICAgICB5aWVsZCB3YWxsZXRDb25uZWN0SW5zdGFuY2UuaW5pdENsaWVudCh0aGlzLl9sb2dnZXIsIHRoaXMuX3JlbGF5UHJvdmlkZXIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmVvbldhbGxldENvbm5lY3RXaW5kb3c7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1YnNjcmliZSB0byB3YyBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgd2FsbGV0Q29ubmVjdEluc3RhbmNlLnN1YnNjcmliZVRvRXZlbnRzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvcG9zYWw6ICh1cmkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmVvbldhbGxldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZW9uV2FsbGV0Q29ubmVjdFdpbmRvdyA9IHdpbmRvdyA9PT0gbnVsbCB8fCB3aW5kb3cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbmRvdy5vcGVuKGBodHRwczovL25lb24uY296LmlvL2Nvbm5lY3Q/dXJpPSR7dXJpfWAsICdfYmxhbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVvbldhbGxldENvbm5lY3RXaW5kb3cgPT09IG51bGwgfHwgbmVvbldhbGxldENvbm5lY3RXaW5kb3cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5lb25XYWxsZXRDb25uZWN0V2luZG93LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93IHRoZSBRUkNvZGUsIHlvdSBjYW4gdXNlIEB3YWxsZXRjb25uZWN0L3FyY29kZS1tb2RhbCB0byBkbyBzbywgYnV0IGFueSBRUkNvZGUgcHJlc2VudGF0aW9uIGlzIGZpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUVJDb2RlTW9kYWwub3Blbih1cmksICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVoZWgganVzdCBzaG93IHRoYXQhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZWQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoZXJlIGlzIHdoZXJlIHlvdSBkZXNjcmliZSBhIGxvZ291dCBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rpc2Nvbm5lY3RlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvYWQgYW55IGV4aXN0aW5nIGNvbm5lY3Rpb24sIGl0IHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgdGhlIGluaXRpYWxpemF0aW9uLCB0byByZWVzdGFibGlzaCBjb25uZWN0aW9ucyBtYWRlIHByZXZpb3VzbHlcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgd2FsbGV0Q29ubmVjdEluc3RhbmNlLmxvYWRTZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzZXNzaW9uIGhhcyBub3QgYmVlbiBsb2FkZWQgdHJ5IHRvIGxvYWQgaXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3YWxsZXRDb25uZWN0SW5zdGFuY2Uuc2Vzc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgaGVyZSB3ZSBuZWVkIHRvIGNvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHdhbGxldENvbm5lY3RJbnN0YW5jZS5jb25uZWN0KHRoaXMuX29wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHByb21pc2Ugd2lsbCBiZSByZXNvbHZlZCBhZnRlciB0aGUgY29ubmVjdGlvbiBpcyBhY2NlcHRlZCBvciByZWZ1c2VkLCB5b3UgY2FuIGNsb3NlIHRoZSBRUkNvZGUgbW9kYWwgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX25lb25XYWxsZXQgJiYgbmVvbldhbGxldENvbm5lY3RXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZW9uV2FsbGV0Q29ubmVjdFdpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUVJDb2RlTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgV2FsbGV0RXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldENvbm5lY3Rpb25FcnJvcihlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXdhbGxldENvbm5lY3RJbnN0YW5jZS5zZXNzaW9uKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0QWNjb3VudEVycm9yKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkcmVzcyA9IHdhbGxldENvbm5lY3RJbnN0YW5jZS5hY2NvdW50QWRkcmVzcztcbiAgICAgICAgICAgICAgICB0aGlzLl93YWxsZXRDb25uZWN0SW5zdGFuY2UgPSB3YWxsZXRDb25uZWN0SW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjb25uZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldENvbm5lY3RJbnN0YW5jZSA9IHRoaXMuX3dhbGxldENvbm5lY3RJbnN0YW5jZTtcbiAgICAgICAgICAgIGlmICh3YWxsZXRDb25uZWN0SW5zdGFuY2UgJiYgd2FsbGV0Q29ubmVjdEluc3RhbmNlLnNlc3Npb24pIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB3YWxsZXRDb25uZWN0SW5zdGFuY2UuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IoZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm1lc3NhZ2UsIGVycm9yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRyZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2FsbGV0Q29ubmVjdEluc3RhbmNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZGlzY29ubmVjdCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW52b2tlUmVhZChyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXRDb25uZWN0SW5zdGFuY2UgPSB0aGlzLl93YWxsZXRDb25uZWN0SW5zdGFuY2U7XG4gICAgICAgICAgICBpZiAoIXdhbGxldENvbm5lY3RJbnN0YW5jZSB8fCAhd2FsbGV0Q29ubmVjdEluc3RhbmNlLnNlc3Npb24pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgd2FsbGV0Q29ubmVjdEluc3RhbmNlLnRlc3RJbnZva2Uoe1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHRIYXNoOiByZXF1ZXN0LnNjcmlwdEhhc2gsXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogcmVxdWVzdC5vcGVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGFyZ3M6IHJlcXVlc3QuYXJncyxcbiAgICAgICAgICAgICAgICAgICAgYWJvcnRPbkZhaWw6IHJlcXVlc3QuYWJvcnRPbkZhaWwsXG4gICAgICAgICAgICAgICAgfSwgcmVxdWVzdC5zaWduZXJzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUb1JlYWRSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludm9rZVJlYWRNdWx0aShyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXRDb25uZWN0SW5zdGFuY2UgPSB0aGlzLl93YWxsZXRDb25uZWN0SW5zdGFuY2U7XG4gICAgICAgICAgICBpZiAoIXdhbGxldENvbm5lY3RJbnN0YW5jZSB8fCAhd2FsbGV0Q29ubmVjdEluc3RhbmNlLnNlc3Npb24pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgd2FsbGV0Q29ubmVjdEluc3RhbmNlLnRlc3RJbnZva2UocmVxdWVzdC5pbnZvY2F0aW9ucywgcmVxdWVzdC5zaWduZXJzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUb1JlYWRSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGludm9rZShyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCB3YWxsZXRDb25uZWN0SW5zdGFuY2UgPSB0aGlzLl93YWxsZXRDb25uZWN0SW5zdGFuY2U7XG4gICAgICAgICAgICBpZiAoIXdhbGxldENvbm5lY3RJbnN0YW5jZSB8fCAhd2FsbGV0Q29ubmVjdEluc3RhbmNlLnNlc3Npb24pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgd2FsbGV0Q29ubmVjdEluc3RhbmNlLmludm9rZUZ1bmN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0SGFzaDogcmVxdWVzdC5zY3JpcHRIYXNoLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IHJlcXVlc3Qub3BlcmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBhcmdzOiByZXF1ZXN0LmFyZ3MsXG4gICAgICAgICAgICAgICAgICAgIGFib3J0T25GYWlsOiByZXF1ZXN0LmFib3J0T25GYWlsLFxuICAgICAgICAgICAgICAgIH0sIHJlcXVlc3Quc2lnbmVycyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlVG9Xcml0ZVJlc3VsdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW52b2tlTXVsdGkocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0Q29ubmVjdEluc3RhbmNlID0gdGhpcy5fd2FsbGV0Q29ubmVjdEluc3RhbmNlO1xuICAgICAgICAgICAgaWYgKCF3YWxsZXRDb25uZWN0SW5zdGFuY2UgfHwgIXdhbGxldENvbm5lY3RJbnN0YW5jZS5zZXNzaW9uKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHdhbGxldENvbm5lY3RJbnN0YW5jZS5pbnZva2VGdW5jdGlvbihyZXF1ZXN0Lmludm9jYXRpb25zLCByZXF1ZXN0LnNpZ25lcnMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvV3JpdGVSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldE5ldHdvcmtzKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YWxsZXRDb25uZWN0SW5zdGFuY2UgPSB0aGlzLl93YWxsZXRDb25uZWN0SW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgaWYgKCF3YWxsZXRDb25uZWN0SW5zdGFuY2UgfHwgIXdhbGxldENvbm5lY3RJbnN0YW5jZS5zZXNzaW9uKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VUb0dldE5ldHdvcmtzUmVzdWx0KHdhbGxldENvbm5lY3RJbnN0YW5jZS5jaGFpbklkID8gd2FsbGV0Q29ubmVjdEluc3RhbmNlLmNoYWluSWQgOiAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnbk1lc3NhZ2UocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3Qgd2FsbGV0Q29ubmVjdEluc3RhbmNlID0gdGhpcy5fd2FsbGV0Q29ubmVjdEluc3RhbmNlO1xuICAgICAgICAgICAgaWYgKCF3YWxsZXRDb25uZWN0SW5zdGFuY2UgfHwgIXdhbGxldENvbm5lY3RJbnN0YW5jZS5zZXNzaW9uKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIHdhbGxldENvbm5lY3RJbnN0YW5jZS5zaWduTWVzc2FnZShyZXF1ZXN0Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVRvU2lnbk1lc3NhZ2VSZXN1bHQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZXNwb25zZVRvUmVhZFJlc3VsdChyZXNwb25zZSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAvLyBJZiB0aGUgc3RhdGUgaXMgaGFsdCBpdCBtZWFucyB0aGF0IGV2ZXJ5dGhpbmcgd2VudCB3ZWxsXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQuc3RhdGUgPT09ICdIQUxUJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZS5yZXN1bHQpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UgYW4gZXJyb3Igb2NjdXJyZWQgYW5kIHNvIHJldHVybiBpdFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTogKF9hID0gcmVzcG9uc2UucmVzdWx0LmVycm9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWVzc2FnZSxcbiAgICAgICAgICAgIGNvZGU6IChfYiA9IHJlc3BvbnNlLnJlc3VsdC5lcnJvcikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNvZGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIF9yZXNwb25zZVRvV3JpdGVSZXN1bHQocmVzcG9uc2UpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gSWYgdGhlIHN0YXRlIGlzIGhhbHQgaXQgbWVhbnMgdGhhdCBldmVyeXRoaW5nIHdlbnQgd2VsbFxuICAgICAgICBpZiAocmVzcG9uc2UucmVzdWx0LnN0YXRlID09PSAnSEFMVCcpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgcmVzcG9uc2UucmVzdWx0KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGFuIGVycm9yIG9jY3VycmVkIGFuZCBzbyByZXR1cm4gaXRcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IChfYSA9IHJlc3BvbnNlLnJlc3VsdC5lcnJvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm1lc3NhZ2UsXG4gICAgICAgICAgICBjb2RlOiAoX2IgPSByZXNwb25zZS5yZXN1bHQuZXJyb3IpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jb2RlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfcmVzcG9uc2VUb0dldE5ldHdvcmtzUmVzdWx0KHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBuZXR3b3JrczogdGhpcy5fd2FsbGV0Q29ubmVjdENoYWlucyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TmV0d29yazogcmVzcG9uc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfcmVzcG9uc2VUb1NpZ25NZXNzYWdlUmVzdWx0KHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBwdWJsaWNLZXk6IHJlc3BvbnNlLnJlc3VsdC5wdWJsaWNLZXksXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UucmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgICAgc2FsdDogcmVzcG9uc2UucmVzdWx0LnNhbHQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UucmVzdWx0Lm1lc3NhZ2VIZXgsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBfZGlzY29ubmVjdGVkKCkge1xuICAgICAgICBjb25zdCB3YWxsZXRDb25uZWN0SW5zdGFuY2UgPSB0aGlzLl93YWxsZXRDb25uZWN0SW5zdGFuY2U7XG4gICAgICAgIGlmICh3YWxsZXRDb25uZWN0SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkZHJlc3MgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fd2FsbGV0Q29ubmVjdEluc3RhbmNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBXYWxsZXREaXNjb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZGlzY29ubmVjdCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRhcHRlci5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2FkYXB0ZXInO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL25lb2xpbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9vMyc7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldGNvbm5lY3QnO1xuZXhwb3J0ICogZnJvbSAnLi9vbmVnYXRlJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IE5lb0xpbmVXYWxsZXRBZGFwdGVyIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5lb2xpbmUnO1xuaW1wb3J0IHsgV2FsbGV0TmFtZSB9IGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0IGNvbnN0IGdldE5lb0xpbmVXYWxsZXQgPSAoY29uZmlnKSA9PiAoe1xuICAgIG5hbWU6IFdhbGxldE5hbWUuTmVvTGluZSxcbiAgICB1cmw6ICdodHRwczovL25lb2xpbmUuaW8vJyxcbiAgICBpY29uOiAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBTUNBZ2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lCd2dJQ0FnSUJ3Z0lDQWdJQndnSUJ3b0lDQWdJQ1FrSkNBY0xEUW9JRFFnSUNRZ0JBd1FFQmdVR0NnWUdDaEFOQ2cwT0VBME5EdzRPRFE0TkRRME5EUTBORFEwTkRRME5EUTBORFEwTkR3ME5EUTBORFEwTkRRME5EUTBORFEwTkRRME5EZi9BQUJFSUFJQUFnQU1CRVFBQ0VRRURFUUgveEFBY0FBQUJCUUVCQVFBQUFBQUFBQUFBQUFBQ0FBUUZCZ2NCQXdqL3hBQkVFQUFDQUFRQ0JRZ0dCd1VKQVFBQUFBQUJBZ0FEQkJFU0lRVUdCekZoRXlJeVFWRnhjcUVJVW9HUnNkRVZJeVFsUW5PekZKTEJ3dE16UTJLQ29yTEQwdUUxLzhRQUhBRUFBZ0lEQVFFQUFBQUFBQUFBQUFBQUFBSURCQUVGQmdjSS84UUFQeEVBQWdFQ0FnWUZDZ1FFQndFQUFBQUFBQUVDQXhFRUlRVUdFakZCY1RKaGdaR3hFeFFpTTBKUlVxSEI4SEt5d3RFakpDV0NGalExWXBMUzhRZi8yZ0FNQXdFQUFoRURFUUEvQU5OY2I0NmMrTEdtZVpCN1l5STBBYjhZQkdtQ1NZQldtQ2J3Q05NQWc5cGpJanVDYnhrVjNBSlBiQUkwemhNQWpUQk1aRWFZQkI3VEFJN2dtL0dBWE1BM2dGWUp2MndDTk1FKzJNaXU1eFFid0M1M0xPNlptSVRyV2dDc1pFc0NWZ0UyUURMaklyUUpsd0NiSUJXQVJ4Qkt3Q3VJSlNNaU9JQlNNM0VzQVVnRmNUaFdNaU9JSldBUnhCS1FDT0lCU0FXd0JTQVd3bFRNUUNwWmxwbUxtWWhPdWNjd0NrQkcwQVVqSXJRSlNBV3dCV01pTkFsWXlLMEFVZ0VhRGtVRE4wVko0OVh2M1JodXcwS001OUZIdk8wRk1BdmEvaE56N3ZsR05wRWs4SFVqbmEvSWozbDJ5T1hBd3hSY2JaTUFwR1JHZ1NrWnVMWUFyQUk0Z2xZeUk0Z2xZQkhFNHFaaUF3bG1XcDB6TVFuWE5abmt5d0NOQURQZG4zUmtqdGZjY0t4Z1ZvU1NDY2dDVHd6Z3VZVUhKMlN1UFpHcnpucEVLUGVZWGJSY2hnWlM2V1JJMCtoRVhxeEh0YlB5M1FyazJYWVlPbkRoZm1QQXNZTE5qbG9CYkhqUHBGYnBBR00zSVowb3o2U0l1cDFiVTlFbGVCekh6K01NcEd1cVlDTDZMc1JWVG9XWXY0Ymp0WFB5MytVUHRJMXRUQ1ZJY0w4aGd5UXhTY1FETGpOeEdnU2tadUswY1ZjNEJkbk10THBtWWdPdmNjeTA3S3REUzUra2FXVk9RUExabkxJMjVzRXAzVUVkWXhLQ1J1TzZJYTBuR0RhTjlxOWhhZUowalJwVm83VUczZFBjN1JiVisxYmkyZWtYcXJUMDAybGFSS1NUeXN1YmpXV29SRHlaVENjSXNBYk1RU0JubEVPRm5LU2QyZEZydG8vRDRTdFJsaDRLRzBwWFVWWmVqczJ5V1Y4elBxSFFpbFF4dWJpOXR3aTA1SEYwY0pCeFVwWjNKR1hJQzVBQURoQ0Y1UVVWWklKWlJKQUFKSk5nQUxrazdnQU15WUFVVzNaSzdlNWNXZTFmb3FiS0lFMlZNbEZzd0ppTWhJNFlnTHdxYWU1a3RiRFZhTFNxd2xGdmR0SnEvSzQwS1F4V3NBVWpJdGdTc1pGc2NJZ0VzTWFuUzB0Y3I0ajJMbi81REpNcHp4Rk9HVjd2cUkydldaTVV0eWFxQUwzYnAyRU1ySW9WbFVxeGNuQkpMMzd5RUt4SWFqWkJLd0NPSnhVekhmQVkyY3kwekVpRTY1b3VleFpmdlNrNzV2NkV5SU1SNnQvZkU2YlZkZjFXaHpsK1NSYy9TaUgxbEQ0S2o0eVlyNFBkTHNPbjErVjZtSDVUL1FaelFMekU4SWkyemlLVWZRanlQWXJHQjdGdTJUYVFsU2E1SG5GVlVveW96YmxtRzFpU2VqY1hXL0dJSzZiaFpIUzZ1VnFWREhSbldhU3MwbTl5ay9ESzY3VFF0dCttcWRxVVNzYVBOTHEwc0tReFd4NXpHMjRGYnJ4dnd5cTRlTDJyOERzOWE4Vmg1WVh5VzBuTnRPTm1tMWJlK3BXeTZ6Q1NzYkk4aXNOcW1zUk9rd0hEZWZkR1VybGVwVWhEcE1aR3ZkLzdPV2JlczJROTBOYTI4cStXblAxY2UxZ2ZRN04vYU9UL0FJVnlXRGF0dUY4MWxQMXNyOVMzRHVSUXFuUlVENHhpOXl4Q2pDSFJSNTZRWDZ0L0NZeXQ1SFhYOE9YSXFXR0pqbU5rQXBHUmJIRlRPQVhaTFM2NW1JVHJtaTQ3R1YrOUtUdm0vb1RJZ3hIcTM5OFRwZFdWL1ZLUDkzNUpGejlKNGZXVVhncVBqS2l2ZzkwdXc2WFh4WHFZZmxQOUpuZENuTVh3aUxUM25GVWw2QzVIcVZnSkxEM1FXaGpVVHBVa0VMeWpoY1JGN0RyTnVzMjNEdGhaUzJVMldjSmhYaXE4S0tkdHAydjdpd2JSZG5LMEJsRkpobUpOeERuQUJneTJ2dXlJSWIyY1locFZkdTV1Tk42RVdqWEJ3bHRSbGZmdlRWdms3bGMwUHFsUHJHTXFuVzdXemNteVN3ZXRtNnVBQUpQVUlsbFVVTTVHancyamNSajVPamgxbnhieVVldHY3Yk5KMFA2TTBoVkhLMUR2TXRtVVVLQTNERVd1UFlEM1JWbGkyOXlPNXcyb2xDRVY1YW8zTGpaSksvYmY2RERXYllUT2xLWHA1Z25nWm1XVndUTGY0ZWNWYy91bnNCaG9ZbFBLV1JUeCtxTmFqRnp3OHR0TDJiV2wyWnRQNUdZTWxzaUNDTWlEa1FSdkJIVVJGdzRGeGF5WklhdmFzenF1WnlVaGNUYjJKeVZGM1luUFVQTTlRTUpLYWdyc3VZTEFWc2JVOGxRamQ4ZmNsNzIvdnFOVW9mUnlsRkxWRlJNSllXSWtnSUJ3RE9ISjc4STdvcHZGdS9vbzlCbzZrVXBRdGlLc20yczloSkpkcnZmblpFTHA3MFZVd2swdFU0Y2JscUZESzNER2dVcjM0Rzdva2pqWDdTN2pWWXovQU9lVTlsdkNWbnRjRk5KcDlWNDJ0M013eldUVmlmU1Rta1ZDR1hNR2R0NnN2VXlNTW1VOW8zRzROaUNJMk1KcWF2RThreCtqNitBck9oaVk3TWwzTmU5UGl2dmVSaXJuRG11dG1XbDBpQTYxeExoc2NUN3pwZStiK2hNaUN2NnQvZkU2VFZwZjFPai9BSGZra1hEMG1oOVpSZUNvK01xSU1KdWZZZEpyeXY0bUg1VC9BRUdlMEk1aTl3aTA5NXh0SmVndVI3Rll3TTBXRFoydjI2bS9NL2xNUjFlZ3pjYUZYODlSL0Y5R1hyMGd1aFMrS2I4SmNWc0x4T3QxeDZGSG5MOUpadFhLZVZvelIzS3VMWVpYTHppT2t6a1h3OTl5SmErempFTTI2azdMa2plWUtGTFJHanZLelc2TzNQM3VUVzc5S01lMG50VHJhZzhweXpTVllYV1hLT0VLRDFZclhZOXBQWDJib3Z4b3dqbGE1NXJYMC9qc1MvS2JiZ25tb3h5UzdkNzVzdmV5cmFkTm16UlRWTFl5d1BKVGJBTVNvdVVlMlJ1b3VHMzNGamU0aXRXb3BMYWlkYnEvcDZyV3FyQzRsM2I2TXVOMXdmWnVmZVFHM1RWdFpNOUo2Q3dxQTJJRGR5aVljLzhBT0dIdEJQWEVtSG0yclBnYWJXM0F4b1Y0MTRMMWw3ci9BSEsyZmJkZHFacEdxK2lwV2pLSEhNRmlFNVdlMzRtY2pvanRzU0phajVtS2s1T3JQTHNPNHdHSHBhSXdHM1V5YVcxTjhYTDNmcFNNVDF3MnAxcy9Hd25QSVN4d0pKWXBoSFZkeFptUGFTYmNCR3hwMFlSNFhQSzlKNndZM0VxVW8xSENQQlFkcmMyczJ5QjFRMjUxdEc0TXljMVRKdno1YzVzVFc2eWt3M2NNQnVCSlhoRWxURFFtc2xabW4wYnJaanNCTmVVcU9wVDlxTTNkMjQyazgwL2wxRzViVmRYSk9sTkc4dktzenBML0FHbW5jRE1yaHhNbmJaMHlLK3NGN0kxMUdicFRzK1RQV05Zc0RSMHpvenk5SE9TajVTbStOclhhN1Z3OTl2Y2ZKaUx1amRuemlrV3AwaUU2OW90Mng1ZnZPbDc1djZNeUlLL3EzOThUb3RYRi9VcVA5MzVKRnc5SlZlZlIrQ2Y4WlVRWVRjK3c2TFhkWG5RNVQvU1ovUXB6RjhJaXk5NXgxSmVndVI2RklCN0ZnMmVyOXVwdnpQNVRFVlhvTTIraGwvUFV2eGZSbDUyL0RtMHZqbWY4Y1Y4TnhPcTF2WG8wZWN2MGt6dHAvd0RrMUhnbGZxUzRqdy9yRWJQV2ovU2F2S1A1b21BVWE4eFBDdndqWnZlZVBVMTZFZVNMUHM3VDdkVGZtZnltSWF2UVp2ZENyK2VvL2krak5HMjdrQktRbmNLaTU3c3J4VXczSGtkdHJiYllvTi9IK3hOYlpaTE5RVE1PWURTMmJ3aHg4RFkreUk2SFRSczlab3lsbytlendjVytWMGZOMmtsK3Jmd240UnRsdlBENjYvaHk1R3U2bTY1YUNTa2tKTVdRa3haYWlZc3lSaWZHQlp5VzVOc1YydWIzTjc5VzZLTlNuV2NuYnhQU05HYVQwRERDVTRWRkJTVVVwS1VMdmF0bmQ3THZkNTN1V09vMjBhSmt5V0VxYWhDcVFrbVhMWmI1Wktvd0JSYzl3RVJMRDFHODBidWV0R2lhRkJxbE5OSlpSakZxL1Vza2xjK1VKVXUxbzNSODZ4anVMVzZSQ2RnNGtqcXhwbzB0UkpxQUw4azRKSFdVUE5jRGlVSkFoWngyb3RGdkE0bDRURVFycjJYZDh0eitWejZIMTExUWs2VnBwYkpNQUlHT1JOQXVCaUF1ckRJNFdzQXd5SUlIWmFOVlRxT2xMUHRQWWRKNk9vNlp3MFpRbG52aExmdjNwOVQ0OFUxMVdNK3A5aWxhcWhjVWcyRnI0MnovQU5FV25pSW5IeDFZeGtZcFhobDF2OWd6c1pyTzJUKyszL1NNZWNSTS93Q0djWi90NzMreGI5bit5MDAwemw1N0swd0FoRlMrRkxpeFlrZ0VzUmx1QUF2djZvS3RiYVZrZEhvZlFMd2xUeTlacHpYUlMzSys5MzRzcGUySFdOWjg5VVEzU25EREVOeG1NUmp0MmdZVlh2Qml4UWc0cTc0bk1heVkyT0pycW5ET05PNnY3NU8xKzZ5WGVYbmJRUHVtbzhNbjlTWEZiRCtzUjFXcy93RHBOVGxIODBUQTZNY3hQQ3Z3alp2ZWVSMDE2RWVTTFBzOVg3ZFRmbWZ3TVExZWd6ZWFHWDg5Uy9GOUdhRHQ4Uzhtbi9NYi9iRlhEYjJkaHJmRzlHbCtKK0JLN05OYkpkWFQvczgyeG1vbkp1amYza3UyRU5udnV1VGRZT2ZXSVN0QndsdExjYkRRV2thZU93M205WE9jVnN0UDJvN3I5ZVdUNitaVE5idGhFNjcvQUxJeU1qQTJTWVNySmY4QURpc1F3SGFTRGJ0M214REVyMmptTkk2cFZyeTgwa25GN2xKMmE2cjhWMXV6SXpWRDBiSmhjUFd1Z2xnZzhsS0pMUGI4TFBZQlZQWGh1U09zYjRlZUxWclFLT2pkUjZqcUtlT2t0bGV6RnR0OVRmQmUrMTN5Sy90MjFWbzZXZkpTa1ZVWW81blMxWWtMbXZKa2drNFN3TFpkZ0J0bmN5WWFjcEp1WFlhWFc3UjJDd2RlbkRDSlJiVDI0cHQyM2JMNDJiejdrWm1xNXhjT0QyY3kwdWtRblh0QUZJTGliSk42czY3MVZIZmtKbGtKdVpiREZMSjdjSjNIdEtrRXdrNmNaN3paNExTZUp3UHFaWmNZdk9MN09IWlkwQ24yMFZoVUhCSXVSZm92L1VpcThQSHJPdGpyTGkzRlBaaDNQL3NHZHN0WDZrajkxLzZrWThoRXovaVRGL0REdWY3a1pwdmFYVnoxd0YxbHFSWmhLQlhFT0xFbGg3Q0lralJqRW80clRlTHhFZGh5VVZ4MmNyOXViK1pVakxpWTUyeE9hMWEvMU0ra05QTUtGTEtHWUtRNzRTQ01SdmJlQVRZQzlvamhTakdXMGphWS9TK0l4T0ZlSHFXMmJLN3RtN2JyOE81RkNwOUpzb0F5SUdWdUhmRmhvNUdGZVVjbm1pVzBWckVFbUpNUWxIUmd5azdyanQ0ZFI0UWtvWFZtYkRENDN5YzQxSU8wazdvc1d0V3U4NnR3Y3Bnd3BmQ0pZSVc1dGNtN0VrNVczeEZDbW9iamM2UTBwV3grejVXMWx1VWQyZkhleURrVDJSZzZNVVpUZFdVa01Ed0lpVGZrYXFFcFFrcHdkbXR6V1RSYzVHMnVzbEljUWxUY0lOaTZrTjdjQkFQdWlCNGVMZnVPbGhyUmphTUh0S003TGUxWi9LM2dRR21kdjJrSnE0VTVLUmZlMHRTWDQyTGxnTzhBRWRzU3h3c0YxbW54V3Qra0swZG1HekRyaXMrOTN0M0diVkRsbUxNV1ptTjJaaVdaaWQ1Sk9aSjdURnJjY1BOeW5KeWsyMjgyM20yK3RubUplY1pJN0ZwZEloT3VhQUt3Q2JJSlNBUnhKZWpxMXdnWHNRTFp3alJzS2RTTmtoM2hoU3hZNFJHUmJITFJtNGxocnBGZVkzZEdVUVZsNkRLMlVpVTBkZ1NrQXRqc3VhVjNFaUF3bTQ3bVBKV21EK0lYNGpJL0w0UXV5V1k0aHJwSWNUNjVHUmdEWTJPUmpGbWlXZFdFNE96NEZmS1JLYWV3SldNaVdPS21jWU1iSmFuV0lUclhFQXBHUkdnQ2tBdGdDc0FyUWNxZXk3aVI4UGRCWXlwU2p1WTdsYVg5WWUwZktGMlNlT0krSkR1VldJMjVoZnN2bjdvV3pSUEdwQ1c1ZzFpM1ZnQVNiYmdMbnlqS0ZxcThXa01hWFZLcW1kQ21udHhFcHJlKzFvZHppdDdSVGhvN0ZWT2hTbS83WGJ2SmVuMlI2UmJkVEVEdFo1YStSZS9sRVRyd1hFdncxZDBoUGRTdHpjVjlia3ZUYkFLNXJZbWtJT3U3c1NQWXFrZWNJOFREck5oRFZISFM2VGdsMXQzK1NKcWw5RzV6MDZ0UndTU1Q1bWF2d2lONHRjRjh6WncxS2srblhYWkMvd0EzSmVCTTB2bzQwbzZjNmUvY1VRSDJZV1BuQ1BGeTRKR3hwNmw0VmRPcE44ckplRDhTYnBkaGVqVjN5V2NqcmFiTStDc284b2llSnFlODJjTlZOR3gzMDIrY3BmUm9hYWUyQjBNMVR5U3ZUdjFNak13dnhSMklJNEFxZUlobzRtYTM1bGZGNm80R3RGK1NUcHk0Tk50ZHFiM2NyY3pBdGFkVTV0SFBNaWNPY00xWWRGMEp5ZGVCdFlqZURjUnM0VFUxZEhrT2tOSFZjQlhkR3NzOTZmQ1M0TmZlUktwVEZtd3FDekU1QUM1UHNFSmUyODM2ZzVPMFZka3RUNmlWVEVBU3NOK3RtVUFkK2QvWmE4UnVyRmNTN0hSdUlrN2JOdWJSTFUreVdlZWxPcDBIZTdIM0JMZWNKNWVQdVpkaG9LckxwVGd2K1RmaDlTV3A5ak12OGRhTzVaSitKbWZ3aU40aDhGOHk3SFY2bDdkZnVpL0cvd0JDVnBkajlBT2xQbk53dUZIdXdFK2NJOFJQZ2tYNGFCd0M2VlNUK1M4UHFTOU5zMzBVdjkzaVBhenpUNVlnUEtJM1dxZTgyRU5FNkxqN04rYmwvd0NFeFM2djZPU3hXUklCSFh5UUo5NVVuemhIT2I0czJFTU5vNkhScHcvNDU5N1JOU3RLU1ZGbEtnZGdGdjRSSFpteWppYUVWYUxTN0EvcHVWNjNrZmxCc3NienVsOFhpTDZibGV0NUg1UWJMRHp1bDhYaWQrbTVYcmVSK1VHeXc4N3BmRjRuUHB1VjYza2ZsQnNzUE82WHhlSXZwdVY2M2tmbEJzc1BPNlh4QyttNVhyZVIrVUd5dzg4by9FTDZibGV0NUg1UWJMRHp5bDhSbVhwQlVTVEtXVE9GaTB1Y0VERDFaaW5FUGVxbjJSY3dyYWswY1ByZlNwMWNMVHJSczNHZHI5VWxtdmtocnMvMFdxeWVWdHo1aGJuZFlWV0s0UjJDNHZ4OWdncXU3c1I2T294aFQyK0w4RTl4YUloTnNLQXdLQUJRQUtBQlFBS0FCUUFLQUJRQUtBQlFBS0FCUUFRV3ZPakJOcEp5azJ3THl3OFVzWXZNWFgyeEpUbHN5WGNhelNkSHkyRm5GOEZ0TG5IUDkxMm5wcVd2MldWL24vVWFDcDBtVDRKZndZOXZpeWF0RVpkRmFBQldnQVZvQUZhQUJXZ0FWb0FGYUFCV2dBVm9BRmFBQldnQVZvQUZhQUJockNQczFSK1JOLzJtR2gwbHpLdUwvd0F2VS9CTHdQL1onLFxuICAgIGFkYXB0ZXI6ICgpID0+IG5ldyBOZW9MaW5lV2FsbGV0QWRhcHRlcihjb25maWcpLFxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1uZW9saW5lLmpzLm1hcCIsImltcG9ydCB7IE8zV2FsbGV0QWRhcHRlciB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1vMyc7XG5pbXBvcnQgeyBXYWxsZXROYW1lIH0gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgY29uc3QgZ2V0TzNXYWxsZXQgPSAoY29uZmlnKSA9PiAoe1xuICAgIG5hbWU6IFdhbGxldE5hbWUuTzMsXG4gICAgdXJsOiAnaHR0cHM6Ly9vMy5uZXR3b3JrLycsXG4gICAgaWNvbjogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QnBaRDBpNVp1KzViR0NYekVpSUdSaGRHRXRibUZ0WlQwaTVadSs1YkdDSURFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2RtbGxkMEp2ZUQwaU1DQXdJREV3TWpRZ01UQXlOQ0krUEdSbFpuTStQSE4wZVd4bFBpNWpiSE10TVh0bWFXeHNPaU13TUdGbU9USTdmVHd2YzNSNWJHVStQQzlrWldaelBqeDBhWFJzWlQ3bmxMdm1uYjhnTlRrZzVZbXY1cHlzSURNOEwzUnBkR3hsUGp4d1lYUm9JR05zWVhOelBTSmpiSE10TVNJZ1pEMGlUVGc0T1M0ME1pdzBOelpoTVRJd0xERXlNQ3d3TERBc01DMHhPVFV1TWpVdE9UTXVORGNzTkRBc05EQXNNQ3d3TERBc05UQXVNVGtzTmpJdU1qbEJNemt1TlRjc016a3VOVGNzTUN3d0xERXNOelk1TGpReUxEUXpObUUwTUN3ME1Dd3dMREVzTVN3d0xEZ3dMRFF3TERRd0xEQXNNQ3d3TERBc09EQXNOREFzTkRBc01Dd3hMREVzTUN3NE1HTXRMalkxTERBdE1TNHlPU3d3TFRFdU9UTXNNSE10TVM0eU9Dd3dMVEV1T1RNc01HZ3RNemd4WXkwNU15NDNOQ3d3TFRFM01DMDNOaTR5TmkweE56QXRNVGN3Y3pjMkxqSTJMVEUzTUN3eE56QXRNVGN3TERFM01DdzNOaTR5Tml3eE56QXNNVGN3WVRFM01DNHhNeXd4TnpBdU1UTXNNQ3d3TERFdE1qQXVOU3c0TVN3ME1DdzBNQ3d3TERFc01DdzNNQzR6TERNNExqRTVRVEkxTUN3eU5UQXNNQ3d4TERBc016ZzBMalU0TERjMU5tZ3pPREZqTGpZMUxEQXNNUzR5T1N3d0xERXVPVE1zTUhNeExqSTRMREFzTVM0NU15d3dZVEV4T1M0NU15d3hNVGt1T1RNc01Dd3dMREFzT0RrdU16WXRNakF3UVRFeE9TNDFNaXd4TVRrdU5USXNNQ3d3TERBc09EZzVMalF5TERRM05sb2lMejQ4TDNOMlp6ND0nLFxuICAgIGFkYXB0ZXI6ICgpID0+IG5ldyBPM1dhbGxldEFkYXB0ZXIoY29uZmlnKSxcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bzMuanMubWFwIiwiaW1wb3J0IHsgT25lR2F0ZVdhbGxldEFkYXB0ZXIgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItb25lZ2F0ZSc7XG5pbXBvcnQgeyBXYWxsZXROYW1lIH0gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgY29uc3QgZ2V0T25lR2F0ZVdhbGxldCA9IChjb25maWcpID0+ICh7XG4gICAgbmFtZTogV2FsbGV0TmFtZS5PbmVHYXRlLFxuICAgIHVybDogJ2h0dHBzOi8vb25lZ2F0ZS5zcGFjZS8nLFxuICAgIGljb246ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LENqeHpkbWNnZDJsa2RHZzlJakkwSWlCb1pXbG5hSFE5SWpJMElpQjJhV1YzUW05NFBTSXdJREFnTWpRZ01qUWlJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrQ2p4d1lYUm9JR1E5SWswNUxqazVOekl6SURFdU56UXpPRFZNTmk0eE5qazVNaUF6TGpNeU56WXhURFl1TkRNeE1UTWdNeTQ1TlRnNE5Vd3hNQzR5TlRnMElESXVNemMxTURsTU9TNDVPVGN5TXlBeExqYzBNemcxV2lJZ1ptbHNiRDBpWW14aFkyc2lMejRLUEhCaGRHZ2daRDBpVFRFd0xqSXdNVE1nTVM0eU5UTTVPVXcxTGpZNE5EVTNJRE11TVRJek1EVk1OaTR5TXpFd09TQTBMalEwTXpjMlRERXdMamMwTnprZ01pNDFOelEzVERFd0xqSXdNVE1nTVM0eU5UTTVPVm9pSUdacGJHdzlJbUpzWVdOcklpOCtDanh3WVhSb0lHUTlJazB4TUM0eU5UZzNJREV1TVRJME56Sk1OUzQxTlRRMk9TQXpMakEzTURNeFREWXVNVGM0TWprZ05DNDFOemd3Tmt3eE1DNDRPREl6SURJdU5qTXlORGRNTVRBdU1qVTROeUF4TGpFeU5EY3lXaUlnWm1sc2JEMGlZbXhoWTJzaUx6NEtQSEJoZEdnZ1pEMGlUVFV1T1RZNE9ESWdOUzR3TmpRd00wdzFMakEyTXpRNElESXVPRFk0TmpSTU1UQXVORFV5TkNBd0xqWXpOamM0VERFeExqTTJORFFnTWk0NE16SXhOa3cxTGprMk9EZ3lJRFV1TURZME1ETmFUVFl1TURNMU1UVWdNeTR5TnpNeU0wdzJMak0yTmpjNElEUXVNRGt5TXpaTU1UQXVNemM1TlNBeUxqUXpOREl4VERFd0xqQTBOemtnTVM0Mk1URTNOMHcyTGpBek5URTFJRE11TWpjek1qTmFJaUJtYVd4c1BTSmliR0ZqYXlJdlBnbzhjR0YwYUNCa1BTSk5NVEF1TWpZd05DQXhMakV3TnpBMFREVXVOVE15TWpNZ015NHdOak0yVERZdU1UWTNOU0EwTGpVNU9EZ3hUREV3TGpnNU5UY2dNaTQyTkRJeU5rd3hNQzR5TmpBMElERXVNVEEzTURSYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk5TNDVOamt6T1NBMUxqQTRNemszVERVdU1EVXdOemdnTWk0NE5qSXdOVXd4TUM0ME5qTWdNQzQyTWpBeU16bE1NVEV1TXpneE5pQXlMamcwTWpFMVREVXVPVFk1TXprZ05TNHdPRE01TjFwTk5pNHdNakkwTlNBekxqSTJNek15VERZdU16Y3dOallnTkM0eE1EZzVPRXd4TUM0ME1UTXlJREl1TkRVd09ETk1NVEF1TURVNE5DQXhMalU1TVRreFREWXVNREl5TkRVZ015NHlOak16TWxvaUlHWnBiR3c5SW1Kc1lXTnJJaTgrQ2p4d1lYUm9JR1E5SWswMUxqa3dPVGt6SURVdU1qRTJORFZNTkM0NU1UVXdOQ0F5TGpnd05UVk1NVEF1TlRFMk15QXdMalE0TkRGTU1URXVOVEV4TVNBeUxqZzVNVGN6VERVdU9UQTVPVE1nTlM0eU1UWTBOVnBOTmk0eE5USXdNaUF6TGpNeE5qSXhURFl1TkRJek9UVWdNeTQ1TnprME4wd3hNQzR5T0RBNElESXVNemd4TURKTU1UQXVNREE0T1NBeExqY3hOemMyVERZdU1UVXlNRElnTXk0ek1UWXlNVm9pSUdacGJHdzlJbUpzWVdOcklpOCtDanh3WVhSb0lHUTlJazAxTGpjeE1URTBJRFV1TnpBd04wdzBMalF5TnpjeklESXVOakF6TWpsTU1UQXVOekU0TnlBd1RERXlMakF3TWpFZ015NHdPVGMwTWt3MUxqY3hNVEUwSURVdU56QXdOMXBOTlM0ek9UazBNU0F6TGpBd056ZzRURFl1TVRFeU5ERWdOQzQzTWprd00wd3hNUzR3TXpBMUlESXVOamt5T0ROTU1UQXVNekUzTlNBd0xqazNNVFkzTTB3MUxqTTVPVFF4SURNdU1EQTNPRGhhVFRZdU1qSXhPRFVnTkM0ME5qTTNNMHcxTGpZMk5EY3hJRE11TVRFM016Rk1NVEF1TWpBME55QXhMakl6TmprNFRERXdMamMyTlRJZ01pNDFPRE16T1V3MkxqSXlNVGcxSURRdU5EWXpOek5hSWlCbWFXeHNQU0ppYkdGamF5SXZQZ284Y0dGMGFDQmtQU0pOTXk0eU9ETTVOQ0EyTGpFMU5qRXhUREV1TnpBNU9UWWdPUzQ1TmpZNFRESXVNek00TkRZZ01UQXVNakkyTkV3ekxqa3hNalEwSURZdU5ERTFOekZNTXk0eU9ETTVOQ0EyTGpFMU5qRXhXaUlnWm1sc2JEMGlZbXhoWTJzaUx6NEtQSEJoZEdnZ1pEMGlUVE11TVRJNE5EVWdOUzQyTmprNE9Fd3hMakkxTnpneElERXdMakU0Tmt3eUxqVTNPRE16SURFd0xqY3pNMHcwTGpRME9EazNJRFl1TWpFMk9EWk1NeTR4TWpnME5TQTFMalkyT1RnNFdpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BIQmhkR2dnWkQwaVRUTXVNREk0TVRRZ05TNDFNemsyTTB3eExqQTVNemMxSURFd0xqSXlNamxNTWk0MU9UUTROQ0F4TUM0NE5ESTVURFF1TlRJNU1qTWdOaTR4TlRrMk5Vd3pMakF5T0RFMElEVXVOVE01TmpOYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk1pNDRNekl4SURFeExqTTFNVGRNTUM0Mk16WTNNVGtnTVRBdU5EUXpUREl1T0RjeE9TQTFMakExTkRBMVREVXVNRFkzTWpnZ05TNDVOamt6TkV3eUxqZ3pNakVnTVRFdU16VXhOMXBOTVM0Mk1EZ3pPU0F4TUM0d01qVXlUREl1TkRNd09ETWdNVEF1TXpVMk9FdzBMakE0T0RrNElEWXVNelF3TnpkTU15NHlOams0TlNBMkxqQXdPVEUwVERFdU5qQTRNemtnTVRBdU1ESTFNbG9pSUdacGJHdzlJbUpzWVdOcklpOCtDanh3WVhSb0lHUTlJazB6TGpBMk5EVWdOUzQxTWpJM05Vd3hMakV3TlRRM0lERXdMakkwT1RsTU1pNDJOREF6TlNBeE1DNDRPRFpNTkM0MU9Ua3pPQ0EyTGpFMU9EZzBURE11TURZME5TQTFMalV5TWpjMVdpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BIQmhkR2dnWkQwaVRUSXVPRE00TnpJZ01URXVNemN4TjB3d0xqWXlNREV4TnlBeE1DNDBORGszVERJdU9EWXhPVE1nTlM0d016UXlORXcxTGpBNE16ZzFJRFV1T1RZNU5ETk1NaTQ0TXpnM01pQXhNUzR6TnpFM1drMHhMalU1TVRjNUlERXdMakEwTlRKTU1pNDBNemMwTkNBeE1DNHpPVE0wVERRdU1URXlNVGNnTmk0ek5UYzBORXd6TGpJMk5qVXlJRFl1TURBMU9URk1NUzQxT1RFM09TQXhNQzR3TkRVeVdpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BIQmhkR2dnWkQwaVRUSXVPRGswT1RNZ01URXVOVEEwTWt3d0xqUTROek13TlNBeE1DNDFNRGt6VERJdU9EQTROekVnTkM0NU1EUTRNa3cxTGpJeE5qTTBJRFV1T0RrNU4wd3lMamc1TkRreklERXhMalV3TkRKYVRURXVOekkwTWpnZ09TNDVPVEl3TVV3eUxqTTROelUwSURFd0xqSTJNemxNTXk0NU56a3pOaUEyTGpReE16Y3pURE11TXpFMk1TQTJMakV6T0RRNFRERXVOekkwTWpnZ09TNDVPVEl3TVZvaUlHWnBiR3c5SW1Kc1lXTnJJaTgrQ2p4d1lYUm9JR1E5SWswekxqQTVOelF5SURFeExqazRPRFJNTUNBeE1DNDNNRFZNTWk0Mk1EWTJJRFF1TkRBME1ESk1OUzQzTURRd01pQTFMalk0TnpRelRETXVNRGszTkRJZ01URXVPVGc0TkZwTk1DNDVOekUyTnpNZ01UQXVNekF6TjB3eUxqWTVNamd6SURFeExqQXhOamRNTkM0M016SXpOU0EyTGpFd01UazJURE11TURFeE1Ua2dOUzR6T0RnNU5rd3dMamszTVRZM015QXhNQzR6TURNM1drMHlMalU0TXpNNUlERXdMamMxTVRSTU1TNHlNelk1T0NBeE1DNHhPVFF6VERNdU1URTNNekVnTlM0Mk5UUXlOa3cwTGpRMk56QTBJRFl1TWpFeE5Fd3lMalU0TXpNNUlERXdMamMxTVRSYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk1qQXVOalkyTkNBMkxqRTROREUzVERJd0xqQXpOVElnTmk0ME5EVTFUREl4TGpZeE9UWWdNVEF1TWpjeU5Vd3lNaTR5TlRBNElERXdMakF4TVRKTU1qQXVOalkyTkNBMkxqRTROREUzV2lJZ1ptbHNiRDBpWW14aFkyc2lMejRLUEhCaGRHZ2daRDBpVFRJd0xqZzJPVFVnTlM0Mk9UZzFORXd4T1M0MU5EZzRJRFl1TWpRMU1EWk1NakV1TkRFM09TQXhNQzQzTmpFNFRESXlMamN6T0RZZ01UQXVNakUxTTB3eU1DNDROamsxSURVdU5qazROVFJhSWlCbWFXeHNQU0ppYkdGamF5SXZQZ284Y0dGMGFDQmtQU0pOTWpBdU9USTFOU0ExTGpVMk16TTNUREU1TGpReE9DQTJMakU0TnpWTU1qRXVNelkxTWlBeE1DNDRPVEE1VERJeUxqZzNNamNnTVRBdU1qWTJOMHd5TUM0NU1qVTFJRFV1TlRZek16ZGFJaUJtYVd4c1BTSmliR0ZqYXlJdlBnbzhjR0YwYUNCa1BTSk5NakV1TVRZeE5pQXhNUzR6TnpnelRERTRMamt5T1RjZ05TNDVPRGt6TVV3eU1TNHhNalV4SURVdU1EYzNNek5NTWpNdU16VTJPU0F4TUM0ME5qazJUREl4TGpFMk1UWWdNVEV1TXpjNE0xcE5NVGt1T1RBeE5DQTJMalF3TXpnMVRESXhMalUxT1RVZ01UQXVOREU1T1V3eU1pNHpOemcySURFd0xqQTRPREpNTWpBdU56SXdOU0EyTGpBM05UVXpUREU1TGprd01UUWdOaTQwTURNNE5Wb2lJR1pwYkd3OUltSnNZV05ySWk4K0NqeHdZWFJvSUdROUlrMHlNQzQ1TXpNMUlEVXVOVFEyTURsTU1Ua3VNems0TkNBMkxqRTRNVFkwVERJeExqTTFOVGdnTVRBdU9UQTVOVXd5TWk0NE9UQTVJREV3TGpJM05Fd3lNQzQ1TXpNMUlEVXVOVFEyTURsYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk1qRXVNVFUwTVNBeE1TNHpPVGd5VERFNExqa3dNak1nTlM0NU5qa3pPVXd5TVM0eE1qUXpJRFV1TURVd056aE1Nak11TXpZMk1TQXhNQzQwTmpZelRESXhMakUxTkRFZ01URXVNems0TWxwTk1Ua3VPRGszTWlBMkxqTTRNemt6VERJeExqVTFOVFFnTVRBdU5ESXpNa3d5TWk0ME1ERWdNVEF1TURjMVRESXdMamMwTWprZ05pNHdNekkwVERFNUxqZzVOeklnTmk0ek9ETTVNMW9pSUdacGJHdzlJbUpzWVdOcklpOCtDanh3WVhSb0lHUTlJazB5TVM0d09UZzNJREV4TGpVek1EaE1NVGd1TnpjM015QTFMamt5TmpJMVRESXhMakU0TlNBMExqa3pNVE0zVERJekxqVXdOalFnTVRBdU5UTTFPVXd5TVM0d09UZzNJREV4TGpVek1EaGFUVEl3TGpBeE56WWdOaTQwTXpZNU5rd3lNUzQyTVRJNElERXdMakk0TURWTU1qSXVNamMySURFd0xqQXdPRFpNTWpBdU5qZzBNaUEyTGpFMU5UQTRUREl3TGpBeE56WWdOaTQwTXpZNU5sb2lJR1pwYkd3OUltSnNZV05ySWk4K0NqeHdZWFJvSUdROUlrMHlNQzQ0T1RJM0lERXlMakF4TkRsTU1UZ3VNamcyTVNBMUxqY3hNemsxVERJeExqTTRNellnTkM0ME16QTFORXd5TXk0NU9EWTRJREV3TGpjek1UVk1NakF1T0RreU55QXhNaTR3TVRRNVdrMHhPUzR5TmpRMElEWXVNVEkxTVRkTU1qRXVNekF3TmlBeE1TNHdORE15VERJekxqQXlNVGdnTVRBdU16TXdNa3d5TUM0NU9EVTJJRFV1TkRFMU5EaE1NVGt1TWpZME5DQTJMakV5TlRFM1drMHlNUzQwTVRBeElERXdMamMyT0V3eE9TNDFNamszSURZdU1qTTNPVEpNTWpBdU9Ea3lOeUExTGpZM056UTNUREl5TGpjM016RWdNVEF1TWpJd09Fd3lNUzQwTVRBeElERXdMamMyT0ZvaUlHWnBiR3c5SW1Kc1lXTnJJaTgrQ2p4d1lYUm9JR1E5SWsweE5DNHdNVFUwSURFdU56UXpOVXd4TXk0M05UTTVJREl1TXpjME5rd3hOeTQxT0RBMElETXVPVFl3TXpaTU1UY3VPRFF4T1NBekxqTXlPVEkyVERFMExqQXhOVFFnTVM0M05ETTFXaUlnWm1sc2JEMGlZbXhoWTJzaUx6NEtQSEJoZEdnZ1pEMGlUVEV6TGpneE5qY2dNUzR5TlRVeU9Vd3hNeTR5TmprMUlESXVOVGMxTnpGTU1UY3VOemcxTXlBMExqUTBOekUwVERFNExqTXpNalVnTXk0eE1qWTNNa3d4TXk0NE1UWTNJREV1TWpVMU1qbGFJaUJtYVd4c1BTSmliR0ZqYXlJdlBnbzhjR0YwYUNCa1BTSk5NVE11TnpZek15QXhMakV5TWt3eE15NHhNemczSURJdU5qSTVNMHd4Tnk0NE5ERXpJRFF1TlRjNE1UaE1NVGd1TkRZMklETXVNRGN3T0RkTU1UTXVOell6TXlBeExqRXlNbG9pSUdacGJHdzlJbUpzWVdOcklpOCtDanh3WVhSb0lHUTlJazB4T0M0d05EQXpJRFV1TURZM016Uk1NVEl1TmpVeE5DQXlMamd6TWpFMlRERXpMalUySURBdU5qTTJOemhNTVRndU9UUTVJREl1T0RjeE9UWk1NVGd1TURRd015QTFMakEyTnpNMFdrMHhNeTQyTWpNZ01pNDBNekE0T1V3eE55NDJNemt4SURRdU1EZzVNRFJNTVRjdU9UY3dOeUF6TGpJMk9Ua3hUREV6TGprMU9DQXhMall4TVRjM1RERXpMall5TXlBeUxqUXpNRGc1V2lJZ1ptbHNiRDBpWW14aFkyc2lMejRLUEhCaGRHZ2daRDBpVFRFekxqYzFNek1nTVM0eE1ETTFOVXd4TXk0eE1UY3lJREl1TmpNNE5ETk1NVGN1T0RRME5DQTBMalU1TnpRMlRERTRMalE0TURVZ015NHdOakkxT0V3eE15NDNOVE16SURFdU1UQXpOVFZhSWlCbWFXeHNQU0ppYkdGamF5SXZQZ284Y0dGMGFDQmtQU0pOTVRndU1EUTNNeUExTGpBNE16azNUREV5TGpZek1UZ2dNaTQ0TXpnNE5Fd3hNeTQxTlRNNElEQXVOakl3TWpNNVRERTRMamsyT1RNZ01pNDROakl3TlV3eE9DNHdORGN6SURVdU1EZ3pPVGRhVFRFekxqVTVOamtnTWk0ME16YzFOMHd4Tnk0Mk5EWXhJRFF1TVRFeU1qbE1NVGN1T1RrM05pQXpMakkyTmpZMFRERXpMamsxTlNBeExqWXdPRFE1VERFekxqVTVOamtnTWk0ME16YzFOMW9pSUdacGJHdzlJbUpzWVdOcklpOCtDanh3WVhSb0lHUTlJazB4T0M0eE1ETTJJRFV1TWpFMk5UaE1NVEl1TkRrNUlESXVPRGsxTVRoTU1UTXVORGt6T1NBd0xqUTROelUwT1V3eE9TNHdPVGcwSURJdU9EQTRPVFZNTVRndU1UQXpOaUExTGpJeE5qVTRXazB4TXk0M016WWdNaTR6T0RFeE5Vd3hOeTQxTnpZeklETXVPVGM1Tmt3eE55NDROVEUxSURNdU16RTJNelZNTVRRdU1ERXhNeUF4TGpjeU5EVXpUREV6TGpjek5pQXlMak00TVRFMVdpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BIQmhkR2dnWkQwaVRURTRMak13TWprZ05TNDNNRFF3TWt3eE1pNHdNRElnTXk0d09UYzBNa3d4TXk0eU9UZzJJREJNTVRrdU5UazVOaUF5TGpZd05qWk1NVGd1TXpBeU9TQTFMamN3TkRBeVdrMHhNaTQ1T1RZNElESXVOamt5T0ROTU1UY3VPVEE0TXlBMExqY3pNak0xVERFNExqWXlNVE1nTXk0d01URXhPVXd4TXk0Mk9UazVJREF1T1RjeE5qY3pUREV5TGprNU5qZ2dNaTQyT1RJNE0xcE5NVGN1T0RBeU1TQTBMalEyTnpBMFRERXpMakkyTlRVZ01pNDFPRE16T1V3eE15NDRNakkySURFdU1qTTJPVGhNTVRndU16WTFPU0F6TGpFeU1EWXpUREUzTGpnd01qRWdOQzQwTmpjd05Gb2lJR1pwYkd3OUltSnNZV05ySWk4K0NqeHdZWFJvSUdROUlrMHhOeTQxTmpJM0lESXdMakEwTUROTU1UTXVOek0xTkNBeU1TNDJNalJNTVRNdU9UazJOaUF5TWk0eU5UVXpUREUzTGpneU16a2dNakF1TmpjeE5Vd3hOeTQxTmpJM0lESXdMakEwTUROYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk1UY3VOelkxT0NBeE9TNDFORGczVERFekxqSTBPU0F5TVM0ME1UYzNUREV6TGpjNU5UVWdNakl1TnpNNE5Fd3hPQzR6TVRJeklESXdMamcyT1RSTU1UY3VOelkxT0NBeE9TNDFORGczV2lJZ1ptbHNiRDBpWW14aFkyc2lMejRLUEhCaGRHZ2daRDBpVFRFM0xqZ3lNVElnTVRrdU5ESXhPRXd4TXk0eE1UY3lJREl4TGpNMk56Uk1NVE11TnpRd09DQXlNaTQ0TnpVeVRERTRMalEwTkRnZ01qQXVPVEk1Tmt3eE55NDRNakV5SURFNUxqUXlNVGhhSWlCbWFXeHNQU0ppYkdGamF5SXZQZ284Y0dGMGFDQmtQU0pOTVRNdU5UTTVPU0F5TXk0ek5qQXhUREV5TGpZeU56a2dNakV1TVRZME4wd3hPQzR3TWpBeUlERTRMamt6TmpGTU1UZ3VPVEk0T1NBeU1TNHhNekUxVERFekxqVXpPVGtnTWpNdU16WXdNVnBOTVRNdU5UazJNeUF5TVM0MU5UWk1NVE11T1RJM09TQXlNaTR6TnpVeFRERTNMamswTXprZ01qQXVOekUzVERFM0xqWXhNak1nTVRrdU9EazNPVXd4TXk0MU9UWXpJREl4TGpVMU5sb2lJR1pwYkd3OUltSnNZV05ySWk4K0NqeHdZWFJvSUdROUlrMHhOeTQ0TWpZNElERTVMalF3TXpaTU1UTXVNRGs0TmlBeU1TNHpOakF5VERFekxqY3pNemtnTWpJdU9EazFORXd4T0M0ME5qSXhJREl3TGprek9EaE1NVGN1T0RJMk9DQXhPUzQwTURNMldpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BIQmhkR2dnWkQwaVRURXpMalV6TURFZ01qTXVNemM1T1V3eE1pNDJNREUySURJeExqRTFOemxNTVRndU1ESTNJREU0TGprd01qbE1NVGd1T1RRNE9TQXlNUzR4TWpRNFRERXpMalV6TURFZ01qTXVNemM1T1ZwTk1UTXVOVGsyTkNBeU1TNDFOVFU1VERFekxqa3lPREVnTWpJdU5EQTRNa3d4Tnk0NU5qY3pJREl3TGpjMVRERTNMall5TlRjZ01Ua3VPRGszTjB3eE15NDFPVFkwSURJeExqVTFOVGxhSWlCbWFXeHNQU0ppYkdGamF5SXZQZ284Y0dGMGFDQmtQU0pOTVRndU1EZzBJREU0TGpjNE16Uk1NVGt1TURjNE9TQXlNUzR4T1RFeFRERXpMalEzTkRRZ01qTXVOVEV5TlV3eE1pNDBOemsxSURJeExqRXdNVFZNTVRndU1EZzBJREU0TGpjNE16UmFUVEUzTGpnME1Ua2dNakF1Tmpnd05Fd3hOeTQxTnlBeU1DNHdNVGN4VERFekxqY3hOalVnTWpFdU5qRTFOa3d4TXk0NU9EZzBJREl5TGpJM09EaE1NVGN1T0RReE9TQXlNQzQyT0RBMFdpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BIQmhkR2dnWkQwaVRURXpMakkyTlRZZ01qTXVPVGsyTjB3eE1TNDVPVEl5SURJd0xqZzVNamRNTVRndU1qa3pNU0F4T0M0eU9EWXhUREU1TGpVMk5qWWdNakV1TXprek5Fd3hNeTR5TmpVMklESXpMams1TmpkYVRURXlMamsxTnpJZ01qRXVNekF6T1V3eE15NDJOekF5SURJekxqQXlOVEZNTVRndU5UazBPU0F5TUM0NU9USXlUREUzTGpnNE1Ua2dNVGt1TWpjeFRERXlMamsxTnpJZ01qRXVNekF6T1ZwTk1UTXVOemM1TnlBeU1pNDNOVGszVERFekxqSXpNalVnTWpFdU5ERXpNMHd4Tnk0M056STFJREU1TGpVek0wd3hPQzR6TWprMklESXdMamc1TWpkTU1UTXVOemM1TnlBeU1pNDNOVGszV2lJZ1ptbHNiRDBpWW14aFkyc2lMejRLUEhCaGRHZ2daRDBpVFRJeExqWXhPU0F4TXk0M05UQTBUREl3TGpBek16SWdNVGN1TlRjMk9Vd3lNQzQyTmpReklERTNMamd6T0RSTU1qSXVNalV3TVNBeE5DNHdNVEpNTWpFdU5qRTVJREV6TGpjMU1EUmFJaUJtYVd4c1BTSmliR0ZqYXlJdlBnbzhjR0YwYUNCa1BTSk5NakV1TkRFNU15QXhNeTR5TmpVMVRERTVMalUwTnprZ01UY3VOemd4TTB3eU1DNDROamd6SURFNExqTXlPRFZNTWpJdU56TTVOeUF4TXk0NE1USTNUREl4TGpReE9UTWdNVE11TWpZMU5Wb2lJR1pwYkd3OUltSnNZV05ySWk4K0NqeHdZWFJvSUdROUlrMHlNUzR6TmpJZ01UTXVNVE14VERFNUxqUXhNekVnTVRjdU9ETXpOMHd5TUM0NU1qQTBJREU0TGpRMU9EUk1Nakl1T0RZNU15QXhNeTQzTlRVM1RESXhMak0yTWlBeE15NHhNekZhSWlCbWFXeHNQU0ppYkdGamF5SXZQZ284Y0dGMGFDQmtQU0pOTWpFdU1USTFNU0F4T0M0NU5EWk1NVGd1T1RJNU55QXhPQzR3TXpjelRESXhMakUyTVRZZ01USXVOalE0TTB3eU15NHpOVFk1SURFekxqVTFOMHd5TVM0eE1qVXhJREU0TGprME5scE5NVGt1T1RBeE5DQXhOeTQyTVRrMFRESXdMamN5TURVZ01UY3VPVFV4TVV3eU1pNHpOemcySURFekxqa3pOVXd5TVM0MU5UazFJREV6TGpZd016Uk1NVGt1T1RBeE5DQXhOeTQyTVRrMFdpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BIQmhkR2dnWkQwaVRUSXhMak0xTkRVZ01UTXVNVEV6Tmt3eE9TNHpPVFUxSURFM0xqZzBNRGhNTWpBdU9UTXdOQ0F4T0M0ME56WTRUREl5TGpnNE9UUWdNVE11TnpRNU4wd3lNUzR6TlRRMUlERXpMakV4TXpaYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk1qRXVNVE13T1NBeE9DNDVOalU1VERFNExqa3dNak1nTVRndU1EUTBUREl4TGpFME56VWdNVEl1TmpJNE5Vd3lNeTR6TmprMElERXpMalUxTURSTU1qRXVNVE13T1NBeE9DNDVOalU1V2sweE9TNDRPVGN5SURFM0xqWTBNamRNTWpBdU56UXlPU0F4Tnk0NU56UTBUREl5TGpRd01TQXhNeTQ1TXpVeFRESXhMalUxTlRRZ01UTXVOVGsyT1V3eE9TNDRPVGN5SURFM0xqWTBNamRhSWlCbWFXeHNQU0ppYkdGamF5SXZQZ284Y0dGMGFDQmtQU0pOTWpFdU1EazROQ0F4TWk0ME9UVTRUREl6TGpVd09UTWdNVE11TkRrd04wd3lNUzR4T0RjNUlERTVMakE1TVRsTU1UZ3VOemd3TXlBeE9DNHdPVGRNTWpFdU1EazROQ0F4TWk0ME9UVTRXazB5TWk0eU5qa2dNVFF1TURBME4wd3lNUzQyTURVNElERXpMamN6TWpoTU1qQXVNREV6T1NBeE55NDFOelkwVERJd0xqWTNOeklnTVRjdU9EUTRNMHd5TWk0eU5qa2dNVFF1TURBME4xb2lJR1pwYkd3OUltSnNZV05ySWk4K0NqeHdZWFJvSUdROUlrMHlNUzR6T0RZMUlERTVMalU0TWpoTU1UZ3VNamc1TVNBeE9DNHlPVGswVERJd0xqZzVPU0F4TVM0NU9UZzBUREl6TGprNU16RWdNVE11TWpneE9Fd3lNUzR6T0RZMUlERTVMalU0TWpoYVRURTVMakkyTkRFZ01UY3VPVEE0TVV3eU1DNDVPRFV5SURFNExqWXlNVEZNTWpNdU1ESXhOQ0F4TXk0Mk9UWTBUREl4TGpNd01ETWdNVEl1T1Rnek5Fd3hPUzR5TmpReElERTNMamt3T0RGYVRUSXdMamc1TWpRZ01UZ3VNelExT0V3eE9TNDFORFU1SURFM0xqYzRPRGRNTWpFdU5ESTJNeUF4TXk0eU5EVTBUREl5TGpjM01qY2dNVE11T0RBMU9Fd3lNQzQ0T1RJMElERTRMak0wTlRoYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk1pNHpOelF6TmlBeE15NDNNalUxVERFdU56UXpNVFlnTVRNdU9UZzJPRXd6TGpNeU56VTVJREUzTGpneE16bE1NeTQ1TlRnM09TQXhOeTQxTlRJMlRESXVNemMwTXpZZ01UTXVOekkxTlZvaUlHWnBiR3c5SW1Kc1lXTnJJaTgrQ2p4d1lYUm9JR1E5SWsweUxqVTNOVFVnTVRNdU1qUXlORXd4TGpJMU5EZzRJREV6TGpjNE9USk1NeTR4TWpRM015QXhPQzR6TURVMlREUXVORFExTXpVZ01UY3VOelU0T1V3eUxqVTNOVFVnTVRNdU1qUXlORm9pSUdacGJHdzlJbUpzWVdOcklpOCtDanh3WVhSb0lHUTlJazB5TGpZek1UVTFJREV6TGpFd05qRk1NUzR4TWpRd01pQXhNeTQzTXpBeVRETXVNRGN4TWpZZ01UZ3VORE16Tmt3MExqVTNPRGM0SURFM0xqZ3dPVFZNTWk0Mk16RTFOU0F4TXk0eE1EWXhXaUlnWm1sc2JEMGlZbXhoWTJzaUx6NEtQSEJoZEdnZ1pEMGlUVEl1T0RZNE5UZ2dNVGd1T1RFNU5Fd3dMall6TmpjeE9TQXhNeTQxTXpBMVRESXVPRE15TVNBeE1pNDJNakU0VERVdU1EWXpPVGNnTVRndU1ERXdPRXd5TGpnMk9EVTRJREU0TGpreE9UUmFUVEV1TmpBNE16a2dNVE11T1RJNE5Fd3pMakkyTmpVMElERTNMamswTkRSTU5DNHdPRGc1T0NBeE55NDJNVEk0VERJdU5ETXdPRE1nTVRNdU5UazJPRXd4TGpZd09ETTVJREV6TGpreU9EUmFJaUJtYVd4c1BTSmliR0ZqYXlJdlBnbzhjR0YwYUNCa1BTSk5NaTQyTkRFMU5TQXhNeTR3T0RjMFRERXVNVEEyTkRVZ01UTXVOekl6VERNdU1EWXpPRE1nTVRndU5EVXdPVXcwTGpVNU9Ea3pJREUzTGpneE5UTk1NaTQyTkRFMU5TQXhNeTR3T0RjMFdpSWdabWxzYkQwaVlteGhZMnNpTHo0S1BIQmhkR2dnWkQwaVRUSXVPRFl4T1RNZ01UZ3VPVE01TkV3d0xqWXlNREV4TnlBeE15NDFNakEyVERJdU9ETTROeklnTVRJdU5qQXlURFV1TURnek9EVWdNVGd1TURFM05Vd3lMamcyTVRreklERTRMamt6T1RSYVRURXVOVGt4TnprZ01UTXVPVEk0TlV3ekxqSTBPVGswSURFM0xqazJOemRNTkM0d09UVTFPU0F4Tnk0Mk1UazFUREl1TkRNM05EUWdNVE11TlRjMk9Vd3hMalU1TVRjNUlERXpMamt5T0RWYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk1pNDRPVFE1TXlBeE1pNDBOamt6VERVdU1qRTJNelFnTVRndU1EY3pPRXd5TGpnd09EY3hJREU1TGpBMk9EZE1NQzQwT0Rjek1EVWdNVE11TkRZME1rd3lMamc1TkRreklERXlMalEyT1ROYVRUTXVPVGM1TXpZZ01UY3VOVGMyTkV3eUxqTTRNRGt4SURFekxqY3dOakpNTVM0M01UYzJOU0F4TXk0NU56Z3lURE11TXpFMk1TQXhOeTQ0TXpWTU15NDVOemt6TmlBeE55NDFOelkwV2lJZ1ptbHNiRDBpWW14aFkyc2lMejRLUEhCaGRHZ2daRDBpVFRJdU5qQXpNamtnTVRrdU5UWTJNVXd3SURFekxqSTJOVEZNTXk0d09UYzBNaUF4TVM0NU9ERTNURFV1TnpBd055QXhPQzR5T0RJM1RESXVOakF6TWprZ01Ua3VOVFkyTVZwTk1DNDVOekUyTnpNZ01UTXVOalk1TjB3ekxqQXdOemc0SURFNExqVTNNVEpNTkM0M01qa3dNeUF4Tnk0NE5UZ3lUREl1TmpreU9ETWdNVEl1T1RVMk4wd3dMamszTVRZM015QXhNeTQyTmprM1drMHpMakV4TnpNeElERTRMak14TWpWTU1TNHlNelk1T0NBeE15NDNOemt4VERJdU5UZ3pNemtnTVRNdU1qSXlURFF1TkRZek56TWdNVGN1TnpZeVRETXVNVEUzTXpFZ01UZ3VNekV5TlZvaUlHWnBiR3c5SW1Kc1lXTnJJaTgrQ2p4d1lYUm9JR1E5SWswMkxqUXdPVGs0SURJd0xqQXpOemRNTmk0eE5EZzBOQ0F5TUM0Mk5qZzRURGt1T1RjME9URWdNakl1TWpVME5Vd3hNQzR5TXpZMUlESXhMall5TXpSTU5pNDBNRGs1T0NBeU1DNHdNemMzV2lJZ1ptbHNiRDBpWW14aFkyc2lMejRLUEhCaGRHZ2daRDBpVFRZdU1qRXdNamtnTVRrdU5UUTVNMHcxTGpZMk16QTVJREl3TGpnMk9UZE1NVEF1TVRjNE9TQXlNaTQzTkRFeFRERXdMamN5TmpFZ01qRXVOREl3TjB3MkxqSXhNREk1SURFNUxqVTBPVE5hSWlCbWFXeHNQU0ppYkdGamF5SXZQZ284Y0dGMGFDQmtQU0pOTmk0eE5UUTVNeUF4T1M0ME1UUTRURFV1TlRNd01qY2dNakF1T1RJeU1Vd3hNQzR5TXpJNUlESXlMamczTVV3eE1DNDROVGMySURJeExqTTJNemRNTmk0eE5UUTVNeUF4T1M0ME1UUTRXaUlnWm1sc2JEMGlZbXhoWTJzaUx6NEtQSEJoZEdnZ1pEMGlUVEV3TGpRek1qa2dNak11TXpVNU9VdzFMakEwTXprMUlESXhMakV5T0RGTU5TNDVOamt4T1NBeE9DNDVNekkzVERFeExqTTBNVFlnTWpFdU1UWTBOVXd4TUM0ME16STVJREl6TGpNMU9UbGFUVFl1TURFMU5qSWdNakF1TnpJek5Vd3hNQzR3TXpFMklESXlMak00TVRaTU1UQXVNell6TXlBeU1TNDFOakkxVERZdU16VXdOVFlnTVRrdU9UQTBORXcyTGpBeE5UWXlJREl3TGpjeU16VmFJaUJtYVd4c1BTSmliR0ZqYXlJdlBnbzhjR0YwYUNCa1BTSk5OaTR4TkRjNElERTVMak01TnpSTU5TNDFNVEUzTWlBeU1DNDVNekl6VERFd0xqSXpPRGtnTWpJdU9Ea3hNMHd4TUM0NE56VWdNakV1TXpVMk5FdzJMakUwTnpnZ01Ua3VNemszTkZvaUlHWnBiR3c5SW1Kc1lXTnJJaTgrQ2p4d1lYUm9JR1E5SWsweE1DNDBNems1SURJekxqTTNPVGxNTlM0d01qUTBNU0F5TVM0eE16UTNURFV1T1RRMk16UWdNVGd1T1RBeU9Vd3hNUzR6TmpFNElESXhMakUxTnpsTU1UQXVORE01T1NBeU15NHpOems1V2swMUxqazVPVFFnTWpBdU56STJPRXd4TUM0d016ZzJJREl5TGpNNE5Vd3hNQzR6T1RBeUlESXhMalUxTlRsTU5pNHpORGMyTVNBeE9TNDRPVGMzVERVdU9UazVOQ0F5TUM0M01qWTRXaUlnWm1sc2JEMGlZbXhoWTJzaUx6NEtQSEJoZEdnZ1pEMGlUVFV1T0RnNU5ESWdNVGd1Tnpnd01rd3hNUzQwT1RRZ01qRXVNVEF4Tmt3eE1DNDBPVGt4SURJekxqVXdPVEpNTkM0NE9UUTFNeUF5TVM0eE9EYzRURFV1T0RnNU5ESWdNVGd1Tnpnd01scE5NVEF1TWpVM0lESXhMall4TlRaTU5pNDBNRE0wTkNBeU1DNHdNVGN4VERZdU1USTRNVGtnTWpBdU5qZ3dORXc1TGprNE1UY3lJREl5TGpJM05UVk1NVEF1TWpVM0lESXhMall4TlRaYUlpQm1hV3hzUFNKaWJHRmpheUl2UGdvOGNHRjBhQ0JrUFNKTk1UQXVOams0TkNBeU15NDVPVGs1VERRdU16azNORFlnTWpFdU16bE1OUzQyT0RBNE55QXhPQzR5T1RVNVRERXhMams0TVRnZ01qQXVPVEF5TlV3eE1DNDJPVGcwSURJekxqazVPVGxhVFRVdU16a3lNelVnTWpBdU9UZzROMHd4TUM0eU9EQTJJREl6TGpBeU5EbE1NVEF1T1Rrek5pQXlNUzR6TURNNFREWXVNRGt5TURrZ01Ua3VNalkzTmt3MUxqTTVNak0xSURJd0xqazRPRGRhVFRFd0xqRTVOemNnTWpJdU56VTVOa3cxTGpZek56YzFJREl3TGpnNU1qWk1OaTR5TURFMU1pQXhPUzQxTXpJNVRERXdMamMwTVRVZ01qRXVOREV6TWt3eE1DNHhPVGMzSURJeUxqYzFPVFphSWlCbWFXeHNQU0ppYkdGamF5SXZQZ284TDNOMlp6NEsnLFxuICAgIGFkYXB0ZXI6ICgpID0+IG5ldyBPbmVHYXRlV2FsbGV0QWRhcHRlcihjb25maWcpLFxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vbmVnYXRlLmpzLm1hcCIsImV4cG9ydCB2YXIgV2FsbGV0TmFtZTtcbihmdW5jdGlvbiAoV2FsbGV0TmFtZSkge1xuICAgIFdhbGxldE5hbWVbXCJOZW9MaW5lXCJdID0gXCJOZW9MaW5lXCI7XG4gICAgV2FsbGV0TmFtZVtcIk8zXCJdID0gXCJPM1wiO1xuICAgIFdhbGxldE5hbWVbXCJXYWxsZXRDb25uZWN0XCJdID0gXCJXYWxsZXRDb25uZWN0XCI7XG4gICAgV2FsbGV0TmFtZVtcIk5lb25cIl0gPSBcIk5lb25cIjtcbiAgICBXYWxsZXROYW1lW1wiT25lR2F0ZVwiXSA9IFwiT25lR2F0ZVwiO1xufSkoV2FsbGV0TmFtZSB8fCAoV2FsbGV0TmFtZSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCJpbXBvcnQgeyBXYWxsZXRDb25uZWN0V2FsbGV0QWRhcHRlciwgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItd2FsbGV0Y29ubmVjdCc7XG5pbXBvcnQgeyBXYWxsZXROYW1lIH0gZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgY29uc3QgZ2V0V2FsbGV0Q29ubmVjdFdhbGxldCA9IChjb25maWcpID0+ICh7XG4gICAgbmFtZTogV2FsbGV0TmFtZS5XYWxsZXRDb25uZWN0LFxuICAgIHVybDogJ2h0dHBzOi8vd2FsbGV0Y29ubmVjdC5vcmcnLFxuICAgIGljb246ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJvWldsbmFIUTlJakU0TlNJZ2RtbGxkMEp2ZUQwaU1DQXdJRE13TUNBeE9EVWlJSGRwWkhSb1BTSXpNREFpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrUEhCaGRHZ2daRDBpYlRZeExqUXpPRFUwTWprZ016WXVNalUyTWpZeE1tTTBPQzQ1TVRFeU1qUXhMVFEzTGpnNE9ERTJOak1nTVRJNExqSXhNVGs0TnpFdE5EY3VPRGc0TVRZMk15QXhOemN1TVRJek1qQTVNU0F3YkRVdU9EZzJOVFExSURVdU56WXpOREUzTkdNeUxqUTBOVFUyTVNBeUxqTTVORFF3T0RFZ01pNDBORFUxTmpFZ05pNHlOelkxTVRFeUlEQWdPQzQyTnpBNU1qQTBiQzB5TUM0eE16WTJPVFVnTVRrdU56RTFOVEF6WXkweExqSXlNamM0TVNBeExqRTVOekl3TlRFdE15NHlNRFV6SURFdU1UazNNakExTVMwMExqUXlPREE0TVNBd2JDMDRMakV3TURVNE5DMDNMamt6TVRFME56bGpMVE0wTGpFeU1UWTVNaTB6TXk0ME1EYzVPREUzTFRnNUxqUTBNemc0Tmkwek15NDBNRGM1T0RFM0xURXlNeTQxTmpVMU56ZzRJREJzTFRndU5qYzFNRFUyTWlBNExqUTVNell3TlRGakxURXVNakl5TnpneE5pQXhMakU1TnpJd05ERXRNeTR5TURVek1ERWdNUzR4T1RjeU1EUXhMVFF1TkRJNE1EZ3dOaUF3YkMweU1DNHhNelkyT1RRNUxURTVMamN4TlRVd016RmpMVEl1TkRRMU5UWXhNaTB5TGpNNU5EUXdPVEl0TWk0ME5EVTFOakV5TFRZdU1qYzJOVEV5TWlBd0xUZ3VOamN3T1RJd05IcHRNakU0TGpjMk56YzVOakVnTkRBdU56Y3pOelEwT1NBeE55NDVNakUyT1RjZ01UY3VOVFEyT0RrM1l6SXVORFExTlRRNUlESXVNemswTXprMk9TQXlMalEwTlRVMk15QTJMakkzTmpRM05qa3VNREF3TURNeElEZ3VOamN3T0RnNU9Xd3RPREF1T0RFd01UY3hJRGM1TGpFeU1URXpOR010TWk0ME5EVTFORFFnTWk0ek9UUTBNall0Tmk0ME1UQTFPRElnTWk0ek9UUTBOVE10T0M0NE5UWXhOaTR3TURBd05qSXRMakF3TURBeExTNHdNREF3TVMwdU1EQXdNREl5TFM0d01EQXdNakl0TGpBd01EQXpNaTB1TURBd01ETXliQzAxTnk0ek5UUXhORE10TlRZdU1UVTBOVGN5WXkwdU5qRXhNemt0TGpVNU9EWXdNaTB4TGpZd01qWTFMUzQxT1RnMk1ESXRNaTR5TVRRd05DQXdMUzR3TURBd01EUXVNREF3TURBMExTNHdNREF3TURjdU1EQXdNREE0TFM0d01EQXdNVEV1TURBd01ERXhiQzAxTnk0ek5USTVNakV5SURVMkxqRTFORFV6TVdNdE1pNDBORFUxTXpZNElESXVNemswTkRNeUxUWXVOREV3TlRjMU5TQXlMak01TkRRM01pMDRMamcxTmpFMk1USXVNREF3TURnM0xTNHdNREF3TVRRekxTNHdNREF3TVRRdExqQXdNREF5T1RZdExqQXdNREF5T0MwdU1EQXdNRFEwT1MwdU1EQXdNRFEwYkMwNE1DNDRNVEkwTVRrME15MDNPUzR4TWpJeE9EVmpMVEl1TkRRMU5UWXdNakV0TWk0ek9UUTBNRGd0TWk0ME5EVTFOakF5TVMwMkxqSTNOalV4TVRVZ01DMDRMalkzTURreE9UZHNNVGN1T1RJeE56STVOak10TVRjdU5UUTJPRFkzTTJNeUxqUTBOVFUyTURJdE1pNHpPVFEwTURneUlEWXVOREV3TlRrNE9TMHlMak01TkRRd09ESWdPQzQ0TlRZeE5qQXlJREJzTlRjdU16VTBPVGMzTlNBMU5pNHhOVFV6TlRkakxqWXhNVE01TURndU5UazROakF5SURFdU5qQXlOalE1TGpVNU9EWXdNaUF5TGpJeE5EQXpPVGdnTUNBdU1EQXdNREE1TWkwdU1EQXdNREE1TGpBd01EQXhOelF0TGpBd01EQXhOeTR3TURBd01qWTFMUzR3TURBd01qUnNOVGN1TXpVeU1UQXpNUzAxTmk0eE5UVXpNek5qTWk0ME5EVTFNRFV0TWk0ek9UUTBOak16SURZdU5ERXdOVFEwTFRJdU16azBOVFV6TVNBNExqZzFOakUyTVMwdU1EQXdNaTR3TURBd016UXVNREF3TURNek5pNHdNREF3TmpndU1EQXdNRFkzTXk0d01EQXhNREV1TURBd01UQXhiRFUzTGpNMU5Ea3dNaUExTmk0eE5UVTBNekpqTGpZeE1UTTVMalU1T0RZd01TQXhMall3TWpZMUxqVTVPRFl3TVNBeUxqSXhOREEwSURCc05UY3VNelV6T1RjMUxUVTJMakUxTkRNeU5EbGpNaTQwTkRVMU5qRXRNaTR6T1RRME1Ea3lJRFl1TkRFd05UazVMVEl1TXprME5EQTVNaUE0TGpnMU5qRTJJREI2SWlCbWFXeHNQU0lqTTJJNU9XWmpJaTgrUEM5emRtYysnLFxuICAgIGFkYXB0ZXI6ICgpID0+IG5ldyBXYWxsZXRDb25uZWN0V2FsbGV0QWRhcHRlcihjb25maWcpLFxufSk7XG5leHBvcnQgY29uc3QgZ2V0TmVvbldhbGxldENvbm5lY3RXYWxsZXQgPSAoY29uZmlnKSA9PiAoe1xuICAgIG5hbWU6IFdhbGxldE5hbWUuTmVvbixcbiAgICB1cmw6ICdodHRwczovL25lb253YWxsZXQuY29tLycsXG4gICAgaWNvbjogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0S1BITjJaeUIzYVdSMGFEMGlNakJ3ZUNJZ2FHVnBaMmgwUFNJeE9YQjRJaUIyYVdWM1FtOTRQU0l3SURBZ01qQWdNVGtpSUhabGNuTnBiMjQ5SWpFdU1TSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklnb2dJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklqNEtDaUFnUEdjZ2FXUTlJbE41YldKdmJITWlJSE4wY205clpUMGlibTl1WlNJZ2MzUnliMnRsTFhkcFpIUm9QU0l4SWlCbWFXeHNQU0p1YjI1bElpQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlQZ29nSUNBZ1BHY2dhV1E5SWtkeWIzVndMVElpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtETXVOVEF3TURBd0xDQXpMalV3TURBd01Da2lQZ29nSUNBZ0lDQThjR0YwYUFvZ0lDQWdJQ0FnSUdROUlrMHhNUzQxTmpVeU16WTJMQzB4TGpRME1UQXlPVE16SUV3eE5DNHpPRGc0TkRFeUxERXVORGc0TlRrNU9ESWdUREV4TGpRNE5ETTNNVFFzTkM0MU1ESXlPRGszTVNCTU1USXVPVE0yTmpFd05pdzJMakF3T1RBMk1EVXlJRXcxTGpjM016ZzRNall4TERFekxqUTBNVEF6T1RJZ1RDMHhMak00T0Rnek1qTXNOaTR3TURrd056UXdOeUJNTlM0M056TTROamd6TXl3dE1TNDBNakk0TnpZeklFdzNMakl3T0RZd056azRMREF1TURZMU56TTJPVE0xTnlCTU9DNDJOakEzTkRnMU1Td3RNUzQwTkRFd01UQXdPU0JNTVRBdU1URXpNRFU1TERBdU1EWTFOelUyTVRjek15Qk1NVEV1TlRZMU1qTTJOaXd0TVM0ME5ERXdNamt6TXlCYUlnb2dJQ0FnSUNBZ0lHbGtQU0pRWVhSb0lpQnpkSEp2YTJVOUlpTTBRMFpGUWpFaUlITjBjbTlyWlMxM2FXUjBhRDBpTWlJK1BDOXdZWFJvUGdvZ0lDQWdJQ0E4Y0c5c2VXZHZiaUJwWkQwaVVHRjBhQzAxSWlCbWFXeHNQU0lqTkVOR1JVSXhJZ29nSUNBZ0lDQWdJSEJ2YVc1MGN6MGlNeTQwTWpFd05USTJNeUExTGpZME1USTVOVGN4SURZdU1UVTNPRGswTnpRZ09DNDBOekExT0RneU5DQTRMamc1TkRjek5qZzBJRFV1TmpReE1qazFOekVnTnk0MU16UTJOREl6TVNBMExqSXpOVEk1TkRFeUlEWXVNVFUzT0RrME56UWdOUzQyTlRnME16WTJOQ0EwTGpjNE1USXhPRGswSURRdU1qTTFNamswTVRJaVBnb2dJQ0FnSUNBOEwzQnZiSGxuYjI0K0NpQWdJQ0E4TDJjK0NpQWdQQzluUGdvOEwzTjJaejQ9JyxcbiAgICBhZGFwdGVyOiAoKSA9PiBuZXcgV2FsbGV0Q29ubmVjdFdhbGxldEFkYXB0ZXIoY29uZmlnLCB0cnVlKSxcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0Y29ubmVjdC5qcy5tYXAiLCIiLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2l0eW9memlvbi9uZW9uLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaXR5b2Z6aW9uL3dhbGxldC1jb25uZWN0LXNkay1jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZW9uZ2QvbmVvLWRhcGlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdhbGxldGNvbm5lY3QvcXJjb2RlLW1vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50ZW1pdHRlcjNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmVvMy1kYXBpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiZ2V0TmVvTGluZVdhbGxldCIsImdldE5lb25XYWxsZXRDb25uZWN0V2FsbGV0IiwiZ2V0TzNXYWxsZXQiLCJnZXRPbmVHYXRlV2FsbGV0IiwiZ2V0V2FsbGV0Q29ubmVjdFdhbGxldCIsInVzZU1lbW8iLCJXYWxsZXRQcm92aWRlciIsIldhbGxldENvbm5lY3Rpb25Qcm92aWRlciIsIm1lbW8iLCJjaGlsZHJlbiIsIndhbGxldHMiLCJvcHRpb25zIiwiY2hhaW5zIiwibWV0aG9kcyIsImFwcE1ldGFkYXRhIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidXJsIiwiaWNvbnMiLCJsb2dnZXIiLCJyZWxheVByb3ZpZGVyIiwiV2FsbGV0TW9kYWxQcm92aWRlciIsInJlcXVpcmUiLCJfQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiRXZlbnRFbWl0dGVyIiwiV2l0bmVzc1Njb3BlIiwiQmFzZVdhbGxldEFkYXB0ZXIiLCJXYWxsZXRFcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwiZXJyb3IiLCJXYWxsZXROb3RGb3VuZEVycm9yIiwiYXJndW1lbnRzIiwiV2FsbGV0Tm90SW5zdGFsbGVkRXJyb3IiLCJXYWxsZXROb3RSZWFkeUVycm9yIiwiV2FsbGV0Q29ubmVjdGlvbkVycm9yIiwiV2FsbGV0RGlzY29ubmVjdGVkRXJyb3IiLCJXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IiLCJXYWxsZXRBY2NvdW50RXJyb3IiLCJXYWxsZXROb3RDb25uZWN0ZWRFcnJvciIsIldhbGxldFRpbWVvdXRFcnJvciIsIldhbGxldFdpbmRvd0Jsb2NrZWRFcnJvciIsIldhbGxldFdpbmRvd0Nsb3NlZEVycm9yIiwiV2FsbGV0TWV0aG9kTm90U3VwcG9ydGVkRXJyb3IiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJwb2xsIiwiY2FsbGJhY2siLCJpbnRlcnZhbCIsImNvdW50Iiwic2V0VGltZW91dCIsInBvbGxVbnRpbFJlYWR5IiwiYWRhcHRlciIsInBvbGxJbnRlcnZhbCIsInBvbGxDb3VudCIsInJlYWR5IiwiZW1pdCIsImNvbnNvbGUiLCJ3YXJuIiwicnBjIiwid2FpdFR4IiwicnBjQWRkcmVzcyIsInR4SWQiLCJyZWFkRnJlcXVlbmN5IiwidGltZW91dCIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInJwY0NsaWVudCIsIlJQQ0NsaWVudCIsInRyYW5zYWN0aW9uIiwiZ2V0UmF3VHJhbnNhY3Rpb24iLCJOZW9MaW5lSW5pdCIsIk5lb0xpbmVOM0luaXQiLCJERUZBVUxUX1dBTExFVF9DT05GSUciLCJOZW9MaW5lV2FsbGV0QWRhcHRlciIsImNvbmZpZyIsIl9hZGRyZXNzIiwiX2Nvbm5lY3RpbmciLCJfb3B0aW9ucyIsImFkZHJlc3MiLCJ3aW5kb3ciLCJORU9MaW5lTjMiLCJjb25uZWN0aW5nIiwiY29ubmVjdGVkIiwiY29ubmVjdCIsIl9jbGllbnQiLCJfY2xpZW50Q29tbW9uIiwiYWNjb3VudCIsImdldEFjY291bnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2Rpc2Nvbm5lY3RlZCIsImRpc2Nvbm5lY3QiLCJjbGllbnQiLCJ1bmRlZmluZWQiLCJpbnZva2VSZWFkIiwicmVxdWVzdCIsInJlc3BvbnNlIiwic2NyaXB0SGFzaCIsIm9wZXJhdGlvbiIsImFyZ3MiLCJzaWduZXJzIiwiX3Jlc3BvbnNlVG9SZWFkUmVzdWx0IiwiaW52b2tlUmVhZE11bHRpIiwiaW52b2tlUmVhZEFyZ3MiLCJpbnZvY2F0aW9ucyIsImludm9rZSIsImZlZSIsImV4dHJhU3lzdGVtRmVlIiwiYnJvYWRjYXN0T3ZlcnJpZGUiLCJfcmVzcG9uc2VUb1dyaXRlUmVzdWx0IiwiaW52b2tlTXVsdGkiLCJpbnZva2VNdWx0aXBsZSIsImludm9rZUFyZ3MiLCJnZXROZXR3b3JrcyIsImNsaWVudENvbW1vbiIsIl9yZXNwb25zZVRvR2V0TmV0d29ya3NSZXN1bHQiLCJzaWduTWVzc2FnZSIsIl9yZXNwb25zZVRvU2lnbk1lc3NhZ2VSZXN1bHQiLCJzdGF0ZSIsInN0YXR1cyIsImRhdGEiLCJzY3JpcHQiLCJnYXNDb25zdW1lZCIsImdhc19jb25zdW1lZCIsImV4Y2VwdGlvbiIsInN0YWNrIiwiY29kZSIsInR4aWQiLCJuZXR3b3JrcyIsImRlZmF1bHROZXR3b3JrIiwicHVibGljS2V5Iiwic2FsdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJOZW9MaW5lU2NvcGUiLCJOZW9MaW5lQ2hhaW5JZCIsIkluaXQiLCJORU9MaW5lIiwibmVvM0RhcGkiLCJPM1dhbGxldEFkYXB0ZXIiLCJDb25zdGFudHMiLCJFdmVudE5hbWUiLCJESVNDT05ORUNURUQiLCJOZW9EYXBpIiwiT25lR2F0ZVdhbGxldEFkYXB0ZXIiLCJPbmVHYXRlIiwiX2EiLCJfb25lR2F0ZVByb3ZpZGVyIiwiX29uZUdhdGVEYXBpIiwib24iLCJleHRyYU5ldHdvcmtGZWUiLCJwcm92aWRlciIsInJlbW92ZUxpc3RlbmVyIiwiV2FsbGV0QnV0dG9uIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJlbmRJY29uIiwic3RhcnRJY29uIiwic3R5bGUiLCJ0YWJJbmRleCIsIm9uQ2xpY2siLCJqdXN0aWZ5Q29udGVudCIsImNyZWF0ZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwiV2FsbGV0Q29sbGFwc2UiLCJpZCIsImV4cGFuZGVkIiwicmVmIiwiaW5zdGFudCIsInRyYW5zaXRpb24iLCJvcGVuQ29sbGFwc2UiLCJub2RlIiwiY3VycmVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsb3NlQ29sbGFwc2UiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsImhhbmRsZUNvbXBsZXRlIiwiaGFuZGxlVHJhbnNpdGlvbkVuZCIsImV2ZW50IiwidGFyZ2V0IiwicHJvcGVydHlOYW1lIiwicm9sZSIsIl9fcmVzdCIsInMiLCJ0IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwibGVuZ3RoIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ1c2VXYWxsZXQiLCJ1c2VDYWxsYmFjayIsIldhbGxldEljb24iLCJXYWxsZXRDb25uZWN0QnV0dG9uIiwicHJvcHMiLCJ3YWxsZXQiLCJoYW5kbGVDbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjYXRjaCIsImNvbnRlbnQiLCJXYWxsZXREaXNjb25uZWN0QnV0dG9uIiwiZGlzY29ubmVjdGluZyIsInNyYyIsImljb24iLCJhbHQiLCJXYWxsZXRMaXN0SXRlbSIsInVzZVdhbGxldE1vZGFsIiwiV2FsbGV0TW9kYWxCdXR0b24iLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwiV2FsbGV0TW9kYWxDb250ZXh0IiwiV2FsbGV0TW9kYWwiLCJQcm92aWRlciIsImNyZWF0ZVBvcnRhbCIsImxvZ28iLCJmZWF0dXJlZFdhbGxldHMiLCJjb250YWluZXIiLCJzZWxlY3QiLCJzZXRFeHBhbmRlZCIsImZhZGVJbiIsInNldEZhZGVJbiIsInBvcnRhbCIsInNldFBvcnRhbCIsImZlYXR1cmVkIiwibW9yZSIsInNsaWNlIiwiaGlkZU1vZGFsIiwiaGFuZGxlQ2xvc2UiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVdhbGxldENsaWNrIiwid2FsbGV0TmFtZSIsImhhbmRsZUNvbGxhcHNlQ2xpY2siLCJoYW5kbGVUYWJLZXkiLCJmb2N1c2FibGVFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaXJzdEVsZW1lbnQiLCJsYXN0RWxlbWVudCIsInNoaWZ0S2V5IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiZm9jdXMiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwid2lkdGgiLCJkIiwibWFwIiwiRnJhZ21lbnQiLCJ4bWxucyIsIm9uTW91c2VEb3duIiwidXNlRWZmZWN0IiwiV2FsbGV0TXVsdGlCdXR0b24iLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjb3B5QWRkcmVzcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsIm9wZW5Ecm9wZG93biIsImNsb3NlRHJvcGRvd24iLCJvcGVuTW9kYWwiLCJsaXN0ZW5lciIsImNvbnRhaW5zIiwicG9pbnRlckV2ZW50cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiV2FsbGV0Tm90U2VsZWN0ZWRFcnJvciIsIldhbGxldENvbnRleHQiLCJXQUxMRVRfSU5JVElBTF9TVEFURSIsImF1dG9Db25uZWN0Iiwib25FcnJvciIsIl9vbkVycm9yIiwic2V0TmFtZSIsInNldFN0YXRlIiwic2V0Q29ubmVjdGluZyIsInNldERpc2Nvbm5lY3RpbmciLCJpc0Nvbm5lY3RpbmciLCJpc0Rpc2Nvbm5lY3RpbmciLCJpc1VubG9hZGluZyIsIndhbGxldHNCeU5hbWUiLCJyZWR1Y2UiLCJuZXdOYW1lIiwib25SZWFkeSIsIm9uQ29ubmVjdCIsIm9uRGlzY29ubmVjdCIsIm9wZW4iLCJvZmYiLCJXY1NkayIsIlFSQ29kZU1vZGFsIiwiV2FsbGV0Q29ubmVjdFdhbGxldEFkYXB0ZXIiLCJuZW9uV2FsbGV0IiwiX3dhbGxldENvbm5lY3RDaGFpbnMiLCJfbG9nZ2VyIiwiX3JlbGF5UHJvdmlkZXIiLCJfbmVvbldhbGxldCIsIndhbGxldENvbm5lY3RJbnN0YW5jZSIsImluaXRDbGllbnQiLCJuZW9uV2FsbGV0Q29ubmVjdFdpbmRvdyIsInN1YnNjcmliZVRvRXZlbnRzIiwib25Qcm9wb3NhbCIsInVyaSIsIm9uRGVsZXRlZCIsImxvYWRTZXNzaW9uIiwic2Vzc2lvbiIsImNsb3NlIiwiYWNjb3VudEFkZHJlc3MiLCJfd2FsbGV0Q29ubmVjdEluc3RhbmNlIiwidGVzdEludm9rZSIsImFib3J0T25GYWlsIiwiaW52b2tlRnVuY3Rpb24iLCJjaGFpbklkIiwiX2IiLCJtZXNzYWdlSGV4IiwiV2FsbGV0TmFtZSIsIk5lb0xpbmUiLCJPMyIsIldhbGxldENvbm5lY3QiLCJOZW9uIl0sInNvdXJjZVJvb3QiOiIifQ==