import { h } from 'preact';
import classes from './Thumbnail.css';

const thumbnail = (props) => {
    const styles = [props.class, classes.thumbnail];
    const style = styles.join(' ');

    return (
        <div class={style}>
            <a href={props.link}><img src={props.image} /></a>
        </div>
    )

};

export default thumbnail;