import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { Icon } from 'react-fa';
import style from './Header.css';
import DropdownMenu from '../UI/DropdownMenu/DropdownMenu';
import Aux from '../../hoc/Auxilliary';
import withResizeHandler from '../../hoc/withResizeHandler';

const options = [
	<Link activeClassName={style.active} href="/">Home</Link>,
	<Link activeClassName={style.active} href="/portfolio">Portfolio</Link>,
	<Link activeClassName={style.active} href="/profile/john">Contact</Link>
]

class Header extends Component {

	state = {
		dropdownEnabled: false,
		width: window.innerWidth,
		height: window.innerHeight
	}

	dropdownEnabledToggler = () => {
		this.setState({ dropdownEnabled: !this.state.dropdownEnabled });
		console.log(this.state.dropdownEnabled);
	}

	render () {
		let headerStyle = (
			<nav>
				<DropdownMenu show={this.state.dropdownEnabled} options={options} />
				<button onClick={this.dropdownEnabledToggler}><Icon name="angle-down" size="2x" /></button>
			</nav>
		);

		if (window.matchMedia("(min-width:600px)").matches) {
			headerStyle = (
				<nav>
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link activeClassName={style.active} href="/portfolio">Portfolio</Link>
					<Link activeClassName={style.active} href="/contact">Contact</Link>
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

export default withResizeHandler(Header);