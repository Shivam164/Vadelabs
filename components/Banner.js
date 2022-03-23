import Image from 'next/image';
import Video from '../assets/images/Video.png';
import styles from '../styles/Banner.module.css'

const Banner = () => {
  return (
    <div className={`${styles.dotted__background} flex items-center py-[3rem]`}>
        <div className='flex-1 pl-[8rem]'>
            <h1 className='text-6xl font-bold text-[#2E3B4E] [font-family: Poppins] pb-[0.8rem]'>Integrate APIs</h1>
            <h1 className='text-6xl font-bold text-[#2E3B4E] [font-family: Poppins] pb-[0.8rem]'>In Minutes</h1>
            <p className='text-[1.2rem] font-semibold pr-[4rem] mb-[2rem]'>Get rediculous creative with your products and let us do the hard word for you!</p>
            
            {/* input */}
            <div className='flex'>
                <input placeholder='email@example.com' className='p-2 [outline = 0] border-2 border-sky-500'/>
                <button className='px-3 py-2 text-white bg-[#2C4BFF] '>Get Early Access</button>
            </div>
        </div>
        <div className='flex-1 p-5 border-y-8 border-l-8 border-gray-200 rounded-l-[50px] bg-gray-100'>
            <Image src = {Video} className='w-40 h-40'/>
        </div>
    </div>
  )
}

export default Banner