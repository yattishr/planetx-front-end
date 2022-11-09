"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cityofzion/neon-js */ "./node_modules/@cityofzion/neon-js/dist/browser.js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Projects\\planet-x-frontend-dapp\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();




/* eslint-disable @next/next/link-passhref */
// disable eslint-disable-next-line for this file
// @ts-nocheck









var Index = function Index() {
  _s();

  var NeoContractHash = "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5";
  var BettingManagerContractHash = "0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b";
  var bettingManagerAddress = "NYKNWWmArjHD7uXFpuGeDH6ucYGpsf2s6Y"; // @ts-ignore

  var publishInvoke = /*#__PURE__*/function () {
    var _ref = (0,C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(rpcAddress, networkMagic, scriptHash, operation, args, account) {
      var contract, result;
      return C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              contract = new (_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_6___default().experimental.SmartContract)(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_6___default().u.HexString.fromHex(scriptHash), {
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

  var _useWallet = (0,_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useWallet)(),
      connected = _useWallet.connected,
      getNetworks = _useWallet.getNetworks,
      address = _useWallet.address,
      invoke = _useWallet.invoke; // @ts-ignore


  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(),
      account = _useState[0],
      setAccount = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null),
      walletNetwork = _useState2[0],
      setWalletNetwork = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0),
      state = _useState3[0],
      setState = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(),
      neoline = _useState4[0],
      setNeoLine = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(),
      neolineN3 = _useState5[0],
      setNeoLine3 = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("78115"),
      blockHeight = _useState6[0],
      setBlockHeight = _useState6[1];

  var fetchWalletNetwork = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)( /*#__PURE__*/(0,C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
    var result, _result$data;

    return C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
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
  })), [getNetworks]);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    initDap(); // balances

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

  var placeBet = /*#__PURE__*/function () {
    var _ref3 = (0,C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      return C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
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

  var initDap = /*#__PURE__*/function () {
    var _ref4 = (0,C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var initN3Dapi, initCommonDapi;
      return C_Projects_planet_x_frontend_dapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "/main.css",
        className: "jsx-1266108660"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("nav", {
      className: "jsx-1266108660" + " " + "relative container mx-auto p-2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "jsx-1266108660" + " " + "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "jsx-1266108660" + " " + "pt-2 py-6 flex gap-4 flex-row justify-between items-center ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
              src: "img/LOGO.png",
              height: "100",
              width: "100",
              alt: "",
              className: "jsx-1266108660"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
              className: "jsx-1266108660" + " " + "planet_x_logo ",
              children: "Planet X"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-1266108660" + " " + " space-x-6 md:flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "jsx-1266108660" + " " + "header_text",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/games",
              children: "Homepage"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "jsx-1266108660" + " " + "header_text",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/portfolio",
              children: "Roadmap"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "jsx-1266108660" + " " + "connect_button",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "jsx-1266108660" + " " + "text_primary",
              children: "Connect Wallet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
          id: "menu-btn",
          className: "jsx-1266108660" + " " + "block hamburger md:hidden focus:outline-none focus:text-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            className: "jsx-1266108660" + " " + "hamburger-top bg-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            className: "jsx-1266108660" + " " + "hamburger-middle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            className: "jsx-1266108660" + " " + "hamburger-bottom"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "jsx-1266108660" + " " + "md:hidden",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          id: "menu",
          className: "jsx-1266108660" + " " + "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      className: "jsx-1266108660"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      id: "hero",
      className: "jsx-1266108660" + " " + "flex flex-col",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "jsx-1266108660" + " " + "   container flex flex-row justify-between items-center ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-1266108660" + " " + "flex flex-col items-center gap-2 ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "jsx-1266108660" + " " + "flex flex-col items-start gap-2 ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "jsx-1266108660" + " " + "text_secondary",
              children: "Coming from PLANET X, betting to the moon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "jsx-1266108660" + " " + "description",
              children: "Built for you from the start. Place bets on E-sports games together, on a simple platform."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 237,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "jsx-1266108660" + " " + " flex flex-row connect_wallet_large",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "jsx-1266108660" + " " + "connect_wallet_large_text ",
              children: "Connect Wallet"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-1266108660" + " " + " md:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
            src: "img/basket_ball_illustration.png",
            alt: "",
            className: "jsx-1266108660"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "jsx-1266108660" + " " + "flex flex-row items-center justify-center info_box   ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-1266108660" + " " + "flex flex-row   ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "jsx-1266108660",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
              src: "/img/logo.png",
              width: 64,
              height: 64,
              alt: "logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
            className: "jsx-1266108660" + " " + "description_box",
            children: "PLANET X is an E-sports crypto betting platform"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "jsx-1266108660" + " " + "flex flex-col items-center p-6 w-1/2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          className: "jsx-1266108660" + " " + "what_can whitespace-nowrap p-3",
          children: "What you can do?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "jsx-1266108660" + " " + "why_us flex flex-row gap-2 justify-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-1266108660" + " " + "  flex flex-col justify-between items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "jsx-1266108660" + " " + " flex flex-col can_do_box justify-center items-center p-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "jsx-1266108660" + " " + "flex flex-row gap-2 justify-center items-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                src: "/img/star.png",
                width: 112,
                height: 112,
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 276,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "jsx-1266108660" + " " + "flex flex-col justify-between",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                  className: "jsx-1266108660" + " " + "description_box",
                  children: "Bet on E-Sports Matches"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 278,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                  className: "jsx-1266108660" + " " + "description_box",
                  children: "Gain winnings to go to the moon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 279,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 277,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "jsx-1266108660" + " " + " flex flex-col can_do_box justify-center items-center p-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "jsx-1266108660" + " " + "flex flex-row gap-2 justify-center items-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                src: "/img/star.png",
                width: 112,
                height: 112,
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 288,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "jsx-1266108660" + " " + "flex flex-col justify-between",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                  className: "jsx-1266108660" + " " + "description_box",
                  children: "Be part of the platform by governance"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 290,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                  className: "jsx-1266108660" + " " + "description_box flex-wrap",
                  children: "Let your portfolio grow even when you are not betting"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 293,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 286,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-1266108660" + " " + "flex flex-col justify-center items-end",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "jsx-1266108660" + " " + " flex flex-col  can_do_box  p-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "jsx-1266108660" + " " + "flex flex-row   gap-2   justify-between items-center p-2 ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                src: "/img/star.png",
                width: 112,
                height: 112,
                alt: "sd"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 304,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                className: "jsx-1266108660" + " " + "flex flex-col ",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                  className: "jsx-1266108660" + " " + "description_box",
                  children: "Bet on E-Sports Matches"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 311,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                  className: "jsx-1266108660" + " " + "description_box",
                  children: "Gain winnings to go to the moon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 312,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 310,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "jsx-1266108660" + " " + "flex flex-col justify-center items-center p-6 w-1/2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
          className: "jsx-1266108660" + " " + "what_can whitespace-nowrap p-3 justify-center",
          children: "Why only us?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      className: "jsx-1266108660",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "jsx-1266108660" + " " + " flex flex-row  ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-1266108660" + " " + "side_illustration "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-1266108660" + " " + "flex flex-col",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "jsx-1266108660" + " " + "flex px-4 flex-row gap-2 items-start only_us_card ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "jsx-1266108660" + " " + "flex items-center ",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                src: "/img/chip.png",
                width: 100,
                height: 100,
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 338,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "jsx-1266108660" + " " + "flex flex-col items-start justify-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                className: "jsx-1266108660" + " " + " text_secondary ",
                children: " Crypto First "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 341,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                className: "jsx-1266108660" + " " + "text_primary ",
                children: "and foremost, we are built on web 3.0."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 340,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1266108660",
      children: ".side_illustration.jsx-1266108660{position:absolute;width:1032px;height:842px;left:-867px;top:2429px;background:#C829DD;border-radius:50px;}.only_us_card.jsx-1266108660{height:150px;background:rgba(43,34,159,0.8);border-radius:25px;}.can_do_box.jsx-1266108660{width:570px;height:254px;left:116px;top:1369px;background:linear-gradient( 127.41deg, rgba(218,37,226,0.8) 14.83%, rgba(87,24,243,0.8) 110.24%, rgba(255,245,238,0.8) 110.24% );-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);border-radius:14px;}.description_box.jsx-1266108660{font-family:\"DM Sans\";font-style:normal;font-weight:400;font-size:20px;line-height:150%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#ffffff;}.what_can.jsx-1266108660{width:781px;height:68px;left:329px;top:1204px;font-family:\"Trispace\";font-style:normal;font-weight:700;font-size:64px;line-height:72px;-webkit-letter-spacing:0.13em;-moz-letter-spacing:0.13em;-ms-letter-spacing:0.13em;letter-spacing:0.13em;color:#ffffff;}.container.jsx-1266108660{padding:0 5rem;}.why_us.jsx-1266108660{width:1440px;height:1024px;left:0px;top:1257px;background:url(backgr.jpg);}.placeBet.jsx-1266108660{position:absolute;width:140px;height:42px;left:1182px;top:1847px;}.main.jsx-1266108660{min-height:100vh;padding:4rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.connect_wallet_large.jsx-1266108660{-webkit-flex:display;-ms-flex:display;flex:display;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-item-align:center;item-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:220px;height:50px;left:204px;right:962px;top:400px;background:#c829dd;box-shadow:4px 4px 4px rgba(255,0,127,0.3);border-radius:4px;}.connect_wallet_large_text.jsx-1266108660{height:40px;font-family:\"Trispace\";font-style:normal;font-weight:600;font-size:20px;line-height:150%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;-webkit-letter-spacing:0.06em;-moz-letter-spacing:0.06em;-ms-letter-spacing:0.06em;letter-spacing:0.06em;color:#ffffff;}.description.jsx-1266108660{padding:3rem 0 3rem 0;width:418px;height:72px;left:136px;top:573px;font-family:\"Trispace\";font-style:normal;font-weight:300;font-size:16px;line-height:150%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-letter-spacing:0.06em;-moz-letter-spacing:0.06em;-ms-letter-spacing:0.06em;letter-spacing:0.06em;color:#ffffff;}.code.jsx-1266108660{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-1266108660{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;}.card.jsx-1266108660{margin:1rem;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;max-width:300px;}.card.jsx-1266108660:hover,.card.jsx-1266108660:focus,.card.jsx-1266108660:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1266108660 h2.jsx-1266108660{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1266108660 p.jsx-1266108660{margin:0;font-size:1.25rem;line-height:1.5;}.planet_x_logo.jsx-1266108660{width:246px;height:57px;left:223px;top:70px;font-family:\"Trispace\";font-style:normal;font-weight:800;font-size:50px;line-height:57px;color:#ffffff;text-shadow:2px 2px 6px rgba(200,41,221,0.6);}.connect_wallet_large_icon.jsx-1266108660{position:absolute;width:24px;height:24px;left:204px;top:408px;background:url(\"/img/vector.png\");}.text_primary.jsx-1266108660{font-family:\"Trispace\";font-style:normal;font-weight:500;font-size:16px;line-height:150%;color:#ffffff;}.text_secondary.jsx-1266108660{font-family:\"Trispace\";font-style:normal;font-weight:700;font-size:32px;line-height:36px;-webkit-letter-spacing:0.13em;-moz-letter-spacing:0.13em;-ms-letter-spacing:0.13em;letter-spacing:0.13em;color:#ffffff;}.header_text.jsx-1266108660{width:109px;height:23px;left:892px;top:90px;font-family:\"Trispace\";font-style:normal;font-weight:400;font-size:20px;line-height:23px;-webkit-text-decoration-line:underline;text-decoration-line:underline;color:#ffffff;}.header_text.jsx-1266108660:hover{-webkit-text-decoration-line:none;text-decoration-line:none;}.connect_button.jsx-1266108660{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 16px;gap:8px;width:199px;height:40px;background:#c829dd;border-radius:4px;-webkit-flex:none;-ms-flex:none;flex:none;-webkit-order:0;-ms-flex-order:0;order:0;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}.logo.jsx-1266108660{height:1em;margin-left:0.5rem;}@media (max-width:600px){.grid.jsx-1266108660{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.wallet-buttons.jsx-1266108660{padding-top:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:2rem;}.info.jsx-1266108660{-webkit-flex:display;-ms-flex:display;flex:display;height:57px;left:372px;top:915px;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;font-family:\"Trispace\";font-style:normal;font-weight:800;font-size:24px;line-height:41px;color:#ffffff;text-shadow:2px 2px 6px rgba(255,255,255,0.2);}.info_box.jsx-1266108660{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:4rem;padding-top:2rem;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;width:60%;padding:2rem 2rem 1rem 2rem;height:96px;left:204px;right:204px;top:900px;background:#2b229f;border-radius:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxQcm9qZWN0c1xccGxhbmV0LXgtZnJvbnRlbmQtZGFwcFxccGFnZXNcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErVmtCLEFBR3FCLEFBV0csQUFPRCxBQWtCVSxBQWFWLEFBZ0JHLEFBR0YsQUFTSyxBQU9ELEFBVUosQUFpQkQsQUFnQlUsQUFxQkgsQUFTTixBQVFELEFBY0UsQUFLSSxBQUtULEFBS0csQUFpQk0sQUFRSyxBQVdBLEFBV1gsQUFrQmMsQUFJUCxBQW1CUixBQU1FLEFBTUksQUFPSixBQWlCTSxTQWhJRCxFQTZGQyxBQU1LLENBOVFYLEFBK0JELEFBOERXLEFBc0RSLEFBNkJILEFBK0NBLENBcE9zQixBQXVEcEIsQ0ErR08sQ0FsSHZCLEVBbUJpQixBQWtORixDQXRTVixBQTZFUyxBQTJHSyxBQTJCTixDQS9ETyxHQWhIQSxBQTJGTixDQTRGTSxBQVdBLENBcExQLEFBaUpBLEFBK0NBLENBL05BLEVBa0RGLEFBaUdPLEFBd0JBLEVBc0JKLENBdElBLEFBNk1kLENBMVJLLENBb0ZJLEVBMkNLLENBN0VELEFBNkRPLEFBb0VwQixBQUtBLEFBV1csQUErQ0EsQ0EvTkUsQUFrREEsQ0ErRUssR0FoSEEsQ0FnTEwsQUFPSyxBQVdBLENBeEpKLENBd0ZFLEFBd0JoQixDQTdMSSxBQVlpQixBQXdMSSxBQStDQSxFQWhNQSxBQTRFWixDQXRHVixBQTZDMEIsSUFzQlIsQUErTVAsQ0F2RkYsQ0FyR00sQUFxQ0MsQ0F0RU4sRUE3RVYsQUFtQ2MsQ0E0RkwsQUFzQ1csQUFxRE4sQUFXQSxHQTJCakIsRUE1Q29DLENBeE1wQyxBQStSYSxFQTdOYixBQUtlLEVBakZKLEFBK0hjLEFBbUVMLEFBK0NBLEVBaE1BLEFBNERILEFBcUpRLENBL0c2QyxDQWpIbkQsQ0F1TEEsQUFXQSxFQWhLbkIsQUFvRnFCLEFBa0pULFVBNUxPLEFBNkxDLENBeEdGLEFBK0NBLENBalBQLENBaURPLENBYkgsQ0F1TEMsQUFTUSxBQXVEdEIsQ0E1SmtCLENBa0tJLEVBdUJWLEdBdEdkLEtBbEdlLEFBbUZFLEFBK0NBLEVBaE1BLEFBMEtqQixFQTNOUCxBQXdUMEIsRUF0SlEsQ0FuQ1QsUUFvRUMsQUErQ0EsRUFoTUEsRUFzQ0MsRUFpT0EsRUF6TEgsUUFtQ0ksQ0FtQ0wsQUErQ2lCLEVBbE1ULElBNkJBLEFBaURMLFFBdUUrQixJQXBDSyxJQXNJOUIsQ0F0S1YsTUFoR00sRUFxREksR0E4REEsQ0EwR0osQ0FnQ1YsTUFqTFUsQ0EzRk8sRUE2UTVCLEFBU29CLGFBekpwQixDQXVEQSxDQWlIWSxDQXJGSSxFQXVFRSxPQXJERixBQW9FYyxLQXJGOUIsSUF1RWlCLEtBNU5RLEFBdUt6QixVQXNEbUIsR0F6S0UsQ0F1TFAsS0FwU08sSUE2QkwsR0F3UUgsQ0FiRyxVQTFQaEIsQUF3UWMsQ0FyU2QsQUFhZ0IsR0E0UW1DLEdBaERoQyxFQXZLTCxBQTBFSSxHQWJELEFBdUtMLEVBOU1RLENBMUVwQixNQXFEYyxDQXFPTyxFQTlEWCxDQTdGVixPQXBEd0IsQUFtSlYsQ0F4S0QsUUFxT1EsR0FwT1AsQUF3S0EsTUE2Q2QsTUFwTlksQUF5S1MsSUEyRHJCLEVBalBxQixJQWVBLEdBcUNHLEFBbUJOLE1BZ0hFLFVBdks0QixBQXdEaEQsUUFtSFksbUNBMUtRLE9BMktWLEVBMUpNLFNBaEJoQixLQWlCQSxJQWxDQSxtQkFxRGdCLEVBdUlGLFlBdElkLDJEQXVJQSIsImZpbGUiOiJDOlxcUHJvamVjdHNcXHBsYW5ldC14LWZyb250ZW5kLWRhcHBcXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L2xpbmstcGFzc2hyZWYgKi9cblxuLy8gZGlzYWJsZSBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZm9yIHRoaXMgZmlsZVxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcbmltcG9ydCB7XG4gIHdhaXRUeCxcbiAgV2l0bmVzc1Njb3BlLFxuICBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcixcbn0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlXCI7XG5pbXBvcnQge1xuICBXYWxsZXREaXNjb25uZWN0QnV0dG9uLFxuICBXYWxsZXRNdWx0aUJ1dHRvbixcbn0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aVwiO1xuaW1wb3J0IHsgbmVvbGluZU4zIH0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lXCI7XG5pbXBvcnQgeyB1LCBzYywgd2FsbGV0IH0gZnJvbSBcIkBjaXR5b2Z6aW9uL25lb24tanNcIjtcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IE5lb24gZnJvbSBcIkBjaXR5b2Z6aW9uL25lb24tanNcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbmVvM0RhcGkgZnJvbSBcIm5lbzMtZGFwaVwiO1xuXG5jb25zdCBJbmRleDogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IE5lb0NvbnRyYWN0SGFzaCA9IFwiMHhlZjQwNzNhMGYyYjMwNWEzOGVjNDA1MGU0ZDNkMjhiYzQwZWE2M2Y1XCI7XG4gIGNvbnN0IEJldHRpbmdNYW5hZ2VyQ29udHJhY3RIYXNoID1cbiAgICBcIjB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YlwiO1xuXG4gIGNvbnN0IGJldHRpbmdNYW5hZ2VyQWRkcmVzcyA9IFwiTllLTldXbUFyakhEN3VYRnB1R2VESDZ1Y1lHcHNmMnM2WVwiO1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgcHVibGlzaEludm9rZSA9IGFzeW5jIChcbiAgICBycGNBZGRyZXNzLFxuICAgIG5ldHdvcmtNYWdpYyxcbiAgICBzY3JpcHRIYXNoLFxuICAgIG9wZXJhdGlvbixcbiAgICBhcmdzLFxuICAgIGFjY291bnRcbiAgKSA9PiB7XG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgTmVvbi5leHBlcmltZW50YWwuU21hcnRDb250cmFjdChcbiAgICAgIE5lb24udS5IZXhTdHJpbmcuZnJvbUhleChzY3JpcHRIYXNoKSxcbiAgICAgIHtcbiAgICAgICAgbmV0d29ya01hZ2ljLFxuICAgICAgICBycGNBZGRyZXNzLFxuICAgICAgICBhY2NvdW50LFxuICAgICAgfVxuICAgICk7XG5cbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5pbnZva2Uob3BlcmF0aW9uLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IHsgY29ubmVjdGVkLCBnZXROZXR3b3JrcywgYWRkcmVzcywgaW52b2tlIH0gPSB1c2VXYWxsZXQoKTtcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IFt3YWxsZXROZXR3b3JrLCBzZXRXYWxsZXROZXR3b3JrXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbbmVvbGluZSwgc2V0TmVvTGluZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbmVvbGluZU4zLCBzZXROZW9MaW5lM10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbYmxvY2tIZWlnaHQsIHNldEJsb2NrSGVpZ2h0XSA9IHVzZVN0YXRlKFwiNzgxMTVcIik7XG4gIGNvbnN0IGZldGNoV2FsbGV0TmV0d29yayA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0TmV0d29ya3MoKTtcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICBzZXRXYWxsZXROZXR3b3JrKHJlc3VsdC5kYXRhPy5kZWZhdWx0TmV0d29yayB8fCBudWxsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9LCBbZ2V0TmV0d29ya3NdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGluaXREYXAoKTtcblxuICAgIC8vIGJhbGFuY2VzXG5cbiAgICBpZiAoY29ubmVjdGVkKSB7XG4gICAgICBmZXRjaFdhbGxldE5ldHdvcmsoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCA9PiBcIiwgbmVvbGluZU4zKTtcblxuICAgICAgaWYgKG5lb2xpbmVOMykge1xuICAgICAgICBuZW9saW5lTjMuZ2V0QWNjb3VudCgpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgZm91bmQgY29ubmV0ZWQgPT4gXCIsIGFjY291bnQpO1xuXG4gICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmVvbGluZU4zLmdldFB1YmxpY0tleSgpLnRoZW4oKHB1YmxpY0tleURhdGEpID0+IHtcbiAgICAgICAgICBjb25zdCB7IGFkZHJlc3MsIHB1YmxpY0tleSB9ID0gcHVibGljS2V5RGF0YTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBhZGRyZXNzOiBcIiArIGFkZHJlc3MpO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IHB1YmxpYyBrZXk6IFwiICsgcHVibGljS2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBzY3JwQWRkcmVzcztcbiAgICAgICAgbmVvbGluZU4zXG4gICAgICAgICAgLlNjcmlwdEhhc2hUb0FkZHJlc3Moe1xuICAgICAgICAgICAgc2NyaXB0SGFzaDogXCIweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2JcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gcmVzdWx0O1xuICAgICAgICAgICAgc2NycEFkZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRyZXNzXCIgKyBhZGRyZXNzKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgZGVzY3JpcHRpb24sIGRhdGEgfSA9IGVycm9yO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJOT19QUk9WSURFUlwiOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gcHJvdmlkZXIgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIk1BTEZPUk1FRF9JTlBVVFwiOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGNoZWNrIHlvdXIgaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8gTm90IGFuIGV4cGVjdGVkIGVycm9yIG9iamVjdC4gIEp1c3Qgd3JpdGUgdGhlIGVycm9yIHRvIHRoZSBjb25zb2xlLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHNlbmQgZ2FzIHRva2VuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFdhbGxldE5ldHdvcmsobnVsbCk7XG4gICAgfVxuICB9LCBbY29ubmVjdGVkLCBmZXRjaFdhbGxldE5ldHdvcmtdKTtcblxuICBjb25zdCBwbGFjZUJldCA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBuZW9saW5lTjNcbiAgICAvLyAgIC5zZW5kKHtcbiAgICAvLyAgICAgZnJvbUFkZHJlc3M6IGFkZHJlc3MsXG4gICAgLy8gICAgIHRvQWRkcmVzczogYmV0dGluZ01hbmFnZXJBZGRyZXNzLFxuICAgIC8vICAgICBhc3NldDogXCJORU9cIixcbiAgICAvLyAgICAgYW1vdW50OiBcIjFcIixcbiAgICAvLyAgICAgZmVlOiBcIjAuMDAwMVwiLFxuICAgIC8vICAgICBicm9hZGNhc3RPdmVycmlkZTogZmFsc2UsXG4gICAgLy8gICB9KVxuICAgIC8vICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlNlbmQgdHJhbnNhY3Rpb24gc3VjY2VzcyFcIik7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiVHJhbnNhY3Rpb24gSUQ6IFwiICsgcmVzdWx0LnR4aWQpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlJQQyBub2RlIFVSTDogXCIgKyByZXN1bHQubm9kZVVSTCk7XG4gICAgLy8gICB9KTtcbiAgfTtcblxuICBjb25zdCBpbml0RGFwID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGluaXROM0RhcGkgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIk5FT0xpbmUuTjMuRVZFTlQuUkVBRFlcIiwgKCkgPT4ge1xuICAgICAgICBzZXROZW9MaW5lMyhuZXcgTkVPTGluZU4zLkluaXQoKSk7XG4gICAgICAgIGlmIChuZW9saW5lTjMpIHtcbiAgICAgICAgICByZXNvbHZlKG5lb2xpbmVOMyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KFwiTjMgZEFQSSBtZXRob2QgZmFpbGVkIHRvIGxvYWQuXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGluaXRDb21tb25EYXBpID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJORU9MaW5lLk5FTy5FVkVOVC5SRUFEWVwiLCAoKSA9PiB7XG4gICAgICAgIHNldE5lb0xpbmUobmV3IE5FT0xpbmUuSW5pdCgpKTtcbiAgICAgICAgaWYgKG5lb2xpbmUpIHtcbiAgICAgICAgICByZXNvbHZlKG5lb2xpbmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChcImNvbW1vbiBkQVBJIG1ldGhvZCBmYWlsZWQgdG8gbG9hZC5cIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaW5pdENvbW1vbkRhcGlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgY29tbW9uIGRBUEkgbWV0aG9kIGlzIGxvYWRlZC5cIik7XG4gICAgICAgIHJldHVybiBpbml0TjNEYXBpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgTjMgZEFQSSBtZXRob2QgaXMgbG9hZGVkLlwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL21haW4uY3NzXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgY29udGFpbmVyIG14LWF1dG8gcC0yIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgcHktNiBmbGV4IGdhcC00IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL0xPR08ucG5nXCIgaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGxhbmV0X3hfbG9nbyBcIj5QbGFuZXQgWDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBzcGFjZS14LTYgbWQ6ZmxleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfdGV4dFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dhbWVzXCI+SG9tZXBhZ2U8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX3RleHRcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3J0Zm9saW9cIj5Sb2FkbWFwPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbm5lY3RfYnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRfcHJpbWFyeVwiPkNvbm5lY3QgV2FsbGV0PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBpZD1cIm1lbnUtYnRuXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGhhbWJ1cmdlciBtZDpoaWRkZW4gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnRleHQtd2hpdGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci10b3AgYmctd2hpdGVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItbWlkZGxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJvdHRvbVwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBpZD1cIm1lbnVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleC1jb2wgaXRlbXMtY2VudGVyIGhpZGRlbiBzZWxmLWVuZCBweS04IG10LTEwIHNwYWNlLXktNiBmb250LWJvbGQgYmctd2hpdGUgc206dy1hdXRvIHNtOnNlbGYtY2VudGVyIGxlZnQtNiByaWdodC02IGRyb3Atc2hhZG93LW1kXCJcbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG5cbiAgICAgIDxzZWN0aW9uPjwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGlkPVwiaGVyb1wiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgICBjb250YWluZXIgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTIgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgZ2FwLTIgXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRfc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgQ29taW5nIGZyb20gUExBTkVUIFgsIGJldHRpbmcgdG8gdGhlIG1vb25cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIEJ1aWx0IGZvciB5b3UgZnJvbSB0aGUgc3RhcnQuIFBsYWNlIGJldHMgb24gRS1zcG9ydHMgZ2FtZXNcbiAgICAgICAgICAgICAgICB0b2dldGhlciwgb24gYSBzaW1wbGUgcGxhdGZvcm0uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtcm93IGNvbm5lY3Rfd2FsbGV0X2xhcmdlXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbm5lY3Rfd2FsbGV0X2xhcmdlX3RleHQgXCI+Q29ubmVjdCBXYWxsZXQ8L3A+XG4gICAgICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPXsnL2ltZy92ZWN0b3IucG5nJ30gd2lkdGg9ezEyfSBoZWlnaHQ9ezEyfSAgYWx0PVwiY29ubmVjdFwiLz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtZDp3LTEvMlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvYmFza2V0X2JhbGxfaWxsdXN0cmF0aW9uLnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGluZm9fYm94ICAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93ICAgXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7LyogPEltYWdlIHNyYz17XCIvaW1nL3N0YXIucG5nXCJ9IHdpZHRoPXs2NH0gaGVpZ2h0PXs2NH0gYWx0PVwiXCIgLz4gKi99XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e1wiL2ltZy9sb2dvLnBuZ1wifSB3aWR0aD17NjR9IGhlaWdodD17NjR9IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl9ib3hcIj5cbiAgICAgICAgICAgICAgUExBTkVUIFggaXMgYW4gRS1zcG9ydHMgY3J5cHRvIGJldHRpbmcgcGxhdGZvcm1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTYgdy0xLzJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3aGF0X2NhbiB3aGl0ZXNwYWNlLW5vd3JhcCBwLTNcIj5XaGF0IHlvdSBjYW4gZG8/PC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoeV91cyBmbGV4IGZsZXgtcm93IGdhcC0yIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBjYW5fZG9fYm94IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC0yIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e1wiL2ltZy9zdGFyLnBuZ1wifSB3aWR0aD17MTEyfSBoZWlnaHQ9ezExMn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl9ib3hcIj5CZXQgb24gRS1TcG9ydHMgTWF0Y2hlczwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX2JveFwiPlxuICAgICAgICAgICAgICAgICAgICBHYWluIHdpbm5pbmdzIHRvIGdvIHRvIHRoZSBtb29uXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wgY2FuX2RvX2JveCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtcIi9pbWcvc3Rhci5wbmdcIn0gd2lkdGg9ezExMn0gaGVpZ2h0PXsxMTJ9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIEJlIHBhcnQgb2YgdGhlIHBsYXRmb3JtIGJ5IGdvdmVybmFuY2VcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX2JveCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgTGV0IHlvdXIgcG9ydGZvbGlvIGdyb3cgZXZlbiB3aGVuIHlvdSBhcmUgbm90IGJldHRpbmdcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wgIGNhbl9kb19ib3ggIHAtMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgICBnYXAtMiAgIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcC0yIFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWcvc3Rhci5wbmdcIn1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMTJ9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezExMn1cbiAgICAgICAgICAgICAgICAgIGFsdD1cInNkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX2JveFwiPkJldCBvbiBFLVNwb3J0cyBNYXRjaGVzPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIEdhaW4gd2lubmluZ3MgdG8gZ28gdG8gdGhlIG1vb25cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBwLTYgdy0xLzJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3aGF0X2NhbiB3aGl0ZXNwYWNlLW5vd3JhcCBwLTMganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIFdoeSBvbmx5IHVzP1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtcm93ICBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVfaWxsdXN0cmF0aW9uIFwiPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG5cbiAgICAgICAgICB7LyogT25seSB1cyBjYXJkICAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweC00IGZsZXgtcm93IGdhcC0yIGl0ZW1zLXN0YXJ0IG9ubHlfdXNfY2FyZCBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtcIi9pbWcvY2hpcC5wbmdcIn0gd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dF9zZWNvbmRhcnkgXCI+IENyeXB0byBGaXJzdCA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dF9wcmltYXJ5IFwiPlxuICAgICAgICAgICAgICAgICAgYW5kIGZvcmVtb3N0LCB3ZSBhcmUgYnVpbHQgb24gd2ViIDMuMC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogT25seSB1cyBjYXJkIGVuZCAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAuc2lkZV9pbGx1c3RyYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG53aWR0aDogMTAzMnB4O1xuaGVpZ2h0OiA4NDJweDtcbmxlZnQ6IC04NjdweDtcbnRvcDogMjQyOXB4O1xuXG5iYWNrZ3JvdW5kOiAjQzgyOUREO1xuYm9yZGVyLXJhZGl1czogNTBweDtcbiB9XG4gICAgICAgIC5vbmx5X3VzX2NhcmQge1xuICAgICAgICBcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuXG4gICAgICAgIFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDMsIDM0LCAxNTksIDAuOCk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FuX2RvX2JveCB7XG4gICAgICAgICAgd2lkdGg6IDU3MHB4O1xuICAgICAgICAgIGhlaWdodDogMjU0cHg7XG4gICAgICAgICAgbGVmdDogMTE2cHg7XG4gICAgICAgICAgdG9wOiAxMzY5cHg7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAxMjcuNDFkZWcsXG4gICAgICAgICAgICByZ2JhKDIxOCwgMzcsIDIyNiwgMC44KSAxNC44MyUsXG4gICAgICAgICAgICByZ2JhKDg3LCAyNCwgMjQzLCAwLjgpIDExMC4yNCUsXG4gICAgICAgICAgICByZ2JhKDI1NSwgMjQ1LCAyMzgsIDAuOCkgMTEwLjI0JVxuICAgICAgICAgICk7XG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XG4gICAgICAgICAgLyogTm90ZTogYmFja2Ryb3AtZmlsdGVyIGhhcyBtaW5pbWFsIGJyb3dzZXIgc3VwcG9ydCAqL1xuXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbl9ib3gge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkRNIFNhbnNcIjtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDM2cHggKi9cblxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICAgIC53aGF0X2NhbiB7XG4gICAgICAgICAgd2lkdGg6IDc4MXB4O1xuICAgICAgICAgIGhlaWdodDogNjhweDtcbiAgICAgICAgICBsZWZ0OiAzMjlweDtcbiAgICAgICAgICB0b3A6IDEyMDRweDtcblxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyaXNwYWNlXCI7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA3MnB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjEzZW07XG5cbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDAgNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAud2h5X3VzIHtcbiAgICAgICAgICB3aWR0aDogMTQ0MHB4O1xuICAgICAgICAgIGhlaWdodDogMTAyNHB4O1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICB0b3A6IDEyNTdweDtcblxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChiYWNrZ3IuanBnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGFjZUJldCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgICAgbGVmdDogMTE4MnB4O1xuICAgICAgICAgIHRvcDogMTg0N3B4O1xuICAgICAgICB9XG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBwYWRkaW5nOiA0cmVtIDA7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb25uZWN0X3dhbGxldF9sYXJnZSB7XG4gICAgICAgICAgZmxleDogZGlzcGxheTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGl0ZW0tYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgbGVmdDogMjA0cHg7XG4gICAgICAgICAgcmlnaHQ6IDk2MnB4O1xuICAgICAgICAgIHRvcDogNDAwcHg7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzgyOWRkO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IHJnYmEoMjU1LCAwLCAxMjcsIDAuMyk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbm5lY3Rfd2FsbGV0X2xhcmdlX3RleHQge1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJUcmlzcGFjZVwiO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMzBweCAqL1xuXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAzcmVtIDAgM3JlbSAwO1xuICAgICAgICAgIHdpZHRoOiA0MThweDtcbiAgICAgICAgICBoZWlnaHQ6IDcycHg7XG4gICAgICAgICAgbGVmdDogMTM2cHg7XG4gICAgICAgICAgdG9wOiA1NzNweDtcblxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyaXNwYWNlXCI7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICAgIC8qIG9yIDI0cHggKi9cblxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNmVtO1xuXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuY29kZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkOmhvdmVyLFxuICAgICAgICAuY2FyZDpmb2N1cyxcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBoMiB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG4gICAgICAgIC5wbGFuZXRfeF9sb2dvIHtcbiAgICAgICAgICB3aWR0aDogMjQ2cHg7XG4gICAgICAgICAgaGVpZ2h0OiA1N3B4O1xuICAgICAgICAgIGxlZnQ6IDIyM3B4O1xuICAgICAgICAgIHRvcDogNzBweDtcblxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyaXNwYWNlXCI7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1N3B4O1xuICAgICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcblxuICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDZweCByZ2JhKDIwMCwgNDEsIDIyMSwgMC42KTtcbiAgICAgICAgfVxuICAgICAgICAuY29ubmVjdF93YWxsZXRfbGFyZ2VfaWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICBsZWZ0OiAyMDRweDtcbiAgICAgICAgICB0b3A6IDQwOHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9pbWcvdmVjdG9yLnBuZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dF9wcmltYXJ5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJUcmlzcGFjZVwiO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMjRweCAqL1xuXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dF9zZWNvbmRhcnkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyaXNwYWNlXCI7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjEzZW07XG5cbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXJfdGV4dCB7XG4gICAgICAgICAgd2lkdGg6IDEwOXB4O1xuICAgICAgICAgIGhlaWdodDogMjNweDtcbiAgICAgICAgICBsZWZ0OiA4OTJweDtcbiAgICAgICAgICB0b3A6IDkwcHg7XG5cbiAgICAgICAgICBmb250LWZhbWlseTogXCJUcmlzcGFjZVwiO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcblxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlcl90ZXh0OmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb25uZWN0X2J1dHRvbiB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgIGdhcDogOHB4O1xuXG4gICAgICAgICAgd2lkdGg6IDE5OXB4O1xuICAgICAgICAgIGhlaWdodDogNDBweDtcblxuICAgICAgICAgIGJhY2tncm91bmQ6ICNjODI5ZGQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgICAgICAgLyogSW5zaWRlIGF1dG8gbGF5b3V0ICovXG5cbiAgICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICAgIG9yZGVyOiAwO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgfVxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAud2FsbGV0LWJ1dHRvbnMge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBnYXA6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgZmxleDogZGlzcGxheTtcbiAgICAgICAgICBoZWlnaHQ6IDU3cHg7XG4gICAgICAgICAgbGVmdDogMzcycHg7XG4gICAgICAgICAgdG9wOiA5MTVweDtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiVHJpc3BhY2VcIjtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQxcHg7XG5cbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcblxuICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDZweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5mb19ib3gge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiA0cmVtO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSAxcmVtIDJyZW07XG4gICAgICAgICAgaGVpZ2h0OiA5NnB4O1xuICAgICAgICAgIGxlZnQ6IDIwNHB4O1xuICAgICAgICAgIHJpZ2h0OiAyMDRweDtcbiAgICAgICAgICB0b3A6IDkwMHB4O1xuXG4gICAgICAgICAgYmFja2dyb3VuZDogIzJiMjI5ZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Projects\\\\planet-x-frontend-dapp\\\\pages\\\\index.tsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true);
};

_s(Index, "8sXF+OWGYQWi4QZ3Hyn1tLOnfAk=", false, function () {
  return [_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useWallet];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2U0ZWIzMmFjMjRkYzEzNDhmZDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBLElBQU1RLEtBQWUsR0FBRyxTQUFsQkEsS0FBa0IsR0FBTTtBQUFBOztBQUM1QixNQUFNQyxlQUFlLEdBQUcsNENBQXhCO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQzlCLDRDQURGO0FBR0EsTUFBTUMscUJBQXFCLEdBQUcsb0NBQTlCLENBTDRCLENBTzVCOztBQUNBLE1BQU1DLGFBQWE7QUFBQSxxUkFBRyxpQkFDcEJDLFVBRG9CLEVBRXBCQyxZQUZvQixFQUdwQkMsVUFIb0IsRUFJcEJDLFNBSm9CLEVBS3BCQyxJQUxvQixFQU1wQkMsT0FOb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUWRDLGNBQUFBLFFBUmMsR0FRSCxJQUFJZix1RkFBSixDQUNmQSw4RUFBQSxDQUF5QlcsVUFBekIsQ0FEZSxFQUVmO0FBQ0VELGdCQUFBQSxZQUFZLEVBQVpBLFlBREY7QUFFRUQsZ0JBQUFBLFVBQVUsRUFBVkEsVUFGRjtBQUdFSyxnQkFBQUEsT0FBTyxFQUFQQTtBQUhGLGVBRmUsQ0FSRztBQUFBO0FBQUE7QUFBQSxxQkFtQkhDLFFBQVEsQ0FBQ00sTUFBVCxDQUFnQlQsU0FBaEIsRUFBMkJDLElBQTNCLENBbkJHOztBQUFBO0FBbUJsQlMsY0FBQUEsTUFuQmtCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFxQmxCQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBckJrQjtBQUFBLCtDQXdCYkYsTUF4QmE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBYmQsYUFBYTtBQUFBO0FBQUE7QUFBQSxLQUFuQjs7QUEyQkEsbUJBQW9E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RFI7OztLQW5DaERRO0FBMHBCTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9saW5rLXBhc3NocmVmICovXG5cbi8vIGRpc2FibGUgZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZvciB0aGlzIGZpbGVcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0XCI7XG5pbXBvcnQge1xuICB3YWl0VHgsXG4gIFdpdG5lc3NTY29wZSxcbiAgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IsXG59IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZVwiO1xuaW1wb3J0IHtcbiAgV2FsbGV0RGlzY29ubmVjdEJ1dHRvbixcbiAgV2FsbGV0TXVsdGlCdXR0b24sXG59IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcbmltcG9ydCB7IG5lb2xpbmVOMyB9IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmVvbGluZVwiO1xuaW1wb3J0IHsgdSwgc2MsIHdhbGxldCB9IGZyb20gXCJAY2l0eW9memlvbi9uZW9uLWpzXCI7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBOZW9uIGZyb20gXCJAY2l0eW9memlvbi9uZW9uLWpzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG5lbzNEYXBpIGZyb20gXCJuZW8zLWRhcGlcIjtcblxuY29uc3QgSW5kZXg6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBOZW9Db250cmFjdEhhc2ggPSBcIjB4ZWY0MDczYTBmMmIzMDVhMzhlYzQwNTBlNGQzZDI4YmM0MGVhNjNmNVwiO1xuICBjb25zdCBCZXR0aW5nTWFuYWdlckNvbnRyYWN0SGFzaCA9XG4gICAgXCIweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2JcIjtcblxuICBjb25zdCBiZXR0aW5nTWFuYWdlckFkZHJlc3MgPSBcIk5ZS05XV21BcmpIRDd1WEZwdUdlREg2dWNZR3BzZjJzNllcIjtcblxuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IHB1Ymxpc2hJbnZva2UgPSBhc3luYyAoXG4gICAgcnBjQWRkcmVzcyxcbiAgICBuZXR3b3JrTWFnaWMsXG4gICAgc2NyaXB0SGFzaCxcbiAgICBvcGVyYXRpb24sXG4gICAgYXJncyxcbiAgICBhY2NvdW50XG4gICkgPT4ge1xuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IE5lb24uZXhwZXJpbWVudGFsLlNtYXJ0Q29udHJhY3QoXG4gICAgICBOZW9uLnUuSGV4U3RyaW5nLmZyb21IZXgoc2NyaXB0SGFzaCksXG4gICAgICB7XG4gICAgICAgIG5ldHdvcmtNYWdpYyxcbiAgICAgICAgcnBjQWRkcmVzcyxcbiAgICAgICAgYWNjb3VudCxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgbGV0IHJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuaW52b2tlKG9wZXJhdGlvbiwgYXJncyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCB7IGNvbm5lY3RlZCwgZ2V0TmV0d29ya3MsIGFkZHJlc3MsIGludm9rZSB9ID0gdXNlV2FsbGV0KCk7XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBbd2FsbGV0TmV0d29yaywgc2V0V2FsbGV0TmV0d29ya10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW25lb2xpbmUsIHNldE5lb0xpbmVdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW25lb2xpbmVOMywgc2V0TmVvTGluZTNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2Jsb2NrSGVpZ2h0LCBzZXRCbG9ja0hlaWdodF0gPSB1c2VTdGF0ZShcIjc4MTE1XCIpO1xuICBjb25zdCBmZXRjaFdhbGxldE5ldHdvcmsgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldE5ldHdvcmtzKCk7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgc2V0V2FsbGV0TmV0d29yayhyZXN1bHQuZGF0YT8uZGVmYXVsdE5ldHdvcmsgfHwgbnVsbCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfSwgW2dldE5ldHdvcmtzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbml0RGFwKCk7XG5cbiAgICAvLyBiYWxhbmNlc1xuXG4gICAgaWYgKGNvbm5lY3RlZCkge1xuICAgICAgZmV0Y2hXYWxsZXROZXR3b3JrKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgPT4gXCIsIG5lb2xpbmVOMyk7XG5cbiAgICAgIGlmIChuZW9saW5lTjMpIHtcbiAgICAgICAgbmVvbGluZU4zLmdldEFjY291bnQoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IGZvdW5kIGNvbm5ldGVkID0+IFwiLCBhY2NvdW50KTtcblxuICAgICAgICAgIHNldEFjY291bnQoYWNjb3VudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5lb2xpbmVOMy5nZXRQdWJsaWNLZXkoKS50aGVuKChwdWJsaWNLZXlEYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBhZGRyZXNzLCBwdWJsaWNLZXkgfSA9IHB1YmxpY0tleURhdGE7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgYWRkcmVzczogXCIgKyBhZGRyZXNzKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBwdWJsaWMga2V5OiBcIiArIHB1YmxpY0tleSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgc2NycEFkZHJlc3M7XG4gICAgICAgIG5lb2xpbmVOM1xuICAgICAgICAgIC5TY3JpcHRIYXNoVG9BZGRyZXNzKHtcbiAgICAgICAgICAgIHNjcmlwdEhhc2g6IFwiMHg3YTA2ZTQwY2QwOGMwYTg4NzdjMmQ2ZDBhNDk3NGY3ZGJlOWIyYjdiXCIsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHJlc3VsdDtcbiAgICAgICAgICAgIHNjcnBBZGRyZXNzID0gYWRkcmVzcztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkcmVzc1wiICsgYWRkcmVzcyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHR5cGUsIGRlc2NyaXB0aW9uLCBkYXRhIH0gPSBlcnJvcjtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFwiTk9fUFJPVklERVJcIjpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHByb3ZpZGVyIGF2YWlsYWJsZS5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJNQUxGT1JNRURfSU5QVVRcIjpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBjaGVjayB5b3VyIGlucHV0XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIE5vdCBhbiBleHBlY3RlZCBlcnJvciBvYmplY3QuICBKdXN0IHdyaXRlIHRoZSBlcnJvciB0byB0aGUgY29uc29sZS5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBzZW5kIGdhcyB0b2tlblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRXYWxsZXROZXR3b3JrKG51bGwpO1xuICAgIH1cbiAgfSwgW2Nvbm5lY3RlZCwgZmV0Y2hXYWxsZXROZXR3b3JrXSk7XG5cbiAgY29uc3QgcGxhY2VCZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gbmVvbGluZU4zXG4gICAgLy8gICAuc2VuZCh7XG4gICAgLy8gICAgIGZyb21BZGRyZXNzOiBhZGRyZXNzLFxuICAgIC8vICAgICB0b0FkZHJlc3M6IGJldHRpbmdNYW5hZ2VyQWRkcmVzcyxcbiAgICAvLyAgICAgYXNzZXQ6IFwiTkVPXCIsXG4gICAgLy8gICAgIGFtb3VudDogXCIxXCIsXG4gICAgLy8gICAgIGZlZTogXCIwLjAwMDFcIixcbiAgICAvLyAgICAgYnJvYWRjYXN0T3ZlcnJpZGU6IGZhbHNlLFxuICAgIC8vICAgfSlcbiAgICAvLyAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJTZW5kIHRyYW5zYWN0aW9uIHN1Y2Nlc3MhXCIpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlRyYW5zYWN0aW9uIElEOiBcIiArIHJlc3VsdC50eGlkKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJSUEMgbm9kZSBVUkw6IFwiICsgcmVzdWx0Lm5vZGVVUkwpO1xuICAgIC8vICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdERhcCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBpbml0TjNEYXBpID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJORU9MaW5lLk4zLkVWRU5ULlJFQURZXCIsICgpID0+IHtcbiAgICAgICAgc2V0TmVvTGluZTMobmV3IE5FT0xpbmVOMy5Jbml0KCkpO1xuICAgICAgICBpZiAobmVvbGluZU4zKSB7XG4gICAgICAgICAgcmVzb2x2ZShuZW9saW5lTjMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChcIk4zIGRBUEkgbWV0aG9kIGZhaWxlZCB0byBsb2FkLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbml0Q29tbW9uRGFwaSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiTkVPTGluZS5ORU8uRVZFTlQuUkVBRFlcIiwgKCkgPT4ge1xuICAgICAgICBzZXROZW9MaW5lKG5ldyBORU9MaW5lLkluaXQoKSk7XG4gICAgICAgIGlmIChuZW9saW5lKSB7XG4gICAgICAgICAgcmVzb2x2ZShuZW9saW5lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoXCJjb21tb24gZEFQSSBtZXRob2QgZmFpbGVkIHRvIGxvYWQuXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGluaXRDb21tb25EYXBpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGNvbW1vbiBkQVBJIG1ldGhvZCBpcyBsb2FkZWQuXCIpO1xuICAgICAgICByZXR1cm4gaW5pdE4zRGFwaTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIE4zIGRBUEkgbWV0aG9kIGlzIGxvYWRlZC5cIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9tYWluLmNzc1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbnRhaW5lciBteC1hdXRvIHAtMiBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHB5LTYgZmxleCBnYXAtNCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9MT0dPLnBuZ1wiIGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBsYW5ldF94X2xvZ28gXCI+UGxhbmV0IFg8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgc3BhY2UteC02IG1kOmZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX3RleHRcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9nYW1lc1wiPkhvbWVwYWdlPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl90ZXh0XCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+Um9hZG1hcDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25uZWN0X2J1dHRvblwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0X3ByaW1hcnlcIj5Db25uZWN0IFdhbGxldDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJtZW51LWJ0blwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoYW1idXJnZXIgbWQ6aGlkZGVuIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItdG9wIGJnLXdoaXRlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLW1pZGRsZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3R0b21cIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgaWQ9XCJtZW51XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoaWRkZW4gc2VsZi1lbmQgcHktOCBtdC0xMCBzcGFjZS15LTYgZm9udC1ib2xkIGJnLXdoaXRlIHNtOnctYXV0byBzbTpzZWxmLWNlbnRlciBsZWZ0LTYgcmlnaHQtNiBkcm9wLXNoYWRvdy1tZFwiXG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8c2VjdGlvbj48L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBpZD1cImhlcm9cIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiICAgY29udGFpbmVyIGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0yIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGdhcC0yIFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0X3NlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgIENvbWluZyBmcm9tIFBMQU5FVCBYLCBiZXR0aW5nIHRvIHRoZSBtb29uXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICBCdWlsdCBmb3IgeW91IGZyb20gdGhlIHN0YXJ0LiBQbGFjZSBiZXRzIG9uIEUtc3BvcnRzIGdhbWVzXG4gICAgICAgICAgICAgICAgdG9nZXRoZXIsIG9uIGEgc2ltcGxlIHBsYXRmb3JtLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LXJvdyBjb25uZWN0X3dhbGxldF9sYXJnZVwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb25uZWN0X3dhbGxldF9sYXJnZV90ZXh0IFwiPkNvbm5lY3QgV2FsbGV0PC9wPlxuICAgICAgICAgICAgICB7LyogPEltYWdlIHNyYz17Jy9pbWcvdmVjdG9yLnBuZyd9IHdpZHRoPXsxMn0gaGVpZ2h0PXsxMn0gIGFsdD1cImNvbm5lY3RcIi8+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWQ6dy0xLzJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Jhc2tldF9iYWxsX2lsbHVzdHJhdGlvbi5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpbmZvX2JveCAgIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyAgIFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgey8qIDxJbWFnZSBzcmM9e1wiL2ltZy9zdGFyLnBuZ1wifSB3aWR0aD17NjR9IGhlaWdodD17NjR9IGFsdD1cIlwiIC8+ICovfVxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtcIi9pbWcvbG9nby5wbmdcIn0gd2lkdGg9ezY0fSBoZWlnaHQ9ezY0fSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fYm94XCI+XG4gICAgICAgICAgICAgIFBMQU5FVCBYIGlzIGFuIEUtc3BvcnRzIGNyeXB0byBiZXR0aW5nIHBsYXRmb3JtXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcC02IHctMS8yXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2hhdF9jYW4gd2hpdGVzcGFjZS1ub3dyYXAgcC0zXCI+V2hhdCB5b3UgY2FuIGRvPzwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aHlfdXMgZmxleCBmbGV4LXJvdyBnYXAtMiBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiICBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wgY2FuX2RvX2JveCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC0yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtcIi9pbWcvc3Rhci5wbmdcIn0gd2lkdGg9ezExMn0gaGVpZ2h0PXsxMTJ9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25fYm94XCI+QmV0IG9uIEUtU3BvcnRzIE1hdGNoZXM8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl9ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgR2FpbiB3aW5uaW5ncyB0byBnbyB0byB0aGUgbW9vblxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGNhbl9kb19ib3gganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTIganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17XCIvaW1nL3N0YXIucG5nXCJ9IHdpZHRoPXsxMTJ9IGhlaWdodD17MTEyfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX2JveFwiPlxuICAgICAgICAgICAgICAgICAgICBCZSBwYXJ0IG9mIHRoZSBwbGF0Zm9ybSBieSBnb3Zlcm5hbmNlXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl9ib3ggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIExldCB5b3VyIHBvcnRmb2xpbyBncm93IGV2ZW4gd2hlbiB5b3UgYXJlIG5vdCBiZXR0aW5nXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtZW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sICBjYW5fZG9fYm94ICBwLTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93ICAgZ2FwLTIgICBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMiBcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1nL3N0YXIucG5nXCJ9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTEyfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMTJ9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJzZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl9ib3hcIj5CZXQgb24gRS1TcG9ydHMgTWF0Y2hlczwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX2JveFwiPlxuICAgICAgICAgICAgICAgICAgICBHYWluIHdpbm5pbmdzIHRvIGdvIHRvIHRoZSBtb29uXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC02IHctMS8yXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2hhdF9jYW4gd2hpdGVzcGFjZS1ub3dyYXAgcC0zIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICBXaHkgb25seSB1cz9cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LXJvdyAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlX2lsbHVzdHJhdGlvbiBcIj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuXG4gICAgICAgICAgey8qIE9ubHkgdXMgY2FyZCAgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHgtNCBmbGV4LXJvdyBnYXAtMiBpdGVtcy1zdGFydCBvbmx5X3VzX2NhcmQgXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17XCIvaW1nL2NoaXAucG5nXCJ9IHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHRfc2Vjb25kYXJ5IFwiPiBDcnlwdG8gRmlyc3QgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRfcHJpbWFyeSBcIj5cbiAgICAgICAgICAgICAgICAgIGFuZCBmb3JlbW9zdCwgd2UgYXJlIGJ1aWx0IG9uIHdlYiAzLjAuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIE9ubHkgdXMgY2FyZCBlbmQgKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gLnNpZGVfaWxsdXN0cmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xud2lkdGg6IDEwMzJweDtcbmhlaWdodDogODQycHg7XG5sZWZ0OiAtODY3cHg7XG50b3A6IDI0MjlweDtcblxuYmFja2dyb3VuZDogI0M4MjlERDtcbmJvcmRlci1yYWRpdXM6IDUwcHg7XG4gfVxuICAgICAgICAub25seV91c19jYXJkIHtcbiAgICAgICAgXG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcblxuICAgICAgICBcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDQzLCAzNCwgMTU5LCAwLjgpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbl9kb19ib3gge1xuICAgICAgICAgIHdpZHRoOiA1NzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1NHB4O1xuICAgICAgICAgIGxlZnQ6IDExNnB4O1xuICAgICAgICAgIHRvcDogMTM2OXB4O1xuXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgMTI3LjQxZGVnLFxuICAgICAgICAgICAgcmdiYSgyMTgsIDM3LCAyMjYsIDAuOCkgMTQuODMlLFxuICAgICAgICAgICAgcmdiYSg4NywgMjQsIDI0MywgMC44KSAxMTAuMjQlLFxuICAgICAgICAgICAgcmdiYSgyNTUsIDI0NSwgMjM4LCAwLjgpIDExMC4yNCVcbiAgICAgICAgICApO1xuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgICAgICAgIC8qIE5vdGU6IGJhY2tkcm9wLWZpbHRlciBoYXMgbWluaW1hbCBicm93c2VyIHN1cHBvcnQgKi9cblxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb25fYm94IHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJETSBTYW5zXCI7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAzNnB4ICovXG5cbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgICAud2hhdF9jYW4ge1xuICAgICAgICAgIHdpZHRoOiA3ODFweDtcbiAgICAgICAgICBoZWlnaHQ6IDY4cHg7XG4gICAgICAgICAgbGVmdDogMzI5cHg7XG4gICAgICAgICAgdG9wOiAxMjA0cHg7XG5cbiAgICAgICAgICBmb250LWZhbWlseTogXCJUcmlzcGFjZVwiO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNzJweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xM2VtO1xuXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLndoeV91cyB7XG4gICAgICAgICAgd2lkdGg6IDE0NDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMjRweDtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgdG9wOiAxMjU3cHg7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoYmFja2dyLmpwZyk7XG4gICAgICAgIH1cblxuICAgICAgICAucGxhY2VCZXQge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICAgIGxlZnQ6IDExODJweDtcbiAgICAgICAgICB0b3A6IDE4NDdweDtcbiAgICAgICAgfVxuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogNHJlbSAwO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29ubmVjdF93YWxsZXRfbGFyZ2Uge1xuICAgICAgICAgIGZsZXg6IGRpc3BsYXk7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBpdGVtLWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGxlZnQ6IDIwNHB4O1xuICAgICAgICAgIHJpZ2h0OiA5NjJweDtcbiAgICAgICAgICB0b3A6IDQwMHB4O1xuXG4gICAgICAgICAgYmFja2dyb3VuZDogI2M4MjlkZDtcbiAgICAgICAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDI1NSwgMCwgMTI3LCAwLjMpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb25uZWN0X3dhbGxldF9sYXJnZV90ZXh0IHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiVHJpc3BhY2VcIjtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDMwcHggKi9cblxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcblxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogM3JlbSAwIDNyZW0gMDtcbiAgICAgICAgICB3aWR0aDogNDE4cHg7XG4gICAgICAgICAgaGVpZ2h0OiA3MnB4O1xuICAgICAgICAgIGxlZnQ6IDEzNnB4O1xuICAgICAgICAgIHRvcDogNTczcHg7XG5cbiAgICAgICAgICBmb250LWZhbWlseTogXCJUcmlzcGFjZVwiO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICAgICAgICAvKiBvciAyNHB4ICovXG5cbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcblxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvZGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZDpob3ZlcixcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgaDIge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuICAgICAgICAucGxhbmV0X3hfbG9nbyB7XG4gICAgICAgICAgd2lkdGg6IDI0NnB4O1xuICAgICAgICAgIGhlaWdodDogNTdweDtcbiAgICAgICAgICBsZWZ0OiAyMjNweDtcbiAgICAgICAgICB0b3A6IDcwcHg7XG5cbiAgICAgICAgICBmb250LWZhbWlseTogXCJUcmlzcGFjZVwiO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTdweDtcbiAgICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG5cbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggcmdiYSgyMDAsIDQxLCAyMjEsIDAuNik7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbm5lY3Rfd2FsbGV0X2xhcmdlX2ljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgbGVmdDogMjA0cHg7XG4gICAgICAgICAgdG9wOiA0MDhweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaW1nL3ZlY3Rvci5wbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHRfcHJpbWFyeSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiVHJpc3BhY2VcIjtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDI0cHggKi9cblxuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHRfc2Vjb25kYXJ5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJUcmlzcGFjZVwiO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xM2VtO1xuXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyX3RleHQge1xuICAgICAgICAgIHdpZHRoOiAxMDlweDtcbiAgICAgICAgICBoZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgbGVmdDogODkycHg7XG4gICAgICAgICAgdG9wOiA5MHB4O1xuXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiVHJpc3BhY2VcIjtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG5cbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXJfdGV4dDpob3ZlciB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29ubmVjdF9idXR0b24ge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICBnYXA6IDhweDtcblxuICAgICAgICAgIHdpZHRoOiAxOTlweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzgyOWRkO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICAgICAgIC8qIEluc2lkZSBhdXRvIGxheW91dCAqL1xuXG4gICAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgICBvcmRlcjogMDtcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLndhbGxldC1idXR0b25zIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZ2FwOiAycmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIGZsZXg6IGRpc3BsYXk7XG4gICAgICAgICAgaGVpZ2h0OiA1N3B4O1xuICAgICAgICAgIGxlZnQ6IDM3MnB4O1xuICAgICAgICAgIHRvcDogOTE1cHg7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyaXNwYWNlXCI7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MXB4O1xuXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG5cbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm9fYm94IHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogNHJlbTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBwYWRkaW5nOiAycmVtIDJyZW0gMXJlbSAycmVtO1xuICAgICAgICAgIGhlaWdodDogOTZweDtcbiAgICAgICAgICBsZWZ0OiAyMDRweDtcbiAgICAgICAgICByaWdodDogMjA0cHg7XG4gICAgICAgICAgdG9wOiA5MDBweDtcblxuICAgICAgICAgIGJhY2tncm91bmQ6ICMyYjIyOWY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsidXNlV2FsbGV0IiwiSGVhZCIsIkxpbmsiLCJJbWFnZSIsIk5lb24iLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwiSW5kZXgiLCJOZW9Db250cmFjdEhhc2giLCJCZXR0aW5nTWFuYWdlckNvbnRyYWN0SGFzaCIsImJldHRpbmdNYW5hZ2VyQWRkcmVzcyIsInB1Ymxpc2hJbnZva2UiLCJycGNBZGRyZXNzIiwibmV0d29ya01hZ2ljIiwic2NyaXB0SGFzaCIsIm9wZXJhdGlvbiIsImFyZ3MiLCJhY2NvdW50IiwiY29udHJhY3QiLCJleHBlcmltZW50YWwiLCJTbWFydENvbnRyYWN0IiwidSIsIkhleFN0cmluZyIsImZyb21IZXgiLCJpbnZva2UiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGVkIiwiZ2V0TmV0d29ya3MiLCJhZGRyZXNzIiwic2V0QWNjb3VudCIsIndhbGxldE5ldHdvcmsiLCJzZXRXYWxsZXROZXR3b3JrIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm5lb2xpbmUiLCJzZXROZW9MaW5lIiwibmVvbGluZU4zIiwic2V0TmVvTGluZTMiLCJibG9ja0hlaWdodCIsInNldEJsb2NrSGVpZ2h0IiwiZmV0Y2hXYWxsZXROZXR3b3JrIiwic3RhdHVzIiwiZGF0YSIsImRlZmF1bHROZXR3b3JrIiwiZXJyb3IiLCJpbml0RGFwIiwiZ2V0QWNjb3VudCIsInRoZW4iLCJnZXRQdWJsaWNLZXkiLCJwdWJsaWNLZXlEYXRhIiwicHVibGljS2V5Iiwic2NycEFkZHJlc3MiLCJTY3JpcHRIYXNoVG9BZGRyZXNzIiwidHlwZSIsImRlc2NyaXB0aW9uIiwicGxhY2VCZXQiLCJpbml0TjNEYXBpIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiTkVPTGluZU4zIiwiSW5pdCIsImluaXRDb21tb25EYXBpIiwiTkVPTGluZSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=