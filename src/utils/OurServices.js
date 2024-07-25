import { IoScaleOutline } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import { GiBroccoli } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";

export const OurServices = [
  {
    title: "BMI Check",
    desc: "Hitung BMI Anda dengan mudah dan dapatkan saran kesehatan yang tepat",
    icon: IoScaleOutline,
    link: "/bmi-check",
    color: "bg-amber-100 text-amber-500"
  },
  {
    title: "Resep Sehat & Lezat",
    desc: "Temukan ribuan resep lezat dan bergizi untuk diet sehat dan gaya hidup aktif",
    icon: BiFoodMenu,
    link: "/recipe",
    color: "bg-green-100 text-green-500"
  },
  {
    title: "Nutrisi untuk Tubuh Ideal",
    desc: "Buat pilihan makanan yang lebih sehat dengan informasi nutrisi yang akurat",
    icon: GiBroccoli,
    link: "/nutrition",
    color: "bg-sky-100 text-sky-500"
  },
  {
    title: "Hubungi Kami!",
    desc: "Punya pertanyaan? Ingin berkolaborasi? Jangan ragu untuk menghubungi tim Halsa!",
    icon: MdOutlineEmail,
    link: "/contact",
    color: "bg-indigo-100 text-indigo-500"
  },
]