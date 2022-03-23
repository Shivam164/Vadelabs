import Image from 'next/image';
import Logo from "../assets/images/logo.png";

export const Navbar = () => {
  return (
    <div className="flex bg-gray-100 px-[5rem] h-[4rem] justify-between items-center	">
        <div className='w-[150px]'>
            <Image src = {Logo}/>
        </div>
        
        <div className='flex space-x-4'>
            <h1 className='font-semibold'>Skip the hassle</h1>
            <h1 className='font-semibold'>Cruise through backend</h1>
        </div>

        <button className='px-3 py-2 text-white rounded bg-[#2C4BFF]'>Get Early Access</button>
    </div>
  )
}
