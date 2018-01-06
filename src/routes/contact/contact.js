import { h, Component } from 'preact';
import style from './contact.css';

export default class Contact extends Component {

    render () {
        return (
            <div class={style.contact}>
                <h2>If you would like to get in touch:</h2>
                <div class={style.info}>
                    <p><strong>Email:</strong> micoffin91@gmail.com</p>
                    <p><strong>Hours:</strong> Mon-Fri 9:00am-12:30pm EST</p>
                    <p class={style.hours}>Sat-Sun 11:00am-8:00pm EST</p>
                </div>
                <h4>I will try to respond outside of available hours if at all possible.</h4>
            </div>
        );
    }
}