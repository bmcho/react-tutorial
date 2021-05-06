import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import styles from './CheckBox.module.css';
import classNames from 'classnames/bind"';

const cx = classNames.bind(styles);

function CheckBox({ checked, children, ...rest }) {
    return (
        // <div className={styles.checkbox}>
            <div className={cx('checkbox')}>
            <label>
                <input type="checkbox" checked={checked} {...rest}></input>
                <div className={styles.icon}>
                    {checked ? (<MdCheckBox className={styles.checked} />) :
                               (<MdCheckBoxOutlineBlank />)}
                </div>
            </label>
            <spna>{children}</spna>
        </div>
    );
}

export default CheckBox;