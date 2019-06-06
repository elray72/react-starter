import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import 'sanitize.css';
import '../themes/v1/scss/style.scss';

// Components
import Header from './organisms/Header/index';
import Nav from './organisms/Nav/index';
import Home from './pages/Home/index';
import About from './pages/About/index';

const App = () => (
	<React.Fragment>
		<Helmet titleTemplate="Ray Ranola - %s" defaultTitle="Ray Ranola - Full Stack Developer">
			<meta name="description" content="" />
		</Helmet>
		<Header>
			<Nav>
				<Link to="/" className="nav__link" title="Home">
					Home
				</Link>
				<Link to="/about" className="nav__link" title="About">
					About
				</Link>
			</Nav>
		</Header>
		<main className="main">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
			</Switch>
		</main>
	</React.Fragment>
);

export default hot(module)(App);
