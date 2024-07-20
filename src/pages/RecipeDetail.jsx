import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchKetoDietData from '../utils/recipes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const data = await fetchKetoDietData();
                console.log('Data fetched:', data); // Debugging data
                const selectedRecipe = data.find((r) => String(r.id) === String(id)); // Konversi ID ke string
                console.log('Selected recipe:', selectedRecipe); // Debugging selected recipe

                if (selectedRecipe) {
                    // Konversi ingredients dan steps ke array
                    const ingredients = [];
                    for (let i = 1; i <= 10; i++) {
                        if (selectedRecipe[`ingredient_${i}`]) {
                            ingredients.push({
                                ingredient: selectedRecipe[`ingredient_${i}`],
                                measurement: selectedRecipe[`measurement_${i}`]
                            });
                        }
                    }


                    const steps = [];
                    for (let i = 1; i <= 10; i++) {
                        if (selectedRecipe[`directions_step_${i}`]) {
                            steps.push(selectedRecipe[`directions_step_${i}`]);
                        }
                    }

                    setRecipe({ ...selectedRecipe, ingredients, steps });
                } else {
                    setRecipe(null);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchRecipe();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!recipe) return <p>No recipe found.</p>;

    return (
        <>
            <Navbar />
            <div className="container mt-24 lg:mt-32 mb-16">
                <div className="flex flex-col md:flex-row gap-14">
                    <figure className='md:w-1/2 rounded-lg overflow-hidden'>
                        <img src={recipe.image} alt={recipe.recipe} className="w-full h-full object-cover" />
                    </figure>
                    <div className="md:w-1/2">
                        <h1 className="text-3xl md:text-5xl font-bold">{recipe.recipe}</h1>
                        <p className='text-lg lg:text-xl text-cyan-500 mb-5'>{recipe.category.category}</p>
                        <div className="space-y-2 text-base md:text-lg">
                            <div className="grid grid-cols-2 gap-6">
                                <p className='text-slate-600 font-medium'>Difficulty</p>
                                <p>: {recipe.difficulty}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <p className='text-slate-600 font-medium'>Cooking Time</p>
                                <p> : {recipe.cook_time_in_minutes} minutes</p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <p className='text-slate-600 font-medium'>Preparation Time</p>
                                <p>: {recipe.prep_time_in_minutes} minutes</p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <p className='text-slate-600 font-medium'>Calories</p>
                                <p>: {recipe.calories} cal</p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <p className='text-slate-600 font-medium'>Fat</p>
                                <p>: {recipe.fat_in_grams} gram</p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <p className='text-slate-600 font-medium'>Carbohydrates</p>
                                <p>: {recipe.carbohydrates_in_grams} gram</p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <p className='text-slate-600 font-medium'>Protein</p>
                                <p>: {recipe.protein_in_grams} gram</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 space-y-8 md:space-y-0 mt-12">
                    <div>
                        <h2 className="text-2xl text-cyan-500 font-semibold">Ingredients</h2>
                        <ul className="list-disc pl-6 mt-2 text-base md:text-lg">
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    {ingredient.measurement ? `${ingredient.measurement} ` : ''}{ingredient.ingredient}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl text-cyan-500 font-semibold">Steps</h2>
                        <ol className="list-decimal pl-6 mt-2 text-base md:text-lg">
                            {recipe.steps.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RecipeDetail;
