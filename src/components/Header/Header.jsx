import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header =() => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button>Close</Button>
            <span className={'username'}></span>
        </div>
    );
};

export default Header;