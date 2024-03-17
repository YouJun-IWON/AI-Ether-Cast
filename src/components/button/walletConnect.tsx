import { useWeb3Modal, useWeb3ModalTheme } from '@web3modal/wagmi/react';

export default function ConnectButton() {
  // 4. Use modal hook
  const { setThemeMode } = useWeb3ModalTheme();

  setThemeMode('light');

  const { open } = useWeb3Modal();

  return (
    <>
      <button
        className='relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md'
        onClick={() => open()}
      >
        <span className='w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute'></span>
        <span className='relative w-full py-3 text-center transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400'>
          <span className='relative text-white'>Sign with Wallet</span>
        </span>
      </button>
    </>
  );
}
