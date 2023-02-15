import React from 'react';
import {FaLinkedinIn} from "react-icons/fa"
import { BsGithub, BsTwitter, BsInstagram, BsSpotify} from 'react-icons/bs'
import {BiCopyright} from 'react-icons/bi'

function Socials() {

  const socials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/kennyndang/",
      logo: <FaLinkedinIn />,
    },
    {
      id: 2,
      link: "https://github.com/kenny-dd",
      logo: <BsGithub />,
    },
    {
      id: 3,
      link: "https://twitter.com/k4nnyc0des",
      logo: <BsTwitter />,
    },
    {
      id: 4,
      link: "https://www.instagram.com/kenny.dd/",
      logo: <BsInstagram />,
    },
    {
      id: 5,
      link: "https://open.spotify.com/user/lpsashelytv",
      logo: <BsSpotify />,
    },
  ];

  const socialIconFormat = "m-0.5 text-2xl bg-[#333] text-[#f3f3f3]"

  return (
    <section className="bg-[#202020] h-44">
      <div>
        <ul className="flex flex-row align-center items-center justify-center list-none text-white p-0">
        <li><a id="linkedin" href="https://www.linkedin.com/in/kennyndang/" target="_blank"><FaLinkedinIn className={socialIconFormat}/></a></li>
        <li><a id="linkedin" href="https://github.com/kenny-dd" target="_blank"><BsGithub className={socialIconFormat}/></a></li>
        <li><a id="linkedin" href="https://twitter.com/k4nnyc0des/" target="_blank"><BsTwitter className={socialIconFormat}/></a></li>
        <li><a id="linkedin" href="https://www.instagram.com/kenny.dd/" target="_blank"><BsInstagram className={socialIconFormat}/></a></li>
        <li><a id="linkedin" href="https://open.spotify.com/user/lpsashelytv" target="_blank"><BsSpotify className={socialIconFormat}/></a></li>
        </ul>
      </div>
   
      <div className='flex flex-row justify-center text-center text-[#B9B9B9]'>Kenny Dang <i><BiCopyright className='pt-1 text-2xl'/></i> 2023</div>
    </section>
  )
}

export default Socials