import { Link } from "react-router-dom";
import { OurServices } from "../utils/OurServices";

export default function OurService() {
  return (
    <section id="service" className="pb-16 mt-32">
      <div className="container">
        <h1 className='mx-auto text-center w-fit text-3xl lg:text-5xl font-semibold text-slate-800 mb-9 relative before:absolute before:bg-cyan-500 before:h-[3px] before:rounded-full before:w-20 before:shadow before:shadow-cyan-400/50 before:-bottom-3 before:right-1/2 before:translate-x-1/2'>Layanan yang Tersedia</h1>
        <p className="mx-auto text-center w-2/3 text-base md:text-lg text-slate-500 mb-10">Dapatkan panduan dan saran dari para ahli kesehatan terpercaya, membantu Anda</p>
        <div className="grid grid-cols-1 d md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OurServices.map((service) => (
            <Link to={service.link} className="flex flex-col bg-white justify-between shadow-sm rounded-lg  py-6 px-6 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 cursor-pointer duration-300" key={service.title}>
              <figure className={`w-[72px] h-[72px] p-4 rounded-full ${service.color}`}>
                {<service.icon className="w-full h-full" />}
              </figure>
              <div className="space-y-1">
                <h3 className="pt-4 font-semibold text-lg md:text-xl text-slate-700">{service.title}</h3>
                <p className="text-slate-500 text-base md:text-lg">{service.desc}</p>
              </div>
              <div className="flex justify-end items-center pt-6">
                <button className="text-white md:text-lg bg-cyan-500 py-2 px-6 md:py-3  md:px-10 rounded-full hover:opacity-80 hover:scale-95 duration-300">Mulai</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
