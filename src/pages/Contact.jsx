import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <>
      <Navbar />
      <section id="contact" className="mt-32 mb-24">
        <form action="" className="container space-y-5">
          <h1 className="text-3xl md:text-5xl text-center mb-8 font-bold text-slate-800">Hubungi Kami</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg md:text-xl font-medium text-slate-600">Subjek</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-lg md:text-xl font-medium text-slate-600">Pesan</label>
            <textarea
              type="number"
              className="p-2 border border-gray-300 rounded-lg min-h-72"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white md:text-lg bg-cyan-500 py-2 px-6 md:py-2  md:px-6 rounded-full hover:opacity-80 hover:scale-95 duration-300"
          >
            Kirim
          </button>
        </form>
      </section>
      <Footer />
    </>
  )
}
