import { h } from 'preact';
import classes from './DropdownMenu.css';

const dropdownMenu = (props) => {
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

export default dropdownMenu;