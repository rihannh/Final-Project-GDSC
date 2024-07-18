import { Link } from 'react-router-dom'
import recipePicture from '../assets/recipe.jpg'
export default function Recipes() {
    return (
        <section id="recipe" className="mt-24">
            <div className="container">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
                    <figure className='rounded-2xl w-full md:h-[320px] lg:w-[750px] lg:h-[400px] overflow-hidden'>
                        <img src={recipePicture} alt="" className='w-full h-full object-cover' />
                    </figure>
                    <div className="lg:w-2/3">
                        <p className='text-lg text-cyan-500 mb-3'>Resep Makanan Sehat dan Lezat</p>
                        <h1 className='text-3xl lg:text-5xl font-semibold text-slate-800 mb-5'>Kreasikan Hidangan Sehat Setiap Hari</h1>
                        <p className="text-base md:text-lg text-slate-500 mb-10">Temukan berbagai resep makanan sehat yang mudah dan lezat. Dapatkan panduan dari para ahli gizi untuk membantu Anda menjaga pola makan yang seimbang dan bergizi.</p>
                        <Link to='/recipe'>
                            <button className="text-white md:text-lg bg-cyan-500 py-2 px-6 md:py-3  md:px-8 rounded-full hover:opacity-80 hover:scale-95 duration-300">Dapatkan Resep</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
