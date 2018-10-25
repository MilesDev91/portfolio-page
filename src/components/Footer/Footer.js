import { h } from 'preact';
import { Link } from 'preact-router/match';
import classes from './Footer.css';
import withResizeHandler from '../../hoc/withResizeHandler';

const footer = (props) => {

    let footerContent = (
        <div class={classes.footer}>
            <h1 >Thank you for visiting</h1>
            <p> &copy; 2017 Miles Applications</p>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    );

    if (typeof window !== "undefined") {
        if (window.matchMedia("(max-width: 599px)").matches) {
            footerContent = (
                <div class={classes.footer}>
                    <p> &copy; 2017 Miles Applications</p>
                </div>
            );
        }
    }


    return (
        <div>
            {footerContent}
        </div>
    );
}

export default withResizeHandler(footer);