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
import neo3Dapi from 'neo3-dapi';


const Index: Portfolio = () => {
  const NeoContractHash = "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5";
  const BettingManagerContractHash =
    "0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b";

	const brian = "NYKNWWmArjHD7uXFpuGeDH6ucYGpsf2s6Y"
	
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
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/main.css" />
      </Head>
      <nav className="relative container mx-auto p-2 ">
        <div className="flex items-center justify-between">
          <Link href="/">

          <div  className="pt-2 py-6 flex flex-row justify-between items-center ">
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
      <section id="hero">
        <div className="container flex flex-col-reverse items-center justify-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
          <div className="">
            <div className="md:w-1/2 flex flex-col items-center space-y-12">
              <img src="img/profile.png" alt="" />
              <p className="text-white text-2xl">Yattish</p>
            </div>
          </div>

          <div className=" md:w-1/2 space-y-12">
            <img src="img/portfolio.png" height={300} width={300} alt="" />
          </div>
        </div>
        
      </section>


 
      <section id="testimonials">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            <div className="my-16 flex flex-col items-center justify-center min-w-full ">
              <p className="text-5xl text-white font-bold subpixel-antialiased py-4 tracking-widest">
                Current Bets
              </p>

              <table className="min-w-full border border-slate-800">
                <thead className="border-b bg-[#B227CA] ">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-bold  text-white px-6 py-4 text-left"
                    >
                      Game Names
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  text-white px-6 py-4 text-left"
                    >
                      Match
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold text-white px-6 py-4 text-left"
                    >
                     Team
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold text-white px-6 py-4 text-left"
                    >
                      Date/Time
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold text-white px-6 py-4 text-left"
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#15174A]   ">
                  <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    CS:GO - BTS Major Antwerp
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    Semi-final
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    Cloud9
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    May 12, 2022 4:30 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    1000 X
                     
                    </td>
                  </tr>
                
                  <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    CS:GO - PGL Pro Series SEA
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    Final
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    OFFSET
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    May 22, 2022 9:30 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    800 X
                    </td>
                  </tr>
                </tbody>
              </table>


              <p className="text-5xl text-white font-bold subpixel-antialiased py-4 tracking-widest">
                Past Bets
              </p>
              <table className="min-w-full border border-slate-800">
                <thead className="border-b bg-[#B227CA] ">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-bold  text-white px-6 py-4 text-left"
                    >
                      W/L
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  text-white px-6 py-4 text-left"
                    >
                      Game Names
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold text-white px-6 py-4 text-left"
                    >
                      Date/Time
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold text-white px-6 py-4 text-left"
                    >
                      Amount
                    </th>
                   
                  </tr>
                </thead>
                <tbody className="bg-[#15174A]   ">
                 


           
                  <tr className="border-b">
                  
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                      <img src="img/w.png" alt="" />
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    CS:GO - BTS Major Antwerp
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                      Oct 15, 2022 4:00 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                      50+
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      <img src="img/W.png" alt="" />
                    </td>
                   
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    CS:GO - PGL Pro Series SEA
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                      Sep 22, 2022 4:30 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                      500+
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      <img src="img/L.png" alt="" />
                    </td>
                   
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    CS:GO - World Series
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                      Sep 22, 2022 4:30 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                      250+
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      <img src="img/L.png" alt="" />
                    </td>
                   
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                    CS:GO - PGL Pro Series SEA
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                      Sep 22, 2022 4:30 PM
                    </td>
                    <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                      1000+
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .container {
          padding: 0 2rem;
        }

        .main {
          min-height: 100vh;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .footer {
          display: flex;
          flex: 1;
          padding: 2rem 0;
          border-top: 1px solid #eaeaea;
          justify-content: center;
          align-items: center;
        }

        .footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          margin: 4rem 0;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          max-width: 300px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
          margin-left: 0.5rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        .wallet-buttons {
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
      `}</style>
    </>
  );
};

export default Index;
