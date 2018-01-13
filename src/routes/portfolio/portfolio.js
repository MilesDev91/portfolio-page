import { h, Component } from 'preact';
import style from './portfolio.css';
import { Icon } from 'react-fa';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import DropdownInfo from '../../components/UI/DropdownInfo/DropdownInfo';

export default class Portfolio extends Component {

	render () {
		return (
			<div class={style.portfolio}>
				<h1><Icon name="folder-open" /> Portfolio <br /><hr></hr></h1>
				<div class={style.portfolioItems}>
					<PortfolioItem
						imageWidth="400"
						imageHeight="300"
						image="../../assets/image/StoryBooks.png"
						link="https://storybooks1.herokuapp.com/"
						title="StoryBooks"
						content="StoryBooks is an app for writing and sharing stories that I made following a Node.js/Express/MongoDB course by Brad Traversy. It uses Express with handlebars for its framework, MongoDB via mongoose as its database, and Google oAuth as its authentification. Building this app taught me a lot about handling google authentification with express."
					/>

					<PortfolioItem
						imageWidth="400"
						imageHeight="300"
						image="../../assets/image/SharePosts.png"
						link="http://miles-applications.com/SharePosts/"
						title="SharePosts"
						content="SharePosts is a simple social board app that I made during a PHP(OOP & MVC) course by Brad Traversy. It uses a custom MVC framework, a mySQL database, and uses a session based authentification system. This app taught me about the php language, htaccess, session variables, and how to use a MVC framework."
					/>
				</div>
				<div class={style.portfolioItems2}>
					<PortfolioItem
						imageWidth="400"
						imageHeight="300"
						image="../../assets/image/Vidjot.png"
						link="https://vidjot2.herokuapp.com/"
						title="Vidjot"
						content="Vidjot is an app for writing down quick video ideas. I made it following a Node.js/Express/MongoDB course by Brad Traversy. It uses Express with handlebars for its framework, MongoDB via mongoose as its database, and passport as its authentification. This app introduced me to the express framework and taught me about building authentication strategies."
					/>

					<PortfolioItem
						imageWidth="400"
						imageHeight="300"
						image="../../assets/image/BurgerBuilder.png"
						link="https://myburger-31b48.firebaseapp.com/"
						title="Burger Builder"
						content="Burger Builder is a burger building app that lets you login, build a burger, and order it. I made it following a React 16 course by Maximillian Schwarzmüller. This application uses the react framework, a firebase database, and firebase authentification. It introduced me to the React framework (and very well, it was a great course) and a few of its tools, such as redux and axios. I learned everything from lifecyle hooks to redux state management, and I liked it so much I used react to build www.miles-applications.com."
					/>
				</div>

			</div>
		);
	}
}
