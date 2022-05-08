"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Sebatane_Raphela_Music_web3_neo_wallet_adapter_packages_starter_nextjs_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Sebatane_Raphela_Music_web3_neo_wallet_adapter_packages_starter_nextjs_starter_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Sebatane_Raphela_Music_web3_neo_wallet_adapter_packages_starter_nextjs_starter_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sebatane_Raphela_Music_web3_neo_wallet_adapter_packages_starter_nextjs_starter_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js");
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-base */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/index.js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cityofzion/neon-js */ "./node_modules/@cityofzion/neon-js/dist/browser.js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Sebatane Raphela\\Music\\web3\\neo-wallet-adapter\\packages\\starter\\nextjs-starter\\pages\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();












var Index = function Index() {
  _s();

  var _useWallet = (0,_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet)(),
      connected = _useWallet.connected,
      getNetworks = _useWallet.getNetworks,
      address = _useWallet.address,
      invoke = _useWallet.invoke;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
      account = _useState.account,
      setAccount = _useState.setAccount;

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null),
      walletNetwork = _useState2[0],
      setWalletNetwork = _useState2[1];

  var fetchWalletNetwork = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)( /*#__PURE__*/(0,C_Users_Sebatane_Raphela_Music_web3_neo_wallet_adapter_packages_starter_nextjs_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Sebatane_Raphela_Music_web3_neo_wallet_adapter_packages_starter_nextjs_starter_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
    var result, _result$data;

    return C_Users_Sebatane_Raphela_Music_web3_neo_wallet_adapter_packages_starter_nextjs_starter_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return getNetworks();

          case 3:
            result = _context.sent;

            if (result.status === 'success') {
              setWalletNetwork(((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.defaultNetwork) || null);
            }

            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  })), [getNetworks]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (connected) {
      fetchWalletNetwork();
    } else {
      setWalletNetwork(null);
    }
  }, [connected, fetchWalletNetwork]);
  console.log(walletNetwork);
  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)( /*#__PURE__*/(0,C_Users_Sebatane_Raphela_Music_web3_neo_wallet_adapter_packages_starter_nextjs_starter_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Sebatane_Raphela_Music_web3_neo_wallet_adapter_packages_starter_nextjs_starter_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
    var account, rpcAddress, networkMagic, scriptHash, contract, signers, res;
    return C_Users_Sebatane_Raphela_Music_web3_neo_wallet_adapter_packages_starter_nextjs_starter_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!address || !connected)) {
              _context2.next = 2;
              break;
            }

            throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_8__.WalletNotConnectedError();

          case 2:
            account = _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_3__.wallet.getScriptHashFromAddress(address); // Construct the request and invoke it
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

            rpcAddress = 'https://testnet1.neo.coz.io:443';
            networkMagic = 877933390;
            scriptHash = '0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b'; // '0x9bfc7d88f11d2f52b244aab5296635ddc2d6081a';

            contract = new (_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_3___default().experimental.SmartContract)(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_3___default().u.HexString.fromHex(scriptHash), {
              networkMagic: networkMagic,
              rpcAddress: rpcAddress
            });
            signers = [{
              account: account,
              scopes: 'CalledByEntry'
            }];
            _context2.next = 10;
            return contract.testInvoke('getNumber', [], // @t
            signers);

          case 10:
            res = _context2.sent;
            console.log(JSON.stringify(res));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [address, connected, invoke]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "/main.css",
        className: "jsx-426706089"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("nav", {
      className: "jsx-426706089" + " " + "relative container mx-auto p-2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "jsx-426706089" + " " + "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "jsx-426706089" + " " + "pt-2 py-6 flex flex-row justify-between items-center ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
            src: "img/LOGO.png",
            height: "100",
            width: "100",
            alt: "",
            className: "jsx-426706089"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
            className: "jsx-426706089" + " " + "lg:text-5xl md:text-5xl text-white font-bold  ",
            children: "Planet X"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "jsx-426706089" + " " + "hidden space-x-6 md:flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
            href: "games",
            className: "jsx-426706089" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: "Games"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
            href: "/portfolio.html",
            className: "jsx-426706089" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: "Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          id: "menu-btn",
          className: "jsx-426706089" + " " + "block hamburger md:hidden focus:outline-none focus:text-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: "jsx-426706089" + " " + "hamburger-top bg-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: "jsx-426706089" + " " + "hamburger-middle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
            className: "jsx-426706089" + " " + "hamburger-bottom"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "jsx-426706089" + " " + "md:hidden",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          id: "menu",
          className: "jsx-426706089" + " " + "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 3
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      id: "hero",
      className: "jsx-426706089",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "jsx-426706089" + " " + "container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "jsx-426706089" + " " + "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "jsx-426706089" + " " + "md:w-1/2 flex flex-col space-y-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: "img/LOGO.png",
              alt: "",
              className: "jsx-426706089"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "jsx-426706089" + " " + " md:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
            src: "img/right_image.png",
            alt: "",
            className: "jsx-426706089"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      id: "features",
      className: "jsx-426706089",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "jsx-426706089" + " " + "container  flex flex-col items-center justify-center px-6 mx-auto mt-2  md:space-y-0 md:flex-row middle",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          type: "button",
          className: "jsx-426706089" + " " + "inline-block px-6 py-4 bg-[#DC2984] text-white font-bold text-md leading-tight  rounded shadow-md hover:bg-[#C829DD] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
          children: "Connect Wallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      id: "testimonials",
      className: "jsx-426706089",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "jsx-426706089" + " " + "max-w-6xl px-5 mx-auto mt-32 text-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "jsx-426706089" + " " + "flex flex-col mt-24 md:flex-row md:space-x-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "jsx-426706089" + " " + "my-16 flex flex-col items-center justify-center min-w-full ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "jsx-426706089" + " " + "text-5xl text-white font-bold subpixel-antialiased py-4 tracking-widest",
              children: "Trending"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 11
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("table", {
              className: "jsx-426706089" + " " + "min-w-full border border-slate-800",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("thead", {
                className: "jsx-426706089" + " " + "border-b bg-[#B227CA] ",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
                  className: "jsx-426706089",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-426706089" + " " + "text-sm font-bold  text-white px-6 py-4 text-left",
                    children: "Rank"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-426706089" + " " + "text-sm font-bold  text-white px-6 py-4 text-left",
                    children: "Game"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-426706089" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Game Names"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-426706089" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Date/Time"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-426706089" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "24 hours"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 15
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 13
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tbody", {
                className: "jsx-426706089" + " " + "bg-[#15174A]   ",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
                  className: "jsx-426706089" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 19
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/cs.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 19
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "400+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 15
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
                  className: "jsx-426706089" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 220,
                      columnNumber: 19
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/dota.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 19
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "400+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 15
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
                  className: "jsx-426706089" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/down.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 19
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/freefire.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 240,
                      columnNumber: 19
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Free Fire - World Series"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Oct 15, 2022 4:00 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "50+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 15
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
                  className: "jsx-426706089" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/down.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 19
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/honor.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 19
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "KOG - KPL Spring Playoffs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Nov 05, 2022 2:30 AM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "100+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 15
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("tr", {
                  className: "jsx-426706089" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 271,
                      columnNumber: 19
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "img/legends.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 274,
                      columnNumber: 19
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 273,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "LOL - EU Masters Spring"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 276,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 279,
                    columnNumber: 17
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "25+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 17
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 15
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 13
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 11
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "426706089",
      children: ".container.jsx-426706089{padding:0 2rem;}.main.jsx-426706089{min-height:100vh;padding:4rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-426706089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;padding:2rem 0;border-top:1px solid #eaeaea;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-426706089 a.jsx-426706089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.title.jsx-426706089 a.jsx-426706089{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-426706089 a.jsx-426706089:hover,.title.jsx-426706089 a.jsx-426706089:focus,.title.jsx-426706089 a.jsx-426706089:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-426706089{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-426706089,.description.jsx-426706089{text-align:center;}.description.jsx-426706089{margin:4rem 0;line-height:1.5;font-size:1.5rem;}.code.jsx-426706089{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New,monospace;}.grid.jsx-426706089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;}.card.jsx-426706089{margin:1rem;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;max-width:300px;}.card.jsx-426706089:hover,.card.jsx-426706089:focus,.card.jsx-426706089:active{color:#0070f3;border-color:#0070f3;}.card.jsx-426706089 h2.jsx-426706089{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-426706089 p.jsx-426706089{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-426706089{height:1em;margin-left:0.5rem;}@media (max-width:600px){.grid.jsx-426706089{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.wallet-buttons.jsx-426706089{padding-top:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2ViYXRhbmUgUmFwaGVsYVxcTXVzaWNcXHdlYjNcXG5lby13YWxsZXQtYWRhcHRlclxccGFja2FnZXNcXHN0YXJ0ZXJcXG5leHRqcy1zdGFydGVyXFxwYWdlc1xcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlTZSxBQUdxQixBQUlFLEFBVUosQUFTQSxBQU9DLEFBT1ksQUFJakIsQUFPUyxBQUlKLEFBTUssQUFTTixBQVFELEFBY0UsQUFLSSxBQUtULEFBTUUsQUFNQyxBQU1LLFNBM0VBLEFBMERDLEVBTUMsQUFNSSxDQXBDUixFQTdDTSxBQXNCTCxBQXFDSyxDQXpGdEIsRUFJZ0IsQUFpSEYsQ0FyRWQsQUE4Q2tCLENBcENDLE9BaEJILENBa0NDLEFBd0JBLEdBL0NDLEFBcURsQixFQXJHUSxHQXFGUixBQUtBLEVBcENpQixJQWhCakIsRUFrQ2UsQUF3QmYsSUEvQ0EsTUFNa0IsSUFrQkksR0F6Q3RCLElBTkEsQ0F6QmMsS0F3RFUsSUFoRGhCLEFBU2dCLEFBNENKLGVBNkNuQixFQU1zQixnQkF2R1AsQUFnRVUsZUEvREksVUFnRVYsT0F6RUcsWUFVQyxBQWdFOEIsZ0JBYjlCLEVBbURkLElBL0ZVLEtBZ0dwQixhQXpEQSwwQkF2RHdCLGlDQVVKLGFBZ0VILEdBekRKLEFBNENHLGFBY2hCLHFDQTFFb0IsT0E2REgsY0E1Q2pCLEVBNkNBLElBcERBLGtFQVRBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2ViYXRhbmUgUmFwaGVsYVxcTXVzaWNcXHdlYjNcXG5lby13YWxsZXQtYWRhcHRlclxccGFja2FnZXNcXHN0YXJ0ZXJcXG5leHRqcy1zdGFydGVyXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0JztcclxuaW1wb3J0IHsgd2FpdFR4LCBXaXRuZXNzU2NvcGUsIFdhbGxldE5vdENvbm5lY3RlZEVycm9yIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UnO1xyXG5pbXBvcnQgeyBXYWxsZXREaXNjb25uZWN0QnV0dG9uLCBXYWxsZXRNdWx0aUJ1dHRvbiB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aSc7XHJcbmltcG9ydCB7IHUsIHNjLCB3YWxsZXQgfSBmcm9tICdAY2l0eW9memlvbi9uZW9uLWpzJztcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTmVvbiBmcm9tICdAY2l0eW9memlvbi9uZW9uLWpzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbmRleDogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBjb25uZWN0ZWQsIGdldE5ldHdvcmtzLCBhZGRyZXNzLCBpbnZva2UgfSA9IHVzZVdhbGxldCgpO1xyXG5cdGNvbnN0IHsgYWNjb3VudCwgc2V0QWNjb3VudCB9ID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cdGNvbnN0IFt3YWxsZXROZXR3b3JrLCBzZXRXYWxsZXROZXR3b3JrXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuXHRjb25zdCBmZXRjaFdhbGxldE5ldHdvcmsgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBnZXROZXR3b3JrcygpO1xyXG5cdFx0XHRpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcblx0XHRcdFx0c2V0V2FsbGV0TmV0d29yayhyZXN1bHQuZGF0YT8uZGVmYXVsdE5ldHdvcmsgfHwgbnVsbCk7XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdH0sIFtnZXROZXR3b3Jrc10pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGNvbm5lY3RlZCkge1xyXG5cdFx0XHRmZXRjaFdhbGxldE5ldHdvcmsoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldFdhbGxldE5ldHdvcmsobnVsbCk7XHJcblx0XHR9XHJcblx0fSwgW2Nvbm5lY3RlZCwgZmV0Y2hXYWxsZXROZXR3b3JrXSk7XHJcblxyXG5cdGNvbnNvbGUubG9nKHdhbGxldE5ldHdvcmspO1xyXG5cclxuXHRjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG5cdFx0aWYgKCFhZGRyZXNzIHx8ICFjb25uZWN0ZWQpIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xyXG5cdFx0Y29uc3QgYWNjb3VudCA9IHdhbGxldC5nZXRTY3JpcHRIYXNoRnJvbUFkZHJlc3MoYWRkcmVzcyk7XHJcblx0XHQvLyBDb25zdHJ1Y3QgdGhlIHJlcXVlc3QgYW5kIGludm9rZSBpdFxyXG5cdFx0Ly8gY29uc3QgcmVzdWx0ID0gYXdhaXQgaW52b2tlKHtcclxuXHRcdC8vIFx0c2NyaXB0SGFzaDogJzB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YicsXHJcblx0XHQvLyBcdG9wZXJhdGlvbjogJ2dldE51bWJlcicsXHJcblxyXG5cdFx0Ly8gXHRzaWduZXJzOiBbXHJcblx0XHQvLyBcdFx0e1xyXG5cdFx0Ly8gXHRcdFx0YWNjb3VudDogd2FsbGV0LmdldFNjcmlwdEhhc2hGcm9tQWRkcmVzcyhhZGRyZXNzKSxcclxuXHRcdC8vIFx0XHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdC8vIFx0XHRcdHNjb3BlOiBXaXRuZXNzU2NvcGUuQ2FsbGVkQnlFbnRyeSxcclxuXHRcdC8vIFx0XHR9LFxyXG5cdFx0Ly8gXHRdLFxyXG5cdFx0Ly8gfSk7XHJcblxyXG5cdFx0Ly8gLy8gT3B0aW9uYWw6IFdhaXQgZm9yIHRoZSB0cmFuc2FjdGlvbiB0byBiZSBjb25maXJtZWQgb25jaGFpblxyXG5cdFx0Ly8gaWYgKHJlc3VsdC5kYXRhPy50eElkKSB7XHJcblx0XHQvLyBcdGF3YWl0IHdhaXRUeCgnTkVUV09SS19SUENfQUREUkVTU19IRVJFJywgcmVzdWx0LmRhdGE/LnR4SWQpO1xyXG5cdFx0Ly8gfVxyXG5cdFx0Y29uc3QgcnBjQWRkcmVzcyA9ICdodHRwczovL3Rlc3RuZXQxLm5lby5jb3ouaW86NDQzJztcclxuXHRcdGNvbnN0IG5ldHdvcmtNYWdpYyA9IDg3NzkzMzM5MDtcclxuXHJcblx0XHRjb25zdCBzY3JpcHRIYXNoID0gJzB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YicgIC8vICcweDliZmM3ZDg4ZjExZDJmNTJiMjQ0YWFiNTI5NjYzNWRkYzJkNjA4MWEnO1xyXG5cdFx0Y29uc3QgY29udHJhY3QgPSBuZXcgTmVvbi5leHBlcmltZW50YWwuU21hcnRDb250cmFjdChOZW9uLnUuSGV4U3RyaW5nLmZyb21IZXgoc2NyaXB0SGFzaCksIHtcclxuXHRcdFx0bmV0d29ya01hZ2ljLFxyXG5cdFx0XHRycGNBZGRyZXNzLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3Qgc2lnbmVycyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFjY291bnQ6IGFjY291bnQsXHJcblxyXG5cdFx0XHRcdHNjb3BlczogJ0NhbGxlZEJ5RW50cnknLFxyXG5cdFx0XHR9LFxyXG5cdFx0XTtcclxuXHJcblx0XHRsZXQgcmVzID0gYXdhaXQgY29udHJhY3QudGVzdEludm9rZShcclxuXHRcdFx0J2dldE51bWJlcicsXHJcblx0XHRcdFtcclxuXHRcdFx0XHJcblx0XHRcdF0sXHJcblx0XHRcdC8vIEB0XHJcblx0XHRcdHNpZ25lcnMsXHJcblx0XHQpO1xyXG5cdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0fSwgW2FkZHJlc3MsIGNvbm5lY3RlZCwgaW52b2tlXSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHQgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvbWFpbi5jc3NcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblx0XHQ8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbnRhaW5lciBteC1hdXRvIHAtMiBcIj5cclxuICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHB5LTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvTE9HTy5wbmdcIiBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIGFsdD1cIlwiIC8+IFxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQtNXhsIG1kOnRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkICBcIj5QbGFuZXQgWDwvaDE+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNwYWNlLXgtNiBtZDpmbGV4XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiZ2FtZXNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWRhcmtHcmF5aXNoQmx1ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPkdhbWVzPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9wb3J0Zm9saW8uaHRtbFwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZGFya0dyYXlpc2hCbHVlIHRleHQtd2hpdGUgZm9udC1ib2xkXCI+UG9ydGZvbGlvPC9hPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgaWQ9XCJtZW51LWJ0blwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoYW1idXJnZXIgbWQ6aGlkZGVuIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czp0ZXh0LXdoaXRlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItdG9wIGJnLXdoaXRlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLW1pZGRsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3R0b21cIj48L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgaWQ9XCJtZW51XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoaWRkZW4gc2VsZi1lbmQgcHktOCBtdC0xMCBzcGFjZS15LTYgZm9udC1ib2xkIGJnLXdoaXRlIHNtOnctYXV0byBzbTpzZWxmLWNlbnRlciBsZWZ0LTYgcmlnaHQtNiBkcm9wLXNoYWRvdy1tZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuXHJcbiAgXHJcbiAgICA8c2VjdGlvbiBpZD1cImhlcm9cIj5cclxuICAgICAgXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbC1yZXZlcnNlIGl0ZW1zLWNlbnRlciBweC02IG14LWF1dG8gbXQtMTAgc3BhY2UteS0wIG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvd1wiXHJcbiAgICAgID5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMiBmbGV4IGZsZXgtY29sIHNwYWNlLXktMTJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvTE9HTy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWQ6dy0xLzJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3JpZ2h0X2ltYWdlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgXHJcbiAgICA8c2VjdGlvbiBpZD1cImZlYXR1cmVzXCI+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2XHJcbiAgIFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBteC1hdXRvIG10LTIgIG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvdyBtaWRkbGVcIlxyXG4gICAgICA+XHJcbiAgICAgICBcclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtNiBweS00IGJnLVsjREMyOTg0XSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LW1kIGxlYWRpbmctdGlnaHQgIHJvdW5kZWQgc2hhZG93LW1kIGhvdmVyOmJnLVsjQzgyOUREXSBob3ZlcjpzaGFkb3ctbGcgZm9jdXM6YmctYmx1ZS03MDAgZm9jdXM6c2hhZG93LWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgYWN0aXZlOmJnLWJsdWUtODAwIGFjdGl2ZTpzaGFkb3ctbGcgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXRcIj5Db25uZWN0IFdhbGxldDwvYnV0dG9uPlxyXG5cclxuICAgIFxyXG4gICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gIFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJ0ZXN0aW1vbmlhbHNcIj5cclxuICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIHB4LTUgbXgtYXV0byBtdC0zMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0yNCBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTZcIj5cclxuICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTE2IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi13LWZ1bGwgXCI+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC13aGl0ZSBmb250LWJvbGQgc3VicGl4ZWwtYW50aWFsaWFzZWQgcHktNCB0cmFja2luZy13aWRlc3RcIj5UcmVuZGluZzwvcD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cclxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJvcmRlci1iIGJnLVsjQjIyN0NBXSBcIj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCAgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIFJhbmtcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCAgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIEdhbWVcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgR2FtZSBOYW1lc1xyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICBEYXRlL1RpbWVcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgMjQgaG91cnNcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLVsjMTUxNzRBXSAgIFwiPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2NzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBDUzpHTyAtIFBHTCBNYWpvciBBbnR3ZXJwXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgNDAwK1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2RvdGEucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIENTOkdPIC0gUEdMIE1ham9yIEFudHdlcnBcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIFNlcCAyMiwgMjAyMiA0OjMwIFBNXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA0MDArXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3duLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9mcmVlZmlyZS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgRnJlZSBGaXJlIC0gV29ybGQgU2VyaWVzXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBPY3QgMTUsIDIwMjIgNDowMCBQTVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgNTArXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3duLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9ob25vci5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgS09HIC0gS1BMIFNwcmluZyBQbGF5b2Zmc1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgTm92IDA1LCAyMDIyIDI6MzAgQU1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDEwMCtcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9sZWdlbmRzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBMT0wgLSBFVSBNYXN0ZXJzIFNwcmluZ1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDI1K1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHQgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICBcclxuXHJcblxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDJyZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQubWFpbiB7XHJcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDRyZW0gMDtcclxuXHRcdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5mb290ZXIge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAycmVtIDA7XHJcblx0XHRcdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5mb290ZXIgYSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0ZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnRpdGxlIGEge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMwMDcwZjM7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQudGl0bGUgYTpob3ZlcixcclxuXHRcdFx0XHQudGl0bGUgYTpmb2N1cyxcclxuXHRcdFx0XHQudGl0bGUgYTphY3RpdmUge1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQudGl0bGUge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMTU7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDRyZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQudGl0bGUsXHJcblx0XHRcdFx0LmRlc2NyaXB0aW9uIHtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5kZXNjcmlwdGlvbiB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDRyZW0gMDtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjU7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jb2RlIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjc1cmVtO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0XHRcdFx0XHRmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubywgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLFxyXG5cdFx0XHRcdFx0XHRDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmdyaWQge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRcdG1heC13aWR0aDogODAwcHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY2FyZCB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDFyZW07XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxLjVyZW07XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0XHRcdFx0Y29sb3I6IGluaGVyaXQ7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAzMDBweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jYXJkOmhvdmVyLFxyXG5cdFx0XHRcdC5jYXJkOmZvY3VzLFxyXG5cdFx0XHRcdC5jYXJkOmFjdGl2ZSB7XHJcblx0XHRcdFx0XHRjb2xvcjogIzAwNzBmMztcclxuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jYXJkIGgyIHtcclxuXHRcdFx0XHRcdG1hcmdpbjogMCAwIDFyZW0gMDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmNhcmQgcCB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMjVyZW07XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS41O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmxvZ28ge1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxZW07XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMC41cmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblx0XHRcdFx0XHQuZ3JpZCB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LndhbGxldC1idXR0b25zIHtcclxuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiAycmVtO1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRnYXA6IDJyZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Sebatane Raphela\\\\Music\\\\web3\\\\neo-wallet-adapter\\\\packages\\\\starter\\\\nextjs-starter\\\\pages\\\\index.tsx */"
    }, void 0, false, void 0, _this)]
  }, void 0, true);
};

_s(Index, "r6hLKt50S/nrz+eYQt/vNANAhWs=", false, function () {
  return [_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2FkNDVmZGM0NzVjYzAzNjZiODMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBOzs7O0FBRUEsSUFBTVEsS0FBZSxHQUFHLFNBQWxCQSxLQUFrQixHQUFNO0FBQUE7O0FBQzdCLG1CQUFvRFIsa0ZBQVMsRUFBN0Q7QUFBQSxNQUFRUyxTQUFSLGNBQVFBLFNBQVI7QUFBQSxNQUFtQkMsV0FBbkIsY0FBbUJBLFdBQW5CO0FBQUEsTUFBZ0NDLE9BQWhDLGNBQWdDQSxPQUFoQztBQUFBLE1BQXlDQyxNQUF6QyxjQUF5Q0EsTUFBekM7O0FBQ0Esa0JBQWdDUCwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFRUSxPQUFSLGFBQVFBLE9BQVI7QUFBQSxNQUFpQkMsVUFBakIsYUFBaUJBLFVBQWpCOztBQUVBLG1CQUEwQ1QsK0NBQVEsQ0FBZ0IsSUFBaEIsQ0FBbEQ7QUFBQSxNQUFPVSxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFFQSxNQUFNQyxrQkFBa0IsR0FBR1gsa0RBQVcsK1hBQUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFaEJJLFdBQVcsRUFGSzs7QUFBQTtBQUUvQlEsWUFBQUEsTUFGK0I7O0FBR3JDLGdCQUFJQSxNQUFNLENBQUNDLE1BQVAsS0FBa0IsU0FBdEIsRUFBaUM7QUFDaENILGNBQUFBLGdCQUFnQixDQUFDLGlCQUFBRSxNQUFNLENBQUNFLElBQVAsOERBQWFDLGNBQWIsS0FBK0IsSUFBaEMsQ0FBaEI7QUFDQTs7QUFMb0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFPckNDLFlBQUFBLE9BQU8sQ0FBQ0MsS0FBUjs7QUFQcUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxJQVNuQyxDQUFDYixXQUFELENBVG1DLENBQXRD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QUFBQTtBQUFBLGFBL0VGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQ7QUFtVkEsQ0E5WkQ7O0dBQU1KO1VBQytDUjs7O0tBRC9DUTtBQWdhTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0JztcclxuaW1wb3J0IHsgd2FpdFR4LCBXaXRuZXNzU2NvcGUsIFdhbGxldE5vdENvbm5lY3RlZEVycm9yIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UnO1xyXG5pbXBvcnQgeyBXYWxsZXREaXNjb25uZWN0QnV0dG9uLCBXYWxsZXRNdWx0aUJ1dHRvbiB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aSc7XHJcbmltcG9ydCB7IHUsIHNjLCB3YWxsZXQgfSBmcm9tICdAY2l0eW9memlvbi9uZW9uLWpzJztcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTmVvbiBmcm9tICdAY2l0eW9memlvbi9uZW9uLWpzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbmRleDogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBjb25uZWN0ZWQsIGdldE5ldHdvcmtzLCBhZGRyZXNzLCBpbnZva2UgfSA9IHVzZVdhbGxldCgpO1xyXG5cdGNvbnN0IHsgYWNjb3VudCwgc2V0QWNjb3VudCB9ID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cdGNvbnN0IFt3YWxsZXROZXR3b3JrLCBzZXRXYWxsZXROZXR3b3JrXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuXHRjb25zdCBmZXRjaFdhbGxldE5ldHdvcmsgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBnZXROZXR3b3JrcygpO1xyXG5cdFx0XHRpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcblx0XHRcdFx0c2V0V2FsbGV0TmV0d29yayhyZXN1bHQuZGF0YT8uZGVmYXVsdE5ldHdvcmsgfHwgbnVsbCk7XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdH0sIFtnZXROZXR3b3Jrc10pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGNvbm5lY3RlZCkge1xyXG5cdFx0XHRmZXRjaFdhbGxldE5ldHdvcmsoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldFdhbGxldE5ldHdvcmsobnVsbCk7XHJcblx0XHR9XHJcblx0fSwgW2Nvbm5lY3RlZCwgZmV0Y2hXYWxsZXROZXR3b3JrXSk7XHJcblxyXG5cdGNvbnNvbGUubG9nKHdhbGxldE5ldHdvcmspO1xyXG5cclxuXHRjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG5cdFx0aWYgKCFhZGRyZXNzIHx8ICFjb25uZWN0ZWQpIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xyXG5cdFx0Y29uc3QgYWNjb3VudCA9IHdhbGxldC5nZXRTY3JpcHRIYXNoRnJvbUFkZHJlc3MoYWRkcmVzcyk7XHJcblx0XHQvLyBDb25zdHJ1Y3QgdGhlIHJlcXVlc3QgYW5kIGludm9rZSBpdFxyXG5cdFx0Ly8gY29uc3QgcmVzdWx0ID0gYXdhaXQgaW52b2tlKHtcclxuXHRcdC8vIFx0c2NyaXB0SGFzaDogJzB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YicsXHJcblx0XHQvLyBcdG9wZXJhdGlvbjogJ2dldE51bWJlcicsXHJcblxyXG5cdFx0Ly8gXHRzaWduZXJzOiBbXHJcblx0XHQvLyBcdFx0e1xyXG5cdFx0Ly8gXHRcdFx0YWNjb3VudDogd2FsbGV0LmdldFNjcmlwdEhhc2hGcm9tQWRkcmVzcyhhZGRyZXNzKSxcclxuXHRcdC8vIFx0XHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdC8vIFx0XHRcdHNjb3BlOiBXaXRuZXNzU2NvcGUuQ2FsbGVkQnlFbnRyeSxcclxuXHRcdC8vIFx0XHR9LFxyXG5cdFx0Ly8gXHRdLFxyXG5cdFx0Ly8gfSk7XHJcblxyXG5cdFx0Ly8gLy8gT3B0aW9uYWw6IFdhaXQgZm9yIHRoZSB0cmFuc2FjdGlvbiB0byBiZSBjb25maXJtZWQgb25jaGFpblxyXG5cdFx0Ly8gaWYgKHJlc3VsdC5kYXRhPy50eElkKSB7XHJcblx0XHQvLyBcdGF3YWl0IHdhaXRUeCgnTkVUV09SS19SUENfQUREUkVTU19IRVJFJywgcmVzdWx0LmRhdGE/LnR4SWQpO1xyXG5cdFx0Ly8gfVxyXG5cdFx0Y29uc3QgcnBjQWRkcmVzcyA9ICdodHRwczovL3Rlc3RuZXQxLm5lby5jb3ouaW86NDQzJztcclxuXHRcdGNvbnN0IG5ldHdvcmtNYWdpYyA9IDg3NzkzMzM5MDtcclxuXHJcblx0XHRjb25zdCBzY3JpcHRIYXNoID0gJzB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YicgIC8vICcweDliZmM3ZDg4ZjExZDJmNTJiMjQ0YWFiNTI5NjYzNWRkYzJkNjA4MWEnO1xyXG5cdFx0Y29uc3QgY29udHJhY3QgPSBuZXcgTmVvbi5leHBlcmltZW50YWwuU21hcnRDb250cmFjdChOZW9uLnUuSGV4U3RyaW5nLmZyb21IZXgoc2NyaXB0SGFzaCksIHtcclxuXHRcdFx0bmV0d29ya01hZ2ljLFxyXG5cdFx0XHRycGNBZGRyZXNzLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3Qgc2lnbmVycyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFjY291bnQ6IGFjY291bnQsXHJcblxyXG5cdFx0XHRcdHNjb3BlczogJ0NhbGxlZEJ5RW50cnknLFxyXG5cdFx0XHR9LFxyXG5cdFx0XTtcclxuXHJcblx0XHRsZXQgcmVzID0gYXdhaXQgY29udHJhY3QudGVzdEludm9rZShcclxuXHRcdFx0J2dldE51bWJlcicsXHJcblx0XHRcdFtcclxuXHRcdFx0XHJcblx0XHRcdF0sXHJcblx0XHRcdC8vIEB0XHJcblx0XHRcdHNpZ25lcnMsXHJcblx0XHQpO1xyXG5cdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0fSwgW2FkZHJlc3MsIGNvbm5lY3RlZCwgaW52b2tlXSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHQgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvbWFpbi5jc3NcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblx0XHQ8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbnRhaW5lciBteC1hdXRvIHAtMiBcIj5cclxuICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHB5LTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvTE9HTy5wbmdcIiBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIGFsdD1cIlwiIC8+IFxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQtNXhsIG1kOnRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkICBcIj5QbGFuZXQgWDwvaDE+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNwYWNlLXgtNiBtZDpmbGV4XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiZ2FtZXNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWRhcmtHcmF5aXNoQmx1ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPkdhbWVzPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9wb3J0Zm9saW8uaHRtbFwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZGFya0dyYXlpc2hCbHVlIHRleHQtd2hpdGUgZm9udC1ib2xkXCI+UG9ydGZvbGlvPC9hPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgaWQ9XCJtZW51LWJ0blwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoYW1idXJnZXIgbWQ6aGlkZGVuIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czp0ZXh0LXdoaXRlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItdG9wIGJnLXdoaXRlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLW1pZGRsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3R0b21cIj48L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgaWQ9XCJtZW51XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoaWRkZW4gc2VsZi1lbmQgcHktOCBtdC0xMCBzcGFjZS15LTYgZm9udC1ib2xkIGJnLXdoaXRlIHNtOnctYXV0byBzbTpzZWxmLWNlbnRlciBsZWZ0LTYgcmlnaHQtNiBkcm9wLXNoYWRvdy1tZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuXHJcbiAgXHJcbiAgICA8c2VjdGlvbiBpZD1cImhlcm9cIj5cclxuICAgICAgXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbC1yZXZlcnNlIGl0ZW1zLWNlbnRlciBweC02IG14LWF1dG8gbXQtMTAgc3BhY2UteS0wIG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvd1wiXHJcbiAgICAgID5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMiBmbGV4IGZsZXgtY29sIHNwYWNlLXktMTJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvTE9HTy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWQ6dy0xLzJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3JpZ2h0X2ltYWdlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgXHJcbiAgICA8c2VjdGlvbiBpZD1cImZlYXR1cmVzXCI+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2XHJcbiAgIFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBteC1hdXRvIG10LTIgIG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvdyBtaWRkbGVcIlxyXG4gICAgICA+XHJcbiAgICAgICBcclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtNiBweS00IGJnLVsjREMyOTg0XSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LW1kIGxlYWRpbmctdGlnaHQgIHJvdW5kZWQgc2hhZG93LW1kIGhvdmVyOmJnLVsjQzgyOUREXSBob3ZlcjpzaGFkb3ctbGcgZm9jdXM6YmctYmx1ZS03MDAgZm9jdXM6c2hhZG93LWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgYWN0aXZlOmJnLWJsdWUtODAwIGFjdGl2ZTpzaGFkb3ctbGcgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXRcIj5Db25uZWN0IFdhbGxldDwvYnV0dG9uPlxyXG5cclxuICAgIFxyXG4gICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gIFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJ0ZXN0aW1vbmlhbHNcIj5cclxuICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIHB4LTUgbXgtYXV0byBtdC0zMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0yNCBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTZcIj5cclxuICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTE2IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi13LWZ1bGwgXCI+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC13aGl0ZSBmb250LWJvbGQgc3VicGl4ZWwtYW50aWFsaWFzZWQgcHktNCB0cmFja2luZy13aWRlc3RcIj5UcmVuZGluZzwvcD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cclxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJvcmRlci1iIGJnLVsjQjIyN0NBXSBcIj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCAgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIFJhbmtcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCAgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIEdhbWVcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgR2FtZSBOYW1lc1xyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICBEYXRlL1RpbWVcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgMjQgaG91cnNcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLVsjMTUxNzRBXSAgIFwiPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2NzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBDUzpHTyAtIFBHTCBNYWpvciBBbnR3ZXJwXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgNDAwK1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2RvdGEucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIENTOkdPIC0gUEdMIE1ham9yIEFudHdlcnBcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIFNlcCAyMiwgMjAyMiA0OjMwIFBNXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA0MDArXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3duLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9mcmVlZmlyZS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgRnJlZSBGaXJlIC0gV29ybGQgU2VyaWVzXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBPY3QgMTUsIDIwMjIgNDowMCBQTVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgNTArXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3duLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9ob25vci5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgS09HIC0gS1BMIFNwcmluZyBQbGF5b2Zmc1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgTm92IDA1LCAyMDIyIDI6MzAgQU1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDEwMCtcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9sZWdlbmRzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBMT0wgLSBFVSBNYXN0ZXJzIFNwcmluZ1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDI1K1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHQgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICBcclxuXHJcblxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDJyZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQubWFpbiB7XHJcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDRyZW0gMDtcclxuXHRcdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5mb290ZXIge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAycmVtIDA7XHJcblx0XHRcdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5mb290ZXIgYSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0ZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnRpdGxlIGEge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMwMDcwZjM7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQudGl0bGUgYTpob3ZlcixcclxuXHRcdFx0XHQudGl0bGUgYTpmb2N1cyxcclxuXHRcdFx0XHQudGl0bGUgYTphY3RpdmUge1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQudGl0bGUge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMTU7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDRyZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQudGl0bGUsXHJcblx0XHRcdFx0LmRlc2NyaXB0aW9uIHtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5kZXNjcmlwdGlvbiB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDRyZW0gMDtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjU7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jb2RlIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjc1cmVtO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0XHRcdFx0XHRmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubywgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLFxyXG5cdFx0XHRcdFx0XHRDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmdyaWQge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRcdG1heC13aWR0aDogODAwcHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY2FyZCB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDFyZW07XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxLjVyZW07XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0XHRcdFx0Y29sb3I6IGluaGVyaXQ7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAzMDBweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jYXJkOmhvdmVyLFxyXG5cdFx0XHRcdC5jYXJkOmZvY3VzLFxyXG5cdFx0XHRcdC5jYXJkOmFjdGl2ZSB7XHJcblx0XHRcdFx0XHRjb2xvcjogIzAwNzBmMztcclxuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jYXJkIGgyIHtcclxuXHRcdFx0XHRcdG1hcmdpbjogMCAwIDFyZW0gMDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmNhcmQgcCB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMjVyZW07XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS41O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmxvZ28ge1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxZW07XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMC41cmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblx0XHRcdFx0XHQuZ3JpZCB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LndhbGxldC1idXR0b25zIHtcclxuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiAycmVtO1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRnYXA6IDJyZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJ1c2VXYWxsZXQiLCJXYWxsZXROb3RDb25uZWN0ZWRFcnJvciIsIndhbGxldCIsIkhlYWQiLCJOZW9uIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsIkluZGV4IiwiY29ubmVjdGVkIiwiZ2V0TmV0d29ya3MiLCJhZGRyZXNzIiwiaW52b2tlIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJ3YWxsZXROZXR3b3JrIiwic2V0V2FsbGV0TmV0d29yayIsImZldGNoV2FsbGV0TmV0d29yayIsInJlc3VsdCIsInN0YXR1cyIsImRhdGEiLCJkZWZhdWx0TmV0d29yayIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsIm9uQ2xpY2siLCJnZXRTY3JpcHRIYXNoRnJvbUFkZHJlc3MiLCJycGNBZGRyZXNzIiwibmV0d29ya01hZ2ljIiwic2NyaXB0SGFzaCIsImNvbnRyYWN0IiwiZXhwZXJpbWVudGFsIiwiU21hcnRDb250cmFjdCIsInUiLCJIZXhTdHJpbmciLCJmcm9tSGV4Iiwic2lnbmVycyIsInNjb3BlcyIsInRlc3RJbnZva2UiLCJyZXMiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==