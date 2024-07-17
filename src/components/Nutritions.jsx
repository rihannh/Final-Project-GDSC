import nutritionPicture from '../assets/nutrition2.jpg'
export default function Nutritions() {
    return (
        <section id="nutrition" className="mt-24 lg:mt-48">
            <div className="container">
                <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-8 lg:gap-16">
                    <figure className='rounded-2xl w-full md:h-[320px] lg:w-[750px] lg:h-[400px] overflow-hidden'>
                        <img src={nutritionPicture} alt="Healthy Food" className='w-full h-full object-cover' />
                    </figure>
                    <div className="lg:w-2/3">
                        <p className='text-lg text-cyan-500 mb-3'>Informasi Nutrisi Makanan</p>
                        <h1 className='text-3xl lg:text-5xl font-semibold text-slate-800 mb-5'>Pahami Kandungan Gizi Makanan Anda</h1>
                        <p className="text-base md:text-lg text-slate-500 mb-10">Halsa membantu Anda memahami kandungan gizi lengkap dari berbagai makanan dan minuman. Cari informasi gizi, filter dan urutkan hasil, pelajari lebih lanjut tentang nutrisi.</p>
                        <button className="text-white md:text-lg bg-cyan-500 py-2 px-6 md:py-3  md:px-8 rounded-full hover:opacity-80 hover:scale-95 duration-300">Lihat Nutrisi</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
