import React from 'react';

const CategoryResults = ({searchStr}) => {
    console.log(searchStr)
    
   
    return (
			<div>
				{/* {searchStr.map((results) => {
					return (
						<ul>
							<li>
								<h2>{results.strMeal}</h2>
							</li>
							<li>
								<img src={results.strMealThumb} alt={results.strMeal} />
							</li>
						</ul>
					);
				})} */}
			</div>
		);
};

export default CategoryResults;