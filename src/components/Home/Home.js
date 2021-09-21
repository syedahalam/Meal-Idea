import React from 'react';
import './Home.css'
import CategoryResults from '../CategoryResults/CategoryResults';


const Home = ({handleSubmit, handleChange, searchStr}) => {
    console.log(searchStr)
    return (
			<div className='home'>
				{searchStr ? 
                 <div className='contain'>
					{searchStr.map(results => {
						return (
							<ul>
								<li>
									<h2>{results.strMeal}</h2>
								</li>
								<li>
									<img  className='img' src={results.strMealThumb} alt={results.strMeal} />
								</li>
							</ul>
						);
						
					})}
                        
				</div>
				 : 

					<form className='form' onSubmit={handleSubmit}>
						<label htmlFor='searchStr'>
							<input
								className='input'
								type='text'
								placeholder='Search your taste'
								onChange={handleChange}
								// value={categoryResults}
								id={'categoryResults'}
							/>
						</label>
						<button className='button' type='submit'>
							Look for your taste
						</button>
					</form>
                 } 
			</div>
		);
};

export default Home;