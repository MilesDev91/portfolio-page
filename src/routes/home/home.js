import { h, Component } from 'preact';
import style from './home.css';

import Carousel from '../../components/Carousel/Carousel.js';

export default class Home extends Component {
	render () {
		return (
			<div class={style.home}>
				<Carousel />
				<p>hi</p>
			</div>
		);
	}
}
