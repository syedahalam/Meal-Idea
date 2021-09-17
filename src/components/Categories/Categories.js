import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css'

const categoriesURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const Categories = () => {
    const [ categories, setCategories ] = useState([])
    console.log(categories)

    useEffect(() => {
        
       fetch(categoriesURL)
        .then(res=>res.json())
        .then((json)=>{
                setCategories(json.categories)
    })
        .catch(console.error);

    }, [])
	return (

		<div className='container'>
            {categories.map(category => {
                return (
                    <Link to={`/categories/${category.idCategory}`} key={category.idCategory}>
                        <div className='card'>
                            <div className='card-image'>
                                <img src={category.strCategoryThumb} alt={category.strCategory} />
                            </div>
                            <div className='card-title'>
                                <h3>{category.strCategory}</h3>
                            </div>
                        </div>
                    </Link>
            )})}
		</div>
	);
};

export default Categories;

{/* // <h1>Categories</h1>
// <button className='breakfast'>Breakfast</button>
// <button className='starters'>Starters</button>
// <button className='chicken'>Chicken</button>
// <button className='beef'>Beef</button>
// <button className='lamb'>Lamb</button>
// <button className='goat'>Goat</button>
// <button className='sea-food'>SeaFood</button>
// <button className='pork'>Pork</button>
// <button className='sides'>Sides</button>
// <button className='vegetarian'>Vegetarian</button>
// <button className='pasta'>Pasta</button>
// <button className='desserts'>Desserts</button> */}