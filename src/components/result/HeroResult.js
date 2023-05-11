import React from 'react';
import Expose from '../../assets/img/logo/expose.png';
import Xtujuh from '../../assets/img/logo/x17.png';
import { IoMdFootball } from 'react-icons/io';
import { MdOutlineLocationOn, MdOutlineCalendarToday } from 'react-icons/md';

const HeroResult = () => {
  return (
    <section className="min-h-[600px] h-auto w-full bg-hero bg-center bg-cover bg-no-repeat text-white relative mb-6 news">
        <div className='min-h-[500px] h-auto px-4 lg:px-[100px] pt-[120px] lg:pt-[150px] flex flex-col justify-between'>
            <div className='flex justify-center items-start gap-x-4'>
            {/* home */}
                <div className='flex flex-col'>
                    <div className='lg:w-[400px] w-auto flex flex-col sm:flex-row text-center items-center gap-x-4'>
                        <img src={Expose} className="lg:w-[100px] w-[70px]" alt='home logo' />
                        <h2 className='font-semibold lg:text-[25px] text-[20px] lg:w-auto w-[120px] line-clamp-1'>Expose FC</h2>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <div className='flex items-center justify-end gap-x-2'>
                            <p className='text-[13px]'>L. Messi 78'</p>
                            <IoMdFootball/>
                        </div>
                        <div className='flex items-center justify-end gap-x-2'>
                            <p className='text-[13px]'>C. Ronaldo 89'</p>
                            <IoMdFootball/>
                        </div>
                    </div>
                </div>

                {/* score */}
                <div className='flex flex-col items-center -mt-4'>
                    <h1 className='font-semibold text-[25px]'>FT</h1>
                    <div className='bg-[#1C6DD0] px-4 lg:px-8 py-1 lg:py-2 flex justify-between gap-x-2'>
                        <p className='text-[30px] font-semibold'>2</p>
                        <p className='text-[30px] font-semibold'>-</p>
                        <p className='text-[30px] font-semibold'>1</p>
                    </div>
                </div>

                {/* away */}
                <div className='flex flex-col'>
                    <div className='lg:w-[400px] w-auto flex lg:flex-row-reverse flex-col text-center items-center gap-x-4'>
                        <img src={Xtujuh} className="lg:w-[100px] w-[70px]" alt='home logo' />
                        <h2 className='font-semibold lg:text-[25px] text-[20px] lg:w-auto w-[120px] line-clamp-1'>X-17</h2>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <div className='flex items-center justify-start gap-x-2'>
                            <IoMdFootball/>
                            <p className='text-[13px]'>78' L. Messi</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col mb-4 gap-y-2 items-end'>
                <div className='flex items-center gap-x-2 text-[15px]'>
                    <p>Gelora Bung Karno, Jakarta</p>
                    <MdOutlineLocationOn />
                </div>
                <div className='flex items-center gap-x-2 text-[15px]'>
                    <p>12 Sep 2022, 15:30 WIB</p>
                    <MdOutlineCalendarToday />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroResult