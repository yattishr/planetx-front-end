"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js");
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-base */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/index.js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cityofzion/neon-js */ "@cityofzion/neon-js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Sebatane Raphela\\Music\\web3\\neo-wallet-adapter\\packages\\starter\\nextjs-starter\\pages\\index.tsx";










const Index = () => {
  const {
    connected,
    getNetworks,
    address,
    invoke
  } = (0,_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)();
  const {
    account,
    setAccount
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const {
    0: walletNetwork,
    1: setWalletNetwork
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const fetchWalletNetwork = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async () => {
    try {
      const result = await getNetworks();

      if (result.status === 'success') {
        var _result$data;

        setWalletNetwork(((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.defaultNetwork) || null);
      }
    } catch (error) {
      console.error(error);
    }
  }, [getNetworks]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (connected) {
      fetchWalletNetwork();
    } else {
      setWalletNetwork(null);
    }
  }, [connected, fetchWalletNetwork]);
  console.log(walletNetwork);
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async () => {
    if (!address || !connected) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_6__.WalletNotConnectedError();
    const account = _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_1__.wallet.getScriptHashFromAddress(address); // Construct the request and invoke it
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

    const rpcAddress = 'https://testnet1.neo.coz.io:443';
    const networkMagic = 877933390;
    const scriptHash = '0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b'; // '0x9bfc7d88f11d2f52b244aab5296635ddc2d6081a';

    const contract = new (_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_1___default().experimental.SmartContract)(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_1___default().u.HexString.fromHex(scriptHash), {
      networkMagic,
      rpcAddress
    });
    const signers = [{
      account: account,
      scopes: 'CalledByEntry'
    }];
    let res = await contract.testInvoke('getNumber', [], // @t
    signers);
    console.log(JSON.stringify(res));
  }, [address, connected, invoke]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "/main.css",
        className: "jsx-426706089"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("nav", {
      className: "jsx-426706089" + " " + "relative container mx-auto p-2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "jsx-426706089" + " " + "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "jsx-426706089" + " " + "pt-2 py-6 flex flex-row justify-between items-center ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
            src: "img/LOGO.png",
            height: "100",
            width: "100",
            alt: "",
            className: "jsx-426706089"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
            className: "jsx-426706089" + " " + "lg:text-5xl md:text-5xl text-white font-bold  ",
            children: "Planet X"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "jsx-426706089" + " " + "hidden space-x-6 md:flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            href: "games",
            className: "jsx-426706089" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: "Games"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
            href: "/portfolio.html",
            className: "jsx-426706089" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: "Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
          id: "menu-btn",
          className: "jsx-426706089" + " " + "block hamburger md:hidden focus:outline-none focus:text-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
            className: "jsx-426706089" + " " + "hamburger-top bg-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
            className: "jsx-426706089" + " " + "hamburger-middle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
            className: "jsx-426706089" + " " + "hamburger-bottom"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "jsx-426706089" + " " + "md:hidden",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          id: "menu",
          className: "jsx-426706089" + " " + "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 3
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
      id: "hero",
      className: "jsx-426706089",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "jsx-426706089" + " " + "container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "jsx-426706089" + " " + "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "jsx-426706089" + " " + "md:w-1/2 flex flex-col space-y-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              src: "img/LOGO.png",
              alt: "",
              className: "jsx-426706089"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "jsx-426706089" + " " + " md:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
            src: "img/right_image.png",
            alt: "",
            className: "jsx-426706089"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
      id: "features",
      className: "jsx-426706089",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "jsx-426706089" + " " + "container  flex flex-col items-center justify-center px-6 mx-auto mt-2  md:space-y-0 md:flex-row middle",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
          type: "button",
          className: "jsx-426706089" + " " + "inline-block px-6 py-4 bg-[#DC2984] text-white font-bold text-md leading-tight  rounded shadow-md hover:bg-[#C829DD] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
          children: "Connect Wallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("section", {
      id: "testimonials",
      className: "jsx-426706089",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "jsx-426706089" + " " + "max-w-6xl px-5 mx-auto mt-32 text-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "jsx-426706089" + " " + "flex flex-col mt-24 md:flex-row md:space-x-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "jsx-426706089" + " " + "my-16 flex flex-col items-center justify-center min-w-full ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
              className: "jsx-426706089" + " " + "text-5xl text-white font-bold subpixel-antialiased py-4 tracking-widest",
              children: "Trending"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("table", {
              className: "jsx-426706089" + " " + "min-w-full border border-slate-800",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("thead", {
                className: "jsx-426706089" + " " + "border-b bg-[#B227CA] ",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
                  className: "jsx-426706089",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-426706089" + " " + "text-sm font-bold  text-white px-6 py-4 text-left",
                    children: "Rank"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-426706089" + " " + "text-sm font-bold  text-white px-6 py-4 text-left",
                    children: "Game"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-426706089" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Game Names"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 189,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-426706089" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Date/Time"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-426706089" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "24 hours"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 17
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 15
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 13
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tbody", {
                className: "jsx-426706089" + " " + "bg-[#15174A]   ",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
                  className: "jsx-426706089" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                      src: "img/cs.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "400+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 17
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
                  className: "jsx-426706089" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 220,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                      src: "img/dota.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "400+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 17
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
                  className: "jsx-426706089" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                      src: "img/down.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                      src: "img/freefire.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 240,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 239,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Free Fire - World Series"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Oct 15, 2022 4:00 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "50+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 17
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
                  className: "jsx-426706089" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                      src: "img/down.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                      src: "img/honor.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "KOG - KPL Spring Playoffs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 259,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Nov 05, 2022 2:30 AM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "100+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 17
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 252,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("tr", {
                  className: "jsx-426706089" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 271,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                      src: "img/legends.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 274,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 273,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "LOL - EU Masters Spring"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 276,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 279,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "25+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 17
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 15
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 13
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 11
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "426706089",
      children: ".container.jsx-426706089{padding:0 2rem;}.main.jsx-426706089{min-height:100vh;padding:4rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-426706089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;padding:2rem 0;border-top:1px solid #eaeaea;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-426706089 a.jsx-426706089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.title.jsx-426706089 a.jsx-426706089{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-426706089 a.jsx-426706089:hover,.title.jsx-426706089 a.jsx-426706089:focus,.title.jsx-426706089 a.jsx-426706089:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-426706089{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-426706089,.description.jsx-426706089{text-align:center;}.description.jsx-426706089{margin:4rem 0;line-height:1.5;font-size:1.5rem;}.code.jsx-426706089{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New,monospace;}.grid.jsx-426706089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;}.card.jsx-426706089{margin:1rem;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;max-width:300px;}.card.jsx-426706089:hover,.card.jsx-426706089:focus,.card.jsx-426706089:active{color:#0070f3;border-color:#0070f3;}.card.jsx-426706089 h2.jsx-426706089{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-426706089 p.jsx-426706089{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-426706089{height:1em;margin-left:0.5rem;}@media (max-width:600px){.grid.jsx-426706089{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.wallet-buttons.jsx-426706089{padding-top:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2ViYXRhbmUgUmFwaGVsYVxcTXVzaWNcXHdlYjNcXG5lby13YWxsZXQtYWRhcHRlclxccGFja2FnZXNcXHN0YXJ0ZXJcXG5leHRqcy1zdGFydGVyXFxwYWdlc1xcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlTZSxBQUdxQixBQUlFLEFBVUosQUFTQSxBQU9DLEFBT1ksQUFJakIsQUFPUyxBQUlKLEFBTUssQUFTTixBQVFELEFBY0UsQUFLSSxBQUtULEFBTUUsQUFNQyxBQU1LLFNBM0VBLEFBMERDLEVBTUMsQUFNSSxDQXBDUixFQTdDTSxBQXNCTCxBQXFDSyxDQXpGdEIsRUFJZ0IsQUFpSEYsQ0FyRWQsQUE4Q2tCLENBcENDLE9BaEJILENBa0NDLEFBd0JBLEdBL0NDLEFBcURsQixFQXJHUSxHQXFGUixBQUtBLEVBcENpQixJQWhCakIsRUFrQ2UsQUF3QmYsSUEvQ0EsTUFNa0IsSUFrQkksR0F6Q3RCLElBTkEsQ0F6QmMsS0F3RFUsSUFoRGhCLEFBU2dCLEFBNENKLGVBNkNuQixFQU1zQixnQkF2R1AsQUFnRVUsZUEvREksVUFnRVYsT0F6RUcsWUFVQyxBQWdFOEIsZ0JBYjlCLEVBbURkLElBL0ZVLEtBZ0dwQixhQXpEQSwwQkF2RHdCLGlDQVVKLGFBZ0VILEdBekRKLEFBNENHLGFBY2hCLHFDQTFFb0IsT0E2REgsY0E1Q2pCLEVBNkNBLElBcERBLGtFQVRBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2ViYXRhbmUgUmFwaGVsYVxcTXVzaWNcXHdlYjNcXG5lby13YWxsZXQtYWRhcHRlclxccGFja2FnZXNcXHN0YXJ0ZXJcXG5leHRqcy1zdGFydGVyXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0JztcclxuaW1wb3J0IHsgd2FpdFR4LCBXaXRuZXNzU2NvcGUsIFdhbGxldE5vdENvbm5lY3RlZEVycm9yIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UnO1xyXG5pbXBvcnQgeyBXYWxsZXREaXNjb25uZWN0QnV0dG9uLCBXYWxsZXRNdWx0aUJ1dHRvbiB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aSc7XHJcbmltcG9ydCB7IHUsIHNjLCB3YWxsZXQgfSBmcm9tICdAY2l0eW9memlvbi9uZW9uLWpzJztcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTmVvbiBmcm9tICdAY2l0eW9memlvbi9uZW9uLWpzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbmRleDogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblx0Y29uc3QgeyBjb25uZWN0ZWQsIGdldE5ldHdvcmtzLCBhZGRyZXNzLCBpbnZva2UgfSA9IHVzZVdhbGxldCgpO1xyXG5cdGNvbnN0IHsgYWNjb3VudCwgc2V0QWNjb3VudCB9ID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG5cdGNvbnN0IFt3YWxsZXROZXR3b3JrLCBzZXRXYWxsZXROZXR3b3JrXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuXHRjb25zdCBmZXRjaFdhbGxldE5ldHdvcmsgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBnZXROZXR3b3JrcygpO1xyXG5cdFx0XHRpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcblx0XHRcdFx0c2V0V2FsbGV0TmV0d29yayhyZXN1bHQuZGF0YT8uZGVmYXVsdE5ldHdvcmsgfHwgbnVsbCk7XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdH0sIFtnZXROZXR3b3Jrc10pO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKGNvbm5lY3RlZCkge1xyXG5cdFx0XHRmZXRjaFdhbGxldE5ldHdvcmsoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHNldFdhbGxldE5ldHdvcmsobnVsbCk7XHJcblx0XHR9XHJcblx0fSwgW2Nvbm5lY3RlZCwgZmV0Y2hXYWxsZXROZXR3b3JrXSk7XHJcblxyXG5cdGNvbnNvbGUubG9nKHdhbGxldE5ldHdvcmspO1xyXG5cclxuXHRjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG5cdFx0aWYgKCFhZGRyZXNzIHx8ICFjb25uZWN0ZWQpIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xyXG5cdFx0Y29uc3QgYWNjb3VudCA9IHdhbGxldC5nZXRTY3JpcHRIYXNoRnJvbUFkZHJlc3MoYWRkcmVzcyk7XHJcblx0XHQvLyBDb25zdHJ1Y3QgdGhlIHJlcXVlc3QgYW5kIGludm9rZSBpdFxyXG5cdFx0Ly8gY29uc3QgcmVzdWx0ID0gYXdhaXQgaW52b2tlKHtcclxuXHRcdC8vIFx0c2NyaXB0SGFzaDogJzB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YicsXHJcblx0XHQvLyBcdG9wZXJhdGlvbjogJ2dldE51bWJlcicsXHJcblxyXG5cdFx0Ly8gXHRzaWduZXJzOiBbXHJcblx0XHQvLyBcdFx0e1xyXG5cdFx0Ly8gXHRcdFx0YWNjb3VudDogd2FsbGV0LmdldFNjcmlwdEhhc2hGcm9tQWRkcmVzcyhhZGRyZXNzKSxcclxuXHRcdC8vIFx0XHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdC8vIFx0XHRcdHNjb3BlOiBXaXRuZXNzU2NvcGUuQ2FsbGVkQnlFbnRyeSxcclxuXHRcdC8vIFx0XHR9LFxyXG5cdFx0Ly8gXHRdLFxyXG5cdFx0Ly8gfSk7XHJcblxyXG5cdFx0Ly8gLy8gT3B0aW9uYWw6IFdhaXQgZm9yIHRoZSB0cmFuc2FjdGlvbiB0byBiZSBjb25maXJtZWQgb25jaGFpblxyXG5cdFx0Ly8gaWYgKHJlc3VsdC5kYXRhPy50eElkKSB7XHJcblx0XHQvLyBcdGF3YWl0IHdhaXRUeCgnTkVUV09SS19SUENfQUREUkVTU19IRVJFJywgcmVzdWx0LmRhdGE/LnR4SWQpO1xyXG5cdFx0Ly8gfVxyXG5cdFx0Y29uc3QgcnBjQWRkcmVzcyA9ICdodHRwczovL3Rlc3RuZXQxLm5lby5jb3ouaW86NDQzJztcclxuXHRcdGNvbnN0IG5ldHdvcmtNYWdpYyA9IDg3NzkzMzM5MDtcclxuXHJcblx0XHRjb25zdCBzY3JpcHRIYXNoID0gJzB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YicgIC8vICcweDliZmM3ZDg4ZjExZDJmNTJiMjQ0YWFiNTI5NjYzNWRkYzJkNjA4MWEnO1xyXG5cdFx0Y29uc3QgY29udHJhY3QgPSBuZXcgTmVvbi5leHBlcmltZW50YWwuU21hcnRDb250cmFjdChOZW9uLnUuSGV4U3RyaW5nLmZyb21IZXgoc2NyaXB0SGFzaCksIHtcclxuXHRcdFx0bmV0d29ya01hZ2ljLFxyXG5cdFx0XHRycGNBZGRyZXNzLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3Qgc2lnbmVycyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFjY291bnQ6IGFjY291bnQsXHJcblxyXG5cdFx0XHRcdHNjb3BlczogJ0NhbGxlZEJ5RW50cnknLFxyXG5cdFx0XHR9LFxyXG5cdFx0XTtcclxuXHJcblx0XHRsZXQgcmVzID0gYXdhaXQgY29udHJhY3QudGVzdEludm9rZShcclxuXHRcdFx0J2dldE51bWJlcicsXHJcblx0XHRcdFtcclxuXHRcdFx0XHJcblx0XHRcdF0sXHJcblx0XHRcdC8vIEB0XHJcblx0XHRcdHNpZ25lcnMsXHJcblx0XHQpO1xyXG5cdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0fSwgW2FkZHJlc3MsIGNvbm5lY3RlZCwgaW52b2tlXSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHQgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvbWFpbi5jc3NcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblx0XHQ8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbnRhaW5lciBteC1hdXRvIHAtMiBcIj5cclxuICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHB5LTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvTE9HTy5wbmdcIiBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIGFsdD1cIlwiIC8+IFxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQtNXhsIG1kOnRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkICBcIj5QbGFuZXQgWDwvaDE+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNwYWNlLXgtNiBtZDpmbGV4XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiZ2FtZXNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWRhcmtHcmF5aXNoQmx1ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPkdhbWVzPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9wb3J0Zm9saW8uaHRtbFwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZGFya0dyYXlpc2hCbHVlIHRleHQtd2hpdGUgZm9udC1ib2xkXCI+UG9ydGZvbGlvPC9hPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgaWQ9XCJtZW51LWJ0blwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBoYW1idXJnZXIgbWQ6aGlkZGVuIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czp0ZXh0LXdoaXRlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItdG9wIGJnLXdoaXRlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLW1pZGRsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3R0b21cIj48L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgaWQ9XCJtZW51XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoaWRkZW4gc2VsZi1lbmQgcHktOCBtdC0xMCBzcGFjZS15LTYgZm9udC1ib2xkIGJnLXdoaXRlIHNtOnctYXV0byBzbTpzZWxmLWNlbnRlciBsZWZ0LTYgcmlnaHQtNiBkcm9wLXNoYWRvdy1tZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuXHJcbiAgXHJcbiAgICA8c2VjdGlvbiBpZD1cImhlcm9cIj5cclxuICAgICAgXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbC1yZXZlcnNlIGl0ZW1zLWNlbnRlciBweC02IG14LWF1dG8gbXQtMTAgc3BhY2UteS0wIG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvd1wiXHJcbiAgICAgID5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMiBmbGV4IGZsZXgtY29sIHNwYWNlLXktMTJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvTE9HTy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWQ6dy0xLzJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3JpZ2h0X2ltYWdlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgXHJcbiAgICA8c2VjdGlvbiBpZD1cImZlYXR1cmVzXCI+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2XHJcbiAgIFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBteC1hdXRvIG10LTIgIG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvdyBtaWRkbGVcIlxyXG4gICAgICA+XHJcbiAgICAgICBcclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtNiBweS00IGJnLVsjREMyOTg0XSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LW1kIGxlYWRpbmctdGlnaHQgIHJvdW5kZWQgc2hhZG93LW1kIGhvdmVyOmJnLVsjQzgyOUREXSBob3ZlcjpzaGFkb3ctbGcgZm9jdXM6YmctYmx1ZS03MDAgZm9jdXM6c2hhZG93LWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTAgYWN0aXZlOmJnLWJsdWUtODAwIGFjdGl2ZTpzaGFkb3ctbGcgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXRcIj5Db25uZWN0IFdhbGxldDwvYnV0dG9uPlxyXG5cclxuICAgIFxyXG4gICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gIFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJ0ZXN0aW1vbmlhbHNcIj5cclxuICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIHB4LTUgbXgtYXV0byBtdC0zMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0yNCBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTZcIj5cclxuICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTE2IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi13LWZ1bGwgXCI+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC13aGl0ZSBmb250LWJvbGQgc3VicGl4ZWwtYW50aWFsaWFzZWQgcHktNCB0cmFja2luZy13aWRlc3RcIj5UcmVuZGluZzwvcD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDBcIj5cclxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJvcmRlci1iIGJnLVsjQjIyN0NBXSBcIj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCAgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIFJhbmtcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCAgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIEdhbWVcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgR2FtZSBOYW1lc1xyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICBEYXRlL1RpbWVcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgMjQgaG91cnNcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLVsjMTUxNzRBXSAgIFwiPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2NzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBDUzpHTyAtIFBHTCBNYWpvciBBbnR3ZXJwXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgNDAwK1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2RvdGEucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIENTOkdPIC0gUEdMIE1ham9yIEFudHdlcnBcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIFNlcCAyMiwgMjAyMiA0OjMwIFBNXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA0MDArXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3duLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9mcmVlZmlyZS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgRnJlZSBGaXJlIC0gV29ybGQgU2VyaWVzXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBPY3QgMTUsIDIwMjIgNDowMCBQTVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgNTArXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3duLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9ob25vci5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgS09HIC0gS1BMIFNwcmluZyBQbGF5b2Zmc1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgTm92IDA1LCAyMDIyIDI6MzAgQU1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDEwMCtcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9sZWdlbmRzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBMT0wgLSBFVSBNYXN0ZXJzIFNwcmluZ1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDI1K1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHQgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICBcclxuXHJcblxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0LmNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwIDJyZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQubWFpbiB7XHJcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDRyZW0gMDtcclxuXHRcdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5mb290ZXIge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXg6IDE7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAycmVtIDA7XHJcblx0XHRcdFx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5mb290ZXIgYSB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0ZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnRpdGxlIGEge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMwMDcwZjM7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQudGl0bGUgYTpob3ZlcixcclxuXHRcdFx0XHQudGl0bGUgYTpmb2N1cyxcclxuXHRcdFx0XHQudGl0bGUgYTphY3RpdmUge1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQudGl0bGUge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuMTU7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDRyZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQudGl0bGUsXHJcblx0XHRcdFx0LmRlc2NyaXB0aW9uIHtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5kZXNjcmlwdGlvbiB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDRyZW0gMDtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjU7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jb2RlIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwLjc1cmVtO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0XHRcdFx0XHRmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubywgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLFxyXG5cdFx0XHRcdFx0XHRDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmdyaWQge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdFx0XHRcdG1heC13aWR0aDogODAwcHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY2FyZCB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDFyZW07XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxLjVyZW07XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0XHRcdFx0Y29sb3I6IGluaGVyaXQ7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG5cdFx0XHRcdFx0bWF4LXdpZHRoOiAzMDBweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jYXJkOmhvdmVyLFxyXG5cdFx0XHRcdC5jYXJkOmZvY3VzLFxyXG5cdFx0XHRcdC5jYXJkOmFjdGl2ZSB7XHJcblx0XHRcdFx0XHRjb2xvcjogIzAwNzBmMztcclxuXHRcdFx0XHRcdGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jYXJkIGgyIHtcclxuXHRcdFx0XHRcdG1hcmdpbjogMCAwIDFyZW0gMDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmNhcmQgcCB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuMjVyZW07XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS41O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmxvZ28ge1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxZW07XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMC41cmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblx0XHRcdFx0XHQuZ3JpZCB7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LndhbGxldC1idXR0b25zIHtcclxuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiAycmVtO1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRnYXA6IDJyZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRgfTwvc3R5bGU+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Sebatane Raphela\\\\Music\\\\web3\\\\neo-wallet-adapter\\\\packages\\\\starter\\\\nextjs-starter\\\\pages\\\\index.tsx */"
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

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/components/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/components/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/utils/errors.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _errors__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _errors__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "@cityofzion/neon-js":
/*!**************************************!*\
  !*** external "@cityofzion/neon-js" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@cityofzion/neon-js");

/***/ }),

/***/ "eventemitter3":
/*!********************************!*\
  !*** external "eventemitter3" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("eventemitter3");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBQUE7QUFsQnFEO0FBQVQsR0FBNUMsRUFtQkNyQyxRQW5CRCxDQUFSO0FBb0JILENBMU42QixDQUF2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQlA7QUFDTyxNQUFNSixhQUFhLGdCQUFHOEMsb0RBQWEsQ0FBQyxFQUFELENBQW5DO0FBQ0EsU0FBUzFKLFNBQVQsR0FBcUI7QUFDeEIsU0FBTzJKLGlEQUFVLENBQUMvQyxhQUFELENBQWpCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ08sTUFBTUQsc0JBQU4sU0FBcUM5RCwrRUFBckMsQ0FBaUQ7QUFDcERFLEVBQUFBLFdBQVcsR0FBRztBQUNWLFVBQU0sR0FBR0csU0FBVDtBQUNBLFNBQUtDLElBQUwsR0FBWSx3QkFBWjtBQUNIOztBQUptRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0R4RDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9hZGFwdGVyLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvZXJyb3JzLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9wb2xsLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvd2FpdC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9jb21wb25lbnRzL3dhbGxldC1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9ob29rcy91c2Utd2FsbGV0LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QvbGliL2luZGV4LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QvbGliL3V0aWxzL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJAY2l0eW9memlvbi9uZW9uLWpzXCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwiZXZlbnRlbWl0dGVyM1wiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdCc7XHJcbmltcG9ydCB7IHdhaXRUeCwgV2l0bmVzc1Njb3BlLCBXYWxsZXROb3RDb25uZWN0ZWRFcnJvciB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlJztcclxuaW1wb3J0IHsgV2FsbGV0RGlzY29ubmVjdEJ1dHRvbiwgV2FsbGV0TXVsdGlCdXR0b24gfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWknO1xyXG5pbXBvcnQgeyB1LCBzYywgd2FsbGV0IH0gZnJvbSAnQGNpdHlvZnppb24vbmVvbi1qcyc7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IE5lb24gZnJvbSAnQGNpdHlvZnppb24vbmVvbi1qcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5kZXg6IE5leHRQYWdlID0gKCkgPT4ge1xyXG5cdGNvbnN0IHsgY29ubmVjdGVkLCBnZXROZXR3b3JrcywgYWRkcmVzcywgaW52b2tlIH0gPSB1c2VXYWxsZXQoKTtcclxuXHRjb25zdCB7IGFjY291bnQsIHNldEFjY291bnQgfSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHRjb25zdCBbd2FsbGV0TmV0d29yaywgc2V0V2FsbGV0TmV0d29ya10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcblx0Y29uc3QgZmV0Y2hXYWxsZXROZXR3b3JrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0TmV0d29ya3MoKTtcclxuXHRcdFx0aWYgKHJlc3VsdC5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG5cdFx0XHRcdHNldFdhbGxldE5ldHdvcmsocmVzdWx0LmRhdGE/LmRlZmF1bHROZXR3b3JrIHx8IG51bGwpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHR9LCBbZ2V0TmV0d29ya3NdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmIChjb25uZWN0ZWQpIHtcclxuXHRcdFx0ZmV0Y2hXYWxsZXROZXR3b3JrKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzZXRXYWxsZXROZXR3b3JrKG51bGwpO1xyXG5cdFx0fVxyXG5cdH0sIFtjb25uZWN0ZWQsIGZldGNoV2FsbGV0TmV0d29ya10pO1xyXG5cclxuXHRjb25zb2xlLmxvZyh3YWxsZXROZXR3b3JrKTtcclxuXHJcblx0Y29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuXHRcdGlmICghYWRkcmVzcyB8fCAhY29ubmVjdGVkKSB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcclxuXHRcdGNvbnN0IGFjY291bnQgPSB3YWxsZXQuZ2V0U2NyaXB0SGFzaEZyb21BZGRyZXNzKGFkZHJlc3MpO1xyXG5cdFx0Ly8gQ29uc3RydWN0IHRoZSByZXF1ZXN0IGFuZCBpbnZva2UgaXRcclxuXHRcdC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGludm9rZSh7XHJcblx0XHQvLyBcdHNjcmlwdEhhc2g6ICcweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2InLFxyXG5cdFx0Ly8gXHRvcGVyYXRpb246ICdnZXROdW1iZXInLFxyXG5cclxuXHRcdC8vIFx0c2lnbmVyczogW1xyXG5cdFx0Ly8gXHRcdHtcclxuXHRcdC8vIFx0XHRcdGFjY291bnQ6IHdhbGxldC5nZXRTY3JpcHRIYXNoRnJvbUFkZHJlc3MoYWRkcmVzcyksXHJcblx0XHQvLyBcdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHQvLyBcdFx0XHRzY29wZTogV2l0bmVzc1Njb3BlLkNhbGxlZEJ5RW50cnksXHJcblx0XHQvLyBcdFx0fSxcclxuXHRcdC8vIFx0XSxcclxuXHRcdC8vIH0pO1xyXG5cclxuXHRcdC8vIC8vIE9wdGlvbmFsOiBXYWl0IGZvciB0aGUgdHJhbnNhY3Rpb24gdG8gYmUgY29uZmlybWVkIG9uY2hhaW5cclxuXHRcdC8vIGlmIChyZXN1bHQuZGF0YT8udHhJZCkge1xyXG5cdFx0Ly8gXHRhd2FpdCB3YWl0VHgoJ05FVFdPUktfUlBDX0FERFJFU1NfSEVSRScsIHJlc3VsdC5kYXRhPy50eElkKTtcclxuXHRcdC8vIH1cclxuXHRcdGNvbnN0IHJwY0FkZHJlc3MgPSAnaHR0cHM6Ly90ZXN0bmV0MS5uZW8uY296LmlvOjQ0Myc7XHJcblx0XHRjb25zdCBuZXR3b3JrTWFnaWMgPSA4Nzc5MzMzOTA7XHJcblxyXG5cdFx0Y29uc3Qgc2NyaXB0SGFzaCA9ICcweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2InICAvLyAnMHg5YmZjN2Q4OGYxMWQyZjUyYjI0NGFhYjUyOTY2MzVkZGMyZDYwODFhJztcclxuXHRcdGNvbnN0IGNvbnRyYWN0ID0gbmV3IE5lb24uZXhwZXJpbWVudGFsLlNtYXJ0Q29udHJhY3QoTmVvbi51LkhleFN0cmluZy5mcm9tSGV4KHNjcmlwdEhhc2gpLCB7XHJcblx0XHRcdG5ldHdvcmtNYWdpYyxcclxuXHRcdFx0cnBjQWRkcmVzcyxcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNvbnN0IHNpZ25lcnMgPSBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhY2NvdW50OiBhY2NvdW50LFxyXG5cclxuXHRcdFx0XHRzY29wZXM6ICdDYWxsZWRCeUVudHJ5JyxcclxuXHRcdFx0fSxcclxuXHRcdF07XHJcblxyXG5cdFx0bGV0IHJlcyA9IGF3YWl0IGNvbnRyYWN0LnRlc3RJbnZva2UoXHJcblx0XHRcdCdnZXROdW1iZXInLFxyXG5cdFx0XHRbXHJcblx0XHRcdFxyXG5cdFx0XHRdLFxyXG5cdFx0XHQvLyBAdFxyXG5cdFx0XHRzaWduZXJzLFxyXG5cdFx0KTtcclxuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cdH0sIFthZGRyZXNzLCBjb25uZWN0ZWQsIGludm9rZV0pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0IDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL21haW4uY3NzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cdFx0PG5hdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjb250YWluZXIgbXgtYXV0byBwLTIgXCI+XHJcbiAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBweS02IGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL0xPR08ucG5nXCIgaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIiBhbHQ9XCJcIiAvPiBcclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsZzp0ZXh0LTV4bCBtZDp0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCAgXCI+UGxhbmV0IFg8L2gxPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzcGFjZS14LTYgbWQ6ZmxleFwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImdhbWVzXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1kYXJrR3JheWlzaEJsdWUgdGV4dC13aGl0ZSBmb250LWJvbGRcIj5HYW1lczwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvcG9ydGZvbGlvLmh0bWxcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWRhcmtHcmF5aXNoQmx1ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPlBvcnRmb2xpbzwvYT5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGlkPVwibWVudS1idG5cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaGFtYnVyZ2VyIG1kOmhpZGRlbiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLXRvcCBiZy13aGl0ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1taWRkbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm90dG9tXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGlkPVwibWVudVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgaGlkZGVuIHNlbGYtZW5kIHB5LTggbXQtMTAgc3BhY2UteS02IGZvbnQtYm9sZCBiZy13aGl0ZSBzbTp3LWF1dG8gc206c2VsZi1jZW50ZXIgbGVmdC02IHJpZ2h0LTYgZHJvcC1zaGFkb3ctbWRcIlxyXG4gICAgICAgID5cclxuICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcblxyXG4gIFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJoZXJvXCI+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wtcmV2ZXJzZSBpdGVtcy1jZW50ZXIgcHgtNiBteC1hdXRvIG10LTEwIHNwYWNlLXktMCBtZDpzcGFjZS15LTAgbWQ6ZmxleC1yb3dcIlxyXG4gICAgICA+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzIgZmxleCBmbGV4LWNvbCBzcGFjZS15LTEyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL0xPR08ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1kOnctMS8yXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9yaWdodF9pbWFnZS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgIFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJmZWF0dXJlc1wiPlxyXG4gICAgICBcclxuICAgICAgPGRpdlxyXG4gICBcclxuICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgbXgtYXV0byBtdC0yICBtZDpzcGFjZS15LTAgbWQ6ZmxleC1yb3cgbWlkZGxlXCJcclxuICAgICAgPlxyXG4gICAgICAgXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB4LTYgcHktNCBiZy1bI0RDMjk4NF0gdGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC1tZCBsZWFkaW5nLXRpZ2h0ICByb3VuZGVkIHNoYWRvdy1tZCBob3ZlcjpiZy1bI0M4MjlERF0gaG92ZXI6c2hhZG93LWxnIGZvY3VzOmJnLWJsdWUtNzAwIGZvY3VzOnNoYWRvdy1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0wIGFjdGl2ZTpiZy1ibHVlLTgwMCBhY3RpdmU6c2hhZG93LWxnIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0XCI+Q29ubmVjdCBXYWxsZXQ8L2J1dHRvbj5cclxuXHJcbiAgICBcclxuICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICBcclxuICAgIDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxzXCI+XHJcbiAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBweC01IG14LWF1dG8gbXQtMzIgdGV4dC1jZW50ZXJcIj5cclxuICAgIFxyXG4gICAgICBcclxuICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtMjQgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC02XCI+XHJcbiAgICAgICAgIFxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4tdy1mdWxsIFwiPlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkIHN1YnBpeGVsLWFudGlhbGlhc2VkIHB5LTQgdHJhY2tpbmctd2lkZXN0XCI+VHJlbmRpbmc8L3A+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJib3JkZXItYiBiZy1bI0IyMjdDQV0gXCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICBSYW5rXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICBHYW1lXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIEdhbWUgTmFtZXNcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgRGF0ZS9UaW1lXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDI0IGhvdXJzXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy1bIzE1MTc0QV0gICBcIj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9jcy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgQ1M6R08gLSBQR0wgTWFqb3IgQW50d2VycFxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDQwMCtcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3RhLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBDUzpHTyAtIFBHTCBNYWpvciBBbnR3ZXJwXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgNDAwK1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG93bi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZnJlZWZpcmUucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIEZyZWUgRmlyZSAtIFdvcmxkIFNlcmllc1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgT2N0IDE1LCAyMDIyIDQ6MDAgUE1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDUwK1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG93bi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvaG9ub3IucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIEtPRyAtIEtQTCBTcHJpbmcgUGxheW9mZnNcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIE5vdiAwNSwgMjAyMiAyOjMwIEFNXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAxMDArXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy91cC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvbGVnZW5kcy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgTE9MIC0gRVUgTWFzdGVycyBTcHJpbmdcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIFNlcCAyMiwgMjAyMiA0OjMwIFBNXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAyNStcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblx0ICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgXHJcblxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMCAycmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Lm1haW4ge1xyXG5cdFx0XHRcdFx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiA0cmVtIDA7XHJcblx0XHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuZm9vdGVyIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMnJlbSAwO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuZm9vdGVyIGEge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGZsZXgtZ3JvdzogMTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC50aXRsZSBhIHtcclxuXHRcdFx0XHRcdGNvbG9yOiAjMDA3MGYzO1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnRpdGxlIGE6aG92ZXIsXHJcblx0XHRcdFx0LnRpdGxlIGE6Zm9jdXMsXHJcblx0XHRcdFx0LnRpdGxlIGE6YWN0aXZlIHtcclxuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnRpdGxlIHtcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiA0cmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnRpdGxlLFxyXG5cdFx0XHRcdC5kZXNjcmlwdGlvbiB7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuZGVzY3JpcHRpb24ge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiA0cmVtIDA7XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS41O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY29kZSB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMC43NXJlbTtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubyxcclxuXHRcdFx0XHRcdFx0Q291cmllciBOZXcsIG1vbm9zcGFjZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5ncmlkIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0XHRtYXgtd2lkdGg6IDgwMHB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmNhcmQge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAxcmVtO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMS41cmVtO1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHRcdGNvbG9yOiBpbmhlcml0O1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuXHRcdFx0XHRcdG1heC13aWR0aDogMzAwcHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY2FyZDpob3ZlcixcclxuXHRcdFx0XHQuY2FyZDpmb2N1cyxcclxuXHRcdFx0XHQuY2FyZDphY3RpdmUge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMwMDcwZjM7XHJcblx0XHRcdFx0XHRib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY2FyZCBoMiB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDAgMCAxcmVtIDA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jYXJkIHAge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjI1cmVtO1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5sb2dvIHtcclxuXHRcdFx0XHRcdGhlaWdodDogMWVtO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cdFx0XHRcdFx0LmdyaWQge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC53YWxsZXQtYnV0dG9ucyB7XHJcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMnJlbTtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdFx0Z2FwOiAycmVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuZXhwb3J0IHsgRXZlbnRFbWl0dGVyIH07XG5leHBvcnQgdmFyIFdpdG5lc3NTY29wZTtcbihmdW5jdGlvbiAoV2l0bmVzc1Njb3BlKSB7XG4gICAgV2l0bmVzc1Njb3BlW1dpdG5lc3NTY29wZVtcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAgIFdpdG5lc3NTY29wZVtXaXRuZXNzU2NvcGVbXCJDYWxsZWRCeUVudHJ5XCJdID0gMV0gPSBcIkNhbGxlZEJ5RW50cnlcIjtcbiAgICBXaXRuZXNzU2NvcGVbV2l0bmVzc1Njb3BlW1wiQ3VzdG9tQ29udHJhY3RzXCJdID0gMTZdID0gXCJDdXN0b21Db250cmFjdHNcIjtcbiAgICBXaXRuZXNzU2NvcGVbV2l0bmVzc1Njb3BlW1wiQ3VzdG9tR3JvdXBzXCJdID0gMzJdID0gXCJDdXN0b21Hcm91cHNcIjtcbiAgICBXaXRuZXNzU2NvcGVbV2l0bmVzc1Njb3BlW1wiR2xvYmFsXCJdID0gMTI4XSA9IFwiR2xvYmFsXCI7XG59KShXaXRuZXNzU2NvcGUgfHwgKFdpdG5lc3NTY29wZSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgQmFzZVdhbGxldEFkYXB0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRhcHRlci5qcy5tYXAiLCJleHBvcnQgY2xhc3MgV2FsbGV0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBlcnJvcikge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RGb3VuZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90Rm91bmRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdEluc3RhbGxlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90SW5zdGFsbGVkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RSZWFkeUVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90UmVhZHlFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldENvbm5lY3Rpb25FcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldENvbm5lY3Rpb25FcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldERpc2Nvbm5lY3RlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0RGlzY29ubmVjdGVkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXREaXNjb25uZWN0aW9uRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRBY2NvdW50RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRBY2NvdW50RXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE5vdENvbm5lY3RlZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0VGltZW91dEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0VGltZW91dEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0V2luZG93QmxvY2tlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0V2luZG93QmxvY2tlZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0V2luZG93Q2xvc2VkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRXaW5kb3dDbG9zZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE1ldGhvZE5vdFN1cHBvcnRlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0TWV0aG9kTm90U3VwcG9ydGVkRXJyb3InO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9ycy5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2FkYXB0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9lcnJvcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2xsJztcbmV4cG9ydCAqIGZyb20gJy4vd2FpdCc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBwb2xsKGNhbGxiYWNrLCBpbnRlcnZhbCwgY291bnQpIHtcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgZG9uZSA9IHlpZWxkIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBpZiAoIWRvbmUpXG4gICAgICAgICAgICAgICAgcG9sbChjYWxsYmFjaywgaW50ZXJ2YWwsIGNvdW50IC0gMSk7XG4gICAgICAgIH0pLCBpbnRlcnZhbCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBvbGxVbnRpbFJlYWR5KGFkYXB0ZXIsIHBvbGxJbnRlcnZhbCwgcG9sbENvdW50KSB7XG4gICAgcG9sbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcmVhZHkgfSA9IGFkYXB0ZXI7XG4gICAgICAgIGlmIChyZWFkeSkge1xuICAgICAgICAgICAgaWYgKCFhZGFwdGVyLmVtaXQoJ3JlYWR5JykpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7YWRhcHRlci5jb25zdHJ1Y3Rvci5uYW1lfSBpcyByZWFkeSBidXQgbm8gbGlzdGVuZXIgd2FzIHJlZ2lzdGVyZWRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVhZHk7XG4gICAgfSwgcG9sbEludGVydmFsLCBwb2xsQ291bnQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9sbC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHJwYyB9IGZyb20gJ0BjaXR5b2Z6aW9uL25lb24tanMnO1xuZXhwb3J0IGZ1bmN0aW9uIHdhaXRUeChycGNBZGRyZXNzLCB0eElkLCByZWFkRnJlcXVlbmN5ID0gMTAwMCwgdGltZW91dCA9IDMwMDAwKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBycGNDbGllbnQgPSBuZXcgcnBjLlJQQ0NsaWVudChycGNBZGRyZXNzKTtcbiAgICAgICAgLy8gV2FpdCB1bnRpbCB0aGUgdHJhbnNhY3Rpb24gY2FuIGJlIGZvdW5kLCBpZiBpdCdzIGZvdW5kIGl0IG1lYW5zIGl0J3Mgb2sgYmVjYXVzZSBpdCBoYXMgYmVlbiBpbnNlcnRlZCBpbiBhIGJsb2NrXG4gICAgICAgIC8vIE90aGVyd2lzZSB0cmlnZ2VyIHRoZSB0aW1lb3V0IG1lYW5pbmcgdGhhdCBpdCdzIG5vdCBpbnNlcnRlZCBpbiB0aGUgYmxvY2sgKGF2ZXJhZ2UgYmxvY2sgdGltZSAxNXMpXG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSB0aW1lb3V0IGhhcyBwYXNzZWRcbiAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPiB0aW1lb3V0KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHRyYW5zYWN0aW9uIGZyb20gdGhlIHJwY0NsaWVudFxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0geWllbGQgcnBjQ2xpZW50LmdldFJhd1RyYW5zYWN0aW9uKHR4SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBTbGVlcCBmb3IgdGhlIG5leHQgY3ljbGVcbiAgICAgICAgICAgICAgICB5aWVsZCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCByZWFkRnJlcXVlbmN5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKCF0cmFuc2FjdGlvbik7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWl0LmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IsIFdhbGxldE5vdFJlYWR5RXJyb3IsIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXYWxsZXROb3RTZWxlY3RlZEVycm9yIH0gZnJvbSAnLi4vdXRpbHMvZXJyb3JzJztcbmltcG9ydCB7IFdhbGxldENvbnRleHQgfSBmcm9tICcuLi9ob29rcy91c2Utd2FsbGV0JztcbmNvbnN0IFdBTExFVF9JTklUSUFMX1NUQVRFID0ge1xuICAgIHdhbGxldDogbnVsbCxcbiAgICBhZGFwdGVyOiBudWxsLFxuICAgIHJlYWR5OiBmYWxzZSxcbiAgICBhZGRyZXNzOiBudWxsLFxuICAgIGNvbm5lY3RlZDogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IFdhbGxldFByb3ZpZGVyID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRQcm92aWRlcih7IGNoaWxkcmVuLCB3YWxsZXRzLCBhdXRvQ29ubmVjdCA9IGZhbHNlLCBvbkVycm9yOiBfb25FcnJvciA9IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksIH0pIHtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAvLyBUaGUgbWFpbiBzdGF0ZSBvZiB0aGUgd2FsbGV0IHByb3ZpZGVyXG4gICAgY29uc3QgW3sgd2FsbGV0LCBhZGFwdGVyLCByZWFkeSwgYWRkcmVzcywgY29ubmVjdGVkIH0sIHNldFN0YXRlXSA9IHVzZVN0YXRlKFdBTExFVF9JTklUSUFMX1NUQVRFKTtcbiAgICBjb25zdCBbY29ubmVjdGluZywgc2V0Q29ubmVjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Rpc2Nvbm5lY3RpbmcsIHNldERpc2Nvbm5lY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGlzQ29ubmVjdGluZyA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgaXNEaXNjb25uZWN0aW5nID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBpc1VubG9hZGluZyA9IHVzZVJlZihmYWxzZSk7XG4gICAgLy8gTWFwIHdhbGxldCBuYW1lcyB0byB3YWxsZXRzIGZvciBlYXNpZXIgdXNhZ2VcbiAgICBjb25zdCB3YWxsZXRzQnlOYW1lID0gdXNlTWVtbygoKSA9PiB3YWxsZXRzLnJlZHVjZSgod2FsbGV0c0J5TmFtZSwgd2FsbGV0KSA9PiB7XG4gICAgICAgIHdhbGxldHNCeU5hbWVbd2FsbGV0Lm5hbWVdID0gd2FsbGV0O1xuICAgICAgICByZXR1cm4gd2FsbGV0c0J5TmFtZTtcbiAgICB9LCB7fSksIFt3YWxsZXRzXSk7XG4gICAgLy8gV2hlbiB0aGUgc2VsZWN0ZWQgd2FsbGV0IGNoYW5nZXMsIHJlLWluaXRpYWxpemUgdGhlIHN0YXRlXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgd2FsbGV0ID0gKG5hbWUgJiYgd2FsbGV0c0J5TmFtZVtuYW1lXSkgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgYWRhcHRlciA9IHdhbGxldCAmJiB3YWxsZXQuYWRhcHRlcigpO1xuICAgICAgICBpZiAoYWRhcHRlcikge1xuICAgICAgICAgICAgY29uc3QgeyByZWFkeSwgYWRkcmVzcywgY29ubmVjdGVkIH0gPSBhZGFwdGVyO1xuICAgICAgICAgICAgc2V0U3RhdGUoeyB3YWxsZXQsIGFkYXB0ZXIsIGNvbm5lY3RlZCwgYWRkcmVzcywgcmVhZHkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRTdGF0ZShXQUxMRVRfSU5JVElBTF9TVEFURSk7XG4gICAgICAgIH1cbiAgICB9LCBbbmFtZSwgd2FsbGV0c0J5TmFtZSwgc2V0U3RhdGVdKTtcbiAgICAvLyBJZiBhdXRvQ29ubmVjdCBpcyBlbmFibGVkLCB0cnkgdG8gY29ubmVjdCB3aGVuIHRoZSBhZGFwdGVyIGNoYW5nZXMgYW5kIGlzIHJlYWR5XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzQ29ubmVjdGluZy5jdXJyZW50IHx8IGNvbm5lY3RpbmcgfHwgY29ubmVjdGVkIHx8ICFhdXRvQ29ubmVjdCB8fCAhYWRhcHRlciB8fCAhcmVhZHkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGlzQ29ubmVjdGluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRDb25uZWN0aW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHNlbGVjdGVkIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCB0aHJvdyBlcnJvciwgYnV0IG9uRXJyb3Igd2lsbCBzdGlsbCBiZSBjYWxsZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbm5lY3RpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBpc0Nvbm5lY3RpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuICAgIH0sIFtpc0Nvbm5lY3RpbmcsIGNvbm5lY3RpbmcsIGNvbm5lY3RlZCwgYXV0b0Nvbm5lY3QsIGFkYXB0ZXIsIHJlYWR5LCBzZXRDb25uZWN0aW5nLCBzZXROYW1lXSk7XG4gICAgLy8gSWYgdGhlIHdpbmRvdyBpcyBjbG9zaW5nIG9yIHJlbG9hZGluZywgaWdub3JlIGRpc2Nvbm5lY3QgYW5kIGVycm9yIGV2ZW50cyBmcm9tIHRoZSBhZGFwdGVyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgICAgICBpc1VubG9hZGluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGxpc3RlbmVyKTtcbiAgICB9LCBbaXNVbmxvYWRpbmddKTtcbiAgICAvLyBTZWxlY3QgYSB3YWxsZXQgYnkgbmFtZVxuICAgIGNvbnN0IHNlbGVjdCA9IHVzZUNhbGxiYWNrKChuZXdOYW1lKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBuZXdOYW1lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoYWRhcHRlcilcbiAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICBzZXROYW1lKG5ld05hbWUpO1xuICAgIH0pLCBbbmFtZSwgYWRhcHRlciwgc2V0TmFtZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIHJlYWR5IGV2ZW50XG4gICAgY29uc3Qgb25SZWFkeSA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFN0YXRlKChzdGF0ZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IHJlYWR5OiB0cnVlIH0pKSksIFtzZXRTdGF0ZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIGNvbm5lY3QgZXZlbnRcbiAgICBjb25zdCBvbkNvbm5lY3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgeyBjb25uZWN0ZWQsIGFkZHJlc3MsIHJlYWR5IH0gPSBhZGFwdGVyO1xuICAgICAgICBzZXRTdGF0ZSgoc3RhdGUpID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyBjb25uZWN0ZWQsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgcmVhZHkgfSkpKTtcbiAgICB9LCBbYWRhcHRlciwgc2V0U3RhdGVdKTtcbiAgICAvLyBIYW5kbGUgdGhlIGFkYXB0ZXIncyBkaXNjb25uZWN0IGV2ZW50XG4gICAgY29uc3Qgb25EaXNjb25uZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAvLyBDbGVhciB0aGUgc2VsZWN0ZWQgd2FsbGV0IHVubGVzcyB0aGUgd2luZG93IGlzIHVubG9hZGluZ1xuICAgICAgICBpZiAoIWlzVW5sb2FkaW5nLmN1cnJlbnQpXG4gICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgIH0sIFtpc1VubG9hZGluZywgc2V0TmFtZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIGVycm9yIGV2ZW50LCBhbmQgbG9jYWwgZXJyb3JzXG4gICAgY29uc3Qgb25FcnJvciA9IHVzZUNhbGxiYWNrKChlcnJvcikgPT4ge1xuICAgICAgICAvLyBDYWxsIHRoZSBwcm92aWRlZCBlcnJvciBoYW5kbGVyIHVubGVzcyB0aGUgd2luZG93IGlzIHVubG9hZGluZ1xuICAgICAgICBpZiAoIWlzVW5sb2FkaW5nLmN1cnJlbnQpXG4gICAgICAgICAgICBfb25FcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9LCBbaXNVbmxvYWRpbmcsIF9vbkVycm9yXSk7XG4gICAgLy8gQ29ubmVjdCB0aGUgYWRhcHRlciB0byB0aGUgd2FsbGV0XG4gICAgY29uc3QgY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKGlzQ29ubmVjdGluZy5jdXJyZW50IHx8IGNvbm5lY3RpbmcgfHwgZGlzY29ubmVjdGluZyB8fCBjb25uZWN0ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghd2FsbGV0IHx8ICFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFyZWFkeSkge1xuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHNlbGVjdGVkIHdhbGxldFxuICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHdhbGxldC51cmwsICdfYmxhbmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFJlYWR5RXJyb3IoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaXNDb25uZWN0aW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBzZXRDb25uZWN0aW5nKHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgeWllbGQgYWRhcHRlci5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgc2VsZWN0ZWQgd2FsbGV0XG4gICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgICAgICAgICAgLy8gUmV0aHJvdyB0aGUgZXJyb3IsIGFuZCBvbkVycm9yIHdpbGwgYWxzbyBiZSBjYWxsZWRcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0Q29ubmVjdGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpc0Nvbm5lY3RpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSksIFtpc0Nvbm5lY3RpbmcsIGNvbm5lY3RpbmcsIGRpc2Nvbm5lY3RpbmcsIGNvbm5lY3RlZCwgd2FsbGV0LCBhZGFwdGVyLCBvbkVycm9yLCByZWFkeSwgc2V0Q29ubmVjdGluZywgc2V0TmFtZV0pO1xuICAgIC8vIERpc2Nvbm5lY3QgdGhlIGFkYXB0ZXIgZnJvbSB0aGUgd2FsbGV0XG4gICAgY29uc3QgZGlzY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKGlzRGlzY29ubmVjdGluZy5jdXJyZW50IHx8IGRpc2Nvbm5lY3RpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHJldHVybiBzZXROYW1lKG51bGwpO1xuICAgICAgICBpc0Rpc2Nvbm5lY3RpbmcuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHNldERpc2Nvbm5lY3RpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB5aWVsZCBhZGFwdGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCB3YWxsZXRcbiAgICAgICAgICAgIHNldE5hbWUobnVsbCk7XG4gICAgICAgICAgICAvLyBSZXRocm93IHRoZSBlcnJvciwgYW5kIG9uRXJyb3Igd2lsbCBhbHNvIGJlIGNhbGxlZFxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBzZXREaXNjb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlzRGlzY29ubmVjdGluZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KSwgW2lzRGlzY29ubmVjdGluZywgZGlzY29ubmVjdGluZywgYWRhcHRlciwgc2V0RGlzY29ubmVjdGluZywgc2V0TmFtZV0pO1xuICAgIGNvbnN0IGludm9rZVJlYWQgPSB1c2VDYWxsYmFjaygocmVxdWVzdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5pbnZva2VSZWFkKHJlcXVlc3QpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgY29uc3QgaW52b2tlUmVhZE11bHRpID0gdXNlQ2FsbGJhY2soKHJlcXVlc3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuaW52b2tlUmVhZE11bHRpKHJlcXVlc3QpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgY29uc3QgaW52b2tlID0gdXNlQ2FsbGJhY2soKHJlcXVlc3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuaW52b2tlKHJlcXVlc3QpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgY29uc3QgaW52b2tlTXVsdGkgPSB1c2VDYWxsYmFjaygocmVxdWVzdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5pbnZva2VNdWx0aShyZXF1ZXN0KTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIGNvbnN0IGdldE5ldHdvcmtzID0gdXNlQ2FsbGJhY2soKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5nZXROZXR3b3JrcygpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgY29uc3Qgc2lnbk1lc3NhZ2UgPSB1c2VDYWxsYmFjaygocmVxdWVzdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5zaWduTWVzc2FnZShyZXF1ZXN0KTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIC8vIFNldHVwIGFuZCB0ZWFyZG93biBldmVudCBsaXN0ZW5lcnMgd2hlbiB0aGUgYWRhcHRlciBjaGFuZ2VzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGFkYXB0ZXIpIHtcbiAgICAgICAgICAgIGFkYXB0ZXIub24oJ3JlYWR5Jywgb25SZWFkeSk7XG4gICAgICAgICAgICBhZGFwdGVyLm9uKCdjb25uZWN0Jywgb25Db25uZWN0KTtcbiAgICAgICAgICAgIGFkYXB0ZXIub24oJ2Rpc2Nvbm5lY3QnLCBvbkRpc2Nvbm5lY3QpO1xuICAgICAgICAgICAgYWRhcHRlci5vbignZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRhcHRlci5vZmYoJ3JlYWR5Jywgb25SZWFkeSk7XG4gICAgICAgICAgICAgICAgYWRhcHRlci5vZmYoJ2Nvbm5lY3QnLCBvbkNvbm5lY3QpO1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIub2ZmKCdkaXNjb25uZWN0Jywgb25EaXNjb25uZWN0KTtcbiAgICAgICAgICAgICAgICBhZGFwdGVyLm9mZignZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCBbYWRhcHRlciwgb25SZWFkeSwgb25Db25uZWN0LCBvbkRpc2Nvbm5lY3QsIG9uRXJyb3JdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0Q29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZToge1xuICAgICAgICAgICAgd2FsbGV0cyxcbiAgICAgICAgICAgIGF1dG9Db25uZWN0LFxuICAgICAgICAgICAgd2FsbGV0LFxuICAgICAgICAgICAgYWRhcHRlcixcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICByZWFkeSxcbiAgICAgICAgICAgIGNvbm5lY3RlZCxcbiAgICAgICAgICAgIGNvbm5lY3RpbmcsXG4gICAgICAgICAgICBkaXNjb25uZWN0aW5nLFxuICAgICAgICAgICAgc2VsZWN0LFxuICAgICAgICAgICAgY29ubmVjdCxcbiAgICAgICAgICAgIGRpc2Nvbm5lY3QsXG4gICAgICAgICAgICBpbnZva2VSZWFkLFxuICAgICAgICAgICAgaW52b2tlUmVhZE11bHRpLFxuICAgICAgICAgICAgaW52b2tlLFxuICAgICAgICAgICAgaW52b2tlTXVsdGksXG4gICAgICAgICAgICBnZXROZXR3b3JrcyxcbiAgICAgICAgICAgIHNpZ25NZXNzYWdlLFxuICAgICAgICB9IH0sIGNoaWxkcmVuKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1wcm92aWRlci5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VXYWxsZXQoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoV2FsbGV0Q29udGV4dCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utd2FsbGV0LmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2hvb2tzJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgV2FsbGV0RXJyb3IgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZSc7XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE5vdFNlbGVjdGVkRXJyb3InO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9ycy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2l0eW9memlvbi9uZW9uLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50ZW1pdHRlcjNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJuYW1lcyI6WyJ1c2VXYWxsZXQiLCJXYWxsZXROb3RDb25uZWN0ZWRFcnJvciIsIndhbGxldCIsIkhlYWQiLCJOZW9uIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsIkluZGV4IiwiY29ubmVjdGVkIiwiZ2V0TmV0d29ya3MiLCJhZGRyZXNzIiwiaW52b2tlIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJ3YWxsZXROZXR3b3JrIiwic2V0V2FsbGV0TmV0d29yayIsImZldGNoV2FsbGV0TmV0d29yayIsInJlc3VsdCIsInN0YXR1cyIsImRhdGEiLCJkZWZhdWx0TmV0d29yayIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siLCJnZXRTY3JpcHRIYXNoRnJvbUFkZHJlc3MiLCJycGNBZGRyZXNzIiwibmV0d29ya01hZ2ljIiwic2NyaXB0SGFzaCIsImNvbnRyYWN0IiwiZXhwZXJpbWVudGFsIiwiU21hcnRDb250cmFjdCIsInUiLCJIZXhTdHJpbmciLCJmcm9tSGV4Iiwic2lnbmVycyIsInNjb3BlcyIsInJlcyIsInRlc3RJbnZva2UiLCJKU09OIiwic3RyaW5naWZ5IiwiRXZlbnRFbWl0dGVyIiwiV2l0bmVzc1Njb3BlIiwiQmFzZVdhbGxldEFkYXB0ZXIiLCJXYWxsZXRFcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwiV2FsbGV0Tm90Rm91bmRFcnJvciIsImFyZ3VtZW50cyIsIm5hbWUiLCJXYWxsZXROb3RJbnN0YWxsZWRFcnJvciIsIldhbGxldE5vdFJlYWR5RXJyb3IiLCJXYWxsZXRDb25uZWN0aW9uRXJyb3IiLCJXYWxsZXREaXNjb25uZWN0ZWRFcnJvciIsIldhbGxldERpc2Nvbm5lY3Rpb25FcnJvciIsIldhbGxldEFjY291bnRFcnJvciIsIldhbGxldFRpbWVvdXRFcnJvciIsIldhbGxldFdpbmRvd0Jsb2NrZWRFcnJvciIsIldhbGxldFdpbmRvd0Nsb3NlZEVycm9yIiwiV2FsbGV0TWV0aG9kTm90U3VwcG9ydGVkRXJyb3IiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJwb2xsIiwiY2FsbGJhY2siLCJpbnRlcnZhbCIsImNvdW50Iiwic2V0VGltZW91dCIsInBvbGxVbnRpbFJlYWR5IiwiYWRhcHRlciIsInBvbGxJbnRlcnZhbCIsInBvbGxDb3VudCIsInJlYWR5IiwiZW1pdCIsIndhcm4iLCJycGMiLCJ3YWl0VHgiLCJ0eElkIiwicmVhZEZyZXF1ZW5jeSIsInRpbWVvdXQiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJycGNDbGllbnQiLCJSUENDbGllbnQiLCJ0cmFuc2FjdGlvbiIsImdldFJhd1RyYW5zYWN0aW9uIiwiUmVhY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwiV2FsbGV0Tm90U2VsZWN0ZWRFcnJvciIsIldhbGxldENvbnRleHQiLCJXQUxMRVRfSU5JVElBTF9TVEFURSIsIldhbGxldFByb3ZpZGVyIiwibWVtbyIsImNoaWxkcmVuIiwid2FsbGV0cyIsImF1dG9Db25uZWN0Iiwib25FcnJvciIsIl9vbkVycm9yIiwic2V0TmFtZSIsInNldFN0YXRlIiwiY29ubmVjdGluZyIsInNldENvbm5lY3RpbmciLCJkaXNjb25uZWN0aW5nIiwic2V0RGlzY29ubmVjdGluZyIsImlzQ29ubmVjdGluZyIsImlzRGlzY29ubmVjdGluZyIsImlzVW5sb2FkaW5nIiwid2FsbGV0c0J5TmFtZSIsInJlZHVjZSIsImN1cnJlbnQiLCJjb25uZWN0IiwibGlzdGVuZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlbGVjdCIsIm5ld05hbWUiLCJkaXNjb25uZWN0Iiwib25SZWFkeSIsInN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwib25Db25uZWN0Iiwib25EaXNjb25uZWN0Iiwib3BlbiIsInVybCIsImludm9rZVJlYWQiLCJyZXF1ZXN0IiwiaW52b2tlUmVhZE11bHRpIiwiaW52b2tlTXVsdGkiLCJzaWduTWVzc2FnZSIsIm9uIiwib2ZmIiwiY3JlYXRlRWxlbWVudCIsIlByb3ZpZGVyIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9