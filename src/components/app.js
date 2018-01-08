import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './Header/Header';

import Home from '../routes/home/home';
import Portfolio from '../routes/portfolio/portfolio';
import Contact from '../routes/contact/contact';
import Footer from './Footer/Footer';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {

	constructor(props) {
		super(props);
		if (typeof window !== "undefined") { document.title = "Miles Applications"; }
	}
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render () {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Portfolio path="/portfolio/" />
					<Contact path="/contact/" />
				</Router>
				<Footer />
			</div>
		);
	}
}
