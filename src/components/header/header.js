import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './header.css';
import Dropdown from 'react-dropdown';

export default class Header extends Component {
	state = {
		dropdownEnabled: true,
		options: [
			<Link activeClassName={style.active} href="/">Home</Link>,
			<Link activeClassName={style.active} href="/profile">Portfolio</Link>,
			<Link activeClassName={style.active} href="/profile/john">Contact</Link>
		]
	}

	dropdownHandler = (bool) => {
		this.setState({ dropdownEnabled: bool });
	}

	render () {
		let headerStyle = <Dropdown
			options={this.state.options}
			onChange={this._onSelect}
			value={this.state.options[0]}
			placeholder="Select an option"
		/>;

		if (window.matchMedia("(min-width:600px)").matches) {
			headerStyle = (
				<nav>
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link activeClassName={style.active} href="/profile">Portfolio</Link>
					<Link activeClassName={style.active} href="/profile/john">Contact</Link>
				</nav>
			);
		}

		return (
			<header class={style.header}>
				<h1>Miles Applications</h1>
				{headerStyle}
			</header>
		);
	}
}
