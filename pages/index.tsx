import { useWallet } from '@rentfuse-labs/neo-wallet-adapter-react';
import { waitTx, WitnessScope, WalletNotConnectedError } from '@rentfuse-labs/neo-wallet-adapter-base';
import { WalletDisconnectButton, WalletMultiButton } from '@rentfuse-labs/neo-wallet-adapter-react-ui';
import * as neolineN3 from "@rentfuse-labs/neo-wallet-adapter-neoline"
import { u, sc, wallet } from '@cityofzion/neon-js';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Neon from '@cityofzion/neon-js';
import { useState, useCallback, useEffect } from 'react';

const Index: NextPage = () => {



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
	const { connected, getNetworks, address, invoke, connect } = useWallet();
 const { account, setAccount } = useState(null);

	const [walletNetwork, setWalletNetwork] = useState<string | null>(null);

	const fetchWalletNetwork = useCallback(async () => {
		try {
			const result = await getNetworks();
			if (result.status === 'success') {
				setWalletNetwork(result.data?.defaultNetwork || null);
			}
		} catch (error) {
			console.error(error);
		}
	}, [getNetworks]);

	useEffect(() => {
		if (connected) {
			fetchWalletNetwork();
		} else {
			setWalletNetwork(null);
		}
	}, [connected, fetchWalletNetwork]);

	console.log(walletNetwork);

	const onClick = useCallback(async () => {
		if (!address || !connected) throw new WalletNotConnectedError();
		const account = wallet.getScriptHashFromAddress(address);
		// Construct the request and invoke it
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

		const scriptHash = '0x7a06e40cd08c0a8877c2d6d0a4974f7dbe9b2b7b'  // '0x9bfc7d88f11d2f52b244aab5296635ddc2d6081a';
		const contract = new Neon.experimental.SmartContract(Neon.u.HexString.fromHex(scriptHash), {
			networkMagic,
			rpcAddress,
			// @ts-ignore
			account
		});

		const signers = [
			{
				account: account,

				scopes: 'CalledByEntry',
			},
		];

		let res = await contract.invoke(
			'getNumber',
			[
			
			],
			// @ts-ignore
			signers,
		);
		console.log(JSON.stringify(res));
	}, [address, connected, invoke]);


	return (
		<>
		 <Head>
        <link rel="stylesheet" href="/main.css" />
      </Head>
		<nav className="relative container mx-auto p-2 ">
   
      <div className="flex items-center justify-between">
     
        <div className="pt-2 py-6 flex flex-row justify-between items-center ">
          <img src="img/LOGO.png" height="100" width="100" alt="" /> 
          <h1 className="lg:text-5xl md:text-5xl text-white font-bold  ">Planet X</h1>
        
        </div>
      
        <div className="hidden space-x-6 md:flex">
          <a href="games" className="hover:text-darkGrayishBlue text-white font-bold">Games</a>
          <a href="/portfolio.html" className="hover:text-darkGrayishBlue text-white font-bold">Portfolio</a>
        
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
        >
      
        </div>
      </div>
    </nav>

  
    <section id="hero">
      
      <div
        className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
      >
        
        <div className="">
          <div className="md:w-1/2 flex flex-col space-y-12">
            <img src="img/LOGO.png" alt="" />
          </div>
        </div>
        
        <div className=" md:w-1/2">
          <img src="img/right_image.png" alt="" />
        </div>
      </div>
    </section>

   
    <section id="features">
      
      <div
   
        className="container  flex flex-col items-center justify-center px-6 mx-auto mt-2  md:space-y-0 md:flex-row middle"
      >
       
      
<WalletMultiButton  style={{ 
	'backgroundColor': '#DC2984',
}}  />







      </div>
    </section>

  
    <section id="testimonials">
   
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
    
      
     
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
         
      
      
        <div className="my-16 flex flex-col items-center justify-center min-w-full ">
         
          <p className="text-5xl text-white font-bold subpixel-antialiased py-4 tracking-widest">Trending</p>
          
          <table className="min-w-full border border-slate-800">
            <thead className="border-b bg-[#B227CA] ">
              <tr>
                <th scope="col" className="text-sm font-bold  text-white px-6 py-4 text-left">
                  Rank
                </th>
                <th scope="col" className="text-sm font-bold  text-white px-6 py-4 text-left">
                  Game
                </th>
                <th scope="col" className="text-sm font-bold text-white px-6 py-4 text-left">
                  Game Names
                </th>
                <th scope="col" className="text-sm font-bold text-white px-6 py-4 text-left">
                  Date/Time
                </th>
                <th scope="col" className="text-sm font-bold text-white px-6 py-4 text-left">
                  24 hours
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#15174A]   ">
              <tr className="border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  <img src="img/up.png" alt="" />
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  <img src="img/cs.png" alt="" />
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  CS:GO - PGL Major Antwerp
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  Sep 22, 2022 4:30 PM
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  400+
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  <img src="img/up.png" alt="" />
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  <img src="img/dota.png" alt="" />
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  CS:GO - PGL Major Antwerp
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  Sep 22, 2022 4:30 PM
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  400+
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  <img src="img/down.png" alt="" />
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  <img src="img/freefire.png" alt="" />
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  Free Fire - World Series
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
                  <img src="img/down.png" alt="" />
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  <img src="img/honor.png" alt="" />
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  KOG - KPL Spring Playoffs
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  Nov 05, 2022 2:30 AM
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  100+
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  <img src="img/up.png" alt="" />
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  <img src="img/legends.png" alt="" />
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  LOL - EU Masters Spring
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  Sep 22, 2022 4:30 PM
                </td>
                <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                  25+
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
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono,
						Courier New, monospace;
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
