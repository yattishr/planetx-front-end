import React from 'react'

export const CurrentBets = () => {
  return (
    <>
 <table className="min-w-full border border-slate-800">
                <thead className="border-b bg-[#B227CA] ">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-bold  text-white px-6 py-4 text-left"
                    >
                      Rank
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold  text-white px-6 py-4 text-left"
                    >
                      Game
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold text-white px-6 py-4 text-left"
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
               
                </tbody>
              </table>

    </>
  )
}
