/* eslint-disable @next/next/link-passhref */

// disable eslint-disable-next-line for this file
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
import Link from "next/link";
import Image from "next/image";
import Neon from "@cityofzion/neon-js";
import { useState, useCallback, useEffect } from "react";
import neo3Dapi from "neo3-dapi";

const Index: NextPage = () => {
  const NeoContractHash = "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5";
  const BettingManagerContractHash =
    "0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b";

  const bettingManagerAddress = "NYKNWWmArjHD7uXFpuGeDH6ucYGpsf2s6Y";

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
        let scrpAddress;
        neolineN3
          .ScriptHashToAddress({
            scriptHash: "0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b",
          })
          .then((result) => {
            const { address } = result;
            scrpAddress = address;
            console.log("address" + address);
          })
          .catch((error) => {
            const { type, description, data } = error;
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
          });

        // send gas token
      }
    } else {
      setWalletNetwork(null);
    }
  }, [connected, fetchWalletNetwork]);


  const placeBet = async () => {
    // neolineN3
    //   .send({
    //     fromAddress: address,
    //     toAddress: bettingManagerAddress,
    //     asset: "NEO",
    //     amount: "1",
    //     fee: "0.0001",
    //     broadcastOverride: false,
    //   })
    //   .then((result) => {
    //     console.log("Send transaction success!");
    //     console.log("Transaction ID: " + result.txid);
    //     console.log("RPC node URL: " + result.nodeURL);
    //   });


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
            <div className="pt-2 py-6 flex gap-4 flex-row justify-between items-center ">
              <img src="img/LOGO.png" height="100" width="100" alt="" />
              <h1 className="planet_x_logo ">
                Planet X
              </h1>
            </div>
          </Link>

          <div className=" space-x-6 md:flex">
            <div className="header_text">
              <Link href="/games">Homepage</Link>
            </div>
            <div className="header_text">
              <Link href="/portfolio" >Roadmap</Link>
            </div>
            <div className="connect_button">
              <p className="text_primary">Connect Wallet</p>
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
      <section id="hero" className="flex flex-col">
        <div className= "   container flex flex-row justify-between items-center ">
          <div className="flex flex-col items-center gap-2 ">

<div className="flex flex-col items-start gap-2 ">  
<p className="text_secondary" >Coming from PLANET X, betting to the moon</p>
              <p className="description">Build for you from the start. Place bets on E-sports games together, on a simple and distructive platform.</p>
</div>

             
              <div className=" flex flex-row connect_wallet_large">
              <p className="connect_wallet_large_text ">Connect Wallet</p>
   {/* <Image src={'/img/vector.png'} width={12} height={12}  alt="connect"/> */}
            </div>
     
        
          </div>
          <div className=" md:w-1/2">
            <img src="img/basket_ball_illustration.png" alt="" />
          </div>


        </div>
<div className="flex flex-row items-center justify-center info_box   ">
<div className="flex flex-row   ">
          <div> 
            <Image src={'/img/logo.png'} width={64} height={64}  alt="logo"/>
          </div>
<p className="info">PLANET X is an E-sports crypto betting platform</p>
        </div>
</div>


<div  className="flex flex-row gap-2 justify-center">

  <div className="  flex flex-col justify-between items-center">
  <div className=" flex flex-col can_do_box justify-center items-center p-2">

<div className="flex flex-row gap-2 justify-center items-center">
<Image src={"/img/star.png"} width={112} height={112} alt="" />
<div className="flex flex-col justify-between">
  <p className="description_box">
  Bet on E-Sports Matches
  </p>
  <p className="description_box">
  Gain winnings to go to the moon
  </p>
</div>
</div>


  </div>

  <div className=" flex flex-col can_do_box justify-center items-center p-2">

<div className="flex flex-row gap-2 justify-center items-center">
<Image src={"/img/star.png"} width={112} height={112} alt="" />
<div className="flex flex-col justify-between">
  <p className="description_box">
  Be part of the platform by governance
  </p>
  <p className="description_box flex-wrap">
  Let your portfolio grow even when you are not betting 
  </p>
</div>
</div>


  </div>

  </div>
  

<div className="flex flex-col">
<div className=" flex flex-col  can_do_box justify-center items-center p-2">

<div className="flex flex-row   gap-2   justify-between items-center p-2 ">
<Image src={"/img/star.png"} width={112} height={112}   alt="sd"/>
<div className="flex flex-col ">
  <p className="description_box">
  Bet on E-Sports Matches
  </p>
  <p className="description_box">
  Gain winnings to go to the moon
  </p>
</div>
</div>
  </div>
</div>


  

</div>
    
      </section>

   


      <style jsx>{`


.can_do_box {

  width: 570px;
  height: 254px;
  left: 116px;
  top: 1369px;
  
  background: linear-gradient(127.41deg, rgba(218, 37, 226, 0.8) 14.83%, rgba(87, 24, 243, 0.8) 110.24%, rgba(255, 245, 238, 0.8) 110.24%);
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */
  
  border-radius: 14px;

}


.description_box { 

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  /* identical to box height, or 36px */
  
  display: flex;
  align-items: center;
  
  color: #FFFFFF;
}





        .container {
          padding: 0 5rem;
        }

.placeBet {
  position: absolute;
width: 140px;
height: 42px;
left: 1182px;
top: 1847px;
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
      
.connect_wallet_large {

flex: display;
flex-direction: row;
  item-align: center;
  justify-content: center;

width: 220px;
height: 50px;
left: 204px;
right: 962px;
top: 400px;

background: #C829DD;
box-shadow: 4px 4px 4px rgba(255, 0, 127, 0.3);
border-radius: 4px;
}


.connect_wallet_large_text {
  height: 40px;
font-family: 'Trispace';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 150%;
/* identical to box height, or 30px */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.06em;

color: #FFFFFF;
}
        .description {
          padding: 3rem 0 3rem 0;
          width: 418px;
height: 72px;
left: 136px;
top: 573px;

font-family: 'Trispace';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 150%;
/* or 24px */

display: flex;
align-items: center;
letter-spacing: 0.06em;

color: #FFFFFF;
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
.planet_x_logo {

width: 246px;
height: 57px;
left: 223px;
top: 70px;

font-family: 'Trispace';
font-style: normal;
font-weight: 800;
font-size: 50px;
line-height: 57px;
/* identical to box height */


color: #FFFFFF;

text-shadow: 2px 2px 6px rgba(200, 41, 221, 0.6);
}
.connect_wallet_large_icon {
  position: absolute;
width: 24px;
height: 24px;
left: 204px;
top: 408px;
background: url('/img/vector.png');
}
.text_primary { 
  width: 160px;
  height: 24px;
  
  /* df l */
  
  font-family: 'Trispace';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */
  
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.06em;
  
  color: #FFFFFF;
  
  
  /* Inside auto layout */
  
  flex: none;
  order: 1;
  flex-grow: 0;
}

.text_secondary  {

width: 600px;
height: 69px;
left: 136px;
top: 481px;

font-family: 'Trispace';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 36px;
letter-spacing: 0.13em;

color: #FFFFFF;
}
.header_text { 
  width: 109px;
height: 23px;
left: 892px;
top: 90px;

font-family: 'Trispace';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
/* identical to box height */

text-decoration-line: underline;

color: #FFFFFF;
}

.header_text:hover {
  text-decoration-line: none;
}

.connect_button {

  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  
  width: 199px;
  height: 40px;
  
  background: #C829DD;
  border-radius: 4px;
  
  /* Inside auto layout */
  
  flex: none;
  order: 0;
  flex-grow: 0;
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


        .info {
    flex: display;;    
height: 57px;
left: 372px;
top: 915px;
align-self: center;
font-family: 'Trispace';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 41px;

color: #FFFFFF;

text-shadow: 2px 2px 6px rgba(255, 255, 255, 0.2);
        }

        .info_box {
        
          align-items: center;
          margin: 4rem;
          padding-top: 2rem;
      align-self: center;
          width: 60%;
          padding:2rem 2rem 1rem 2rem;
          height: 96px;
left: 204px;
right: 204px;
top: 900px;

background: #2B229F;
border-radius: 30px;
        }
      `}</style>
    </>
  );
};

export default Index;
