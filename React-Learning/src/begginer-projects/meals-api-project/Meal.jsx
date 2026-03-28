import { useEffect, useState } from "react";
import axios from "axios";
import "./meal.css"
function Meals() {
    const [meals, setMeals] = useState([]);

    async function fetchMealsData() {
        const apiResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        console.log(apiResponse.data.meals);
        setMeals(apiResponse.data.meals);
    }
    useEffect(() => {
        fetchMealsData();
    }, []);
    return <div>
        <div className="meals-container">

            {
                meals.map((meal) => (
                    <div className="meal-container" key={meal.idMeal}>
                        <div className="image-container"><img src={meal.strMealThumb} alt={meal.strMeal} /></div>
                        <p>{meal.strMeal}</p>
                    </div>
                ))
            }
        </div>

    </div>
}

export default Meals;