import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ListOfCategories.css';
import { Link } from 'react-router-dom';

const ListOfCategory = () => {

    const [list, setList] = useState([]);
    const {strCategory} = useParams();
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
		<div className='main-wrapper'>
			<div className='contain-list'>
				{list.map((meals) => {
					return (
						<div className='box'>
							<Link to={`/details/${meals.idMeal}`} key={meals.idMeal}>
								<div className='both'>
									<h2 className='heading'>{meals.strMeal}</h2>
									<img className='img-list' src={meals.strMealThumb} alt={meals.strMeal} />
								</div>
							</Link>
						</div>
					);
				})}
			</div>
			</div>
		);
};

export default ListOfCategory;