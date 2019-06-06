import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_nav.scss';

const Nav = (props) => {
	const componentClass = classNames(props.className, 'nav');

	return (
		<nav className={componentClass}>
			<ul className="nav__list">
				{props.children.map((n) => (
					<li className="nav__item" key={`nav_item_${n.props.to}`}>
						{n}
					</li>
				))}
			</ul>
		</nav>
	);
};

Nav.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default Nav;
