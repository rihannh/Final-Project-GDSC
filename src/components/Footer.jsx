import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiFillDiscord } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-2">
      <div className="bg-white border-t border-slate-400/40 pb-3">
        <div className="container">
          <div className="flex flex-wrap gap-y-14 lg:gap-y-0 justify-between pt-10 lg:pt-16">
            <div className="lg:w-1/3 space-y-4">
              <img src="/vite.svg" alt="" className="h-16" />
              <p className="text-slate-500 text-base lg:text-lg">Halsa adalah platform yang menyediakan berbagai informasi dan panduan lengkap untuk membantu Anda mencapai tujuan kesehatan.</p>
            </div>
            <div className="flex flex-wrap gap-20">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold pb-2 text-slate-700">Tentang</h3>
                {location.pathname === '/' && (
                  <>
                    <p className="text-base lg:text-lg text-slate-500 hover:text-cyan-500 duration-300"><a href='/#hero'>Tentang Kami</a></p>
                    <p className="text-base lg:text-lg text-slate-500 hover:text-cyan-500 duration-300"><a href='/#service'>Layanan</a></p>
                  </>)}
                <p className="text-base lg:text-lg text-slate-500 hover:text-cyan-500 duration-300"><Link to='/contact'>Kontak</Link></p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold pb-2 text-slate-700">Layanan</h3>
                <p className="text-base lg:text-lg text-slate-500 hover:text-cyan-500 duration-300"><Link to='/bmi-check'>Hitung BMI</Link></p>
                <p className="text-base lg:text-lg text-slate-500 hover:text-cyan-500 duration-300"><Link to='/recipe'>Resep Makanan</Link></p>
                <p className="text-base lg:text-lg text-slate-500 hover:text-cyan-500 duration-300"><Link to='/nutrition'>Nutrisi Makanan</Link></p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold pb-2 text-slate-700 text-center">Kontak</h3>
                <Link to='/contact'>
                  <button className="text-white md:text-lg bg-cyan-500 py-2 px-6 md:py-2  md:px-8 rounded-full hover:opacity-80 hover:scale-95 duration-300">Hubungi Kami</button>
                </Link>
              </div>
            </div>
          </div>
          <p className="text-center text-sm md:text-base text-slate-500 mt-20">Ⓒ 2024 All rights reserved Rihan Naufaldihanif.</p>
          <div className="flex justify-center gap-4 mt-3">
            <a href="#" className="w-10 h-10 p-2 rounded-full flex items-center justify-center bg-cyan-500 hover:shadow-lg hover:shadow-cyan-300/60 hover:scale-110 duration-300">
              <FaLinkedinIn className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 p-2 rounded-full flex items-center justify-center bg-cyan-500 hover:shadow-lg hover:shadow-cyan-300/60 hover:scale-110 duration-300">
              <MdEmail className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 p-2 rounded-full flex items-center justify-center bg-cyan-500 hover:shadow-lg hover:shadow-cyan-300/60 hover:scale-110 duration-300">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 p-2 rounded-full flex items-center justify-center bg-cyan-500 hover:shadow-lg hover:shadow-cyan-300/60 hover:scale-110 duration-300">
              <AiFillDiscord className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 p-2 rounded-full flex items-center justify-center bg-cyan-500 hover:shadow-lg hover:shadow-cyan-300/60 hover:scale-110 duration-300">
              <BiWorld className="text-white" />
            </a>
          </div>

        </div>
      </div>

    </footer>
  )
}
