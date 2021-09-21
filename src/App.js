import './App.css';
import About from './components/About/About';
import Categories from './components/Categories/Categories';
import { Link, Route } from 'react-router-dom';
import ListOfCategory from './components/ListOfCategory/ListOfCategory';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';
import CategoryResults from './components/CategoryResults/CategoryResults';

function App() {
	const [searchStr, setSearchStr] = useState('');
	const [categoryResults, setCategoryResults] = useState('');

	const getCategory = () => {
		const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchStr}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res.meals)
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
		<div className='App'>
			<header>
				<nav>
					<Link to='/'>
						<h1 className='heading'>MEAL IDEA</h1>
					</Link>
					<Link to='/Categories'>Categories</Link>
					{/* <Link to='/About'>About</Link> */}
				</nav>
			</header>

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

			<Route path='/about' component={About} />
			<Route path='/categories' component={Categories} />
			<Route path='/list/:strCategory' component={ListOfCategory} />
			<CategoryResults categoryResults={categoryResults} />
		</div>
	);
}

export default App;
