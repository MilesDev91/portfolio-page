import { h } from 'preact';
import classes from './Dropdown.css';

const dropdown = (props) => {
    let dropdown;
    if (props.show) {
        dropdown = props.options;
    }
    return (
        <div class={classes.dropdown}>
            {dropdown}
        </div>
    );
}

export default dropdown;

/*
Options
Enabled/Disabled
Requires an outside button to toggle state
*/