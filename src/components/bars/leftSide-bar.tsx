'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from '../ui/button';

import { sidebarLinks } from '@/constants/bar';

import { ModeToggle } from './components/theme-toggle';
import { Loader } from '../shared';

import shortenAddress from '@/utils/shortenAddress';
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useReadContracts,
} from 'wagmi';
import { BSC_CHAIN_ID, HOLESKY_CHAIN_ID, TOKEN_ADDRESS } from '@/config/env';
import ConnectButton from '../button/walletConnect';
import { erc20Abi } from '../../../contract/erc-20/abi';
import { formatUnits } from 'viem';

const LeftSidebar = () => {
  const { chain } = useAccount();
  const { address } = useAccount();
  const { status } = useConnect();
  const { disconnect } = useDisconnect();

  const pathname = usePathname();
  const router = useRouter();

  const {
    isLoading: tokenLoading,
    data: tokenData,
    error: tokenError,
  } = useBalance({
    address: address,
    token: TOKEN_ADDRESS as `0x${string}`,
    // onError(error) {
    //   console.log('Error', error);
    // },
  });

  // const {
  //   isLoading: tokenLoading,
  //   data: tokenData,
  //   error: tokenError,
  // }: any = useReadContracts({
  //   allowFailure: false,
  //   contracts: [
  //     {
  //       address: TOKEN_ADDRESS as `0x${string}`,
  //       abi: erc20Abi,
  //       functionName: 'balanceOf',
  //       args: [address],
  //     },
  //   ],
  // });

  const {
    data: coin,
    isError: coinError,
    isLoading: coinLoading,
  } = useBalance({
    address: address,
  });

  return (
    <nav className='leftsidebar'>
      <div className='flex flex-col gap-11'>
        <Link href='/' className='flex gap-3 items-center justify-center'>
          <Image
            src='/abcLogo.png'
            alt='logo'
            width={120}
            height={100}
            className='text-black hidden dark:flex'
          />
          <Image
            src='/abcLogo.png'
            alt='logo'
            width={120}
            height={100}
            className='text-black dark:hidden'
          />
        </Link>

        {status === 'pending' || tokenLoading || coinLoading ? (
          <div>
            <Loader />
          </div>
        ) : address ? (
          <Button
            onClick={() => router.push('/profile')}
            className='flex items-center justify-start gap-2 '
          >
            <Image
              src='https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yY2FLRVFyd2puOUs2ZXV1aEd1YVBhUnFQWjIiLCJyaWQiOiJ1c2VyXzJjYVNIakVtUXdINlJ1bzlJQkxJYnM3RzA3TSJ9'
              width={48}
              height={48}
              alt='profile image'
              className='rounded-full'
            />
            <w3m-button size='sm' balance='hide'/>
            <span>
              <p className='text-lg'>{shortenAddress(address)}</p>
              {chain && chain.id !== HOLESKY_CHAIN_ID ? (
                <p className='small-regular text-primary-600'>
                  {coin?.symbol} :{' '}
                  {coinError
                    ? 'error'
                    : formatUnits(coin!.value, coin!.decimals).slice(0, 8)}
                </p>
              ) : (
                <>
                  <p className='small-regular text-primary-600'>
                    AEC Token :{' '}
                    {tokenError
                      ? 'error'
                      : tokenData &&
                        formatUnits(tokenData.value, tokenData.decimals)}
                  </p>
                </>
              )}
            </span>
          </Button>
        ) : (
          <ConnectButton />
        )}

        <ul className='flex flex-col gap-6'>
          {sidebarLinks.map((link: any) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && 'bg-primary-500'
                }`}
              >
                <Link
                  href={link.route}
                  target={link.label === 'Chat Market' ? '_blank' : '_self'}
                  className={`flex gap-4 items-center p-4 hover:text-white ${
                    isActive && 'text-white'
                  }`}
                >
                  <Image
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && 'invert-white'
                    }`}
                    width={30}
                    height={30}
                  />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='flex-between gap-4'>
        {address && (
          <Button
            variant='ghost'
            className='shad-button_ghost hover:opacity-70'
            onClick={() => {
              disconnect();
            }}
          >
            <Image
              src='/icons/sign-out-alt.svg'
              alt='logout'
              width={30}
              height={30}
            />
            <p className='small-medium lg:base-medium'>Logout</p>
          </Button>
        )}

        <ModeToggle />
      </div>
    </nav>
  );
};

export default LeftSidebar;
