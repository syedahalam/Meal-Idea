import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import './Categories.css'
import ListOfCategory from '../ListOfCategory/ListOfCategory';

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
                    <Link to={`/list/${category.strCategory}`} key={category.idCategory}>
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
