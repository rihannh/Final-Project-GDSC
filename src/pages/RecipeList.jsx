import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import fetchKetoDietData from '../utils/DataKetoDiet';
// import debounce from 'lodash.debounce';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom'

const ITEMS_PER_PAGE = 12; // Jumlah item per halaman

export default function RecipeList() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [pagedRecipes, setPagedRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchKetoDietData(query);
      setRecipes(data);
      setPageCount(Math.ceil(data.length / ITEMS_PER_PAGE)); // Hitung jumlah halaman
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    setCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (query) {
      handleSearch(query);
    } else {
      handleSearch(''); // Tampilkan semua hasil jika query kosong
    }
  }, [query]);

  useEffect(() => {
    const offset = currentPage * ITEMS_PER_PAGE;
    setPagedRecipes(recipes.slice(offset, offset + ITEMS_PER_PAGE));
  }, [currentPage, recipes]);

  return (
    <>
      <Navbar />
      <div className="container mt-24 md:mt-32 mb-24">
        <h1 className="text-3xl md:text-5xl text-slate-800 font-bold text-center mb-8 md:mb-12">Healthy Food Recipes</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe..."
          className="p-2 w-full border border-gray-300 rounded-lg mb-4 md:mb-6"
        />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-4">
          {pagedRecipes.map((recipe) => (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <li className="border rounded-lg shadow overflow-hidden h-full">
                <figure className="h-48 overflow-hidden">
                  <img src={recipe.image} alt={recipe.recipe} className="w-full h-full object-cover" />
                </figure>
                <div className="flex flex-col pt-6 pb-4 px-2 gap-4">
                  <div className="">
                    <h2 className="text-center font-semibold text-lg text-slate-800">{recipe.recipe}</h2>
                    <h3 className="text-center text-base text-slate-700">{recipe.category.category}</h3>
                  </div>
                  <div className="grid grid-cols-3 pt-4 text-center h-full">
                    <div className=" flex items-center flex-col">
                      <p className="text-sm text-slate-500">{recipe.difficulty}</p>
                      <p className="text-sm font-semibold text-cyan-500">Difficulty</p>
                    </div>
                    <div className="flex items-center flex-col">
                      <p className="text-sm text-slate-500">{recipe.cook_time_in_minutes} m</p>
                      <p className="text-sm font-semibold text-cyan-500">Cooking Time</p>
                    </div>
                    <div className="flex items-center flex-col">
                      <p className="text-sm text-slate-500">{recipe.calories}</p>
                      <p className="text-sm font-semibold text-cyan-500">Calories</p>
                    </div>
                  </div>
                </div>
              </li>
            </Link>

          ))}
        </ul>

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
      <Footer />
    </>
  );
}
