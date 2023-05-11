import React from 'react';

import Logo from '../assets/img/logo/logo-bpl.png';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
        <div className="bg-gradient-to-r from-[#1C6DD0] via-[#0575E6] to-[#00F260]">
            <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white" href='/'>
                    <img className='h-[40px]' src={Logo} alt=''/>
                    <span className="ml-3 text-xl">Bandung Premiere League</span>
                </a>
                <p className="text-sm after:sm:ml-6 sm:mt-0 mt-4 text-white"> © -
                    <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1"
                        target="_blank">Muzib Muzakar</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-white" href="/">
                        <FaInstagram className='h-5'/>
                    </a>
                    <a className="ml-3 text-white" href="/">
                        <FaTwitter className='h-5'/>
                    </a>
                    <a className="ml-3 text-white" href="/">
                        <FaFacebookF className='h-5'/>
                    </a>
                    <a className="ml-3 text-white" href="/">
                        <FaYoutube className='h-5'/>
                    </a>
                </span>
            </div>
        </div>
    </footer>
  );
}

export default Footer;