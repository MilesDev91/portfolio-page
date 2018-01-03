import { h, Component } from 'preact';
import style from './portfolio.css';
import { Icon } from 'react-fa';
import AppThumbnail from '../../components/AppThumbnail/AppThumbnail';

export default class Profile extends Component {
	state = {
	};

	// Note: `user` comes from the URL, courtesy of our router
	render () {
		return (
			<div class={style.portfolio}>
				<h1><Icon name="folder-open" /> Portfolio</h1>
				<hr></hr>
				<AppThumbnail image="../../assets/image/StoryBooks.png" link="https://evening-gorge-71276.herokuapp.com/" />
				<AppThumbnail image="../../assets/image/SharePosts.png" link="http://miles-applications.com/SharePosts/posts" />
				<AppThumbnail image="../../assets/image/Vidjot.png" link="https://mighty-brushlands-33077.herokuapp.com/" />
				<AppThumbnail image="../../assets/image/BurgerBuilder.png" link="https://myburger-31b48.firebaseapp.com/" />
			</div>
		);
	}
}
