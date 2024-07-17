import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiFillDiscord } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

export default function Footer() {
    return (
        <footer className=" mt-24">
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-between py-12 md:py-[72px] gap-y-6 lg:gap-y-0">
                    <h1 className=" text-3xl md:text-5xl text-slate-800 font-semibold">Anda masih ragu?😉</h1>
                    <div className="space-x-2 md:space-x-6">
                        <button className="text-white text-lg md:text-2xl border-[3px] border-cyan-500 bg-cyan-500 py-2 px-6 md:py-3  md:px-8 rounded-full hover:bg-transparent hover:text-cyan-500 duration-300">Telusuri</button>
                        <button className="text-cyan-500 border-[3px] border-cyan-500 text-lg md:text-2xl bg-transparent py-2 px-6 md:py-3  md:px-8 rounded-full hover:bg-cyan-500 hover:text-white duration-300">Hubungi Kami</button>
                    </div>
                </div>
            </div>
            <div className="bg-white border-t border-slate-400/40">
                <div className="container">
                    <div className="flex flex-wrap gap-y-14 lg:gap-y-0 justify-between pt-10 lg:pt-16">
                        <div className="lg:w-1/3 space-y-4">
                            <img src="/vite.svg" alt="" className="h-16" />
                            <p className="text-slate-500 text-base lg:text-lg">Halsa adalah platform yang menyediakan berbagai informasi dan panduan lengkap untuk membantu Anda mencapai tujuan kesehatan.</p>
                        </div>
                        <div className="flex flex-wrap gap-20">
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold pb-2 text-slate-700">Tentang</h3>
                                <p className="text-base lg:text-lg text-slate-500 hover:text-cyan-500 duration-300"><a href="">Tentang Kami</a></p>
                                <p className="text-base lg:text-lg text-slate-500 hover:text-cyan-500 duration-300"><a href="">Layanan</a></p>
                                <p className="text-base lg:text-lg text-slate-500 hover:text-cyan-500 duration-300"><a href="">Kontak</a></p>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold pb-2 text-slate-700">Layanan</h3>
                                <p className="text-base lg:text-lg text-slate-500 hover:text-cyan-500 duration-300"><a href="">Hitung BMI</a></p>
                                <p className="text-base lg:text-lg text-slate-500 hover:text-cyan-500 duration-300"><a href="">Resep Makanan</a></p>
                                <p className="text-base lg:text-lg text-slate-500 hover:text-cyan-500 duration-300"><a href="">Nutrisi Makanan</a></p>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold pb-2 text-slate-700 text-center">Kontak</h3>
                                <button className="text-white md:text-lg bg-cyan-500 py-2 px-6 md:py-2  md:px-8 rounded-full hover:opacity-80 hover:scale-95 duration-300">Hubungi Kami</button>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-sm md:text-base text-slate-500 mt-20">Ⓒ 2024 All rights reserved Rihan Naufaldihanif.</p>
                    <div className="flex justify-center gap-4 mb-7 mt-3">
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
