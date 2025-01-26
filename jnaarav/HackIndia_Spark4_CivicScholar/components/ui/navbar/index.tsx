import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import ActiveLink from '../link'
import { useAccount, useNetwork } from '@hooks/web3'
import Walletbar from './walletbar'
import img from '../../../public/images/RareCandy.png'
import Image from 'next/image'
const navigation = [
  { name: 'Marketplace', href: '/', current: true },
  { name: 'Create', href: '/nft/create', current: false },
]

export default function Navbar() {
  const { account } = useAccount()
  const { network } = useNetwork()

  return (
    <nav className="absolute top-0 flex h-[50px] w-full items-center justify-center font-semibold tracking-wider text-white [background-color:rgba(0,0,0,0.2)]">
      <div className="absolute left-0 flex h-[100px] w-[130px] items-center justify-center">
        <Image className="h-full w-full" objectFit="cover" src={img} />
      </div>
      <ul className="absolute left-[30%] flex items-center justify-center gap-[5rem]">
        <li>
          <a href="/">MarketPlace</a>
        </li>
        <li>
          <a href="/nft/create">Create</a>
        </li>
      </ul>
      <div className="mr-2 self-center text-gray-300 absolute right-[7rem]">
        <span className="inline-flex items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-sm font-medium text-purple-800">
          <svg
            className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400"
            fill="currentColor"
            viewBox="0 0 8 8"
          >
            <circle cx={4} cy={4} r={3} />
          </svg>
          {network.isLoading
            ? 'Loading...'
            : account.isInstalled
            ? network.data
            : 'Installed Web3 Wallet'}
        </span>
      </div>

      <div className="absolute right-[5%]">
        <Walletbar
          isLoading={account.isLoading}
          isInstalled={account.isInstalled}
          connect={account.connect}
          account={account.data}
        />
      </div>
    </nav>
  )
}
