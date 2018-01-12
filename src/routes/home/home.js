import { h, Component } from 'preact';
import style from './home.css';

import Carousel from '../../components/Carousel/Carousel.js';
import withResizeHandler from '../../hoc/withResizeHandler';

const imgArray = ["../../assets/image/Initial.jpeg", "../../assets/image/Second.png", "../../assets/image/Third.jpeg"]
const imgText = ["Every site has its unique challenges, and each can be overcome.", "React.js transforms any website into a smooth experience.", "Success through communication."]

class Home extends Component {

	render () {
		let images = imgArray.map((img, index) => {
			return (
				<div class={style.crop}>
					<div class={style.overlay}></div>
					<img class={style.smallImage} src={img} />
					<div class={style.imgText}>
						{imgText[index]}
					</div>
				</div>
			);
		});

		if (typeof window !== "undefined") {
			if (window.matchMedia("(min-width: 600px)").matches) {
				images = <div><Carousel images={imgArray} animationTiming={500} /></div>;
			}
		}

		return (
			<div class={style.home}>
				{images}
				<div class={style.information}>
					<div class={style.infoItem}>
						<h1>About Me</h1>
						<p>Hello, I am a junior web developer who is quickly gaining practical experience with my own projects. I have always loved computers, and being a web developer makes that love even stronger. I am very resourceful when it comes to solving problems, and I don't give up easily. If I don't find a solution elsewhere, then I create one myself.</p>
					</div>
					<div class={style.infoItem}>
						<h1>Skills</h1>
						<p>These are some of the various skills I have learned so far. Visit the <a href="/portfolio">portfolio page</a> to see how I used these skills in my projects.</p>
						<ul>
							<li><strong>HTML, CSS, and Javascript</strong></li>
							<p>It may seem obvious, but having a strong understanding of the basics makes all the difference in the world. Everything I have learned is to make these three things more efficient. Everything relies on them. I can say I have become very familiar with HTML, CSS, and Javascript.</p>
							<li><strong>React</strong></li>
							<p>React is an awesome library/framework. Knowing how to leverage components to limit rendering on the page can make the user experience seem instantaneous. Combining HTML with Javascript via JSX is also very useful. This is probably my favorite tool to make sites with so far.</p>
							<li><strong>Node.js</strong></li>
							<p>Node.js is a Javascript runtime that gets its strength by using a non-blocking I/O model, so events can run asynchronously. Node.js also takes advantage of a massive package system called node package manager(NPM). There are tons of open source libraries to use here, made by some of the smartest programmers in the industry.</p>
							<li><strong>JQuery</strong></li>
							<p>The jQuery library allows for easy dynamic modification of elements on your site. It also does so many things normal Javascript does with much less code, like calling to the server with Ajax.</p>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default withResizeHandler(Home);
