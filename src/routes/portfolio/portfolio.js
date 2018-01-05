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
				<h1><Icon name="folder-open" /> Portfolio</h1>
				<hr></hr>
				<div class={style.portfolioItems}>
					<PortfolioItem
						imageWidth="400"
						imageHeight="300"
						image="../../assets/image/StoryBooks.png"
						link="https://evening-gorge-71276.herokuapp.com/"
						title="StoryBooks"
						content="This is some sample content for the StoryBooks app. There is a man on the roof and his name is Bob."
					/>

					<PortfolioItem
						imageWidth="400"
						imageHeight="300"
						image="../../assets/image/SharePosts.png"
						link="http://miles-applications.com/SharePosts/posts"
						title="SharePosts"
						content="This is some sample content for the SharePosts app. There is a man on the roof and his name is Bob."
					/>
				</div>
				<div class={style.portfolioItems2}>
					<PortfolioItem
						imageWidth="400"
						imageHeight="300"
						image="../../assets/image/Vidjot.png"
						link="https://mighty-brushlands-33077.herokuapp.com/"
						title="Vidjot"
						content="This is some sample content for the Vidjot app. There is a man on the roof and his name is Bob."
					/>

					<PortfolioItem
						imageWidth="400"
						imageHeight="300"
						image="../../assets/image/BurgerBuilder.png"
						link="https://myburger-31b48.firebaseapp.com/"
						title="Burger Builder"
						content="This is some sample content for the Burger Builder app. There is a man on the roof and his name is Bob."
					/>
				</div>

			</div>
		);
	}
}
