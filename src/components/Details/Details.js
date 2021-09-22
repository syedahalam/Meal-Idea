import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';

const Details = () => {
	const [details, setDetails] = useState([]);
	const { idMeal } = useParams();
	console.log(idMeal);

	useEffect(() => {
		fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
			.then((res) => res.json())
			.then((res) => {
				setDetails(res.meals);
				
			})
			.catch(console.error);
	}, []);
	if (!details.length) return null;

	return (
		<div>
			{details.map((detail) => {
				console.log(details);
				return (
					<div>
						<div>
							<h1>{detail.strMeal}</h1>
							<span>
								<h3>({detail.strArea} Recipe)</h3>
							</span>
						</div>
						<img
							className='img-pic'
							src={detail.strMealThumb}
							alt={detail.strMeal}
						/>
						<p className='para'>{detail.strInstructions}</p>
						{/* <p>{detail.strYoutube}</p> */}
					</div>
				);
			})}
		</div>
	);
};

export default Details;
