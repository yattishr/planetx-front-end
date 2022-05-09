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
        let scrpAddress;
        neolineN3.ScriptHashToAddress({
          scriptHash: "0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b"
        }).then(result => {
          const {
            address
          } = result;
          scrpAddress = address;
          console.log("address" + address);
        }).catch(error => {
          const {
            type,
            description,
            data
          } = error;

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
    neolineN3.send({
      fromAddress: address,
      toAddress: brian,
      asset: "NEO",
      amount: "1",
      fee: "0.0001",
      broadcastOverride: false
    }).then(result => {
      console.log("Send transaction success!");
      console.log("Transaction ID: " + result.txid);
      console.log("RPC node URL: " + result.nodeURL);
    });
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
        lineNumber: 226,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
      className: "jsx-1648730631" + " " + "relative container mx-auto p-2 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          href: "/",
          className: "jsx-1648730631",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "jsx-1648730631" + " " + "pt-2 py-6 flex flex-row justify-between items-center ",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
              src: "img/LOGO.png",
              height: "100",
              width: "100",
              alt: "",
              className: "jsx-1648730631"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
              className: "jsx-1648730631" + " " + "lg:text-5xl md:text-5xl text-white font-bold  ",
              children: "Planet X"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + "hidden space-x-6 md:flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
            href: "/games",
            className: "jsx-1648730631" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: "Games"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
            href: "/portfolio",
            className: "jsx-1648730631" + " " + "hover:text-darkGrayishBlue text-white font-bold",
            children: "Portfolio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          id: "menu-btn",
          className: "jsx-1648730631" + " " + "block hamburger md:hidden focus:outline-none focus:text-white",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "jsx-1648730631" + " " + "hamburger-top bg-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "jsx-1648730631" + " " + "hamburger-middle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "jsx-1648730631" + " " + "hamburger-bottom"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "jsx-1648730631" + " " + "md:hidden",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          id: "menu",
          className: "jsx-1648730631" + " " + "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
      className: "jsx-1648730631"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
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
              lineNumber: 277,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "jsx-1648730631" + " " + " md:w-1/2",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
            src: "img/right_image.png",
            alt: "",
            className: "jsx-1648730631"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
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
          lineNumber: 289,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 287,
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
              lineNumber: 301,
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
                    lineNumber: 308,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold  text-white px-6 py-4 text-left",
                    children: "Game"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 314,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Game Names"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 320,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "Date/Time"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 326,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("th", {
                    scope: "col",
                    className: "jsx-1648730631" + " " + "text-sm font-bold text-white px-6 py-4 text-left",
                    children: "24 hours"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 332,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 307,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 306,
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
                      lineNumber: 343,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 342,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/cs.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 346,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 345,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 348,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 351,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: ["400+", connected ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
                      onClick: placeBet,
                      className: "jsx-1648730631" + " " + "btn btn-success",
                      children: ["Place Bet", " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 357,
                      columnNumber: 25
                    }, undefined) : null]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 354,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 341,
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
                      lineNumber: 365,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 364,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/dota.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 368,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 367,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "CS:GO - PGL Major Antwerp"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 370,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 373,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "400+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 376,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 363,
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
                      lineNumber: 382,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 381,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/freefire.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 385,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 384,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Free Fire - World Series"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 387,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Oct 15, 2022 4:00 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 390,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "50+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 393,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 380,
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
                      lineNumber: 399,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 398,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/honor.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 402,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 401,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "KOG - KPL Spring Playoffs"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 404,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Nov 05, 2022 2:30 AM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 407,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "100+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 410,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 397,
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
                      lineNumber: 416,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 415,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "img/legends.png",
                      alt: "",
                      className: "jsx-1648730631"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 419,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 418,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "LOL - EU Masters Spring"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 421,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "Sep 22, 2022 4:30 PM"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 424,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("td", {
                    className: "jsx-1648730631" + " " + "text-sm text-white font-light px-6 py-4 whitespace-nowrap",
                    children: "25+"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 427,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 414,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "1648730631",
      children: ".container.jsx-1648730631{padding:0 2rem;}.main.jsx-1648730631{min-height:100vh;padding:4rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-1648730631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;padding:2rem 0;border-top:1px solid #eaeaea;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.footer.jsx-1648730631 a.jsx-1648730631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}.title.jsx-1648730631 a.jsx-1648730631{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1648730631 a.jsx-1648730631:hover,.title.jsx-1648730631 a.jsx-1648730631:focus,.title.jsx-1648730631 a.jsx-1648730631:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-1648730631{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-1648730631,.description.jsx-1648730631{text-align:center;}.description.jsx-1648730631{margin:4rem 0;line-height:1.5;font-size:1.5rem;}.code.jsx-1648730631{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-1648730631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;}.card.jsx-1648730631{margin:1rem;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;max-width:300px;}.card.jsx-1648730631:hover,.card.jsx-1648730631:focus,.card.jsx-1648730631:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1648730631 h2.jsx-1648730631{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1648730631 p.jsx-1648730631{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-1648730631{height:1em;margin-left:0.5rem;}@media (max-width:600px){.grid.jsx-1648730631{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.wallet-buttons.jsx-1648730631{padding-top:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2ViYXRhbmUgUmFwaGVsYVxcTXVzaWNcXHdlYjNcXG5lby1ibG9ja2NoYWluLWJldHhcXHBhZ2VzXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcWJrQixBQUcwQixBQUlFLEFBVUosQUFTQSxBQU9DLEFBT1ksQUFJakIsQUFPUyxBQUlKLEFBTUssQUFTTixBQVFELEFBY0UsQUFLSSxBQUtULEFBTUUsQUFNRSxBQU1JLFNBM0VBLEFBMERDLEVBTUMsQUFNSyxDQXBDVCxFQTdDTSxBQXNCTCxBQXFDSyxDQXpGdkIsRUFJaUIsQUFpSEYsQ0FyRWYsQUE4Q21CLENBcENDLE9BaEJILENBa0NDLEFBd0JBLEdBL0NDLEFBcURuQixFQXJHUyxHQXFGVCxBQUtBLEVBcENrQixJQWhCbEIsRUFrQ2dCLEFBd0JoQixJQS9DQSxNQU1tQixJQWtCSSxHQXpDdkIsSUFOQSxDQXpCZSxLQXdEdUQsSUFoRDdELEFBU2dCLEFBNENKLGVBNkNuQixFQU1zQixnQkF2R1AsQUFnRVUsZUEvREksVUFnRVYsT0F6RUcsWUFVQyxBQWdFOEIsZ0JBYjlCLEVBbURkLElBL0ZVLEtBZ0dyQixhQXpEQSwwQkF2RHlCLGlDQVVKLGFBZ0VILEdBekRKLEFBNENHLGFBY2pCLHFDQTFFcUIsT0E2REgsY0E1Q2xCLEVBNkNBLElBcERBLGtFQVRBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2ViYXRhbmUgUmFwaGVsYVxcTXVzaWNcXHdlYjNcXG5lby1ibG9ja2NoYWluLWJldHhcXHBhZ2VzXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgd2FpdFR4LFxyXG4gIFdpdG5lc3NTY29wZSxcclxuICBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcixcclxufSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBXYWxsZXREaXNjb25uZWN0QnV0dG9uLFxyXG4gIFdhbGxldE11bHRpQnV0dG9uLFxyXG59IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcclxuaW1wb3J0IHsgbmVvbGluZU4zIH0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZW9saW5lXCI7XHJcbmltcG9ydCB7IHUsIHNjLCB3YWxsZXQgfSBmcm9tIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBOZW9uIGZyb20gXCJAY2l0eW9memlvbi9uZW9uLWpzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBuZW8zRGFwaSBmcm9tIFwibmVvMy1kYXBpXCI7XHJcblxyXG5jb25zdCBJbmRleDogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgTmVvQ29udHJhY3RIYXNoID0gXCIweGVmNDA3M2EwZjJiMzA1YTM4ZWM0MDUwZTRkM2QyOGJjNDBlYTYzZjVcIjtcclxuICBjb25zdCBCZXR0aW5nTWFuYWdlckNvbnRyYWN0SGFzaCA9XHJcbiAgICBcIjB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YlwiO1xyXG5cclxuICBjb25zdCBicmlhbiA9IFwiTllLTldXbUFyakhEN3VYRnB1R2VESDZ1Y1lHcHNmMnM2WVwiO1xyXG5cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgY29uc3QgcHVibGlzaEludm9rZSA9IGFzeW5jIChcclxuICAgIHJwY0FkZHJlc3MsXHJcbiAgICBuZXR3b3JrTWFnaWMsXHJcbiAgICBzY3JpcHRIYXNoLFxyXG4gICAgb3BlcmF0aW9uLFxyXG4gICAgYXJncyxcclxuICAgIGFjY291bnRcclxuICApID0+IHtcclxuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IE5lb24uZXhwZXJpbWVudGFsLlNtYXJ0Q29udHJhY3QoXHJcbiAgICAgIE5lb24udS5IZXhTdHJpbmcuZnJvbUhleChzY3JpcHRIYXNoKSxcclxuICAgICAge1xyXG4gICAgICAgIG5ldHdvcmtNYWdpYyxcclxuICAgICAgICBycGNBZGRyZXNzLFxyXG4gICAgICAgIGFjY291bnQsXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0Lmludm9rZShvcGVyYXRpb24sIGFyZ3MpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgY29ubmVjdGVkLCBnZXROZXR3b3JrcywgYWRkcmVzcywgaW52b2tlIH0gPSB1c2VXYWxsZXQoKTtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW3dhbGxldE5ldHdvcmssIHNldFdhbGxldE5ldHdvcmtdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbmVvbGluZSwgc2V0TmVvTGluZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtuZW9saW5lTjMsIHNldE5lb0xpbmUzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Jsb2NrSGVpZ2h0LCBzZXRCbG9ja0hlaWdodF0gPSB1c2VTdGF0ZShcIjc4MTE1XCIpO1xyXG4gIGNvbnN0IGZldGNoV2FsbGV0TmV0d29yayA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldE5ldHdvcmtzKCk7XHJcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICAgIHNldFdhbGxldE5ldHdvcmsocmVzdWx0LmRhdGE/LmRlZmF1bHROZXR3b3JrIHx8IG51bGwpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9LCBbZ2V0TmV0d29ya3NdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXREYXAoKTtcclxuXHJcbiAgICAvLyBiYWxhbmNlc1xyXG5cclxuICAgIGlmIChjb25uZWN0ZWQpIHtcclxuICAgICAgZmV0Y2hXYWxsZXROZXR3b3JrKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCA9PiBcIiwgbmVvbGluZU4zKTtcclxuXHJcbiAgICAgIGlmIChuZW9saW5lTjMpIHtcclxuICAgICAgICBuZW9saW5lTjMuZ2V0QWNjb3VudCgpLnRoZW4oKGFjY291bnQpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBmb3VuZCBjb25uZXRlZCA9PiBcIiwgYWNjb3VudCk7XHJcblxyXG4gICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbmVvbGluZU4zLmdldFB1YmxpY0tleSgpLnRoZW4oKHB1YmxpY0tleURhdGEpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgYWRkcmVzcywgcHVibGljS2V5IH0gPSBwdWJsaWNLZXlEYXRhO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBhZGRyZXNzOiBcIiArIGFkZHJlc3MpO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBwdWJsaWMga2V5OiBcIiArIHB1YmxpY0tleSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHNjcnBBZGRyZXNzO1xyXG4gICAgICAgIG5lb2xpbmVOM1xyXG4gICAgICAgICAgLlNjcmlwdEhhc2hUb0FkZHJlc3Moe1xyXG4gICAgICAgICAgICBzY3JpcHRIYXNoOiBcIjB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YlwiLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHNjcnBBZGRyZXNzID0gYWRkcmVzcztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRyZXNzXCIgKyBhZGRyZXNzKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgZGVzY3JpcHRpb24sIGRhdGEgfSA9IGVycm9yO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgICBjYXNlIFwiTk9fUFJPVklERVJcIjpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gcHJvdmlkZXIgYXZhaWxhYmxlLlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgXCJNQUxGT1JNRURfSU5QVVRcIjpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGNoZWNrIHlvdXIgaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gTm90IGFuIGV4cGVjdGVkIGVycm9yIG9iamVjdC4gIEp1c3Qgd3JpdGUgdGhlIGVycm9yIHRvIHRoZSBjb25zb2xlLlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHNlbmQgZ2FzIHRva2VuXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFdhbGxldE5ldHdvcmsobnVsbCk7XHJcbiAgICB9XHJcbiAgfSwgW2Nvbm5lY3RlZCwgZmV0Y2hXYWxsZXROZXR3b3JrXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIWFkZHJlc3MgfHwgIWNvbm5lY3RlZCkgdGhyb3cgbmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCk7XHJcbiAgICBjb25zdCBhY2NvdW50ID0gd2FsbGV0LmdldFNjcmlwdEhhc2hGcm9tQWRkcmVzcyhhZGRyZXNzKTtcclxuICAgIC8vIENvbnN0cnVjdCB0aGUgcmVxdWVzdCBhbmQgaW52b2tlIGl0XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCBpbnZva2Uoe1xyXG4gICAgLy8gXHRzY3JpcHRIYXNoOiAnMHg3YTA2ZTQwY2QwOGMwYTg4NzdjMmQ2ZDBhNDk3NGY3ZGJlOWIyYjdiJyxcclxuICAgIC8vIFx0b3BlcmF0aW9uOiAnZ2V0TnVtYmVyJyxcclxuXHJcbiAgICAvLyBcdHNpZ25lcnM6IFtcclxuICAgIC8vIFx0XHR7XHJcbiAgICAvLyBcdFx0XHRhY2NvdW50OiB3YWxsZXQuZ2V0U2NyaXB0SGFzaEZyb21BZGRyZXNzKGFkZHJlc3MpLFxyXG4gICAgLy8gXHRcdFx0Ly8gQHRzLWlnbm9yZVxyXG4gICAgLy8gXHRcdFx0c2NvcGU6IFdpdG5lc3NTY29wZS5DYWxsZWRCeUVudHJ5LFxyXG4gICAgLy8gXHRcdH0sXHJcbiAgICAvLyBcdF0sXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyAvLyBPcHRpb25hbDogV2FpdCBmb3IgdGhlIHRyYW5zYWN0aW9uIHRvIGJlIGNvbmZpcm1lZCBvbmNoYWluXHJcbiAgICAvLyBpZiAocmVzdWx0LmRhdGE/LnR4SWQpIHtcclxuICAgIC8vIFx0YXdhaXQgd2FpdFR4KCdORVRXT1JLX1JQQ19BRERSRVNTX0hFUkUnLCByZXN1bHQuZGF0YT8udHhJZCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgcnBjQWRkcmVzcyA9IFwiaHR0cHM6Ly90ZXN0bmV0MS5uZW8uY296LmlvOjQ0M1wiO1xyXG4gICAgY29uc3QgbmV0d29ya01hZ2ljID0gODc3OTMzMzkwO1xyXG4gICAgY29uc3QgcGFyYW1zID0gW1xyXG4gICAgICBzYy5Db250cmFjdFBhcmFtLmhhc2gxNjAoXCJOVDRRdFVZTGdodlN1dUIyeUNTNkNnUWs5TmYxbmtEazJxXCIpLFxyXG4gICAgICBzYy5Db250cmFjdFBhcmFtLmhhc2gxNjAoQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2gpLFxyXG4gICAgICAyLFxyXG4gICAgICB7IGFtb3VudDogMSB9LFxyXG4gICAgXTtcclxuICAgIGF3YWl0IHB1Ymxpc2hJbnZva2UoXHJcbiAgICAgIHJwY0FkZHJlc3MsXHJcbiAgICAgIG5ldHdvcmtNYWdpYyxcclxuICAgICAgTmVvQ29udHJhY3RIYXNoLFxyXG4gICAgICBcInRyYW5zZmVyXCIsXHJcbiAgICAgIFtdXHJcbiAgICApO1xyXG4gIH0sIFthZGRyZXNzLCBjb25uZWN0ZWQsIGludm9rZV0pO1xyXG5cclxuICBjb25zdCBwbGFjZUJldCA9IGFzeW5jICgpID0+IHtcclxuICAgIG5lb2xpbmVOM1xyXG4gICAgICAuc2VuZCh7XHJcbiAgICAgICAgZnJvbUFkZHJlc3M6IGFkZHJlc3MsXHJcbiAgICAgICAgdG9BZGRyZXNzOiBicmlhbixcclxuICAgICAgICBhc3NldDogXCJORU9cIixcclxuICAgICAgICBhbW91bnQ6IFwiMVwiLFxyXG4gICAgICAgIGZlZTogXCIwLjAwMDFcIixcclxuICAgICAgICBicm9hZGNhc3RPdmVycmlkZTogZmFsc2UsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNlbmQgdHJhbnNhY3Rpb24gc3VjY2VzcyFcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUcmFuc2FjdGlvbiBJRDogXCIgKyByZXN1bHQudHhpZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSUEMgbm9kZSBVUkw6IFwiICsgcmVzdWx0Lm5vZGVVUkwpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbml0RGFwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgaW5pdE4zRGFwaSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJORU9MaW5lLk4zLkVWRU5ULlJFQURZXCIsICgpID0+IHtcclxuICAgICAgICBzZXROZW9MaW5lMyhuZXcgTkVPTGluZU4zLkluaXQoKSk7XHJcbiAgICAgICAgaWYgKG5lb2xpbmVOMykge1xyXG4gICAgICAgICAgcmVzb2x2ZShuZW9saW5lTjMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QoXCJOMyBkQVBJIG1ldGhvZCBmYWlsZWQgdG8gbG9hZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGluaXRDb21tb25EYXBpID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIk5FT0xpbmUuTkVPLkVWRU5ULlJFQURZXCIsICgpID0+IHtcclxuICAgICAgICBzZXROZW9MaW5lKG5ldyBORU9MaW5lLkluaXQoKSk7XHJcbiAgICAgICAgaWYgKG5lb2xpbmUpIHtcclxuICAgICAgICAgIHJlc29sdmUobmVvbGluZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChcImNvbW1vbiBkQVBJIG1ldGhvZCBmYWlsZWQgdG8gbG9hZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGluaXRDb21tb25EYXBpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBjb21tb24gZEFQSSBtZXRob2QgaXMgbG9hZGVkLlwiKTtcclxuICAgICAgICByZXR1cm4gaW5pdE4zRGFwaTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIE4zIGRBUEkgbWV0aG9kIGlzIGxvYWRlZC5cIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL21haW4uY3NzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGNvbnRhaW5lciBteC1hdXRvIHAtMiBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yIHB5LTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL0xPR08ucG5nXCIgaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsZzp0ZXh0LTV4bCBtZDp0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCAgXCI+XHJcbiAgICAgICAgICAgICAgICBQbGFuZXQgWFxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNwYWNlLXgtNiBtZDpmbGV4XCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9nYW1lc1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1kYXJrR3JheWlzaEJsdWUgdGV4dC13aGl0ZSBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR2FtZXNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvcG9ydGZvbGlvXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWRhcmtHcmF5aXNoQmx1ZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQb3J0Zm9saW9cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBpZD1cIm1lbnUtYnRuXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgaGFtYnVyZ2VyIG1kOmhpZGRlbiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci10b3AgYmctd2hpdGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1taWRkbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3R0b21cIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgaWQ9XCJtZW51XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleC1jb2wgaXRlbXMtY2VudGVyIGhpZGRlbiBzZWxmLWVuZCBweS04IG10LTEwIHNwYWNlLXktNiBmb250LWJvbGQgYmctd2hpdGUgc206dy1hdXRvIHNtOnNlbGYtY2VudGVyIGxlZnQtNiByaWdodC02IGRyb3Atc2hhZG93LW1kXCJcclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICA8c2VjdGlvbj48L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiaGVyb1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wtcmV2ZXJzZSBpdGVtcy1jZW50ZXIgcHgtNiBteC1hdXRvIG10LTEwIHNwYWNlLXktMCBtZDpzcGFjZS15LTAgbWQ6ZmxleC1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzIgZmxleCBmbGV4LWNvbCBzcGFjZS15LTEyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvTE9HTy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1kOnctMS8yXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3JpZ2h0X2ltYWdlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJmZWF0dXJlc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyICBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IG14LWF1dG8gbXQtMiAgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93IG1pZGRsZVwiPlxyXG4gICAgICAgICAgPFdhbGxldE11bHRpQnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEQzI5ODRcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgcHgtNSBteC1hdXRvIG10LTMyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtMjQgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC02XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLXctZnVsbCBcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBzdWJwaXhlbC1hbnRpYWxpYXNlZCBweS00IHRyYWNraW5nLXdpZGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgVHJlbmRpbmdcclxuICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGJvcmRlciBib3JkZXItc2xhdGUtODAwXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYmctWyNCMjI3Q0FdIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCAgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSYW5rXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkICB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEdhbWVcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBHYW1lIE5hbWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRGF0ZS9UaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMjQgaG91cnNcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy1bIzE1MTc0QV0gICBcIj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9jcy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ1M6R08gLSBQR0wgTWFqb3IgQW50d2VycFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDQwMCtcclxuICAgICAgICAgICAgICAgICAgICAgIHtjb25uZWN0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cGxhY2VCZXR9IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBsYWNlIEJldHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdXAucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2RvdGEucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENTOkdPIC0gUEdMIE1ham9yIEFudHdlcnBcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNlcCAyMiwgMjAyMiA0OjMwIFBNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA0MDArXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Rvd24ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2ZyZWVmaXJlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBGcmVlIEZpcmUgLSBXb3JsZCBTZXJpZXNcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE9jdCAxNSwgMjAyMiA0OjAwIFBNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA1MCtcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZG93bi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvaG9ub3IucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEtPRyAtIEtQTCBTcHJpbmcgUGxheW9mZnNcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE5vdiAwNSwgMjAyMiAyOjMwIEFNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAxMDArXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9sZWdlbmRzLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMT0wgLSBFVSBNYXN0ZXJzIFNwcmluZ1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2VwIDIyLCAyMDIyIDQ6MzAgUE1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDI1K1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYWluIHtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgcGFkZGluZzogNHJlbSAwO1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvb3RlciBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSBhOmhvdmVyLFxyXG4gICAgICAgIC50aXRsZSBhOmZvY3VzLFxyXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSxcclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIG1hcmdpbjogNHJlbSAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvZGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxyXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQ6aG92ZXIsXHJcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXHJcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgaDIge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud2FsbGV0LWJ1dHRvbnMge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGdhcDogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Sebatane Raphela\\\\Music\\\\web3\\\\neo-blockchain-betx\\\\pages\\\\index.tsx */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UvbGliL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UvbGliL2luZGV4LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZS9saWIvcG9sbC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLWJhc2UvbGliL3dhaXQuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtY29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtY29ubmVjdC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtZGlzY29ubmVjdC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtaWNvbi5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9jb21wb25lbnRzL3dhbGxldC1saXN0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC11aS9saWIvY29tcG9uZW50cy93YWxsZXQtbW9kYWwtYnV0dG9uLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LW1vZGFsLXByb3ZpZGVyLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LW1vZGFsLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2NvbXBvbmVudHMvd2FsbGV0LW11bHRpLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpL2xpYi9ob29rcy91c2Utd2FsbGV0LW1vZGFsLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QtdWkvbGliL2luZGV4LmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QvbGliL2NvbXBvbmVudHMvd2FsbGV0LXByb3ZpZGVyLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QvbGliL2hvb2tzL3VzZS13YWxsZXQuanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdC9saWIvdXRpbHMvZXJyb3JzLmpzIiwid2VicGFjazovL0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1uZXh0anMtc3RhcnRlci9leHRlcm5hbCBcIkBjaXR5b2Z6aW9uL25lb24tanNcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJldmVudGVtaXR0ZXIzXCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLW5leHRqcy1zdGFydGVyL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9AcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIHdhaXRUeCxcclxuICBXaXRuZXNzU2NvcGUsXHJcbiAgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IsXHJcbn0gZnJvbSBcIkByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlXCI7XHJcbmltcG9ydCB7XHJcbiAgV2FsbGV0RGlzY29ubmVjdEJ1dHRvbixcclxuICBXYWxsZXRNdWx0aUJ1dHRvbixcclxufSBmcm9tIFwiQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0LXVpXCI7XHJcbmltcG9ydCB7IG5lb2xpbmVOMyB9IGZyb20gXCJAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItbmVvbGluZVwiO1xyXG5pbXBvcnQgeyB1LCBzYywgd2FsbGV0IH0gZnJvbSBcIkBjaXR5b2Z6aW9uL25lb24tanNcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTmVvbiBmcm9tIFwiQGNpdHlvZnppb24vbmVvbi1qc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbmVvM0RhcGkgZnJvbSBcIm5lbzMtZGFwaVwiO1xyXG5cclxuY29uc3QgSW5kZXg6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IE5lb0NvbnRyYWN0SGFzaCA9IFwiMHhlZjQwNzNhMGYyYjMwNWEzOGVjNDA1MGU0ZDNkMjhiYzQwZWE2M2Y1XCI7XHJcbiAgY29uc3QgQmV0dGluZ01hbmFnZXJDb250cmFjdEhhc2ggPVxyXG4gICAgXCIweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2JcIjtcclxuXHJcbiAgY29uc3QgYnJpYW4gPSBcIk5ZS05XV21BcmpIRDd1WEZwdUdlREg2dWNZR3BzZjJzNllcIjtcclxuXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGNvbnN0IHB1Ymxpc2hJbnZva2UgPSBhc3luYyAoXHJcbiAgICBycGNBZGRyZXNzLFxyXG4gICAgbmV0d29ya01hZ2ljLFxyXG4gICAgc2NyaXB0SGFzaCxcclxuICAgIG9wZXJhdGlvbixcclxuICAgIGFyZ3MsXHJcbiAgICBhY2NvdW50XHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBOZW9uLmV4cGVyaW1lbnRhbC5TbWFydENvbnRyYWN0KFxyXG4gICAgICBOZW9uLnUuSGV4U3RyaW5nLmZyb21IZXgoc2NyaXB0SGFzaCksXHJcbiAgICAgIHtcclxuICAgICAgICBuZXR3b3JrTWFnaWMsXHJcbiAgICAgICAgcnBjQWRkcmVzcyxcclxuICAgICAgICBhY2NvdW50LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGxldCByZXN1bHQ7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5pbnZva2Uob3BlcmF0aW9uLCBhcmdzKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9O1xyXG5cclxuICBjb25zdCB7IGNvbm5lY3RlZCwgZ2V0TmV0d29ya3MsIGFkZHJlc3MsIGludm9rZSB9ID0gdXNlV2FsbGV0KCk7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IFt3YWxsZXROZXR3b3JrLCBzZXRXYWxsZXROZXR3b3JrXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW25lb2xpbmUsIHNldE5lb0xpbmVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbmVvbGluZU4zLCBzZXROZW9MaW5lM10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtibG9ja0hlaWdodCwgc2V0QmxvY2tIZWlnaHRdID0gdXNlU3RhdGUoXCI3ODExNVwiKTtcclxuICBjb25zdCBmZXRjaFdhbGxldE5ldHdvcmsgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXROZXR3b3JrcygpO1xyXG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICBzZXRXYWxsZXROZXR3b3JrKHJlc3VsdC5kYXRhPy5kZWZhdWx0TmV0d29yayB8fCBudWxsKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW2dldE5ldHdvcmtzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbml0RGFwKCk7XHJcblxyXG4gICAgLy8gYmFsYW5jZXNcclxuXHJcbiAgICBpZiAoY29ubmVjdGVkKSB7XHJcbiAgICAgIGZldGNoV2FsbGV0TmV0d29yaygpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgPT4gXCIsIG5lb2xpbmVOMyk7XHJcblxyXG4gICAgICBpZiAobmVvbGluZU4zKSB7XHJcbiAgICAgICAgbmVvbGluZU4zLmdldEFjY291bnQoKS50aGVuKChhY2NvdW50KSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgZm91bmQgY29ubmV0ZWQgPT4gXCIsIGFjY291bnQpO1xyXG5cclxuICAgICAgICAgIHNldEFjY291bnQoYWNjb3VudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG5lb2xpbmVOMy5nZXRQdWJsaWNLZXkoKS50aGVuKChwdWJsaWNLZXlEYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IGFkZHJlc3MsIHB1YmxpY0tleSB9ID0gcHVibGljS2V5RGF0YTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgYWRkcmVzczogXCIgKyBhZGRyZXNzKTtcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjY291bnQgcHVibGljIGtleTogXCIgKyBwdWJsaWNLZXkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBzY3JwQWRkcmVzcztcclxuICAgICAgICBuZW9saW5lTjNcclxuICAgICAgICAgIC5TY3JpcHRIYXNoVG9BZGRyZXNzKHtcclxuICAgICAgICAgICAgc2NyaXB0SGFzaDogXCIweDdhMDZlNDBjZDA4YzBhODg3N2MyZDZkMGE0OTc0ZjdkYmU5YjJiN2JcIixcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICBzY3JwQWRkcmVzcyA9IGFkZHJlc3M7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkcmVzc1wiICsgYWRkcmVzcyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IHR5cGUsIGRlc2NyaXB0aW9uLCBkYXRhIH0gPSBlcnJvcjtcclxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSBcIk5PX1BST1ZJREVSXCI6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHByb3ZpZGVyIGF2YWlsYWJsZS5cIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIFwiTUFMRk9STUVEX0lOUFVUXCI6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBjaGVjayB5b3VyIGlucHV0XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIE5vdCBhbiBleHBlY3RlZCBlcnJvciBvYmplY3QuICBKdXN0IHdyaXRlIHRoZSBlcnJvciB0byB0aGUgY29uc29sZS5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzZW5kIGdhcyB0b2tlblxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRXYWxsZXROZXR3b3JrKG51bGwpO1xyXG4gICAgfVxyXG4gIH0sIFtjb25uZWN0ZWQsIGZldGNoV2FsbGV0TmV0d29ya10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFhZGRyZXNzIHx8ICFjb25uZWN0ZWQpIHRocm93IG5ldyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvcigpO1xyXG4gICAgY29uc3QgYWNjb3VudCA9IHdhbGxldC5nZXRTY3JpcHRIYXNoRnJvbUFkZHJlc3MoYWRkcmVzcyk7XHJcbiAgICAvLyBDb25zdHJ1Y3QgdGhlIHJlcXVlc3QgYW5kIGludm9rZSBpdFxyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgaW52b2tlKHtcclxuICAgIC8vIFx0c2NyaXB0SGFzaDogJzB4N2EwNmU0MGNkMDhjMGE4ODc3YzJkNmQwYTQ5NzRmN2RiZTliMmI3YicsXHJcbiAgICAvLyBcdG9wZXJhdGlvbjogJ2dldE51bWJlcicsXHJcblxyXG4gICAgLy8gXHRzaWduZXJzOiBbXHJcbiAgICAvLyBcdFx0e1xyXG4gICAgLy8gXHRcdFx0YWNjb3VudDogd2FsbGV0LmdldFNjcmlwdEhhc2hGcm9tQWRkcmVzcyhhZGRyZXNzKSxcclxuICAgIC8vIFx0XHRcdC8vIEB0cy1pZ25vcmVcclxuICAgIC8vIFx0XHRcdHNjb3BlOiBXaXRuZXNzU2NvcGUuQ2FsbGVkQnlFbnRyeSxcclxuICAgIC8vIFx0XHR9LFxyXG4gICAgLy8gXHRdLFxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gLy8gT3B0aW9uYWw6IFdhaXQgZm9yIHRoZSB0cmFuc2FjdGlvbiB0byBiZSBjb25maXJtZWQgb25jaGFpblxyXG4gICAgLy8gaWYgKHJlc3VsdC5kYXRhPy50eElkKSB7XHJcbiAgICAvLyBcdGF3YWl0IHdhaXRUeCgnTkVUV09SS19SUENfQUREUkVTU19IRVJFJywgcmVzdWx0LmRhdGE/LnR4SWQpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IHJwY0FkZHJlc3MgPSBcImh0dHBzOi8vdGVzdG5ldDEubmVvLmNvei5pbzo0NDNcIjtcclxuICAgIGNvbnN0IG5ldHdvcmtNYWdpYyA9IDg3NzkzMzM5MDtcclxuICAgIGNvbnN0IHBhcmFtcyA9IFtcclxuICAgICAgc2MuQ29udHJhY3RQYXJhbS5oYXNoMTYwKFwiTlQ0UXRVWUxnaHZTdXVCMnlDUzZDZ1FrOU5mMW5rRGsycVwiKSxcclxuICAgICAgc2MuQ29udHJhY3RQYXJhbS5oYXNoMTYwKEJldHRpbmdNYW5hZ2VyQ29udHJhY3RIYXNoKSxcclxuICAgICAgMixcclxuICAgICAgeyBhbW91bnQ6IDEgfSxcclxuICAgIF07XHJcbiAgICBhd2FpdCBwdWJsaXNoSW52b2tlKFxyXG4gICAgICBycGNBZGRyZXNzLFxyXG4gICAgICBuZXR3b3JrTWFnaWMsXHJcbiAgICAgIE5lb0NvbnRyYWN0SGFzaCxcclxuICAgICAgXCJ0cmFuc2ZlclwiLFxyXG4gICAgICBbXVxyXG4gICAgKTtcclxuICB9LCBbYWRkcmVzcywgY29ubmVjdGVkLCBpbnZva2VdKTtcclxuXHJcbiAgY29uc3QgcGxhY2VCZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBuZW9saW5lTjNcclxuICAgICAgLnNlbmQoe1xyXG4gICAgICAgIGZyb21BZGRyZXNzOiBhZGRyZXNzLFxyXG4gICAgICAgIHRvQWRkcmVzczogYnJpYW4sXHJcbiAgICAgICAgYXNzZXQ6IFwiTkVPXCIsXHJcbiAgICAgICAgYW1vdW50OiBcIjFcIixcclxuICAgICAgICBmZWU6IFwiMC4wMDAxXCIsXHJcbiAgICAgICAgYnJvYWRjYXN0T3ZlcnJpZGU6IGZhbHNlLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW5kIHRyYW5zYWN0aW9uIHN1Y2Nlc3MhXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHJhbnNhY3Rpb24gSUQ6IFwiICsgcmVzdWx0LnR4aWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUlBDIG5vZGUgVVJMOiBcIiArIHJlc3VsdC5ub2RlVVJMKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5pdERhcCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGluaXROM0RhcGkgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiTkVPTGluZS5OMy5FVkVOVC5SRUFEWVwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0TmVvTGluZTMobmV3IE5FT0xpbmVOMy5Jbml0KCkpO1xyXG4gICAgICAgIGlmIChuZW9saW5lTjMpIHtcclxuICAgICAgICAgIHJlc29sdmUobmVvbGluZU4zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KFwiTjMgZEFQSSBtZXRob2QgZmFpbGVkIHRvIGxvYWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBpbml0Q29tbW9uRGFwaSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJORU9MaW5lLk5FTy5FVkVOVC5SRUFEWVwiLCAoKSA9PiB7XHJcbiAgICAgICAgc2V0TmVvTGluZShuZXcgTkVPTGluZS5Jbml0KCkpO1xyXG4gICAgICAgIGlmIChuZW9saW5lKSB7XHJcbiAgICAgICAgICByZXNvbHZlKG5lb2xpbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QoXCJjb21tb24gZEFQSSBtZXRob2QgZmFpbGVkIHRvIGxvYWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbml0Q29tbW9uRGFwaVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgY29tbW9uIGRBUEkgbWV0aG9kIGlzIGxvYWRlZC5cIik7XHJcbiAgICAgICAgcmV0dXJuIGluaXROM0RhcGk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBOMyBkQVBJIG1ldGhvZCBpcyBsb2FkZWQuXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9tYWluLmNzc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBjb250YWluZXIgbXgtYXV0byBwLTIgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBweS02IGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9MT0dPLnBuZ1wiIGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibGc6dGV4dC01eGwgbWQ6dGV4dC01eGwgdGV4dC13aGl0ZSBmb250LWJvbGQgIFwiPlxyXG4gICAgICAgICAgICAgICAgUGxhbmV0IFhcclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzcGFjZS14LTYgbWQ6ZmxleFwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvZ2FtZXNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtZGFya0dyYXlpc2hCbHVlIHRleHQtd2hpdGUgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEdhbWVzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiL3BvcnRmb2xpb1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1kYXJrR3JheWlzaEJsdWUgdGV4dC13aGl0ZSBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUG9ydGZvbGlvXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgaWQ9XCJtZW51LWJ0blwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGhhbWJ1cmdlciBtZDpoaWRkZW4gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItdG9wIGJnLXdoaXRlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItbWlkZGxlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItYm90dG9tXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGlkPVwibWVudVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoaWRkZW4gc2VsZi1lbmQgcHktOCBtdC0xMCBzcGFjZS15LTYgZm9udC1ib2xkIGJnLXdoaXRlIHNtOnctYXV0byBzbTpzZWxmLWNlbnRlciBsZWZ0LTYgcmlnaHQtNiBkcm9wLXNoYWRvdy1tZFwiXHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPHNlY3Rpb24+PC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cImhlcm9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtY29sLXJldmVyc2UgaXRlbXMtY2VudGVyIHB4LTYgbXgtYXV0byBtdC0xMCBzcGFjZS15LTAgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMS8yIGZsZXggZmxleC1jb2wgc3BhY2UteS0xMlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL0xPR08ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtZDp3LTEvMlwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImltZy9yaWdodF9pbWFnZS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiZmVhdHVyZXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBteC1hdXRvIG10LTIgIG1kOnNwYWNlLXktMCBtZDpmbGV4LXJvdyBtaWRkbGVcIj5cclxuICAgICAgICAgIDxXYWxsZXRNdWx0aUJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjREMyOTg0XCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIHB4LTUgbXgtYXV0byBtdC0zMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG10LTI0IG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTE2IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi13LWZ1bGwgXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC01eGwgdGV4dC13aGl0ZSBmb250LWJvbGQgc3VicGl4ZWwtYW50aWFsaWFzZWQgcHktNCB0cmFja2luZy13aWRlc3RcIj5cclxuICAgICAgICAgICAgICAgIFRyZW5kaW5nXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJvcmRlci1iIGJnLVsjQjIyN0NBXSBcIj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUmFua1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCAgdGV4dC13aGl0ZSBweC02IHB5LTQgdGV4dC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBHYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgcHgtNiBweS00IHRleHQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgR2FtZSBOYW1lc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIERhdGUvVGltZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTYgcHktNCB0ZXh0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDI0IGhvdXJzXHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYmctWyMxNTE3NEFdICAgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy91cC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvY3MucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENTOkdPIC0gUEdMIE1ham9yIEFudHdlcnBcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNlcCAyMiwgMjAyMiA0OjMwIFBNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA0MDArXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Y29ubmVjdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3BsYWNlQmV0fSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBQbGFjZSBCZXR7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3VwLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3RhLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDUzpHTyAtIFBHTCBNYWpvciBBbnR3ZXJwXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZXAgMjIsIDIwMjIgNDozMCBQTVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgNDAwK1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9kb3duLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9mcmVlZmlyZS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRnJlZSBGaXJlIC0gV29ybGQgU2VyaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBPY3QgMTUsIDIwMjIgNDowMCBQTVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgNTArXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlci1iXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2Rvd24ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2hvbm9yLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBLT0cgLSBLUEwgU3ByaW5nIFBsYXlvZmZzXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBOb3YgMDUsIDIwMjIgMjozMCBBTVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgMTAwK1xyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXItYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXAgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy91cC5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvbGVnZW5kcy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC13aGl0ZSBmb250LWxpZ2h0IHB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTE9MIC0gRVUgTWFzdGVycyBTcHJpbmdcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtd2hpdGUgZm9udC1saWdodCBweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNlcCAyMiwgMjAyMiA0OjMwIFBNXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbGlnaHQgcHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAyNStcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWFpbiB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIHBhZGRpbmc6IDRyZW0gMDtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXIgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYTpob3ZlcixcclxuICAgICAgICAudGl0bGUgYTpmb2N1cyxcclxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUsXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBtYXJnaW46IDRyZW0gMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2RlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcclxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkOmhvdmVyLFxyXG4gICAgICAgIC5jYXJkOmZvY3VzLFxyXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIGgyIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndhbGxldC1idXR0b25zIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBnYXA6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRlbWl0dGVyMyc7XG5leHBvcnQgeyBFdmVudEVtaXR0ZXIgfTtcbmV4cG9ydCB2YXIgV2l0bmVzc1Njb3BlO1xuKGZ1bmN0aW9uIChXaXRuZXNzU2NvcGUpIHtcbiAgICBXaXRuZXNzU2NvcGVbV2l0bmVzc1Njb3BlW1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XG4gICAgV2l0bmVzc1Njb3BlW1dpdG5lc3NTY29wZVtcIkNhbGxlZEJ5RW50cnlcIl0gPSAxXSA9IFwiQ2FsbGVkQnlFbnRyeVwiO1xuICAgIFdpdG5lc3NTY29wZVtXaXRuZXNzU2NvcGVbXCJDdXN0b21Db250cmFjdHNcIl0gPSAxNl0gPSBcIkN1c3RvbUNvbnRyYWN0c1wiO1xuICAgIFdpdG5lc3NTY29wZVtXaXRuZXNzU2NvcGVbXCJDdXN0b21Hcm91cHNcIl0gPSAzMl0gPSBcIkN1c3RvbUdyb3Vwc1wiO1xuICAgIFdpdG5lc3NTY29wZVtXaXRuZXNzU2NvcGVbXCJHbG9iYWxcIl0gPSAxMjhdID0gXCJHbG9iYWxcIjtcbn0pKFdpdG5lc3NTY29wZSB8fCAoV2l0bmVzc1Njb3BlID0ge30pKTtcbmV4cG9ydCBjbGFzcyBCYXNlV2FsbGV0QWRhcHRlciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGFwdGVyLmpzLm1hcCIsImV4cG9ydCBjbGFzcyBXYWxsZXRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXROb3RGb3VuZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0Tm90SW5zdGFsbGVkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXROb3RJbnN0YWxsZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdFJlYWR5RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXROb3RSZWFkeUVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0Q29ubmVjdGlvbkVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Q29ubmVjdGlvbkVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0RGlzY29ubmVjdGVkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXREaXNjb25uZWN0ZWRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldERpc2Nvbm5lY3Rpb25FcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldERpc2Nvbm5lY3Rpb25FcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldEFjY291bnRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldEFjY291bnRFcnJvcic7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFdhbGxldE5vdENvbm5lY3RlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRUaW1lb3V0RXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRUaW1lb3V0RXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRXaW5kb3dCbG9ja2VkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRXaW5kb3dCbG9ja2VkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXYWxsZXRXaW5kb3dDbG9zZWRFcnJvciBleHRlbmRzIFdhbGxldEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ1dhbGxldFdpbmRvd0Nsb3NlZEVycm9yJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV2FsbGV0TWV0aG9kTm90U3VwcG9ydGVkRXJyb3IgZXh0ZW5kcyBXYWxsZXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubmFtZSA9ICdXYWxsZXRNZXRob2ROb3RTdXBwb3J0ZWRFcnJvcic7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3JzLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vYWRhcHRlcic7XG5leHBvcnQgKiBmcm9tICcuL2Vycm9ycyc7XG5leHBvcnQgKiBmcm9tICcuL3BvbGwnO1xuZXhwb3J0ICogZnJvbSAnLi93YWl0Jztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIHBvbGwoY2FsbGJhY2ssIGludGVydmFsLCBjb3VudCkge1xuICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBkb25lID0geWllbGQgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGlmICghZG9uZSlcbiAgICAgICAgICAgICAgICBwb2xsKGNhbGxiYWNrLCBpbnRlcnZhbCwgY291bnQgLSAxKTtcbiAgICAgICAgfSksIGludGVydmFsKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcG9sbFVudGlsUmVhZHkoYWRhcHRlciwgcG9sbEludGVydmFsLCBwb2xsQ291bnQpIHtcbiAgICBwb2xsKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyByZWFkeSB9ID0gYWRhcHRlcjtcbiAgICAgICAgaWYgKHJlYWR5KSB7XG4gICAgICAgICAgICBpZiAoIWFkYXB0ZXIuZW1pdCgncmVhZHknKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHthZGFwdGVyLmNvbnN0cnVjdG9yLm5hbWV9IGlzIHJlYWR5IGJ1dCBubyBsaXN0ZW5lciB3YXMgcmVnaXN0ZXJlZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWFkeTtcbiAgICB9LCBwb2xsSW50ZXJ2YWwsIHBvbGxDb3VudCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb2xsLmpzLm1hcCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgcnBjIH0gZnJvbSAnQGNpdHlvZnppb24vbmVvbi1qcyc7XG5leHBvcnQgZnVuY3Rpb24gd2FpdFR4KHJwY0FkZHJlc3MsIHR4SWQsIHJlYWRGcmVxdWVuY3kgPSAxMDAwLCB0aW1lb3V0ID0gMzAwMDApIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IHJwY0NsaWVudCA9IG5ldyBycGMuUlBDQ2xpZW50KHJwY0FkZHJlc3MpO1xuICAgICAgICAvLyBXYWl0IHVudGlsIHRoZSB0cmFuc2FjdGlvbiBjYW4gYmUgZm91bmQsIGlmIGl0J3MgZm91bmQgaXQgbWVhbnMgaXQncyBvayBiZWNhdXNlIGl0IGhhcyBiZWVuIGluc2VydGVkIGluIGEgYmxvY2tcbiAgICAgICAgLy8gT3RoZXJ3aXNlIHRyaWdnZXIgdGhlIHRpbWVvdXQgbWVhbmluZyB0aGF0IGl0J3Mgbm90IGluc2VydGVkIGluIHRoZSBibG9jayAoYXZlcmFnZSBibG9jayB0aW1lIDE1cylcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgdGhlIHRpbWVvdXQgaGFzIHBhc3NlZFxuICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSBzdGFydCA+IHRpbWVvdXQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgdHJhbnNhY3Rpb24gZnJvbSB0aGUgcnBjQ2xpZW50XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSB5aWVsZCBycGNDbGllbnQuZ2V0UmF3VHJhbnNhY3Rpb24odHhJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIFNsZWVwIGZvciB0aGUgbmV4dCBjeWNsZVxuICAgICAgICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHJlYWRGcmVxdWVuY3kpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoIXRyYW5zYWN0aW9uKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhaXQuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtYnV0dG9uJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LWNvbGxhcHNlJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LWNvbm5lY3QtYnV0dG9uJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LWRpc2Nvbm5lY3QtYnV0dG9uJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LWljb24nO1xuZXhwb3J0ICogZnJvbSAnLi93YWxsZXQtbGlzdC1pdGVtJztcbmV4cG9ydCAqIGZyb20gJy4vd2FsbGV0LW1vZGFsLWJ1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1tb2RhbC1wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1tb2RhbCc7XG5leHBvcnQgKiBmcm9tICcuL3dhbGxldC1tdWx0aS1idXR0b24nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBXYWxsZXRCdXR0b24gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldEJ1dHRvbih7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGRpc2FibGVkLCBlbmRJY29uLCBzdGFydEljb24sIHN0eWxlLCB0YWJJbmRleCwgb25DbGljaywgfSkge1xuICAgIGNvbnN0IGp1c3RpZnlDb250ZW50ID0gZW5kSWNvbiB8fCBzdGFydEljb24gPyAnc3BhY2UtYmV0d2VlbicgOiAnY2VudGVyJztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IGB3YWxsZXQtYWRhcHRlci1idXR0b24gJHtjbGFzc05hbWUgfHwgJyd9YCwgZGlzYWJsZWQ6IGRpc2FibGVkLCBvbkNsaWNrOiBvbkNsaWNrLCBzdHlsZTogT2JqZWN0LmFzc2lnbih7IGp1c3RpZnlDb250ZW50IH0sIHN0eWxlKSwgdGFiSW5kZXg6IHRhYkluZGV4IHx8IDAsIHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgc3RhcnRJY29uICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi1zdGFydC1pY29uXCIgfSwgc3RhcnRJY29uKSxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGVuZEljb24gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLWVuZC1pY29uXCIgfSwgZW5kSWNvbikpKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LWJ1dHRvbi5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgV2FsbGV0Q29sbGFwc2UgPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldENvbGxhcHNlKHsgaWQsIGNoaWxkcmVuLCBleHBhbmRlZCA9IGZhbHNlLCB9KSB7XG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGluc3RhbnQgPSB1c2VSZWYodHJ1ZSk7XG4gICAgY29uc3QgdHJhbnNpdGlvbiA9ICdoZWlnaHQgMjUwbXMgZWFzZS1vdXQnO1xuICAgIGNvbnN0IG9wZW5Db2xsYXBzZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9IG5vZGUuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBjbG9zZUNvbGxhcHNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gbm9kZS5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICAgICAgb3BlbkNvbGxhcHNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbG9zZUNvbGxhcHNlKCk7XG4gICAgICAgIH1cbiAgICB9LCBbZXhwYW5kZWRdKTtcbiAgICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ29tcGxldGUoKSB7XG4gICAgICAgICAgICBpZiAoIW5vZGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5vdmVyZmxvdyA9IGV4cGFuZGVkID8gJ2luaXRpYWwnIDogJ2hpZGRlbic7XG4gICAgICAgICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVUcmFuc2l0aW9uRW5kKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAobm9kZSAmJiBldmVudC50YXJnZXQgPT09IG5vZGUgJiYgZXZlbnQucHJvcGVydHlOYW1lID09PSAnaGVpZ2h0Jykge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluc3RhbnQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFuZGxlQ29tcGxldGUoKTtcbiAgICAgICAgICAgIGluc3RhbnQuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpO1xuICAgICAgICByZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZCk7XG4gICAgfSwgW2V4cGFuZGVkXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2hpbGRyZW46IGNoaWxkcmVuLCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItY29sbGFwc2VcIiwgaWQ6IGlkLCByZWY6IHJlZiwgcm9sZTogXCJyZWdpb25cIiwgc3R5bGU6IHsgaGVpZ2h0OiAwLCB0cmFuc2l0aW9uOiBpbnN0YW50LmN1cnJlbnQgPyB1bmRlZmluZWQgOiB0cmFuc2l0aW9uIH0gfSkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtY29sbGFwc2UuanMubWFwIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHJlbnRmdXNlLWxhYnMvbmVvLXdhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWJ1dHRvbic7XG5pbXBvcnQgeyBXYWxsZXRJY29uIH0gZnJvbSAnLi93YWxsZXQtaWNvbic7XG5leHBvcnQgY29uc3QgV2FsbGV0Q29ubmVjdEJ1dHRvbiA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0Q29ubmVjdEJ1dHRvbihfYSkge1xuICAgIHZhciB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGRpc2FibGVkLCBlbmRJY29uLCBzdGFydEljb24sIHN0eWxlLCB0YWJJbmRleCwgb25DbGljayB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImRpc2FibGVkXCIsIFwiZW5kSWNvblwiLCBcInN0YXJ0SWNvblwiLCBcInN0eWxlXCIsIFwidGFiSW5kZXhcIiwgXCJvbkNsaWNrXCJdKTtcbiAgICBjb25zdCB7IHdhbGxldCwgY29ubmVjdCwgY29ubmVjdGluZywgY29ubmVjdGVkIH0gPSB1c2VXYWxsZXQoKTtcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgICAgICBpZiAob25DbGljaylcbiAgICAgICAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG4gICAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZClcbiAgICAgICAgICAgIGNvbm5lY3QoKS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIH0sIFtvbkNsaWNrLCBjb25uZWN0XSk7XG4gICAgY29uc3QgY29udGVudCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGRyZW4pXG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICAgIGlmIChjb25uZWN0aW5nKVxuICAgICAgICAgICAgcmV0dXJuICdDb25uZWN0aW5nIC4uLic7XG4gICAgICAgIGlmIChjb25uZWN0ZWQpXG4gICAgICAgICAgICByZXR1cm4gJ0Nvbm5lY3RlZCc7XG4gICAgICAgIGlmICh3YWxsZXQpXG4gICAgICAgICAgICByZXR1cm4gJ0Nvbm5lY3QnO1xuICAgICAgICByZXR1cm4gJ0Nvbm5lY3QgV2FsbGV0JztcbiAgICB9LCBbY2hpbGRyZW4sIGNvbm5lY3RpbmcsIGNvbm5lY3RlZCwgd2FsbGV0XSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tdHJpZ2dlclwiLCBkaXNhYmxlZDogZGlzYWJsZWQgfHwgIXdhbGxldCB8fCBjb25uZWN0aW5nIHx8IGNvbm5lY3RlZCwgc3RhcnRJY29uOiB3YWxsZXQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEljb24sIHsgd2FsbGV0OiB3YWxsZXQgfSkgOiB1bmRlZmluZWQsIGVuZEljb246IGVuZEljb24sIHN0eWxlOiBzdHlsZSwgdGFiSW5kZXg6IHRhYkluZGV4LCBvbkNsaWNrOiBoYW5kbGVDbGljayB9LCBwcm9wcyksIGNvbnRlbnQpKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LWNvbm5lY3QtYnV0dG9uLmpzLm1hcCIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXYWxsZXRCdXR0b24gfSBmcm9tICcuL3dhbGxldC1idXR0b24nO1xuaW1wb3J0IHsgV2FsbGV0SWNvbiB9IGZyb20gJy4vd2FsbGV0LWljb24nO1xuZXhwb3J0IGNvbnN0IFdhbGxldERpc2Nvbm5lY3RCdXR0b24gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldERpc2Nvbm5lY3RCdXR0b24oX2EpIHtcbiAgICB2YXIgeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBkaXNhYmxlZCwgZW5kSWNvbiwgc3RhcnRJY29uLCBzdHlsZSwgdGFiSW5kZXgsIG9uQ2xpY2sgfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlZFwiLCBcImVuZEljb25cIiwgXCJzdGFydEljb25cIiwgXCJzdHlsZVwiLCBcInRhYkluZGV4XCIsIFwib25DbGlja1wiXSk7XG4gICAgY29uc3QgeyB3YWxsZXQsIGRpc2Nvbm5lY3QsIGRpc2Nvbm5lY3RpbmcgfSA9IHVzZVdhbGxldCgpO1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChvbkNsaWNrKVxuICAgICAgICAgICAgb25DbGljayhldmVudCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbiAgICAgICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkKVxuICAgICAgICAgICAgZGlzY29ubmVjdCgpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgfSwgW29uQ2xpY2ssIGRpc2Nvbm5lY3RdKTtcbiAgICBjb25zdCBjb250ZW50ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZHJlbilcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgaWYgKGRpc2Nvbm5lY3RpbmcpXG4gICAgICAgICAgICByZXR1cm4gJ0Rpc2Nvbm5lY3RpbmcgLi4uJztcbiAgICAgICAgaWYgKHdhbGxldClcbiAgICAgICAgICAgIHJldHVybiAnRGlzY29ubmVjdCc7XG4gICAgICAgIHJldHVybiAnRGlzY29ubmVjdCBXYWxsZXQnO1xuICAgIH0sIFtjaGlsZHJlbiwgZGlzY29ubmVjdGluZywgd2FsbGV0XSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1idXR0b24tdHJpZ2dlclwiLCBkaXNhYmxlZDogZGlzYWJsZWQgfHwgIXdhbGxldCwgc3RhcnRJY29uOiB3YWxsZXQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEljb24sIHsgd2FsbGV0OiB3YWxsZXQgfSkgOiB1bmRlZmluZWQsIGVuZEljb246IGVuZEljb24sIHN0eWxlOiBzdHlsZSwgdGFiSW5kZXg6IHRhYkluZGV4LCBvbkNsaWNrOiBoYW5kbGVDbGljayB9LCBwcm9wcyksIGNvbnRlbnQpKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LWRpc2Nvbm5lY3QtYnV0dG9uLmpzLm1hcCIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgV2FsbGV0SWNvbiA9IFJlYWN0Lm1lbW8oZnVuY3Rpb24gV2FsbGV0SWNvbihfYSkge1xuICAgIHZhciB7IHdhbGxldCB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJ3YWxsZXRcIl0pO1xuICAgIHJldHVybiB3YWxsZXQgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHsgc3JjOiB3YWxsZXQuaWNvbiwgYWx0OiBgJHt3YWxsZXQubmFtZX0gaWNvbmAgfSwgcHJvcHMpKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LWljb24uanMubWFwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LWJ1dHRvbic7XG5pbXBvcnQgeyBXYWxsZXRJY29uIH0gZnJvbSAnLi93YWxsZXQtaWNvbic7XG5leHBvcnQgY29uc3QgV2FsbGV0TGlzdEl0ZW0gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldExpc3RJdGVtKHsgaGFuZGxlQ2xpY2ssIHRhYkluZGV4LCB3YWxsZXQsIH0pIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldEJ1dHRvbiwgeyBvbkNsaWNrOiBoYW5kbGVDbGljaywgZW5kSWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRJY29uLCB7IHdhbGxldDogd2FsbGV0IH0pLCB0YWJJbmRleDogdGFiSW5kZXggfSwgd2FsbGV0Lm5hbWUpKSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhbGxldC1saXN0LWl0ZW0uanMubWFwIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2FsbGV0QnV0dG9uIH0gZnJvbSAnLi93YWxsZXQtYnV0dG9uJztcbmltcG9ydCB7IHVzZVdhbGxldE1vZGFsIH0gZnJvbSAnLi4vaG9va3MvdXNlLXdhbGxldC1tb2RhbCc7XG5leHBvcnQgY29uc3QgV2FsbGV0TW9kYWxCdXR0b24gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldE1vZGFsQnV0dG9uKF9hKSB7XG4gICAgdmFyIHsgY2hpbGRyZW4gPSAnU2VsZWN0IFdhbGxldCcsIG9uQ2xpY2sgfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIiwgXCJvbkNsaWNrXCJdKTtcbiAgICBjb25zdCB7IHZpc2libGUsIHNldFZpc2libGUgfSA9IHVzZVdhbGxldE1vZGFsKCk7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xpY2spXG4gICAgICAgICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkKVxuICAgICAgICAgICAgc2V0VmlzaWJsZSghdmlzaWJsZSk7XG4gICAgfSwgW29uQ2xpY2ssIHNldFZpc2libGUsIHZpc2libGVdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0QnV0dG9uLCBPYmplY3QuYXNzaWduKHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWJ1dHRvbi10cmlnZ2VyXCIsIG9uQ2xpY2s6IGhhbmRsZUNsaWNrIH0sIHByb3BzKSwgY2hpbGRyZW4pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LW1vZGFsLWJ1dHRvbi5qcy5tYXAiLCJ2YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXYWxsZXRNb2RhbENvbnRleHQgfSBmcm9tICcuLi9ob29rcy91c2Utd2FsbGV0LW1vZGFsJztcbmltcG9ydCB7IFdhbGxldE1vZGFsIH0gZnJvbSAnLi93YWxsZXQtbW9kYWwnO1xuZXhwb3J0IGNvbnN0IFdhbGxldE1vZGFsUHJvdmlkZXIgPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldE1vZGFsUHJvdmlkZXIoX2EpIHtcbiAgICB2YXIgeyBjaGlsZHJlbiB9ID0gX2EsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiXSk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRNb2RhbENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHtcbiAgICAgICAgICAgIHZpc2libGUsXG4gICAgICAgICAgICBzZXRWaXNpYmxlLFxuICAgICAgICB9IH0sXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICB2aXNpYmxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0TW9kYWwsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSkpKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LW1vZGFsLXByb3ZpZGVyLmpzLm1hcCIsImltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBXYWxsZXRCdXR0b24gfSBmcm9tICcuL3dhbGxldC1idXR0b24nO1xuaW1wb3J0IHsgV2FsbGV0Q29sbGFwc2UgfSBmcm9tICcuL3dhbGxldC1jb2xsYXBzZSc7XG5pbXBvcnQgeyB1c2VXYWxsZXRNb2RhbCB9IGZyb20gJy4uL2hvb2tzL3VzZS13YWxsZXQtbW9kYWwnO1xuaW1wb3J0IHsgV2FsbGV0TGlzdEl0ZW0gfSBmcm9tICcuL3dhbGxldC1saXN0LWl0ZW0nO1xuZXhwb3J0IGNvbnN0IFdhbGxldE1vZGFsID0gUmVhY3QubWVtbyhmdW5jdGlvbiBXYWxsZXRNb2RhbCh7IGNsYXNzTmFtZSA9ICcnLCBsb2dvLCBmZWF0dXJlZFdhbGxldHMgPSAzLCBjb250YWluZXIgPSAnYm9keScsIH0pIHtcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgeyB3YWxsZXRzLCBzZWxlY3QgfSA9IHVzZVdhbGxldCgpO1xuICAgIGNvbnN0IHsgc2V0VmlzaWJsZSB9ID0gdXNlV2FsbGV0TW9kYWwoKTtcbiAgICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZmFkZUluLCBzZXRGYWRlSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtwb3J0YWwsIHNldFBvcnRhbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZmVhdHVyZWQsIG1vcmVdID0gdXNlTWVtbygoKSA9PiBbd2FsbGV0cy5zbGljZSgwLCBmZWF0dXJlZFdhbGxldHMpLCB3YWxsZXRzLnNsaWNlKGZlYXR1cmVkV2FsbGV0cyldLCBbd2FsbGV0cywgZmVhdHVyZWRXYWxsZXRzXSk7XG4gICAgY29uc3QgaGlkZU1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBzZXRGYWRlSW4oZmFsc2UpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFZpc2libGUoZmFsc2UpLCAxNTApO1xuICAgIH0sIFtzZXRGYWRlSW4sIHNldFZpc2libGVdKTtcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBoaWRlTW9kYWwoKTtcbiAgICB9LCBbaGlkZU1vZGFsXSk7XG4gICAgY29uc3QgaGFuZGxlV2FsbGV0Q2xpY2sgPSB1c2VDYWxsYmFjaygoZXZlbnQsIHdhbGxldE5hbWUpID0+IHtcbiAgICAgICAgc2VsZWN0KHdhbGxldE5hbWUpO1xuICAgICAgICBoYW5kbGVDbG9zZShldmVudCk7XG4gICAgfSwgW3NlbGVjdCwgaGFuZGxlQ2xvc2VdKTtcbiAgICBjb25zdCBoYW5kbGVDb2xsYXBzZUNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKSwgW3NldEV4cGFuZGVkLCBleHBhbmRlZF0pO1xuICAgIGNvbnN0IGhhbmRsZVRhYktleSA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghbm9kZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gaGVyZSB3ZSBxdWVyeSBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgZmlyc3RFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbMF07XG4gICAgICAgIGNvbnN0IGxhc3RFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgLy8gaWYgZ29pbmcgYmFja3dhcmQgYnkgcHJlc3NpbmcgdGFiIGFuZCBmaXJzdEVsZW1lbnQgaXMgYWN0aXZlLCBzaGlmdCBmb2N1cyB0byBsYXN0IGZvY3VzYWJsZSBlbGVtZW50XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZmlyc3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbGFzdEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgZ29pbmcgZm9yd2FyZCBieSBwcmVzc2luZyB0YWIgYW5kIGxhc3RFbGVtZW50IGlzIGFjdGl2ZSwgc2hpZnQgZm9jdXMgdG8gZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnRcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBsYXN0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGZpcnN0RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbcmVmXSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBoaWRlTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVUYWJLZXkoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBHZXQgb3JpZ2luYWwgb3ZlcmZsb3dcbiAgICAgICAgY29uc3QgeyBvdmVyZmxvdyB9ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSk7XG4gICAgICAgIC8vIEhhY2sgdG8gZW5hYmxlIGZhZGUgaW4gYW5pbWF0aW9uIGFmdGVyIG1vdW50XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0RmFkZUluKHRydWUpLCAwKTtcbiAgICAgICAgLy8gUHJldmVudCBzY3JvbGxpbmcgb24gbW91bnRcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAvLyBMaXN0ZW4gZm9yIGtleWRvd24gZXZlbnRzXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93biwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgLy8gUmUtZW5hYmxlIHNjcm9sbGluZyB3aGVuIGNvbXBvbmVudCB1bm1vdW50c1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IG92ZXJmbG93O1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duLCBmYWxzZSk7XG4gICAgICAgIH07XG4gICAgfSwgW2hpZGVNb2RhbCwgaGFuZGxlVGFiS2V5XSk7XG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHNldFBvcnRhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lcikpLCBbc2V0UG9ydGFsLCBjb250YWluZXJdKTtcbiAgICByZXR1cm4gKHBvcnRhbCAmJlxuICAgICAgICBjcmVhdGVQb3J0YWwoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtdGl0bGVcIiwgXCJhcmlhLW1vZGFsXCI6IFwidHJ1ZVwiLCBjbGFzc05hbWU6IGB3YWxsZXQtYWRhcHRlci1tb2RhbCAke2ZhZGVJbiAmJiAnd2FsbGV0LWFkYXB0ZXItbW9kYWwtZmFkZS1pbid9ICR7Y2xhc3NOYW1lfWAsIHJlZjogcmVmLCByb2xlOiBcImRpYWxvZ1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYHdhbGxldC1hZGFwdGVyLW1vZGFsLXdyYXBwZXIgJHshbG9nbyAmJiAnd2FsbGV0LWFkYXB0ZXItbW9kYWwtd3JhcHBlci1uby1sb2dvJ31gIH0sXG4gICAgICAgICAgICAgICAgICAgIGxvZ28gJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtbG9nby13cmFwcGVyXCIgfSwgdHlwZW9mIGxvZ28gPT09ICdzdHJpbmcnID8gUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGFsdDogXCJsb2dvXCIsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1sb2dvXCIsIHNyYzogbG9nbyB9KSA6IGxvZ28pKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLXRpdGxlXCIsIGlkOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLXRpdGxlXCIgfSwgXCJDb25uZWN0IFdhbGxldFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IGhhbmRsZUNsb3NlLCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtYnV0dG9uLWNsb3NlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyB3aWR0aDogXCIxNFwiLCBoZWlnaHQ6IFwiMTRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHsgZDogXCJNMTQgMTIuNDYxIDguMyA2Ljc3Mmw1LjIzNC01LjIzM0wxMi4wMDYgMCA2Ljc3MiA1LjIzNCAxLjU0IDAgMCAxLjUzOWw1LjIzNCA1LjIzM0wwIDEyLjAwNmwxLjUzOSAxLjUyOEw2Ljc3MiA4LjNsNS42OSA1LjdMMTQgMTIuNDYxelwiIH0pKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1saXN0XCIgfSwgZmVhdHVyZWQubWFwKCh3YWxsZXQpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldExpc3RJdGVtLCB7IGtleTogd2FsbGV0Lm5hbWUsIGhhbmRsZUNsaWNrOiAoZXZlbnQpID0+IGhhbmRsZVdhbGxldENsaWNrKGV2ZW50LCB3YWxsZXQubmFtZSksIHdhbGxldDogd2FsbGV0IH0pKSkpLFxuICAgICAgICAgICAgICAgICAgICBtb3JlLmxlbmd0aCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRDb2xsYXBzZSwgeyBleHBhbmRlZDogZXhwYW5kZWQsIGlkOiBcIndhbGxldC1hZGFwdGVyLW1vZGFsLWNvbGxhcHNlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtbGlzdFwiIH0sIG1vcmUubWFwKCh3YWxsZXQpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFdhbGxldExpc3RJdGVtLCB7IGtleTogd2FsbGV0Lm5hbWUsIGhhbmRsZUNsaWNrOiAoZXZlbnQpID0+IGhhbmRsZVdhbGxldENsaWNrKGV2ZW50LCB3YWxsZXQubmFtZSksIHRhYkluZGV4OiBleHBhbmRlZCA/IDAgOiAtMSwgd2FsbGV0OiB3YWxsZXQgfSkpKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRCdXR0b24sIHsgXCJhcmlhLWNvbnRyb2xzXCI6IFwid2FsbGV0LWFkYXB0ZXItbW9kYWwtY29sbGFwc2VcIiwgXCJhcmlhLWV4cGFuZGVkXCI6IGV4cGFuZGVkLCBjbGFzc05hbWU6IGB3YWxsZXQtYWRhcHRlci1tb2RhbC1jb2xsYXBzZS1idXR0b24gJHtleHBhbmRlZCAmJiAnd2FsbGV0LWFkYXB0ZXItbW9kYWwtY29sbGFwc2UtYnV0dG9uLWFjdGl2ZSd9YCwgZW5kSWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHdpZHRoOiBcIjExXCIsIGhlaWdodDogXCI2XCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwgeyBkOiBcIm01LjkzOCA1LjczIDQuMjgtNC4xMjZhLjkxNS45MTUgMCAwIDAgMC0xLjMyMiAxIDEgMCAwIDAtMS4zNzEgMEw1LjI1MyAzLjczNiAxLjY1OS4yNzJhMSAxIDAgMCAwLTEuMzcxIDBBLjkzLjkzIDAgMCAwIDAgLjkzMmMwIC4yNDYuMS40OC4yODguNjYybDQuMjggNC4xMjVhLjk5Ljk5IDAgMCAwIDEuMzcuMDF6XCIgfSkpLCBvbkNsaWNrOiBoYW5kbGVDb2xsYXBzZUNsaWNrIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQgPyAnTGVzcycgOiAnTW9yZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgb3B0aW9uc1wiKSkpIDogbnVsbCkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1tb2RhbC1vdmVybGF5XCIsIG9uTW91c2VEb3duOiBoYW5kbGVDbG9zZSB9KSksIHBvcnRhbCkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtbW9kYWwuanMubWFwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItcmVhY3QnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXYWxsZXRCdXR0b24gfSBmcm9tICcuL3dhbGxldC1idXR0b24nO1xuaW1wb3J0IHsgdXNlV2FsbGV0TW9kYWwgfSBmcm9tICcuLi9ob29rcy91c2Utd2FsbGV0LW1vZGFsJztcbmltcG9ydCB7IFdhbGxldENvbm5lY3RCdXR0b24gfSBmcm9tICcuL3dhbGxldC1jb25uZWN0LWJ1dHRvbic7XG5pbXBvcnQgeyBXYWxsZXRJY29uIH0gZnJvbSAnLi93YWxsZXQtaWNvbic7XG5pbXBvcnQgeyBXYWxsZXRNb2RhbEJ1dHRvbiB9IGZyb20gJy4vd2FsbGV0LW1vZGFsLWJ1dHRvbic7XG5leHBvcnQgY29uc3QgV2FsbGV0TXVsdGlCdXR0b24gPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldE11bHRpQnV0dG9uKF9hKSB7XG4gICAgdmFyIHsgY2hpbGRyZW4gfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIl0pO1xuICAgIGNvbnN0IHsgYWRkcmVzcywgd2FsbGV0LCBkaXNjb25uZWN0IH0gPSB1c2VXYWxsZXQoKTtcbiAgICBjb25zdCB7IHNldFZpc2libGUgfSA9IHVzZVdhbGxldE1vZGFsKCk7XG4gICAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBfYWRkcmVzcyA9IHVzZU1lbW8oKCkgPT4gYWRkcmVzcywgW2FkZHJlc3NdKTtcbiAgICBjb25zdCBjb250ZW50ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZHJlbilcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgICAgaWYgKCF3YWxsZXQgfHwgIV9hZGRyZXNzKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBfYWRkcmVzcztcbiAgICB9LCBbY2hpbGRyZW4sIHdhbGxldCwgX2FkZHJlc3NdKTtcbiAgICBjb25zdCBjb3B5QWRkcmVzcyA9IHVzZUNhbGxiYWNrKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKF9hZGRyZXNzKSB7XG4gICAgICAgICAgICB5aWVsZCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChfYWRkcmVzcyk7XG4gICAgICAgICAgICBzZXRDb3BpZWQodHJ1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldENvcGllZChmYWxzZSksIDQwMCk7XG4gICAgICAgIH1cbiAgICB9KSwgW19hZGRyZXNzXSk7XG4gICAgY29uc3Qgb3BlbkRyb3Bkb3duID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0QWN0aXZlKHRydWUpLCBbc2V0QWN0aXZlXSk7XG4gICAgY29uc3QgY2xvc2VEcm9wZG93biA9IHVzZUNhbGxiYWNrKCgpID0+IHNldEFjdGl2ZShmYWxzZSksIFtzZXRBY3RpdmVdKTtcbiAgICBjb25zdCBvcGVuTW9kYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICB9LCBbc2V0VmlzaWJsZSwgY2xvc2VEcm9wZG93bl0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGNsaWNraW5nIGRyb3Bkb3duIG9yIGl0cyBkZXNjZW5kYW50c1xuICAgICAgICAgICAgaWYgKCFub2RlIHx8IG5vZGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgfSwgW3JlZiwgY2xvc2VEcm9wZG93bl0pO1xuICAgIGlmICghd2FsbGV0KVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRNb2RhbEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBjaGlsZHJlbik7XG4gICAgaWYgKCFfYWRkcmVzcylcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2FsbGV0Q29ubmVjdEJ1dHRvbiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWRyb3Bkb3duXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRCdXR0b24sIE9iamVjdC5hc3NpZ24oeyBcImFyaWEtZXhwYW5kZWRcIjogYWN0aXZlLCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItYnV0dG9uLXRyaWdnZXJcIiwgc3R5bGU6IE9iamVjdC5hc3NpZ24oeyBwb2ludGVyRXZlbnRzOiBhY3RpdmUgPyAnbm9uZScgOiAnYXV0bycgfSwgcHJvcHMuc3R5bGUpLCBvbkNsaWNrOiBvcGVuRHJvcGRvd24sIHN0YXJ0SWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRJY29uLCB7IHdhbGxldDogd2FsbGV0IH0pIH0sIHByb3BzKSwgY29udGVudCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IFwiYXJpYS1sYWJlbFwiOiBcImRyb3Bkb3duLWxpc3RcIiwgY2xhc3NOYW1lOiBgd2FsbGV0LWFkYXB0ZXItZHJvcGRvd24tbGlzdCAke2FjdGl2ZSAmJiAnd2FsbGV0LWFkYXB0ZXItZHJvcGRvd24tbGlzdC1hY3RpdmUnfWAsIHJlZjogcmVmLCByb2xlOiBcIm1lbnVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgb25DbGljazogY29weUFkZHJlc3MsIGNsYXNzTmFtZTogXCJ3YWxsZXQtYWRhcHRlci1kcm9wZG93bi1saXN0LWl0ZW1cIiwgcm9sZTogXCJtZW51aXRlbVwiIH0sIGNvcGllZCA/ICdDb3BpZWQnIDogJ0NvcHkgYWRkcmVzcycpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgb25DbGljazogb3Blbk1vZGFsLCBjbGFzc05hbWU6IFwid2FsbGV0LWFkYXB0ZXItZHJvcGRvd24tbGlzdC1pdGVtXCIsIHJvbGU6IFwibWVudWl0ZW1cIiB9LCBcIkNvbm5lY3QgYSBkaWZmZXJlbnQgd2FsbGV0XCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgb25DbGljazogZGlzY29ubmVjdCwgY2xhc3NOYW1lOiBcIndhbGxldC1hZGFwdGVyLWRyb3Bkb3duLWxpc3QtaXRlbVwiLCByb2xlOiBcIm1lbnVpdGVtXCIgfSwgXCJEaXNjb25uZWN0XCIpKSkpO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWxsZXQtbXVsdGktYnV0dG9uLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgV2FsbGV0TW9kYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5leHBvcnQgZnVuY3Rpb24gdXNlV2FsbGV0TW9kYWwoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoV2FsbGV0TW9kYWxDb250ZXh0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS13YWxsZXQtbW9kYWwuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9ob29rcyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBXYWxsZXROb3RDb25uZWN0ZWRFcnJvciwgV2FsbGV0Tm90UmVhZHlFcnJvciwgfSBmcm9tICdAcmVudGZ1c2UtbGFicy9uZW8td2FsbGV0LWFkYXB0ZXItYmFzZSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IgfSBmcm9tICcuLi91dGlscy9lcnJvcnMnO1xuaW1wb3J0IHsgV2FsbGV0Q29udGV4dCB9IGZyb20gJy4uL2hvb2tzL3VzZS13YWxsZXQnO1xuY29uc3QgV0FMTEVUX0lOSVRJQUxfU1RBVEUgPSB7XG4gICAgd2FsbGV0OiBudWxsLFxuICAgIGFkYXB0ZXI6IG51bGwsXG4gICAgcmVhZHk6IGZhbHNlLFxuICAgIGFkZHJlc3M6IG51bGwsXG4gICAgY29ubmVjdGVkOiBmYWxzZSxcbn07XG5leHBvcnQgY29uc3QgV2FsbGV0UHJvdmlkZXIgPSBSZWFjdC5tZW1vKGZ1bmN0aW9uIFdhbGxldFByb3ZpZGVyKHsgY2hpbGRyZW4sIHdhbGxldHMsIGF1dG9Db25uZWN0ID0gZmFsc2UsIG9uRXJyb3I6IF9vbkVycm9yID0gKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSwgfSkge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIC8vIFRoZSBtYWluIHN0YXRlIG9mIHRoZSB3YWxsZXQgcHJvdmlkZXJcbiAgICBjb25zdCBbeyB3YWxsZXQsIGFkYXB0ZXIsIHJlYWR5LCBhZGRyZXNzLCBjb25uZWN0ZWQgfSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoV0FMTEVUX0lOSVRJQUxfU1RBVEUpO1xuICAgIGNvbnN0IFtjb25uZWN0aW5nLCBzZXRDb25uZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZGlzY29ubmVjdGluZywgc2V0RGlzY29ubmVjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgaXNDb25uZWN0aW5nID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBpc0Rpc2Nvbm5lY3RpbmcgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IGlzVW5sb2FkaW5nID0gdXNlUmVmKGZhbHNlKTtcbiAgICAvLyBNYXAgd2FsbGV0IG5hbWVzIHRvIHdhbGxldHMgZm9yIGVhc2llciB1c2FnZVxuICAgIGNvbnN0IHdhbGxldHNCeU5hbWUgPSB1c2VNZW1vKCgpID0+IHdhbGxldHMucmVkdWNlKCh3YWxsZXRzQnlOYW1lLCB3YWxsZXQpID0+IHtcbiAgICAgICAgd2FsbGV0c0J5TmFtZVt3YWxsZXQubmFtZV0gPSB3YWxsZXQ7XG4gICAgICAgIHJldHVybiB3YWxsZXRzQnlOYW1lO1xuICAgIH0sIHt9KSwgW3dhbGxldHNdKTtcbiAgICAvLyBXaGVuIHRoZSBzZWxlY3RlZCB3YWxsZXQgY2hhbmdlcywgcmUtaW5pdGlhbGl6ZSB0aGUgc3RhdGVcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB3YWxsZXQgPSAobmFtZSAmJiB3YWxsZXRzQnlOYW1lW25hbWVdKSB8fCBudWxsO1xuICAgICAgICBjb25zdCBhZGFwdGVyID0gd2FsbGV0ICYmIHdhbGxldC5hZGFwdGVyKCk7XG4gICAgICAgIGlmIChhZGFwdGVyKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJlYWR5LCBhZGRyZXNzLCBjb25uZWN0ZWQgfSA9IGFkYXB0ZXI7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7IHdhbGxldCwgYWRhcHRlciwgY29ubmVjdGVkLCBhZGRyZXNzLCByZWFkeSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFN0YXRlKFdBTExFVF9JTklUSUFMX1NUQVRFKTtcbiAgICAgICAgfVxuICAgIH0sIFtuYW1lLCB3YWxsZXRzQnlOYW1lLCBzZXRTdGF0ZV0pO1xuICAgIC8vIElmIGF1dG9Db25uZWN0IGlzIGVuYWJsZWQsIHRyeSB0byBjb25uZWN0IHdoZW4gdGhlIGFkYXB0ZXIgY2hhbmdlcyBhbmQgaXMgcmVhZHlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNDb25uZWN0aW5nLmN1cnJlbnQgfHwgY29ubmVjdGluZyB8fCBjb25uZWN0ZWQgfHwgIWF1dG9Db25uZWN0IHx8ICFhZGFwdGVyIHx8ICFyZWFkeSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgaXNDb25uZWN0aW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldENvbm5lY3RpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgYWRhcHRlci5jb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciB0aGUgc2VsZWN0ZWQgd2FsbGV0XG4gICAgICAgICAgICAgICAgICAgIHNldE5hbWUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIERvbid0IHRocm93IGVycm9yLCBidXQgb25FcnJvciB3aWxsIHN0aWxsIGJlIGNhbGxlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29ubmVjdGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlzQ29ubmVjdGluZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKCk7XG4gICAgfSwgW2lzQ29ubmVjdGluZywgY29ubmVjdGluZywgY29ubmVjdGVkLCBhdXRvQ29ubmVjdCwgYWRhcHRlciwgcmVhZHksIHNldENvbm5lY3RpbmcsIHNldE5hbWVdKTtcbiAgICAvLyBJZiB0aGUgd2luZG93IGlzIGNsb3Npbmcgb3IgcmVsb2FkaW5nLCBpZ25vcmUgZGlzY29ubmVjdCBhbmQgZXJyb3IgZXZlbnRzIGZyb20gdGhlIGFkYXB0ZXJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgICAgICAgIGlzVW5sb2FkaW5nLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgbGlzdGVuZXIpO1xuICAgIH0sIFtpc1VubG9hZGluZ10pO1xuICAgIC8vIFNlbGVjdCBhIHdhbGxldCBieSBuYW1lXG4gICAgY29uc3Qgc2VsZWN0ID0gdXNlQ2FsbGJhY2soKG5ld05hbWUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IG5ld05hbWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChhZGFwdGVyKVxuICAgICAgICAgICAgeWllbGQgYWRhcHRlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIHNldE5hbWUobmV3TmFtZSk7XG4gICAgfSksIFtuYW1lLCBhZGFwdGVyLCBzZXROYW1lXSk7XG4gICAgLy8gSGFuZGxlIHRoZSBhZGFwdGVyJ3MgcmVhZHkgZXZlbnRcbiAgICBjb25zdCBvblJlYWR5ID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0U3RhdGUoKHN0YXRlKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHsgcmVhZHk6IHRydWUgfSkpKSwgW3NldFN0YXRlXSk7XG4gICAgLy8gSGFuZGxlIHRoZSBhZGFwdGVyJ3MgY29ubmVjdCBldmVudFxuICAgIGNvbnN0IG9uQ29ubmVjdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCB7IGNvbm5lY3RlZCwgYWRkcmVzcywgcmVhZHkgfSA9IGFkYXB0ZXI7XG4gICAgICAgIHNldFN0YXRlKChzdGF0ZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IGNvbm5lY3RlZCxcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICByZWFkeSB9KSkpO1xuICAgIH0sIFthZGFwdGVyLCBzZXRTdGF0ZV0pO1xuICAgIC8vIEhhbmRsZSB0aGUgYWRhcHRlcidzIGRpc2Nvbm5lY3QgZXZlbnRcbiAgICBjb25zdCBvbkRpc2Nvbm5lY3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCB3YWxsZXQgdW5sZXNzIHRoZSB3aW5kb3cgaXMgdW5sb2FkaW5nXG4gICAgICAgIGlmICghaXNVbmxvYWRpbmcuY3VycmVudClcbiAgICAgICAgICAgIHNldE5hbWUobnVsbCk7XG4gICAgfSwgW2lzVW5sb2FkaW5nLCBzZXROYW1lXSk7XG4gICAgLy8gSGFuZGxlIHRoZSBhZGFwdGVyJ3MgZXJyb3IgZXZlbnQsIGFuZCBsb2NhbCBlcnJvcnNcbiAgICBjb25zdCBvbkVycm9yID0gdXNlQ2FsbGJhY2soKGVycm9yKSA9PiB7XG4gICAgICAgIC8vIENhbGwgdGhlIHByb3ZpZGVkIGVycm9yIGhhbmRsZXIgdW5sZXNzIHRoZSB3aW5kb3cgaXMgdW5sb2FkaW5nXG4gICAgICAgIGlmICghaXNVbmxvYWRpbmcuY3VycmVudClcbiAgICAgICAgICAgIF9vbkVycm9yKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH0sIFtpc1VubG9hZGluZywgX29uRXJyb3JdKTtcbiAgICAvLyBDb25uZWN0IHRoZSBhZGFwdGVyIHRvIHRoZSB3YWxsZXRcbiAgICBjb25zdCBjb25uZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoaXNDb25uZWN0aW5nLmN1cnJlbnQgfHwgY29ubmVjdGluZyB8fCBkaXNjb25uZWN0aW5nIHx8IGNvbm5lY3RlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCF3YWxsZXQgfHwgIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIXJlYWR5KSB7XG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgc2VsZWN0ZWQgd2FsbGV0XG4gICAgICAgICAgICBzZXROYW1lKG51bGwpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4od2FsbGV0LnVybCwgJ19ibGFuaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90UmVhZHlFcnJvcigpKTtcbiAgICAgICAgfVxuICAgICAgICBpc0Nvbm5lY3RpbmcuY3VycmVudCA9IHRydWU7XG4gICAgICAgIHNldENvbm5lY3RpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB5aWVsZCBhZGFwdGVyLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3RlZCB3YWxsZXRcbiAgICAgICAgICAgIHNldE5hbWUobnVsbCk7XG4gICAgICAgICAgICAvLyBSZXRocm93IHRoZSBlcnJvciwgYW5kIG9uRXJyb3Igd2lsbCBhbHNvIGJlIGNhbGxlZFxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBzZXRDb25uZWN0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlzQ29ubmVjdGluZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KSwgW2lzQ29ubmVjdGluZywgY29ubmVjdGluZywgZGlzY29ubmVjdGluZywgY29ubmVjdGVkLCB3YWxsZXQsIGFkYXB0ZXIsIG9uRXJyb3IsIHJlYWR5LCBzZXRDb25uZWN0aW5nLCBzZXROYW1lXSk7XG4gICAgLy8gRGlzY29ubmVjdCB0aGUgYWRhcHRlciBmcm9tIHRoZSB3YWxsZXRcbiAgICBjb25zdCBkaXNjb25uZWN0ID0gdXNlQ2FsbGJhY2soKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoaXNEaXNjb25uZWN0aW5nLmN1cnJlbnQgfHwgZGlzY29ubmVjdGluZylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCFhZGFwdGVyKVxuICAgICAgICAgICAgcmV0dXJuIHNldE5hbWUobnVsbCk7XG4gICAgICAgIGlzRGlzY29ubmVjdGluZy5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgc2V0RGlzY29ubmVjdGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHlpZWxkIGFkYXB0ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIHNlbGVjdGVkIHdhbGxldFxuICAgICAgICAgICAgc2V0TmFtZShudWxsKTtcbiAgICAgICAgICAgIC8vIFJldGhyb3cgdGhlIGVycm9yLCBhbmQgb25FcnJvciB3aWxsIGFsc28gYmUgY2FsbGVkXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldERpc2Nvbm5lY3RpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaXNEaXNjb25uZWN0aW5nLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pLCBbaXNEaXNjb25uZWN0aW5nLCBkaXNjb25uZWN0aW5nLCBhZGFwdGVyLCBzZXREaXNjb25uZWN0aW5nLCBzZXROYW1lXSk7XG4gICAgY29uc3QgaW52b2tlUmVhZCA9IHVzZUNhbGxiYWNrKChyZXF1ZXN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKSk7XG4gICAgICAgIGlmICghY29ubmVjdGVkKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLmludm9rZVJlYWQocmVxdWVzdCk7XG4gICAgfSksIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICBjb25zdCBpbnZva2VSZWFkTXVsdGkgPSB1c2VDYWxsYmFjaygocmVxdWVzdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5pbnZva2VSZWFkTXVsdGkocmVxdWVzdCk7XG4gICAgfSksIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICBjb25zdCBpbnZva2UgPSB1c2VDYWxsYmFjaygocmVxdWVzdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWFkYXB0ZXIpXG4gICAgICAgICAgICB0aHJvdyBvbkVycm9yKG5ldyBXYWxsZXROb3RTZWxlY3RlZEVycm9yKCkpO1xuICAgICAgICBpZiAoIWNvbm5lY3RlZClcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdENvbm5lY3RlZEVycm9yKCkpO1xuICAgICAgICByZXR1cm4geWllbGQgYWRhcHRlci5pbnZva2UocmVxdWVzdCk7XG4gICAgfSksIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICBjb25zdCBpbnZva2VNdWx0aSA9IHVzZUNhbGxiYWNrKChyZXF1ZXN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKSk7XG4gICAgICAgIGlmICghY29ubmVjdGVkKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLmludm9rZU11bHRpKHJlcXVlc3QpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgY29uc3QgZ2V0TmV0d29ya3MgPSB1c2VDYWxsYmFjaygoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKSk7XG4gICAgICAgIGlmICghY29ubmVjdGVkKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLmdldE5ldHdvcmtzKCk7XG4gICAgfSksIFthZGFwdGVyLCBvbkVycm9yLCBjb25uZWN0ZWRdKTtcbiAgICBjb25zdCBzaWduTWVzc2FnZSA9IHVzZUNhbGxiYWNrKChyZXF1ZXN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghYWRhcHRlcilcbiAgICAgICAgICAgIHRocm93IG9uRXJyb3IobmV3IFdhbGxldE5vdFNlbGVjdGVkRXJyb3IoKSk7XG4gICAgICAgIGlmICghY29ubmVjdGVkKVxuICAgICAgICAgICAgdGhyb3cgb25FcnJvcihuZXcgV2FsbGV0Tm90Q29ubmVjdGVkRXJyb3IoKSk7XG4gICAgICAgIHJldHVybiB5aWVsZCBhZGFwdGVyLnNpZ25NZXNzYWdlKHJlcXVlc3QpO1xuICAgIH0pLCBbYWRhcHRlciwgb25FcnJvciwgY29ubmVjdGVkXSk7XG4gICAgLy8gU2V0dXAgYW5kIHRlYXJkb3duIGV2ZW50IGxpc3RlbmVycyB3aGVuIHRoZSBhZGFwdGVyIGNoYW5nZXNcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoYWRhcHRlcikge1xuICAgICAgICAgICAgYWRhcHRlci5vbigncmVhZHknLCBvblJlYWR5KTtcbiAgICAgICAgICAgIGFkYXB0ZXIub24oJ2Nvbm5lY3QnLCBvbkNvbm5lY3QpO1xuICAgICAgICAgICAgYWRhcHRlci5vbignZGlzY29ubmVjdCcsIG9uRGlzY29ubmVjdCk7XG4gICAgICAgICAgICBhZGFwdGVyLm9uKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBhZGFwdGVyLm9mZigncmVhZHknLCBvblJlYWR5KTtcbiAgICAgICAgICAgICAgICBhZGFwdGVyLm9mZignY29ubmVjdCcsIG9uQ29ubmVjdCk7XG4gICAgICAgICAgICAgICAgYWRhcHRlci5vZmYoJ2Rpc2Nvbm5lY3QnLCBvbkRpc2Nvbm5lY3QpO1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIub2ZmKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIFthZGFwdGVyLCBvblJlYWR5LCBvbkNvbm5lY3QsIG9uRGlzY29ubmVjdCwgb25FcnJvcl0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChXYWxsZXRDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB7XG4gICAgICAgICAgICB3YWxsZXRzLFxuICAgICAgICAgICAgYXV0b0Nvbm5lY3QsXG4gICAgICAgICAgICB3YWxsZXQsXG4gICAgICAgICAgICBhZGFwdGVyLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIHJlYWR5LFxuICAgICAgICAgICAgY29ubmVjdGVkLFxuICAgICAgICAgICAgY29ubmVjdGluZyxcbiAgICAgICAgICAgIGRpc2Nvbm5lY3RpbmcsXG4gICAgICAgICAgICBzZWxlY3QsXG4gICAgICAgICAgICBjb25uZWN0LFxuICAgICAgICAgICAgZGlzY29ubmVjdCxcbiAgICAgICAgICAgIGludm9rZVJlYWQsXG4gICAgICAgICAgICBpbnZva2VSZWFkTXVsdGksXG4gICAgICAgICAgICBpbnZva2UsXG4gICAgICAgICAgICBpbnZva2VNdWx0aSxcbiAgICAgICAgICAgIGdldE5ldHdvcmtzLFxuICAgICAgICAgICAgc2lnbk1lc3NhZ2UsXG4gICAgICAgIH0gfSwgY2hpbGRyZW4pKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2FsbGV0LXByb3ZpZGVyLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgV2FsbGV0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVdhbGxldCgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChXYWxsZXRDb250ZXh0KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS13YWxsZXQuanMubWFwIiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vaG9va3MnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBXYWxsZXRFcnJvciB9IGZyb20gJ0ByZW50ZnVzZS1sYWJzL25lby13YWxsZXQtYWRhcHRlci1iYXNlJztcbmV4cG9ydCBjbGFzcyBXYWxsZXROb3RTZWxlY3RlZEVycm9yIGV4dGVuZHMgV2FsbGV0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnV2FsbGV0Tm90U2VsZWN0ZWRFcnJvcic7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXJyb3JzLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaXR5b2Z6aW9uL25lb24tanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRlbWl0dGVyM1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJuYW1lcyI6WyJ1c2VXYWxsZXQiLCJXYWxsZXROb3RDb25uZWN0ZWRFcnJvciIsIldhbGxldE11bHRpQnV0dG9uIiwic2MiLCJ3YWxsZXQiLCJIZWFkIiwiTmVvbiIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJJbmRleCIsIk5lb0NvbnRyYWN0SGFzaCIsIkJldHRpbmdNYW5hZ2VyQ29udHJhY3RIYXNoIiwiYnJpYW4iLCJwdWJsaXNoSW52b2tlIiwicnBjQWRkcmVzcyIsIm5ldHdvcmtNYWdpYyIsInNjcmlwdEhhc2giLCJvcGVyYXRpb24iLCJhcmdzIiwiYWNjb3VudCIsImNvbnRyYWN0IiwiZXhwZXJpbWVudGFsIiwiU21hcnRDb250cmFjdCIsInUiLCJIZXhTdHJpbmciLCJmcm9tSGV4IiwicmVzdWx0IiwiaW52b2tlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0ZWQiLCJnZXROZXR3b3JrcyIsImFkZHJlc3MiLCJzZXRBY2NvdW50Iiwid2FsbGV0TmV0d29yayIsInNldFdhbGxldE5ldHdvcmsiLCJzdGF0ZSIsInNldFN0YXRlIiwibmVvbGluZSIsInNldE5lb0xpbmUiLCJuZW9saW5lTjMiLCJzZXROZW9MaW5lMyIsImJsb2NrSGVpZ2h0Iiwic2V0QmxvY2tIZWlnaHQiLCJmZXRjaFdhbGxldE5ldHdvcmsiLCJzdGF0dXMiLCJkYXRhIiwiZGVmYXVsdE5ldHdvcmsiLCJlcnJvciIsImluaXREYXAiLCJnZXRBY2NvdW50IiwidGhlbiIsImdldFB1YmxpY0tleSIsInB1YmxpY0tleURhdGEiLCJwdWJsaWNLZXkiLCJzY3JwQWRkcmVzcyIsIlNjcmlwdEhhc2hUb0FkZHJlc3MiLCJjYXRjaCIsInR5cGUiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siLCJnZXRTY3JpcHRIYXNoRnJvbUFkZHJlc3MiLCJwYXJhbXMiLCJDb250cmFjdFBhcmFtIiwiaGFzaDE2MCIsImFtb3VudCIsInBsYWNlQmV0Iiwic2VuZCIsImZyb21BZGRyZXNzIiwidG9BZGRyZXNzIiwiYXNzZXQiLCJmZWUiLCJicm9hZGNhc3RPdmVycmlkZSIsInR4aWQiLCJub2RlVVJMIiwiaW5pdE4zRGFwaSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5FT0xpbmVOMyIsIkluaXQiLCJpbml0Q29tbW9uRGFwaSIsIk5FT0xpbmUiLCJlcnIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJFdmVudEVtaXR0ZXIiLCJXaXRuZXNzU2NvcGUiLCJCYXNlV2FsbGV0QWRhcHRlciIsIldhbGxldEVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJXYWxsZXROb3RGb3VuZEVycm9yIiwiYXJndW1lbnRzIiwibmFtZSIsIldhbGxldE5vdEluc3RhbGxlZEVycm9yIiwiV2FsbGV0Tm90UmVhZHlFcnJvciIsIldhbGxldENvbm5lY3Rpb25FcnJvciIsIldhbGxldERpc2Nvbm5lY3RlZEVycm9yIiwiV2FsbGV0RGlzY29ubmVjdGlvbkVycm9yIiwiV2FsbGV0QWNjb3VudEVycm9yIiwiV2FsbGV0VGltZW91dEVycm9yIiwiV2FsbGV0V2luZG93QmxvY2tlZEVycm9yIiwiV2FsbGV0V2luZG93Q2xvc2VkRXJyb3IiLCJXYWxsZXRNZXRob2ROb3RTdXBwb3J0ZWRFcnJvciIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwidmFsdWUiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwiZG9uZSIsImFwcGx5IiwicG9sbCIsImNhbGxiYWNrIiwiaW50ZXJ2YWwiLCJjb3VudCIsInNldFRpbWVvdXQiLCJwb2xsVW50aWxSZWFkeSIsImFkYXB0ZXIiLCJwb2xsSW50ZXJ2YWwiLCJwb2xsQ291bnQiLCJyZWFkeSIsImVtaXQiLCJ3YXJuIiwicnBjIiwid2FpdFR4IiwidHhJZCIsInJlYWRGcmVxdWVuY3kiLCJ0aW1lb3V0Iiwic3RhcnQiLCJEYXRlIiwibm93IiwicnBjQ2xpZW50IiwiUlBDQ2xpZW50IiwidHJhbnNhY3Rpb24iLCJnZXRSYXdUcmFuc2FjdGlvbiIsIlJlYWN0IiwiV2FsbGV0QnV0dG9uIiwibWVtbyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJlbmRJY29uIiwic3RhcnRJY29uIiwic3R5bGUiLCJ0YWJJbmRleCIsImp1c3RpZnlDb250ZW50IiwiY3JlYXRlRWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsIldhbGxldENvbGxhcHNlIiwiaWQiLCJleHBhbmRlZCIsInJlZiIsImluc3RhbnQiLCJ0cmFuc2l0aW9uIiwib3BlbkNvbGxhcHNlIiwibm9kZSIsImN1cnJlbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbG9zZUNvbGxhcHNlIiwib2Zmc2V0SGVpZ2h0Iiwib3ZlcmZsb3ciLCJoYW5kbGVDb21wbGV0ZSIsImhhbmRsZVRyYW5zaXRpb25FbmQiLCJldmVudCIsInRhcmdldCIsInByb3BlcnR5TmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyb2xlIiwidW5kZWZpbmVkIiwiX19yZXN0IiwicyIsInQiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsImkiLCJsZW5ndGgiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInVzZU1lbW8iLCJXYWxsZXRJY29uIiwiV2FsbGV0Q29ubmVjdEJ1dHRvbiIsIl9hIiwicHJvcHMiLCJjb25uZWN0IiwiY29ubmVjdGluZyIsImhhbmRsZUNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsImNvbnRlbnQiLCJXYWxsZXREaXNjb25uZWN0QnV0dG9uIiwiZGlzY29ubmVjdCIsImRpc2Nvbm5lY3RpbmciLCJzcmMiLCJpY29uIiwiYWx0IiwiV2FsbGV0TGlzdEl0ZW0iLCJ1c2VXYWxsZXRNb2RhbCIsIldhbGxldE1vZGFsQnV0dG9uIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJXYWxsZXRNb2RhbENvbnRleHQiLCJXYWxsZXRNb2RhbCIsIldhbGxldE1vZGFsUHJvdmlkZXIiLCJQcm92aWRlciIsImNyZWF0ZVBvcnRhbCIsImxvZ28iLCJmZWF0dXJlZFdhbGxldHMiLCJjb250YWluZXIiLCJ3YWxsZXRzIiwic2VsZWN0Iiwic2V0RXhwYW5kZWQiLCJmYWRlSW4iLCJzZXRGYWRlSW4iLCJwb3J0YWwiLCJzZXRQb3J0YWwiLCJmZWF0dXJlZCIsIm1vcmUiLCJzbGljZSIsImhpZGVNb2RhbCIsImhhbmRsZUNsb3NlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVXYWxsZXRDbGljayIsIndhbGxldE5hbWUiLCJoYW5kbGVDb2xsYXBzZUNsaWNrIiwiaGFuZGxlVGFiS2V5IiwiZm9jdXNhYmxlRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmlyc3RFbGVtZW50IiwibGFzdEVsZW1lbnQiLCJzaGlmdEtleSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImZvY3VzIiwiaGFuZGxlS2V5RG93biIsImtleSIsImdldENvbXB1dGVkU3R5bGUiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsIndpZHRoIiwiZCIsIm1hcCIsIkZyYWdtZW50IiwieG1sbnMiLCJvbk1vdXNlRG93biIsImNvcGllZCIsInNldENvcGllZCIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIl9hZGRyZXNzIiwiY29weUFkZHJlc3MiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJvcGVuRHJvcGRvd24iLCJjbG9zZURyb3Bkb3duIiwib3Blbk1vZGFsIiwibGlzdGVuZXIiLCJjb250YWlucyIsInBvaW50ZXJFdmVudHMiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIldhbGxldE5vdFNlbGVjdGVkRXJyb3IiLCJXYWxsZXRDb250ZXh0IiwiV0FMTEVUX0lOSVRJQUxfU1RBVEUiLCJXYWxsZXRQcm92aWRlciIsImF1dG9Db25uZWN0Iiwib25FcnJvciIsIl9vbkVycm9yIiwic2V0TmFtZSIsInNldENvbm5lY3RpbmciLCJzZXREaXNjb25uZWN0aW5nIiwiaXNDb25uZWN0aW5nIiwiaXNEaXNjb25uZWN0aW5nIiwiaXNVbmxvYWRpbmciLCJ3YWxsZXRzQnlOYW1lIiwicmVkdWNlIiwibmV3TmFtZSIsIm9uUmVhZHkiLCJvbkNvbm5lY3QiLCJvbkRpc2Nvbm5lY3QiLCJvcGVuIiwidXJsIiwiaW52b2tlUmVhZCIsInJlcXVlc3QiLCJpbnZva2VSZWFkTXVsdGkiLCJpbnZva2VNdWx0aSIsInNpZ25NZXNzYWdlIiwib24iLCJvZmYiXSwic291cmNlUm9vdCI6IiJ9