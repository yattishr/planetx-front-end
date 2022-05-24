"use strict";
self["webpackHotUpdate_N_E"]("pages/bet",{

/***/ "./pages/bet.tsx":
/*!***********************!*\
  !*** ./pages/bet.tsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js");
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react-ui */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cityofzion/neon-js */ "./node_modules/@cityofzion/neon-js/dist/browser.js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-alert */ "./node_modules/react-alert/dist/esm/react-alert.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Clash\\sample-app\\neo-blockchain-betx\\pages\\bet.tsx",
    _this = undefined,
    _s = $RefreshSig$();



// @ts-nocheck











var Index = function Index() {
  _s();

  var NeoContractHash = "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5";
  var BettingManagerContractHash = "0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b";
  var tresuary = "NYKNWWmArjHD7uXFpuGeDH6ucYGpsf2s6Y"; // @ts-ignore

  var publishInvoke = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(rpcAddress, networkMagic, scriptHash, operation, args, account) {
      var contract, result;
      return C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              contract = new (_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_7___default().experimental.SmartContract)(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_7___default().u.HexString.fromHex(scriptHash), {
                networkMagic: networkMagic,
                rpcAddress: rpcAddress,
                account: account
              });
              _context.prev = 1;
              _context.next = 4;
              return contract.invoke(operation, args);

            case 4:
              result = _context.sent;
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 10:
              return _context.abrupt("return", result);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }));

    return function publishInvoke(_x, _x2, _x3, _x4, _x5, _x6) {
      return _ref.apply(this, arguments);
    };
  }();

  var _useWallet = (0,_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_11__.useWallet)(),
      connected = _useWallet.connected,
      getNetworks = _useWallet.getNetworks,
      address = _useWallet.address,
      invoke = _useWallet.invoke; // @ts-ignore


  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(),
      account = _useState[0],
      setAccount = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null),
      walletNetwork = _useState2[0],
      setWalletNetwork = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),
      state = _useState3[0],
      setState = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(),
      neoline = _useState4[0],
      setNeoLine = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)("78115"),
      blockHeight = _useState5[0],
      setBlockHeight = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(),
      neolineN3 = _useState6[0],
      setNeoLine3 = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(),
      alert = _useState7[0],
      setAlert = _useState7[1];

  var fetchWalletNetwork = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)( /*#__PURE__*/(0,C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
    var result, _result$data;

    return C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return getNetworks();

          case 3:
            result = _context2.sent;

            if (result.status === "success") {
              setWalletNetwork(((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.defaultNetwork) || null);
            }

            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  })), [getNetworks]); // balances

  setAlert((0,react_alert__WEBPACK_IMPORTED_MODULE_9__.useAlert)());

  var placeBet = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      return C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (connected) {
                neolineN3.send({
                  fromAddress: address,
                  toAddress: tresuary,
                  asset: "GAS",
                  amount: "1",
                  fee: "0.0001",
                  broadcastOverride: false
                }).then(function (result) {
                  console.log("Send transaction success!"); // eslint-disable-next-line react-hooks/rules-of-hooks

                  alert.show('Bet Placed successfully!');
                  console.log("Transaction ID: " + result.txid);
                  console.log("RPC node URL: " + result.nodeURL);
                });
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function placeBet() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    initDap(); // eslint-disable-next-line react-hooks/rules-of-hooks
    // balances

    if (connected) {
      fetchWalletNetwork();
      console.log("Account => ", neolineN3);

      if (neolineN3) {
        neolineN3.getAccount().then(function (account) {
          console.log("Account found conneted => ", account);
          setAccount(account);
        });
        neolineN3.getPublicKey().then(function (publicKeyData) {
          var address = publicKeyData.address,
              publicKey = publicKeyData.publicKey;
          console.log("Account address: " + address);
          console.log("Account public key: " + publicKey);
        });
        var scrpAddress;
        neolineN3.ScriptHashToAddress({
          scriptHash: "0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b"
        }).then(function (result) {
          var address = result.address;
          scrpAddress = address;
          console.log("address" + address);
        })["catch"](function (error) {
          var type = error.type,
              description = error.description,
              data = error.data;

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

  var initDap = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var initN3Dapi, initCommonDapi;
      return C_Users_Clash_sample_app_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              initN3Dapi = new Promise(function (resolve, reject) {
                window.addEventListener("NEOLine.N3.EVENT.READY", function () {
                  setNeoLine3(new NEOLineN3.Init());

                  if (neolineN3) {
                    resolve(neolineN3);
                  } else {
                    reject("N3 dAPI method failed to load.");
                  }
                });
              });
              initCommonDapi = new Promise(function (resolve, reject) {
                window.addEventListener("NEOLine.NEO.EVENT.READY", function () {
                  setNeoLine(new NEOLine.Init());

                  if (neoline) {
                    resolve(neoline);
                  } else {
                    reject("common dAPI method failed to load.");
                  }
                });
              });
              initCommonDapi.then(function () {
                console.log("The common dAPI method is loaded.");
                return initN3Dapi;
              }).then(function () {
                console.log("The N3 dAPI method is loaded.");
              })["catch"](function (err) {
                console.log(err);
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function initDap() {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "/main.css",
        className: "jsx-3186372463"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("nav", {
      className: "jsx-3186372463" + " " + "relative container mx-auto p-2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "jsx-3186372463" + " " + "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "jsx-3186372463" + " " + "pt-2 py-6 flex flex-row justify-between items-center ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
              src: "img/LOGO.png",
              height: "100",
              width: "100",
              alt: "",
              className: "jsx-3186372463"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("h1", {
              className: "jsx-3186372463" + " " + "lg:text-5xl md:text-5xl text-white font-bold  ",
              children: "Planet X"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "jsx-3186372463" + " " + "hidden space-x-6 md:flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "jsx-3186372463" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/games",
              children: "Games"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "jsx-3186372463" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/portfolio",
              children: "Portfolio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
          id: "menu-btn",
          className: "jsx-3186372463" + " " + "block hamburger md:hidden focus:outline-none focus:text-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            className: "jsx-3186372463" + " " + "hamburger-top bg-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            className: "jsx-3186372463" + " " + "hamburger-middle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            className: "jsx-3186372463" + " " + "hamburger-bottom"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "jsx-3186372463" + " " + "md:hidden",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          id: "menu",
          className: "jsx-3186372463" + " " + "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("section", {
      className: "jsx-3186372463"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("section", {
      id: "hero",
      className: "jsx-3186372463" + " " + "p-6",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "jsx-3186372463" + " " + "betxlogo "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "jsx-3186372463" + " " + "flex flex-col p-2 BetArea  box-border  ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "jsx-3186372463" + " " + "flex flex-row p-6 justify-around justify-self-start ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
            src: "/img/betGO.png",
            width: "300",
            height: "200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
            src: "/img/right.png",
            width: "300px",
            height: "350px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "jsx-3186372463" + " " + " flex flex-col items-center justify-between betBox ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
            className: "jsx-3186372463" + " " + "text-white text-2xl font-bold ",
            children: "Place Bet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
            onClick: placeBet,
            className: "jsx-3186372463" + " " + "betButton justify-self-auto text-white text-2xl font-bold ",
            children: "Bet X"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_rentfuse_labs_neo_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__.WalletMultiButton, {
            style: {
              backgroundColor: "#DC2984"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "jsx-3186372463" + " " + "timer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3186372463",
      children: ".container.jsx-3186372463{padding:0 2rem;}.gameDetailsCard.jsx-3186372463{box-sizing:border-box;width:200px;height:300px;left:144px;top:528px;background:rgba(137,132,202,0.35);border-radius:20px;}.BetArea.jsx-3186372463{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:end;-ms-flex-pack:end;justify-content:end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0;margin:0;position:relative;box-sizing:border-box;height:700px;top:340px;background:rgba(21,23,74,0.7);border:2px solid #c829dd;box-shadow:8px 8px 8px rgba(220,41,78,0.21);border-radius:50px;}.timer.jsx-3186372463{position:absolute;width:107px;height:119px;left:1950px;top:435px;background:url(/img/timer.png) no-repeat;}.betxlogo.jsx-3186372463{position:absolute;width:243.15px;height:68.24px;left:700px;top:409.08px;background:url(/img/betxlogo.png) no-repeat;background-size:contain;}.betBox.jsx-3186372463{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;box-sizing:border-box;width:413px;height:209px;background:rgba(196,196,196,0.3);border-radius:30px;}.betButton.jsx-3186372463{position:relative;width:283px;height:85px;background:#dc2984;box-shadow:6px 6px 8px rgba(200,41,221,0.4);border-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ2xhc2hcXHNhbXBsZS1hcHBcXG5lby1ibG9ja2NoYWluLWJldHhcXHBhZ2VzXFxiZXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlRa0IsQUFHMEIsQUFHTyxBQWFWLEFBb0JNLEFBUUEsQUFZTCxBQWNLLGVBckVwQixHQW9DYyxBQVFHLEFBMEJILElBakVBLFFBZ0NDLEFBa0NELEdBMUJHLENBdkNGLFFBbUVNLENBbkNQLElBL0JELENBdUNBLE9BUEQsR0EvQkEsQ0F1Q0csRUEyQmtDLElBbENOLEdBOUJKLEdBTXhCLENBaUMrQixFQU8zQixpQkFDTSxXQTdDSixHQStEQSxDQWxDckIsVUFVMEIsS0F0QzFCLEdBK0RBLGdCQXhCQSxLQW5Dc0IsNkNBeUNELDBDQXZDQSxtREF3Q0Qsa0JBQ0ksc0JBRVYsRUExQ1UsVUEyQ1QsYUFFdUIsaUNBQ2pCLG1CQUNyQixHQTlDWSxVQUNELFNBRVMsa0JBQ0ksc0JBQ1QsYUFDSCxVQUN1Qiw4QkFDUix5QkFDc0IsNENBQzVCLG1CQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXENsYXNoXFxzYW1wbGUtYXBwXFxuZW8tYmxvY2tjaGFpbi1iZXR4XFxwYWdlc1xcYmV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1ub2NoZWNrXHJcblxyXG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgd2FpdFR4LFxyXG4gIFdpdG5lc3NTY29wZSxcclxuICBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcixcclxufSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBXYWxsZXREaXNjb25uZWN0QnV0dG9uLFxyXG4gIFdhbGxldE11bHRpQnV0dG9uLFxyXG59IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcclxuaW1wb3J0IHsgbmVvbGluZU4zIH0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lXCI7XHJcbmltcG9ydCB7IHUsIHNjLCB3YWxsZXQgfSBmcm9tIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE5lb24gZnJvbSBcIkBjaXR5b2Z6aW9uL25lb24tanNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlQWxlcnQgfSBmcm9tICdyZWFjdC1hbGVydCdcclxuaW1wb3J0IG5lbzNEYXBpIGZyb20gXCJuZW8zLWRhcGlcIjtcclxuXHJcbmNvbnN0IEluZGV4OiBCZXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgTmVvQ29udHJhY3RIYXNoID0gXCIweGVmNDA3M2EwZjJiMzA1YTM4ZWM0MDUwZTRkM2QyOGJjNDBlYTYzZjVcIjtcclxuICBjb25zdCBCZXR0aW5nTWFuYWdlckNvbnRyYWN0SGFzaCA9XHJcbiAgICBcIjB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YlwiO1xyXG5cclxuICBjb25zdCB0cmVzdWFyeSA9IFwiTllLTldXbUFyakhEN3VYRnB1R2VESDZ1Y1lHcHNmMnM2WVwiO1xyXG5cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgY29uc3QgcHVibGlzaEludm9rZSA9IGFzeW5jIChcclxuICAgIHJwY0FkZHJlc3MsXHJcbiAgICBuZXR3b3JrTWFnaWMsXHJcbiAgICBzY3JpcHRIYXNoLFxyXG4gICAgb3BlcmF0aW9uLFxyXG4gICAgYXJncyxcclxuICAgIGFjY291bnRcclxuICApID0+IHtcclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IE5lb24uZXhwZXJpbWVudGFsLlNtYXJ0Q29udHJhY3QoXHJcbiAgICAgIE5lb24udS5IZXhTdHJpbmcuZnJvbUhleChzY3JpcHRIYXNoKSxcclxuICAgICAge1xyXG4gICAgICAgIG5ldHdvcmtNYWdpYyxcclxuICAgICAgICBycGNBZGRyZXNzLFxyXG4gICAgICAgIGFjY291bnQsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0Lmludm9rZShvcGVyYXRpb24sIGFyZ3MpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgY29ubmVjdGVkLCBnZXROZXR3b3JrcywgYWRkcmVzcywgaW52b2tlIH0gPSB1c2VXYWxsZXQoKTtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW3dhbGxldE5ldHdvcmssIHNldFdhbGxldE5ldHdvcmtdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbmVvbGluZSwgc2V0TmVvTGluZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtibG9ja0hlaWdodCwgc2V0QmxvY2tIZWlnaHRdID0gdXNlU3RhdGUoXCI3ODExNVwiKTtcclxuICBjb25zdCBbbmVvbGluZU4zLCBzZXROZW9MaW5lM10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFthbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBmZXRjaFdhbGxldE5ldHdvcmsgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXROZXR3b3JrcygpO1xyXG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICBzZXRXYWxsZXROZXR3b3JrKHJlc3VsdC5kYXRhPy5kZWZhdWx0TmV0d29yayB8fCBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW2dldE5ldHdvcmtzXSk7XHJcbiAgICAvLyBiYWxhbmNlc1xyXG4gICAgc2V0QWxlcnQodXNlQWxlcnQoKSlcclxuICAgIGNvbnN0IHBsYWNlQmV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBcclxuICAgICAgaWYoY29ubmVjdGVkKSB7XHJcbiAgICAgICAgbmVvbGluZU4zXHJcbiAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgZnJvbUFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgICAgICB0b0FkZHJlc3M6IHRyZXN1YXJ5LFxyXG4gICAgICAgICAgYXNzZXQ6IFwiR0FTXCIsXHJcbiAgICAgICAgICBhbW91bnQ6IFwiMVwiLFxyXG4gICAgICAgICAgZmVlOiBcIjAuMDAwMVwiLFxyXG4gICAgICAgICAgYnJvYWRjYXN0T3ZlcnJpZGU6IGZhbHNlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTZW5kIHRyYW5zYWN0aW9uIHN1Y2Nlc3MhXCIpO1xyXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXHJcbiAgICAgICAgICBhbGVydC5zaG93KCdCZXQgUGxhY2VkIHN1Y2Nlc3NmdWxseSEnKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJUcmFuc2FjdGlvbiBJRDogXCIgKyByZXN1bHQudHhpZCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJQQyBub2RlIFVSTDogXCIgKyByZXN1bHQubm9kZVVSTCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICBcclxuICBcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpbml0RGFwKCk7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xyXG4gICAgICAgXHJcbiAgICAgIC8vIGJhbGFuY2VzXHJcbiAgXHJcbiAgICAgIGlmIChjb25uZWN0ZWQpIHtcclxuICAgICAgICBmZXRjaFdhbGxldE5ldHdvcmsoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgPT4gXCIsIG5lb2xpbmVOMyk7XHJcbiAgXHJcbiAgICAgICAgaWYgKG5lb2xpbmVOMykge1xyXG4gICAgICAgICAgbmVvbGluZU4zLmdldEFjY291bnQoKS50aGVuKChhY2NvdW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBmb3VuZCBjb25uZXRlZCA9PiBcIiwgYWNjb3VudCk7XHJcbiAgXHJcbiAgICAgICAgICAgIHNldEFjY291bnQoYWNjb3VudCk7XHJcbiAgICAgICAgICB9KTtcclxuICBcclxuICAgICAgICAgIG5lb2xpbmVOMy5nZXRQdWJsaWNLZXkoKS50aGVuKChwdWJsaWNLZXlEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgYWRkcmVzcywgcHVibGljS2V5IH0gPSBwdWJsaWNLZXlEYXRhO1xyXG4gIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgYWRkcmVzczogXCIgKyBhZGRyZXNzKTtcclxuICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IHB1YmxpYyBrZXk6IFwiICsgcHVibGljS2V5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbGV0IHNjcnBBZGRyZXNzO1xyXG4gICAgICAgICAgbmVvbGluZU4zXHJcbiAgICAgICAgICAgIC5TY3JpcHRIYXNoVG9BZGRyZXNzKHtcclxuICAgICAgICAgICAgICBzY3JpcHRIYXNoOiBcIjB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YlwiLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgc2NycEFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkcmVzc1wiICsgYWRkcmVzcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB7IHR5cGUsIGRlc2NyaXB0aW9uLCBkYXRhIH0gPSBlcnJvcjtcclxuICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJOT19QUk9WSURFUlwiOlxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHByb3ZpZGVyIGF2YWlsYWJsZS5cIik7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIk1BTEZPUk1FRF9JTlBVVFwiOlxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBjaGVjayB5b3VyIGlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgIC8vIE5vdCBhbiBleHBlY3RlZCBlcnJvciBvYmplY3QuICBKdXN0IHdyaXRlIHRoZSBlcnJvciB0byB0aGUgY29uc29sZS5cclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgXHJcbiAgICAgICAgICAvLyBzZW5kIGdhcyB0b2tlblxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRXYWxsZXROZXR3b3JrKG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbY29ubmVjdGVkLCBmZXRjaFdhbGxldE5ldHdvcmtdKTtcclxuXHJcbiAgY29uc3QgaW5pdERhcCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGluaXROM0RhcGkgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiTkVPTGluZS5OMy5FVkVOVC5SRUFEWVwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0TmVvTGluZTMobmV3IE5FT0xpbmVOMy5Jbml0KCkpO1xyXG4gICAgICAgIGlmIChuZW9saW5lTjMpIHtcclxuICAgICAgICAgIHJlc29sdmUobmVvbGluZU4zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KFwiTjMgZEFQSSBtZXRob2QgZmFpbGVkIHRvIGxvYWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBpbml0Q29tbW9uRGFwaSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJORU9MaW5lLk5FTy5FVkVOVC5SRUFEWVwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0TmVvTGluZShuZXcgTkVPTGluZS5Jbml0KCkpO1xyXG4gICAgICAgIGlmIChuZW9saW5lKSB7XHJcbiAgICAgICAgICByZXNvbHZlKG5lb2xpbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QoXCJjb21tb24gZEFQSSBtZXRob2QgZmFpbGVkIHRvIGxvYWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbml0Q29tbW9uRGFwaVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgY29tbW9uIGRBUEkgbWV0aG9kIGlzIGxvYWRlZC5cIik7XHJcbiAgICAgICAgcmV0dXJuIGluaXROM0RhcGk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBOMyBkQVBJIG1ldGhvZCBpcyBsb2FkZWQuXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9tYWluLmNzc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjb250YWluZXIgbXgtYXV0byBwLTIgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBweS02IGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9MT0dPLnBuZ1wiIGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibGc6dGV4dC01eGwgbWQ6dGV4dC01eGwgdGV4dC13aGl0ZSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgUGxhbmV0IFhcclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzcGFjZS14LTYgbWQ6ZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZGFya0dyYXlpc2hCbHVlIHRleHQtd2hpdGUgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9nYW1lc1wiPkdhbWVzPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWRhcmtHcmF5aXNoQmx1ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+UG9ydGZvbGlvPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgaWQ9XCJtZW51LWJ0blwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGhhbWJ1cmdlciBtZDpoaWRkZW4gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItdG9wIGJnLXdoaXRlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItbWlkZGxlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm90dG9tXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPVwibWVudVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoaWRkZW4gc2VsZi1lbmQgcHktOCBtdC0xMCBzcGFjZS15LTYgZm9udC1ib2xkIGJnLXdoaXRlIHNtOnctYXV0byBzbTpzZWxmLWNlbnRlciBsZWZ0LTYgcmlnaHQtNiBkcm9wLXNoYWRvdy1tZFwiXHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPHNlY3Rpb24+PC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cImhlcm9cIiBjbGFzc05hbWU9XCJwLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJldHhsb2dvIFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTIgQmV0QXJlYSAgYm94LWJvcmRlciAgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcC02IGp1c3RpZnktYXJvdW5kIGp1c3RpZnktc2VsZi1zdGFydCBcIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYmV0R08ucG5nXCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIyMDBcIiAvPlxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9yaWdodC5wbmdcIiB3aWR0aD1cIjMwMHB4XCIgaGVpZ2h0PVwiMzUwcHhcIiAvPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmV0Qm94IFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtMnhsIGZvbnQtYm9sZCBcIj5QbGFjZSBCZXQ8L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cGxhY2VCZXR9IGNsYXNzTmFtZT1cImJldEJ1dHRvbiBqdXN0aWZ5LXNlbGYtYXV0byB0ZXh0LXdoaXRlIHRleHQtMnhsIGZvbnQtYm9sZCBcIj5cclxuICAgICAgICAgICAgICBCZXQgWFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxXYWxsZXRNdWx0aUJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjREMyOTg0XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lclwiPjwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5nYW1lRGV0YWlsc0NhcmQge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgbGVmdDogMTQ0cHg7XHJcbiAgICAgICAgICB0b3A6IDUyOHB4O1xyXG5cclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTM3LCAxMzIsIDIwMiwgMC4zNSk7XHJcblxyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLkJldEFyZWEge1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG5cclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgaGVpZ2h0OiA3MDBweDtcclxuICAgICAgICAgIHRvcDogMzQwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxLCAyMywgNzQsIDAuNyk7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzgyOWRkO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogOHB4IDhweCA4cHggcmdiYSgyMjAsIDQxLCA3OCwgMC4yMSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbWVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDdweDtcclxuICAgICAgICAgIGhlaWdodDogMTE5cHg7XHJcbiAgICAgICAgICBsZWZ0OiAxOTUwcHg7XHJcbiAgICAgICAgICB0b3A6IDQzNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9pbWcvdGltZXIucG5nKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iZXR4bG9nbyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogMjQzLjE1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDY4LjI0cHg7XHJcbiAgICAgICAgICBsZWZ0OiA3MDBweDtcclxuICAgICAgICAgIHRvcDogNDA5LjA4cHg7XHJcblxyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9pbWcvYmV0eGxvZ28ucG5nKSBuby1yZXBlYXQ7XHJcblxyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJldEJveCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAgIHdpZHRoOiA0MTNweDtcclxuICAgICAgICAgIGhlaWdodDogMjA5cHg7XHJcblxyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjMpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJldEJ1dHRvbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB3aWR0aDogMjgzcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcblxyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2RjMjk4NDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggOHB4IHJnYmEoMjAwLCA0MSwgMjIxLCAwLjQpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Clash\\\\sample-app\\\\neo-blockchain-betx\\\\pages\\\\bet.tsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true);
};

_s(Index, "m16C4RlQ8fZUloZqC3mdDj9L/Hk=", false, function () {
  return [_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_11__.useWallet, react_alert__WEBPACK_IMPORTED_MODULE_9__.useAlert];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmV0LmQ4NDM0NDE5NzA1YTkwMDM3ZDM5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQU1BO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBR0EsSUFBTVUsS0FBVSxHQUFHLFNBQWJBLEtBQWEsR0FBTTtBQUFBOztBQUN2QixNQUFNQyxlQUFlLEdBQUcsNENBQXhCO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQzlCLDRDQURGO0FBR0EsTUFBTUMsUUFBUSxHQUFHLG9DQUFqQixDQUx1QixDQU92Qjs7QUFDQSxNQUFNQyxhQUFhO0FBQUEsMlNBQUcsaUJBQ3BCQyxVQURvQixFQUVwQkMsWUFGb0IsRUFHcEJDLFVBSG9CLEVBSXBCQyxTQUpvQixFQUtwQkMsSUFMb0IsRUFNcEJDLE9BTm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFkQyxjQUFBQSxRQVJjLEdBUUgsSUFBSWhCLHVGQUFKLENBQ2ZBLDhFQUFBLENBQXlCWSxVQUF6QixDQURlLEVBRWY7QUFDRUQsZ0JBQUFBLFlBQVksRUFBWkEsWUFERjtBQUVFRCxnQkFBQUEsVUFBVSxFQUFWQSxVQUZGO0FBR0VLLGdCQUFBQSxPQUFPLEVBQVBBO0FBSEYsZUFGZSxDQVJHO0FBQUE7QUFBQTtBQUFBLHFCQW1CSEMsUUFBUSxDQUFDTSxNQUFULENBQWdCVCxTQUFoQixFQUEyQkMsSUFBM0IsQ0FuQkc7O0FBQUE7QUFtQmxCUyxjQUFBQSxNQW5Ca0I7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXFCbEJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUFyQmtCO0FBQUEsK0NBd0JiRixNQXhCYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFiZCxhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5COztBQTJCQSxtQkFBb0RkLG1G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bnQiOlsiLy8gQHRzLW5vY2hlY2tcclxuXHJcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICB3YWl0VHgsXHJcbiAgV2l0bmVzc1Njb3BlLFxyXG4gIFdhbGxldE5vdENvbm5lY3RlZEVycm9yLFxyXG59IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIFdhbGxldERpc2Nvbm5lY3RCdXR0b24sXHJcbiAgV2FsbGV0TXVsdGlCdXR0b24sXHJcbn0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aVwiO1xyXG5pbXBvcnQgeyBuZW9saW5lTjMgfSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5lb2xpbmVcIjtcclxuaW1wb3J0IHsgdSwgc2MsIHdhbGxldCB9IGZyb20gXCJAY2l0eW9memlvbi9uZW9uLWpzXCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTmVvbiBmcm9tIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBbGVydCB9IGZyb20gJ3JlYWN0LWFsZXJ0J1xyXG5pbXBvcnQgbmVvM0RhcGkgZnJvbSBcIm5lbzMtZGFwaVwiO1xyXG5cclxuY29uc3QgSW5kZXg6IEJldCA9ICgpID0+IHtcclxuICBjb25zdCBOZW9Db250cmFjdEhhc2ggPSBcIjB4ZWY0MDczYTBmMmIzMDVhMzhlYzQwNTBlNGQzZDI4YmM0MGVhNjNmNVwiO1xyXG4gIGNvbnN0IEJldHRpbmdNYW5hZ2VyQ29udHJhY3RIYXNoID1cclxuICAgIFwiMHg3YTA2ZTQwY2QwOGMwYTg4NzdjMmQ2ZDBhNDk3NGY3ZGJlOWIyYjdiXCI7XHJcblxyXG4gIGNvbnN0IHRyZXN1YXJ5ID0gXCJOWUtOV1dtQXJqSEQ3dVhGcHVHZURINnVjWUdwc2YyczZZXCI7XHJcblxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25zdCBwdWJsaXNoSW52b2tlID0gYXN5bmMgKFxyXG4gICAgcnBjQWRkcmVzcyxcclxuICAgIG5ldHdvcmtNYWdpYyxcclxuICAgIHNjcmlwdEhhc2gsXHJcbiAgICBvcGVyYXRpb24sXHJcbiAgICBhcmdzLFxyXG4gICAgYWNjb3VudFxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgTmVvbi5leHBlcmltZW50YWwuU21hcnRDb250cmFjdChcclxuICAgICAgTmVvbi51LkhleFN0cmluZy5mcm9tSGV4KHNjcmlwdEhhc2gpLFxyXG4gICAgICB7XHJcbiAgICAgICAgbmV0d29ya01hZ2ljLFxyXG4gICAgICAgIHJwY0FkZHJlc3MsXHJcbiAgICAgICAgYWNjb3VudCxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuaW52b2tlKG9wZXJhdGlvbiwgYXJncyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBjb25uZWN0ZWQsIGdldE5ldHdvcmtzLCBhZGRyZXNzLCBpbnZva2UgfSA9IHVzZVdhbGxldCgpO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBbd2FsbGV0TmV0d29yaywgc2V0V2FsbGV0TmV0d29ya10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtuZW9saW5lLCBzZXROZW9MaW5lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Jsb2NrSGVpZ2h0LCBzZXRCbG9ja0hlaWdodF0gPSB1c2VTdGF0ZShcIjc4MTE1XCIpO1xyXG4gIGNvbnN0IFtuZW9saW5lTjMsIHNldE5lb0xpbmUzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IGZldGNoV2FsbGV0TmV0d29yayA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldE5ldHdvcmtzKCk7XHJcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHNldFdhbGxldE5ldHdvcmsocmVzdWx0LmRhdGE/LmRlZmF1bHROZXR3b3JrIHx8IG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9LCBbZ2V0TmV0d29ya3NdKTtcclxuICAgIC8vIGJhbGFuY2VzXHJcbiAgICBzZXRBbGVydCh1c2VBbGVydCgpKVxyXG4gICAgY29uc3QgcGxhY2VCZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICBpZihjb25uZWN0ZWQpIHtcclxuICAgICAgICBuZW9saW5lTjNcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICBmcm9tQWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgICAgIHRvQWRkcmVzczogdHJlc3VhcnksXHJcbiAgICAgICAgICBhc3NldDogXCJHQVNcIixcclxuICAgICAgICAgIGFtb3VudDogXCIxXCIsXHJcbiAgICAgICAgICBmZWU6IFwiMC4wMDAxXCIsXHJcbiAgICAgICAgICBicm9hZGNhc3RPdmVycmlkZTogZmFsc2UsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmQgdHJhbnNhY3Rpb24gc3VjY2VzcyFcIik7XHJcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcclxuICAgICAgICAgIGFsZXJ0LnNob3coJ0JldCBQbGFjZWQgc3VjY2Vzc2Z1bGx5IScpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlRyYW5zYWN0aW9uIElEOiBcIiArIHJlc3VsdC50eGlkKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUlBDIG5vZGUgVVJMOiBcIiArIHJlc3VsdC5ub2RlVVJMKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGluaXREYXAoKTtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXHJcbiAgICAgICBcclxuICAgICAgLy8gYmFsYW5jZXNcclxuICBcclxuICAgICAgaWYgKGNvbm5lY3RlZCkge1xyXG4gICAgICAgIGZldGNoV2FsbGV0TmV0d29yaygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCA9PiBcIiwgbmVvbGluZU4zKTtcclxuICBcclxuICAgICAgICBpZiAobmVvbGluZU4zKSB7XHJcbiAgICAgICAgICBuZW9saW5lTjMuZ2V0QWNjb3VudCgpLnRoZW4oKGFjY291bnQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IGZvdW5kIGNvbm5ldGVkID0+IFwiLCBhY2NvdW50KTtcclxuICBcclxuICAgICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50KTtcclxuICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgICAgbmVvbGluZU4zLmdldFB1YmxpY0tleSgpLnRoZW4oKHB1YmxpY0tleURhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBhZGRyZXNzLCBwdWJsaWNLZXkgfSA9IHB1YmxpY0tleURhdGE7XHJcbiAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBhZGRyZXNzOiBcIiArIGFkZHJlc3MpO1xyXG4gIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgcHVibGljIGtleTogXCIgKyBwdWJsaWNLZXkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBsZXQgc2NycEFkZHJlc3M7XHJcbiAgICAgICAgICBuZW9saW5lTjNcclxuICAgICAgICAgICAgLlNjcmlwdEhhc2hUb0FkZHJlc3Moe1xyXG4gICAgICAgICAgICAgIHNjcmlwdEhhc2g6IFwiMHg3YTA2ZTQwY2QwOGMwYTg4NzdjMmQ2ZDBhNDk3NGY3ZGJlOWIyYjdiXCIsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICBzY3JwQWRkcmVzcyA9IGFkZHJlc3M7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRyZXNzXCIgKyBhZGRyZXNzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgZGVzY3JpcHRpb24sIGRhdGEgfSA9IGVycm9yO1xyXG4gICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIk5PX1BST1ZJREVSXCI6XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gcHJvdmlkZXIgYXZhaWxhYmxlLlwiKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiTUFMRk9STUVEX0lOUFVUXCI6XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGNoZWNrIHlvdXIgaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgLy8gTm90IGFuIGV4cGVjdGVkIGVycm9yIG9iamVjdC4gIEp1c3Qgd3JpdGUgdGhlIGVycm9yIHRvIHRoZSBjb25zb2xlLlxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICBcclxuICAgICAgICAgIC8vIHNlbmQgZ2FzIHRva2VuXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFdhbGxldE5ldHdvcmsobnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0sIFtjb25uZWN0ZWQsIGZldGNoV2FsbGV0TmV0d29ya10pO1xyXG5cclxuICBjb25zdCBpbml0RGFwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgaW5pdE4zRGFwaSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJORU9MaW5lLk4zLkVWRU5ULlJFQURZXCIsICgpID0+IHtcclxuICAgICAgICBzZXROZW9MaW5lMyhuZXcgTkVPTGluZU4zLkluaXQoKSk7XHJcbiAgICAgICAgaWYgKG5lb2xpbmVOMykge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZW9saW5lTjMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QoXCJOMyBkQVBJIG1ldGhvZCBmYWlsZWQgdG8gbG9hZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGluaXRDb21tb25EYXBpID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIk5FT0xpbmUuTkVPLkVWRU5ULlJFQURZXCIsICgpID0+IHtcclxuICAgICAgICBzZXROZW9MaW5lKG5ldyBORU9MaW5lLkluaXQoKSk7XHJcbiAgICAgICAgaWYgKG5lb2xpbmUpIHtcclxuICAgICAgICAgIHJlc29sdmUobmVvbGluZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChcImNvbW1vbiBkQVBJIG1ldGhvZCBmYWlsZWQgdG8gbG9hZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGluaXRDb21tb25EYXBpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBjb21tb24gZEFQSSBtZXRob2QgaXMgbG9hZGVkLlwiKTtcclxuICAgICAgICByZXR1cm4gaW5pdE4zRGFwaTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIE4zIGRBUEkgbWV0aG9kIGlzIGxvYWRlZC5cIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL21haW4uY3NzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbnRhaW5lciBteC1hdXRvIHAtMiBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHB5LTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL0xPR08ucG5nXCIgaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsZzp0ZXh0LTV4bCBtZDp0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICBQbGFuZXQgWFxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNwYWNlLXgtNiBtZDpmbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1kYXJrR3JheWlzaEJsdWUgdGV4dC13aGl0ZSBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dhbWVzXCI+R2FtZXM8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZGFya0dyYXlpc2hCbHVlIHRleHQtd2hpdGUgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3J0Zm9saW9cIj5Qb3J0Zm9saW88L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBpZD1cIm1lbnUtYnRuXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaGFtYnVyZ2VyIG1kOmhpZGRlbiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci10b3AgYmctd2hpdGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1taWRkbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3R0b21cIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9XCJtZW51XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleC1jb2wgaXRlbXMtY2VudGVyIGhpZGRlbiBzZWxmLWVuZCBweS04IG10LTEwIHNwYWNlLXktNiBmb250LWJvbGQgYmctd2hpdGUgc206dy1hdXRvIHNtOnNlbGYtY2VudGVyIGxlZnQtNiByaWdodC02IGRyb3Atc2hhZG93LW1kXCJcclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICA8c2VjdGlvbj48L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiaGVyb1wiIGNsYXNzTmFtZT1cInAtNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmV0eGxvZ28gXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtMiBCZXRBcmVhICBib3gtYm9yZGVyICBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwLTYganVzdGlmeS1hcm91bmQganVzdGlmeS1zZWxmLXN0YXJ0IFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9iZXRHTy5wbmdcIiB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjIwMFwiIC8+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL3JpZ2h0LnBuZ1wiIHdpZHRoPVwiMzAwcHhcIiBoZWlnaHQ9XCIzNTBweFwiIC8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZXRCb3ggXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgZm9udC1ib2xkIFwiPlBsYWNlIEJldDwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwbGFjZUJldH0gY2xhc3NOYW1lPVwiYmV0QnV0dG9uIGp1c3RpZnktc2VsZi1hdXRvIHRleHQtd2hpdGUgdGV4dC0yeGwgZm9udC1ib2xkIFwiPlxyXG4gICAgICAgICAgICAgIEJldCBYXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPFdhbGxldE11bHRpQnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEQzI5ODRcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyXCI+PC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdhbWVEZXRhaWxzQ2FyZCB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICBsZWZ0OiAxNDRweDtcclxuICAgICAgICAgIHRvcDogNTI4cHg7XHJcblxyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMzcsIDEzMiwgMjAyLCAwLjM1KTtcclxuXHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuQmV0QXJlYSB7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcblxyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgICAgdG9wOiAzNDBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjEsIDIzLCA3NCwgMC43KTtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjODI5ZGQ7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiA4cHggOHB4IDhweCByZ2JhKDIyMCwgNDEsIDc4LCAwLjIxKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGltZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwN3B4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMTlweDtcclxuICAgICAgICAgIGxlZnQ6IDE5NTBweDtcclxuICAgICAgICAgIHRvcDogNDM1cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2ltZy90aW1lci5wbmcpIG5vLXJlcGVhdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJldHhsb2dvIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAyNDMuMTVweDtcclxuICAgICAgICAgIGhlaWdodDogNjguMjRweDtcclxuICAgICAgICAgIGxlZnQ6IDcwMHB4O1xyXG4gICAgICAgICAgdG9wOiA0MDkuMDhweDtcclxuXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2ltZy9iZXR4bG9nby5wbmcpIG5vLXJlcGVhdDtcclxuXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmV0Qm94IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBkaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgICAgd2lkdGg6IDQxM3B4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMDlweDtcclxuXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMyk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmV0QnV0dG9uIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdpZHRoOiAyODNweDtcclxuICAgICAgICAgIGhlaWdodDogODVweDtcclxuXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGMyOTg0O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogNnB4IDZweCA4cHggcmdiYSgyMDAsIDQxLCAyMjEsIDAuNCk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsidXNlV2FsbGV0IiwiV2FsbGV0TXVsdGlCdXR0b24iLCJIZWFkIiwiSW1hZ2UiLCJMaW5rIiwiTmVvbiIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VBbGVydCIsIkluZGV4IiwiTmVvQ29udHJhY3RIYXNoIiwiQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2giLCJ0cmVzdWFyeSIsInB1Ymxpc2hJbnZva2UiLCJycGNBZGRyZXNzIiwibmV0d29ya01hZ2ljIiwic2NyaXB0SGFzaCIsIm9wZXJhdGlvbiIsImFyZ3MiLCJhY2NvdW50IiwiY29udHJhY3QiLCJleHBlcmltZW50YWwiLCJTbWFydENvbnRyYWN0IiwidSIsIkhleFN0cmluZyIsImZyb21IZXgiLCJpbnZva2UiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGVkIiwiZ2V0TmV0d29ya3MiLCJhZGRyZXNzIiwic2V0QWNjb3VudCIsIndhbGxldE5ldHdvcmsiLCJzZXRXYWxsZXROZXR3b3JrIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm5lb2xpbmUiLCJzZXROZW9MaW5lIiwiYmxvY2tIZWlnaHQiLCJzZXRCbG9ja0hlaWdodCIsIm5lb2xpbmVOMyIsInNldE5lb0xpbmUzIiwiYWxlcnQiLCJzZXRBbGVydCIsImZldGNoV2FsbGV0TmV0d29yayIsInN0YXR1cyIsImRhdGEiLCJkZWZhdWx0TmV0d29yayIsImVycm9yIiwicGxhY2VCZXQiLCJzZW5kIiwiZnJvbUFkZHJlc3MiLCJ0b0FkZHJlc3MiLCJhc3NldCIsImFtb3VudCIsImZlZSIsImJyb2FkY2FzdE92ZXJyaWRlIiwidGhlbiIsInNob3ciLCJ0eGlkIiwibm9kZVVSTCIsImluaXREYXAiLCJnZXRBY2NvdW50IiwiZ2V0UHVibGljS2V5IiwicHVibGljS2V5RGF0YSIsInB1YmxpY0tleSIsInNjcnBBZGRyZXNzIiwiU2NyaXB0SGFzaFRvQWRkcmVzcyIsInR5cGUiLCJkZXNjcmlwdGlvbiIsImluaXROM0RhcGkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJORU9MaW5lTjMiLCJJbml0IiwiaW5pdENvbW1vbkRhcGkiLCJORU9MaW5lIiwiZXJyIiwiYmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==