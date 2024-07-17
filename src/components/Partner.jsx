import { PartnerLogo } from '../utils/PartnerLogo'

export default function Partner() {
    return (
        <section id="partner" className=' mt-16' >
            <div className="container">
                {/* <h1 className='mx-auto w-fit text-3xl font-semibold text-slate-800 mb-10 relative before:absolute before:bg-cyan-500 before:h-[3px] before:rounded-full before:w-20 before:shadow before:shadow-cyan-400/50 before:-bottom-3 before:right-1/2 before:translate-x-1/2'>Partner Kami</h1> */}
                <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 lg:gap-x-24">
                    {PartnerLogo.map((item) => (
                        <figure key={item.name}>
                            <img src={item.logo} alt={item.name} className='h-10 lg:h-[72px]' />
                        </figure>
                    ))}

                </div>
            </div>
        </section>
    )
}
