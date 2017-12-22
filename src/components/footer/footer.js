import preact from 'preact';
import { Link } from 'preact-router/match';
import classes from './footer.css';

const footer = (props) => (
    <div class={classes.footer}>
        <h1 >Thank you for visiting</h1>
        <p> &copy; 2017 Miles Applications</p>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/profile">Portfolio</Link>
            <Link href="/profile/john">Contact</Link>
        </nav>
    </div>
);

export default footer;