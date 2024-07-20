import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FoodData } from '../utils/DataFood';
import PropTypes from 'prop-types';
import { IoMdClose } from "react-icons/io";
import ReactPaginate from 'react-paginate';

const Modal = ({ food, onClose }) => {
  if (!food) return null;

  return (
    <div className="fixed px-[20px] inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <IoMdClose className="absolute top-6 right-6 text-slate-600 w-6 h-6 hover:text-cyan-500 duration-300" onClick={onClose} />
        <h2 className="text-xl font-semibold text-cyan-500">{food.makanan}</h2>
        <h3 className='text-sm text-slate-500'>Per Sajian 100 gram</h3>
        <div className="space-y-2 max-w-md text-base mt-4">
          <div className="grid grid-cols-2 gap-6">
            <p className='text-slate-600 font-medium'>Kalori</p>
            <p>: {food.kalori} kcal</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <p className='text-slate-600 font-medium'>Lemak</p>
            <p>: {food.lemak} gram</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <p className='text-slate-600 font-medium'>Kolesterol</p>
            <p>: {food.kolesterol} mg</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <p className='text-slate-600 font-medium'>Sodium</p>
            <p>: {food.natrium} mg</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <p className='text-slate-600 font-medium'>Karbohidrat</p>
            <p>: {food.karbohidrat} gram</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <p className='text-slate-600 font-medium'>Protein</p>
            <p>: {food.protein} gram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FoodDetail = ({ food }) => {
  if (!food) return null;

  return (
    <div className="p-4 mb-4">
      <h2 className="text-3xl font-semibold text-cyan-500">{food.makanan}</h2>
      <h3 className='text-base text-slate-500'>Per Sajian 100 gram</h3>
      <div className="space-y-2 max-w-md text-lg mt-4">
        <div className="grid grid-cols-2 gap-6">
          <p className='text-slate-600 font-medium'>Kalori</p>
          <p>: {food.kalori} kcal</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <p className='text-slate-600 font-medium'>Lemak</p>
          <p>: {food.lemak} gram</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <p className='text-slate-600 font-medium'>Kolesterol</p>
          <p>: {food.kolesterol} mg</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <p className='text-slate-600 font-medium'>Sodium</p>
          <p>: {food.natrium} mg</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <p className='text-slate-600 font-medium'>Karbohidrat</p>
          <p>: {food.karbohidrat} gram</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <p className='text-slate-600 font-medium'>Protein</p>
          <p>: {food.protein} gram</p>
        </div>
      </div>
    </div>
  );
};

export default function Nutrition() {
  const [selectedFood, setSelectedFood] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [foodsPerPage] = useState(10);

  const filteredFoods = FoodData.filter(food =>
    food.makanan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastFood = (currentPage + 1) * foodsPerPage;
  const indexOfFirstFood = indexOfLastFood - foodsPerPage;
  const currentFoods = filteredFoods.slice(indexOfFirstFood, indexOfLastFood);

  const pageCount = Math.ceil(filteredFoods.length / foodsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleCardClick = (food) => {
    setSelectedFood(food);
    if (window.innerWidth <= 768) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFood(null);
  };

  return (
    <>
      <Navbar />
      <section id="food" className="my-24 lg:mt-32">
        <div className="container">
          <h1 className="text-3xl md:text-5xl text-slate-800 font-bold text-center mb-8 md:mb-12">Daftar Makanan dan Info Nutrisi</h1>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 space-y-4">
              <input
                type="text"
                placeholder="Cari makanan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              {currentFoods.map((food) => (
                <div
                  key={food.id}
                  className="border rounded-lg p-4 shadow-md mb-4 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleCardClick(food)}
                >
                  <h2 className="text-lg md:text-xl font-semibold text-cyan-500 mb-2">{food.makanan}</h2>
                  <p>per 100 gram | Kalori : {food.kalori} kcal, Lemak : {food.lemak} gram, Protein : {food.protein} gram</p>
                </div>
              ))}
            </div>
            <div className="md:w-1/2 md:pl-6">
              {/* Tampilkan detail di desktop */}
              {selectedFood && window.innerWidth >= 768 && <FoodDetail food={selectedFood} />}
            </div>
          </div>
          {/* Tampilkan paginasi */}
          {pageCount > 1 && (
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          )}
        </div>
      </section>
      <Footer />
      {/* Tampilkan modal di mobile */}
      {showModal && <Modal food={selectedFood} onClose={handleCloseModal} />}
    </>
  );
}


// PropTypes untuk FoodDetail
FoodDetail.propTypes = {
  food: PropTypes.shape({
    id: PropTypes.number.isRequired,
    makanan: PropTypes.string.isRequired,
    kalori: PropTypes.number.isRequired,
    lemak: PropTypes.number.isRequired,
    kolesterol: PropTypes.number.isRequired,
    natrium: PropTypes.number.isRequired,
    karbohidrat: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired
  }).isRequired
};

// PropTypes untuk Modal
Modal.propTypes = {
  food: PropTypes.shape({
    id: PropTypes.number.isRequired,
    makanan: PropTypes.string.isRequired,
    kalori: PropTypes.number.isRequired,
    lemak: PropTypes.number.isRequired,
    kolesterol: PropTypes.number.isRequired,
    natrium: PropTypes.number.isRequired,
    karbohidrat: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired
  }),
  onClose: PropTypes.func.isRequired
};