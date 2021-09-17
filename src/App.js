
import './App.css';
import About from './components/About/About';
import Categories from './components/Categories/Categories';
import { Link, Route } from 'react-router-dom';

const url = 'www.themealdb.com/api/json/v1/1/categories.php';

function App() {
  return (
		<div className='App'>
			<header>
				<nav>
					<Link to='/'>
						<h1 className='heading'>MEAL IDEA</h1>
					</Link>
          <Link to='/Categories'>Categories</Link>
					<Link to='/About'>About</Link>
				</nav>
			</header>
			{/* <Route exact path='/' component={App} /> */}
			<Route path='/about' component={About} />
			<Route path='/categories' component={Categories} />
		</div>
	);
}

export default App;
