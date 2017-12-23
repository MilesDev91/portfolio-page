import { h, Component } from 'preact';
import style from './home.css';

import Carousel from '../../components/Carousel/Carousel.js';

export default class Home extends Component {
	render () {
		return (
			<div class={style.home}>
				<div class={style.overlay}>
					<Carousel />
				</div>
				<p>hi</p>
			</div>
		);
	}
}
