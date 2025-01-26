
/* eslint-disable @next/next/no-img-element */

import type { NextPage } from 'next'
import { BaseLayout, NftList } from '@ui'
import { Nft, NftMeta } from '@_types/nft'
import { useWeb3 } from '@providers/web3'
import { useListedNfts, useNetwork } from '@hooks/web3';
import { ExclamationIcon } from '@heroicons/react/solid';

const Home: NextPage = () => {
  const { network } = useNetwork();
  return (
    <BaseLayout>
      <div className="relative h-screen w-screen overflow-y-auto">
        <div className="absolute inset-0">
          <div className="bg-transparent h-1/3 sm:h-2/3" />
        </div>
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">Amazing Creatures NFTs</h2>
            <p className="text-sm tracking-tight font-extrabold text-white sm:text-xl">
              Mint a NFT to get unlimited ownership forever!
            </p>
          </div>
            { network.isConnectedToNetwork ?
            <NftList /> :
            <div className="rounded-md bg-yellow-50 p-4 mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                    { network.isLoading ?
                      "Loading..." :
                      `Connect to ${network.targetNetwork}`
                    }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </BaseLayout>
  )
}

export default Home