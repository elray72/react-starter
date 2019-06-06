import React from 'react';
import { Helmet } from 'react-helmet';
import './_home.scss';

export default class Home extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<div className="home">
				<Helmet>
					<title>Home</title>
					<meta name="description" content="Feature page of React.js Boilerplate application" />
				</Helmet>
				<div className="home__inner">
					<h1 className="home__heading">React Starter</h1>
					<div className="home__logo">
						<img src="/static/img/logo/react.png" alt="React logo" />
					</div>
				</div>
			</div>
		);
	}
}
