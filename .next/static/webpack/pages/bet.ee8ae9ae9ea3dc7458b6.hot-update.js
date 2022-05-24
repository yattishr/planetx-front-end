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
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js");
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
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

  var _useWallet = (0,_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_10__.useWallet)(),
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

                  alert('Bet Placed successfully!');
                  console.log("Transaction ID: " + result.txid);
                  console.log("RPC node URL: " + result.nodeURL);
                })["catch"](function (err) {
                  alert("You do no have enough AstroToken to launch!");
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "/main.css",
        className: "jsx-3186372463"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("nav", {
      className: "jsx-3186372463" + " " + "relative container mx-auto p-2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "jsx-3186372463" + " " + "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "jsx-3186372463" + " " + "pt-2 py-6 flex flex-row justify-between items-center ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
              src: "img/LOGO.png",
              height: "100",
              width: "100",
              alt: "",
              className: "jsx-3186372463"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {
              className: "jsx-3186372463" + " " + "lg:text-5xl md:text-5xl text-white font-bold  ",
              children: "Planet X"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "jsx-3186372463" + " " + "hidden space-x-6 md:flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "jsx-3186372463" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/games",
              children: "Games"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
            className: "jsx-3186372463" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/portfolio",
              children: "Portfolio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
          id: "menu-btn",
          className: "jsx-3186372463" + " " + "block hamburger md:hidden focus:outline-none focus:text-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
            className: "jsx-3186372463" + " " + "hamburger-top bg-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
            className: "jsx-3186372463" + " " + "hamburger-middle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
            className: "jsx-3186372463" + " " + "hamburger-bottom"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "jsx-3186372463" + " " + "md:hidden",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          id: "menu",
          className: "jsx-3186372463" + " " + "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
      className: "jsx-3186372463"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("section", {
      id: "hero",
      className: "jsx-3186372463" + " " + "p-6",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "jsx-3186372463" + " " + "betxlogo "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "jsx-3186372463" + " " + "flex flex-col p-2 BetArea  box-border  ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "jsx-3186372463" + " " + "flex flex-row p-6 justify-around justify-self-start ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
            src: "/img/betGO.png",
            width: "300",
            height: "200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
            src: "/img/right.png",
            width: "300px",
            height: "350px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: "jsx-3186372463" + " " + " flex flex-col items-center justify-between betBox ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
            className: "jsx-3186372463" + " " + "text-white text-2xl font-bold ",
            children: "Place Bet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
            onClick: placeBet,
            className: "jsx-3186372463" + " " + "betButton justify-self-auto text-white text-2xl font-bold ",
            children: "Bet X"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_rentfuse_labs_neo_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__.WalletMultiButton, {
            style: {
              backgroundColor: "#DC2984"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "jsx-3186372463" + " " + "timer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3186372463",
      children: ".container.jsx-3186372463{padding:0 2rem;}.gameDetailsCard.jsx-3186372463{box-sizing:border-box;width:200px;height:300px;left:144px;top:528px;background:rgba(137,132,202,0.35);border-radius:20px;}.BetArea.jsx-3186372463{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:end;-ms-flex-pack:end;justify-content:end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0;margin:0;position:relative;box-sizing:border-box;height:700px;top:340px;background:rgba(21,23,74,0.7);border:2px solid #c829dd;box-shadow:8px 8px 8px rgba(220,41,78,0.21);border-radius:50px;}.timer.jsx-3186372463{position:absolute;width:107px;height:119px;left:1950px;top:435px;background:url(/img/timer.png) no-repeat;}.betxlogo.jsx-3186372463{position:absolute;width:243.15px;height:68.24px;left:700px;top:409.08px;background:url(/img/betxlogo.png) no-repeat;background-size:contain;}.betBox.jsx-3186372463{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;box-sizing:border-box;width:413px;height:209px;background:rgba(196,196,196,0.3);border-radius:30px;}.betButton.jsx-3186372463{position:relative;width:283px;height:85px;background:#dc2984;box-shadow:6px 6px 8px rgba(200,41,221,0.4);border-radius:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ2xhc2hcXHNhbXBsZS1hcHBcXG5lby1ibG9ja2NoYWluLWJldHhcXHBhZ2VzXFxiZXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZRa0IsQUFHMEIsQUFHTyxBQWFWLEFBb0JNLEFBUUEsQUFZTCxBQWNLLGVBckVwQixHQW9DYyxBQVFHLEFBMEJILElBakVBLFFBZ0NDLEFBa0NELEdBMUJHLENBdkNGLFFBbUVNLENBbkNQLElBL0JELENBdUNBLE9BUEQsR0EvQkEsQ0F1Q0csRUEyQmtDLElBbENOLEdBOUJKLEdBTXhCLENBaUMrQixFQU8zQixpQkFDTSxXQTdDSixHQStEQSxDQWxDckIsVUFVMEIsS0F0QzFCLEdBK0RBLGdCQXhCQSxLQW5Dc0IsNkNBeUNELDBDQXZDQSxtREF3Q0Qsa0JBQ0ksc0JBRVYsRUExQ1UsVUEyQ1QsYUFFdUIsaUNBQ2pCLG1CQUNyQixHQTlDWSxVQUNELFNBRVMsa0JBQ0ksc0JBQ1QsYUFDSCxVQUN1Qiw4QkFDUix5QkFDc0IsNENBQzVCLG1CQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXENsYXNoXFxzYW1wbGUtYXBwXFxuZW8tYmxvY2tjaGFpbi1iZXR4XFxwYWdlc1xcYmV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1ub2NoZWNrXHJcblxyXG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgd2FpdFR4LFxyXG4gIFdpdG5lc3NTY29wZSxcclxuICBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcixcclxufSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBXYWxsZXREaXNjb25uZWN0QnV0dG9uLFxyXG4gIFdhbGxldE11bHRpQnV0dG9uLFxyXG59IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcclxuaW1wb3J0IHsgbmVvbGluZU4zIH0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lXCI7XHJcbmltcG9ydCB7IHUsIHNjLCB3YWxsZXQgfSBmcm9tIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE5lb24gZnJvbSBcIkBjaXR5b2Z6aW9uL25lb24tanNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBuZW8zRGFwaSBmcm9tIFwibmVvMy1kYXBpXCI7XHJcblxyXG5jb25zdCBJbmRleDogQmV0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IE5lb0NvbnRyYWN0SGFzaCA9IFwiMHhlZjQwNzNhMGYyYjMwNWEzOGVjNDA1MGU0ZDNkMjhiYzQwZWE2M2Y1XCI7XHJcbiAgY29uc3QgQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2ggPVxyXG4gICAgXCIweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2JcIjtcclxuXHJcbiAgY29uc3QgdHJlc3VhcnkgPSBcIk5ZS05XV21BcmpIRDd1WEZwdUdlREg2dWNZR3BzZjJzNllcIjtcclxuXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGNvbnN0IHB1Ymxpc2hJbnZva2UgPSBhc3luYyAoXHJcbiAgICBycGNBZGRyZXNzLFxyXG4gICAgbmV0d29ya01hZ2ljLFxyXG4gICAgc2NyaXB0SGFzaCxcclxuICAgIG9wZXJhdGlvbixcclxuICAgIGFyZ3MsXHJcbiAgICBhY2NvdW50XHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBOZW9uLmV4cGVyaW1lbnRhbC5TbWFydENvbnRyYWN0KFxyXG4gICAgICBOZW9uLnUuSGV4U3RyaW5nLmZyb21IZXgoc2NyaXB0SGFzaCksXHJcbiAgICAgIHtcclxuICAgICAgICBuZXR3b3JrTWFnaWMsXHJcbiAgICAgICAgcnBjQWRkcmVzcyxcclxuICAgICAgICBhY2NvdW50LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGxldCByZXN1bHQ7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5pbnZva2Uob3BlcmF0aW9uLCBhcmdzKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9O1xyXG5cclxuICBjb25zdCB7IGNvbm5lY3RlZCwgZ2V0TmV0d29ya3MsIGFkZHJlc3MsIGludm9rZSB9ID0gdXNlV2FsbGV0KCk7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IFt3YWxsZXROZXR3b3JrLCBzZXRXYWxsZXROZXR3b3JrXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW25lb2xpbmUsIHNldE5lb0xpbmVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbYmxvY2tIZWlnaHQsIHNldEJsb2NrSGVpZ2h0XSA9IHVzZVN0YXRlKFwiNzgxMTVcIik7XHJcbiAgY29uc3QgW25lb2xpbmVOMywgc2V0TmVvTGluZTNdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hXYWxsZXROZXR3b3JrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0TmV0d29ya3MoKTtcclxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgc2V0V2FsbGV0TmV0d29yayhyZXN1bHQuZGF0YT8uZGVmYXVsdE5ldHdvcmsgfHwgbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtnZXROZXR3b3Jrc10pO1xyXG4gIC8vIGJhbGFuY2VzXHJcblxyXG4gIGNvbnN0IHBsYWNlQmV0ID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGlmIChjb25uZWN0ZWQpIHtcclxuICAgICAgbmVvbGluZU4zXHJcbiAgICAgICAgLnNlbmQoe1xyXG4gICAgICAgICAgZnJvbUFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgICAgICB0b0FkZHJlc3M6IHRyZXN1YXJ5LFxyXG4gICAgICAgICAgYXNzZXQ6IFwiR0FTXCIsXHJcbiAgICAgICAgICBhbW91bnQ6IFwiMVwiLFxyXG4gICAgICAgICAgZmVlOiBcIjAuMDAwMVwiLFxyXG4gICAgICAgICAgYnJvYWRjYXN0T3ZlcnJpZGU6IGZhbHNlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTZW5kIHRyYW5zYWN0aW9uIHN1Y2Nlc3MhXCIpO1xyXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXHJcbiAgICAgICAgICBhbGVydCgnQmV0IFBsYWNlZCBzdWNjZXNzZnVsbHkhJylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHJhbnNhY3Rpb24gSUQ6IFwiICsgcmVzdWx0LnR4aWQpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJSUEMgbm9kZSBVUkw6IFwiICsgcmVzdWx0Lm5vZGVVUkwpO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuXHJcbiAgICAgICAgICBhbGVydChcIllvdSBkbyBubyBoYXZlIGVub3VnaCBBc3Ryb1Rva2VuIHRvIGxhdW5jaCFcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXREYXAoKTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xyXG5cclxuICAgIC8vIGJhbGFuY2VzXHJcblxyXG4gICAgaWYgKGNvbm5lY3RlZCkge1xyXG4gICAgICBmZXRjaFdhbGxldE5ldHdvcmsoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50ID0+IFwiLCBuZW9saW5lTjMpO1xyXG5cclxuICAgICAgaWYgKG5lb2xpbmVOMykge1xyXG4gICAgICAgIG5lb2xpbmVOMy5nZXRBY2NvdW50KCkudGhlbigoYWNjb3VudCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IGZvdW5kIGNvbm5ldGVkID0+IFwiLCBhY2NvdW50KTtcclxuXHJcbiAgICAgICAgICBzZXRBY2NvdW50KGFjY291bnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBuZW9saW5lTjMuZ2V0UHVibGljS2V5KCkudGhlbigocHVibGljS2V5RGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBhZGRyZXNzLCBwdWJsaWNLZXkgfSA9IHB1YmxpY0tleURhdGE7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IGFkZHJlc3M6IFwiICsgYWRkcmVzcyk7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IHB1YmxpYyBrZXk6IFwiICsgcHVibGljS2V5KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgc2NycEFkZHJlc3M7XHJcbiAgICAgICAgbmVvbGluZU4zXHJcbiAgICAgICAgICAuU2NyaXB0SGFzaFRvQWRkcmVzcyh7XHJcbiAgICAgICAgICAgIHNjcmlwdEhhc2g6IFwiMHg3YTA2ZTQwY2QwOGMwYTg4NzdjMmQ2ZDBhNDk3NGY3ZGJlOWIyYjdiXCIsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgc2NycEFkZHJlc3MgPSBhZGRyZXNzO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZHJlc3NcIiArIGFkZHJlc3MpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyB0eXBlLCBkZXNjcmlwdGlvbiwgZGF0YSB9ID0gZXJyb3I7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJOT19QUk9WSURFUlwiOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBwcm92aWRlciBhdmFpbGFibGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBcIk1BTEZPUk1FRF9JTlBVVFwiOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgY2hlY2sgeW91ciBpbnB1dFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgYW4gZXhwZWN0ZWQgZXJyb3Igb2JqZWN0LiAgSnVzdCB3cml0ZSB0aGUgZXJyb3IgdG8gdGhlIGNvbnNvbGUuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc2VuZCBnYXMgdG9rZW5cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0V2FsbGV0TmV0d29yayhudWxsKTtcclxuICAgIH1cclxuICB9LCBbY29ubmVjdGVkLCBmZXRjaFdhbGxldE5ldHdvcmtdKTtcclxuXHJcbiAgY29uc3QgaW5pdERhcCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGluaXROM0RhcGkgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiTkVPTGluZS5OMy5FVkVOVC5SRUFEWVwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0TmVvTGluZTMobmV3IE5FT0xpbmVOMy5Jbml0KCkpO1xyXG4gICAgICAgIGlmIChuZW9saW5lTjMpIHtcclxuICAgICAgICAgIHJlc29sdmUobmVvbGluZU4zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KFwiTjMgZEFQSSBtZXRob2QgZmFpbGVkIHRvIGxvYWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBpbml0Q29tbW9uRGFwaSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJORU9MaW5lLk5FTy5FVkVOVC5SRUFEWVwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0TmVvTGluZShuZXcgTkVPTGluZS5Jbml0KCkpO1xyXG4gICAgICAgIGlmIChuZW9saW5lKSB7XHJcbiAgICAgICAgICByZXNvbHZlKG5lb2xpbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QoXCJjb21tb24gZEFQSSBtZXRob2QgZmFpbGVkIHRvIGxvYWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbml0Q29tbW9uRGFwaVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgY29tbW9uIGRBUEkgbWV0aG9kIGlzIGxvYWRlZC5cIik7XHJcbiAgICAgICAgcmV0dXJuIGluaXROM0RhcGk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBOMyBkQVBJIG1ldGhvZCBpcyBsb2FkZWQuXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9tYWluLmNzc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjb250YWluZXIgbXgtYXV0byBwLTIgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBweS02IGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9MT0dPLnBuZ1wiIGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibGc6dGV4dC01eGwgbWQ6dGV4dC01eGwgdGV4dC13aGl0ZSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgUGxhbmV0IFhcclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzcGFjZS14LTYgbWQ6ZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZGFya0dyYXlpc2hCbHVlIHRleHQtd2hpdGUgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9nYW1lc1wiPkdhbWVzPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWRhcmtHcmF5aXNoQmx1ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+UG9ydGZvbGlvPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgaWQ9XCJtZW51LWJ0blwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGhhbWJ1cmdlciBtZDpoaWRkZW4gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItdG9wIGJnLXdoaXRlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItbWlkZGxlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm90dG9tXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPVwibWVudVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoaWRkZW4gc2VsZi1lbmQgcHktOCBtdC0xMCBzcGFjZS15LTYgZm9udC1ib2xkIGJnLXdoaXRlIHNtOnctYXV0byBzbTpzZWxmLWNlbnRlciBsZWZ0LTYgcmlnaHQtNiBkcm9wLXNoYWRvdy1tZFwiXHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPHNlY3Rpb24+PC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cImhlcm9cIiBjbGFzc05hbWU9XCJwLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJldHhsb2dvIFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTIgQmV0QXJlYSAgYm94LWJvcmRlciAgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcC02IGp1c3RpZnktYXJvdW5kIGp1c3RpZnktc2VsZi1zdGFydCBcIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYmV0R08ucG5nXCIgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIyMDBcIiAvPlxyXG5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvcmlnaHQucG5nXCIgd2lkdGg9XCIzMDBweFwiIGhlaWdodD1cIjM1MHB4XCIgLz5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZXRCb3ggXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgZm9udC1ib2xkIFwiPlBsYWNlIEJldDwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwbGFjZUJldH0gY2xhc3NOYW1lPVwiYmV0QnV0dG9uIGp1c3RpZnktc2VsZi1hdXRvIHRleHQtd2hpdGUgdGV4dC0yeGwgZm9udC1ib2xkIFwiPlxyXG4gICAgICAgICAgICAgIEJldCBYXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPFdhbGxldE11bHRpQnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjREMyOTg0XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZXJcIj48L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2FtZURldGFpbHNDYXJkIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgIGxlZnQ6IDE0NHB4O1xyXG4gICAgICAgICAgdG9wOiA1MjhweDtcclxuXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzNywgMTMyLCAyMDIsIDAuMzUpO1xyXG5cclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5CZXRBcmVhIHtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuXHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICAgICAgICB0b3A6IDM0MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMSwgMjMsIDc0LCAwLjcpO1xyXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2M4MjlkZDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDhweCA4cHggOHB4IHJnYmEoMjIwLCA0MSwgNzgsIDAuMjEpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aW1lciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogMTA3cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDExOXB4O1xyXG4gICAgICAgICAgbGVmdDogMTk1MHB4O1xyXG4gICAgICAgICAgdG9wOiA0MzVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvaW1nL3RpbWVyLnBuZykgbm8tcmVwZWF0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmV0eGxvZ28ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDI0My4xNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA2OC4yNHB4O1xyXG4gICAgICAgICAgbGVmdDogNzAwcHg7XHJcbiAgICAgICAgICB0b3A6IDQwOS4wOHB4O1xyXG5cclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvaW1nL2JldHhsb2dvLnBuZykgbm8tcmVwZWF0O1xyXG5cclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iZXRCb3gge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgICB3aWR0aDogNDEzcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwOXB4O1xyXG5cclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC4zKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iZXRCdXR0b24ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2lkdGg6IDI4M3B4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA4NXB4O1xyXG5cclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNkYzI5ODQ7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiA2cHggNnB4IDhweCByZ2JhKDIwMCwgNDEsIDIyMSwgMC40KTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Clash\\\\sample-app\\\\neo-blockchain-betx\\\\pages\\\\bet.tsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true);
};

_s(Index, "TxA56B9sYb25QnSimxS3yxg65vw=", false, function () {
  return [_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_10__.useWallet];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmV0LmVlOGFlOWFlOWVhM2RjNzQ1OGI2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBTUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsSUFBTVMsS0FBVSxHQUFHLFNBQWJBLEtBQWEsR0FBTTtBQUFBOztBQUN2QixNQUFNQyxlQUFlLEdBQUcsNENBQXhCO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQzlCLDRDQURGO0FBR0EsTUFBTUMsUUFBUSxHQUFHLG9DQUFqQixDQUx1QixDQU92Qjs7QUFDQSxNQUFNQyxhQUFhO0FBQUEsMlNBQUcsaUJBQ3BCQyxVQURvQixFQUVwQkMsWUFGb0IsRUFHcEJDLFVBSG9CLEVBSXBCQyxTQUpvQixFQUtwQkMsSUFMb0IsRUFNcEJDLE9BTm9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFkQyxjQUFBQSxRQVJjLEdBUUgsSUFBSWYsdUZBQUosQ0FDZkEsOEVBQUEsQ0FBeUJXLFVBQXpCLENBRGUsRUFFZjtBQUNFRCxnQkFBQUEsWUFBWSxFQUFaQSxZQURGO0FBRUVELGdCQUFBQSxVQUFVLEVBQVZBLFVBRkY7QUFHRUssZ0JBQUFBLE9BQU8sRUFBUEE7QUFIRixlQUZlLENBUkc7QUFBQTtBQUFBO0FBQUEscUJBbUJIQyxRQUFRLENBQUNNLE1BQVQsQ0FBZ0JULFNBQWhCLEVBQTJCQyxJQUEzQixDQW5CRzs7QUFBQTtBQW1CbEJTLGNBQUFBLE1BbkJrQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBcUJsQkMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSOztBQXJCa0I7QUFBQSwrQ0F3QmJGLE1BeEJhOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWJkLGFBQWE7QUFBQTtBQUFBO0FBQUEsS0FBbkI7O0FBMkJBLG1CQUFvRGIsbUZBQVMsRUFB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QUFBLDRDQUFlLHlDQUFmO0FBQUEsZ0NBQ0U7QUFBQSw4Q0FBZSxzREFBZjtBQUFBLGtDQUNFLDhEQUFDLG1EQUFEO0FBQU8sZUFBRyxFQUFDLGdCQUFYO0FBQTRCLGlCQUFLLEVBQUMsS0FBbEM7QUFBd0Msa0JBQU0sRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBR0UsOERBQUMsbURBQUQ7QUFBTyxlQUFHLEVBQUMsZ0JBQVg7QUFBNEIsaUJBQUssRUFBQyxPQUFsQztBQUEwQyxrQkFBTSxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBQSw4Q0FBZSxxREFBZjtBQUFBLGtDQUNFO0FBQUEsZ0RBQWEsZ0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFRLG1CQUFPLEVBQUViLFFBQWpCO0FBQUEsZ0RBQXFDLDREQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQU1FLDhEQUFDLHlGQUFEO0FBQ0UsaUJBQUssRUFBRTtBQUNMZ0MsY0FBQUEsZUFBZSxFQUFFO0FBRFo7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQXNCRTtBQUFBLDRDQUFlO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQXdKRCxDQXpVRDs7R0FBTXhFO1VBbUNnRFQ7OztLQW5DaERTO0FBMlVOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2JldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcclxuXHJcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICB3YWl0VHgsXHJcbiAgV2l0bmVzc1Njb3BlLFxyXG4gIFdhbGxldE5vdENvbm5lY3RlZEVycm9yLFxyXG59IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIFdhbGxldERpc2Nvbm5lY3RCdXR0b24sXHJcbiAgV2FsbGV0TXVsdGlCdXR0b24sXHJcbn0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aVwiO1xyXG5pbXBvcnQgeyBuZW9saW5lTjMgfSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5lb2xpbmVcIjtcclxuaW1wb3J0IHsgdSwgc2MsIHdhbGxldCB9IGZyb20gXCJAY2l0eW9memlvbi9uZW9uLWpzXCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTmVvbiBmcm9tIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IG5lbzNEYXBpIGZyb20gXCJuZW8zLWRhcGlcIjtcclxuXHJcbmNvbnN0IEluZGV4OiBCZXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgTmVvQ29udHJhY3RIYXNoID0gXCIweGVmNDA3M2EwZjJiMzA1YTM4ZWM0MDUwZTRkM2QyOGJjNDBlYTYzZjVcIjtcclxuICBjb25zdCBCZXR0aW5nTWFuYWdlckNvbnRyYWN0SGFzaCA9XHJcbiAgICBcIjB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YlwiO1xyXG5cclxuICBjb25zdCB0cmVzdWFyeSA9IFwiTllLTldXbUFyakhEN3VYRnB1R2VESDZ1Y1lHcHNmMnM2WVwiO1xyXG5cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgY29uc3QgcHVibGlzaEludm9rZSA9IGFzeW5jIChcclxuICAgIHJwY0FkZHJlc3MsXHJcbiAgICBuZXR3b3JrTWFnaWMsXHJcbiAgICBzY3JpcHRIYXNoLFxyXG4gICAgb3BlcmF0aW9uLFxyXG4gICAgYXJncyxcclxuICAgIGFjY291bnRcclxuICApID0+IHtcclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IE5lb24uZXhwZXJpbWVudGFsLlNtYXJ0Q29udHJhY3QoXHJcbiAgICAgIE5lb24udS5IZXhTdHJpbmcuZnJvbUhleChzY3JpcHRIYXNoKSxcclxuICAgICAge1xyXG4gICAgICAgIG5ldHdvcmtNYWdpYyxcclxuICAgICAgICBycGNBZGRyZXNzLFxyXG4gICAgICAgIGFjY291bnQsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0Lmludm9rZShvcGVyYXRpb24sIGFyZ3MpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgY29ubmVjdGVkLCBnZXROZXR3b3JrcywgYWRkcmVzcywgaW52b2tlIH0gPSB1c2VXYWxsZXQoKTtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW3dhbGxldE5ldHdvcmssIHNldFdhbGxldE5ldHdvcmtdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbmVvbGluZSwgc2V0TmVvTGluZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtibG9ja0hlaWdodCwgc2V0QmxvY2tIZWlnaHRdID0gdXNlU3RhdGUoXCI3ODExNVwiKTtcclxuICBjb25zdCBbbmVvbGluZU4zLCBzZXROZW9MaW5lM10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBmZXRjaFdhbGxldE5ldHdvcmsgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXROZXR3b3JrcygpO1xyXG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICBzZXRXYWxsZXROZXR3b3JrKHJlc3VsdC5kYXRhPy5kZWZhdWx0TmV0d29yayB8fCBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW2dldE5ldHdvcmtzXSk7XHJcbiAgLy8gYmFsYW5jZXNcclxuXHJcbiAgY29uc3QgcGxhY2VCZXQgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgaWYgKGNvbm5lY3RlZCkge1xyXG4gICAgICBuZW9saW5lTjNcclxuICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICBmcm9tQWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgICAgIHRvQWRkcmVzczogdHJlc3VhcnksXHJcbiAgICAgICAgICBhc3NldDogXCJHQVNcIixcclxuICAgICAgICAgIGFtb3VudDogXCIxXCIsXHJcbiAgICAgICAgICBmZWU6IFwiMC4wMDAxXCIsXHJcbiAgICAgICAgICBicm9hZGNhc3RPdmVycmlkZTogZmFsc2UsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmQgdHJhbnNhY3Rpb24gc3VjY2VzcyFcIik7XHJcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcclxuICAgICAgICAgIGFsZXJ0KCdCZXQgUGxhY2VkIHN1Y2Nlc3NmdWxseSEnKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJUcmFuc2FjdGlvbiBJRDogXCIgKyByZXN1bHQudHhpZCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlJQQyBub2RlIFVSTDogXCIgKyByZXN1bHQubm9kZVVSTCk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG5cclxuICAgICAgICAgIGFsZXJ0KFwiWW91IGRvIG5vIGhhdmUgZW5vdWdoIEFzdHJvVG9rZW4gdG8gbGF1bmNoIVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdERhcCgpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXHJcblxyXG4gICAgLy8gYmFsYW5jZXNcclxuXHJcbiAgICBpZiAoY29ubmVjdGVkKSB7XHJcbiAgICAgIGZldGNoV2FsbGV0TmV0d29yaygpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgPT4gXCIsIG5lb2xpbmVOMyk7XHJcblxyXG4gICAgICBpZiAobmVvbGluZU4zKSB7XHJcbiAgICAgICAgbmVvbGluZU4zLmdldEFjY291bnQoKS50aGVuKChhY2NvdW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgZm91bmQgY29ubmV0ZWQgPT4gXCIsIGFjY291bnQpO1xyXG5cclxuICAgICAgICAgIHNldEFjY291bnQoYWNjb3VudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG5lb2xpbmVOMy5nZXRQdWJsaWNLZXkoKS50aGVuKChwdWJsaWNLZXlEYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGFkZHJlc3MsIHB1YmxpY0tleSB9ID0gcHVibGljS2V5RGF0YTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgYWRkcmVzczogXCIgKyBhZGRyZXNzKTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgcHVibGljIGtleTogXCIgKyBwdWJsaWNLZXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBzY3JwQWRkcmVzcztcclxuICAgICAgICBuZW9saW5lTjNcclxuICAgICAgICAgIC5TY3JpcHRIYXNoVG9BZGRyZXNzKHtcclxuICAgICAgICAgICAgc2NyaXB0SGFzaDogXCIweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2JcIixcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICBzY3JwQWRkcmVzcyA9IGFkZHJlc3M7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkcmVzc1wiICsgYWRkcmVzcyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IHR5cGUsIGRlc2NyaXB0aW9uLCBkYXRhIH0gPSBlcnJvcjtcclxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSBcIk5PX1BST1ZJREVSXCI6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHByb3ZpZGVyIGF2YWlsYWJsZS5cIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIFwiTUFMRk9STUVEX0lOUFVUXCI6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBjaGVjayB5b3VyIGlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIE5vdCBhbiBleHBlY3RlZCBlcnJvciBvYmplY3QuICBKdXN0IHdyaXRlIHRoZSBlcnJvciB0byB0aGUgY29uc29sZS5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzZW5kIGdhcyB0b2tlblxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRXYWxsZXROZXR3b3JrKG51bGwpO1xyXG4gICAgfVxyXG4gIH0sIFtjb25uZWN0ZWQsIGZldGNoV2FsbGV0TmV0d29ya10pO1xyXG5cclxuICBjb25zdCBpbml0RGFwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgaW5pdE4zRGFwaSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJORU9MaW5lLk4zLkVWRU5ULlJFQURZXCIsICgpID0+IHtcclxuICAgICAgICBzZXROZW9MaW5lMyhuZXcgTkVPTGluZU4zLkluaXQoKSk7XHJcbiAgICAgICAgaWYgKG5lb2xpbmVOMykge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZW9saW5lTjMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QoXCJOMyBkQVBJIG1ldGhvZCBmYWlsZWQgdG8gbG9hZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGluaXRDb21tb25EYXBpID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIk5FT0xpbmUuTkVPLkVWRU5ULlJFQURZXCIsICgpID0+IHtcclxuICAgICAgICBzZXROZW9MaW5lKG5ldyBORU9MaW5lLkluaXQoKSk7XHJcbiAgICAgICAgaWYgKG5lb2xpbmUpIHtcclxuICAgICAgICAgIHJlc29sdmUobmVvbGluZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChcImNvbW1vbiBkQVBJIG1ldGhvZCBmYWlsZWQgdG8gbG9hZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGluaXRDb21tb25EYXBpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBjb21tb24gZEFQSSBtZXRob2QgaXMgbG9hZGVkLlwiKTtcclxuICAgICAgICByZXR1cm4gaW5pdE4zRGFwaTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIE4zIGRBUEkgbWV0aG9kIGlzIGxvYWRlZC5cIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL21haW4uY3NzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbnRhaW5lciBteC1hdXRvIHAtMiBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHB5LTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL0xPR08ucG5nXCIgaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsZzp0ZXh0LTV4bCBtZDp0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICBQbGFuZXQgWFxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNwYWNlLXgtNiBtZDpmbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1kYXJrR3JheWlzaEJsdWUgdGV4dC13aGl0ZSBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2dhbWVzXCI+R2FtZXM8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZGFya0dyYXlpc2hCbHVlIHRleHQtd2hpdGUgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3J0Zm9saW9cIj5Qb3J0Zm9saW88L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBpZD1cIm1lbnUtYnRuXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaGFtYnVyZ2VyIG1kOmhpZGRlbiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci10b3AgYmctd2hpdGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1taWRkbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3R0b21cIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9XCJtZW51XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleC1jb2wgaXRlbXMtY2VudGVyIGhpZGRlbiBzZWxmLWVuZCBweS04IG10LTEwIHNwYWNlLXktNiBmb250LWJvbGQgYmctd2hpdGUgc206dy1hdXRvIHNtOnNlbGYtY2VudGVyIGxlZnQtNiByaWdodC02IGRyb3Atc2hhZG93LW1kXCJcclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICA8c2VjdGlvbj48L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiaGVyb1wiIGNsYXNzTmFtZT1cInAtNlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmV0eGxvZ28gXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtMiBCZXRBcmVhICBib3gtYm9yZGVyICBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwLTYganVzdGlmeS1hcm91bmQganVzdGlmeS1zZWxmLXN0YXJ0IFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9iZXRHTy5wbmdcIiB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjIwMFwiIC8+XHJcblxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9yaWdodC5wbmdcIiB3aWR0aD1cIjMwMHB4XCIgaGVpZ2h0PVwiMzUwcHhcIiAvPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJldEJveCBcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBmb250LWJvbGQgXCI+UGxhY2UgQmV0PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3BsYWNlQmV0fSBjbGFzc05hbWU9XCJiZXRCdXR0b24ganVzdGlmeS1zZWxmLWF1dG8gdGV4dC13aGl0ZSB0ZXh0LTJ4bCBmb250LWJvbGQgXCI+XHJcbiAgICAgICAgICAgICAgQmV0IFhcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8V2FsbGV0TXVsdGlCdXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEQzI5ODRcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lclwiPjwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5nYW1lRGV0YWlsc0NhcmQge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgbGVmdDogMTQ0cHg7XHJcbiAgICAgICAgICB0b3A6IDUyOHB4O1xyXG5cclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTM3LCAxMzIsIDIwMiwgMC4zNSk7XHJcblxyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLkJldEFyZWEge1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG5cclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgaGVpZ2h0OiA3MDBweDtcclxuICAgICAgICAgIHRvcDogMzQwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxLCAyMywgNzQsIDAuNyk7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzgyOWRkO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogOHB4IDhweCA4cHggcmdiYSgyMjAsIDQxLCA3OCwgMC4yMSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbWVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDdweDtcclxuICAgICAgICAgIGhlaWdodDogMTE5cHg7XHJcbiAgICAgICAgICBsZWZ0OiAxOTUwcHg7XHJcbiAgICAgICAgICB0b3A6IDQzNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9pbWcvdGltZXIucG5nKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iZXR4bG9nbyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogMjQzLjE1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDY4LjI0cHg7XHJcbiAgICAgICAgICBsZWZ0OiA3MDBweDtcclxuICAgICAgICAgIHRvcDogNDA5LjA4cHg7XHJcblxyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9pbWcvYmV0eGxvZ28ucG5nKSBuby1yZXBlYXQ7XHJcblxyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJldEJveCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAgIHdpZHRoOiA0MTNweDtcclxuICAgICAgICAgIGhlaWdodDogMjA5cHg7XHJcblxyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjMpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJldEJ1dHRvbiB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB3aWR0aDogMjgzcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcblxyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2RjMjk4NDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggOHB4IHJnYmEoMjAwLCA0MSwgMjIxLCAwLjQpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbInVzZVdhbGxldCIsIldhbGxldE11bHRpQnV0dG9uIiwiSGVhZCIsIkltYWdlIiwiTGluayIsIk5lb24iLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwiSW5kZXgiLCJOZW9Db250cmFjdEhhc2giLCJCZXR0aW5nTWFuYWdlckNvbnRyYWN0SGFzaCIsInRyZXN1YXJ5IiwicHVibGlzaEludm9rZSIsInJwY0FkZHJlc3MiLCJuZXR3b3JrTWFnaWMiLCJzY3JpcHRIYXNoIiwib3BlcmF0aW9uIiwiYXJncyIsImFjY291bnQiLCJjb250cmFjdCIsImV4cGVyaW1lbnRhbCIsIlNtYXJ0Q29udHJhY3QiLCJ1IiwiSGV4U3RyaW5nIiwiZnJvbUhleCIsImludm9rZSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0ZWQiLCJnZXROZXR3b3JrcyIsImFkZHJlc3MiLCJzZXRBY2NvdW50Iiwid2FsbGV0TmV0d29yayIsInNldFdhbGxldE5ldHdvcmsiLCJzdGF0ZSIsInNldFN0YXRlIiwibmVvbGluZSIsInNldE5lb0xpbmUiLCJibG9ja0hlaWdodCIsInNldEJsb2NrSGVpZ2h0IiwibmVvbGluZU4zIiwic2V0TmVvTGluZTMiLCJmZXRjaFdhbGxldE5ldHdvcmsiLCJzdGF0dXMiLCJkYXRhIiwiZGVmYXVsdE5ldHdvcmsiLCJlcnJvciIsInBsYWNlQmV0Iiwic2VuZCIsImZyb21BZGRyZXNzIiwidG9BZGRyZXNzIiwiYXNzZXQiLCJhbW91bnQiLCJmZWUiLCJicm9hZGNhc3RPdmVycmlkZSIsInRoZW4iLCJhbGVydCIsInR4aWQiLCJub2RlVVJMIiwiZXJyIiwiaW5pdERhcCIsImdldEFjY291bnQiLCJnZXRQdWJsaWNLZXkiLCJwdWJsaWNLZXlEYXRhIiwicHVibGljS2V5Iiwic2NycEFkZHJlc3MiLCJTY3JpcHRIYXNoVG9BZGRyZXNzIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiaW5pdE4zRGFwaSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5FT0xpbmVOMyIsIkluaXQiLCJpbml0Q29tbW9uRGFwaSIsIk5FT0xpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9