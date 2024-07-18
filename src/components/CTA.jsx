import Meteors from "./magicui/Meteors"
import ShineBorder from "./magicui/ShineBorder"
import CtaBackground from '../assets/gym.jpg'
import { Link } from 'react-router-dom'

export default function CTA() {
    return (
        <section id='cta' className='mt-24'>
            <div className="container">
                <ShineBorder className="flex relative overflow-hidden flex-col lg:text-center justify-between items-center bg-slate-900 rounded-xl p-8 lg:p-16 gap-8" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                    <Meteors number={30} />
                    <img src={CtaBackground} alt="Gym" className="absolute -z-0 top-0 opacity-[3%]" />
                    <div className="lg:w-3/5 space-y-3 z-10">
                        <h3 className='text-xl md:text-3xl font-semibold text-white'>Mulai Gaya Hidup Sehat Anda Hari Ini!</h3>
                        <p className='text-base md:text-lg text-white'>Halsa adalah sumber lengkap untuk membantu Anda mencapai tujuan kesehatan Anda. Dapatkan akses ke ribuan resep lezat dan sehat, informasi nutrisi yang akurat, dan komunitas yang suportif.</p>
                    </div>
                    <Link to='/bmi-check'>
                        <button className="text-slate-800 z-10 md:text-lg bg-cyan-500 py-2 px-6 md:py-3 w-fit h-fit md:px-16 rounded-full hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/30 duration-300">Mulai Sekarang</button>
                    </Link>
                </ShineBorder>
                <div className="flex flex-col lg:flex-row justify-between py-12 md:py-[72px] mt-32 gap-y-6 lg:gap-y-0">
                    <h1 className=" text-3xl md:text-5xl text-slate-800 font-semibold">Anda masih ragu?😉</h1>
                    <div className="space-x-2 md:space-x-6">
                        <button className="text-white text-lg md:text-2xl border-[3px] border-cyan-500 bg-cyan-500 py-2 px-6 md:py-3  md:px-8 rounded-full hover:bg-transparent hover:text-cyan-500 duration-300">Telusuri</button>
                        <button className="text-cyan-500 border-[3px] border-cyan-500 text-lg md:text-2xl bg-transparent py-2 px-6 md:py-3  md:px-8 rounded-full hover:bg-cyan-500 hover:text-white duration-300">Hubungi Kami</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
