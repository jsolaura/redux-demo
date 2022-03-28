import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button
            type={props.type || 'button'}
            style={{ backgroundColor: props.backgroundColor, fontSize: props.fontSize }}
            className={`${styles.btn} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.name}
        </button>
    );
};

export default Button;