import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ListOfCategories.css';

const ListOfCategory = () => {

    const [list, setList] = useState([])
    const {strCategory} = useParams()
    // console.log(strCategory)
    useEffect(() => {

       fetch(
					`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
				)
					.then((res) => res.json())
					// console.log(res)
					.then((json) => {
						setList(json.meals);
						// console.log(json.meals)
					})
					.catch(console.error);
        
    }, [])

if(!list.length) return null;

    return (
       <div class='container'>
            {list.map(meals =>{
                return (
									<div className='box'>
										<h2>{meals.strMeal}</h2>
										<img src={meals.strMealThumb} alt={meals.strMeal} />
									</div>
								);
            })}
        </div>
    );
};

export default ListOfCategory;