import Hero from '../components/Hero';
import Partner from '../components/Partner';
import Review from '../components/Review';
import Navbar from '../components/Navbar';
import OurService from '../components/OurService';
import Recipes from '../components/Recipes';
import Nutritions from '../components/Nutritions';
import BMICalculator from '../components/BMICalculator'
import CTA from '../components/CTA';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partner />
      <OurService />
      <Recipes />
      <Nutritions />
      <BMICalculator />
      <Review />
      <CTA />
      <Footer />
    </>
  )
}
