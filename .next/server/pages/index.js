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
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react/lib/index.js");
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-base */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-base/lib/index.js");
/* harmony import */ var _rentfuse_labs_neo_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rentfuse-labs/neo-wallet-adapter-react-ui */ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/index.js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cityofzion/neon-js */ "@cityofzion/neon-js");
/* harmony import */ var _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Sebatane Raphela\\Music\\web3\\neo-blockchain-betx\\pages\\index.tsx";











const Index = () => {
  // 	neolineN3 getProvider()
  // .then(provider => {
  //     const {
  //         name,
  //         website,
  //         version,
  //         compatibility,
  //         extra
  //     } = provider;
  //     console.log('Provider name: ' + name);
  //     console.log('Provider website: ' + website);
  //     console.log('Provider dAPI version: ' + version);
  //     console.log('Provider dAPI compatibility: ' + JSON.stringify(compatibility));
  //     console.log('Extra provider specific atributes: ' + JSON.stringify(compatibility));
  // })
  // .catch((error) => {
  //     const {type, description, data} = error;
  //     switch(type) {
  //         case 'NO_PROVIDER':
  //             console.log('No provider available.');
  //             break;
  //         case 'CONNECTION_DENIED':
  //             console.log('The user rejected the request to connect with your dApp.');
  //             break;
  //         default:
  //             // Not an expected error object.  Just write the error to the console.
  //             console.error(error);
  //             break;
  //     }
  // });
  const {
    connected,
    getNetworks,
    address,
    invoke,
    connect
  } = (0,_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet)();
  const {
    account,
    setAccount
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const {
    0: walletNetwork,
    1: setWalletNetwork
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const fetchWalletNetwork = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async () => {
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
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (connected) {
      fetchWalletNetwork();
    } else {
      setWalletNetwork(null);
    }
  }, [connected, fetchWalletNetwork]);
  console.log(walletNetwork);
  const onClick = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async () => {
    if (!address || !connected) throw new _rentfuse_labs_neo_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_7__.WalletNotConnectedError();
    const account = _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_2__.wallet.getScriptHashFromAddress(address); // Construct the request and invoke it
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

    const contract = new (_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_2___default().experimental.SmartContract)(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_2___default().u.HexString.fromHex(scriptHash), {
      networkMagic,
      rpcAddress,
      // @ts-ignore
      account
    });
    const signers = [{
      account: account,
      scopes: 'CalledByEntry'
    }];
    let res = await contract.invoke('getNumber', [], // @ts-ignore
    signers);
    console.log(JSON.stringify(res));
  }, [address, connected, invoke]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "/main.css",
        className: "jsx-426706089"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
      className: "jsx-426706089" + " " + "relative container mx-auto p-2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "jsx-426706089" + " " + "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "jsx-426706089" + " " + "pt-2 py-6 flex flex-row justify-between items-center ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
            src: "img/LOGO.png",
            height: "100",
            width: "100",
            alt: "",
            className: "jsx-426706089"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            className: "jsx-426706089" + " " + "lg:text-5xl md:text-5xl text-white font-bold  ",
            children: "Planet X"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "jsx-426706089" + " " + "hidden space-x-6 md:flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
            href: "games",
            className: "jsx-426706089" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: "Games"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
            href: "/portfolio.html",
            className: "jsx-426706089" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: "Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          id: "menu-btn",
          className: "jsx-426706089" + " " + "block hamburger md:hidden focus:outline-none focus:text-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "jsx-426706089" + " " + "hamburger-top bg-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "jsx-426706089" + " " + "hamburger-middle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 11
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "jsx-426706089" + " " + "hamburger-bottom"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "jsx-426706089" + " " + "md:hidden",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          id: "menu",
          className: "jsx-426706089" + " " + "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 3
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
      id: "hero",
      className: "jsx-426706089",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "jsx-426706089" + " " + "container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "jsx-426706089" + " " + "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "jsx-426706089" + " " + "md:w-1/2 flex flex-col space-y-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
              src: "img/LOGO.png",
              alt: "",
              className: "jsx-426706089"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 9
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "jsx-426706089" + " " + " md:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
            src: "img/right_image.png",
            alt: "",
            className: "jsx-426706089"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
      id: "features",
      className: "jsx-426706089",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "jsx-426706089" + " " + "container  flex flex-col items-center justify-center px-6 mx-auto mt-2  md:space-y-0 md:flex-row middle",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_rentfuse_labs_neo_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__.WalletMultiButton, {
          style: {
            'backgroundColor': '#DC2984'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 1
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
      id: "testimonials",
      className: "jsx-426706089",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "jsx-426706089" + " " + "max-w-6xl px-5 mx-auto mt-32 text-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "jsx-426706089" + " " + "flex flex-col mt-24 md:flex-row md:space-x-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "jsx-426706089" + " " + "my-16 flex flex-col items-center justify-center min-w-full ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
              className: "jsx-426706089" + " " + "text-5xl text-white font-bold subpixel-antialiased py-4 tracking-widest",
              children: "Trending"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 221,
              columnNumber: 11
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("table", {
              className: "jsx-426706089" + " " + "min-w-full border border-slate-800",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("thead", {
                className: "jsx-426706089" + " " + "border-b bg-[#B227CA] ",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
                  className: "jsx-426706089",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-426706089" + " " + "text-sm font-bold  text-white px-6 py-4 text-left",
                    children: "Rank"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-426706089" + " " + "text-sm font-bold  text-white px-6 py-4 text-left",
                    children: "Game"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 229,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-426706089" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Game Names"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-426706089" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Date/Time"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-426706089" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "24 hours"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 17
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 15
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 13
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tbody", {
                className: "jsx-426706089" + " " + "bg-[#15174A]   ",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
                  className: "jsx-426706089" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 246,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/cs.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 249,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 251,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 254,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "400+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 17
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
                  className: "jsx-426706089" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 263,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 262,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/dota.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 266,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 268,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 271,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "400+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 274,
                    columnNumber: 17
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
                  className: "jsx-426706089" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/down.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 280,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 279,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/freefire.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 283,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 282,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Free Fire - World Series"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 285,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Oct 15, 2022 4:00 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 288,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "50+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 291,
                    columnNumber: 17
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 278,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
                  className: "jsx-426706089" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/down.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 297,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 296,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/honor.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 300,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 299,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "KOG - KPL Spring Playoffs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 302,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Nov 05, 2022 2:30 AM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 305,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "100+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 308,
                    columnNumber: 17
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 295,
                  columnNumber: 15
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
                  className: "jsx-426706089" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 314,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 313,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/legends.png",
                      alt: "",
                      className: "jsx-426706089"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 317,
                      columnNumber: 19
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 316,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "LOL - EU Masters Spring"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 319,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 322,
                    columnNumber: 17
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-426706089" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "25+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 325,
                    columnNumber: 17
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 312,
                  columnNumber: 15
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 13
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 11
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 7
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "426706089",
      children: ".container.jsx-426706089{padding:0 2rem;}.main.jsx-426706089{min-height:100vh;padding:4rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-426706089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;padding:2rem 0;border-top:1px solid #eaeaea;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-426706089 a.jsx-426706089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.title.jsx-426706089 a.jsx-426706089{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-426706089 a.jsx-426706089:hover,.title.jsx-426706089 a.jsx-426706089:focus,.title.jsx-426706089 a.jsx-426706089:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-426706089{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-426706089,.description.jsx-426706089{text-align:center;}.description.jsx-426706089{margin:4rem 0;line-height:1.5;font-size:1.5rem;}.code.jsx-426706089{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New,monospace;}.grid.jsx-426706089{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;}.card.jsx-426706089{margin:1rem;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;max-width:300px;}.card.jsx-426706089:hover,.card.jsx-426706089:focus,.card.jsx-426706089:active{color:#0070f3;border-color:#0070f3;}.card.jsx-426706089 h2.jsx-426706089{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-426706089 p.jsx-426706089{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-426706089{height:1em;margin-left:0.5rem;}@media (max-width:600px){.grid.jsx-426706089{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.wallet-buttons.jsx-426706089{padding-top:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2ViYXRhbmUgUmFwaGVsYVxcTXVzaWNcXHdlYjNcXG5lby1ibG9ja2NoYWluLWJldHhcXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb1ZlLEFBR3FCLEFBSUUsQUFVSixBQVNBLEFBT0MsQUFPWSxBQUlqQixBQU9TLEFBSUosQUFNSyxBQVNOLEFBUUQsQUFjRSxBQUtJLEFBS1QsQUFNRSxBQU1DLEFBTUssU0EzRUEsQUEwREMsRUFNQyxBQU1JLENBcENSLEVBN0NNLEFBc0JMLEFBcUNLLENBekZ0QixFQUlnQixBQWlIRixDQXJFZCxBQThDa0IsQ0FwQ0MsT0FoQkgsQ0FrQ0MsQUF3QkEsR0EvQ0MsQUFxRGxCLEVBckdRLEdBcUZSLEFBS0EsRUFwQ2lCLElBaEJqQixFQWtDZSxBQXdCZixJQS9DQSxNQU1rQixJQWtCSSxHQXpDdEIsSUFOQSxDQXpCYyxLQXdEVSxJQWhEaEIsQUFTZ0IsQUE0Q0osZUE2Q25CLEVBTXNCLGdCQXZHUCxBQWdFVSxlQS9ESSxVQWdFVixPQXpFRyxZQVVDLEFBZ0U4QixnQkFiOUIsRUFtRGQsSUEvRlUsS0FnR3BCLGFBekRBLDBCQXZEd0IsaUNBVUosYUFnRUgsR0F6REosQUE0Q0csYUFjaEIscUNBMUVvQixPQTZESCxjQTVDakIsRUE2Q0EsSUFwREEsa0VBVEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxTZWJhdGFuZSBSYXBoZWxhXFxNdXNpY1xcd2ViM1xcbmVvLWJsb2NrY2hhaW4tYmV0eFxccGFnZXNcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdCc7XHJcbmltcG9ydCB7IHdhaXRUeCwgV2l0bmVzc1Njb3BlLCBXYWxsZXROb3RDb25uZWN0ZWRFcnJvciB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlJztcclxuaW1wb3J0IHsgV2FsbGV0RGlzY29ubmVjdEJ1dHRvbiwgV2FsbGV0TXVsdGlCdXR0b24gfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWknO1xyXG5pbXBvcnQgKiBhcyBuZW9saW5lTjMgZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lXCJcclxuaW1wb3J0IHsgdSwgc2MsIHdhbGxldCB9IGZyb20gJ0BjaXR5b2Z6aW9uL25lb24tanMnO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBOZW9uIGZyb20gJ0BjaXR5b2Z6aW9uL25lb24tanMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEluZGV4OiBOZXh0UGFnZSA9ICgpID0+IHtcclxuXHJcblxyXG5cclxuLy8gXHRuZW9saW5lTjMgZ2V0UHJvdmlkZXIoKVxyXG4vLyAudGhlbihwcm92aWRlciA9PiB7XHJcbi8vICAgICBjb25zdCB7XHJcbi8vICAgICAgICAgbmFtZSxcclxuLy8gICAgICAgICB3ZWJzaXRlLFxyXG4vLyAgICAgICAgIHZlcnNpb24sXHJcbi8vICAgICAgICAgY29tcGF0aWJpbGl0eSxcclxuLy8gICAgICAgICBleHRyYVxyXG4vLyAgICAgfSA9IHByb3ZpZGVyO1xyXG5cclxuLy8gICAgIGNvbnNvbGUubG9nKCdQcm92aWRlciBuYW1lOiAnICsgbmFtZSk7XHJcbi8vICAgICBjb25zb2xlLmxvZygnUHJvdmlkZXIgd2Vic2l0ZTogJyArIHdlYnNpdGUpO1xyXG4vLyAgICAgY29uc29sZS5sb2coJ1Byb3ZpZGVyIGRBUEkgdmVyc2lvbjogJyArIHZlcnNpb24pO1xyXG4vLyAgICAgY29uc29sZS5sb2coJ1Byb3ZpZGVyIGRBUEkgY29tcGF0aWJpbGl0eTogJyArIEpTT04uc3RyaW5naWZ5KGNvbXBhdGliaWxpdHkpKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdFeHRyYSBwcm92aWRlciBzcGVjaWZpYyBhdHJpYnV0ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShjb21wYXRpYmlsaXR5KSk7XHJcbi8vIH0pXHJcbi8vIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuLy8gICAgIGNvbnN0IHt0eXBlLCBkZXNjcmlwdGlvbiwgZGF0YX0gPSBlcnJvcjtcclxuLy8gICAgIHN3aXRjaCh0eXBlKSB7XHJcbi8vICAgICAgICAgY2FzZSAnTk9fUFJPVklERVInOlxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gcHJvdmlkZXIgYXZhaWxhYmxlLicpO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICBjYXNlICdDT05ORUNUSU9OX0RFTklFRCc6XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGUgdXNlciByZWplY3RlZCB0aGUgcmVxdWVzdCB0byBjb25uZWN0IHdpdGggeW91ciBkQXBwLicpO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICAgICAgICAvLyBOb3QgYW4gZXhwZWN0ZWQgZXJyb3Igb2JqZWN0LiAgSnVzdCB3cml0ZSB0aGUgZXJyb3IgdG8gdGhlIGNvbnNvbGUuXHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgIH1cclxuLy8gfSk7XHJcblx0Y29uc3QgeyBjb25uZWN0ZWQsIGdldE5ldHdvcmtzLCBhZGRyZXNzLCBpbnZva2UsIGNvbm5lY3QgfSA9IHVzZVdhbGxldCgpO1xyXG4gY29uc3QgeyBhY2NvdW50LCBzZXRBY2NvdW50IH0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblx0Y29uc3QgW3dhbGxldE5ldHdvcmssIHNldFdhbGxldE5ldHdvcmtdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG5cdGNvbnN0IGZldGNoV2FsbGV0TmV0d29yayA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldE5ldHdvcmtzKCk7XHJcblx0XHRcdGlmIChyZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuXHRcdFx0XHRzZXRXYWxsZXROZXR3b3JrKHJlc3VsdC5kYXRhPy5kZWZhdWx0TmV0d29yayB8fCBudWxsKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0fSwgW2dldE5ldHdvcmtzXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoY29ubmVjdGVkKSB7XHJcblx0XHRcdGZldGNoV2FsbGV0TmV0d29yaygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0V2FsbGV0TmV0d29yayhudWxsKTtcclxuXHRcdH1cclxuXHR9LCBbY29ubmVjdGVkLCBmZXRjaFdhbGxldE5ldHdvcmtdKTtcclxuXHJcblx0Y29uc29sZS5sb2cod2FsbGV0TmV0d29yayk7XHJcblxyXG5cdGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcblx0XHRpZiAoIWFkZHJlc3MgfHwgIWNvbm5lY3RlZCkgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XHJcblx0XHRjb25zdCBhY2NvdW50ID0gd2FsbGV0LmdldFNjcmlwdEhhc2hGcm9tQWRkcmVzcyhhZGRyZXNzKTtcclxuXHRcdC8vIENvbnN0cnVjdCB0aGUgcmVxdWVzdCBhbmQgaW52b2tlIGl0XHJcblx0XHQvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBpbnZva2Uoe1xyXG5cdFx0Ly8gXHRzY3JpcHRIYXNoOiAnMHg3YTA2ZTQwY2QwOGMwYTg4NzdjMmQ2ZDBhNDk3NGY3ZGJlOWIyYjdiJyxcclxuXHRcdC8vIFx0b3BlcmF0aW9uOiAnZ2V0TnVtYmVyJyxcclxuXHJcblx0XHQvLyBcdHNpZ25lcnM6IFtcclxuXHRcdC8vIFx0XHR7XHJcblx0XHQvLyBcdFx0XHRhY2NvdW50OiB3YWxsZXQuZ2V0U2NyaXB0SGFzaEZyb21BZGRyZXNzKGFkZHJlc3MpLFxyXG5cdFx0Ly8gXHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0Ly8gXHRcdFx0c2NvcGU6IFdpdG5lc3NTY29wZS5DYWxsZWRCeUVudHJ5LFxyXG5cdFx0Ly8gXHRcdH0sXHJcblx0XHQvLyBcdF0sXHJcblx0XHQvLyB9KTtcclxuXHJcblx0XHQvLyAvLyBPcHRpb25hbDogV2FpdCBmb3IgdGhlIHRyYW5zYWN0aW9uIHRvIGJlIGNvbmZpcm1lZCBvbmNoYWluXHJcblx0XHQvLyBpZiAocmVzdWx0LmRhdGE/LnR4SWQpIHtcclxuXHRcdC8vIFx0YXdhaXQgd2FpdFR4KCdORVRXT1JLX1JQQ19BRERSRVNTX0hFUkUnLCByZXN1bHQuZGF0YT8udHhJZCk7XHJcblx0XHQvLyB9XHJcblx0XHRjb25zdCBycGNBZGRyZXNzID0gJ2h0dHBzOi8vdGVzdG5ldDEubmVvLmNvei5pbzo0NDMnO1xyXG5cdFx0Y29uc3QgbmV0d29ya01hZ2ljID0gODc3OTMzMzkwO1xyXG5cclxuXHRcdGNvbnN0IHNjcmlwdEhhc2ggPSAnMHg3YTA2ZTQwY2QwOGMwYTg4NzdjMmQ2ZDBhNDk3NGY3ZGJlOWIyYjdiJyAgLy8gJzB4OWJmYzdkODhmMTFkMmY1MmIyNDRhYWI1Mjk2NjM1ZGRjMmQ2MDgxYSc7XHJcblx0XHRjb25zdCBjb250cmFjdCA9IG5ldyBOZW9uLmV4cGVyaW1lbnRhbC5TbWFydENvbnRyYWN0KE5lb24udS5IZXhTdHJpbmcuZnJvbUhleChzY3JpcHRIYXNoKSwge1xyXG5cdFx0XHRuZXR3b3JrTWFnaWMsXHJcblx0XHRcdHJwY0FkZHJlc3MsXHJcblx0XHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdFx0YWNjb3VudFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3Qgc2lnbmVycyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFjY291bnQ6IGFjY291bnQsXHJcblxyXG5cdFx0XHRcdHNjb3BlczogJ0NhbGxlZEJ5RW50cnknLFxyXG5cdFx0XHR9LFxyXG5cdFx0XTtcclxuXHJcblx0XHRsZXQgcmVzID0gYXdhaXQgY29udHJhY3QuaW52b2tlKFxyXG5cdFx0XHQnZ2V0TnVtYmVyJyxcclxuXHRcdFx0W1xyXG5cdFx0XHRcclxuXHRcdFx0XSxcclxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0XHRzaWduZXJzLFxyXG5cdFx0KTtcclxuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cdH0sIFthZGRyZXNzLCBjb25uZWN0ZWQsIGludm9rZV0pO1xyXG5cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHQgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvbWFpbi5jc3NcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblx0XHQ8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbnRhaW5lciBteC1hdXRvIHAtMiBcIj5cclxuICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHB5LTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvTE9HTy5wbmdcIiBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIGFsdD1cIlwiIC8+IFxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQtNXhsIG1kOnRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkICBcIj5QbGFuZXQgWDwvaDE+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNwYWNlLXgtNiBtZDpmbGV4XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiZ2FtZXNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWRhcmtHcmF5aXNoQmx1ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPkdhbWVzPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9wb3J0Zm9saW8uaHRtbFwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZGFya0dyYXlpc2hCbHVlIHRleHQtd2hpdGUgZm9udC1ib2xkXCI+UG9ydGZvbGlvPC9hPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBpZD1cIm1lbnUtYnRuXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGhhbWJ1cmdlciBtZDpoaWRkZW4gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnRleHQtd2hpdGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci10b3AgYmctd2hpdGVcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItbWlkZGxlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJvdHRvbVwiPjwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBpZD1cIm1lbnVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleC1jb2wgaXRlbXMtY2VudGVyIGhpZGRlbiBzZWxmLWVuZCBweS04IG10LTEwIHNwYWNlLXktNiBmb250LWJvbGQgYmctd2hpdGUgc206dy1hdXRvIHNtOnNlbGYtY2VudGVyIGxlZnQtNiByaWdodC02IGRyb3Atc2hhZG93LW1kXCJcclxuICAgICAgICA+XHJcbiAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG5cclxuICBcclxuICAgIDxzZWN0aW9uIGlkPVwiaGVyb1wiPlxyXG4gICAgICBcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtY29sLXJldmVyc2UgaXRlbXMtY2VudGVyIHB4LTYgbXgtYXV0byBtdC0xMCBzcGFjZS15LTAgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93XCJcclxuICAgICAgPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMS8yIGZsZXggZmxleC1jb2wgc3BhY2UteS0xMlwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImltZy9MT0dPLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtZDp3LTEvMlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvcmlnaHRfaW1hZ2UucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gICBcclxuICAgIDxzZWN0aW9uIGlkPVwiZmVhdHVyZXNcIj5cclxuICAgICAgXHJcbiAgICAgIDxkaXZcclxuICAgXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyICBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IG14LWF1dG8gbXQtMiAgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93IG1pZGRsZVwiXHJcbiAgICAgID5cclxuICAgICAgIFxyXG4gICAgICBcclxuPFdhbGxldE11bHRpQnV0dG9uICBzdHlsZT17eyBcclxuXHQnYmFja2dyb3VuZENvbG9yJzogJyNEQzI5ODQnLFxyXG59fSAgLz5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICBcclxuICAgIDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxzXCI+XHJcbiAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBweC01IG14LWF1dG8gbXQtMzIgdGV4dC1jZW50ZXJcIj5cclxuICAgIFxyXG4gICAgICBcclxuICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtMjQgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC02XCI+XHJcbiAgICAgICAgIFxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4tdy1mdWxsIFwiPlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkIHN1YnBpeGVsLWFudGlhbGlhc2VkIHB5LTQgdHJhY2tpbmctd2lkZXN0XCI+VHJlbmRpbmc8L3A+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJib3JkZXItYiBiZy1bI0IyMjdDQV0gXCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICBSYW5rXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICBHYW1lXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIEdhbWUgTmFtZXNcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgRGF0ZS9UaW1lXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDI0IGhvdXJzXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy1bIzE1MTc0QV0gICBcIj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9jcy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgQ1M6R08gLSBQR0wgTWFqb3IgQW50d2VycFxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDQwMCtcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3RhLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBDUzpHTyAtIFBHTCBNYWpvciBBbnR3ZXJwXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgNDAwK1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG93bi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZnJlZWZpcmUucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIEZyZWUgRmlyZSAtIFdvcmxkIFNlcmllc1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgT2N0IDE1LCAyMDIyIDQ6MDAgUE1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDUwK1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG93bi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvaG9ub3IucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIEtPRyAtIEtQTCBTcHJpbmcgUGxheW9mZnNcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIE5vdiAwNSwgMjAyMiAyOjMwIEFNXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAxMDArXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy91cC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvbGVnZW5kcy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgTE9MIC0gRVUgTWFzdGVycyBTcHJpbmdcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIFNlcCAyMiwgMjAyMiA0OjMwIFBNXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAyNStcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblx0ICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgXHJcblxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMCAycmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Lm1haW4ge1xyXG5cdFx0XHRcdFx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiA0cmVtIDA7XHJcblx0XHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuZm9vdGVyIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMnJlbSAwO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuZm9vdGVyIGEge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGZsZXgtZ3JvdzogMTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC50aXRsZSBhIHtcclxuXHRcdFx0XHRcdGNvbG9yOiAjMDA3MGYzO1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnRpdGxlIGE6aG92ZXIsXHJcblx0XHRcdFx0LnRpdGxlIGE6Zm9jdXMsXHJcblx0XHRcdFx0LnRpdGxlIGE6YWN0aXZlIHtcclxuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnRpdGxlIHtcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiA0cmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnRpdGxlLFxyXG5cdFx0XHRcdC5kZXNjcmlwdGlvbiB7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuZGVzY3JpcHRpb24ge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiA0cmVtIDA7XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS41O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY29kZSB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMC43NXJlbTtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubyxcclxuXHRcdFx0XHRcdFx0Q291cmllciBOZXcsIG1vbm9zcGFjZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5ncmlkIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0XHRtYXgtd2lkdGg6IDgwMHB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmNhcmQge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAxcmVtO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMS41cmVtO1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHRcdGNvbG9yOiBpbmhlcml0O1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuXHRcdFx0XHRcdG1heC13aWR0aDogMzAwcHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY2FyZDpob3ZlcixcclxuXHRcdFx0XHQuY2FyZDpmb2N1cyxcclxuXHRcdFx0XHQuY2FyZDphY3RpdmUge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMwMDcwZjM7XHJcblx0XHRcdFx0XHRib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY2FyZCBoMiB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDAgMCAxcmVtIDA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jYXJkIHAge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjI1cmVtO1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5sb2dvIHtcclxuXHRcdFx0XHRcdGhlaWdodDogMWVtO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cdFx0XHRcdFx0LmdyaWQge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC53YWxsZXQtYnV0dG9ucyB7XHJcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMnJlbTtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdFx0Z2FwOiAycmVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Sebatane Raphela\\\\Music\\\\web3\\\\neo-blockchain-betx\\\\pages\\\\index.tsx */"
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

/***/ "./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@rentfuse-labs/neo-wallet-adapter-react-ui/lib/components/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEJxRDtBQUFULEdBQTVDLEVBbUJDaEssUUFuQkQsQ0FBUjtBQW9CSCxDQTFONkIsQ0FBdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJQO0FBQ08sTUFBTXNJLGFBQWEsZ0JBQUdILG9EQUFhLENBQUMsRUFBRCxDQUFuQztBQUNBLFNBQVMvTyxTQUFULEdBQXFCO0FBQ3hCLFNBQU9nUCxpREFBVSxDQUFDRSxhQUFELENBQWpCO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ08sTUFBTUQsc0JBQU4sU0FBcUNuTSwrRUFBckMsQ0FBaUQ7QUFDcERFLEVBQUFBLFdBQVcsR0FBRztBQUNWLFVBQU0sR0FBR0csU0FBVDtBQUNBLFNBQUtDLElBQUwsR0FBWSx3QkFBWjtBQUNIOztBQUptRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0R4RDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UvbGliL2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UvbGliL3BvbGwuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlL2xpYi93YWl0LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtYnV0dG9uLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LWNvbGxhcHNlLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LWNvbm5lY3QtYnV0dG9uLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LWRpc2Nvbm5lY3QtYnV0dG9uLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LWljb24uanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtbGlzdC1pdGVtLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LW1vZGFsLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1tb2RhbC1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1tb2RhbC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1tdWx0aS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvaG9va3MvdXNlLXdhbGxldC1tb2RhbC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9jb21wb25lbnRzL3dhbGxldC1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9ob29rcy91c2Utd2FsbGV0LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QvbGliL2luZGV4LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QvbGliL3V0aWxzL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJAY2l0eW9memlvbi9uZW9uLWpzXCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwiZXZlbnRlbWl0dGVyM1wiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdCc7XHJcbmltcG9ydCB7IHdhaXRUeCwgV2l0bmVzc1Njb3BlLCBXYWxsZXROb3RDb25uZWN0ZWRFcnJvciB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlJztcclxuaW1wb3J0IHsgV2FsbGV0RGlzY29ubmVjdEJ1dHRvbiwgV2FsbGV0TXVsdGlCdXR0b24gfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWknO1xyXG5pbXBvcnQgKiBhcyBuZW9saW5lTjMgZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lXCJcclxuaW1wb3J0IHsgdSwgc2MsIHdhbGxldCB9IGZyb20gJ0BjaXR5b2Z6aW9uL25lb24tanMnO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBOZW9uIGZyb20gJ0BjaXR5b2Z6aW9uL25lb24tanMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEluZGV4OiBOZXh0UGFnZSA9ICgpID0+IHtcclxuXHJcblxyXG5cclxuLy8gXHRuZW9saW5lTjMgZ2V0UHJvdmlkZXIoKVxyXG4vLyAudGhlbihwcm92aWRlciA9PiB7XHJcbi8vICAgICBjb25zdCB7XHJcbi8vICAgICAgICAgbmFtZSxcclxuLy8gICAgICAgICB3ZWJzaXRlLFxyXG4vLyAgICAgICAgIHZlcnNpb24sXHJcbi8vICAgICAgICAgY29tcGF0aWJpbGl0eSxcclxuLy8gICAgICAgICBleHRyYVxyXG4vLyAgICAgfSA9IHByb3ZpZGVyO1xyXG5cclxuLy8gICAgIGNvbnNvbGUubG9nKCdQcm92aWRlciBuYW1lOiAnICsgbmFtZSk7XHJcbi8vICAgICBjb25zb2xlLmxvZygnUHJvdmlkZXIgd2Vic2l0ZTogJyArIHdlYnNpdGUpO1xyXG4vLyAgICAgY29uc29sZS5sb2coJ1Byb3ZpZGVyIGRBUEkgdmVyc2lvbjogJyArIHZlcnNpb24pO1xyXG4vLyAgICAgY29uc29sZS5sb2coJ1Byb3ZpZGVyIGRBUEkgY29tcGF0aWJpbGl0eTogJyArIEpTT04uc3RyaW5naWZ5KGNvbXBhdGliaWxpdHkpKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdFeHRyYSBwcm92aWRlciBzcGVjaWZpYyBhdHJpYnV0ZXM6ICcgKyBKU09OLnN0cmluZ2lmeShjb21wYXRpYmlsaXR5KSk7XHJcbi8vIH0pXHJcbi8vIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuLy8gICAgIGNvbnN0IHt0eXBlLCBkZXNjcmlwdGlvbiwgZGF0YX0gPSBlcnJvcjtcclxuLy8gICAgIHN3aXRjaCh0eXBlKSB7XHJcbi8vICAgICAgICAgY2FzZSAnTk9fUFJPVklERVInOlxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gcHJvdmlkZXIgYXZhaWxhYmxlLicpO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICBjYXNlICdDT05ORUNUSU9OX0RFTklFRCc6XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGUgdXNlciByZWplY3RlZCB0aGUgcmVxdWVzdCB0byBjb25uZWN0IHdpdGggeW91ciBkQXBwLicpO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICAgICAgICAvLyBOb3QgYW4gZXhwZWN0ZWQgZXJyb3Igb2JqZWN0LiAgSnVzdCB3cml0ZSB0aGUgZXJyb3IgdG8gdGhlIGNvbnNvbGUuXHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgIH1cclxuLy8gfSk7XHJcblx0Y29uc3QgeyBjb25uZWN0ZWQsIGdldE5ldHdvcmtzLCBhZGRyZXNzLCBpbnZva2UsIGNvbm5lY3QgfSA9IHVzZVdhbGxldCgpO1xyXG4gY29uc3QgeyBhY2NvdW50LCBzZXRBY2NvdW50IH0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblx0Y29uc3QgW3dhbGxldE5ldHdvcmssIHNldFdhbGxldE5ldHdvcmtdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG5cdGNvbnN0IGZldGNoV2FsbGV0TmV0d29yayA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldE5ldHdvcmtzKCk7XHJcblx0XHRcdGlmIChyZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcclxuXHRcdFx0XHRzZXRXYWxsZXROZXR3b3JrKHJlc3VsdC5kYXRhPy5kZWZhdWx0TmV0d29yayB8fCBudWxsKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0fSwgW2dldE5ldHdvcmtzXSk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoY29ubmVjdGVkKSB7XHJcblx0XHRcdGZldGNoV2FsbGV0TmV0d29yaygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c2V0V2FsbGV0TmV0d29yayhudWxsKTtcclxuXHRcdH1cclxuXHR9LCBbY29ubmVjdGVkLCBmZXRjaFdhbGxldE5ldHdvcmtdKTtcclxuXHJcblx0Y29uc29sZS5sb2cod2FsbGV0TmV0d29yayk7XHJcblxyXG5cdGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcblx0XHRpZiAoIWFkZHJlc3MgfHwgIWNvbm5lY3RlZCkgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XHJcblx0XHRjb25zdCBhY2NvdW50ID0gd2FsbGV0LmdldFNjcmlwdEhhc2hGcm9tQWRkcmVzcyhhZGRyZXNzKTtcclxuXHRcdC8vIENvbnN0cnVjdCB0aGUgcmVxdWVzdCBhbmQgaW52b2tlIGl0XHJcblx0XHQvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBpbnZva2Uoe1xyXG5cdFx0Ly8gXHRzY3JpcHRIYXNoOiAnMHg3YTA2ZTQwY2QwOGMwYTg4NzdjMmQ2ZDBhNDk3NGY3ZGJlOWIyYjdiJyxcclxuXHRcdC8vIFx0b3BlcmF0aW9uOiAnZ2V0TnVtYmVyJyxcclxuXHJcblx0XHQvLyBcdHNpZ25lcnM6IFtcclxuXHRcdC8vIFx0XHR7XHJcblx0XHQvLyBcdFx0XHRhY2NvdW50OiB3YWxsZXQuZ2V0U2NyaXB0SGFzaEZyb21BZGRyZXNzKGFkZHJlc3MpLFxyXG5cdFx0Ly8gXHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0Ly8gXHRcdFx0c2NvcGU6IFdpdG5lc3NTY29wZS5DYWxsZWRCeUVudHJ5LFxyXG5cdFx0Ly8gXHRcdH0sXHJcblx0XHQvLyBcdF0sXHJcblx0XHQvLyB9KTtcclxuXHJcblx0XHQvLyAvLyBPcHRpb25hbDogV2FpdCBmb3IgdGhlIHRyYW5zYWN0aW9uIHRvIGJlIGNvbmZpcm1lZCBvbmNoYWluXHJcblx0XHQvLyBpZiAocmVzdWx0LmRhdGE/LnR4SWQpIHtcclxuXHRcdC8vIFx0YXdhaXQgd2FpdFR4KCdORVRXT1JLX1JQQ19BRERSRVNTX0hFUkUnLCByZXN1bHQuZGF0YT8udHhJZCk7XHJcblx0XHQvLyB9XHJcblx0XHRjb25zdCBycGNBZGRyZXNzID0gJ2h0dHBzOi8vdGVzdG5ldDEubmVvLmNvei5pbzo0NDMnO1xyXG5cdFx0Y29uc3QgbmV0d29ya01hZ2ljID0gODc3OTMzMzkwO1xyXG5cclxuXHRcdGNvbnN0IHNjcmlwdEhhc2ggPSAnMHg3YTA2ZTQwY2QwOGMwYTg4NzdjMmQ2ZDBhNDk3NGY3ZGJlOWIyYjdiJyAgLy8gJzB4OWJmYzdkODhmMTFkMmY1MmIyNDRhYWI1Mjk2NjM1ZGRjMmQ2MDgxYSc7XHJcblx0XHRjb25zdCBjb250cmFjdCA9IG5ldyBOZW9uLmV4cGVyaW1lbnRhbC5TbWFydENvbnRyYWN0KE5lb24udS5IZXhTdHJpbmcuZnJvbUhleChzY3JpcHRIYXNoKSwge1xyXG5cdFx0XHRuZXR3b3JrTWFnaWMsXHJcblx0XHRcdHJwY0FkZHJlc3MsXHJcblx0XHRcdC8vIEB0cy1pZ25vcmVcclxuXHRcdFx0YWNjb3VudFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3Qgc2lnbmVycyA9IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFjY291bnQ6IGFjY291bnQsXHJcblxyXG5cdFx0XHRcdHNjb3BlczogJ0NhbGxlZEJ5RW50cnknLFxyXG5cdFx0XHR9LFxyXG5cdFx0XTtcclxuXHJcblx0XHRsZXQgcmVzID0gYXdhaXQgY29udHJhY3QuaW52b2tlKFxyXG5cdFx0XHQnZ2V0TnVtYmVyJyxcclxuXHRcdFx0W1xyXG5cdFx0XHRcclxuXHRcdFx0XSxcclxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG5cdFx0XHRzaWduZXJzLFxyXG5cdFx0KTtcclxuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cdH0sIFthZGRyZXNzLCBjb25uZWN0ZWQsIGludm9rZV0pO1xyXG5cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHQgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvbWFpbi5jc3NcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblx0XHQ8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbnRhaW5lciBteC1hdXRvIHAtMiBcIj5cclxuICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHB5LTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvTE9HTy5wbmdcIiBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIGFsdD1cIlwiIC8+IFxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQtNXhsIG1kOnRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkICBcIj5QbGFuZXQgWDwvaDE+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNwYWNlLXgtNiBtZDpmbGV4XCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiZ2FtZXNcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWRhcmtHcmF5aXNoQmx1ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiPkdhbWVzPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9wb3J0Zm9saW8uaHRtbFwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZGFya0dyYXlpc2hCbHVlIHRleHQtd2hpdGUgZm9udC1ib2xkXCI+UG9ydGZvbGlvPC9hPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBpZD1cIm1lbnUtYnRuXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGhhbWJ1cmdlciBtZDpoaWRkZW4gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnRleHQtd2hpdGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci10b3AgYmctd2hpdGVcIj48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItbWlkZGxlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJvdHRvbVwiPjwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBpZD1cIm1lbnVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleC1jb2wgaXRlbXMtY2VudGVyIGhpZGRlbiBzZWxmLWVuZCBweS04IG10LTEwIHNwYWNlLXktNiBmb250LWJvbGQgYmctd2hpdGUgc206dy1hdXRvIHNtOnNlbGYtY2VudGVyIGxlZnQtNiByaWdodC02IGRyb3Atc2hhZG93LW1kXCJcclxuICAgICAgICA+XHJcbiAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG5cclxuICBcclxuICAgIDxzZWN0aW9uIGlkPVwiaGVyb1wiPlxyXG4gICAgICBcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtY29sLXJldmVyc2UgaXRlbXMtY2VudGVyIHB4LTYgbXgtYXV0byBtdC0xMCBzcGFjZS15LTAgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93XCJcclxuICAgICAgPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMS8yIGZsZXggZmxleC1jb2wgc3BhY2UteS0xMlwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImltZy9MT0dPLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtZDp3LTEvMlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvcmlnaHRfaW1hZ2UucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcblxyXG4gICBcclxuICAgIDxzZWN0aW9uIGlkPVwiZmVhdHVyZXNcIj5cclxuICAgICAgXHJcbiAgICAgIDxkaXZcclxuICAgXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyICBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IG14LWF1dG8gbXQtMiAgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93IG1pZGRsZVwiXHJcbiAgICAgID5cclxuICAgICAgIFxyXG4gICAgICBcclxuPFdhbGxldE11bHRpQnV0dG9uICBzdHlsZT17eyBcclxuXHQnYmFja2dyb3VuZENvbG9yJzogJyNEQzI5ODQnLFxyXG59fSAgLz5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICBcclxuICAgIDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxzXCI+XHJcbiAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCBweC01IG14LWF1dG8gbXQtMzIgdGV4dC1jZW50ZXJcIj5cclxuICAgIFxyXG4gICAgICBcclxuICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtMjQgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC02XCI+XHJcbiAgICAgICAgIFxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4tdy1mdWxsIFwiPlxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkIHN1YnBpeGVsLWFudGlhbGlhc2VkIHB5LTQgdHJhY2tpbmctd2lkZXN0XCI+VHJlbmRpbmc8L3A+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJib3JkZXItYiBiZy1bI0IyMjdDQV0gXCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICBSYW5rXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICBHYW1lXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIEdhbWUgTmFtZXNcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgRGF0ZS9UaW1lXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDI0IGhvdXJzXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy1bIzE1MTc0QV0gICBcIj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9jcy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgQ1M6R08gLSBQR0wgTWFqb3IgQW50d2VycFxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDQwMCtcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3RhLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBDUzpHTyAtIFBHTCBNYWpvciBBbnR3ZXJwXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgNDAwK1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG93bi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZnJlZWZpcmUucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIEZyZWUgRmlyZSAtIFdvcmxkIFNlcmllc1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgT2N0IDE1LCAyMDIyIDQ6MDAgUE1cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDUwK1xyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG93bi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvaG9ub3IucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIEtPRyAtIEtQTCBTcHJpbmcgUGxheW9mZnNcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIE5vdiAwNSwgMjAyMiAyOjMwIEFNXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAxMDArXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy91cC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvbGVnZW5kcy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgTE9MIC0gRVUgTWFzdGVycyBTcHJpbmdcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgIFNlcCAyMiwgMjAyMiA0OjMwIFBNXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAyNStcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblx0ICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgXHJcblxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdC5jb250YWluZXIge1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMCAycmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Lm1haW4ge1xyXG5cdFx0XHRcdFx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiA0cmVtIDA7XHJcblx0XHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuZm9vdGVyIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMnJlbSAwO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuZm9vdGVyIGEge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdGZsZXgtZ3JvdzogMTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC50aXRsZSBhIHtcclxuXHRcdFx0XHRcdGNvbG9yOiAjMDA3MGYzO1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnRpdGxlIGE6aG92ZXIsXHJcblx0XHRcdFx0LnRpdGxlIGE6Zm9jdXMsXHJcblx0XHRcdFx0LnRpdGxlIGE6YWN0aXZlIHtcclxuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnRpdGxlIHtcclxuXHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiA0cmVtO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnRpdGxlLFxyXG5cdFx0XHRcdC5kZXNjcmlwdGlvbiB7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuZGVzY3JpcHRpb24ge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiA0cmVtIDA7XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS41O1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY29kZSB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMC43NXJlbTtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xyXG5cdFx0XHRcdFx0Zm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubyxcclxuXHRcdFx0XHRcdFx0Q291cmllciBOZXcsIG1vbm9zcGFjZTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5ncmlkIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRcdFx0XHRtYXgtd2lkdGg6IDgwMHB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmNhcmQge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAxcmVtO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMS41cmVtO1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHRcdGNvbG9yOiBpbmhlcml0O1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuXHRcdFx0XHRcdG1heC13aWR0aDogMzAwcHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY2FyZDpob3ZlcixcclxuXHRcdFx0XHQuY2FyZDpmb2N1cyxcclxuXHRcdFx0XHQuY2FyZDphY3RpdmUge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICMwMDcwZjM7XHJcblx0XHRcdFx0XHRib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY2FyZCBoMiB7XHJcblx0XHRcdFx0XHRtYXJnaW46IDAgMCAxcmVtIDA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jYXJkIHAge1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxLjI1cmVtO1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5sb2dvIHtcclxuXHRcdFx0XHRcdGhlaWdodDogMWVtO1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG5cdFx0XHRcdFx0LmdyaWQge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC53YWxsZXQtYnV0dG9ucyB7XHJcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMnJlbTtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdFx0Z2FwOiAycmVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuZXhwb3J0IHsgRXZlbnRFbWl0dGVyIH07XG5leHBvcnQgdmFyIFdpdG5lc3NTY29wZTtcbihmdW5jdGlvbiAoV2l0bmVzc1Njb3BlKSB7XG4gICAgV2l0bmVzc1Njb3BlW1dpdG5lc3NTY29wZVtcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xuICAgIFdpdG5lc3NTY29wZVtXaXRuZXNzU2NvcGVbXCJDYWxsZWRCeUVudHJ5XCJdID0gMV0gPSBcIkNhbGxlZEJ5RW50cnlcIjtcbiAgICBXaXRuZXNzU2NvcGVbV2l0bmVzc1Njb3BlW1wiQ3VzdG9tQ29udHJhY3RzXCJdID0gMTZdID0gXCJDdXN0b21Db250cmFjdHNcIjtcbiAgICBXaXRuZXNzU2NvcGVbV2l0bmVzc1Njb3BlW1wiQ3VzdG9tR3JvdXBzXCJdID0gMzJdID0gXCJDdXN0b21Hcm91cHNcIjtcbiAgICBXaXRuZXNzU2NvcGVbV2l0bmVzc1Njb3BlW1wiR2xvYmFsXCJdID0gMTI4XSA9IFwiR2xvYmFsXCI7XG59KShXaXRuZXNzU2NvcGUgfHwgKFdpdG5lc3NTY29wZSA9IHt9KSk7XG5leHBvcnQgY2xhc3MgQmFzZVdhbGxldEFkYXB0ZXIgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRhcHRlci5qcy5tYXAiLCJleHBvcnQgY2xhc3MgV2FsbGV0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBlcnJvcikge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RGb3VuZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90Rm91bmRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdEluc3RhbGxlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90SW5zdGFsbGVkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RSZWFkeUVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90UmVhZHlFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldENvbm5lY3Rpb25FcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldENvbm5lY3Rpb25FcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldERpc2Nvbm5lY3RlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0RGlzY29ubmVjdGVkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXREaXNjb25uZWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXREaXNjb25uZWN0aW9uRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRBY2NvdW50RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRBY2NvdW50RXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE5vdENvbm5lY3RlZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0VGltZW91dEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0VGltZW91dEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0V2luZG93QmxvY2tlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0V2luZG93QmxvY2tlZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0V2luZG93Q2xvc2VkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRXaW5kb3dDbG9zZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE1ldGhvZE5vdFN1cHBvcnRlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0TWV0aG9kTm90U3VwcG9ydGVkRXJyb3InO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9ycy5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2FkYXB0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9lcnJvcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2xsJztcbmV4cG9ydCAqIGZyb20gJy4vd2FpdCc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBwb2xsKGNhbGxiYWNrLCBpbnRlcnZhbCwgY291bnQpIHtcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgZG9uZSA9IHlpZWxkIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBpZiAoIWRvbmUpXG4gICAgICAgICAgICAgICAgcG9sbChjYWxsYmFjaywgaW50ZXJ2YWwsIGNvdW50IC0gMSk7XG4gICAgICAgIH0pLCBpbnRlcnZhbCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBvbGxVbnRpbFJlYWR5KGFkYXB0ZXIsIHBvbGxJbnRlcnZhbCwgcG9sbENvdW50KSB7XG4gICAgcG9sbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcmVhZHkgfSA9IGFkYXB0ZXI7XG4gICAgICAgIGlmIChyZWFkeSkge1xuICAgICAgICAgICAgaWYgKCFhZGFwdGVyLmVtaXQoJ3JlYWR5JykpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7YWRhcHRlci5jb25zdHJ1Y3Rvci5uYW1lfSBpcyByZWFkeSBidXQgbm8gbGlzdGVuZXIgd2FzIHJlZ2lzdGVyZWRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVhZHk7XG4gICAgfSwgcG9sbEludGVydmFsLCBwb2xsQ291bnQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9sbC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHJwYyB9IGZyb20gJ0BjaXR5b2Z6aW9uL25lb24tanMnO1xuZXhwb3J0IGZ1bmN0aW9uIHdhaXRUeChycGNBZGRyZXNzLCB0eElkLCByZWFkRnJlcXVlbmN5ID0gMTAwMCwgdGltZW91dCA9IDMwMDAwKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBycGNDbGllbnQgPSBuZXcgcnBjLlJQQ0NsaWVudChycGNBZGRyZXNzKTtcbiAgICAgICAgLy8gV2FpdCB1bnRpbCB0aGUgdHJhbnNhY3Rpb24gY2FuIGJlIGZvdW5kLCBpZiBpdCdzIGZvdW5kIGl0IG1lYW5zIGl0J3Mgb2sgYmVjYXVzZSBpdCBoYXMgYmVlbiBpbnNlcnRlZCBpbiBhIGJsb2NrXG4gICAgICAgIC8vIE90aGVyd2lzZSB0cmlnZ2VyIHRoZSB0aW1lb3V0IG1lYW5pbmcgdGhhdCBpdCdzIG5vdCBpbnNlcnRlZCBpbiB0aGUgYmxvY2sgKGF2ZXJhZ2UgYmxvY2sgdGltZSAxNXMpXG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIC8vIFRocm93IGFuIGVycm9yIGlmIHRoZSB0aW1lb3V0IGhhcyBwYXNzZWRcbiAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPiB0aW1lb3V0KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIHRyYW5zYWN0aW9uIGZyb20gdGhlIHJwY0NsaWVudFxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0geWllbGQgcnBjQ2xpZW50LmdldFJhd1RyYW5zYWN0aW9uKHR4SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBTbGVlcCBmb3IgdGhlIG5leHQgY3ljbGVcbiAgICAgICAgICAgICAgICB5aWVsZCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCByZWFkRnJlcXVlbmN5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKCF0cmFuc2FjdGlvbik7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWl0LmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LWJ1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1jb2xsYXBzZSc7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1jb25uZWN0LWJ1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1kaXNjb25uZWN0LWJ1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1pY29uJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LWxpc3QtaXRlbSc7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1tb2RhbC1idXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtbW9kYWwtcHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtbW9kYWwnO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtbXVsdGktYnV0dG9uJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgV2FsbGV0QnV0dG9uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRCdXR0b24oeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBkaXNhYmxlZCwgZW5kSWNvbiwgc3RhcnRJY29uLCBzdHlsZSwgdGFiSW5kZXgsIG9uQ2xpY2ssIH0pIHtcbiAgICBjb25zdCBqdXN0aWZ5Q29udGVudCA9IGVuZEljb24gfHwgc3RhcnRJY29uID8gJ3NwYWNlLWJldHdlZW4nIDogJ2NlbnRlcic7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBgd2FsbGV0LWFkYXB0ZXItYnV0dG9uICR7Y2xhc3NOYW1lIHx8ICcnfWAsIGRpc2FibGVkOiBkaXNhYmxlZCwgb25DbGljazogb25DbGljaywgc3R5bGU6IE9iamVjdC5hc3NpZ24oeyBqdXN0aWZ5Q29udGVudCB9LCBzdHlsZSksIHRhYkluZGV4OiB0YWJJbmRleCB8fCAwLCB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgIHN0YXJ0SWNvbiAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tc3RhcnQtaWNvblwiIH0sIHN0YXJ0SWNvbiksXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBlbmRJY29uICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi1lbmQtaWNvblwiIH0sIGVuZEljb24pKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1idXR0b24uanMubWFwIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUxheW91dEVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldENvbGxhcHNlID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRDb2xsYXBzZSh7IGlkLCBjaGlsZHJlbiwgZXhwYW5kZWQgPSBmYWxzZSwgfSkge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBpbnN0YW50ID0gdXNlUmVmKHRydWUpO1xuICAgIGNvbnN0IHRyYW5zaXRpb24gPSAnaGVpZ2h0IDI1MG1zIGVhc2Utb3V0JztcbiAgICBjb25zdCBvcGVuQ29sbGFwc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBub2RlLnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgY2xvc2VDb2xsYXBzZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IG5vZGUub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIG5vZGUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgICAgIG9wZW5Db2xsYXBzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xvc2VDb2xsYXBzZSgpO1xuICAgICAgICB9XG4gICAgfSwgW2V4cGFuZGVkXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNvbXBsZXRlKCkge1xuICAgICAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUub3ZlcmZsb3cgPSBleHBhbmRlZCA/ICdpbml0aWFsJyA6ICdoaWRkZW4nO1xuICAgICAgICAgICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVHJhbnNpdGlvbkVuZChldmVudCkge1xuICAgICAgICAgICAgaWYgKG5vZGUgJiYgZXZlbnQudGFyZ2V0ID09PSBub2RlICYmIGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gJ2hlaWdodCcpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW50LmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhbmRsZUNvbXBsZXRlKCk7XG4gICAgICAgICAgICBpbnN0YW50LmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgcmV0dXJuICgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpO1xuICAgIH0sIFtleHBhbmRlZF0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNoaWxkcmVuOiBjaGlsZHJlbiwgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWNvbGxhcHNlXCIsIGlkOiBpZCwgcmVmOiByZWYsIHJvbGU6IFwicmVnaW9uXCIsIHN0eWxlOiB7IGhlaWdodDogMCwgdHJhbnNpdGlvbjogaW5zdGFudC5jdXJyZW50ID8gdW5kZWZpbmVkIDogdHJhbnNpdGlvbiB9IH0pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LWNvbGxhcHNlLmpzLm1hcCIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXYWxsZXRCdXR0b24gfSBmcm9tICcuL3dhbGxldC1idXR0b24nO1xuaW1wb3J0IHsgV2FsbGV0SWNvbiB9IGZyb20gJy4vd2FsbGV0LWljb24nO1xuZXhwb3J0IGNvbnN0IFdhbGxldENvbm5lY3RCdXR0b24gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldENvbm5lY3RCdXR0b24oX2EpIHtcbiAgICB2YXIgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBkaXNhYmxlZCwgZW5kSWNvbiwgc3RhcnRJY29uLCBzdHlsZSwgdGFiSW5kZXgsIG9uQ2xpY2sgfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlZFwiLCBcImVuZEljb25cIiwgXCJzdGFydEljb25cIiwgXCJzdHlsZVwiLCBcInRhYkluZGV4XCIsIFwib25DbGlja1wiXSk7XG4gICAgY29uc3QgeyB3YWxsZXQsIGNvbm5lY3QsIGNvbm5lY3RpbmcsIGNvbm5lY3RlZCB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xpY2spXG4gICAgICAgICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICAgICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpXG4gICAgICAgICAgICBjb25uZWN0KCkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICB9LCBbb25DbGljaywgY29ubmVjdF0pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkcmVuKVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICBpZiAoY29ubmVjdGluZylcbiAgICAgICAgICAgIHJldHVybiAnQ29ubmVjdGluZyAuLi4nO1xuICAgICAgICBpZiAoY29ubmVjdGVkKVxuICAgICAgICAgICAgcmV0dXJuICdDb25uZWN0ZWQnO1xuICAgICAgICBpZiAod2FsbGV0KVxuICAgICAgICAgICAgcmV0dXJuICdDb25uZWN0JztcbiAgICAgICAgcmV0dXJuICdDb25uZWN0IFdhbGxldCc7XG4gICAgfSwgW2NoaWxkcmVuLCBjb25uZWN0aW5nLCBjb25uZWN0ZWQsIHdhbGxldF0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLXRyaWdnZXJcIiwgZGlzYWJsZWQ6IGRpc2FibGVkIHx8ICF3YWxsZXQgfHwgY29ubmVjdGluZyB8fCBjb25uZWN0ZWQsIHN0YXJ0SWNvbjogd2FsbGV0ID8gUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRJY29uLCB7IHdhbGxldDogd2FsbGV0IH0pIDogdW5kZWZpbmVkLCBlbmRJY29uOiBlbmRJY29uLCBzdHlsZTogc3R5bGUsIHRhYkluZGV4OiB0YWJJbmRleCwgb25DbGljazogaGFuZGxlQ2xpY2sgfSwgcHJvcHMpLCBjb250ZW50KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1jb25uZWN0LWJ1dHRvbi5qcy5tYXAiLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtYnV0dG9uJztcbmltcG9ydCB7IFdhbGxldEljb24gfSBmcm9tICcuL3dhbGxldC1pY29uJztcbmV4cG9ydCBjb25zdCBXYWxsZXREaXNjb25uZWN0QnV0dG9uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXREaXNjb25uZWN0QnV0dG9uKF9hKSB7XG4gICAgdmFyIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZGlzYWJsZWQsIGVuZEljb24sIHN0YXJ0SWNvbiwgc3R5bGUsIHRhYkluZGV4LCBvbkNsaWNrIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZWRcIiwgXCJlbmRJY29uXCIsIFwic3RhcnRJY29uXCIsIFwic3R5bGVcIiwgXCJ0YWJJbmRleFwiLCBcIm9uQ2xpY2tcIl0pO1xuICAgIGNvbnN0IHsgd2FsbGV0LCBkaXNjb25uZWN0LCBkaXNjb25uZWN0aW5nIH0gPSB1c2VXYWxsZXQoKTtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DbGljaylcbiAgICAgICAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG4gICAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZClcbiAgICAgICAgICAgIGRpc2Nvbm5lY3QoKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIH0sIFtvbkNsaWNrLCBkaXNjb25uZWN0XSk7XG4gICAgY29uc3QgY29udGVudCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGRyZW4pXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIGlmIChkaXNjb25uZWN0aW5nKVxuICAgICAgICAgICAgcmV0dXJuICdEaXNjb25uZWN0aW5nIC4uLic7XG4gICAgICAgIGlmICh3YWxsZXQpXG4gICAgICAgICAgICByZXR1cm4gJ0Rpc2Nvbm5lY3QnO1xuICAgICAgICByZXR1cm4gJ0Rpc2Nvbm5lY3QgV2FsbGV0JztcbiAgICB9LCBbY2hpbGRyZW4sIGRpc2Nvbm5lY3RpbmcsIHdhbGxldF0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLXRyaWdnZXJcIiwgZGlzYWJsZWQ6IGRpc2FibGVkIHx8ICF3YWxsZXQsIHN0YXJ0SWNvbjogd2FsbGV0ID8gUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRJY29uLCB7IHdhbGxldDogd2FsbGV0IH0pIDogdW5kZWZpbmVkLCBlbmRJY29uOiBlbmRJY29uLCBzdHlsZTogc3R5bGUsIHRhYkluZGV4OiB0YWJJbmRleCwgb25DbGljazogaGFuZGxlQ2xpY2sgfSwgcHJvcHMpLCBjb250ZW50KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1kaXNjb25uZWN0LWJ1dHRvbi5qcy5tYXAiLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldEljb24gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldEljb24oX2EpIHtcbiAgICB2YXIgeyB3YWxsZXQgfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wid2FsbGV0XCJdKTtcbiAgICByZXR1cm4gd2FsbGV0ICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7IHNyYzogd2FsbGV0Lmljb24sIGFsdDogYCR7d2FsbGV0Lm5hbWV9IGljb25gIH0sIHByb3BzKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1pY29uLmpzLm1hcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXYWxsZXRCdXR0b24gfSBmcm9tICcuL3dhbGxldC1idXR0b24nO1xuaW1wb3J0IHsgV2FsbGV0SWNvbiB9IGZyb20gJy4vd2FsbGV0LWljb24nO1xuZXhwb3J0IGNvbnN0IFdhbGxldExpc3RJdGVtID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRMaXN0SXRlbSh7IGhhbmRsZUNsaWNrLCB0YWJJbmRleCwgd2FsbGV0LCB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRCdXR0b24sIHsgb25DbGljazogaGFuZGxlQ2xpY2ssIGVuZEljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0SWNvbiwgeyB3YWxsZXQ6IHdhbGxldCB9KSwgdGFiSW5kZXg6IHRhYkluZGV4IH0sIHdhbGxldC5uYW1lKSkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtbGlzdC1pdGVtLmpzLm1hcCIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWJ1dHRvbic7XG5pbXBvcnQgeyB1c2VXYWxsZXRNb2RhbCB9IGZyb20gJy4uL2hvb2tzL3VzZS13YWxsZXQtbW9kYWwnO1xuZXhwb3J0IGNvbnN0IFdhbGxldE1vZGFsQnV0dG9uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRNb2RhbEJ1dHRvbihfYSkge1xuICAgIHZhciB7IGNoaWxkcmVuID0gJ1NlbGVjdCBXYWxsZXQnLCBvbkNsaWNrIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwib25DbGlja1wiXSk7XG4gICAgY29uc3QgeyB2aXNpYmxlLCBzZXRWaXNpYmxlIH0gPSB1c2VXYWxsZXRNb2RhbCgpO1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNsaWNrKVxuICAgICAgICAgICAgb25DbGljayhldmVudCk7XG4gICAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZClcbiAgICAgICAgICAgIHNldFZpc2libGUoIXZpc2libGUpO1xuICAgIH0sIFtvbkNsaWNrLCBzZXRWaXNpYmxlLCB2aXNpYmxlXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tdHJpZ2dlclwiLCBvbkNsaWNrOiBoYW5kbGVDbGljayB9LCBwcm9wcyksIGNoaWxkcmVuKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1tb2RhbC1idXR0b24uanMubWFwIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0TW9kYWxDb250ZXh0IH0gZnJvbSAnLi4vaG9va3MvdXNlLXdhbGxldC1tb2RhbCc7XG5pbXBvcnQgeyBXYWxsZXRNb2RhbCB9IGZyb20gJy4vd2FsbGV0LW1vZGFsJztcbmV4cG9ydCBjb25zdCBXYWxsZXRNb2RhbFByb3ZpZGVyID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRNb2RhbFByb3ZpZGVyKF9hKSB7XG4gICAgdmFyIHsgY2hpbGRyZW4gfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIl0pO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0TW9kYWxDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB7XG4gICAgICAgICAgICB2aXNpYmxlLFxuICAgICAgICAgICAgc2V0VmlzaWJsZSxcbiAgICAgICAgfSB9LFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgdmlzaWJsZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldE1vZGFsLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1tb2RhbC1wcm92aWRlci5qcy5tYXAiLCJpbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VMYXlvdXRFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgV2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtYnV0dG9uJztcbmltcG9ydCB7IFdhbGxldENvbGxhcHNlIH0gZnJvbSAnLi93YWxsZXQtY29sbGFwc2UnO1xuaW1wb3J0IHsgdXNlV2FsbGV0TW9kYWwgfSBmcm9tICcuLi9ob29rcy91c2Utd2FsbGV0LW1vZGFsJztcbmltcG9ydCB7IFdhbGxldExpc3RJdGVtIH0gZnJvbSAnLi93YWxsZXQtbGlzdC1pdGVtJztcbmV4cG9ydCBjb25zdCBXYWxsZXRNb2RhbCA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0TW9kYWwoeyBjbGFzc05hbWUgPSAnJywgbG9nbywgZmVhdHVyZWRXYWxsZXRzID0gMywgY29udGFpbmVyID0gJ2JvZHknLCB9KSB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHsgd2FsbGV0cywgc2VsZWN0IH0gPSB1c2VXYWxsZXQoKTtcbiAgICBjb25zdCB7IHNldFZpc2libGUgfSA9IHVzZVdhbGxldE1vZGFsKCk7XG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2ZhZGVJbiwgc2V0RmFkZUluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcG9ydGFsLCBzZXRQb3J0YWxdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2ZlYXR1cmVkLCBtb3JlXSA9IHVzZU1lbW8oKCkgPT4gW3dhbGxldHMuc2xpY2UoMCwgZmVhdHVyZWRXYWxsZXRzKSwgd2FsbGV0cy5zbGljZShmZWF0dXJlZFdhbGxldHMpXSwgW3dhbGxldHMsIGZlYXR1cmVkV2FsbGV0c10pO1xuICAgIGNvbnN0IGhpZGVNb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0RmFkZUluKGZhbHNlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKSwgMTUwKTtcbiAgICB9LCBbc2V0RmFkZUluLCBzZXRWaXNpYmxlXSk7XG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaGlkZU1vZGFsKCk7XG4gICAgfSwgW2hpZGVNb2RhbF0pO1xuICAgIGNvbnN0IGhhbmRsZVdhbGxldENsaWNrID0gdXNlQ2FsbGJhY2soKGV2ZW50LCB3YWxsZXROYW1lKSA9PiB7XG4gICAgICAgIHNlbGVjdCh3YWxsZXROYW1lKTtcbiAgICAgICAgaGFuZGxlQ2xvc2UoZXZlbnQpO1xuICAgIH0sIFtzZWxlY3QsIGhhbmRsZUNsb3NlXSk7XG4gICAgY29uc3QgaGFuZGxlQ29sbGFwc2VDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCksIFtzZXRFeHBhbmRlZCwgZXhwYW5kZWRdKTtcbiAgICBjb25zdCBoYW5kbGVUYWJLZXkgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGhlcmUgd2UgcXVlcnkgYWxsIGZvY3VzYWJsZSBlbGVtZW50c1xuICAgICAgICBjb25zdCBmb2N1c2FibGVFbGVtZW50cyA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGZpcnN0RWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzWzBdO1xuICAgICAgICBjb25zdCBsYXN0RWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzW2ZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIC8vIGlmIGdvaW5nIGJhY2t3YXJkIGJ5IHByZXNzaW5nIHRhYiBhbmQgZmlyc3RFbGVtZW50IGlzIGFjdGl2ZSwgc2hpZnQgZm9jdXMgdG8gbGFzdCBmb2N1c2FibGUgZWxlbWVudFxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGZpcnN0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGxhc3RFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIGdvaW5nIGZvcndhcmQgYnkgcHJlc3NpbmcgdGFiIGFuZCBsYXN0RWxlbWVudCBpcyBhY3RpdmUsIHNoaWZ0IGZvY3VzIHRvIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBmaXJzdEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3JlZl0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgaGlkZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVGFiS2V5KGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gR2V0IG9yaWdpbmFsIG92ZXJmbG93XG4gICAgICAgIGNvbnN0IHsgb3ZlcmZsb3cgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpO1xuICAgICAgICAvLyBIYWNrIHRvIGVuYWJsZSBmYWRlIGluIGFuaW1hdGlvbiBhZnRlciBtb3VudFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEZhZGVJbih0cnVlKSwgMCk7XG4gICAgICAgIC8vIFByZXZlbnQgc2Nyb2xsaW5nIG9uIG1vdW50XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgLy8gTGlzdGVuIGZvciBrZXlkb3duIGV2ZW50c1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24sIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIC8vIFJlLWVuYWJsZSBzY3JvbGxpbmcgd2hlbiBjb21wb25lbnQgdW5tb3VudHNcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBvdmVyZmxvdztcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93biwgZmFsc2UpO1xuICAgICAgICB9O1xuICAgIH0sIFtoaWRlTW9kYWwsIGhhbmRsZVRhYktleV0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiBzZXRQb3J0YWwoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpKSwgW3NldFBvcnRhbCwgY29udGFpbmVyXSk7XG4gICAgcmV0dXJuIChwb3J0YWwgJiZcbiAgICAgICAgY3JlYXRlUG9ydGFsKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBcImFyaWEtbGFiZWxsZWRieVwiOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLXRpdGxlXCIsIFwiYXJpYS1tb2RhbFwiOiBcInRydWVcIiwgY2xhc3NOYW1lOiBgd2FsbGV0LWFkYXB0ZXItbW9kYWwgJHtmYWRlSW4gJiYgJ3dhbGxldC1hZGFwdGVyLW1vZGFsLWZhZGUtaW4nfSAke2NsYXNzTmFtZX1gLCByZWY6IHJlZiwgcm9sZTogXCJkaWFsb2dcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGB3YWxsZXQtYWRhcHRlci1tb2RhbC13cmFwcGVyICR7IWxvZ28gJiYgJ3dhbGxldC1hZGFwdGVyLW1vZGFsLXdyYXBwZXItbm8tbG9nbyd9YCB9LFxuICAgICAgICAgICAgICAgICAgICBsb2dvICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWxvZ28td3JhcHBlclwiIH0sIHR5cGVvZiBsb2dvID09PSAnc3RyaW5nJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBhbHQ6IFwibG9nb1wiLCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtbG9nb1wiLCBzcmM6IGxvZ28gfSkgOiBsb2dvKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC10aXRsZVwiLCBpZDogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC10aXRsZVwiIH0sIFwiQ29ubmVjdCBXYWxsZXRcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBoYW5kbGVDbG9zZSwgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWJ1dHRvbi1jbG9zZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgd2lkdGg6IFwiMTRcIiwgaGVpZ2h0OiBcIjE0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwiTTE0IDEyLjQ2MSA4LjMgNi43NzJsNS4yMzQtNS4yMzNMMTIuMDA2IDAgNi43NzIgNS4yMzQgMS41NCAwIDAgMS41MzlsNS4yMzQgNS4yMzNMMCAxMi4wMDZsMS41MzkgMS41MjhMNi43NzIgOC4zbDUuNjkgNS43TDE0IDEyLjQ2MXpcIiB9KSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtbGlzdFwiIH0sIGZlYXR1cmVkLm1hcCgod2FsbGV0KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRMaXN0SXRlbSwgeyBrZXk6IHdhbGxldC5uYW1lLCBoYW5kbGVDbGljazogKGV2ZW50KSA9PiBoYW5kbGVXYWxsZXRDbGljayhldmVudCwgd2FsbGV0Lm5hbWUpLCB3YWxsZXQ6IHdhbGxldCB9KSkpKSxcbiAgICAgICAgICAgICAgICAgICAgbW9yZS5sZW5ndGggPyAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0Q29sbGFwc2UsIHsgZXhwYW5kZWQ6IGV4cGFuZGVkLCBpZDogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1jb2xsYXBzZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWxpc3RcIiB9LCBtb3JlLm1hcCgod2FsbGV0KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRMaXN0SXRlbSwgeyBrZXk6IHdhbGxldC5uYW1lLCBoYW5kbGVDbGljazogKGV2ZW50KSA9PiBoYW5kbGVXYWxsZXRDbGljayhldmVudCwgd2FsbGV0Lm5hbWUpLCB0YWJJbmRleDogZXhwYW5kZWQgPyAwIDogLTEsIHdhbGxldDogd2FsbGV0IH0pKSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0QnV0dG9uLCB7IFwiYXJpYS1jb250cm9sc1wiOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWNvbGxhcHNlXCIsIFwiYXJpYS1leHBhbmRlZFwiOiBleHBhbmRlZCwgY2xhc3NOYW1lOiBgd2FsbGV0LWFkYXB0ZXItbW9kYWwtY29sbGFwc2UtYnV0dG9uICR7ZXhwYW5kZWQgJiYgJ3dhbGxldC1hZGFwdGVyLW1vZGFsLWNvbGxhcHNlLWJ1dHRvbi1hY3RpdmUnfWAsIGVuZEljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB3aWR0aDogXCIxMVwiLCBoZWlnaHQ6IFwiNlwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJtNS45MzggNS43MyA0LjI4LTQuMTI2YS45MTUuOTE1IDAgMCAwIDAtMS4zMjIgMSAxIDAgMCAwLTEuMzcxIDBMNS4yNTMgMy43MzYgMS42NTkuMjcyYTEgMSAwIDAgMC0xLjM3MSAwQS45My45MyAwIDAgMCAwIC45MzJjMCAuMjQ2LjEuNDguMjg4LjY2Mmw0LjI4IDQuMTI1YS45OS45OSAwIDAgMCAxLjM3LjAxelwiIH0pKSwgb25DbGljazogaGFuZGxlQ29sbGFwc2VDbGljayB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkID8gJ0xlc3MnIDogJ01vcmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG9wdGlvbnNcIikpKSA6IG51bGwpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtb3ZlcmxheVwiLCBvbk1vdXNlRG93bjogaGFuZGxlQ2xvc2UgfSkpLCBwb3J0YWwpKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LW1vZGFsLmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtYnV0dG9uJztcbmltcG9ydCB7IHVzZVdhbGxldE1vZGFsIH0gZnJvbSAnLi4vaG9va3MvdXNlLXdhbGxldC1tb2RhbCc7XG5pbXBvcnQgeyBXYWxsZXRDb25uZWN0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtY29ubmVjdC1idXR0b24nO1xuaW1wb3J0IHsgV2FsbGV0SWNvbiB9IGZyb20gJy4vd2FsbGV0LWljb24nO1xuaW1wb3J0IHsgV2FsbGV0TW9kYWxCdXR0b24gfSBmcm9tICcuL3dhbGxldC1tb2RhbC1idXR0b24nO1xuZXhwb3J0IGNvbnN0IFdhbGxldE11bHRpQnV0dG9uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRNdWx0aUJ1dHRvbihfYSkge1xuICAgIHZhciB7IGNoaWxkcmVuIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCJdKTtcbiAgICBjb25zdCB7IGFkZHJlc3MsIHdhbGxldCwgZGlzY29ubmVjdCB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgeyBzZXRWaXNpYmxlIH0gPSB1c2VXYWxsZXRNb2RhbCgpO1xuICAgIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgX2FkZHJlc3MgPSB1c2VNZW1vKCgpID0+IGFkZHJlc3MsIFthZGRyZXNzXSk7XG4gICAgY29uc3QgY29udGVudCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGRyZW4pXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIGlmICghd2FsbGV0IHx8ICFfYWRkcmVzcylcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gX2FkZHJlc3M7XG4gICAgfSwgW2NoaWxkcmVuLCB3YWxsZXQsIF9hZGRyZXNzXSk7XG4gICAgY29uc3QgY29weUFkZHJlc3MgPSB1c2VDYWxsYmFjaygoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChfYWRkcmVzcykge1xuICAgICAgICAgICAgeWllbGQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoX2FkZHJlc3MpO1xuICAgICAgICAgICAgc2V0Q29waWVkKHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb3BpZWQoZmFsc2UpLCA0MDApO1xuICAgICAgICB9XG4gICAgfSksIFtfYWRkcmVzc10pO1xuICAgIGNvbnN0IG9wZW5Ecm9wZG93biA9IHVzZUNhbGxiYWNrKCgpID0+IHNldEFjdGl2ZSh0cnVlKSwgW3NldEFjdGl2ZV0pO1xuICAgIGNvbnN0IGNsb3NlRHJvcGRvd24gPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRBY3RpdmUoZmFsc2UpLCBbc2V0QWN0aXZlXSk7XG4gICAgY29uc3Qgb3Blbk1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgfSwgW3NldFZpc2libGUsIGNsb3NlRHJvcGRvd25dKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHJlZi5jdXJyZW50O1xuICAgICAgICAgICAgLy8gRG8gbm90aGluZyBpZiBjbGlja2luZyBkcm9wZG93biBvciBpdHMgZGVzY2VuZGFudHNcbiAgICAgICAgICAgIGlmICghbm9kZSB8fCBub2RlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2xvc2VEcm9wZG93bigpO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgIH0sIFtyZWYsIGNsb3NlRHJvcGRvd25dKTtcbiAgICBpZiAoIXdhbGxldClcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0TW9kYWxCdXR0b24sIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgY2hpbGRyZW4pO1xuICAgIGlmICghX2FkZHJlc3MpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldENvbm5lY3RCdXR0b24sIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgY2hpbGRyZW4pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1kcm9wZG93blwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0QnV0dG9uLCBPYmplY3QuYXNzaWduKHsgXCJhcmlhLWV4cGFuZGVkXCI6IGFjdGl2ZSwgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi10cmlnZ2VyXCIsIHN0eWxlOiBPYmplY3QuYXNzaWduKHsgcG9pbnRlckV2ZW50czogYWN0aXZlID8gJ25vbmUnIDogJ2F1dG8nIH0sIHByb3BzLnN0eWxlKSwgb25DbGljazogb3BlbkRyb3Bkb3duLCBzdGFydEljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0SWNvbiwgeyB3YWxsZXQ6IHdhbGxldCB9KSB9LCBwcm9wcyksIGNvbnRlbnQpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBcImFyaWEtbGFiZWxcIjogXCJkcm9wZG93bi1saXN0XCIsIGNsYXNzTmFtZTogYHdhbGxldC1hZGFwdGVyLWRyb3Bkb3duLWxpc3QgJHthY3RpdmUgJiYgJ3dhbGxldC1hZGFwdGVyLWRyb3Bkb3duLWxpc3QtYWN0aXZlJ31gLCByZWY6IHJlZiwgcm9sZTogXCJtZW51XCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IG9uQ2xpY2s6IGNvcHlBZGRyZXNzLCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItZHJvcGRvd24tbGlzdC1pdGVtXCIsIHJvbGU6IFwibWVudWl0ZW1cIiB9LCBjb3BpZWQgPyAnQ29waWVkJyA6ICdDb3B5IGFkZHJlc3MnKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IG9uQ2xpY2s6IG9wZW5Nb2RhbCwgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWRyb3Bkb3duLWxpc3QtaXRlbVwiLCByb2xlOiBcIm1lbnVpdGVtXCIgfSwgXCJDb25uZWN0IGEgZGlmZmVyZW50IHdhbGxldFwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IG9uQ2xpY2s6IGRpc2Nvbm5lY3QsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0LWl0ZW1cIiwgcm9sZTogXCJtZW51aXRlbVwiIH0sIFwiRGlzY29ubmVjdFwiKSkpKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LW11bHRpLWJ1dHRvbi5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldE1vZGFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVdhbGxldE1vZGFsKCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFdhbGxldE1vZGFsQ29udGV4dCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utd2FsbGV0LW1vZGFsLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vaG9va3MnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IsIFdhbGxldE5vdFJlYWR5RXJyb3IsIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXYWxsZXROb3RTZWxlY3RlZEVycm9yIH0gZnJvbSAnLi4vdXRpbHMvZXJyb3JzJztcbmltcG9ydCB7IFdhbGxldENvbnRleHQgfSBmcm9tICcuLi9ob29rcy91c2Utd2FsbGV0JztcbmNvbnN0IFdBTExFVF9JTklUSUFMX1NUQVRFID0ge1xuICAgIHdhbGxldDogbnVsbCxcbiAgICBhZGFwdGVyOiBudWxsLFxuICAgIHJlYWR5OiBmYWxzZSxcbiAgICBhZGRyZXNzOiBudWxsLFxuICAgIGNvbm5lY3RlZDogZmFsc2UsXG59O1xuZXhwb3J0IGNvbnN0IFdhbGxldFByb3ZpZGVyID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRQcm92aWRlcih7IGNoaWxkcmVuLCB3YWxsZXRzLCBhdXRvQ29ubmVjdCA9IGZhbHNlLCBvbkVycm9yOiBfb25FcnJvciA9IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksIH0pIHtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAvLyBUaGUgbWFpbiBzdGF0ZSBvZiB0aGUgd2FsbGV0IHByb3ZpZGVyXG4gICAgY29uc3QgW3sgd2FsbGV0LCBhZGFwdGVyLCByZWFkeSwgYWRkcmVzcywgY29ubmVjdGVkIH0sIHNldFN0YXRlXSA9IHVzZVN0YXRlKFdBTExFVF9JTklUSUFMX1NUQVRFKTtcbiAgICBjb25zdCBbY29ubmVjdGluZywgc2V0Q29ubmVjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Rpc2Nvbm5lY3RpbmcsIHNldERpc2Nvbm5lY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGlzQ29ubmVjdGluZyA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgaXNEaXNjb25uZWN0aW5nID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBpc1VubG9hZGluZyA9IHVzZVJlZihmYWxzZSk7XG4gICAgLy8gTWFwIHdhbGxldCBuYW1lcyB0byB3YWxsZXRzIGZvciBlYXNpZXIgdXNhZ2VcbiAgICBjb25zdCB3YWxsZXRzQnlOYW1lID0gdXNlTWVtbygoKSA9PiB3YWxsZXRzLnJlZHVjZSgod2FsbGV0c0J5TmFtZSwgd2FsbGV0KSA9PiB7XG4gICAgICAgIHdhbGxldHNCeU5hbWVbd2FsbGV0Lm5hbWVdID0gd2FsbGV0O1xuICAgICAgICByZXR1cm4gd2FsbGV0c0J5TmFtZTtcbiAgICB9LCB7fSksIFt3YWxsZXRzXSk7XG4gICAgLy8gV2hlbiB0aGUgc2VsZWN0ZWQgd2FsbGV0IGNoYW5nZXMsIHJlLWluaXRpYWxpemUgdGhlIHN0YXRlXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgd2FsbGV0ID0gKG5hbWUgJiYgd2FsbGV0c0J5TmFtZVtuYW1lXSkgfHwgbnVsbDtcbiAgICAgICAgY29uc3QgYWRhcHRlciA9IHdhbGxldCAmJiB3YWxsZXQuYWRhcHRlcigpO1xuICAgICAgICBpZiAoYWRhcHRlcikge1xuICAgICAgICAgICAgY29uc3QgeyByZWFkeSwgYWRkcmVzcywgY29ubmVjdGVkIH0gPSBhZGFwdGVyO1xuICAgICAgICAgICAgc2V0U3RhdGUoeyB3YWxsZXQsIGFkYXB0ZXIsIGNvbm5lY3RlZCwgYWRkcmVzcywgcmVhZHkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRTdGF0ZShXQUxMRVRfSU5JVElBTF9TVEFURSk7XG4gICAgICAgIH1cbiAgICB9LCBbbmFtZSwgd2FsbGV0c0J5TmFtZSwgc2V0U3RhdGVdKTtcbiAgICAvLyBJZiBhdXRvQ29ubmVjdCBpcyBlbmFibGVkLCB0cnkgdG8gY29ubmVjdCB3aGVuIHRoZSBhZGFwdGVyIGNoYW5nZXMgYW5kIGlzIHJlYWR5XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzQ29ubmVjdGluZy5jdXJyZW50IHx8IGNvbm5lY3RpbmcgfHwgY29ubmVjdGVkIHx8ICFhdXRvQ29ubmVjdCB8fCAhYWRhcHRlciB8fCAhcmVhZHkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGlzQ29ubmVjdGluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRDb25uZWN0aW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHNlbGVjdGVkIHdhbGxldFxuICAgICAgICAgICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCB0aHJvdyBlcnJvciwgYnV0IG9uRXJyb3Igd2lsbCBzdGlsbCBiZSBjYWxsZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbm5lY3RpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBpc0Nvbm5lY3RpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuICAgIH0sIFtpc0Nvbm5lY3RpbmcsIGNvbm5lY3RpbmcsIGNvbm5lY3RlZCwgYXV0b0Nvbm5lY3QsIGFkYXB0ZXIsIHJlYWR5LCBzZXRDb25uZWN0aW5nLCBzZXROYW1lXSk7XG4gICAgLy8gSWYgdGhlIHdpbmRvdyBpcyBjbG9zaW5nIG9yIHJlbG9hZGluZywgaWdub3JlIGRpc2Nvbm5lY3QgYW5kIGVycm9yIGV2ZW50cyBmcm9tIHRoZSBhZGFwdGVyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgICAgICBpc1VubG9hZGluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGxpc3RlbmVyKTtcbiAgICB9LCBbaXNVbmxvYWRpbmddKTtcbiAgICAvLyBTZWxlY3QgYSB3YWxsZXQgYnkgbmFtZVxuICAgIGNvbnN0IHNlbGVjdCA9IHVzZUNhbGxiYWNrKChuZXdOYW1lKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBuZXdOYW1lKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoYWRhcHRlcilcbiAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICBzZXROYW1lKG5ld05hbWUpO1xuICAgIH0pLCBbbmFtZSwgYWRhcHRlciwgc2V0TmFtZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIHJlYWR5IGV2ZW50XG4gICAgY29uc3Qgb25SZWFkeSA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFN0YXRlKChzdGF0ZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IHJlYWR5OiB0cnVlIH0pKSksIFtzZXRTdGF0ZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIGNvbm5lY3QgZXZlbnRcbiAgICBjb25zdCBvbkNvbm5lY3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgeyBjb25uZWN0ZWQsIGFkZHJlc3MsIHJlYWR5IH0gPSBhZGFwdGVyO1xuICAgICAgICBzZXRTdGF0ZSgoc3RhdGUpID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyBjb25uZWN0ZWQsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgcmVhZHkgfSkpKTtcbiAgICB9LCBbYWRhcHRlciwgc2V0U3RhdGVdKTtcbiAgICAvLyBIYW5kbGUgdGhlIGFkYXB0ZXIncyBkaXNjb25uZWN0IGV2ZW50XG4gICAgY29uc3Qgb25EaXNjb25uZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICAvLyBDbGVhciB0aGUgc2VsZWN0ZWQgd2FsbGV0IHVubGVzcyB0aGUgd2luZG93IGlzIHVubG9hZGluZ1xuICAgICAgICBpZiAoIWlzVW5sb2FkaW5nLmN1cnJlbnQpXG4gICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgIH0sIFtpc1VubG9hZGluZywgc2V0TmFtZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIGVycm9yIGV2ZW50LCBhbmQgbG9jYWwgZXJyb3JzXG4gICAgY29uc3Qgb25FcnJvciA9IHVzZUNhbGxiYWNrKChlcnJvcikgPT4ge1xuICAgICAgICAvLyBDYWxsIHRoZSBwcm92aWRlZCBlcnJvciBoYW5kbGVyIHVubGVzcyB0aGUgd2luZG93IGlzIHVubG9hZGluZ1xuICAgICAgICBpZiAoIWlzVW5sb2FkaW5nLmN1cnJlbnQpXG4gICAgICAgICAgICBfb25FcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9LCBbaXNVbmxvYWRpbmcsIF9vbkVycm9yXSk7XG4gICAgLy8gQ29ubmVjdCB0aGUgYWRhcHRlciB0byB0aGUgd2FsbGV0XG4gICAgY29uc3QgY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKGlzQ29ubmVjdGluZy5jdXJyZW50IHx8IGNvbm5lY3RpbmcgfHwgZGlzY29ubmVjdGluZyB8fCBjb25uZWN0ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghd2FsbGV0IHx8ICFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFyZWFkeSkge1xuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHNlbGVjdGVkIHdhbGxldFxuICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHdhbGxldC51cmwsICdfYmxhbmsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFJlYWR5RXJyb3IoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaXNDb25uZWN0aW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBzZXRDb25uZWN0aW5nKHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgeWllbGQgYWRhcHRlci5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgc2VsZWN0ZWQgd2FsbGV0XG4gICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgICAgICAgICAgLy8gUmV0aHJvdyB0aGUgZXJyb3IsIGFuZCBvbkVycm9yIHdpbGwgYWxzbyBiZSBjYWxsZWRcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0Q29ubmVjdGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpc0Nvbm5lY3RpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSksIFtpc0Nvbm5lY3RpbmcsIGNvbm5lY3RpbmcsIGRpc2Nvbm5lY3RpbmcsIGNvbm5lY3RlZCwgd2FsbGV0LCBhZGFwdGVyLCBvbkVycm9yLCByZWFkeSwgc2V0Q29ubmVjdGluZywgc2V0TmFtZV0pO1xuICAgIC8vIERpc2Nvbm5lY3QgdGhlIGFkYXB0ZXIgZnJvbSB0aGUgd2FsbGV0XG4gICAgY29uc3QgZGlzY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKGlzRGlzY29ubmVjdGluZy5jdXJyZW50IHx8IGRpc2Nvbm5lY3RpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHJldHVybiBzZXROYW1lKG51bGwpO1xuICAgICAgICBpc0Rpc2Nvbm5lY3RpbmcuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHNldERpc2Nvbm5lY3RpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB5aWVsZCBhZGFwdGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCB3YWxsZXRcbiAgICAgICAgICAgIHNldE5hbWUobnVsbCk7XG4gICAgICAgICAgICAvLyBSZXRocm93IHRoZSBlcnJvciwgYW5kIG9uRXJyb3Igd2lsbCBhbHNvIGJlIGNhbGxlZFxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBzZXREaXNjb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlzRGlzY29ubmVjdGluZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KSwgW2lzRGlzY29ubmVjdGluZywgZGlzY29ubmVjdGluZywgYWRhcHRlciwgc2V0RGlzY29ubmVjdGluZywgc2V0TmFtZV0pO1xuICAgIGNvbnN0IGludm9rZVJlYWQgPSB1c2VDYWxsYmFjaygocmVxdWVzdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5pbnZva2VSZWFkKHJlcXVlc3QpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgY29uc3QgaW52b2tlUmVhZE11bHRpID0gdXNlQ2FsbGJhY2soKHJlcXVlc3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuaW52b2tlUmVhZE11bHRpKHJlcXVlc3QpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgY29uc3QgaW52b2tlID0gdXNlQ2FsbGJhY2soKHJlcXVlc3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuaW52b2tlKHJlcXVlc3QpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgY29uc3QgaW52b2tlTXVsdGkgPSB1c2VDYWxsYmFjaygocmVxdWVzdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5pbnZva2VNdWx0aShyZXF1ZXN0KTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIGNvbnN0IGdldE5ldHdvcmtzID0gdXNlQ2FsbGJhY2soKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5nZXROZXR3b3JrcygpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgY29uc3Qgc2lnbk1lc3NhZ2UgPSB1c2VDYWxsYmFjaygocmVxdWVzdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5zaWduTWVzc2FnZShyZXF1ZXN0KTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIC8vIFNldHVwIGFuZCB0ZWFyZG93biBldmVudCBsaXN0ZW5lcnMgd2hlbiB0aGUgYWRhcHRlciBjaGFuZ2VzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGFkYXB0ZXIpIHtcbiAgICAgICAgICAgIGFkYXB0ZXIub24oJ3JlYWR5Jywgb25SZWFkeSk7XG4gICAgICAgICAgICBhZGFwdGVyLm9uKCdjb25uZWN0Jywgb25Db25uZWN0KTtcbiAgICAgICAgICAgIGFkYXB0ZXIub24oJ2Rpc2Nvbm5lY3QnLCBvbkRpc2Nvbm5lY3QpO1xuICAgICAgICAgICAgYWRhcHRlci5vbignZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRhcHRlci5vZmYoJ3JlYWR5Jywgb25SZWFkeSk7XG4gICAgICAgICAgICAgICAgYWRhcHRlci5vZmYoJ2Nvbm5lY3QnLCBvbkNvbm5lY3QpO1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIub2ZmKCdkaXNjb25uZWN0Jywgb25EaXNjb25uZWN0KTtcbiAgICAgICAgICAgICAgICBhZGFwdGVyLm9mZignZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCBbYWRhcHRlciwgb25SZWFkeSwgb25Db25uZWN0LCBvbkRpc2Nvbm5lY3QsIG9uRXJyb3JdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0Q29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZToge1xuICAgICAgICAgICAgd2FsbGV0cyxcbiAgICAgICAgICAgIGF1dG9Db25uZWN0LFxuICAgICAgICAgICAgd2FsbGV0LFxuICAgICAgICAgICAgYWRhcHRlcixcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICByZWFkeSxcbiAgICAgICAgICAgIGNvbm5lY3RlZCxcbiAgICAgICAgICAgIGNvbm5lY3RpbmcsXG4gICAgICAgICAgICBkaXNjb25uZWN0aW5nLFxuICAgICAgICAgICAgc2VsZWN0LFxuICAgICAgICAgICAgY29ubmVjdCxcbiAgICAgICAgICAgIGRpc2Nvbm5lY3QsXG4gICAgICAgICAgICBpbnZva2VSZWFkLFxuICAgICAgICAgICAgaW52b2tlUmVhZE11bHRpLFxuICAgICAgICAgICAgaW52b2tlLFxuICAgICAgICAgICAgaW52b2tlTXVsdGksXG4gICAgICAgICAgICBnZXROZXR3b3JrcyxcbiAgICAgICAgICAgIHNpZ25NZXNzYWdlLFxuICAgICAgICB9IH0sIGNoaWxkcmVuKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1wcm92aWRlci5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VXYWxsZXQoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoV2FsbGV0Q29udGV4dCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2Utd2FsbGV0LmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2hvb2tzJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgV2FsbGV0RXJyb3IgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZSc7XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE5vdFNlbGVjdGVkRXJyb3InO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9ycy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2l0eW9memlvbi9uZW9uLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50ZW1pdHRlcjNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwibmFtZXMiOlsidXNlV2FsbGV0IiwiV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IiLCJXYWxsZXRNdWx0aUJ1dHRvbiIsIndhbGxldCIsIkhlYWQiLCJOZW9uIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsIkluZGV4IiwiY29ubmVjdGVkIiwiZ2V0TmV0d29ya3MiLCJhZGRyZXNzIiwiaW52b2tlIiwiY29ubmVjdCIsImFjY291bnQiLCJzZXRBY2NvdW50Iiwid2FsbGV0TmV0d29yayIsInNldFdhbGxldE5ldHdvcmsiLCJmZXRjaFdhbGxldE5ldHdvcmsiLCJyZXN1bHQiLCJzdGF0dXMiLCJkYXRhIiwiZGVmYXVsdE5ldHdvcmsiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrIiwiZ2V0U2NyaXB0SGFzaEZyb21BZGRyZXNzIiwicnBjQWRkcmVzcyIsIm5ldHdvcmtNYWdpYyIsInNjcmlwdEhhc2giLCJjb250cmFjdCIsImV4cGVyaW1lbnRhbCIsIlNtYXJ0Q29udHJhY3QiLCJ1IiwiSGV4U3RyaW5nIiwiZnJvbUhleCIsInNpZ25lcnMiLCJzY29wZXMiLCJyZXMiLCJKU09OIiwic3RyaW5naWZ5IiwiRXZlbnRFbWl0dGVyIiwiV2l0bmVzc1Njb3BlIiwiQmFzZVdhbGxldEFkYXB0ZXIiLCJXYWxsZXRFcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJtZXNzYWdlIiwiV2FsbGV0Tm90Rm91bmRFcnJvciIsImFyZ3VtZW50cyIsIm5hbWUiLCJXYWxsZXROb3RJbnN0YWxsZWRFcnJvciIsIldhbGxldE5vdFJlYWR5RXJyb3IiLCJXYWxsZXRDb25uZWN0aW9uRXJyb3IiLCJXYWxsZXREaXNjb25uZWN0ZWRFcnJvciIsIldhbGxldERpc2Nvbm5lY3Rpb25FcnJvciIsIldhbGxldEFjY291bnRFcnJvciIsIldhbGxldFRpbWVvdXRFcnJvciIsIldhbGxldFdpbmRvd0Jsb2NrZWRFcnJvciIsIldhbGxldFdpbmRvd0Nsb3NlZEVycm9yIiwiV2FsbGV0TWV0aG9kTm90U3VwcG9ydGVkRXJyb3IiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJwb2xsIiwiY2FsbGJhY2siLCJpbnRlcnZhbCIsImNvdW50Iiwic2V0VGltZW91dCIsInBvbGxVbnRpbFJlYWR5IiwiYWRhcHRlciIsInBvbGxJbnRlcnZhbCIsInBvbGxDb3VudCIsInJlYWR5IiwiZW1pdCIsIndhcm4iLCJycGMiLCJ3YWl0VHgiLCJ0eElkIiwicmVhZEZyZXF1ZW5jeSIsInRpbWVvdXQiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJycGNDbGllbnQiLCJSUENDbGllbnQiLCJ0cmFuc2FjdGlvbiIsImdldFJhd1RyYW5zYWN0aW9uIiwiUmVhY3QiLCJXYWxsZXRCdXR0b24iLCJtZW1vIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImVuZEljb24iLCJzdGFydEljb24iLCJzdHlsZSIsInRhYkluZGV4IiwianVzdGlmeUNvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidHlwZSIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsIldhbGxldENvbGxhcHNlIiwiaWQiLCJleHBhbmRlZCIsInJlZiIsImluc3RhbnQiLCJ0cmFuc2l0aW9uIiwib3BlbkNvbGxhcHNlIiwibm9kZSIsImN1cnJlbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbG9zZUNvbGxhcHNlIiwib2Zmc2V0SGVpZ2h0Iiwib3ZlcmZsb3ciLCJoYW5kbGVDb21wbGV0ZSIsImhhbmRsZVRyYW5zaXRpb25FbmQiLCJldmVudCIsInRhcmdldCIsInByb3BlcnR5TmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicm9sZSIsInVuZGVmaW5lZCIsIl9fcmVzdCIsInMiLCJ0IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwibGVuZ3RoIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ1c2VNZW1vIiwiV2FsbGV0SWNvbiIsIldhbGxldENvbm5lY3RCdXR0b24iLCJfYSIsInByb3BzIiwiY29ubmVjdGluZyIsImhhbmRsZUNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsImNhdGNoIiwiY29udGVudCIsIldhbGxldERpc2Nvbm5lY3RCdXR0b24iLCJkaXNjb25uZWN0IiwiZGlzY29ubmVjdGluZyIsInNyYyIsImljb24iLCJhbHQiLCJXYWxsZXRMaXN0SXRlbSIsInVzZVdhbGxldE1vZGFsIiwiV2FsbGV0TW9kYWxCdXR0b24iLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsIldhbGxldE1vZGFsQ29udGV4dCIsIldhbGxldE1vZGFsIiwiV2FsbGV0TW9kYWxQcm92aWRlciIsIlByb3ZpZGVyIiwiY3JlYXRlUG9ydGFsIiwibG9nbyIsImZlYXR1cmVkV2FsbGV0cyIsImNvbnRhaW5lciIsIndhbGxldHMiLCJzZWxlY3QiLCJzZXRFeHBhbmRlZCIsImZhZGVJbiIsInNldEZhZGVJbiIsInBvcnRhbCIsInNldFBvcnRhbCIsImZlYXR1cmVkIiwibW9yZSIsInNsaWNlIiwiaGlkZU1vZGFsIiwiaGFuZGxlQ2xvc2UiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVdhbGxldENsaWNrIiwid2FsbGV0TmFtZSIsImhhbmRsZUNvbGxhcHNlQ2xpY2siLCJoYW5kbGVUYWJLZXkiLCJmb2N1c2FibGVFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaXJzdEVsZW1lbnQiLCJsYXN0RWxlbWVudCIsInNoaWZ0S2V5IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiZm9jdXMiLCJoYW5kbGVLZXlEb3duIiwia2V5Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwid2lkdGgiLCJkIiwibWFwIiwiRnJhZ21lbnQiLCJ4bWxucyIsIm9uTW91c2VEb3duIiwiY29waWVkIiwic2V0Q29waWVkIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiX2FkZHJlc3MiLCJjb3B5QWRkcmVzcyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsIm9wZW5Ecm9wZG93biIsImNsb3NlRHJvcGRvd24iLCJvcGVuTW9kYWwiLCJsaXN0ZW5lciIsImNvbnRhaW5zIiwicG9pbnRlckV2ZW50cyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiV2FsbGV0Tm90U2VsZWN0ZWRFcnJvciIsIldhbGxldENvbnRleHQiLCJXQUxMRVRfSU5JVElBTF9TVEFURSIsIldhbGxldFByb3ZpZGVyIiwiYXV0b0Nvbm5lY3QiLCJvbkVycm9yIiwiX29uRXJyb3IiLCJzZXROYW1lIiwic2V0U3RhdGUiLCJzZXRDb25uZWN0aW5nIiwic2V0RGlzY29ubmVjdGluZyIsImlzQ29ubmVjdGluZyIsImlzRGlzY29ubmVjdGluZyIsImlzVW5sb2FkaW5nIiwid2FsbGV0c0J5TmFtZSIsInJlZHVjZSIsIm5ld05hbWUiLCJvblJlYWR5Iiwic3RhdGUiLCJvbkNvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiLCJvcGVuIiwidXJsIiwiaW52b2tlUmVhZCIsInJlcXVlc3QiLCJpbnZva2VSZWFkTXVsdGkiLCJpbnZva2VNdWx0aSIsInNpZ25NZXNzYWdlIiwib24iLCJvZmYiXSwic291cmNlUm9vdCI6IiJ9