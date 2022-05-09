// @ts-nocheck

import { useWallet } from "@rentfuse-labs/neo-wallet-adapter-react";
import {
  waitTx,
  WitnessScope,
  WalletNotConnectedError,
} from "@rentfuse-labs/neo-wallet-adapter-base";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@rentfuse-labs/neo-wallet-adapter-react-ui";
import { neolineN3 } from "@rentfuse-labs/neo-wallet-adapter-neoline";
import { u, sc, wallet } from "@cityofzion/neon-js";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Neon from "@cityofzion/neon-js";
import { useState, useCallback, useEffect } from "react";
import neo3Dapi from "neo3-dapi";

const Index: Bet = () => {
  const NeoContractHash = "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5";
  const BettingManagerContractHash =
    "0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b";

  const brian = "NYKNWWmArjHD7uXFpuGeDH6ucYGpsf2s6Y";

  // @ts-ignore
  const publishInvoke = async (
    rpcAddress,
    networkMagic,
    scriptHash,
    operation,
    args,
    account
  ) => {
    const contract = new Neon.experimental.SmartContract(
      Neon.u.HexString.fromHex(scriptHash),
      {
        networkMagic,
        rpcAddress,
        account,
      }
    );

    let result;
    try {
      result = await contract.invoke(operation, args);
    } catch (e) {
      console.log(e);
    }

    return result;
  };

  const { connected, getNetworks, address, invoke } = useWallet();
  // @ts-ignore
  const [account, setAccount] = useState();

  const [walletNetwork, setWalletNetwork] = useState<string | null>(null);
  const [state, setState] = useState(0);
  const [neoline, setNeoLine] = useState();
  const [neolineN3, setNeoLine3] = useState();
  const [blockHeight, setBlockHeight] = useState("78115");
  const fetchWalletNetwork = useCallback(async () => {
    try {
      const result = await getNetworks();
      if (result.status === "success") {
        setWalletNetwork(result.data?.defaultNetwork || null);
      }
    } catch (error) {
      console.error(error);
    }
  }, [getNetworks]);

  useEffect(() => {
    initDap();

    // balances

    if (connected) {
      fetchWalletNetwork();
      console.log("Account => ", neolineN3);

      if (neolineN3) {
        neolineN3.getAccount().then((account) => {
          console.log("Account found conneted => ", account);

          setAccount(account);
        });

        neolineN3.getPublicKey().then((publicKeyData) => {
          const { address, publicKey } = publicKeyData;

          console.log("Account address: " + address);

          console.log("Account public key: " + publicKey);
        });
      }
    } else {
      setWalletNetwork(null);
    }
  }, [connected, fetchWalletNetwork]);

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

    initCommonDapi
      .then(() => {
        console.log("The common dAPI method is loaded.");
        return initN3Dapi;
      })
      .then(() => {
        console.log("The N3 dAPI method is loaded.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/main.css" />
      </Head>
      <nav className="relative container mx-auto p-2 ">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="pt-2 py-6 flex flex-row justify-between items-center ">
              <img src="img/LOGO.png" height="100" width="100" alt="" />
              <h1 className="lg:text-5xl md:text-5xl text-white font-bold  ">
                Planet X
              </h1>
            </div>
          </Link>

          <div className="hidden space-x-6 md:flex">
            <div className="hover:text-darkGrayishBlue text-white font-bold">
              <Link href="/games">Games</Link>
            </div>
            <div className="hover:text-darkGrayishBlue text-white font-bold">
              <Link href="/portfolio">Portfolio</Link>
            </div>
          </div>

          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none focus:text-white"
          >
            <span className="hamburger-top bg-white"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          ></div>
        </div>
      </nav>

      <section></section>
      <section id="hero" className="p-6">
        <div className="betxlogo "></div>
        <div className="flex flex-col p-2 BetArea  box-border  ">
          <div className="flex flex-row p-6 justify-between justify-self-start ">
            <div className="flex  gameDetailsCard" >

            </div>
            <div className="right">
                <Image src="/img/right.png" width="300px" height="350px" />
            </div>
          </div>
          <div className="  flex flex-col betBox ">
            <p className="text-white text-2xl font-bold ">Place Bet</p>
            <button className="betButton justify-self-auto text-white text-2xl font-bold ">
              Bet X
            </button>
          </div>
        </div>
        <div className="timer"></div>
      </section>

      <style jsx>{`
        .container {
          padding: 0 2rem;
        }
        .gameDetailsCard {
          box-sizing: border-box;

        
          width: 200px;
          height: 300px;
          left: 144px;
          top: 528px;

          background: rgba(137, 132, 202, 0.35);

          border-radius: 20px;
        }
        .BetArea {
          flex-grow: 1;
          display: flex;
          justify-content: end;

          align-items: center;
          flex-direction: column;
          padding: 0;
          margin: 0;

          position: relative;
          box-sizing: border-box;
          height: 700px;
          top: 340px;
          background: rgba(21, 23, 74, 0.7);
          border: 2px solid #c829dd;
          box-shadow: 8px 8px 8px rgba(220, 41, 78, 0.21);
          border-radius: 50px;
        }

        .timer {
          position: absolute;
          width: 107px;
          height: 119px;
          left: 1205px;
          top: 435px;

          background: url(/img/timer.png) no-repeat;
        }
        .betxlogo {
          position: absolute;
          width: 243.15px;
          height: 68.24px;
          left: 595px;
          top: 409.08px;

          background: url(/img/betxlogo.png) no-repeat;

          background-size: contain;
        }

        .betBox {
          display: flex;
          direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          box-sizing: border-box;

          width: 413px;
          height: 209px;

          background: rgba(196, 196, 196, 0.3);
          border-radius: 30px;
        }
        .betButton {
          position: relative;
          width: 283px;
          height: 85px;

          background: #dc2984;
          box-shadow: 6px 6px 8px rgba(200, 41, 221, 0.4);
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default Index;
