import recipePicture from '../assets/bmi2.jpg'
import { Link } from 'react-router-dom'
export default function Recipes() {
    return (
        <section id="recipe" className="mt-24 lg:mt-48">
            <div className="container">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
                    <figure className='rounded-2xl w-full md:h-[320px] lg:w-[750px] lg:h-[400px] overflow-hidden'>
                        <img src={recipePicture} alt="Healthy Food" className='w-full h-full object-fit' />
                    </figure>
                    <div className="lg:w-2/3">
                        <p className='text-lg text-cyan-500 mb-3'>BMI Check</p>
                        <h1 className='text-3xl lg:text-5xl font-semibold text-slate-800 mb-5'>Cek Berat Badan Ideal dan Tingkat Kesehatan Anda</h1>
                        <p className="text-base md:text-lg text-slate-500 mb-10">Halsa membantu Anda menghitung Body Mass Index (BMI) dengan mudah dan cepat. Dapatkan informasi tentang berat badan ideal dan tingkat kesehatan Anda berdasarkan usia, tinggi badan, dan berat badan.</p>
                        <Link to='/bmi-check'>
                            <button className="text-white md:text-lg bg-cyan-500 py-2 px-6 md:py-3  md:px-8 rounded-full hover:opacity-80 hover:scale-95 duration-300">Telusuri</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
