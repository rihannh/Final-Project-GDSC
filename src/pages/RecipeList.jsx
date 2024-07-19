import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import fetchKetoDietData from '../utils/recipes';
import debounce from 'lodash.debounce';
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 10; // Jumlah item per halaman

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

  const debouncedSearch = debounce(handleSearch, 1000);

  return (
    <>
      <Navbar />
      <div className="mt-32">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe..."
          className="p-2 border border-gray-300 rounded"
        />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ul className="flex flex-wrap space-y-4 mt-4">
          {pagedRecipes.map((recipe) => (
            <li key={recipe.id} className="p-4 border rounded shadow">
              <h2 className="text-xl font-bold mb-2">{recipe.recipe}</h2>
              <img src={recipe.image} alt={recipe.recipe} className="w-52 h-auto mb-2 rounded" />
              <p><strong>Category:</strong> {recipe.category.category}</p>
              <p><strong>Preparation Time:</strong> {recipe.prep_time_in_minutes} minutes</p>
              <p><strong>Cooking Time:</strong> {recipe.cook_time_in_minutes} minutes</p>
              <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
              <p><strong>Serving:</strong> {recipe.serving}</p>
            </li>
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
