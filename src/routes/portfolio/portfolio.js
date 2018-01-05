import { h, Component } from 'preact';
import style from './portfolio.css';
import { Icon } from 'react-fa';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import DropdownInfo from '../../components/UI/DropdownInfo/DropdownInfo';

export default class Portfolio extends Component {
	state = {
	};

	render () {
		return (
			<div class={style.portfolio}>
				<h1><Icon name="folder-open" /> Portfolio</h1>
				<hr></hr>

				<PortfolioItem
					image="../../assets/image/StoryBooks.png"

				/>


				<Thumbnail class={style.thumbnail} image="../../assets/image/SharePosts.png" link="http://miles-applications.com/SharePosts/posts" />
				<Thumbnail class={style.thumbnail} image="../../assets/image/Vidjot.png" link="https://mighty-brushlands-33077.herokuapp.com/" />
				<Thumbnail class={style.thumbnail} image="../../assets/image/BurgerBuilder.png" link="https://myburger-31b48.firebaseapp.com/" />
			</div>
		);
	}
}
