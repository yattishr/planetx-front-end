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
  const NeoContractHash = "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5";
  const BettingManagerContractHash = "0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b";
  const brian = "NYKNWWmArjHD7uXFpuGeDH6ucYGpsf2s6Y"; // @ts-ignore

  const publishInvoke = async (rpcAddress, networkMagic, scriptHash, operation, args, account) => {
    const contract = new (_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_2___default().experimental.SmartContract)(_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_2___default().u.HexString.fromHex(scriptHash), {
      networkMagic,
      rpcAddress,
      account
    });
    let result;

    try {
      result = await contract.invoke(operation, args);
    } catch (e) {
      console.log(e);
    }

    return result;
  };

  const {
    connected,
    getNetworks,
    address,
    invoke
  } = (0,_rentfuse_labs_neo_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet)(); // @ts-ignore

  const {
    0: account,
    1: setAccount
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const {
    0: walletNetwork,
    1: setWalletNetwork
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const {
    0: neoline,
    1: setNeoLine
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const {
    0: neolineN3,
    1: setNeoLine3
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const {
    0: blockHeight,
    1: setBlockHeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("78115");
  const fetchWalletNetwork = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async () => {
    try {
      const result = await getNetworks();

      if (result.status === "success") {
        var _result$data;

        setWalletNetwork(((_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.defaultNetwork) || null);
      }
    } catch (error) {
      console.error(error);
    }
  }, [getNetworks]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    initDap(); // balances 

    if (connected) {
      fetchWalletNetwork();
      console.log("Account => ", neolineN3);

      if (neolineN3) {
        neolineN3.getAccount().then(account => {
          console.log("Account found conneted => ", account);
          setAccount(account);
        });
        neolineN3.getPublicKey().then(publicKeyData => {
          const {
            address,
            publicKey
          } = publicKeyData;
          console.log("Account address: " + address);
          console.log("Account public key: " + publicKey);
        });
        neolineN3.getBalance().then(results => {
          Object.keys(results).forEach(address => {
            const balances = results[address];
            balances.forEach(balance => {
              const {
                contract,
                symbol,
                amount
              } = balance;
              console.log('Address: ' + address);
              console.log('contract: ' + contract);
              console.log('Asset symbol: ' + symbol);
              console.log('Amount: ' + amount);
            });
          });
        }); // send gas token
        // neolineN3.send({
        // 	fromAddress: address,
        // 	toAddress: brian,
        // 	asset: 'GAS',
        // 	amount: '1',
        // 	fee: '0.0001',
        // 	broadcastOverride: false
        // })
        // .then(result => {
        // 	console.log('Send transaction success!');
        // 	console.log('Transaction ID: ' + result.txid);
        // 	console.log('RPC node URL: ' + result.nodeURL);
        // })
      }
    } else {
      setWalletNetwork(null);
    }
  }, [connected, fetchWalletNetwork]);
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

    const rpcAddress = "https://testnet1.neo.coz.io:443";
    const networkMagic = 877933390;
    const params = [_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_2__.sc.ContractParam.hash160("NT4QtUYLghvSuuB2yCS6CgQk9Nf1nkDk2q"), _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_2__.sc.ContractParam.hash160(BettingManagerContractHash), 2, {
      amount: 1
    }];
    await publishInvoke(rpcAddress, networkMagic, NeoContractHash, "transfer", []);
  }, [address, connected, invoke]);

  const placeBet = async () => {
    const rpcAddress = "https://testnet1.neo.coz.io:443";
    const networkMagic = 877933390;
    const params = [_cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_2__.sc.ContractParam.hash160("NT4QtUYLghvSuuB2yCS6CgQk9Nf1nkDk2q"), _cityofzion_neon_js__WEBPACK_IMPORTED_MODULE_2__.sc.ContractParam.hash160(BettingManagerContractHash), 2, {
      amount: 1
    }];
    await publishInvoke(rpcAddress, networkMagic, NeoContractHash, "transfer", params, account);
  };

  const initDap = async () => {
    const initN3Dapi = new Promise((resolve, reject) => {
      window.addEventListener("NEOLine.N3.EVENT.READY", () => {
        setNeoLine3(new NEOLineN3.Init());

        if (neolineN3) {
          resolve(neolineN3);
        } else {
          reject("N3 dAPI method failed to load.");
        }
      });
    });
    const initCommonDapi = new Promise((resolve, reject) => {
      window.addEventListener("NEOLine.NEO.EVENT.READY", () => {
        setNeoLine(new NEOLine.Init());

        if (neoline) {
          resolve(neoline);
        } else {
          reject("common dAPI method failed to load.");
        }
      });
    });
    initCommonDapi.then(() => {
      console.log("The common dAPI method is loaded.");
      return initN3Dapi;
    }).then(() => {
      console.log("The N3 dAPI method is loaded.");
    }).catch(err => {
      console.log(err);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "/main.css",
        className: "jsx-1648730631"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
      className: "jsx-1648730631" + " " + "relative container mx-auto p-2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "pt-2 py-6 flex flex-row justify-between items-center ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
            src: "img/LOGO.png",
            height: "100",
            width: "100",
            alt: "",
            className: "jsx-1648730631"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            className: "jsx-1648730631" + " " + "lg:text-5xl md:text-5xl text-white font-bold  ",
            children: "Planet X"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "hidden space-x-6 md:flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
            href: "games",
            className: "jsx-1648730631" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: "Games"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
            href: "/portfolio.html",
            className: "jsx-1648730631" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: "Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          id: "menu-btn",
          className: "jsx-1648730631" + " " + "block hamburger md:hidden focus:outline-none focus:text-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "jsx-1648730631" + " " + "hamburger-top bg-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "jsx-1648730631" + " " + "hamburger-middle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "jsx-1648730631" + " " + "hamburger-bottom"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "md:hidden",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          id: "menu",
          className: "jsx-1648730631" + " " + "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
      className: "jsx-1648730631"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
      id: "hero",
      className: "jsx-1648730631",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "jsx-1648730631" + " " + "md:w-1/2 flex flex-col space-y-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
              src: "img/LOGO.png",
              alt: "",
              className: "jsx-1648730631"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 292,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + " md:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
            src: "img/right_image.png",
            alt: "",
            className: "jsx-1648730631"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
      id: "features",
      className: "jsx-1648730631",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "container  flex flex-col items-center justify-center px-6 mx-auto mt-2  md:space-y-0 md:flex-row middle",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_rentfuse_labs_neo_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__.WalletMultiButton, {
          style: {
            backgroundColor: "#DC2984"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
      id: "testimonials",
      className: "jsx-1648730631",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "max-w-6xl px-5 mx-auto mt-32 text-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "flex flex-col mt-24 md:flex-row md:space-x-6",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "jsx-1648730631" + " " + "my-16 flex flex-col items-center justify-center min-w-full ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
              className: "jsx-1648730631" + " " + "text-5xl text-white font-bold subpixel-antialiased py-4 tracking-widest",
              children: "Trending"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("table", {
              className: "jsx-1648730631" + " " + "min-w-full border border-slate-800",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("thead", {
                className: "jsx-1648730631" + " " + "border-b bg-[#B227CA] ",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
                  className: "jsx-1648730631",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold  text-white px-6 py-4 text-left",
                    children: "Rank"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 323,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold  text-white px-6 py-4 text-left",
                    children: "Game"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 329,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Game Names"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 335,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Date/Time"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 341,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "24 hours"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 347,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 322,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 321,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tbody", {
                className: "jsx-1648730631" + " " + "bg-[#15174A]   ",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 358,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 357,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/cs.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 361,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 360,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 363,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 366,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: ["400+", connected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
                      onClick: placeBet,
                      className: "jsx-1648730631" + " " + "btn btn-success",
                      children: ["Place Bet", " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 372,
                      columnNumber: 25
                    }, undefined) : null]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 369,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 356,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 380,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 379,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/dota.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 383,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 382,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 385,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 388,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "400+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 391,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 378,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/down.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 397,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 396,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/freefire.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 400,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 399,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Free Fire - World Series"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 402,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Oct 15, 2022 4:00 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 405,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "50+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 408,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 395,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/down.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 414,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 413,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/honor.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 417,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 416,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "KOG - KPL Spring Playoffs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 419,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Nov 05, 2022 2:30 AM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 422,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "100+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 425,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 412,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("tr", {
                  className: "jsx-1648730631" + " " + "border-b",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "px-6 py-4 whitespace-nowrap text-sm font-medium text-white",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/up.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 431,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 430,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/legends.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 434,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 433,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "LOL - EU Masters Spring"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 436,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 439,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "25+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 442,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 429,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 320,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1648730631",
      children: ".container.jsx-1648730631{padding:0 2rem;}.main.jsx-1648730631{min-height:100vh;padding:4rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-1648730631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;padding:2rem 0;border-top:1px solid #eaeaea;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-1648730631 a.jsx-1648730631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.title.jsx-1648730631 a.jsx-1648730631{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1648730631 a.jsx-1648730631:hover,.title.jsx-1648730631 a.jsx-1648730631:focus,.title.jsx-1648730631 a.jsx-1648730631:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-1648730631{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-1648730631,.description.jsx-1648730631{text-align:center;}.description.jsx-1648730631{margin:4rem 0;line-height:1.5;font-size:1.5rem;}.code.jsx-1648730631{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-1648730631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;}.card.jsx-1648730631{margin:1rem;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;max-width:300px;}.card.jsx-1648730631:hover,.card.jsx-1648730631:focus,.card.jsx-1648730631:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1648730631 h2.jsx-1648730631{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1648730631 p.jsx-1648730631{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-1648730631{height:1em;margin-left:0.5rem;}@media (max-width:600px){.grid.jsx-1648730631{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.wallet-buttons.jsx-1648730631{padding-top:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2ViYXRhbmUgUmFwaGVsYVxcTXVzaWNcXHdlYjNcXG5lby1ibG9ja2NoYWluLWJldHhcXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb2NrQixBQUcwQixBQUlFLEFBVUosQUFTQSxBQU9DLEFBT1ksQUFJakIsQUFPUyxBQUlKLEFBTUssQUFTTixBQVFELEFBY0UsQUFLSSxBQUtULEFBTUUsQUFNRSxBQU1JLFNBM0VBLEFBMERDLEVBTUMsQUFNSyxDQXBDVCxFQTdDTSxBQXNCTCxBQXFDSyxDQXpGdkIsRUFJaUIsQUFpSEYsQ0FyRWYsQUE4Q21CLENBcENDLE9BaEJILENBa0NDLEFBd0JBLEdBL0NDLEFBcURuQixFQXJHUyxHQXFGVCxBQUtBLEVBcENrQixJQWhCbEIsRUFrQ2dCLEFBd0JoQixJQS9DQSxNQU1tQixJQWtCSSxHQXpDdkIsSUFOQSxDQXpCZSxLQXdEdUQsSUFoRDdELEFBU2dCLEFBNENKLGVBNkNuQixFQU1zQixnQkF2R1AsQUFnRVUsZUEvREksVUFnRVYsT0F6RUcsWUFVQyxBQWdFOEIsZ0JBYjlCLEVBbURkLElBL0ZVLEtBZ0dyQixhQXpEQSwwQkF2RHlCLGlDQVVKLGFBZ0VILEdBekRKLEFBNENHLGFBY2pCLHFDQTFFcUIsT0E2REgsY0E1Q2xCLEVBNkNBLElBcERBLGtFQVRBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2ViYXRhbmUgUmFwaGVsYVxcTXVzaWNcXHdlYjNcXG5lby1ibG9ja2NoYWluLWJldHhcXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgd2FpdFR4LFxyXG4gIFdpdG5lc3NTY29wZSxcclxuICBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcixcclxufSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBXYWxsZXREaXNjb25uZWN0QnV0dG9uLFxyXG4gIFdhbGxldE11bHRpQnV0dG9uLFxyXG59IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcclxuaW1wb3J0IHsgbmVvbGluZU4zIH0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lXCI7XHJcbmltcG9ydCB7IHUsIHNjLCB3YWxsZXQgfSBmcm9tIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBOZW9uIGZyb20gXCJAY2l0eW9memlvbi9uZW9uLWpzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBuZW8zRGFwaSBmcm9tICduZW8zLWRhcGknO1xyXG5cclxuY29uc3QgSW5kZXg6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IE5lb0NvbnRyYWN0SGFzaCA9IFwiMHhlZjQwNzNhMGYyYjMwNWEzOGVjNDA1MGU0ZDNkMjhiYzQwZWE2M2Y1XCI7XHJcbiAgY29uc3QgQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2ggPVxyXG4gICAgXCIweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2JcIjtcclxuXHJcblx0Y29uc3QgYnJpYW4gPSBcIk5ZS05XV21BcmpIRDd1WEZwdUdlREg2dWNZR3BzZjJzNllcIlxyXG5cdFxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25zdCBwdWJsaXNoSW52b2tlID0gYXN5bmMgKFxyXG4gICAgcnBjQWRkcmVzcyxcclxuICAgIG5ldHdvcmtNYWdpYyxcclxuICAgIHNjcmlwdEhhc2gsXHJcbiAgICBvcGVyYXRpb24sXHJcbiAgICBhcmdzLFxyXG4gICAgYWNjb3VudFxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgTmVvbi5leHBlcmltZW50YWwuU21hcnRDb250cmFjdChcclxuICAgICAgTmVvbi51LkhleFN0cmluZy5mcm9tSGV4KHNjcmlwdEhhc2gpLFxyXG4gICAgICB7XHJcbiAgICAgICAgbmV0d29ya01hZ2ljLFxyXG4gICAgICAgIHJwY0FkZHJlc3MsXHJcbiAgICAgICAgYWNjb3VudCxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuaW52b2tlKG9wZXJhdGlvbiwgYXJncyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBjb25uZWN0ZWQsIGdldE5ldHdvcmtzLCBhZGRyZXNzLCBpbnZva2UgfSA9IHVzZVdhbGxldCgpO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBbd2FsbGV0TmV0d29yaywgc2V0V2FsbGV0TmV0d29ya10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtuZW9saW5lLCBzZXROZW9MaW5lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW25lb2xpbmVOMywgc2V0TmVvTGluZTNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbYmxvY2tIZWlnaHQsIHNldEJsb2NrSGVpZ2h0XSA9IHVzZVN0YXRlKFwiNzgxMTVcIik7XHJcbiAgY29uc3QgZmV0Y2hXYWxsZXROZXR3b3JrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0TmV0d29ya3MoKTtcclxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgc2V0V2FsbGV0TmV0d29yayhyZXN1bHQuZGF0YT8uZGVmYXVsdE5ldHdvcmsgfHwgbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtnZXROZXR3b3Jrc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdERhcCgpO1xyXG5cclxuLy8gYmFsYW5jZXMgXHJcblxyXG5cclxuXHJcbiAgICBpZiAoY29ubmVjdGVkKSB7XHJcbiAgICAgIGZldGNoV2FsbGV0TmV0d29yaygpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgPT4gXCIsIG5lb2xpbmVOMyk7XHJcblxyXG4gICAgICBpZiAobmVvbGluZU4zKSB7XHJcbiAgICAgICAgbmVvbGluZU4zLmdldEFjY291bnQoKS50aGVuKChhY2NvdW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgZm91bmQgY29ubmV0ZWQgPT4gXCIsIGFjY291bnQpO1xyXG5cclxuICAgICAgICAgIHNldEFjY291bnQoYWNjb3VudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG5lb2xpbmVOMy5nZXRQdWJsaWNLZXkoKS50aGVuKChwdWJsaWNLZXlEYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGFkZHJlc3MsIHB1YmxpY0tleSB9ID0gcHVibGljS2V5RGF0YTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgYWRkcmVzczogXCIgKyBhZGRyZXNzKTtcclxuXHRcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBwdWJsaWMga2V5OiBcIiArIHB1YmxpY0tleSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFx0bmVvbGluZU4zLmdldEJhbGFuY2UoKVxyXG5cdFx0LnRoZW4oKHJlc3VsdHMpID0+IHtcclxuXHRcdFx0T2JqZWN0LmtleXMocmVzdWx0cykuZm9yRWFjaChhZGRyZXNzID0+IHtcclxuXHRcdFx0XHRjb25zdCBiYWxhbmNlcyA9IHJlc3VsdHNbYWRkcmVzc107XHJcblx0XHRcdFx0YmFsYW5jZXMuZm9yRWFjaChiYWxhbmNlID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHsgY29udHJhY3QsIHN5bWJvbCwgYW1vdW50IH0gPSBiYWxhbmNlXHJcblx0XHRcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdBZGRyZXNzOiAnICsgYWRkcmVzcyk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnY29udHJhY3Q6ICcgKyBjb250cmFjdCk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQXNzZXQgc3ltYm9sOiAnICsgc3ltYm9sKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdBbW91bnQ6ICcgKyBhbW91bnQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pXHJcblxyXG5cclxuXHRcdC8vIHNlbmQgZ2FzIHRva2VuXHJcblx0XHRcclxuXHRcdC8vIG5lb2xpbmVOMy5zZW5kKHtcclxuXHRcdC8vIFx0ZnJvbUFkZHJlc3M6IGFkZHJlc3MsXHJcblx0XHQvLyBcdHRvQWRkcmVzczogYnJpYW4sXHJcblx0XHQvLyBcdGFzc2V0OiAnR0FTJyxcclxuXHRcdC8vIFx0YW1vdW50OiAnMScsXHJcblx0XHQvLyBcdGZlZTogJzAuMDAwMScsXHJcblx0XHQvLyBcdGJyb2FkY2FzdE92ZXJyaWRlOiBmYWxzZVxyXG5cdFx0Ly8gfSlcclxuXHRcdC8vIC50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKCdTZW5kIHRyYW5zYWN0aW9uIHN1Y2Nlc3MhJyk7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKCdUcmFuc2FjdGlvbiBJRDogJyArIHJlc3VsdC50eGlkKTtcclxuXHRcdC8vIFx0Y29uc29sZS5sb2coJ1JQQyBub2RlIFVSTDogJyArIHJlc3VsdC5ub2RlVVJMKTtcclxuXHRcdC8vIH0pXHJcblxyXG5cdFx0XHJcbiAgICAgIH1cclxuXHJcbiBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFdhbGxldE5ldHdvcmsobnVsbCk7XHJcbiAgICB9XHJcbiAgfSwgW2Nvbm5lY3RlZCwgZmV0Y2hXYWxsZXROZXR3b3JrXSk7XHJcblxyXG5cclxuXHJcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGlmICghYWRkcmVzcyB8fCAhY29ubmVjdGVkKSB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcclxuICAgIGNvbnN0IGFjY291bnQgPSB3YWxsZXQuZ2V0U2NyaXB0SGFzaEZyb21BZGRyZXNzKGFkZHJlc3MpO1xyXG4gICAgLy8gQ29uc3RydWN0IHRoZSByZXF1ZXN0IGFuZCBpbnZva2UgaXRcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGludm9rZSh7XHJcbiAgICAvLyBcdHNjcmlwdEhhc2g6ICcweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2InLFxyXG4gICAgLy8gXHRvcGVyYXRpb246ICdnZXROdW1iZXInLFxyXG5cclxuICAgIC8vIFx0c2lnbmVyczogW1xyXG4gICAgLy8gXHRcdHtcclxuICAgIC8vIFx0XHRcdGFjY291bnQ6IHdhbGxldC5nZXRTY3JpcHRIYXNoRnJvbUFkZHJlc3MoYWRkcmVzcyksXHJcbiAgICAvLyBcdFx0XHQvLyBAdHMtaWdub3JlXHJcbiAgICAvLyBcdFx0XHRzY29wZTogV2l0bmVzc1Njb3BlLkNhbGxlZEJ5RW50cnksXHJcbiAgICAvLyBcdFx0fSxcclxuICAgIC8vIFx0XSxcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIC8vIE9wdGlvbmFsOiBXYWl0IGZvciB0aGUgdHJhbnNhY3Rpb24gdG8gYmUgY29uZmlybWVkIG9uY2hhaW5cclxuICAgIC8vIGlmIChyZXN1bHQuZGF0YT8udHhJZCkge1xyXG4gICAgLy8gXHRhd2FpdCB3YWl0VHgoJ05FVFdPUktfUlBDX0FERFJFU1NfSEVSRScsIHJlc3VsdC5kYXRhPy50eElkKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBycGNBZGRyZXNzID0gXCJodHRwczovL3Rlc3RuZXQxLm5lby5jb3ouaW86NDQzXCI7XHJcbiAgICBjb25zdCBuZXR3b3JrTWFnaWMgPSA4Nzc5MzMzOTA7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBbXHJcbiAgICAgIHNjLkNvbnRyYWN0UGFyYW0uaGFzaDE2MChcIk5UNFF0VVlMZ2h2U3V1QjJ5Q1M2Q2dRazlOZjFua0RrMnFcIiksXHJcbiAgICAgIHNjLkNvbnRyYWN0UGFyYW0uaGFzaDE2MChCZXR0aW5nTWFuYWdlckNvbnRyYWN0SGFzaCksXHJcbiAgICAgIDIsXHJcbiAgICAgIHsgYW1vdW50OiAxIH0sXHJcbiAgICBdO1xyXG4gICAgYXdhaXQgcHVibGlzaEludm9rZShcclxuICAgICAgcnBjQWRkcmVzcyxcclxuICAgICAgbmV0d29ya01hZ2ljLFxyXG4gICAgICBOZW9Db250cmFjdEhhc2gsXHJcbiAgICAgIFwidHJhbnNmZXJcIixcclxuICAgICAgW11cclxuICAgICk7XHJcbiAgfSwgW2FkZHJlc3MsIGNvbm5lY3RlZCwgaW52b2tlXSk7XHJcblxyXG4gIGNvbnN0IHBsYWNlQmV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcnBjQWRkcmVzcyA9IFwiaHR0cHM6Ly90ZXN0bmV0MS5uZW8uY296LmlvOjQ0M1wiO1xyXG4gICAgY29uc3QgbmV0d29ya01hZ2ljID0gODc3OTMzMzkwO1xyXG4gICAgY29uc3QgcGFyYW1zID0gW1xyXG4gICAgICBzYy5Db250cmFjdFBhcmFtLmhhc2gxNjAoXCJOVDRRdFVZTGdodlN1dUIyeUNTNkNnUWs5TmYxbmtEazJxXCIpLFxyXG4gICAgICBzYy5Db250cmFjdFBhcmFtLmhhc2gxNjAoQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2gpLFxyXG4gICAgICAyLFxyXG4gICAgICB7IGFtb3VudDogMSB9LFxyXG4gICAgXTtcclxuICAgIGF3YWl0IHB1Ymxpc2hJbnZva2UoXHJcbiAgICAgIHJwY0FkZHJlc3MsXHJcbiAgICAgIG5ldHdvcmtNYWdpYyxcclxuICAgICAgTmVvQ29udHJhY3RIYXNoLFxyXG4gICAgICBcInRyYW5zZmVyXCIsXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgYWNjb3VudFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgaW5pdERhcCA9IGFzeW5jICgpID0+IHtcclxuIFxyXG4gICAgY29uc3QgaW5pdE4zRGFwaSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJORU9MaW5lLk4zLkVWRU5ULlJFQURZXCIsICgpID0+IHtcclxuXHRcdHNldE5lb0xpbmUzKG5ldyBORU9MaW5lTjMuSW5pdCgpKTtcclxuICAgICAgICBpZiAobmVvbGluZU4zKSB7XHJcbiAgICAgICAgICByZXNvbHZlKG5lb2xpbmVOMyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChcIk4zIGRBUEkgbWV0aG9kIGZhaWxlZCB0byBsb2FkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaW5pdENvbW1vbkRhcGkgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiTkVPTGluZS5ORU8uRVZFTlQuUkVBRFlcIiwgKCkgPT4ge1xyXG4gICAgICAgIHNldE5lb0xpbmUobmV3IE5FT0xpbmUuSW5pdCgpKTtcclxuICAgICAgICBpZiAobmVvbGluZSkge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZW9saW5lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KFwiY29tbW9uIGRBUEkgbWV0aG9kIGZhaWxlZCB0byBsb2FkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cdGluaXRDb21tb25EYXBpIFxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgY29tbW9uIGRBUEkgbWV0aG9kIGlzIGxvYWRlZC5cIik7XHJcbiAgICAgICAgcmV0dXJuIGluaXROM0RhcGk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBOMyBkQVBJIG1ldGhvZCBpcyBsb2FkZWQuXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL21haW4uY3NzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbnRhaW5lciBteC1hdXRvIHAtMiBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHB5LTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImltZy9MT0dPLnBuZ1wiIGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQtNXhsIG1kOnRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICBQbGFuZXQgWFxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc3BhY2UteC02IG1kOmZsZXhcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiZ2FtZXNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZGFya0dyYXlpc2hCbHVlIHRleHQtd2hpdGUgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEdhbWVzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiL3BvcnRmb2xpby5odG1sXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWRhcmtHcmF5aXNoQmx1ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQb3J0Zm9saW9cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBpZD1cIm1lbnUtYnRuXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaGFtYnVyZ2VyIG1kOmhpZGRlbiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci10b3AgYmctd2hpdGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1taWRkbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3R0b21cIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9XCJtZW51XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleC1jb2wgaXRlbXMtY2VudGVyIGhpZGRlbiBzZWxmLWVuZCBweS04IG10LTEwIHNwYWNlLXktNiBmb250LWJvbGQgYmctd2hpdGUgc206dy1hdXRvIHNtOnNlbGYtY2VudGVyIGxlZnQtNiByaWdodC02IGRyb3Atc2hhZG93LW1kXCJcclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICA8c2VjdGlvbj48L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiaGVyb1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wtcmV2ZXJzZSBpdGVtcy1jZW50ZXIgcHgtNiBteC1hdXRvIG10LTEwIHNwYWNlLXktMCBtZDpzcGFjZS15LTAgbWQ6ZmxleC1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzIgZmxleCBmbGV4LWNvbCBzcGFjZS15LTEyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvTE9HTy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1kOnctMS8yXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3JpZ2h0X2ltYWdlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJmZWF0dXJlc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyICBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IG14LWF1dG8gbXQtMiAgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93IG1pZGRsZVwiPlxyXG4gICAgICAgICAgPFdhbGxldE11bHRpQnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEQzI5ODRcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgcHgtNSBteC1hdXRvIG10LTMyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtMjQgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLXctZnVsbCBcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBzdWJwaXhlbC1hbnRpYWxpYXNlZCBweS00IHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgVHJlbmRpbmdcclxuICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYmctWyNCMjI3Q0FdIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCAgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSYW5rXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkICB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBHYW1lIE5hbWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGF0ZS9UaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMjQgaG91cnNcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy1bIzE1MTc0QV0gICBcIj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9jcy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ1M6R08gLSBQR0wgTWFqb3IgQW50d2VycFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDQwMCtcclxuICAgICAgICAgICAgICAgICAgICAgIHtjb25uZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cGxhY2VCZXR9IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBsYWNlIEJldHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2RvdGEucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENTOkdPIC0gUEdMIE1ham9yIEFudHdlcnBcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNlcCAyMiwgMjAyMiA0OjMwIFBNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA0MDArXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Rvd24ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2ZyZWVmaXJlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBGcmVlIEZpcmUgLSBXb3JsZCBTZXJpZXNcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE9jdCAxNSwgMjAyMiA0OjAwIFBNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA1MCtcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG93bi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvaG9ub3IucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEtPRyAtIEtQTCBTcHJpbmcgUGxheW9mZnNcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE5vdiAwNSwgMjAyMiAyOjMwIEFNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAxMDArXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9sZWdlbmRzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMT0wgLSBFVSBNYXN0ZXJzIFNwcmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDI1K1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYWluIHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgcGFkZGluZzogNHJlbSAwO1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlciBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSBhOmhvdmVyLFxyXG4gICAgICAgIC50aXRsZSBhOmZvY3VzLFxyXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSxcclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIG1hcmdpbjogNHJlbSAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvZGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxyXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXHJcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgaDIge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud2FsbGV0LWJ1dHRvbnMge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGdhcDogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Sebatane Raphela\\\\Music\\\\web3\\\\neo-blockchain-betx\\\\pages\\\\index.tsx */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RnFEO0FBR3JEblIsTUFBQUEsTUFIcUQ7QUFJckR3SCxNQUFBQSxPQUpxRDtBQUtyRDFGLE1BQUFBLE9BTHFEO0FBTXJENkYsTUFBQUEsS0FOcUQ7QUFPckQvRixNQUFBQSxTQVBxRDtBQVFyRHVLLE1BQUFBLFVBUnFEO0FBU3JETSxNQUFBQSxhQVRxRDtBQVVyRGtCLE1BQUFBLE1BVnFEO0FBV3JEekIsTUFBQUEsT0FYcUQ7QUFZckRNLE1BQUFBLFVBWnFEO0FBYXJENEYsTUFBQUEsVUFicUQ7QUFjckRFLE1BQUFBLGVBZHFEO0FBZXJEOVEsTUFBQUEsTUFmcUQ7QUFnQnJEK1EsTUFBQUEsV0FoQnFEO0FBaUJyRDFRLE1BQUFBLFdBakJxRDtBQWtCckQyUSxNQUFBQTtBQWxCcUQ7QUFBVCxHQUE1QyxFQW1CQzNKLFFBbkJELENBQVI7QUFvQkgsQ0ExTjZCLENBQXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCUDtBQUNPLE1BQU1tSSxhQUFhLGdCQUFHSCxvREFBYSxDQUFDLEVBQUQsQ0FBbkM7QUFDQSxTQUFTalIsU0FBVCxHQUFxQjtBQUN4QixTQUFPa1IsaURBQVUsQ0FBQ0UsYUFBRCxDQUFqQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNPLE1BQU1ELHNCQUFOLFNBQXFDM0wsK0VBQXJDLENBQWlEO0FBQ3BERSxFQUFBQSxXQUFXLEdBQUc7QUFDVixVQUFNLEdBQUdHLFNBQVQ7QUFDQSxTQUFLQyxJQUFMLEdBQVksd0JBQVo7QUFDSDs7QUFKbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEeEQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9hZGFwdGVyLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvZXJyb3JzLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlL2xpYi9wb2xsLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvd2FpdC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1jb25uZWN0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1kaXNjb25uZWN0LWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1pY29uLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LWxpc3QtaXRlbS5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1tb2RhbC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtbW9kYWwtcHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtbXVsdGktYnV0dG9uLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2hvb2tzL3VzZS13YWxsZXQtbW9kYWwuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC9saWIvY29tcG9uZW50cy93YWxsZXQtcHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC9saWIvaG9va3MvdXNlLXdhbGxldC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0L2xpYi91dGlscy9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcImV2ZW50ZW1pdHRlcjNcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgd2FpdFR4LFxyXG4gIFdpdG5lc3NTY29wZSxcclxuICBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcixcclxufSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBXYWxsZXREaXNjb25uZWN0QnV0dG9uLFxyXG4gIFdhbGxldE11bHRpQnV0dG9uLFxyXG59IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcclxuaW1wb3J0IHsgbmVvbGluZU4zIH0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lXCI7XHJcbmltcG9ydCB7IHUsIHNjLCB3YWxsZXQgfSBmcm9tIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBOZW9uIGZyb20gXCJAY2l0eW9memlvbi9uZW9uLWpzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBuZW8zRGFwaSBmcm9tICduZW8zLWRhcGknO1xyXG5cclxuY29uc3QgSW5kZXg6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IE5lb0NvbnRyYWN0SGFzaCA9IFwiMHhlZjQwNzNhMGYyYjMwNWEzOGVjNDA1MGU0ZDNkMjhiYzQwZWE2M2Y1XCI7XHJcbiAgY29uc3QgQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2ggPVxyXG4gICAgXCIweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2JcIjtcclxuXHJcblx0Y29uc3QgYnJpYW4gPSBcIk5ZS05XV21BcmpIRDd1WEZwdUdlREg2dWNZR3BzZjJzNllcIlxyXG5cdFxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25zdCBwdWJsaXNoSW52b2tlID0gYXN5bmMgKFxyXG4gICAgcnBjQWRkcmVzcyxcclxuICAgIG5ldHdvcmtNYWdpYyxcclxuICAgIHNjcmlwdEhhc2gsXHJcbiAgICBvcGVyYXRpb24sXHJcbiAgICBhcmdzLFxyXG4gICAgYWNjb3VudFxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgTmVvbi5leHBlcmltZW50YWwuU21hcnRDb250cmFjdChcclxuICAgICAgTmVvbi51LkhleFN0cmluZy5mcm9tSGV4KHNjcmlwdEhhc2gpLFxyXG4gICAgICB7XHJcbiAgICAgICAgbmV0d29ya01hZ2ljLFxyXG4gICAgICAgIHJwY0FkZHJlc3MsXHJcbiAgICAgICAgYWNjb3VudCxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuaW52b2tlKG9wZXJhdGlvbiwgYXJncyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBjb25uZWN0ZWQsIGdldE5ldHdvcmtzLCBhZGRyZXNzLCBpbnZva2UgfSA9IHVzZVdhbGxldCgpO1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBbd2FsbGV0TmV0d29yaywgc2V0V2FsbGV0TmV0d29ya10gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtuZW9saW5lLCBzZXROZW9MaW5lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW25lb2xpbmVOMywgc2V0TmVvTGluZTNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbYmxvY2tIZWlnaHQsIHNldEJsb2NrSGVpZ2h0XSA9IHVzZVN0YXRlKFwiNzgxMTVcIik7XHJcbiAgY29uc3QgZmV0Y2hXYWxsZXROZXR3b3JrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0TmV0d29ya3MoKTtcclxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgc2V0V2FsbGV0TmV0d29yayhyZXN1bHQuZGF0YT8uZGVmYXVsdE5ldHdvcmsgfHwgbnVsbCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtnZXROZXR3b3Jrc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5pdERhcCgpO1xyXG5cclxuLy8gYmFsYW5jZXMgXHJcblxyXG5cclxuXHJcbiAgICBpZiAoY29ubmVjdGVkKSB7XHJcbiAgICAgIGZldGNoV2FsbGV0TmV0d29yaygpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgPT4gXCIsIG5lb2xpbmVOMyk7XHJcblxyXG4gICAgICBpZiAobmVvbGluZU4zKSB7XHJcbiAgICAgICAgbmVvbGluZU4zLmdldEFjY291bnQoKS50aGVuKChhY2NvdW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgZm91bmQgY29ubmV0ZWQgPT4gXCIsIGFjY291bnQpO1xyXG5cclxuICAgICAgICAgIHNldEFjY291bnQoYWNjb3VudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG5lb2xpbmVOMy5nZXRQdWJsaWNLZXkoKS50aGVuKChwdWJsaWNLZXlEYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGFkZHJlc3MsIHB1YmxpY0tleSB9ID0gcHVibGljS2V5RGF0YTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgYWRkcmVzczogXCIgKyBhZGRyZXNzKTtcclxuXHRcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBwdWJsaWMga2V5OiBcIiArIHB1YmxpY0tleSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cdFx0bmVvbGluZU4zLmdldEJhbGFuY2UoKVxyXG5cdFx0LnRoZW4oKHJlc3VsdHMpID0+IHtcclxuXHRcdFx0T2JqZWN0LmtleXMocmVzdWx0cykuZm9yRWFjaChhZGRyZXNzID0+IHtcclxuXHRcdFx0XHRjb25zdCBiYWxhbmNlcyA9IHJlc3VsdHNbYWRkcmVzc107XHJcblx0XHRcdFx0YmFsYW5jZXMuZm9yRWFjaChiYWxhbmNlID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHsgY29udHJhY3QsIHN5bWJvbCwgYW1vdW50IH0gPSBiYWxhbmNlXHJcblx0XHRcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdBZGRyZXNzOiAnICsgYWRkcmVzcyk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnY29udHJhY3Q6ICcgKyBjb250cmFjdCk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnQXNzZXQgc3ltYm9sOiAnICsgc3ltYm9sKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdBbW91bnQ6ICcgKyBhbW91bnQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pXHJcblxyXG5cclxuXHRcdC8vIHNlbmQgZ2FzIHRva2VuXHJcblx0XHRcclxuXHRcdC8vIG5lb2xpbmVOMy5zZW5kKHtcclxuXHRcdC8vIFx0ZnJvbUFkZHJlc3M6IGFkZHJlc3MsXHJcblx0XHQvLyBcdHRvQWRkcmVzczogYnJpYW4sXHJcblx0XHQvLyBcdGFzc2V0OiAnR0FTJyxcclxuXHRcdC8vIFx0YW1vdW50OiAnMScsXHJcblx0XHQvLyBcdGZlZTogJzAuMDAwMScsXHJcblx0XHQvLyBcdGJyb2FkY2FzdE92ZXJyaWRlOiBmYWxzZVxyXG5cdFx0Ly8gfSlcclxuXHRcdC8vIC50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKCdTZW5kIHRyYW5zYWN0aW9uIHN1Y2Nlc3MhJyk7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKCdUcmFuc2FjdGlvbiBJRDogJyArIHJlc3VsdC50eGlkKTtcclxuXHRcdC8vIFx0Y29uc29sZS5sb2coJ1JQQyBub2RlIFVSTDogJyArIHJlc3VsdC5ub2RlVVJMKTtcclxuXHRcdC8vIH0pXHJcblxyXG5cdFx0XHJcbiAgICAgIH1cclxuXHJcbiBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFdhbGxldE5ldHdvcmsobnVsbCk7XHJcbiAgICB9XHJcbiAgfSwgW2Nvbm5lY3RlZCwgZmV0Y2hXYWxsZXROZXR3b3JrXSk7XHJcblxyXG5cclxuXHJcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGlmICghYWRkcmVzcyB8fCAhY29ubmVjdGVkKSB0aHJvdyBuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKTtcclxuICAgIGNvbnN0IGFjY291bnQgPSB3YWxsZXQuZ2V0U2NyaXB0SGFzaEZyb21BZGRyZXNzKGFkZHJlc3MpO1xyXG4gICAgLy8gQ29uc3RydWN0IHRoZSByZXF1ZXN0IGFuZCBpbnZva2UgaXRcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGludm9rZSh7XHJcbiAgICAvLyBcdHNjcmlwdEhhc2g6ICcweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2InLFxyXG4gICAgLy8gXHRvcGVyYXRpb246ICdnZXROdW1iZXInLFxyXG5cclxuICAgIC8vIFx0c2lnbmVyczogW1xyXG4gICAgLy8gXHRcdHtcclxuICAgIC8vIFx0XHRcdGFjY291bnQ6IHdhbGxldC5nZXRTY3JpcHRIYXNoRnJvbUFkZHJlc3MoYWRkcmVzcyksXHJcbiAgICAvLyBcdFx0XHQvLyBAdHMtaWdub3JlXHJcbiAgICAvLyBcdFx0XHRzY29wZTogV2l0bmVzc1Njb3BlLkNhbGxlZEJ5RW50cnksXHJcbiAgICAvLyBcdFx0fSxcclxuICAgIC8vIFx0XSxcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIC8vIE9wdGlvbmFsOiBXYWl0IGZvciB0aGUgdHJhbnNhY3Rpb24gdG8gYmUgY29uZmlybWVkIG9uY2hhaW5cclxuICAgIC8vIGlmIChyZXN1bHQuZGF0YT8udHhJZCkge1xyXG4gICAgLy8gXHRhd2FpdCB3YWl0VHgoJ05FVFdPUktfUlBDX0FERFJFU1NfSEVSRScsIHJlc3VsdC5kYXRhPy50eElkKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBycGNBZGRyZXNzID0gXCJodHRwczovL3Rlc3RuZXQxLm5lby5jb3ouaW86NDQzXCI7XHJcbiAgICBjb25zdCBuZXR3b3JrTWFnaWMgPSA4Nzc5MzMzOTA7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBbXHJcbiAgICAgIHNjLkNvbnRyYWN0UGFyYW0uaGFzaDE2MChcIk5UNFF0VVlMZ2h2U3V1QjJ5Q1M2Q2dRazlOZjFua0RrMnFcIiksXHJcbiAgICAgIHNjLkNvbnRyYWN0UGFyYW0uaGFzaDE2MChCZXR0aW5nTWFuYWdlckNvbnRyYWN0SGFzaCksXHJcbiAgICAgIDIsXHJcbiAgICAgIHsgYW1vdW50OiAxIH0sXHJcbiAgICBdO1xyXG4gICAgYXdhaXQgcHVibGlzaEludm9rZShcclxuICAgICAgcnBjQWRkcmVzcyxcclxuICAgICAgbmV0d29ya01hZ2ljLFxyXG4gICAgICBOZW9Db250cmFjdEhhc2gsXHJcbiAgICAgIFwidHJhbnNmZXJcIixcclxuICAgICAgW11cclxuICAgICk7XHJcbiAgfSwgW2FkZHJlc3MsIGNvbm5lY3RlZCwgaW52b2tlXSk7XHJcblxyXG4gIGNvbnN0IHBsYWNlQmV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcnBjQWRkcmVzcyA9IFwiaHR0cHM6Ly90ZXN0bmV0MS5uZW8uY296LmlvOjQ0M1wiO1xyXG4gICAgY29uc3QgbmV0d29ya01hZ2ljID0gODc3OTMzMzkwO1xyXG4gICAgY29uc3QgcGFyYW1zID0gW1xyXG4gICAgICBzYy5Db250cmFjdFBhcmFtLmhhc2gxNjAoXCJOVDRRdFVZTGdodlN1dUIyeUNTNkNnUWs5TmYxbmtEazJxXCIpLFxyXG4gICAgICBzYy5Db250cmFjdFBhcmFtLmhhc2gxNjAoQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2gpLFxyXG4gICAgICAyLFxyXG4gICAgICB7IGFtb3VudDogMSB9LFxyXG4gICAgXTtcclxuICAgIGF3YWl0IHB1Ymxpc2hJbnZva2UoXHJcbiAgICAgIHJwY0FkZHJlc3MsXHJcbiAgICAgIG5ldHdvcmtNYWdpYyxcclxuICAgICAgTmVvQ29udHJhY3RIYXNoLFxyXG4gICAgICBcInRyYW5zZmVyXCIsXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgYWNjb3VudFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgaW5pdERhcCA9IGFzeW5jICgpID0+IHtcclxuIFxyXG4gICAgY29uc3QgaW5pdE4zRGFwaSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJORU9MaW5lLk4zLkVWRU5ULlJFQURZXCIsICgpID0+IHtcclxuXHRcdHNldE5lb0xpbmUzKG5ldyBORU9MaW5lTjMuSW5pdCgpKTtcclxuICAgICAgICBpZiAobmVvbGluZU4zKSB7XHJcbiAgICAgICAgICByZXNvbHZlKG5lb2xpbmVOMyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChcIk4zIGRBUEkgbWV0aG9kIGZhaWxlZCB0byBsb2FkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaW5pdENvbW1vbkRhcGkgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiTkVPTGluZS5ORU8uRVZFTlQuUkVBRFlcIiwgKCkgPT4ge1xyXG4gICAgICAgIHNldE5lb0xpbmUobmV3IE5FT0xpbmUuSW5pdCgpKTtcclxuICAgICAgICBpZiAobmVvbGluZSkge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZW9saW5lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KFwiY29tbW9uIGRBUEkgbWV0aG9kIGZhaWxlZCB0byBsb2FkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cdGluaXRDb21tb25EYXBpIFxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgY29tbW9uIGRBUEkgbWV0aG9kIGlzIGxvYWRlZC5cIik7XHJcbiAgICAgICAgcmV0dXJuIGluaXROM0RhcGk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBOMyBkQVBJIG1ldGhvZCBpcyBsb2FkZWQuXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL21haW4uY3NzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbnRhaW5lciBteC1hdXRvIHAtMiBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHB5LTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImltZy9MT0dPLnBuZ1wiIGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQtNXhsIG1kOnRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1ib2xkICBcIj5cclxuICAgICAgICAgICAgICBQbGFuZXQgWFxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gc3BhY2UteC02IG1kOmZsZXhcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiZ2FtZXNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZGFya0dyYXlpc2hCbHVlIHRleHQtd2hpdGUgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEdhbWVzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiL3BvcnRmb2xpby5odG1sXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWRhcmtHcmF5aXNoQmx1ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQb3J0Zm9saW9cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBpZD1cIm1lbnUtYnRuXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaGFtYnVyZ2VyIG1kOmhpZGRlbiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci10b3AgYmctd2hpdGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1taWRkbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3R0b21cIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9XCJtZW51XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleC1jb2wgaXRlbXMtY2VudGVyIGhpZGRlbiBzZWxmLWVuZCBweS04IG10LTEwIHNwYWNlLXktNiBmb250LWJvbGQgYmctd2hpdGUgc206dy1hdXRvIHNtOnNlbGYtY2VudGVyIGxlZnQtNiByaWdodC02IGRyb3Atc2hhZG93LW1kXCJcclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICA8c2VjdGlvbj48L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiaGVyb1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wtcmV2ZXJzZSBpdGVtcy1jZW50ZXIgcHgtNiBteC1hdXRvIG10LTEwIHNwYWNlLXktMCBtZDpzcGFjZS15LTAgbWQ6ZmxleC1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzIgZmxleCBmbGV4LWNvbCBzcGFjZS15LTEyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvTE9HTy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1kOnctMS8yXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3JpZ2h0X2ltYWdlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJmZWF0dXJlc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyICBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IG14LWF1dG8gbXQtMiAgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93IG1pZGRsZVwiPlxyXG4gICAgICAgICAgPFdhbGxldE11bHRpQnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEQzI5ODRcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgcHgtNSBteC1hdXRvIG10LTMyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtMjQgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLXctZnVsbCBcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBzdWJwaXhlbC1hbnRpYWxpYXNlZCBweS00IHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgVHJlbmRpbmdcclxuICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYmctWyNCMjI3Q0FdIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCAgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSYW5rXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkICB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBHYW1lIE5hbWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGF0ZS9UaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMjQgaG91cnNcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy1bIzE1MTc0QV0gICBcIj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9jcy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ1M6R08gLSBQR0wgTWFqb3IgQW50d2VycFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDQwMCtcclxuICAgICAgICAgICAgICAgICAgICAgIHtjb25uZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cGxhY2VCZXR9IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBsYWNlIEJldHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2RvdGEucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENTOkdPIC0gUEdMIE1ham9yIEFudHdlcnBcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNlcCAyMiwgMjAyMiA0OjMwIFBNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA0MDArXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Rvd24ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2ZyZWVmaXJlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBGcmVlIEZpcmUgLSBXb3JsZCBTZXJpZXNcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE9jdCAxNSwgMjAyMiA0OjAwIFBNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA1MCtcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG93bi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvaG9ub3IucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEtPRyAtIEtQTCBTcHJpbmcgUGxheW9mZnNcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE5vdiAwNSwgMjAyMiAyOjMwIEFNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAxMDArXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9sZWdlbmRzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMT0wgLSBFVSBNYXN0ZXJzIFNwcmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDI1K1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYWluIHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgcGFkZGluZzogNHJlbSAwO1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlciBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSBhOmhvdmVyLFxyXG4gICAgICAgIC50aXRsZSBhOmZvY3VzLFxyXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSxcclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIG1hcmdpbjogNHJlbSAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvZGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxyXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXHJcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgaDIge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud2FsbGV0LWJ1dHRvbnMge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGdhcDogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcbmV4cG9ydCB7IEV2ZW50RW1pdHRlciB9O1xuZXhwb3J0IHZhciBXaXRuZXNzU2NvcGU7XG4oZnVuY3Rpb24gKFdpdG5lc3NTY29wZSkge1xuICAgIFdpdG5lc3NTY29wZVtXaXRuZXNzU2NvcGVbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcbiAgICBXaXRuZXNzU2NvcGVbV2l0bmVzc1Njb3BlW1wiQ2FsbGVkQnlFbnRyeVwiXSA9IDFdID0gXCJDYWxsZWRCeUVudHJ5XCI7XG4gICAgV2l0bmVzc1Njb3BlW1dpdG5lc3NTY29wZVtcIkN1c3RvbUNvbnRyYWN0c1wiXSA9IDE2XSA9IFwiQ3VzdG9tQ29udHJhY3RzXCI7XG4gICAgV2l0bmVzc1Njb3BlW1dpdG5lc3NTY29wZVtcIkN1c3RvbUdyb3Vwc1wiXSA9IDMyXSA9IFwiQ3VzdG9tR3JvdXBzXCI7XG4gICAgV2l0bmVzc1Njb3BlW1dpdG5lc3NTY29wZVtcIkdsb2JhbFwiXSA9IDEyOF0gPSBcIkdsb2JhbFwiO1xufSkoV2l0bmVzc1Njb3BlIHx8IChXaXRuZXNzU2NvcGUgPSB7fSkpO1xuZXhwb3J0IGNsYXNzIEJhc2VXYWxsZXRBZGFwdGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkYXB0ZXIuanMubWFwIiwiZXhwb3J0IGNsYXNzIFdhbGxldEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgZXJyb3IpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90Rm91bmRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE5vdEZvdW5kRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RJbnN0YWxsZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE5vdEluc3RhbGxlZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90UmVhZHlFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE5vdFJlYWR5RXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRDb25uZWN0aW9uRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRDb25uZWN0aW9uRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXREaXNjb25uZWN0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldERpc2Nvbm5lY3RlZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0QWNjb3VudEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0QWNjb3VudEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXROb3RDb25uZWN0ZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldFRpbWVvdXRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldFRpbWVvdXRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldFdpbmRvd0Jsb2NrZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldFdpbmRvd0Jsb2NrZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldFdpbmRvd0Nsb3NlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0V2luZG93Q2xvc2VkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRNZXRob2ROb3RTdXBwb3J0ZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldE1ldGhvZE5vdFN1cHBvcnRlZEVycm9yJztcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcnJvcnMuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9hZGFwdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXJyb3JzJztcbmV4cG9ydCAqIGZyb20gJy4vcG9sbCc7XG5leHBvcnQgKiBmcm9tICcuL3dhaXQnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5leHBvcnQgZnVuY3Rpb24gcG9sbChjYWxsYmFjaywgaW50ZXJ2YWwsIGNvdW50KSB7XG4gICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRvbmUgPSB5aWVsZCBjYWxsYmFjaygpO1xuICAgICAgICAgICAgaWYgKCFkb25lKVxuICAgICAgICAgICAgICAgIHBvbGwoY2FsbGJhY2ssIGludGVydmFsLCBjb3VudCAtIDEpO1xuICAgICAgICB9KSwgaW50ZXJ2YWwpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwb2xsVW50aWxSZWFkeShhZGFwdGVyLCBwb2xsSW50ZXJ2YWwsIHBvbGxDb3VudCkge1xuICAgIHBvbGwoKCkgPT4ge1xuICAgICAgICBjb25zdCB7IHJlYWR5IH0gPSBhZGFwdGVyO1xuICAgICAgICBpZiAocmVhZHkpIHtcbiAgICAgICAgICAgIGlmICghYWRhcHRlci5lbWl0KCdyZWFkeScpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2FkYXB0ZXIuY29uc3RydWN0b3IubmFtZX0gaXMgcmVhZHkgYnV0IG5vIGxpc3RlbmVyIHdhcyByZWdpc3RlcmVkYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlYWR5O1xuICAgIH0sIHBvbGxJbnRlcnZhbCwgcG9sbENvdW50KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbGwuanMubWFwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBycGMgfSBmcm9tICdAY2l0eW9memlvbi9uZW9uLWpzJztcbmV4cG9ydCBmdW5jdGlvbiB3YWl0VHgocnBjQWRkcmVzcywgdHhJZCwgcmVhZEZyZXF1ZW5jeSA9IDEwMDAsIHRpbWVvdXQgPSAzMDAwMCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgcnBjQ2xpZW50ID0gbmV3IHJwYy5SUENDbGllbnQocnBjQWRkcmVzcyk7XG4gICAgICAgIC8vIFdhaXQgdW50aWwgdGhlIHRyYW5zYWN0aW9uIGNhbiBiZSBmb3VuZCwgaWYgaXQncyBmb3VuZCBpdCBtZWFucyBpdCdzIG9rIGJlY2F1c2UgaXQgaGFzIGJlZW4gaW5zZXJ0ZWQgaW4gYSBibG9ja1xuICAgICAgICAvLyBPdGhlcndpc2UgdHJpZ2dlciB0aGUgdGltZW91dCBtZWFuaW5nIHRoYXQgaXQncyBub3QgaW5zZXJ0ZWQgaW4gdGhlIGJsb2NrIChhdmVyYWdlIGJsb2NrIHRpbWUgMTVzKVxuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICAvLyBUaHJvdyBhbiBlcnJvciBpZiB0aGUgdGltZW91dCBoYXMgcGFzc2VkXG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID4gdGltZW91dClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSB0cmFuc2FjdGlvbiBmcm9tIHRoZSBycGNDbGllbnRcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IHlpZWxkIHJwY0NsaWVudC5nZXRSYXdUcmFuc2FjdGlvbih0eElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gU2xlZXAgZm9yIHRoZSBuZXh0IGN5Y2xlXG4gICAgICAgICAgICAgICAgeWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgcmVhZEZyZXF1ZW5jeSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICghdHJhbnNhY3Rpb24pO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FpdC5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL3dhbGxldC1idXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtY29sbGFwc2UnO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtY29ubmVjdC1idXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtZGlzY29ubmVjdC1idXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtaWNvbic7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1saXN0LWl0ZW0nO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtbW9kYWwtYnV0dG9uJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LW1vZGFsLXByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LW1vZGFsJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LW11bHRpLWJ1dHRvbic7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFdhbGxldEJ1dHRvbiA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0QnV0dG9uKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZGlzYWJsZWQsIGVuZEljb24sIHN0YXJ0SWNvbiwgc3R5bGUsIHRhYkluZGV4LCBvbkNsaWNrLCB9KSB7XG4gICAgY29uc3QganVzdGlmeUNvbnRlbnQgPSBlbmRJY29uIHx8IHN0YXJ0SWNvbiA/ICdzcGFjZS1iZXR3ZWVuJyA6ICdjZW50ZXInO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogYHdhbGxldC1hZGFwdGVyLWJ1dHRvbiAke2NsYXNzTmFtZSB8fCAnJ31gLCBkaXNhYmxlZDogZGlzYWJsZWQsIG9uQ2xpY2s6IG9uQ2xpY2ssIHN0eWxlOiBPYmplY3QuYXNzaWduKHsganVzdGlmeUNvbnRlbnQgfSwgc3R5bGUpLCB0YWJJbmRleDogdGFiSW5kZXggfHwgMCwgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICBzdGFydEljb24gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLXN0YXJ0LWljb25cIiB9LCBzdGFydEljb24pLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgZW5kSWNvbiAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tZW5kLWljb25cIiB9LCBlbmRJY29uKSkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtYnV0dG9uLmpzLm1hcCIsImltcG9ydCBSZWFjdCwgeyB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBXYWxsZXRDb2xsYXBzZSA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0Q29sbGFwc2UoeyBpZCwgY2hpbGRyZW4sIGV4cGFuZGVkID0gZmFsc2UsIH0pIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgaW5zdGFudCA9IHVzZVJlZih0cnVlKTtcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gJ2hlaWdodCAyNTBtcyBlYXNlLW91dCc7XG4gICAgY29uc3Qgb3BlbkNvbGxhcHNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gbm9kZS5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGNsb3NlQ29sbGFwc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBub2RlLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgICAgICBub2RlLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgICAgICBvcGVuQ29sbGFwc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsb3NlQ29sbGFwc2UoKTtcbiAgICAgICAgfVxuICAgIH0sIFtleHBhbmRlZF0pO1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDb21wbGV0ZSgpIHtcbiAgICAgICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBub2RlLnN0eWxlLm92ZXJmbG93ID0gZXhwYW5kZWQgPyAnaW5pdGlhbCcgOiAnaGlkZGVuJztcbiAgICAgICAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVRyYW5zaXRpb25FbmQoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChub2RlICYmIGV2ZW50LnRhcmdldCA9PT0gbm9kZSAmJiBldmVudC5wcm9wZXJ0eU5hbWUgPT09ICdoZWlnaHQnKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5zdGFudC5jdXJyZW50KSB7XG4gICAgICAgICAgICBoYW5kbGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgaW5zdGFudC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKTtcbiAgICB9LCBbZXhwYW5kZWRdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjaGlsZHJlbjogY2hpbGRyZW4sIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1jb2xsYXBzZVwiLCBpZDogaWQsIHJlZjogcmVmLCByb2xlOiBcInJlZ2lvblwiLCBzdHlsZTogeyBoZWlnaHQ6IDAsIHRyYW5zaXRpb246IGluc3RhbnQuY3VycmVudCA/IHVuZGVmaW5lZCA6IHRyYW5zaXRpb24gfSB9KSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1jb2xsYXBzZS5qcy5tYXAiLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtYnV0dG9uJztcbmltcG9ydCB7IFdhbGxldEljb24gfSBmcm9tICcuL3dhbGxldC1pY29uJztcbmV4cG9ydCBjb25zdCBXYWxsZXRDb25uZWN0QnV0dG9uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRDb25uZWN0QnV0dG9uKF9hKSB7XG4gICAgdmFyIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgZGlzYWJsZWQsIGVuZEljb24sIHN0YXJ0SWNvbiwgc3R5bGUsIHRhYkluZGV4LCBvbkNsaWNrIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZWRcIiwgXCJlbmRJY29uXCIsIFwic3RhcnRJY29uXCIsIFwic3R5bGVcIiwgXCJ0YWJJbmRleFwiLCBcIm9uQ2xpY2tcIl0pO1xuICAgIGNvbnN0IHsgd2FsbGV0LCBjb25uZWN0LCBjb25uZWN0aW5nLCBjb25uZWN0ZWQgfSA9IHVzZVdhbGxldCgpO1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNsaWNrKVxuICAgICAgICAgICAgb25DbGljayhldmVudCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbiAgICAgICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkKVxuICAgICAgICAgICAgY29ubmVjdCgpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgfSwgW29uQ2xpY2ssIGNvbm5lY3RdKTtcbiAgICBjb25zdCBjb250ZW50ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZHJlbilcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgaWYgKGNvbm5lY3RpbmcpXG4gICAgICAgICAgICByZXR1cm4gJ0Nvbm5lY3RpbmcgLi4uJztcbiAgICAgICAgaWYgKGNvbm5lY3RlZClcbiAgICAgICAgICAgIHJldHVybiAnQ29ubmVjdGVkJztcbiAgICAgICAgaWYgKHdhbGxldClcbiAgICAgICAgICAgIHJldHVybiAnQ29ubmVjdCc7XG4gICAgICAgIHJldHVybiAnQ29ubmVjdCBXYWxsZXQnO1xuICAgIH0sIFtjaGlsZHJlbiwgY29ubmVjdGluZywgY29ubmVjdGVkLCB3YWxsZXRdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0QnV0dG9uLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi10cmlnZ2VyXCIsIGRpc2FibGVkOiBkaXNhYmxlZCB8fCAhd2FsbGV0IHx8IGNvbm5lY3RpbmcgfHwgY29ubmVjdGVkLCBzdGFydEljb246IHdhbGxldCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0SWNvbiwgeyB3YWxsZXQ6IHdhbGxldCB9KSA6IHVuZGVmaW5lZCwgZW5kSWNvbjogZW5kSWNvbiwgc3R5bGU6IHN0eWxlLCB0YWJJbmRleDogdGFiSW5kZXgsIG9uQ2xpY2s6IGhhbmRsZUNsaWNrIH0sIHByb3BzKSwgY29udGVudCkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtY29ubmVjdC1idXR0b24uanMubWFwIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWJ1dHRvbic7XG5pbXBvcnQgeyBXYWxsZXRJY29uIH0gZnJvbSAnLi93YWxsZXQtaWNvbic7XG5leHBvcnQgY29uc3QgV2FsbGV0RGlzY29ubmVjdEJ1dHRvbiA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0RGlzY29ubmVjdEJ1dHRvbihfYSkge1xuICAgIHZhciB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGRpc2FibGVkLCBlbmRJY29uLCBzdGFydEljb24sIHN0eWxlLCB0YWJJbmRleCwgb25DbGljayB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImRpc2FibGVkXCIsIFwiZW5kSWNvblwiLCBcInN0YXJ0SWNvblwiLCBcInN0eWxlXCIsIFwidGFiSW5kZXhcIiwgXCJvbkNsaWNrXCJdKTtcbiAgICBjb25zdCB7IHdhbGxldCwgZGlzY29ubmVjdCwgZGlzY29ubmVjdGluZyB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xpY2spXG4gICAgICAgICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICAgICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpXG4gICAgICAgICAgICBkaXNjb25uZWN0KCkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICB9LCBbb25DbGljaywgZGlzY29ubmVjdF0pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkcmVuKVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICBpZiAoZGlzY29ubmVjdGluZylcbiAgICAgICAgICAgIHJldHVybiAnRGlzY29ubmVjdGluZyAuLi4nO1xuICAgICAgICBpZiAod2FsbGV0KVxuICAgICAgICAgICAgcmV0dXJuICdEaXNjb25uZWN0JztcbiAgICAgICAgcmV0dXJuICdEaXNjb25uZWN0IFdhbGxldCc7XG4gICAgfSwgW2NoaWxkcmVuLCBkaXNjb25uZWN0aW5nLCB3YWxsZXRdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0QnV0dG9uLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi10cmlnZ2VyXCIsIGRpc2FibGVkOiBkaXNhYmxlZCB8fCAhd2FsbGV0LCBzdGFydEljb246IHdhbGxldCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0SWNvbiwgeyB3YWxsZXQ6IHdhbGxldCB9KSA6IHVuZGVmaW5lZCwgZW5kSWNvbjogZW5kSWNvbiwgc3R5bGU6IHN0eWxlLCB0YWJJbmRleDogdGFiSW5kZXgsIG9uQ2xpY2s6IGhhbmRsZUNsaWNrIH0sIHByb3BzKSwgY29udGVudCkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtZGlzY29ubmVjdC1idXR0b24uanMubWFwIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBXYWxsZXRJY29uID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRJY29uKF9hKSB7XG4gICAgdmFyIHsgd2FsbGV0IH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcIndhbGxldFwiXSk7XG4gICAgcmV0dXJuIHdhbGxldCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oeyBzcmM6IHdhbGxldC5pY29uLCBhbHQ6IGAke3dhbGxldC5uYW1lfSBpY29uYCB9LCBwcm9wcykpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtaWNvbi5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtYnV0dG9uJztcbmltcG9ydCB7IFdhbGxldEljb24gfSBmcm9tICcuL3dhbGxldC1pY29uJztcbmV4cG9ydCBjb25zdCBXYWxsZXRMaXN0SXRlbSA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0TGlzdEl0ZW0oeyBoYW5kbGVDbGljaywgdGFiSW5kZXgsIHdhbGxldCwgfSkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0QnV0dG9uLCB7IG9uQ2xpY2s6IGhhbmRsZUNsaWNrLCBlbmRJY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEljb24sIHsgd2FsbGV0OiB3YWxsZXQgfSksIHRhYkluZGV4OiB0YWJJbmRleCB9LCB3YWxsZXQubmFtZSkpKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LWxpc3QtaXRlbS5qcy5tYXAiLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXYWxsZXRCdXR0b24gfSBmcm9tICcuL3dhbGxldC1idXR0b24nO1xuaW1wb3J0IHsgdXNlV2FsbGV0TW9kYWwgfSBmcm9tICcuLi9ob29rcy91c2Utd2FsbGV0LW1vZGFsJztcbmV4cG9ydCBjb25zdCBXYWxsZXRNb2RhbEJ1dHRvbiA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0TW9kYWxCdXR0b24oX2EpIHtcbiAgICB2YXIgeyBjaGlsZHJlbiA9ICdTZWxlY3QgV2FsbGV0Jywgb25DbGljayB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcIm9uQ2xpY2tcIl0pO1xuICAgIGNvbnN0IHsgdmlzaWJsZSwgc2V0VmlzaWJsZSB9ID0gdXNlV2FsbGV0TW9kYWwoKTtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DbGljaylcbiAgICAgICAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpXG4gICAgICAgICAgICBzZXRWaXNpYmxlKCF2aXNpYmxlKTtcbiAgICB9LCBbb25DbGljaywgc2V0VmlzaWJsZSwgdmlzaWJsZV0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLXRyaWdnZXJcIiwgb25DbGljazogaGFuZGxlQ2xpY2sgfSwgcHJvcHMpLCBjaGlsZHJlbikpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtbW9kYWwtYnV0dG9uLmpzLm1hcCIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldE1vZGFsQ29udGV4dCB9IGZyb20gJy4uL2hvb2tzL3VzZS13YWxsZXQtbW9kYWwnO1xuaW1wb3J0IHsgV2FsbGV0TW9kYWwgfSBmcm9tICcuL3dhbGxldC1tb2RhbCc7XG5leHBvcnQgY29uc3QgV2FsbGV0TW9kYWxQcm92aWRlciA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0TW9kYWxQcm92aWRlcihfYSkge1xuICAgIHZhciB7IGNoaWxkcmVuIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCJdKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldE1vZGFsQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZToge1xuICAgICAgICAgICAgdmlzaWJsZSxcbiAgICAgICAgICAgIHNldFZpc2libGUsXG4gICAgICAgIH0gfSxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIHZpc2libGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRNb2RhbCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtbW9kYWwtcHJvdmlkZXIuanMubWFwIiwiaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFdhbGxldEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWJ1dHRvbic7XG5pbXBvcnQgeyBXYWxsZXRDb2xsYXBzZSB9IGZyb20gJy4vd2FsbGV0LWNvbGxhcHNlJztcbmltcG9ydCB7IHVzZVdhbGxldE1vZGFsIH0gZnJvbSAnLi4vaG9va3MvdXNlLXdhbGxldC1tb2RhbCc7XG5pbXBvcnQgeyBXYWxsZXRMaXN0SXRlbSB9IGZyb20gJy4vd2FsbGV0LWxpc3QtaXRlbSc7XG5leHBvcnQgY29uc3QgV2FsbGV0TW9kYWwgPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldE1vZGFsKHsgY2xhc3NOYW1lID0gJycsIGxvZ28sIGZlYXR1cmVkV2FsbGV0cyA9IDMsIGNvbnRhaW5lciA9ICdib2R5JywgfSkge1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCB7IHdhbGxldHMsIHNlbGVjdCB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgeyBzZXRWaXNpYmxlIH0gPSB1c2VXYWxsZXRNb2RhbCgpO1xuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtmYWRlSW4sIHNldEZhZGVJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3BvcnRhbCwgc2V0UG9ydGFsXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtmZWF0dXJlZCwgbW9yZV0gPSB1c2VNZW1vKCgpID0+IFt3YWxsZXRzLnNsaWNlKDAsIGZlYXR1cmVkV2FsbGV0cyksIHdhbGxldHMuc2xpY2UoZmVhdHVyZWRXYWxsZXRzKV0sIFt3YWxsZXRzLCBmZWF0dXJlZFdhbGxldHNdKTtcbiAgICBjb25zdCBoaWRlTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldEZhZGVJbihmYWxzZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0VmlzaWJsZShmYWxzZSksIDE1MCk7XG4gICAgfSwgW3NldEZhZGVJbiwgc2V0VmlzaWJsZV0pO1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGhpZGVNb2RhbCgpO1xuICAgIH0sIFtoaWRlTW9kYWxdKTtcbiAgICBjb25zdCBoYW5kbGVXYWxsZXRDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCwgd2FsbGV0TmFtZSkgPT4ge1xuICAgICAgICBzZWxlY3Qod2FsbGV0TmFtZSk7XG4gICAgICAgIGhhbmRsZUNsb3NlKGV2ZW50KTtcbiAgICB9LCBbc2VsZWN0LCBoYW5kbGVDbG9zZV0pO1xuICAgIGNvbnN0IGhhbmRsZUNvbGxhcHNlQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpLCBbc2V0RXhwYW5kZWQsIGV4cGFuZGVkXSk7XG4gICAgY29uc3QgaGFuZGxlVGFiS2V5ID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFub2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBoZXJlIHdlIHF1ZXJ5IGFsbCBmb2N1c2FibGUgZWxlbWVudHNcbiAgICAgICAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBmaXJzdEVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1swXTtcbiAgICAgICAgY29uc3QgbGFzdEVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAvLyBpZiBnb2luZyBiYWNrd2FyZCBieSBwcmVzc2luZyB0YWIgYW5kIGZpcnN0RWxlbWVudCBpcyBhY3RpdmUsIHNoaWZ0IGZvY3VzIHRvIGxhc3QgZm9jdXNhYmxlIGVsZW1lbnRcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBsYXN0RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBnb2luZyBmb3J3YXJkIGJ5IHByZXNzaW5nIHRhYiBhbmQgbGFzdEVsZW1lbnQgaXMgYWN0aXZlLCBzaGlmdCBmb2N1cyB0byBmaXJzdCBmb2N1c2FibGUgZWxlbWVudFxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZmlyc3RFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtyZWZdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGhpZGVNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgICAgICAgICAgIGhhbmRsZVRhYktleShldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIEdldCBvcmlnaW5hbCBvdmVyZmxvd1xuICAgICAgICBjb25zdCB7IG92ZXJmbG93IH0gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgLy8gSGFjayB0byBlbmFibGUgZmFkZSBpbiBhbmltYXRpb24gYWZ0ZXIgbW91bnRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRGYWRlSW4odHJ1ZSksIDApO1xuICAgICAgICAvLyBQcmV2ZW50IHNjcm9sbGluZyBvbiBtb3VudFxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIC8vIExpc3RlbiBmb3Iga2V5ZG93biBldmVudHNcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAvLyBSZS1lbmFibGUgc2Nyb2xsaW5nIHdoZW4gY29tcG9uZW50IHVubW91bnRzXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gb3ZlcmZsb3c7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24sIGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbaGlkZU1vZGFsLCBoYW5kbGVUYWJLZXldKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4gc2V0UG9ydGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKSksIFtzZXRQb3J0YWwsIGNvbnRhaW5lcl0pO1xuICAgIHJldHVybiAocG9ydGFsICYmXG4gICAgICAgIGNyZWF0ZVBvcnRhbChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC10aXRsZVwiLCBcImFyaWEtbW9kYWxcIjogXCJ0cnVlXCIsIGNsYXNzTmFtZTogYHdhbGxldC1hZGFwdGVyLW1vZGFsICR7ZmFkZUluICYmICd3YWxsZXQtYWRhcHRlci1tb2RhbC1mYWRlLWluJ30gJHtjbGFzc05hbWV9YCwgcmVmOiByZWYsIHJvbGU6IFwiZGlhbG9nXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgd2FsbGV0LWFkYXB0ZXItbW9kYWwtd3JhcHBlciAkeyFsb2dvICYmICd3YWxsZXQtYWRhcHRlci1tb2RhbC13cmFwcGVyLW5vLWxvZ28nfWAgfSxcbiAgICAgICAgICAgICAgICAgICAgbG9nbyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1sb2dvLXdyYXBwZXJcIiB9LCB0eXBlb2YgbG9nbyA9PT0gJ3N0cmluZycgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgYWx0OiBcImxvZ29cIiwgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWxvZ29cIiwgc3JjOiBsb2dvIH0pIDogbG9nbykpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtdGl0bGVcIiwgaWQ6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtdGl0bGVcIiB9LCBcIkNvbm5lY3QgV2FsbGV0XCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogaGFuZGxlQ2xvc2UsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1idXR0b24tY2xvc2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHdpZHRoOiBcIjE0XCIsIGhlaWdodDogXCIxNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIk0xNCAxMi40NjEgOC4zIDYuNzcybDUuMjM0LTUuMjMzTDEyLjAwNiAwIDYuNzcyIDUuMjM0IDEuNTQgMCAwIDEuNTM5bDUuMjM0IDUuMjMzTDAgMTIuMDA2bDEuNTM5IDEuNTI4TDYuNzcyIDguM2w1LjY5IDUuN0wxNCAxMi40NjF6XCIgfSkpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWxpc3RcIiB9LCBmZWF0dXJlZC5tYXAoKHdhbGxldCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0TGlzdEl0ZW0sIHsga2V5OiB3YWxsZXQubmFtZSwgaGFuZGxlQ2xpY2s6IChldmVudCkgPT4gaGFuZGxlV2FsbGV0Q2xpY2soZXZlbnQsIHdhbGxldC5uYW1lKSwgd2FsbGV0OiB3YWxsZXQgfSkpKSksXG4gICAgICAgICAgICAgICAgICAgIG1vcmUubGVuZ3RoID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldENvbGxhcHNlLCB7IGV4cGFuZGVkOiBleHBhbmRlZCwgaWQ6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtY29sbGFwc2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1saXN0XCIgfSwgbW9yZS5tYXAoKHdhbGxldCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0TGlzdEl0ZW0sIHsga2V5OiB3YWxsZXQubmFtZSwgaGFuZGxlQ2xpY2s6IChldmVudCkgPT4gaGFuZGxlV2FsbGV0Q2xpY2soZXZlbnQsIHdhbGxldC5uYW1lKSwgdGFiSW5kZXg6IGV4cGFuZGVkID8gMCA6IC0xLCB3YWxsZXQ6IHdhbGxldCB9KSkpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEJ1dHRvbiwgeyBcImFyaWEtY29udHJvbHNcIjogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1jb2xsYXBzZVwiLCBcImFyaWEtZXhwYW5kZWRcIjogZXhwYW5kZWQsIGNsYXNzTmFtZTogYHdhbGxldC1hZGFwdGVyLW1vZGFsLWNvbGxhcHNlLWJ1dHRvbiAke2V4cGFuZGVkICYmICd3YWxsZXQtYWRhcHRlci1tb2RhbC1jb2xsYXBzZS1idXR0b24tYWN0aXZlJ31gLCBlbmRJY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgd2lkdGg6IFwiMTFcIiwgaGVpZ2h0OiBcIjZcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IFwibTUuOTM4IDUuNzMgNC4yOC00LjEyNmEuOTE1LjkxNSAwIDAgMCAwLTEuMzIyIDEgMSAwIDAgMC0xLjM3MSAwTDUuMjUzIDMuNzM2IDEuNjU5LjI3MmExIDEgMCAwIDAtMS4zNzEgMEEuOTMuOTMgMCAwIDAgMCAuOTMyYzAgLjI0Ni4xLjQ4LjI4OC42NjJsNC4yOCA0LjEyNWEuOTkuOTkgMCAwIDAgMS4zNy4wMXpcIiB9KSksIG9uQ2xpY2s6IGhhbmRsZUNvbGxhcHNlQ2xpY2sgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZCA/ICdMZXNzJyA6ICdNb3JlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBvcHRpb25zXCIpKSkgOiBudWxsKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLW92ZXJsYXlcIiwgb25Nb3VzZURvd246IGhhbmRsZUNsb3NlIH0pKSwgcG9ydGFsKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1tb2RhbC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWJ1dHRvbic7XG5pbXBvcnQgeyB1c2VXYWxsZXRNb2RhbCB9IGZyb20gJy4uL2hvb2tzL3VzZS13YWxsZXQtbW9kYWwnO1xuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWNvbm5lY3QtYnV0dG9uJztcbmltcG9ydCB7IFdhbGxldEljb24gfSBmcm9tICcuL3dhbGxldC1pY29uJztcbmltcG9ydCB7IFdhbGxldE1vZGFsQnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtbW9kYWwtYnV0dG9uJztcbmV4cG9ydCBjb25zdCBXYWxsZXRNdWx0aUJ1dHRvbiA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0TXVsdGlCdXR0b24oX2EpIHtcbiAgICB2YXIgeyBjaGlsZHJlbiB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiXSk7XG4gICAgY29uc3QgeyBhZGRyZXNzLCB3YWxsZXQsIGRpc2Nvbm5lY3QgfSA9IHVzZVdhbGxldCgpO1xuICAgIGNvbnN0IHsgc2V0VmlzaWJsZSB9ID0gdXNlV2FsbGV0TW9kYWwoKTtcbiAgICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IF9hZGRyZXNzID0gdXNlTWVtbygoKSA9PiBhZGRyZXNzLCBbYWRkcmVzc10pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkcmVuKVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICBpZiAoIXdhbGxldCB8fCAhX2FkZHJlc3MpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIF9hZGRyZXNzO1xuICAgIH0sIFtjaGlsZHJlbiwgd2FsbGV0LCBfYWRkcmVzc10pO1xuICAgIGNvbnN0IGNvcHlBZGRyZXNzID0gdXNlQ2FsbGJhY2soKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIHlpZWxkIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KF9hZGRyZXNzKTtcbiAgICAgICAgICAgIHNldENvcGllZCh0cnVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkKGZhbHNlKSwgNDAwKTtcbiAgICAgICAgfVxuICAgIH0pLCBbX2FkZHJlc3NdKTtcbiAgICBjb25zdCBvcGVuRHJvcGRvd24gPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRBY3RpdmUodHJ1ZSksIFtzZXRBY3RpdmVdKTtcbiAgICBjb25zdCBjbG9zZURyb3Bkb3duID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0QWN0aXZlKGZhbHNlKSwgW3NldEFjdGl2ZV0pO1xuICAgIGNvbnN0IG9wZW5Nb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgY2xvc2VEcm9wZG93bigpO1xuICAgIH0sIFtzZXRWaXNpYmxlLCBjbG9zZURyb3Bkb3duXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSByZWYuY3VycmVudDtcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmcgaWYgY2xpY2tpbmcgZHJvcGRvd24gb3IgaXRzIGRlc2NlbmRhbnRzXG4gICAgICAgICAgICBpZiAoIW5vZGUgfHwgbm9kZS5jb250YWlucyhldmVudC50YXJnZXQpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9LCBbcmVmLCBjbG9zZURyb3Bkb3duXSk7XG4gICAgaWYgKCF3YWxsZXQpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldE1vZGFsQnV0dG9uLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIGNoaWxkcmVuKTtcbiAgICBpZiAoIV9hZGRyZXNzKVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRDb25uZWN0QnV0dG9uLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItZHJvcGRvd25cIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IFwiYXJpYS1leHBhbmRlZFwiOiBhY3RpdmUsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tdHJpZ2dlclwiLCBzdHlsZTogT2JqZWN0LmFzc2lnbih7IHBvaW50ZXJFdmVudHM6IGFjdGl2ZSA/ICdub25lJyA6ICdhdXRvJyB9LCBwcm9wcy5zdHlsZSksIG9uQ2xpY2s6IG9wZW5Ecm9wZG93biwgc3RhcnRJY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEljb24sIHsgd2FsbGV0OiB3YWxsZXQgfSkgfSwgcHJvcHMpLCBjb250ZW50KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgXCJhcmlhLWxhYmVsXCI6IFwiZHJvcGRvd24tbGlzdFwiLCBjbGFzc05hbWU6IGB3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0ICR7YWN0aXZlICYmICd3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0LWFjdGl2ZSd9YCwgcmVmOiByZWYsIHJvbGU6IFwibWVudVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBvbkNsaWNrOiBjb3B5QWRkcmVzcywgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWRyb3Bkb3duLWxpc3QtaXRlbVwiLCByb2xlOiBcIm1lbnVpdGVtXCIgfSwgY29waWVkID8gJ0NvcGllZCcgOiAnQ29weSBhZGRyZXNzJyksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBvbkNsaWNrOiBvcGVuTW9kYWwsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0LWl0ZW1cIiwgcm9sZTogXCJtZW51aXRlbVwiIH0sIFwiQ29ubmVjdCBhIGRpZmZlcmVudCB3YWxsZXRcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBvbkNsaWNrOiBkaXNjb25uZWN0LCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItZHJvcGRvd24tbGlzdC1pdGVtXCIsIHJvbGU6IFwibWVudWl0ZW1cIiB9LCBcIkRpc2Nvbm5lY3RcIikpKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1tdWx0aS1idXR0b24uanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBXYWxsZXRNb2RhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcbmV4cG9ydCBmdW5jdGlvbiB1c2VXYWxsZXRNb2RhbCgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChXYWxsZXRNb2RhbENvbnRleHQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXdhbGxldC1tb2RhbC5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2hvb2tzJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IFdhbGxldE5vdENvbm5lY3RlZEVycm9yLCBXYWxsZXROb3RSZWFkeUVycm9yLCB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvciB9IGZyb20gJy4uL3V0aWxzL2Vycm9ycyc7XG5pbXBvcnQgeyBXYWxsZXRDb250ZXh0IH0gZnJvbSAnLi4vaG9va3MvdXNlLXdhbGxldCc7XG5jb25zdCBXQUxMRVRfSU5JVElBTF9TVEFURSA9IHtcbiAgICB3YWxsZXQ6IG51bGwsXG4gICAgYWRhcHRlcjogbnVsbCxcbiAgICByZWFkeTogZmFsc2UsXG4gICAgYWRkcmVzczogbnVsbCxcbiAgICBjb25uZWN0ZWQ6IGZhbHNlLFxufTtcbmV4cG9ydCBjb25zdCBXYWxsZXRQcm92aWRlciA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0UHJvdmlkZXIoeyBjaGlsZHJlbiwgd2FsbGV0cywgYXV0b0Nvbm5lY3QgPSBmYWxzZSwgb25FcnJvcjogX29uRXJyb3IgPSAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpLCB9KSB7XG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgLy8gVGhlIG1haW4gc3RhdGUgb2YgdGhlIHdhbGxldCBwcm92aWRlclxuICAgIGNvbnN0IFt7IHdhbGxldCwgYWRhcHRlciwgcmVhZHksIGFkZHJlc3MsIGNvbm5lY3RlZCB9LCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShXQUxMRVRfSU5JVElBTF9TVEFURSk7XG4gICAgY29uc3QgW2Nvbm5lY3RpbmcsIHNldENvbm5lY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkaXNjb25uZWN0aW5nLCBzZXREaXNjb25uZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBpc0Nvbm5lY3RpbmcgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IGlzRGlzY29ubmVjdGluZyA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgaXNVbmxvYWRpbmcgPSB1c2VSZWYoZmFsc2UpO1xuICAgIC8vIE1hcCB3YWxsZXQgbmFtZXMgdG8gd2FsbGV0cyBmb3IgZWFzaWVyIHVzYWdlXG4gICAgY29uc3Qgd2FsbGV0c0J5TmFtZSA9IHVzZU1lbW8oKCkgPT4gd2FsbGV0cy5yZWR1Y2UoKHdhbGxldHNCeU5hbWUsIHdhbGxldCkgPT4ge1xuICAgICAgICB3YWxsZXRzQnlOYW1lW3dhbGxldC5uYW1lXSA9IHdhbGxldDtcbiAgICAgICAgcmV0dXJuIHdhbGxldHNCeU5hbWU7XG4gICAgfSwge30pLCBbd2FsbGV0c10pO1xuICAgIC8vIFdoZW4gdGhlIHNlbGVjdGVkIHdhbGxldCBjaGFuZ2VzLCByZS1pbml0aWFsaXplIHRoZSBzdGF0ZVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdhbGxldCA9IChuYW1lICYmIHdhbGxldHNCeU5hbWVbbmFtZV0pIHx8IG51bGw7XG4gICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB3YWxsZXQgJiYgd2FsbGV0LmFkYXB0ZXIoKTtcbiAgICAgICAgaWYgKGFkYXB0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVhZHksIGFkZHJlc3MsIGNvbm5lY3RlZCB9ID0gYWRhcHRlcjtcbiAgICAgICAgICAgIHNldFN0YXRlKHsgd2FsbGV0LCBhZGFwdGVyLCBjb25uZWN0ZWQsIGFkZHJlc3MsIHJlYWR5IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0U3RhdGUoV0FMTEVUX0lOSVRJQUxfU1RBVEUpO1xuICAgICAgICB9XG4gICAgfSwgW25hbWUsIHdhbGxldHNCeU5hbWUsIHNldFN0YXRlXSk7XG4gICAgLy8gSWYgYXV0b0Nvbm5lY3QgaXMgZW5hYmxlZCwgdHJ5IHRvIGNvbm5lY3Qgd2hlbiB0aGUgYWRhcHRlciBjaGFuZ2VzIGFuZCBpcyByZWFkeVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc0Nvbm5lY3RpbmcuY3VycmVudCB8fCBjb25uZWN0aW5nIHx8IGNvbm5lY3RlZCB8fCAhYXV0b0Nvbm5lY3QgfHwgIWFkYXB0ZXIgfHwgIXJlYWR5KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBpc0Nvbm5lY3RpbmcuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0Q29ubmVjdGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBhZGFwdGVyLmNvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCB3YWxsZXRcbiAgICAgICAgICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgdGhyb3cgZXJyb3IsIGJ1dCBvbkVycm9yIHdpbGwgc3RpbGwgYmUgY2FsbGVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaXNDb25uZWN0aW5nLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkoKTtcbiAgICB9LCBbaXNDb25uZWN0aW5nLCBjb25uZWN0aW5nLCBjb25uZWN0ZWQsIGF1dG9Db25uZWN0LCBhZGFwdGVyLCByZWFkeSwgc2V0Q29ubmVjdGluZywgc2V0TmFtZV0pO1xuICAgIC8vIElmIHRoZSB3aW5kb3cgaXMgY2xvc2luZyBvciByZWxvYWRpbmcsIGlnbm9yZSBkaXNjb25uZWN0IGFuZCBlcnJvciBldmVudHMgZnJvbSB0aGUgYWRhcHRlclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgICAgICAgaXNVbmxvYWRpbmcuY3VycmVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBsaXN0ZW5lcik7XG4gICAgfSwgW2lzVW5sb2FkaW5nXSk7XG4gICAgLy8gU2VsZWN0IGEgd2FsbGV0IGJ5IG5hbWVcbiAgICBjb25zdCBzZWxlY3QgPSB1c2VDYWxsYmFjaygobmV3TmFtZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAobmFtZSA9PT0gbmV3TmFtZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGFkYXB0ZXIpXG4gICAgICAgICAgICB5aWVsZCBhZGFwdGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgc2V0TmFtZShuZXdOYW1lKTtcbiAgICB9KSwgW25hbWUsIGFkYXB0ZXIsIHNldE5hbWVdKTtcbiAgICAvLyBIYW5kbGUgdGhlIGFkYXB0ZXIncyByZWFkeSBldmVudFxuICAgIGNvbnN0IG9uUmVhZHkgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRTdGF0ZSgoc3RhdGUpID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyByZWFkeTogdHJ1ZSB9KSkpLCBbc2V0U3RhdGVdKTtcbiAgICAvLyBIYW5kbGUgdGhlIGFkYXB0ZXIncyBjb25uZWN0IGV2ZW50XG4gICAgY29uc3Qgb25Db25uZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHsgY29ubmVjdGVkLCBhZGRyZXNzLCByZWFkeSB9ID0gYWRhcHRlcjtcbiAgICAgICAgc2V0U3RhdGUoKHN0YXRlKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHsgY29ubmVjdGVkLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIHJlYWR5IH0pKSk7XG4gICAgfSwgW2FkYXB0ZXIsIHNldFN0YXRlXSk7XG4gICAgLy8gSGFuZGxlIHRoZSBhZGFwdGVyJ3MgZGlzY29ubmVjdCBldmVudFxuICAgIGNvbnN0IG9uRGlzY29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgLy8gQ2xlYXIgdGhlIHNlbGVjdGVkIHdhbGxldCB1bmxlc3MgdGhlIHdpbmRvdyBpcyB1bmxvYWRpbmdcbiAgICAgICAgaWYgKCFpc1VubG9hZGluZy5jdXJyZW50KVxuICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICB9LCBbaXNVbmxvYWRpbmcsIHNldE5hbWVdKTtcbiAgICAvLyBIYW5kbGUgdGhlIGFkYXB0ZXIncyBlcnJvciBldmVudCwgYW5kIGxvY2FsIGVycm9yc1xuICAgIGNvbnN0IG9uRXJyb3IgPSB1c2VDYWxsYmFjaygoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gQ2FsbCB0aGUgcHJvdmlkZWQgZXJyb3IgaGFuZGxlciB1bmxlc3MgdGhlIHdpbmRvdyBpcyB1bmxvYWRpbmdcbiAgICAgICAgaWYgKCFpc1VubG9hZGluZy5jdXJyZW50KVxuICAgICAgICAgICAgX29uRXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgfSwgW2lzVW5sb2FkaW5nLCBfb25FcnJvcl0pO1xuICAgIC8vIENvbm5lY3QgdGhlIGFkYXB0ZXIgdG8gdGhlIHdhbGxldFxuICAgIGNvbnN0IGNvbm5lY3QgPSB1c2VDYWxsYmFjaygoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChpc0Nvbm5lY3RpbmcuY3VycmVudCB8fCBjb25uZWN0aW5nIHx8IGRpc2Nvbm5lY3RpbmcgfHwgY29ubmVjdGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIXdhbGxldCB8fCAhYWRhcHRlcilcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKSk7XG4gICAgICAgIGlmICghcmVhZHkpIHtcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCB3YWxsZXRcbiAgICAgICAgICAgIHNldE5hbWUobnVsbCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih3YWxsZXQudXJsLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RSZWFkeUVycm9yKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlzQ29ubmVjdGluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgc2V0Q29ubmVjdGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHNlbGVjdGVkIHdhbGxldFxuICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICAgICAgICAgIC8vIFJldGhyb3cgdGhlIGVycm9yLCBhbmQgb25FcnJvciB3aWxsIGFsc28gYmUgY2FsbGVkXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldENvbm5lY3RpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaXNDb25uZWN0aW5nLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pLCBbaXNDb25uZWN0aW5nLCBjb25uZWN0aW5nLCBkaXNjb25uZWN0aW5nLCBjb25uZWN0ZWQsIHdhbGxldCwgYWRhcHRlciwgb25FcnJvciwgcmVhZHksIHNldENvbm5lY3RpbmcsIHNldE5hbWVdKTtcbiAgICAvLyBEaXNjb25uZWN0IHRoZSBhZGFwdGVyIGZyb20gdGhlIHdhbGxldFxuICAgIGNvbnN0IGRpc2Nvbm5lY3QgPSB1c2VDYWxsYmFjaygoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChpc0Rpc2Nvbm5lY3RpbmcuY3VycmVudCB8fCBkaXNjb25uZWN0aW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICByZXR1cm4gc2V0TmFtZShudWxsKTtcbiAgICAgICAgaXNEaXNjb25uZWN0aW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBzZXREaXNjb25uZWN0aW5nKHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgeWllbGQgYWRhcHRlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgc2VsZWN0ZWQgd2FsbGV0XG4gICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgICAgICAgICAgLy8gUmV0aHJvdyB0aGUgZXJyb3IsIGFuZCBvbkVycm9yIHdpbGwgYWxzbyBiZSBjYWxsZWRcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0RGlzY29ubmVjdGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpc0Rpc2Nvbm5lY3RpbmcuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSksIFtpc0Rpc2Nvbm5lY3RpbmcsIGRpc2Nvbm5lY3RpbmcsIGFkYXB0ZXIsIHNldERpc2Nvbm5lY3RpbmcsIHNldE5hbWVdKTtcbiAgICBjb25zdCBpbnZva2VSZWFkID0gdXNlQ2FsbGJhY2soKHJlcXVlc3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuaW52b2tlUmVhZChyZXF1ZXN0KTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIGNvbnN0IGludm9rZVJlYWRNdWx0aSA9IHVzZUNhbGxiYWNrKChyZXF1ZXN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKSk7XG4gICAgICAgIGlmICghY29ubmVjdGVkKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLmludm9rZVJlYWRNdWx0aShyZXF1ZXN0KTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIGNvbnN0IGludm9rZSA9IHVzZUNhbGxiYWNrKChyZXF1ZXN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKSk7XG4gICAgICAgIGlmICghY29ubmVjdGVkKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLmludm9rZShyZXF1ZXN0KTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIGNvbnN0IGludm9rZU11bHRpID0gdXNlQ2FsbGJhY2soKHJlcXVlc3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuaW52b2tlTXVsdGkocmVxdWVzdCk7XG4gICAgfSksIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICBjb25zdCBnZXROZXR3b3JrcyA9IHVzZUNhbGxiYWNrKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuZ2V0TmV0d29ya3MoKTtcbiAgICB9KSwgW2FkYXB0ZXIsIG9uRXJyb3IsIGNvbm5lY3RlZF0pO1xuICAgIGNvbnN0IHNpZ25NZXNzYWdlID0gdXNlQ2FsbGJhY2soKHJlcXVlc3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgaWYgKCFjb25uZWN0ZWQpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpKTtcbiAgICAgICAgcmV0dXJuIHlpZWxkIGFkYXB0ZXIuc2lnbk1lc3NhZ2UocmVxdWVzdCk7XG4gICAgfSksIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICAvLyBTZXR1cCBhbmQgdGVhcmRvd24gZXZlbnQgbGlzdGVuZXJzIHdoZW4gdGhlIGFkYXB0ZXIgY2hhbmdlc1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChhZGFwdGVyKSB7XG4gICAgICAgICAgICBhZGFwdGVyLm9uKCdyZWFkeScsIG9uUmVhZHkpO1xuICAgICAgICAgICAgYWRhcHRlci5vbignY29ubmVjdCcsIG9uQ29ubmVjdCk7XG4gICAgICAgICAgICBhZGFwdGVyLm9uKCdkaXNjb25uZWN0Jywgb25EaXNjb25uZWN0KTtcbiAgICAgICAgICAgIGFkYXB0ZXIub24oJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIub2ZmKCdyZWFkeScsIG9uUmVhZHkpO1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIub2ZmKCdjb25uZWN0Jywgb25Db25uZWN0KTtcbiAgICAgICAgICAgICAgICBhZGFwdGVyLm9mZignZGlzY29ubmVjdCcsIG9uRGlzY29ubmVjdCk7XG4gICAgICAgICAgICAgICAgYWRhcHRlci5vZmYoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwgW2FkYXB0ZXIsIG9uUmVhZHksIG9uQ29ubmVjdCwgb25EaXNjb25uZWN0LCBvbkVycm9yXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHtcbiAgICAgICAgICAgIHdhbGxldHMsXG4gICAgICAgICAgICBhdXRvQ29ubmVjdCxcbiAgICAgICAgICAgIHdhbGxldCxcbiAgICAgICAgICAgIGFkYXB0ZXIsXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgcmVhZHksXG4gICAgICAgICAgICBjb25uZWN0ZWQsXG4gICAgICAgICAgICBjb25uZWN0aW5nLFxuICAgICAgICAgICAgZGlzY29ubmVjdGluZyxcbiAgICAgICAgICAgIHNlbGVjdCxcbiAgICAgICAgICAgIGNvbm5lY3QsXG4gICAgICAgICAgICBkaXNjb25uZWN0LFxuICAgICAgICAgICAgaW52b2tlUmVhZCxcbiAgICAgICAgICAgIGludm9rZVJlYWRNdWx0aSxcbiAgICAgICAgICAgIGludm9rZSxcbiAgICAgICAgICAgIGludm9rZU11bHRpLFxuICAgICAgICAgICAgZ2V0TmV0d29ya3MsXG4gICAgICAgICAgICBzaWduTWVzc2FnZSxcbiAgICAgICAgfSB9LCBjaGlsZHJlbikpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtcHJvdmlkZXIuanMubWFwIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBXYWxsZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5leHBvcnQgZnVuY3Rpb24gdXNlV2FsbGV0KCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFdhbGxldENvbnRleHQpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLXdhbGxldC5qcy5tYXAiLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9ob29rcyc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IFdhbGxldEVycm9yIH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UnO1xuZXhwb3J0IGNsYXNzIFdhbGxldE5vdFNlbGVjdGVkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXROb3RTZWxlY3RlZEVycm9yJztcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lcnJvcnMuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNpdHlvZnppb24vbmVvbi1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudGVtaXR0ZXIzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sIm5hbWVzIjpbInVzZVdhbGxldCIsIldhbGxldE5vdENvbm5lY3RlZEVycm9yIiwiV2FsbGV0TXVsdGlCdXR0b24iLCJzYyIsIndhbGxldCIsIkhlYWQiLCJOZW9uIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsIkluZGV4IiwiTmVvQ29udHJhY3RIYXNoIiwiQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2giLCJicmlhbiIsInB1Ymxpc2hJbnZva2UiLCJycGNBZGRyZXNzIiwibmV0d29ya01hZ2ljIiwic2NyaXB0SGFzaCIsIm9wZXJhdGlvbiIsImFyZ3MiLCJhY2NvdW50IiwiY29udHJhY3QiLCJleHBlcmltZW50YWwiLCJTbWFydENvbnRyYWN0IiwidSIsIkhleFN0cmluZyIsImZyb21IZXgiLCJyZXN1bHQiLCJpbnZva2UiLCJlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3RlZCIsImdldE5ldHdvcmtzIiwiYWRkcmVzcyIsInNldEFjY291bnQiLCJ3YWxsZXROZXR3b3JrIiwic2V0V2FsbGV0TmV0d29yayIsInN0YXRlIiwic2V0U3RhdGUiLCJuZW9saW5lIiwic2V0TmVvTGluZSIsIm5lb2xpbmVOMyIsInNldE5lb0xpbmUzIiwiYmxvY2tIZWlnaHQiLCJzZXRCbG9ja0hlaWdodCIsImZldGNoV2FsbGV0TmV0d29yayIsInN0YXR1cyIsImRhdGEiLCJkZWZhdWx0TmV0d29yayIsImVycm9yIiwiaW5pdERhcCIsImdldEFjY291bnQiLCJ0aGVuIiwiZ2V0UHVibGljS2V5IiwicHVibGljS2V5RGF0YSIsInB1YmxpY0tleSIsImdldEJhbGFuY2UiLCJyZXN1bHRzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJiYWxhbmNlcyIsImJhbGFuY2UiLCJzeW1ib2wiLCJhbW91bnQiLCJvbkNsaWNrIiwiZ2V0U2NyaXB0SGFzaEZyb21BZGRyZXNzIiwicGFyYW1zIiwiQ29udHJhY3RQYXJhbSIsImhhc2gxNjAiLCJwbGFjZUJldCIsImluaXROM0RhcGkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJORU9MaW5lTjMiLCJJbml0IiwiaW5pdENvbW1vbkRhcGkiLCJORU9MaW5lIiwiY2F0Y2giLCJlcnIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJFdmVudEVtaXR0ZXIiLCJXaXRuZXNzU2NvcGUiLCJCYXNlV2FsbGV0QWRhcHRlciIsIldhbGxldEVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJXYWxsZXROb3RGb3VuZEVycm9yIiwiYXJndW1lbnRzIiwibmFtZSIsIldhbGxldE5vdEluc3RhbGxlZEVycm9yIiwiV2FsbGV0Tm90UmVhZHlFcnJvciIsIldhbGxldENvbm5lY3Rpb25FcnJvciIsIldhbGxldERpc2Nvbm5lY3RlZEVycm9yIiwiV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yIiwiV2FsbGV0QWNjb3VudEVycm9yIiwiV2FsbGV0VGltZW91dEVycm9yIiwiV2FsbGV0V2luZG93QmxvY2tlZEVycm9yIiwiV2FsbGV0V2luZG93Q2xvc2VkRXJyb3IiLCJXYWxsZXRNZXRob2ROb3RTdXBwb3J0ZWRFcnJvciIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwidmFsdWUiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwiZG9uZSIsImFwcGx5IiwicG9sbCIsImNhbGxiYWNrIiwiaW50ZXJ2YWwiLCJjb3VudCIsInNldFRpbWVvdXQiLCJwb2xsVW50aWxSZWFkeSIsImFkYXB0ZXIiLCJwb2xsSW50ZXJ2YWwiLCJwb2xsQ291bnQiLCJyZWFkeSIsImVtaXQiLCJ3YXJuIiwicnBjIiwid2FpdFR4IiwidHhJZCIsInJlYWRGcmVxdWVuY3kiLCJ0aW1lb3V0Iiwic3RhcnQiLCJEYXRlIiwibm93IiwicnBjQ2xpZW50IiwiUlBDQ2xpZW50IiwidHJhbnNhY3Rpb24iLCJnZXRSYXdUcmFuc2FjdGlvbiIsIlJlYWN0IiwiV2FsbGV0QnV0dG9uIiwibWVtbyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJlbmRJY29uIiwic3RhcnRJY29uIiwic3R5bGUiLCJ0YWJJbmRleCIsImp1c3RpZnlDb250ZW50IiwiY3JlYXRlRWxlbWVudCIsImFzc2lnbiIsInR5cGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VSZWYiLCJXYWxsZXRDb2xsYXBzZSIsImlkIiwiZXhwYW5kZWQiLCJyZWYiLCJpbnN0YW50IiwidHJhbnNpdGlvbiIsIm9wZW5Db2xsYXBzZSIsIm5vZGUiLCJjdXJyZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xvc2VDb2xsYXBzZSIsIm9mZnNldEhlaWdodCIsIm92ZXJmbG93IiwiaGFuZGxlQ29tcGxldGUiLCJoYW5kbGVUcmFuc2l0aW9uRW5kIiwiZXZlbnQiLCJ0YXJnZXQiLCJwcm9wZXJ0eU5hbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicm9sZSIsInVuZGVmaW5lZCIsIl9fcmVzdCIsInMiLCJ0IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJpIiwibGVuZ3RoIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ1c2VNZW1vIiwiV2FsbGV0SWNvbiIsIldhbGxldENvbm5lY3RCdXR0b24iLCJfYSIsInByb3BzIiwiY29ubmVjdCIsImNvbm5lY3RpbmciLCJoYW5kbGVDbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjb250ZW50IiwiV2FsbGV0RGlzY29ubmVjdEJ1dHRvbiIsImRpc2Nvbm5lY3QiLCJkaXNjb25uZWN0aW5nIiwic3JjIiwiaWNvbiIsImFsdCIsIldhbGxldExpc3RJdGVtIiwidXNlV2FsbGV0TW9kYWwiLCJXYWxsZXRNb2RhbEJ1dHRvbiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiV2FsbGV0TW9kYWxDb250ZXh0IiwiV2FsbGV0TW9kYWwiLCJXYWxsZXRNb2RhbFByb3ZpZGVyIiwiUHJvdmlkZXIiLCJjcmVhdGVQb3J0YWwiLCJsb2dvIiwiZmVhdHVyZWRXYWxsZXRzIiwiY29udGFpbmVyIiwid2FsbGV0cyIsInNlbGVjdCIsInNldEV4cGFuZGVkIiwiZmFkZUluIiwic2V0RmFkZUluIiwicG9ydGFsIiwic2V0UG9ydGFsIiwiZmVhdHVyZWQiLCJtb3JlIiwic2xpY2UiLCJoaWRlTW9kYWwiLCJoYW5kbGVDbG9zZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlV2FsbGV0Q2xpY2siLCJ3YWxsZXROYW1lIiwiaGFuZGxlQ29sbGFwc2VDbGljayIsImhhbmRsZVRhYktleSIsImZvY3VzYWJsZUVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImZpcnN0RWxlbWVudCIsImxhc3RFbGVtZW50Iiwic2hpZnRLZXkiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJmb2N1cyIsImhhbmRsZUtleURvd24iLCJrZXkiLCJnZXRDb21wdXRlZFN0eWxlIiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJ3aWR0aCIsImQiLCJtYXAiLCJGcmFnbWVudCIsInhtbG5zIiwib25Nb3VzZURvd24iLCJjb3BpZWQiLCJzZXRDb3BpZWQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJfYWRkcmVzcyIsImNvcHlBZGRyZXNzIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwib3BlbkRyb3Bkb3duIiwiY2xvc2VEcm9wZG93biIsIm9wZW5Nb2RhbCIsImxpc3RlbmVyIiwiY29udGFpbnMiLCJwb2ludGVyRXZlbnRzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJXYWxsZXROb3RTZWxlY3RlZEVycm9yIiwiV2FsbGV0Q29udGV4dCIsIldBTExFVF9JTklUSUFMX1NUQVRFIiwiV2FsbGV0UHJvdmlkZXIiLCJhdXRvQ29ubmVjdCIsIm9uRXJyb3IiLCJfb25FcnJvciIsInNldE5hbWUiLCJzZXRDb25uZWN0aW5nIiwic2V0RGlzY29ubmVjdGluZyIsImlzQ29ubmVjdGluZyIsImlzRGlzY29ubmVjdGluZyIsImlzVW5sb2FkaW5nIiwid2FsbGV0c0J5TmFtZSIsInJlZHVjZSIsIm5ld05hbWUiLCJvblJlYWR5Iiwib25Db25uZWN0Iiwib25EaXNjb25uZWN0Iiwib3BlbiIsInVybCIsImludm9rZVJlYWQiLCJyZXF1ZXN0IiwiaW52b2tlUmVhZE11bHRpIiwiaW52b2tlTXVsdGkiLCJzaWduTWVzc2FnZSIsIm9uIiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==