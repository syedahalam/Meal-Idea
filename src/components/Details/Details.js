import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';
import ReactPlayer from 'react-player';

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
	}, [idMeal]);
	if (!details.length) return null;

	return (
		<div>
			{details.map((detail) => {
				console.log(details);
				console.log(detail.strYoutube);
				return (
					<div>
						<h1>{detail.strMeal}</h1>
						<h3>({detail.strArea} Recipe)</h3>
						<img
							className='img-pic'
							src={detail.strMealThumb}
							alt={detail.strMeal}
						/>
						<h2 className='instructions'>Instructions:</h2>
						<p className='para'>{detail.strInstructions}</p>
						<ReactPlayer className='video' url={detail.strYoutube} />
					</div>
				);
			})}
		</div>
	);
};

export default Details;
