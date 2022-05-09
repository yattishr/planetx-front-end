"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js");
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-base */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/index.js");
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react-ui */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/index.js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cityofzion/neon-js */ "./node_modules/@cityofzion/neon-js/dist/browser.js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Sebatane Raphela\\Music\\web3\\neo-blockchain-betx\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();













var Index = function Index() {
  _s();

  var NeoContractHash = "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5";
  var BettingManagerContractHash = "0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b"; // @ts-ignore

  var publishInvoke = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(rpcAddress, networkMagic, scriptHash, operation, args, account) {
      var contract, result;
      return C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              contract = new (_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_4___default().experimental.SmartContract)(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_4___default().u.HexString.fromHex(scriptHash), {
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

  var _useWallet = (0,_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__.useWallet)(),
      connected = _useWallet.connected,
      getNetworks = _useWallet.getNetworks,
      address = _useWallet.address,
      invoke = _useWallet.invoke; // @ts-ignore


  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(),
      account = _useState[0],
      setAccount = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),
      walletNetwork = _useState2[0],
      setWalletNetwork = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      state = _useState3[0],
      setState = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(),
      neoline = _useState4[0],
      setNeoLine = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(),
      neolineN3 = _useState5[0],
      setNeoLine3 = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("78115"),
      blockHeight = _useState6[0],
      setBlockHeight = _useState6[1];

  var fetchWalletNetwork = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)( /*#__PURE__*/(0,C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
    var result, _result$data;

    return C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
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
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    initDap(); // balances 

    if (connected) {
      fetchWalletNetwork();
      console.log("Account => ", neolineN3);

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
  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)( /*#__PURE__*/(0,C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
    var account, rpcAddress, networkMagic, params;
    return C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(!address || !connected)) {
              _context3.next = 2;
              break;
            }

            throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_9__.WalletNotConnectedError();

          case 2:
            account = _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_4__.wallet.getScriptHashFromAddress(address); // Construct the request and invoke it
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
            params = [_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_4__.sc.ContractParam.hash160("NT4QtUYLghvSuuB2yCS6CgQk9Nf1nkDk2q"), _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_4__.sc.ContractParam.hash160(BettingManagerContractHash), 2, {
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
    var _ref4 = (0,C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      var rpcAddress, networkMagic, params;
      return C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              rpcAddress = "https://testnet1.neo.coz.io:443";
              networkMagic = 877933390;
              params = [_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_4__.sc.ContractParam.hash160("NT4QtUYLghvSuuB2yCS6CgQk9Nf1nkDk2q"), _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_4__.sc.ContractParam.hash160(BettingManagerContractHash), 2, {
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
    var _ref5 = (0,C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
      var initN3Dapi, initCommonDapi;
      return C_Users_Sebatane_Raphela_Music_web3_neo_blockchain_betx_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
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
              initN3Dapi.then(function () {
                console.log("The common dAPI method is loaded.");
                return initCommonDapi;
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("nav", {
      className: "jsx-1648730631" + " " + "relative container mx-auto p-2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "pt-2 py-6 flex flex-row justify-between items-center ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
            src: "img/LOGO.png",
            height: "100",
            width: "100",
            alt: "",
            className: "jsx-1648730631"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h1", {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "hidden space-x-6 md:flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
            href: "games",
            className: "jsx-1648730631" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: "Games"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          id: "menu-btn",
          className: "jsx-1648730631" + " " + "block hamburger md:hidden focus:outline-none focus:text-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            className: "jsx-1648730631" + " " + "hamburger-top bg-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
            className: "jsx-1648730631" + " " + "hamburger-middle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("span", {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "md:hidden",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
      className: "jsx-1648730631"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
      id: "hero",
      className: "jsx-1648730631",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "jsx-1648730631" + " " + "md:w-1/2 flex flex-col space-y-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + " md:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
      id: "features",
      className: "jsx-1648730631",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "container  flex flex-col items-center justify-center px-6 mx-auto mt-2  md:space-y-0 md:flex-row middle",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_rentfuse_labs_neo_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__.WalletMultiButton, {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("section", {
      id: "testimonials",
      className: "jsx-1648730631",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "max-w-6xl px-5 mx-auto mt-32 text-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "flex flex-col mt-24 md:flex-row md:space-x-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "jsx-1648730631" + " " + "my-16 flex flex-col items-center justify-center min-w-full ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
              className: "jsx-1648730631" + " " + "text-5xl text-white font-bold subpixel-antialiased py-4 tracking-widest",
              children: "Trending"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("table", {
              className: "jsx-1648730631" + " " + "min-w-full border border-slate-800",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
                className: "jsx-1648730631" + " " + "border-b bg-[#B227CA] ",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
                  className: "jsx-1648730631",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold  text-white px-6 py-4 text-left",
                    children: "Rank"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 308,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold  text-white px-6 py-4 text-left",
                    children: "Game"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 314,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Game Names"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 320,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Date/Time"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 326,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
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
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
                className: "jsx-1648730631" + " " + "bg-[#15174A]   ",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
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
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
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
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 348,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 351,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: ["400+", connected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
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
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
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
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
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
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 370,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 373,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
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
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
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
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
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
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Free Fire - World Series"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 387,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Oct 15, 2022 4:00 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 390,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
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
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
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
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
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
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "KOG - KPL Spring Playoffs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 404,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Nov 05, 2022 2:30 AM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 407,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
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
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
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
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("img", {
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
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "LOL - EU Masters Spring"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 421,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 424,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1648730631",
      children: ".container.jsx-1648730631{padding:0 2rem;}.main.jsx-1648730631{min-height:100vh;padding:4rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-1648730631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;padding:2rem 0;border-top:1px solid #eaeaea;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-1648730631 a.jsx-1648730631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.title.jsx-1648730631 a.jsx-1648730631{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1648730631 a.jsx-1648730631:hover,.title.jsx-1648730631 a.jsx-1648730631:focus,.title.jsx-1648730631 a.jsx-1648730631:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-1648730631{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-1648730631,.description.jsx-1648730631{text-align:center;}.description.jsx-1648730631{margin:4rem 0;line-height:1.5;font-size:1.5rem;}.code.jsx-1648730631{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-1648730631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;}.card.jsx-1648730631{margin:1rem;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;max-width:300px;}.card.jsx-1648730631:hover,.card.jsx-1648730631:focus,.card.jsx-1648730631:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1648730631 h2.jsx-1648730631{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1648730631 p.jsx-1648730631{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-1648730631{height:1em;margin-left:0.5rem;}@media (max-width:600px){.grid.jsx-1648730631{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.wallet-buttons.jsx-1648730631{padding-top:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2ViYXRhbmUgUmFwaGVsYVxcTXVzaWNcXHdlYjNcXG5lby1ibG9ja2NoYWluLWJldHhcXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcWJrQixBQUcwQixBQUlFLEFBVUosQUFTQSxBQU9DLEFBT1ksQUFJakIsQUFPUyxBQUlKLEFBTUssQUFTTixBQVFELEFBY0UsQUFLSSxBQUtULEFBTUUsQUFNRSxBQU1JLFNBM0VBLEFBMERDLEVBTUMsQUFNSyxDQXBDVCxFQTdDTSxBQXNCTCxBQXFDSyxDQXpGdkIsRUFJaUIsQUFpSEYsQ0FyRWYsQUE4Q21CLENBcENDLE9BaEJILENBa0NDLEFBd0JBLEdBL0NDLEFBcURuQixFQXJHUyxHQXFGVCxBQUtBLEVBcENrQixJQWhCbEIsRUFrQ2dCLEFBd0JoQixJQS9DQSxNQU1tQixJQWtCSSxHQXpDdkIsSUFOQSxDQXpCZSxLQXdEdUQsSUFoRDdELEFBU2dCLEFBNENKLGVBNkNuQixFQU1zQixnQkF2R1AsQUFnRVUsZUEvREksVUFnRVYsT0F6RUcsWUFVQyxBQWdFOEIsZ0JBYjlCLEVBbURkLElBL0ZVLEtBZ0dyQixhQXpEQSwwQkF2RHlCLGlDQVVKLGFBZ0VILEdBekRKLEFBNENHLGFBY2pCLHFDQTFFcUIsT0E2REgsY0E1Q2xCLEVBNkNBLElBcERBLGtFQVRBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2ViYXRhbmUgUmFwaGVsYVxcTXVzaWNcXHdlYjNcXG5lby1ibG9ja2NoYWluLWJldHhcXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgd2FpdFR4LFxyXG4gIFdpdG5lc3NTY29wZSxcclxuICBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcixcclxufSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBXYWxsZXREaXNjb25uZWN0QnV0dG9uLFxyXG4gIFdhbGxldE11bHRpQnV0dG9uLFxyXG59IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcclxuaW1wb3J0IHsgbmVvbGluZU4zIH0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lXCI7XHJcbmltcG9ydCB7IHUsIHNjLCB3YWxsZXQgfSBmcm9tIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBOZW9uIGZyb20gXCJAY2l0eW9memlvbi9uZW9uLWpzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBuZW8zRGFwaSBmcm9tICduZW8zLWRhcGknO1xyXG5cclxuY29uc3QgSW5kZXg6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IE5lb0NvbnRyYWN0SGFzaCA9IFwiMHhlZjQwNzNhMGYyYjMwNWEzOGVjNDA1MGU0ZDNkMjhiYzQwZWE2M2Y1XCI7XHJcbiAgY29uc3QgQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2ggPVxyXG4gICAgXCIweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2JcIjtcclxuXHRcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgY29uc3QgcHVibGlzaEludm9rZSA9IGFzeW5jIChcclxuICAgIHJwY0FkZHJlc3MsXHJcbiAgICBuZXR3b3JrTWFnaWMsXHJcbiAgICBzY3JpcHRIYXNoLFxyXG4gICAgb3BlcmF0aW9uLFxyXG4gICAgYXJncyxcclxuICAgIGFjY291bnRcclxuICApID0+IHtcclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IE5lb24uZXhwZXJpbWVudGFsLlNtYXJ0Q29udHJhY3QoXHJcbiAgICAgIE5lb24udS5IZXhTdHJpbmcuZnJvbUhleChzY3JpcHRIYXNoKSxcclxuICAgICAge1xyXG4gICAgICAgIG5ldHdvcmtNYWdpYyxcclxuICAgICAgICBycGNBZGRyZXNzLFxyXG4gICAgICAgIGFjY291bnQsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0Lmludm9rZShvcGVyYXRpb24sIGFyZ3MpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgY29ubmVjdGVkLCBnZXROZXR3b3JrcywgYWRkcmVzcywgaW52b2tlIH0gPSB1c2VXYWxsZXQoKTtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW3dhbGxldE5ldHdvcmssIHNldFdhbGxldE5ldHdvcmtdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbmVvbGluZSwgc2V0TmVvTGluZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtuZW9saW5lTjMsIHNldE5lb0xpbmUzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Jsb2NrSGVpZ2h0LCBzZXRCbG9ja0hlaWdodF0gPSB1c2VTdGF0ZShcIjc4MTE1XCIpO1xyXG4gIGNvbnN0IGZldGNoV2FsbGV0TmV0d29yayA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldE5ldHdvcmtzKCk7XHJcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHNldFdhbGxldE5ldHdvcmsocmVzdWx0LmRhdGE/LmRlZmF1bHROZXR3b3JrIHx8IG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9LCBbZ2V0TmV0d29ya3NdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXREYXAoKTtcclxuXHJcbi8vIGJhbGFuY2VzIFxyXG5cclxuXHJcblxyXG4gICAgaWYgKGNvbm5lY3RlZCkge1xyXG4gICAgICBmZXRjaFdhbGxldE5ldHdvcmsoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50ID0+IFwiLCBuZW9saW5lTjMpO1xyXG5cclxuICAgICAgaWYgKG5lb2xpbmUpIHtcclxuICAgICAgICBuZW9saW5lLmdldEFjY291bnQoKS50aGVuKChhY2NvdW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgZm91bmQgY29ubmV0ZWQgPT4gXCIsIGFjY291bnQpO1xyXG5cclxuICAgICAgICAgIHNldEFjY291bnQoYWNjb3VudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG5lb2xpbmUuZ2V0UHVibGljS2V5KCkudGhlbigocHVibGljS2V5RGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBhZGRyZXNzLCBwdWJsaWNLZXkgfSA9IHB1YmxpY0tleURhdGE7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJBY2NvdW50IGFkZHJlc3M6IFwiICsgYWRkcmVzcyk7XHJcblx0XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgcHVibGljIGtleTogXCIgKyBwdWJsaWNLZXkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHRcclxuXHRcdFxyXG4gICAgICB9XHJcblxyXG4gXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRXYWxsZXROZXR3b3JrKG51bGwpO1xyXG4gICAgfVxyXG4gIH0sIFtjb25uZWN0ZWQsIGZldGNoV2FsbGV0TmV0d29ya10pO1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIWFkZHJlc3MgfHwgIWNvbm5lY3RlZCkgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XHJcbiAgICBjb25zdCBhY2NvdW50ID0gd2FsbGV0LmdldFNjcmlwdEhhc2hGcm9tQWRkcmVzcyhhZGRyZXNzKTtcclxuICAgIC8vIENvbnN0cnVjdCB0aGUgcmVxdWVzdCBhbmQgaW52b2tlIGl0XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBpbnZva2Uoe1xyXG4gICAgLy8gXHRzY3JpcHRIYXNoOiAnMHg3YTA2ZTQwY2QwOGMwYTg4NzdjMmQ2ZDBhNDk3NGY3ZGJlOWIyYjdiJyxcclxuICAgIC8vIFx0b3BlcmF0aW9uOiAnZ2V0TnVtYmVyJyxcclxuXHJcbiAgICAvLyBcdHNpZ25lcnM6IFtcclxuICAgIC8vIFx0XHR7XHJcbiAgICAvLyBcdFx0XHRhY2NvdW50OiB3YWxsZXQuZ2V0U2NyaXB0SGFzaEZyb21BZGRyZXNzKGFkZHJlc3MpLFxyXG4gICAgLy8gXHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG4gICAgLy8gXHRcdFx0c2NvcGU6IFdpdG5lc3NTY29wZS5DYWxsZWRCeUVudHJ5LFxyXG4gICAgLy8gXHRcdH0sXHJcbiAgICAvLyBcdF0sXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyAvLyBPcHRpb25hbDogV2FpdCBmb3IgdGhlIHRyYW5zYWN0aW9uIHRvIGJlIGNvbmZpcm1lZCBvbmNoYWluXHJcbiAgICAvLyBpZiAocmVzdWx0LmRhdGE/LnR4SWQpIHtcclxuICAgIC8vIFx0YXdhaXQgd2FpdFR4KCdORVRXT1JLX1JQQ19BRERSRVNTX0hFUkUnLCByZXN1bHQuZGF0YT8udHhJZCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgcnBjQWRkcmVzcyA9IFwiaHR0cHM6Ly90ZXN0bmV0MS5uZW8uY296LmlvOjQ0M1wiO1xyXG4gICAgY29uc3QgbmV0d29ya01hZ2ljID0gODc3OTMzMzkwO1xyXG4gICAgY29uc3QgcGFyYW1zID0gW1xyXG4gICAgICBzYy5Db250cmFjdFBhcmFtLmhhc2gxNjAoXCJOVDRRdFVZTGdodlN1dUIyeUNTNkNnUWs5TmYxbmtEazJxXCIpLFxyXG4gICAgICBzYy5Db250cmFjdFBhcmFtLmhhc2gxNjAoQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2gpLFxyXG4gICAgICAyLFxyXG4gICAgICB7IGFtb3VudDogMSB9LFxyXG4gICAgXTtcclxuICAgIGF3YWl0IHB1Ymxpc2hJbnZva2UoXHJcbiAgICAgIHJwY0FkZHJlc3MsXHJcbiAgICAgIG5ldHdvcmtNYWdpYyxcclxuICAgICAgTmVvQ29udHJhY3RIYXNoLFxyXG4gICAgICBcInRyYW5zZmVyXCIsXHJcbiAgICAgIFtdXHJcbiAgICApO1xyXG4gIH0sIFthZGRyZXNzLCBjb25uZWN0ZWQsIGludm9rZV0pO1xyXG5cclxuICBjb25zdCBwbGFjZUJldCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJwY0FkZHJlc3MgPSBcImh0dHBzOi8vdGVzdG5ldDEubmVvLmNvei5pbzo0NDNcIjtcclxuICAgIGNvbnN0IG5ldHdvcmtNYWdpYyA9IDg3NzkzMzM5MDtcclxuICAgIGNvbnN0IHBhcmFtcyA9IFtcclxuICAgICAgc2MuQ29udHJhY3RQYXJhbS5oYXNoMTYwKFwiTlQ0UXRVWUxnaHZTdXVCMnlDUzZDZ1FrOU5mMW5rRGsycVwiKSxcclxuICAgICAgc2MuQ29udHJhY3RQYXJhbS5oYXNoMTYwKEJldHRpbmdNYW5hZ2VyQ29udHJhY3RIYXNoKSxcclxuICAgICAgMixcclxuICAgICAgeyBhbW91bnQ6IDEgfSxcclxuICAgIF07XHJcbiAgICBhd2FpdCBwdWJsaXNoSW52b2tlKFxyXG4gICAgICBycGNBZGRyZXNzLFxyXG4gICAgICBuZXR3b3JrTWFnaWMsXHJcbiAgICAgIE5lb0NvbnRyYWN0SGFzaCxcclxuICAgICAgXCJ0cmFuc2ZlclwiLFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgIGFjY291bnRcclxuICAgICk7XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGluaXREYXAgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBcdGNvbnN0IGluaXROM0RhcGkgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAvLyBcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJORU9MaW5lLk4zLkVWRU5ULlJFQURZXCIsICgpID0+IHtcclxuICAgIC8vIFx0XHQgIHNldE5lb0xpbmUzKG5ldyBORU9MaW5lMy5Jbml0KCkpO1xyXG4gICAgLy8gXHRcdCAgaWYgKG5lb2xpbmVOMykge1xyXG4gICAgLy8gXHRcdFx0cmVzb2x2ZShuZW9saW5lTjMpO1xyXG4gICAgLy8gXHRcdCAgfSBlbHNlIHtcclxuICAgIC8vIFx0XHRcdHJlamVjdChcIk4zIGRBUEkgbWV0aG9kIGZhaWxlZCB0byBsb2FkLlwiKTtcclxuICAgIC8vIFx0XHQgIH1cclxuICAgIC8vIFx0XHR9KTtcclxuICAgIC8vIFx0ICB9KTtcclxuICAgIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJORU9MaW5lLk5FTy5FVkVOVC5SRUFEWVwiLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0TmVvTGluZShuZXcgTkVPTGluZS5Jbml0KCkpO1xyXG4gICAgLy8gICAgIGlmIChuZW9saW5lKSB7XHJcbiAgICAvLyAgICAgICByZXNvbHZlKG5lb2xpbmUpO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICByZWplY3QoXCJjb21tb24gZEFQSSBtZXRob2QgZmFpbGVkIHRvIGxvYWQuXCIpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9KTtcclxuICAgIGNvbnN0IGluaXROM0RhcGkgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiTkVPTGluZS5OMy5FVkVOVC5SRUFEWVwiLCAoKSA9PiB7XHJcblx0XHRzZXROZW9MaW5lMyhuZXcgTkVPTGluZU4zLkluaXQoKSk7XHJcbiAgICAgICAgaWYgKG5lb2xpbmVOMykge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZW9saW5lTjMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QoXCJOMyBkQVBJIG1ldGhvZCBmYWlsZWQgdG8gbG9hZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGluaXRDb21tb25EYXBpID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIk5FT0xpbmUuTkVPLkVWRU5ULlJFQURZXCIsICgpID0+IHtcclxuICAgICAgICBzZXROZW9MaW5lKG5ldyBORU9MaW5lLkluaXQoKSk7XHJcbiAgICAgICAgaWYgKG5lb2xpbmUpIHtcclxuICAgICAgICAgIHJlc29sdmUobmVvbGluZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChcImNvbW1vbiBkQVBJIG1ldGhvZCBmYWlsZWQgdG8gbG9hZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuXHRpbml0TjNEYXBpIFxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgY29tbW9uIGRBUEkgbWV0aG9kIGlzIGxvYWRlZC5cIik7XHJcbiAgICAgICAgcmV0dXJuIGluaXRDb21tb25EYXBpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgTjMgZEFQSSBtZXRob2QgaXMgbG9hZGVkLlwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9tYWluLmNzc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjb250YWluZXIgbXgtYXV0byBwLTIgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBweS02IGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvTE9HTy5wbmdcIiBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsZzp0ZXh0LTV4bCBtZDp0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgUGxhbmV0IFhcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNwYWNlLXgtNiBtZDpmbGV4XCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cImdhbWVzXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWRhcmtHcmF5aXNoQmx1ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBHYW1lc1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9wb3J0Zm9saW8uaHRtbFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1kYXJrR3JheWlzaEJsdWUgdGV4dC13aGl0ZSBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUG9ydGZvbGlvXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgaWQ9XCJtZW51LWJ0blwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGhhbWJ1cmdlciBtZDpoaWRkZW4gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItdG9wIGJnLXdoaXRlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItbWlkZGxlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm90dG9tXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPVwibWVudVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoaWRkZW4gc2VsZi1lbmQgcHktOCBtdC0xMCBzcGFjZS15LTYgZm9udC1ib2xkIGJnLXdoaXRlIHNtOnctYXV0byBzbTpzZWxmLWNlbnRlciBsZWZ0LTYgcmlnaHQtNiBkcm9wLXNoYWRvdy1tZFwiXHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPHNlY3Rpb24+PC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cImhlcm9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtY29sLXJldmVyc2UgaXRlbXMtY2VudGVyIHB4LTYgbXgtYXV0byBtdC0xMCBzcGFjZS15LTAgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMS8yIGZsZXggZmxleC1jb2wgc3BhY2UteS0xMlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL0xPR08ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtZDp3LTEvMlwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImltZy9yaWdodF9pbWFnZS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiZmVhdHVyZXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBteC1hdXRvIG10LTIgIG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvdyBtaWRkbGVcIj5cclxuICAgICAgICAgIDxXYWxsZXRNdWx0aUJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjREMyOTg0XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIHB4LTUgbXgtYXV0byBtdC0zMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LTI0IG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTE2IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi13LWZ1bGwgXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC13aGl0ZSBmb250LWJvbGQgc3VicGl4ZWwtYW50aWFsaWFzZWQgcHktNCB0cmFja2luZy13aWRlc3RcIj5cclxuICAgICAgICAgICAgICAgIFRyZW5kaW5nXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJvcmRlci1iIGJnLVsjQjIyN0NBXSBcIj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUmFua1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCAgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBHYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgR2FtZSBOYW1lc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIERhdGUvVGltZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDI0IGhvdXJzXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYmctWyMxNTE3NEFdICAgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy91cC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvY3MucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENTOkdPIC0gUEdMIE1ham9yIEFudHdlcnBcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNlcCAyMiwgMjAyMiA0OjMwIFBNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA0MDArXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29ubmVjdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3BsYWNlQmV0fSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBQbGFjZSBCZXR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3RhLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDUzpHTyAtIFBHTCBNYWpvciBBbnR3ZXJwXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgNDAwK1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3duLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9mcmVlZmlyZS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRnJlZSBGaXJlIC0gV29ybGQgU2VyaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBPY3QgMTUsIDIwMjIgNDowMCBQTVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgNTArXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Rvd24ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2hvbm9yLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBLT0cgLSBLUEwgU3ByaW5nIFBsYXlvZmZzXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBOb3YgMDUsIDIwMjIgMjozMCBBTVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMTAwK1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy91cC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvbGVnZW5kcy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTE9MIC0gRVUgTWFzdGVycyBTcHJpbmdcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNlcCAyMiwgMjAyMiA0OjMwIFBNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAyNStcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWFpbiB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIHBhZGRpbmc6IDRyZW0gMDtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXIgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYTpob3ZlcixcclxuICAgICAgICAudGl0bGUgYTpmb2N1cyxcclxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUsXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBtYXJnaW46IDRyZW0gMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2RlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcclxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkOmhvdmVyLFxyXG4gICAgICAgIC5jYXJkOmZvY3VzLFxyXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIGgyIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndhbGxldC1idXR0b25zIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBnYXA6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Sebatane Raphela\\\\Music\\\\web3\\\\neo-blockchain-betx\\\\pages\\\\index.tsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true);
};

_s(Index, "pDW9OBZsY8E8Y5ZA+ay8ccuuK5w=", false, function () {
  return [_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__.useWallet];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjYxYmQ5M2M5ZWJmNDJkNDEwOTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFLQTtBQUtBO0FBRUE7QUFFQTtBQUNBOzs7O0FBR0EsSUFBTVUsS0FBZSxHQUFHLFNBQWxCQSxLQUFrQixHQUFNO0FBQUE7O0FBQzVCLE1BQU1DLGVBQWUsR0FBRyw0Q0FBeEI7QUFDQSxNQUFNQywwQkFBMEIsR0FDOUIsNENBREYsQ0FGNEIsQ0FLNUI7O0FBQ0EsTUFBTUMsYUFBYTtBQUFBLGlVQUFHLGlCQUNwQkMsVUFEb0IsRUFFcEJDLFlBRm9CLEVBR3BCQyxVQUhvQixFQUlwQkMsU0FKb0IsRUFLcEJDLElBTG9CLEVBTXBCQyxPQU5vQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRZEMsY0FBQUEsUUFSYyxHQVFILElBQUlkLHVGQUFKLENBQ2ZBLDhFQUFBLENBQXlCVSxVQUF6QixDQURlLEVBRWY7QUFDRUQsZ0JBQUFBLFlBQVksRUFBWkEsWUFERjtBQUVFRCxnQkFBQUEsVUFBVSxFQUFWQSxVQUZGO0FBR0VLLGdCQUFBQSxPQUFPLEVBQVBBO0FBSEYsZUFGZSxDQVJHO0FBQUE7QUFBQTtBQUFBLHFCQW1CSEMsUUFBUSxDQUFDTSxNQUFULENBQWdCVCxTQUFoQixFQUEyQkMsSUFBM0IsQ0FuQkc7O0FBQUE7QUFtQmxCUyxjQUFBQSxNQW5Ca0I7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXFCbEJDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUjs7QUFyQmtCO0FBQUEsK0NBd0JiRixNQXhCYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFiZCxhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5COztBQTJCQSxtQkFBb0RiLGtGQUFTLEVBQTdEO0FBQUEsTUFBUThCLFNBQVIsY0FBUUEsU0FBUjtBQUFBLE1BQW1CQyxXQUFuQixjQUFtQkEsV0FBbkI7QUFBQSxNQUFnQ0MsT0FBaEMsY0FBZ0NBLE9BQWhDO0FBQUEsTUFBeUNOLE1BQXpDLGNBQXlDQSxNQUF6QyxDQWpDNEIsQ0FrQzVCOzs7QUFDQSxrQkFBOEJuQiwrQ0FBUSxFQUF0QztBQUFBLE1BQU9ZLE9BQVA7QUFBQSxNQUFnQmMsVUFBaEI7O0FBRUEsbUJBQTBDMUIsK0NBQVEsQ0FBZ0IsSUFBaEIsQ0FBbEQ7QUFBQSxNQUFPMkIsYUFBUDtBQUFBLE1BQXNCQyxnQkFBdEI7O0FBQ0EsbUJBQTBCNUIsK0NBQVEsQ0FBQyxDQUFELENBQWxDO0FBQUEsTUFBTzZCLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUE4QjlCLCtDQUFRLEVBQXRDO0FBQUEsTUFBTytCLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQWlDaEMsK0NBQVEsRUFBekM7QUFBQSxNQUFPaUMsU0FBUDtBQUFBLE1BQWtCQyxXQUFsQjs7QUFDQSxtQkFBc0NsQywrQ0FBUSxDQUFDLE9BQUQsQ0FBOUM7QUFBQSxNQUFPbUMsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR3BDLGtEQUFXLGlVQUFDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRWR1QixXQUFXLEVBRkc7O0FBQUE7QUFFN0JKLFlBQUFBLE1BRjZCOztBQUduQyxnQkFBSUEsTUFBTSxDQUFDa0IsTUFBUCxLQUFrQixTQUF0QixFQUFpQztBQUMvQlYsY0FBQUEsZ0JBQWdCLENBQUMsaUJBQUFSLE1BQU0sQ0FBQ21CLElBQVAsOERBQWFDLGNBQWIsS0FBK0IsSUFBaEMsQ0FBaEI7QUFDRDs7QUFMa0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFPbkNuQixZQUFBQSxPQUFPLENBQUNvQixLQUFSOztBQVBtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBU25DLENBQUNqQixXQUFELENBVG1DLENBQXRDO0FBV0F0QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZHdDLElBQUFBLE9BQU8sR0FETyxDQUdsQjs7QUFJSSxRQUFJbkIsU0FBSixFQUFlO0FBQ2JjLE1BQUFBLGtCQUFrQjtBQUNsQmhCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJXLFNBQTNCOztBQUVBLFVBQUlGLE9BQUosRUFBYTtBQUNYQSxRQUFBQSxPQUFPLENBQUNZLFVBQVIsR0FBcUJDLElBQXJCLENBQTBCLFVBQUNoQyxPQUFELEVBQWE7QUFDckNTLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaLEVBQTBDVixPQUExQztBQUVBYyxVQUFBQSxVQUFVLENBQUNkLE9BQUQsQ0FBVjtBQUNELFNBSkQ7QUFNQW1CLFFBQUFBLE9BQU8sQ0FBQ2MsWUFBUixHQUF1QkQsSUFBdkIsQ0FBNEIsVUFBQ0UsYUFBRCxFQUFtQjtBQUM3QyxjQUFRckIsT0FBUixHQUErQnFCLGFBQS9CLENBQVFyQixPQUFSO0FBQUEsY0FBaUJzQixTQUFqQixHQUErQkQsYUFBL0IsQ0FBaUJDLFNBQWpCO0FBRUExQixVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBc0JHLE9BQWxDO0FBRUFKLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUF5QnlCLFNBQXJDO0FBQ0QsU0FORDtBQVVEO0FBR0YsS0F4QkQsTUF3Qk87QUFDTG5CLE1BQUFBLGdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFDRDtBQUNGLEdBbENRLEVBa0NOLENBQUNMLFNBQUQsRUFBWWMsa0JBQVosQ0FsQ00sQ0FBVDtBQXNDQSxNQUFNVyxPQUFPLEdBQUcvQyxrREFBVyxpVUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDdEIsQ0FBQ3dCLE9BQUQsSUFBWSxDQUFDRixTQURTO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQUNRLElBQUk3QiwyRkFBSixFQURSOztBQUFBO0FBRXBCa0IsWUFBQUEsT0FGb0IsR0FFVmYsZ0ZBQUEsQ0FBZ0M0QixPQUFoQyxDQUZVLEVBRzFCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVNbEIsWUFBQUEsVUF0Qm9CLEdBc0JQLGlDQXRCTztBQXVCcEJDLFlBQUFBLFlBdkJvQixHQXVCTCxTQXZCSztBQXdCcEIwQyxZQUFBQSxNQXhCb0IsR0F3QlgsQ0FDYnRELHlFQUFBLENBQXlCLG9DQUF6QixDQURhLEVBRWJBLHlFQUFBLENBQXlCUywwQkFBekIsQ0FGYSxFQUdiLENBSGEsRUFJYjtBQUFFZ0QsY0FBQUEsTUFBTSxFQUFFO0FBQVYsYUFKYSxDQXhCVztBQUFBO0FBQUEsbUJBOEJwQi9DLGFBQWEsQ0FDakJDLFVBRGlCLEVBRWpCQyxZQUZpQixFQUdqQkosZUFIaUIsRUFJakIsVUFKaUIsRUFLakIsRUFMaUIsQ0E5Qk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQXFDeEIsQ0FBQ3FCLE9BQUQsRUFBVUYsU0FBVixFQUFxQkosTUFBckIsQ0FyQ3dCLENBQTNCOztBQXVDQSxNQUFNbUMsUUFBUTtBQUFBLGtVQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUL0MsY0FBQUEsVUFEUyxHQUNJLGlDQURKO0FBRVRDLGNBQUFBLFlBRlMsR0FFTSxTQUZOO0FBR1QwQyxjQUFBQSxNQUhTLEdBR0EsQ0FDYnRELHlFQUFBLENBQXlCLG9DQUF6QixDQURhLEVBRWJBLHlFQUFBLENBQXlCUywwQkFBekIsQ0FGYSxFQUdiLENBSGEsRUFJYjtBQUFFZ0QsZ0JBQUFBLE1BQU0sRUFBRTtBQUFWLGVBSmEsQ0FIQTtBQUFBO0FBQUEscUJBU1QvQyxhQUFhLENBQ2pCQyxVQURpQixFQUVqQkMsWUFGaUIsRUFHakJKLGVBSGlCLEVBSWpCLFVBSmlCLEVBS2pCOEMsTUFMaUIsRUFNakJ0QyxPQU5pQixDQVRKOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVIwQyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBb0JBLE1BQU1aLE9BQU87QUFBQSxrVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNNYSxjQUFBQSxVQXBCUSxHQW9CSyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ2xEQyxnQkFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3Qix3QkFBeEIsRUFBa0QsWUFBTTtBQUM1RDFCLGtCQUFBQSxXQUFXLENBQUMsSUFBSTJCLFNBQVMsQ0FBQ0MsSUFBZCxFQUFELENBQVg7O0FBQ00sc0JBQUk3QixTQUFKLEVBQWU7QUFDYndCLG9CQUFBQSxPQUFPLENBQUN4QixTQUFELENBQVA7QUFDRCxtQkFGRCxNQUVPO0FBQ0x5QixvQkFBQUEsTUFBTSxDQUFDLGdDQUFELENBQU47QUFDRDtBQUNGLGlCQVBEO0FBUUQsZUFUa0IsQ0FwQkw7QUErQlJLLGNBQUFBLGNBL0JRLEdBK0JTLElBQUlQLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdERDLGdCQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLHlCQUF4QixFQUFtRCxZQUFNO0FBQ3ZENUIsa0JBQUFBLFVBQVUsQ0FBQyxJQUFJZ0MsT0FBTyxDQUFDRixJQUFaLEVBQUQsQ0FBVjs7QUFDQSxzQkFBSS9CLE9BQUosRUFBYTtBQUNYMEIsb0JBQUFBLE9BQU8sQ0FBQzFCLE9BQUQsQ0FBUDtBQUNELG1CQUZELE1BRU87QUFDTDJCLG9CQUFBQSxNQUFNLENBQUMsb0NBQUQsQ0FBTjtBQUNEO0FBQ0YsaUJBUEQ7QUFRRCxlQVRzQixDQS9CVDtBQTBDakJILGNBQUFBLFVBQVUsQ0FDSlgsSUFETixDQUNXLFlBQU07QUFDVnZCLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWjtBQUNBLHVCQUFPeUMsY0FBUDtBQUNELGVBSk4sRUFLTW5CLElBTE4sQ0FLVyxZQUFNO0FBQ1Z2QixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksK0JBQVo7QUFDRCxlQVBOLFdBUVksVUFBQzJDLEdBQUQsRUFBUztBQUNkNUMsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMkMsR0FBWjtBQUNELGVBVk47O0FBMUNpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQdkIsT0FBTztBQUFBO0FBQUE7QUFBQSxLQUFiOztBQXVEQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUMsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFBLDBDQUFlLGlDQUFmO0FBQUEsOEJBQ0U7QUFBQSw0Q0FBZSxtQ0FBZjtBQUFBLGdDQUNFO0FBQUEsOENBQWUsdURBQWY7QUFBQSxrQ0FDRTtBQUFLLGVBQUcsRUFBQyxjQUFUO0FBQXdCLGtCQUFNLEVBQUMsS0FBL0I7QUFBcUMsaUJBQUssRUFBQyxLQUEzQztBQUFpRCxlQUFHLEVBQUMsRUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBLGdEQUFjLGdEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFO0FBQUEsOENBQWUsMEJBQWY7QUFBQSxrQ0FDRTtBQUNFLGdCQUFJLEVBQUMsT0FEUDtBQUFBLGdEQUVZLGlEQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0U7QUFDRSxnQkFBSSxFQUFDLGlCQURQO0FBQUEsZ0RBRVksaURBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBdUJFO0FBQ0UsWUFBRSxFQUFDLFVBREw7QUFBQSw4Q0FFWSwrREFGWjtBQUFBLGtDQUlFO0FBQUEsZ0RBQWdCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRTtBQUFBLGdEQUFnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBTUU7QUFBQSxnREFBZ0I7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBa0NFO0FBQUEsNENBQWUsV0FBZjtBQUFBLCtCQUNFO0FBQ0UsWUFBRSxFQUFDLE1BREw7QUFBQSw4Q0FFWTtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBOENFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUNGLGVBK0NFO0FBQVMsUUFBRSxFQUFDLE1BQVo7QUFBQTtBQUFBLDZCQUNFO0FBQUEsNENBQWUsb0dBQWY7QUFBQSxnQ0FDRTtBQUFBLDhDQUFlLEVBQWY7QUFBQSxpQ0FDRTtBQUFBLGdEQUFlLG1DQUFmO0FBQUEsbUNBQ0U7QUFBSyxpQkFBRyxFQUFDLGNBQVQ7QUFBd0IsaUJBQUcsRUFBQyxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBQSw4Q0FBZSxXQUFmO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMscUJBQVQ7QUFBK0IsZUFBRyxFQUFDLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0NGLGVBNkRFO0FBQVMsUUFBRSxFQUFDLFVBQVo7QUFBQTtBQUFBLDZCQUNFO0FBQUEsNENBQWUseUdBQWY7QUFBQSwrQkFDRSw4REFBQyx5RkFBRDtBQUNFLGVBQUssRUFBRTtBQUNMd0IsWUFBQUEsZUFBZSxFQUFFO0FBRFo7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3REYsZUF1RUU7QUFBUyxRQUFFLEVBQUMsY0FBWjtBQUFBO0FBQUEsNkJBQ0U7QUFBQSw0Q0FBZSwwQ0FBZjtBQUFBLCtCQUNFO0FBQUEsOENBQWUsOENBQWY7QUFBQSxpQ0FDRTtBQUFBLGdEQUFlLDZEQUFmO0FBQUEsb0NBQ0U7QUFBQSxrREFBYSx5RUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUtFO0FBQUEsa0RBQWlCLG9DQUFqQjtBQUFBLHNDQUNFO0FBQUEsb0RBQWlCLHdCQUFqQjtBQUFBLHVDQUNFO0FBQUE7QUFBQSwwQ0FDRTtBQUNFLHlCQUFLLEVBQUMsS0FEUjtBQUFBLHdEQUVZLG1EQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBT0U7QUFDRSx5QkFBSyxFQUFDLEtBRFI7QUFBQSx3REFFWSxtREFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRixlQWFFO0FBQ0UseUJBQUssRUFBQyxLQURSO0FBQUEsd0RBRVksa0RBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBYkYsZUFtQkU7QUFDRSx5QkFBSyxFQUFDLEtBRFI7QUFBQSx3REFFWSxrREFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFuQkYsZUF5QkU7QUFDRSx5QkFBSyxFQUFDLEtBRFI7QUFBQSx3REFFWSxrREFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQW1DRTtBQUFBLG9EQUFpQixpQkFBakI7QUFBQSx3Q0FDRTtBQUFBLHNEQUFjLFVBQWQ7QUFBQSwwQ0FDRTtBQUFBLHdEQUFjLDREQUFkO0FBQUEsMkNBQ0U7QUFBSyx5QkFBRyxFQUFDLFlBQVQ7QUFBc0IseUJBQUcsRUFBQyxFQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFJRTtBQUFBLHdEQUFjLDJEQUFkO0FBQUEsMkNBQ0U7QUFBSyx5QkFBRyxFQUFDLFlBQVQ7QUFBc0IseUJBQUcsRUFBQyxFQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSkYsZUFPRTtBQUFBLHdEQUFjLDJEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBGLGVBVUU7QUFBQSx3REFBYywyREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFWRixlQWFFO0FBQUEsd0RBQWMsMkRBQWQ7QUFBQSx1Q0FFRzNDLFNBQVMsZ0JBQ1I7QUFBUSw2QkFBTyxFQUFFK0IsUUFBakI7QUFBQSwwREFBcUMsaUJBQXJDO0FBQUEsOENBQ1ksR0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRFEsR0FJTixJQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUF1QkU7QUFBQSxzREFBYyxVQUFkO0FBQUEsMENBQ0U7QUFBQSx3REFBYyw0REFBZDtBQUFBLDJDQUNFO0FBQUsseUJBQUcsRUFBQyxZQUFUO0FBQXNCLHlCQUFHLEVBQUMsRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBSUU7QUFBQSx3REFBYywyREFBZDtBQUFBLDJDQUNFO0FBQUsseUJBQUcsRUFBQyxjQUFUO0FBQXdCLHlCQUFHLEVBQUMsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpGLGVBT0U7QUFBQSx3REFBYywyREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRixlQVVFO0FBQUEsd0RBQWMsMkRBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBVkYsZUFhRTtBQUFBLHdEQUFjLDJEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF2QkYsZUF3Q0U7QUFBQSxzREFBYyxVQUFkO0FBQUEsMENBQ0U7QUFBQSx3REFBYyw0REFBZDtBQUFBLDJDQUNFO0FBQUsseUJBQUcsRUFBQyxjQUFUO0FBQXdCLHlCQUFHLEVBQUMsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBSUU7QUFBQSx3REFBYywyREFBZDtBQUFBLDJDQUNFO0FBQUsseUJBQUcsRUFBQyxrQkFBVDtBQUE0Qix5QkFBRyxFQUFDLEVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKRixlQU9FO0FBQUEsd0RBQWMsMkRBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUEYsZUFVRTtBQUFBLHdEQUFjLDJEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVZGLGVBYUU7QUFBQSx3REFBYywyREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBeENGLGVBeURFO0FBQUEsc0RBQWMsVUFBZDtBQUFBLDBDQUNFO0FBQUEsd0RBQWMsNERBQWQ7QUFBQSwyQ0FDRTtBQUFLLHlCQUFHLEVBQUMsY0FBVDtBQUF3Qix5QkFBRyxFQUFDLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUlFO0FBQUEsd0RBQWMsMkRBQWQ7QUFBQSwyQ0FDRTtBQUFLLHlCQUFHLEVBQUMsZUFBVDtBQUF5Qix5QkFBRyxFQUFDLEVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKRixlQU9FO0FBQUEsd0RBQWMsMkRBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUEYsZUFVRTtBQUFBLHdEQUFjLDJEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVZGLGVBYUU7QUFBQSx3REFBYywyREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBekRGLGVBMEVFO0FBQUEsc0RBQWMsVUFBZDtBQUFBLDBDQUNFO0FBQUEsd0RBQWMsNERBQWQ7QUFBQSwyQ0FDRTtBQUFLLHlCQUFHLEVBQUMsWUFBVDtBQUFzQix5QkFBRyxFQUFDLEVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUlFO0FBQUEsd0RBQWMsMkRBQWQ7QUFBQSwyQ0FDRTtBQUFLLHlCQUFHLEVBQUMsaUJBQVQ7QUFBMkIseUJBQUcsRUFBQyxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSkYsZUFPRTtBQUFBLHdEQUFjLDJEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBGLGVBVUU7QUFBQSx3REFBYywyREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFWRixlQWFFO0FBQUEsd0RBQWMsMkRBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQTFFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2RUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQW9WRCxDQWppQkQ7O0dBQU1uRDtVQWlDZ0RWOzs7S0FqQ2hEVTtBQW1pQk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICB3YWl0VHgsXHJcbiAgV2l0bmVzc1Njb3BlLFxyXG4gIFdhbGxldE5vdENvbm5lY3RlZEVycm9yLFxyXG59IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIFdhbGxldERpc2Nvbm5lY3RCdXR0b24sXHJcbiAgV2FsbGV0TXVsdGlCdXR0b24sXHJcbn0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aVwiO1xyXG5pbXBvcnQgeyBuZW9saW5lTjMgfSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5lb2xpbmVcIjtcclxuaW1wb3J0IHsgdSwgc2MsIHdhbGxldCB9IGZyb20gXCJAY2l0eW9memlvbi9uZW9uLWpzXCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IE5lb24gZnJvbSBcIkBjaXR5b2Z6aW9uL25lb24tanNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG5lbzNEYXBpIGZyb20gJ25lbzMtZGFwaSc7XHJcblxyXG5jb25zdCBJbmRleDogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgTmVvQ29udHJhY3RIYXNoID0gXCIweGVmNDA3M2EwZjJiMzA1YTM4ZWM0MDUwZTRkM2QyOGJjNDBlYTYzZjVcIjtcclxuICBjb25zdCBCZXR0aW5nTWFuYWdlckNvbnRyYWN0SGFzaCA9XHJcbiAgICBcIjB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YlwiO1xyXG5cdFxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25zdCBwdWJsaXNoSW52b2tlID0gYXN5bmMgKFxyXG4gICAgcnBjQWRkcmVzcyxcclxuICAgIG5ldHdvcmtNYWdpYyxcclxuICAgIHNjcmlwdEhhc2gsXHJcbiAgICBvcGVyYXRpb24sXHJcbiAgICBhcmdzLFxyXG4gICAgYWNjb3VudFxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgTmVvbi5leHBlcmltZW50YWwuU21hcnRDb250cmFjdChcclxuICAgICAgTmVvbi51LkhleFN0cmluZy5mcm9tSGV4KHNjcmlwdEhhc2gpLFxyXG4gICAgICB7XHJcbiAgICAgICAgbmV0d29ya01hZ2ljLFxyXG4gICAgICAgIHJwY0FkZHJlc3MsXHJcbiAgICAgICAgYWNjb3VudCxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuaW52b2tlKG9wZXJhdGlvbiwgYXJncyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBjb25uZWN0ZWQsIGdldE5ldHdvcmtzLCBhZGRyZXNzLCBpbnZva2UgfSA9IHVzZVdhbGxldCgpO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBbd2FsbGV0TmV0d29yaywgc2V0V2FsbGV0TmV0d29ya10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtuZW9saW5lLCBzZXROZW9MaW5lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW25lb2xpbmVOMywgc2V0TmVvTGluZTNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbYmxvY2tIZWlnaHQsIHNldEJsb2NrSGVpZ2h0XSA9IHVzZVN0YXRlKFwiNzgxMTVcIik7XHJcbiAgY29uc3QgZmV0Y2hXYWxsZXROZXR3b3JrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0TmV0d29ya3MoKTtcclxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgc2V0V2FsbGV0TmV0d29yayhyZXN1bHQuZGF0YT8uZGVmYXVsdE5ldHdvcmsgfHwgbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtnZXROZXR3b3Jrc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdERhcCgpO1xyXG5cclxuLy8gYmFsYW5jZXMgXHJcblxyXG5cclxuXHJcbiAgICBpZiAoY29ubmVjdGVkKSB7XHJcbiAgICAgIGZldGNoV2FsbGV0TmV0d29yaygpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgPT4gXCIsIG5lb2xpbmVOMyk7XHJcblxyXG4gICAgICBpZiAobmVvbGluZSkge1xyXG4gICAgICAgIG5lb2xpbmUuZ2V0QWNjb3VudCgpLnRoZW4oKGFjY291bnQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBmb3VuZCBjb25uZXRlZCA9PiBcIiwgYWNjb3VudCk7XHJcblxyXG4gICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbmVvbGluZS5nZXRQdWJsaWNLZXkoKS50aGVuKChwdWJsaWNLZXlEYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGFkZHJlc3MsIHB1YmxpY0tleSB9ID0gcHVibGljS2V5RGF0YTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgYWRkcmVzczogXCIgKyBhZGRyZXNzKTtcclxuXHRcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBwdWJsaWMga2V5OiBcIiArIHB1YmxpY0tleSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFxyXG5cdFx0XHJcbiAgICAgIH1cclxuXHJcbiBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFdhbGxldE5ldHdvcmsobnVsbCk7XHJcbiAgICB9XHJcbiAgfSwgW2Nvbm5lY3RlZCwgZmV0Y2hXYWxsZXROZXR3b3JrXSk7XHJcblxyXG5cclxuXHJcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGlmICghYWRkcmVzcyB8fCAhY29ubmVjdGVkKSB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcclxuICAgIGNvbnN0IGFjY291bnQgPSB3YWxsZXQuZ2V0U2NyaXB0SGFzaEZyb21BZGRyZXNzKGFkZHJlc3MpO1xyXG4gICAgLy8gQ29uc3RydWN0IHRoZSByZXF1ZXN0IGFuZCBpbnZva2UgaXRcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGludm9rZSh7XHJcbiAgICAvLyBcdHNjcmlwdEhhc2g6ICcweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2InLFxyXG4gICAgLy8gXHRvcGVyYXRpb246ICdnZXROdW1iZXInLFxyXG5cclxuICAgIC8vIFx0c2lnbmVyczogW1xyXG4gICAgLy8gXHRcdHtcclxuICAgIC8vIFx0XHRcdGFjY291bnQ6IHdhbGxldC5nZXRTY3JpcHRIYXNoRnJvbUFkZHJlc3MoYWRkcmVzcyksXHJcbiAgICAvLyBcdFx0XHQvLyBAdHMtaWdub3JlXHJcbiAgICAvLyBcdFx0XHRzY29wZTogV2l0bmVzc1Njb3BlLkNhbGxlZEJ5RW50cnksXHJcbiAgICAvLyBcdFx0fSxcclxuICAgIC8vIFx0XSxcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIC8vIE9wdGlvbmFsOiBXYWl0IGZvciB0aGUgdHJhbnNhY3Rpb24gdG8gYmUgY29uZmlybWVkIG9uY2hhaW5cclxuICAgIC8vIGlmIChyZXN1bHQuZGF0YT8udHhJZCkge1xyXG4gICAgLy8gXHRhd2FpdCB3YWl0VHgoJ05FVFdPUktfUlBDX0FERFJFU1NfSEVSRScsIHJlc3VsdC5kYXRhPy50eElkKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBycGNBZGRyZXNzID0gXCJodHRwczovL3Rlc3RuZXQxLm5lby5jb3ouaW86NDQzXCI7XHJcbiAgICBjb25zdCBuZXR3b3JrTWFnaWMgPSA4Nzc5MzMzOTA7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBbXHJcbiAgICAgIHNjLkNvbnRyYWN0UGFyYW0uaGFzaDE2MChcIk5UNFF0VVlMZ2h2U3V1QjJ5Q1M2Q2dRazlOZjFua0RrMnFcIiksXHJcbiAgICAgIHNjLkNvbnRyYWN0UGFyYW0uaGFzaDE2MChCZXR0aW5nTWFuYWdlckNvbnRyYWN0SGFzaCksXHJcbiAgICAgIDIsXHJcbiAgICAgIHsgYW1vdW50OiAxIH0sXHJcbiAgICBdO1xyXG4gICAgYXdhaXQgcHVibGlzaEludm9rZShcclxuICAgICAgcnBjQWRkcmVzcyxcclxuICAgICAgbmV0d29ya01hZ2ljLFxyXG4gICAgICBOZW9Db250cmFjdEhhc2gsXHJcbiAgICAgIFwidHJhbnNmZXJcIixcclxuICAgICAgW11cclxuICAgICk7XHJcbiAgfSwgW2FkZHJlc3MsIGNvbm5lY3RlZCwgaW52b2tlXSk7XHJcblxyXG4gIGNvbnN0IHBsYWNlQmV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcnBjQWRkcmVzcyA9IFwiaHR0cHM6Ly90ZXN0bmV0MS5uZW8uY296LmlvOjQ0M1wiO1xyXG4gICAgY29uc3QgbmV0d29ya01hZ2ljID0gODc3OTMzMzkwO1xyXG4gICAgY29uc3QgcGFyYW1zID0gW1xyXG4gICAgICBzYy5Db250cmFjdFBhcmFtLmhhc2gxNjAoXCJOVDRRdFVZTGdodlN1dUIyeUNTNkNnUWs5TmYxbmtEazJxXCIpLFxyXG4gICAgICBzYy5Db250cmFjdFBhcmFtLmhhc2gxNjAoQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2gpLFxyXG4gICAgICAyLFxyXG4gICAgICB7IGFtb3VudDogMSB9LFxyXG4gICAgXTtcclxuICAgIGF3YWl0IHB1Ymxpc2hJbnZva2UoXHJcbiAgICAgIHJwY0FkZHJlc3MsXHJcbiAgICAgIG5ldHdvcmtNYWdpYyxcclxuICAgICAgTmVvQ29udHJhY3RIYXNoLFxyXG4gICAgICBcInRyYW5zZmVyXCIsXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgYWNjb3VudFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgaW5pdERhcCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIFx0Y29uc3QgaW5pdE4zRGFwaSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIC8vIFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIk5FT0xpbmUuTjMuRVZFTlQuUkVBRFlcIiwgKCkgPT4ge1xyXG4gICAgLy8gXHRcdCAgc2V0TmVvTGluZTMobmV3IE5FT0xpbmUzLkluaXQoKSk7XHJcbiAgICAvLyBcdFx0ICBpZiAobmVvbGluZU4zKSB7XHJcbiAgICAvLyBcdFx0XHRyZXNvbHZlKG5lb2xpbmVOMyk7XHJcbiAgICAvLyBcdFx0ICB9IGVsc2Uge1xyXG4gICAgLy8gXHRcdFx0cmVqZWN0KFwiTjMgZEFQSSBtZXRob2QgZmFpbGVkIHRvIGxvYWQuXCIpO1xyXG4gICAgLy8gXHRcdCAgfVxyXG4gICAgLy8gXHRcdH0pO1xyXG4gICAgLy8gXHQgIH0pO1xyXG4gICAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIk5FT0xpbmUuTkVPLkVWRU5ULlJFQURZXCIsICgpID0+IHtcclxuICAgIC8vICAgICBzZXROZW9MaW5lKG5ldyBORU9MaW5lLkluaXQoKSk7XHJcbiAgICAvLyAgICAgaWYgKG5lb2xpbmUpIHtcclxuICAgIC8vICAgICAgIHJlc29sdmUobmVvbGluZSk7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgIHJlamVjdChcImNvbW1vbiBkQVBJIG1ldGhvZCBmYWlsZWQgdG8gbG9hZC5cIik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH0pO1xyXG4gICAgY29uc3QgaW5pdE4zRGFwaSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJORU9MaW5lLk4zLkVWRU5ULlJFQURZXCIsICgpID0+IHtcclxuXHRcdHNldE5lb0xpbmUzKG5ldyBORU9MaW5lTjMuSW5pdCgpKTtcclxuICAgICAgICBpZiAobmVvbGluZU4zKSB7XHJcbiAgICAgICAgICByZXNvbHZlKG5lb2xpbmVOMyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChcIk4zIGRBUEkgbWV0aG9kIGZhaWxlZCB0byBsb2FkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaW5pdENvbW1vbkRhcGkgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiTkVPTGluZS5ORU8uRVZFTlQuUkVBRFlcIiwgKCkgPT4ge1xyXG4gICAgICAgIHNldE5lb0xpbmUobmV3IE5FT0xpbmUuSW5pdCgpKTtcclxuICAgICAgICBpZiAobmVvbGluZSkge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZW9saW5lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KFwiY29tbW9uIGRBUEkgbWV0aG9kIGZhaWxlZCB0byBsb2FkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cdGluaXROM0RhcGkgXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBjb21tb24gZEFQSSBtZXRob2QgaXMgbG9hZGVkLlwiKTtcclxuICAgICAgICByZXR1cm4gaW5pdENvbW1vbkRhcGk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBOMyBkQVBJIG1ldGhvZCBpcyBsb2FkZWQuXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL21haW4uY3NzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbnRhaW5lciBteC1hdXRvIHAtMiBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHB5LTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImltZy9MT0dPLnBuZ1wiIGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQtNXhsIG1kOnRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICBQbGFuZXQgWFxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc3BhY2UteC02IG1kOmZsZXhcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiZ2FtZXNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZGFya0dyYXlpc2hCbHVlIHRleHQtd2hpdGUgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEdhbWVzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiL3BvcnRmb2xpby5odG1sXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWRhcmtHcmF5aXNoQmx1ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQb3J0Zm9saW9cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBpZD1cIm1lbnUtYnRuXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaGFtYnVyZ2VyIG1kOmhpZGRlbiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci10b3AgYmctd2hpdGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1taWRkbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3R0b21cIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9XCJtZW51XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleC1jb2wgaXRlbXMtY2VudGVyIGhpZGRlbiBzZWxmLWVuZCBweS04IG10LTEwIHNwYWNlLXktNiBmb250LWJvbGQgYmctd2hpdGUgc206dy1hdXRvIHNtOnNlbGYtY2VudGVyIGxlZnQtNiByaWdodC02IGRyb3Atc2hhZG93LW1kXCJcclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICA8c2VjdGlvbj48L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiaGVyb1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wtcmV2ZXJzZSBpdGVtcy1jZW50ZXIgcHgtNiBteC1hdXRvIG10LTEwIHNwYWNlLXktMCBtZDpzcGFjZS15LTAgbWQ6ZmxleC1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzIgZmxleCBmbGV4LWNvbCBzcGFjZS15LTEyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvTE9HTy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1kOnctMS8yXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3JpZ2h0X2ltYWdlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJmZWF0dXJlc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyICBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IG14LWF1dG8gbXQtMiAgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93IG1pZGRsZVwiPlxyXG4gICAgICAgICAgPFdhbGxldE11bHRpQnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEQzI5ODRcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgcHgtNSBteC1hdXRvIG10LTMyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtMjQgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLXctZnVsbCBcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBzdWJwaXhlbC1hbnRpYWxpYXNlZCBweS00IHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgVHJlbmRpbmdcclxuICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYmctWyNCMjI3Q0FdIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCAgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSYW5rXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkICB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBHYW1lIE5hbWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGF0ZS9UaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMjQgaG91cnNcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy1bIzE1MTc0QV0gICBcIj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9jcy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ1M6R08gLSBQR0wgTWFqb3IgQW50d2VycFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDQwMCtcclxuICAgICAgICAgICAgICAgICAgICAgIHtjb25uZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cGxhY2VCZXR9IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBsYWNlIEJldHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2RvdGEucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENTOkdPIC0gUEdMIE1ham9yIEFudHdlcnBcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNlcCAyMiwgMjAyMiA0OjMwIFBNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA0MDArXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Rvd24ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2ZyZWVmaXJlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBGcmVlIEZpcmUgLSBXb3JsZCBTZXJpZXNcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE9jdCAxNSwgMjAyMiA0OjAwIFBNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA1MCtcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG93bi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvaG9ub3IucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEtPRyAtIEtQTCBTcHJpbmcgUGxheW9mZnNcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE5vdiAwNSwgMjAyMiAyOjMwIEFNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAxMDArXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9sZWdlbmRzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMT0wgLSBFVSBNYXN0ZXJzIFNwcmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDI1K1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYWluIHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgcGFkZGluZzogNHJlbSAwO1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlciBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSBhOmhvdmVyLFxyXG4gICAgICAgIC50aXRsZSBhOmZvY3VzLFxyXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSxcclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIG1hcmdpbjogNHJlbSAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvZGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxyXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXHJcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgaDIge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud2FsbGV0LWJ1dHRvbnMge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGdhcDogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbInVzZVdhbGxldCIsIldhbGxldE5vdENvbm5lY3RlZEVycm9yIiwiV2FsbGV0TXVsdGlCdXR0b24iLCJzYyIsIndhbGxldCIsIkhlYWQiLCJOZW9uIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsIkluZGV4IiwiTmVvQ29udHJhY3RIYXNoIiwiQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2giLCJwdWJsaXNoSW52b2tlIiwicnBjQWRkcmVzcyIsIm5ldHdvcmtNYWdpYyIsInNjcmlwdEhhc2giLCJvcGVyYXRpb24iLCJhcmdzIiwiYWNjb3VudCIsImNvbnRyYWN0IiwiZXhwZXJpbWVudGFsIiwiU21hcnRDb250cmFjdCIsInUiLCJIZXhTdHJpbmciLCJmcm9tSGV4IiwiaW52b2tlIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNvbm5lY3RlZCIsImdldE5ldHdvcmtzIiwiYWRkcmVzcyIsInNldEFjY291bnQiLCJ3YWxsZXROZXR3b3JrIiwic2V0V2FsbGV0TmV0d29yayIsInN0YXRlIiwic2V0U3RhdGUiLCJuZW9saW5lIiwic2V0TmVvTGluZSIsIm5lb2xpbmVOMyIsInNldE5lb0xpbmUzIiwiYmxvY2tIZWlnaHQiLCJzZXRCbG9ja0hlaWdodCIsImZldGNoV2FsbGV0TmV0d29yayIsInN0YXR1cyIsImRhdGEiLCJkZWZhdWx0TmV0d29yayIsImVycm9yIiwiaW5pdERhcCIsImdldEFjY291bnQiLCJ0aGVuIiwiZ2V0UHVibGljS2V5IiwicHVibGljS2V5RGF0YSIsInB1YmxpY0tleSIsIm9uQ2xpY2siLCJnZXRTY3JpcHRIYXNoRnJvbUFkZHJlc3MiLCJwYXJhbXMiLCJDb250cmFjdFBhcmFtIiwiaGFzaDE2MCIsImFtb3VudCIsInBsYWNlQmV0IiwiaW5pdE4zRGFwaSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5FT0xpbmVOMyIsIkluaXQiLCJpbml0Q29tbW9uRGFwaSIsIk5FT0xpbmUiLCJlcnIiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9