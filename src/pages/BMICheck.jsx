import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BMICheck = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [colorClass, setColorClass] = useState('');

  const calculateBMI = (event) => {
    event.preventDefault();
    if (!weight || !height || !gender || !age) {
      alert('Please enter weight, height, age, and select gender');
      return;
    }
    const heightInMeters = height / 100;
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBmi);
    const bmiCategory = getBMICategory(calculatedBmi, gender, age);
    setCategory(bmiCategory.category);
    setColorClass(bmiCategory.colorClass);
  };

  const getBMICategory = (bmi, gender, age) => {
    let category = '';
    let colorClass = '';
    if (age < 18) {
      // Interpretasi BMI untuk anak-anak dan remaja
      if (bmi < 5) {
        category = 'Underweight';
        colorClass = 'text-yellow-500';
      } else if (bmi >= 5 && bmi < 85) {
        category = 'Normal weight';
        colorClass = 'text-green-500';
      } else if (bmi >= 85 && bmi < 95) {
        category = 'Overweight';
        colorClass = 'text-yellow-500';
      } else {
        category = 'Obesity';
        colorClass = 'text-red-500';
      }
    } else {
      // Interpretasi BMI untuk orang dewasa
      if (bmi < 18.5) {
        category = 'Underweight';
        colorClass = 'text-yellow-500';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        colorClass = 'text-green-500';
      } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        colorClass = 'text-yellow-500';
      } else {
        category = 'Obesity';
        colorClass = 'text-red-500';
      }
    }
    return { category, colorClass };
  };

  return (
    <>
      <Navbar />
      <section id="calculator" className='mt-24 lg:mt-32'>
        <div className="container">
          <h1 className="text-3xl lg:text-5xl font-bold mb-8">BMI Check</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={calculateBMI} className="space-y-4">
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="gender" className="text-lg font-medium">Jenis Kelamin:</label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                    required
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="male">Laki - Laki</option>
                    <option value="female">Perempuan</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="age" className="text-lg font-medium">Umur</label>
                  <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="height" className="text-lg font-medium">Tinggi Badan (cm):</label>
                  <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="weight" className="text-lg font-medium">Berat Badan (kg):</label>
                  <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-white md:text-lg bg-cyan-500 py-2 px-6 md:py-2  md:px-6 rounded-full hover:opacity-80 hover:scale-95 duration-300"
              >
                Hitung BMI
              </button>
            </form>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold">Your BMI: <span className={colorClass}>{bmi}</span></h2>
              <p className="text-lg">Category: <span className={colorClass}>{category}</span></p>
            </div>
          </div>

        </div>
      </section>
      <section id="bmi-article" className='pt-6 mt-12 mb-24 border-t'>
        <div className="container">
          <h1 className='text-xl md:text-3xl text-cyan-500 mb-4 font-semibold'>Apa itu BMI?</h1>
          <p className='text-base md:text-lg text-slate-500 mb-6'>Body Mass Index (BMI) adalah cara menghitung berat badan ideal berdasarkan tinggi dan berat badan. BMI juga dapat dibedakan berdasarkan usia.</p>
          <h1 className='text-xl md:text-3xl text-cyan-500 mb-4 font-semibold'>Apa itu Kalkulator BMI?s</h1>
          <p className='text-base md:text-lg text-slate-500 mb-6'>Kalkulator BMI adalah alat untuk mengidentifikasi apakah berat badan kamu termasuk dalam kategori ideal atau tidak. Kalkulator ini dapat digunakan oleh umur berapa pun. Perlu diingat bahwa Kalkulator BMI ini tidak dapat diaplikasikan untuk ibu hamil karena standar BMI yang berbeda. Hal yang perlu diperhatikan pada Kalkulator BMI:</p>
          <ul className='list-disc list-inside text-slate-500 text-base md:text-lg'>
            <li>BMI Normal berada pada kisaran 17-25</li>
            <li>Jika angka BMI melebihi 25, maka kamu memiliki berat badan berlebihs</li>
            <li>Jika angka BMI berada di bawah 17, maka kamu memiliki berat badan rendah</li>
            <li>Jika angka BMI sudah melebihi angka 27, sebaiknya segera dilakukan penanganan untuk mencegah timbulnya penyakit</li>
          </ul>
        </div>

      </section>
      <Footer />
    </>
  );
};

export default BMICheck;
