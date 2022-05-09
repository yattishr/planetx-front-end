"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js");
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-base */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/index.js");
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react-ui */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/index.js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cityofzion/neon-js */ "./node_modules/@cityofzion/neon-js/dist/browser.js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Sebatane Raphela\\Music\\web3\\neo-blockchain-betx\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();













var Index = function Index() {
  _s();

  var NeoContractHash = "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5";
  var BettingManagerContractHash = "0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b";
  initDap(); // @ts-ignore

  var publishInvoke = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(rpcAddress, networkMagic, scriptHash, operation, args, account) {
      var contract, result;
      return C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              contract = new (_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_5___default().experimental.SmartContract)(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_5___default().u.HexString.fromHex(scriptHash), {
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

  var fetchWalletNetwork = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)( /*#__PURE__*/(0,C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
    var result, _result$data;

    return C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
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
    // initDapi();
    // balances 
    if (connected) {
      fetchWalletNetwork();
      console.log("Account => ", neoline);

      if (neoline) {
        neoline.getAccount().then(function (account) {
          console.log("Account found conneted => ", account);
          setAccount(account);
        });
        neoline.getPublicKey().then(function (publicKeyData) {
          var address = publicKeyData.address,
              publicKey = publicKeyData.publicKey;
          console.log("Account address: " + address);
          console.log("Account public key: " + publicKey);
        });
      }
    } else {
      setWalletNetwork(null);
    }
  }, [connected, fetchWalletNetwork]);
  console.log(walletNetwork);
  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)( /*#__PURE__*/(0,C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {
    var account, rpcAddress, networkMagic, params;
    return C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(!address || !connected)) {
              _context3.next = 2;
              break;
            }

            throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_10__.WalletNotConnectedError();

          case 2:
            account = _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_5__.wallet.getScriptHashFromAddress(address); // Construct the request and invoke it
            // const result = await invoke({
            // 	scriptHash: '0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b',
            // 	operation: 'getNumber',
            // 	signers: [
            // 		{
            // 			account: wallet.getScriptHashFromAddress(address),
            // 			// @ts-ignore
            // 			scope: WitnessScope.CalledByEntry,
            // 		},
            // 	],
            // });
            // // Optional: Wait for the transaction to be confirmed onchain
            // if (result.data?.txId) {
            // 	await waitTx('NETWORK_RPC_ADDRESS_HERE', result.data?.txId);
            // }

            rpcAddress = "https://testnet1.neo.coz.io:443";
            networkMagic = 877933390;
            params = [_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_5__.sc.ContractParam.hash160("NT4QtUYLghvSuuB2yCS6CgQk9Nf1nkDk2q"), _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_5__.sc.ContractParam.hash160(BettingManagerContractHash), 2, {
              amount: 1
            }];
            _context3.next = 8;
            return publishInvoke(rpcAddress, networkMagic, NeoContractHash, "transfer", []);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), [address, connected, invoke]);

  var placeBet = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4() {
      var rpcAddress, networkMagic, params;
      return C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              rpcAddress = "https://testnet1.neo.coz.io:443";
              networkMagic = 877933390;
              params = [_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_5__.sc.ContractParam.hash160("NT4QtUYLghvSuuB2yCS6CgQk9Nf1nkDk2q"), _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_5__.sc.ContractParam.hash160(BettingManagerContractHash), 2, {
                amount: 1
              }];
              _context4.next = 5;
              return publishInvoke(rpcAddress, networkMagic, NeoContractHash, "transfer", params, account);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function placeBet() {
      return _ref4.apply(this, arguments);
    };
  }();

  var initDap = /*#__PURE__*/function () {
    var _ref5 = (0,C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5() {
      var initN3Dapi, initCommonDapi;
      return C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              // 	const initN3Dapi = new Promise((resolve, reject) => {
              // 		window.addEventListener("NEOLine.N3.EVENT.READY", () => {
              // 		  setNeoLine3(new NEOLine3.Init());
              // 		  if (neolineN3) {
              // 			resolve(neolineN3);
              // 		  } else {
              // 			reject("N3 dAPI method failed to load.");
              // 		  }
              // 		});
              // 	  });
              //   window.addEventListener("NEOLine.NEO.EVENT.READY", () => {
              //     setNeoLine(new NEOLine.Init());
              //     if (neoline) {
              //       resolve(neoline);
              //     } else {
              //       reject("common dAPI method failed to load.");
              //     }
              //   });
              // });
              initN3Dapi = new Promise(function (resolve, reject) {
                window.addEventListener("NEOLine.N3.EVENT.READY", function () {
                  new NEOLineN3.Init(), (0,C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__.default)("neolineN3");

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
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function initDap() {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "/main.css",
        className: "jsx-1648730631"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("nav", {
      className: "jsx-1648730631" + " " + "relative container mx-auto p-2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "pt-2 py-6 flex flex-row justify-between items-center ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
            src: "img/LOGO.png",
            height: "100",
            width: "100",
            alt: "",
            className: "jsx-1648730631"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
            className: "jsx-1648730631" + " " + "lg:text-5xl md:text-5xl text-white font-bold  ",
            children: "Planet X"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "hidden space-x-6 md:flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
            href: "games",
            className: "jsx-1648730631" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: "Games"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("a", {
            href: "/portfolio.html",
            className: "jsx-1648730631" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: "Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
          id: "menu-btn",
          className: "jsx-1648730631" + " " + "block hamburger md:hidden focus:outline-none focus:text-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            className: "jsx-1648730631" + " " + "hamburger-top bg-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            className: "jsx-1648730631" + " " + "hamburger-middle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("span", {
            className: "jsx-1648730631" + " " + "hamburger-bottom"
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
        lineNumber: 231,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "md:hidden",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          id: "menu",
          className: "jsx-1648730631" + " " + "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      className: "jsx-1648730631"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      id: "hero",
      className: "jsx-1648730631",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "jsx-1648730631" + " " + "md:w-1/2 flex flex-col space-y-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
              src: "img/LOGO.png",
              alt: "",
              className: "jsx-1648730631"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + " md:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
            src: "img/right_image.png",
            alt: "",
            className: "jsx-1648730631"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      id: "features",
      className: "jsx-1648730631",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "container  flex flex-col items-center justify-center px-6 mx-auto mt-2  md:space-y-0 md:flex-row middle",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_rentfuse_labs_neo_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__.WalletMultiButton, {
          style: {
            backgroundColor: "#DC2984"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("section", {
      id: "testimonials",
      className: "jsx-1648730631",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "max-w-6xl px-5 mx-auto mt-32 text-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "flex flex-col mt-24 md:flex-row md:space-x-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "jsx-1648730631" + " " + "my-16 flex flex-col items-center justify-center min-w-full ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
              className: "jsx-1648730631" + " " + "text-5xl text-white font-bold subpixel-antialiased py-4 tracking-widest",
              children: "Trending"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("table", {
              className: "jsx-1648730631" + " " + "min-w-full border border-slate-800",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("thead", {
                className: "jsx-1648730631" + " " + "border-b bg-[#B227CA] ",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
                  className: "jsx-1648730631",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold  text-white px-6 py-4 text-left",
                    children: "Rank"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 308,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold  text-white px-6 py-4 text-left",
                    children: "Game"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 314,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Game Names"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 320,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Date/Time"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 326,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "24 hours"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 332,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 307,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 306,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tbody", {
                className: "jsx-1648730631" + " " + "bg-[#15174A]   ",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 343,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 342,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
                      src: "img/cs.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 346,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 345,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 348,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 351,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: ["400+", connected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
                      onClick: placeBet,
                      className: "jsx-1648730631" + " " + "btn btn-success",
                      children: ["Place Bet", " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 357,
                      columnNumber: 25
                    }, _this) : null]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 354,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 341,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 365,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 364,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
                      src: "img/dota.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 368,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 367,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 370,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 373,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "400+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 376,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 363,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
                      src: "img/down.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 382,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 381,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
                      src: "img/freefire.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 385,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 384,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Free Fire - World Series"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 387,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Oct 15, 2022 4:00 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 390,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "50+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 393,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 380,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
                      src: "img/down.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 399,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 398,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
                      src: "img/honor.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 402,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 401,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "KOG - KPL Spring Playoffs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 404,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Nov 05, 2022 2:30 AM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 407,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "100+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 410,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 397,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 416,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 415,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
                      src: "img/legends.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 419,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 418,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "LOL - EU Masters Spring"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 421,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 424,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "25+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 427,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 414,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "1648730631",
      children: ".container.jsx-1648730631{padding:0 2rem;}.main.jsx-1648730631{min-height:100vh;padding:4rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-1648730631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;padding:2rem 0;border-top:1px solid #eaeaea;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-1648730631 a.jsx-1648730631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.title.jsx-1648730631 a.jsx-1648730631{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1648730631 a.jsx-1648730631:hover,.title.jsx-1648730631 a.jsx-1648730631:focus,.title.jsx-1648730631 a.jsx-1648730631:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-1648730631{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-1648730631,.description.jsx-1648730631{text-align:center;}.description.jsx-1648730631{margin:4rem 0;line-height:1.5;font-size:1.5rem;}.code.jsx-1648730631{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-1648730631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;}.card.jsx-1648730631{margin:1rem;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;max-width:300px;}.card.jsx-1648730631:hover,.card.jsx-1648730631:focus,.card.jsx-1648730631:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1648730631 h2.jsx-1648730631{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1648730631 p.jsx-1648730631{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-1648730631{height:1em;margin-left:0.5rem;}@media (max-width:600px){.grid.jsx-1648730631{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.wallet-buttons.jsx-1648730631{padding-top:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2ViYXRhbmUgUmFwaGVsYVxcTXVzaWNcXHdlYjNcXG5lby1ibG9ja2NoYWluLWJldHhcXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcWJrQixBQUcwQixBQUlFLEFBVUosQUFTQSxBQU9DLEFBT1ksQUFJakIsQUFPUyxBQUlKLEFBTUssQUFTTixBQVFELEFBY0UsQUFLSSxBQUtULEFBTUUsQUFNRSxBQU1JLFNBM0VBLEFBMERDLEVBTUMsQUFNSyxDQXBDVCxFQTdDTSxBQXNCTCxBQXFDSyxDQXpGdkIsRUFJaUIsQUFpSEYsQ0FyRWYsQUE4Q21CLENBcENDLE9BaEJILENBa0NDLEFBd0JBLEdBL0NDLEFBcURuQixFQXJHUyxHQXFGVCxBQUtBLEVBcENrQixJQWhCbEIsRUFrQ2dCLEFBd0JoQixJQS9DQSxNQU1tQixJQWtCSSxHQXpDdkIsSUFOQSxDQXpCZSxLQXdEdUQsSUFoRDdELEFBU2dCLEFBNENKLGVBNkNuQixFQU1zQixnQkF2R1AsQUFnRVUsZUEvREksVUFnRVYsT0F6RUcsWUFVQyxBQWdFOEIsZ0JBYjlCLEVBbURkLElBL0ZVLEtBZ0dyQixhQXpEQSwwQkF2RHlCLGlDQVVKLGFBZ0VILEdBekRKLEFBNENHLGFBY2pCLHFDQTFFcUIsT0E2REgsY0E1Q2xCLEVBNkNBLElBcERBLGtFQVRBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2ViYXRhbmUgUmFwaGVsYVxcTXVzaWNcXHdlYjNcXG5lby1ibG9ja2NoYWluLWJldHhcXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgd2FpdFR4LFxyXG4gIFdpdG5lc3NTY29wZSxcclxuICBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcixcclxufSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBXYWxsZXREaXNjb25uZWN0QnV0dG9uLFxyXG4gIFdhbGxldE11bHRpQnV0dG9uLFxyXG59IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcclxuaW1wb3J0IHsgbmVvbGluZU4zIH0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lXCI7XHJcbmltcG9ydCB7IHUsIHNjLCB3YWxsZXQgfSBmcm9tIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBOZW9uIGZyb20gXCJAY2l0eW9memlvbi9uZW9uLWpzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBuZW8zRGFwaSBmcm9tICduZW8zLWRhcGknO1xyXG5cclxuY29uc3QgSW5kZXg6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IE5lb0NvbnRyYWN0SGFzaCA9IFwiMHhlZjQwNzNhMGYyYjMwNWEzOGVjNDA1MGU0ZDNkMjhiYzQwZWE2M2Y1XCI7XHJcbiAgY29uc3QgQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2ggPVxyXG4gICAgXCIweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2JcIjtcclxuXHRpbml0RGFwKCk7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGNvbnN0IHB1Ymxpc2hJbnZva2UgPSBhc3luYyAoXHJcbiAgICBycGNBZGRyZXNzLFxyXG4gICAgbmV0d29ya01hZ2ljLFxyXG4gICAgc2NyaXB0SGFzaCxcclxuICAgIG9wZXJhdGlvbixcclxuICAgIGFyZ3MsXHJcbiAgICBhY2NvdW50XHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBOZW9uLmV4cGVyaW1lbnRhbC5TbWFydENvbnRyYWN0KFxyXG4gICAgICBOZW9uLnUuSGV4U3RyaW5nLmZyb21IZXgoc2NyaXB0SGFzaCksXHJcbiAgICAgIHtcclxuICAgICAgICBuZXR3b3JrTWFnaWMsXHJcbiAgICAgICAgcnBjQWRkcmVzcyxcclxuICAgICAgICBhY2NvdW50LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGxldCByZXN1bHQ7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5pbnZva2Uob3BlcmF0aW9uLCBhcmdzKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9O1xyXG5cclxuICBjb25zdCB7IGNvbm5lY3RlZCwgZ2V0TmV0d29ya3MsIGFkZHJlc3MsIGludm9rZSB9ID0gdXNlV2FsbGV0KCk7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IFt3YWxsZXROZXR3b3JrLCBzZXRXYWxsZXROZXR3b3JrXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW25lb2xpbmUsIHNldE5lb0xpbmVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbmVvbGluZU4zLCBzZXROZW9MaW5lM10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtibG9ja0hlaWdodCwgc2V0QmxvY2tIZWlnaHRdID0gdXNlU3RhdGUoXCI3ODExNVwiKTtcclxuICBjb25zdCBmZXRjaFdhbGxldE5ldHdvcmsgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXROZXR3b3JrcygpO1xyXG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICBzZXRXYWxsZXROZXR3b3JrKHJlc3VsdC5kYXRhPy5kZWZhdWx0TmV0d29yayB8fCBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW2dldE5ldHdvcmtzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgIC8vIGluaXREYXBpKCk7XHJcblxyXG4vLyBiYWxhbmNlcyBcclxuXHJcblxyXG5cclxuICAgIGlmIChjb25uZWN0ZWQpIHtcclxuICAgICAgZmV0Y2hXYWxsZXROZXR3b3JrKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCA9PiBcIiwgbmVvbGluZSk7XHJcblxyXG4gICAgICBpZiAobmVvbGluZSkge1xyXG4gICAgICAgIG5lb2xpbmUuZ2V0QWNjb3VudCgpLnRoZW4oKGFjY291bnQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBmb3VuZCBjb25uZXRlZCA9PiBcIiwgYWNjb3VudCk7XHJcblxyXG4gICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbmVvbGluZS5nZXRQdWJsaWNLZXkoKS50aGVuKChwdWJsaWNLZXlEYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGFkZHJlc3MsIHB1YmxpY0tleSB9ID0gcHVibGljS2V5RGF0YTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgYWRkcmVzczogXCIgKyBhZGRyZXNzKTtcclxuXHRcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBwdWJsaWMga2V5OiBcIiArIHB1YmxpY0tleSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFxyXG5cdFx0XHJcbiAgICAgIH1cclxuXHJcbiBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFdhbGxldE5ldHdvcmsobnVsbCk7XHJcbiAgICB9XHJcbiAgfSwgW2Nvbm5lY3RlZCwgZmV0Y2hXYWxsZXROZXR3b3JrXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHdhbGxldE5ldHdvcmspO1xyXG5cclxuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFhZGRyZXNzIHx8ICFjb25uZWN0ZWQpIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xyXG4gICAgY29uc3QgYWNjb3VudCA9IHdhbGxldC5nZXRTY3JpcHRIYXNoRnJvbUFkZHJlc3MoYWRkcmVzcyk7XHJcbiAgICAvLyBDb25zdHJ1Y3QgdGhlIHJlcXVlc3QgYW5kIGludm9rZSBpdFxyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgaW52b2tlKHtcclxuICAgIC8vIFx0c2NyaXB0SGFzaDogJzB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YicsXHJcbiAgICAvLyBcdG9wZXJhdGlvbjogJ2dldE51bWJlcicsXHJcblxyXG4gICAgLy8gXHRzaWduZXJzOiBbXHJcbiAgICAvLyBcdFx0e1xyXG4gICAgLy8gXHRcdFx0YWNjb3VudDogd2FsbGV0LmdldFNjcmlwdEhhc2hGcm9tQWRkcmVzcyhhZGRyZXNzKSxcclxuICAgIC8vIFx0XHRcdC8vIEB0cy1pZ25vcmVcclxuICAgIC8vIFx0XHRcdHNjb3BlOiBXaXRuZXNzU2NvcGUuQ2FsbGVkQnlFbnRyeSxcclxuICAgIC8vIFx0XHR9LFxyXG4gICAgLy8gXHRdLFxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gLy8gT3B0aW9uYWw6IFdhaXQgZm9yIHRoZSB0cmFuc2FjdGlvbiB0byBiZSBjb25maXJtZWQgb25jaGFpblxyXG4gICAgLy8gaWYgKHJlc3VsdC5kYXRhPy50eElkKSB7XHJcbiAgICAvLyBcdGF3YWl0IHdhaXRUeCgnTkVUV09SS19SUENfQUREUkVTU19IRVJFJywgcmVzdWx0LmRhdGE/LnR4SWQpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IHJwY0FkZHJlc3MgPSBcImh0dHBzOi8vdGVzdG5ldDEubmVvLmNvei5pbzo0NDNcIjtcclxuICAgIGNvbnN0IG5ldHdvcmtNYWdpYyA9IDg3NzkzMzM5MDtcclxuICAgIGNvbnN0IHBhcmFtcyA9IFtcclxuICAgICAgc2MuQ29udHJhY3RQYXJhbS5oYXNoMTYwKFwiTlQ0UXRVWUxnaHZTdXVCMnlDUzZDZ1FrOU5mMW5rRGsycVwiKSxcclxuICAgICAgc2MuQ29udHJhY3RQYXJhbS5oYXNoMTYwKEJldHRpbmdNYW5hZ2VyQ29udHJhY3RIYXNoKSxcclxuICAgICAgMixcclxuICAgICAgeyBhbW91bnQ6IDEgfSxcclxuICAgIF07XHJcbiAgICBhd2FpdCBwdWJsaXNoSW52b2tlKFxyXG4gICAgICBycGNBZGRyZXNzLFxyXG4gICAgICBuZXR3b3JrTWFnaWMsXHJcbiAgICAgIE5lb0NvbnRyYWN0SGFzaCxcclxuICAgICAgXCJ0cmFuc2ZlclwiLFxyXG4gICAgICBbXVxyXG4gICAgKTtcclxuICB9LCBbYWRkcmVzcywgY29ubmVjdGVkLCBpbnZva2VdKTtcclxuXHJcbiAgY29uc3QgcGxhY2VCZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBycGNBZGRyZXNzID0gXCJodHRwczovL3Rlc3RuZXQxLm5lby5jb3ouaW86NDQzXCI7XHJcbiAgICBjb25zdCBuZXR3b3JrTWFnaWMgPSA4Nzc5MzMzOTA7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBbXHJcbiAgICAgIHNjLkNvbnRyYWN0UGFyYW0uaGFzaDE2MChcIk5UNFF0VVlMZ2h2U3V1QjJ5Q1M2Q2dRazlOZjFua0RrMnFcIiksXHJcbiAgICAgIHNjLkNvbnRyYWN0UGFyYW0uaGFzaDE2MChCZXR0aW5nTWFuYWdlckNvbnRyYWN0SGFzaCksXHJcbiAgICAgIDIsXHJcbiAgICAgIHsgYW1vdW50OiAxIH0sXHJcbiAgICBdO1xyXG4gICAgYXdhaXQgcHVibGlzaEludm9rZShcclxuICAgICAgcnBjQWRkcmVzcyxcclxuICAgICAgbmV0d29ya01hZ2ljLFxyXG4gICAgICBOZW9Db250cmFjdEhhc2gsXHJcbiAgICAgIFwidHJhbnNmZXJcIixcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICBhY2NvdW50XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBpbml0RGFwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gXHRjb25zdCBpbml0TjNEYXBpID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiTkVPTGluZS5OMy5FVkVOVC5SRUFEWVwiLCAoKSA9PiB7XHJcbiAgICAvLyBcdFx0ICBzZXROZW9MaW5lMyhuZXcgTkVPTGluZTMuSW5pdCgpKTtcclxuICAgIC8vIFx0XHQgIGlmIChuZW9saW5lTjMpIHtcclxuICAgIC8vIFx0XHRcdHJlc29sdmUobmVvbGluZU4zKTtcclxuICAgIC8vIFx0XHQgIH0gZWxzZSB7XHJcbiAgICAvLyBcdFx0XHRyZWplY3QoXCJOMyBkQVBJIG1ldGhvZCBmYWlsZWQgdG8gbG9hZC5cIik7XHJcbiAgICAvLyBcdFx0ICB9XHJcbiAgICAvLyBcdFx0fSk7XHJcbiAgICAvLyBcdCAgfSk7XHJcbiAgICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiTkVPTGluZS5ORU8uRVZFTlQuUkVBRFlcIiwgKCkgPT4ge1xyXG4gICAgLy8gICAgIHNldE5lb0xpbmUobmV3IE5FT0xpbmUuSW5pdCgpKTtcclxuICAgIC8vICAgICBpZiAobmVvbGluZSkge1xyXG4gICAgLy8gICAgICAgcmVzb2x2ZShuZW9saW5lKTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgcmVqZWN0KFwiY29tbW9uIGRBUEkgbWV0aG9kIGZhaWxlZCB0byBsb2FkLlwiKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfSk7XHJcbiAgICBjb25zdCBpbml0TjNEYXBpID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIk5FT0xpbmUuTjMuRVZFTlQuUkVBRFlcIiwgKCkgPT4ge1xyXG4gICAgICAgIG5lb2xpbmVOMyA9IG5ldyBORU9MaW5lTjMuSW5pdCgpO1xyXG4gICAgICAgIGlmIChuZW9saW5lTjMpIHtcclxuICAgICAgICAgIHJlc29sdmUobmVvbGluZU4zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KFwiTjMgZEFQSSBtZXRob2QgZmFpbGVkIHRvIGxvYWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBpbml0Q29tbW9uRGFwaSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJORU9MaW5lLk5FTy5FVkVOVC5SRUFEWVwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0TmVvTGluZShuZXcgTkVPTGluZS5Jbml0KCkpO1xyXG4gICAgICAgIGlmIChuZW9saW5lKSB7XHJcbiAgICAgICAgICByZXNvbHZlKG5lb2xpbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QoXCJjb21tb24gZEFQSSBtZXRob2QgZmFpbGVkIHRvIGxvYWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcblx0aW5pdENvbW1vbkRhcGkgXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBjb21tb24gZEFQSSBtZXRob2QgaXMgbG9hZGVkLlwiKTtcclxuICAgICAgICByZXR1cm4gaW5pdE4zRGFwaTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIE4zIGRBUEkgbWV0aG9kIGlzIGxvYWRlZC5cIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvbWFpbi5jc3NcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgY29udGFpbmVyIG14LWF1dG8gcC0yIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgcHktNiBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL0xPR08ucG5nXCIgaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibGc6dGV4dC01eGwgbWQ6dGV4dC01eGwgdGV4dC13aGl0ZSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgIFBsYW5ldCBYXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzcGFjZS14LTYgbWQ6ZmxleFwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJnYW1lc1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1kYXJrR3JheWlzaEJsdWUgdGV4dC13aGl0ZSBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR2FtZXNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvcG9ydGZvbGlvLmh0bWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZGFya0dyYXlpc2hCbHVlIHRleHQtd2hpdGUgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFBvcnRmb2xpb1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGlkPVwibWVudS1idG5cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoYW1idXJnZXIgbWQ6aGlkZGVuIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLXRvcCBiZy13aGl0ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLW1pZGRsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJvdHRvbVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD1cIm1lbnVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgaGlkZGVuIHNlbGYtZW5kIHB5LTggbXQtMTAgc3BhY2UteS02IGZvbnQtYm9sZCBiZy13aGl0ZSBzbTp3LWF1dG8gc206c2VsZi1jZW50ZXIgbGVmdC02IHJpZ2h0LTYgZHJvcC1zaGFkb3ctbWRcIlxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICAgIDxzZWN0aW9uPjwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJoZXJvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbC1yZXZlcnNlIGl0ZW1zLWNlbnRlciBweC02IG14LWF1dG8gbXQtMTAgc3BhY2UteS0wIG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMiBmbGV4IGZsZXgtY29sIHNwYWNlLXktMTJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9MT0dPLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWQ6dy0xLzJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvcmlnaHRfaW1hZ2UucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD1cImZlYXR1cmVzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgbXgtYXV0byBtdC0yICBtZDpzcGFjZS15LTAgbWQ6ZmxleC1yb3cgbWlkZGxlXCI+XHJcbiAgICAgICAgICA8V2FsbGV0TXVsdGlCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0RDMjk4NFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJ0ZXN0aW1vbmlhbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBweC01IG14LWF1dG8gbXQtMzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0yNCBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4tdy1mdWxsIFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkIHN1YnBpeGVsLWFudGlhbGlhc2VkIHB5LTQgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICBUcmVuZGluZ1xyXG4gICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJib3JkZXItYiBiZy1bI0IyMjdDQV0gXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkICB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFJhbmtcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEdhbWUgTmFtZXNcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEYXRlL1RpbWVcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAyNCBob3Vyc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLVsjMTUxNzRBXSAgIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2NzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDUzpHTyAtIFBHTCBNYWpvciBBbnR3ZXJwXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgNDAwK1xyXG4gICAgICAgICAgICAgICAgICAgICAge2Nvbm5lY3RlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwbGFjZUJldH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhY2UgQmV0e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy91cC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG90YS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ1M6R08gLSBQR0wgTWFqb3IgQW50d2VycFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDQwMCtcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG93bi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZnJlZWZpcmUucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEZyZWUgRmlyZSAtIFdvcmxkIFNlcmllc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgT2N0IDE1LCAyMDIyIDQ6MDAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDUwK1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3duLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9ob25vci5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgS09HIC0gS1BMIFNwcmluZyBQbGF5b2Zmc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTm92IDA1LCAyMDIyIDI6MzAgQU1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDEwMCtcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xlZ2VuZHMucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIExPTCAtIEVVIE1hc3RlcnMgU3ByaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMjUrXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1haW4ge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyIGEge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGE6aG92ZXIsXHJcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXHJcbiAgICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlLFxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgbWFyZ2luOiA0cmVtIDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29kZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXHJcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBoMiB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53YWxsZXQtYnV0dG9ucyB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZ2FwOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Sebatane Raphela\\\\Music\\\\web3\\\\neo-blockchain-betx\\\\pages\\\\index.tsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true);
};

_s(Index, "pDW9OBZsY8E8Y5ZA+ay8ccuuK5w=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjhhZGVkNDJkNjM2ZTc2YjIxYTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUtBO0FBS0E7QUFFQTtBQUVBO0FBQ0E7Ozs7QUFHQSxJQUFNVSxLQUFlLEdBQUcsU0FBbEJBLEtBQWtCLEdBQU07QUFBQTs7QUFDNUIsTUFBTUMsZUFBZSxHQUFHLDRDQUF4QjtBQUNBLE1BQU1DLDBCQUEwQixHQUM5Qiw0Q0FERjtBQUVEQyxFQUFBQSxPQUFPLEdBSnNCLENBSzVCOztBQUNBLE1BQU1DLGFBQWE7QUFBQSxpVUFBRyxpQkFDcEJDLFVBRG9CLEVBRXBCQyxZQUZvQixFQUdwQkMsVUFIb0IsRUFJcEJDLFNBSm9CLEVBS3BCQyxJQUxvQixFQU1wQkMsT0FOb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUWRDLGNBQUFBLFFBUmMsR0FRSCxJQUFJZix1RkFBSixDQUNmQSw4RUFBQSxDQUF5QlcsVUFBekIsQ0FEZSxFQUVmO0FBQ0VELGdCQUFBQSxZQUFZLEVBQVpBLFlBREY7QUFFRUQsZ0JBQUFBLFVBQVUsRUFBVkEsVUFGRjtBQUdFSyxnQkFBQUEsT0FBTyxFQUFQQTtBQUhGLGVBRmUsQ0FSRztBQUFBO0FBQUE7QUFBQSxxQkFtQkhDLFFBQVEsQ0FBQ00sTUFBVCxDQUFnQlQsU0FBaEIsRUFBMkJDLElBQTNCLENBbkJHOztBQUFBO0FBbUJsQlMsY0FBQUEsTUFuQmtCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFxQmxCQyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBckJrQjtBQUFBLCtDQXdCYkYsTUF4QmE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBYmQsYUFBYTtBQUFBO0FBQUE7QUFBQSxLQUFuQjs7QUEyQkEsbUJBQW9EZCxrRkFBUyxFQUE3RDtBQUFBLE1BQVEr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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkExRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkVGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFvVkQsQ0FqaUJEOztHQUFNbkQ7VUFpQ2dEVjs7O0tBakNoRFU7QUFtaUJOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgd2FpdFR4LFxyXG4gIFdpdG5lc3NTY29wZSxcclxuICBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcixcclxufSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBXYWxsZXREaXNjb25uZWN0QnV0dG9uLFxyXG4gIFdhbGxldE11bHRpQnV0dG9uLFxyXG59IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcclxuaW1wb3J0IHsgbmVvbGluZU4zIH0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lXCI7XHJcbmltcG9ydCB7IHUsIHNjLCB3YWxsZXQgfSBmcm9tIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBOZW9uIGZyb20gXCJAY2l0eW9memlvbi9uZW9uLWpzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBuZW8zRGFwaSBmcm9tICduZW8zLWRhcGknO1xyXG5cclxuY29uc3QgSW5kZXg6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IE5lb0NvbnRyYWN0SGFzaCA9IFwiMHhlZjQwNzNhMGYyYjMwNWEzOGVjNDA1MGU0ZDNkMjhiYzQwZWE2M2Y1XCI7XHJcbiAgY29uc3QgQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2ggPVxyXG4gICAgXCIweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2JcIjtcclxuXHRpbml0RGFwKCk7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGNvbnN0IHB1Ymxpc2hJbnZva2UgPSBhc3luYyAoXHJcbiAgICBycGNBZGRyZXNzLFxyXG4gICAgbmV0d29ya01hZ2ljLFxyXG4gICAgc2NyaXB0SGFzaCxcclxuICAgIG9wZXJhdGlvbixcclxuICAgIGFyZ3MsXHJcbiAgICBhY2NvdW50XHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBOZW9uLmV4cGVyaW1lbnRhbC5TbWFydENvbnRyYWN0KFxyXG4gICAgICBOZW9uLnUuSGV4U3RyaW5nLmZyb21IZXgoc2NyaXB0SGFzaCksXHJcbiAgICAgIHtcclxuICAgICAgICBuZXR3b3JrTWFnaWMsXHJcbiAgICAgICAgcnBjQWRkcmVzcyxcclxuICAgICAgICBhY2NvdW50LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGxldCByZXN1bHQ7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5pbnZva2Uob3BlcmF0aW9uLCBhcmdzKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9O1xyXG5cclxuICBjb25zdCB7IGNvbm5lY3RlZCwgZ2V0TmV0d29ya3MsIGFkZHJlc3MsIGludm9rZSB9ID0gdXNlV2FsbGV0KCk7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IFt3YWxsZXROZXR3b3JrLCBzZXRXYWxsZXROZXR3b3JrXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW25lb2xpbmUsIHNldE5lb0xpbmVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbmVvbGluZU4zLCBzZXROZW9MaW5lM10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtibG9ja0hlaWdodCwgc2V0QmxvY2tIZWlnaHRdID0gdXNlU3RhdGUoXCI3ODExNVwiKTtcclxuICBjb25zdCBmZXRjaFdhbGxldE5ldHdvcmsgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXROZXR3b3JrcygpO1xyXG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICBzZXRXYWxsZXROZXR3b3JrKHJlc3VsdC5kYXRhPy5kZWZhdWx0TmV0d29yayB8fCBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW2dldE5ldHdvcmtzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgIC8vIGluaXREYXBpKCk7XHJcblxyXG4vLyBiYWxhbmNlcyBcclxuXHJcblxyXG5cclxuICAgIGlmIChjb25uZWN0ZWQpIHtcclxuICAgICAgZmV0Y2hXYWxsZXROZXR3b3JrKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCA9PiBcIiwgbmVvbGluZSk7XHJcblxyXG4gICAgICBpZiAobmVvbGluZSkge1xyXG4gICAgICAgIG5lb2xpbmUuZ2V0QWNjb3VudCgpLnRoZW4oKGFjY291bnQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBmb3VuZCBjb25uZXRlZCA9PiBcIiwgYWNjb3VudCk7XHJcblxyXG4gICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbmVvbGluZS5nZXRQdWJsaWNLZXkoKS50aGVuKChwdWJsaWNLZXlEYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGFkZHJlc3MsIHB1YmxpY0tleSB9ID0gcHVibGljS2V5RGF0YTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgYWRkcmVzczogXCIgKyBhZGRyZXNzKTtcclxuXHRcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBwdWJsaWMga2V5OiBcIiArIHB1YmxpY0tleSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFxyXG5cdFx0XHJcbiAgICAgIH1cclxuXHJcbiBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFdhbGxldE5ldHdvcmsobnVsbCk7XHJcbiAgICB9XHJcbiAgfSwgW2Nvbm5lY3RlZCwgZmV0Y2hXYWxsZXROZXR3b3JrXSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHdhbGxldE5ldHdvcmspO1xyXG5cclxuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFhZGRyZXNzIHx8ICFjb25uZWN0ZWQpIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xyXG4gICAgY29uc3QgYWNjb3VudCA9IHdhbGxldC5nZXRTY3JpcHRIYXNoRnJvbUFkZHJlc3MoYWRkcmVzcyk7XHJcbiAgICAvLyBDb25zdHJ1Y3QgdGhlIHJlcXVlc3QgYW5kIGludm9rZSBpdFxyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgaW52b2tlKHtcclxuICAgIC8vIFx0c2NyaXB0SGFzaDogJzB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YicsXHJcbiAgICAvLyBcdG9wZXJhdGlvbjogJ2dldE51bWJlcicsXHJcblxyXG4gICAgLy8gXHRzaWduZXJzOiBbXHJcbiAgICAvLyBcdFx0e1xyXG4gICAgLy8gXHRcdFx0YWNjb3VudDogd2FsbGV0LmdldFNjcmlwdEhhc2hGcm9tQWRkcmVzcyhhZGRyZXNzKSxcclxuICAgIC8vIFx0XHRcdC8vIEB0cy1pZ25vcmVcclxuICAgIC8vIFx0XHRcdHNjb3BlOiBXaXRuZXNzU2NvcGUuQ2FsbGVkQnlFbnRyeSxcclxuICAgIC8vIFx0XHR9LFxyXG4gICAgLy8gXHRdLFxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gLy8gT3B0aW9uYWw6IFdhaXQgZm9yIHRoZSB0cmFuc2FjdGlvbiB0byBiZSBjb25maXJtZWQgb25jaGFpblxyXG4gICAgLy8gaWYgKHJlc3VsdC5kYXRhPy50eElkKSB7XHJcbiAgICAvLyBcdGF3YWl0IHdhaXRUeCgnTkVUV09SS19SUENfQUREUkVTU19IRVJFJywgcmVzdWx0LmRhdGE/LnR4SWQpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IHJwY0FkZHJlc3MgPSBcImh0dHBzOi8vdGVzdG5ldDEubmVvLmNvei5pbzo0NDNcIjtcclxuICAgIGNvbnN0IG5ldHdvcmtNYWdpYyA9IDg3NzkzMzM5MDtcclxuICAgIGNvbnN0IHBhcmFtcyA9IFtcclxuICAgICAgc2MuQ29udHJhY3RQYXJhbS5oYXNoMTYwKFwiTlQ0UXRVWUxnaHZTdXVCMnlDUzZDZ1FrOU5mMW5rRGsycVwiKSxcclxuICAgICAgc2MuQ29udHJhY3RQYXJhbS5oYXNoMTYwKEJldHRpbmdNYW5hZ2VyQ29udHJhY3RIYXNoKSxcclxuICAgICAgMixcclxuICAgICAgeyBhbW91bnQ6IDEgfSxcclxuICAgIF07XHJcbiAgICBhd2FpdCBwdWJsaXNoSW52b2tlKFxyXG4gICAgICBycGNBZGRyZXNzLFxyXG4gICAgICBuZXR3b3JrTWFnaWMsXHJcbiAgICAgIE5lb0NvbnRyYWN0SGFzaCxcclxuICAgICAgXCJ0cmFuc2ZlclwiLFxyXG4gICAgICBbXVxyXG4gICAgKTtcclxuICB9LCBbYWRkcmVzcywgY29ubmVjdGVkLCBpbnZva2VdKTtcclxuXHJcbiAgY29uc3QgcGxhY2VCZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBycGNBZGRyZXNzID0gXCJodHRwczovL3Rlc3RuZXQxLm5lby5jb3ouaW86NDQzXCI7XHJcbiAgICBjb25zdCBuZXR3b3JrTWFnaWMgPSA4Nzc5MzMzOTA7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBbXHJcbiAgICAgIHNjLkNvbnRyYWN0UGFyYW0uaGFzaDE2MChcIk5UNFF0VVlMZ2h2U3V1QjJ5Q1M2Q2dRazlOZjFua0RrMnFcIiksXHJcbiAgICAgIHNjLkNvbnRyYWN0UGFyYW0uaGFzaDE2MChCZXR0aW5nTWFuYWdlckNvbnRyYWN0SGFzaCksXHJcbiAgICAgIDIsXHJcbiAgICAgIHsgYW1vdW50OiAxIH0sXHJcbiAgICBdO1xyXG4gICAgYXdhaXQgcHVibGlzaEludm9rZShcclxuICAgICAgcnBjQWRkcmVzcyxcclxuICAgICAgbmV0d29ya01hZ2ljLFxyXG4gICAgICBOZW9Db250cmFjdEhhc2gsXHJcbiAgICAgIFwidHJhbnNmZXJcIixcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICBhY2NvdW50XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBpbml0RGFwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gXHRjb25zdCBpbml0TjNEYXBpID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgLy8gXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiTkVPTGluZS5OMy5FVkVOVC5SRUFEWVwiLCAoKSA9PiB7XHJcbiAgICAvLyBcdFx0ICBzZXROZW9MaW5lMyhuZXcgTkVPTGluZTMuSW5pdCgpKTtcclxuICAgIC8vIFx0XHQgIGlmIChuZW9saW5lTjMpIHtcclxuICAgIC8vIFx0XHRcdHJlc29sdmUobmVvbGluZU4zKTtcclxuICAgIC8vIFx0XHQgIH0gZWxzZSB7XHJcbiAgICAvLyBcdFx0XHRyZWplY3QoXCJOMyBkQVBJIG1ldGhvZCBmYWlsZWQgdG8gbG9hZC5cIik7XHJcbiAgICAvLyBcdFx0ICB9XHJcbiAgICAvLyBcdFx0fSk7XHJcbiAgICAvLyBcdCAgfSk7XHJcbiAgICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiTkVPTGluZS5ORU8uRVZFTlQuUkVBRFlcIiwgKCkgPT4ge1xyXG4gICAgLy8gICAgIHNldE5lb0xpbmUobmV3IE5FT0xpbmUuSW5pdCgpKTtcclxuICAgIC8vICAgICBpZiAobmVvbGluZSkge1xyXG4gICAgLy8gICAgICAgcmVzb2x2ZShuZW9saW5lKTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgcmVqZWN0KFwiY29tbW9uIGRBUEkgbWV0aG9kIGZhaWxlZCB0byBsb2FkLlwiKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfSk7XHJcbiAgICBjb25zdCBpbml0TjNEYXBpID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIk5FT0xpbmUuTjMuRVZFTlQuUkVBRFlcIiwgKCkgPT4ge1xyXG4gICAgICAgIG5lb2xpbmVOMyA9IG5ldyBORU9MaW5lTjMuSW5pdCgpO1xyXG4gICAgICAgIGlmIChuZW9saW5lTjMpIHtcclxuICAgICAgICAgIHJlc29sdmUobmVvbGluZU4zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KFwiTjMgZEFQSSBtZXRob2QgZmFpbGVkIHRvIGxvYWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBpbml0Q29tbW9uRGFwaSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJORU9MaW5lLk5FTy5FVkVOVC5SRUFEWVwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0TmVvTGluZShuZXcgTkVPTGluZS5Jbml0KCkpO1xyXG4gICAgICAgIGlmIChuZW9saW5lKSB7XHJcbiAgICAgICAgICByZXNvbHZlKG5lb2xpbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QoXCJjb21tb24gZEFQSSBtZXRob2QgZmFpbGVkIHRvIGxvYWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcblx0aW5pdENvbW1vbkRhcGkgXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBjb21tb24gZEFQSSBtZXRob2QgaXMgbG9hZGVkLlwiKTtcclxuICAgICAgICByZXR1cm4gaW5pdE4zRGFwaTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIE4zIGRBUEkgbWV0aG9kIGlzIGxvYWRlZC5cIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvbWFpbi5jc3NcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgY29udGFpbmVyIG14LWF1dG8gcC0yIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgcHktNiBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL0xPR08ucG5nXCIgaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibGc6dGV4dC01eGwgbWQ6dGV4dC01eGwgdGV4dC13aGl0ZSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgIFBsYW5ldCBYXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzcGFjZS14LTYgbWQ6ZmxleFwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJnYW1lc1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1kYXJrR3JheWlzaEJsdWUgdGV4dC13aGl0ZSBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR2FtZXNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvcG9ydGZvbGlvLmh0bWxcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZGFya0dyYXlpc2hCbHVlIHRleHQtd2hpdGUgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFBvcnRmb2xpb1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGlkPVwibWVudS1idG5cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoYW1idXJnZXIgbWQ6aGlkZGVuIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLXRvcCBiZy13aGl0ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLW1pZGRsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJvdHRvbVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBpZD1cIm1lbnVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgaGlkZGVuIHNlbGYtZW5kIHB5LTggbXQtMTAgc3BhY2UteS02IGZvbnQtYm9sZCBiZy13aGl0ZSBzbTp3LWF1dG8gc206c2VsZi1jZW50ZXIgbGVmdC02IHJpZ2h0LTYgZHJvcC1zaGFkb3ctbWRcIlxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuXHJcbiAgICAgIDxzZWN0aW9uPjwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJoZXJvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbC1yZXZlcnNlIGl0ZW1zLWNlbnRlciBweC02IG14LWF1dG8gbXQtMTAgc3BhY2UteS0wIG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMiBmbGV4IGZsZXgtY29sIHNwYWNlLXktMTJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9MT0dPLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWQ6dy0xLzJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvcmlnaHRfaW1hZ2UucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD1cImZlYXR1cmVzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgbXgtYXV0byBtdC0yICBtZDpzcGFjZS15LTAgbWQ6ZmxleC1yb3cgbWlkZGxlXCI+XHJcbiAgICAgICAgICA8V2FsbGV0TXVsdGlCdXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0RDMjk4NFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJ0ZXN0aW1vbmlhbHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBweC01IG14LWF1dG8gbXQtMzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0yNCBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4tdy1mdWxsIFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkIHN1YnBpeGVsLWFudGlhbGlhc2VkIHB5LTQgdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgICAgICBUcmVuZGluZ1xyXG4gICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJib3JkZXItYiBiZy1bI0IyMjdDQV0gXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkICB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFJhbmtcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgR2FtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEdhbWUgTmFtZXNcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEYXRlL1RpbWVcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAyNCBob3Vyc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLVsjMTUxNzRBXSAgIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2NzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDUzpHTyAtIFBHTCBNYWpvciBBbnR3ZXJwXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgNDAwK1xyXG4gICAgICAgICAgICAgICAgICAgICAge2Nvbm5lY3RlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwbGFjZUJldH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhY2UgQmV0e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy91cC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG90YS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ1M6R08gLSBQR0wgTWFqb3IgQW50d2VycFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDQwMCtcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG93bi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZnJlZWZpcmUucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEZyZWUgRmlyZSAtIFdvcmxkIFNlcmllc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgT2N0IDE1LCAyMDIyIDQ6MDAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDUwK1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3duLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9ob25vci5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgS09HIC0gS1BMIFNwcmluZyBQbGF5b2Zmc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTm92IDA1LCAyMDIyIDI6MzAgQU1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDEwMCtcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2xlZ2VuZHMucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIExPTCAtIEVVIE1hc3RlcnMgU3ByaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMjUrXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1haW4ge1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyIGEge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGE6aG92ZXIsXHJcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXHJcbiAgICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlLFxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgbWFyZ2luOiA0cmVtIDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29kZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXHJcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBoMiB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53YWxsZXQtYnV0dG9ucyB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZ2FwOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsidXNlV2FsbGV0IiwiV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IiLCJXYWxsZXRNdWx0aUJ1dHRvbiIsInNjIiwid2FsbGV0IiwiSGVhZCIsIk5lb24iLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwiSW5kZXgiLCJOZW9Db250cmFjdEhhc2giLCJCZXR0aW5nTWFuYWdlckNvbnRyYWN0SGFzaCIsImluaXREYXAiLCJwdWJsaXNoSW52b2tlIiwicnBjQWRkcmVzcyIsIm5ldHdvcmtNYWdpYyIsInNjcmlwdEhhc2giLCJvcGVyYXRpb24iLCJhcmdzIiwiYWNjb3VudCIsImNvbnRyYWN0IiwiZXhwZXJpbWVudGFsIiwiU21hcnRDb250cmFjdCIsInUiLCJIZXhTdHJpbmciLCJmcm9tSGV4IiwiaW52b2tlIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNvbm5lY3RlZCIsImdldE5ldHdvcmtzIiwiYWRkcmVzcyIsInNldEFjY291bnQiLCJ3YWxsZXROZXR3b3JrIiwic2V0V2FsbGV0TmV0d29yayIsInN0YXRlIiwic2V0U3RhdGUiLCJuZW9saW5lIiwic2V0TmVvTGluZSIsIm5lb2xpbmVOMyIsInNldE5lb0xpbmUzIiwiYmxvY2tIZWlnaHQiLCJzZXRCbG9ja0hlaWdodCIsImZldGNoV2FsbGV0TmV0d29yayIsInN0YXR1cyIsImRhdGEiLCJkZWZhdWx0TmV0d29yayIsImVycm9yIiwiZ2V0QWNjb3VudCIsInRoZW4iLCJnZXRQdWJsaWNLZXkiLCJwdWJsaWNLZXlEYXRhIiwicHVibGljS2V5Iiwib25DbGljayIsImdldFNjcmlwdEhhc2hGcm9tQWRkcmVzcyIsInBhcmFtcyIsIkNvbnRyYWN0UGFyYW0iLCJoYXNoMTYwIiwiYW1vdW50IiwicGxhY2VCZXQiLCJpbml0TjNEYXBpIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiTkVPTGluZU4zIiwiSW5pdCIsImluaXRDb21tb25EYXBpIiwiTkVPTGluZSIsImVyciIsImJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=