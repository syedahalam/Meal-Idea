import './App.css';
import Categories from './components/Categories/Categories';
import ListOfCategory from './components/ListOfCategory/ListOfCategory';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Navbar from './components/Navbar/Navbar';
import { Link, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
	const [searchStr, setSearchStr] = useState('');
	const [categoryResults, setCategoryResults] = useState('');

	const getCategory = () => {
		const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchStr}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setCategoryResults(res.meals);
			})
			.catch(console.error);
	};

	const handleChange = (event) => {
		setSearchStr(event.target.value);
		//this event.target.value gets user input
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		getCategory();
	};

	return (
		<div>
			<Navbar />

			<Route
				exact
				path='/'
				//used render if we r passing props
				render={() => (
					<Home
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						searchStr={categoryResults}
					/>
				)}
			/>

		
			<Route path='/categories' component={Categories} />
			<Route path='/list/:strCategory' component={ListOfCategory} />
			<Route path='/details/:idMeal' component={Details} />
		</div>
	);
}

export default App;
