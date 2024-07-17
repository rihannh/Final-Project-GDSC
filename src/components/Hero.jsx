import heroImage from '../assets/hero-photo.png'
import NumberTickerDemo from './NumberTrickerDemo'
import doctor from '../assets/me.jpg'
import iconHero from '../assets/hero-icon.png'

export default function Hero() {
    const comment = '"Website ini sangat bermanfaat dalam diet saya"';
    return (
        <section id="hero" className='mt-28 lg:mt-16'>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    <div className=" flex flex-col justify-center gap-6">
                        <h1 className='font-bold text-cyan-500 text-3xl md:text-5xl'>Temukan Gaya Hidup Sehat yang Baru dengan Halsa</h1>
                        <p className='text-base text-slate-500 md:text-lg'>Dapatkan panduan komprehensif dari para ahli kesehatan, serta resep dan informasi nutrisi untuk membantu Anda menjalani hidup lebih sehat</p>
                        <button className='w-fit py-3 px-8 bg-cyan-500 text-white rounded-full text-base lg:text-xl font-medium'>Jelajahi Sekarang</button>
                        <div className="flex gap-12 mt-4">
                            <NumberTickerDemo valueNum={550} desc='Food Recipes' />
                            <NumberTickerDemo valueNum={10000} desc='Food Nutrients' />
                        </div>
                    </div>
                    <div className="">
                        <figure className='relative mx-auto w-[300px] md:w-[440px] lg:w-[520px]'>
                            <img src={heroImage} alt="" className='w-full h-full' />
                            <figure className='absolute bottom-4 md:bottom-12 shadow-sm right-0 bg-white/90 rounded-md py-2 px-3 w-fit'>
                                <div className="flex items-center w-fit gap-4 relative before:absolute before:bg-cyan-400 before:rounded-full before:w-4 before:h-4 before:-top-4 before:-right-5 before:-z-10 before:shadow-sm">
                                    <img src={doctor} className='h-10 rounded-full' alt="" />
                                    <div className="">
                                        <p className='text-slate-800 font-semibold'>dr. Halsa Sp. PD</p>
                                        <p className='text-slate-500 text-sm'>Spesialis Penyakit Dalam</p>
                                    </div>
                                </div>
                            </figure>
                            <img src={iconHero} className='absolute h-24 md:h-36 lg:h-40 top-20 -right-10' alt="Shield" />
                            <figure className='hidden md:block absolute bottom-32 shadow-sm -left-24 bg-white/90 rounded-md py-3 px-3 w-1/2'>
                                <div className="relative before:absolute before:bg-[#FFE3B3] before:rounded-full before:w-4 before:h-4 before:-top-4 before:-left-5 before:-z-10 before:shadow-sm">
                                    <p className='font-medium'>{comment}</p>
                                </div>
                            </figure>
                        </figure>

                    </div>
                </div>
            </div>
        </section>
    )
}
