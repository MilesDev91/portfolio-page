import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { Icon } from 'react-fa';
import style from './Header.css';
import Dropdown from '../UI/Dropdown/Dropdown';
import Aux from '../../hoc/Auxilliary';

const options = [
	<Link activeClassName={style.active} href="/">Home</Link>,
	<Link activeClassName={style.active} href="/profile">Portfolio</Link>,
	<Link activeClassName={style.active} href="/profile/john">Contact</Link>
]

export default class Header extends Component {

	state = {
		dropdownEnabled: false
	}

	dropdownEnabledToggler = () => {
		this.setState({ dropdownEnabled: !this.state.dropdownEnabled });
	}

	render () {
		let headerStyle = (
			<nav>
				<Dropdown show={this.state.dropdownEnabled} options={options} />
				<button onClick={this.dropdownEnabledToggler}><Icon name="angle-down" size="2x" /></button>
			</nav>
		);

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
{/* {dropdown} */ } {/* {headerStyle} */ }