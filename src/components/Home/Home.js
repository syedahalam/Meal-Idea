import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = ({ handleSubmit, handleChange, searchStr }) => {
	console.log(searchStr);

	// const url = "https://www.youtube.com/watch?v=_gFB1fkNhXs"
	return (
		<div className='home-home'>
			{searchStr ? (
				<div className='contain-home'>
					{searchStr.map((results) => {
						return (
							<div className='main-home'>
								<Link to={`/details/${results.idMeal}`} key={results.idMeal}>
									<ul>
										<li>
											<h2>{results.strMeal}</h2>
										</li>
										<li>
											<img
												className='img-home'
												src={results.strMealThumb}
												alt={results.strMeal}
											/>
										</li>
									</ul>
								</Link>
								
							</div>
						);
					})}
				</div>
			) : (
				<form className='form' onSubmit={handleSubmit}>
					<label htmlFor='searchStr'>
						<input
							className='input'
							type='text'
							placeholder='Meal Category'
							onChange={handleChange}
							// value={categoryResults}
							id={'categoryResults'}
						/>
					</label>
					<button className='button' type='submit'>
						Look for your taste
					</button>
				</form>
			)}
		</div>
	);
};

export default Home;
